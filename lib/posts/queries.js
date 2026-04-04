import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

import { CATEGORIES, getCategories } from "./categories";
import {
  getAllMarkdownFiles,
  getPostIdFromPath,
  getPostPath,
  getRelativePath,
  postsDirectory,
  readPostMatter,
  resolveCategoryPostSummary,
  resolvePostSummary,
  sortPostsByDateDesc,
} from "./filesystem";

export function getSortedPostsData() {
  return getAllMarkdownFiles(postsDirectory)
    .map((fullPath) => resolvePostSummary(fullPath))
    .sort(sortPostsByDateDesc);
}

export function getAllPostIds() {
  return getAllMarkdownFiles(postsDirectory).map((fullPath) => {
    const id = getPostIdFromPath(fullPath);

    return {
      params: {
        slug: id.split("/"),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = getPostPath(id);
  const { matterResult } = readPostMatter(fullPath);
  const processedContent = await remark().use(html).process(matterResult.content);

  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
  };
}

export { getCategories };

export function getPostsByCategory(categorySlug) {
  const categoryPath = path.join(postsDirectory, categorySlug);

  if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
    return [];
  }

  return getAllMarkdownFiles(categoryPath)
    .map((fullPath) => resolveCategoryPostSummary(fullPath))
    .sort(sortPostsByDateDesc);
}

export function getCategoryStats() {
  return CATEGORIES.map((category) => {
    const categoryPath = path.join(postsDirectory, category.slug);
    let count = 0;

    if (fs.existsSync(categoryPath) && fs.statSync(categoryPath).isDirectory()) {
      count = getAllMarkdownFiles(categoryPath).length;
    }

    return {
      slug: category.slug,
      name: category.name,
      description: category.description,
      postCount: count,
    };
  });
}

export function getPostCategory(postId) {
  const relativePath = getRelativePath(getPostPath(postId));
  const categorySlug = relativePath.split(path.sep)[0];

  return CATEGORIES.find((category) => category.slug === categorySlug) || null;
}

export function getAdjacentPosts(postId) {
  const category = getPostCategory(postId);
  if (!category) return { previous: null, next: null };

  const posts = getPostsByCategory(category.slug);
  const currentIndex = posts.findIndex((post) => post.id === postId);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
}
