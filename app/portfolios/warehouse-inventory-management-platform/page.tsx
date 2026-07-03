
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
  Package,
  CheckCircle,
  Zap,
  Database,
  Code,
  Server,
  Settings,
  Phone,
  Search,
} from "lucide-react";
import Link from "next/link";

const WarehouseInventoryPage = () => {

  const projectData = {
    title: "Smart Warehouse & Inventory Management Platform",
    category: "Inventory Management",
    industry: "E-commerce & Warehousing",
    description:
      "An intelligent platform for real-time stock visibility, automated workflows, and seamless warehouse operations to prevent overselling and ensure accuracy.",
    longDescription:
      "Warehousing operations are becoming more complex. Managing inventory manually across multiple warehouses leads to mismatches, errors, and delays. Our system provides real-time stock visibility, automates imports and exports, streamlines order fulfillment, and ensures audit-ready traceability across all operations.",
    image: "/warehouse-inventory-stock-img.webp",
    technologies: ["Node.js", "MongoDB", "Next.js", "Tailwind CSS"],
    link: "/portfolios/warehouse-inventory",
    featured: true,
    stats: {
      accuracy: "99.8%",
      orders: "100k+",
      warehouses: "10+",
      audits: "500+",
    },
    year: "2025",
    duration: "10 months",
    teamSize: "10",
    challenges: [
      "Real-time stock mismatches across warehouses",
      "Labor-intensive onboarding of new inventory",
      "Risk of overselling due to delayed updates",
      "Items misplaced across multiple warehouse locations",
      "Difficulty identifying unrecognized inventory during audits",
      "Complexity in managing bin vs. non-bin audits",
    ],
    solutions: [
      "Automated stock deductions during picking and order processing",
      "Bulk inventory uploads with auto-generated serial numbers",
      "Real-time stock verification and export visibility",
      "Highlight misplaced items with quick Edit Location options",
      "Move discrepancies to Pending Inventory for smooth reconciliation",
      "Streamlined, separate workflows for bin and non-bin audits",
    ],

    results: [
      "Enterprise-Scale Accuracy – Real-time updates across warehouses",
      "Streamlined Operations – Automated imports, exports, and audits",
      "Error Reduction – Prevents overselling and mismatches",
      "Full Automation – Seamless workflows from scanning to deduction",
      "Audit-Ready – Full traceability for compliance",
    ],
    features: [
      {
        title: "Warehouse Inventory Listing ",
        description:
          "Displays stock levels across warehouses with search and pagination.",
        icon: Package,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Automated Order Fulfillment",
        description:
          "Verifies stock in real-time and moves orders to Picklist or Purchase.",
        icon: Zap,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Import Warehouse Inventory ",
        description:
          "Auto-generates serial numbers and supports bulk inventory uploads.",
        icon: Database,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Export Workflow",
        description:
          "Ensures real-time visibility and prevents export mismatches.",
        icon: Server,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Serial Number Audit",
        description:
          "Streamlined bin and non-bin audit processes for accuracy.",
        icon: Search,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Scalable Architecture",
        description:
          "Handles multiple warehouses with minimal infrastructure costs.",
        icon: Settings,
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
                <Package className="w-4 h-4 mr-2" />
                Inventory Management Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Smart Warehouse &
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Inventory Management Platform
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
                    {projectData.stats.accuracy}
                  </div>
                  <div className="text-sm text-gray-400">Stock Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.orders}
                  </div>
                  <div className="text-sm text-gray-400">Orders Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.warehouses}
                  </div>
                  <div className="text-sm text-gray-400">
                    Warehouses Managed
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/warehouse-inventory-stock-img.webp"
                  alt="Warehouse Inventory & Stock Management System"
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
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Real-Time Stock Visibility
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Displays stock levels across warehouses with search and
                      pagination.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Automated Order Fulfillment
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Verifies stock in real-time and moves orders to Picklist
                      or Purchase.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Bulk Import Automation
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Auto-generates serial numbers and supports bulk uploads.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Export Workflow
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Ensures real-time visibility and prevents export
                      mismatches.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Search className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Serial Number Audit
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Streamlined bin and non-bin audit processes for accuracy.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scalable Architecture
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Handles multiple warehouses with minimal infrastructure.
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
                    <span className="text-gray-600">Stock Accuracy</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.accuracy}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Orders Processed</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.orders}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Warehouses Managed</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.warehouses}
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
            {/* 1. Real-Time Stock Visibility */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Real-Time Stock Visibility
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Gain full transparency of inventory across all warehouse locations:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>View stock levels per warehouse instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Searchable serial numbers with pagination for easy tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time updates ensure accurate inventory reporting</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Helps prevent stock discrepancies and supports efficient warehouse operations.
              </p>
            </div>


            {/* 2. Automated Order Fulfillment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Automated Order Fulfillment
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Real-Time Order Verification
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Verifies stock availability instantly</li>
                    <li>• Automatically moves orders to Picklist or Purchase workflows</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Stock Deduction & Oversell Prevention
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Deducts stock dynamically during picking or order processing</li>
                    <li>• Ensures inventory levels stay accurate to prevent overselling</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Automates fulfillment processes, reducing manual effort and errors while maintaining accurate stock levels.
              </p>
            </div>


            {/* 3. Import & Export Workflows */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Import & Export Workflows
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Bulk Import
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatically generates unique serial numbers for items</li>
                    <li>• Supports bulk uploads with warehouse-specific mapping</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Export Management
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provides real-time stock visibility during exports</li>
                    <li>• Ensures eligible items are matched correctly to prevent errors</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Streamlines import/export operations, minimizing manual effort while maintaining inventory accuracy.
              </p>
            </div>


            {/* 4. Serial Number Audit */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Serial Number Audit
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Bin Audit
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Scan or input serial numbers for real-time verification</li>
                    <li>• Edit item locations to correct misplaced stock</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Non-Bin Audit
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Verify items not assigned to specific bins</li>
                    <li>• Move unrecognized items to Pending Inventory for reconciliation</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Ensures complete traceability and accuracy of all warehouse inventory.
              </p>
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
            {/* 1. Inventory Listing Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Inventory Listing Engine
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Stock Visibility
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provides a comprehensive view of inventory across warehouses, with search, filters, and pagination for quick access.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Updates
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures accurate stock levels by instantly reflecting changes across all warehouse operations.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Order Fulfillment Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Order Fulfillment Core
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Verification
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Instantly checks stock availability and updates inventory in real-time, ensuring accurate and reliable order processing.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Stock Deduction
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically deducts items during picking and order fulfillment to prevent overselling and maintain inventory accuracy.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Audit & Workflow Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Audit & Workflow Layer
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Serial Number Audit
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Streamlined bin and non-bin audits with full traceability, ensuring every item is verified, accurately logged, and easy to track.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Import & Export Automation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automates bulk inventory uploads and provides real-time export tracking, preventing mismatches and eliminating the risk of overselling.
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
              Built with robust technologies to ensure scalability, accuracy,
              and performance for warehouse inventory management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Ready to Optimize Your Warehouse Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our inventory management system can
            streamline your stock control and automation.
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

export default WarehouseInventoryPage;
