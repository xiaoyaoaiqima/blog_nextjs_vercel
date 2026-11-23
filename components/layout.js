import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export const siteTitle = "小山科技工作室";
const links = [["/","首页"],["/services","服务能力"],["/cases","项目案例"],["/blog","技术博客"],["/about","关于我们"]];

export default function Layout({ children, wide, title }) {
  return <div className={styles.site}>
    <Head><title>{title ? title + " | " + siteTitle : siteTitle}</title><meta name="description" content="专注红书营销 Agent 与企业智脑 Agent 的 FDE 定制开发与落地服务。"/><link rel="icon" href="/mountain.svg" type="image/svg+xml"/></Head>
    <header className={styles.header}><div className={styles.headerInner}>
      <Link className={styles.brand} href="/"><img src="/mountain.svg" alt=""/><span>小山科技<small>XIAOSHAN STUDIO</small></span></Link>
      <nav className={styles.nav} aria-label="网站导航">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}<Link className={styles.contact} href="/contact">联系我们</Link></nav>
    </div></header>
    <main className={wide ? styles.wide : styles.container}>{children}</main>
    <footer className={styles.footer}><div><strong>{siteTitle}</strong><p>从业务场景到 AI 生产系统。</p></div><div><Link href="/contact">业务合作</Link> · <Link href="/blog">技术博客</Link><p><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">浙ICP备2025157442号</a></p></div></footer>
  </div>;
}
