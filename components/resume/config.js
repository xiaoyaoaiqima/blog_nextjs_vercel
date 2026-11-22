export const headlineTags = [];

export const resumeProfile = {
  name: "邬臻林",
  documentTitle: "CV",
  jobTitle: "AI 应用开发 / 全栈开发（偏后端）",
  photoSrc: "me.png",
  photoAlt: "邬臻林的照片",
  pdfFileName: "邬臻林-简历.pdf",
  contactItems: [
    { text: "19858312003", href: "tel:19858312003" },
    { text: "1428293926@qq.com", href: "mailto:1428293926@qq.com" },
    { text: "杭州" },
    { text: "GitHub", href: "https://github.com/xiaoyaoaiqima" },
  ],
};

export const summaryText = `
- 杭州电子科技大学计算机类本科，近 3 年研发经历（含实习），近 2 年专注 AI 应用开发，作为核心开发交付 2 个 ToB Agent 项目。
- 具备服务端与全栈交付能力，主要使用 Python、FastAPI 开发业务系统与接口，熟悉 MySQL、Redis，具备数据建模、异步任务调度、并发控制及线上排障经验；可使用 React、TypeScript 开发前端，熟悉 Docker、Kubernetes 部署。
- 具备企业级 Agent 应用设计与落地经验，熟悉 LangGraph，能够完成多 Agent 编排、知识检索与上下文管理、工具调用设计，并通过评测与 Trace 分析优化质量、成本和执行效率。
`;

export const educationData = [
  {
    school: "杭州电子科技大学",
    timeTag: "2021年09月 - 2025年06月",
    degreeInfo: "数字媒体技术｜本科",
    achievements: [
      "互联网+ 省级银奖、国家级大学生创新创业训练项目、参与论文和专利多篇。",
    ],
  },
];

export const otherInfo = [];

export const resumeFooter = {
  icpLabel: "浙ICP备2025157442号",
  icpHref: "https://beian.miit.gov.cn/",
};

export const experienceData = [
  // ========== 锐鲨 ==========
  {
    type: "work",
    company: "锐鲨科技（AI 企业服务）",
    role: "大模型应用开发工程师",
    timeTag: "2025年5月 - 2026年11月",
    projects: [
      {
        projectName: "营销生文 Agent 平台",
        description: "主导开发面向品牌社媒的多 Agent 内容生产平台，支持规模化内容交付。",
        achievements: [
          "Agent Runtime 设计：将业务任务生命周期与 Agent 执行解耦，由调度器根据任务状态编排不同 Agent，各 Agent 独立执行并回写结果，实现基于任务状态的多 Agent 协作。",
          "知识库与上下文管理：将素材、创作模板和审核标准结构化管理，按品牌及活动限定检索范围，按 Agent 职责组装上下文并限制工具权限。",
          "Agent 评测与优化：构建评测集，以可用率、单篇成本及耗时对比不同方案；根据评测结果将生成 Agent 自检改为独立审核，并结合 Trace 优化上下文及模型分配。",
          "内容质量控制：设计规则校验、LLM 审核与定向修订流程，通过运营抽检和 AI 分析判断整批内容是否达标，减少人工审核工作量。",
        ],
      },
      {
        projectName: "儿童语音交互 Agent",
        description: "核心开发面向儿童陪伴与学习的实时语音 Agent。",
        achievements: [
          "实时多轮交互控制：将意图识别与状态转移分离，由状态机控制场景切换和异常复位；主导英语学习工作流，以程序管理学习进度与主题轮转。",
          "用户记忆管理：主导异步会话摘要及用户画像缓存设计，对话时仅注入所需画像信息，避免全量历史消息进入上下文。",
          "语音缓存与降本：主导整句问答与回复短句的分层缓存设计，协作完成语音链路拆分，降低单轮对话成本。",
        ],
      },
    ],
  },
  // ========== 网易 ==========
  {
    type: "work",
    company: "网易云音乐",
    role: "大模型应用开发实习",
    timeTag: "2024年8月 - 2025年4月",
    projects: [
      {
        projectName: "大模型评测与数据标注平台",
        description: "独立开发面向社交聊天产品的多轮对话 Agent 评测与数据标注平台。",
        achievements: [
          "评测平台建设：设计任务、样本、标注及评测结果分层数据模型，开发评测和标注前后端，支持样本复用及跨版本对比。",
          "Agent 效果评测与归因：将对话质量拆解为口语化、情感、人设及多轮一致性等评价维度，结合人工评分和 LLM-as-Judge 定位模型、提示词及记忆问题，并进行同批样本复测。",
          "评测数据治理：组织业务人员共建评测集，通过双人独立标注及分歧复核统一评价标准。",
        ],
      },
    ],
  },
  {
    type: "work",
    company: "恒生电子",
    role: "后端开发实习",
    timeTag: "2024年2月 - 2024年6月",
    projects: [
      {
        projectName: "基金交易系统日志模块",
        achievements: [
          "日志系统优化：参与基金交易系统日志模块优化，覆盖 Web 前后端，服务于交易链路的排障与问题定位。",
        ],
      },
    ],
  },
];
