
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
  Search,
  FileText,
  Database,
  Cloud,
  Code,
  Server,
  Settings,
  Phone,
  CheckCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";

const IKAAInspectionSystemPage = () => {

  const projectData = {
    title: "Inspection Management Web System",
    category: "Inspection Management",
    industry: "Manufacturing & Logistics",
    description:
      "A centralized inspection management platform that supports real-time and offline operations, report generation, attachment handling, and seamless data synchronization.",
    longDescription:
      "This Inspection Management Web System streamlines the entire inspection lifecycle for manufacturing and logistics operations. It enables inspectors to work online or offline, capture and store attachments, and automatically sync data across systems when connected. With built-in reporting tools, audit trails, and scalable architecture, it ensures accuracy, compliance, and operational efficiency while handling large inspection volumes with ease.",
    image: "/ikaa-inspection-web-system-dashboard.webp",
    technologies: [
      "Node.js",
      "Next.js",
      "MongoDB",
      "IndexedDB",
      "Tailwind CSS",
    ],
    link: "/portfolios/ikaa-inspection-web-system",
    featured: true,
    stats: {
      inspections: "50k+",
      reports: "10k+",
      syncs: "100k+",
      accuracy: "99.5%",
    },
    year: "2025",
    duration: "8 months",
    teamSize: "12",
    challenges: [
      "Performing inspections in offline environments",
      "Maintaining data consistency across systems",
      "Managing large volumes of attachments and images",
      "Generating detailed reports quickly",
      "Ensuring compliance with complete audit trails",
      "Scaling to handle growing inspection data",
    ],
    solutions: [
      "Offline-first support with IndexedDB for local storage",
      "Automatic synchronization with MongoDB when reconnected",
      "Efficient image compression and attachment management",
      "Automated PDF and Excel report generation with analytics",
      "Comprehensive logging for audits and system monitoring",
      "Scalable architecture powered by Node.js and MongoDB",
    ],
    results: [
      "Real-Time Insights – Accurate inspection data across operations",
      "Offline Capability – Seamless inspections without internet",
      "Efficient Reporting – Fast PDF/Excel report generation",
      "Data Consistency – Synchronized data with Export System",
      "Audit-Ready – Full logging for compliance and debugging",
      "Scalable System – Handles growing inspection volumes",
    ],
    features: [
      {
        title: "Real-Time Inspection Management",
        description:
          "Create, view, and update inspections for production, pallets, and containers.",
        icon: Search,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Offline Operation",
        description:
          "Continue inspections offline with automatic sync when connected.",
        icon: Cloud,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Report Generation",
        description:
          "Generate and export PDF/Excel reports with images and metrics.",
        icon: FileText,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Attachment Handling",
        description:
          "Upload, store, and retrieve images and documents for inspections.",
        icon: Database,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Scheduled Jobs",
        description:
          "Automate data sync, report generation, and status updates in the background.",
        icon: Zap,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Comprehensive Logging",
        description:
          "Log all user actions and system operations for audit and debugging.",
        icon: Settings,
        color: "from-teal-500 to-cyan-500",
      },
    ],
    techStack: [
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
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", icon: Server, description: "Scalable runtime" },
          { name: "Express.js", icon: Server, description: "Web framework" },
        ],
      },
      {
        category: "Database",
        technologies: [
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
        ],
      },
      {
        category: "Offline Storage",
        technologies: [
          {
            name: "IndexedDB",
            icon: Database,
            description: "Browser-based storage",
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
                <Search className="w-4 h-4 mr-2" />
                Management System
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Inspection Management
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Web System
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
                    {projectData.stats.inspections}
                  </div>
                  <div className="text-sm text-gray-400">
                    Inspections Processed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.reports}
                  </div>
                  <div className="text-sm text-gray-400">Reports Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.accuracy}
                  </div>
                  <div className="text-sm text-gray-400">Data Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/inspection-management-web-system.webp"
                  alt="Inspection Web System"
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
                    <span className="text-gray-600">Inspections Processed</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.inspections}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Reports Generated</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.reports}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Offline Syncs</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.syncs}
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
            {/* 1. Inspection Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Inspection Management
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Centralized inspection workflows for production, pallets, and containers:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Create, view, and update inspection records</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Track real-time statuses, remarks, and results</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Attach images, documents, and notes with ease</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advanced filtering by status, date, or order ID</span>
                </li>
              </ul>

              <p className="text-gray-600 mt-6">
                Delivers accurate, efficient, and audit-ready inspection management.
              </p>
            </div>


            {/* 2. Report Generation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Report Generation
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    PDF & Excel Reports
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Generate detailed inspection and invoice reports</li>
                    <li>Include images, remarks, and key performance metrics</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Export & Sharing
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Download reports in PDF or Excel formats</li>
                    <li>Share reports with internal teams or external stakeholders</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Data Synchronization */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Data Synchronization
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Offline Support
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Store inspection data locally in IndexedDB</li>
                    <li>Continue inspections and data entry without internet</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Automatic Synchronization
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Sync all changes to MongoDB when online</li>
                    <li>Maintain consistency with Export System and reports</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Attachment & Logging */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Attachment & Logging
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Image & Document Handling
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Upload and manage images, documents, and supporting files</li>
                    <li>Optimized storage and compression for faster performance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Comprehensive Logging
                  </h4>
                  <ul className="space-y-2 text-gray-600 list-disc list-inside">
                    <li>Track all user actions and system events in detail</li>
                    <li>Provide audit-ready logs to support compliance and debugging</li>
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
            {/* 1. Inspection Management Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Inspection Management Engine
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Inspection Operations
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Create, update, and track inspections for production,
                    pallets, and containers.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Filtering and Search
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Search inspections by status, date, or order with
                    pagination.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Report Generation Module */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Report Generation Module
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Comprehensive Reports
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Generate professional PDF and Excel reports enriched with images, metrics, and inspection details.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Flexible Export
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Export and share reports seamlessly in multiple formats for stakeholders and audits.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Data Synchronization Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Data Synchronization Layer
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Offline Storage
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Securely store inspection data in IndexedDB for uninterrupted use during offline operations.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Automatic Synchronization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Seamlessly sync all changes with MongoDB and the Export System once an internet connection is restored.
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
              Built with modern technologies to ensure scalability, reliability,
              and offline support for inspection management.
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
            Ready to Streamline Your Inspection Processes?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how the IKAA Inspection Web System can enhance
            your operations with real-time and offline capabilities.
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

export default IKAAInspectionSystemPage;
