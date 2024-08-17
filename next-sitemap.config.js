/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://padukuhan-ngreyung.vercel.app',
    generateRobotsTxt: true,
    changefreq: 'hourly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin/*', '/login'],
    alternateRefs: [
      {
        href: 'https://padukuhan-ngreyung.vercel.app/es',
        hreflang: 'es',
      },
      {
        href: 'https://padukuhan-ngreyung.vercel.app/en',
        hreflang: 'en',
      },
    ],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
        { userAgent: '*', disallow: '/admin/*' },
        { userAgent: '*', disallow: '/login' },
      ],
      additionalSitemaps: [
        'https://padukuhan-ngreyung.vercel.app/sitemap-0.xml',
        'https://padukuhan-ngreyung.vercel.app/sitemap-1.xml',
      ],
    },
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: path === '/' ? 1.0 : 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    },
    autoLastmod: true,
    outDir: './public',
  }