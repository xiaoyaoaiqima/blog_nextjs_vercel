export const headlineTags = [
  "AI 应用开发",
  "LLM / Agent / RAG",
  "Multi-Agent / Workflow",
  "Prompt Engineering / Eval",
  "ASR / TTS / Memory / Tool Calling",
  "FastAPI / Python / Kubernetes",
];

export const resumeProfile = {
  name: "邬臻林",
  documentTitle: "CV",
  jobTitle: "AI 应用开发工程师 | LLM / Agent / RAG",
  photoSrc: "me.png",
  photoAlt: "邬臻林的照片",
  pdfFileName: "邬臻林-简历.pdf",
  contactItems: [
    { text: "19858312003", href: "tel:19858312003" },
    { text: "1428293926@qq.com", href: "mailto:1428293926@qq.com" },
    { text: "杭州" },
  ],
};

export const summaryText = `
- 熟悉用AI工程（工作流搭建，多智能体协作，上下文工程），深度使用AI编程，
- 熟悉社媒内容生成，语音交互，数据分析等Agent业务。
`;

export const educationData = [
  {
    school: "杭州电子科技大学",
    timeTag: "2021年09月 - 2025年07月",
    degreeInfo: "数字媒体技术（软件工程方向）",
    achievements: [
      "GPA：4.3 / 5.00（专业前10%）",
      "荣誉：大学生创新创业训练项目（国家级）、互联网+创业大赛省金奖、乡村振兴电子商务竞赛省奖",
      "学生工作：体育协会外联部，负责宣传招新与商业合作（寻求校外资金，联系校友企业）",
    ],
  },
];

export const otherInfo = [
  { label: "语言技能", value: "托福100+，熟练听说读写" },
  { label: "爱好", value: "健身，骑行，球类运动" },
];

export const resumeFooter = {
  icpLabel: "浙ICP备2025157442号",
  icpHref: "https://beian.miit.gov.cn/",
};

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
        timeTag: "2025年11月 - 至今",
        description:
          "面向品牌营销内容生产场景，从 0 到 1 设计 Multi-Agent 平台，将社媒专家经验、品牌风格与行业知识沉淀为可复用能力，支撑内容生成、审核、改写的一体化自动化流程。",
        achievements: [
          "设计 Multi-Agent 协作流程，将内容生成、审核与改写拆解为独立 Agent 并通过工作流编排，实现内容生产流程标准化与稳定输出。",
          "构建营销语料与 Prompt 模块化机制，将人设、卖点、痛点等内容生产要素结构化为可复用语料，通过动态注入与组合提升生成内容的可控性与多样性。",
          "完成系统工程化落地，基于 FastAPI + Kubernetes 实现多 Agent 服务拆分与调度，支撑多品牌、多场景的扩展与复用。",
        ],
      },
      {
        projectName: "儿童智能陪伴 AI Agent（语音多模态）",
        jobTitle: "AI 应用开发工程师",
        timeTag: "2025年5月 - 2025年11月",
        description:
          "构建多场景语音 Agent 系统，支持聊天、游戏与英语学习等交互，重点解决多场景路由、知识准确性与语音体验问题。",
        achievements: [
          "设计多场景 Agent 架构，基于 Coze Workflow 构建 20+ 场景工作流，通过 LLM 意图识别与动态路由实现能力扩展，用户日均会话 30+ 次。",
          "构建知识与记忆系统，基于 RAG 提升回答准确性并降低幻觉，同时设计短期上下文与长期记忆机制，实现个性化交互。",
          "优化语音交互链路与系统成本，改进 ASR / TTS（断句、热词、缓存等），实现 CER < 3%，单轮成本约 0.01 元，支撑规模化使用。",
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
        projectName: "大模型评测平台（社交聊天场景）",
        jobTitle: "大模型应用开发",
        techStack: "LLM / Eval / Prompt Engineering / 数据标注 / FastAPI",
        timeTag: "2024年11月 - 2025年4月",
        description: "构建 LLM 评测体系，支撑角色认知等能力优化。",
        achievements: [
          "开发基于Dify的评测平台，将业务目标拆解为评测指标，构建并迭代评测集，沉淀问题分类与归因机制，实现模型评测自动化",
          "探索基于 badcase 的 Prompt 自动优化流程，将模型迭代从人工反馈驱动升级为评测驱动，优化周期从周级缩短至天级",
        ],
      },
      {
        projectName: "智能客服与工单协同系统",
        jobTitle: "大模型应用开发",
        timeTag: "2024年11月 - 2025年4月",
        description:
          "基于 LLM 搭建智能客服与工单系统，优化用户提问到问题处理的流程，实现问题自动分流与处理，减少人工介入。",
        achievements: [
          "设计用户问题分类与路由机制，基于 Dify Workflow + RAG 将问题自动分流至知识库回复、工单处理或群组协同，打通“提问→处理”流程。",
          "建立问题数据沉淀与迭代机制，对未命中和低质量回复进行分类归因（如知识缺失、路由错误等），并通过知识库更新与分类策略调整持续优化系统效果。",
        ],
      },
    ],
  },
];
