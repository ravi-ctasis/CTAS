"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, BarChart3, Truck, DollarSign, TrendingUp,
  RotateCcw, Users, FileText, CheckCircle, Globe, Star, ArrowRight, Zap, Search, Palette, Code,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "10M+", l: "Loyal Customers" },
  { n: "26", l: "Years of Trust" },
  { n: "4", l: "Countries Active" },
  { n: "30K+", l: "Active Sellers" },
];

const features = [
  {
    icon: FileText,
    title: "Product Catalog Management",
    desc: "Complete product data mapping and catalog synchronization tailored to Fnac's strict category taxonomy and attribute requirements across France, Spain, Portugal and Belgium.",
    points: ["Category-compliant product upload", "EAN-based catalog matching", "Multi-language content support", "Attribute-level optimization", "Image standards compliance"],
  },
  {
    icon: Truck,
    title: "Order & Shipment Automation",
    desc: "Automated order capture from Fnac, routing to your WMS/3PL, and real-time shipment tracking updates back to Fnac's seller portal.",
    points: ["Real-time order synchronization", "Auto-routing to fulfillment", "Carrier tracking integration", "Delivery confirmation sync", "Backorder management"],
  },
  {
    icon: DollarSign,
    title: "Pricing & Offer Management",
    desc: "Dynamic pricing strategies and offer optimization to stay competitive across Fnac's product categories. Price rules with margin protection built in.",
    points: ["Competitor price monitoring", "Rule-based repricing", "Margin floor protection", "Promotional pricing automation", "Offer quality score tracking"],
  },
  {
    icon: RotateCcw,
    title: "Returns & After-Sales Service",
    desc: "Structured returns workflows and after-sales service management integrated with Fnac's return center and aligned to marketplace policies.",
    points: ["Automated return authorization", "Return label generation", "Refund workflow automation", "After-sales service routing", "Customer communication log"],
  },
  {
    icon: Zap,
    title: "Fnac Marketplace API Integration",
    desc: "End-to-end Fnac Marketplace API integration connecting your ERP, WMS, or e-commerce system for real-time, automated data exchange.",
    points: ["REST API configuration", "Webhook event handling", "OAuth authentication", "Rate-limit management", "Error logging & alerting"],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Sales analytics and performance tracking dashboards to make data-driven decisions and optimize your Fnac marketplace strategy.",
    points: ["Revenue & margin dashboards", "SKU-level performance", "Traffic & conversion tracking", "Seller score monitoring", "Growth opportunity insights"],
  },
];

const whySell = [
  { icon: Users, title: "10M+ Loyal Buyers", desc: "Fnac's subscription loyalty program creates a base of high-frequency, high-value shoppers with strong brand affinity." },
  { icon: Globe, title: "4-Country Presence", desc: "One seller account to access France, Spain, Portugal, and Belgium — a combined market of over 150 million consumers." },
  { icon: Star, title: "Premium Brand Positioning", desc: "Fnac attracts quality-conscious buyers, making it ideal for electronics, tech, books, music, and home products." },
  { icon: TrendingUp, title: "Darty Synergy", desc: "Fnac's merger with Darty expanded its appliances and electronics category reach significantly across markets." },
];

const process = [
  { step: "01", title: "Account Setup & Compliance Review", desc: "We register and configure your Fnac seller account, ensuring all tax, legal, and product compliance requirements are met for each country." },
  { step: "02", title: "Catalog Mapping & Data Preparation", desc: "Map your product catalog to Fnac's category structure with proper EANs, attributes, and localized content for all target markets." },
  { step: "03", title: "API Integration & Platform Connection", desc: "Connect your ERP, WMS, or e-commerce platform to Fnac's API for real-time order, stock, and pricing synchronization." },
  { step: "04", title: "Pricing Strategy Configuration", desc: "Set up dynamic repricing rules, promotional schedules, and margin guardrails to win placements competitively on Fnac." },
  { step: "05", title: "Launch & Performance Optimization", desc: "Go live across all Fnac markets, monitor performance dashboards, and continuously optimize for growth in each country." },
];

const integrations = ["Shopify", "WooCommerce", "Magento", "PrestaShop", "SAP", "Mirakl", "Channable", "DataFeedWatch", "ChannelAdvisor", "Iziflux", "Lengow", "Custom ERP"];

export default function FnacClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#7f4000] to-[#c45f00] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fed7aa 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-200 border border-orange-400/30 tracking-widest uppercase">Fnac Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Sell Across <span className="text-orange-300">Fnac</span> Marketplace
                </h1>
                <p className="text-orange-100/70 text-lg mb-8 max-w-xl">France, Spain, Portugal & Belgium's premium marketplace with 10M+ loyal shoppers. We automate your Fnac presence — from catalog to fulfilment.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#7f4000] font-semibold hover:bg-orange-50 transition-colors shadow-lg">
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
                    <div className="text-xs text-orange-200/80">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Fnac */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700">Why Fnac?</span>
              <h2 className="text-3xl font-bold text-slate-900">Why Sell on <span className="text-orange-600">Fnac</span>?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySell.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-orange-700" /></div>
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Complete <span className="text-orange-600">Fnac</span> Integration Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From catalog management to order automation — fully managed Fnac marketplace services for multi-country success.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors"><Icon className="w-6 h-6 text-orange-700" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />{p}</li>))}
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">How We Launch You on <span className="text-orange-600">Fnac</span></h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100">
                  <div className="text-2xl font-bold text-orange-300 w-10 flex-shrink-0">{p.step}</div>
                  <div><h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3><p className="text-sm text-slate-500">{p.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Platform Integrations</h2>
            <p className="text-slate-500 mb-8">We connect Fnac with your existing e-commerce or ERP system seamlessly.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (<span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#7f4000] to-[#f97316] rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Scale on Fnac?</h2>
              <p className="text-orange-100/80 mb-8 max-w-lg mx-auto">Let our Fnac marketplace experts build a custom multi-country integration plan for your business. Free consultation — no obligation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#7f4000] font-semibold hover:bg-orange-50 transition-colors">
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
