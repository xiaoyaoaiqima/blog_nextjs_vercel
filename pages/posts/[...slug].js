import Layout from "../../components/layout";
import { getAllPostIds, getPostData, getPostCategory, getAdjacentPosts } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { Breadcrumb, AdjacentPosts } from "../../components/post-navigation";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData, category, adjacentPosts }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Breadcrumb category={category} postTitle={postData.title} />
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <AdjacentPosts previous={adjacentPosts.previous} next={adjacentPosts.next} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Join the slug array to form the correct ID
  const id = params.slug.join("/");
  const postData = await getPostData(id);
  const category = getPostCategory(id);
  const adjacentPosts = getAdjacentPosts(id);

  return {
    props: {
      postData,
      category,
      adjacentPosts,
    },
  };
}
