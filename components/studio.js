import Link from "next/link";
import { cases, services, stages } from "../lib/studio";
import s from "../styles/studio.module.css";
export function PageIntro({label,title,children}){return <section className={s.pageIntro}><span className={s.eyebrow}>{label}</span><h1>{title}</h1><p className={s.lead}>{children}</p></section>}
export function CaseGrid(){return <div className={s.grid}>{cases.map(x=><Link className={s.card} key={x.slug} href={"/cases/"+x.slug}><span className={s.tag}>{x.area}</span><h3>{x.title}</h3><p>{x.summary}</p><span className={s.cardLink}>查看案例</span></Link>)}</div>}
export function ServiceGrid(){return <div className={s.serviceGrid}>{services.map(x=><Link className={s.card} key={x.title} href={x.href}><span className={s.tag}>核心能力</span><h3>{x.title}</h3><p>{x.text}</p><span className={s.cardLink}>了解解决方案</span></Link>)}</div>}
export function Process(){return <ol className={s.process}>{stages.map(([title,desc])=><li key={title}><strong>{title}</strong><span>{desc}</span></li>)}</ol>}
export function ContactPanel(){return <section className={s.contactPanel}><div><span className={s.eyebrow}>LET'S TALK</span><h2>你的业务，有哪些流程值得用 AI 重做？</h2><p>一起梳理真实需求、约束和可验证的交付目标。</p></div><Link className={s.primary} href="/contact">联系工作室</Link></section>}
