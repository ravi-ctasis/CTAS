"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Users,
  Award,
  BarChart,
  Layers,
  Network,
  Braces,
  Zap,
  Shield,
  Clock,
  Globe,
  Coffee,
  Rocket,
  CheckCircle,
  Search,
  TrendingUp,
  Headphones,
  FileText,
  Activity,
  Lock,
  Target,
} from "lucide-react";
import Link from "next/link";

const APIDevelopment = () => {
  const techCategories = [
    {
      title: "Backend Technologies",
      description: "Server-side development frameworks and technologies",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      technologies: [
        {
          name: "Node.js",
          icon: Braces,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "Python",
          icon: Code,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Java",
          icon: Coffee,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Express.js",
          icon: Network,
          color: "from-gray-600 to-gray-800",
          level: "Expert",
        },
        {
          name: "Django",
          icon: Code,
          color: "from-green-600 to-green-700",
          level: "Expert",
        },
        {
          name: "Spring Boot",
          icon: Coffee,
          color: "from-green-500 to-emerald-500",
          level: "Advanced",
        },
        {
          name: "FastAPI",
          icon: Code,
          color: "from-blue-600 to-blue-700",
          level: "Expert",
        },
        {
          name: "NestJS",
          icon: Braces,
          color: "from-red-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "Go",
          icon: Code,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "PHP",
          icon: Code,
          color: "from-purple-500 to-pink-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Database Technologies",
      description: "Database management systems and data storage solutions",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      technologies: [
        {
          name: "PostgreSQL",
          icon: Database,
          color: "from-blue-600 to-blue-700",
          level: "Expert",
        },
        {
          name: "MongoDB",
          icon: Database,
          color: "from-green-600 to-green-700",
          level: "Expert",
        },
        {
          name: "MySQL",
          icon: Database,
          color: "from-orange-500 to-yellow-500",
          level: "Expert",
        },
        {
          name: "Redis",
          icon: Database,
          color: "from-red-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Elasticsearch",
          icon: Database,
          color: "from-purple-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "Cassandra",
          icon: Database,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "DynamoDB",
          icon: Database,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "Firebase",
          icon: Database,
          color: "from-yellow-500 to-orange-500",
          level: "Expert",
        },
        {
          name: "Supabase",
          icon: Database,
          color: "from-green-500 to-emerald-500",
          level: "Advanced",
        },
        {
          name: "Neo4j",
          icon: Database,
          color: "from-blue-500 to-cyan-500",
          level: "Intermediate",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "API Planning & Design",
      description: "Understanding requirements and designing API architecture with best practices",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Database Design",
      description: "Creating efficient database schemas and data models",
      icon: Database,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "03",
      title: "API Development",
      description: "Building robust APIs with proper authentication and error handling",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "04",
      title: "Testing & Security",
      description: "Comprehensive testing and security measures for robust APIs",
      icon: Shield,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Deployment & Monitoring",
      description: "Deploying APIs to production and maintaining optimal performance",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const [activeTab, setActiveTab] = useState("planning");

  const apiTypes = [
    {
      title: "REST API Development",
      description:
        "Standard RESTful APIs for web and mobile applications with comprehensive documentation",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      features: [
        "HTTP/HTTPS protocols",
        "JSON/XML responses",
        "CRUD operations",
        "Authentication & Authorization",
        "Rate limiting",
        "API documentation",
      ],
      platforms: ["Web Applications", "Mobile Apps", "Third-party Integrations", "Microservices"],
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
      ],
    },
    {
      title: "GraphQL API Development",
      description:
        "Modern query language for flexible data fetching with type safety and real-time subscriptions",
      icon: Network,
      color: "from-purple-500 to-pink-500",
      features: [
        "Single endpoint",
        "Type-safe queries",
        "Real-time subscriptions",
        "Introspection",
        "Schema validation",
        "Performance optimization",
      ],
      platforms: ["React Applications", "Mobile Apps", "Real-time Systems", "Data Analytics"],
      technologies: [
        "Apollo Server",
        "GraphQL Yoga",
        "Prisma",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "WebSocket",
      ],
    },
    {
      title: "Microservices Architecture",
      description: "Scalable architecture with independent services for large-scale applications",
      icon: Layers,
      color: "from-green-500 to-emerald-500",
      features: [
        "Service isolation",
        "Load balancing",
        "Service discovery",
        "Circuit breakers",
        "Distributed tracing",
        "Container orchestration",
      ],
      platforms: [
        "Enterprise Systems",
        "Cloud Platforms",
        "Distributed Systems",
        "Scalable Applications",
      ],
      technologies: [
        "Docker",
        "Kubernetes",
        "gRPC",
        "RabbitMQ",
        "Apache Kafka",
        "Consul",
        "Istio",
        "Prometheus",
      ],
    },
    {
      title: "Real-time API Development",
      description:
        "WebSocket and Server-Sent Events for live data streaming and real-time communication",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      features: [
        "WebSocket connections",
        "Server-Sent Events",
        "Real-time messaging",
        "Live notifications",
        "Collaborative features",
        "Low latency",
      ],
      platforms: ["Chat Applications", "Gaming Platforms", "Live Streaming", "Collaborative Tools"],
      technologies: [
        "Socket.io",
        "WebRTC",
        "SignalR",
        "Redis",
        "Apache Kafka",
        "RabbitMQ",
        "Node.js",
        "WebSocket",
      ],
    },
    {
      title: "API Integration Services",
      description: "Third-party API integration and management for seamless data exchange",
      icon: Network,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Third-party API integration",
        "Data synchronization",
        "Error handling",
        "Webhook setup",
        "API monitoring",
        "Documentation",
      ],
      platforms: ["E-commerce Platforms", "Payment Systems", "Social Media", "Analytics Tools"],
      technologies: [
        "REST APIs",
        "GraphQL",
        "Webhooks",
        "OAuth",
        "JWT",
        "Rate Limiting",
        "API Gateway",
        "Monitoring Tools",
      ],
    },
    {
      title: "API Security & Compliance",
      description: "Enterprise-grade security implementation and compliance management",
      icon: Shield,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Authentication & Authorization",
        "Data encryption",
        "API rate limiting",
        "Security monitoring",
        "Compliance management",
        "Audit logging",
      ],
      platforms: ["Enterprise Systems", "Financial Services", "Healthcare", "Government"],
      technologies: [
        "JWT",
        "OAuth 2.0",
        "RBAC",
        "HTTPS",
        "API Keys",
        "Rate Limiting",
        "Security Headers",
        "Audit Logs",
      ],
    },
  ];

  const features = [
    {
      title: "High Performance",
      description: "Optimized APIs with caching and load balancing",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Security First",
      description: "Enterprise-grade security and authentication",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Scalable Architecture",
      description: "Horizontal scaling and microservices design",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Real-time Analytics",
      description: "Live monitoring and performance insights",
      icon: Activity,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "API Documentation",
      description: "Comprehensive documentation and testing tools",
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and maintenance",
      icon: Headphones,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const benefits = [
    {
      title: "Faster Development",
      description:
        "Well-designed APIs accelerate frontend development and reduce time-to-market for your applications",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      features: ["Rapid Prototyping", "Frontend Acceleration", "Time Savings", "Quick Iterations"],
    },
    {
      title: "Better Integration",
      description:
        "Seamless integration with third-party services and existing systems for enhanced functionality",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Third-party Services",
        "System Integration",
        "Data Synchronization",
        "Workflow Automation",
      ],
    },
    {
      title: "Enhanced Security",
      description:
        "Robust security measures protect your data and ensure compliance with industry standards",
      icon: Lock,
      color: "from-purple-500 to-pink-500",
      features: ["Data Protection", "Access Control", "Compliance", "Audit Trails"],
    },
    {
      title: "Scalability",
      description:
        "APIs that grow with your business, handling increased load and user demands efficiently",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      features: [
        "Load Handling",
        "Performance Optimization",
        "Resource Management",
        "Growth Support",
      ],
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce development costs and maintenance overhead with well-architected API solutions",
      icon: BarChart,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Development Savings",
        "Maintenance Reduction",
        "Resource Optimization",
        "ROI Improvement",
      ],
    },
    {
      title: "Future-Proof",
      description:
        "Modern API architecture ensures your solutions remain relevant and adaptable to future needs",
      icon: Target,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Technology Updates",
        "Feature Extensions",
        "Platform Adaptability",
        "Long-term Value",
      ],
    },
  ];

  const topicalGuide = [
    {
      id: "planning",
      title: "API Planning & Design",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "API Planning & Design Strategy",
        description:
          "Essential steps to plan and design robust APIs that meet your business requirements",
        points: [
          "Define API requirements and endpoints",
          "Design data models and schemas",
          "Plan authentication and authorization",
          "Create API documentation structure",
          "Design error handling and responses",
          "Plan for scalability and performance",
        ],
        tips: [
          "Start with clear API specifications",
          "Follow RESTful design principles",
          "Consider versioning from the beginning",
          "Plan for future integrations",
        ],
      },
    },
    {
      id: "development",
      title: "API Development",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "API Development Process",
        description: "The technical development process from coding to deployment",
        points: [
          "Set up development environment and tools",
          "Implement core API endpoints",
          "Add authentication and security",
          "Implement error handling and validation",
          "Create comprehensive tests",
          "Optimize performance and caching",
        ],
        tips: [
          "Use modern development frameworks",
          "Follow coding standards and conventions",
          "Implement comprehensive testing",
          "Document your code thoroughly",
        ],
      },
    },
    {
      id: "testing",
      title: "API Testing & Security",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      content: {
        title: "API Testing & Security Implementation",
        description: "Comprehensive testing and security measures for robust APIs",
        points: [
          "Perform unit and integration testing",
          "Conduct security vulnerability testing",
          "Test performance and load capacity",
          "Validate authentication and authorization",
          "Test error handling and edge cases",
          "Implement monitoring and logging",
        ],
        tips: [
          "Test early and test often",
          "Use automated testing tools",
          "Implement security best practices",
          "Monitor API performance continuously",
        ],
      },
    },
    {
      id: "deployment",
      title: "Deployment & Monitoring",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      content: {
        title: "API Deployment & Monitoring",
        description: "Deploying APIs to production and maintaining optimal performance",
        points: [
          "Deploy to cloud platforms or on-premise",
          "Set up monitoring and alerting",
          "Implement logging and analytics",
          "Configure backup and disaster recovery",
          "Set up CI/CD pipelines",
          "Plan for maintenance and updates",
        ],
        tips: [
          "Use containerization for deployment",
          "Implement comprehensive monitoring",
          "Set up automated backups",
          "Plan for zero-downtime deployments",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-25"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                API Development Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Enterprise{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  API Development
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We design and develop scalable, secure, and high-performance APIs that seamlessly
                connect and power your applications. From REST to GraphQL, we deliver
                enterprise-grade backend solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-3 rounded-lg">
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { number: "100+", label: "APIs Developed", icon: Code },
                { number: "99.9%", label: "Uptime", icon: Users },
                { number: "5+", label: "Years Experience", icon: Award },
                { number: "24/7", label: "Support", icon: Clock },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-purple-400" />
                    <div className="text-xl lg:text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm lg:text-base text-white/90">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {apiTypes.map((app, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg">
                  <CardContent className="p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${app.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <app.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                      {app.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-center text-sm">
                      {app.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Technologies
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Tech Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge technologies organized by development layers to build robust and
                scalable API solutions.
              </p>
            </div>

            <div className="space-y-8">
              {techCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="relative">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl mb-4 shadow-lg`}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  {/* Technologies Grid */}
                  <div
                    className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 shadow-lg`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                      {category.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="group relative bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          {/* Tech Icon */}
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <tech.icon className="w-6 h-6 text-white" />
                          </div>

                          {/* Tech Name */}
                          <h4 className="text-sm font-bold text-gray-900 text-center mb-2">
                            {tech.name}
                          </h4>

                          {/* Skill Level Badge */}
                          <div className="flex justify-center">
                            <Badge
                              className={`text-xs px-2 py-1 ${tech.level === "Expert"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : "bg-blue-100 text-blue-700 border-blue-200"
                                }`}
                            >
                              {tech.level}
                            </Badge>
                          </div>

                          {/* Hover Effect - Glow */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {categoryIndex < techCategories.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                API Development{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, and timely delivery of
                robust API solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
              {process.map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white text-center"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-300 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Key{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Features
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional API solutions with cutting-edge features and technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                Why Choose API Development?
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text">
                  Professional API Development
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Unlock new opportunities with expertly built APIs that streamline operations,
                enhance connectivity, and accelerate business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Top Border Gradient */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}
                  ></div>

                  <CardContent className="relative p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <benefit.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-start group-hover:text-gray-800 transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-start text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Topical Guide Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                Complete Guide
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Topical Guide for{" "}
                <span className="text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
                  API Development
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about API development, from planning to deployment.
              </p>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side - Vertical Tabs */}
              <div className="lg:w-80">
                <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-8">
                  <div className="space-y-3">
                    {topicalGuide.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl font-semibold transition-all duration-300 text-left ${activeTab === tab.id
                          ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === tab.id ? "bg-white/20" : `bg-gradient-to-r ${tab.color}`
                            }`}
                        >
                          <tab.icon
                            className={`w-5 h-5 ${activeTab === tab.id ? "text-white" : "text-white"
                              }`}
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{tab.title}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
                {topicalGuide.map((tab) => (
                  <div
                    key={tab.id}
                    className={`transition-all duration-500 ${activeTab === tab.id ? "block" : "hidden"
                      }`}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{tab.content.title}</h3>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {tab.content.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Key Points */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                          Key Points
                        </h4>
                        <div className="space-y-4">
                          {tab.content.points.map((point, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                <span className="text-white text-sm font-bold">{index + 1}</span>
                              </div>
                              <p className="text-gray-700 leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pro Tips */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                          Pro Tips
                        </h4>
                        <div className="space-y-4">
                          {tab.content.tips.map((tip, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-l-4 border-purple-500"
                            >
                              <div className="flex items-start">
                                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                  <span className="text-white text-sm font-bold">{index + 1}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-medium">{tip}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/95 via-teal-600/95 to-cyan-600/95"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
              Ready to Build Your{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                API Solution?
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Let&apos;s discuss your API requirements and create a robust backend solution that
              scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-3 rounded-lg">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default APIDevelopment;
