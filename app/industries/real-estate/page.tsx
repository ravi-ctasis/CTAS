"use client";

;
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

import {
  Shield,
  Users,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Globe,
  Smartphone,
  Database,
  Brain,
  Cloud,
  Home,
  MapPin,
  Search,
  Calculator,
  FileText,
  Camera,
  ChartBar,
  CreditCard,
  ArrowRight,
  Star,
  Building,
  Trophy,
  Map as MapIcon,
} from "lucide-react";

import { useMemo } from "react";
import Link from "next/link";

const RealEstatePage = () => {
  // Memoize data to prevent unnecessary re-renders
  const realEstateServices = useMemo(
    () => [
      {
        icon: Home,
        title: "Property Management Platforms",
        description:
          "Comprehensive property management solutions with tenant portal, maintenance tracking, and financial reporting.",
        features: ["Tenant Portal", "Maintenance Tracking", "Financial Reporting"],
        gradient: "from-blue-600 to-indigo-600",
        popular: true,
      },
      {
        icon: Search,
        title: "Property Search & Listing",
        description:
          "Advanced property search platforms with AI-powered recommendations and virtual tour integration.",
        features: ["AI Recommendations", "Virtual Tours", "Advanced Filters"],
        gradient: "from-indigo-600 to-purple-600",
        popular: false,
      },
      {
        icon: Calculator,
        title: "Investment Analysis Tools",
        description:
          "Real estate investment calculators and analysis tools for ROI calculations and market insights.",
        features: ["ROI Calculator", "Market Analysis", "Investment Tracking"],
        gradient: "from-purple-600 to-blue-600",
        popular: false,
      },
      {
        icon: BarChart3,
        title: "Market Analytics Dashboard",
        description:
          "Real-time market analytics and trend analysis for informed real estate decisions.",
        features: ["Market Trends", "Price Analysis", "Demand Forecasting"],
        gradient: "from-blue-600 to-cyan-600",
        popular: false,
      },
      {
        icon: Users,
        title: "CRM & Lead Management",
        description:
          "Customer relationship management systems designed for real estate professionals.",
        features: ["Lead Tracking", "Client Database", "Follow-up Automation"],
        gradient: "from-indigo-600 to-blue-600",
        popular: false,
      },
      {
        icon: FileText,
        title: "Document Management",
        description:
          "Secure document management and e-signature solutions for real estate transactions.",
        features: ["E-Signatures", "Document Storage", "Compliance Tracking"],
        gradient: "from-blue-600 to-teal-600",
        popular: false,
      },
    ],
    []
  );

  const realEstateTechnologies = useMemo(
    () => [
      {
        icon: Globe,
        name: "Web Platforms",
        category: "Frontend",
      },
      {
        icon: Smartphone,
        name: "Mobile Apps",
        category: "Mobile",
      },
      {
        icon: Database,
        name: "Property Database",
        category: "Backend",
      },
      {
        icon: MapIcon,
        name: "GIS Mapping",
        category: "Location",
      },
      {
        icon: Camera,
        name: "VR/AR",
        category: "Visualization",
      },
      {
        icon: Shield,
        name: "Blockchain",
        category: "Security",
      },
      {
        icon: Brain,
        name: "AI/ML",
        category: "Intelligence",
      },
      {
        icon: Cloud,
        name: "Cloud Services",
        category: "Infrastructure",
      },
      {
        icon: BarChart3,
        name: "Analytics",
        category: "Data",
      },
      {
        icon: Users,
        name: "CRM Systems",
        category: "Management",
      },
      {
        icon: FileText,
        name: "E-Signatures",
        category: "Documents",
      },
      {
        icon: CreditCard,
        name: "Payment Gateways",
        category: "Finance",
      },
    ],
    []
  );

  const realEstateCaseStudies = useMemo(
    () => [
      {
        title: "Digital Property Marketplace",
        company: "UrbanReal Estate",
        industry: "Property Platform",
        description:
          "Developed a comprehensive digital marketplace connecting buyers, sellers, and agents with advanced search capabilities, virtual tours, and secure transaction processing.",
        results: {
          "User Growth": "300%",
          "Transaction Volume": "$50M+",
          "Agent Efficiency": "40%",
          "Customer Satisfaction": "95%",
        },
        technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Google Maps API"],
      },
      {
        title: "Property Management System",
        company: "RentFlow Solutions",
        industry: "Property Management",
        description:
          "Built an end-to-end property management platform with tenant portal, maintenance tracking, rent collection, and financial reporting capabilities.",
        results: {
          "Properties Managed": "10,000+",
          "Tenant Retention": "85%",
          "Maintenance Response": "2hrs",
          "Revenue Increase": "25%",
        },
        technologies: ["Vue.js", "Python", "MongoDB", "Firebase", "Twilio", "QuickBooks API"],
      },
      {
        title: "Investment Analysis Platform",
        company: "InvestEstate Pro",
        industry: "Investment Tools",
        description:
          "Created an advanced investment analysis platform with ROI calculators, market trend analysis, and portfolio management tools for real estate investors.",
        results: {
          "Investment Analyzed": "$200M+",
          "User Accuracy": "92%",
          "Market Coverage": "50+ Cities",
          "ROI Improvement": "15%",
        },
        technologies: ["Angular", "Java", "MySQL", "Azure", "Yahoo Finance API", "Tableau"],
      },
    ],
    []
  );

  const realEstateStats = useMemo(
    () => [
      {
        icon: Home,
        value: "50+",
        label: "Properties Managed",
      },
      {
        icon: Users,
        value: "10+",
        label: "Active Users",
      },
      {
        icon: Building,
        value: "10+",
        label: "Properties Managed",
      },
      {
        icon: TrendingUp,
        value: "95%",
        label: "Client Satisfaction",
      },
    ],
    []
  );

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-12 lg:py-20">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100/20 backdrop-blur-sm border border-blue-300/30 text-blue-100 text-sm font-medium mb-8 shadow-lg">
                <Home className="w-5 h-5 mr-3" />
                Real Estate Technology Solutions
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-tight">
                Smart Real Estate
                <span className="block text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text">
                  Technology
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
                Revolutionizing real estate with AI-powered platforms, virtual tours, and digital
                transaction solutions for the modern property market.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-110 border-0"
                  >
                    Start Transformation
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-300 text-blue-100 hover:bg-blue-600 hover:text-white px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {realEstateStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="w-10 h-10 text-blue-300 mx-auto mb-3" />
                      <div className="text-3xl lg:text-4xl font-black text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
          aria-labelledby="real-estate-services"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200 mb-6">
                <Star className="w-5 h-5 mr-2" aria-hidden="true" />
                Real Estate Technology Solutions
              </div>
              <h2
                id="real-estate-services"
                className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
              >
                Comprehensive Real Estate
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From property management to investment analysis, we provide end-to-end technology
                solutions for the real estate industry.
              </p>
            </div>

            {/* Services Left Content Right Image Layout */}
            <div className="space-y-16">
              {realEstateServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={index}
                    className="group relative"
                    aria-labelledby={`service-title-${index}`}
                  >
                    {/* Service Container */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden">
                      <div className="flex flex-col lg:flex-row">
                        {/* Left Side - Content */}
                        <div className="flex-1 p-8">
                          {/* Header */}
                          <div className="flex items-start space-x-6 mb-8">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md group-hover:shadow-lg transition-all duration-300">
                                <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                              </div>
                            </div>

                            {/* Title and Badge */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-3">
                                <h3
                                  id={`service-title-${index}`}
                                  className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                                >
                                  {service.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                              >
                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="w-4 h-4 text-white" aria-hidden="true" />
                                </div>
                                <span className="text-gray-700 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="lg:w-80 lg:flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                              <Icon className="w-16 h-16 text-white" aria-hidden="true" />
                            </div>
                            <div className="space-y-2">
                              <div className="w-16 h-4 bg-blue-200 rounded-full mx-auto"></div>
                              <div className="w-12 h-4 bg-blue-100 rounded-full mx-auto"></div>
                              <div className="w-20 h-4 bg-indigo-200 rounded-full mx-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Line */}
                    {index < realEstateServices.length - 1 && (
                      <div className="absolute left-8 top-full w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                {/* Header */}
                <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                    Advanced Features
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight">
                    Next-Generation
                    <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                      Real Estate Tech
                    </span>
                  </h2>
                </div>

                {/* Features List */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Feature 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                        Location Intelligence
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Advanced mapping and location-based services with neighborhood insights and
                        proximity analysis for informed property decisions.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors">
                        Virtual Tours & 3D
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Immersive virtual tour experiences with 3D modeling and interactive property
                        showcases for remote viewing.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <ChartBar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                        Market Analytics
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Comprehensive market analysis tools with price trends, demand forecasting,
                        and investment insights for data-driven decisions.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-cyan-600 transition-colors">
                        Secure Transactions
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Blockchain-powered secure transaction systems with smart contracts and
                        escrow services for safe property deals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Property Search Mockup */}
              <div className="relative mt-8 lg:mt-0 order-1 lg:order-2">
                {/* Property Search Interface */}
                <div className="relative mx-auto w-64 sm:w-72 lg:w-80 xl:w-96 h-[480px] sm:h-[540px] lg:h-[600px] xl:h-[640px] bg-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl border-4 sm:border-6 lg:border-8 border-gray-900">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold">Property Search</h3>
                        <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Search Filters */}
                    <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border">
                        <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Location
                        </div>
                        <div className="text-xs text-gray-500">Downtown, City Center</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border">
                        <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Price Range
                        </div>
                        <div className="text-xs text-gray-500">$200K - $500K</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border">
                        <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Property Type
                        </div>
                        <div className="text-xs text-gray-500">Apartment, Condo</div>
                      </div>
                    </div>

                    {/* Property Results */}
                    <div className="px-3 sm:px-4 space-y-2 sm:space-y-3">
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-blue-200">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Home className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs sm:text-sm font-bold text-gray-900">
                              Modern Apartment
                            </div>
                            <div className="text-xs text-gray-500">2BR • 2BA • 1,200 sqft</div>
                            <div className="text-xs sm:text-sm font-bold text-blue-600">
                              $350,000
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs sm:text-sm font-bold text-gray-900">
                              Luxury Condo
                            </div>
                            <div className="text-xs text-gray-500">3BR • 2BA • 1,500 sqft</div>
                            <div className="text-xs sm:text-sm font-bold text-blue-600">
                              $450,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between p-3 sm:p-4 gap-2">
                      <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg">
                        Previous
                      </button>
                      <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
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
                Real Estate
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Technology Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies powering modern real estate solutions.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {realEstateTechnologies.map((tech, index) => {
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
        <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Real Estate Success
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text">
                  Stories
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real-world implementations that have transformed real estate operations and customer
                experiences with measurable results.
              </p>
            </div>

            {/* Case Studies Big Style */}
            <div className="space-y-8">
              {realEstateCaseStudies.map((study, index) => (
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
                                ? "bg-blue-100 text-blue-700"
                                : "bg-indigo-100 text-indigo-700"
                                }`}
                            >
                              {study.industry}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold">{study.company}</p>
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
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-indigo-50 text-indigo-700 border-indigo-200"
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
                                ? "bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
                                : "bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200"
                                }`}
                            >
                              <div
                                className={`text-2xl lg:text-3xl font-black mb-2 ${index % 2 === 0 ? "text-blue-600" : "text-indigo-600"
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
                                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
                Real Estate Business?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s build the next generation of real estate technology solutions together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-110 border-0"
                >
                  Start Your Project
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 text-blue-100 hover:bg-blue-600 hover:text-white px-10 py-4 text-lg font-bold rounded-full transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </>
  );
};

export default RealEstatePage;
