import {
  Cloud,
  ShoppingCart,
  Shield,
  Workflow,
  Link2,
  BarChart3,
  Code,
  RefreshCw,
  Zap,
  Layers,
  LineChart,
  Globe,
  Users,
  Search,
} from "lucide-react";
import type { ServicePageConfig } from "@/types/service-page";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Amazon SP API Integration Services",
      description:
        "Done-for-you Amazon Selling Partner API integrations for pricing, catalog, finance, FBA, and vendor workflows.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
        logo: "https://www.ctasis.com/assets/images/og-image.jpg",
      },
      areaServed: ["US", "UK", "EU", "IN", "AE", "AU"],
      serviceType: "Amazon SP API Integration",
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          price: "0",
          description: "Free discovery call and tailored quote",
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Amazon SP API Automation Modules",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Catalog & Listings Automation",
              description: "Sync ASIN data, variations, and rich content across regions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pricing & Repricing Engine",
              description: "Dynamic rule-based and AI-powered repricing connected to Amazon datasets.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Finance & Settlement Reporting",
              description: "Match SP API finance reports with ERP and BI systems.",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Amazon SP API Integration",
          item: "https://www.ctasis.com/services/amazon-sp-api-integration",
        },
      ],
    },
  ],
};

const techStack = [
  "Amazon SP API",
  "Amazon Ads API",
  "Selling Partner Appstore",
  "Node.js / TypeScript",
  "Python",
  "AWS Lambda",
  "EventBridge",
  "Kafka/SQS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "GitHub Actions",
];

export const amazonSpApiConfig: ServicePageConfig = {
  ariaLabel: "Amazon SP API Integration Services",
  structuredData,
  hero: {
    badge: "Amazon Marketplace Center of Excellence",
    title: "Amazon SP API Integration Services",
    description:
      "Automate every Amazon workflow—from catalog ingestion and Buy Box repricing to settlements and compliance—using secure, scalable SP API integrations built by engineers who manage 35+ marketplace programs globally.",
    stats: [
      { number: "35+", label: "SP API Projects Delivered", icon: ShoppingCart },
      { number: "15", label: "Marketplaces & Regions", icon: Globe },
      { number: "99.9%", label: "Average Uptime", icon: Cloud },
      { number: "20+", label: "Integration Experts", icon: Users },
    ],
    primaryCta: { label: "Book a Discovery Call", href: "/contact-us" },
    secondaryCta: {
      label: "Explore Case Studies",
      href: "/portfolios/amazon-product-management-automation-platform",
    },
  },
  sections: [
    {
      type: "cards",
      header: {
        badge: "Integration Playbooks",
        title: "Pre-Built Amazon",
        highlight: "Automation Modules",
        description:
          "Mix and match the modules that matter most to your Amazon business or SaaS platform. Each block ships with documentation, monitoring, and security guardrails.",
      },
      items: [
        {
          title: "Catalog & Listing Sync",
          description:
            "Automate ASIN creation, A+ content updates, variation management, and multi-country localization from a single dashboard.",
          icon: Layers,
          pills: ["A+ Content", "Parent/Child SKUs", "Globalization"],
        },
        {
          title: "Pricing & Buy Box Automation",
          description:
            "Deploy rule-based, velocity, or AI-backed repricers that react to competition, fees, and inventory buffers within seconds.",
          icon: LineChart,
          pills: ["Dynamic rules", "MAP guardrails", "Opportunity alerts"],
        },
        {
          title: "Order, FBA & Returns",
          description:
            "Push Amazon orders into ERP/WMS stacks, orchestrate FBA shipments, and monitor return defects with proactive alerts.",
          icon: Workflow,
          pills: ["Order orchestration", "FBA prep", "Return audits"],
        },
        {
          title: "Finance & Settlements",
          description:
            "Consolidate SP API financial events, reconcile settlements, and feed BI dashboards for margin tracking per marketplace.",
          icon: BarChart3,
          pills: ["Settlement reports", "Dispute tracker", "Payout forecasts"],
        },
      ],
      columns: 2,
      variant: "horizontal",
    },
    {
      type: "benefits",
      variant: "icon-strip",
      header: {
        badge: "Why Sellers Choose Ctas",
        title: "Built for Compliance,",
        highlight: "Scale & Speed",
      },
      items: [
        {
          title: "Audit-Ready Security",
          description:
            "SOC2-aligned development practices with encrypted data stores, rotation of refresh tokens, and LWA compliance.",
          icon: Shield,
        },
        {
          title: "Always-On Monitoring",
          description:
            "24/7 job monitors, auto-retry queues, and proactive alerting to keep ingestion and submission quotas healthy.",
          icon: RefreshCw,
        },
        {
          title: "Extensible Architecture",
          description:
            "Microservice blueprints with event streaming (Kafka/SQS) so new marketplaces or APIs plug in without downtime.",
          icon: Code,
        },
        {
          title: "ERP & OMS Connectors",
          description:
            "Pre-built connectors for NetSuite, Microsoft Dynamics, SAP, Shopify, BigCommerce, and custom stacks.",
          icon: Link2,
        },
      ],
    },
    {
      type: "process-sidebar",
      header: {
        badge: "Engagement Model",
        title: "Proven SP API",
        highlight: "Delivery Process",
        description:
          "From securing Amazon approvals to supporting production workloads, our team follows a transparent, sprint-based delivery approach with weekly demos and shared dashboards.",
      },
      steps: [
        {
          step: "01",
          title: "Discovery & Compliance",
          description:
            "Review workflows, map endpoints, and guide you through SP API app registration plus data protection addenda.",
          icon: Search,
        },
        {
          step: "02",
          title: "Solution Blueprint",
          description:
            "Architect data pipelines, event triggers, and throttling strategies with detailed acceptance criteria.",
          icon: Workflow,
        },
        {
          step: "03",
          title: "Development & QA",
          description:
            "Build services with TypeScript/Node.js, Python, or .NET, backed by unit, contract, and sandbox testing.",
          icon: Code,
        },
        {
          step: "04",
          title: "Launch & Optimization",
          description:
            "Deploy to AWS/Azure, tune performance dashboards, and hand over runbooks plus training.",
          icon: Zap,
        },
      ],
      sidebar: {
        title: "Tech Stack & Tooling",
        description:
          "We design cloud-native services that respect Amazon's throttling, encryption, and regional requirements while remaining easy to extend.",
        items: techStack,
        highlights: [
          "SLA-backed maintenance & monitoring",
          "Dedicated solution architect & PM",
          "Knowledge transfer & runbooks",
        ],
      },
    },
  ],
  cta: {
    title: "Ready to Launch Amazon SP API Automation?",
    description:
      "Share your target marketplaces, catalog size, and existing tooling—we'll return a technical plan and timeline within 48 hours.",
    primaryLabel: "Request Proposal",
    primaryHref: "/contact-us",
    secondaryLabel: "Read Amazon Insights",
    secondaryHref: "/blog",
  },
};
