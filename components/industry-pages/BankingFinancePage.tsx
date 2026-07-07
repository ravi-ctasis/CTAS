"use client";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { PageShell, PageHero, PageCTA, fraunces } from "@/components/page-design";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CreditCard,
  Building,
  Users,
  BarChart3,
  CheckCircle,
  Code,
  Database,
  Monitor,
  Server,
  Cpu,
  Network,
  ArrowRight,
  Star,
  Wallet,
  HardDrive,
  DollarSign,
  Globe,
  Cloud,
  Clock,
  ArrowUpRight,
  Trophy,
} from "lucide-react";

import { useMemo } from "react";
import Link from "next/link";

const BankingFinancePage = () => {
  // Memoize data to prevent unnecessary re-renders
  const bankingServices = useMemo(
    () => [
      {
        icon: Shield,
        title: "Secure Banking Platforms",
        description:
          "Enterprise-grade banking solutions with end-to-end encryption and compliance with financial regulations.",
        features: ["PCI DSS Compliance", "256-bit Encryption", "Real-time Monitoring"],
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        icon: CreditCard,
        title: "Payment Gateway Integration",
        description:
          "Seamless payment processing with support for multiple payment methods and currencies.",
        features: ["Multi-currency", "Fraud Detection", "Instant Settlement"],
        gradient: "from-green-600 to-emerald-600",
      },
      {
        icon: BarChart3,
        title: "Financial Analytics",
        description:
          "Advanced analytics and reporting tools for financial data visualization and insights.",
        features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports"],
        gradient: "from-purple-600 to-pink-600",
      },
      {
        icon: Database,
        title: "Compliance Management",
        description: "Automated compliance monitoring and reporting for regulatory requirements.",
        features: ["KYC/AML", "Audit Trails", "Regulatory Reporting"],
        gradient: "from-red-600 to-orange-600",
      },
      {
        icon: Users,
        title: "Customer Management",
        description: "Comprehensive customer relationship management for banking operations.",
        features: ["Account Management", "Customer Support", "Self-service Portal"],
        gradient: "from-teal-600 to-cyan-600",
      },
      {
        icon: Building,
        title: "Core Banking Systems",
        description: "Modern core banking infrastructure with scalability and reliability.",
        features: ["Account Processing", "Transaction Management", "Multi-branch Support"],
        gradient: "from-indigo-600 to-purple-600",
      },
    ],
    []
  );

  const bankingTechnologies = useMemo(
    () => [
      { name: "Java", icon: Code, category: "Backend" },
      { name: "Spring Boot", icon: Server, category: "Framework" },
      { name: "Oracle", icon: Database, category: "Database" },
      { name: "React", icon: Monitor, category: "Frontend" },
      { name: "Node.js", icon: Cpu, category: "Runtime" },
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: HardDrive, category: "Containerization" },
      { name: "Kubernetes", icon: Network, category: "Orchestration" },
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "Angular", icon: Monitor, category: "Frontend" },
      { name: "Python", icon: Code, category: "Backend" },
    ],
    []
  );

  const bankingCaseStudies = useMemo(
    () => [
      {
        title: "Digital Banking Transformation",
        company: "Regional Bank",
        industry: "Banking",
        description:
          "Complete digital transformation of traditional banking operations with modern technology stack.",
        results: {
          efficiency: "85%",
          costReduction: "40%",
          customerSatisfaction: "95%",
          timeToMarket: "60%",
        },
        technologies: ["Java", "React", "AWS", "Docker"],
        image: "/banking-case-1.jpg",
      },
      {
        title: "Payment Gateway Integration",
        company: "FinTech Startup",
        industry: "Financial Services",
        description:
          "Seamless payment processing platform with multi-currency support and fraud detection.",
        results: {
          efficiency: "90%",
          costReduction: "35%",
          customerSatisfaction: "98%",
          timeToMarket: "70%",
        },
        technologies: ["Node.js", "React", "MongoDB", "Stripe"],
        image: "/banking-case-2.jpg",
      },
      {
        title: "Compliance Management System",
        company: "International Bank",
        industry: "Banking",
        description:
          "Automated compliance monitoring and reporting system for regulatory requirements.",
        results: {
          efficiency: "80%",
          costReduction: "50%",
          customerSatisfaction: "92%",
          timeToMarket: "45%",
        },
        technologies: ["Java", "Angular", "Oracle", "AWS"],
        image: "/banking-case-3.jpg",
      },
    ],
    []
  );

  const bankingStats = useMemo(
    () => [
      { label: "Banks Served", value: "10+", icon: Building },
      { label: "Security Certifications", value: "15+", icon: Shield },
      { label: "Regulatory Compliance", value: "100%", icon: CheckCircle },
      { label: "Uptime Guarantee", value: "99.9%", icon: Clock },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Banking & Finance Software Development",
    description:
      "Secure banking and finance software development including fintech solutions, payment processing, financial analytics, and digital banking platforms.",
    provider: {
      "@type": "Organization",
      name: "Ctas Info Services LLP",
      url: "https://www.ctasis.com",
    },
    areaServed: "Worldwide",
    serviceType: "Banking & Fintech Software Development",
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Banking & Finance Solutions"
          badge="Enterprise Banking Solutions"
          title="Next-Generation"
          highlight="Banking Technology"
          description="Revolutionizing financial services with AI-powered solutions, blockchain integration, and cloud-native architecture for the digital banking era."
          stats={bankingStats.map((s) => ({
            number: s.value,
            label: s.label,
            icon: s.icon,
          }))}
          primaryCta={{ label: "Start Free Consultation", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />

        {/* Services Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium border border-emerald-200 mb-6">
                <Star className="w-5 h-5 mr-2" />
                Banking Technology Solutions
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Enterprise-Grade
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                  Financial Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge banking solutions designed for the digital age, featuring AI-powered
                analytics, blockchain security, and cloud-native architecture.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {bankingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white rounded-3xl border border-gray-200 hover:border-emerald-300 shadow-lg hover:shadow-emerald-100/50"
                  >
                    <div className="p-8">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-4">
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
                            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className="pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto text-emerald-600 hover:text-emerald-700 font-semibold group/btn cursor-pointer"
                        >
                          Explore Solution
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-3xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8">
                {/* Header */}
                <div className="space-y-3 lg:space-y-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                    Unique Features
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight">
                    Advanced Features for
                    <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                      Banking Platforms
                    </span>
                  </h2>
                </div>

                {/* Features List */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Feature 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors">
                        Digital Wallet Integration
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Seamless integration with multiple digital wallets, ensuring secure and
                        straightforward transactions across all banking operations with real-time
                        synchronization and multi-device support.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors">
                        Real-Time Analytics
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Advanced analytics dashboard providing real-time insights into transactions,
                        user behavior, and financial performance metrics with predictive modeling
                        and customizable reports.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">
                        Security & Compliance
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Bank-grade security protocols with automated compliance monitoring and
                        regulatory reporting for all financial transactions, ensuring full adherence
                        to international standards.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors">
                        Multi-Currency Support
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Support for multiple currencies and payment methods, enabling global banking
                        operations with localized user experiences and real-time exchange rate
                        calculations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Mobile App Mockup */}
              <div className="relative mt-8 lg:mt-0">
                {/* Mobile Phone Frame */}
                <div className="relative mx-auto w-64 sm:w-72 lg:w-80 h-[480px] sm:h-[540px] lg:h-[600px] bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-1 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="text-center py-4">
                      <h3 className="text-white text-lg font-bold">Digital Banking</h3>
                    </div>

                    {/* Main Content */}
                    <div className="px-6 space-y-6">
                      {/* Account Balance Card */}
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm opacity-80">Total Balance</span>
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <DollarSign className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold mb-2">$24,850.00</div>
                        <div className="text-sm opacity-80">+12.5% from last month</div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-800 rounded-xl p-4 text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white text-xs">Send</span>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 text-center">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white text-xs">Receive</span>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <BarChart3 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white text-xs">Invest</span>
                        </div>
                      </div>

                      {/* Recent Transactions */}
                      <div className="space-y-3">
                        <h4 className="text-white font-semibold">Recent Transactions</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <ArrowUpRight className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-white text-sm">Netflix</div>
                                <div className="text-gray-400 text-xs">Entertainment</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-white text-sm">-$15.99</div>
                              <div className="text-gray-400 text-xs">Today</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <ArrowRight className="w-3 h-3 text-white" />
                              </div>
                              <div>
                                <div className="text-white text-sm">Salary</div>
                                <div className="text-gray-400 text-xs">Income</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-white text-sm">+$3,500.00</div>
                              <div className="text-gray-400 text-xs">Yesterday</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 px-6 py-3 rounded-b-4xl">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-purple-500 rounded-lg mx-auto mb-1"></div>
                          <span className="text-white text-xs">Home</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gray-600 rounded-lg mx-auto mb-1"></div>
                          <span className="text-gray-400 text-xs">Cards</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gray-600 rounded-lg mx-auto mb-1"></div>
                          <span className="text-gray-400 text-xs">Invest</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-gray-600 rounded-lg mx-auto mb-1"></div>
                          <span className="text-gray-400 text-xs">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Banking Technology
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks that power modern banking solutions.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {bankingTechnologies.map((tech, index) => {
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

        {/* Case Studies Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Banking Success
                <span className="block text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
                  Stories
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real-world implementations that have transformed banking operations and customer
                experiences with measurable results.
              </p>
            </div>

            {/* Case Studies Big Style */}
            <div className="space-y-8">
              {bankingCaseStudies.map((study, index) => (
                <div key={index}>
                  <div className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                      {/* Left Content */}
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold ${index % 2 === 0
                                ? "bg-indigo-100 text-indigo-700"
                                : "bg-purple-100 text-purple-700"
                                }`}
                            >
                              {study.industry}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-lg text-indigo-600 font-semibold">{study.company}</p>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">{study.description}</p>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium border ${index % 2 === 0
                                  ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                  : "bg-purple-50 text-purple-700 border-purple-200"
                                  }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Results */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-gray-900 text-center lg:text-left">
                          Key Results
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div
                              key={key}
                              className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${index % 2 === 0
                                ? "bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200"
                                : "bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
                                }`}
                            >
                              <div
                                className={`text-2xl lg:text-3xl font-black mb-2 ${index % 2 === 0 ? "text-indigo-600" : "text-purple-600"
                                  }`}
                              >
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 font-medium capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        {/* <div className="text-center lg:text-left">
                          <a href="/case-studies">
                            <button
                              className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                                index % 2 === 0
                                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                              }`}
                            >
                              View Full Case Study
                              <ArrowUpRight className="w-4 h-4 ml-2" />
                            </button>
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div
                      className={`w-full h-full rounded-full ${index % 2 === 0 ? "bg-indigo-500" : "bg-purple-500"
                        }`}
                    ></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
                    <div
                      className={`w-full h-full rounded-full ${index % 2 === 0 ? "bg-purple-500" : "bg-pink-500"
                        }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <PageCTA
          title="Ready to Transform Your Banking Operations?"
          description="Let's discuss how our secure, compliant, and innovative solutions can drive your financial institution's digital transformation."
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

export default BankingFinancePage;
