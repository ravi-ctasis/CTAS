
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
  ShoppingCart,
  CheckCircle,
  TrendingUp,
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
  Truck,
} from "lucide-react";
import Link from "next/link";

const AmazonSKUManagementPage = () => {

  const projectData = {
    title: "Automated SKU & Identifier Framework",
    category: "E-commerce Automation",
    industry: "Amazon FBA/FBM & Multi-Marketplace",
    description:
      "A unified system for generating global Master SKUs and managing marketplace identifiers (ASIN, EAN, UPC) to ensure consistency across Amazon, Flipkart, Walmart, and more.",
    longDescription:
      "Managing products across multiple marketplaces worldwide (Amazon, Flipkart, Walmart, Cdiscount, Shopify, etc.) requires consistent and standardized identifiers. Each platform uses different identification systems (ASIN, EAN, UPC, ISBN, GTIN, etc.), and without a central management process, product duplication, listing errors, and data mismatches are inevitable. Our system generates globally unique Master SKUs, maps market-specific identifiers, and synchronizes stock, price, and order data, becoming the backbone of global catalog management.",
    image: "/automatic-sku-generation-img.webp",
    technologies: ["Amazon SP API", "Angular", "NodeJs", "MongoDB", "Docker"],
    link: "#",
    featured: true,
    stats: {
      views: "20k",
      likes: "2.5k",
      clients: "100+",
      revenue: "$1.8M+",
      accuracy: "99%",
      skus: "10M+",
    },
    year: "2025",
    duration: "8 months",
    teamSize: "12",
    budget: "$400k",
    challenges: [
      "Diverse rules and requirements across global marketplaces",
      "Risk of duplicate or conflicting product identifiers",
      "Handling millions of SKUs efficiently at scale",
      "Ensuring compliance with marketplace standards (ASIN, UPC, EAN, etc.)",
      "Managing complex bundles, variations, and product sets",
    ],
    solutions: [
      "Centralized SKU engine adapting dynamically to marketplace rules",
      "Generation of unique Master SKUs with serial numbers and validation checks",
      "Optimized batch processing and database indexing for high-volume operations",
      "Automated validation for Amazon ASIN and GS1 UPC compliance",
      "Bundle and variant-specific SKU mapping to prevent errors and duplication",
    ],

    results: [
      "Global Consistency – Unified Master SKU worldwide",
      "Error Prevention – No duplicate or mismatched identifiers",
      "Enterprise-Scale Performance – Handles millions of SKUs",
      "Marketplace Compliance – Matches platform requirements",
    ],
    features: [
      {
        title: "Master SKU Generation",
        description:
          "Generates globally unique Master SKUs using a custom formula with business-specific codes.",
        icon: Zap,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Identifier Mapping",
        description:
          "Automatically assigns or maps ASINs, EANs, UPCs, and ISBNs per marketplace rules.",
        icon: Package,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Serial Number Assignment",
        description:
          "Ties each Master SKU to a unique 10-digit serial number for traceability.",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Database Storage",
        description:
          "Stores SKUs and identifiers in a relational database with uniqueness constraints.",
        icon: Database,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Sync with OMS",
        description:
          "Synchronizes stock, price, lead time, and expiry with Order Management System.",
        icon: Truck,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Reporting & Export",
        description:
          "Provides dynamic UI and CSV/Excel exports for SKU mappings and audits.",
        icon: Shield,
        color: "from-teal-500 to-cyan-500",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "Angular", icon: Code, description: "Dynamic UI framework" },
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
          // { name: "Redis", icon: Database, description: "Caching layer" },
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
        category: "Data & Analytics",
        technologies: [
          { name: "Elasticsearch", icon: Search, description: "Search engine" },
          { name: "RabbitMQ", icon: Activity, description: "Message broker" },
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
                <Zap className="w-4 h-4 mr-2" />
                Global SKU Management Solution
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Automated SKU &
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Identifier Framework
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
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.revenue}
                  </div>
                  <div className="text-sm text-gray-400">Revenue Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.accuracy}
                  </div>
                  <div className="text-sm text-gray-400">
                    Identifier Accuracy
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.skus}
                  </div>
                  <div className="text-sm text-gray-400">SKUs Managed</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/automatic-sku-generation-img.webp"
                  alt="Mobile Responsive SKU Management Design"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
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
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Global Consistency
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Unified Master SKU ensures synchronized identifiers
                      worldwide.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Error Prevention
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Eliminates duplicate or mismatched identifiers across
                      platforms.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Enterprise-Scale Performance
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Handles millions of SKUs across multiple marketplaces.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Marketplace Compliance
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Matches Amazon, eBay, and Shopify identifier requirements.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Automation at Scale
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Fully automated SKU generation and identifier mapping.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Data Transparency
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Full reporting and exports for audits and forecasting.
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
            {/* 1. Master SKU Generation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Master SKU Generation
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Automatically generates globally unique Master SKUs for all products:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom SKU formula incorporating business-specific codes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Encodes mode, marketplace, company, and product type</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ensures global uniqueness across all marketplaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prevents product duplication and listing errors</span>
                </li>
              </ul>

              <p className="text-gray-600 mt-6">
                Establishes a unified, reliable identifier backbone for seamless global catalog management.
              </p>
            </div>


            {/* 2. Serial Number Assignment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Serial Number Assignment
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Unique Identifier
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Assigns a unique 10-digit serial number to every Master SKU</li>
                    <li>• Enables full traceability across multiple marketplaces</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Database Integration
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stores serial numbers in a relational database with uniqueness constraints</li>
                    <li>• Automatically prevents duplicate serial assignments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Identifier Mapping */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Identifier Mapping
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Marketplace Identifiers
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatically generates ASINs, EANs, UPCs, and ISBNs</li>
                    <li>• Maps identifiers to the corresponding SKU for each marketplace</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Adaptive Logic
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Adapts to marketplace-specific rules (e.g., Amazon US vs. EU)</li>
                    <li>• Supports product-type specific identifier requirements</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Database Storage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Database Storage
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Centralized Storage
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Stores SKUs and identifiers in relational database
                    </li>
                    <li>• Enforces uniqueness constraints</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Scalability
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Optimized for millions of records</li>
                    <li>• Fast retrieval and updates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Sync with OMS */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  5. Sync with OMS
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Stock & Price Sync
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Matches inventory and purchase prices to SKUs</li>
                    <li>• Updates in real-time with OMS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Lifecycle Sync
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Syncs lead time and expiry data</li>
                    <li>• Ensures accurate product lifecycle management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Bundle SKU & Variant Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  6. Bundle SKU & Variant Management
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Bundle Support
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Generates unique SKUs for bundles/kits</li>
                    <li>• Ties to multiple Master SKUs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Variant Handling
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maps identifiers for sizes, colors, etc.</li>
                    <li>• Ensures consistency across marketplaces</li>
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
            {/* 1. Master SKU Generator */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Master SKU Generator
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Unique SKU Creation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Generates globally unique Master SKUs with custom formulas.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Business-Specific Codes
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Incorporates mode, marketplace, and product type.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Duplication Prevention
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures no duplicate SKUs across platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Identifier Mapping Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Identifier Mapping Engine
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Auto-Generation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Creates ASINs, EANs, UPCs, and ISBNs per marketplace.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Adaptive Logic
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Adapts to marketplace-specific identifier rules.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Variant Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Handles identifiers for product variations and bundles.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Validation & Sync Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Validation & Sync Layer
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Uniqueness Validation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Prevents duplicate identifiers and mismatched SKUs.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    OMS Synchronization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Syncs stock, price, and lifecycle data with OMS.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Compliance Checks
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures adherence to marketplace standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Features & UI Screenshots */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Website Features & UI Screenshots
            </h2>
            <p className="text-lg text-gray-600">
              Intuitive navigation, real-time SKU insights, and seamless
              identifier management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                SKU Dashboard
              </h3>
              <div
                className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden border-2 border-blue-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setCurrentSlideIndex(0);
                  setSelectedImage(screenshots[0].src);
                  setModalTitle(screenshots[0].title);
                  setIsModalOpen(true);
                }}
              >
                <Image
                  src="/sku-generation.webp"
                  alt="SKU Dashboard Interface"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Identifier Mapping View
              </h3>
              <div
                className="aspect-video bg-gradient-to-br from-gray-900 to-slate-800 rounded-xl overflow-hidden border-2 border-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setCurrentSlideIndex(1);
                  setSelectedImage(screenshots[1].src);
                  setModalTitle(screenshots[1].title);
                  setIsModalOpen(true);
                }}
              >
                <Image
                  src="/manage-configuration.webp"
                  alt="Identifier Mapping Interface"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Validation Rules
              </h3>
              <div
                className="aspect-video bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl overflow-hidden border-2 border-green-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setCurrentSlideIndex(2);
                  setSelectedImage(screenshots[2].src);
                  setModalTitle(screenshots[2].title);
                  setIsModalOpen(true);
                }}
              >
                <Image
                  src="/company-management.webp"
                  alt="Validation Rules Interface"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bundle Management
              </h3>
              <div
                className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border-2 border-purple-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setCurrentSlideIndex(3);
                  setSelectedImage(screenshots[3].src);
                  setModalTitle(screenshots[3].title);
                  setIsModalOpen(true);
                }}
              >
                <Image
                  src="/bundle-sku-management.webp"
                  alt="Bundle Management View"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sync Status
              </h3>
              <div
                className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border-2 border-purple-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setCurrentSlideIndex(4);
                  setSelectedImage(screenshots[4].src);
                  setModalTitle(screenshots[4].title);
                  setIsModalOpen(true);
                }}
              >
                <Image
                  src="/veriant-management.webp"
                  alt="Sync Status View"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reporting Panel
              </h3>
              <div
                className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border-2 border-purple-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setCurrentSlideIndex(5);
                  setSelectedImage(screenshots[5].src);
                  setModalTitle(screenshots[5].title);
                  setIsModalOpen(true);
                }}
              >
                <Image
                  src="/duplication-handler-master.webp"
                  alt="Reporting Panel"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Technology Stack */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies to ensure scalability,
              performance, and reliability for global SKU management.
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
            Ready to Streamline Your Global SKU Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s discuss how our automatic SKU generation system can ensure
            consistency and scalability across marketplaces.
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

export default AmazonSKUManagementPage;
