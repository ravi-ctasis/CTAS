import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const inspectionManagementWebSystemData: PortfolioDetailData = {
  title: "Inspection Management Web System",
  category: "Inspection Management",
  industry: "Manufacturing & Logistics",
  description:
    "A centralized inspection management platform that supports real-time and offline operations, report generation, attachment handling, and seamless data synchronization.",
  longDescription:
    "This Inspection Management Web System streamlines the entire inspection lifecycle for manufacturing and logistics operations. It enables inspectors to work online or offline, capture and store attachments, and automatically sync data across systems when connected. With built-in reporting tools, audit trails, and scalable architecture, it ensures accuracy, compliance, and operational efficiency while handling large inspection volumes with ease.",
  image: "/ikaa-inspection-web-system-dashboard.webp",
  technologies: ["Node.js", "Next.js", "MongoDB", "IndexedDB", "Tailwind CSS"],
  link: "/portfolios/ikaa-inspection-web-system",
  featured: true,
  stats: {
    inspections: "50k+",
    reports: "10k+",
    syncs: "100k+",
    accuracy: "99.5%",
  },
  year: "2025",
  duration: "8 months",
  teamSize: "12",
  budget: "",
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
    "Real-Time Insights – Accurate inspection data across operations",
    "Offline Capability – Seamless inspections without internet",
    "Efficient Reporting – Fast PDF/Excel report generation",
    "Data Consistency – Synchronized data with Export System",
    "Audit-Ready – Full logging for compliance and debugging",
    "Scalable System – Handles growing inspection volumes",
  ],
  features: [
    {
      title: "Real-Time Inspection Management",
      description:
        "Create, view, and update inspections for production, pallets, and containers.",
      icon: "Search",
    },
    {
      title: "Offline Operation",
      description: "Continue inspections offline with automatic sync when connected.",
      icon: "Cloud",
    },
    {
      title: "Report Generation",
      description: "Generate and export PDF/Excel reports with images and metrics.",
      icon: "FileText",
    },
    {
      title: "Attachment Handling",
      description: "Upload, store, and retrieve images and documents for inspections.",
      icon: "Database",
    },
    {
      title: "Scheduled Jobs",
      description:
        "Automate data sync, report generation, and status updates in the background.",
      icon: "Zap",
    },
    {
      title: "Comprehensive Logging",
      description: "Log all user actions and system operations for audit and debugging.",
      icon: "Settings",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: "Code", description: "Dynamic UI framework" },
        { name: "Tailwind CSS", icon: "Code", description: "Utility-first styling" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "Express.js", icon: "Server", description: "Web framework" },
      ],
    },
    {
      category: "Database",
      technologies: [{ name: "MongoDB", icon: "Database", description: "NoSQL database" }],
    },
    {
      category: "Offline Storage",
      technologies: [
        { name: "IndexedDB", icon: "Database", description: "Browser-based storage" },
      ],
    },
  ],
  hero: {
    badge: "Management System",
    badgeIcon: "Search",
    titleLine1: "Inspection Management",
    titleLine2: "Web System",
    heroImage: { src: "/inspection-management-web-system.webp", alt: "Inspection Web System" },
    heroStats: [
      { valueKey: "inspections", label: "Inspections Processed" },
      { valueKey: "reports", label: "Reports Generated" },
      { valueKey: "accuracy", label: "Data Accuracy" },
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
          title: "Inspection Management",
          intro: "Centralized inspection workflows for production, pallets, and containers:",
          items: [
            "Create, view, and update inspection records",
            "Track real-time statuses, remarks, and results",
            "Attach images, documents, and notes with ease",
            "Advanced filtering by status, date, or order ID",
          ],
          closing: "Delivers accurate, efficient, and audit-ready inspection management.",
          icon: "Search",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Report Generation",
          intro: "",
          groups: [
            {
              title: "PDF & Excel Reports",
              items: [
                "Generate detailed inspection and invoice reports",
                "Include images, remarks, and key performance metrics",
              ],
            },
            {
              title: "Export & Sharing",
              items: [
                "Download reports in PDF or Excel formats",
                "Share reports with internal teams or external stakeholders",
              ],
            },
          ],
          icon: "FileText",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Data Synchronization",
          intro: "",
          groups: [
            {
              title: "Offline Support",
              items: [
                "Store inspection data locally in IndexedDB",
                "Continue inspections and data entry without internet",
              ],
            },
            {
              title: "Automatic Synchronization",
              items: [
                "Sync all changes to MongoDB when online",
                "Maintain consistency with Export System and reports",
              ],
            },
          ],
          icon: "Cloud",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Attachment & Logging",
          intro: "",
          groups: [
            {
              title: "Image & Document Handling",
              items: [
                "Upload and manage images, documents, and supporting files",
                "Optimized storage and compression for faster performance",
              ],
            },
            {
              title: "Comprehensive Logging",
              items: [
                "Track all user actions and system events in detail",
                "Provide audit-ready logs to support compliance and debugging",
              ],
            },
          ],
          icon: "Database",
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
          title: "Inspection Management Engine",
          intro: "",
          subsections: [
            {
              title: "Inspection Operations",
              description:
                "Create, update, and track inspections for production, pallets, and containers.",
            },
            {
              title: "Filtering and Search",
              description: "Search inspections by status, date, or order with pagination.",
            },
          ],
          icon: "Search",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Report Generation Module",
          intro: "",
          subsections: [
            {
              title: "Comprehensive Reports",
              description:
                "Generate professional PDF and Excel reports enriched with images, metrics, and inspection details.",
            },
            {
              title: "Flexible Export",
              description:
                "Export and share reports seamlessly in multiple formats for stakeholders and audits.",
            },
          ],
          icon: "FileText",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Data Synchronization Layer",
          intro: "",
          subsections: [
            {
              title: "Offline Storage",
              description:
                "Securely store inspection data in IndexedDB for uninterrupted use during offline operations.",
            },
            {
              title: "Automatic Synchronization",
              description:
                "Seamlessly sync all changes with MongoDB and the Export System once an internet connection is restored.",
            },
          ],
          icon: "Cloud",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with modern technologies to ensure scalability, reliability, and offline support for inspection management.",
    },
    {
      type: "cta",
      title: "Ready to Streamline Your Inspection Processes?",
      description:
        "Let's discuss how the IKAA Inspection Web System can enhance your operations with real-time and offline capabilities.",
    },
  ],
};
