import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const amazonFbmFbaOperationsAutomationPlatformData: PortfolioDetailData = {
  title: "Amazon FBA & FBM Operations Automation Platform",
  category: "E-commerce Automation",
  industry: "E-commerce",
  description:
    "A centralized, web-based platform for managing Amazon FBA and FBM operations, including inventory, orders, shipments, and performance analytics.",
  longDescription:
    "An enterprise-grade admin panel designed for Amazon sellers to streamline FBA and FBM operations efficiently. The platform offers real-time inventory synchronization, automated order processing, shipment creation via Amazon API integration, backorder handling, and advanced multi-store analytics. It ensures compliance with Amazon policies, supports role-based access control, and provides scalable workflows for high-volume operations.",
  image: "/amazon-fbm-fba-management-models-img.webp",
  technologies: ["Amazon SP API", "Node.js", "React", "MongoDB", "AWS"],
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
    "Complex inventory management across multiple FBA and FBM channels",
    "Ensuring efficient and error-free order processing at scale",
    "Seamless integration with Amazon APIs while handling rate limits",
    "Maintaining accurate product and order data with automated validation",
    "Scalability to support multiple stores and high-volume transactions",
    "Role-based user access control for secure operations",
  ],
  solutions: [
    "Unified dashboard providing a single view of inventory, orders, and shipments",
    "Automated workflows for order processing, inventory sync, and fulfillment",
    "Advanced filtering, search, and inline editing for fast data management",
    "Bulk actions and real-time validation to ensure data accuracy",
    "Robust Amazon API integration with intelligent throttling and error handling",
    "Role-based access control to ensure secure and appropriate user permissions",
    "Efficient file upload and processing for catalog updates and batch operations",
  ],
  results: [
    "Real-Time Insights",
    "Automation",
    "Scalability",
    "Customizability",
    "Compliance",
    "User-Friendly Interface",
    "Profitability Tracking",
  ],
  features: [
    {
      title: "Inventory Management",
      description:
        "Comprehensive FBA and FBM inventory listings with inline editing, bulk updates, and profitability calculations.",
      icon: "Package",
    },
    {
      title: "Order Processing",
      description:
        "Real-time order status updates, manual order creation, and bulk status changes with detailed logs for auditing.",
      icon: "BarChart3",
    },
    {
      title: "Shipment Management",
      description:
        "Automated shipment creation, barcode generation, and tracking updates with Amazon API integration.",
      icon: "Cloud",
    },
    {
      title: "Data Analytics",
      description:
        "Interactive charts for order trends, store performance, and product expiry monitoring.",
      icon: "TrendingUp",
    },
    {
      title: "Automated Validation",
      description:
        "Checks for restricted entities and validates HSN codes, shipping rates, and product attributes during file uploads.",
      icon: "Shield",
    },
    {
      title: "Role-Based Permissions",
      description:
        "Granular control over user access to specific modules and actions.",
      icon: "Settings",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "angular", icon: "Code", description: "Modern UI framework" },
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
    titleLine1: "Amazon FBA & FBM Operations",
    titleLine2: "Automation Platform",
    heroImage: {
      src: "/amazon-fbm-fba-management-models-img.webp",
      alt: "Tablet Responsive Website Design",
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
          title: "Real-Time Insights",
          description:
            "Dashboards with week-wise, month-wise, and country-wise data provide actionable insights for decision-making.",
          icon: "Zap",
        },
        {
          title: "Automation",
          description:
            "Auto-generated purchase orders, barcodes, and Amazon cart integration save time and reduce errors.",
          icon: "Globe",
        },
        {
          title: "Scalability",
          description:
            "Supports multi-store operations and bulk processing for large-scale businesses.",
          icon: "Shield",
        },
        {
          title: "Customizability",
          description:
            "Flexible attribute management, saved filters, and customizable export options cater to specific business needs.",
          icon: "BarChart3",
        },
        {
          title: "Compliance",
          description:
            "Built-in validation for restricted ASINs, brands, and keywords ensures adherence to Amazon's policies.",
          icon: "Cloud",
        },
        {
          title: "Profitability Tracking",
          description:
            "Color-coded profit/loss indicators and revenue calculators optimize pricing strategies.",
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
          title: "Inventory Management",
          intro:
            "Gain real-time visibility across FBA and FBM inventories with bulk updates, inline editing, and automated profitability analysis to make smarter pricing and stocking decisions.",
          items: [
            "Manage detailed product attributes including price, weight, dimensions, and stock levels.",
            "Synchronize inventory across multiple stores and marketplaces to prevent overselling or stock discrepancies.",
            "Automated profitability calculations and margin analysis for informed pricing and strategic decision-making.",
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Order Processing",
          intro: "",
          groups: [
            {
              title: "Real-Time Order Tracking",
              items: [
                "Monitor all order statuses (Pending, Processing, Shipped) in real-time across multiple FBA/FBM stores.",
                "Maintain detailed audit logs for tracking order changes and ensuring accountability.",
              ],
            },
            {
              title: "Efficient Manual & Bulk Operations",
              items: [
                "Create and manage orders manually for special cases or custom workflows.",
                "Execute bulk updates for order statuses, shipping, and fulfillment to save time and reduce errors.",
              ],
            },
            {
              title: "Validation & Compliance",
              items: [
                "Automated validation checks to prevent errors in inventory, pricing, and shipment details.",
                "Ensures compliance with Amazon policies for smooth order fulfillment.",
              ],
            },
          ],
          icon: "BarChart3",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Shipment Management",
          intro: "",
          groups: [
            {
              title: "Automated Shipment Creation",
              items: [
                "Seamlessly generate shipments using Amazon API integration for both FBA and FBM fulfillment.",
                "Auto-generate barcodes, packing slips, and shipping labels to streamline fulfillment operations.",
                "Reduce human errors with automated shipment verification and validation.",
              ],
            },
            {
              title: "Real-Time Tracking & Updates",
              items: [
                "Synchronize shipment tracking in real-time with Amazon for accurate delivery visibility.",
                "Perform bulk tracking updates for multiple shipments to save time and ensure consistency.",
                "Receive automated notifications for exceptions, delays, or delivery issues.",
              ],
            },
            {
              title: "Compliance & Accuracy",
              items: [
                "Ensure all shipments meet Amazon's shipping policies and restrictions.",
                "Maintain accurate shipment records for auditing and operational reporting.",
              ],
            },
          ],
          icon: "Cloud",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Data Analytics & Business Insights",
          intro: "",
          groups: [
            {
              title: "Interactive Visualizations",
              items: [
                "Visualize order trends, store performance, and inventory health in real-time dashboards.",
                "Track stock levels, product expiry, and low-stock alerts for proactive inventory management.",
                "Identify sales patterns and peak demand periods to optimize operations.",
              ],
            },
            {
              title: "Custom Performance Metrics",
              items: [
                "Week-wise, month-wise, and country-wise analytics for multi-store insights.",
                "Generate tailored reports to guide pricing, inventory, and strategic decision-making.",
                "Monitor KPIs such as order fulfillment rate, average delivery time, and sales growth.",
              ],
            },
            {
              title: "Data-Driven Strategy",
              items: [
                "Leverage actionable insights to improve profitability and operational efficiency.",
                "Make informed business decisions with real-time, accurate, and comprehensive data.",
              ],
            },
          ],
          icon: "TrendingUp",
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
          title: "Dashboard Module",
          intro: "",
          subsections: [
            {
              title: "Central Hub",
              description:
                "Monitor order statuses and performance metrics with interactive charts and filters.",
            },
            {
              title: "Real-Time Insights",
              description:
                "Week-wise, month-wise, and country-wise data for actionable decision-making.",
            },
          ],
          icon: "Settings",
        },
        {
          variant: "subsections",
          number: 2,
          title: "FBA and FBM Inventory Modules",
          intro: "",
          subsections: [
            {
              title: "Product Listings",
              description:
                "Manage inventory with inline editing, bulk updates, and profitability calculations.",
            },
            {
              title: "Multi-Store Support",
              description:
                "Synchronize inventory across multiple Amazon stores and fulfillment channels.",
            },
          ],
          icon: "Package",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Order Process Module",
          intro: "",
          subsections: [
            {
              title: "Order Lifecycle",
              description:
                "Manage orders from creation to fulfillment with real-time status updates.",
            },
            {
              title: "Bulk Actions",
              description:
                "Perform bulk status changes and manual order creation for efficient workflows.",
            },
          ],
          icon: "BarChart3",
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
