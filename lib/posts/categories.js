export const CATEGORIES = [
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
  { slug: "skill", name: "Skill", description: "技能提升 & 实用工具" },
  { slug: "thinking", name: "Thinking", description: "思维模型 & 认知升级" },
  { slug: "general", name: "General", description: "综合杂谈 & 其他内容" },
];

export function getCategories() {
  return CATEGORIES;
}
