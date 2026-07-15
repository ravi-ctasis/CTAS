"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, BarChart3, DollarSign, TrendingUp,
  RotateCcw, Users, FileText, CheckCircle, Globe, Star, ArrowRight, Zap,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "32M+", l: "Monthly Visitors" },
  { n: "3rd", l: "Largest EU Market" },
  { n: "8M+", l: "Active Customers" },
  { n: "GR", l: "Fastest Growing" },
];

const features = [
  {
    icon: FileText,
    title: "Product Feed & Catalog Management",
    desc: "Structured product data mapping and bulk feed generation that meets Kaufland's strict category and data requirements. Supports all major product types.",
    points: ["Category-compliant data mapping", "Bulk product feed generation", "EAN/GTIN-based catalog matching", "Multi-warehouse stock sync", "Attribute-level optimization"],
  },
  {
    icon: Package,
    title: "Order Processing & Fulfilment",
    desc: "Automated order routing from Kaufland directly to your WMS, ERP, or 3PL with full status lifecycle tracking back to the marketplace.",
    points: ["Real-time order capture", "Auto-routing to fulfilment center", "Shipment label automation", "Order status sync to Kaufland", "Multi-location warehouse support"],
  },
  {
    icon: RotateCcw,
    title: "Returns Management",
    desc: "End-to-end returns automation including label generation, return status tracking, and refund processing aligned with Kaufland's returns policy.",
    points: ["Automated return authorization", "RMA & return label generation", "Return status tracking", "Refund trigger automation", "Returns performance reporting"],
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing & Inventory Sync",
    desc: "Rule-based repricing engine to maintain competitiveness on Kaufland while protecting profit margins. Real-time inventory sync to prevent stockouts.",
    points: ["Competitor price monitoring", "Rule-based repricing", "Min/max margin guardrails", "Multi-channel inventory sync", "Low-stock alert system"],
  },
  {
    icon: Zap,
    title: "Kaufland API Integration",
    desc: "Full Kaufland Marketplace API setup connecting your existing tech stack for seamless, real-time data exchange across all product categories.",
    points: ["REST API integration", "Webhook event handling", "Token-based auth management", "Error handling & retry logic", "Custom middleware development"],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics & Reporting",
    desc: "Comprehensive dashboards with sales insights, revenue tracking, conversion analytics, and competitive benchmarking specifically for Kaufland marketplace.",
    points: ["SKU-level sales breakdown", "Revenue & margin tracking", "Conversion rate analysis", "Traffic & visibility metrics", "Competitor benchmarking"],
  },
];

const whySell = [
  { icon: Globe, title: "Pan-European Reach", desc: "Active marketplace in Germany, Czech Republic, and Slovakia with plans to expand to more EU countries." },
  { icon: Users, title: "32M Monthly Visitors", desc: "Massive built-in audience with high purchase intent across electronics, home goods, fashion and more." },
  { icon: TrendingUp, title: "Lower Competition", desc: "Compared to Amazon, Kaufland has fewer sellers per category, offering a significant opportunity to win top placements." },
  { icon: Star, title: "Trusted German Brand", desc: "Kaufland's brick-and-mortar retail brand trust translates into high online credibility for marketplace sellers." },
];

const process = [
  { step: "01", title: "Seller Account Setup & Verification", desc: "We help to register, verify, and configure your Kaufland seller account with all required business and tax details." },
  { step: "02", title: "API Integration & Data Mapping", desc: "Connect your ERP, WMS or e-commerce platform to Kaufland's API with proper attribute and category mapping." },
  { step: "03", title: "Product Catalog Upload & Optimization", desc: "Bulk upload your catalog with SEO-optimized titles, descriptions, and compliant attributes for each category." },
  { step: "04", title: "Pricing & Stock Automation Setup", desc: "Configure dynamic repricing rules and live inventory synchronization to prevent stockouts and maintain competitiveness." },
  { step: "05", title: "Launch, Monitor & Scale", desc: "Go live, monitor performance with detailed dashboards, and continuously optimize listings and pricing for growth." },
];

const integrations = ["Shopify", "WooCommerce", "Magento", "SAP", "ChannelAdvisor", "Channable", "Plentymarkets", "JTL-Wawi", "Afterbuy", "Billbee", "Custom ERP", "DataFeedWatch"];

export default function KauflandClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#1a0000] via-[#7f0000] to-[#b30000] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fca5a5 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-500/20 text-red-200 border border-red-400/30 tracking-widest uppercase">Kaufland Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Grow Fast on <span className="text-red-300">Kaufland</span> Marketplace
                </h1>
                <p className="text-red-100/70 text-lg mb-8 max-w-xl">Germany&apos;s fastest-growing marketplace with 32M+ monthly visitors. Full automation from product feed to order fulfilment — built for ambitious sellers.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#7f0000] font-semibold hover:bg-red-50 transition-colors shadow-lg">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services/marketplace" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                    All Marketplace Services
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map((s) => (
                  <div key={s.l} className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">{s.n}</div>
                    <div className="text-xs text-red-200/80">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Kaufland */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700">Why Kaufland?</span>
              <h2 className="text-3xl font-bold text-slate-900">The Case for Selling on <span className="text-red-700">Kaufland</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySell.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-red-700" /></div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Full-Stack <span className="text-red-700">Kaufland</span> Integration</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From product catalog to order fulfilment, we cover every touchpoint of your Kaufland marketplace operation.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors"><Icon className="w-6 h-6 text-red-700" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />{p}</li>))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">Go Live on <span className="text-red-700">Kaufland</span> in 5 Steps</h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100">
                  <div className="text-2xl font-bold text-red-300 w-10 flex-shrink-0">{p.step}</div>
                  <div><h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3><p className="text-sm text-slate-500">{p.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Works With Your Existing Systems</h2>
            <p className="text-slate-500 mb-8">We connect Kaufland with your ERP, WMS, or e-commerce platform — no platform is too custom.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (<span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#7f0000] to-[#e53e3e] rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Launch on Kaufland?</h2>
              <p className="text-red-100/80 mb-8 max-w-lg mx-auto">Get a custom Kaufland integration plan from our marketplace experts. Free consultation — no commitment required.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#7f0000] font-semibold hover:bg-red-50 transition-colors">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/marketplace" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                  All Marketplace Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
