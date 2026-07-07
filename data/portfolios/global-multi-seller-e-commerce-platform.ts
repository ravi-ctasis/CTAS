import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const globalMultiSellerEcommercePlatformData: PortfolioDetailData = {
  title: "Global Multi-Seller E-Commerce Platform",
  category: "Multi-Seller Marketplace",
  industry: "Global E-Commerce",
  description:
    "A scalable, user-friendly platform connecting sellers and customers worldwide with intelligent search, personalized recommendations, and optimized product listings.",
  longDescription:
    "Shop is a next-generation multi-seller e-commerce platform designed to empower businesses—from local vendors to international brands—to reach global customers. With over 1.5 million products across 12,000+ categories and 10+ active stores worldwide, Shop delivers fast performance, superior SEO, and low infrastructure costs through advanced technology and intelligent architecture.",
  image: "/silkrute-hero.webp",
  technologies: ["Node.js", "MongoDB", "Next.js", "Google Merchant API"],
  link: "#",
  featured: true,
  stats: {
    products: "1.5M+",
    categories: "12,000+",
    stores: "10+",
    users: "Millions",
    performance: "99.9%",
    seo: "90%+",
  },
  year: "2025",
  duration: "12 months",
  teamSize: "15",
  budget: "$600k",
  challenges: [
    "Handling millions of products, sellers, and users across multiple regions",
    "Providing highly relevant search results across thousands of categories",
    "Generating SEO-friendly content at scale for numerous pages",
    "Maintaining fast performance under high traffic and server load",
    "Allowing flexible UI updates without developer intervention",
    "Integrating seamlessly with external platforms like Google Merchant",
  ],
  solutions: [
    "Optimized database architecture for high concurrency and scalability",
    "Machine learning-powered personalized product recommendations",
    "Elastic Search with advanced matching algorithms for accurate results",
    "Automated SEO content generation for discoverability at scale",
    "High-performance REST APIs to handle heavy traffic efficiently",
    "Admin-controlled frontend layouts for flexible UI management",
    "Integration with Google Merchant for broader reach and visibility",
  ],
  results: [
    "Global Reach – Connects sellers to customers worldwide",
    "Intelligent Search – Highly relevant results with minimal latency",
    "SEO at Scale – Automated metadata for thousands of pages",
    "High Performance – Serves millions with minimal infrastructure",
    "Data-Driven Insights – Advanced analytics for sellers",
  ],
  features: [
    {
      title: "Global Marketplace",
      description: "Connects sellers to customers worldwide with localized experiences.",
      icon: "Globe",
    },
    {
      title: "Intelligent Search",
      description: "Elastic Search with longest common subsequence for relevant results.",
      icon: "Search",
    },
    {
      title: "Personalized Recommendations",
      description: "Machine learning-driven favorites based on user behavior.",
      icon: "ShoppingCart",
    },
    {
      title: "SEO Automation",
      description: "Dynamic meta titles and descriptions for enhanced discoverability.",
      icon: "TrendingUp",
    },
    {
      title: "Configurable UI",
      description: "Admin panel for flexible layout and category management.",
      icon: "Settings",
    },
    {
      title: "Scalable Architecture",
      description: "Handles millions of users with minimal infrastructure costs.",
      icon: "Server",
    },
  ],
  techStack: [
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "Express", icon: "Server", description: "Web framework" },
      ],
    },
    {
      category: "Database",
      technologies: [{ name: "MongoDB", icon: "Database", description: "NoSQL database" }],
    },
    {
      category: "Search",
      technologies: [
        { name: "Elastic Search", icon: "Search", description: "Optimized search engine" },
      ],
    },
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "Code", description: "Dynamic UI framework" },
        { name: "Tailwind CSS", icon: "Code", description: "Utility-first styling" },
      ],
    },
  ],
  hero: {
    badge: "Global E-Commerce Solution",
    badgeIcon: "Globe",
    titleLine1: "Shop",
    titleLine2: "Multi-Seller Marketplace",
    heroImage: { src: "/multi-seller-e-commerce-platform.webp", alt: "Shop E-Commerce Platform" },
    heroStats: [
      { valueKey: "products", label: "Products" },
      { valueKey: "categories", label: "Categories" },
      { valueKey: "performance", label: "Uptime" },
    ],
  },
  sections: [
    {
      type: "differentiators",
      title: "Key Differentiators & Client Value",
      items: [
        {
          title: "Global Reach",
          description: "Connects sellers to customers worldwide with localized experiences.",
          icon: "Globe",
        },
        {
          title: "Intelligent Search",
          description: "Optimized search results with elastic algorithms.",
          icon: "Search",
        },
        {
          title: "Personalized Recommendations",
          description: "Machine learning-driven product suggestions.",
          icon: "ShoppingCart",
        },
        {
          title: "SEO at Scale",
          description: "Automated metadata for enhanced discoverability.",
          icon: "TrendingUp",
        },
        {
          title: "Configurable UI",
          description: "Flexible layouts managed via admin panel.",
          icon: "Settings",
        },
        {
          title: "Scalable Architecture",
          description: "Handles millions of users with minimal infrastructure.",
          icon: "Server",
        },
      ],
    },
    {
      type: "core-functionality",
      title: "Core Functionality & Intelligence",
      blocks: [
        {
          variant: "list",
          number: 1,
          title: "Intelligent Search & Recommendations",
          intro: "Advanced search and recommendation engine for a seamless user experience:",
          items: [
            "Elastic Search with longest common subsequence matching for precise results",
            "Machine learning-driven personalized product recommendations",
            "Context-aware search across 12,000+ categories for relevant results",
            "Low-latency search to handle millions of products efficiently",
          ],
          closing: "Ensures users can quickly discover the most relevant products with ease.",
          icon: "Search",
        },
        {
          variant: "grouped",
          number: 2,
          title: "SEO Automation",
          intro: "",
          groups: [
            {
              title: "Automated Metadata Generation",
              items: [
                "Generates SEO-friendly titles, descriptions, and keywords automatically",
                "Adapts to trending search queries for higher visibility",
                "Scales across thousands of products and category pages effortlessly",
              ],
            },
            {
              title: "Improved Discoverability",
              items: [
                "Boosts organic traffic with optimized content delivery",
                "Enhances click-through rates with dynamic metadata",
                "Reduces manual effort while maintaining SEO consistency",
              ],
            },
          ],
          icon: "TrendingUp",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Scalable Database & API",
          intro: "",
          groups: [
            {
              title: "Robust Database Architecture",
              items: [
                "MongoDB with optimized indexing for high-speed queries",
                "Supports millions of concurrent reads/writes without performance degradation",
                "Ensures data integrity and fast retrieval for large-scale operations",
              ],
            },
            {
              title: "High-Performance API",
              items: [
                "REST APIs designed for low-latency, high-throughput access",
                "Load balancing and caching for global scalability",
                "Secure endpoints with role-based access and throttling",
              ],
            },
          ],
          icon: "Database",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Admin Configuration & Integrations",
          intro: "",
          groups: [
            {
              title: "Advanced Admin Panel",
              items: [
                "Fully configurable layouts and category/product management",
                "Granular permissions and role-based access for secure control",
                "Manage global settings without developer intervention",
              ],
            },
            {
              title: "Third-Party Integrations",
              items: [
                "Connects with Google Merchant Portal for extended product reach",
                "Integrates analytics and reporting tools for user behavior insights",
                "Supports future integrations with payment gateways, ERP, and marketplaces",
              ],
            },
          ],
          icon: "Settings",
        },
      ],
    },
    {
      type: "critical-components",
      title: "Critical System Components",
      blocks: [
        {
          variant: "subsections",
          number: 1,
          title: "Database Layer",
          intro: "",
          subsections: [
            {
              title: "High Availability",
              description:
                "MongoDB with optimized indexing and replication ensures fast queries and minimal downtime.",
            },
            {
              title: "Scalability",
              description:
                "Supports millions of products, categories, and users without performance bottlenecks.",
            },
          ],
          icon: "Database",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Search & Recommendation Engine",
          intro: "",
          subsections: [
            {
              title: "Elastic Search",
              description:
                "Uses advanced longest common subsequence algorithms for fast, accurate, and context-aware search results across millions of products.",
            },
            {
              title: "Machine Learning",
              description:
                "Provides personalized product recommendations by analyzing user behavior, purchase history, and browsing patterns to boost engagement and conversions.",
            },
          ],
          icon: "Search",
        },
        {
          variant: "subsections",
          number: 3,
          title: "SEO & Admin Configuration",
          intro: "",
          subsections: [
            {
              title: "SEO Automation",
              description:
                "Automatically generates dynamic meta titles, descriptions, and structured data for thousands of category and product pages to improve search engine visibility and organic traffic.",
            },
            {
              title: "Admin Panel",
              description:
                "Provides flexible UI configuration, category and product management, and granular control for administrators without developer intervention, ensuring smooth operations at scale.",
            },
          ],
          icon: "Settings",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability for global e-commerce.",
    },
    {
      type: "cta",
      title: "Ready to Scale Your E-Commerce Business?",
      description:
        "Let's discuss how Shop can empower your global marketplace with intelligent search and scalable architecture.",
    },
  ],
};
