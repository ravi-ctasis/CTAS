
;
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Users,
  Award,
  Globe,
  ShoppingCart,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Zap,
  Shield,
  Database,
  Cloud,
  Code,
  Server,
  Activity,
  Package,
  Settings,
  Phone,
  Search,
} from "lucide-react";
import Link from "next/link";

const AmazonProductManagementPage = () => {
  const projectData = {
    title: "Amazon Product Management Automation Platform",
    category: "Marketplace Solutions",
    industry: "E-commerce",
    description:
      "All-in-one Amazon product management automation software with AI-driven repricing, smart inventory control, and seamless multi-marketplace integration for sellers and enterprises.",
    longDescription:
      "Our Amazon Product Management Automation Platform helps sellers scale effortlessly with AI-powered insights, dynamic pricing, and real-time stock optimization. It automates everything from product listing and SKU generation to order fulfillment and return handling, ensuring smooth operations across multiple Amazon marketplaces worldwide. With intelligent repricing, marketplace synchronization, and advanced analytics, sellers achieve faster growth, reduced costs, and improved sales performance.",

    image: "/Portfoliosimg/image-front.webp",
    technologies: [
      "Amazon SP API",
      "Node.js",
      "React",
      "MongoDB",
      "AWS",
      "TensorFlow",
      "Docker",
      "Kubernetes",
      "Elasticsearch",
      "RabbitMQ",
    ],
    link: "#",
    featured: true,
    stats: {
      views: "25k",
      likes: "3.8k",
      clients: "120+",
      revenue: "$2.5M+",
      efficiency: "85%",
      accuracy: "99.2%",
    },
    year: "2024",
    duration: "8 months",
    teamSize: "12",
    budget: "$280k",
    challenges: [
      "Data duplication across marketplaces",
      "Manual listing errors",
      "Pricing inefficiencies",
      "Cross-border complexity",
      "API rate limitations",
      "Multi-account chaos",
    ],
    solutions: [
      "Proprietary SKU generation with marketplace-specific fingerprinting for conflict-free product identifiers.",
      "Multi-layer validation and automated compliance pre-checks to ensure adherence to Amazon policies and regulatory standards.",
      "Algorithmic optimization leveraging real-time competitive intelligence for dynamic pricing and catalog adjustments.",
      "Mode-aware configurations that automatically adapt to Import/Export rules for seamless global operations.",
      "Predictive throttling and queue prioritization to handle high-volume inventory and listing synchronization efficiently.",
      "Intelligent caching strategies to overcome Amazon API rate limits, ensuring uninterrupted data processing.",
    ],

    results: [
      "Zero-Touch Automation – Eliminates manual effort from SKU creation to listing publication",
      "Global Marketplace Agility – Simplifies cross-border operations with automatic mode alignment",
      "Compliance by Design – Built-in validation reduces rejection risks",
      "Data-Driven Decisions – Real-time pricing analytics and actionable reporting",
      "Unmatched Scalability – Handles large catalogs and multi-account operations seamlessly",
    ],
    features: [
      {
        title: "AI-Powered Dynamic Repricing",
        description:
          "Automatically adjusts product prices based on competitor activity, demand trends, and profit margins.",
        icon: Settings,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Automated Product Lifecycle Management",
        description:
          "SKU Generation & Catalog Ingestion with Advanced Validation Engine and Seamless Listing Creation for FBA/FBM listings.",
        icon: Package,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Dynamic ASIN Management & Optimization",
        description:
          "Centralized ASIN Hub with Background Automation Powerhouse and Intelligent Pricing Analytics for real-time optimization.",
        icon: BarChart3,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Seamless Integration & Scalability",
        description:
          "Effortless Publishing with Robust Data Management and Enterprise-Ready Architecture optimized for high-volume operations.",
        icon: Cloud,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Advanced Validation & Compliance Layer",
        description:
          "Multi-Stage Verification with Dynamic Pricing Intelligence and Compliance Safeguards for regulatory compliance.",
        icon: Shield,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Automation Core",
        description:
          "Background Orchestration with Resilient API Management and Bulk Control Systems for data hygiene at scale.",
        icon: Zap,
        color: "from-teal-500 to-cyan-500",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "React", icon: Code, description: "Modern UI framework" },
          {
            name: "TypeScript",
            icon: Code,
            description: "Type-safe development",
          },
          {
            name: "Tailwind CSS",
            icon: Code,
            description: "Utility-first styling",
          },
        ],
      },
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", icon: Server, description: "Scalable runtime" },
          { name: "Express.js", icon: Server, description: "Web framework" },
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
        ],
      },
      {
        category: "Cloud & DevOps",
        technologies: [
          { name: "AWS", icon: Cloud, description: "Cloud infrastructure" },
          { name: "Docker", icon: Package, description: "Containerization" },
          { name: "Kubernetes", icon: Settings, description: "Orchestration" },
        ],
      },
      {
        category: "AI/ML",
        technologies: [
          {
            name: "TensorFlow",
            icon: Activity,
            description: "Machine learning",
          },
          { name: "Elasticsearch", icon: Search, description: "Search engine" },
        ],
      },
    ],

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-15">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce Automation
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Amazon Product Management
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Automation Platform
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                {projectData.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View Demo
                </Button> */}
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-8 py-3 rounded-xl font-semibold"
                  >
                    Get Free Quote
                  </Button>
                </Link>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-6 pt-">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.revenue}
                  </div>
                  <div className="text-sm text-gray-400">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.efficiency}
                  </div>
                  <div className="text-sm text-gray-400">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.accuracy}
                  </div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/amazon-product-management-automation-img.webp"
                  alt="Mobile Responsive Website Design"
                  width={400}
                  height={300}
                  className="
        object-fill relative w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {projectData.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Key Challenges
                    </h3>
                    <ul className="space-y-3">
                      {projectData.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Our Solutions
                    </h3>
                    <ul className="space-y-3">
                      {projectData.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Key Differentiators & Client Value
                </h2>
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Zero-Touch Automation */}
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Zero-Touch Automation
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Automates SKU creation, product listings, and publishing workflows, enabling hands-free operation of your Amazon business while reducing manual errors.
                    </p>
                  </Card>

                  {/* Global Marketplace Agility */}
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Global Marketplace Agility
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Seamlessly manage cross-border operations with automated import/export workflows, enabling smooth international expansion and consistent performance.
                    </p>
                  </Card>

                  {/* Compliance by Design */}
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Compliance by Design
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Built-in validation and audit trails minimize listing rejections, ensuring full compliance with Amazon policies and regulatory standards.
                    </p>
                  </Card>

                  {/* Data-Driven Decisions */}
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Data-Driven Decisions
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Real-time analytics and actionable reporting enable smarter pricing, inventory management, and strategic decisions to maximize profitability.
                    </p>
                  </Card>

                  {/* Unmatched Scalability */}
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Unmatched Scalability
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Efficiently handles large catalogs and multiple accounts, scaling seamlessly as your Amazon business grows without performance limitations.
                    </p>
                  </Card>

                  {/* Operational Efficiency */}
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Operational Efficiency
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Accelerates time-to-market and reduces manual workload, allowing teams to focus on strategic initiatives and business growth.
                    </p>
                  </Card>

                </div>
              </div>

            </div>

            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">
                        {projectData.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Team Size</div>
                      <div className="font-semibold text-gray-900">
                        {projectData.teamSize} members
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Status</div>
                      <div className="font-semibold text-green-600">
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.views}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Likes</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.likes}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Clients</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.clients}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functionality & Intelligence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Core Functionality & Intelligence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 1. Intelligent Master Data Configuration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Intelligent Master Data Configuration
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Centralized control hub defining critical parameters:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Mode of Operation:</strong> Import (Global → India)
                    / Export (India → Global)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Source & Destination Marketplaces</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Fulfillment Strategy:</strong> FBA / FBM
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>
                      Line of Business (LOB), Branch/Packaging specs
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Unique Default Codes</strong>
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Ensures data integrity and prevents duplication, providing a
                single source of truth. Adapts seamlessly to both Import and
                Export workflows, eliminating user error.
              </p>
            </div>

            {/* 2. Automated Product Lifecycle Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Automated Product Lifecycle Management
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Automated Listing & SKU Generation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Creates standardized product listings and SKUs to ensure consistency across Amazon marketplaces.
                    </li>
                    <li>• Retrieves essential catalog information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Advanced Validation Engine
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Multi-layered checks: restrictions, pricing feasibility,
                      compliance
                    </li>
                    <li>• Ensures error-free listings before going live</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Seamless Listing Creation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatically generates FBA/FBM listings</li>
                    <li>
                      • Ready for direct integration with Amazon Seller Central
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Dynamic ASIN Management & Optimization */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Dynamic ASIN Management & Optimization
                </h3>
              </div>

              <div className="space-y-6">
                {/* Centralized ASIN Hub */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Centralized ASIN Hub
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Complete visibility of all uploaded ASINs, including pending or under review items</li>
                    <li>Efficient bulk uploads with pre-configured master settings for faster onboarding</li>
                  </ul>
                </div>

                {/* Background Automation */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Background Automation Powerhouse
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Cron jobs fetch real-time catalog data and monitor competitive pricing</li>
                    <li>AI-powered pricing analytics for dynamic optimization</li>
                  </ul>
                </div>

                {/* User Control & Compliance */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    User Control & Compliance
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Bulk actions to delete or ban non-compliant items quickly</li>
                    <li>Ensures data hygiene and adherence to Amazon regulatory standards</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Seamless Integration & Scalability */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Seamless Integration & Scalability
                </h3>
              </div>

              <div className="space-y-6">
                {/* Effortless Publishing */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Effortless Publishing
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Validated ASINs automatically pushed to the Master Product List</li>
                    <li>Product offers published directly to Amazon Seller Central with minimal manual effort</li>
                  </ul>
                </div>

                {/* Robust Data Management */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Robust Data Management
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Comprehensive reporting and real-time catalog synchronization</li>
                    <li>Secure FTP transfers for reliable data handling</li>
                  </ul>
                </div>

                {/* Enterprise-Ready Architecture */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Enterprise-Ready Architecture
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Optimized for high-volume operations and large catalogs</li>
                    <li>Handles Amazon API rate limits efficiently</li>
                    <li>Supports concurrent execution across multiple seller accounts</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Critical System Components */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Critical System Components
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1. Intelligent Master Data Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Intelligent Master Data Engine
                </h3>
              </div>

              <div className="space-y-6">
                {/* Core Foundation */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Core Foundation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Centralized configuration hub for operational modes (Import/Export), marketplace routing, fulfillment logic (FBA/FBM), and line-of-business taxonomy to ensure consistent product management.
                  </p>
                </div>

                {/* Uniqueness Protocol */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Uniqueness Protocol
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Proprietary algorithms automatically generate conflict-resistant SKUs, eliminating duplication and ensuring data integrity at scale.
                  </p>
                </div>

                {/* Mode-Aware Workflows */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Mode-Aware Workflows
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Dynamically adapts configurations for Import (Global → India) or Export (India → Global), preventing cross-contamination and ensuring seamless marketplace operations.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Advanced Validation & Compliance Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Advanced Validation & Compliance Layer
                </h3>
              </div>

              <div className="space-y-6">
                {/* Multi-Stage Verification */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Multi-Stage Verification
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Real-time validation checks ensure Amazon policy adherence, catalog accuracy, pricing viability, and marketplace-specific restrictions are consistently met.
                  </p>
                </div>

                {/* Dynamic Pricing Intelligence */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Dynamic Pricing Intelligence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automated calculation of minimum, maximum, and optimal prices using competitive data feeds combined with configurable business rule engines for intelligent pricing decisions.
                  </p>
                </div>

                {/* Compliance Safeguards */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Compliance Safeguards
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Built-in audit trails ensure regulatory compliance (GST, customs, etc.) and strict adherence to Amazon Terms of Service, protecting your listings and operations.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Automation Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Automation Core
                </h3>
              </div>

              <div className="space-y-6">
                {/* Background Orchestration */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Background Orchestration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cron-driven pipelines manage ASIN ingestion, catalog retrieval, and dynamic price optimization, operating continuously 24/7 without manual intervention.
                  </p>
                </div>

                {/* Resilient API Management */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Resilient API Management
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Intelligent throttling and queue management gracefully handle Amazon API rate limits across multiple seller accounts, ensuring uninterrupted operations.
                  </p>
                </div>

                {/* Bulk Control Systems */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Bulk Control Systems
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Granular tools allow bulk ASIN banning, deletion, and lifecycle management, maintaining data hygiene and operational integrity at scale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies to ensure scalability,
              performance, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectData.techStack.map((category, index) => (
              <Card
                key={index}
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <tech.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {tech.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {tech.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Amazon Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our automation platform can revolutionize
            your product management and boost your profits.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              View Demo
            </Button> */}
            <Link href="/contact-us">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />

    </div>
  );
};

export default AmazonProductManagementPage;
