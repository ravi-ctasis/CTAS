import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const bookStoreData: PortfolioDetailData = {
  title: "bookstore – Your Ultimate Online Webshop",
  category: "E-commerce",
  industry: "Online Bookstore",
  description:
    "A dedicated online bookstore offering an extensive collection of English-language books, optimized for efficient book discovery and purchase across the EU.",
  longDescription:
    "bookstore is a specialized e-commerce platform for books only, designed to simplify browsing, ordering, and tracking across millions of titles. The platform serves book buyers and sellers across the EU zone, offering a fast, precise, and user-friendly experience with ElasticSearch-powered search, full order lifecycle management, EU payment methods, VAT compliance, and automated returns/refunds.",
  image: "/bookstore-hero.webp",
  technologies: ["React", "Node.js", "MongoDB", "ElasticSearch", "AWS", "S3", "Docker"],
  link: "#",
  featured: true,
  stats: {
    books: "26M+",
    orders: "100k+",
    satisfaction: "98%",
    deliveries: "95%",
  },
  year: "2025",
  duration: "10 months",
  teamSize: "15",
  budget: "$350k",
  challenges: [
    "Handling over 26 million book records efficiently",
    "Providing lightning-fast search across millions of titles",
    "Tracking complex orders across multiple EU warehouses",
    "Preventing inventory mismatches and overselling",
    "Ensuring compliance with country-specific VAT regulations",
    "Supporting multiple payment gateways seamlessly",
    "Managing returns and refunds across EU countries",
    "Maintaining high performance under heavy traffic spikes",
  ],
  solutions: [
    "Leveraged MongoDB + ElasticSearch for high-volume, real-time queries",
    "Implemented optimized ElasticSearch indexing for instant search results",
    "Built an integrated tracking dashboard for real-time order visibility",
    "Automated stock synchronization across warehouses and sellers",
    "Applied dynamic VAT rules per country automatically",
    "Integrated multiple EU payment gateways including Visa, MasterCard, PayPal, Klarna, iDeal, Bancontact, Sofort",
    "Developed automated return & refund workflows to reduce manual effort",
    "Deployed on AWS cloud with Docker for scalability and high availability",
  ],
  results: [
    "Rapid Search – Instant book discovery across millions of titles",
    "Efficient Inventory – Accurate stock management preventing overselling",
    "Seamless Order Processing – Full lifecycle from checkout to delivery",
    "EU Compliance – Automated VAT and multi-currency handling",
    "Flexible Payments – Support for all major EU methods",
    "High Satisfaction – Fast delivery and easy returns boosting trust",
  ],
  features: [
    {
      title: "ElasticSearch Optimization",
      description: "Fast search across millions of books with precise, instant results.",
      icon: "Search",
    },
    {
      title: "Scalable Inventory Management",
      description: "Handles massive datasets reliably with MongoDB and automated sync.",
      icon: "Database",
    },
    {
      title: "Full Order Management Automation",
      description: "Checkout, shipping, tracking, returns, and refunds.",
      icon: "ShoppingCart",
    },
    {
      title: "EU-Ready Compliance",
      description: "Country-specific VAT and multi-currency handling.",
      icon: "Shield",
    },
    {
      title: "Payment Flexibility",
      description: "Supports Visa, MasterCard, PayPal, Klarna, iDeal, Bancontact, Sofort.",
      icon: "TrendingUp",
    },
    {
      title: "Modern Tech Stack",
      description: "React, Node.js, MongoDB, Docker, AWS, S3, ElasticSearch for speed and scalability.",
      icon: "Zap",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "Code", description: "Dynamic UI framework" },
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
      category: "Search Engine",
      technologies: [
        { name: "ElasticSearch", icon: "Search", description: "Fast book search" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "Cloud", description: "Cloud infrastructure" },
        { name: "S3", icon: "Database", description: "Secure media storage" },
        { name: "Docker", icon: "Package", description: "Containerization" },
      ],
    },
  ],
  hero: {
    badge: "Online Bookstore Solution",
    badgeIcon: "BookOpen",
    titleLine1: "bookstore",
    titleLine2: "Your Ultimate Online Webshop",
    heroImage: { src: "/book-setore-img.webp", alt: "bookstore Online Webshop" },
    heroStats: [
      { valueKey: "books", label: "Books in Inventory" },
      { valueKey: "orders", label: "Orders Processed" },
      { valueKey: "satisfaction", label: "Customer Satisfaction" },
    ],
  },
  sections: [
    {
      type: "advantages",
      title: "Key Differentiators & Client Value",
    },
    {
      type: "core-functionality",
      title: "Core Functionality & Intelligence",
      blocks: [
        {
          variant: "list",
          number: 1,
          title: "Catalog Discovery & Search",
          intro:
            "Discover books instantly with advanced search capabilities tailored for millions of titles:",
          items: [
            "ElasticSearch-powered instant search for books and authors",
            "View detailed book info, pricing (including VAT), and stock availability",
            "Optimized for high-volume catalogs with millions of titles",
            "Faceted filtering and sorting for precise book discovery",
          ],
          closing: "Enables users to find the right book quickly with accurate and responsive search.",
          icon: "Search",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Secure Checkout & Payments",
          intro: "",
          groups: [
            {
              title: "Payment Methods",
              items: [
                "Supports Visa, MasterCard, PayPal, Klarna",
                "iDeal, Bancontact, Sofort for EU customers",
              ],
            },
            {
              title: "VAT & Compliance",
              items: [
                "Country-specific VAT applied automatically during checkout",
                "Handles multiple currencies across EU regions",
                "Ensures tax compliance with EU regulations",
              ],
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Order Lifecycle Management",
          intro: "End-to-end order handling from warehouse processing to delivery confirmation.",
          groups: [
            {
              title: "Warehouse Operations",
              items: [
                "Intelligent warehouse selection for fastest fulfillment",
                "Automated picklists, packing, and inventory updates",
                "Optimized order batching for efficiency",
              ],
            },
            {
              title: "Shipping & Delivery",
              items: [
                "Integrated courier partners with live tracking",
                "Automatic delivery confirmation and status notifications",
                "Alerts for delays or exceptions to ensure timely resolution",
              ],
            },
            {
              title: "Order Analytics",
              items: [
                "Insights on fulfillment speed and delivery performance",
                "Identifies bottlenecks and suggests optimizations",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Returns & Refunds",
          intro:
            "Efficient and compliant handling of returns and refunds to enhance customer satisfaction.",
          groups: [
            {
              title: "Automated Return Workflows",
              items: [
                "Simplified return initiation and processing for customers",
                "Auto-generated refund transactions linked with order history",
                "Integration with inventory to update returned stock automatically",
              ],
            },
            {
              title: "Compliance & Reporting",
              items: [
                "Ensures EU-compliant return policies and tax handling",
                "Tracks refunds, customer credits, and inventory adjustments",
                "Generates reports for auditing and operational insights",
              ],
            },
            {
              title: "Customer Experience",
              items: [
                "Clear status updates for every return request",
                "Reduces processing time to increase customer trust and satisfaction",
              ],
            },
          ],
          icon: "Shield",
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
          title: "ElasticSearch Engine",
          intro: "High-performance search engine optimized for millions of book records.",
          subsections: [
            {
              title: "Optimized Indexing",
              description:
                "Efficiently indexes millions of books to deliver instant search results with accurate relevance ranking.",
            },
            {
              title: "Scalable & Real-Time Search",
              description:
                "Handles high traffic with fast query responses, ensuring users can discover books across the catalog seamlessly.",
            },
            {
              title: "Advanced Filtering & Sorting",
              description:
                "Supports filters by category, author, price, availability, and VAT-inclusive pricing for precise search results.",
            },
          ],
          icon: "Search",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Order Management Core",
          intro: "Comprehensive system for managing the entire order lifecycle efficiently.",
          subsections: [
            {
              title: "Full Lifecycle Automation",
              description:
                "Automates checkout, warehouse selection, order picking, packing, shipping, and delivery confirmation for seamless order processing.",
            },
            {
              title: "Returns & Refunds",
              description:
                "Manages returns with automated workflows, refund reconciliation, and updates to inventory, ensuring compliance and customer satisfaction.",
            },
            {
              title: "Real-Time Tracking & Notifications",
              description:
                "Provides live updates to customers and internal dashboards for order status, shipping progress, and delivery confirmation.",
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Compliance & Payment Layer",
          intro: "Ensures secure, compliant transactions for EU customers with flexible payment support.",
          subsections: [
            {
              title: "EU VAT Compliance",
              description:
                "Automatically calculates and applies country-specific VAT rules for all purchases, ensuring full EU tax compliance.",
            },
            {
              title: "Multi-Payment Integration",
              description:
                "Supports major EU payment methods including Visa, MasterCard, PayPal, Klarna, iDeal, Bancontact, and Sofort for a seamless checkout experience.",
            },
            {
              title: "Secure Transactions",
              description:
                "Implements end-to-end encryption and secure payment gateways to protect customer data and transaction integrity.",
            },
          ],
          icon: "Shield",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability for online book commerce.",
    },
    {
      type: "cta",
      title: "Ready to Launch Your Online Bookstore?",
      description:
        "Let's discuss how bookstore.nl can provide a seamless e-commerce experience for books with fast search and EU compliance.",
    },
  ],
};
