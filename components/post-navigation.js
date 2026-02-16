import Link from "next/link";
import styles from "../styles/post-navigation.module.css";

export function Breadcrumb({ category, postTitle }) {
  if (!category) return null;

  return (
    <nav className={styles.breadcrumb}>
      <Link href="/" className={styles.breadcrumbLink}>
        首页
      </Link>
      <span className={styles.breadcrumbSeparator}>/</span>
      <Link
        href={`/category/${category.slug}`}
        className={styles.breadcrumbLink}
      >
        {category.name}
      </Link>
      <span className={styles.breadcrumbSeparator}>/</span>
      <span className={styles.breadcrumbCurrent}>{postTitle}</span>
    </nav>
  );
}

export function AdjacentPosts({ previous, next }) {
  if (!previous && !next) return null;

  return (
    <div className={styles.adjacentPosts}>
      {previous && (
        <Link
          href={`/posts/${previous.id}`}
          className={styles.adjacentLink}
          style={{ textAlign: "left" }}
        >
          <span className={styles.adjacentLabel}>← 上一篇</span>
          <span className={styles.adjacentTitle}>{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link
          href={`/posts/${next.id}`}
          className={styles.adjacentLink}
          style={{ textAlign: "right" }}
        >
          <span className={styles.adjacentLabel}>下一篇 →</span>
          <span className={styles.adjacentTitle}>{next.title}</span>
        </Link>
      )}
    </div>
  );
}
