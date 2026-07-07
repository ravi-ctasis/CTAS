import {
  Code,
  Database,
  Globe,
  Zap,
  Users,
  Shield,
  TrendingUp,
  Rocket,
  Server,
  Package,
  Lock,
  RefreshCw,
  Layers,
  Activity,
  Cloud,
  Cpu,
  HardDrive,
  Network,
  FileCode2,
  FileText,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import type { ServicePageConfig } from "@/types/service-page";

export const meanStackConfig: ServicePageConfig = {
  ariaLabel: "MEAN Stack Development Services",
  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "MEAN Stack Development Services",
        description:
          "Expert MEAN stack development: MongoDB, Express, Angular, Node.js. Full-stack JavaScript solutions for modern businesses.",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
          url: "https://www.ctasis.com",
        },
        serviceType: "MEAN Stack Development",
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
            name: "MEAN Stack",
            item: "https://www.ctasis.com/services/mean-stack",
          },
        ],
      },
    ],
  },
  hero: {
    badge: "MEAN Stack",
    title: "Enterprise-Grade",
    highlight: "Full-Stack Development",
    description:
      "Build robust, scalable applications using MongoDB, Express.js, Angular, and Node.js. Enterprise-ready solutions with TypeScript support and comprehensive tooling.",
    primaryCta: { label: "Start Project", href: "/contact-us" },
    secondaryCta: { label: "View Portfolio", href: "/portfolios" },
  },
  sections: [
    {
      type: "cards",
      variant: "scroll",
      header: {
        badge: "Technology Stack",
        title: "The MEAN",
        highlight: "Technology Stack",
        description:
          "Four powerful technologies working together to create enterprise-grade applications",
      },
      items: [
        {
          title: "MongoDB",
          description: "NoSQL database for flexible, scalable data storage",
          icon: Database,
        },
        {
          title: "Express.js",
          description: "Fast, unopinionated web framework for Node.js",
          icon: Server,
        },
        {
          title: "Angular",
          description: "Full-featured framework for building scalable applications",
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
          "Comprehensive features that make MEAN stack ideal for enterprise applications",
      },
      categories: ["Development", "Performance", "Security", "Enterprise"],
      items: [
        {
          title: "TypeScript Support",
          description: "Built-in TypeScript for type-safe development",
          icon: FileText,
          category: "Development",
        },
        {
          title: "Component Architecture",
          description: "Modular, reusable components with dependency injection",
          icon: Layers,
          category: "Development",
        },
        {
          title: "RESTful APIs",
          description: "Create scalable and maintainable API endpoints",
          icon: Network,
          category: "Development",
        },
        {
          title: "Real-time Applications",
          description: "Build interactive apps with WebSocket and Socket.io",
          icon: Activity,
          category: "Development",
        },
        {
          title: "Lazy Loading",
          description: "On-demand module loading for better performance",
          icon: Zap,
          category: "Performance",
        },
        {
          title: "AOT Compilation",
          description: "Ahead-of-time compilation for faster rendering",
          icon: Rocket,
          category: "Performance",
        },
        {
          title: "Tree Shaking",
          description: "Remove unused code for smaller bundle sizes",
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
          title: "Enterprise Architecture",
          description: "Built for large-scale enterprise applications",
          icon: Users,
          category: "Enterprise",
        },
        {
          title: "Testing Framework",
          description: "Built-in testing tools and utilities",
          icon: CheckCircle,
          category: "Enterprise",
        },
        {
          title: "CLI Tools",
          description: "Powerful command-line interface for development",
          icon: Code,
          category: "Enterprise",
        },
        {
          title: "Documentation",
          description: "Comprehensive documentation and guides",
          icon: FileCode2,
          category: "Enterprise",
        },
      ],
    },
    {
      type: "use-cases",
      header: {
        badge: "Use Cases",
        title: "Perfect For These",
        highlight: "Applications",
        description: "MEAN stack excels in building enterprise-grade web applications",
      },
      items: [
        {
          title: "Enterprise Applications",
          description: "Large-scale business applications with complex requirements",
          icon: Users,
          benefits: [
            "Scalable architecture",
            "Enterprise security",
            "Performance optimization",
            "Maintenance support",
          ],
        },
        {
          title: "E-commerce Platforms",
          description: "Full-featured online stores with advanced functionality",
          icon: Package,
          benefits: [
            "Product management",
            "Shopping cart system",
            "Payment integration",
            "Order processing",
          ],
        },
        {
          title: "Content Management",
          description: "Dynamic CMS with rich content editing capabilities",
          icon: FileCode2,
          benefits: [
            "Rich text editor",
            "Media management",
            "SEO optimization",
            "Multi-user access",
          ],
        },
        {
          title: "Dashboard Applications",
          description: "Data visualization and analytics dashboards",
          icon: BarChart3,
          benefits: [
            "Real-time data",
            "Interactive charts",
            "Custom widgets",
            "Responsive design",
          ],
        },
      ],
    },
    {
      type: "benefits",
      variant: "icon-strip",
      header: {
        badge: "Benefits",
        title: "Why Choose",
        highlight: "MEAN Stack?",
        description:
          "Advantages that make MEAN stack the ideal choice for enterprise development",
      },
      items: [
        {
          title: "TypeScript First",
          description: "Built-in TypeScript for type safety",
          icon: FileText,
        },
        {
          title: "Enterprise Ready",
          description: "Built for large-scale applications",
          icon: Zap,
        },
        {
          title: "Scalable",
          description: "Easy to scale as business grows",
          icon: TrendingUp,
        },
        {
          title: "Professional",
          description: "Industry-standard enterprise solution",
          icon: Users,
        },
      ],
    },
  ],
  cta: {
    title: "Ready to Build with MEAN?",
    description: "Let's create enterprise-grade applications using the MEAN stack",
    primaryLabel: "Start Your Project",
    primaryHref: "/contact-us",
    secondaryLabel: "View Portfolio",
    secondaryHref: "/portfolios",
  },
};
