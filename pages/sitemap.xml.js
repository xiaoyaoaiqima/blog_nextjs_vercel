import { getAllPostIds, getCategories } from "../lib/posts";
import { cases } from "../lib/studio";
import { pages, postPath, publicUrl, isIndexable } from "../lib/seo";

export default function Sitemap() { return null; }
export function getServerSideProps({ res }) {
  if (!isIndexable()) { res.statusCode = 404; res.end(); return {props:{}}; }
  const paths = [...Object.keys(pages), ...cases.map(x=>"/cases/"+x.slug), ...getCategories().map(x=>"/category/"+x.slug), ...getAllPostIds().map(x=>postPath(x.params.slug.join("/")))];
  const escape = value => value.replace(/&/g, "&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + [...new Set(paths)].map(path=>"<url><loc>"+escape(publicUrl(path))+"</loc></url>").join("") + "</urlset>";
  res.setHeader("Content-Type","application/xml; charset=utf-8");
  res.end(xml);
  return {props:{}};
}
