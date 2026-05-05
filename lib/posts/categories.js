export const CATEGORIES = [
  { slug: "tech", name: "Tech", description: "技术学习 & 编程教程" },
  { slug: "business", name: "Business", description: "商业分析 & 市场洞察" },
  { slug: "academic", name: "Academic", description: "学术研究 & 学习笔记" },
];

export function getCategories() {
  return CATEGORIES;
}
