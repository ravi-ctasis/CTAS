"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Eye,
  Users,
  Smartphone,
  Target,
  Rocket,
  Heart,
  Layers,
  Grid,
  Type,
  Zap,
  Code,
  Award,
  Star,
  CheckCircle,
  Search,
  BarChart3,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const UIUXDesign = () => {
  const [activeTab, setActiveTab] = useState("research");

  const uiuxServices = [
    {
      title: "User Research & Analysis",
      description: "Comprehensive user research to understand your target audience and their needs",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: [
        "User Personas",
        "User Journey Mapping",
        "Competitive Analysis",
        "Usability Testing",
        "Behavioral Analytics",
        "Survey & Interviews",
      ],
      platforms: ["Web Applications", "Mobile Apps", "Desktop Software", "SaaS Platforms"],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Maze",
        "Hotjar",
        "Google Analytics",
        "UserTesting",
        "Optimal Workshop",
        "Lookback",
      ],
    },
    {
      title: "Information Architecture",
      description: "Organizing and structuring content for optimal user experience and navigation",
      icon: Grid,
      color: "from-purple-500 to-pink-500",
      features: [
        "Site Structure",
        "Navigation Design",
        "Content Strategy",
        "Taxonomy Design",
        "Wireframing",
        "User Flow Mapping",
      ],
      platforms: ["E-commerce Sites", "Corporate Websites", "Web Applications", "Mobile Apps"],
      technologies: [
        "Figma",
        "Sketch",
        "Axure",
        "Balsamiq",
        "Draw.io",
        "Lucidchart",
        "Miro",
        "Whimsical",
        "Figma",
        "Adobe XD",
      ],
    },
    {
      title: "UI Design",
      description: "Creating beautiful and functional user interfaces that delight users",
      icon: Palette,
      color: "from-green-500 to-emerald-500",
      features: [
        "Visual Design",
        "Component Design",
        "Style Guides",
        "Design Systems",
        "Prototyping",
        "Design Handoff",
      ],
      platforms: ["Web Interfaces", "Mobile Apps", "Desktop Applications", "Dashboard Design"],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Principle",
        "Framer",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "InVision",
        "Zeplin",
        "Abstract",
      ],
    },
    {
      title: "UX Design",
      description: "Designing seamless user experiences that delight users and drive engagement",
      icon: Eye,
      color: "from-orange-500 to-red-500",
      features: [
        "User Experience Strategy",
        "Interaction Design",
        "Usability Design",
        "Accessibility Design",
        "User Testing",
        "Experience Optimization",
      ],
      platforms: ["Web Platforms", "Mobile Applications", "Desktop Software", "IoT Interfaces"],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Principle",
        "Framer",
        "Proto.io",
        "Marvel",
        "InVision",
        "Axure",
        "Balsamiq",
      ],
    },
    {
      title: "Mobile App Design",
      description: "Native and cross-platform mobile app design with platform-specific guidelines",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Mobile UI/UX",
        "App Prototyping",
        "Touch Interactions",
        "Platform Guidelines",
        "Responsive Design",
        "App Store Optimization",
      ],
      platforms: [
        "iOS Applications",
        "Android Applications",
        "Cross-platform Apps",
        "Progressive Web Apps",
      ],
      technologies: [
        "Figma",
        "Sketch",
        "Adobe XD",
        "Principle",
        "Framer",
        "Flinto",
        "Proto.io",
        "Marvel",
        "InVision",
        "Zeplin",
      ],
    },
    {
      title: "Design Systems",
      description: "Comprehensive design systems for consistent experiences across all touchpoints",
      icon: Layers,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Component Libraries",
        "Design Tokens",
        "Style Guidelines",
        "Documentation",
        "Design Governance",
        "Scalable Design",
      ],
      platforms: ["Enterprise Systems", "SaaS Platforms", "Web Applications", "Mobile Apps"],
      technologies: [
        "Figma",
        "Sketch",
        "Adobe XD",
        "Storybook",
        "Zeplin",
        "Abstract",
        "Notion",
        "Confluence",
        "GitHub",
        "Figma",
      ],
    },
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "Understanding your business goals, target audience, and conducting comprehensive user research to inform design decisions",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Information Architecture",
      description:
        "Organizing content structure, creating user flows, and designing navigation systems for optimal user experience",
      icon: Grid,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Wireframing & Prototyping",
      description:
        "Creating low-fidelity wireframes and interactive prototypes to visualize user journeys and test design concepts",
      icon: Palette,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "UI Design & Visual Design",
      description:
        "Creating high-fidelity designs with visual elements, typography, and interactive components that align with brand identity",
      icon: Eye,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "User Testing & Iteration",
      description:
        "Conducting usability testing with real users, gathering feedback, and iterating on designs to improve user experience",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
    },
    {
      step: "06",
      title: "Design Handoff & Implementation",
      description:
        "Preparing design specifications, creating design systems, and collaborating with developers for seamless implementation",
      icon: Rocket,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const designTools = [
    {
      name: "Figma",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      level: "Expert",
    },
    {
      name: "Adobe XD",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      level: "Expert",
    },
    {
      name: "Sketch",
      icon: Grid,
      color: "from-yellow-500 to-orange-500",
      level: "Expert",
    },
    {
      name: "InVision",
      icon: Layers,
      color: "from-pink-500 to-rose-500",
      level: "Advanced",
    },
    {
      name: "Adobe Photoshop",
      icon: Palette,
      color: "from-blue-600 to-indigo-600",
      level: "Expert",
    },
    {
      name: "Adobe Illustrator",
      icon: Type,
      color: "from-orange-500 to-red-500",
      level: "Expert",
    },
    {
      name: "Principle",
      icon: Zap,
      color: "from-purple-600 to-pink-600",
      level: "Advanced",
    },
    {
      name: "Framer",
      icon: Code,
      color: "from-gray-600 to-gray-800",
      level: "Advanced",
    },
    {
      name: "Maze",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      level: "Expert",
    },
    {
      name: "Hotjar",
      icon: BarChart3,
      color: "from-red-500 to-pink-500",
      level: "Expert",
    },
  ];

  // const designPrinciples = [
  //   {
  //     title: "User-Centered Design",
  //     description:
  //       "Every design decision is based on user needs, behaviors, and feedback to create meaningful experiences",
  //     icon: Users,
  //     color: "from-blue-500 to-cyan-500",
  //   },
  //   {
  //     title: "Consistency",
  //     description:
  //       "Maintaining consistent design patterns, colors, and interactions throughout the interface for familiarity",
  //     icon: Grid,
  //     color: "from-purple-500 to-pink-500",
  //   },
  //   {
  //     title: "Accessibility",
  //     description:
  //       "Ensuring designs are accessible to users with disabilities and diverse needs for inclusive experiences",
  //     icon: Heart,
  //     color: "from-green-500 to-emerald-500",
  //   },
  //   {
  //     title: "Simplicity",
  //     description:
  //       "Creating clean, uncluttered interfaces that are easy to understand and use without cognitive overload",
  //     icon: Eye,
  //     color: "from-orange-500 to-red-500",
  //   },
  // ];

  const benefits = [
    {
      title: "Enhanced User Experience",
      description:
        "Create intuitive and engaging user experiences that increase user satisfaction and drive business success",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Improved Usability",
        "Higher Engagement",
        "Better Conversion",
        "User Satisfaction",
      ],
    },
    {
      title: "Brand Differentiation",
      description:
        "Stand out from competitors with unique, memorable designs that reflect your brand identity and values",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      features: ["Unique Identity", "Brand Recognition", "Market Position", "Visual Impact"],
    },
    {
      title: "Increased Conversions",
      description:
        "Optimize user flows and interfaces to guide users toward desired actions and improve conversion rates",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: ["Better CTAs", "Reduced Friction", "Higher Sales", "ROI Improvement"],
    },
    {
      title: "Accessibility & Inclusion",
      description:
        "Ensure your designs are accessible to all users, including those with disabilities, for broader reach",
      icon: Heart,
      color: "from-orange-500 to-red-500",
      features: ["WCAG Compliance", "Inclusive Design", "Broader Audience", "Legal Compliance"],
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce development costs and time-to-market with well-planned designs and clear specifications",
      icon: Clock,
      color: "from-indigo-500 to-purple-500",
      features: ["Faster Development", "Reduced Rework", "Clear Specifications", "Time Savings"],
    },
    {
      title: "Scalable Design Systems",
      description:
        "Create maintainable design systems that grow with your business and ensure consistency across platforms",
      icon: Layers,
      color: "from-teal-500 to-cyan-500",
      features: ["Design Consistency", "Easy Maintenance", "Team Efficiency", "Brand Cohesion"],
    },
  ];

  const topicalGuide = [
    {
      id: "research",
      title: "User Research",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "User Research & Analysis",
        description:
          "Essential steps to conduct comprehensive user research and understand your target audience",
        points: [
          "Define research objectives and questions",
          "Identify target user segments and personas",
          "Conduct user interviews and surveys",
          "Analyze user behavior and preferences",
          "Create user journey maps",
          "Validate assumptions with data",
        ],
        tips: [
          "Start with clear research goals",
          "Use multiple research methods",
          "Involve stakeholders in research",
          "Document findings systematically",
        ],
      },
    },
    {
      id: "architecture",
      title: "Information Architecture",
      icon: Grid,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "Information Architecture & Structure",
        description:
          "Organizing content and creating intuitive navigation systems for optimal user experience",
        points: [
          "Audit existing content and structure",
          "Create content hierarchy and taxonomy",
          "Design navigation systems",
          "Plan user flows and pathways",
          "Wireframe key pages and interactions",
          "Test information architecture",
        ],
        tips: [
          "Keep navigation simple and logical",
          "Use familiar patterns and conventions",
          "Test with real users early",
          "Consider mobile-first approach",
        ],
      },
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: Palette,
      color: "from-green-500 to-emerald-500",
      content: {
        title: "UI/UX Design & Prototyping",
        description:
          "Creating beautiful, functional interfaces and interactive prototypes that delight users",
        points: [
          "Develop visual design concepts",
          "Create high-fidelity mockups",
          "Build interactive prototypes",
          "Design responsive layouts",
          "Implement accessibility features",
          "Create design specifications",
        ],
        tips: [
          "Focus on user needs first",
          "Use consistent design patterns",
          "Test prototypes with users",
          "Consider all device sizes",
        ],
      },
    },
    {
      id: "testing",
      title: "User Testing",
      icon: Eye,
      color: "from-orange-500 to-red-500",
      content: {
        title: "User Testing & Validation",
        description:
          "Testing designs with real users to validate assumptions and improve user experience",
        points: [
          "Plan usability testing sessions",
          "Recruit representative users",
          "Conduct moderated and unmoderated tests",
          "Analyze user feedback and behavior",
          "Iterate based on findings",
          "Document insights and recommendations",
        ],
        tips: [
          "Test early and test often",
          "Use both qualitative and quantitative methods",
          "Focus on actionable insights",
          "Involve the development team",
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
                UI/UX Design Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Creative{" "}
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                  UI/UX Design
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We create exceptional user experiences through research-driven design. From user
                research to interactive prototypes, we focus on user-centered design principles to
                deliver intuitive and engaging interfaces.
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
                { number: "15+", label: "Designs Created", icon: Palette },
                { number: "20+", label: "Happy Clients", icon: Users },
                { number: "5+", label: "Years Experience", icon: Award },
                { number: "4.9", label: "Client Rating", icon: Star },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-pink-400" />
                    <div className="text-xl lg:text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm lg:text-base text-white/90">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UI/UX Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {uiuxServices.map((service, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg">
                  <CardContent className="p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-center text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
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

        {/* Design Tools Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Design Tools
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Design Tools
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use industry-leading design tools and technologies to create exceptional user
                experiences and seamless workflows.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                {designTools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="group relative bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {/* Tool Icon */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Tool Name */}
                    <h4 className="text-sm font-bold text-gray-900 text-center mb-2">
                      {tool.name}
                    </h4>

                    {/* Skill Level Badge */}
                    <div className="flex justify-center">
                      <Badge
                        className={`text-xs px-2 py-1 ${tool.level === "Expert"
                            ? "bg-green-100 text-green-700 border-green-200"
                            : "bg-blue-100 text-blue-700 border-blue-200"
                          }`}
                      >
                        {tool.level}
                      </Badge>
                    </div>

                    {/* Hover Effect - Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tool.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                UI/UX Design{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven 6-step UI/UX design process ensures we create user-centered experiences
                through research, design, and testing that meet your business objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {designProcess.map((step, index) => (
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

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                Why Choose UI/UX Design?
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text">
                  Professional UI/UX Design
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how professional UI/UX design can transform your digital presence and drive
                business growth.
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
                  UI/UX Design
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about UI/UX design, from research to implementation.
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
        <section className="py-16 bg  -gradient-to-r from-green-600 to-blue-700 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/95 via-teal-600/95 to-cyan-600/95"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                User Experience?
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Let&apos;s collaborate to create stunning, user-centered designs that enhance your
              brand and drive business success.
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

export default UIUXDesign;
