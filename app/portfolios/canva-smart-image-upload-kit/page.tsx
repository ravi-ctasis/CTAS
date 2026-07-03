
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
} from "lucide-react";
import Link from "next/link";

const CanvaSmartImageUploadKitPage = () => {

  const projectData = {
    title: "Canva Smart Image Upload Kit",
    category: "E-commerce Image Automation",
    industry: "Amazon FBA",
    description:
      "Automates fetching, processing, and rendering of keychain order images into structured Canva grids for Amazon sellers.",
    longDescription:
      "The Canva Smart Image Upload Kit streamlines image processing for Amazon keychain orders by automating data retrieval, image cropping, and grid rendering. It integrates with the Amazon SP-API, filters orders by ASIN, and leverages the Canva UI Kit to deliver visually consistent grid templates, reducing manual effort and ensuring accuracy.",
    image: "/image.webp",
    technologies: ["React", "Node.js", "MongoDB", "Canva UI Kit", "Docker"],
    link: "#",
    featured: true,
    stats: {
      views: "20k",
      likes: "2.5k",
      clients: "100+",
      efficiency: "90%",
      accuracy: "98%",
    },
    year: "2025",
    duration: "6 months",
    teamSize: "10",
    budget: "$300k",
    challenges: [
      "Manual processing of keychain order images",
      "Ensuring precise cropping based on buyer placement and mask data",
      "Handling high-volume order retrieval and filtering",
      "Managing storage for large image assets",
      "Maintaining Amazon API compliance and security",
      "Rendering scalable grids for multiple layout types",
    ],
    solutions: [
      "Automated fetching of orders via Amazon SP-API",
      "Accurate image cropping using intersection and mask calculations",
      "ASIN-based filtering to target keychain orders",
      "Automatic folder cleanup after 48 hours to manage storage",
      "Secure access using Regulated Data Tokens",
      "Dynamic grid generation leveraging Canva UI Kit templates",
    ],
    results: [
      "Zero-Touch Image Processing – Fully automated order-to-grid workflow",
      "Error-Free Cropping – Accurate image rendering with buyer placement",
      "Scalable Operations – Handles high-volume keychain orders",
      "Amazon Compliance – Secure and compliant API interactions",
      "Customizable Grids – Flexible layouts for diverse use cases",
    ],

    techStack: [
      {
        category: "Frontend",
        technologies: [
          { name: "React", icon: Code, description: "Dynamic UI framework" },
          {
            name: "Canva UI Kit",
            icon: Code,
            description: "Grid rendering library",
          },
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
          { name: "Express.js", icon: Server, description: "Web framework" },
          { name: "MongoDB", icon: Database, description: "NoSQL database" },
        ],
      },
      {
        category: "APIs & Integration",
        technologies: [
          {
            name: "Amazon SP-API",
            icon: Cloud,
            description: "Order data retrieval",
          },
          {
            name: "Regulated Data Token",
            icon: Shield,
            description: "Secure API access",
          },
        ],
      },
      {
        category: "DevOps",
        technologies: [
          { name: "Docker", icon: Package, description: "Containerization" },
          { name: "AWS", icon: Cloud, description: "Cloud infrastructure" },
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
                Image Automation Solution
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Canva Smart Image
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Upload Kit
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
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {projectData.stats.clients}
                  </div>
                  <div className="text-sm text-gray-400">Clients Served</div>
                </div>
              </div>
            </div>

            {/* Right Content - Project Preview */}
            <div className="relative w-full m-0">
              <div className="flex justify-center items-center gap-0 m-0 w-full max-w-full">
                <Image
                  src="/canva-ui-kit.webp"
                  alt="Desktop Responsive Image Grid Design"
                  width={500}
                  height={320}
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
                        Zero-Touch Image Processing
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Fully automated workflow from order fetching to grid
                      generation.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Precise Image Cropping
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Accurate rendering with buyer placement and mask data.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Scalable Operations
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Handles high-volume keychain orders efficiently.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Amazon Compliance
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Secure and compliant API interactions with Amazon SP-API.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Customizable Grids
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Flexible layouts for diverse business needs.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Efficient Asset Management
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Organized storage with automated cleanup.
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
            {/* 1. Automated Order Fetching */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. Automated Order Fetching
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Seamlessly retrieves keychain orders from Amazon SP-API with intelligent filtering and secure access:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scheduled hourly order fetching via cron jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>ASIN-based filtering specifically for keychain orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Secure data access using Regulated Data Tokens</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>API rate-limiting to ensure compliance and prevent throttling</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-6">
                Guarantees accurate, timely, and compliant order data retrieval.
              </p>
            </div>


            {/* 2. Dynamic Grid Rendering */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Dynamic Grid Rendering
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Grid Generation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Renders images on a 1200x800px canvas for high-resolution output</li>
                    <li>• Configurable spacing, margins, and image heights for flexible layouts</li>
                    <li>• Supports multi-page layouts with automatic page-break handling</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    User Interaction
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Preview and adjust grid layouts before final rendering</li>
                    <li>• Automatic download of generated templates for efficiency</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Canva UI Kit Integration
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ensures consistent, professional, and branded grid rendering</li>
                    <li>• Supports custom layout configurations for different order types</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 3. Image Processing Pipeline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Image Processing Pipeline
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Intersection Calculations
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Calculates precise cropping coordinates for keychain images</li>
                    <li>• Accounts for buyer placement and mask data to maintain accuracy</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Image Cropping & Validation
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Utilizes Sharp for efficient cropping, rotation, and resizing</li>
                    <li>• Validates image dimensions to prevent processing errors</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Scalable Backend Processing
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Offloads heavy processing to backend services for performance</li>
                    <li>• Supports high-volume image handling for large Amazon orders</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* 4. Asset Management & Storage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Asset Management & Storage
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Structured Storage
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Organizes assets in /public/orderDate/ directories</li>
                    <li>• Extracts ZIP files containing images and JSON metadata</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Automated Cleanup
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automatically deletes folders older than 48 hours</li>
                    <li>• Optimizes disk space usage for efficient storage</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Logging & Monitoring
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maintains detailed logs for asset extraction and processing</li>
                    <li>• Tracks errors and system events for debugging and audits</li>
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
            {/* 1. Amazon Fetcher */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  1. Amazon Fetcher
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Order Retrieval
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automatically fetches keychain orders from Amazon SP-API on an hourly schedule.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure Data Access
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensures compliance using Regulated Data Tokens for secure API access.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    ASIN-Based Filtering
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Filters and prioritizes orders by specific ASINs for accuracy and relevance.
                  </p>
                </div>
              </div>
            </div>


            {/* 2. Image Processing Core */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  2. Image Processing Core
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Intersection Calculations
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Computes precise cropping coordinates and rotation points for accurate image placement.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Image Cropping
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Utilizes Sharp for fast and efficient cropping, rotation, and validation of image dimensions.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Scalable Rendering
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Offloads processing to the backend to handle high-volume image workflows seamlessly.
                  </p>
                </div>
              </div>
            </div>


            {/* 3. Grid Rendering & Frontend */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3. Grid Rendering & Frontend
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Dynamic Grid Generation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Renders images in responsive, customizable grid layouts leveraging the Canva UI Kit for consistent visual structure.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Interactive Preview & Adjustment
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Allows users to preview grids, adjust layouts, and automatically download finalized templates.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    React-Powered UI
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Built with React for a smooth, responsive, and intuitive user experience.
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
              Built with modern technologies for scalability, performance, and
              seamless image automation.
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
            Ready to Automate Your Image Processing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how the Canva Smart Image Upload Kit can
            streamline your Amazon keychain order processing.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact-us">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CanvaSmartImageUploadKitPage;
