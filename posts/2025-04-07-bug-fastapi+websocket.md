---
title: '2025-04-07-bug-fastapi+websocket'
date: '2025-04-01'
description:
---




fastapi websocket。 建立连接，导致fastapi进程使用ctrl+c关闭不了
因为被websocket阻塞了。前端代码虽然关闭，浏览器页面没有关，ws还在连接中



