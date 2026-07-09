import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const tilesManagementSystemData: PortfolioDetailData = {
  title: "Tiles Management System",
  category: "E-commerce Automation",
  industry: "Tiles Industry",
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
  link: "#",
  featured: true,
  stats: {
    views: "20k",
    likes: "2.5k",
    clients: "200+",
    revenue: "$1.8M+",
    efficiency: "90%",
    accuracy: "98.5%",
  },
  year: "2024",
  duration: "10 months",
  teamSize: "15",
  budget: "$350k",
  status: "Completed",
  challenges: [
    "Data duplication across multiple markets leading to operational inefficiencies",
    "Manual order processing errors causing delays and inaccuracies",
    "Inefficient supplier coordination affecting production timelines",
    "Complexities in managing cross-border sales and compliance",
    "Limited real-time visibility into sales, orders, and production",
    "Scalability challenges for growing number of users and transactions",
  ],
  solutions: [
    "Centralized data hub with unique identifiers to eliminate duplication and streamline operations",
    "Automated validation for orders and invoices to reduce manual errors and improve accuracy",
    "Streamlined supplier workflows for efficient production coordination",
    "Dynamic, market-specific configurations to simplify cross-border sales operations",
    "Real-time analytics and reporting for actionable insights and improved decision-making",
    "Scalable system architecture supporting multiple users and high-volume transactions",
  ],
  results: [
    "Centralized Data – All records systematically stored, significantly reducing errors",
    "Scalability – Seamlessly supports growth in buyers, sellers, and transactions",
    "Data Security – Ensures role-based, user-specific data access",
    "Improved Communication – Shareable links enable efficient information exchange",
    "Transparency & Accuracy – Accurate invoices, bills, and production data for stakeholders",
  ],
  features: [
    {
      title: "Comprehensive Dashboard",
      description:
        "Unified dashboard with real-time insights on sellers, buyers, tile designs sold, revenue, production volumes, and detailed reports.",
      icon: "BarChart3",
    },
    {
      title: "Dedicated Seller Account",
      description:
        "Sellers manage inventory, track sales, access production reports, and view customer-specific data securely.",
      icon: "Users",
    },
    {
      title: "Dedicated Buyer Account",
      description:
        "Buyers track purchase history, monitor order-specific production data, and manage transactions securely.",
      icon: "ShoppingCart",
    },
    {
      title: "Link Generation for Tiles",
      description:
        "Generate and share tile-specific links for seamless communication and tracking without compromising security.",
      icon: "Cloud",
    },
    {
      title: "Link Management and Tracking",
      description:
        "Super admin manages all links with metadata, tracking engagement and highlighting top-selling tiles.",
      icon: "Search",
    },
    {
      title: "Secure Data Access",
      description:
        "Ensures sellers and buyers access only their relevant data, maintaining privacy and confidentiality.",
      icon: "Shield",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "Code", description: "Modern UI framework" },
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
    badge: "E-commerce Automation",
    badgeIcon: "ShoppingCart",
    titleLine1: "Tiles Management",
    titleLine2: "System",
    heroImage: {
      src: "/tiles-management-system.webp",
      alt: "Desktop Responsive Website Design",
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
          title: "Centralized Data",
          description:
            "All records are systematically stored, reducing errors and improving access across sellers, buyers, and admins.",
          icon: "Zap",
        },
        {
          title: "Scalability",
          description:
            "Supports growth in buyers and sellers without compromising performance, enabling seamless expansion.",
          icon: "Globe",
        },
        {
          title: "Data Security",
          description:
            "Ensures each user accesses only their relevant information, maintaining privacy and confidentiality.",
          icon: "Shield",
        },
        {
          title: "Ease of Communication",
          description:
            "Shareable links enable fast and efficient information exchange between sellers, buyers, and admins.",
          icon: "BarChart3",
        },
        {
          title: "Transparency and Accuracy",
          description:
            "Accurate invoices, bills, and production data are easily accessible, ensuring transparency.",
          icon: "Cloud",
        },
        {
          title: "Enhanced Reporting",
          description:
            "Detailed analytics on sales, production, and market trends empower data-driven decisions.",
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
          title: "Comprehensive Dashboard",
          intro: "Unified dashboard providing real-time insights:",
          items: [
            "Total number of sellers and buyers",
            "Total tile designs sold",
            "Amount raised from sold tiles",
            "Detailed bill reports",
            "Production volumes and statistics",
            "Seller and buyer-specific invoices",
          ],
          closing: "Provides accurate and updated information for decision-making.",
          icon: "BarChart3",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Dedicated Seller Account",
          intro: "",
          groups: [
            {
              title: "Inventory and Sales Tracking",
              items: [
                "Store and track all tiles sold and unsold",
                "Access detailed reports on production and inventory",
              ],
            },
            {
              title: "Invoice and Transaction Management",
              items: [
                "Manage invoices and transaction history",
                "View customer-specific data securely",
              ],
            },
            {
              title: "Data Privacy",
              items: [
                "Sellers view only their own data",
                "Example: Savanbhai sees only his 5 customers details",
              ],
            },
          ],
          icon: "Users",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Dedicated Buyer Account",
          intro: "",
          groups: [
            {
              title: "Purchase History Tracking",
              items: [
                "Track purchase history, bills, and order details",
                "Monitor production-specific data for orders",
              ],
            },
            {
              title: "Transaction and Inventory Management",
              items: [
                "Manage transactions and inventory securely",
                "Access only relevant buyer data",
              ],
            },
            {
              title: "Data Confidentiality",
              items: [
                "Buyers view only their own information",
                "Ensures data integrity and confidentiality",
              ],
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Link Generation and Management",
          intro: "",
          groups: [
            {
              title: "Shareable Links",
              items: [
                "Select tiles and generate shareable links",
                "Send links to sellers or buyers for seamless sharing",
              ],
            },
            {
              title: "Link Tracking",
              items: [
                "Super admin manages all links with metadata",
                "Track engagement and highlight top-selling tiles",
              ],
            },
            {
              title: "Secure Access",
              items: [
                "Sellers and buyers access only their links",
                "Maintains data security during sharing",
              ],
            },
          ],
          icon: "Cloud",
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
          title: "Comprehensive Data Hub",
          intro: "",
          subsections: [
            {
              title: "Centralized Storage",
              description:
                "Systematically stores all records, including buyers, sellers, inventory, and transactions, minimizing errors and improving operational efficiency.",
            },
            {
              title: "Unique Identifiers",
              description:
                "Generates conflict-resistant, market-specific identifiers for tiles, eliminating duplication and ensuring data integrity across all sales channels.",
            },
            {
              title: "Scalable Architecture",
              description:
                "Designed to handle increasing numbers of users, transactions, and data volume without compromising performance or reliability.",
            },
          ],
          icon: "Database",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Secure Data Access Layer",
          intro: "",
          subsections: [
            {
              title: "User-Specific Access",
              description:
                "Role-based access ensures that buyers and sellers can view and manage only their own data, maintaining privacy and confidentiality across the platform.",
            },
            {
              title: "Data Integrity",
              description:
                "Prevents unauthorized cross-access between users, safeguarding sensitive information and ensuring secure data boundaries at all times.",
            },
            {
              title: "Audit Trails",
              description:
                "Comprehensive logs track all user interactions and data changes, providing transparency, accountability, and regulatory compliance.",
            },
          ],
          icon: "Shield",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Analytics and Reporting Engine",
          intro: "",
          subsections: [
            {
              title: "Sales and Production Analytics",
              description:
                "Monitors buyer activity, tile sales, and production volumes in real-time, providing actionable insights to optimize operations and inventory management.",
            },
            {
              title: "Market Trends",
              description:
                "Generates reports on discontinued tiles, demand patterns, and emerging market trends, enabling strategic product planning and decision-making.",
            },
            {
              title: "Custom Reports",
              description:
                "Provides buyers and sellers with tailored reports and insights based on historical data and usage patterns, supporting informed business decisions.",
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
      title: "Ready to Transform Your Tiles Business?",
      description:
        "Let's discuss how our Tiles Management System can streamline your operations and boost your global sales.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
