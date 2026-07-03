"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  ExternalLink,
  Package,
  Zap,
  Target,
  BarChart3,
  Settings,
  Shield,
  TrendingUp,
  FileText,
  MessageCircle,
  Truck,
  DollarSign,
  Lock,
  Database,
  Search,
  Eye,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MarketplaceService {
  id: string;
  service: string;
  supportedMarketplaces: string[];
  keyBenefits: string;
  icon: any;
  category: string;
  color: string;
}

const MarketplaceServicesPage = () => {
  const [selectedCategory] = useState<string>("all");

  const services: MarketplaceService[] = [
    {
      id: "inventory-management",
      service: "Inventory Management (Private Label & White Label)",
      supportedMarketplaces: [
        "Amazon",
        "eBay",
        "Walmart",
        "Etsy",
        "Shopify",
        "TikTok Shop",
        "Bol",
        "Kaufland",
        "Worten",
        "Rakuten",
        "Fnac",
        "Decathlon",
        "Spartoo",
        "Frugoo",
        "Abebooks",
      ],
      keyBenefits: "Centralized tracking, stock visibility, avoids overselling.",
      icon: Package,
      category: "management",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "api-integrations",
      service: "Amazon SP-API & Multi-Marketplace API Integrations",
      supportedMarketplaces: [
        "Amazon SP-API",
        "Walmart",
        "eBay",
        "Etsy",
        "Shopify",
        "TikTok Shop",
        "Bol",
        "Kaufland",
        "Worten",
        "Rakuten",
        "Fnac",
        "Decathlon",
        "Spartoo",
        "Frugoo",
        "Abebooks",
      ],
      keyBenefits: "Unified access to inventory, orders, shipments & reports.",
      icon: Zap,
      category: "integration",
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: "automated-purchase-orders",
      service: "Automated Purchase Orders (via FTP/API)",
      supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify", "Bol", "Kaufland"],
      keyBenefits: "Seamless supplier backordering, reduces stock-outs.",
      icon: Target,
      category: "automation",
      color: "bg-green-50 border-green-200",
    },
    {
      id: "automated-fulfillment",
      service: "Automated Order Fulfillment",
      supportedMarketplaces: [
        "Amazon",
        "Walmart",
        "eBay",
        "Shopify",
        "Etsy",
        "TikTok Shop",
        "Bol",
        "Kaufland",
        "Worten",
        "Rakuten",
        "Fnac",
        "Decathlon",
      ],
      keyBenefits: "Faster fulfillment, reduces manual effort, integrates with 3PLs.",
      icon: Truck,
      category: "automation",
      color: "bg-orange-50 border-orange-200",
    },
    {
      id: "marketplace-sync",
      service: "Multi-Marketplace Synchronization",
      supportedMarketplaces: ["All supported marketplaces"],
      keyBenefits: "Real-time inventory sync, prevents overselling, consolidated management.",
      icon: Settings,
      category: "sync",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      id: "advertising-ppc",
      service: "Marketplace Advertising & PPC Management",
      supportedMarketplaces: [
        "Amazon",
        "Walmart",
        "eBay",
        "Etsy",
        "TikTok Shop",
        "Google Shopping",
      ],
      keyBenefits: "Campaign optimization, higher ROI, improved visibility.",
      icon: TrendingUp,
      category: "advertising",
      color: "bg-red-50 border-red-200",
    },
    {
      id: "advanced-advertising",
      service: "Advanced Advertising (DSP, A/B Testing)",
      supportedMarketplaces: ["Amazon DSP", "Walmart Connect", "eBay Ads"],
      keyBenefits: "Audience targeting, keyword tracking, conversion optimization.",
      icon: BarChart3,
      category: "advertising",
      color: "bg-pink-50 border-pink-200",
    },
    {
      id: "amazon-content",
      service: "Amazon A+ Content & Brand Content",
      supportedMarketplaces: ["Amazon"],
      keyBenefits: "Enhanced brand pages, better conversion, improved SEO ranking.",
      icon: FileText,
      category: "content",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      id: "catalog-management",
      service: "Product Catalog Management",
      supportedMarketplaces: [
        "Amazon",
        "Walmart",
        "eBay",
        "Etsy",
        "Shopify",
        "TikTok Shop",
        "Bol",
        "Kaufland",
        "Worten",
        "Rakuten",
        "Fnac",
        "Decathlon",
      ],
      keyBenefits: "Bulk uploads, variation handling, listing error fixes.",
      icon: Package,
      category: "management",
      color: "bg-teal-50 border-teal-200",
    },
    {
      id: "content-optimization",
      service: "Content Optimization",
      supportedMarketplaces: ["Amazon", "eBay", "Walmart", "Etsy", "Shopify"],
      keyBenefits: "SEO-driven titles, bullet points, descriptions & images.",
      icon: Search,
      category: "content",
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      id: "dynamic-repricing",
      service: "Dynamic Repricing & Buy Box Optimization",
      supportedMarketplaces: ["Amazon", "Walmart", "eBay"],
      keyBenefits: "Stay competitive, maximize Buy Box share, automated pricing.",
      icon: DollarSign,
      category: "pricing",
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      id: "pricing-analytics",
      service: "Pricing & Profitability Analytics",
      supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify"],
      keyBenefits: "Profit calculation, fee analysis, competitor benchmarking.",
      icon: BarChart3,
      category: "analytics",
      color: "bg-lime-50 border-lime-200",
    },
    {
      id: "fulfillment-solutions",
      service: "Fulfillment Solutions (FBA/FBM/3PL/AWD/WFS)",
      supportedMarketplaces: [
        "Amazon (FBA, FBM, AWD, Seller Flex)",
        "Walmart (WFS)",
        "Shopify",
        "3PL providers",
      ],
      keyBenefits: "End-to-end order delivery, scalable logistics.",
      icon: Truck,
      category: "fulfillment",
      color: "bg-slate-50 border-slate-200",
    },
    {
      id: "returns-management",
      service: "Returns & Refunds Management",
      supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify"],
      keyBenefits: "Automates returns, reduces losses, improves customer experience.",
      icon: RotateCcw,
      category: "management",
      color: "bg-rose-50 border-rose-200",
    },
    {
      id: "reimbursement-claims",
      service: "Reimbursement & Claims Management",
      supportedMarketplaces: ["Amazon (FBA)", "Walmart", "eBay"],
      keyBenefits: "Recover fees, shipment discrepancy claims, cost savings.",
      icon: Shield,
      category: "management",
      color: "bg-violet-50 border-violet-200",
    },
    {
      id: "financial-reconciliation",
      service: "Financial Reconciliation & Settlement Reports",
      supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify"],
      keyBenefits: "Settlement validation, payout reconciliation, P&L dashboards.",
      icon: FileText,
      category: "financial",
      color: "bg-amber-50 border-amber-200",
    },
    {
      id: "compliance-management",
      service: "Compliance & Policy Management",
      supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Etsy", "TikTok Shop"],
      keyBenefits: "Avoids suspensions, MAP monitoring, IP/trademark protection.",
      icon: Lock,
      category: "compliance",
      color: "bg-gray-50 border-gray-200",
    },
    {
      id: "feedback-management",
      service: "Customer Feedback & Review Management",
      supportedMarketplaces: ["Amazon", "eBay", "Walmart", "Etsy"],
      keyBenefits: "Review monitoring, negative feedback alerts, automated responses.",
      icon: MessageCircle,
      category: "management",
      color: "bg-sky-50 border-sky-200",
    },
    {
      id: "data-extraction",
      service: "Data Extraction & Marketplace Analytics",
      supportedMarketplaces: ["All supported marketplaces"],
      keyBenefits: "Business intelligence, competitor benchmarking, sales insights.",
      icon: Database,
      category: "analytics",
      color: "bg-fuchsia-50 border-fuchsia-200",
    },
    {
      id: "web-scraping",
      service: "Web Scraping & Data Aggregation",
      supportedMarketplaces: ["Amazon", "eBay", "Walmart", "Rakuten", "Fnac", "Shopify"],
      keyBenefits: "Competitive monitoring, catalog enrichment, price tracking.",
      icon: Eye,
      category: "data",
      color: "bg-stone-50 border-stone-200",
    },
    {
      id: "sales-analytics",
      service: "Sales & Performance Analytics",
      supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify", "Etsy"],
      keyBenefits: "Conversion tracking, Buy Box %, traffic insights.",
      icon: BarChart3,
      category: "analytics",
      color: "bg-zinc-50 border-zinc-200",
    },
  ];

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((s) => s.category === selectedCategory);

  const marketplaceLogos = {
    Amazon: "/amazon-logo.svg",
    eBay: "/ebay-logo.svg",
    Walmart: "/walmart-logo.svg",
    Etsy: "/etsy-logo.webp",
    Shopify: "/shopify-logo.svg",
    TikTok: "/tiktokshop.svg",
    Bol: "/bol.webp",
    Kaufland: "/kaufland.webp",
    Worten: "/worten-logo.webp",
    Rakuten: "/rakuten.webp",
    Fnac: "/fnac.webp",
    Decathlon: "/decathlon.webp",
    Abebooks: "/abebooks.webp",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 bg-opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 bg-opacity-30 rounded-full blur-lg"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-8 backdrop-blur-sm text-black">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 1000+ Businesses
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            Marketplace{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Comprehensive marketplace management solutions for all major e-commerce platforms. From
            inventory management to AI-powered insights, we&apos;ve got you covered.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">23+</div>
              <div className="text-gray-300 text-sm">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300 text-sm">Marketplaces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300 text-sm">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                View All Services
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 backdrop-blur-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              const isGradientCard =
                service.id === "ai-insights" || service.id === "workflow-automation";

              return (
                <div
                  key={service.id}
                  className={`${service.color} rounded-3xl p-8 border-2 shadow-lg flex flex-col h-full`}
                >
                  {/* Service Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-6 ${isGradientCard ? "bg-white bg-opacity-20" : "bg-white"
                        }`}
                    >
                      <IconComponent
                        className={`w-12 h-12 ${isGradientCard ? "text-black" : "text-blue-600"}`}
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold mb-4 ${isGradientCard ? "text-gray-600" : "text-gray-900"
                        }`}
                    >
                      {service.service}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${isGradientCard ? "text-gray-600 text-opacity-90" : "text-gray-600"
                        }`}
                    >
                      {service.keyBenefits}
                    </p>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    {/* Supported Marketplaces List */}
                    <div className="mb-8">
                      <h4
                        className={`text-sm font-semibold mb-4 ${isGradientCard ? "text-gray-600 text-opacity-90" : "text-gray-700"
                          }`}
                      >
                        Supported Marketplaces:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.supportedMarketplaces.map((marketplace, index) => (
                          <span
                            key={index}
                            className={`px-3 py-2 rounded-lg text-xs font-medium ${isGradientCard
                              ? "bg-white bg-opacity-20 text-gray-600"
                              : "bg-white bg-opacity-90 text-gray-700 shadow-sm"
                              }`}
                          >
                            {marketplace}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Marketplace Logos Section */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-3">
                        {service.supportedMarketplaces.slice(0, 6).map((marketplace, index) => {
                          let cleanMarketplace = marketplace;
                          if (marketplace.includes("Amazon")) {
                            cleanMarketplace = "Amazon";
                          } else if (marketplace.includes("eBay")) {
                            cleanMarketplace = "eBay";
                          } else if (marketplace.includes("Walmart")) {
                            cleanMarketplace = "Walmart";
                          } else if (marketplace.includes("Etsy")) {
                            cleanMarketplace = "Etsy";
                          } else if (marketplace.includes("Shopify")) {
                            cleanMarketplace = "Shopify";
                          } else if (marketplace.includes("TikTok")) {
                            cleanMarketplace = "TikTok Shop";
                          } else if (marketplace.includes("Bol")) {
                            cleanMarketplace = "Bol";
                          } else if (marketplace.includes("Kaufland")) {
                            cleanMarketplace = "Kaufland";
                          } else if (marketplace.includes("Worten")) {
                            cleanMarketplace = "Worten";
                          } else if (marketplace.includes("Rakuten")) {
                            cleanMarketplace = "Rakuten";
                          } else if (marketplace.includes("Fnac")) {
                            cleanMarketplace = "Fnac";
                          } else if (marketplace.includes("Decathlon")) {
                            cleanMarketplace = "Decathlon";
                          } else if (marketplace.includes("Abebooks")) {
                            cleanMarketplace = "Abebooks";
                          }

                          const logoPath =
                            marketplaceLogos[cleanMarketplace as keyof typeof marketplaceLogos];

                          if (logoPath) {
                            return (
                              <div
                                key={index}
                                className={`w-16 h-16 rounded-xl flex items-center justify-center border-2 shadow-md ${isGradientCard
                                  ? "bg-white bg-opacity-20 border-white border-opacity-30"
                                  : "bg-white border-gray-200"
                                  }`}
                              >
                                <Image
                                  src={logoPath}
                                  alt={cleanMarketplace}
                                  width={32}
                                  height={32}
                                  className="object-contain max-w-full max-h-full"
                                />
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href="/portfolios">
                    <button
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 mt-auto ${isGradientCard
                        ? "bg-white bg-opacity-20 text-white border border-white border-opacity-30"
                        : "bg-white text-gray-700 border border-gray-200 shadow-md"
                        }`}
                    >
                      Explore Service Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default MarketplaceServicesPage;
