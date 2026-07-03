
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

const TilesManagementSystemPage = () => {

  const projectData = {
    title: "Tiles Management System",
    category: "E-commerce Automation",
    industry: "Tiles Industry",
    description:
      "A centralized, enterprise-grade platform for managing tile production, domestic and international sales, buyers, sellers, and secure workflows with real-time visibility.",
    longDescription:
      "A web-based, scalable system designed to streamline the complete lifecycle of tile sales and distribution across global and domestic markets. The platform enables efficient management of product catalogs, buyer–seller interactions, order processing, invoicing, production tracking, and secure link sharing. With role-based access controls and advanced reporting, it ensures transparency, operational efficiency, and seamless collaboration for manufacturers, distributors, and sales teams.",
    image: "/tiles-management-system.webp",
    technologies: [
      "Node.js",
      "React",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "Elasticsearch",
      "RabbitMQ",
    ],
    link: "#",
    featured: true,
    stats: {
      views: "20k",
      likes: "2.5k",
      clients: "100+",
      revenue: "$1.8M+",
      efficiency: "90%",
      accuracy: "98.5%",
    },
    year: "2024",
    duration: "10 months",
    teamSize: "15",
    budget: "$350k",
    challenges: [
      "Data duplication across multiple markets leading to operational inefficiencies",
      "Manual order processing errors causing delays and inaccuracies",
      "Inefficient supplier coordination affecting production timelines",
      "Complexities in managing cross-border sales and compliance",
      "Limited real-time visibility into sales, orders, and production",
      "Scalability challenges for growing number of users and transactions",
    ],

    solutions: [
      "Centralized data hub with unique identifiers to eliminate duplication and streamline operations",
      "Automated validation for orders and invoices to reduce manual errors and improve accuracy",
      "Streamlined supplier workflows for efficient production coordination",
      "Dynamic, market-specific configurations to simplify cross-border sales operations",
      "Real-time analytics and reporting for actionable insights and improved decision-making",
      "Scalable system architecture supporting multiple users and high-volume transactions",
    ],

    results: [
      "Centralized Data – All records systematically stored, significantly reducing errors",
      "Scalability – Seamlessly supports growth in buyers, sellers, and transactions",
      "Data Security – Ensures role-based, user-specific data access",
      "Improved Communication – Shareable links enable efficient information exchange",
      "Transparency & Accuracy – Accurate invoices, bills, and production data for stakeholders",
    ],

    features: [
      {
        title: "Comprehensive Dashboard",
        description:
          "Unified dashboard with real-time insights on sellers, buyers, tile designs sold, revenue, production volumes, and detailed reports.",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Dedicated Seller Account",
        description:
          "Sellers manage inventory, track sales, access production reports, and view customer-specific data securely.",
        icon: Users,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Dedicated Buyer Account",
        description:
          "Buyers track purchase history, monitor order-specific production data, and manage transactions securely.",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Link Generation for Tiles",
        description:
          "Generate and share tile-specific links for seamless communication and tracking without compromising security.",
        icon: Cloud,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Link Management and Tracking",
        description:
          "Super admin manages all links with metadata, tracking engagement and highlighting top-selling tiles.",
        icon: Search,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Secure Data Access",
        description:
          "Ensures sellers and buyers access only their relevant data, maintaining privacy and confidentiality.",
        icon: Shield,
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
                <ShoppingCart className="w-4 h-4 mr-2" />
                E-commerce Automation
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Tiles Management
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  System
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
                  src="/tiles-management-system.webp"
                  alt="Desktop Responsive Website Design"
                  width={500}
                  height={320}
                  className="
        object-cover relative z-10
      "
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
                        Centralized Data
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      All records are systematically stored, reducing errors and
                      improving access across sellers, buyers, and admins.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scalability
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Supports growth in buyers and sellers without compromising
                      performance, enabling seamless expansion.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Data Security
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Ensures each user accesses only their relevant
                      information, maintaining privacy and confidentiality.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Ease of Communication
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Shareable links enable fast and efficient information
                      exchange between sellers, buyers, and admins.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Transparency and Accuracy
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Accurate invoices, bills, and production data are easily
                      accessible, ensuring transparency.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Enhanced Reporting
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Detailed analytics on sales, production, and market trends
                      empower data-driven decisions.
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
            {/* 1. Comprehensive Dashboard */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Comprehensive Dashboard
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Unified dashboard providing real-time insights:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Total number of sellers and buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Total tile designs sold</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Amount raised from sold tiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed bill reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Production volumes and statistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Seller and buyer-specific invoices</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Provides accurate and updated information for decision-making.
              </p>
            </div>

            {/* 2. Dedicated Seller Account */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Dedicated Seller Account
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Inventory and Sales Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Store and track all tiles sold and unsold</li>
                    <li>
                      • Access detailed reports on production and inventory
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Invoice and Transaction Management
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Manage invoices and transaction history</li>
                    <li>• View customer-specific data securely</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Data Privacy
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sellers view only their own data</li>
                    <li>
                      • Example: Savanbhai sees only his 5 customers details
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Dedicated Buyer Account */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Dedicated Buyer Account
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Purchase History Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Track purchase history, bills, and order details</li>
                    <li>• Monitor production-specific data for orders</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Transaction and Inventory Management
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Manage transactions and inventory securely</li>
                    <li>• Access only relevant buyer data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Data Confidentiality
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Buyers view only their own information</li>
                    <li>• Ensures data integrity and confidentiality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Link Generation and Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Link Generation and Management
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Shareable Links
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Select tiles and generate shareable links</li>
                    <li>
                      • Send links to sellers or buyers for seamless sharing
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Link Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Super admin manages all links with metadata</li>
                    <li>• Track engagement and highlight top-selling tiles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Secure Access
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sellers and buyers access only their links</li>
                    <li>• Maintains data security during sharing</li>
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
            {/* 1. Comprehensive Data Hub */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Comprehensive Data Hub
                </h3>
              </div>

              <div className="space-y-6">
                {/* Centralized Storage */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Centralized Storage
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Systematically stores all records, including buyers, sellers, inventory, and transactions, minimizing errors and improving operational efficiency.
                  </p>
                </div>

                {/* Unique Identifiers */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Unique Identifiers
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Generates conflict-resistant, market-specific identifiers for tiles, eliminating duplication and ensuring data integrity across all sales channels.
                  </p>
                </div>

                {/* Scalable Architecture */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Scalable Architecture
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Designed to handle increasing numbers of users, transactions, and data volume without compromising performance or reliability.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Secure Data Access Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Secure Data Access Layer
                </h3>
              </div>

              <div className="space-y-6">
                {/* User-Specific Access */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    User-Specific Access
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Role-based access ensures that buyers and sellers can view and manage only their own data, maintaining privacy and confidentiality across the platform.
                  </p>
                </div>

                {/* Data Integrity */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Data Integrity
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Prevents unauthorized cross-access between users, safeguarding sensitive information and ensuring secure data boundaries at all times.
                  </p>
                </div>

                {/* Audit Trails */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Audit Trails
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive logs track all user interactions and data changes, providing transparency, accountability, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Analytics and Reporting Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Analytics and Reporting Engine
                </h3>
              </div>

              <div className="space-y-6">
                {/* Sales and Production Analytics */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Sales and Production Analytics
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monitors buyer activity, tile sales, and production volumes in real-time, providing actionable insights to optimize operations and inventory management.
                  </p>
                </div>

                {/* Market Trends */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Market Trends
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Generates reports on discontinued tiles, demand patterns, and emerging market trends, enabling strategic product planning and decision-making.
                  </p>
                </div>

                {/* Custom Reports */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Custom Reports
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provides buyers and sellers with tailored reports and insights based on historical data and usage patterns, supporting informed business decisions.
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
            Ready to Transform Your Tiles Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our Tiles Management System can streamline
            your operations and boost your global sales.
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

export default TilesManagementSystemPage;
