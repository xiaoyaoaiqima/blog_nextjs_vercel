import Layout from "../components/layout";
import Link from "next/link";
import { CaseGrid, ServiceGrid, Process, ContactPanel } from "../components/studio";
import s from "../styles/studio.module.css";
export default function Home(){return <Layout wide title="企业 AI Agent 定制与落地">
  <section className={s.hero}><div><span className={s.eyebrow}>小山科技工作室 · 垂直场景 FDE</span><h1>让营销与企业知识<br/>真正智能化<span className={s.accent}>。</span></h1><p className={s.lead}>专注红书营销 Agent 与企业智脑 Agent。深入你的业务场景，从需求诊断到生产部署，建设可运行、可评估、可持续优化的 AI 系统。</p><div className={s.actions}><Link href="/contact" className={s.primary}>聊聊你的业务需求</Link><Link href="/cases" className={s.secondary}>查看项目案例</Link></div></div>
  <div className={s.visual} aria-label="从业务需求到可验证交付"><span className={s.eyebrow}>FROM BUSINESS TO PRODUCTION</span><div className={s.visualCard}><small>业务场景</small><strong>目标 · 流程 · 约束</strong></div><div className={s.connector}/><div className={s.visualCore}><strong>AI Agent</strong><span>模型 / 知识 / 工具 / 规则</span></div><div className={s.connector}/><div className={s.visualCard}><small>生产交付</small><strong>业务结果 · 评测 · 反馈</strong></div></div></section>
  <section className={s.section}><span className={s.eyebrow}>OUR SPECIALTIES</span><h2>两项核心能力，深耕垂直业务</h2><ServiceGrid/></section>
  <section className={s.section}><span className={s.eyebrow}>SELECTED EXPERIENCE</span><h2>从真实业务场景出发</h2><CaseGrid/><p className={s.note}>案例为创始人过往参与的项目经验，已作脱敏处理。</p></section>
  <section className={s.section}><span className={s.eyebrow}>HOW WE WORK</span><h2>先验证价值，再投入规模化建设</h2><Process/></section><ContactPanel/>
</Layout>}
