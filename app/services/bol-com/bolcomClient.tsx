"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, BarChart3, Truck, DollarSign, Search, TrendingUp,
  RotateCcw, Users, CheckCircle,
  Globe, Star, ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "15M+", l: "Active Buyers" },
  { n: "40M+", l: "Product Listings" },
  { n: "#1", l: "Benelux Marketplace" },
  { n: "24/7", l: "API Sync" },
];

const features = [
  {
    icon: Package,
    title: "Retailer API & Offer Management",
    desc: "Full Bol.com Retailer API integration for creating, updating, and managing offers at scale. Supports bulk listing, EAN-based catalog matching, and multi-SKU management.",
    points: ["Offer creation & bulk upload", "EAN / GTIN catalog matching", "Multi-variant product support", "Stock & price automation"],
  },
  {
    icon: Truck,
    title: "Order Processing & Fulfilment",
    desc: "Automated end-to-end order routing from Bol.com to your WMS, ERP, or 3PL — with real-time status updates back to the marketplace.",
    points: ["Auto order capture & routing", "LVB (Logistiek via Bol) support", "FBR (Fulfilled by Retailer) automation", "Shipment confirmation & tracking"],
  },
  {
    icon: RotateCcw,
    title: "Returns & Refund Automation",
    desc: "Streamlined returns management aligned with Bol.com policy — automated return label generation, processing, and refund triggers.",
    points: ["Auto return request handling", "Return label generation", "Refund trigger automation", "Returns analytics dashboard"],
  },
  {
    icon: DollarSign,
    title: "Dynamic Pricing & Repricing",
    desc: "Intelligent repricing engine that monitors competitor prices and adjusts your offers automatically to win the Buy Box while protecting margins.",
    points: ["Rule-based pricing strategies", "Competitor price monitoring", "Min/max margin protection", "Buy Box win-rate tracking"],
  },
  {
    icon: Search,
    title: "Product Content Optimization",
    desc: "SEO-optimized product titles, descriptions, and structured data mapped to Bol.com's category taxonomy for maximum discoverability.",
    points: ["Keyword-rich title templates", "Category-specific attributes", "A+ content equivalent creation", "Image optimization guidelines"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Sales Reporting",
    desc: "Comprehensive dashboards covering sales performance, conversion rates, traffic insights, and profitability analytics for Bol.com.",
    points: ["ASIN/EAN-level sales tracking", "Conversion & traffic data", "Revenue & profit dashboards", "Competitor benchmarking"],
  },
];

const whyBol = [
  { icon: Users, title: "15M+ Active Shoppers", desc: "Bol.com is visited by over 15 million unique buyers monthly across Netherlands and Belgium." },
  { icon: Globe, title: "Benelux Market Leader", desc: "With 70%+ market share in the Netherlands, Bol.com is the #1 marketplace in the Benelux region." },
  { icon: Star, title: "High Trust & Brand Loyalty", desc: "Bol.com's loyalty program and strong brand trust drives repeat purchases and higher conversion rates." },
  { icon: TrendingUp, title: "Growing Cross-Border Sales", desc: "Bol.com is expanding internationally, providing sellers access to new European buyer segments." },
];

const process = [
  { step: "01", title: "Discovery & Account Audit", desc: "We analyze your current Bol.com presence, product catalog, and identify key growth opportunities." },
  { step: "02", title: "API Integration Setup", desc: "Connect your ERP, WMS, or e-commerce platform with Bol.com's Retailer API for live data sync." },
  { step: "03", title: "Catalog & Listing Optimization", desc: "Optimize all product listings with SEO content, correct categories, and high-quality images." },
  { step: "04", title: "Automation Configuration", desc: "Set up pricing rules, inventory thresholds, order routing, and returns automation workflows." },
  { step: "05", title: "Go Live & Scale", desc: "Launch, monitor performance, and continuously optimize to grow your Bol.com revenue." },
];

const integrations = [
  "Shopify", "WooCommerce", "Magento", "SAP", "Microsoft Dynamics", "Exact Online",
  "ChannelAdvisor", "Channable", "DataFeedWatch", "CCV Shop", "Lightspeed", "Custom ERP",
];

export default function BolComClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0d1f3c] via-[#13345A] to-[#1e4d80] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30 tracking-widest uppercase">Bol.com Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Dominate the <span className="text-blue-300">Bol.com</span> Marketplace
                </h1>
                <p className="text-blue-100/70 text-lg mb-8 max-w-xl">Netherlands & Belgium&apos;s #1 marketplace with 15M+ active buyers. We handle full automation — from catalog to fulfilment — so you can focus on growth.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#249BCA] text-white font-semibold hover:bg-[#1a85b0] transition-colors shadow-lg">
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
                    <div className="text-xs text-blue-200/80">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why sell on Bol.com */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Why Bol.com?</span>
              <h2 className="text-3xl font-bold text-slate-900">Why Sell on <span className="text-[#249BCA]">Bol.com</span>?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyBol.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#13345A]" /></div>
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Complete <span className="text-[#249BCA]">Bol.com</span> Integration Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">End-to-end solutions covering every aspect of your Bol.com business — from listing to fulfilment and analytics.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors"><Icon className="w-6 h-6 text-[#13345A]" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-[#249BCA] flex-shrink-0" />{p}</li>
                      ))}
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">How We Get You <span className="text-[#249BCA]">Live on Bol.com</span></h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100">
                  <div className="text-2xl font-bold text-[#249BCA]/40 w-10 flex-shrink-0">{p.step}</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-slate-500">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Integrates With Your Existing Systems</h2>
            <p className="text-slate-500 mb-8">We connect Bol.com with your current tech stack — no matter what platform you use.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (
                <span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#13345A] to-[#249BCA] rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Scale on Bol.com?</h2>
              <p className="text-blue-100/80 mb-8 max-w-lg mx-auto">Let our Bol.com experts build a custom integration and growth strategy for your business. Free consultation — no obligation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#13345A] font-semibold hover:bg-blue-50 transition-colors">
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
