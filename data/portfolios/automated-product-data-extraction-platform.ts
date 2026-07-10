import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const automatedProductDataExtractionPlatformData: PortfolioDetailData = {
  title: "Automated Product Data Extraction Platform",
  category: "E-commerce Data Automation",
  industry: "E-commerce & Retail",
  description:
    "Automates product data extraction, normalization, and organization from multiple online sources with speed and accuracy.",
  longDescription:
    "The Web Scraping Tool empowers e-commerce businesses to automatically collect, clean, and integrate product data from various websites and marketplaces. By eliminating manual data entry, ensuring consistency, and supporting scalable operations, it streamlines inventory, pricing, and catalog management while maintaining high data quality.",
  image: "/portfolio-banners/automated-product-data-extraction-platform.webp",
  technologies: [
    "Node.js",
    "Puppeteer",
    "MongoDB",
    "AWS",
    "Redis",
    "Elasticsearch",
  ],
  link: "#",
  featured: true,
  stats: {
    products: "100k+",
    websites: "50+",
    accuracy: "98%",
    efficiency: "90%",
  },
  year: "2025",
  duration: "6 months",
  teamSize: "10",
  budget: "$300k",
  status: "Completed",
  challenges: [
    "Frequent website layout changes causing extraction failures",
    "Time-consuming manual data updates",
    "Duplicate, inconsistent, or incomplete product information",
    "Anti-bot mechanisms preventing seamless scraping",
    "Data mismatches during integration with internal systems",
    "Managing proxy rotation and reliability for large-scale scraping",
  ],
  solutions: [
    "Dynamic parser rules with fallback mechanisms to handle layout changes",
    "Automated scheduled crawls with real-time alerts for failures",
    "Normalization and deduplication engine to ensure data consistency",
    "Proxy rotation and headless browsing to bypass anti-bot restrictions",
    "Standardized export formats with accurate field mapping for integration",
    "Centralized proxy pool with rotation, failover, and monitoring",
  ],
  results: [],
  features: [
    {
      title: "Automated Data Collection",
      description: "Removes manual effort in gathering product details.",
      icon: "Zap",
    },
    {
      title: "Scalable Scraping",
      description: "Handles thousands of products across multiple websites.",
      icon: "Layers",
    },
    {
      title: "Real-Time Updates",
      description: "Scheduled crawls ensure current pricing and availability.",
      icon: "RefreshCw",
    },
    {
      title: "Error-Free Data",
      description: "Normalization prevents mismatches and duplicates.",
      icon: "Shield",
    },
    {
      title: "Integration-Ready",
      description: "Easily connects to inventory and catalog systems.",
      icon: "Download",
    },
  ],
  techStack: [
    {
      category: "Scraping & Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "Puppeteer", icon: "Code", description: "Headless browsing" },
        { name: "Express.js", icon: "Server", description: "Web framework" },
      ],
    },
    {
      category: "Database & Caching",
      technologies: [
        { name: "MongoDB", icon: "Database", description: "NoSQL database" },
        { name: "Redis", icon: "Database", description: "Caching layer" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "Cloud", description: "Cloud infrastructure" },
        { name: "Docker", icon: "Package", description: "Containerization" },
      ],
    },
    {
      category: "Search & Analytics",
      technologies: [
        { name: "Elasticsearch", icon: "Search", description: "Search engine" },
      ],
    },
  ],
  hero: {
    badge: "E-commerce Data Solution",
    badgeIcon: "Zap",
    titleLine1: "Automated Product",
    titleLine2: "Data Extraction Platform",
    heroImage: {
      src: "/portfolio-banners/automated-product-data-extraction-platform.webp",
      alt: "Web Scraping Tool",
    },
    heroStats: [
      { valueKey: "products", label: "Products Scraped" },
      { valueKey: "accuracy", label: "Data Accuracy" },
      { valueKey: "efficiency", label: "Efficiency Gain" },
    ],
    ctaLabel: "Get Free Quote",
  },
  sections: [
    {
      type: "advantages",
      title: "Key Advantages",
    },
    {
      type: "core-functionality",
      title: "Core Functionality & Intelligence",
      blocks: [
        {
          variant: "list",
          number: 1,
          title: "Website Crawling & Extraction",
          intro:
            "Seamlessly extracts product data from multiple sources with high accuracy:",
          items: [
            "Connects to both product listing and detail pages",
            "Extracts metadata, images, and product attributes efficiently",
            "Handles dynamic, JavaScript-heavy websites with precision",
          ],
          icon: "Globe",
        },
        {
          variant: "list",
          number: 2,
          title: "Data Normalization & Structuring",
          intro: "",
          items: [
            "Transforms raw scraped data into structured JSON, CSV, or database-ready formats",
            "Maps key attributes such as size, color, brand, and SKU accurately",
            "Ensures data consistency and standardization across multiple sources",
          ],
          icon: "FileText",
        },
        {
          variant: "list",
          number: 3,
          title: "Real-Time Updates",
          intro: "",
          items: [
            "Automates scheduled crawls at configurable intervals",
            "Detects and logs changes in pricing, availability, and product attributes",
            "Sends real-time alerts for significant updates or anomalies",
          ],
          icon: "RefreshCw",
        },
        {
          variant: "list",
          number: 4,
          title: "Export & Integration",
          intro: "",
          items: [
            "Exports structured data in CSV, Excel, or JSON formats",
            "Integrates seamlessly with inventory, catalog, and pricing systems",
            "Supports API-based syncing for real-time updates across platforms",
          ],
          icon: "Download",
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
          title: "Scraping Engine",
          intro: "",
          subsections: [
            {
              title: "Dynamic Parsing",
              description:
                "Adapts to changing website layouts using flexible and intelligent parsing rules.",
            },
            {
              title: "Anti-Bot Evasion",
              description:
                "Implements proxy rotation, headless browsing, and other techniques to avoid detection.",
            },
            {
              title: "Scalable Crawling",
              description:
                "Efficiently processes thousands of pages while maintaining accuracy and performance.",
            },
          ],
          icon: "Globe",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Data Normalization Core",
          intro: "",
          subsections: [
            {
              title: "Attribute Mapping",
              description:
                "Standardizes key attributes such as size, color, and brand for consistent data representation.",
            },
            {
              title: "Deduplication",
              description:
                "Identifies and removes duplicate entries to maintain clean, reliable datasets.",
            },
            {
              title: "Validation",
              description:
                "Ensures data accuracy and consistency across all sources before integration.",
            },
          ],
          icon: "FileText",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Integration Layer",
          intro: "",
          subsections: [
            {
              title: "Export Formats",
              description: "Supports CSV, Excel, JSON, and database exports.",
            },
            {
              title: "API Integration",
              description: "Connects to inventory and catalog systems via APIs.",
            },
            {
              title: "Real-Time Sync",
              description: "Enables continuous data updates with external systems.",
            },
          ],
          icon: "Download",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with robust technologies to ensure scalability, performance, and reliability for web scraping operations.",
    },
    {
      type: "cta",
      title: "Ready to Automate Your Product Data Collection?",
      description:
        "Let's discuss how our web scraping tool can streamline your data operations and boost efficiency.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
