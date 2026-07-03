
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
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const AmazonReviewFeedbackPage = () => {

  const projectData = {
    title: "Amazon Review Feedback System",
    category: "E-commerce Automation",
    industry: "Amazon FBA/FBM & Multi-Marketplace",
    description:
      "Automates Amazon customer review requests, enabling sellers to efficiently manage feedback, track responses, and gain insights to enhance customer satisfaction.",
    longDescription:
      "The Review Feedback System automates Amazon customer review requests, enabling sellers to efficiently manage and monitor feedback from their customers. It helps businesses send personalized and timely review requests, track customer responses, and analyze feedback to enhance products and services. The system also allows Amazon sellers to submit their own feedback directly, providing a streamlined way to gather and manage customer opinions and improve overall satisfaction.",
    image: "/image.webp",
    technologies: [
      "Amazon SP API",
      "React.js",
      "NodeJs",
      "MongoDB",
      "Express",
      "JWT",
      "PM2",
    ],
    link: "#",
    featured: true,
    stats: {
      views: "15k",
      likes: "1.8k",
      clients: "80+",
      revenue: "$1.2M+",
      responseRate: "95%",
      reviews: "50k+",
    },
    year: "2025",
    duration: "2 months",
    teamSize: "5",
    // budget: "$400k",
    challenges: [
      "Timely Review Requests – Ensuring review requests are sent within the allowed time window.",
      "API Rate Limits – Handling Amazon API restrictions without disruption.",
      "Order Data Volume – Processing and managing large datasets of customer orders.",
      "Feedback Tracking Accuracy – Maintaining precise status updates across thousands of requests.",
      "Seller Credential Security – Protecting sensitive login and authentication data.",
    ],
    solutions: [
      "Automated Scheduling – Cron-based scheduling system ensures timely review requests.",
      "API Compliance – Intelligent throttling and delay logic to respect Amazon rate limits.",
      "Scalable Data Handling – Optimized queries and indexing for high-volume order processing.",
      "Real-Time Tracking – Status flags (Pending, Sent, Completed) ensure accuracy in feedback monitoring.",
      "Secure Authentication – JWT-based credential management for strong data security.",
    ],

    results: [
      "Improved Customer Engagement – Higher review response rates",
      "Scalable Feedback Collection – Handles large order volumes",
      "Accurate Order Tracking – Detailed order status updates",
      "Secure Data Management – Safe handling of seller credentials",
    ],
    features: [
      {
        title: "Orders Management",
        description:
          "View, filter, and manage customer orders with detailed information.",
        icon: ShoppingCart,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Search and Filtering",
        description:
          "Search orders by ID, email, or ASIN and filter by date or marketplace.",
        icon: Search,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Marketplace Integration",
        description:
          "Supports multiple marketplaces like Amazon US, IN, UK for seamless tracking.",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Action Controls",
        description:
          "Manually send review requests and monitor request status.",
        icon: Settings,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Credentials Management",
        description:
          "Securely store and manage Amazon seller credentials for API access.",
        icon: Shield,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Settings Configuration",
        description:
          "Customize review request rules, marketplace settings, and automation schedules.",
        icon: Package,
        color: "from-teal-500 to-cyan-500",
      },
      {
        title: "Automated Review Requests",
        description:
          "Schedule and automate personalized review requests for customers.",
        icon: MessageSquare,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Automated Cron Jobs",
        description:
          "Run background jobs for feedback requests with secure API authentication.",
        icon: Activity,
        color: "from-green-500 to-emerald-500",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "React.js", icon: Code, description: "Dynamic UI framework" },
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
          { name: "JWT", icon: Shield, description: "Secure authentication" },
          { name: "PM2", icon: Activity, description: "Process management" },
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
        category: "Scheduler Integrations and Reporting",
        technologies: [
          {
            name: "node-cron",
            icon: Calendar,
            description: "Task scheduling and automation",
          },
          {
            name: "morgan",
            icon: BarChart3,
            description: "HTTP request logging and analytics",
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
                <MessageSquare className="w-4 h-4 mr-2" />
                Customer Feedback Automation
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Automated Amazon
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Review & Feedback Management
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
                  <div className="text-sm text-gray-400">Revenue Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.responseRate}
                  </div>
                  <div className="text-sm text-gray-400">Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.reviews}
                  </div>
                  <div className="text-sm text-gray-400">Reviews Collected</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/amazon-review-feedback.webp"
                  alt="Amazon Review Feedback"
                  width={500}
                  height={400}
                  className="object-cover relative z-10 "
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
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Efficiency & Time-Saving
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Automates repetitive tasks, reducing manual effort.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Improved Customer Engagement
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Timely review requests increase response rates.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Accurate Order Tracking
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Detailed order status updates for better monitoring.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Enhanced Data Management
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Quick access to orders via filters and search.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Security & Compliance
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Secure credential storage and API compliance.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scalability
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Handles large order volumes without manual intervention.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Customizability
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Flexible settings for tailored review requests.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Auditability
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Logs feedback requests for traceability and compliance.
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
                <div className="flex flex-wrap gap-2 shrink-0">
                  {projectData.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 "
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
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Core Functionality & Intelligence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 1. Orders Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Orders Management
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Centralized control over customer orders with smart filtering and tracking:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Search, view, and filter all customer orders in one place</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Track details like Order ID, buyer info, items, and shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Highlight and flag orders eligible for feedback requests</span>
                </li>
              </ul>

              <p className="text-gray-600 mt-6">
                Simplifies order monitoring and ensures timely review follow-ups.
              </p>
            </div>


            {/* 2. Search and Filtering */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Search & Filtering
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Order Search
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Search by Order ID, buyer email, product name, or ASIN</li>
                    <li>• Get instant, accurate results for faster navigation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Advanced Filters
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Apply date ranges, marketplace filters, and fulfillment types</li>
                    <li>• Quickly narrow down results with dynamic filtering</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Enables fast discovery of specific orders, saving time and boosting efficiency.
              </p>
            </div>


            {/* 3. Marketplace Integration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Marketplace Integration
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Multi-Marketplace Support
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Integrates with Amazon US, IN, UK, and other regions</li>
                    <li>• Adapts to marketplace-specific rules and data formats</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Unified Order Tracking
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tracks orders seamlessly across multiple platforms</li>
                    <li>• Ensures consistent and reliable feedback collection</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Provides centralized visibility across marketplaces, simplifying global operations.
              </p>
            </div>


            {/* 4. Action Controls */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Action Controls
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Request Management
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• View and manage request status (Pending, Sent)</li>
                    <li>• Manually trigger feedback requests when needed</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Status Monitoring
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monitor all active requests at a glance</li>
                    <li>• Get real-time updates on request progress</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Empowers sellers with full control and visibility over review request actions.
              </p>
            </div>


            {/* 5. Credentials Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  5. Credentials Management
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Secure Storage
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Safely stores Client ID, Client Secret, and Seller ID</li>
                    <li>• Uses JWT encryption for authentication and validation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    API Access
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provides secure access to order fetching and feedback requests</li>
                    <li>• Fully compliant with Amazon SP-API security standards</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Ensures sensitive seller credentials are protected while enabling seamless API operations.
              </p>
            </div>


            {/* 6. Settings Configuration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  6. Settings Configuration
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Customization
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Update profile details and marketplace preferences</li>
                    <li>• Define custom rules for order matching and eligibility</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Automation Control
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Enable or disable automated scheduling as needed</li>
                    <li>• Configure review request intervals and timing</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Provides flexibility to tailor system behavior, balancing automation with business-specific needs.
              </p>
            </div>


            {/* 7. Automated Review Requests */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  7. Automated Review Requests
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Scheduling
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Configure one-time or recurring review request schedules</li>
                    <li>• Automate follow-ups with intelligent timing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Personalization
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Send personalized review requests tailored to orders</li>
                    <li>• Improve engagement and increase response rates</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Compliance & Efficiency
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Adheres to Amazon’s review request policies</li>
                    <li>• Optimized scheduling to avoid API rate limit issues</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mt-6">
                Ensures timely, personalized, and policy-compliant review requests that scale with order volume.
              </p>
            </div>


            {/* 8. Automated Cron Jobs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  8. Automated Cron Jobs
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Background Automation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sends feedback requests via scheduled jobs</li>
                    <li>• Uses secure API authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    API Compliance
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Implements throttling to avoid API limits</li>
                    <li>• Tracks requests with isNeedToSend/isSent flags</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical System Components */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Critical System Components
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1. Review Request Automation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Review Request Automation
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Automated Scheduling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically schedules review requests and follow-ups to ensure timely engagement.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Personalization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sends tailored requests for each customer, increasing the likelihood of responses.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    API Integration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Securely connects with Amazon SP API to send requests and track statuses in real-time.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Compliance & Efficiency
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures adherence to Amazon guidelines while avoiding API rate limit issues.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Order Management Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Order Management Engine
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Order Tracking
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Monitors order details including Order ID, buyer email, items, and shipping methods for complete visibility.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Search & Filters
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Quickly locate orders using multiple search criteria and advanced filters such as date ranges and marketplaces.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Eligibility Check
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically identifies orders that are eligible for review requests while preventing duplicates or ineligible entries.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Compliance & Accuracy
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures all order data is accurate and adheres to marketplace guidelines for smooth feedback management.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Feedback Analytics & Reporting */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Feedback Analytics & Reporting
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Insights Generation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Analyzes customer reviews to uncover actionable insights for product enhancements and service improvements.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Reporting Tools
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Generates detailed reports for audits, performance tracking, and strategic decision-making.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Data Visualization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Presents trends, metrics, and review statistics in interactive, easy-to-read dashboards for better understanding.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Feedback Trends & Alerts
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Highlights emerging feedback patterns and triggers alerts for critical issues requiring immediate action.
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
              performance, and reliability for customer feedback automation.
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
                  {category.technologies.map((tech, techIndex) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={techIndex} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-blue-600" />
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
                    );
                  })}
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
            Ready to Boost Your Customer Feedback?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s discuss how our Review Feedback System can enhance customer
            engagement and streamline feedback collection.
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

export default AmazonReviewFeedbackPage;
