
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
} from "lucide-react";
import Link from "next/link";

const NjourECommercePlatformPage = () => {

  const projectData = {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    industry: "Online Retail",
    description:
      "A customer-friendly e-commerce platform designed for speed, scalability, and intelligence, delivering a seamless shopping experience for buyers and sellers.",
    longDescription:
      "E-Commerce Platform is a customer-friendly e-commerce platform designed with the speed, scalability, and intelligence of modern cloud architecture. Built to deliver a smooth shopping experience like Amazon or Flipkart, E-Commerce Platform combines fast search, secure infrastructure, and seller-friendly tools—making it the perfect marketplace for both buyers and sellers.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "S3",
      "Lambda",
      "Docker",
    ],
    link: "/portfolios/njour",
    featured: true,
    stats: {
      orders: "100k+",
      searches: "1M+",
      deliveries: "95%",
      satisfaction: "98%",
    },
    year: "2025",
    duration: "9 months",
    teamSize: "10",
    challenges: [
      "Slow product search with large catalogs",
      "High load and scaling issues",
      "Manual order processing delays",
      "Complex seller onboarding",
      "Stock mismatch and overselling",
      "Courier and delivery tracking issues",
      "Media and catalog management bottlenecks",
    ],
    solutions: [
      "ElasticSearch-powered engine delivers instant results, even with large catalogs.",
      "Cloud-native architecture on AWS + Dockerensures smooth performance under heavy traffic",
      "End-to-end automationfrom checkout → warehouse → delivery speeds up operations",
      "Integrated real-time tracking dashboardwith automated notifications for customers.",
      "Smart warehouse allocationand automated inventory syncprevent overselling.",
      "Dedicated seller dashboard, “Get in Touch” process, and warehouse integration simplify seller operations.",
      "All images on S3, automated Lambda scriptsfor category/catalog updates ensure zero downtime.",
    ],
    results: [
      "Fast Search – Instant product discovery with ElasticSearch",
      "Scalable Performance – Handles high traffic with AWS and Docker",
      "Efficient Order Processing – Automated from checkout to delivery",
      "Simplified Seller Onboarding – Streamlined process for sellers",
      "Accurate Inventory – Prevents overselling with smart allocation",
      "Real-Time Tracking – Transparent order updates for customers",
      "Reliable Media Handling – Fast browsing with S3 and Lambda",
    ],
    features: [
      {
        title: "Fast Product Search",
        description:
          "ElasticSearch-powered search for instant product discovery across large catalogs.",
        icon: Search,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Optimized Order Delivery",
        description:
          "Smart warehouse allocation and courier routing for same-day/next-day delivery.",
        icon: Package,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Real-Time Tracking",
        description:
          "Live order tracking dashboard with automated notifications via push/email/SMS.",
        icon: TrendingUp,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Seller-Friendly Tools",
        description:
          "Easy onboarding and dashboard for managing stock, prices, and orders.",
        icon: Users,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Automated Catalog Management",
        description:
          "Lambda scripts for auto-updated categories and zero-downtime catalog management.",
        icon: Database,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Secure Infrastructure",
        description:
          "Cloud-native AWS architecture with S3 for secure media storage and data handling.",
        icon: Shield,
        color: "from-teal-500 to-cyan-500",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "React.js", icon: Code, description: "Dynamic UI framework" },
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
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
        ],
      },

      {
        category: "Cloud & Storage",
        technologies: [
          { name: "AWS", icon: Cloud, description: "Cloud infrastructure" },
          { name: "S3", icon: Database, description: "Secure media storage" },
          { name: "Lambda", icon: Zap, description: "Serverless automation" },
        ],
      },
      {
        category: "Containerization",
        technologies: [
          {
            name: "Docker",
            icon: Package,
            description: "Containerized deployment",
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
                E-Commerce Platform
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                E-Commerce
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Platform
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
                    {projectData.stats.orders}
                  </div>
                  <div className="text-sm text-gray-400">Orders Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.searches}
                  </div>
                  <div className="text-sm text-gray-400">Search Queries</div>
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
                  src="/e-commerce-platform.webp"
                  alt="E-Commerce Platform"
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
                    <span className="text-gray-600">Orders Processed</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.orders}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Search Queries</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.searches}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Delivery Success</span>
                    <span className="font-semibold text-gray-900">
                      {projectData.stats.deliveries}
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
            {/* 1. Customer Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Customer Experience
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Seamless, intuitive, and fast shopping experience for customers:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clean, lightweight interface inspired by Amazon and Flipkart</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>ElasticSearch-powered instant product search</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Responsive design with smooth navigation across devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Quick and secure checkout with integrated payment options</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Delivers a fast, reliable, and user-friendly shopping experience for all customers.
              </p>
            </div>


            {/* 2. Order Management & Delivery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Order Management & Delivery
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    End-to-End Workflow
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Seamless cart-to-checkout process with integrated payments</li>
                    <li>• Auto-generated picklist and streamlined packing flow</li>
                    <li>• Automated order cancellations and refund handling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Fast & Reliable Delivery
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Smart warehouse allocation for nearest dispatch</li>
                    <li>• Optimized courier routing for faster delivery</li>
                    <li>• Same-day and next-day delivery options for eligible orders</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Real-Time Tracking & Notifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Real-Time Tracking & Notifications
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Order Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time tracking dashboard for all orders</li>
                    <li>• Automated updates from integrated courier services</li>
                    <li>• Transparent tracking to reduce customer inquiries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Notifications
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Push, email, and SMS notifications at every order stage</li>
                    <li>• Keeps customers informed and engaged throughout the delivery process</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Seller Engagement & Catalog Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Seller Engagement & Catalog Management
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Seller Tools
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Simplified onboarding through ‘Get in Touch’ process</li>
                    <li>• Seller dashboard to manage inventory, pricing, and orders</li>
                    <li>• Promotions and warehouse deals for enhanced engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Catalog Automation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated category updates using AWS Lambda scripts</li>
                    <li>• Continuous catalog management with zero downtime</li>
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
            {/* 1. Search Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Search Engine
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    ElasticSearch Integration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provides instant product discovery with ElasticSearch-powered search for high-speed performance.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Scalable & Efficient
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Optimized for large catalogs, ensuring fast, accurate, and relevant search results across the platform.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Order Processing & Delivery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Order Processing & Delivery
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Automated Workflow
                  </h4>
                  <p className="text-gray-600 text-sm">
                    End-to-end automation from cart to delivery with picklist
                    and packing flow.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Optimized Delivery
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Smart warehouse allocation and courier routing for fast
                    delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Cloud-Native Architecture */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Cloud-Native Architecture
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    AWS & S3
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Secure hosting and optimized media storage using AWS services and S3 buckets.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Lambda & Docker
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Serverless automation with Lambda and containerized deployment via Docker for high scalability and reliability.
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
              Built with modern technologies for scalability, performance, and a
              seamless shopping experience.
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
            Ready to Launch Your E-Commerce Platform?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how E-Commerce Platform can transform your online retail with
            fast search, reliable delivery, and seller-friendly tools.
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

export default NjourECommercePlatformPage;
