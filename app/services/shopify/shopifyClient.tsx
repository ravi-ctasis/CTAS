"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  Users,
  BarChart3,
  Code,
  Palette,
  Globe,
  Zap,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const features = [
  {
    title: "Products & Collections Sync",
    description: "Real-time product catalog synchronization across Shopify and all connected marketplaces and channels. Auto-update titles, prices, images, and variants.",
    icon: Package,
  },
  {
    title: "Customer & Order Management",
    description: "Unified order management with automated fulfillment routing, customer data synchronization, and multi-location shipping rules.",
    icon: Users,
  },
  {
    title: "Inventory Automation",
    description: "Multi-location inventory tracking and automatic stock level sync across Amazon, eBay, Kaufland, Bol, and all connected sales channels.",
    icon: BarChart3,
  },
  {
    title: "Custom App Development",
    description: "Bespoke Shopify apps, private apps, and public Shopify app store apps built in Next.js or React to extend your store capabilities.",
    icon: Code,
  },
  {
    title: "Theme Development & Optimization",
    description: "High-converting custom Shopify themes built with Liquid and React. Page speed optimized for Core Web Vitals and mobile-first UX.",
    icon: Palette,
  },
  {
    title: "Multi-Channel Integration",
    description: "Connect Shopify with Amazon, eBay, TikTok Shop, Instagram Shopping, Google Shopping, and other sales channels seamlessly.",
    icon: Globe,
  },
  {
    title: "Automation & Workflows",
    description: "Shopify Flow-based and custom webhook automation for order tagging, customer segmentation, and supplier notification.",
    icon: Zap,
  },
  {
    title: "Shopify Plus Features",
    description: "Shopify Plus customization including checkout extensions, B2B wholesale features, and advanced scripts & functions.",
    icon: Star,
  },
  {
    title: "SEO & Performance",
    description: "Technical SEO implementation, structured data markup, page speed optimization, and conversion rate improvement.",
    icon: TrendingUp,
  },
];

const stats = [
  { n: "2M+", l: "Active Shopify Stores" },
  { n: "600B+", l: "Revenue Processed" },
  { n: "175+", l: "Countries" },
  { n: "24/7", l: "Support" },
];

export default function ShopifyClient() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0d1f3c] via-[#13345A] to-[#1e4d80] py-24 px-4 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-200 border border-green-400/30 tracking-widest uppercase">
              Shopify Integration
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Shopify <span className="text-green-300">Integration Services</span>
            </h1>
            <p className="text-blue-100/80 text-lg mb-6 max-w-3xl mx-auto">The World&apos;s #1 E-Commerce Platform</p>
            <p className="text-blue-100/60 text-base mb-10 max-w-2xl mx-auto">
              Build, scale, and optimize your Shopify store with expert development, multi-channel integration, and custom app development tailored to your business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.l} className="bg-white/10 rounded-xl p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">{s.n}</div>
                  <div className="text-xs text-blue-200/80 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
              >
                Get Started →
              </Link>
              <Link
                href="/services/e-commerce-solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                E-Commerce Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                Our Services
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                What We Offer for <span className="text-green-600">Shopify</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                End-to-end Shopify development, integration, and automation services from store setup to enterprise scaling.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-700 to-green-500 rounded-3xl p-10 text-center text-white">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Scale Your Shopify Store?</h2>
              <p className="text-green-100/80 mb-8 max-w-xl mx-auto">
                Let&apos;s discuss your Shopify strategy. Our certified experts will build you a custom development and integration plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-green-700 font-semibold hover:bg-green-50 transition-colors"
                >
                  Get Free Consultation →
                </Link>
                <Link
                  href="/services/e-commerce-solutions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                >
                  All E-Commerce Services
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
