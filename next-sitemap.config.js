/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sk-sabbir-hossain-portfolio.vercel.app",
  generateRobotsTxt: true, // generate robots.txt
  sitemapSize: 5000, // max URLs per sitemap
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"], // exclude any dynamic/external pages if needed
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/", // allow all
      },
    ],
    additionalSitemaps: [], // only add external sitemaps if needed
  },
};
