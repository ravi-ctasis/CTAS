
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
  Play,
  Phone,
  Search,

  Truck,
} from "lucide-react";
import Link from "next/link";

const AmazonRepricingSystemPage = () => {

  const projectData = {
    title: "Intelligent Repricing System for E-Commerce Growth",
    category: "E-commerce Automation",
    industry: "Amazon FBA/FBM",
    description:
      "An intelligent repricing engine that optimizes prices across millions of SKUs in real-time, ensuring competitiveness and profitability on marketplaces like Amazon.",
    longDescription:
      "E-commerce is more competitive than ever. Marketplaces like Amazon, Cdiscount, and others change dynamically every second—where even a few cents difference can decide who wins the Buy Box. Managing millions of SKUs manually is impossible. Monitoring competitors, applying business rules, calculating margins, and updating prices across multiple platforms requires a scalable, automated solution. Our repricing system is an intelligent engine that continuously optimizes prices across large-scale inventories while protecting profitability.",
    image: "/image.webp",
    technologies: [
      "Amazon SP API & Business API",
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
      buyBox: "95%",
    },
    year: "2025",
    duration: "8 months",
    teamSize: "12",
    budget: "$400k",
    challenges: [
      "Rapid competitor price fluctuations requiring constant monitoring",
      "Handling massive volumes of SKUs and pricing data efficiently",
      "Ensuring low-latency updates and maintaining data freshness",
      "Balancing large-scale automation with profitability protection",
    ],

    solutions: [
      "High-frequency repricing cycles with intelligent throttling mechanisms",
      "Optimized bulk write-backs, efficient database queries, and batch updates",
      "Prioritization pipelines for high-value SKUs and fast processing",
      "Consistent application of margin-protected rules across all SKUs",
    ],

    results: [
      "Enterprise-Scale Performance – Handles millions of inventory updates",
      "More Buy Boxes Won – Real-time price optimization",
      "Boosted Sales Velocity – Faster inventory movement",
      "Margin Protection – Prevents loss-making prices",
    ],
    features: [
      {
        title: "Fetch Competitor Data",
        description:
          "Retrieves competitor pricing and stock from marketplace APIs, handling massive data sets for quick analysis.",
        icon: Zap,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "Analyze & Apply Business Rules",
        description:
          "Applies strategies like margin thresholds and competitor positioning, scaling from a few SKUs to millions.",
        icon: Package,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Check Stock & Eligibility",
        description:
          "Updates quantities to zero for out-of-stock or ineligible items, preventing listing errors.",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Calculate New Price",
        description:
          "Generates optimized prices balancing competitiveness and profitability, efficient for millions of rows.",
        icon: Search,
        color: "from-orange-500 to-red-500",
      },
      {
        title: "Append Price History",
        description:
          "Logs every price change for trend analysis and compliance audits, enabling strategic insights.",
        icon: Truck,
        color: "from-indigo-500 to-purple-500",
      },
      {
        title: "Bulk Write Back",
        description:
          "Updates tbl_amazon_in_inventories in batches of 1,000 for speed and reliability.",
        icon: Shield,
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
                E-commerce Repricing Solution
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Intelligent Repricing
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Engine for Multi-Marketplace Growth
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
                    {projectData.stats.buyBox}
                  </div>
                  <div className="text-sm text-gray-400">Buy Box Wins</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/intelligent-repricing-system-img.webp"
                  alt="Amazon Review Feedback"
                  width={500}
                  height={400}
                  className="object-cover relative z-10"
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
                        Enterprise-Scale Performance
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Handles millions of inventory updates without slowing
                      down.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        More Buy Boxes Won
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Outperforms competitors with real-time price optimization.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Boosted Sales Velocity
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Moves inventory faster while staying competitive.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Margin Protection
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Custom rules prevent loss-making prices.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Full Automation
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      From data fetching to bulk updates, no manual work needed.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Data-Driven Insights
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Price history logs enable strategic intelligence.
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
            {/* 1. Fetch Competitor Data */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Fetch Competitor Data
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Continuously retrieves competitor pricing and stock data from marketplace APIs for actionable insights:
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Connects seamlessly to Amazon SP API and Business API</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Handles large-scale datasets for rapid analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cleans, structures, and prioritizes data efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Supports multiple marketplaces including Cdiscount and others</span>
                </li>
              </ul>

              <p className="text-gray-600 mt-6">
                Provides real-time competitor insights to enable precise and dynamic repricing.
              </p>
            </div>


            {/* 2. Analyze & Apply Business Rules */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Analyze & Apply Business Rules
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Pricing Strategies
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Applies margin thresholds, shipping costs, and marketplace fees</li>
                    <li>• Considers competitor positioning and Buy Box dynamics</li>
                    <li>• Scales pricing decisions from a few to millions of SKUs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Customizable Rules
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• User-defined pricing strategies tailored to business needs</li>
                    <li>• Ensures consistent application across multiple marketplaces</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Check Stock & Eligibility */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Check Stock & Eligibility
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Inventory Validation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatically sets quantity to zero for out-of-stock SKUs</li>
                    <li>• Flags ineligible products to prevent listing errors</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Compliance & Accuracy
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ensures compliance with marketplace rules and policies</li>
                    <li>• Maintains accurate representation of inventory across platforms</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Calculate New Price */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Calculate New Price
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Optimized Pricing
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Continuously balances competitiveness and profitability</li>
                    <li>• Efficiently calculates optimal prices for millions of SKUs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Performance & Scalability
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Prevents performance bottlenecks during repricing cycles</li>
                    <li>• Supports real-time price adjustments across multiple marketplaces</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 5. Append Price History */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  5. Append Price History
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Trend Analysis
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Logs every price change for actionable insights</li>
                    <li>• Enables forecasting and strategy refinement for future repricing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Compliance & Audit
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maintains audit-ready historical records</li>
                    <li>• Supports compliance with marketplace rules and regulations</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 6. Bulk Write Back */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  6. Bulk Write Back
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Batch Updates
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Updates thousands of records per batch efficiently</li>
                    <li>• Optimized for speed, reliability, and minimal downtime</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Scalability
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Handles millions of updates per cycle without performance degradation</li>
                    <li>• Ensures database integrity and stability at scale</li>
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
            {/* 1. Repricing Engine */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Repricing Engine
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Competitor Data Fetching
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Retrieves real-time competitor pricing and stock data through APIs for accurate decision-making.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Price Optimization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Calculates optimal prices balancing competitiveness and profitability with margin safeguards.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    High-Frequency Cycles
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Executes frequent repricing cycles with intelligent throttling to respond to market volatility.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Data Processing Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Data Processing Core
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Batch Processing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Processes millions of SKUs efficiently using optimized database queries for speed and reliability.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Data Cleaning & Structuring
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Normalizes and structures large datasets to enable fast, accurate analysis.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Scalability
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Designed to support high-volume operations without performance bottlenecks.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Compliance & Logging Layer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Compliance & Logging Layer
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Price History Logging
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Captures all price changes for audit trails, trend analysis, and business insights.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Marketplace Compliance
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures all repricing actions follow Amazon and other marketplace rules, avoiding penalties.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Data-Driven Insights
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Provides actionable insights to refine pricing strategies and forecast trends effectively.
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
              performance, and reliability for e-commerce repricing.
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
            Ready to Optimize Your E-Commerce Pricing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let’s discuss how our intelligent repricing system can boost your
            Buy Box wins and profitability.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/portfolios">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                View Project
              </Button>
            </Link>
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

export default AmazonRepricingSystemPage;
