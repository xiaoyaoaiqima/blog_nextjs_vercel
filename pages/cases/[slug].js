import Layout from "../../components/layout";
import { PageIntro, ContactPanel } from "../../components/studio";
import { cases } from "../../lib/studio";
import Link from "next/link";
import s from "../../styles/studio.module.css";
export default function CaseDetail({item}){return <Layout wide title={item.title}><article className={s.detail}><PageIntro label={item.area+" / 过往项目经验"} title={item.title}>{item.summary}</PageIntro><h2>业务挑战</h2><p>{item.problem}</p><h2>解决方案</h2><ul>{item.solution.map(x=><li key={x}>{x}</li>)}</ul><h2>系统流程</h2><ol className={s.flow}>{item.flow.map(x=><li key={x}>{x}</li>)}</ol><h2>交付价值</h2><p>{item.result}</p><h2>适用场景</h2><p>{item.application}</p><p className={s.note}>本案例为创始人过往项目经验，已对客户及业务细节脱敏。</p><Link href="/cases">返回全部案例</Link></article><ContactPanel/></Layout>}
export function getStaticPaths(){return {paths:cases.map(x=>({params:{slug:x.slug}})),fallback:false}}
export function getStaticProps({params}){const item=cases.find(x=>x.slug===params.slug);return item?{props:{item}}:{notFound:true}}
