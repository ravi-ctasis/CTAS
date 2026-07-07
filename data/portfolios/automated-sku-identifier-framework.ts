import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const automatedSkuIdentifierFrameworkData: PortfolioDetailData = {
  title: "Automated SKU & Identifier Framework",
  category: "E-commerce Automation",
  industry: "Amazon FBA/FBM & Multi-Marketplace",
  description:
    "A unified system for generating global Master SKUs and managing marketplace identifiers (ASIN, EAN, UPC) to ensure consistency across Amazon, Flipkart, Walmart, and more.",
  longDescription:
    "Managing products across multiple marketplaces worldwide (Amazon, Flipkart, Walmart, Cdiscount, Shopify, etc.) requires consistent and standardized identifiers. Each platform uses different identification systems (ASIN, EAN, UPC, ISBN, GTIN, etc.), and without a central management process, product duplication, listing errors, and data mismatches are inevitable. Our system generates globally unique Master SKUs, maps market-specific identifiers, and synchronizes stock, price, and order data, becoming the backbone of global catalog management.",
  image: "/automatic-sku-generation-img.webp",
  technologies: ["Amazon SP API", "Angular", "NodeJs", "MongoDB", "Docker"],
  link: "#",
  featured: true,
  stats: {
    views: "20k",
    likes: "2.5k",
    clients: "100+",
    revenue: "$1.8M+",
    accuracy: "99%",
    skus: "10M+",
  },
  year: "2025",
  duration: "8 months",
  teamSize: "12",
  budget: "$400k",
  status: "Completed",
  challenges: [
    "Diverse rules and requirements across global marketplaces",
    "Risk of duplicate or conflicting product identifiers",
    "Handling millions of SKUs efficiently at scale",
    "Ensuring compliance with marketplace standards (ASIN, UPC, EAN, etc.)",
    "Managing complex bundles, variations, and product sets",
  ],
  solutions: [
    "Centralized SKU engine adapting dynamically to marketplace rules",
    "Generation of unique Master SKUs with serial numbers and validation checks",
    "Optimized batch processing and database indexing for high-volume operations",
    "Automated validation for Amazon ASIN and GS1 UPC compliance",
    "Bundle and variant-specific SKU mapping to prevent errors and duplication",
  ],
  results: [
    "Global Consistency – Unified Master SKU worldwide",
    "Error Prevention – No duplicate or mismatched identifiers",
    "Enterprise-Scale Performance – Handles millions of SKUs",
    "Marketplace Compliance – Matches platform requirements",
  ],
  features: [
    {
      title: "Master SKU Generation",
      description:
        "Generates globally unique Master SKUs using a custom formula with business-specific codes.",
      icon: "Zap",
    },
    {
      title: "Identifier Mapping",
      description:
        "Automatically assigns or maps ASINs, EANs, UPCs, and ISBNs per marketplace rules.",
      icon: "Package",
    },
    {
      title: "Serial Number Assignment",
      description:
        "Ties each Master SKU to a unique 10-digit serial number for traceability.",
      icon: "ShoppingCart",
    },
    {
      title: "Database Storage",
      description:
        "Stores SKUs and identifiers in a relational database with uniqueness constraints.",
      icon: "Database",
    },
    {
      title: "Sync with OMS",
      description:
        "Synchronizes stock, price, lead time, and expiry with Order Management System.",
      icon: "Truck",
    },
    {
      title: "Reporting & Export",
      description:
        "Provides dynamic UI and CSV/Excel exports for SKU mappings and audits.",
      icon: "Shield",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "Angular", icon: "Code", description: "Dynamic UI framework" },
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
      category: "Data & Analytics",
      technologies: [
        { name: "Elasticsearch", icon: "Search", description: "Search engine" },
        { name: "RabbitMQ", icon: "Activity", description: "Message broker" },
      ],
    },
  ],
  hero: {
    badge: "Global SKU Management Solution",
    badgeIcon: "Zap",
    titleLine1: "Automated SKU &",
    titleLine2: "Identifier Framework",
    heroImage: {
      src: "/automatic-sku-generation-img.webp",
      alt: "Mobile Responsive SKU Management Design",
    },
    heroStats: [
      { valueKey: "revenue", label: "Revenue Impact" },
      { valueKey: "accuracy", label: "Identifier Accuracy" },
      { valueKey: "skus", label: "SKUs Managed" },
    ],
    ctaLabel: "Get Free Quote",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "Global Consistency",
          description:
            "Unified Master SKU ensures synchronized identifiers worldwide.",
          icon: "Zap",
        },
        {
          title: "Error Prevention",
          description:
            "Eliminates duplicate or mismatched identifiers across platforms.",
          icon: "Package",
        },
        {
          title: "Enterprise-Scale Performance",
          description: "Handles millions of SKUs across multiple marketplaces.",
          icon: "Truck",
        },
        {
          title: "Marketplace Compliance",
          description:
            "Matches Amazon, eBay, and Shopify identifier requirements.",
          icon: "CheckCircle",
        },
        {
          title: "Automation at Scale",
          description: "Fully automated SKU generation and identifier mapping.",
          icon: "Shield",
        },
        {
          title: "Data Transparency",
          description: "Full reporting and exports for audits and forecasting.",
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
          title: "Master SKU Generation",
          intro:
            "Automatically generates globally unique Master SKUs for all products:",
          items: [
            "Custom SKU formula incorporating business-specific codes",
            "Encodes mode, marketplace, company, and product type",
            "Ensures global uniqueness across all marketplaces",
            "Prevents product duplication and listing errors",
          ],
          closing:
            "Establishes a unified, reliable identifier backbone for seamless global catalog management.",
          icon: "Zap",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Serial Number Assignment",
          intro: "",
          groups: [
            {
              title: "Unique Identifier",
              items: [
                "Assigns a unique 10-digit serial number to every Master SKU",
                "Enables full traceability across multiple marketplaces",
              ],
            },
            {
              title: "Database Integration",
              items: [
                "Stores serial numbers in a relational database with uniqueness constraints",
                "Automatically prevents duplicate serial assignments",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Identifier Mapping",
          intro: "",
          groups: [
            {
              title: "Marketplace Identifiers",
              items: [
                "Automatically generates ASINs, EANs, UPCs, and ISBNs",
                "Maps identifiers to the corresponding SKU for each marketplace",
              ],
            },
            {
              title: "Adaptive Logic",
              items: [
                "Adapts to marketplace-specific rules (e.g., Amazon US vs. EU)",
                "Supports product-type specific identifier requirements",
              ],
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Database Storage",
          intro: "",
          groups: [
            {
              title: "Centralized Storage",
              items: [
                "Stores SKUs and identifiers in relational database",
                "Enforces uniqueness constraints",
              ],
            },
            {
              title: "Scalability",
              items: [
                "Optimized for millions of records",
                "Fast retrieval and updates",
              ],
            },
          ],
          icon: "Database",
        },
        {
          variant: "grouped",
          number: 5,
          title: "Sync with OMS",
          intro: "",
          groups: [
            {
              title: "Stock & Price Sync",
              items: [
                "Matches inventory and purchase prices to SKUs",
                "Updates in real-time with OMS",
              ],
            },
            {
              title: "Lifecycle Sync",
              items: [
                "Syncs lead time and expiry data",
                "Ensures accurate product lifecycle management",
              ],
            },
          ],
          icon: "Truck",
        },
        {
          variant: "grouped",
          number: 6,
          title: "Bundle SKU & Variant Management",
          intro: "",
          groups: [
            {
              title: "Bundle Support",
              items: [
                "Generates unique SKUs for bundles/kits",
                "Ties to multiple Master SKUs",
              ],
            },
            {
              title: "Variant Handling",
              items: [
                "Maps identifiers for sizes, colors, etc.",
                "Ensures consistency across marketplaces",
              ],
            },
          ],
          icon: "Package",
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
          title: "Master SKU Generator",
          intro: "",
          subsections: [
            {
              title: "Unique SKU Creation",
              description:
                "Generates globally unique Master SKUs with custom formulas.",
            },
            {
              title: "Business-Specific Codes",
              description: "Incorporates mode, marketplace, and product type.",
            },
            {
              title: "Duplication Prevention",
              description: "Ensures no duplicate SKUs across platforms.",
            },
          ],
          icon: "Zap",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Identifier Mapping Engine",
          intro: "",
          subsections: [
            {
              title: "Auto-Generation",
              description:
                "Creates ASINs, EANs, UPCs, and ISBNs per marketplace.",
            },
            {
              title: "Adaptive Logic",
              description: "Adapts to marketplace-specific identifier rules.",
            },
            {
              title: "Variant Support",
              description:
                "Handles identifiers for product variations and bundles.",
            },
          ],
          icon: "Package",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Validation & Sync Layer",
          intro: "",
          subsections: [
            {
              title: "Uniqueness Validation",
              description:
                "Prevents duplicate identifiers and mismatched SKUs.",
            },
            {
              title: "OMS Synchronization",
              description: "Syncs stock, price, and lifecycle data with OMS.",
            },
            {
              title: "Compliance Checks",
              description: "Ensures adherence to marketplace standards.",
            },
          ],
          icon: "Shield",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability for global SKU management.",
    },
    {
      type: "cta",
      title: "Ready to Streamline Your Global SKU Management?",
      description:
        "Let's discuss how our automatic SKU generation system can ensure consistency and scalability across marketplaces.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
