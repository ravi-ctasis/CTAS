
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
  Database,
  Code,
  Server,
  Settings,
  Phone,
  Search,
  Globe,
} from "lucide-react";
import Link from "next/link";

const SilkruteEcommercePlatformPage = () => {

  const projectData = {
    title: "Global Multi-Seller E-Commerce Platform",
    category: "Multi-Seller Marketplace",
    industry: "Global E-Commerce",
    description:
      "A scalable, user-friendly platform connecting sellers and customers worldwide with intelligent search, personalized recommendations, and optimized product listings.",
    longDescription:
      "Shop is a next-generation multi-seller e-commerce platform designed to empower businesses—from local vendors to international brands—to reach global customers. With over 1.5 million products across 12,000+ categories and 10+ active stores worldwide, Shop delivers fast performance, superior SEO, and low infrastructure costs through advanced technology and intelligent architecture.",
    image: "/silkrute-hero.webp",
    technologies: ["Node.js", "MongoDB", "Next.js", "Google Merchant API"],
    link: "#",
    featured: true,
    stats: {
      products: "1.5M+",
      categories: "12,000+",
      stores: "10+",
      users: "Millions",
      performance: "99.9%",
      seo: "90%+",
    },
    year: "2025",
    duration: "12 months",
    teamSize: "15",
    budget: "$600k",
    challenges: [
      "Handling millions of products, sellers, and users across multiple regions",
      "Providing highly relevant search results across thousands of categories",
      "Generating SEO-friendly content at scale for numerous pages",
      "Maintaining fast performance under high traffic and server load",
      "Allowing flexible UI updates without developer intervention",
      "Integrating seamlessly with external platforms like Google Merchant",
    ],
    solutions: [
      "Optimized database architecture for high concurrency and scalability",
      "Machine learning-powered personalized product recommendations",
      "Elastic Search with advanced matching algorithms for accurate results",
      "Automated SEO content generation for discoverability at scale",
      "High-performance REST APIs to handle heavy traffic efficiently",
      "Admin-controlled frontend layouts for flexible UI management",
      "Integration with Google Merchant for broader reach and visibility",
    ],

    results: [
      "Global Reach – Connects sellers to customers worldwide",
      "Intelligent Search – Highly relevant results with minimal latency",
      "SEO at Scale – Automated metadata for thousands of pages",
      "High Performance – Serves millions with minimal infrastructure",
      "Data-Driven Insights – Advanced analytics for sellers",
    ],
    features: [
      {
        title: "Global Marketplace",
        description:
          "Connects sellers to customers worldwide with localized experiences.",
        icon: Globe,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Intelligent Search",
        description:
          "Elastic Search with longest common subsequence for relevant results.",
        icon: Search,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Personalized Recommendations",
        description:
          "Machine learning-driven favorites based on user behavior.",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "SEO Automation",
        description:
          "Dynamic meta titles and descriptions for enhanced discoverability.",
        icon: TrendingUp,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Configurable UI",
        description: "Admin panel for flexible layout and category management.",
        icon: Settings,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Scalable Architecture",
        description:
          "Handles millions of users with minimal infrastructure costs.",
        icon: Server,
        color: "from-teal-500 to-cyan-500",
      },
    ],
    techStack: [
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", icon: Server, description: "Scalable runtime" },
          { name: "Express", icon: Server, description: "Web framework" },
        ],
      },
      {
        category: "Database",
        technologies: [
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
        ],
      },
      {
        category: "Search",
        technologies: [
          {
            name: "Elastic Search",
            icon: Search,
            description: "Optimized search engine",
          },
        ],
      },
      {
        category: "Frontend",
        technologies: [
          { name: "Next.js", icon: Code, description: "Dynamic UI framework" },
          {
            name: "Tailwind CSS",
            icon: Code,
            description: "Utility-first styling",
          },
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
                <Globe className="w-4 h-4 mr-2" />
                Global E-Commerce Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Shop
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Multi-Seller Marketplace
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                {projectData.description}
              </p>

              <div className="flex flex-wrap gap-4">
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
                    {projectData.stats.products}
                  </div>
                  <div className="text-sm text-gray-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.categories}
                  </div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.performance}
                  </div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/multi-seller-e-commerce-platform.webp"
                  alt="Shop E-Commerce Platform"
                  width={800}
                  height={600}
                  className="relative w-[100%] h-[100%]"
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
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Global Reach
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Connects sellers to customers worldwide with localized
                      experiences.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Search className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Intelligent Search
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Optimized search results with elastic algorithms.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Personalized Recommendations
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Machine learning-driven product suggestions.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        SEO at Scale
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Automated metadata for enhanced discoverability.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Configurable UI
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Flexible layouts managed via admin panel.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scalable Architecture
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Handles millions of users with minimal infrastructure.
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
                    <span className="text-gray-600">Products</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.products}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Categories</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.categories}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Stores</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.stores}
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
            {/* 1. Intelligent Search & Recommendations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Intelligent Search & Recommendations
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Advanced search and recommendation engine for a seamless user experience:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Elastic Search with longest common subsequence matching for precise results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Machine learning-driven personalized product recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Context-aware search across 12,000+ categories for relevant results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Low-latency search to handle millions of products efficiently
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Ensures users can quickly discover the most relevant products with ease.
              </p>
            </div>


            {/* 2. SEO Automation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. SEO Automation
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Automated Metadata Generation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Generates SEO-friendly titles, descriptions, and keywords automatically</li>
                    <li>• Adapts to trending search queries for higher visibility</li>
                    <li>• Scales across thousands of products and category pages effortlessly</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Improved Discoverability
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Boosts organic traffic with optimized content delivery</li>
                    <li>• Enhances click-through rates with dynamic metadata</li>
                    <li>• Reduces manual effort while maintaining SEO consistency</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Scalable Database & API */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Scalable Database & API
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Robust Database Architecture
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• MongoDB with optimized indexing for high-speed queries</li>
                    <li>• Supports millions of concurrent reads/writes without performance degradation</li>
                    <li>• Ensures data integrity and fast retrieval for large-scale operations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    High-Performance API
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• REST APIs designed for low-latency, high-throughput access</li>
                    <li>• Load balancing and caching for global scalability</li>
                    <li>• Secure endpoints with role-based access and throttling</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Admin Configuration & Integrations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Admin Configuration & Integrations
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Advanced Admin Panel
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fully configurable layouts and category/product management</li>
                    <li>• Granular permissions and role-based access for secure control</li>
                    <li>• Manage global settings without developer intervention</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Third-Party Integrations
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Connects with Google Merchant Portal for extended product reach</li>
                    <li>• Integrates analytics and reporting tools for user behavior insights</li>
                    <li>• Supports future integrations with payment gateways, ERP, and marketplaces</li>
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
            {/* 1. Database Layer */}
            {/* 1. Database Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white flex-nowrap shrink-0" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Database Layer
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    High Availability
                  </h4>
                  <p className="text-gray-600 text-sm">
                    MongoDB with optimized indexing and replication ensures fast queries and minimal downtime.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Scalability
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Supports millions of products, categories, and users without performance bottlenecks.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Search & Recommendation Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white flex-nowrap shrink-0" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Search & Recommendation Engine
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Elastic Search
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Uses advanced longest common subsequence algorithms for fast, accurate, and context-aware search results across millions of products.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Machine Learning
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provides personalized product recommendations by analyzing user behavior, purchase history, and browsing patterns to boost engagement and conversions.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. SEO & Admin Configuration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white flex-nowrap shrink-0" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. SEO & Admin Configuration
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    SEO Automation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically generates dynamic meta titles, descriptions, and structured data for thousands of category and product pages to improve search engine visibility and organic traffic.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Admin Panel
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provides flexible UI configuration, category and product management, and granular control for administrators without developer intervention, ensuring smooth operations at scale.
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
              performance, and reliability for global e-commerce.
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
            Ready to Scale Your E-Commerce Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how Shop can empower your global marketplace
            with intelligent search and scalable architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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

export default SilkruteEcommercePlatformPage;
