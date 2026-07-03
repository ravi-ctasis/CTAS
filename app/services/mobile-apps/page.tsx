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
  Monitor,
  Server,
  Cloud,
  Palette,
  Search,
  BarChart,
  Settings,
  Rocket,
  Star,
  TrendingUp,
  Headphones,
  Network,
  Activity,
  Braces,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Zap,
  Shield,
  Code,
  Wifi,
} from "lucide-react";
import Link from "next/link";

const MobileApps = () => {
  const [activeTab, setActiveTab] = useState("planning");

  const appTypes = [
    {
      title: "Native Android Apps",
      description:
        "High-performance Android applications built with Kotlin and Java for optimal performance and user experience",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      features: [
        "Kotlin Development",
        "Material Design",
        "Google Play Store",
        "Android Integration",
        "Performance Optimization",
      ],
      platforms: ["Android Phones", "Android Tablets", "Android TV", "Wear OS"],
      technologies: ["Kotlin", "Java", "Android Studio", "Material Design", "Google Play Console"],
    },
    {
      title: "Native iOS Apps",
      description:
        "Premium iOS applications built specifically for iPhone and iPad using Swift and Objective-C",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Swift Development",
        "iOS UI/UX",
        "App Store Optimization",
        "Performance Tuning",
        "Apple Ecosystem",
      ],
      platforms: ["iPhone", "iPad", "Apple Watch", "Apple TV"],
      technologies: ["Swift", "Objective-C", "Xcode", "iOS SDK", "App Store Connect"],
    },
    {
      title: "React Native Apps",
      description:
        "Cross-platform mobile applications built with React Native for code reusability and native performance",
      icon: Braces,
      color: "from-blue-600 to-blue-700",
      features: [
        "React Native",
        "JavaScript/TypeScript",
        "Code Reusability",
        "Native Performance",
        "Hot Reload",
      ],
      platforms: ["iOS", "Android", "Web", "Desktop"],
      technologies: ["React Native", "JavaScript", "TypeScript", "Redux", "React Navigation"],
    },
    {
      title: "Flutter Apps",
      description:
        "Beautiful, natively compiled applications built with Flutter for multiple platforms from a single codebase",
      icon: Circle,
      color: "from-blue-500 to-indigo-500",
      features: [
        "Flutter Development",
        "Dart Language",
        "Single Codebase",
        "Native Performance",
        "Rich Widgets",
      ],
      platforms: ["iOS", "Android", "Web", "Desktop", "Embedded"],
      technologies: ["Flutter", "Dart", "Material Design", "Cupertino", "Flutter SDK"],
    },
    {
      title: "Swift Apps",
      description:
        "Modern iOS applications built with Swift for iPhone, iPad, and Apple ecosystem devices",
      icon: Code,
      color: "from-orange-500 to-red-500",
      features: [
        "Swift Development",
        "iOS Native",
        "Apple Frameworks",
        "Performance Optimization",
        "Security",
      ],
      platforms: ["iPhone", "iPad", "Apple Watch", "Apple TV", "macOS"],
      technologies: ["Swift", "SwiftUI", "UIKit", "Core Data", "Xcode"],
    },
    {
      title: "Hybrid Apps",
      description:
        "Versatile applications that combine web technologies with native capabilities for cross-platform development",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      features: [
        "Web Technologies",
        "Native Bridge",
        "Cross-Platform",
        "Plugin Support",
        "Rapid Development",
      ],
      platforms: ["iOS", "Android", "Web", "Desktop"],
      technologies: ["Ionic", "Cordova", "PhoneGap", "HTML5", "CSS3", "JavaScript"],
    },
  ];

  const technologies = [
    {
      title: "Front-end",
      description: "Mobile UI frameworks and development tools",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      techs: [
        {
          name: "React Native",
          icon: Braces,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Flutter",
          icon: Circle,
          color: "from-blue-600 to-blue-700",
          level: "Expert",
        },
        {
          name: "Swift",
          icon: Code,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "Kotlin",
          icon: Code,
          color: "from-purple-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "Ionic",
          icon: Triangle,
          color: "from-blue-500 to-indigo-500",
          level: "Advanced",
        },
        {
          name: "Xamarin",
          icon: Square,
          color: "from-purple-500 to-indigo-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Back-end",
      description: "Server-side technologies for mobile app support",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      techs: [
        {
          name: "Node.js",
          icon: Hexagon,
          color: "from-green-600 to-green-700",
          level: "Expert",
        },
        {
          name: "Firebase",
          icon: Cloud,
          color: "from-orange-500 to-yellow-500",
          level: "Expert",
        },
        {
          name: "AWS Mobile",
          icon: Cloud,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "GraphQL",
          icon: Network,
          color: "from-pink-500 to-purple-500",
          level: "Advanced",
        },
        {
          name: "REST APIs",
          icon: Network,
          color: "from-blue-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "WebSocket",
          icon: Activity,
          color: "from-green-500 to-teal-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Tools & Services",
      description: "Development tools and third-party services",
      icon: Settings,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      techs: [
        {
          name: "Xcode",
          icon: Monitor,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Android Studio",
          icon: Monitor,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "VS Code",
          icon: Monitor,
          color: "from-blue-500 to-blue-600",
          level: "Expert",
        },
        {
          name: "Git",
          icon: Code,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "Jenkins",
          icon: Server,
          color: "from-red-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "Docker",
          icon: Server,
          color: "from-blue-500 to-cyan-500",
          level: "Advanced",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your app requirements and creating detailed project roadmap",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating intuitive mobile interfaces and user experience designs",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your mobile app with modern technologies and best practices",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across all devices and platforms",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "App store submission, deployment, and post-launch support",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const features = [
    {
      title: "Native Performance",
      description: "Apps that run smoothly with native device capabilities",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cross-Platform",
      description: "Single codebase that works on iOS and Android",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Offline Support",
      description: "Apps that work without internet connection",
      icon: Wifi,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Push Notifications",
      description: "Real-time notifications to engage users",
      icon: Headphones,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Security First",
      description: "Enterprise-grade security and data protection",
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Analytics & Insights",
      description: "Comprehensive analytics to track app performance",
      icon: BarChart,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const benefits = [
    {
      title: "Boost Your Revenue",
      description:
        "Mobile apps can increase your business revenue by up to 40% through direct sales, in-app purchases, and enhanced customer engagement",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: ["Direct Sales", "In-App Purchases", "Subscription Models", "Premium Features"],
    },
    {
      title: "Enhance Customer Experience",
      description:
        "Provide seamless, personalized experiences that keep customers engaged and coming back for more",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: ["Personalized Content", "Easy Navigation", "Fast Performance", "Offline Access"],
    },
    {
      title: "Build Brand Loyalty",
      description:
        "Create strong brand connections through consistent mobile experiences and direct customer communication",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Brand Recognition",
        "Customer Retention",
        "Loyalty Programs",
        "Direct Communication",
      ],
    },
    {
      title: "Stay Ahead of Competition",
      description:
        "Gain a competitive edge by offering modern mobile solutions that meet today's customer expectations",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      features: ["Market Leadership", "Innovation", "Customer Satisfaction", "Business Growth"],
    },
    {
      title: "24/7 Business Access",
      description:
        "Make your business accessible to customers anytime, anywhere, increasing sales opportunities",
      icon: Clock,
      color: "from-indigo-500 to-purple-500",
      features: ["Always Available", "Global Reach", "Instant Access", "Increased Sales"],
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Get valuable insights into customer behavior, preferences, and trends to make informed business decisions",
      icon: BarChart,
      color: "from-teal-500 to-cyan-500",
      features: [
        "User Analytics",
        "Behavior Tracking",
        "Performance Metrics",
        "Business Intelligence",
      ],
    },
  ];

  const topicalGuide = [
    {
      id: "planning",
      title: "Planning & Strategy",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      content: {
        title: "Mobile App Planning & Strategy",
        description: "Essential steps to plan and strategize your mobile app development project",
        points: [
          "Define your app's purpose and target audience",
          "Conduct market research and competitor analysis",
          "Choose the right platform (iOS, Android, or both)",
          "Plan your app's features and functionality",
          "Create a detailed project timeline and budget",
          "Select the right development team or agency",
        ],
        tips: [
          "Start with a clear vision and goals",
          "Consider user needs and pain points",
          "Plan for scalability from the beginning",
          "Set realistic timelines and expectations",
        ],
      },
    },
    {
      id: "design",
      title: "UI/UX Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      content: {
        title: "User Interface & Experience Design",
        description: "Creating intuitive and engaging user experiences for your mobile app",
        points: [
          "Design user-friendly interfaces and navigation",
          "Create wireframes and interactive prototypes",
          "Implement modern design principles and trends",
          "Ensure accessibility and inclusive design",
          "Optimize for different screen sizes and devices",
          "Design for both iOS and Android guidelines",
        ],
        tips: [
          "Focus on user experience first",
          "Keep the design simple and intuitive",
          "Test designs with real users",
          "Follow platform-specific design guidelines",
        ],
      },
    },
    {
      id: "development",
      title: "Development Process",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      content: {
        title: "Mobile App Development Process",
        description: "The technical development process from coding to deployment",
        points: [
          "Choose the right technology stack and frameworks",
          "Set up development environment and tools",
          "Implement core features and functionality",
          "Integrate APIs and third-party services",
          "Ensure code quality and best practices",
          "Implement security measures and data protection",
        ],
        tips: [
          "Use modern development frameworks",
          "Follow coding standards and best practices",
          "Implement proper error handling",
          "Plan for regular updates and maintenance",
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
        description: "Comprehensive testing to ensure your app works perfectly",
        points: [
          "Perform functional testing on all features",
          "Conduct user acceptance testing (UAT)",
          "Test on multiple devices and screen sizes",
          "Perform performance and load testing",
          "Security testing and vulnerability assessment",
          "Beta testing with real users",
        ],
        tips: [
          "Test early and test often",
          "Use automated testing tools",
          "Gather user feedback during testing",
          "Fix issues before launch",
        ],
      },
    },
    {
      id: "deployment",
      title: "Deployment & Launch",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      content: {
        title: "App Store Deployment & Launch",
        description: "Successfully launching your app on app stores and marketing it",
        points: [
          "Prepare app store listings and descriptions",
          "Create compelling app store screenshots and videos",
          "Submit apps to Apple App Store and Google Play",
          "Implement app store optimization (ASO)",
          "Plan marketing and promotional strategies",
          "Monitor app performance and user feedback",
        ],
        tips: [
          "Create compelling app store content",
          "Plan your launch marketing strategy",
          "Monitor app store reviews and ratings",
          "Be prepared for post-launch support",
        ],
      },
    },
    {
      id: "maintenance",
      title: "Maintenance & Updates",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      content: {
        title: "Ongoing Maintenance & Updates",
        description: "Keeping your app updated and maintaining its performance",
        points: [
          "Regular bug fixes and performance improvements",
          "Add new features and functionality",
          "Update for new OS versions and devices",
          "Monitor app analytics and user behavior",
          "Handle user support and feedback",
          "Plan for app scaling and growth",
        ],
        tips: [
          "Plan for regular updates and maintenance",
          "Monitor app performance and analytics",
          "Listen to user feedback and suggestions",
          "Stay updated with platform changes",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900  overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                Mobile App Development
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Mobile{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  App Development
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We create innovative mobile applications that engage users and drive business
                growth. From native iOS/Android apps to cross-platform solutions, we deliver
                exceptional mobile experiences.
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
                { number: "5+", label: "Apps Built", icon: Smartphone },
                { number: "10+", label: "Happy Clients", icon: Users },
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
                        className={`w-20 h-20 bg-gradient-to-r ${app.color} rounded-3xl flex items-center justify-center mx-auto shadow-lg`}
                      >
                        <app.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {app.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-center text-sm">
                      {app.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                        Key Features:
                      </h4>
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Technologies
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Mobile{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Tech Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge mobile development technologies to build robust and scalable
                applications.
              </p>
            </div>

            <div className="space-y-8">
              {technologies.map((category, categoryIndex) => (
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
                      {category.techs.map((tech, techIndex) => (
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
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {categoryIndex < technologies.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Development{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven mobile app development process ensures quality, transparency, and timely
                delivery.
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
                We deliver exceptional mobile solutions with cutting-edge features and technologies.
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
                Why Choose Mobile Apps?
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text">
                  Mobile App Development
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how mobile app development can transform your business and drive growth.
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
                  Mobile App Development
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about mobile app development, from planning to
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
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your app idea and create a stunning mobile application that drives
              results.
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

export default MobileApps;
