import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const productionInventoryTrackingPlatformData: PortfolioDetailData = {
  title: "Smart Production & Inventory Tracking Platform",
  category: "Production Automation",
  industry: "Manufacturing Industry",
  description:
    "A centralized solution that manages every stage, from PI creation to outgoing shipments, while maintaining full audit history.",
  longDescription:
    "Managing Performa Invoices (PIs), product sizes, packaging, pallets, and production manually is time-consuming and error-prone. Lack of visibility across PI confirmation, production orders, and shipping creates operational delays. Without automation, stock calculations, shipment planning, and history tracking quickly become unmanageable at scale. That\u2019s why we designed an intelligent PI-to-Production system \u2014 a centralized solution that manages every stage, from PI creation to outgoing shipments, while maintaining full audit history.",
  image: "/image.webp",
  technologies: [
    "Angular",
    "Node.js",
    "MongoDB",
    "PDF Generation",
    "Role-Based Auth",
    "Real-time Tracking",
    "Audit Logging",
    "Workflow Automation",
  ],
  link: "#",
  featured: true,
  stats: {
    views: "15k",
    likes: "1.8k",
    clients: "50+",
    revenue: "$1.2M+",
    efficiency: "85%",
    accuracy: "99%",
  },
  year: "2025",
  duration: "8 months",
  teamSize: "12",
  budget: "$280k",
  status: "Completed",
  challenges: [
    "Manual errors during PI and production processing",
    "Limited visibility into current stock levels",
    "Unauthorized actions and untracked changes",
    "Risk of accidental deletion or modification of records",
    "Ensuring audit readiness and regulatory compliance",
  ],
  solutions: [
    "Automated calculations for boxes, pallets, and totals to reduce manual errors",
    "Real-time stock updates with dynamic status tracking",
    "Role-based permissions with actions restricted to authorized users",
    "Enforced reverse workflow and automatic history logging",
    "Immutable audit trails with timestamps, user actions, and version control",
  ],
  results: [
    "Efficiency: Cuts down manual tracking and paperwork",
    "Accuracy: Prevents errors in box counts, pallet calculations, and production tracking",
    "Control: Role-based workflows enforce discipline and avoid unauthorized actions",
    "Scalability: Handles large product catalogs, multiple sizes, and complex pallet rules",
    "Compliance: Retains complete historical records for audit, exports, and financial accuracy",
    "For Operations Teams: Centralized visibility across PI, production, and shipments",
    "For Businesses: Reduced errors, faster processing, scalable system",
    "For Customers: Accurate deliveries and on-time shipments",
    "For Management: Actionable insights, compliance-ready audit trail, and better decision-making",
  ],
  features: [
    {
      title: "System Setup",
      description:
        "A scalable and flexible architecture built using Angular, Node.js, and MongoDB, optimized for performance and real-time operations.",
      icon: "Database",
    },
    {
      title: "Authentication & Roles",
      description:
        "Implements secure login, password management, and role-based access control to ensure authorized actions and data protection.",
      icon: "Shield",
    },
    {
      title: "Masters",
      description:
        "Provides centralized management of products, sizes, designs, packaging, pallets, consignees, currencies, banks, HS codes, and suppliers for streamlined operations.",
      icon: "Cloud",
    },
    {
      title: "PI Management",
      description:
        "Manage Performa Invoices efficiently: create, update, clone, confirm, cancel, and generate PDFs with automated calculations for totals, boxes, pallets, and timelines.",
      icon: "BarChart3",
    },
    {
      title: "Production Flow",
      description:
        "Streamline production from confirmed PIs: manage partial and full orders, track progress in real-time, and mark shipments efficiently.",
      icon: "Users",
    },
    {
      title: "Stock & History Tracking",
      description:
        "Logs all actions to maintain accurate, real-time stock levels with complete traceability and audit-ready history.",
      icon: "ShoppingCart",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "Angular", icon: "Code", description: "Modern UI framework" },
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
    badge: "Production Automation",
    badgeIcon: "ShoppingCart",
    titleLine1: "Smart Production &",
    titleLine2: "Inventory Tracking Platform",
    heroImage: {
      src: "/production-stock-tracking.webp",
      alt: "Intelligent Production & Stock Tracking System",
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
          title: "Efficiency",
          description: "Cuts down manual tracking and paperwork",
          icon: "Zap",
        },
        {
          title: "Accuracy",
          description: "Prevents errors in box counts, pallet calculations, and production tracking",
          icon: "Zap",
        },
        {
          title: "Control",
          description: "Role-based workflows enforce discipline and avoid unauthorized actions",
          icon: "Zap",
        },
        {
          title: "Scalability",
          description: "Handles large product catalogs, multiple sizes, and complex pallet rules",
          icon: "Zap",
        },
        {
          title: "Compliance",
          description: "Retains complete historical records for audit, exports, and financial accuracy",
          icon: "Zap",
        },
      ],
    },
    {
      type: "feature-showcase",
      title: "What the System Actually Does",
      subtitle: "Our system brings clarity, automation, and control into the production workflow.",
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability.",
    },
    {
      type: "cta",
      title: "Ready to Streamline Your Production Workflow?",
      description:
        "Let's discuss how our Intelligent Production & Stock Tracking System can transform your operations and ensure growth readiness.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
