
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

const AmazonOrderAutomationPage = () => {


  const projectData = {
    title: "Amazon Order Management & Automation System",
    category: "E-commerce Automation",
    industry: "Amazon FBA/FBM",
    description:
      "A next-generation platform that automates Amazon order processing, Seller-Flex handling, and courier integration for seamless fulfillment.",
    longDescription:
      "A next-generation automation platform that simplifies and accelerates Amazon order processing.It delivers end-to-end auto ordering, order management, Seller-Flex handling, and courier integration, ensuring that every order is processed with accuracy, speed, and full visibility. ",
    image: "/image.webp",
    technologies: [
      "Amazon SP API & Bussiness API",
      "Angular",
      "NodeJs",
      "MongoDB",
      "Docker",
    ],

    link: "#",
    featured: true,
    stats: {
      views: "25k",
      likes: "3k",
      clients: "150+",
      revenue: "$2.5M+",
      efficiency: "95%",
      accuracy: "99%",
    },
    year: "2025",
    duration: "8 months",
    teamSize: "12",
    budget: "$400k",
    challenges: [
      "Delays due to manual order placement",
      "Stock inconsistencies and overselling risks",
      "Courier label generation and management complexities",
      "Unsynchronized tracking updates leading to fulfillment gaps",
    ],
    solutions: [
      "Dynamic auto-ordering system with validation safeguards",
      "Automated stock and price verification to prevent overselling",
      "One-click courier label generation across multiple providers",
      "Real-time tracking synchronization with Amazon and couriers",
    ],
    results: [
      "Zero-Touch Processing – Fully automated order-to-delivery workflow",
      "Seller-Flex Ready – Seamless integration with Amazon warehouses",
      "Error-Free Fulfillment – Reduced errors with picklist and scan flow",
      "Amazon Compliance – Auto-synced tracking and statuses",
      "Scalable Operations – Supports high-volume, multi-account setups",
    ],
    features: [
      {
        title: "Automated Order Placement",
        description:
          "Dynamically places orders with safeguards for stock, price, and handling time, plus auto-cancellation logic.",
        icon: Zap,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Seller-Flex Integration",
        description:
          "Manages inbound/outbound Seller-Flex orders with real-time sync and SLA compliance.",
        icon: Package,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Intelligent Order Management",
        description:
          "Automates picklists, pack-and-scan flows, and courier integrations for efficient fulfillment.",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Tracking & Return Management",
        description:
          "Unified dashboard for tracking and automated handling of returns and refunds.",
        icon: Search,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Courier Integration",
        description:
          "Seamless integration with Bluedart, Shiprocket, and others for label generation and tracking.",
        icon: Truck,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Secure & Compliant",
        description:
          "Ensures data security and compliance with Amazon’s API and operational standards.",
        icon: Shield,
        color: "from-teal-500 to-cyan-500",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "React", icon: Code, description: "Dynamic UI framework" },
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
                Amazon Automation Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Amazon Order Management
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  & Automation System
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
                  src="/amazon-auto-ordering-order-management.webp"
                  alt="Amazon Order Automation Platform"
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
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Zero-Touch Order Processing
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      From placement to delivery confirmation.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Seller-Flex Ready
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Seamless integration for inbound/outbound Seller-Flex
                      flows.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Courier-Agnostic Flexibility
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Plug & play with multiple logistics providers.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Error-Free Fulfillment
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Picklist + pack & scan flow reduces mistakes.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Amazon-Synced Compliance
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      From placement to delivery confirmation.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scalable Architecture
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Handles high-volume operations and multi-account setups.
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
            {/* 1. Automated Order Placement & Safeguards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Automated Order Placement & Safeguards
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Intelligent automation engine for accurate, compliant, and efficient Amazon order placement:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automatic order placement based on configurable product rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Stock protection to prevent overselling and maintain inventory accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Price threshold monitoring for safe automated pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Handling time compliance to meet Amazon standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Auto-cancellation of invalid or non-compliant orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time order tracking updates for full visibility</span>
                </li>
              </ul>

              <p className="text-gray-600 mt-6">
                This module ensures a fully automated, error-free, and Amazon-compliant order placement workflow.
              </p>
            </div>


            {/* 2. Seller-Flex Order Processing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Seller-Flex Order Processing
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Streamlined processing for Seller-Flex orders with intelligent routing, automated reconciliation, and full visibility across fulfillment types.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Seller-Flex Integration
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direct handling of Seller-Flex warehouse orders.</li>
                    <li>• Automatic sync for inbound and outbound shipments.</li>
                    <li>• Ensures SLA compliance with Amazon Seller-Flex standards.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Hybrid Fulfillment
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Intelligent routing for Seller-Flex, FBM, or 3PL fulfillment.</li>
                    <li>• Optimizes both cost and delivery speed.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Centralized Visibility
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Unified dashboard for all order types.</li>
                    <li>• Automatic reconciliation of shipments, returns, and exceptions.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Intelligent Order Management Flow */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Intelligent Order Management Flow
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Streamlined order fulfillment with automation, courier integration, and real-time tracking to ensure accurate and timely deliveries.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Picklist & Fulfillment Automation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Auto-generated picklists for physical orders.</li>
                    <li>• Integrated pack-and-scan workflow to minimize errors.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Courier & Label Integration
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Supports Bluedart, Shiprocket, Delhivery, and other couriers.</li>
                    <li>• One-click label generation and shipping documentation.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Shipment Confirmation & Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatically marks orders as shipped/delivered via courier updates.</li>
                    <li>• Provides real-time first-mile and last-mile tracking visibility.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Tracking & Return Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Tracking & Return Management
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Complete visibility and control over shipments and returns, ensuring timely updates, accurate reconciliation, and compliance with Amazon standards.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Tracking Hub
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Unified dashboard displaying all courier updates in real-time.</li>
                    <li>• Automatic synchronization of shipment statuses to Amazon.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Return & Refund Flow
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Simplified customer return processing with automated workflows.</li>
                    <li>• Automatic reconciliation of returns with courier updates.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Compliance & Automation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ensures Amazon-compliant return and refund processes.</li>
                    <li>• Tracks refunds, replacements, and credits automatically.</li>
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
            {/* 1. Auto Ordering Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Auto Ordering Engine
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                A dynamic engine that automates order placement with robust safeguards and scalable performance for high-volume Amazon operations.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Dynamic Safeguards
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Configurable thresholds for price, stock, and handling time ensure only valid orders are placed.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Auto-Cancellation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Invalid orders are automatically canceled with fallback handling to maintain operational integrity.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Scalable Processing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Designed to handle high-volume order placement efficiently, without delays or system bottlenecks.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Order Processing Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Order Processing Core
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Centralized order management engine designed to streamline the fulfillment process and reduce operational errors.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Pick-Pack-Ship Automation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automates picklist generation, packing, and scan validation to speed up the fulfillment process.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Courier-Agnostic Fulfillment
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Integrates with multiple 3PL and courier partners, ensuring flexible and reliable delivery.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Error Reduction
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Barcode-based validation and automated checks guarantee accurate and error-free shipments.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Tracking & Compliance Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Tracking & Compliance Layer
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Ensures seamless tracking, compliance, and returns management across Amazon orders.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Tracking
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically syncs tracking numbers and courier events with Amazon Seller Central for up-to-date order visibility.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Automated Compliance
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Confirms tracking and delivery statuses automatically, ensuring all orders meet Amazon compliance standards.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Return & Refund Management
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Handles returns and refunds efficiently with automated reconciliation, reducing manual intervention and errors.
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
              performance, and reliability for Amazon order automation.
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
            Ready to Automate Your Amazon Orders?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our automation platform can streamline your
            order processing and boost efficiency.
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

export default AmazonOrderAutomationPage;
