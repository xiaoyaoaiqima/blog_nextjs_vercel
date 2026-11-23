import { isIndexable, publicUrl } from "../lib/seo";
export default function Robots() { return null; }
export function getServerSideProps({ res }) {
  res.setHeader("Content-Type","text/plain; charset=utf-8");
  res.end(isIndexable() ? "User-agent: *\nAllow: /\nSitemap: " + publicUrl("/sitemap.xml") + "\n" : "User-agent: *\nDisallow: /\n");
  return {props:{}};
}
