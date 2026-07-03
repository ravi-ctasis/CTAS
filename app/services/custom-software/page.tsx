"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  Users,
  Target,
  Award,
  Clock,
  CheckCircle,
  Cloud,
  Palette,
  Search,
  BarChart,
  Settings,
  Rocket,
  TrendingUp,
  Headphones,
  FileText,
  Building,
  Layers,
  Network,
  Lock,
  Activity,
  Braces,
  Brackets,
  Square,
  Circle,
  Triangle,
  Shield,
  Code,
  Package,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const CustomSoftware = () => {
  const techCategories = [
    {
      title: "Website Application",
      description: "Modern web development frameworks and technologies",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      technologies: [
        {
          name: "HTML5",
          icon: Code,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Angular JS",
          icon: Circle,
          color: "from-red-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "React JS",
          icon: Braces,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "TypeScript",
          icon: Brackets,
          color: "from-blue-600 to-blue-700",
          level: "Expert",
        },
        {
          name: "Vue JS",
          icon: Triangle,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "Drupal",
          icon: FileText,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "Magento",
          icon: ShoppingCart,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Shopify",
          icon: ShoppingCart,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "Umbraco",
          icon: FileText,
          color: "from-purple-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "WordPress",
          icon: FileText,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
      ],
    },
    {
      title: "Mobile App Development",
      description: "Mobile application development platforms and frameworks",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      technologies: [
        {
          name: "iOS",
          icon: Smartphone,
          color: "from-gray-600 to-gray-800",
          level: "Expert",
        },
        {
          name: "Android",
          icon: Smartphone,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "React Native",
          icon: Braces,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Flutter",
          icon: Smartphone,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Swift",
          icon: Code,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Unity",
          icon: Square,
          color: "from-gray-600 to-gray-800",
          level: "Advanced",
        },
        {
          name: "Kotlin",
          icon: Code,
          color: "from-purple-500 to-pink-500",
          level: "Expert",
        },
        {
          name: "Java",
          icon: Code,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Xamarin",
          icon: Smartphone,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "Swift UI",
          icon: Code,
          color: "from-blue-600 to-blue-700",
          level: "Advanced",
        },
        {
          name: "Ionic",
          icon: Smartphone,
          color: "from-blue-500 to-cyan-500",
          level: "Advanced",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Understanding your business requirements and creating a detailed project plan",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating software architecture and system design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your custom software with modern technologies and best practices",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing and quality assurance",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Deployment, monitoring, and ongoing maintenance support",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];
  const [activeTab, setActiveTab] = useState("planning");

  const appTypes = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed specifically for your business needs and requirements",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Bespoke Solutions",
        "Business Requirements Analysis",
        "Custom Functionality",
        "Scalable Architecture",
        "User-Centric Design",
      ],
      platforms: ["Web Applications", "Desktop Software", "Cloud Solutions", "Hybrid Systems"],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Java",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Product Software Development",
      description: "Complete product development from concept to market-ready software solutions",
      icon: Package,
      color: "from-green-500 to-emerald-500",
      features: [
        "Product Strategy",
        "Market Research",
        "Feature Planning",
        "MVP Development",
        "Product Launch",
      ],
      platforms: ["SaaS Platforms", "Web Products", "Desktop Applications", "Mobile Apps"],
      technologies: [
        "React",
        "Angular",
        "Vue.js",
        "Node.js",
        "Django",
        "Spring Boot",
        "MySQL",
        "AWS",
        "Google Cloud",
      ],
    },
    {
      title: "Migration and Integration",
      description:
        "Seamless system migration and third-party integration services for existing applications",
      icon: Network,
      color: "from-purple-500 to-pink-500",
      features: [
        "Legacy System Migration",
        "API Integration",
        "Data Migration",
        "System Modernization",
        "Seamless Transition",
      ],
      platforms: ["Legacy Systems", "Cloud Migration", "API Integration", "Data Systems"],
      technologies: [
        "AWS Migration",
        "Azure Migration",
        "API Development",
        "ETL Tools",
        "Database Migration",
        "Microservices",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Monitoring Tools",
      ],
    },
    {
      title: "Business Automation",
      description:
        "Automate repetitive tasks and streamline business processes for increased efficiency",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Task Automation",
        "Business Intelligence",
        "Performance Analytics",
      ],
      platforms: ["Web Platforms", "Desktop Tools", "Mobile Apps", "API Services"],
      technologies: [
        "Python",
        "RPA Tools",
        "Workflow Engines",
        "Business Process Management",
        "Data Analytics",
        "Machine Learning",
        "Cloud Automation",
        "API Integration",
        "Reporting Tools",
        "Dashboard Solutions",
      ],
    },
    {
      title: "Enterprise Application",
      description: "Large-scale enterprise applications built for complex business operations",
      icon: Building,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Enterprise Architecture",
        "Multi-User Support",
        "Role-Based Access",
        "Advanced Security",
        "Scalable Infrastructure",
      ],
      platforms: [
        "Enterprise Systems",
        "Cloud Platforms",
        "On-Premise Solutions",
        "Hybrid Deployments",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Enterprise Databases",
        "Load Balancing",
        "High Availability",
        "Security Frameworks",
        "Monitoring Systems",
        "Backup Solutions",
        "Disaster Recovery",
      ],
    },
    {
      title: "MVP Development",
      description:
        "Rapid development of minimum viable products to validate ideas and accelerate time to market",
      icon: Rocket,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Rapid Prototyping",
        "Core Features Focus",
        "User Feedback Integration",
        "Iterative Development",
        "Market Validation",
      ],
      platforms: ["Web MVPs", "Mobile MVPs", "Desktop MVPs", "SaaS MVPs"],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Vercel",
        "Netlify",
        "Stripe",
        "SendGrid",
      ],
    },
  ];

  const features = [
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business needs",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Security First",
      description: "Enterprise-grade security and compliance",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Real-time Analytics",
      description: "Live insights and performance monitoring",
      icon: Activity,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "API Integration",
      description: "Seamless integration with existing systems",
      icon: Network,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Cloud Ready",
      description: "Deploy on-premise or in the cloud",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support",
      icon: Headphones,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description:
        "Custom software can automate manual processes and streamline workflows, leading to significant time and cost savings",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: ["Process Automation", "Workflow Optimization", "Time Savings", "Cost Reduction"],
    },
    {
      title: "Competitive Advantage",
      description:
        "Custom solutions give you unique capabilities that set you apart from competitors using off-the-shelf software",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      features: ["Unique Features", "Brand Differentiation", "Market Leadership", "Innovation"],
    },
    {
      title: "Data Control",
      description:
        "Full control over your data, security, and compliance requirements with custom-built solutions",
      icon: Lock,
      color: "from-purple-500 to-pink-500",
      features: ["Data Ownership", "Security Control", "Compliance", "Privacy"],
    },
    {
      title: "Scalability",
      description:
        "Software that grows with your business, adapting to changing needs and increasing user loads",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      features: ["Business Growth", "User Scaling", "Feature Expansion", "Performance"],
    },
    {
      title: "Integration",
      description:
        "Seamless integration with your existing systems, tools, and third-party applications",
      icon: Network,
      color: "from-indigo-500 to-purple-500",
      features: ["System Integration", "API Connectivity", "Data Sync", "Workflow Continuity"],
    },
    {
      title: "ROI Focus",
      description:
        "Custom software designed to deliver measurable return on investment and business value",
      icon: BarChart,
      color: "from-teal-500 to-cyan-500",
      features: ["Measurable Results", "Business Value", "Cost Savings", "Revenue Growth"],
    },
  ];

  const topicalGuide = [
    {
      id: "planning",
      title: "Planning & Strategy",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Custom Software Planning & Strategy",
        description:
          "Essential steps to plan and strategize your custom software development project",
        points: [
          "Define business requirements and objectives",
          "Analyze existing systems and processes",
          "Identify key stakeholders and users",
          "Create detailed project scope and timeline",
          "Plan budget and resource allocation",
          "Select appropriate technology stack",
        ],
        tips: [
          "Start with clear business goals",
          "Involve end users in planning",
          "Consider scalability from day one",
          "Plan for future integrations",
        ],
      },
    },
    {
      id: "design",
      title: "Architecture Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "Software Architecture & Design",
        description: "Creating robust and scalable software architecture for your custom solution",
        points: [
          "Design system architecture and components",
          "Create database schema and data models",
          "Plan API design and integration points",
          "Define security and authentication",
          "Design user interface and experience",
          "Plan deployment and infrastructure",
        ],
        tips: [
          "Focus on scalability and performance",
          "Design for maintainability",
          "Consider security from the start",
          "Plan for future enhancements",
        ],
      },
    },
    {
      id: "development",
      title: "Development Process",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      content: {
        title: "Custom Software Development Process",
        description: "The technical development process from coding to deployment",
        points: [
          "Set up development environment and tools",
          "Implement core features and functionality",
          "Integrate APIs and third-party services",
          "Ensure code quality and best practices",
          "Implement security measures and testing",
          "Perform regular code reviews and testing",
        ],
        tips: [
          "Use modern development practices",
          "Follow coding standards and conventions",
          "Implement comprehensive testing",
          "Maintain code documentation",
        ],
      },
    },
    {
      id: "testing",
      title: "Testing & QA",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
      content: {
        title: "Quality Assurance & Testing",
        description: "Comprehensive testing to ensure your software works perfectly",
        points: [
          "Perform functional and integration testing",
          "Conduct user acceptance testing (UAT)",
          "Test performance and scalability",
          "Security testing and vulnerability assessment",
          "Compatibility testing across platforms",
          "Load testing and stress testing",
        ],
        tips: [
          "Test early and test often",
          "Use automated testing tools",
          "Involve end users in testing",
          "Fix issues before deployment",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24  bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900  overflow-hidden">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-25"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Custom Software Development
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Innovative &{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  Scalable Software Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We create innovative custom software solutions that streamline business operations
                and drive growth. From enterprise applications to specialized tools, we deliver
                exceptional software experiences.
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
                { number: "8+", label: "Custom Solutions", icon: Code },
                { number: "10+", label: "Client Satisfaction", icon: Users },
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

        {/* App Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {appTypes.map((app, index) => (
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
                scalable custom software solutions.
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
                Custom Software{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Development Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, and timely delivery of
                custom software solutions.
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
                We deliver exceptional custom software solutions with cutting-edge features and
                technologies.
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
                Why Choose Custom Software?
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text">
                  Custom Software Development
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how custom software development can transform your business operations and
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
                  Custom Software Development
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about custom software development, from planning to
                deployment.
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
                Custom Software?
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Let&apos;s discuss your project requirements and create a custom software solution
              that perfectly fits your business needs.
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

export default CustomSoftware;
