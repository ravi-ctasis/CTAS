import { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blog'
import { allPagesData } from '@/data/hire-page-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.ctasis.com'

    // ──────────────────────────────────────────────
    // 1. HOMEPAGE  (priority 1.0 — the anchor)
    // ──────────────────────────────────────────────
    const homepage: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
    ]

    // ──────────────────────────────────────────────
    // 2. TOP-LEVEL PAGES  (priority 0.9)
    //    These are the pages Google will pick for sitelinks.
    //    Keep this list short — only your most important pages.
    // ──────────────────────────────────────────────
    const topLevelPages: MetadataRoute.Sitemap = [
        '/about-us',
        '/services',
        '/contact-us',
        '/portfolios',
        '/case-studies',
        '/blog',
        '/careers',
        '/team',
    ].map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // ──────────────────────────────────────────────
    // 3. SECONDARY PAGES  (priority 0.7)
    // ──────────────────────────────────────────────
    const secondaryPages: MetadataRoute.Sitemap = [
        '/our-story',
        '/how-we-work',
        '/office-locations',
        '/life-at-ctas',
        '/solutions',
        '/hire-team',
    ].map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // ──────────────────────────────────────────────
    // 4. SERVICE PAGES  (priority 0.8)
    // ──────────────────────────────────────────────
    const servicePages: MetadataRoute.Sitemap = [
        'ai-ml',
        'amazon-services',
        'amazon-sp-api-integration',
        'api-development',
        'cloud-solutions',
        'complete-design-packages',
        'custom-software',
        'devops',
        'e-commerce-solutions',
        'ecommerce-workflow-automation',
        'marketplace',
        'mean-stack',
        'mern-stack',
        'mobile-apps',
        'ui-ux',
        'web-design',
        'web-development',
    ].map(slug => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // ──────────────────────────────────────────────
    // 5. INDUSTRY PAGES  (priority 0.7)
    // ──────────────────────────────────────────────
    const industryPages: MetadataRoute.Sitemap = [
        'banking-finance',
        'education',
        'enterprise',
        'food-beverage',
        'gaming',
        'healthcare',
        'real-estate',
        'retail',
        'transportation',
        'wellness',
    ].map(slug => ({
        url: `${baseUrl}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // ──────────────────────────────────────────────
    // 6. SOLUTION PAGES  (priority 0.7)
    // ──────────────────────────────────────────────
    const solutionPages: MetadataRoute.Sitemap = [
        'dating-app',
        'doctor-appointment-app',
        'e-commerce',
        'fitness-app',
        'food-delivery-app',
        'handyman-services-app',
        'hotel-booking-app',
        'influencer-marketing-app',
        'mobile-wallet-app',
        'nft-marketplace',
        'parcel-delivery-app',
        'property-finder-app',
        'restaurant-app',
        'social-networking-app',
        'sports-tracking-app',
        'taxi-booking',
        'ticket-booking-app',
        'travel-app',
        'voice-chat-app',
    ].map(slug => ({
        url: `${baseUrl}/solutions/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // ──────────────────────────────────────────────
    // 7. PORTFOLIO PAGES  (priority 0.6)
    // ──────────────────────────────────────────────
    const portfolioPages: MetadataRoute.Sitemap = [
        'amazon-fbm-fba-operations-automation-platform',
        'amazon-order-management-automation-system',
        'amazon-product-management-automation-platform',
        'automated-amazon-review-feedback-management',
        'automated-product-data-extraction-platform',
        'automated-sku-identifier-framework',
        'book-store',
        'canva-smart-image-upload-kit',
        'e-commerce-platform',
        'global-multi-seller-e-commerce-platform',
        'inspection-management-web-system',
        'intelligent-repricing-system',
        'production-inventory-tracking-platform',
        'return-and-refund-automation-system',
        'tiles-management-system',
        'unified-courier-tracking-intelligence-platform',
        'warehouse-inventory-management-platform',
    ].map(slug => ({
        url: `${baseUrl}/portfolios/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // ──────────────────────────────────────────────
    // 8. CASE STUDY PAGES  (priority 0.7)
    // ──────────────────────────────────────────────
    const caseStudyPages: MetadataRoute.Sitemap = [
        'amazon-order-automation-platform',
        'custom-elearning-platform',
        'ecommerce-and-service-provider-platform',
        'fashion-marketplace-web',
        'marketplace-service',
    ].map(slug => ({
        url: `${baseUrl}/case-studies/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // ──────────────────────────────────────────────
    // 9. BLOG POSTS  (priority 0.6)
    // ──────────────────────────────────────────────
    const blogPosts = getAllBlogs()
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post: { slug: string }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    // ──────────────────────────────────────────────
    // 10. HIRE TEAM PAGES  (priority 0.5)
    // ──────────────────────────────────────────────
    const hireTeamPages: MetadataRoute.Sitemap = allPagesData.map((page) => ({
        url: `${baseUrl}/hire-team/${page.pageId}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }))

    // ──────────────────────────────────────────────
    // COMBINE — order matters: highest priority first
    // ──────────────────────────────────────────────
    return [
        ...homepage,
        ...topLevelPages,
        ...secondaryPages,
        ...servicePages,
        ...industryPages,
        ...solutionPages,
        ...caseStudyPages,
        ...portfolioPages,
        ...blogPages,
        ...hireTeamPages,
    ]
}
