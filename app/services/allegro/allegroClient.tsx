"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, Truck, Tag,
  RotateCcw, Shield, FileText, CheckCircle, ArrowRight, Star, Users, Zap, Globe
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "22M+", l: "Active Buyers" },
  { n: "No. 1", l: "Marketplace in Poland" },
  { n: "250M+", l: "Annual Orders" },
  { n: "Smart!", l: "Loyalty Program" },
];

const features = [
  {
    icon: Package,
    title: "Allegro Offer Management",
    desc: "Create and manage thousands of Allegro offers using bulk API endpoints. We handle correct parameter mapping, EAN validation, and offer categorization.",
    points: ["Automated offer creation via API", "Offer parameter & attribute mapping", "EAN/GTIN validations", "Multi-variant grouping"],
  },
  {
    icon: Truck,
    title: "Order Flow & Fulfillment Support",
    desc: "Real-time synchronization of Allegro orders to your WMS/ERP. We support integration with InPost (Paczkomaty) and Allegro Smart! delivery methods.",
    points: ["Real-time order extraction", "Allegro Smart! badge compliance", "InPost locker routing integration", "Shipping status & tracking sync"],
  },
  {
    icon: FileText,
    title: "Invoicing & Fiscal Compliance",
    desc: "Automated generation and upload of VAT invoices conforming to Polish tax regulations directly into the Allegro seller dashboard.",
    points: ["Automated invoice creation", "Polish VAT compliance", "Invoice PDF upload via API", "B2B order handling"],
  },
  {
    icon: Zap,
    title: "Real-Time Inventory Sync",
    desc: "Continuous stock reconciliation to prevent overselling on high-velocity items. Sync inventory across Allegro PL, CZ, and SK.",
    points: ["Multi-warehouse inventory aggregation", "Low stock buffer logic", "Out-of-stock offer pausing", "Multi-country sync (PL, CZ, SK)"],
  },
  {
    icon: Tag,
    title: "Allegro Ads & Promotions",
    desc: "Programmatic management of Allegro Ads, sponsored offers, and Coin (Monety) promotions to increase listing visibility.",
    points: ["Sponsored offer management", "Allegro Coins integration", "Promotional price (Sale) sync", "Ads ROAS tracking"],
  },
  {
    icon: RotateCcw,
    title: "Returns & Dispute Resolution",
    desc: "Streamlined handling of the Allegro return process. Sync return statuses and automate refund decisions to maintain a high Seller Quality score.",
    points: ["Return authorization sync", "Dispute (Dyskusje) monitoring", "Automated refund flagging", "Seller Quality Score protection"],
  },
];

const whySell = [
  { icon: Shield, title: "Unrivaled Dominance", desc: "Allegro is the undisputed e-commerce leader in Poland, capturing more market share than Amazon and AliExpress combined." },
  { icon: Star, title: "Allegro Smart!", desc: "The highly successful 'Smart!' free-shipping program drives massive loyalty and incredible purchase frequency." },
  { icon: Globe, title: "CEE Expansion", desc: "With recent acquisitions (MALL Group) and new domains (.cz, .sk), Allegro is your gateway to Central and Eastern Europe." },
  { icon: Users, title: "High Trust Factor", desc: "Polish consumers trust Allegro implicitly. A strong seller rating here guarantees high conversion rates." },
];

const process = [
  { step: "01", title: "Account & Smart! Setup", desc: "We guide you through the business verification process and help you meet the criteria for the Allegro Smart! program." },
  { step: "02", title: "API Integration Planning", desc: "Map out the data flow between your ERP/WMS and Allegro's REST API for offers, orders, and billing." },
  { step: "03", title: "Detailed Catalog Mapping", desc: "Thoroughly map your product data to Allegro's required parameter categories to ensure high listing quality scores." },
  { step: "04", title: "Testing & Validation", desc: "Use the Allegro Sandbox environment to rigorously test order extraction, stock deductions, and invoice uploads." },
  { step: "05", title: "Launch & Optimize", desc: "Deploy to production, activate Allegro Ads, and closely monitor your Seller Quality metrics for continuous growth." },
];

const integrations = ["Shopify", "Magento", "PrestaShop", "Baselinker", "IdoSell", "SAP", "Comarch", "Subiekt GT", "Custom API"];

export default function AllegroClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#FF5A00] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white tracking-widest uppercase">Allegro Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Dominate E-commerce in <br/> <span className="text-black">Central Europe</span>
                </h1>
                <p className="text-white/90 text-lg mb-8 max-w-xl">Comprehensive API integration for Allegro PL, CZ, and SK. Automate offers, orders, InPost logistics, and Polish VAT invoicing seamlessly.</p>
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
                  <div key={s.l} className="bg-black/10 backdrop-blur rounded-2xl p-5 text-center border border-white/20">
                    <div className="text-3xl font-bold text-white mb-1">{s.n}</div>
                    <div className="text-xs text-white/90">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Allegro */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF5A00]">Why Allegro?</span>
              <h2 className="text-3xl font-bold text-slate-900">The Undisputed King of <span className="text-[#FF5A00]">Poland</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySell.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#FF5A00]" /></div>
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF5A00] border border-orange-200">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Enterprise <span className="text-[#FF5A00]">Allegro API</span> Integration</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">From strict parameter mapping to automated Polish invoicing, we handle the complex technical requirements of Allegro.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl hover:border-[#FF5A00]/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-[#FF5A00] transition-colors"><Icon className="w-6 h-6 text-[#FF5A00] group-hover:text-white" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-[#FF5A00] flex-shrink-0" />{p}</li>))}
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF5A00]">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">How We Launch You on <span className="text-[#FF5A00]">Allegro</span></h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100 hover:border-[#FF5A00]/50 transition-colors">
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
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Compatible Tech Stacks</h2>
            <p className="text-slate-500 mb-8">We integrate Allegro with global systems and popular local Polish e-commerce platforms.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (<span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#FF5A00] to-[#ff7b33] rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Expand to Central Europe?</h2>
              <p className="text-white/90 mb-8 max-w-lg mx-auto relative z-10">Don&apos;t let complex parameters and local integrations slow you down. Let our Allegro API experts build your robust bridge to Poland.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/contact-us" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white font-bold hover:bg-gray-900 transition-colors shadow-lg">
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
