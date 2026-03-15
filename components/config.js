export const summaryText = `
- 学习适应能力强，涉足多个岗位，大模型应用开发，前后端Web开发，数据分析，爬虫。
- 熟悉AI技术栈，理解实际业务需求，协助完成公司项目的开发、测试到落地的全生命周期管理，推动算法模型落地。 `;


export const experienceData = [
    // ========== 锐鲨 ==========
    {
      type: "work",
      company: "锐鲨",
      timeTag: "2025年5月 - 至今",
      projects: [
        {
          projectName: "营销内容生成 Multi-Agent 平台",
          techStack: "LLM / Multi-Agent / Prompt Engineering / FastAPI / Kubernetes / Plugin System",
          timeTag: "2025年11月 - 至今",
          description: "构建营销内容生成 Multi-Agent 平台，将社媒专家经验产品化，实现营销内容自动生成、审核与改写，提高品牌社媒内容生产效率。",
          achievements: [
            "<strong>Multi-Agent 内容生产系统：</strong>基于社媒内容 SOP 设计生文 / 审核 / 改写 Agent 协作架构，实现营销内容自动化生产流程。",
            "<strong>营销知识结构化：</strong>构建营销关键词语料体系，将社媒专家经验结构化，为 LLM 内容生成提供领域知识支持。",
            "<strong>Prompt Engineering 优化：</strong>设计营销内容 Prompt 模板体系（品牌风格 / 内容结构 / 语气控制），提升生成内容稳定性。",
            "<strong>插件化能力体系：</strong>设计 Agent Plugin System，支持品牌与行业能力复用，例如品牌风格插件与行业语料插件。",
            "<strong>平台工程化部署：</strong>基于 FastAPI + Kubernetes 微服务架构实现 Agent 服务调度与管理。"
          ]
        },
        {
          projectName: "儿童智能陪伴 AI Agent 系统（多模态语音交互）",
          techStack: "LLM / AI Agent / RAG / Coze Workflow / FastAPI / ASR / TTS / 向量数据库",
          timeTag: "2025年5月 - 2025年11月",
          description: "基于儿童故事 IP 构建多模态儿童陪伴 AI Agent，支持语音聊天、互动游戏与英语学习场景，设计低成本高稳定语音对话系统。",
          achievements: [
            "<strong>Agent Workflow 架构设计：</strong>基于 Coze 构建 20+ 场景 Agent 工作流（聊天 / 游戏 / 英语学习），通过 LLM 意图识别 + 动态路由调度实现多场景对话能力扩展，用户日均会话 30+ 次。",
            "<strong>RAG 知识系统构建：</strong>构建儿童知识库（故事 / 英语学习 / 儿童百科），通过向量检索 + LLM 生成提升回答准确性并减少模型幻觉。",
            "<strong>语音对话系统优化：</strong>优化 TTS 数字幻觉、断句策略与音频缓存机制；构建 ASR 测试集与热词表提升识别效果，实现单轮语音回复成本约 0.01 元，CER < 3%。",
            "<strong>AI Memory System 设计：</strong>构建短期上下文 + 长期用户记忆架构，通过语义触发机制动态加载长期记忆，避免上下文膨胀。",
            "<strong>Agent Tool System 设计：</strong>实现 Tool Calling 机制，支持英语翻译、单词解释、故事推荐等工具能力扩展。"
          ]
        }
      ]
    },
    // ========== 网易 ==========
    {
      type: "work",
      company: "网易",
      timeTag: "2024年7月 - 2025年4月",
      projects: [
        {
          projectName: "智能客服 & 大模型评测系统",
          jobTitle: "大模型应用开发",
          techStack: "LLM / Dify / RAG / FastAPI / Prompt Engineering",
          timeTag: "2024年11月 - 2025年4月",
          description: "在社交聊天应用场景，基于 Dify 框架开发大模型评测系统，探索 LLM 应用构建 SOP；基于 Dify 建立智能客服系统，涵盖用户鉴权、需求提交，解决平台运维迭代不规范、不透明和低效的问题。",
          achievements: [
            "<strong>大模型评测系统：</strong>搭建原始数据链路；搭建数据打标平台，积累评测样本；梳理大模型评测原理和逻辑；迭代数据打标和评测的方法论；深度了解业务（记忆系统、角色认知、亲密度）。",
            "<strong>智能客服系统：</strong>设计智能交互漏斗；基于 Dify + Workflow + RAG 实现语义理解增强引擎；构建服务执行中枢，实现工单自动化、会话群组创建、知识库精准回复；基于 FastAPI 搭建 Web 应用，建立聊天和工单管理系统。"
          ]
        },
        {
          projectName: "数据报表 & 办公自动化",
          jobTitle: "数据开发",
          techStack: "SQL / Python / 爬虫 / 大数据平台",
          timeTag: "2024年7月 - 2024年11月",
          description: "基于大数据平台的数据报表制作与自动化处理，基于爬虫实现 Web 端自动化治理。",
          achievements: [
            "<strong>数据报表：</strong>目的是预测商机、展示重要数据；理解业务数据指标，编写 SQL 取数。",
            "<strong>办公自动化：</strong>对离线文件进行批量化处理；通过爬虫程序模拟人工操作，完成数据采集、配置修改等任务。"
          ]
        }
      ]
    }
  ];
