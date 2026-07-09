"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Users,
  Target,
  Clock,
  CheckCircle,
  Code,
  Search,
  TrendingUp,
  Headphones,
  Activity,
  Hexagon,
  Globe,
  DollarSign,
  Settings,
  Lock,
  Circle,
  Container,
} from "lucide-react";

const cloudTypes = [
  {
    title: "Cloud Migration Services",
    description:
      "Seamless migration of your existing infrastructure to cloud platforms with zero downtime",
    icon: Cloud,
    image: "/service-banners/cloud-solutions.webp",
    features: [
      "Infrastructure Assessment",
      "Migration Strategy",
      "Data Transfer",
      "Testing & Validation",
      "Zero Downtime Migration",
      "Post-Migration Support",
    ],
    pills: ["On-Premise to Cloud", "Cloud to Cloud", "Hybrid Cloud", "Multi-Cloud"],
    tags: [
      "AWS Migration",
      "Azure Migration",
      "Google Cloud",
      "VMware",
      "Migration Tools",
      "Data Sync",
    ],
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud infrastructure designed for your business needs",
    icon: Server,
    features: [
      "Auto-scaling",
      "Load Balancing",
      "High Availability",
      "Disaster Recovery",
      "Resource Optimization",
      "Cost Management",
    ],
    pills: ["Web Applications", "Mobile Backend", "Enterprise Systems", "Microservices"],
    tags: ["EC2", "Azure VMs", "Google Compute", "Kubernetes", "Docker", "Terraform"],
  },
  {
    title: "Cloud Security",
    description: "Comprehensive security solutions to protect your cloud infrastructure",
    icon: Shield,
    features: [
      "Identity Management",
      "Data Encryption",
      "Compliance",
      "Threat Detection",
      "Access Control",
      "Security Monitoring",
    ],
    pills: ["Enterprise Security", "Compliance Systems", "Data Protection", "Identity Management"],
    tags: ["AWS IAM", "Azure AD", "Google IAM", "VPN", "Firewalls", "Encryption"],
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and DevOps practices for faster delivery",
    icon: Code,
    features: [
      "Continuous Integration",
      "Continuous Deployment",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Automated Testing",
      "Release Management",
    ],
    pills: ["Web Applications", "Mobile Apps", "Microservices", "Enterprise Systems"],
    tags: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Database Solutions",
    description: "Managed database services with high performance and reliability",
    icon: Database,
    features: [
      "Database Migration",
      "Performance Optimization",
      "Backup & Recovery",
      "Monitoring",
      "Scaling",
      "Security",
    ],
    pills: ["Web Applications", "Analytics Systems", "Enterprise Databases", "Real-time Systems"],
    tags: ["RDS", "Azure SQL", "Cloud SQL", "MongoDB Atlas", "Redis", "Elasticsearch"],
  },
  {
    title: "Cloud Consulting",
    description: "Expert guidance on cloud strategy, architecture, and best practices",
    icon: Users,
    features: [
      "Architecture Design",
      "Cost Optimization",
      "Best Practices",
      "Training & Support",
      "Strategy Planning",
      "Technology Selection",
    ],
    pills: ["Cloud Strategy", "Architecture Review", "Cost Analysis", "Training Programs"],
    tags: [
      "Cloud Assessment",
      "Architecture Design",
      "Cost Analysis",
      "Best Practices",
      "Training Materials",
      "Documentation",
    ],
  },
];

const techCategories = [
  {
    title: "Cloud Platforms",
    description: "Leading cloud service providers and platforms",
    icon: Cloud,
    technologies: [
      { name: "AWS", icon: Cloud, level: "Expert" },
      { name: "Microsoft Azure", icon: Cloud, level: "Expert" },
      { name: "Google Cloud", icon: Cloud, level: "Expert" },
      { name: "DigitalOcean", icon: Cloud, level: "Advanced" },
      { name: "IBM Cloud", icon: Cloud, level: "Advanced" },
      { name: "Oracle Cloud", icon: Cloud, level: "Intermediate" },
      { name: "Alibaba Cloud", icon: Cloud, level: "Intermediate" },
      { name: "Vultr", icon: Cloud, level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Automation",
    description: "DevOps tools and automation technologies",
    icon: Settings,
    technologies: [
      { name: "Docker", icon: Container, level: "Expert" },
      { name: "Kubernetes", icon: Hexagon, level: "Expert" },
      { name: "Terraform", icon: Code, level: "Expert" },
      { name: "Jenkins", icon: Server, level: "Expert" },
      { name: "Ansible", icon: Code, level: "Advanced" },
      { name: "GitLab CI", icon: Code, level: "Advanced" },
      { name: "GitHub Actions", icon: Code, level: "Expert" },
      { name: "CircleCI", icon: Circle, level: "Advanced" },
      { name: "AWS CodePipeline", icon: Cloud, level: "Expert" },
      { name: "Azure DevOps", icon: Cloud, level: "Advanced" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Assessment & Planning",
    description: "Analyzing current infrastructure and creating cloud migration strategy",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Designing scalable cloud architecture and infrastructure",
    icon: Target,
  },
  {
    step: "03",
    title: "Migration & Setup",
    description: "Migrating applications and setting up cloud infrastructure",
    icon: Cloud,
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Testing performance and optimizing cloud resources",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Monitoring & Support",
    description: "Setting up monitoring and providing ongoing support",
    icon: Activity,
  },
];

const keyFeatures = [
  {
    title: "High Performance",
    description: "Lightning-fast cloud infrastructure optimized for speed",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Bank-level security with encryption and compliance",
    icon: Shield,
  },
  {
    title: "Auto Scaling",
    description: "Automatic scaling based on demand and traffic",
    icon: TrendingUp,
  },
  {
    title: "Global Reach",
    description: "Multi-region deployment for worldwide accessibility",
    icon: Globe,
  },
  {
    title: "99.9% Uptime",
    description: "High availability with guaranteed uptime SLA",
    icon: Clock,
  },
  {
    title: "Cost Optimization",
    description: "Pay-as-you-use model with cost optimization",
    icon: DollarSign,
  },
];

const benefits = [
  {
    title: "Scalability",
    description:
      "Scale your infrastructure up or down based on demand without any downtime or performance issues",
    icon: TrendingUp,
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce infrastructure costs with pay-as-you-use models and optimized resource allocation",
    icon: DollarSign,
  },
  {
    title: "Enhanced Security",
    description: "Enterprise-grade security with encryption, compliance, and threat protection",
    icon: Lock,
  },
  {
    title: "Global Accessibility",
    description:
      "Deploy your applications globally with multi-region infrastructure for worldwide reach",
    icon: Globe,
  },
  {
    title: "Disaster Recovery",
    description:
      "Comprehensive backup and disaster recovery solutions to protect your business data",
    icon: Shield,
  },
  {
    title: "DevOps Integration",
    description: "Seamless integration with DevOps tools for automated deployment and management",
    icon: Settings,
  },
];

const topicalGuideTabs = [
  {
    id: "planning",
    title: "Cloud Strategy & Planning",
    content:
      "Essential steps to plan and strategize your cloud migration and implementation",
    points: [
      "Assess current infrastructure and applications",
      "Define cloud migration strategy and goals",
      "Choose appropriate cloud platforms and services",
      "Plan for security and compliance requirements",
      "Estimate costs and create budget plans",
      "Design disaster recovery and backup strategies",
    ],
  },
  {
    id: "migration",
    title: "Cloud Migration",
    content: "The technical migration process from on-premise to cloud infrastructure",
    points: [
      "Prepare applications for cloud deployment",
      "Set up cloud infrastructure and services",
      "Migrate data and applications systematically",
      "Configure security and access controls",
      "Test applications in cloud environment",
      "Optimize performance and costs",
    ],
  },
  {
    id: "security",
    title: "Cloud Security",
    content: "Comprehensive security measures for cloud infrastructure and applications",
    points: [
      "Implement identity and access management",
      "Set up data encryption and protection",
      "Configure network security and firewalls",
      "Establish monitoring and threat detection",
      "Ensure compliance with regulations",
      "Create security policies and procedures",
    ],
  },
  {
    id: "optimization",
    title: "Cloud Optimization",
    content: "Optimizing cloud resources for better performance and cost efficiency",
    points: [
      "Monitor resource usage and performance",
      "Implement auto-scaling and load balancing",
      "Optimize database and storage performance",
      "Use cost management and monitoring tools",
      "Implement caching and CDN solutions",
      "Regular performance reviews and optimization",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Cloud Solutions Services",
      description:
        "Expert cloud solutions: AWS, Azure, GCP, Docker, Kubernetes. Scalable infrastructure and DevOps services.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "Cloud Computing",
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
          name: "Cloud Solutions",
          item: "https://www.ctasis.com/services/cloud-solutions",
        },
      ],
    },
  ],
};

export default function CloudSolutionsPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Cloud Solutions Services",
        structuredData,
        hero: {
          badge: "Cloud Solutions Services",
          title: "Enterprise",
          highlight: "Cloud Solutions",
          description:
            "We provide enterprise-grade cloud solutions that scale with your business. From migration to optimization, we ensure your cloud infrastructure is secure, reliable, and cost-effective.",
          stats: [
            { number: "200+", label: "Cloud Deployments", icon: Cloud },
            { number: "200+", label: "Happy Clients", icon: Users },
            { number: "99.9%", label: "Uptime SLA", icon: Clock },
            { number: "24/7", label: "Support", icon: Headphones },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "bento",
            header: {
              badge: "Cloud Services",
              title: "Enterprise",
              highlight: "Cloud Solutions",
              description:
                "From migration and infrastructure to security and DevOps, we deliver end-to-end cloud services tailored to your business.",
            },
            items: cloudTypes,
            columns: 3,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "Modern",
              highlight: "Cloud Tech Stack",
              description:
                "We use cutting-edge cloud technologies organized by development layers to build robust and scalable cloud solutions.",
            },
            categories: techCategories,
          },
          {
            type: "process",
            variant: "timeline",
            header: {
              badge: "Our Process",
              title: "Cloud Implementation",
              highlight: "Process",
              description:
                "Our proven development process ensures quality, transparency, and timely delivery of cloud solutions.",
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
                "We deliver exceptional cloud solutions with cutting-edge features and technologies.",
            },
            items: keyFeatures,
          },
          {
            type: "benefits",
            variant: "zigzag",
            header: {
              badge: "Why Choose Cloud Solutions?",
              title: "Benefits of",
              highlight: "Professional Cloud Solutions",
              description:
                "Discover how professional cloud solutions can transform your business operations and drive growth.",
            },
            items: benefits,
          },
          {
            type: "tabs",
            header: {
              badge: "Complete Guide",
              title: "Topical Guide for",
              highlight: "Cloud Solutions",
              description:
                "Everything you need to know about cloud solutions, from planning to optimization.",
            },
            tabs: topicalGuideTabs,
            defaultTab: "planning",
          },
        ],
        cta: {
          title: "Ready to Move to the Cloud?",
          description:
            "Let's discuss your cloud migration strategy and create a scalable infrastructure that grows with your business.",
          primaryLabel: "Get Started Today",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
