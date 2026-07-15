import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const returnAndRefundAutomationSystemData: PortfolioDetailData = {
  title: "Return Operations & Refund Automation System",
  category: "Return & Refund Management",
  industry: "E-commerce",
  description:
    "A comprehensive platform for managing Amazon returns, enabling real-time scanning, Safe-T claim filing, reimbursement tracking, and return trend analysis.",
  longDescription:
    "Return & Refund Management System provides a complete warehouse return handling solution. It helps manage Amazon returns effectively by enabling real-time scanning, validation, safeT claim filing, and reimbursement tracking.With this system, businesses can reduce losses, recover reimbursements efficiently, and gain visibility into return trends. Although challenges exist (Amazon policy changes, high return volume, etc.), the benefits—accuracy, speed, financial recovery, and transparency—make it an essential tool for modern eCommerce return management",
  image: "/portfolio-banners/return-and-refund-automation-system.webp",
  technologies: [
    "Angular",
    "Node.js",
    "MongoDB",
    "Amazon SP-API",
    "AI-Powered Automation",
    "Docker",
    "Google Docs",
  ],
  link: "#",
  featured: true,
  stats: {
    returnsProcessed: "100k+",
    reimbursementRate: "92%",
    errorReduction: "85%",
  },
  year: "2025",
  duration: "7 months",
  teamSize: "10",
  budget: "$350k",
  status: "Completed",
  challenges: [
    "Frequent changes in Amazon return policies",
    "High daily return volumes",
    "Accurate SKU and tracking data capture",
    "Safe-T claim rejections from incorrect filing",
    "Dependence on disciplined warehouse scanning",
    "Seamless integration with Amazon APIs",
  ],
  solutions: [
    "Automated synchronization with Amazon\u2019s latest return policies",
    "Scalable system for handling large volumes of returns",
    "Barcode scanning for precise SKU and tracking data",
    "Automated Safe-T claim validation and submission",
    "Intuitive scanning interface for warehouse staff",
    "Robust Amazon SP-API integration for real-time updates",
  ],
  results: [
    "Centralized Return Tracking – Full visibility into return statuses",
    "Error-Free Validation – Barcode scanning reduces manual errors",
    "Maximized Reimbursements – 92% recovery rate for claims",
    "Faster Processing – Real-time scanning and validation",
    "Compliance Assurance – Adheres to Amazon\u2019s return policies",
    "Actionable Insights – AI-driven return trend analysis",
  ],
  features: [
    {
      title: "Centralized Return Management",
      description: "Track all Amazon returns in a single platform with real-time updates.",
      icon: "Search",
    },
    {
      title: "Real-Time Return Validation",
      description: "Scan, validate, and record return details immediately at the warehouse.",
      icon: "RefreshCw",
    },
    {
      title: "Automated Claim Handling",
      description: "Generate SAFE-T claims for damaged/missing products.",
      icon: "Shield",
    },
    {
      title: "Reimbursement Management",
      description: "Track, validate, and monitor Amazon reimbursements.",
      icon: "TrendingUp",
    },
    {
      title: "Return Scanning Process ",
      description: "Provides visibility on status: Pending, Approved, Denied, Received, etc.",
      icon: "CheckCircle",
    },
    {
      title: "Dashboard Monitoring ",
      description: "Analyze return trends to optimize operations and reduce losses.",
      icon: "Activity",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "Angular", icon: "Code", description: "Dynamic UI framework" },
        { name: "TypeScript", icon: "Code", description: "Type-safe development" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "MongoDB", icon: "Database", description: "NoSQL database" },
      ],
    },
    {
      category: "Integration & Automation",
      technologies: [
        { name: "Amazon SP-API", icon: "Cloud", description: "Amazon integration" },
        { name: "AI Automation", icon: "Activity", description: "Smart workflows" },
        { name: "Google Docs", icon: "Package", description: "Document integration" },
      ],
    },
    {
      category: "DevOps",
      technologies: [{ name: "Docker", icon: "Package", description: "Containerization" }],
    },
  ],
  hero: {
    badge: "Returns Automation Solution",
    badgeIcon: "RefreshCw",
    titleLine1: "Return & Refund",
    titleLine2: "Automation System",
    heroImage: {
      src: "/portfolio-banners/return-and-refund-automation-system.webp",
      alt: "Return & Refund Automation System",
    },
    heroStats: [
      { valueKey: "returnsProcessed", label: "Returns Processed" },
      { valueKey: "reimbursementRate", label: "Reimbursement Rate" },
      { valueKey: "errorReduction", label: "Error Reduction" },
    ],
    ctaLabel: "Get Free Quote",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "Centralized Return Management",
          description: "Track all Amazon returns in a single platform with real-time updates.",
          icon: "Search",
        },
        {
          title: "Real-Time Return Validation",
          description: "Scan, validate, and record return details immediately at the warehouse.",
          icon: "RefreshCw",
        },
        {
          title: "Automated Claim Handling",
          description: "Generate SAFE-T claims for damaged/missing products.",
          icon: "Shield",
        },
        {
          title: "Reimbursement Management",
          description: "Track, validate, and monitor Amazon reimbursements.",
          icon: "TrendingUp",
        },
        {
          title: "Return Scanning Process ",
          description: "Provides visibility on status: Pending, Approved, Denied, Received, etc.",
          icon: "CheckCircle",
        },
        {
          title: "Dashboard Monitoring ",
          description: "Analyze return trends to optimize operations and reduce losses.",
          icon: "Activity",
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
          title: "Centralized Return Management",
          intro: "Manage all Amazon returns efficiently from a single platform:",
          items: [
            "Unified dashboard for tracking all return orders",
            "Real-time status updates: Pending, Approved, or Denied",
            "Complete traceability from return receipt to reimbursement",
          ],
          closing: "Provides full visibility and control over your return operations.",
          icon: "Search",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Real-Time Return Scanning",
          intro: "",
          groups: [
            {
              title: "Scanning Workflow",
              items: [
                "Supports both manual and automatic scanning with tracking numbers",
                "Barcode-based verification for SKU and serial numbers",
                "Instant recording of return details for accuracy",
              ],
            },
            {
              title: "Error Reduction",
              items: [
                "Validates product condition (Good/Bad) in real-time",
                "Logs return reasons accurately to prevent discrepancies",
              ],
            },
          ],
          icon: "RefreshCw",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Automated Safe-T Claim Filing",
          intro: "",
          groups: [
            {
              title: "Claim Generation",
              items: [
                "Automatically generates Safe-T claims for damaged or missing items",
                "Validates claims to ensure compliance with Amazon policies",
              ],
            },
            {
              title: "Claim Tracking",
              items: [
                "Monitors claim status (Pending, Approved, Denied) in real-time",
                "Provides alerts and actionable insights for rejected claims",
              ],
            },
          ],
          icon: "Shield",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Reimbursement & Trend Analysis",
          intro: "",
          groups: [
            {
              title: "Reimbursement Tracking",
              items: [
                "Tracks reimbursements in real-time for full transparency",
                "Automates reconciliation with Amazon payouts to reduce errors",
              ],
            },
            {
              title: "AI-Powered Insights",
              items: [
                "Analyzes return patterns to optimize operational workflows",
                "Highlights high-return products and identifies root causes",
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
          title: "Return Tracking Engine",
          intro: "",
          subsections: [
            {
              title: "Centralized Dashboard",
              description:
                "Monitor all returns in one place with real-time status updates for better visibility and control.",
            },
            {
              title: "Audit Trails",
              description:
                "Full traceability from item receipt to reimbursement, ensuring compliance and accountability.",
            },
          ],
          icon: "Search",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Scanning & Validation Core",
          intro: "",
          subsections: [
            {
              title: "Real-Time Scanning",
              description:
                "Barcode-based scanning ensures accurate SKU and tracking capture, minimizing errors.",
            },
            {
              title: "Condition Validation",
              description:
                "Instantly logs product condition and return reasons, maintaining precise records for compliance.",
            },
          ],
          icon: "RefreshCw",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Claim & Reimbursement Layer",
          intro: "",
          subsections: [
            {
              title: "Safe-T Claim Automation",
              description:
                "Automatically generates and validates Safe-T claims for damaged or missing items, reducing manual errors.",
            },
            {
              title: "Reimbursement Tracking",
              description:
                "Monitors claim statuses in real-time, ensuring maximum recovery and compliance with Amazon policies.",
            },
          ],
          icon: "Shield",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with modern technologies for scalability, reliability, and seamless Amazon integration.",
    },
    {
      type: "cta",
      title: "Ready to Streamline Your Amazon Returns?",
      description:
        "Let's discuss how our Return & Refund Automation System can reduce losses and improve efficiency.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
