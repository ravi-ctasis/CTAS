"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Users,
  Target,
  Clock,
  CheckCircle,
  Code,
  Search,
  TrendingUp,
  Headphones,
  Activity,
  Hexagon,
  Globe,
  DollarSign,
  Settings,
  Lock,
  Circle,
  Container,
} from "lucide-react";
import Link from "next/link";

const CloudSolutions = () => {
  const techCategories = [
    {
      title: "Cloud Platforms",
      description: "Leading cloud service providers and platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      technologies: [
        {
          name: "AWS",
          icon: Cloud,
          color: "from-orange-500 to-yellow-500",
          level: "Expert",
        },
        {
          name: "Microsoft Azure",
          icon: Cloud,
          color: "from-blue-500 to-blue-600",
          level: "Expert",
        },
        {
          name: "Google Cloud",
          icon: Cloud,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "DigitalOcean",
          icon: Cloud,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "IBM Cloud",
          icon: Cloud,
          color: "from-blue-500 to-purple-500",
          level: "Advanced",
        },
        {
          name: "Oracle Cloud",
          icon: Cloud,
          color: "from-red-500 to-orange-500",
          level: "Intermediate",
        },
        {
          name: "Alibaba Cloud",
          icon: Cloud,
          color: "from-orange-500 to-red-500",
          level: "Intermediate",
        },
        {
          name: "Vultr",
          icon: Cloud,
          color: "from-blue-500 to-cyan-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "DevOps & Automation",
      description: "DevOps tools and automation technologies",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      technologies: [
        {
          name: "Docker",
          icon: Container,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Kubernetes",
          icon: Hexagon,
          color: "from-blue-600 to-blue-700",
          level: "Expert",
        },
        {
          name: "Terraform",
          icon: Code,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Jenkins",
          icon: Server,
          color: "from-red-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Ansible",
          icon: Code,
          color: "from-red-500 to-orange-500",
          level: "Advanced",
        },
        {
          name: "GitLab CI",
          icon: Code,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "GitHub Actions",
          icon: Code,
          color: "from-gray-600 to-gray-800",
          level: "Expert",
        },
        {
          name: "CircleCI",
          icon: Circle,
          color: "from-green-500 to-emerald-500",
          level: "Advanced",
        },
        {
          name: "AWS CodePipeline",
          icon: Cloud,
          color: "from-orange-500 to-yellow-500",
          level: "Expert",
        },
        {
          name: "Azure DevOps",
          icon: Cloud,
          color: "from-blue-500 to-blue-600",
          level: "Advanced",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyzing current infrastructure and creating cloud migration strategy",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Designing scalable cloud architecture and infrastructure",
      icon: Target,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Migration & Setup",
      description: "Migrating applications and setting up cloud infrastructure",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Testing performance and optimizing cloud resources",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Monitoring & Support",
      description: "Setting up monitoring and providing ongoing support",
      icon: Activity,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const [activeTab, setActiveTab] = useState("planning");

  const cloudTypes = [
    {
      title: "Cloud Migration Services",
      description:
        "Seamless migration of your existing infrastructure to cloud platforms with zero downtime",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Infrastructure Assessment",
        "Migration Strategy",
        "Data Transfer",
        "Testing & Validation",
        "Zero Downtime Migration",
        "Post-Migration Support",
      ],
      platforms: ["On-Premise to Cloud", "Cloud to Cloud", "Hybrid Cloud", "Multi-Cloud"],
      technologies: [
        "AWS Migration",
        "Azure Migration",
        "Google Cloud",
        "VMware",
        "Migration Tools",
        "Data Sync",
      ],
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and reliable cloud infrastructure designed for your business needs",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      features: [
        "Auto-scaling",
        "Load Balancing",
        "High Availability",
        "Disaster Recovery",
        "Resource Optimization",
        "Cost Management",
      ],
      platforms: ["Web Applications", "Mobile Backend", "Enterprise Systems", "Microservices"],
      technologies: ["EC2", "Azure VMs", "Google Compute", "Kubernetes", "Docker", "Terraform"],
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      features: [
        "Identity Management",
        "Data Encryption",
        "Compliance",
        "Threat Detection",
        "Access Control",
        "Security Monitoring",
      ],
      platforms: [
        "Enterprise Security",
        "Compliance Systems",
        "Data Protection",
        "Identity Management",
      ],
      technologies: ["AWS IAM", "Azure AD", "Google IAM", "VPN", "Firewalls", "Encryption"],
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and DevOps practices for faster delivery",
      icon: Code,
      color: "from-orange-500 to-red-500",
      features: [
        "Continuous Integration",
        "Continuous Deployment",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Automated Testing",
        "Release Management",
      ],
      platforms: ["Web Applications", "Mobile Apps", "Microservices", "Enterprise Systems"],
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
    },
    {
      title: "Database Solutions",
      description: "Managed database services with high performance and reliability",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Database Migration",
        "Performance Optimization",
        "Backup & Recovery",
        "Monitoring",
        "Scaling",
        "Security",
      ],
      platforms: [
        "Web Applications",
        "Analytics Systems",
        "Enterprise Databases",
        "Real-time Systems",
      ],
      technologies: ["RDS", "Azure SQL", "Cloud SQL", "MongoDB Atlas", "Redis", "Elasticsearch"],
    },
    {
      title: "Cloud Consulting",
      description: "Expert guidance on cloud strategy, architecture, and best practices",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Architecture Design",
        "Cost Optimization",
        "Best Practices",
        "Training & Support",
        "Strategy Planning",
        "Technology Selection",
      ],
      platforms: ["Cloud Strategy", "Architecture Review", "Cost Analysis", "Training Programs"],
      technologies: [
        "Cloud Assessment",
        "Architecture Design",
        "Cost Analysis",
        "Best Practices",
        "Training Materials",
        "Documentation",
      ],
    },
  ];

  const features = [
    {
      title: "High Performance",
      description: "Lightning-fast cloud infrastructure optimized for speed",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption and compliance",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Auto Scaling",
      description: "Automatic scaling based on demand and traffic",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Global Reach",
      description: "Multi-region deployment for worldwide accessibility",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "99.9% Uptime",
      description: "High availability with guaranteed uptime SLA",
      icon: Clock,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Cost Optimization",
      description: "Pay-as-you-use model with cost optimization",
      icon: DollarSign,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const benefits = [
    {
      title: "Scalability",
      description:
        "Scale your infrastructure up or down based on demand without any downtime or performance issues",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: [
        "Auto Scaling",
        "Load Balancing",
        "Resource Management",
        "Performance Optimization",
      ],
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce infrastructure costs with pay-as-you-use models and optimized resource allocation",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-500",
      features: ["Pay-as-you-use", "Resource Optimization", "Cost Monitoring", "Budget Management"],
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security with encryption, compliance, and threat protection",
      icon: Lock,
      color: "from-purple-500 to-pink-500",
      features: ["Data Encryption", "Access Control", "Compliance", "Threat Detection"],
    },
    {
      title: "Global Accessibility",
      description:
        "Deploy your applications globally with multi-region infrastructure for worldwide reach",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      features: [
        "Multi-Region Deployment",
        "CDN Integration",
        "Global Load Balancing",
        "Low Latency",
      ],
    },
    {
      title: "Disaster Recovery",
      description:
        "Comprehensive backup and disaster recovery solutions to protect your business data",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Automated Backups",
        "Disaster Recovery",
        "Data Replication",
        "Business Continuity",
      ],
    },
    {
      title: "DevOps Integration",
      description: "Seamless integration with DevOps tools for automated deployment and management",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      features: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Automated Deployment",
        "Monitoring & Logging",
      ],
    },
  ];

  const topicalGuide = [
    {
      id: "planning",
      title: "Cloud Strategy & Planning",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Cloud Strategy & Planning",
        description:
          "Essential steps to plan and strategize your cloud migration and implementation",
        points: [
          "Assess current infrastructure and applications",
          "Define cloud migration strategy and goals",
          "Choose appropriate cloud platforms and services",
          "Plan for security and compliance requirements",
          "Estimate costs and create budget plans",
          "Design disaster recovery and backup strategies",
        ],
        tips: [
          "Start with a comprehensive assessment",
          "Consider hybrid cloud for gradual migration",
          "Plan for security from the beginning",
          "Factor in training and change management",
        ],
      },
    },
    {
      id: "migration",
      title: "Cloud Migration",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "Cloud Migration Process",
        description: "The technical migration process from on-premise to cloud infrastructure",
        points: [
          "Prepare applications for cloud deployment",
          "Set up cloud infrastructure and services",
          "Migrate data and applications systematically",
          "Configure security and access controls",
          "Test applications in cloud environment",
          "Optimize performance and costs",
        ],
        tips: [
          "Use migration tools and automation",
          "Test thoroughly before going live",
          "Plan for rollback if needed",
          "Monitor performance during migration",
        ],
      },
    },
    {
      id: "security",
      title: "Cloud Security",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      content: {
        title: "Cloud Security Implementation",
        description: "Comprehensive security measures for cloud infrastructure and applications",
        points: [
          "Implement identity and access management",
          "Set up data encryption and protection",
          "Configure network security and firewalls",
          "Establish monitoring and threat detection",
          "Ensure compliance with regulations",
          "Create security policies and procedures",
        ],
        tips: [
          "Follow security best practices",
          "Use multi-factor authentication",
          "Regular security audits and updates",
          "Train staff on security protocols",
        ],
      },
    },
    {
      id: "optimization",
      title: "Cloud Optimization",
      icon: Target,
      color: "from-orange-500 to-red-500",
      content: {
        title: "Cloud Performance & Cost Optimization",
        description: "Optimizing cloud resources for better performance and cost efficiency",
        points: [
          "Monitor resource usage and performance",
          "Implement auto-scaling and load balancing",
          "Optimize database and storage performance",
          "Use cost management and monitoring tools",
          "Implement caching and CDN solutions",
          "Regular performance reviews and optimization",
        ],
        tips: [
          "Use cloud monitoring tools",
          "Implement right-sizing strategies",
          "Leverage reserved instances for cost savings",
          "Regular performance reviews",
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
                Cloud Solutions Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Enterprise{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  Cloud Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We provide enterprise-grade cloud solutions that scale with your business. From
                migration to optimization, we ensure your cloud infrastructure is secure, reliable,
                and cost-effective.
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
                { number: "500+", label: "Cloud Deployments", icon: Cloud },
                { number: "100+", label: "Happy Clients", icon: Users },
                { number: "99.9%", label: "Uptime SLA", icon: Clock },
                { number: "24/7", label: "Support", icon: Headphones },
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

        {/* Cloud Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {cloudTypes.map((app, index) => (
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
                  Cloud Tech Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge cloud technologies organized by development layers to build
                robust and scalable cloud solutions.
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
                Cloud Implementation{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, and timely delivery of
                cloud solutions.
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
                We deliver exceptional cloud solutions with cutting-edge features and technologies.
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
                Why Choose Cloud Solutions?
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text">
                  Professional Cloud Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how professional cloud solutions can transform your business operations and
                drive growth.
              </p>

              {/* Decorative Elements */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
              </div>
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
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  Cloud Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about cloud solutions, from planning to optimization.
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
              Ready to Move to the{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                Cloud?
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Let&apos;s discuss your cloud migration strategy and create a scalable infrastructure
              that grows with your business.
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

export default CloudSolutions;
