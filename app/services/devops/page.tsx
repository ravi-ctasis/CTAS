"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Code,
  Server,
  Shield,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Cloud,
  Search,
  Settings,
  TrendingUp,
  Activity,
  DollarSign,
  Hexagon,
} from "lucide-react";

const devopsServices = [
  {
    title: "CI/CD Pipeline",
    description: "Automated continuous integration and deployment pipelines for faster delivery",
    icon: Code,
    features: ["Automated Testing", "Build Automation", "Deployment Automation", "Rollback Capabilities"],
  },
  {
    title: "Infrastructure as Code",
    description: "Manage infrastructure through code for consistency and scalability",
    icon: Server,
    features: ["Terraform Configuration", "CloudFormation", "Infrastructure Versioning", "Environment Management"],
  },
  {
    title: "Container Orchestration",
    description: "Kubernetes and Docker solutions for scalable container management",
    icon: Cloud,
    features: ["Kubernetes Clusters", "Docker Containers", "Service Mesh", "Auto Scaling"],
  },
  {
    title: "Monitoring & Logging",
    description: "Comprehensive monitoring and logging solutions for better visibility",
    icon: Activity,
    features: ["Application Monitoring", "Infrastructure Monitoring", "Log Aggregation", "Alert Management"],
  },
  {
    title: "Security & Compliance",
    description: "DevSecOps practices with security integrated into the pipeline",
    icon: Shield,
    features: ["Security Scanning", "Compliance Checks", "Access Control", "Audit Logging"],
  },
  {
    title: "Performance Optimization",
    description: "Optimize application and infrastructure performance",
    icon: Zap,
    features: ["Performance Testing", "Load Balancing", "Caching Strategies", "Resource Optimization"],
  },
];

const devopsFeatures = [
  { icon: Zap, title: "Faster Deployment", description: "Automated pipelines reduce deployment time by 80%" },
  { icon: Shield, title: "Enhanced Security", description: "Security integrated into every stage of development" },
  { icon: TrendingUp, title: "Improved Reliability", description: "Automated testing and monitoring ensure stability" },
  { icon: Clock, title: "24/7 Monitoring", description: "Round-the-clock monitoring and alerting" },
  { icon: Users, title: "Team Collaboration", description: "Better collaboration between development and operations" },
  { icon: DollarSign, title: "Cost Optimization", description: "Automated resource management reduces costs" },
];

const process = [
  { step: "01", title: "Assessment & Planning", description: "Analyzing current processes and creating DevOps strategy", icon: Search },
  { step: "02", title: "Tool Selection", description: "Choosing the right DevOps tools and technologies", icon: Settings },
  { step: "03", title: "Pipeline Setup", description: "Building CI/CD pipelines and automation workflows", icon: Code },
  { step: "04", title: "Testing & Validation", description: "Testing pipelines and validating automation processes", icon: CheckCircle },
  { step: "05", title: "Monitoring & Support", description: "Setting up monitoring and providing ongoing support", icon: Activity },
];

const technologies = [
  { name: "Jenkins", icon: Server, level: "Expert" },
  { name: "GitLab CI", icon: Code, level: "Expert" },
  { name: "GitHub Actions", icon: Code, level: "Expert" },
  { name: "Docker", icon: Server, level: "Expert" },
  { name: "Kubernetes", icon: Hexagon, level: "Expert" },
  { name: "Terraform", icon: Code, level: "Expert" },
  { name: "Ansible", icon: Code, level: "Advanced" },
  { name: "Prometheus", icon: Activity, level: "Advanced" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "DevOps Services",
      description:
        "CI/CD, infrastructure automation, observability, and cloud operations from Ctas to speed up delivery and reliability.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "DevOps",
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
          name: "DevOps",
          item: "https://www.ctasis.com/services/devops",
        },
      ],
    },
  ],
};

export default function DevOpsPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "DevOps Services",
        structuredData,
        hero: {
          badge: "Our DevOps Services",
          title: "Continuous",
          highlight: "Integration & Deployment",
          description:
            "We streamline your development process with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.",
          stats: [
            { number: "80%", label: "Faster Deployment", icon: Zap },
            { number: "99.9%", label: "Uptime SLA", icon: Clock },
            { number: "50+", label: "Pipelines Built", icon: Code },
            { number: "24/7", label: "Monitoring", icon: Activity },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Solutions", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "alternating",
            header: {
              badge: "Our Services",
              title: "Comprehensive",
              highlight: "DevOps Solutions",
              description: "We offer end-to-end DevOps services to streamline your development process.",
            },
            items: devopsServices,
            columns: 3,
          },
          {
            type: "benefits",
            variant: "icon-strip",
            header: {
              badge: "Key Benefits",
              title: "Why Choose Our",
              highlight: "DevOps Services",
              description: "Transform your development process with modern DevOps practices.",
            },
            items: devopsFeatures,
          },
          {
            type: "process",
            variant: "timeline",
            header: {
              badge: "Our Process",
              title: "DevOps",
              highlight: "Implementation Process",
              description: "Our proven 5-step process ensures successful DevOps implementation.",
            },
            steps: process,
          },
          {
            type: "tech-grid",
            variant: "scroll",
            header: {
              badge: "Technologies",
              title: "Modern",
              highlight: "DevOps Tools",
              description: "We use cutting-edge DevOps tools and technologies to deliver robust solutions.",
            },
            items: technologies,
          },
        ],
        cta: {
          title: "Ready to Transform Your DevOps?",
          description:
            "Let's discuss your DevOps strategy and create automated pipelines that accelerate your development process.",
          primaryLabel: "Get Free Consultation",
          primaryHref: "/contact-us",
          secondaryLabel: "View Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
