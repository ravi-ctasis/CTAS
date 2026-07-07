import {
  Globe,
  Smartphone,
  Code,
  Cloud,
  Palette,
  ShoppingCart,
  Brain,
  Settings,
  Layers,
  Braces,
  Package,
  Zap,
  PenTool,
  Link2,
  Workflow,
  Store,
  type LucideIcon,
} from "lucide-react";

export type ServiceListingItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tags?: string[];
  featured?: boolean;
};

export type ServiceCategory = {
  id: string;
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  services: ServiceListingItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "development",
    badge: "Development",
    title: "Web &",
    highlight: "Software",
    description:
      "Custom websites, web applications, and enterprise software built with modern frameworks and scalable architecture.",
    services: [
      {
        title: "Web Development",
        description:
          "Custom websites and web applications with React, Next.js, Node.js, and modern full-stack technologies.",
        href: "/services/web-development",
        icon: Globe,
        tags: ["React", "Next.js", "Node.js"],
        featured: true,
      },
      {
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
        href: "/services/mobile-apps",
        icon: Smartphone,
        tags: ["React Native", "Flutter", "iOS"],
      },
      {
        title: "Custom Software",
        description:
          "Tailored enterprise software solutions designed for your unique business workflows and requirements.",
        href: "/services/custom-software",
        icon: Code,
        tags: ["Enterprise", "SaaS", "APIs"],
      },
      {
        title: "API Development",
        description:
          "RESTful and GraphQL APIs with secure authentication, documentation, and third-party integrations.",
        href: "/services/api-development",
        icon: Link2,
        tags: ["REST", "GraphQL", "Microservices"],
      },
    ],
  },
  {
    id: "design",
    badge: "Design",
    title: "UI/UX &",
    highlight: "Creative",
    description:
      "User-centered design services that combine aesthetics with conversion-focused experiences.",
    services: [
      {
        title: "Web Design",
        description:
          "Responsive, conversion-optimized website designs that reflect your brand and engage visitors.",
        href: "/services/web-design",
        icon: Palette,
        tags: ["Responsive", "Figma", "Branding"],
      },
      {
        title: "UI/UX Design",
        description:
          "Research-driven interface design, wireframing, prototyping, and usability testing.",
        href: "/services/ui-ux",
        icon: PenTool,
        tags: ["Wireframes", "Prototypes", "UX Research"],
      },
      {
        title: "Complete Design Packages",
        description:
          "End-to-end design packages covering branding, UI/UX, and development-ready assets.",
        href: "/services/complete-design-packages",
        icon: Layers,
        tags: ["Branding", "UI Kit", "Design System"],
      },
    ],
  },
  {
    id: "ecommerce",
    badge: "E-Commerce",
    title: "Amazon &",
    highlight: "Marketplace",
    description:
      "E-commerce platforms, Amazon seller automation, and multi-marketplace solutions that drive revenue growth.",
    services: [
      {
        title: "Amazon Seller Services",
        description:
          "Full-service Amazon account management, listing optimization, and seller growth strategies.",
        href: "/services/amazon-services",
        icon: Package,
        tags: ["FBA", "FBM", "Listing Optimization"],
        featured: true,
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Custom online stores, multi-vendor marketplaces, and integrated payment and inventory systems.",
        href: "/services/e-commerce-solutions",
        icon: ShoppingCart,
        tags: ["Shopify", "WooCommerce", "Custom"],
      },
      {
        title: "Marketplace Development",
        description:
          "Scalable multi-vendor marketplace platforms connecting buyers and sellers seamlessly.",
        href: "/services/marketplace",
        icon: Store,
        tags: ["Multi-vendor", "B2B", "B2C"],
      },
      {
        title: "Amazon SP-API Integration",
        description:
          "Custom Amazon Selling Partner API integrations for order, inventory, and catalog automation.",
        href: "/services/amazon-sp-api-integration",
        icon: Zap,
        tags: ["SP-API", "Automation", "Sync"],
      },
      {
        title: "E-Commerce Workflow Automation",
        description:
          "Automated order processing, inventory sync, and multi-channel e-commerce operations.",
        href: "/services/ecommerce-workflow-automation",
        icon: Workflow,
        tags: ["Automation", "Multi-channel", "ERP"],
      },
    ],
  },
  {
    id: "infrastructure",
    badge: "Infrastructure",
    title: "Cloud &",
    highlight: "DevOps",
    description:
      "Cloud migration, infrastructure automation, and CI/CD pipelines for reliable, scalable deployments.",
    services: [
      {
        title: "Cloud Solutions",
        description:
          "AWS, Azure, and Google Cloud architecture, migration, and managed cloud services.",
        href: "/services/cloud-solutions",
        icon: Cloud,
        tags: ["AWS", "Azure", "GCP"],
      },
      {
        title: "DevOps Services",
        description:
          "CI/CD pipelines, containerization, monitoring, and infrastructure-as-code implementations.",
        href: "/services/devops",
        icon: Settings,
        tags: ["Docker", "Kubernetes", "CI/CD"],
      },
      {
        title: "MERN Stack Development",
        description:
          "Full-stack applications using MongoDB, Express, React, and Node.js for rapid development.",
        href: "/services/mern-stack",
        icon: Braces,
        tags: ["MongoDB", "Express", "React"],
      },
      {
        title: "MEAN Stack Development",
        description:
          "Angular-based full-stack solutions with MongoDB, Express, and Node.js backend.",
        href: "/services/mean-stack",
        icon: Braces,
        tags: ["MongoDB", "Express", "Angular"],
      },
    ],
  },
  {
    id: "ai",
    badge: "Innovation",
    title: "AI &",
    highlight: "Machine Learning",
    description:
      "Intelligent automation, predictive analytics, and AI-powered features integrated into your products.",
    services: [
      {
        title: "AI & ML Solutions",
        description:
          "Custom machine learning models, NLP, computer vision, and AI integration for business automation.",
        href: "/services/ai-ml",
        icon: Brain,
        tags: ["ML", "NLP", "Automation"],
        featured: true,
      },
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified professionals with 7+ years of experience across industries.",
    icon: Globe,
  },
  {
    title: "Fast Delivery",
    description: "Agile methodology with rapid prototyping and iterative development cycles.",
    icon: Zap,
  },
  {
    title: "Competitive Pricing",
    description: "Transparent pricing models with no hidden costs and flexible engagement options.",
    icon: Package,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing, code reviews, and performance optimization on every project.",
    icon: Settings,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Requirements gathering, technical assessment, and project roadmap creation.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Wireframes, UI/UX design, and interactive prototypes for stakeholder approval.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile sprints with regular demos, code reviews, and continuous integration.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing including functional, performance, and security validation.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deployment, monitoring, and ongoing maintenance with dedicated support.",
  },
];
