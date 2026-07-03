
;
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
  CheckCircle2,
  Layers,
  LineChart,
  Globe,
  Users,
  Search,
} from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
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
};

const stats = [
  { label: "SP API Projects Delivered", value: "35+", icon: ShoppingCart },
  { label: "Marketplaces & Regions", value: "15", icon: Globe },
  { label: "Average Uptime", value: "99.9%", icon: Cloud },
  { label: "Integration Experts", value: "20+", icon: Users },
];

const automationModules = [
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
];

const differentiators = [
  {
    icon: Shield,
    title: "Audit-Ready Security",
    description:
      "SOC2-aligned development practices with encrypted data stores, rotation of refresh tokens, and LWA compliance.",
  },
  {
    icon: RefreshCw,
    title: "Always-On Monitoring",
    description:
      "24/7 job monitors, auto-retry queues, and proactive alerting to keep ingestion and submission quotas healthy.",
  },
  {
    icon: Code,
    title: "Extensible Architecture",
    description:
      "Microservice blueprints with event streaming (Kafka/SQS) so new marketplaces or APIs plug in without downtime.",
  },
  {
    icon: Link2,
    title: "ERP & OMS Connectors",
    description:
      "Pre-built connectors for NetSuite, Microsoft Dynamics, SAP, Shopify, BigCommerce, and custom stacks.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Compliance",
    text: "Review workflows, map endpoints, and guide you through SP API app registration plus data protection addenda.",
    icon: Search,
  },
  {
    step: "02",
    title: "Solution Blueprint",
    text: "Architect data pipelines, event triggers, and throttling strategies with detailed acceptance criteria.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Development & QA",
    text: "Build services with TypeScript/Node.js, Python, or .NET, backed by unit, contract, and sandbox testing.",
    icon: Code,
  },
  {
    step: "04",
    title: "Launch & Optimization",
    text: "Deploy to AWS/Azure, tune performance dashboards, and hand over runbooks plus training.",
    icon: Zap,
  },
];

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

const AmazonSpApiPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navigation />
      <main className="flex-1">
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 opacity-50" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Amazon Marketplace Center of Excellence
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Amazon SP API Integration Services
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Automate every Amazon workflow—from catalog ingestion and Buy Box repricing to
              settlements and compliance—using secure, scalable SP API integrations built by
              engineers who manage 35+ marketplace programs globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-blue-700 hover:bg-slate-100 font-semibold px-8 py-3">
                  Book a Discovery Call
                </Button>
              </Link>
              <Link href="/portfolios/amazon-product-management-automation-platform">
                <Button className="bg-white/10 text-white hover:bg-white/20 border border-white/30 font-semibold px-8 py-3">
                  Explore Case Studies
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="bg-white/10 border-white/20 text-white text-center backdrop-blur"
                >
                  <CardContent className="p-6">
                    <stat.icon className="w-6 h-6 mx-auto mb-3 text-cyan-300" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Integration Playbooks
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Pre-Built Amazon Automation Modules
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mix and match the modules that matter most to your Amazon business or SaaS platform.
                Each block ships with documentation, monitoring, and security guardrails.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {automationModules.map((module) => (
                <Card
                  key={module.title}
                  className="border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <module.icon className="w-12 h-12 text-blue-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-gray-600">{module.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {module.pills.map((pill) => (
                        <span
                          key={pill}
                          className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Why Sellers Choose Ctas
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Built for Compliance, Scale & Speed
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <Card key={item.title} className="border border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <item.icon className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                  Engagement Model
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Proven SP API Delivery Process
                </h2>
                <p className="text-gray-600 mb-6">
                  From securing Amazon approvals to supporting production workloads, our team
                  follows a transparent, sprint-based delivery approach with weekly demos and shared
                  dashboards.
                </p>
                <div className="space-y-4">
                  {process.map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-green-50 text-green-700 font-semibold flex items-center justify-center">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Tech Stack & Tooling</h3>
                <p className="text-white/80 mb-6">
                  We design cloud-native services that respect Amazon&apos;s throttling, encryption,
                  and regional requirements while remaining easy to extend.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech) => (
                    <div key={tech} className="px-3 py-2 bg-white/10 rounded-lg text-sm">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" /> SLA-backed maintenance &
                    monitoring
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" /> Dedicated solution architect & PM
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" /> Knowledge transfer & runbooks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Launch Amazon SP API Automation?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Share your target marketplaces, catalog size, and existing tooling—we&apos;ll return a
              technical plan and timeline within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-blue-700 hover:bg-slate-100 font-semibold px-8 py-3">
                  Request Proposal
                </Button>
              </Link>
              <Link href="/blog">
                <Button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-3">
                  Read Amazon Insights
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AmazonSpApiPage;
