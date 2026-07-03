
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
  CheckCircle,
  Shield,
  Database,
  Cloud,
  Code,
  Server,
  Activity,
  Package,
  Phone,
  Search,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const ReturnRefundAutomationPage = () => {

  const projectData = {
    title: "Return Operations & Refund Automation System",
    category: "Return & Refund Management",
    industry: "E-commerce",
    description:
      "A comprehensive platform for managing Amazon returns, enabling real-time scanning, Safe-T claim filing, reimbursement tracking, and return trend analysis.",
    longDescription:
      "Return & Refund Management System provides a complete warehouse return handling solution. It helps manage Amazon returns effectively by enabling real-time scanning, validation, safeT claim filing, and reimbursement tracking.With this system, businesses can reduce losses, recover reimbursements efficiently, and gain visibility into return trends. Although challenges exist (Amazon policy changes, high return volume, etc.), the benefits—accuracy, speed, financial recovery, and transparency—make it an essential tool for modern eCommerce return management",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Amazon SP-API",
      "AI-Powered Automation",
      "Docker",
      "Google Docs",
    ],
    link: "#",
    featured: true,
    stats: {
      returnsProcessed: "100k+",
      reimbursementRate: "92%",
      errorReduction: "85%",
    },
    year: "2025",
    duration: "7 months",
    teamSize: "10",
    budget: "$350k",
    challenges: [
      "Frequent changes in Amazon return policies",
      "High daily return volumes",
      "Accurate SKU and tracking data capture",
      "Safe-T claim rejections from incorrect filing",
      "Dependence on disciplined warehouse scanning",
      "Seamless integration with Amazon APIs",
    ],
    solutions: [
      "Automated synchronization with Amazon’s latest return policies",
      "Scalable system for handling large volumes of returns",
      "Barcode scanning for precise SKU and tracking data",
      "Automated Safe-T claim validation and submission",
      "Intuitive scanning interface for warehouse staff",
      "Robust Amazon SP-API integration for real-time updates",
    ],

    results: [
      "Centralized Return Tracking – Full visibility into return statuses",
      "Error-Free Validation – Barcode scanning reduces manual errors",
      "Maximized Reimbursements – 92% recovery rate for claims",
      "Faster Processing – Real-time scanning and validation",
      "Compliance Assurance – Adheres to Amazon’s return policies",
      "Actionable Insights – AI-driven return trend analysis",
    ],
    features: [
      {
        title: "Centralized Return Management",
        description:
          "Track all Amazon returns in a single platform with real-time updates.",
        icon: Search,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Real-Time Return Validation",
        description:
          "Scan, validate, and record return details immediately at the warehouse.",
        icon: RefreshCw,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Automated Claim Handling",
        description: "Generate SAFE-T claims for damaged/missing products.",
        icon: Shield,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Reimbursement Management",
        description: "Track, validate, and monitor Amazon reimbursements.",
        icon: TrendingUp,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Return Scanning Process ",
        description:
          "Provides visibility on status: Pending, Approved, Denied, Received, etc.",
        icon: CheckCircle,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Dashboard Monitoring ",
        description:
          "Analyze return trends to optimize operations and reduce losses.",
        icon: Activity,
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
        ],
      },
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", icon: Server, description: "Scalable runtime" },
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
        ],
      },
      {
        category: "Integration & Automation",
        technologies: [
          {
            name: "Amazon SP-API",
            icon: Cloud,
            description: "Amazon integration",
          },
          {
            name: "AI Automation",
            icon: Activity,
            description: "Smart workflows",
          },
          {
            name: "Google Docs",
            icon: Package,
            description: "Document integration",
          },
        ],
      },
      {
        category: "DevOps",
        technologies: [
          { name: "Docker", icon: Package, description: "Containerization" },
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
                <RefreshCw className="w-4 h-4 mr-2" />
                Returns Automation Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Return & Refund
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Automation System
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
                    {projectData.stats.returnsProcessed}
                  </div>
                  <div className="text-sm text-gray-400">Returns Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.reimbursementRate}
                  </div>
                  <div className="text-sm text-gray-400">
                    Reimbursement Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.errorReduction}
                  </div>
                  <div className="text-sm text-gray-400">Error Reduction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/return-operations-refund-automation.webp"
                  alt="Return & Refund Automation System"
                  width={500}
                  height={400}
                  className="relative w-full h-auto"
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
                  {projectData.features.map((feature, index) => (
                    <Card
                      key={index}
                      className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
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
                    <span className="text-gray-600">Returns Processed</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.returnsProcessed}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Reimbursement Rate</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.reimbursementRate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Error Reduction</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.errorReduction}
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
            {/* 1. Centralized Return Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Centralized Return Management
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Manage all Amazon returns efficiently from a single platform:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Unified dashboard for tracking all return orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time status updates: Pending, Approved, or Denied</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete traceability from return receipt to reimbursement</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Provides full visibility and control over your return operations.
              </p>
            </div>


            {/* 2. Real-Time Return Scanning */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Real-Time Return Scanning
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Scanning Workflow
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Supports both manual and automatic scanning with tracking numbers</li>
                    <li>• Barcode-based verification for SKU and serial numbers</li>
                    <li>• Instant recording of return details for accuracy</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Error Reduction
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Validates product condition (Good/Bad) in real-time</li>
                    <li>• Logs return reasons accurately to prevent discrepancies</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Automated Safe-T Claim Filing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Automated Safe-T Claim Filing
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Claim Generation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatically generates Safe-T claims for damaged or missing items</li>
                    <li>• Validates claims to ensure compliance with Amazon policies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Claim Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monitors claim status (Pending, Approved, Denied) in real-time</li>
                    <li>• Provides alerts and actionable insights for rejected claims</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Reimbursement & Trend Analysis */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Reimbursement & Trend Analysis
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Reimbursement Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tracks reimbursements in real-time for full transparency</li>
                    <li>• Automates reconciliation with Amazon payouts to reduce errors</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    AI-Powered Insights
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Analyzes return patterns to optimize operational workflows</li>
                    <li>• Highlights high-return products and identifies root causes</li>
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
            {/* 1. Return Tracking Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Return Tracking Engine
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Centralized Dashboard
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monitor all returns in one place with real-time status updates for better visibility and control.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Audit Trails
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Full traceability from item receipt to reimbursement, ensuring compliance and accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Scanning & Validation Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Scanning & Validation Core
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Scanning
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Barcode-based scanning ensures accurate SKU and tracking capture, minimizing errors.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Condition Validation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Instantly logs product condition and return reasons, maintaining precise records for compliance.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Claim & Reimbursement Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Claim & Reimbursement Layer
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Safe-T Claim Automation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically generates and validates Safe-T claims for damaged or missing items, reducing manual errors.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Reimbursement Tracking
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monitors claim statuses in real-time, ensuring maximum recovery and compliance with Amazon policies.
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
              Intuitive navigation, fast search, seamless checkout, and
              real-time tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reimbursement
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
                  src="/cp-reimbursement.webp"
                  alt="Reimbursement Page"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Return Scan
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
                  src="/cp-return-scan.webp"
                  alt="Return Scan Page"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Return Validate
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
                  src="/cp-return-validate.webp"
                  alt="Return Validate Page"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Return</h3>
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
                  src="/cp-return.webp"
                  alt="Return Page"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Safe-T Claim
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
                  src="/cp-safet-claim.webp"
                  alt="Safe-T Claim Page"
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
              Built with modern technologies for scalability, reliability, and
              seamless Amazon integration.
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
            Ready to Streamline Your Amazon Returns?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s discuss how our Return & Refund Automation System can reduce
            losses and improve efficiency.
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

export default ReturnRefundAutomationPage;
