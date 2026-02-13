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
