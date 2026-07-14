"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package, BarChart3, Truck, DollarSign, Search, TrendingUp,
  RotateCcw, Shield, CheckCircle, Globe, Star, ArrowRight,
  Gift, Users, Server, Globe2
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const stats = [
  { n: "1.6B+", l: "Loyalty Members" },
  { n: "30+", l: "Countries Present" },
  { n: "No. 1", l: "Internet Bank in Japan" },
  { n: "Ecosystem", l: "Driven Commerce" },
];

const features = [
  {
    icon: Server,
    title: "Global Catalog Management",
    desc: "Automated translation and synchronization of product catalogs across Rakuten's regional marketplaces (Japan, France/Priceminister, Taiwan, etc.).",
    points: ["Automated attribute mapping", "Multi-language catalog sync", "Variant and parent-child linking", "Image compliance checks"],
  },
  {
    icon: Truck,
    title: "Order Flow Integration",
    desc: "Seamless extraction of Rakuten orders into your central ERP, WMS, or 3PL system, combined with automated shipping confirmation uploads.",
    points: ["Real-time order API sync", "Cross-border logistics support", "Tracking and courier sync", "Rakuten Super Logistics integration"],
  },
  {
    icon: Gift,
    title: "Rakuten Points Strategy",
    desc: "Integration and automation of campaigns leveraging Rakuten Super Points — the key driver of conversion and customer loyalty within the Rakuten ecosystem.",
    points: ["Point multiplier campaign setup", "Loyalty program integration", "Promotional calendar sync", "Margin impact tracking"],
  },
  {
    icon: Package,
    title: "Live Inventory & Stock Sync",
    desc: "Ensure inventory is updated in near real-time across all global Rakuten instances to prevent out-of-stock errors and maintain seller performance metrics.",
    points: ["Global inventory aggregation", "Low stock buffer rules", "Split warehouse deductions", "Real-time API updates"],
  },
  {
    icon: DollarSign,
    title: "International Repricing",
    desc: "Rule-based pricing engines taking into account local currency fluctuations, competitor pricing, and Rakuten-specific fees.",
    points: ["Currency conversion automation", "Duty/Tax inclusive pricing", "Competitor tracking (Ichiba)", "Dynamic margin protection"],
  },
  {
    icon: Search,
    title: "Rakuten RMS Optimization",
    desc: "Expert technical setup and optimization of your storefront within the Rakuten Merchant Server (RMS) to maximize search visibility and UX.",
    points: ["RMS storefront architecture", "SEO optimized listing structures", "Custom category layouts", "Mobile-optimized design deployment"],
  },
];

const whySell = [
  { icon: Gift, title: "The Power of Points", desc: "Rakuten's Super Points system is legendary. Members use points across banking, travel, and mobile, driving immense loyalty to marketplace sellers." },
  { icon: Globe2, title: "Gateway to Japan", desc: "Rakuten Ichiba is a dominate force in Japan, providing international sellers with direct access to a highly lucrative consumer market." },
  { icon: Users, title: "Merchant Empowerment", desc: "Unlike Amazon, Rakuten's model empowers sellers to build their own brand identity and cultivate direct relationships with buyers." },
  { icon: Shield, title: "High Trust Environment", desc: "A curated marketplace environment with strict merchant vetting means less counterfeit competition and higher buyer trust." },
];

const process = [
  { step: "01", title: "Regional Account Registration", desc: "We assist with the complex business vetting processes required to open accounts on Rakuten Ichiba (Japan), Rakuten France, etc." },
  { step: "02", title: "RMS & API Configuration", desc: "Setting up your Rakuten Merchant Server and establishing the API connections for your inventory and order management systems." },
  { step: "03", title: "Localization & Catalog Sync", desc: "Translating and mapping your products to meet local market expectations and Rakuten's specific categorization trees." },
  { step: "04", title: "Storefront Design", desc: "Designing and coding your Rakuten storefront within the RMS to ensure it looks professional and converts highly." },
  { step: "05", title: "Launch & Campaign Setup", desc: "Going live and configuring your initial Rakuten Super Points campaigns to drive immediate traffic and sales." },
];

const integrations = ["Shopify", "Magento", "Salesforce Commerce", "NetSuite", "ChannelAdvisor", "Linnworks", "Channable", "Feedonomics", "Custom REST API"];

export default function RakutenClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#BF0000] py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white tracking-widest uppercase">Rakuten Integration</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Unlock the <span className="text-black">Rakuten</span> <br/> Global Ecosystem
                </h1>
                <p className="text-white/90 text-lg mb-8 max-w-xl">Comprehensive integration and automation services for Rakuten Ichiba, Rakuten France, and beyond. Tap into 1.6 Billion loyal members worldwide.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white font-bold hover:bg-gray-900 transition-colors shadow-lg">
                    Speak to an Expert <ArrowRight className="w-4 h-4" />
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

        {/* Why Rakuten */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#BF0000]">Why Rakuten?</span>
              <h2 className="text-3xl font-bold text-slate-900">A Unique <span className="text-[#BF0000]">E-commerce Philosophy</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySell.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#F6F8FA] rounded-2xl p-6 border border-slate-100">
                    <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#BF0000]" /></div>
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#BF0000] border border-red-200">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Enterprise <span className="text-[#BF0000]">Rakuten API</span> Integration</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Navigate the complexities of Rakuten Merchant Server (RMS) with flawless backend automation.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-xl hover:border-[#BF0000]/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#BF0000] transition-colors"><Icon className="w-6 h-6 text-gray-700 group-hover:text-white" /></div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                    <ul className="space-y-1.5">
                      {f.points.map((p) => (<li key={p} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-[#BF0000] flex-shrink-0" />{p}</li>))}
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
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#BF0000]">Our Process</span>
              <h2 className="text-3xl font-bold text-slate-900">How We Integrate with <span className="text-[#BF0000]">Rakuten</span></h2>
            </div>
            <div className="space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5 items-start p-6 bg-[#F6F8FA] rounded-2xl border border-slate-100 hover:border-[#BF0000]/50 transition-colors">
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
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Enterprise Tech Compatibility</h2>
            <p className="text-slate-500 mb-8">Connect your existing tech stack to Rakuten's API endpoints globally.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (<span key={name} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium shadow-sm">{name}</span>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#BF0000] to-[#e60000] rounded-3xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Expand Globally?</h2>
              <p className="text-white/90 mb-8 max-w-lg mx-auto">Don't let language barriers and complex backend architectures stop your growth. Let our Rakuten integration experts handle the technical heavy lifting.</p>
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
