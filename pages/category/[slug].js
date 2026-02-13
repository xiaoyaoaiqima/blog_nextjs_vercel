import Head from "next/head";
import Layout from "../../components/layout";
import { getCategories, getPostsByCategory } from "../../lib/posts";
import categoryStyles from "../../styles/categories.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../../components/date";

export default function Category({ categoryData, posts }) {
  if (!categoryData) {
    return (
      <Layout>
        <div className={categoryStyles.container}>
          <p className={categoryStyles.emptyState}>Category not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={categoryStyles.container}>
        <div className={categoryStyles.categoryHeader}>
          <Link href="/" className={categoryStyles.backLink}>
            ← Back to Categories
          </Link>
          <h1 className={categoryStyles.categoryTitle}>{categoryData.name}</h1>
          <p className={categoryStyles.categoryDescription}>
            {categoryData.description}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className={categoryStyles.postList}>
            {posts.map((post) => (
              <Link
                href={`/posts/${post.id}`}
                key={post.id}
                className={categoryStyles.postItem}
              >
                <h3 className={categoryStyles.postTitle}>{post.title}</h3>
                <small className={categoryStyles.postDate}>
                  <Date dateString={post.date} />
                </small>
              </Link>
            ))}
          </div>
        ) : (
          <p className={categoryStyles.emptyState}>
            No posts in this category yet.
          </p>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const categories = getCategories();
  return {
    paths: categories.map((category) => ({
      params: { slug: category.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categories = getCategories();
  const categoryData = categories.find((c) => c.slug === params.slug);
  const posts = getPostsByCategory(params.slug);

  return {
    props: {
      categoryData,
      posts,
    },
  };
}
