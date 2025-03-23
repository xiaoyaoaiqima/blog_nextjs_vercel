---
title: '2025-02-13-项目分包理解Java-Python-out'
date: '2024-12-20'
description:
---

# 目的
梳理我对Web项目分包的理解


## Springboot项目分层
DAO层：
DAO层叫数据访问层，全称为data access object，属于一种比较底层，比较基础的操作，具体到对于某个表的增删改查，也就是说某个DAO一定是和数据库的某一张表一一对应的，其中封装了增删改查基本操作，建议DAO只做原子操作，增删改查。

Service层：
Service层叫服务层，被称为服务，粗略的理解就是对一个或多个DAO进行的再次封装，封装成一个服务，所以这里也就不会是一个原子操作了，需要transaction控制。

Controller层：
Controller负责请求转发，接受页面过来的参数，传给Service处理，接到返回值，再传给页面。

总结：
DAO面向表，Service面向业务。后端开发时先数据库设计出所有表，然后对每一张表设计出DAO层，然后根据具体的业务逻辑进一步封装DAO层成一个Service层，对外提供成一个服务。
为什么要这样分包，首先是约定俗成，方便大家上手项目，熟悉结构。其次是便于测试等其他因素

## springboot依赖注入
自动注入功能非常强大，是项目分层的好兄弟。service层不需要管dao层实现，autowired一个对象，调用方法就好了。而且不需要用config类或者xml，springboot自动管理，只要你有注释。

## python
python我喜欢面向函数
depends很好，依赖注入。def a(token = Depends(func b)), a会拿到b的结果
当然python也可以分三层，定义一堆对象。但python项目的初衷就是快，项目并不复杂，链路不长。所以一个路由函数里面，直接包含controller，service了，dao单独定义。使用pydantic模型，校验类型，秒变强类型语言！另外pydantic读.env也很方便。

## 其他
utils是工具，config是配置（数据库，redis，其他）


