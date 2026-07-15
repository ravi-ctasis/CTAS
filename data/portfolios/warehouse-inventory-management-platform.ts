import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const warehouseInventoryManagementPlatformData: PortfolioDetailData = {
  title: "Smart Warehouse & Inventory Management Platform",
  category: "Inventory Management",
  industry: "E-commerce & Warehousing",
  description:
    "An intelligent platform for real-time stock visibility, automated workflows, and seamless warehouse operations to prevent overselling and ensure accuracy.",
  longDescription:
    "Warehousing operations are becoming more complex. Managing inventory manually across multiple warehouses leads to mismatches, errors, and delays. Our system provides real-time stock visibility, automates imports and exports, streamlines order fulfillment, and ensures audit-ready traceability across all operations.",
  image: "/portfolio-banners/warehouse-inventory-management-platform.webp",
  technologies: ["Node.js", "MongoDB", "Next.js", "Tailwind CSS"],
  link: "/portfolios/warehouse-inventory",
  featured: true,
  stats: {
    accuracy: "99.8%",
    orders: "100k+",
    warehouses: "10+",
    audits: "500+",
  },
  year: "2025",
  duration: "10 months",
  teamSize: "10",
  budget: "",
  status: "Completed",
  challenges: [
    "Real-time stock mismatches across warehouses",
    "Labor-intensive onboarding of new inventory",
    "Risk of overselling due to delayed updates",
    "Items misplaced across multiple warehouse locations",
    "Difficulty identifying unrecognized inventory during audits",
    "Complexity in managing bin vs. non-bin audits",
  ],
  solutions: [
    "Automated stock deductions during picking and order processing",
    "Bulk inventory uploads with auto-generated serial numbers",
    "Real-time stock verification and export visibility",
    "Highlight misplaced items with quick Edit Location options",
    "Move discrepancies to Pending Inventory for smooth reconciliation",
    "Streamlined, separate workflows for bin and non-bin audits",
  ],
  results: [
    "Enterprise-Scale Accuracy – Real-time updates across warehouses",
    "Streamlined Operations – Automated imports, exports, and audits",
    "Error Reduction – Prevents overselling and mismatches",
    "Full Automation – Seamless workflows from scanning to deduction",
    "Audit-Ready – Full traceability for compliance",
  ],
  features: [
    {
      title: "Warehouse Inventory Listing ",
      description: "Displays stock levels across warehouses with search and pagination.",
      icon: "Package",
    },
    {
      title: "Automated Order Fulfillment",
      description: "Verifies stock in real-time and moves orders to Picklist or Purchase.",
      icon: "Zap",
    },
    {
      title: "Import Warehouse Inventory ",
      description: "Auto-generates serial numbers and supports bulk inventory uploads.",
      icon: "Database",
    },
    {
      title: "Export Workflow",
      description: "Ensures real-time visibility and prevents export mismatches.",
      icon: "Server",
    },
    {
      title: "Serial Number Audit",
      description: "Streamlined bin and non-bin audit processes for accuracy.",
      icon: "Search",
    },
    {
      title: "Scalable Architecture",
      description: "Handles multiple warehouses with minimal infrastructure costs.",
      icon: "Settings",
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
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "Code", description: "Dynamic UI framework" },
        { name: "Tailwind CSS", icon: "Code", description: "Utility-first styling" },
      ],
    },
  ],
  hero: {
    badge: "Inventory Management Solution",
    badgeIcon: "Package",
    titleLine1: "Smart Warehouse &",
    titleLine2: "Inventory Management Platform",
    heroImage: {
      src: "/portfolio-banners/warehouse-inventory-management-platform.webp",
      alt: "Warehouse Inventory & Stock Management System",
    },
    heroStats: [
      { valueKey: "accuracy", label: "Stock Accuracy" },
      { valueKey: "orders", label: "Orders Processed" },
      { valueKey: "warehouses", label: "Warehouses Managed" },
    ],
    ctaLabel: "Get Free Quote",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "Real-Time Stock Visibility",
          description: "Displays stock levels across warehouses with search and pagination.",
          icon: "Package",
        },
        {
          title: "Automated Order Fulfillment",
          description: "Verifies stock in real-time and moves orders to Picklist or Purchase.",
          icon: "Zap",
        },
        {
          title: "Bulk Import Automation",
          description: "Auto-generates serial numbers and supports bulk uploads.",
          icon: "Database",
        },
        {
          title: "Export Workflow",
          description: "Ensures real-time visibility and prevents export mismatches.",
          icon: "Server",
        },
        {
          title: "Serial Number Audit",
          description: "Streamlined bin and non-bin audit processes for accuracy.",
          icon: "Search",
        },
        {
          title: "Scalable Architecture",
          description: "Handles multiple warehouses with minimal infrastructure.",
          icon: "Settings",
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
          title: "Real-Time Stock Visibility",
          intro: "Gain full transparency of inventory across all warehouse locations:",
          items: [
            "View stock levels per warehouse instantly",
            "Searchable serial numbers with pagination for easy tracking",
            "Real-time updates ensure accurate inventory reporting",
          ],
          closing: "Helps prevent stock discrepancies and supports efficient warehouse operations.",
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Automated Order Fulfillment",
          intro: "",
          groups: [
            {
              title: "Real-Time Order Verification",
              items: [
                "Verifies stock availability instantly",
                "Automatically moves orders to Picklist or Purchase workflows",
              ],
            },
            {
              title: "Stock Deduction & Oversell Prevention",
              items: [
                "Deducts stock dynamically during picking or order processing",
                "Ensures inventory levels stay accurate to prevent overselling",
              ],
            },
          ],
          closing:
            "Automates fulfillment processes, reducing manual effort and errors while maintaining accurate stock levels.",
          icon: "Zap",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Import & Export Workflows",
          intro: "",
          groups: [
            {
              title: "Bulk Import",
              items: [
                "Automatically generates unique serial numbers for items",
                "Supports bulk uploads with warehouse-specific mapping",
              ],
            },
            {
              title: "Export Management",
              items: [
                "Provides real-time stock visibility during exports",
                "Ensures eligible items are matched correctly to prevent errors",
              ],
            },
          ],
          closing:
            "Streamlines import/export operations, minimizing manual effort while maintaining inventory accuracy.",
          icon: "Database",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Serial Number Audit",
          intro: "",
          groups: [
            {
              title: "Bin Audit",
              items: [
                "Scan or input serial numbers for real-time verification",
                "Edit item locations to correct misplaced stock",
              ],
            },
            {
              title: "Non-Bin Audit",
              items: [
                "Verify items not assigned to specific bins",
                "Move unrecognized items to Pending Inventory for reconciliation",
              ],
            },
          ],
          closing: "Ensures complete traceability and accuracy of all warehouse inventory.",
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
          title: "Inventory Listing Engine",
          intro: "",
          subsections: [
            {
              title: "Stock Visibility",
              description:
                "Provides a comprehensive view of inventory across warehouses, with search, filters, and pagination for quick access.",
            },
            {
              title: "Real-Time Updates",
              description:
                "Ensures accurate stock levels by instantly reflecting changes across all warehouse operations.",
            },
          ],
          icon: "Package",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Order Fulfillment Core",
          intro: "",
          subsections: [
            {
              title: "Real-Time Verification",
              description:
                "Instantly checks stock availability and updates inventory in real-time, ensuring accurate and reliable order processing.",
            },
            {
              title: "Stock Deduction",
              description:
                "Automatically deducts items during picking and order fulfillment to prevent overselling and maintain inventory accuracy.",
            },
          ],
          icon: "Zap",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Audit & Workflow Layer",
          intro: "",
          subsections: [
            {
              title: "Serial Number Audit",
              description:
                "Streamlined bin and non-bin audits with full traceability, ensuring every item is verified, accurately logged, and easy to track.",
            },
            {
              title: "Import & Export Automation",
              description:
                "Automates bulk inventory uploads and provides real-time export tracking, preventing mismatches and eliminating the risk of overselling.",
            },
          ],
          icon: "Search",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with robust technologies to ensure scalability, accuracy, and performance for warehouse inventory management.",
    },
    {
      type: "cta",
      title: "Ready to Optimize Your Warehouse Operations?",
      description:
        "Let's discuss how our inventory management system can streamline your stock control and automation.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
