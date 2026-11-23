import Layout from "../components/layout";
import { PageIntro } from "../components/studio";
import Link from "next/link";
import { getCategoryStats } from "../lib/posts";
import styles from "../styles/categories.module.css";
export default function Blog({categories}){return <Layout wide title="技术博客"><PageIntro label="INSIGHTS" title="技术博客">AI 应用、工程实践与商业观察，记录真实问题与持续学习。</PageIntro><div className={styles.grid}>{categories.map(x=><Link href={"/category/"+x.slug} key={x.slug} className={styles.card}><div className={styles.cardHeader}><h3 className={styles.categoryName}>{x.name}</h3><span className={styles.postCount}>{x.postCount}</span></div><p className={styles.description}>{x.description}</p></Link>)}</div></Layout>}
export function getStaticProps(){return {props:{categories:getCategoryStats()}}}
