
;
import React from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  FileText,
  BarChart3,
  Zap,
  Target,
  Package,
  MessageCircle,
  Clock,
  Award,
  Truck,
  Rocket,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  features: string[];
  benefits: string[];
  popular?: boolean;
  color: string;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Inventory & Order Management",
    description:
      "Centralized stock tracking, SP-API integrations, and automated fulfillment for FBA & FBM operations",
    icon: <Package className="w-8 h-8" />,
    category: "Core Operations",
    features: [
      "Amazon Inventory Management (Private Label & White Label)",
      "Amazon SP-API Integrations for real-time data access",
      "Automated Purchase Orders to Suppliers/Wholesalers",
      "Automated Amazon Order Fulfillment (FBA & FBM)",
      "Returns & Refunds Management with automation",
      "Amazon Multi-Channel Fulfillment (MCF)",
    ],
    benefits: [
      "Centralized stock tracking avoiding overselling",
      "Real-time access to Inventory, Orders, Shipments",
      "Auto replenishment maintaining healthy inventory levels",
      "Smooth processing for both FBA & FBM workflows",
    ],
    popular: true,
    color: "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200",
  },
  {
    id: 2,
    title: "Advertising & Content Optimization",
    description:
      "PPC campaign management, advanced advertising solutions, and enhanced content optimization",
    icon: <TrendingUp className="w-8 h-8" />,
    category: "Marketing & Content",
    features: [
      "Amazon PPC Campaign Management (Sponsored Products, Brands, Display)",
      "Advanced Advertising Solutions (Amazon DSP, keyword tracking)",
      "A/B ad testing and budget optimization",
      "Amazon A+ Content & Brand Store Management",
      "Enhanced product descriptions and storefronts",
      "Conversion-optimized visuals and layouts",
    ],
    benefits: [
      "Strategic PPC campaigns maximizing ROI",
      "Advanced advertising with Amazon DSP",
      "Enhanced content driving higher conversions",
      "Professional brand store presence",
    ],
    popular: true,
    color: "bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200",
  },
  {
    id: 3,
    title: "Product Catalog & Listings",
    description:
      "Comprehensive product catalog management and listing optimization for maximum visibility",
    icon: <FileText className="w-8 h-8" />,
    category: "Product Management",
    features: [
      "Amazon Product Catalog Management",
      "Listing creation and bulk uploads",
      "Variation management and duplicate resolution",
      "Listing Optimization with SEO-driven content",
      "Enhanced product descriptions and keywords",
      "Professional image optimization",
    ],
    benefits: [
      "Efficient catalog management and organization",
      "SEO-optimized listings for better visibility",
      "Professional product presentation",
      "Reduced listing issues and suspensions",
    ],
    popular: false,
    color: "bg-gradient-to-br from-green-50 to-emerald-100 border-green-200",
  },
  {
    id: 4,
    title: "Pricing & Repricing",
    description: "Dynamic pricing strategies and profitability analytics for Buy Box optimization",
    icon: <DollarSign className="w-8 h-8" />,
    category: "Pricing Strategy",
    features: [
      "Amazon Dynamic Repricing & Buy Box Optimization",
      "Automated pricing strategies for maximum wins",
      "Amazon Profitability & Pricing Analytics",
      "Fee breakdowns and margin tracking",
      "Competitor price intelligence",
      "Real-time pricing adjustments",
    ],
    benefits: [
      "Automated pricing maximizing Buy Box wins",
      "Comprehensive profitability tracking",
      "Competitive pricing intelligence",
      "Optimized margins and revenue",
    ],
    popular: true,
    color: "bg-gradient-to-br from-yellow-50 to-orange-100 border-yellow-200",
  },
  {
    id: 5,
    title: "Fulfillment & Logistics",
    description: "End-to-end fulfillment solutions including FBA, FBM, and warehousing management",
    icon: <Truck className="w-8 h-8" />,
    category: "Logistics",
    features: [
      "Amazon FBA & FBM Solutions",
      "End-to-end fulfillment and shipping management",
      "Amazon Seller Flex & AWD (Amazon Warehousing & Distribution)",
      "Flexible storage and logistics solutions",
      "Reimbursement & Claims Management",
      "Lost inventory and shipment discrepancy handling",
    ],
    benefits: [
      "Flexible fulfillment options (FBA & FBM)",
      "Efficient warehousing and distribution",
      "Automated claims and reimbursement processing",
      "Optimized shipping and logistics",
    ],
    popular: false,
    color: "bg-gradient-to-br from-teal-50 to-cyan-100 border-teal-200",
  },
  {
    id: 6,
    title: "Financial & Compliance",
    description:
      "Financial reconciliation, settlement reports, and comprehensive compliance management",
    icon: <Shield className="w-8 h-8" />,
    category: "Finance & Compliance",
    features: [
      "Amazon Financial Reconciliation & Settlement Reports",
      "Settlement validation and payout reconciliation",
      "P&L dashboards and financial tracking",
      "Compliance & Policy Management",
      "Restricted product alerts and MAP monitoring",
      "IP/trademark protection and suspension risk management",
    ],
    benefits: [
      "Accurate financial tracking and reconciliation",
      "Compliance monitoring reducing suspension risks",
      "Comprehensive financial reporting",
      "Protected intellectual property and trademarks",
    ],
    popular: false,
    color: "bg-gradient-to-br from-red-50 to-rose-100 border-red-200",
  },
  {
    id: 7,
    title: "Customer Engagement",
    description: "Comprehensive feedback management and customer relationship optimization",
    icon: <MessageCircle className="w-8 h-8" />,
    category: "Customer Service",
    features: [
      "Amazon Feedback & Review Management",
      "Monitoring reviews and negative feedback alerts",
      "Automated response workflows",
      "Customer satisfaction tracking",
      "Review analysis and insights",
      "Proactive customer engagement strategies",
    ],
    benefits: [
      "Improved customer satisfaction and ratings",
      "Proactive issue resolution",
      "Better brand reputation management",
      "Automated customer engagement workflows",
    ],
    popular: false,
    color: "bg-gradient-to-br from-indigo-50 to-blue-100 border-indigo-200",
  },
  {
    id: 8,
    title: "Data & Insights",
    description:
      "Advanced analytics, performance tracking, and AI-powered insights for strategic decision making",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "Analytics & Intelligence",
    features: [
      "Amazon Sales & Performance Analytics",
      "ASIN/SKU-level trends and Buy Box share analysis",
      "Sessions, conversion rates, and traffic insights",
      "Amazon Data Extraction & BI",
      "Historical performance and customer insights",
      "AI-Powered Insights & Forecasting",
    ],
    benefits: [
      "Data-driven decision making and optimization",
      "Comprehensive performance tracking",
      "AI-powered demand forecasting",
      "Competitive benchmarking and insights",
    ],
    popular: true,
    color: "bg-gradient-to-br from-violet-50 to-purple-100 border-violet-200",
  },
  {
    id: 9,
    title: "Workflow Automation & Alerts",
    description: "Intelligent automation systems and real-time alerts for operational efficiency",
    icon: <Zap className="w-8 h-8" />,
    category: "Automation",
    features: [
      "Low-inventory alerts and automated notifications",
      "Shipment delay notifications and tracking",
      "Supplier performance tracking and alerts",
      "Automated workflow optimization",
      "Real-time monitoring and reporting",
      "Custom alert configurations",
    ],
    benefits: [
      "Proactive issue identification and resolution",
      "Automated operational workflows",
      "Real-time monitoring and alerts",
      "Improved efficiency and reduced manual work",
    ],
    popular: false,
    color: "bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200",
  },
];

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Analysis",
    description: "We analyze your current Amazon presence and identify optimization opportunities",
    icon: <Search className="w-6 h-6 flex-nowrap shrink-0" />,
  },
  {
    id: 2,
    title: "Strategy Development",
    description: "Create a customized action plan tailored to your business goals",
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Implementation",
    description: "Execute the strategy with precision and monitor performance metrics",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Optimization",
    description: "Continuously refine and improve based on data and performance",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

export default function AmazonServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>

          {/* Floating 3D Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-bounce delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-full blur-2xl animate-bounce delay-3000"></div>

          {/* Geometric Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-500/50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-500/50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-indigo-500/50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Premium Text */}
            <div className="space-y-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-blue-300 font-semibold shadow-2xl">
                <div className="flex space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></span>
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-600"></span>
                </div>
                <span className="ml-2 text-white">⚡ PREMIUM AMAZON SOLUTIONS</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-white">Transform Your Amazon Business</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  With Elite Services
                </span>
              </h1>

              {/* Premium Subheading */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Unlock explosive growth with our{" "}
                <span className="font-bold text-blue-400">32+ professional services</span> designed
                to optimize, automate, and scale your Amazon business to{" "}
                <span className="font-bold text-purple-400">market-dominating success</span>
              </p>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact-us">
                  <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                    <span className="relative z-10 flex items-center space-x-3">
                      <Rocket className="w-6 h-6" />
                      <span>Start Your Success Journey</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </button>
                </Link>
                <Link href="/portfolios">
                  <button className="group relative bg-transparent border-2 border-blue-400/50 text-blue-300 hover:border-blue-400 hover:text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 backdrop-blur-sm">
                    <span className="flex items-center space-x-3">
                      <Play className="w-6 h-6" />
                      <span>Watch Success Stories</span>
                    </span>
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-3 text-gray-400">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-sm font-medium">500+ Success Stories</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <span className="text-sm font-medium">100% Secure & Reliable</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm font-medium">Industry Leadership</span>
                </div>
              </div>
            </div>

            {/* Right Content - Amazon Services Showcase */}
            <div className="relative">
              {/* Service Timeline Flow */}
              <div className="relative space-y-6 mb-8">
                {/* Step 1 - Discovery */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-blue-600/20 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-4 group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">Market Analysis</h3>
                    <p className="text-blue-300 text-sm">Deep research & competitor analysis</p>
                    <div className="mt-3 flex space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>

                {/* Step 2 - Strategy */}
                <div className="flex items-center space-x-4 group ml-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-emerald-600/20 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-4 group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">Strategic Planning</h3>
                    <p className="text-emerald-300 text-sm">Custom strategy for your business</p>
                    <div className="mt-3 flex space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Implementation */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-purple-600/20 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-4 group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">Fast Execution</h3>
                    <p className="text-purple-300 text-sm">Rapid implementation & optimization</p>
                    <div className="mt-3 flex space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>

                {/* Step 4 - Results */}
                <div className="flex items-center space-x-4 group ml-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-yellow-600/20 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-4 group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">Growth & Results</h3>
                    <p className="text-yellow-300 text-sm">Measurable success & scaling</p>
                    <div className="mt-3 flex space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M25 20 Q50 15 75 20 M25 40 Q50 35 75 40 M25 60 Q50 65 75 60 M25 80 Q50 85 75 80"
                    stroke="url(#timelineGradient)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="2,3"
                    className="animate-pulse"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;5"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with New Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Premium Amazon Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to optimize, automate, and scale your Amazon business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg  overflow-hidden flex flex-col border border-gray-100"
              >
                {/* Icon Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-sm px-4 py-2 rounded-full font-semibold mb-3">
                    {service.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6 text-center font-normal">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Amazon Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert solutions backed by years of Amazon marketplace experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Certified Amazon specialists with proven track record</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of success with measurable outcomes</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Always here to help when you need us most</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Safety</h3>
              <p className="text-gray-600">Protect your business with our expertise</p>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our 4-Step Success Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms Amazon businesses from concept to market
              dominance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 relative overflow-hidden h-80">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -translate-y-10 translate-x-10 opacity-60 group-hover:scale-110 transition-transform duration-300"></div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center  mx-auto group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>

                    <div className="text-center flex-1 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                          {index + 1}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

                        <p className="text-gray-600 mb-4">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Amazon Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to maximize your Amazon business success and achieve market
            dominance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                Start Your Success Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolios">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
