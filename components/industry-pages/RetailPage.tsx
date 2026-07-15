"use client";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { PageShell, PageHero, PageCTA } from "@/components/page-design";
import {} from "@/components/ui/button";

import {
  Shield,
  Users,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Clock,
  ShoppingCart,
  Store,
  Package,
  Truck,
  CreditCard,
  Heart,
  Code,
  Database,
  Server,
  Network,
  Cloud,
  HardDrive,
  Monitor,
  Star,
} from "lucide-react";
import { useMemo } from "react";

const RetailPage = () => {
  // Memoize data to prevent unnecessary re-renders
  const retailServices = useMemo(
    () => [
      {
        icon: ShoppingCart,
        title: "E-commerce Platforms",
        description:
          "Modern e-commerce solutions with seamless shopping experiences, secure payments, and inventory management.",
        features: ["Multi-channel Sales", "Payment Integration", "Inventory Management"],
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        icon: Store,
        title: "POS Systems",
        description:
          "Advanced point-of-sale systems with real-time inventory tracking and customer management.",
        features: ["Real-time Sync", "Customer Data", "Sales Analytics"],
        gradient: "from-indigo-600 to-blue-600",
      },
      {
        icon: BarChart3,
        title: "Retail Analytics",
        description:
          "Comprehensive analytics and reporting tools for retail performance and customer insights.",
        features: ["Sales Analytics", "Customer Insights", "Inventory Reports"],
        gradient: "from-blue-600 to-cyan-600",
      },
      {
        icon: Users,
        title: "Customer Management",
        description:
          "Complete customer relationship management with loyalty programs and personalized experiences.",
        features: ["Loyalty Programs", "Personalization", "Customer Support"],
        gradient: "from-cyan-600 to-blue-600",
      },
      {
        icon: Package,
        title: "Inventory Management",
        description:
          "Intelligent inventory management with automated reordering and demand forecasting.",
        features: ["Auto Reordering", "Demand Forecasting", "Multi-location"],
        gradient: "from-indigo-600 to-purple-600",
      },
      {
        icon: Truck,
        title: "Supply Chain",
        description:
          "End-to-end supply chain management with tracking and optimization capabilities.",
        features: ["Order Tracking", "Supplier Management", "Logistics Optimization"],
        gradient: "from-purple-600 to-indigo-600",
      },
    ],
    []
  );

  const retailTechnologies = useMemo(
    () => [
      { name: "React", icon: Monitor, category: "Frontend" },
      { name: "Node.js", icon: Server, category: "Backend" },
      { name: "MongoDB", icon: Database, category: "Database" },
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: HardDrive, category: "Containerization" },
      { name: "Stripe", icon: CreditCard, category: "Payments" },
      { name: "Shopify", icon: ShoppingCart, category: "E-commerce" },
      { name: "Kubernetes", icon: Network, category: "Orchestration" },
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "Angular", icon: Monitor, category: "Frontend" },
      { name: "Python", icon: Code, category: "Backend" },
    ],
    []
  );

  const retailStats = useMemo(
    () => [
      { label: "Retail Clients", value: "200+", icon: Store },
      { label: "Transactions/Day", value: "50K+", icon: ShoppingCart },
      { label: "Customer Satisfaction", value: "96%", icon: Heart },
      { label: "Uptime Guarantee", value: "99.9%", icon: Clock },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Retail Software Development",
    description: "Next-generation retail technology including e-commerce platforms, POS systems, and omnichannel solutions.",
    provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
    areaServed: "Worldwide",
    serviceType: "Retail Software Development",
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Retail Technology Solutions"
          badge="Modern Retail Solutions"
          title="Next-Generation"
          highlight="Retail Technology"
          description="Revolutionizing retail with AI-powered solutions, omnichannel experiences, and cloud-native architecture for the digital retail era."
          stats={retailStats.map((s) => ({ number: s.value, label: s.label, icon: s.icon }))}
          primaryCta={{ label: "Start Transformation", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />
{/* Overview Section */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-[1584px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200 mb-6">
                <Star className="w-5 h-5 mr-2" />
                Retail Overview
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Modern
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Retail Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end retail technology solutions designed to drive digital transformation,
                improve customer experience, and increase sales across all channels.
              </p>
            </div>

            {/* Overview Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Overview Item 1 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <ShoppingCart className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                        Omnichannel Retail
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Seamless shopping experiences across online, mobile, and physical stores
                        with unified inventory and customer data management.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overview Item 2 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">
                        Customer Experience
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Personalized shopping experiences with AI-powered recommendations, loyalty
                        programs, and seamless customer service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overview Item 3 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                        Retail Analytics
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Advanced analytics and insights for sales performance, customer behavior,
                        and inventory optimization across all retail channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Store className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-blue-600 mb-1">300+</div>
                        <div className="text-sm font-semibold text-gray-700">Retail Clients</div>
                      </div>
                    </div>
                    <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-indigo-600 mb-1">150%</div>
                        <div className="text-sm font-semibold text-gray-700">Sales Growth</div>
                      </div>
                    </div>
                    <div className="h-2 bg-indigo-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-cyan-600 mb-1">96%</div>
                        <div className="text-sm font-semibold text-gray-700">
                          Customer Satisfaction
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-cyan-200 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-600 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <ShoppingCart className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-purple-600 mb-1">50K+</div>
                        <div className="text-sm font-semibold text-gray-700">
                          Daily Transactions
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-[1584px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200 mb-6">
                <Star className="w-5 h-5 mr-2" />
                Retail Technology Solutions
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Comprehensive
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Retail Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end retail solutions designed to drive digital transformation, improve
                customer experience, and increase sales across all channels.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {retailServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white rounded-3xl border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-blue-100/50"
                  >
                    <div className="p-8">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                        {service.description}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-8 lg:py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-[1584px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Key Features
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Retail Platform
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text">
                  Key Features
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the powerful features that make our retail solutions the preferred choice
                for leading retailers worldwide.
              </p>
            </div>

            {/* Key Features List Style */}
            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Shield className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        Secure Payments
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        PCI-compliant payment processing with fraud protection and secure
                        transactions.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-blue-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">PCI Compliance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Fraud Protection</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Multi-Payment</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Instant Processing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <BarChart3 className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                        Real-Time Analytics
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Live dashboards with sales analytics and customer insights.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-indigo-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Live Dashboards</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Sales Analytics</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Customer Insights</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Inventory Reports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Users className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
                        Customer Management
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Complete customer profiles with loyalty programs and personalized
                        experiences.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-cyan-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Loyalty Programs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Personalization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Customer Support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Rewards System</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12"></div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-8 lg:py-12 bg-white">
          <div className="max-w-[1584px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Retail Technology
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks that power modern retail solutions.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {retailTechnologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <div className="text-center">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <PageCTA
          title="Ready to Transform Your Retail Operations?"
          description="Let's discuss how our modern retail solutions can drive your business growth and enhance customer experiences across all channels."
          primaryLabel="Start Free Consultation"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default RetailPage;
