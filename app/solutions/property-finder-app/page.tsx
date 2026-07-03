
;
import React from "react";
import {
  Home,
  Building2,
  Phone,
  Users,
  Globe,
  ArrowRight,
  Database,
  Server,
  CheckCircle,
  Search,
  MapPin,
  Heart,
  Cloud,
  Smartphone,
  Code,
  Star,
  TrendingUp,
  Sliders,
  Shield,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

const PropertyFinderAppPage = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI-Powered Smart Search",
      description:
        "Advanced property discovery with intelligent filters, natural language processing, and predictive search suggestions",
      highlights: ["Voice Search", "Auto-complete", "Smart Filters", "Saved Searches"],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location Intelligence",
      description:
        "Comprehensive neighborhood insights with crime data, school ratings, transportation, and local amenities analysis",
      highlights: ["Crime Statistics", "School Ratings", "Transport Links", "Local Amenities"],
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Virtual Reality Tours",
      description:
        "Immersive 3D virtual tours with 360° walkthroughs, AR furniture placement, and virtual staging",
      highlights: ["360° Tours", "AR Staging", "Floor Plans", "Virtual Walkthrough"],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Recommendations",
      description:
        "ML-driven property suggestions based on preferences, browsing history, and behavioral patterns",
      highlights: ["Smart Matching", "Preference Learning", "Market Alerts", "Price Predictions"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Analytics",
      description:
        "Real-time market trends, price history, investment potential analysis, and market forecasting",
      highlights: ["Price Trends", "Investment ROI", "Market Forecast", "Comparable Sales"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description:
        "End-to-end encrypted communications, secure document sharing, and verified agent profiles",
      highlights: [
        "Bank-level Security",
        "Document Vault",
        "Identity Verification",
        "Secure Messaging",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Experience",
      description:
        "Native mobile apps with offline viewing, push notifications, and GPS-based property discovery",
      highlights: ["Offline Mode", "Push Notifications", "GPS Discovery", "Touch ID Login"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agent Network",
      description:
        "Connect with verified real estate professionals, schedule viewings, and access expert consultation",
      highlights: [
        "Verified Agents",
        "Video Consultations",
        "Instant Scheduling",
        "Expert Reviews",
      ],
    },
  ];

  const benefits = [
    {
      title: "For Homebuyers",
      icon: <Home className="w-8 h-8" />,
      items: [
        "Advanced property search with AI filters",
        "Virtual reality property tours",
        "Real-time market analysis and trends",
        "Mortgage calculator and financing tools",
        "Property comparison and evaluation",
        "Saved searches with instant alerts",
      ],
    },
    {
      title: "For Property Sellers",
      icon: <Building2 className="w-8 h-8" />,
      items: [
        "Comprehensive listing management",
        "AI-powered market value estimation",
        "Professional photography and staging",
        "Lead generation and tracking system",
        "Performance analytics and insights",
        "Virtual staging and 3D modeling",
      ],
    },
    {
      title: "For Real Estate Agents",
      icon: <Users className="w-8 h-8" />,
      items: [
        "Advanced CRM and lead management",
        "Property listing and marketing tools",
        "Client communication platform",
        "Market analysis and reporting",
        "Commission tracking and analytics",
        "Mobile app for field operations",
      ],
    },
  ];

  const techStack = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "React Native",
      description: "Cross-platform mobile development",
      category: "Frontend",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Next.js",
      description: "React framework for web applications",
      category: "Frontend",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Node.js",
      description: "JavaScript runtime for backend services",
      category: "Backend",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "PostgreSQL",
      description: "Advanced relational database system",
      category: "Database",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "MongoDB",
      description: "NoSQL database for flexible data storage",
      category: "Database",
    },

    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS",
      description: "Comprehensive cloud infrastructure",
      category: "Cloud",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Google Cloud",
      description: "Machine learning and analytics platform",
      category: "Cloud",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Docker",
      description: "Containerization for deployment",
      category: "DevOps",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Kubernetes",
      description: "Container orchestration platform",
      category: "DevOps",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Google Maps API",
      description: "Advanced mapping and location services",
      category: "APIs",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Stripe API",
      description: "Secure payment processing",
      category: "APIs",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Auth0",
      description: "Authentication and authorization",
      category: "Security",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "JWT",
      description: "JSON Web Tokens for secure sessions",
      category: "Security",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "TensorFlow",
      description: "Machine learning for property recommendations",
      category: "AI/ML",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Python",
      description: "Data analysis and AI algorithms",
      category: "AI/ML",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "React Native",
      description: "iOS and Android mobile applications",
      category: "Mobile",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Flutter",
      description: "Cross-platform mobile development",
      category: "Mobile",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Socket.io",
      description: "Real-time communication and notifications",
      category: "Real-time",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "GraphQL",
      description: "Efficient API query language",
      category: "APIs",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "TypeScript",
      description: "Type-safe JavaScript development",
      category: "Languages",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Elasticsearch",
      description: "Advanced search and analytics",
      category: "Search",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "CloudFlare",
      description: "CDN and security services",
      category: "Infrastructure",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Apache Kafka",
      description: "Event streaming and data pipelines",
      category: "Data",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-violet-900 overflow-hidden py-10">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-violet-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-medium">
                    🏘️ Next-Gen Property Platform
                  </Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Find Your
                    <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      {" "}
                      Dream Property
                    </span>
                  </h1>
                  <p className="text-xl text-purple-100 max-w-2xl">
                    Experience the future of real estate with our cutting-edge property discovery
                    platform. Powered by AI and designed for the modern property hunter.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-purple-200">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>AI-Powered Discovery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-200">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>Virtual Reality Tours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-200">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>Market Intelligence</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us">
                    <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Button>
                  </Link>
                  <Link href="/portfolios">
                    <Button
                      variant="outline"
                      className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      <ArrowRight className="w-5 h-5 mr-2" />
                      View Portfolios
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Enhanced App Phone Mockup */}
              <div className="relative hidden lg:flex items-center justify-center min-h-[680px] px-8">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-violet-400/20 rounded-full blur-2xl animate-float"></div>
                </div>

                {/* Hand/Shadow effect */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-20 bg-black/10 rounded-full blur-2xl z-0"></div>

                {/* Floating UI Elements around phone */}
                <div className="absolute top-16 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-purple-200 animate-float z-20">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-slate-600 font-medium">AI Powered</span>
                  </div>
                </div>

                <div className="absolute top-32 right-12 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-blue-200 animate-float-delayed z-20">
                  <div className="flex items-center space-x-2 text-xs">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-slate-600 font-medium">4.9 Rating</span>
                  </div>
                </div>

                <div className="absolute bottom-32 left-16 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-cyan-200 animate-float z-20">
                  <div className="flex items-center space-x-2 text-xs">
                    <MapPin className="w-3 h-3 text-cyan-500" />
                    <span className="text-slate-600 font-medium">Live Location</span>
                  </div>
                </div>

                <div className="absolute bottom-16 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-pink-200 animate-float-delayed z-20">
                  <div className="flex items-center space-x-2 text-xs">
                    <Shield className="w-3 h-3 text-pink-500" />
                    <span className="text-slate-600 font-medium">Secure</span>
                  </div>
                </div>

                {/* Phone Mockup with Fixed Styling */}
                <div className="relative z-10">
                  <div
                    className="mx-auto w-[300px] h-[600px] bg-gradient-to-br from-slate-100 to-white rounded-[2.5rem] shadow-2xl border-4 border-slate-200 flex flex-col overflow-hidden transform rotate-3 scale-105"
                    style={{ boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}
                  >
                    {/* Phone Bezel Details */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-400 rounded-full"></div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-500 rounded-full"></div>

                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-4 py-2 bg-white/90 backdrop-blur-sm border-b border-slate-200">
                      <div className="flex items-center space-x-2 text-xs text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold">9:41</span>
                        <div className="px-2 py-0.5 bg-purple-100 rounded-full text-purple-600 text-xs font-medium">
                          Live
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-0.5">
                          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
                          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
                          <div className="w-1 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="w-5 h-2 bg-green-400 rounded-sm ml-1"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 pt-4 pb-3 bg-gradient-to-br from-white to-purple-50/50">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-lg font-bold text-slate-800 mb-1">
                            PropertyVision
                          </div>
                          <div className="text-xs text-purple-600 font-medium">
                            AI Real Estate Discovery
                          </div>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                          <Home className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 rounded-full">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-700 font-medium">3,247 Properties</span>
                        </div>
                        <div className="flex items-center space-x-1 px-2 py-1 bg-blue-100 rounded-full">
                          <TrendingUp className="w-3 h-3 text-blue-600" />
                          <span className="text-blue-700 font-medium">+5.2%</span>
                        </div>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-4 py-3 bg-gradient-to-b from-purple-50/40 to-white/80">
                      <div className="relative">
                        <div className="flex items-center bg-white rounded-xl px-3 py-2 shadow-md border border-purple-100">
                          <Search className="w-4 h-4 text-purple-500 mr-2" />
                          <input
                            type="text"
                            placeholder="Search dream property..."
                            className="bg-transparent outline-none text-sm flex-1 text-slate-700"
                          />
                          <div className="ml-2 p-1 bg-purple-500 rounded-md">
                            <Sliders className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white animate-bounce"></div>
                      </div>
                    </div>

                    {/* Property Cards */}
                    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 bg-gradient-to-b from-white/90 to-slate-50">
                      {/* Card 1 */}
                      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-4 border border-purple-100 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"></div>
                        <div className="flex items-center space-x-3 relative z-10">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-md relative">
                            <Home className="w-7 h-7 text-white" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-bold text-slate-800 text-sm">
                                Luxury Penthouse
                              </div>
                              <div className="px-2 py-0.5 bg-purple-100 rounded-full">
                                <span className="text-purple-600 text-xs font-bold">Featured</span>
                              </div>
                            </div>
                            <div className="text-xs text-slate-500 mb-1">
                              Manhattan • 3 beds • 2 baths
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-purple-600 text-sm">$1.2M</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs text-slate-600">4.9</span>
                              </div>
                            </div>
                          </div>
                          <Heart className="w-5 h-5 text-pink-500 fill-current hover:scale-110 transition-transform cursor-pointer" />
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-4 border border-blue-100 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-lg"></div>
                        <div className="flex items-center space-x-3 relative z-10">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
                            <Building2 className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-800 text-sm mb-1">
                              Modern Townhouse
                            </div>
                            <div className="text-xs text-slate-500 mb-1">
                              Brooklyn • 4 beds • 3 baths
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-blue-600 text-sm">$950K</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs text-slate-600">4.7</span>
                              </div>
                            </div>
                          </div>
                          <Heart className="w-5 h-5 text-pink-400 hover:scale-110 transition-transform cursor-pointer" />
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-lg p-4 border border-cyan-100 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-lg"></div>
                        <div className="flex items-center space-x-3 relative z-10">
                          <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                            <Home className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-800 text-sm mb-1">
                              Seaside Villa
                            </div>
                            <div className="text-xs text-slate-500 mb-1">
                              Malibu • 5 beds • 4 baths
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-cyan-600 text-sm">$2.1M</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs text-slate-600">5.0</span>
                              </div>
                            </div>
                          </div>
                          <Heart className="w-5 h-5 text-pink-400 hover:scale-110 transition-transform cursor-pointer" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-white to-slate-50 border-t border-slate-200 backdrop-blur-sm">
                      <div className="flex flex-col items-center relative">
                        <div className="p-2 bg-purple-500 rounded-xl shadow-md">
                          <Home className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs font-bold text-purple-600 mt-1">Home</span>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="p-2 rounded-xl">
                          <Search className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-400 mt-1">Search</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="p-2 rounded-xl">
                          <MapPin className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-400 mt-1">Map</span>
                      </div>
                      <div className="flex flex-col items-center relative">
                        <div className="p-2 rounded-xl">
                          <Heart className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-400 mt-1">Saved</span>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="p-2 rounded-xl">
                          <Users className="w-5 h-5 text-slate-400" />
                        </div>
                        <span className="text-xs text-slate-400 mt-1">Agents</span>
                      </div>
                    </div>

                    {/* Screen Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[2.5rem]"></div>
                  </div>

                  {/* Phone Stand/Hand Effect */}
                  <div className="absolute -bottom-6 -left-3 w-20 h-12 bg-gradient-to-br from-slate-300/40 to-slate-400/40 rounded-2xl blur-lg transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">75K+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">35K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">750+</div>
              <div className="text-gray-600">Real Estate Agents</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Building className="inline-block w-8 h-8 mr-3 text-blue-500" />
              Key Features for Modern Property Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive platform with advanced AI, virtual tours, market analytics, and secure
              transactions for the ultimate real estate experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-purple-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits for All Real Estate Stakeholders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform creates value for buyers, sellers, and real estate professionals with
              cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <ul className="space-y-3 text-left">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies across frontend, backend, mobile, AI/ML, and
              cloud infrastructure
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-purple-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{tech.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{tech.title}</h4>
                <p className="text-gray-600 text-sm">{tech.description}</p>
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                    {tech.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Property Discovery?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8">
            Join the real estate revolution with a smart, efficient, and user-friendly property
            discovery platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolios">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default PropertyFinderAppPage;
