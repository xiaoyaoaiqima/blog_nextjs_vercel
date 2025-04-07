---
title: '2025-03-21-pgsql-mac安装和vscode配置'
date: '2025-03-21'
description:
---

## pgsl背景
使用nextjs nextauth prisma, 想练习一下nextjs全栈用户鉴权。不想用mysql和sqlite了，试一下pgsql

## pgsl安装流程
1. brew install postgresql
2. 创建新用户 ： CREATE USER sam WITH PASSWORD '123456'; （每个命令都要 分号 结尾，要不然不算结束）
3. 创建新数据库： create database sam （大小写不敏感）
4. 授权用户给数据库：  GRANT ALL PRIVILEGES ON DATABASE sam TO sam;
结束

## minIO
存储文件



## etcd