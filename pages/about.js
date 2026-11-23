import Layout from "../components/layout";
import { PageIntro, ContactPanel } from "../components/studio";
import s from "../styles/studio.module.css";
export default function About(){return <Layout wide title="关于我们"><article className={s.detail}><PageIntro label="ABOUT US" title="小山科技工作室">专注红书营销与企业智脑的 AI Agent 定制开发与落地工作室。</PageIntro><h2>我们的专长</h2><p>我们采用 FDE（前线部署工程）式协作，深耕小红书营销与企业知识服务两个垂直方向，与客户共同确定目标、分析约束、实现方案并验证效果。</p><h2>我们的原则</h2><ul><li>以业务结果为导向，以可验证的目标衡量交付。</li><li>将模型、规则、工具和人工协作组合成可靠的工程系统。</li><li>先以小规模原型验证价值，再逐步投入生产化。</li></ul><h2>工程经验</h2><p>创始人具有企业级 AI Agent 应用开发经验，曾参与营销内容生成、实时语音交互、智能客服与大模型评测等项目。</p></article><ContactPanel/></Layout>}
