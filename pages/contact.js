import Layout from "../components/layout";
import { PageIntro } from "../components/studio";
import s from "../styles/studio.module.css";
export default function Contact(){return <Layout wide title="联系我们"><article className={s.detail}><PageIntro label="CONTACT" title="聊聊你的 AI 落地需求">欢迎企业业务负责人、产品团队和创业团队联系，探讨具体业务场景与可行方案。</PageIntro><section className={s.contactBox}><h2>业务合作</h2><p>微信搜索以下微信号，添加好友时请注明业务合作。</p><p className={s.wechat}>微信号：<strong>akub2026</strong></p></section><h2>初次沟通可以准备什么？</h2><ul><li>目前的业务流程及耗时较多的环节</li><li>希望 AI 帮助解决的问题</li><li>已有系统、数据或知识库</li><li>预期交付时间与验收标准</li></ul></article></Layout>}
