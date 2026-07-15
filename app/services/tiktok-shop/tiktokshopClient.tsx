"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, BarChart3, Truck, Zap, Users, Smartphone, CheckCircle, Video, ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "1B+", l: "Monthly Active Users" },
  { n: "150M+", l: "US Users" },
  { n: "55%", l: "Buy from Creators" },
  { n: "Social", l: "Commerce Leader" },
];

const features = [
  {
    icon: Package,
    title: "Product Listings & Catalog Management",
    desc: "Fast, compliant product listing creation optimized specifically for TikTok's visual format and discovery algorithms. Includes bulk uploads and variant handling.",
    points: ["TikTok-compliant product mapping", "Bulk catalog upload", "Variant & multi-SKU management", "Image & video asset synchronization"],
  },
  {
    icon: Video,
    title: "Live Commerce Sync",
    desc: "Seamless integration to support TikTok LIVE shopping events. Instantly sync real-time inventory, temporary flash sales, and live offer changes.",
    points: ["Real-time stock reservation", "Flash sale pricing automation", "Live event performance tracking", "Instant order capture"],
  },
  {
    icon: Truck,
    title: "Order Automation & Fulfilment",
    desc: "Automated order capturing, routing to your fulfillment network (WMS, 3PL, or FBA), and timely status updates sent back to TikTok Shop.",
    points: ["Automated order extraction", "Fulfillment routing logic", "Shipping label generation tracking", "Delivery status sync"],
  },
  {
    icon: Zap,
    title: "Inventory Synchronization",
    desc: "Lightning-fast, bi-directional inventory sync across TikTok Shop and your other sales channels to strictly prevent overselling and account penalties.",
    points: ["Low stock threshold alerts", "Multi-channel stock deduction", "Safety stock reserves", "Warehouse location mapping"],
  },
  {
    icon: Users,
    title: "Affiliate & Creator Program Management",
    desc: "Technical setup and management of TikTok affiliate programs to integrate creator orders, track commission structures, and boost viral discoverability.",
    points: ["Affiliate commission tracking", "Sample request order routing", "Creator performance analytics", "Targeted affiliate campaigns"],
  },
  {
    icon: BarChart3,
    title: "Revenue & Campaign Analytics",
    desc: "Comprehensive TikTok Shop analytics covering Gross Merchandise Value (GMV), live stream conversion rates, video ROI, and audience demographics.",
    points: ["GMV & revenue tracking", "Live stream ROI analysis", "Product-level conversion rates", "Return rate monitoring"],
  },
];

const whySell = [
  { icon: Smartphone, title: "Unmatched Virality", desc: "TikTok's algorithm allows products to go viral instantly, reaching millions of potential buyers organically without heavy ad spend." },
  { icon: Zap, title: "Frictionless Checkout", desc: "Native in-app checkout means users can discover, review, and purchase products without ever leaving the TikTok application." },
  { icon: Users, title: "Gen Z & Millennial Audience", desc: "Direct access to the highest-converting demographic for beauty, fashion, lifestyle, and tech accessories." },
  { icon: Video, title: "Content-Driven Sales", desc: "Leverage User Generated Content (UGC) and creator networks to build authentic social proof that drives massive sales volumes." },
];

const process = [
  { step: "01", title: "Shop Setup & Approval", desc: "We guide you through the strict TikTok Shop onboarding process, ensuring all legal, tax, and brand verifications pass quickly." },
  { step: "02", title: "System Integration", desc: "Connect your existing e-commerce stack (Shopify, ERP, WMS) to TikTok's API for automated catalog and order flow." },
  { step: "03", title: "Visual Optimization", desc: "Optimize product imagery and descriptions to fit TikTok's unique visual-first, mobile-native format." },
  { step: "04", title: "Creator Affiliate Setup", desc: "Configure your affiliate center, define commission structures, and launch campaigns to attract top TikTok creators." },
  { step: "05", title: "Launch & Scale", desc: "Go live, support your first LIVE events with real-time inventory management, and scale your operations." },
];

const integrations = ["Shopify", "WooCommerce", "BigCommerce", "ShipStation", "Linnworks", "ChannelAdvisor", "NetSuite", "Custom API", "3PL Providers"];

export default function TikTokShopClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#000000] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#25F4EE 1px, transparent 1px), linear-gradient(90deg, #FE2C55 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE2C55]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25F4EE]/20 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#25F4EE]/20 text-[#25F4EE] border border-[#25F4EE]/30 tracking-widest uppercase">TikTok Shop Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Master the Future of <span className="text-[#FE2C55]">Social Commerce</span>
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-xl">Automate your TikTok Shop presence. From viral live-stream inventory sync to hands-free order fulfillment, we power the fastest growing sales channel on earth.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FE2C55] text-white font-semibold hover:bg-[#e02047] transition-colors shadow-lg shadow-[#FE2C55]/30">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services/marketplace" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25F4EE]/10 text-white font-semibold border border-[#25F4EE]/30 hover:bg-[#25F4EE]/20 transition-colors">
                    All Marketplace Services
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map((s) => (
                  <div key={s.l} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10 hover:border-[#25F4EE]/50 transition-colors">
                    <div className="text-3xl font-bold text-white mb-1">{s.n}</div>
                    <div className="text-xs text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why TikTok Shop */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">Why TikTok Shop?</span>
              <h2 className="text-3xl font-bold text-slate-900">The Power of <span className="text-[#FE2C55]">Shoppertainment</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySell.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100 hover:border-[#25F4EE]/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#25F4EE]" /></div>
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#FE2C55]/10 text-[#FE2C55] border border-[#FE2C55]/20">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Enterprise <span className="text-[#FE2C55]">TikTok Shop</span> Integration</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">We handle the complex backend automation so you can focus on creating content and driving sales.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl hover:border-[#25F4EE]/50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-black transition-colors"><Icon className="w-6 h-6 text-gray-700 group-hover:text-[#25F4EE]" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-[#FE2C55] flex-shrink-0" />{p}</li>))}
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">Go Viral and <span className="text-[#25F4EE]">Scale Instantly</span></h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100">
                  <div className="text-2xl font-bold text-[#FE2C55]/40 w-10 flex-shrink-0">{p.step}</div>
                  <div><h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3><p className="text-sm text-slate-500">{p.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Syncs With Your Back-Office</h2>
            <p className="text-slate-500 mb-8">We connect TikTok Shop with your existing infrastructure to prevent operational bottlenecks.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (<span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#000000] to-[#333333] rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FE2C55]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25F4EE]/20 rounded-full blur-3xl" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Conquer TikTok Shop?</h2>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto relative z-10">Don&apos;t let backend operations hold back your sales potential. Let our experts build a robust, scalable TikTok integration for your brand.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FE2C55] text-white font-semibold hover:bg-[#e02047] transition-colors">
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
