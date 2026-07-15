import type { Metadata } from "next";
import { Scan, RefreshCcw, Store, Share2, ArrowRight, Award, CheckCircle, Zap, Globe, Bot, Shield, Star, Package } from "lucide-react";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "CTAS Products — E-commerce Automation & Software Suite",
  description: "Explore our specialized e-commerce automation products: ScanPro, Repricer, SellerBuz, and Postbell to optimize and scale your online business.",
  keywords: [
    "CTAS products",
    "barcode scanning software",
    "Amazon repricer AI",
    "multi-channel selling platform",
    "social media automation tool",
  ],
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    title: "CTAS Products — E-commerce Automation & Software Suite",
    description: "Explore our specialized e-commerce automation and software products: ScanPro, Repricer, SellerBuz, and Postbell. Build to optimize and scale your online business.",
    url: "/product",
    images: [
      {
        url: "/products/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CTAS Products Suite",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTAS Products — E-commerce Automation & Software Suite",
    description: "Explore our specialized e-commerce automation and software products: ScanPro, Repricer, SellerBuz, and Postbell. Build to optimize and scale your online business.",
    images: ["/products/og-image.webp"],
  },
};

const products = [
  {
    title: "CTAS ScanPro",
    tagline: "High-Performance Barcode Scanning",
    description:
      "A powerful, browser-based barcode scanning solution delivering 98.2% decoding accuracy — even on blurry, faded, or physically damaged barcodes. Built with WebAssembly for lightning-fast, client-side performance without any software installation.",
    icon: Scan,
    badge: "Barcode & Scanning",
    badgeColor: "bg-blue-100 text-blue-700",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-500",
    href: "/product/ctas-scanpro",
    highlights: [
      "98.2% scan accuracy across all barcode types",
      "Real-time browser-based scanning (no install needed)",
      "Blurry, faded & damaged barcode recognition",
      "Secure encrypted scan history & audit trails",
      "Lightweight WebAssembly architecture",
      "Built for warehouses, retail & logistics",
    ],
    stats: [
      { value: "98.2%", label: "Accuracy" },
      { value: "<20ms", label: "Decode Speed" },
      { value: "5+", label: "Barcode Types" },
    ],
    tech: ["Next.js", "Angular", "WebAssembly", "Python", "PostgreSQL"],
  },
  {
    title: "CTAS Repricer",
    tagline: "AI-Powered Amazon Pricing Engine",
    description:
      "An intelligent repricing platform that continuously monitors competitor activity across 15+ Amazon marketplaces and automatically adjusts your product prices to maximize Buy Box wins, protect profit margins, and scale revenue — 24/7 without manual effort.",
    icon: RefreshCcw,
    badge: "Amazon & eCommerce",
    badgeColor: "bg-orange-100 text-orange-700",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    href: "/product/ctas-repricer",
    highlights: [
      "AI-driven Buy Box optimization algorithms",
      "15+ Amazon marketplaces supported globally",
      "Real-time competitor monitoring & response",
      "Min/Max price guardrails to protect margins",
      "Inventory-aware pricing based on stock levels",
      "Comprehensive analytics & repricing history",
    ],
    stats: [
      { value: "15+", label: "Marketplaces" },
      { value: "24/7", label: "Monitoring" },
      { value: "20B+", label: "Price Changes/mo" },
    ],
    tech: ["AI/ML", "Real-time Analytics", "Cloud Infrastructure", "Amazon SP API"],
  },
  {
    title: "SellerBuz",
    tagline: "Unified Multi-Channel Commerce",
    description:
      "A centralized multi-channel commerce platform that brings inventory, pricing, orders, and catalog management for Amazon, Etsy, eBay, Shopify, and more into a single dashboard — eliminating the chaos of juggling multiple seller tools.",
    icon: Store,
    badge: "Multi-Channel Selling",
    badgeColor: "bg-green-100 text-green-700",
    gradientFrom: "from-green-600",
    gradientTo: "to-teal-500",
    href: "/product/sellerbuz",
    highlights: [
      "Centralized inventory & pricing across all channels",
      "Unified order management from one inbox",
      "Real-time stock sync to prevent overselling",
      "AI-generated product titles & catalog details",
      "White-label product listing management",
      "Built-in repricing + revenue dashboard",
    ],
    stats: [
      { value: "6+", label: "Marketplaces" },
      { value: "Real-time", label: "Stock Sync" },
      { value: "AI", label: "Catalog Generation" },
    ],
    tech: ["Multi-Channel API", "AI Integration", "Real-time Sync", "React", "Node.js"],
  },
  {
    title: "Postbell",
    tagline: "AI Social Media Automation",
    description:
      "A smart social media management platform that uses AI to generate content and visuals, then schedules and publishes them across 9+ platforms automatically. From content calendar planning to team collaboration and performance analytics — all in one place.",
    icon: Share2,
    badge: "Social Media & Marketing",
    badgeColor: "bg-purple-100 text-purple-700",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-500",
    href: "/product/postbell",
    highlights: [
      "AI content & image generation for social posts",
      "Publish simultaneously across 9+ platforms",
      "Smart scheduling with content calendar view",
      "Team collaboration with approval workflows",
      "Role-based access control for agencies",
      "Real-time performance analytics & reports",
    ],
    stats: [
      { value: "9+", label: "Platforms" },
      { value: "AI", label: "Content Gen" },
      { value: "24/7", label: "Auto-Publish" },
    ],
    tech: ["AI/ML", "Social APIs", "Node.js", "React", "Cloud"],
  },
];

const overviewStats = [
  { value: "4", label: "Products", icon: Package },
  { value: "15+", label: "Marketplaces Covered", icon: Globe },
  { value: "9+", label: "Social Platforms", icon: Share2 },
  { value: "24/7", label: "Automation", icon: Zap },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.ctasis.com" },
            { name: "Products", url: "https://www.ctasis.com/product" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0d1f3c] via-[#13345A] to-[#1a4a7a] py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 text-sm text-white/80 font-medium mb-8">
              <Star className="w-4 h-4 text-orange-400" />
              CTAS Product Suite
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Software Built to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                Grow Your Business
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              From barcode scanning to Amazon repricing, multi-channel selling to social media automation — the CTAS product suite helps businesses automate operations, reduce manual work, and scale faster.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {overviewStats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Suite</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four powerful platforms, each built to solve a specific business challenge with precision and intelligence.
              </p>
            </div>

            <div className="space-y-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Left: Gradient Panel */}
                    <div className={`lg:w-2/5 bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} p-10 flex flex-col justify-between text-white`}>
                      <div>
                        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                          <product.icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="inline-block text-xs font-semibold bg-white/20 rounded-full px-3 py-1 mb-4">{product.badge}</span>
                        <h3 className="text-3xl font-extrabold mb-2">{product.title}</h3>
                        <p className="text-white/80 text-sm font-medium mb-4">{product.tagline}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{product.description}</p>
                      </div>

                      {/* Stats */}
                      <div className="mt-8 grid grid-cols-3 gap-3">
                        {product.stats.map((stat, i) => (
                          <div key={i} className="bg-white/15 rounded-xl p-3 text-center">
                            <div className="text-lg font-bold">{stat.value}</div>
                            <div className="text-[11px] text-white/70 mt-0.5">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Features + CTA */}
                    <div className="lg:w-3/5 p-10 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-5">Key Features</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {product.highlights.map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{feat}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {product.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={product.href}
                        className={`self-start inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} hover:shadow-lg hover:scale-105 transition-all duration-300`}
                      >
                        Explore {product.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CTAS Products */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CTAS Products?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every product is engineered with the same commitment to performance, reliability, and ease of use.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: "Built for Speed", desc: "Optimized for real-time operations — from barcode decoding to price updates, everything happens instantly." },
                { icon: Shield, title: "Enterprise Security", desc: "Role-based access, encrypted data, audit logs, and automated backups keep your business data safe." },
                { icon: Bot, title: "AI-First Approach", desc: "Intelligent automation powered by AI runs the repetitive work, so your team can focus on growth." },
                { icon: Award, title: "Reliable & Scalable", desc: "From solo sellers to large enterprises — our architecture scales seamlessly with your business needs." },
              ].map((item, i) => (
                <div key={i} className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#13345A] to-[#249BCA] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#13345A] to-[#249BCA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/75 mb-10">
              Talk to our team to find the right product for your business or request a live demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#13345A] rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Browse All Products
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
