import { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blog";
import { allPagesData } from "@/data/hire-page-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ctasis.com";

  const staticPages = [
    { url: "", changefreq: "daily", priority: 1.0 },
    { url: "/about-us", changefreq: "monthly", priority: 0.9 },
    { url: "/services", changefreq: "weekly", priority: 0.9 },
    { url: "/contact-us", changefreq: "monthly", priority: 0.8 },
    { url: "/hire-team", changefreq: "monthly", priority: 0.8 },
    { url: "/solutions", changefreq: "weekly", priority: 0.8 },
    { url: "/case-studies", changefreq: "weekly", priority: 0.8 },
    { url: "/portfolios", changefreq: "weekly", priority: 0.8 },
    { url: "/industries", changefreq: "monthly", priority: 0.7 },
    { url: "/blog", changefreq: "daily", priority: 0.7 },
    { url: "/careers", changefreq: "weekly", priority: 0.7 },
    { url: "/team", changefreq: "monthly", priority: 0.6 },
    { url: "/our-story", changefreq: "yearly", priority: 0.6 },
    { url: "/how-we-work", changefreq: "monthly", priority: 0.6 },
    { url: "/office-locations", changefreq: "monthly", priority: 0.5 },
    { url: "/life-at-ctas", changefreq: "monthly", priority: 0.5 },
    { url: "/product", changefreq: "monthly", priority: 0.7 },
    { url: "/privacy-policy", changefreq: "monthly", priority: 0.5 },
    { url: "/terms", changefreq: "monthly", priority: 0.5 },
    { url: "/cookie-policy", changefreq: "monthly", priority: 0.5 },
  ];

  const products = ["ctas-scanpro", "sellerbuz", "postbell", "ctas-repricer"];
  const portfolios = [
    "ai-powered-marketplace-api-integration-mcp",
    "amazon-fbm-fba-operations-automation-platform",
    "amazon-order-management-automation-system",
    "amazon-product-management-automation-platform",
    "automated-amazon-review-feedback-management",
    "automated-product-data-extraction-platform",
    "automated-sku-identifier-framework",
    "book-store",
    "canva-smart-image-upload-kit",
    "e-commerce-platform",
    "global-multi-seller-e-commerce-platform",
    "google-sheets-integration-marketplace-synchronization",
    "inspection-management-web-system",
    "intelligent-repricing-system",
    "production-inventory-tracking-platform",
    "return-and-refund-automation-system",
    "tiles-management-system",
    "unified-courier-tracking-intelligence-platform",
    "warehouse-inventory-management-platform",
  ];
  const caseStudies = [
    "amazon-order-automation-platform",
    "custom-elearning-platform",
    "fashion-marketplace-web",
    "marketplace-service",
    "ecommerce-and-service-provider-platform",
  ];
  const industries = [
    "enterprise",
    "banking-finance",
    "education",
    "food-beverage",
    "gaming",
    "real-estate",
    "healthcare",
    "retail",
    "wellness",
    "transportation",
  ];
  const services = [
    "allegro",
    "bol-com",
    "kaufland",
    "fnac",
    "rakuten",
    "walmart-marketplace",
    "shopify",
    "worten",
    "tiktok-shop",
    "ai-ml",
    "api-development",
    "cloud-solutions",
    "amazon-sp-api-integration",
    "complete-design-packages",
    "amazon-services",
    "devops",
    "e-commerce-solutions",
    "marketplace",
    "ecommerce-workflow-automation",
    "mean-stack",
    "mern-stack",
    "custom-software",
    "mobile-apps",
    "ui-ux",
    "web-development",
    "web-design",
  ];
  const solutions = [
    "e-commerce",
    "dating-app",
    "doctor-appointment-app",
    "handyman-services-app",
    "hotel-booking-app",
    "mobile-wallet-app",
    "influencer-marketing-app",
    "parcel-delivery-app",
    "fitness-app",
    "nft-marketplace",
    "food-delivery-app",
    "property-finder-app",
    "restaurant-app",
    "social-networking-app",
    "ticket-booking-app",
    "taxi-booking",
    "sports-tracking-app",
    "voice-chat-app",
    "travel-app",
  ];

  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.url}`,
      lastModified: now,
      changeFrequency: p.changefreq as any,
      priority: p.priority,
    })),
    ...products.map((p) => ({
      url: `${baseUrl}/product/${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...portfolios.map((p) => ({
      url: `${baseUrl}/portfolios/${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...caseStudies.map((p) => ({
      url: `${baseUrl}/case-studies/${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...industries.map((p) => ({
      url: `${baseUrl}/industries/${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...services.map((p) => ({
      url: `${baseUrl}/services/${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...solutions.map((p) => ({
      url: `${baseUrl}/solutions/${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    // Dynamic blog posts
    ...getAllBlogs().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.lastModified || post.publishDate),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    // Dynamic hire-team pages
    ...allPagesData.map((page) => ({
      url: `${baseUrl}/hire-team/${page.pageId}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return entries;
}
