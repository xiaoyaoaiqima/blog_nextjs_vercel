export const headlineTags = [
  "AI 应用开发",
  "LLM / Agent / RAG",
  "Multi-Agent / Workflow",
  "Prompt Engineering / Eval",
  "ASR / TTS / Memory / Tool Calling",
  "FastAPI / Python / Kubernetes",
];

export const summaryText = `
- AI Agent架构设计（工作流编排、工具调用、记忆机制、多 Agent 协作、RAG 知识检索与注入）
- LLMops能力（模型评测，RLHF，私有化部署）
- AI 多模态交互应用（语音对话系统设计、ASR/TTS 语音链路优化）
`





export const experienceData = [
  // ========== 锐鲨 ==========
  {
    type: "work",
    company: "锐鲨",
    role: "AI 应用开发工程师",
    timeTag: "2025年5月 - 至今",
    projects: [
      {
        projectName: "营销内容生成 Multi-Agent 平台",
        jobTitle: "负责平台方案设计与核心能力建设",
        techStack:
          "LLM / Multi-Agent / Prompt Engineering / FastAPI / Kubernetes / Plugin System",
        timeTag: "2025年11月 - 至今",
        description:
          "面向品牌营销内容生产场景，从 0 到 1 设计 Multi-Agent 平台，将社媒专家经验、品牌风格与行业知识沉淀为可复用能力，支撑内容生成、审核、改写的一体化自动化流程。",
        focusTags: [
          "Multi-Agent 架构",
          "知识工程",
          "Prompt 模板体系",
          "插件化复用",
          "Kubernetes",
        ],
        achievements: [
          "<strong>Multi-Agent 协作架构：</strong>基于社媒内容 SOP 设计生文 / 审核 / 改写 Agent 协作链路，将内容生产流程标准化，提升生成效率与产出一致性。",
          "<strong>营销知识结构化：</strong>构建营销关键词、行业语料和品牌风格知识模块，为 LLM 提供可注入的领域上下文，降低内容空泛和跑偏概率。",
          "<strong>Prompt Engineering 体系：</strong>设计覆盖品牌调性、内容结构、平台差异和语气控制的 Prompt 模板体系，提升生成内容的稳定性与可控性。",
          "<strong>插件化能力复用：</strong>设计 Agent Plugin System，支持品牌能力与行业语料按需插拔，提升多客户、多场景复用效率。",
          "<strong>平台工程化落地：</strong>基于 FastAPI + Kubernetes 实现服务拆分、调度与部署，支撑 Agent 服务管理和后续平台化迭代。",
        ],
      },
      {
        projectName: "儿童智能陪伴 AI Agent 系统（多模态语音交互）",
        jobTitle: "负责多场景 Agent 与语音交互系统设计",
        techStack:
          "LLM / AI Agent / RAG / Coze Workflow / FastAPI / ASR / TTS / 向量数据库",
        timeTag: "2025年5月 - 2025年11月",
        description:
          "围绕儿童故事 IP 设计多模态语音陪伴 Agent，覆盖语音聊天、互动游戏和英语学习等核心场景，重点解决多场景路由、知识准确性、语音体验与单轮成本控制问题。",
        focusTags: [
          "20+ Agent 场景",
          "RAG",
          "ASR / TTS 优化",
          "长期记忆",
          "单轮成本约 0.01 元",
        ],
        achievements: [
          "<strong>Agent Workflow 架构：</strong>基于 Coze 构建 20+ 场景 Agent 工作流，通过 LLM 意图识别 + 动态路由实现聊天 / 游戏 / 英语学习等能力扩展，用户日均会话 30+ 次。",
          "<strong>RAG 知识系统：</strong>构建儿童知识库（故事 / 英语学习 / 儿童百科），通过向量检索 + LLM 生成提升回答准确性，降低模型幻觉。",
          "<strong>语音链路优化：</strong>优化 TTS 数字幻觉、断句策略与音频缓存机制，构建 ASR 测试集和热词表提升识别效果，实现单轮语音回复成本约 0.01 元，CER < 3%。",
          "<strong>Memory 架构设计：</strong>构建短期上下文 + 长期用户记忆架构，通过语义触发动态加载长期记忆，避免上下文膨胀并增强个性化体验。",
          "<strong>Tool Calling 扩展：</strong>实现英语翻译、单词解释、故事推荐等工具能力接入，为 Agent 能力扩展预留标准化接口。",
        ],
      },
    ],
  },
  // ========== 网易 ==========
  {
    type: "work",
    company: "网易",
    role: "数据开发工程师（前期） / 大模型应用开发工程师（后期）",
    timeTag: "2024年7月 - 2025年4月",
    projects: [
      {
        projectName: "大模型评测平台",
        jobTitle: "大模型应用开发",
        techStack: "LLM / Eval / Prompt Engineering / 数据标注 / FastAPI",
        timeTag: "2024年11月 - 2025年4月",
        description:
          "面向社交聊天产品搭建大模型评测平台，覆盖数据采集、标注、评测与 badcase 回流闭环，为记忆系统、角色认知、亲密度等核心能力优化提供基础设施。",
        focusTags: ["评测体系", "数据打标", "Badcase 闭环", "业务指标映射"],
        achievements: [
          "<strong>评测基础设施搭建：</strong>打通原始数据链路并搭建数据打标平台，持续沉淀评测样本，为模型效果分析和版本对比提供数据基础。",
          "<strong>评测方法论沉淀：</strong>梳理评测指标、流程与 badcase 分类，迭代“数据标注 - 评测 - 问题定位 - 优化回归”闭环方法论，提升模型迭代效率。",
          "<strong>业务能力映射：</strong>将记忆系统、角色认知、亲密度等业务目标拆解为可评估能力项，增强模型评测与真实业务效果的一致性。",
          "<strong>内部协同支撑：</strong>支撑算法和运营团队开展模型效果分析与持续优化，沉淀可复用的大模型评测 SOP。",
        ],
      },
      {
        projectName: "智能客服与工单协同系统",
        jobTitle: "大模型应用开发",
        techStack: "Dify / Workflow / RAG / FastAPI / Prompt Engineering",
        timeTag: "2024年11月 - 2025年4月",
        description:
          "面向平台运维和需求提交流程搭建智能客服与工单中枢，解决流程不规范、响应不透明和处理效率低的问题，推动内部提效场景落地。",
        focusTags: ["智能客服", "RAG", "工单自动化", "服务执行中枢"],
        achievements: [
          "<strong>智能交互漏斗设计：</strong>梳理用户咨询到问题分流的交互路径，基于 Dify Workflow + RAG 构建语义理解增强引擎，提升问题识别和知识匹配效果。",
          "<strong>服务执行中枢建设：</strong>打通工单自动化、会话群组创建、知识库精准回复等关键链路，实现从咨询到执行的闭环处理流程。",
          "<strong>Web 管理端落地：</strong>基于 FastAPI 搭建聊天与工单管理应用，支撑内部运维提效和流程可视化。",
          "<strong>平台化演进准备：</strong>结合业界产品调研推动二期规划，为后续平台化改造和能力扩展预留空间。",
        ],
      },
      {
        projectName: "数据报表与办公自动化",
        jobTitle: "数据开发",
        techStack: "SQL / Python / 爬虫 / 大数据平台",
        timeTag: "2024年7月 - 2024年11月",
        description:
          "负责业务数据报表和办公自动化工具开发，支撑商机预测、关键指标展示以及 Web 端重复操作自动化。",
        focusTags: ["SQL 报表", "Python 自动化", "爬虫治理", "业务指标"],
        achievements: [
          "<strong>业务报表开发：</strong>对齐业务指标口径，编写 SQL 完成数据抽取、清洗与报表开发，支撑商机预测和关键经营指标展示。",
          "<strong>批处理自动化：</strong>开发 Python 脚本完成离线文件批量处理，降低重复人工操作成本。",
          "<strong>Web 端治理自动化：</strong>通过爬虫程序模拟人工操作，完成数据采集、配置修改等治理任务，提升执行效率与稳定性。",
        ],
      },
    ],
  },
];
