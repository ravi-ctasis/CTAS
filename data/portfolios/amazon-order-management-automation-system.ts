import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const amazonOrderManagementAutomationSystemData: PortfolioDetailData = {
  title: "Amazon Order Management & Automation System",
  category: "E-commerce Automation",
  industry: "Amazon FBA/FBM",
  description:
    "A next-generation platform that automates Amazon order processing, Seller-Flex handling, and courier integration for seamless fulfillment.",
  longDescription:
    "A next-generation automation platform that simplifies and accelerates Amazon order processing.It delivers end-to-end auto ordering, order management, Seller-Flex handling, and courier integration, ensuring that every order is processed with accuracy, speed, and full visibility. ",
  image: "/image.webp",
  technologies: [
    "Amazon SP API & Bussiness API",
    "Angular",
    "NodeJs",
    "MongoDB",
    "Docker",
  ],
  link: "#",
  featured: true,
  stats: {
    views: "25k",
    likes: "3k",
    clients: "150+",
    revenue: "$2.5M+",
    efficiency: "95%",
    accuracy: "99%",
  },
  year: "2025",
  duration: "8 months",
  teamSize: "12",
  budget: "$400k",
  status: "Completed",
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
    "Zero-Touch Processing – Fully automated order-to-delivery workflow",
    "Seller-Flex Ready – Seamless integration with Amazon warehouses",
    "Error-Free Fulfillment – Reduced errors with picklist and scan flow",
    "Amazon Compliance – Auto-synced tracking and statuses",
    "Scalable Operations – Supports high-volume, multi-account setups",
  ],
  features: [
    {
      title: "Automated Order Placement",
      description:
        "Dynamically places orders with safeguards for stock, price, and handling time, plus auto-cancellation logic.",
      icon: "Zap",
    },
    {
      title: "Seller-Flex Integration",
      description:
        "Manages inbound/outbound Seller-Flex orders with real-time sync and SLA compliance.",
      icon: "Package",
    },
    {
      title: "Intelligent Order Management",
      description:
        "Automates picklists, pack-and-scan flows, and courier integrations for efficient fulfillment.",
      icon: "ShoppingCart",
    },
    {
      title: "Tracking & Return Management",
      description:
        "Unified dashboard for tracking and automated handling of returns and refunds.",
      icon: "Search",
    },
    {
      title: "Courier Integration",
      description:
        "Seamless integration with Bluedart, Shiprocket, and others for label generation and tracking.",
      icon: "Truck",
    },
    {
      title: "Secure & Compliant",
      description:
        "Ensures data security and compliance with Amazon's API and operational standards.",
      icon: "Shield",
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
    badge: "Amazon Automation Solution",
    badgeIcon: "Zap",
    titleLine1: "Amazon Order Management",
    titleLine2: "& Automation System",
    heroImage: {
      src: "/amazon-auto-ordering-order-management.webp",
      alt: "Amazon Order Automation Platform",
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
          title: "Zero-Touch Order Processing",
          description: "From placement to delivery confirmation.",
          icon: "Zap",
        },
        {
          title: "Seller-Flex Ready",
          description: "Seamless integration for inbound/outbound Seller-Flex flows.",
          icon: "Package",
        },
        {
          title: "Courier-Agnostic Flexibility",
          description: "Plug & play with multiple logistics providers.",
          icon: "Truck",
        },
        {
          title: "Error-Free Fulfillment",
          description: "Picklist + pack & scan flow reduces mistakes.",
          icon: "CheckCircle",
        },
        {
          title: "Amazon-Synced Compliance",
          description: "From placement to delivery confirmation.",
          icon: "Shield",
        },
        {
          title: "Scalable Architecture",
          description: "Handles high-volume operations and multi-account setups.",
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
          title: "Automated Order Placement & Safeguards",
          intro:
            "Intelligent automation engine for accurate, compliant, and efficient Amazon order placement:",
          items: [
            "Automatic order placement based on configurable product rules",
            "Stock protection to prevent overselling and maintain inventory accuracy",
            "Price threshold monitoring for safe automated pricing",
            "Handling time compliance to meet Amazon standards",
            "Auto-cancellation of invalid or non-compliant orders",
            "Real-time order tracking updates for full visibility",
          ],
          closing:
            "This module ensures a fully automated, error-free, and Amazon-compliant order placement workflow.",
          icon: "Zap",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Seller-Flex Order Processing",
          intro:
            "Streamlined processing for Seller-Flex orders with intelligent routing, automated reconciliation, and full visibility across fulfillment types.",
          groups: [
            {
              title: "Seller-Flex Integration",
              items: [
                "Direct handling of Seller-Flex warehouse orders.",
                "Automatic sync for inbound and outbound shipments.",
                "Ensures SLA compliance with Amazon Seller-Flex standards.",
              ],
            },
            {
              title: "Hybrid Fulfillment",
              items: [
                "Intelligent routing for Seller-Flex, FBM, or 3PL fulfillment.",
                "Optimizes both cost and delivery speed.",
              ],
            },
            {
              title: "Centralized Visibility",
              items: [
                "Unified dashboard for all order types.",
                "Automatic reconciliation of shipments, returns, and exceptions.",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Intelligent Order Management Flow",
          intro:
            "Streamlined order fulfillment with automation, courier integration, and real-time tracking to ensure accurate and timely deliveries.",
          groups: [
            {
              title: "Picklist & Fulfillment Automation",
              items: [
                "Auto-generated picklists for physical orders.",
                "Integrated pack-and-scan workflow to minimize errors.",
              ],
            },
            {
              title: "Courier & Label Integration",
              items: [
                "Supports Bluedart, Shiprocket, Delhivery, and other couriers.",
                "One-click label generation and shipping documentation.",
              ],
            },
            {
              title: "Shipment Confirmation & Tracking",
              items: [
                "Automatically marks orders as shipped/delivered via courier updates.",
                "Provides real-time first-mile and last-mile tracking visibility.",
              ],
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Tracking & Return Management",
          intro:
            "Complete visibility and control over shipments and returns, ensuring timely updates, accurate reconciliation, and compliance with Amazon standards.",
          groups: [
            {
              title: "Tracking Hub",
              items: [
                "Unified dashboard displaying all courier updates in real-time.",
                "Automatic synchronization of shipment statuses to Amazon.",
              ],
            },
            {
              title: "Return & Refund Flow",
              items: [
                "Simplified customer return processing with automated workflows.",
                "Automatic reconciliation of returns with courier updates.",
              ],
            },
            {
              title: "Compliance & Automation",
              items: [
                "Ensures Amazon-compliant return and refund processes.",
                "Tracks refunds, replacements, and credits automatically.",
              ],
            },
          ],
          icon: "Search",
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
          title: "Auto Ordering Engine",
          intro:
            "A dynamic engine that automates order placement with robust safeguards and scalable performance for high-volume Amazon operations.",
          subsections: [
            {
              title: "Dynamic Safeguards",
              description:
                "Configurable thresholds for price, stock, and handling time ensure only valid orders are placed.",
            },
            {
              title: "Auto-Cancellation",
              description:
                "Invalid orders are automatically canceled with fallback handling to maintain operational integrity.",
            },
            {
              title: "Scalable Processing",
              description:
                "Designed to handle high-volume order placement efficiently, without delays or system bottlenecks.",
            },
          ],
          icon: "Zap",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Order Processing Core",
          intro:
            "Centralized order management engine designed to streamline the fulfillment process and reduce operational errors.",
          subsections: [
            {
              title: "Pick-Pack-Ship Automation",
              description:
                "Automates picklist generation, packing, and scan validation to speed up the fulfillment process.",
            },
            {
              title: "Courier-Agnostic Fulfillment",
              description:
                "Integrates with multiple 3PL and courier partners, ensuring flexible and reliable delivery.",
            },
            {
              title: "Error Reduction",
              description:
                "Barcode-based validation and automated checks guarantee accurate and error-free shipments.",
            },
          ],
          icon: "Package",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Tracking & Compliance Layer",
          intro:
            "Ensures seamless tracking, compliance, and returns management across Amazon orders.",
          subsections: [
            {
              title: "Real-Time Tracking",
              description:
                "Automatically syncs tracking numbers and courier events with Amazon Seller Central for up-to-date order visibility.",
            },
            {
              title: "Automated Compliance",
              description:
                "Confirms tracking and delivery statuses automatically, ensuring all orders meet Amazon compliance standards.",
            },
            {
              title: "Return & Refund Management",
              description:
                "Handles returns and refunds efficiently with automated reconciliation, reducing manual intervention and errors.",
            },
          ],
          icon: "Search",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability for Amazon order automation.",
    },
    {
      type: "cta",
      title: "Ready to Automate Your Amazon Orders?",
      description:
        "Let's discuss how our automation platform can streamline your order processing and boost efficiency.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
