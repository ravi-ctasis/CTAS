
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
  Package,
  Phone,
  Search,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const MyboekenOnlineWebshopPage = () => {

  const projectData = {
    title: "bookstore – Your Ultimate Online Webshop",
    category: "E-commerce",
    industry: "Online Bookstore",
    description: "A dedicated online bookstore offering an extensive collection of English-language books, optimized for efficient book discovery and purchase across the EU.",
    longDescription: "bookstore is a specialized e-commerce platform for books only, designed to simplify browsing, ordering, and tracking across millions of titles. The platform serves book buyers and sellers across the EU zone, offering a fast, precise, and user-friendly experience with ElasticSearch-powered search, full order lifecycle management, EU payment methods, VAT compliance, and automated returns/refunds.",
    image: "/bookstore-hero.webp",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "ElasticSearch",
      "AWS",
      "S3",
      "Docker",
    ],
    link: "#",
    featured: true,
    stats: {
      books: "26M+",
      orders: "100k+",
      satisfaction: "98%",
      deliveries: "95%",
    },
    year: "2025",
    duration: "10 months",
    teamSize: "15",
    budget: "$350k",
    challenges: [
      "Handling over 26 million book records efficiently",
      "Providing lightning-fast search across millions of titles",
      "Tracking complex orders across multiple EU warehouses",
      "Preventing inventory mismatches and overselling",
      "Ensuring compliance with country-specific VAT regulations",
      "Supporting multiple payment gateways seamlessly",
      "Managing returns and refunds across EU countries",
      "Maintaining high performance under heavy traffic spikes",
    ],
    solutions: [
      "Leveraged MongoDB + ElasticSearch for high-volume, real-time queries",
      "Implemented optimized ElasticSearch indexing for instant search results",
      "Built an integrated tracking dashboard for real-time order visibility",
      "Automated stock synchronization across warehouses and sellers",
      "Applied dynamic VAT rules per country automatically",
      "Integrated multiple EU payment gateways including Visa, MasterCard, PayPal, Klarna, iDeal, Bancontact, Sofort",
      "Developed automated return & refund workflows to reduce manual effort",
      "Deployed on AWS cloud with Docker for scalability and high availability",
    ],

    results: [
      "Rapid Search – Instant book discovery across millions of titles",
      "Efficient Inventory – Accurate stock management preventing overselling",
      "Seamless Order Processing – Full lifecycle from checkout to delivery",
      "EU Compliance – Automated VAT and multi-currency handling",
      "Flexible Payments – Support for all major EU methods",
      "High Satisfaction – Fast delivery and easy returns boosting trust",
    ],
    features: [
      {
        title: "ElasticSearch Optimization",
        description:
          "Fast search across millions of books with precise, instant results.",
        icon: Search,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Scalable Inventory Management",
        description:
          "Handles massive datasets reliably with MongoDB and automated sync.",
        icon: Database,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Full Order Management Automation",
        description: "Checkout, shipping, tracking, returns, and refunds.",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "EU-Ready Compliance",
        description: "Country-specific VAT and multi-currency handling.",
        icon: Shield,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Payment Flexibility",
        description:
          "Supports Visa, MasterCard, PayPal, Klarna, iDeal, Bancontact, Sofort.",
        icon: TrendingUp,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Modern Tech Stack",
        description:
          "React, Node.js, MongoDB, Docker, AWS, S3, ElasticSearch for speed and scalability.",
        icon: Zap,
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
        ],
      },
      {
        category: "Search Engine",
        technologies: [
          {
            name: "ElasticSearch",
            icon: Search,
            description: "Fast book search",
          },
        ],
      },
      {
        category: "Cloud & DevOps",
        technologies: [
          { name: "AWS", icon: Cloud, description: "Cloud infrastructure" },
          { name: "S3", icon: Database, description: "Secure media storage" },
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
                <BookOpen className="w-4 h-4 mr-2" />
                Online Bookstore Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                bookstore
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Your Ultimate Online Webshop
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
                    {projectData.stats.books}
                  </div>
                  <div className="text-sm text-gray-400">
                    Books in Inventory
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.orders}
                  </div>
                  <div className="text-sm text-gray-400">Orders Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.satisfaction}
                  </div>
                  <div className="text-sm text-gray-400">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/book-setore-img.webp"
                  alt="bookstore Online Webshop"
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
                    <span className="text-gray-600">Books in Inventory</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.books}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Orders Processed</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.orders}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.satisfaction}
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
            {/* 1. Catalog Discovery & Search */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Catalog Discovery & Search
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Discover books instantly with advanced search capabilities tailored for millions of titles:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>ElasticSearch-powered instant search for books and authors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>View detailed book info, pricing (including VAT), and stock availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimized for high-volume catalogs with millions of titles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Faceted filtering and sorting for precise book discovery</span>
                </li>
              </ul>

              <p className="text-gray-600 mt-6">
                Enables users to find the right book quickly with accurate and responsive search.
              </p>
            </div>


            {/* 2. Secure Checkout & Payments */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Secure Checkout & Payments
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Payment Methods
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Supports Visa, MasterCard, PayPal, Klarna</li>
                    <li>• iDeal, Bancontact, Sofort for EU customers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    VAT & Compliance
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Country-specific VAT applied automatically during checkout</li>
                    <li>• Handles multiple currencies across EU regions</li>
                    <li>• Ensures tax compliance with EU regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Order Lifecycle Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Order Lifecycle Management
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                End-to-end order handling from warehouse processing to delivery confirmation.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Warehouse Operations
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Intelligent warehouse selection for fastest fulfillment</li>
                    <li>• Automated picklists, packing, and inventory updates</li>
                    <li>• Optimized order batching for efficiency</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Shipping & Delivery
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Integrated courier partners with live tracking</li>
                    <li>• Automatic delivery confirmation and status notifications</li>
                    <li>• Alerts for delays or exceptions to ensure timely resolution</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Order Analytics
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Insights on fulfillment speed and delivery performance</li>
                    <li>• Identifies bottlenecks and suggests optimizations</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Returns & Refunds */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Returns & Refunds
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Efficient and compliant handling of returns and refunds to enhance customer satisfaction.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Automated Return Workflows
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Simplified return initiation and processing for customers</li>
                    <li>• Auto-generated refund transactions linked with order history</li>
                    <li>• Integration with inventory to update returned stock automatically</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Compliance & Reporting
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ensures EU-compliant return policies and tax handling</li>
                    <li>• Tracks refunds, customer credits, and inventory adjustments</li>
                    <li>• Generates reports for auditing and operational insights</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Customer Experience
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Clear status updates for every return request</li>
                    <li>• Reduces processing time to increase customer trust and satisfaction</li>
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
            {/* 1. ElasticSearch Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. ElasticSearch Engine
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                High-performance search engine optimized for millions of book records.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Optimized Indexing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Efficiently indexes millions of books to deliver instant search results with accurate relevance ranking.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Scalable & Real-Time Search
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Handles high traffic with fast query responses, ensuring users can discover books across the catalog seamlessly.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Advanced Filtering & Sorting
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Supports filters by category, author, price, availability, and VAT-inclusive pricing for precise search results.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Order Management Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Order Management Core
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Comprehensive system for managing the entire order lifecycle efficiently.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Full Lifecycle Automation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automates checkout, warehouse selection, order picking, packing, shipping, and delivery confirmation for seamless order processing.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Returns & Refunds
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Manages returns with automated workflows, refund reconciliation, and updates to inventory, ensuring compliance and customer satisfaction.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-Time Tracking & Notifications
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provides live updates to customers and internal dashboards for order status, shipping progress, and delivery confirmation.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Compliance & Payment Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Compliance & Payment Layer
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Ensures secure, compliant transactions for EU customers with flexible payment support.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    EU VAT Compliance
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically calculates and applies country-specific VAT rules for all purchases, ensuring full EU tax compliance.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Multi-Payment Integration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Supports major EU payment methods including Visa, MasterCard, PayPal, Klarna, iDeal, Bancontact, and Sofort for a seamless checkout experience.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure Transactions
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Implements end-to-end encryption and secure payment gateways to protect customer data and transaction integrity.
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
              performance, and reliability for online book commerce.
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
            Ready to Launch Your Online Bookstore?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how bookstore.nl can provide a seamless e-commerce
            experience for books with fast search and EU compliance.
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

export default MyboekenOnlineWebshopPage;
