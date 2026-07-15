import type { Metadata } from "next";
import {
  Store,
  Package,
  ShoppingCart,
  Zap,
  Shield,
  ArrowRight,
  Award,
  Clock,
  BarChart3,
  Layers,
  FileText,
  Bot,
  Settings,
  Upload,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: {
    absolute: "Sellerbuz: Multi-Channel Inventory Platform"
  },
  description: "Centralized dashboard managing your e-commerce listings, orders, and pricing. SellerBuz automatically syncs inventory across Amazon, Etsy, and global channels.",
  keywords: [
    "multi-channel selling",
    "inventory management",
    "Amazon Etsy integration",
    "order management",
    "SellerBuz",
    "catalog management",
  ],
  alternates: {
    canonical: "/product/sellerbuz",
  },
  openGraph: {
    title: "SellerBuz — Unified Multi-Channel Selling Platform",
    description: "A centralized dashboard to manage your e-commerce listings, orders, and pricing. SellerBuz automatically syncs inventory across Amazon, Etsy, and other channels.",
    url: "/product/sellerbuz",
    images: [
      {
        url: "/products/sellerbuz-og.webp",
        width: 1200,
        height: 630,
        alt: "SellerBuz Multi-Channel Selling Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SellerBuz — Unified Multi-Channel Selling Platform",
    description: "A centralized dashboard to manage your e-commerce listings, orders, and pricing. SellerBuz automatically syncs inventory across Amazon, Etsy, and other channels.",
    images: ["/products/sellerbuz-og.webp"],
  },
};

const coreFeatures = [
  {
    title: "Centralized Inventory & Price Management",
    description:
      "Manage stock levels and pricing from one unified dashboard. Every update reflects instantly across all connected sales channels",
    icon: Package,
  },
  {
    title: "Unified Order Management",
    description:
      "Receive and manage orders from every connected marketplace in a single inbox - no more switching tabs between platforms",
    icon: ShoppingCart,
  },
  {
    title: "Real-Time Inventory Sync",
    description:
      "Stock changes on one channel automatically sync across all others in real time, keeping quantities accurate everywhere",
    icon: Zap,
  },
];

const listingTools = [
  {
    title: "White-Label Product Listing",
    description:
      "List your own white-label products across any connected marketplace with full control over branding and presentation",
    icon: Layers,
  },
  {
    title: "Variant Management",
    description:
      "Easily create and manage product variants (size, color, style, etc.) across listings, keeping catalog data consistent",
    icon: FileText,
  },
  {
    title: "AI-Generated Catalog Details",
    description:
      "Generate optimized product titles, descriptions, and catalog details automatically using AI - cutting listing time from hours to minutes",
    icon: Bot,
  },
  {
    title: "Smart Catalog Matching",
    description:
      "When a white-label listing matches an existing retail catalog entry, automatically suggests switching to the matched retail listing",
    icon: Settings,
  },
  {
    title: "Related Product Suggestions",
    description:
      "Surface relevant product matches and cross-listing opportunities to help sellers expand their catalog intelligently",
    icon: ArrowRight,
  },
];

const pricingTools = [
  {
    title: "Built-In Repricer",
    description:
      "Automatically adjust pricing based on competition, rules, and market conditions - all managed from the same place as inventory",
    icon: BarChart3,
  },
  {
    title: "Revenue & Performance Dashboard",
    description:
      "Centralized dashboard surfaces revenue trends, listing performance, and key KPIs across every channel",
    icon: BarChart3,
  },
];

const operations = [
  {
    title: "Role-Based Access Control",
    description:
      "Enterprise-grade auth guards with configurable role creation let teams assign granular permissions",
    icon: Shield,
  },
  {
    title: "Bulk Operations via File Upload",
    description:
      "Perform bulk updates - inventory, pricing, listings - through simple file-based uploads, saving hours on large catalog management",
    icon: Upload,
  },
];

const marketplaces = ["Amazon", "Etsy", "eBay", "Walmart", "Shopify", "And More"];

const benefits = [
  {
    title: "Eliminate Dashboard Chaos",
    description: "No more juggling multiple seller dashboards - manage everything from one place",
    icon: Zap,
  },
  {
    title: "Prevent Overselling",
    description: "Real-time inventory sync ensures you never oversell across channels",
    icon: Shield,
  },
  {
    title: "Save Hours Daily",
    description: "Automated workflows and bulk operations save countless hours of manual work",
    icon: Clock,
  },
  {
    title: "Scale Your Business",
    description: "Add new marketplaces and channels without increasing your workload",
    icon: Award,
  },
];

export default function SellerBuzPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />

      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.ctasis.com" },
            { name: "Products", url: "https://www.ctasis.com/product" },
            { name: "SellerBuz", url: "https://www.ctasis.com/product/sellerbuz" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0d1f3c] via-[#13345A] to-[#1e4d80] py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-medium mb-6">
                  <Store className="w-4 h-4" />
                  Multi-Channel Commerce Platform
                </div>
                <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                  Seller<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Buz</span>
                </h1>
                <p className="text-white/70 text-lg mb-4 leading-relaxed">
                  Sell everywhere. Manage everything in one place.
                </p>
                <p className="text-white/60 text-base mb-8 leading-relaxed">
                  A multi-channel commerce platform built for sellers operating across marketplaces like Amazon, Etsy, and beyond. It brings inventory, pricing, orders, and catalog management into a single, centralized system.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "Multi", label: "Channel", icon: Store },
                    { number: "Real-time", label: "Sync", icon: Zap },
                    { number: "AI", label: "Powered", icon: Bot },
                    { number: "Unified", label: "Dashboard", icon: BarChart3 },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <stat.icon className="w-6 h-6 text-emerald-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-[#0b1329] rounded-xl p-8">
                    <div className="relative w-full h-64 mb-4">
                      <Image
                        src="/multi-seller-e-commerce-platform.webp"
                        alt="SellerBuz Multi-Channel Dashboard"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Unified Platform</div>
                      <div className="text-emerald-400">Multi-Channel Selling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Platform Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Platform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features to manage your multi-channel business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Listing & Catalog Tools Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Listing & Catalog Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI-powered tools to streamline your catalog management
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {listingTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <tool.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Growth Tools Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Growth Tools</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built-in tools to optimize your pricing and track performance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {pricingTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <tool.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content & Asset Management Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Content & Asset Management</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organize and reuse your creative assets efficiently
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <FileText className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A+ Content Asset Library</h3>
                <p className="text-gray-600">
                  A dedicated library for managing enhanced content assets (A+ Content) used in
                  premium listings — keeping creative assets organized and reusable across products
                  and channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operations & Access Control Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Operations & Access Control</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade features for team collaboration and efficiency
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {operations.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplaces Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Connected Marketplaces</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sell across all major platforms from one dashboard
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {marketplaces.map((marketplace, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center">
                    <Store className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-lg font-medium text-gray-900">{marketplace}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SellerBuz?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Benefits that transform your multi-channel business
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-orange-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unify Your Multi-Channel Business?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Start managing all your marketplaces from one dashboard with SellerBuz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
