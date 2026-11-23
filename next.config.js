// 固定正式站点域名，避免预览部署地址成为 canonical。
module.exports = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://www.samlin1010.top",
    NEXT_PUBLIC_INDEXABLE: process.env.NODE_ENV === "production" && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production") ? "true" : "false",
  },
};
