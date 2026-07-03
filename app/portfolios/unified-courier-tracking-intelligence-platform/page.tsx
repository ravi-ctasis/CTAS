
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
  Truck,
} from "lucide-react";
import Link from "next/link";

const LemonmodeCourierPage = () => {

  const projectData = {
    title: "Unified Courier Tracking & Intelligence Platform",
    category: "Marketplace Solutions",
    industry: "E-commerce",
    description:
      "A unified platform for tracking and managing courier operations efficiently across multiple partners.",
    longDescription:
      "Businesses often work with multiple courier services—DHL, FedEx, UPS, BlueDart, Delhivery, and others. Managing shipments across separate portals is time-consuming, prone to errors, and delays customer satisfaction. This platform centralizes all courier tracking into a single dashboard, providing real-time updates, automated notifications, and streamlined delivery management for improved operational efficiency.",
    image: "/courier-tracking-simple-compose.webp",
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
      "Multiple Courier Portal Management - Operations teams struggled with managing 10+ different courier portals, leading to inefficiency and errors",
      "Lack of Real-time Visibility - No centralized view of shipment status across different courier services, making it difficult to track performance",
      "Manual Exception Handling - Delayed notifications and manual intervention required for delivery exceptions and customer issues",
      "Inconsistent Data Sources - Different data formats and update frequencies from various courier APIs created integration challenges",
      "Limited Performance Analytics - No way to compare courier performance or optimize selection based on historical data",
      "Scalability for Growing Operations - Manual processes couldn't scale with increasing shipment volumes",
    ],
    solutions: [
      "Unified Courier Integration Layer - Connects multiple courier APIs into one consolidated data source with standardized formats",
      "Real-time Tracking Engine - Processes live status updates from all couriers and provides instant visibility through WebSocket connections",
      "AI-Powered Predictive Analytics - Machine learning algorithms forecast delivery times, identify potential delays, and suggest optimization strategies",
      "Automated Exception Management - Intelligent alert system that flags delays, failed deliveries, and risks with automated notifications",
      "Performance Analytics & Reports - Generate performance reports by courier, zone, or delivery time for data-driven decisions",
      "Scalable SaaS Architecture - Flexible, scalable platform that grows with your business needs",
    ],
    results: [
      "50% Reduction in Manual Work - Automated tracking and exception handling significantly reduced manual intervention requirements",
      "99.2% Delivery Accuracy - AI-powered predictions and proactive issue detection improved overall delivery success rates",
      "30% Cost Optimization - Data-driven courier selection and route optimization reduced logistics costs significantly",
      "Real-time Customer Updates - Instant notifications and accurate tracking improved customer satisfaction and trust",
      "Centralized Visibility - All courier services in one dashboard, eliminating the need to juggle multiple portals",
    ],
    features: [
      {
        title: "All Couriers in One Place",
        description:
          "Centralized visibility across all courier carriers with unified tracking interface.",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "AI-Powered Predictions",
        description:
          "Smart ETAs and proactive issue detection using machine learning algorithms.",
        icon: TrendingUp,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Subscription Flexibility",
        description:
          "Affordable monthly/yearly plans that scale with your business size and requirements.",
        icon: Users,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Custom Alerts",
        description:
          "Instant updates on exceptions, delays, or successful deliveries via email, SMS, or app notifications.",
        icon: Cloud,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Data-Driven Courier Selection",
        description:
          "Performance analytics to identify which courier performs best for specific routes and delivery types.",
        icon: Search,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Time & Cost Savings",
        description:
          "Reduce manual work and improve logistics ROI through automation and optimization.",
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
        category: "AI & Analytics",
        technologies: [
          {
            name: "Machine Learning",
            icon: Activity,
            description: "Predictive analytics",
          },
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
                <Truck className="w-4 h-4 mr-2" />
                Courier Tracking Platform
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Unified Courier
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tracking & Intelligence Platform
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
                  src="/courier-tracking-simple-compose.webp"
                  alt="Lemonmode Courier Sync"
                  width={1000}
                  height={1000}
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
                        All Couriers in One Place
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Centralized visibility across carriers.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        AI-Powered Predictions
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Smarter ETAs and proactive issue detection.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Custom Alerts
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Instant updates on exceptions, delays, or successful
                      deliveries.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Data-Driven Courier Selection
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Identify which courier performs best for your routes.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Time & Cost Savings
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Reduce manual work and improve logistics ROI.
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

      {/* Critical Parts of the Platform */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Critical Parts of the Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core components that power our comprehensive courier tracking
              solution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 1. Courier Integration Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Courier Integration Layer
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Connects multiple APIs into one source, standardizing data
                formats and ensuring seamless communication across all courier
                services.
              </p>
            </div>

            {/* 2. Tracking Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tracking Engine
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Processes real-time status updates from all courier services,
                providing instant visibility and accurate tracking information.
              </p>
            </div>

            {/* 3. Exception Management System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Exception Management System
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Flags delays, failed deliveries, and risks automatically,
                enabling proactive problem resolution and customer
                communication.
              </p>
            </div>

            {/* 4. Predictive AI Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Predictive AI Layer
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Forecasts ETAs and risk levels using machine learning algorithms
                trained on historical delivery data and real-time conditions.
              </p>
            </div>

            {/* 5. Notification & Alerts Module */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Notification & Alerts Module
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Keeps users informed via email, SMS, or app notifications with
                customizable alert preferences and real-time updates.
              </p>
            </div>

            {/* 6. Analytics & Reports */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Analytics & Reports
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Performance tracking and optimization insights with detailed
                reports by courier, zone, or delivery time for data-driven
                decisions.
              </p>
            </div>
          </div>

          {/* 7. Subscription & User Management - Full Width */}
          <div className="mt-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Subscription & User Management
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Flexible, scalable SaaS model with user management, subscription
                tiers, and billing integration for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Flow Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              End-to-End Flow Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step process of how our courier tracking platform works
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 1. Courier APIs connected */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Courier APIs connected
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Connects to multiple courier APIs to fetch real-time data and
                shipment statuses.
              </p>
            </div>

            {/* 2. Multi-carrier data consolidated */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Multi-carrier data consolidated
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Consolidates data from various courier services into a single,
                unified dashboard.
              </p>
            </div>

            {/* 3. Tracking engine updates shipments in real-time */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tracking engine updates shipments in real-time
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Processes real-time status updates from all courier services,
                providing instant visibility and accurate tracking information.
              </p>
            </div>

            {/* 4. Exception system detects issues & triggers alerts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Exception system detects issues & triggers alerts
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Flags delays, failed deliveries, and risks automatically,
                enabling proactive problem resolution and customer
                communication.
              </p>
            </div>

            {/* 5. Predictive AI forecasts delivery outcomes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Predictive AI forecasts delivery outcomes
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Forecasts ETAs and risk levels using machine learning algorithms
                trained on historical delivery data and real-time conditions.
              </p>
            </div>

            {/* 6. Dashboard & reports present actionable insights */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Dashboard & reports present actionable insights
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Performance tracking and optimization insights with detailed
                reports by courier, zone, or delivery time for data-driven
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Courier Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how our Courier Tracking Platform can streamline
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

export default LemonmodeCourierPage;
