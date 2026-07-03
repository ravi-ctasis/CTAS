
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
    title: "Amazon FBA & FBM Operations Automation Platform",
    category: "E-commerce Automation",
    industry: "E-commerce",
    description:
      "A centralized, web-based platform for managing Amazon FBA and FBM operations, including inventory, orders, shipments, and performance analytics.",
    longDescription:
      "An enterprise-grade admin panel designed for Amazon sellers to streamline FBA and FBM operations efficiently. The platform offers real-time inventory synchronization, automated order processing, shipment creation via Amazon API integration, backorder handling, and advanced multi-store analytics. It ensures compliance with Amazon policies, supports role-based access control, and provides scalable workflows for high-volume operations.",
    image: "/amazon-fbm-fba-management-models-img.webp",
    technologies: ["Amazon SP API", "Node.js", "React", "MongoDB", "AWS"],
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
      "Complex inventory management across multiple FBA and FBM channels",
      "Ensuring efficient and error-free order processing at scale",
      "Seamless integration with Amazon APIs while handling rate limits",
      "Maintaining accurate product and order data with automated validation",
      "Scalability to support multiple stores and high-volume transactions",
      "Role-based user access control for secure operations",
    ],

    solutions: [
      "Unified dashboard providing a single view of inventory, orders, and shipments",
      "Automated workflows for order processing, inventory sync, and fulfillment",
      "Advanced filtering, search, and inline editing for fast data management",
      "Bulk actions and real-time validation to ensure data accuracy",
      "Robust Amazon API integration with intelligent throttling and error handling",
      "Role-based access control to ensure secure and appropriate user permissions",
      "Efficient file upload and processing for catalog updates and batch operations",
    ],
    results: [
      "Real-Time Insights",
      "Automation",
      "Scalability",
      "Customizability",
      "Compliance",
      "User-Friendly Interface",
      "Profitability Tracking",
    ],
    features: [
      {
        title: "Inventory Management",
        description:
          "Comprehensive FBA and FBM inventory listings with inline editing, bulk updates, and profitability calculations.",
        icon: Package,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Order Processing",
        description:
          "Real-time order status updates, manual order creation, and bulk status changes with detailed logs for auditing.",
        icon: BarChart3,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Shipment Management",
        description:
          "Automated shipment creation, barcode generation, and tracking updates with Amazon API integration.",
        icon: Cloud,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Data Analytics",
        description:
          "Interactive charts for order trends, store performance, and product expiry monitoring.",
        icon: TrendingUp,
        color: "from-teal-500 to-cyan-500",
      },
      {
        title: "Automated Validation",
        description:
          "Checks for restricted entities and validates HSN codes, shipping rates, and product attributes during file uploads.",
        icon: Shield,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Role-Based Permissions",
        description:
          "Granular control over user access to specific modules and actions.",
        icon: Settings,
        color: "from-blue-500 to-cyan-500",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "angular", icon: Code, description: "Modern UI framework" },
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
                Amazon FBA & FBM Operations
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
                  src="/amazon-fbm-fba-management-models-img.webp"
                  alt="Tablet Responsive Website Design"
                  width={500}
                  height={400}
                  className="
        object-cover relative z-14"
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
                        Real-Time Insights
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Dashboards with week-wise, month-wise, and country-wise
                      data provide actionable insights for decision-making.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Automation
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Auto-generated purchase orders, barcodes, and Amazon cart
                      integration save time and reduce errors.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scalability
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Supports multi-store operations and bulk processing for
                      large-scale businesses.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Customizability
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Flexible attribute management, saved filters, and
                      customizable export options cater to specific business
                      needs.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Compliance
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Built-in validation for restricted ASINs, brands, and
                      keywords ensures adherence to Amazon’s policies.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Profitability Tracking
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Color-coded profit/loss indicators and revenue calculators
                      optimize pricing strategies.
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
            {/* 1. Inventory Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Inventory Management
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Gain real-time visibility across FBA and FBM inventories with bulk updates, inline editing, and automated profitability analysis to make smarter pricing and stocking decisions.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Manage detailed product attributes including price, weight, dimensions, and stock levels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Synchronize inventory across multiple stores and marketplaces to prevent overselling or stock discrepancies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated profitability calculations and margin analysis for informed pricing and strategic decision-making.</span>
                </li>
              </ul>
            </div>


            {/* 2. Order Processing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Order Processing
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Order Tracking</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monitor all order statuses (Pending, Processing, Shipped) in real-time across multiple FBA/FBM stores.</li>
                    <li>• Maintain detailed audit logs for tracking order changes and ensuring accountability.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Efficient Manual & Bulk Operations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Create and manage orders manually for special cases or custom workflows.</li>
                    <li>• Execute bulk updates for order statuses, shipping, and fulfillment to save time and reduce errors.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Validation & Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated validation checks to prevent errors in inventory, pricing, and shipment details.</li>
                    <li>• Ensures compliance with Amazon policies for smooth order fulfillment.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Shipment Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Shipment Management
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Automated Shipment Creation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Seamlessly generate shipments using Amazon API integration for both FBA and FBM fulfillment.</li>
                    <li>• Auto-generate barcodes, packing slips, and shipping labels to streamline fulfillment operations.</li>
                    <li>• Reduce human errors with automated shipment verification and validation.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Tracking & Updates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Synchronize shipment tracking in real-time with Amazon for accurate delivery visibility.</li>
                    <li>• Perform bulk tracking updates for multiple shipments to save time and ensure consistency.</li>
                    <li>• Receive automated notifications for exceptions, delays, or delivery issues.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Compliance & Accuracy</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ensure all shipments meet Amazon’s shipping policies and restrictions.</li>
                    <li>• Maintain accurate shipment records for auditing and operational reporting.</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Data Analytics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Data Analytics & Business Insights
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Interactive Visualizations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visualize order trends, store performance, and inventory health in real-time dashboards.</li>
                    <li>• Track stock levels, product expiry, and low-stock alerts for proactive inventory management.</li>
                    <li>• Identify sales patterns and peak demand periods to optimize operations.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Custom Performance Metrics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Week-wise, month-wise, and country-wise analytics for multi-store insights.</li>
                    <li>• Generate tailored reports to guide pricing, inventory, and strategic decision-making.</li>
                    <li>• Monitor KPIs such as order fulfillment rate, average delivery time, and sales growth.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Data-Driven Strategy</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Leverage actionable insights to improve profitability and operational efficiency.</li>
                    <li>• Make informed business decisions with real-time, accurate, and comprehensive data.</li>
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
            {/* 1. Dashboard Module */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Dashboard Module
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Central Hub
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monitor order statuses and performance metrics with
                    interactive charts and filters.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Insights
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Week-wise, month-wise, and country-wise data for actionable
                    decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. FBA and FBM Inventory Modules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-white shrink-0" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. FBA and FBM Inventory Modules
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Product Listings
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Manage inventory with inline editing, bulk updates, and
                    profitability calculations.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Multi-Store Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Synchronize inventory across multiple Amazon stores and
                    fulfillment channels.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Order Process Module */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Order Process Module
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Order Lifecycle
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Manage orders from creation to fulfillment with real-time
                    status updates.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Bulk Actions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Perform bulk status changes and manual order creation for
                    efficient workflows.
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
