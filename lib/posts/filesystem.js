import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const postsDirectory = path.join(process.cwd(), "posts");

export function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      if (file === "private") return;
      arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (path.extname(file) === ".md") {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

export function getRelativePath(fullPath) {
  return path.relative(postsDirectory, fullPath);
}

export function getPostIdFromPath(fullPath) {
  return getRelativePath(fullPath).replace(/\.md$/, "");
}

export function getPostPath(postId) {
  return path.join(postsDirectory, `${postId}.md`);
}

export function readPostFile(fullPath) {
  return fs.readFileSync(fullPath, "utf8");
}

export function readPostMatter(fullPath) {
  const fileContents = readPostFile(fullPath);
  return {
    fileContents,
    matterResult: matter(fileContents),
  };
}

export function sortPostsByDateDesc(a, b) {
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  if (a.date < b.date) return 1;
  return -1;
}

export function resolvePostSummary(fullPath) {
  const { matterResult } = readPostMatter(fullPath);
  const id = getPostIdFromPath(fullPath);

  return {
    id,
    ...matterResult.data,
    title: matterResult.data.title || id,
    date: matterResult.data.date || null,
  };
}

export function resolveCategoryPostSummary(fullPath) {
  const { fileContents, matterResult } = readPostMatter(fullPath);
  let title = matterResult.data.title;
  let date = matterResult.data.date;

  if (!title || !date) {
    const filename = path.basename(fullPath, ".md");
    title = title || filename;

    const firstLine = fileContents.split("\n")[0].trim();
    const dateMatch = firstLine.match(/^(\d{4})(\d{2})(\d{2})$/);
    if (dateMatch) {
      const [, year, month, day] = dateMatch;
      date = date || `${year}-${month}-${day}`;
    }
  }

  return {
    id: getPostIdFromPath(fullPath),
    title,
    date: date || null,
  };
}
