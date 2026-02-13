---
title: '2025-02-18-nextjs+fastapi'
date: '2025-02-18'
description:
---

# 目的
梳理技术栈，nextjs，fastapi，postgresql

## 为什么使用fastapi
1. fastapi的event loop适合处理IO密集，而AI应用存在大量网络长延时。
2. pydantic+fastapi+openapi -- swagger调试api界面，类型提示，配置良好
3. 
## 权限管理
nextAuthjs，
### fastapi后端部分
1. 设置密码哈希上下文，用于密码hash和verify
2. 创建OAuth2_schema，绑定登陆端点 /login
3. login端点：验证用户（用户存在-密码正确）--> 创建

###

## 部署
fastapi是本身是异步单线程模型，async会开启coroutine。使用uvicorn部署，用worker开启多进程。每个进程有一个默认线程池
uvicorn main:app --host 0.0.0.0 --port 8080 --workers 4