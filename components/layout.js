import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { SITE_NAME, DEFAULT_DESCRIPTION, pages, publicUrl, isIndexable, jsonLd } from "../lib/seo";
import styles from "./layout.module.css";

export const siteTitle = SITE_NAME;
const links = [["/","首页"],["/services","服务能力"],["/cases","项目案例"],["/blog","技术博客"],["/about","关于我们"]];

export default function Layout({ children, wide, title, description, path, schema, type = "website" }) {
  const router = useRouter();
  const route = path || router.pathname;
  const metadata = pages[route] || {};
  const pageTitle = (metadata.title || title || SITE_NAME) + (route === "/" || title || metadata.title ? " | " + SITE_NAME : "");
  const pageDescription = description || metadata.description || DEFAULT_DESCRIPTION;
  const canonical = publicUrl(route);
  const image = publicUrl("/share-card.png");
  return <div className={styles.site}>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription}/>
      <meta name="robots" content={isIndexable() ? "index, follow" : "noindex, nofollow"}/>
      {canonical && <link rel="canonical" href={canonical}/>}
      <meta property="og:site_name" content={SITE_NAME}/>
      <meta property="og:title" content={pageTitle}/>
      <meta property="og:description" content={pageDescription}/>
      <meta property="og:type" content={type}/>
      <meta property="og:locale" content="zh_CN"/>
      {canonical && <meta property="og:url" content={canonical}/>}
      {image && <meta property="og:image" content={image}/>}
      {image && <meta property="og:image:width" content="1200"/>}
      {image && <meta property="og:image:height" content="630"/>}
      {image && <meta property="og:image:alt" content="小山科技工作室：红书营销 Agent 与企业智脑 Agent"/>}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={pageTitle}/>
      <meta name="twitter:description" content={pageDescription}/>
      {image && <meta name="twitter:image" content={image}/>}
      <link rel="icon" href="/mountain.svg" type="image/svg+xml"/>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(schema)}}/>}
    </Head>
    <header className={styles.header}><div className={styles.headerInner}>
      <Link className={styles.brand} href="/"><img src="/mountain.svg" alt=""/><span>小山科技<small>XIAOSHAN STUDIO</small></span></Link>
      <nav className={styles.nav} aria-label="网站导航">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}<Link className={styles.contact} href="/contact">联系我们</Link></nav>
    </div></header>
    <main className={wide ? styles.wide : styles.container}>{children}</main>
    <footer className={styles.footer}><div><strong>{siteTitle}</strong><p>从业务场景到 AI 生产系统。</p></div><div><Link href="/contact">业务合作</Link> · <Link href="/blog">技术博客</Link><p><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">浙ICP备2025157442号</a></p></div></footer>
  </div>;
}
