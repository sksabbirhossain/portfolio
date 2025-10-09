/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sk-sabbir-hossain-portfolio.vercel.app",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"], // optional if needed
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      "https://sk-sabbir-hossain-portfolio.vercel.app/sitemap.xml",
    ],
  },
};
