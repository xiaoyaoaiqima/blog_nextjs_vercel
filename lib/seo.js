export const SITE_NAME = "小山科技工作室";
export const DEFAULT_DESCRIPTION = "小山科技工作室专注红书营销 Agent、企业智脑 Agent，提供企业 AI Agent 定制开发与 FDE 落地服务。";

// 没有正式域名时不生成猜测的绝对地址。
export function siteOrigin() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return null;
  try {
    const url = new URL(configured);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : null;
  } catch { return null; }
}
export function publicUrl(path = "/") {
  const origin = siteOrigin();
  return origin ? origin + path : null;
}
export function isIndexable() {
  return process.env.NEXT_PUBLIC_INDEXABLE === "true" && !!siteOrigin();
}
export function postPath(id) {
  return "/posts/" + id.split("/").map(encodeURIComponent).join("/");
}
export const pages = {
  "/": {title:"企业 AI Agent 定制开发与 FDE 落地", description:DEFAULT_DESCRIPTION},
  "/services": {title:"AI Agent 定制开发服务｜红书营销与企业智脑",description:"红书营销 Agent、企业智脑 Agent 的咨询、定制开发、部署与持续优化服务，从业务诊断到生产交付。"},
  "/cases": {title:"AI Agent 项目案例｜营销、企业知识与语音交互",description:"了解小山科技创始人的脱敏项目经验：小红书内容自动化、企业知识库与智能客服、实时语音交互。"},
  "/blog": {title:"AI Agent 技术博客与工程实践",description:"分享 AI Agent、RAG、LLM 评测、工程实践与商业观察的技术文章。"},
  "/about": {title:"关于小山科技工作室｜垂直场景 FDE",description:"小山科技工作室深耕小红书营销与企业知识服务，以 FDE 式协作将 AI 系统落地到真实业务。"},
  "/contact": {title:"联系我们｜AI Agent 业务合作",description:"联系小山科技工作室，讨论红书营销、企业智脑与 AI Agent 定制开发需求。"},
};
export function jsonLd(value) {
  // 防止数据中的 HTML 字符打断 script 标签。
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
