import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

// Helper function to recursively get all markdown files
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (path.extname(file) === ".md") {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Helper function to get relative path from posts directory
function getRelativePath(fullPath) {
  return path.relative(postsDirectory, fullPath);
}

export function getSortedPostsData() {
  // Get all markdown files recursively
  const filePaths = getAllMarkdownFiles(postsDirectory);

  const allPostsData = filePaths.map((fullPath) => {
    // Get the relative path to use as ID
    const relativePath = getRelativePath(fullPath);
    // Remove ".md" from file name to get id
    const id = relativePath.replace(/\.md$/, "");
    // Read markdown file as string
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const filePaths = getAllMarkdownFiles(postsDirectory);
  return filePaths.map((fullPath) => {
    const relativePath = getRelativePath(fullPath);
    const id = relativePath.replace(/\.md$/, "");
    // Split the path into an array for catch-all routing
    const slug = id.split("/");
    return {
      params: {
        slug: slug,
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// Get list of categories with their metadata
const CATEGORIES = [
  { slug: "career", name: "Career", description: "职业发展 & 专业成长" },
  { slug: "tech", name: "Tech", description: "技术学习 & 编程教程" },
  { slug: "personal", name: "Personal", description: "个人反思 & 生活思考" },
  { slug: "business", name: "Business", description: "商业分析 & 市场洞察" },
  { slug: "academic", name: "Academic", description: "学术研究 & 学习笔记" },
  {
    slug: "investment",
    name: "Investment",
    description: "投资理财 & 财富思考",
  },
  { slug: "general", name: "General", description: "综合杂谈 & 其他内容" },
];

export function getCategories() {
  return CATEGORIES;
}

// Get posts for a specific category
export function getPostsByCategory(categorySlug) {
  const categoryPath = path.join(postsDirectory, categorySlug);

  // Check if category directory exists
  if (
    !fs.existsSync(categoryPath) ||
    !fs.statSync(categoryPath).isDirectory()
  ) {
    return [];
  }

  // Get all markdown files in category and its subdirectories
  const filePaths = getAllMarkdownFiles(categoryPath);

  const postsData = filePaths.map((fullPath) => {
    const relativePath = getRelativePath(fullPath);
    const id = relativePath.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // If no frontmatter, extract date from filename or content
    let title = matterResult.data.title;
    let date = matterResult.data.date;

    if (!title || !date) {
      // Extract filename as title (remove path and extension)
      const filename = path.basename(fullPath, ".md");
      title = title || filename;

      // Try to extract date from first line of content
      const firstLine = fileContents.split("\n")[0].trim();
      // Match YYYYMMDD format
      const dateMatch = firstLine.match(/^(\d{4})(\d{2})(\d{2})$/);
      if (dateMatch) {
        const [, year, month, day] = dateMatch;
        date = date || `${year}-${month}-${day}`;
      }
    }

    return {
      id,
      title,
      date,
    };
  });

  // Sort by date
  const sortedPosts = postsData
    .filter((post) => post.date)
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      return -1;
    });

  return sortedPosts;
}

// Get category statistics (slug, name, post count)
export function getCategoryStats() {
  return CATEGORIES.map((category) => {
    const categoryPath = path.join(postsDirectory, category.slug);

    // Count posts in category and its subdirectories
    let count = 0;
    if (
      fs.existsSync(categoryPath) &&
      fs.statSync(categoryPath).isDirectory()
    ) {
      const filePaths = getAllMarkdownFiles(categoryPath);
      count = filePaths.length;
    }

    return {
      slug: category.slug,
      name: category.name,
      description: category.description,
      postCount: count,
    };
  });
}

// Get the category for a specific post
export function getPostCategory(postId) {
  const fullPath = path.join(postsDirectory, `${postId}.md`);
  const relativePath = getRelativePath(fullPath);
  const pathParts = relativePath.split(path.sep);

  // The first part of the path is the category slug
  const categorySlug = pathParts[0];
  return CATEGORIES.find((c) => c.slug === categorySlug) || null;
}

// Get adjacent posts (previous and next) for a post in the same category
export function getAdjacentPosts(postId) {
  const category = getPostCategory(postId);
  if (!category) return { previous: null, next: null };

  const posts = getPostsByCategory(category.slug);

  // Find current post index
  const currentIndex = posts.findIndex((post) => post.id === postId);
  if (currentIndex === -1) return { previous: null, next: null };

  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
}
