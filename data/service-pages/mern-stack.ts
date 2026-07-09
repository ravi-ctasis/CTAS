import {
  Code,
  Database,
  Globe,
  Zap,
  Target,
  Users,
  Shield,
  TrendingUp,
  Eye,
  Server,
  Package,
  Lock,
  RefreshCw,
  Layers,
  Activity,
  GitBranch,
  Cloud,
  Cpu,
  HardDrive,
  Network,
  FileCode2,
} from "lucide-react";
import type { ServicePageConfig } from "@/types/service-page";

export const mernStackConfig: ServicePageConfig = {
  ariaLabel: "MERN Stack Development Services",
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "MERN Stack Development Services",
        description:
          "Build modern, scalable, and high-performance web applications with Ctas MERN Stack Development. Expert in MongoDB, Express.js, React, and Node.js.",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
          url: "https://www.ctasis.com",
        },
        serviceType: "MERN Stack Development",
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "MERN Stack",
            item: "https://www.ctasis.com/services/mern-stack",
          },
        ],
      },
    ],
  },
  hero: {
    badge: "MERN Stack",
    title: "Full-Stack Development",
    highlight: "with MERN",
    description:
      "Build modern, scalable web applications using MongoDB, Express.js, React.js, and Node.js. Full-stack JavaScript development for rapid deployment and optimal performance.",
    primaryCta: { label: "Start Project", href: "/contact-us" },
    secondaryCta: { label: "View Portfolio", href: "/portfolios" },
  },
  sections: [
    {
      type: "cards",
      variant: "bento",
      header: {
        badge: "Technology Stack",
        title: "The MERN",
        highlight: "Technology Stack",
        description:
          "Four powerful technologies working together to create robust web applications",
      },
      items: [
        {
          title: "MongoDB",
          description: "NoSQL database for flexible data storage",
          icon: Database,
          image: "/service-banners/mern-stack.webp",
        },
        {
          title: "Express.js",
          description: "Fast, unopinionated web framework for Node.js",
          icon: Server,
        },
        {
          title: "React.js",
          description: "JavaScript library for building user interfaces",
          icon: Globe,
        },
        {
          title: "Node.js",
          description: "JavaScript runtime for server-side development",
          icon: Cpu,
        },
      ],
      columns: 2,
    },
    {
      type: "filter-features",
      header: {
        badge: "Features",
        title: "Key Features &",
        highlight: "Capabilities",
        description:
          "Comprehensive features that make MERN stack the preferred choice for modern web development",
      },
      categories: ["Development", "Performance", "Security", "Deployment"],
      items: [
        {
          title: "Full-Stack JavaScript",
          description: "Single language (JavaScript) for both frontend and backend",
          icon: Code,
          category: "Development",
        },
        {
          title: "Real-time Applications",
          description: "Build interactive apps with WebSocket and Socket.io",
          icon: Activity,
          category: "Development",
        },
        {
          title: "RESTful APIs",
          description: "Create scalable and maintainable API endpoints",
          icon: Network,
          category: "Development",
        },
        {
          title: "Component-Based UI",
          description: "Reusable React components for consistent design",
          icon: Layers,
          category: "Development",
        },
        {
          title: "Fast Development",
          description: "Rapid prototyping and development cycles",
          icon: Zap,
          category: "Performance",
        },
        {
          title: "Scalable Architecture",
          description: "Horizontal scaling with load balancing",
          icon: TrendingUp,
          category: "Performance",
        },
        {
          title: "Caching Strategies",
          description: "RAG and memory caching for optimal performance",
          icon: HardDrive,
          category: "Performance",
        },
        {
          title: "CDN Integration",
          description: "Global content delivery for faster loading",
          icon: Cloud,
          category: "Performance",
        },
        {
          title: "JWT Authentication",
          description: "Secure token-based authentication system",
          icon: Lock,
          category: "Security",
        },
        {
          title: "Input Validation",
          description: "Comprehensive data validation and sanitization",
          icon: Shield,
          category: "Security",
        },
        {
          title: "CORS Management",
          description: "Cross-origin resource sharing configuration",
          icon: Globe,
          category: "Security",
        },
        {
          title: "Rate Limiting",
          description: "API rate limiting and DDoS protection",
          icon: RefreshCw,
          category: "Security",
        },
        {
          title: "Docker Containerization",
          description: "Containerized deployment for consistency",
          icon: Package,
          category: "Deployment",
        },
        {
          title: "CI/CD Pipeline",
          description: "Automated testing and deployment workflows",
          icon: GitBranch,
          category: "Deployment",
        },
        {
          title: "Cloud Deployment",
          description: "AWS, Azure, and Google Cloud support",
          icon: Cloud,
          category: "Deployment",
        },
        {
          title: "Monitoring & Logging",
          description: "Application performance monitoring and logging",
          icon: Eye,
          category: "Deployment",
        },
      ],
    },
    {
      type: "use-cases",
      header: {
        badge: "Use Cases",
        title: "Perfect For These",
        highlight: "Applications",
        description: "MERN stack excels in building various types of web applications",
      },
      items: [
        {
          title: "E-commerce Platforms",
          description: "Full-featured online stores with real-time inventory",
          icon: Package,
          benefits: [
            "Product catalog management",
            "Shopping cart functionality",
            "Payment gateway integration",
            "Order tracking system",
          ],
        },
        {
          title: "Social Media Apps",
          description: "Interactive social platforms with real-time features",
          icon: Users,
          benefits: [
            "User authentication",
            "Real-time messaging",
            "Content sharing",
            "Social interactions",
          ],
        },
        {
          title: "Content Management",
          description: "Dynamic CMS with rich content editing",
          icon: FileCode2,
          benefits: [
            "Rich text editor",
            "Media management",
            "SEO optimization",
            "Multi-user collaboration",
          ],
        },
        {
          title: "Business Applications",
          description: "Custom business solutions and dashboards",
          icon: Target,
          benefits: [
            "Data visualization",
            "Reporting tools",
            "Workflow automation",
            "Integration APIs",
          ],
        },
      ],
    },
    {
      type: "benefits",
      variant: "zigzag",
      header: {
        badge: "Benefits",
        title: "Why Choose",
        highlight: "MERN Stack?",
        description:
          "Advantages that make MERN stack the ideal choice for modern web development",
      },
      items: [
        {
          title: "JavaScript Everywhere",
          description: "Single language for frontend and backend development",
          icon: Code,
        },
        {
          title: "Fast Development",
          description: "Rapid prototyping and quick time-to-market",
          icon: Zap,
        },
        {
          title: "Scalable",
          description: "Easy to scale as your business grows",
          icon: TrendingUp,
        },
        {
          title: "Large Community",
          description: "Extensive support and resources available",
          icon: Users,
        },
      ],
    },
  ],
  cta: {
    title: "Ready to Build with MERN?",
    description:
      "Let's create powerful, scalable web applications using the MERN stack",
    primaryLabel: "Start Your Project",
    primaryHref: "/contact-us",
    secondaryLabel: "View Portfolio",
    secondaryHref: "/portfolios",
  },
};
