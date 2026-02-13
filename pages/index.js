import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/header.module.css";
import categoryStyles from "../styles/categories.module.css";
import { getCategoryStats } from "../lib/posts";
import Link from "next/link";

export default function Home({ categories }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>大模型应用开发，Web前后端开发，模型微调</p>
        <div className={styles.links}>
          <a href="/cv" className={styles.link}>
            美化版简历
          </a>
          <a href="/rawcv" className={styles.link}>
            最新版简历
          </a>
        </div>
        <p className={styles.social}>博客：山姆林(知乎)，山姆林LLM(小红书)</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>知识库</h2>
        <div className={categoryStyles.grid}>
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.slug}
              className={categoryStyles.card}
            >
              <div className={categoryStyles.cardHeader}>
                <h3 className={categoryStyles.categoryName}>{category.name}</h3>
                <span className={categoryStyles.postCount}>
                  {category.postCount}
                </span>
              </div>
              <p className={categoryStyles.description}>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const categories = getCategoryStats();
  return {
    props: {
      categories,
    },
  };
}
