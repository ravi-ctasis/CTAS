
;
import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Package,
  Search,
  Shield,
  Database,
  Cloud,
  Code,
  Server,
  Phone,
  Globe,
  FileText,
  RefreshCw,
  Layers,
  Download,
  CheckCircle,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const WebScrapingToolPage = () => {


  const projectData = {
    title: "Automated Product Data Extraction Platform",
    category: "E-commerce Data Automation",
    industry: "E-commerce & Retail",
    description:
      "Automates product data extraction, normalization, and organization from multiple online sources with speed and accuracy.",
    longDescription:
      "The Web Scraping Tool empowers e-commerce businesses to automatically collect, clean, and integrate product data from various websites and marketplaces. By eliminating manual data entry, ensuring consistency, and supporting scalable operations, it streamlines inventory, pricing, and catalog management while maintaining high data quality.",
    image: "/web-scraping-tool-dashboard.webp",
    technologies: [
      "Node.js",
      "Puppeteer",
      "MongoDB",
      "AWS",
      "Redis",
      "Elasticsearch",
    ],
    link: "#",
    featured: true,
    stats: {
      products: "100k+",
      websites: "50+",
      accuracy: "98%",
      efficiency: "90%",
    },
    year: "2025",
    duration: "6 months",
    teamSize: "10",
    budget: "$300k",
    challenges: [
      "Frequent website layout changes causing extraction failures",
      "Time-consuming manual data updates",
      "Duplicate, inconsistent, or incomplete product information",
      "Anti-bot mechanisms preventing seamless scraping",
      "Data mismatches during integration with internal systems",
      "Managing proxy rotation and reliability for large-scale scraping",
    ],
    solutions: [
      "Dynamic parser rules with fallback mechanisms to handle layout changes",
      "Automated scheduled crawls with real-time alerts for failures",
      "Normalization and deduplication engine to ensure data consistency",
      "Proxy rotation and headless browsing to bypass anti-bot restrictions",
      "Standardized export formats with accurate field mapping for integration",
      "Centralized proxy pool with rotation, failover, and monitoring",
    ],

    features: [
      {
        title: "Automated Data Collection",
        description: "Removes manual effort in gathering product details.",
        icon: Zap,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Scalable Scraping",
        description: "Handles thousands of products across multiple websites.",
        icon: Layers,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Real-Time Updates",
        description:
          "Scheduled crawls ensure current pricing and availability.",
        icon: RefreshCw,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Error-Free Data",
        description: "Normalization prevents mismatches and duplicates.",
        icon: Shield,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Integration-Ready",
        description: "Easily connects to inventory and catalog systems.",
        icon: Download,
        color: "from-indigo-500 to-purple-500",
      },
    ],
    techStack: [
      {
        category: "Scraping & Backend",
        technologies: [
          { name: "Node.js", icon: Server, description: "Scalable runtime" },
          { name: "Puppeteer", icon: Code, description: "Headless browsing" },
          { name: "Express.js", icon: Server, description: "Web framework" },
        ],
      },
      {
        category: "Database & Caching",
        technologies: [
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
          { name: "Redis", icon: Database, description: "Caching layer" },
        ],
      },
      {
        category: "Cloud & DevOps",
        technologies: [
          { name: "AWS", icon: Cloud, description: "Cloud infrastructure" },
          { name: "Docker", icon: Package, description: "Containerization" },
        ],
      },
      {
        category: "Search & Analytics",
        technologies: [
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
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                E-commerce Data Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Automated Product
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Data Extraction Platform
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

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.products}
                  </div>
                  <div className="text-sm text-gray-400">Products Scraped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.accuracy}
                  </div>
                  <div className="text-sm text-gray-400">Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.efficiency}
                  </div>
                  <div className="text-sm text-gray-400">Efficiency Gain</div>
                </div>
              </div>
            </div>

            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/automated-product-data-extraction-platform.webp"
                  alt="Web Scraping Tool"
                  width={500}
                  height={400}
                  className="relative w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
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
                  Key Advantages
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectData.features.map((feature, index) => (
                    <Card
                      key={index}
                      className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300  border border-gray-100`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </Card>
                  ))}
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
                    <span className="text-gray-600">Products Scraped</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.products}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Websites Covered</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.websites}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Accuracy</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.accuracy}
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
            {/* 1. Website Crawling & Extraction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Website Crawling & Extraction
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Seamlessly extracts product data from multiple sources with high accuracy:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Connects to both product listing and detail pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Extracts metadata, images, and product attributes efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Handles dynamic, JavaScript-heavy websites with precision</span>
                </li>
              </ul>
            </div>


            {/* 2. Data Normalization & Structuring */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Data Normalization & Structuring
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transforms raw scraped data into structured JSON, CSV, or database-ready formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maps key attributes such as size, color, brand, and SKU accurately</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ensures data consistency and standardization across multiple sources</span>
                </li>
              </ul>
            </div>

            {/* 3. Real-Time Updates */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Real-Time Updates
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automates scheduled crawls at configurable intervals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detects and logs changes in pricing, availability, and product attributes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sends real-time alerts for significant updates or anomalies</span>
                </li>
              </ul>
            </div>


            {/* 4. Export & Integration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Export & Integration
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Exports structured data in CSV, Excel, or JSON formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrates seamlessly with inventory, catalog, and pricing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Supports API-based syncing for real-time updates across platforms</span>
                </li>
              </ul>
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
            {/* 1. Scraping Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Scraping Engine
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Dynamic Parsing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Adapts to changing website layouts using flexible and intelligent parsing rules.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Anti-Bot Evasion
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Implements proxy rotation, headless browsing, and other techniques to avoid detection.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Scalable Crawling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Efficiently processes thousands of pages while maintaining accuracy and performance.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Data Normalization Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Data Normalization Core
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Attribute Mapping
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Standardizes key attributes such as size, color, and brand for consistent data representation.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Deduplication
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Identifies and removes duplicate entries to maintain clean, reliable datasets.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Validation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures data accuracy and consistency across all sources before integration.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Integration Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Integration Layer
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Export Formats
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Supports CSV, Excel, JSON, and database exports.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    API Integration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Connects to inventory and catalog systems via APIs.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Sync
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Enables continuous data updates with external systems.
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
              Built with robust technologies to ensure scalability, performance,
              and reliability for web scraping operations.
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
            Ready to Automate Your Product Data Collection?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s discuss how our web scraping tool can streamline your data
            operations and boost efficiency.
          </p>
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
      </section>

      <FooterSection />

    </div>
  );
};

export default WebScrapingToolPage;
