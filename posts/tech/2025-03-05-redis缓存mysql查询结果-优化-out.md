---
title: '2025-03-05-redis缓存mysql查询结果-优化-out'
date: '2025-03-05'
description:
---

# 目的

提升缓存的命中率。保持数据库缓存一致性

# 实操
## 使用cacheable注解
Cacheable，CachePut，CacheDelete
缺点，粒度太细了，无法命中缓存。例如业务A查询语句是 select name,role,type from user where id=2, 业务场景A已经缓存了id=2对应的name、role、type数据，
但redis中的key是findOneUser::name&role&type::id=2
findOneUser::name::id=2
findOneUser::name&phone&mail::id=2，都不一样，不同的业务不能通用。
我需要业务场景B在查询id=2对应的name时，直接取缓存即可，而业务场景C也只需要查询id=2对应的phone和mail字段，进一步减少所要查询的字段数量。

## 拆分查询语句
例如select name,role,type from user where id=2
我拆成select name from user where id=2，select role from user where id=2，select type from user where id=2

## 解析查询，按字段缓存
但是查询语句肯定不能拆，本来一个连接，现在三个连接，效率太低，就要自定义注解，解析查询语句，按照字段缓存，而不是全部缓存。
解析到没缓存，则重新组建sql。

## 删除缓存
一般会使用监听binlog的方法来删除缓存，那么如何在收到一条binlog后，快速定位并删除相关的缓存数据？
这里采用在缓存数据的同时建立索引的方式，在收到binlog后，根据索引，找到影响的key并删除

## 构建索引
索引是一个树状图的结构，根节点下连接的是表节点，表节点下连接的是where条件节点，where条件节点下连接的是select字段节点，select节点对应的值就是上文中提到的key。
如果有多个where条件，则将它们按照升序/降序排列，这是为了防止出现排列组合的情况，如下：
select name, role, type, phone, mail from user where id=2 and role=1
按照升序，role排在id之后，那么role=1就是id=2的子节点，在查询语句执行后，构造的索引树如下：

## 具体操作 ： 删除
在收到数据更新的binlog后，解析以获取表名、被更新的字段、被更新字段更新前的值、被更新字段更新后的值以及其余字段值。
1. 通过解析出的数据构造key，如果key存在则删除，在存在删除操作的情况下，进行索引树的删除操作；
2. 索引树的删除从下向上执行，所以叶子节点最先被删除；
3. 在子节点被删除的情况下，如果父节点此时已不存在任何的子节点，则删除父节点。

## 具体操作： 更新
构造索引树节点key时需要结合Redis的索引来进行，如我们其余字段值，在缓存索引里并不存在，就无需进一步构造。
修改user表id=2对应的数据nick_name字段“小易” -> “小金”：
构造索引树节点的方向和删除过程相反，是从上到下的过程
1. 在根节点MFO中判断是否存在user，存在则构造MFO:user，并进行下一步
2. 将字段名称升序排列，分别是id、nick_name、phone、role
3. 分别判断MFO:user中是否存在id=92，nick_name=小易，nick_name=小金， phone=13260808093，role=1
4. 参照上文，这里是存在id=92的，所以构造MFO:user&id=92，进行下一步；
5. 不存在name=小易、phone=13260808093，存在role=1、nick_name，构造MFO:user&id=92&role=1；MFO:user&id=92:nick_name，MFO:user&id=92:nick_name已经是叶子节点了，忽略，继续向下追溯MFO:user&id=92&role=1
6. MFO:user&id=92&role=1下存在nick_name，构造MFO:user&id=92&role=1:nick_name
7. 可以发现3~6实际上是一个递归的过程，递归的深度取决于索引树的深度
8. 收集上面成功追溯到叶子节点的过程数据
本例中，收集到的过程数据如下，表格代表一个{key, value}的数组

##  数据新增&数据删除 - 缓存删除过程
数据新增的过程和数据更新类似，只是在binlog数据的获取上，没有了指定被更新的字段，因此所有的字段都需要被视为被更新的字段，或者能够追溯到叶子节点的父节点即可停止。

## 局限
目前这种方式只能应用在精准查询，也就是唯一匹配中，不适用范围查询的情况（如分页，模糊查询等），原因是在缓存的自动化删除上对列表的查询不友好，容易误删（参考MySQL自身的缓存删除方式）。