import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link'
export function MarkdownRenderer() {
  return (
    <div className="markdown-content">
      <Markdown>{`
## 联系方式
- **个人网站**：samlin1010.top
- **简历**：[个人网站-简历](https://www.samlin1010.top/cv)
- **电话**：📱 19858312003
- **邮箱**：📧 1428293926@qq.com
- **地址**：📍 杭州

## 个人总结
- 学习适应能力强，涉足多个岗位，大模型应用开发，前后端Web开发，数据分析，爬虫。
- 熟悉AI技术栈，理解实际业务需求，协助完成公司项目的开发、测试到落地的全生命周期管理，推动算法模型落地

## 工作经历
### 网易云音乐 - 创新工程部
**大模型应用开发工程师** | 2024年11月 - 至今
- **大模型评测系统**
    - 构建高效数据打标平台，评测样本积累，为模型优化提供高质量数据基础。
    - 通过“Prompt工程优化+模型微调+Badcase分析”闭环流程，深入探索大模型评测机制，提升模型在意图理解、上下文连贯性等维度的表现。
    - 结合人工评估，持续迭代评测方法论，显著提升评测效率与精准度。
    - 深入研究记忆模型、角色认知、知识库构建等核心技术，探索多轮对话中的长期记忆存储与动态知识更新机制。
- **智能客服系统**
    - 采用“dify + workflow + RAG”技术组合，搭建智能客服bot，利用dify导出api。
    - 深入参与内部提效工程，实现工单自动化、会话群组创建功能和智能客服结合。
    - 基于Fastapi结合Nextjs搭建web应用，利用开源框架Ant Design X，编写会话数据管理逻辑，整合dify的api请求逻辑

### 网易 - 智企
**数据开发工程师** | 2024年07月 - 2024年11月
- **数据报表**：设计并开发数据报表，使用SQL完成数据提取与清洗。
- **办公自动化**：开发Python脚本实现离线文件批量处理与任务调度，提升效率；基于Selenium构建爬虫系统，自动化数据采集与配置修改，减少人工干预。

### 字节跳动
**数据开发工程师** | 2024年05月 - 2024年07月
- 基于Flask + Vue搭建可视化模型训练平台，支持快速迭代与项目上线
- 使用Linux服务器，完成Vue项目的生产环境构建（build）与部署。使用supervisor管理Flask应用进程，实现自动重启与故障恢复，保障服务稳定性。

### 恒生电子股份有限公司
**后端开发工程师（TA创新研发部）** | 2024年02月 - 2024年05月
- **Springboot+Vue web应用搭建**
基于SpringBoot+Vue搭建客户配置管理系统，集成d3.js实现数据可视化图表展示。
- **数据库操作优化**：
    - 针对高并发场景，引入Redis缓存，使用setex设置缓存过期时间，减少数据库查询压力，避免缓存雪崩。
    - 封装数据库操作为装饰器模式，统一缓存逻辑，提升代码复用性；通过日志记录优化数据库配置，提升系统性能。
- **前端安全措施**：
    - 使用Vue Router导航守卫实现路由权限验证，动态拦截未授权访问。
    - 结合Vuex全局状态管理，动态控制页面元素显示，确保操作权限安全。
- **分布式一致性**：
    - 采用Redisson分布式锁，解决多客户端并发操作的数据一致性问题。
    - 使用evalsha执行Lua脚本，保证Redis操作的原子性，提升系统稳定性。

## 教育背景
**杭州电子科技大学** | 2021年09月 - 2025年07月
- **专业**：计算机类 - 数字媒体技术（本科）
- **GPA**：4.3 / 5.00（专业前10%）
- **荣誉**：
    - 大学生创新创业训练项目（国家级）
    - 互联网 + 创业大赛省金奖
    - 乡村振兴电子商务竞赛省奖
- **学生工作**：体育协会外联部，负责宣传招新与商业合作

## 其他信息
- **语言技能**：托福100+，具备熟练的英语听说读写能力。
- **兴趣爱好**：热爱健身、骑行以及各类球类运动 
      
      `}</Markdown>
      <style jsx>{`
          .markdown-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
          }
        `}</style>
    </div>
  );
}

export default function RawCV() {
  return (
    <div>
      <Link
        href="/"
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          padding: '8px 15px',
          backgroundColor: '#3498db',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}
      >
        <i className="fas fa-arrow-left" style={{ marginRight: '8px' }} />
        返回首页
      </Link>
      <MarkdownRenderer />

    </div>
  );
}