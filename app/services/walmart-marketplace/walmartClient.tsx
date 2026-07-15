"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, Truck, DollarSign, TrendingUp,
  RotateCcw, Shield, Users, FileText, CheckCircle, Star, ArrowRight} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "120M+", l: "Monthly Shoppers" },
  { n: "Top 2", l: "US E-commerce Site" },
  { n: "WFS", l: "2-Day Shipping" },
  { n: "30K+", l: "3rd-Party Sellers" },
];

const features = [
  {
    icon: FileText,
    title: "Item Setup & Item Spec Integration",
    desc: "Seamless synchronization of your product catalog using Walmart's latest Item Spec formats. We handle complex variant groups, rich media, and category-specific attributes.",
    points: ["Bulk item setup via API", "Variant group management", "Rich media sync (Images/Video)", "Item Spec v4 compliant"],
  },
  {
    icon: Truck,
    title: "Walmart Fulfillment Services (WFS)",
    desc: "Complete WFS API integration to automate inbound shipment creation, routing, and inventory reconciliation for fast 2-day delivery tags.",
    points: ["Inbound shipment creation", "WFS inventory sync", "Label generation automation", "WFS order routing"],
  },
  {
    icon: DollarSign,
    title: "Pricing & Promotions Strategy",
    desc: "Rule-based repricing algorithms designed to win the Walmart Buy Box. Automated management of strike-through pricing, clearance, and rollback promotions.",
    points: ["Buy Box repricing strategy", "Promotional price sync", "Clearance & Rollback tags", "Competitor monitoring"],
  },
  {
    icon: Package,
    title: "Order & Inventory Management",
    desc: "Real-time order acknowledgement and shipping confirmation. Live inventory feeds strictly prevent overselling and Account Performance defects.",
    points: ["Order acknowledgement automation", "Tracking number sync", "Multi-warehouse inventory", "Safety stock thresholds"],
  },
  {
    icon: RotateCcw,
    title: "Returns & Refund Automation",
    desc: "Integration with Walmart's Seller Center to automate returns authorization, refund issuance, and dispute filing for incorrect returns.",
    points: ["Keep It Rule automation", "Return label tracking", "Refund processing", "Dispute management"],
  },
  {
    icon: TrendingUp,
    title: "Walmart Connect (Ads) APIs",
    desc: "Integration with Walmart Connect to automate and optimize Sponsored Product campaigns, tracking ROAS and keyword performance efficiently.",
    points: ["Sponsored Products creation", "Automated bidding rules", "ROAS tracking dashboards", "Keyword performance sync"],
  },
];

const whySell = [
  { icon: Users, title: "Massive Built-in Audience", desc: "Gain access to over 120 million unique monthly shoppers visiting Walmart.com." },
  { icon: Shield, title: "Lower Competition", desc: "Strict vetting keeps seller competition lower than Amazon, making it easier to gain visibility and win the Buy Box." },
  { icon: TrendingUp, title: "Omnichannel Synergy", desc: "Capitalize on Walmart's vast physical footprint with BOPIS (Buy Online, Pick Up In Store) capabilities." },
  { icon: Star, title: "Walmart Fulfillment (WFS)", desc: "Leverage Walmart's logistics network to offer guaranteed 2-day shipping, boosting conversion rates by up to 50%." },
];

const process = [
  { step: "01", title: "Seller Approval & Onboarding", desc: "We assist with the rigorous Walmart seller application process and initial account configuration." },
  { step: "02", title: "API Integration Matrix", desc: "Connect your ERP, PIM, and WMS to Walmart's Developer Portal for Items, Orders, and Inventory feeds." },
  { step: "03", title: "Catalog Optimization", desc: "Optimize listing titles, descriptions, and backend attributes to align with Walmart's search algorithm (SEO)." },
  { step: "04", title: "Fulfillment Configuration", desc: "Set up WFS or automate your own 3PL/warehouse routing to ensure compliance with Walmart's strict ship SLAs." },
  { step: "05", title: "Launch & Iterate", desc: "Push listings live, initiate Walmart Connect campaigns, and monitor seller scorecard metrics." },
];

const integrations = ["Shopify", "BigCommerce", "Magento", "NetSuite", "ChannelAdvisor", "GeekSeller", "Linnworks", "ShipStation", "SellerActive", "Custom EDI/API"];

export default function WalmartClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0071CE] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #FFC220 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC220]/20 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FFC220]/20 text-[#FFC220] border border-[#FFC220]/30 tracking-widest uppercase">Walmart Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Scale on <span className="text-[#FFC220]">Walmart Marketplace</span>
                </h1>
                <p className="text-blue-100/90 text-lg mb-8 max-w-xl">Harness the power of the US&apos;s fastest-growing retail marketplace. Certified API integration for items, orders, inventory, and WFS fulfillment.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FFC220] text-[#0071CE] font-bold hover:bg-[#e5a810] transition-colors shadow-lg">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services/marketplace" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors">
                    All Marketplace Services
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map((s) => (
                  <div key={s.l} className="bg-[#004C91]/50 backdrop-blur rounded-2xl p-5 text-center border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">{s.n}</div>
                    <div className="text-xs text-blue-200">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Walmart */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0071CE]">Why Walmart?</span>
              <h2 className="text-3xl font-bold text-slate-900">The Walmart <span className="text-[#0071CE]">Advantage</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySell.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#0071CE]" /></div>
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0071CE] border border-blue-200">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Walmart <span className="text-[#FFC220]">Certified Integration</span></h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Robust API integration meeting Walmart&apos;s strict performance standards for latency, reliability, and data accuracy.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl hover:border-[#0071CE]/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#0071CE] transition-colors"><Icon className="w-6 h-6 text-[#0071CE] group-hover:text-white" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-[#FFC220] flex-shrink-0" />{p}</li>))}
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0071CE]">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">Your Path to <span className="text-[#0071CE]">Walmart Success</span></h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100 hover:border-[#FFC220]/50 transition-colors">
                  <div className="text-2xl font-bold text-[#0071CE] w-10 flex-shrink-0">{p.step}</div>
                  <div><h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3><p className="text-sm text-slate-500">{p.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Enterprise Tech Stack Compatibility</h2>
            <p className="text-slate-500 mb-8">We bridge the gap between Walmart&apos;s APIs and your internal systems seamlessly.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (<span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#004C91] to-[#0071CE] rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Start Selling on Walmart Today</h2>
              <p className="text-blue-100/90 mb-8 max-w-lg mx-auto">Avoid compliance errors and integration headaches. Let our certified team construct your Walmart marketplace architecture.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FFC220] text-[#004C91] font-bold hover:bg-[#e5a810] transition-colors">
                  Speak to a Specialist <ArrowRight className="w-4 h-4" />
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
