import { MetadataRoute } from 'next'

/**
 * robots.txt — keep it simple and Google-focused.
 *
 * Google ignores Allow: / (it's the default), but including it
 * makes the file self-documenting.
 *
 * Only disallow paths that genuinely should NOT be crawled.
 * Every extra Disallow reduces crawl budget.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            // Block known bad bots that waste crawl resources
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
            },
            {
                userAgent: 'facebookexternalhit',
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
        sitemap: 'https://www.ctasis.com/sitemap.xml',
        host: 'https://www.ctasis.com',
    }
}
