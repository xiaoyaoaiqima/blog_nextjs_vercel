import React from "react";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

const rawCvMarkdown = `
## 联系方式
- **个人网站**：samlin1010.top
- **简历链接**：[个人网站-简历](https://www.samlin1010.top/cv)
- **电话**：19858312003
- **邮箱**：1428293926@qq.com
- **地址**：杭州

## 个人总结
- 1 年+ AI 应用开发经验，持续参与营销内容生成、儿童智能陪伴、智能客服和大模型评测等场景，能够围绕业务目标完成从需求拆解、方案设计到上线落地的全链路交付。
- 具备 LLM / Agent / Multi-Agent / RAG / Prompt Engineering / Memory / Tool Calling / ASR / TTS / Eval 等实践经验，能够设计稳定、可控、可复用的 AI 系统。
- 兼具 Python / FastAPI / Next.js / SQL / 自动化工程能力，能在产品、算法与工程之间高效协同，兼顾效果、成本、稳定性与迭代效率。

## 工作经历
### 锐鲨
**AI 应用开发工程师** | 2025年5月 - 至今

#### 营销内容生成 Multi-Agent 平台
**时间**：2025年11月 - 至今  
**技术栈**：LLM / Multi-Agent / Prompt Engineering / FastAPI / Kubernetes / Plugin System

面向品牌营销内容生产场景，从 0 到 1 设计 Multi-Agent 平台，将社媒专家经验、品牌风格与行业知识沉淀为可复用能力，支撑内容生成、审核、改写的一体化自动化流程。

- **Multi-Agent 协作架构**：基于社媒内容 SOP 设计生文 / 审核 / 改写 Agent 协作链路，将内容生产流程标准化，提升生成效率与产出一致性。
- **营销知识结构化**：构建营销关键词、行业语料和品牌风格知识模块，为 LLM 提供可注入的领域上下文，降低内容空泛和跑偏概率。
- **Prompt Engineering 体系**：设计覆盖品牌调性、内容结构、平台差异和语气控制的 Prompt 模板体系，提升生成内容的稳定性与可控性。
- **插件化能力复用**：设计 Agent Plugin System，支持品牌能力与行业语料按需插拔，提升多客户、多场景复用效率。
- **平台工程化落地**：基于 FastAPI + Kubernetes 实现服务拆分、调度与部署，支撑 Agent 服务管理和后续平台化迭代。

#### 儿童智能陪伴 AI Agent 系统（多模态语音交互）
**时间**：2025年5月 - 2025年11月  
**技术栈**：LLM / AI Agent / RAG / Coze Workflow / FastAPI / ASR / TTS / 向量数据库

围绕儿童故事 IP 设计多模态语音陪伴 Agent，覆盖语音聊天、互动游戏和英语学习等核心场景，重点解决多场景路由、知识准确性、语音体验与单轮成本控制问题。

- **Agent Workflow 架构**：基于 Coze 构建 20+ 场景 Agent 工作流，通过 LLM 意图识别 + 动态路由实现聊天 / 游戏 / 英语学习等能力扩展，用户日均会话 30+ 次。
- **RAG 知识系统**：构建儿童知识库（故事 / 英语学习 / 儿童百科），通过向量检索 + LLM 生成提升回答准确性，降低模型幻觉。
- **语音链路优化**：优化 TTS 数字幻觉、断句策略与音频缓存机制，构建 ASR 测试集和热词表提升识别效果，实现单轮语音回复成本约 0.01 元，CER < 3%。
- **Memory 架构设计**：构建短期上下文 + 长期用户记忆架构，通过语义触发动态加载长期记忆，避免上下文膨胀并增强个性化体验。
- **Tool Calling 扩展**：实现英语翻译、单词解释、故事推荐等工具能力接入，为 Agent 能力扩展预留标准化接口。

### 网易
**数据开发工程师（前期） / 大模型应用开发工程师（后期）** | 2024年7月 - 2025年4月

#### 大模型评测平台
**时间**：2024年11月 - 2025年4月  
**技术栈**：LLM / Eval / Prompt Engineering / 数据标注 / FastAPI

面向社交聊天产品搭建大模型评测平台，覆盖数据采集、标注、评测与 badcase 回流闭环，为记忆系统、角色认知、亲密度等核心能力优化提供基础设施。

- **评测基础设施搭建**：打通原始数据链路并搭建数据打标平台，持续沉淀评测样本，为模型效果分析和版本对比提供数据基础。
- **评测方法论沉淀**：梳理评测指标、流程与 badcase 分类，迭代“数据标注 - 评测 - 问题定位 - 优化回归”闭环方法论，提升模型迭代效率。
- **业务能力映射**：将记忆系统、角色认知、亲密度等业务目标拆解为可评估能力项，增强模型评测与真实业务效果的一致性。
- **内部协同支撑**：支撑算法和运营团队开展模型效果分析与持续优化，沉淀可复用的大模型评测 SOP。

#### 智能客服与工单协同系统
**时间**：2024年11月 - 2025年4月  
**技术栈**：Dify / Workflow / RAG / FastAPI / Prompt Engineering

面向平台运维和需求提交流程搭建智能客服与工单中枢，解决流程不规范、响应不透明和处理效率低的问题，推动内部提效场景落地。

- **智能交互漏斗设计**：梳理用户咨询到问题分流的交互路径，基于 Dify Workflow + RAG 构建语义理解增强引擎，提升问题识别和知识匹配效果。
- **服务执行中枢建设**：打通工单自动化、会话群组创建、知识库精准回复等关键链路，实现从咨询到执行的闭环处理流程。
- **Web 管理端落地**：基于 FastAPI 搭建聊天与工单管理应用，支撑内部运维提效和流程可视化。
- **平台化演进准备**：结合业界产品调研推动二期规划，为后续平台化改造和能力扩展预留空间。

#### 数据报表与办公自动化
**时间**：2024年7月 - 2024年11月  
**技术栈**：SQL / Python / 爬虫 / 大数据平台

负责业务数据报表和办公自动化工具开发，支撑商机预测、关键指标展示以及 Web 端重复操作自动化。

- **业务报表开发**：对齐业务指标口径，编写 SQL 完成数据抽取、清洗与报表开发，支撑商机预测和关键经营指标展示。
- **批处理自动化**：开发 Python 脚本完成离线文件批量处理，降低重复人工操作成本。
- **Web 端治理自动化**：通过爬虫程序模拟人工操作，完成数据采集、配置修改等治理任务，提升执行效率与稳定性。

## 教育背景
**杭州电子科技大学** | 2021年09月 - 2025年07月
- **专业**：计算机类 - 数字媒体技术（本科）
- **GPA**：4.3 / 5.00（专业前10%）
- **荣誉**：大学生创新创业训练项目（国家级）、互联网+创业大赛省金奖、乡村振兴电子商务竞赛省奖
- **学生工作**：体育协会外联部，负责宣传招新与商业合作

## 其他信息
- **语言技能**：托福100+，具备熟练的英语听说读写能力
- **兴趣爱好**：健身、骑行、球类运动
`;

export function MarkdownRenderer() {
  return (
    <div className="markdown-content">
      <Markdown>{rawCvMarkdown}</Markdown>
      <style jsx>{`
        .markdown-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          line-height: 1.7;
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
          position: "fixed",
          top: "20px",
          left: "20px",
          padding: "8px 15px",
          backgroundColor: "#3498db",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          zIndex: 1000
        }}
      >
        <i className="fas fa-arrow-left" style={{ marginRight: "8px" }} />
        返回首页
      </Link>
      <MarkdownRenderer />
      <footer style={{ textAlign: "center", fontSize: "13px", color: "#888", marginTop: "2rem" }}>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">浙ICP备2025157442号</a>
      </footer>
    </div>
  );
}
