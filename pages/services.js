import Layout from "../components/layout";
import { PageIntro, ServiceGrid, Process, ContactPanel } from "../components/studio";
import s from "../styles/studio.module.css";
import { services } from "../lib/studio";
import { SITE_NAME, publicUrl } from "../lib/seo";
export default function Services(){return <Layout wide title="服务能力" schema={{"@context":"https://schema.org","@graph":services.map(x=>({"@type":"Service",name:x.title,description:x.text,provider:{"@type":"Organization",name:SITE_NAME},url:publicUrl(x.href)||undefined}))}}><PageIntro label="SERVICES" title="专注两项核心 AI 能力">红书营销 Agent 与企业智脑 Agent，是小山科技深耕的两个方向。提供从咨询、定制开发到持续优化的完整 FDE 服务。</PageIntro><ServiceGrid/><section className={s.section}><h2>我们的交付方式</h2><Process/></section><ContactPanel/></Layout>}
