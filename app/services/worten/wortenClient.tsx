"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, BarChart3, Truck, DollarSign,
  RotateCcw, Shield, FileText, CheckCircle, Smartphone, ArrowRight,
  Monitor, Activity
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "No. 1", l: "Tech Marketplace PT/ES" },
  { n: "5M+", l: "Monthly Visits" },
  { n: "3M+", l: "Products" },
  { n: "Omni", l: "Channel Retailer" },
];

const features = [
  {
    icon: FileText,
    title: "Catalog Synchronization",
    desc: "Automated product catalog synchronization covering consumer electronics, appliances, and IT. Ensures strict compliance with Worten's EAN constraints and categorization.",
    points: ["EAN-based product matching", "Multi-language (PT/ES) support", "Technical attributes mapping", "Variants & bundles sync"],
  },
  {
    icon: DollarSign,
    title: "Pricing & Margin Guardrails",
    desc: "Dynamic repricing engine to remain competitive on Worten while applying safety rules to never drop below your specified minimum margin.",
    points: ["Automated buy-box tracking", "Cost-plus repricing strategies", "Margin floor protection rules", "Promotional campaigns sync"],
  },
  {
    icon: Truck,
    title: "Order Flow Automation",
    desc: "Instantaneous order intake from Worten's marketplace, smart routing to fulfillment locations, and tracking injection back to the buyer.",
    points: ["Real-time order API sync", "Multi-carrier tracking support", "Split fulfillment logic", "Invoice generation & upload"],
  },
  {
    icon: Package,
    title: "Live Inventory Management",
    desc: "Continuous stock synchronization bridging your ERP/WMS with Worten to eliminate overselling and protect your seller rating.",
    points: ["Bi-directional stock updates", "Buffer/safety stock rules", "Pre-order management", "Multi-warehouse aggregation"],
  },
  {
    icon: RotateCcw,
    title: "Returns & RMA Automation",
    desc: "Integrated after-sales service and returns management aligned directly with Worten's consumer protection policies and SLAs.",
    points: ["Return authorization flow", "RMA tracking status sync", "Automated refund triggers", "Message & dispute handling"],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Consolidated performance dashboards tracking your revenue, top-selling SKUs, and critical seller metrics across Portugal and Spain.",
    points: ["Seller quality score monitoring", "Cross-border sales breakdown", "Margin & ROI analytics", "Inventory velocity tracking"],
  },
];

const whySell = [
  { icon: Monitor, title: "Iberian Tech Leader", desc: "Worten is the undisputed leader for tech, consumer electronics, and appliances in the Iberian peninsula." },
  { icon: Shield, title: "Brand Trust", desc: "Benefit from Worten's massive brand recognition and trust built over decades of physical retail presence." },
  { icon: Activity, title: "High Conversion", desc: "Targeted traffic looking specifically for electronics leads to significantly higher conversion rates than generalist marketplaces." },
  { icon: Smartphone, title: "Expanding Categories", desc: "While known for tech, Worten is rapidly expanding into home, garden, beauty, and toys." },
];

const process = [
  { step: "01", title: "Seller Application Guidance", desc: "We assist with the Mirakl-based onboarding process to get your Worten seller account approved quickly." },
  { step: "02", title: "API & Mirakl Integration", desc: "Connect your systems to Worten's Mirakl platform for automated data exchange (Offers, Orders, Messages)." },
  { step: "03", title: "Data Enrichment", desc: "Ensure your product titles, descriptions, and technical specs meet Worten's high-quality catalog standards." },
  { step: "04", title: "Testing & Validation", desc: "Rigorous testing of order flows, stock deductions, and tracking updates in Worten's sandbox environment." },
  { step: "05", title: "Go-Live & Support", desc: "Push offers live, monitor initial order syncs, and continuously optimize pricing for maximum visibility." },
];

const integrations = ["Mirakl", "Shopify", "Magento", "PrestaShop", "SAP", "Odoo", "Channable", "Lengow", "ChannelAdvisor", "Custom API"];

export default function WortenClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#E30613] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white tracking-widest uppercase">Worten Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Conquer the Iberian <br/><span className="text-black">Electronics Market</span>
                </h1>
                <p className="text-white/90 text-lg mb-8 max-w-xl">Fully automated integration with Worten (Portugal & Spain). Powered by Mirakl, managed by experts. Sync orders, stock, and pricing effortlessly.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white font-bold hover:bg-gray-900 transition-colors shadow-lg">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services/marketplace" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors">
                    All Marketplace Services
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {stats.map((s) => (
                  <div key={s.l} className="bg-black/20 backdrop-blur rounded-2xl p-5 text-center border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">{s.n}</div>
                    <div className="text-xs text-white/80">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Worten */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#E30613]">Why Worten?</span>
              <h2 className="text-3xl font-bold text-slate-900">The Power of <span className="text-[#E30613]">Worten</span> Marketplace</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySell.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#E30613]" /></div>
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#E30613] border border-red-200">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Complete <span className="text-[#E30613]">Mirakl-Based</span> Integration</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">We navigate the complexities of Worten&apos;s Mirakl architecture to provide you with seamless, hands-free automation.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl hover:border-[#E30613]/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#E30613] transition-colors"><Icon className="w-6 h-6 text-gray-700 group-hover:text-white" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-[#E30613] flex-shrink-0" />{p}</li>))}
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#E30613]">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">How We Integrate with <span className="text-[#E30613]">Worten</span></h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100 hover:border-[#E30613]/50 transition-colors">
                  <div className="text-2xl font-bold text-gray-300 w-10 flex-shrink-0">{p.step}</div>
                  <div><h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3><p className="text-sm text-slate-500">{p.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Mirakl Ecosystem Compatibility</h2>
            <p className="text-slate-500 mb-8">We integrate Worten through direct Mirakl APIs or standard middleware.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (<span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#E30613] to-[#ff4d4d] rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Start Your Worten Integration</h2>
              <p className="text-white/90 mb-8 max-w-lg mx-auto">Don&apos;t miss out on the Iberian peninsula&apos;s most lucrative tech marketplace. Let&apos;s build your integration today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white font-bold hover:bg-gray-900 transition-colors">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/marketplace" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors">
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
