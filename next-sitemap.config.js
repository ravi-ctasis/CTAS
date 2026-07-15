/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.ctasis.com",
  generateRobotsTxt: true,
  sitemapSize: 50000,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
    '/robots.txt',
    '/sitemap.xml',
    '/sitemap-*.xml',
    '/manifest.webmanifest',
    '/manifest.json',
    '*.txt',
    '*.xml',
    '*.webmanifest'
  ],
  transform: async (config, path) => {
    // Custom priority and changefreq based on page importance
    const priorityMap = {
      '/': 1.0,
      '/about-us': 0.9,
      '/services': 0.9,
      '/contact-us': 0.8,
      '/hire-team': 0.8,
      '/solutions': 0.8,
      '/case-studies': 0.8,
      '/portfolios': 0.8,
      '/industries': 0.7,
      '/blog': 0.7,
      '/careers': 0.7,
      '/team': 0.6,
      '/our-story': 0.6,
      '/how-we-work': 0.6,
      '/office-locations': 0.5,
      '/life-at-ctas': 0.5,
      '/product': 0.7,
    };

    const changefreqMap = {
      '/': 'daily',
      '/about-us': 'monthly',
      '/services': 'weekly',
      '/solutions': 'weekly',
      '/case-studies': 'weekly',
      '/portfolios': 'weekly',
      '/blog': 'daily',
      '/industries': 'monthly',
      '/contact-us': 'monthly',
      '/careers': 'weekly',
      '/team': 'monthly',
      '/our-story': 'yearly',
      '/how-we-work': 'monthly',
      '/office-locations': 'monthly',
      '/life-at-ctas': 'monthly',
      '/product': 'monthly',
      '/hire-team': 'monthly',
    };

    // Determine priority and changefreq
    let priority = priorityMap[path];
    let changefreq = changefreqMap[path];

    // Skip non-page technical files entirely
    const skipExtensions = ['.txt', '.xml', '.webmanifest', '.json'];
    if (skipExtensions.some(ext => path.endsWith(ext))) {
      return null;
    }

    // Handle dynamic routes
    if (!priority) {
      if (path.startsWith('/blog/')) {
        priority = 0.7;
        changefreq = 'weekly';
      } else if (path.startsWith('/hire-team/')) {
        priority = 0.6;
        changefreq = 'monthly';
      } else if (path.startsWith('/solutions/')) {
        priority = 0.7;
        changefreq = 'weekly';
      } else if (path.startsWith('/services/')) {
        priority = 0.8;
        changefreq = 'weekly';
      } else if (path.startsWith('/portfolios/')) {
        priority = 0.6;
        changefreq = 'monthly';
      } else if (path.startsWith('/case-studies/')) {
        priority = 0.6;
        changefreq = 'monthly';
      } else if (path.startsWith('/industries/')) {
        priority = 0.6;
        changefreq = 'monthly';
      } else if (path.startsWith('/product/')) {
        priority = 0.6;
        changefreq = 'monthly';
      }
    }

    return {
      loc: path,
      changefreq: changefreq || 'monthly',
      priority: priority || 0.5,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/*',
          '/api/*',
          '/_next/*',
          '/404',
          '/500'
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'YouBot',
        allow: '/',
      },
      {
        userAgent: 'Bard',
        allow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.ctasis.com/sitemap.xml',
    ],
    additionalPaths: [
      {
        path: '/llms.txt',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
    ],
  },
};
