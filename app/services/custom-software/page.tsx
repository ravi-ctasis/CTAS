"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Smartphone,
  Globe,
  Users,
  Target,
  Award,
  Clock,
  CheckCircle,
  Cloud,
  Palette,
  Search,
  BarChart,
  Settings,
  Rocket,
  TrendingUp,
  Headphones,
  FileText,
  Building,
  Layers,
  Network,
  Lock,
  Activity,
  Braces,
  Brackets,
  Square,
  Circle,
  Triangle,
  Shield,
  Code,
  Package,
  ShoppingCart,
} from "lucide-react";

const appTypes = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed specifically for your business needs and requirements",
    icon: Code,
    features: [
      "Bespoke Solutions",
      "Business Requirements Analysis",
      "Custom Functionality",
      "Scalable Architecture",
      "User-Centric Design",
    ],
    pills: ["Web Applications", "Desktop Software", "Cloud Solutions", "Hybrid Systems"],
    tags: [
      "React",
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "Product Software Development",
    description: "Complete product development from concept to market-ready software solutions",
    icon: Package,
    features: [
      "Product Strategy",
      "Market Research",
      "Feature Planning",
      "MVP Development",
      "Product Launch",
    ],
    pills: ["SaaS Platforms", "Web Products", "Desktop Applications", "Mobile Apps"],
    tags: [
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Django",
      "Spring Boot",
      "MySQL",
      "AWS",
      "Google Cloud",
    ],
  },
  {
    title: "Migration and Integration",
    description:
      "Seamless system migration and third-party integration services for existing applications",
    icon: Network,
    features: [
      "Legacy System Migration",
      "API Integration",
      "Data Migration",
      "System Modernization",
      "Seamless Transition",
    ],
    pills: ["Legacy Systems", "Cloud Migration", "API Integration", "Data Systems"],
    tags: [
      "AWS Migration",
      "Azure Migration",
      "API Development",
      "ETL Tools",
      "Database Migration",
      "Microservices",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Monitoring Tools",
    ],
  },
  {
    title: "Business Automation",
    description:
      "Automate repetitive tasks and streamline business processes for increased efficiency",
    icon: Settings,
    features: [
      "Workflow Automation",
      "Process Optimization",
      "Task Automation",
      "Business Intelligence",
      "Performance Analytics",
    ],
    pills: ["Web Platforms", "Desktop Tools", "Mobile Apps", "API Services"],
    tags: [
      "Python",
      "RPA Tools",
      "Workflow Engines",
      "Business Process Management",
      "Data Analytics",
      "Machine Learning",
      "Cloud Automation",
      "API Integration",
      "Reporting Tools",
      "Dashboard Solutions",
    ],
  },
  {
    title: "Enterprise Application",
    description: "Large-scale enterprise applications built for complex business operations",
    icon: Building,
    features: [
      "Enterprise Architecture",
      "Multi-User Support",
      "Role-Based Access",
      "Advanced Security",
      "Scalable Infrastructure",
    ],
    pills: ["Enterprise Systems", "Cloud Platforms", "On-Premise Solutions", "Hybrid Deployments"],
    tags: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Enterprise Databases",
      "Load Balancing",
      "High Availability",
      "Security Frameworks",
      "Monitoring Systems",
      "Backup Solutions",
      "Disaster Recovery",
    ],
  },
  {
    title: "MVP Development",
    description:
      "Rapid development of minimum viable products to validate ideas and accelerate time to market",
    icon: Rocket,
    features: [
      "Rapid Prototyping",
      "Core Features Focus",
      "User Feedback Integration",
      "Iterative Development",
      "Market Validation",
    ],
    pills: ["Web MVPs", "Mobile MVPs", "Desktop MVPs", "SaaS MVPs"],
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Vercel",
      "Netlify",
      "Stripe",
      "SendGrid",
    ],
  },
];

const techCategories = [
  {
    title: "Website Application",
    description: "Modern web development frameworks and technologies",
    icon: Globe,
    technologies: [
      { name: "HTML5", icon: Code, level: "Expert" },
      { name: "Angular JS", icon: Circle, level: "Expert" },
      { name: "React JS", icon: Braces, level: "Expert" },
      { name: "TypeScript", icon: Brackets, level: "Expert" },
      { name: "Vue JS", icon: Triangle, level: "Expert" },
      { name: "Drupal", icon: FileText, level: "Advanced" },
      { name: "Magento", icon: ShoppingCart, level: "Expert" },
      { name: "Shopify", icon: ShoppingCart, level: "Expert" },
      { name: "Umbraco", icon: FileText, level: "Advanced" },
      { name: "WordPress", icon: FileText, level: "Expert" },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Mobile application development platforms and frameworks",
    icon: Smartphone,
    technologies: [
      { name: "iOS", icon: Smartphone, level: "Expert" },
      { name: "Android", icon: Smartphone, level: "Expert" },
      { name: "React Native", icon: Braces, level: "Expert" },
      { name: "Flutter", icon: Smartphone, level: "Expert" },
      { name: "Swift", icon: Code, level: "Expert" },
      { name: "Unity", icon: Square, level: "Advanced" },
      { name: "Kotlin", icon: Code, level: "Expert" },
      { name: "Java", icon: Code, level: "Expert" },
      { name: "Xamarin", icon: Smartphone, level: "Advanced" },
      { name: "Swift UI", icon: Code, level: "Advanced" },
      { name: "Ionic", icon: Smartphone, level: "Advanced" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Understanding your business requirements and creating a detailed project plan",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Creating software architecture and system design",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "Building your custom software with modern technologies and best practices",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing and quality assurance",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Deployment & Support",
    description: "Deployment, monitoring, and ongoing maintenance support",
    icon: Rocket,
  },
];

const keyFeatures = [
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business needs",
    icon: Layers,
  },
  {
    title: "Security First",
    description: "Enterprise-grade security and compliance",
    icon: Shield,
  },
  {
    title: "Real-time Analytics",
    description: "Live insights and performance monitoring",
    icon: Activity,
  },
  {
    title: "API Integration",
    description: "Seamless integration with existing systems",
    icon: Network,
  },
  {
    title: "Cloud Ready",
    description: "Deploy on-premise or in the cloud",
    icon: Cloud,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support",
    icon: Headphones,
  },
];

const benefits = [
  {
    title: "Increased Efficiency",
    description:
      "Custom software can automate manual processes and streamline workflows, leading to significant time and cost savings",
    icon: TrendingUp,
  },
  {
    title: "Competitive Advantage",
    description:
      "Custom solutions give you unique capabilities that set you apart from competitors using off-the-shelf software",
    icon: Target,
  },
  {
    title: "Data Control",
    description:
      "Full control over your data, security, and compliance requirements with custom-built solutions",
    icon: Lock,
  },
  {
    title: "Scalability",
    description:
      "Software that grows with your business, adapting to changing needs and increasing user loads",
    icon: Rocket,
  },
  {
    title: "Integration",
    description:
      "Seamless integration with your existing systems, tools, and third-party applications",
    icon: Network,
  },
  {
    title: "ROI Focus",
    description:
      "Custom software designed to deliver measurable return on investment and business value",
    icon: BarChart,
  },
];

const topicalGuideTabs = [
  {
    id: "planning",
    title: "Planning & Strategy",
    content:
      "Essential steps to plan and strategize your custom software development project",
    points: [
      "Define business requirements and objectives",
      "Analyze existing systems and processes",
      "Identify key stakeholders and users",
      "Create detailed project scope and timeline",
      "Plan budget and resource allocation",
      "Select appropriate technology stack",
    ],
  },
  {
    id: "design",
    title: "Architecture Design",
    content: "Creating robust and scalable software architecture for your custom solution",
    points: [
      "Design system architecture and components",
      "Create database schema and data models",
      "Plan API design and integration points",
      "Define security and authentication",
      "Design user interface and experience",
      "Plan deployment and infrastructure",
    ],
  },
  {
    id: "development",
    title: "Development Process",
    content: "The technical development process from coding to deployment",
    points: [
      "Set up development environment and tools",
      "Implement core features and functionality",
      "Integrate APIs and third-party services",
      "Ensure code quality and best practices",
      "Implement security measures and testing",
      "Perform regular code reviews and testing",
    ],
  },
  {
    id: "testing",
    title: "Testing & QA",
    content: "Comprehensive testing to ensure your software works perfectly",
    points: [
      "Perform functional and integration testing",
      "Conduct user acceptance testing (UAT)",
      "Test performance and scalability",
      "Security testing and vulnerability assessment",
      "Compatibility testing across platforms",
      "Load testing and stress testing",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Custom Software Development Services",
      description:
        "Ctas provides custom software development services including enterprise apps, MVP development, automation, and product engineering using modern tech stacks.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "Custom Software Development",
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
          name: "Custom Software",
          item: "https://www.ctasis.com/services/custom-software",
        },
      ],
    },
  ],
};

export default function CustomSoftwarePage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Custom Software Development Services",
        structuredData,
        hero: {
          badge: "Custom Software Development",
          title: "Innovative &",
          highlight: "Scalable Software Solutions",
          description:
            "We create innovative custom software solutions that streamline business operations and drive growth. From enterprise applications to specialized tools, we deliver exceptional software experiences.",
          stats: [
            { number: "8+", label: "Custom Solutions", icon: Code },
            { number: "10+", label: "Client Satisfaction", icon: Users },
            { number: "5+", label: "Years Experience", icon: Award },
            { number: "24/7", label: "Support", icon: Clock },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "bento",
            header: {
              badge: "Software Types",
              title: "Custom",
              highlight: "Software Solutions",
              description:
                "From bespoke applications to enterprise systems and MVPs, we build software tailored to your business needs.",
            },
            items: appTypes,
            columns: 3,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "Modern",
              highlight: "Tech Stack",
              description:
                "We use cutting-edge technologies organized by development layers to build robust and scalable custom software solutions.",
            },
            categories: techCategories,
          },
          {
            type: "process",
            variant: "timeline",
            header: {
              badge: "Our Process",
              title: "Custom Software",
              highlight: "Development Process",
              description:
                "Our proven development process ensures quality, transparency, and timely delivery of custom software solutions.",
            },
            steps: process,
          },
          {
            type: "benefits",
            variant: "icon-strip",
            header: {
              badge: "Why Choose Us",
              title: "Key",
              highlight: "Features",
              description:
                "We deliver exceptional custom software solutions with cutting-edge features and technologies.",
            },
            items: keyFeatures,
          },
          {
            type: "benefits",
            variant: "zigzag",
            header: {
              badge: "Why Choose Custom Software?",
              title: "Benefits of",
              highlight: "Custom Software Development",
              description:
                "Discover how custom software development can transform your business operations and drive growth.",
            },
            items: benefits,
          },
          {
            type: "tabs",
            header: {
              badge: "Complete Guide",
              title: "Topical Guide for",
              highlight: "Custom Software Development",
              description:
                "Everything you need to know about custom software development, from planning to deployment.",
            },
            tabs: topicalGuideTabs,
            defaultTab: "planning",
          },
        ],
        cta: {
          title: "Ready to Build Your Custom Software?",
          description:
            "Let's discuss your project requirements and create a custom software solution that perfectly fits your business needs.",
          primaryLabel: "Get Started Today",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
