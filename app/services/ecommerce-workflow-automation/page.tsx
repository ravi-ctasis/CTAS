
;
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Workflow,
  ShoppingBag,
  Package,
  Bot,
  BarChart3,
  Headphones,
  Shield,
  Gauge,
  CheckCircle2,
  Cable,
  Sparkles,
} from "lucide-react";

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

const capabilityStacks = [
  {
    title: "Catalog & Merchandising",
    description:
      "Automate product onboarding, enrichment, pricing, and channel syndication with validation workflows and AI-powered recommendations.",
    icon: ShoppingBag,
    bullets: ["PIM integrations", "Dynamic pricing", "Channel-ready feeds"],
  },
  {
    title: "Order & Fulfillment Ops",
    description:
      "Connect storefronts, OMS, WMS, and 3PL partners to synchronize orders, inventory, picking, packing, and carrier labels in real time.",
    icon: Package,
    bullets: ["Multi-warehouse routing", "FBA/FBM sync", "Exception handling"],
  },
  {
    title: "Customer Service Automation",
    description:
      "Deploy AI co-pilots, macros, and workflow bots that resolve status requests, returns, warranties, and escalations across channels.",
    icon: Headphones,
    bullets: ["LLM chatbots", "Ticket triage", "RMA workflows"],
  },
  {
    title: "Finance & Analytics",
    description:
      "Close the loop with automated reconciliation, payout reporting, revenue recognition, and executive dashboards for every brand cohort.",
    icon: BarChart3,
    bullets: ["Settlement sync", "Margin intelligence", "C-level dashboards"],
  },
];

const differentiators = [
  {
    icon: Workflow,
    title: "Process-first Workshops",
    text: "Value stream mapping sessions surface blockers, manual steps, and compliance requirements before automation begins.",
  },
  {
    icon: Shield,
    title: "Secure Integrations",
    text: "SOC2-ready patterns, role-based access, and end-to-end encryption protect customer, payment, and logistics data.",
  },
  {
    icon: Gauge,
    title: "Real-Time Observability",
    text: "Command centers with KPIs, SLA alerts, and root-cause diagnostics keep operations transparent for merch, ops, and finance teams.",
  },
  {
    icon: Sparkles,
    title: "AI + RPA Blend",
    text: "Combine deterministic RPA, event-driven microservices, and GenAI copilots for faster time-to-value.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & KPI Definition",
    copy: "Measure manual touchpoints, error rates, and processing times to define success criteria and roadmap priorities.",
  },
  {
    step: "02",
    title: "Solution Blueprint",
    copy: "Design target-state architecture, integration maps, data contracts, and governance workflows.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    copy: "Configure automation platforms, develop custom services, and wire up APIs, webhooks, and event streams.",
  },
  {
    step: "04",
    title: "Hypercare & Optimization",
    copy: "Enable continuous improvement with telemetry dashboards, A/B testing, and playbooks for new market launches.",
  },
];

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

const EcommerceAutomationPage = () => {
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
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-tr from-slate-900 via-violet-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent)]" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              e-Commerce Automation Studio
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
              e-Commerce Workflow Automation Services
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Harmonize storefront, marketplace, OMS, WMS, CX, and finance workflows with
              automation accelerators purpose-built for modern retail brands and marketplaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold px-8 py-3">
                  Request Automation Audit
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button className="bg-white/10 text-white border border-white/30 hover:bg-white/20 font-semibold px-8 py-3">
                  View Case Studies
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: "Operational Hours Saved / Month", value: "420+", icon: Gauge },
                { label: "Workflows Automated", value: "65+", icon: Workflow },
                { label: "Channels Supported", value: "25+", icon: Cable },
                { label: "Automation Experts", value: "15", icon: Bot },
              ].map((stat) => (
                <Card key={stat.label} className="bg-white/10 border-white/20 backdrop-blur text-white text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-6 h-6 mx-auto mb-3 text-pink-200" />
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
              <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
                Core Capability Stacks
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Automate the Journeys That Move Revenue
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each capability stack combines APIs, workflow engines, and AI building blocks to
                eliminate repetitive work, reduce errors, and surface insight for your operations team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilityStacks.map((capability) => (
                <Card key={capability.title} className="border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <capability.icon className="w-12 h-12 text-pink-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {capability.bullets.map((bullet) => (
                        <span key={bullet} className="px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-sm">
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Differentiators
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Not Another Generic Automation Shop</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <Card key={item.title} className="border border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <item.icon className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Delivery Approach
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Playbook for Sustainable Automation</h2>
              <p className="text-gray-600 mb-6">
                We move from discovery to production in 4-6 week sprints, layering automation where it creates measurable impact while keeping humans in control of exceptions.
              </p>
              <div className="space-y-4">
                {process.map((stage) => (
                  <div key={stage.step} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-700 font-semibold flex items-center justify-center">
                      {stage.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{stage.title}</h3>
                      <p className="text-gray-600">{stage.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Platforms & Toolchain</h3>
              <p className="text-white/80 mb-6">
                We combine enterprise-grade SaaS connectors with custom code where needed, ensuring you retain ownership of data and IP.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {automationStack.map((tool) => (
                  <div key={tool} className="px-3 py-2 bg-white/10 rounded-lg text-sm">
                    {tool}
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" /> KPI dashboards & executive scorecards
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" /> Playbooks for CX, operations, and finance teams
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" /> 24/7 monitoring with runbooks
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Turn Manual E-commerce Tasks into Automated Revenue Engines
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Share your current tech stack, bottlenecks, and KPIs—we&apos;ll respond with an automation roadmap and timeline within two business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-violet-700 hover:bg-slate-100 font-semibold px-8 py-3">
                  Schedule Strategy Call
                </Button>
              </Link>
              <Link href="/blog">
                <Button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-3">
                  Browse Automation Guides
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

export default EcommerceAutomationPage;

