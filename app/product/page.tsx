import { Scan, RefreshCcw, Store, Share2, ArrowRight, Award, Clock } from "lucide-react";
import Link from "next/link";
import MetaTags from "@/components/MetaTags";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const products = [
  {
    title: "CTAS ScanPro",
    description: "High-Performance Barcode Scanning Solution with 98.2% accuracy for retail, warehousing, and logistics",
    icon: Scan,
    image: "/products/scanpro-hero.webp",
    href: "/product/ctas-scanpro",
    features: [
      "98.2% scan accuracy",
      "Blurry & damaged barcode recognition",
      "Real-time browser-based scanning",
      "Secure scan history and data storage",
    ],
    tech: ["Next.js", "Angular", "Python"],
  },
  {
    title: "CTAS Repricer",
    description: "AI-Powered Amazon Repricing Platform to automate pricing, protect profits, and win more Buy Boxes",
    icon: RefreshCcw,
    image: "/products/repricer-hero.webp",
    href: "/product/ctas-repricer",
    features: [
      "Smart Repricing Engine",
      "Buy Box Optimization",
      "Multi-Marketplace Support",
      "Inventory-Aware Pricing",
    ],
    tech: ["AI/ML", "Real-time Analytics", "Cloud Infrastructure"],
  },
  {
    title: "SellerBuz",
    description: "Unified Multi-Channel Selling Platform for Amazon, Etsy, and beyond - manage everything in one place",
    icon: Store,
    image: "/products/sellerbuz-hero.webp",
    href: "/product/sellerbuz",
    features: [
      "Centralized Inventory Management",
      "Unified Order Management",
      "Real-Time Inventory Sync",
      "AI-Generated Catalog Details",
    ],
    tech: ["Multi-Channel API", "AI Integration", "Real-time Sync"],
  },
  {
    title: "Postbell",
    description: "AI-Powered Social Media Automation Platform to create, schedule, publish, and analyze content",
    icon: Share2,
    image: "/products/postbell-hero.webp",
    href: "/product/postbell",
    features: [
      "AI Content Generator",
      "Multi-Platform Publishing",
      "Smart Scheduling",
      "Performance Analytics",
    ],
    tech: ["AI/ML", "Social APIs", "Automation Engine"],
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />
      
      <main>
        <MetaTags
          title="CTAS Products - Innovative Solutions for Your Business"
          description="Explore our innovative products including CTAS ScanPro, CTAS Repricer, SellerBuz, and Postbell designed to solve real-world challenges."
          keywords={["CTAS products", "barcode scanning", "Amazon repricer", "multi-channel selling", "social media automation"]}
          ogImage="/products/og-image.webp"
        />
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.ctasis.com" },
            { name: "Products", url: "https://www.ctasis.com/product" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              Our Products
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Explore our cutting-edge products designed to solve real-world challenges and drive business success across retail, e-commerce, and digital marketing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { number: "4+", label: "Products", icon: Award },
                { number: "98.2%", label: "Scan Accuracy", icon: Scan },
                { number: "15+", label: "Marketplaces", icon: Store },
                { number: "24/7", label: "Support", icon: Clock },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <stat.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore Products
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Product Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover powerful solutions built for modern businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-orange-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Let's discuss how our products can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
