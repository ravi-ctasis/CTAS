import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const amazonProductManagementAutomationPlatformData: PortfolioDetailData = {
  title: "Amazon Product Management Automation Platform",
  category: "Marketplace Solutions",
  industry: "E-commerce",
  description:
    "All-in-one Amazon product management automation software with AI-driven repricing, smart inventory control, and seamless multi-marketplace integration for sellers and enterprises.",
  longDescription:
    "Our Amazon Product Management Automation Platform helps sellers scale effortlessly with AI-powered insights, dynamic pricing, and real-time stock optimization. It automates everything from product listing and SKU generation to order fulfillment and return handling, ensuring smooth operations across multiple Amazon marketplaces worldwide. With intelligent repricing, marketplace synchronization, and advanced analytics, sellers achieve faster growth, reduced costs, and improved sales performance.",
  image: "/Portfoliosimg/image-front.webp",
  technologies: [
    "Amazon SP API",
    "Node.js",
    "React",
    "MongoDB",
    "AWS",
    "TensorFlow",
    "Docker",
    "Kubernetes",
    "Elasticsearch",
    "RabbitMQ",
  ],
  link: "#",
  featured: true,
  stats: {
    views: "25k",
    likes: "3.8k",
    clients: "120+",
    revenue: "$2.5M+",
    efficiency: "85%",
    accuracy: "99.2%",
  },
  year: "2024",
  duration: "8 months",
  teamSize: "12",
  budget: "$280k",
  status: "Completed",
  challenges: [
    "Data duplication across marketplaces",
    "Manual listing errors",
    "Pricing inefficiencies",
    "Cross-border complexity",
    "API rate limitations",
    "Multi-account chaos",
  ],
  solutions: [
    "Proprietary SKU generation with marketplace-specific fingerprinting for conflict-free product identifiers.",
    "Multi-layer validation and automated compliance pre-checks to ensure adherence to Amazon policies and regulatory standards.",
    "Algorithmic optimization leveraging real-time competitive intelligence for dynamic pricing and catalog adjustments.",
    "Mode-aware configurations that automatically adapt to Import/Export rules for seamless global operations.",
    "Predictive throttling and queue prioritization to handle high-volume inventory and listing synchronization efficiently.",
    "Intelligent caching strategies to overcome Amazon API rate limits, ensuring uninterrupted data processing.",
  ],
  results: [
    "Zero-Touch Automation – Eliminates manual effort from SKU creation to listing publication",
    "Global Marketplace Agility – Simplifies cross-border operations with automatic mode alignment",
    "Compliance by Design – Built-in validation reduces rejection risks",
    "Data-Driven Decisions – Real-time pricing analytics and actionable reporting",
    "Unmatched Scalability – Handles large catalogs and multi-account operations seamlessly",
  ],
  features: [
    {
      title: "AI-Powered Dynamic Repricing",
      description:
        "Automatically adjusts product prices based on competitor activity, demand trends, and profit margins.",
      icon: "Settings",
    },
    {
      title: "Automated Product Lifecycle Management",
      description:
        "SKU Generation & Catalog Ingestion with Advanced Validation Engine and Seamless Listing Creation for FBA/FBM listings.",
      icon: "Package",
    },
    {
      title: "Dynamic ASIN Management & Optimization",
      description:
        "Centralized ASIN Hub with Background Automation Powerhouse and Intelligent Pricing Analytics for real-time optimization.",
      icon: "BarChart3",
    },
    {
      title: "Seamless Integration & Scalability",
      description:
        "Effortless Publishing with Robust Data Management and Enterprise-Ready Architecture optimized for high-volume operations.",
      icon: "Cloud",
    },
    {
      title: "Advanced Validation & Compliance Layer",
      description:
        "Multi-Stage Verification with Dynamic Pricing Intelligence and Compliance Safeguards for regulatory compliance.",
      icon: "Shield",
    },
    {
      title: "Automation Core",
      description:
        "Background Orchestration with Resilient API Management and Bulk Control Systems for data hygiene at scale.",
      icon: "Zap",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "Code", description: "Modern UI framework" },
        { name: "TypeScript", icon: "Code", description: "Type-safe development" },
        { name: "Tailwind CSS", icon: "Code", description: "Utility-first styling" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "Express.js", icon: "Server", description: "Web framework" },
        { name: "MongoDB", icon: "Database", description: "NoSQL database" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "Cloud", description: "Cloud infrastructure" },
        { name: "Docker", icon: "Package", description: "Containerization" },
        { name: "Kubernetes", icon: "Settings", description: "Orchestration" },
      ],
    },
    {
      category: "AI/ML",
      technologies: [
        { name: "TensorFlow", icon: "Activity", description: "Machine learning" },
        { name: "Elasticsearch", icon: "Search", description: "Search engine" },
      ],
    },
  ],
  hero: {
    badge: "E-commerce Automation",
    badgeIcon: "ShoppingCart",
    titleLine1: "Amazon Product Management",
    titleLine2: "Automation Platform",
    heroImage: {
      src: "/amazon-product-management-automation-img.webp",
      alt: "Mobile Responsive Website Design",
    },
    heroStats: [
      { valueKey: "revenue", label: "Revenue Generated" },
      { valueKey: "efficiency", label: "Efficiency Gain" },
      { valueKey: "accuracy", label: "Accuracy Rate" },
    ],
    ctaLabel: "Get Free Quote",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "Zero-Touch Automation",
          description:
            "Automates SKU creation, product listings, and publishing workflows, enabling hands-free operation of your Amazon business while reducing manual errors.",
          icon: "Zap",
        },
        {
          title: "Global Marketplace Agility",
          description:
            "Seamlessly manage cross-border operations with automated import/export workflows, enabling smooth international expansion and consistent performance.",
          icon: "Globe",
        },
        {
          title: "Compliance by Design",
          description:
            "Built-in validation and audit trails minimize listing rejections, ensuring full compliance with Amazon policies and regulatory standards.",
          icon: "Shield",
        },
        {
          title: "Data-Driven Decisions",
          description:
            "Real-time analytics and actionable reporting enable smarter pricing, inventory management, and strategic decisions to maximize profitability.",
          icon: "BarChart3",
        },
        {
          title: "Unmatched Scalability",
          description:
            "Efficiently handles large catalogs and multiple accounts, scaling seamlessly as your Amazon business grows without performance limitations.",
          icon: "Cloud",
        },
        {
          title: "Operational Efficiency",
          description:
            "Accelerates time-to-market and reduces manual workload, allowing teams to focus on strategic initiatives and business growth.",
          icon: "TrendingUp",
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
          title: "Intelligent Master Data Configuration",
          intro: "Centralized control hub defining critical parameters:",
          items: [
            "Mode of Operation: Import (Global → India) / Export (India → Global)",
            "Source & Destination Marketplaces",
            "Fulfillment Strategy: FBA / FBM",
            "Line of Business (LOB), Branch/Packaging specs",
            "Unique Default Codes",
          ],
          closing:
            "Ensures data integrity and prevents duplication, providing a single source of truth. Adapts seamlessly to both Import and Export workflows, eliminating user error.",
          icon: "Settings",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Automated Product Lifecycle Management",
          intro: "",
          groups: [
            {
              title: "Automated Listing & SKU Generation",
              items: [
                "Creates standardized product listings and SKUs to ensure consistency across Amazon marketplaces.",
                "Retrieves essential catalog information",
              ],
            },
            {
              title: "Advanced Validation Engine",
              items: [
                "Multi-layered checks: restrictions, pricing feasibility, compliance",
                "Ensures error-free listings before going live",
              ],
            },
            {
              title: "Seamless Listing Creation",
              items: [
                "Automatically generates FBA/FBM listings",
                "Ready for direct integration with Amazon Seller Central",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Dynamic ASIN Management & Optimization",
          intro: "",
          groups: [
            {
              title: "Centralized ASIN Hub",
              items: [
                "Complete visibility of all uploaded ASINs, including pending or under review items",
                "Efficient bulk uploads with pre-configured master settings for faster onboarding",
              ],
            },
            {
              title: "Background Automation Powerhouse",
              items: [
                "Cron jobs fetch real-time catalog data and monitor competitive pricing",
                "AI-powered pricing analytics for dynamic optimization",
              ],
            },
            {
              title: "User Control & Compliance",
              items: [
                "Bulk actions to delete or ban non-compliant items quickly",
                "Ensures data hygiene and adherence to Amazon regulatory standards",
              ],
            },
          ],
          icon: "BarChart3",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Seamless Integration & Scalability",
          intro: "",
          groups: [
            {
              title: "Effortless Publishing",
              items: [
                "Validated ASINs automatically pushed to the Master Product List",
                "Product offers published directly to Amazon Seller Central with minimal manual effort",
              ],
            },
            {
              title: "Robust Data Management",
              items: [
                "Comprehensive reporting and real-time catalog synchronization",
                "Secure FTP transfers for reliable data handling",
              ],
            },
            {
              title: "Enterprise-Ready Architecture",
              items: [
                "Optimized for high-volume operations and large catalogs",
                "Handles Amazon API rate limits efficiently",
                "Supports concurrent execution across multiple seller accounts",
              ],
            },
          ],
          icon: "Cloud",
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
          title: "Intelligent Master Data Engine",
          intro: "",
          subsections: [
            {
              title: "Core Foundation",
              description:
                "Centralized configuration hub for operational modes (Import/Export), marketplace routing, fulfillment logic (FBA/FBM), and line-of-business taxonomy to ensure consistent product management.",
            },
            {
              title: "Uniqueness Protocol",
              description:
                "Proprietary algorithms automatically generate conflict-resistant SKUs, eliminating duplication and ensuring data integrity at scale.",
            },
            {
              title: "Mode-Aware Workflows",
              description:
                "Dynamically adapts configurations for Import (Global → India) or Export (India → Global), preventing cross-contamination and ensuring seamless marketplace operations.",
            },
          ],
          icon: "Settings",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Advanced Validation & Compliance Layer",
          intro: "",
          subsections: [
            {
              title: "Multi-Stage Verification",
              description:
                "Real-time validation checks ensure Amazon policy adherence, catalog accuracy, pricing viability, and marketplace-specific restrictions are consistently met.",
            },
            {
              title: "Dynamic Pricing Intelligence",
              description:
                "Automated calculation of minimum, maximum, and optimal prices using competitive data feeds combined with configurable business rule engines for intelligent pricing decisions.",
            },
            {
              title: "Compliance Safeguards",
              description:
                "Built-in audit trails ensure regulatory compliance (GST, customs, etc.) and strict adherence to Amazon Terms of Service, protecting your listings and operations.",
            },
          ],
          icon: "Shield",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Automation Core",
          intro: "",
          subsections: [
            {
              title: "Background Orchestration",
              description:
                "Cron-driven pipelines manage ASIN ingestion, catalog retrieval, and dynamic price optimization, operating continuously 24/7 without manual intervention.",
            },
            {
              title: "Resilient API Management",
              description:
                "Intelligent throttling and queue management gracefully handle Amazon API rate limits across multiple seller accounts, ensuring uninterrupted operations.",
            },
            {
              title: "Bulk Control Systems",
              description:
                "Granular tools allow bulk ASIN banning, deletion, and lifecycle management, maintaining data hygiene and operational integrity at scale.",
            },
          ],
          icon: "Zap",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability.",
    },
    {
      type: "cta",
      title: "Ready to Transform Your Amazon Business?",
      description:
        "Let's discuss how our automation platform can revolutionize your product management and boost your profits.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
