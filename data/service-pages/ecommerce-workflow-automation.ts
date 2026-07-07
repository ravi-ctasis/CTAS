import {
  Workflow,
  ShoppingBag,
  Package,
  Bot,
  BarChart3,
  Headphones,
  Shield,
  Gauge,
  Cable,
  Sparkles,
  Search,
  Code,
  Zap,
} from "lucide-react";
import type { ServicePageConfig } from "@/types/service-page";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "e-Commerce Workflow Automation Services",
  provider: {
    "@type": "Organization",
    name: "Ctas Info Services LLP",
    url: "https://www.ctasis.com",
  },
  serviceType: "e-Commerce Automation",
  areaServed: ["Worldwide"],
  description:
    "Strategy, implementation, and managed services for automating e-commerce catalog, merchandising, order management, fulfillment, and support journeys.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "0",
    description: "Free automation readiness assessment",
  },
};

const automationStack = [
  "Shopify / Shopify Plus",
  "BigCommerce",
  "Magento / Adobe Commerce",
  "Amazon & Walmart APIs",
  "NetSuite",
  "Microsoft Dynamics 365",
  "SAP S/4HANA",
  "Celigo",
  "Make / Integromat",
  "n8n",
  "UiPath",
  "Power Automate",
  "Python / Node.js workers",
  "Snowflake",
  "Looker / Power BI",
];

export const ecommerceWorkflowAutomationConfig: ServicePageConfig = {
  ariaLabel: "e-Commerce Workflow Automation Services",
  structuredData,
  hero: {
    badge: "e-Commerce Automation Studio",
    title: "e-Commerce Workflow Automation Services",
    description:
      "Harmonize storefront, marketplace, OMS, WMS, CX, and finance workflows with automation accelerators purpose-built for modern retail brands and marketplaces.",
    stats: [
      { number: "420+", label: "Operational Hours Saved / Month", icon: Gauge },
      { number: "65+", label: "Workflows Automated", icon: Workflow },
      { number: "25+", label: "Channels Supported", icon: Cable },
      { number: "15", label: "Automation Experts", icon: Bot },
    ],
    primaryCta: { label: "Request Automation Audit", href: "/contact-us" },
    secondaryCta: { label: "View Case Studies", href: "/case-studies" },
  },
  sections: [
    {
      type: "cards",
      header: {
        badge: "Core Capability Stacks",
        title: "Automate the Journeys",
        highlight: "That Move Revenue",
        description:
          "Each capability stack combines APIs, workflow engines, and AI building blocks to eliminate repetitive work, reduce errors, and surface insight for your operations team.",
      },
      items: [
        {
          title: "Catalog & Merchandising",
          description:
            "Automate product onboarding, enrichment, pricing, and channel syndication with validation workflows and AI-powered recommendations.",
          icon: ShoppingBag,
          pills: ["PIM integrations", "Dynamic pricing", "Channel-ready feeds"],
        },
        {
          title: "Order & Fulfillment Ops",
          description:
            "Connect storefronts, OMS, WMS, and 3PL partners to synchronize orders, inventory, picking, packing, and carrier labels in real time.",
          icon: Package,
          pills: ["Multi-warehouse routing", "FBA/FBM sync", "Exception handling"],
        },
        {
          title: "Customer Service Automation",
          description:
            "Deploy AI co-pilots, macros, and workflow bots that resolve status requests, returns, warranties, and escalations across channels.",
          icon: Headphones,
          pills: ["LLM chatbots", "Ticket triage", "RMA workflows"],
        },
        {
          title: "Finance & Analytics",
          description:
            "Close the loop with automated reconciliation, payout reporting, revenue recognition, and executive dashboards for every brand cohort.",
          icon: BarChart3,
          pills: ["Settlement sync", "Margin intelligence", "C-level dashboards"],
        },
      ],
      columns: 2,
    },
    {
      type: "cards",
      header: {
        badge: "Differentiators",
        title: "Not Another Generic",
        highlight: "Automation Shop",
      },
      items: [
        {
          title: "Process-first Workshops",
          description:
            "Value stream mapping sessions surface blockers, manual steps, and compliance requirements before automation begins.",
          icon: Workflow,
        },
        {
          title: "Secure Integrations",
          description:
            "SOC2-ready patterns, role-based access, and end-to-end encryption protect customer, payment, and logistics data.",
          icon: Shield,
        },
        {
          title: "Real-Time Observability",
          description:
            "Command centers with KPIs, SLA alerts, and root-cause diagnostics keep operations transparent for merch, ops, and finance teams.",
          icon: Gauge,
        },
        {
          title: "AI + RPA Blend",
          description:
            "Combine deterministic RPA, event-driven microservices, and GenAI copilots for faster time-to-value.",
          icon: Sparkles,
        },
      ],
      columns: 2,
    },
    {
      type: "process-sidebar",
      header: {
        badge: "Delivery Approach",
        title: "Playbook for Sustainable",
        highlight: "Automation",
        description:
          "We move from discovery to production in 4-6 week sprints, layering automation where it creates measurable impact while keeping humans in control of exceptions.",
      },
      steps: [
        {
          step: "01",
          title: "Discovery & KPI Definition",
          description:
            "Measure manual touchpoints, error rates, and processing times to define success criteria and roadmap priorities.",
          icon: Search,
        },
        {
          step: "02",
          title: "Solution Blueprint",
          description:
            "Design target-state architecture, integration maps, data contracts, and governance workflows.",
          icon: Workflow,
        },
        {
          step: "03",
          title: "Build & Integrate",
          description:
            "Configure automation platforms, develop custom services, and wire up APIs, webhooks, and event streams.",
          icon: Code,
        },
        {
          step: "04",
          title: "Hypercare & Optimization",
          description:
            "Enable continuous improvement with telemetry dashboards, A/B testing, and playbooks for new market launches.",
          icon: Zap,
        },
      ],
      sidebar: {
        title: "Platforms & Toolchain",
        description:
          "We combine enterprise-grade SaaS connectors with custom code where needed, ensuring you retain ownership of data and IP.",
        items: automationStack,
        highlights: [
          "KPI dashboards & executive scorecards",
          "Playbooks for CX, operations, and finance teams",
          "24/7 monitoring with runbooks",
        ],
      },
    },
  ],
  cta: {
    title: "Turn Manual E-commerce Tasks into Automated Revenue Engines",
    description:
      "Share your current tech stack, bottlenecks, and KPIs—we'll respond with an automation roadmap and timeline within two business days.",
    primaryLabel: "Schedule Strategy Call",
    primaryHref: "/contact-us",
    secondaryLabel: "Browse Automation Guides",
    secondaryHref: "/blog",
  },
};
