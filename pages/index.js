import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/header.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>大模型应用开发，Web前后端开发，模型微调</p>
        <div className={styles.links}>
          <a href='/cv' className={styles.link}>
            美化版简历
          </a>
          <a href='/rawcv' className={styles.link}>
            最新版简历
          </a>
        </div>
        <p className={styles.social}>博客：山姆林(知乎)，山姆林LLM(小红书)</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
