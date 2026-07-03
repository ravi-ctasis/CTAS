export interface Portfolio {
  id: number;
  title: string;
  category: string;
  industry?: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  link: string;

  year: string;
  duration?: string;
  teamSize?: string;
  // budget?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  featured?: boolean;
}

export const portfoliosData: Portfolio[] = [
  {
    id: 1,
    title: "Amazon Product Management Automation Platform",
    category: "Marketplace Solutions",
    industry: "E-commerce",
    description:
      "All-in-one Amazon product management automation software with AI-driven repricing, smart inventory control, and seamless multi-marketplace integration for sellers and enterprises.",
    longDescription:
      "Our Amazon Product Management Automation Platform helps sellers scale effortlessly with AI-powered insights, dynamic pricing, and real-time stock optimization. It automates everything from product listing and SKU generation to order fulfillment and return handling, ensuring smooth operations across multiple Amazon marketplaces worldwide. With intelligent repricing, marketplace synchronization, and advanced analytics, sellers achieve faster growth, reduced costs, and improved sales performance.",
    image: "/amazon-product-management-automation-img.webp",
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
    link: "/portfolios/amazon-product-management-automation-platform",
    year: "2024",
    duration: "6 months",
    teamSize: "8",
    // budget: "$150k",
    challenges: ["API Rate Limiting", "Data Synchronization", "Multi-region Support"],
    solutions: ["Intelligent Caching", "Event-driven Architecture", "CDN Integration"],
    results: ["40% faster order processing", "99.9% uptime", "50% cost reduction"],
    featured: true,
  },
  {
    id: 2,
    title: "Tiles Management System",
    category: "Manufacturing & Distribution",
    industry: "Ceramic & Tiles",
    description:
      "A centralized, enterprise-grade platform for managing tile production, domestic and international sales, buyers, sellers, and secure workflows with real-time visibility.",
    longDescription:
      "A web-based, scalable system designed to streamline the complete lifecycle of tile sales and distribution across global and domestic markets. The platform enables efficient management of product catalogs, buyer–seller interactions, order processing, invoicing, production tracking, and secure link sharing. With role-based access controls and advanced reporting, it ensures transparency, operational efficiency, and seamless collaboration for manufacturers, distributors, and sales teams.",
    image: "/tiles-management-system.webp",
    technologies: [
      "Node.js",
      "React",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "Elasticsearch",
      "RabbitMQ",
    ],
    link: "/portfolios/tiles-management-system",
    year: "2024",
    duration: "10 months",
    teamSize: "10",
    challenges: [
      "Fragmented buyer–seller data leading to inefficiencies",
      "Time-consuming manual billing and invoicing processes",
      "Limited visibility into sales and production performance",
      "Complexities in managing international sales operations",
    ],
    solutions: [
      "Centralized database with role-based dashboards for all stakeholders",
      "Automated order processing, billing, and invoice generation",
      "Advanced reporting and analytics for real-time sales and production insights",
      "Secure link generation and tracking for sharing product catalogs and orders",
    ],
    results: [
      "Achieved 85% faster order processing and fulfillment",
      "Reduced manual errors by 95%, improving operational accuracy",
      "Provided real-time visibility into production schedules and sales data",
      "Enhanced collaboration across manufacturers, distributors, and sales teams",
    ],
    featured: true,
  },


  {
    id: 3,
    title: "Amazon FBA & FBM Operations Automation Platform",
    category: "E-Commerce Automation",
    industry: "E-commerce",
    description:
      "A centralized, web-based platform for managing Amazon FBA and FBM operations, including inventory, orders, shipments, and performance analytics.",
    longDescription:
      "An enterprise-grade admin panel designed for Amazon sellers to streamline FBA and FBM operations efficiently. The platform offers real-time inventory synchronization, automated order processing, shipment creation via Amazon API integration, backorder handling, and advanced multi-store analytics. It ensures compliance with Amazon policies, supports role-based access control, and provides scalable workflows for high-volume operations.",
    image: "/amazon-fbm-fba-management-models-img.webp",
    technologies: ["Amazon SP API", "Node.js", "React", "MongoDB", "AWS"],
    link: "/portfolios/amazon-fbm-fba-operations-automation-platform",
    year: "2024",
    duration: "10 months",
    teamSize: "10",
    challenges: [
      "Synchronizing inventory across FBA and FBM channels without discrepancies",
      "Complex integration and throttling management with Amazon APIs",
      "Handling high-volume orders efficiently while maintaining accuracy",
      "Ensuring full compliance with Amazon restrictions and policies",
    ],
    solutions: [
      "Automated inventory and order synchronization across FBA and FBM accounts",
      "Seamless Amazon API integration with intelligent throttling and error handling",
      "Bulk order processing with inline editing and real-time status updates",
      "Validation of banned ASINs and restricted brands to prevent compliance issues",
    ],
    results: [
      "80% faster order processing and fulfillment",
      "90% reduction in compliance-related errors",
      "Real-time performance insights for 50+ Amazon stores",
      "50% reduction in manual workflows, freeing resources for strategic growth",
    ],
    featured: true,
  },

  {
    id: 4,
    title: "Amazon Order Management & Automation System",
    category: "E-commerce Automation",
    industry: "E-commerce",
    description:
      "Next-generation platform for fully automating Amazon order processing, Seller-Flex operations, and multi-courier management with real-time tracking.",
    longDescription:
      "An enterprise-grade web platform that automates the complete Amazon order lifecycle, from order placement to last-mile delivery. It seamlessly integrates with Amazon Seller-Flex and FBM, supports multiple courier partners (e.g., Bluedart, Shiprocket), and ensures real-time tracking, returns management, and full compliance with Amazon standards. The system provides scalable, accurate, and efficient workflows, reducing manual errors and enhancing operational productivity for businesses of all sizes.",
    image: "/amazon-auto-ordering-order-management.webp",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    link: "/portfolios/amazon-order-management-automation-system",
    year: "2020",
    duration: "8 months",
    teamSize: "12",
    challenges: [
      "Delays due to manual order placement",
      "Stock inconsistencies and overselling risks",
      "Courier label generation and management complexities",
      "Unsynchronized tracking updates leading to fulfillment gaps",
    ],
    solutions: [
      "Dynamic auto-ordering system with validation safeguards",
      "Automated stock and price verification to prevent overselling",
      "One-click courier label generation across multiple providers",
      "Real-time tracking synchronization with Amazon and couriers",
    ],
    results: [
      "90% faster order processing and fulfillment",
      "98% reduction in fulfillment errors and stock mismatches",
      "Complete real-time visibility into orders and shipments",
      "Seamless integration with Amazon Seller-Flex and FBM workflows",
    ],
    featured: true,
  },

  {
    id: 5,
    title: "Intelligent Repricing Engine for Multi-Marketplace Growth",
    category: "E-commerce Automation",
    industry: "Amazon FBA/FBM & Multi-Marketplace",
    description:
      "A real-time repricing platform that optimizes millions of SKUs across marketplaces, ensuring competitiveness, profitability, and Buy Box dominance.",
    longDescription:
      "In today's competitive e-commerce landscape, marketplaces like Amazon, Cdiscount, and others change dynamically every second. Manual SKU management is impossible at scale. Our intelligent repricing engine continuously monitors competitors, applies business rules, calculates margins, and updates prices across multiple platforms automatically. It combines enterprise-scale performance with data-driven insights, ensuring optimal pricing, margin protection, and maximum Buy Box wins across millions of SKUs.",
    image: "/intelligent-repricing-system-img.webp",
    technologies: ["Amazon SP API & Business API", "Angular", "Node.js", "MongoDB", "Docker"],
    link: "/portfolios/intelligent-repricing-system",
    year: "2019",
    duration: "8 months",
    teamSize: "12",
    challenges: [
      "Rapid competitor price fluctuations",
      "Handling massive SKU data volumes",
      "Maintaining low-latency and fresh pricing data",
      "Balancing scalability with profitability",
    ],
    solutions: [
      "High-frequency repricing with intelligent throttling mechanisms",
      "Optimized bulk write-backs and efficient database queries",
      "Prioritization pipelines for high-value SKUs and batch updates",
      "Consistent application of margin-protected pricing rules across all SKUs",
    ],
    results: [
      "Enterprise-scale performance handling millions of inventory updates",
      "Increased Buy Box wins with real-time optimization",
      "Faster inventory turnover boosting sales velocity",
      "Margin protection preventing loss-making prices",
    ],
    featured: true,
  },

  {
    id: 6,
    title: "Automated SKU & Identifier Framework",
    category: "E-commerce Automation",
    industry: "Amazon FBA/FBM & Multi-Marketplace",
    description:
      "A unified system for generating global Master SKUs and managing marketplace identifiers (ASIN, EAN, UPC) to ensure consistency across Amazon, Flipkart, Walmart, and more.",
    longDescription:
      "Managing products across multiple marketplaces worldwide (Amazon, Flipkart, Walmart, Cdiscount, Shopify, etc.) requires consistent and standardized identifiers. Each platform uses different identification systems (ASIN, EAN, UPC, ISBN, GTIN, etc.), and without a central management process, product duplication, listing errors, and data mismatches are inevitable. Our system generates globally unique Master SKUs, maps market-specific identifiers, and synchronizes stock, price, and order data, becoming the backbone of global catalog management.",
    image: "/automatic-sku-generation-img.webp",
    technologies: ["Amazon SP API", "Angular", "NodeJs", "MongoDB", "Docker"],
    link: "/portfolios/automated-sku-identifier-framework",
    year: "2021",
    duration: "8 months",
    teamSize: "12",
    challenges: [
      "Global Marketplace Differences",
      "Duplication Risk",
      "Scaling to Millions of SKUs",
      "Compliance with Marketplace Standards",
      "Bundle & Variation Complexity",
    ],
    solutions: [
      "Unified SKU engine adapting to marketplace rules",
      "Unique Master SKU with serial and validation checks",
      "Optimized batch processing and database indexing",
      "Validation rules for Amazon ASIN and GS1 UPC compliance",
      "Bundle SKU generator and variant-specific mapping",
    ],
    results: [
      "Global Consistency – Unified Master SKU worldwide",
      "Error Prevention – No duplicate or mismatched identifiers",
      "Enterprise-Scale Performance – Handles millions of SKUs",
      "Marketplace Compliance – Matches platform requirements",
      "Automation at Scale – Fully automated SKU and identifier mapping",
    ],
    featured: true,
  },

  {
    id: 7,
    title: "Automated Amazon Review & Feedback Management",
    category: "E-commerce Automation",
    industry: "Amazon FBA/FBM & Multi-Marketplace",
    description:
      "A system that automates Amazon customer review requests, manages seller feedback, and tracks responses to improve engagement and customer satisfaction.",
    longDescription:
      "This system automates the process of sending and managing Amazon customer review requests, ensuring sellers can efficiently engage with buyers and monitor feedback. It enables personalized and timely review requests, tracks responses in real-time, and provides insights to enhance products and services. Additionally, the platform allows sellers to manage their own feedback submissions securely, creating a streamlined workflow for feedback collection, order tracking, and overall customer satisfaction improvements.",
    image: "/amazon-review-feedback.webp",
    technologies: ["Amazon SP API", "React.js", "NodeJs", "MongoDB", "Express", "JWT", "PM2"],
    link: "/portfolios/automated-amazon-review-feedback-management",
    year: "2022",
    duration: "1 month",
    teamSize: "4",
    // budget: "$400k",
    challenges: [
      "Timely Review Requests",
      "API Rate Limits",
      "Large Order Data Volumes",
      "Accurate Feedback Tracking",
      "Seller Credential Security",
    ],
    solutions: [
      "Automated scheduling with cron jobs for timely review requests",
      "Throttling and delay logic to comply with Amazon API limits",
      "Optimized database queries for handling large order datasets",
      "Real-time status tracking with flags (Pending, Sent, Completed)",
      "Secure storage of seller credentials using JWT authentication",
    ],
    results: [
      "Higher Review Response Rates – Improved customer engagement",
      "Scalable Feedback Collection – Efficient handling of large volumes",
      "Accurate Order Tracking – Reliable real-time updates",
      "Secure Data Management – Protected seller credentials",
      "Actionable Insights – Enhanced product and service improvements",
    ],
    featured: true,
  },


  {
    id: 8,
    title: "Unified Courier Tracking & Intelligence Platform",
    category: "Marketplace Solutions",
    industry: "E-commerce",
    description:
      "A unified platform for managing courier operations, including tracking, dispatch, and delivery management across multiple marketplaces.",
    longDescription:
      "This Courier Sync Platform is a comprehensive solution for managing courier operations. It integrates with various courier services (e.g., Bluedart, Shiprocket) and provides real-time tracking, dispatch, and delivery management. The platform ensures seamless communication between couriers and marketplaces like Amazon and Flipkart, enabling efficient order fulfillment and enhanced customer satisfaction.",
    image: "/courier-tracking-simple-compose.webp",
    technologies: [
      "Node.js",
      "React",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "Elasticsearch",
      "RabbitMQ"
    ],
    link: "/portfolios/unified-courier-tracking-intelligence-platform",
    year: "2020",
    duration: "8 months",
    teamSize: "12",
    challenges: [
      "Integrating multiple courier services with differing APIs",
      "Ensuring accurate real-time tracking across platforms",
      "Maintaining compliance for multi-marketplace operations",
      "Optimizing performance under high data volume"
    ],
    solutions: [
      "Real-time tracking integration with major courier APIs",
      "Multi-marketplace compliance and workflow standardization",
      "Performance optimization through scalable architecture",
      "Containerized deployment using Docker and Kubernetes"
    ],
    results: [
      "Seamless courier integration enabling real-time dispatch and tracking",
      "Compliance across Amazon, Flipkart, and other marketplaces",
      "Optimized performance ensuring fast data processing",
      "Highly scalable architecture handling large volumes of orders"
    ],
    featured: true
  },
  {
    id: 9,
    title: "Smart Production & Inventory Tracking Platform",
    category: "Production & Stock Tracking System",
    industry: "E-commerce",
    description:
      "A centralized platform for managing production, inventory, and shipping processes efficiently, minimizing delays and errors across operations.",
    longDescription:
      "Managing production and stock manually across multiple marketplaces is prone to errors and delays. This platform automates PI confirmations, production order creation, and shipping workflows, while providing real-time inventory visibility, audit trails, and compliance monitoring. By centralizing operations, it ensures data integrity, improves efficiency, and supports scalability for high-volume e-commerce operations.",
    image: "/production-stock-tracking.webp",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "PDF Generation",
      "Role-Based Authentication",
      "Real-Time Inventory Tracking",
      "Audit Logging",
      "Workflow Automation",
    ],
    link: "/portfolios/production-inventory-tracking-platform",
    year: "2019",
    duration: "8 months",
    teamSize: "12",
    challenges: [
      "Delays in PI confirmation slowing down production",
      "Manual creation of production and shipping orders",
      "High risk of data inconsistencies and errors",
      "Difficulty tracking real-time stock and production status",
      "Ensuring compliance across multiple marketplaces",
      "System performance with high data volume",
      "Scaling operations without bottlenecks",
    ],
    solutions: [
      "Automated PI confirmation and validation",
      "Production and shipping order automation",
      "Centralized database for consistent inventory and production data",
      "Real-time tracking dashboards for production and stock",
      "Audit logs to maintain data integrity and compliance",
      "Optimized performance for large-scale operations",
      "Modular and scalable architecture for future growth",
    ],
    results: [
      "Faster Production Cycles – Reduced PI and order delays",
      "Error Reduction – Minimized manual entry mistakes",
      "Real-Time Visibility – Up-to-date stock and production info",
      "Multi-Marketplace Compliance – Ensured accuracy for all platforms",
      "Scalable Operations – Supports large volumes efficiently",
    ],
    featured: true,
  },

  {
    id: 10,
    title: "Global Multi-Seller E-Commerce Platform",
    category: "Multi-Seller Marketplace",
    industry: "Global E-Commerce",
    description:
      "A scalable, user-centric platform connecting sellers and customers worldwide, featuring intelligent search, personalized recommendations, and optimized product listings.",
    longDescription:
      "The store is a next-generation multi-seller e-commerce platform designed to empower businesses—from local vendors to international brands—to reach a global audience. Hosting over 1.5 million products across 12,000+ categories and 10+ active stores worldwide, the store delivers fast performance, superior SEO, and cost-efficient infrastructure through advanced technology and intelligent architecture.",
    image: "/multi-seller-e-commerce-platform.webp",
    technologies: ["Node.js", "MongoDB", "Next.js", "Google Merchant API"],
    link: "/portfolios/global-multi-seller-e-commerce-platform",
    year: "2025",
    duration: "12 months",
    teamSize: "15",
    challenges: [
      "Managing millions of products, users, and sellers across regions",
      "Delivering highly relevant search results across 12,000+ categories",
      "Generating optimized SEO content for thousands of pages",
      "Maintaining fast performance under high load",
      "Flexible UI management without developer intervention",
      "Seamless integration with platforms like Google Merchant",
    ],
    solutions: [
      "Optimized database architecture to handle concurrent requests",
      "Personalized recommendations using machine learning algorithms",
      "Elastic Search with longest common subsequence matching for accuracy",
      "Automated SEO content generation for discoverability at scale",
      "High-throughput REST API optimizations",
      "Configurable frontend layouts via admin panel",
      "Google Merchant integration for expanded visibility",
    ],
    results: [
      "Global Reach – Connects sellers to customers worldwide",
      "Intelligent Search – Highly relevant results with minimal latency",
      "SEO at Scale – Automated metadata across thousands of pages",
      "High Performance – Serves millions with minimal infrastructure",
      "Data-Driven Insights – Advanced analytics empowering sellers",
    ],
    featured: true,
  },

  {
    id: 11,
    title: "Smart Warehouse & Inventory Management Platform",
    category: "Inventory Management",
    industry: "E-commerce & Warehousing",
    description:
      "A next-gen platform for real-time stock tracking, automated workflows, and efficient warehouse operations to prevent overselling and maintain inventory accuracy.",
    longDescription:
      "Managing multiple warehouses manually is prone to errors, delays, and stock mismatches. This platform provides real-time inventory visibility, automates stock imports and exports, streamlines order fulfillment, and ensures complete audit-ready traceability across all warehouse operations. It reduces operational friction and improves warehouse efficiency while maintaining accurate stock levels across locations.",
    image: "/warehouse-inventory-stock-img.webp",
    technologies: ["Node.js", "MongoDB", "Next.js", "Tailwind CSS", "Real-Time Tracking", "Workflow Automation"],
    link: "/portfolios/warehouse-inventory-management-platform",
    year: "2023",
    duration: "10 months",
    teamSize: "10",
    challenges: [
      "Stock mismatches during concurrent updates",
      "Time-consuming onboarding of new inventory",
      "Overselling due to delayed stock synchronization",
      "Items misplaced across multiple warehouse locations",
      "Difficulty tracking unrecognized inventory during audits",
      "Confusion between bin-based and non-bin auditing processes",
    ],
    solutions: [
      "Automatic stock deductions during picking and order processing",
      "Bulk inventory uploads with auto-generated serial numbers",
      "Real-time stock verification and export visibility",
      "Highlight misplaced items with edit location options",
      "Move discrepancies to Pending Inventory for reconciliation",
      "Separate and streamlined workflows for bin vs. non-bin audits",
    ],
    results: [
      "Enterprise-Scale Accuracy – Real-time stock updates across warehouses",
      "Operational Efficiency – Automated imports, exports, and audits",
      "Error Reduction – Minimizes overselling and inventory mismatches",
      "Seamless Automation – Smooth workflows from scanning to deduction",
      "Audit-Ready – Full traceability for compliance and reporting",
    ],
    featured: true,
  },
  {
    id: 12,
    title: "Inspection Management Web System",
    category: "Inspection Management",
    industry: "Manufacturing & Logistics",
    description:
      "A centralized inspection management platform that supports real-time and offline operations, report generation, attachment handling, and seamless data synchronization.",
    longDescription:
      "This Inspection Management Web System streamlines the entire inspection lifecycle for manufacturing and logistics operations. It enables inspectors to work online or offline, capture and store attachments, and automatically sync data across systems when connected. With built-in reporting tools, audit trails, and scalable architecture, it ensures accuracy, compliance, and operational efficiency while handling large inspection volumes with ease.",
    image: "/inspection-management-web-system.webp",
    technologies: ["Node.js", "Next.js", "MongoDB", "IndexedDB", "Tailwind CSS"],
    link: "/portfolios/inspection-management-web-system",
    year: "2024",
    duration: "8 months",
    teamSize: "12",
    challenges: [
      "Performing inspections in offline environments",
      "Maintaining data consistency across systems",
      "Managing large volumes of attachments and images",
      "Generating detailed reports quickly",
      "Ensuring compliance with complete audit trails",
      "Scaling to handle growing inspection data",
    ],
    solutions: [
      "Offline-first support with IndexedDB for local storage",
      "Automatic synchronization with MongoDB when reconnected",
      "Efficient image compression and attachment management",
      "Automated PDF and Excel report generation with analytics",
      "Comprehensive logging for audits and system monitoring",
      "Scalable architecture powered by Node.js and MongoDB",
    ],
    results: [
      "Real-Time Insights – Centralized and accurate inspection data",
      "Offline Capability – Inspections continue without internet access",
      "Efficient Reporting – Instant PDF/Excel reports with metrics",
      "Data Consistency – Seamless sync across integrated systems",
      "Audit-Ready – Transparent logs for compliance and security",
      "Future-Ready – Scales effortlessly with inspection growth",
    ],
    featured: true,
  },

  {
    id: 13,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    industry: "Online Retail",
    description:
      "A customer-friendly e-commerce platform designed for speed, scalability, and intelligence, delivering a seamless shopping experience for buyers and sellers.",
    longDescription:
      "E-Commerce Platform is a next-generation e-commerce platform built with cloud-native architecture, offering a smooth shopping experience akin to Amazon or Flipkart. It features fast ElasticSearch-powered product discovery, optimized media handling with AWS S3, smart warehouse allocation, real-time order tracking, and automated order management. E-Commerce Platform simplifies seller onboarding and provides robust tools for managing stock, orders, and promotions, ensuring scalability and reliability for all stakeholders.",
    image: "/e-commerce-platform.webp",
    technologies: ["React.js", "Node.js", "MongoDB", "AWS", "S3", "Lambda", "Docker"],
    link: "/portfolios/e-commerce-platform",
    year: "2022",
    duration: "9 months",
    teamSize: "10",
    challenges: [
      "Slow product search with large catalogs",
      "High load and scaling issues",
      "Manual order processing delays",
      "Complex seller onboarding",
      "Stock mismatch and overselling",
      "Courier and delivery tracking issues",
      "Media and catalog management bottlenecks",
    ],
    solutions: [
      "ElasticSearch-powered search for instant results",
      "Cloud-native AWS and Docker architecture for scalability",
      "End-to-end automation for order processing",
      "Simplified 'Get in Touch' seller onboarding",
      "Smart warehouse allocation to prevent overselling",
      "Real-time tracking dashboard with automated notifications",
      "AWS S3 and Lambda for optimized media and catalog management",
    ],
    results: [
      "Fast Search – Instant product discovery with ElasticSearch",
      "Scalable Performance – Handles high traffic with AWS and Docker",
      "Efficient Order Processing – Automated from checkout to delivery",
      "Simplified Seller Onboarding – Streamlined process for sellers",
      "Accurate Inventory – Prevents overselling with smart allocation",
      "Real-Time Tracking – Transparent order updates for customers",
      "Reliable Media Handling – Fast browsing with S3 and Lambda",
    ],
    featured: true,
  },

  {
    id: 14,
    title: "bookstore – Your Ultimate Online Webshop",
    category: "E-commerce",
    industry: "Online Bookstore",
    description:
      "A dedicated online bookstore offering an extensive collection of English-language books, optimized for efficient discovery and purchase across the EU.",
    longDescription:
      "bookstore is a specialized e-commerce platform focused solely on books. It simplifies browsing, ordering, and tracking across millions of titles, catering to book buyers and sellers across the EU. With ElasticSearch-powered search, full order lifecycle management, EU payment compliance, VAT handling, and automated returns and refunds, the platform ensures a fast, precise, and user-friendly shopping experience.",
    image: "/book-store.webp",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "ElasticSearch",
      "AWS",
      "S3",
      "Docker"
    ],
    link: "/portfolios/book-store",
    year: "2023",
    duration: "10 months",
    teamSize: "15",
    challenges: [
      "Managing 26M+ book records",
      "Slow product search",
      "Complex order tracking",
      "Inventory mismatch / overselling",
      "EU VAT compliance",
      "Multi-payment handling",
      "Complex returns & refunds",
      "High traffic and scalability requirements"
    ],
    solutions: [
      "MongoDB + ElasticSearch for high-volume, real-time queries",
      "Optimized ElasticSearch indexing for instant search results",
      "Integrated tracking dashboard with real-time updates",
      "Automated stock synchronization across warehouses and sellers",
      "Country-specific VAT rules automatically applied",
      "Supports Visa, MasterCard, PayPal, Klarna, iDeal, Bancontact, Sofort",
      "Automated return & refund workflows",
      "AWS cloud infrastructure + Docker for scalable and reliable performance"
    ],
    results: [
      "Rapid Search – Instant book discovery across millions of titles",
      "Efficient Inventory – Accurate stock management preventing overselling",
      "Seamless Order Processing – Full lifecycle from checkout to delivery",
      "EU Compliance – Automated VAT and multi-currency handling",
      "Flexible Payments – Support for all major EU payment methods",
      "High Satisfaction – Fast delivery and easy returns boosting customer trust"
    ],
    featured: true
  },

  {
    id: 15,
    title: "Return & Refund Automation System",
    category: "E-commerce Returns Management",
    industry: "Amazon FBA/FBM",
    description:
      "A unified platform for managing Amazon returns, enabling real-time scanning, Safe-T claim filing, reimbursement tracking, and actionable insights.",
    longDescription:
      "The Return & Refund Automation System streamlines Amazon return management with a centralized platform for tracking, scanning, and validating returns. It automates Safe-T claim filing for damaged or missing items, ensures compliance with Amazon policies, and maximizes reimbursement recovery. With real-time dashboards and AI-driven insights, it reduces errors, accelerates workflows, and enhances transparency for warehouse teams and e-commerce operations.",
    image: "/return-operations-refund-automation.webp",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Amazon SP-API",
      "AI-Powered Automation",
      "Docker",
      "Google Docs",
    ],
    link: "/portfolios/return-and-refund-automation-system",
    year: "2019",
    duration: "7 months",
    teamSize: "10",
    challenges: [
      "Frequent updates to Amazon return policies",
      "High daily volume of returns",
      "Accurate capture of SKUs and tracking information",
      "Safe-T claim rejections due to incorrect filing",
      "Dependence on disciplined warehouse scanning",
      "Seamless integration with Amazon APIs",
    ],
    solutions: [
      "Dynamic synchronization with Amazon’s latest return policies",
      "Scalable architecture for handling high-volume returns",
      "Barcode-based scanning for precise data capture",
      "Automated Safe-T claim validation and filing",
      "Intuitive scanning interface for warehouse teams",
      "Robust Amazon SP-API integration for real-time updates",
    ],
    results: [
      "Centralized Tracking – Complete visibility into return statuses",
      "Error Reduction – Barcode scanning minimizes manual mistakes",
      "Maximized Reimbursements – Achieved 92% claim recovery",
      "Faster Processing – Real-time scanning and validation workflows",
      "Compliance Assurance – Full adherence to Amazon policies",
      "Actionable Insights – AI-driven analytics for return trends",
    ],
    featured: true,
  },

  {
    id: 16,
    title: "Automated Product Data Extraction Platform",
    category: "E-commerce Data Automation",
    industry: "E-commerce & Retail",
    description:
      "Automates product data extraction, normalization, and organization from multiple online sources with speed and accuracy.",
    longDescription:
      "The Web Scraping Tool empowers e-commerce businesses to automatically collect, clean, and integrate product data from various websites and marketplaces. By eliminating manual data entry, ensuring consistency, and supporting scalable operations, it streamlines inventory, pricing, and catalog management while maintaining high data quality.",
    image: "/automated-product-data-extraction-platform.webp",
    technologies: ["Node.js", "Puppeteer", "MongoDB", "AWS", "Redis", "Elasticsearch"],
    link: "/portfolios/automated-product-data-extraction-platform",
    year: "2025",
    duration: "6 months",
    teamSize: "10",
    challenges: [
      "Frequent changes in website layouts causing extraction failures",
      "Manual updates are slow and error-prone",
      "Duplicate or inconsistent product information across sources",
      "Anti-bot mechanisms and restrictions on target websites",
      "Data mismatches during integration with internal systems",
      "Managing proxies for large-scale scraping operations",
    ],
    solutions: [
      "Dynamic parser rules with fallback mechanisms to handle layout changes",
      "Automated scheduled crawls with real-time alerts",
      "Normalization and deduplication engine for consistent data",
      "Proxy rotation and headless browsing to bypass restrictions",
      "Standardized export formats and field mapping for integration",
      "Centralized proxy pool with rotation and failover management",
    ],
    featured: true,
  },

  {
    id: 7,
    title: "Canva Smart Image Upload Kit",
    category: "Canva Automation",
    industry: "Amazon FBA/FBM & Multi-Marketplace",
    description: "A smart image upload kit for Canva that automates the process of uploading images to Canva, ensuring that the images are uploaded correctly and efficiently.",
    longDescription: "The Canva Smart Image Upload Kit is a smart image upload kit for Canva that automates the process of uploading images to Canva, ensuring that the images are uploaded correctly and efficiently.",
    image: "/canva-ui-kit.webp",
    technologies: [
      "Canva API",
      "React.js",
      "NodeJs",
      "MongoDB",
      "Express",
      "JWT",
      "PM2"
    ],
    link: "/portfolios/canva-smart-image-upload-kit",
    year: "2025",
    duration: "6 months",
    teamSize: "12",
    // budget: "$400k",
    challenges: [
      "Timely Review Requests causing delays in image uploads",
      "API Rate Limits imposed by Canva restricting batch uploads",
      "Handling large order data and image volumes efficiently",
      "Maintaining accurate feedback and upload status tracking",
      "Ensuring secure storage and access of seller credentials"
    ],
    solutions: [
      "Automated scheduling via cron jobs for timely and sequential uploads",
      "Implemented throttling and delay mechanisms to comply with Canva API limits",
      "Optimized database queries and batching logic for large image volumes",
      "Real-time tracking with status flags (Pending, Uploaded, Failed) for transparency",
      "Encrypted storage of credentials and secure API authentication with Canva"
    ],
    results: [
      "Improved Efficiency – Faster and reliable image uploads",
      "Scalable Uploads – Capable of handling high-volume image batches",
      "Accurate Tracking – Clear visibility on image upload statuses",
      "Secure Credential Management – Protected Canva account data",
      "Operational Insights – Data-driven improvements for image upload workflows"
    ],
    "featured": true
  }
];

export const categories = [
  "All",
  "Marketplace Solutions",
  "Healthcare",
  "E-Commerce",
  "FinTech",
  "Education Solutions",
  "Property Solutions",
  "Mobile Apps",
  "Travel Solutions",
];

export const technologies = [
  "All",
  "React",
  "Node.js",
  "Python",
  "Flutter",
  "Vue.js",
  "Angular",
  "Firebase",
  "AWS",
  "MongoDB",
  "PostgreSQL",
];

export const industries = [
  "All",
  "E-commerce",
  "Healthcare",
  "Finance",
  "Education",
  "Real Estate",
  "Food & Beverage",
  "Health & Fitness",
  "Travel",
];
