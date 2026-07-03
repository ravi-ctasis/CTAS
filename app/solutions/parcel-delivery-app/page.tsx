"use client";

import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Package,
  MapPin,
  Clock,
  Shield,
  Smartphone,
  Users,
  Zap,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Globe,
  TrendingUp,
  Bell,
  Route,
  BarChart3,
  MessageSquare,
  CreditCard,
  PhoneCall,
  Brain,
  ShoppingBag,
  User,
  Palette,
  Server,
  Database,
  Lock,
  Cloud,
  Compass,
  Phone,
  Radio,
  Eye,
  GitBranch,
  Activity,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function ParcelDeliveryApp() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes delivery-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }
      
      @keyframes route-trace {
        0% { stroke-dashoffset: 100; }
        100% { stroke-dashoffset: 0; }
      }
      
      @keyframes package-bounce {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes truck-move {
        0% { transform: translateX(-20px); }
        100% { transform: translateX(20px); }
      }
      
      .animate-delivery-pulse { animation: delivery-pulse 2s ease-in-out infinite; }
      .animate-route-trace { animation: route-trace 3s linear infinite; }
      .animate-package-bounce { animation: package-bounce 2s ease-in-out infinite; }
      .animate-truck-move { animation: truck-move 4s ease-in-out infinite alternate; }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Smart Package Tracking",
      description:
        "Real-time tracking with GPS precision, delivery updates, and photo confirmations",
      highlights: ["Live GPS Tracking", "Delivery Photos", "SMS Updates", "Route Optimization"],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fleet Management",
      description:
        "Advanced logistics with driver allocation, vehicle tracking, and route optimization",
      highlights: [
        "Driver Assignment",
        "Vehicle Monitoring",
        "Fuel Optimization",
        "Performance Analytics",
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Delivery",
      description: "Same-day, next-day, and scheduled delivery options with time slot selection",
      highlights: ["Same-day Delivery", "Time Slots", "Priority Handling", "Rush Orders"],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location Services",
      description: "Precise address verification, GPS navigation, and location-based services",
      highlights: ["Address Validation", "GPS Navigation", "Location Sharing", "Geofencing"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Handling",
      description: "Insurance coverage, secure packaging, and tamper-proof delivery solutions",
      highlights: [
        "Package Insurance",
        "Secure Packaging",
        "Tamper Detection",
        "Signature Capture",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Driver Network",
      description: "Verified drivers, real-time communication, and performance monitoring",
      highlights: ["Background Checks", "Driver Ratings", "Live Chat", "Performance Tracking"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Experience",
      description: "Native apps for customers and drivers with offline capabilities",
      highlights: ["Customer App", "Driver App", "Offline Mode", "Push Notifications"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Business insights, delivery analytics, and performance reporting",
      highlights: ["Delivery Metrics", "Revenue Analytics", "Customer Insights", "Route Analytics"],
    },
  ];

  const benefits = [
    "99.9% Delivery Success Rate",
    "Real-time Package Tracking",
    "24/7 Customer Support",
    "Insurance Coverage",
    "Flexible Delivery Options",
    "Eco-friendly Routes",
  ];

  const techStack = [
    // Frontend Technologies
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "React Native",
      description: "Cross-platform mobile apps",
      category: "Frontend",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Next.js",
      description: "Web application framework",
      category: "Frontend",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "TypeScript",
      description: "Type-safe development",
      category: "Frontend",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tailwind CSS",
      description: "Utility-first styling",
      category: "Frontend",
    },

    // Backend Technologies
    {
      icon: <Server className="w-8 h-8" />,
      title: "Node.js",
      description: "Backend API services",
      category: "Backend",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Express.js",
      description: "Web application framework",
      category: "Backend",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "JWT Authentication",
      description: "Secure user authentication",
      category: "Backend",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "bcrypt",
      description: "Password hashing",
      category: "Backend",
    },

    // Database & Storage
    {
      icon: <Database className="w-8 h-8" />,
      title: "MongoDB",
      description: "NoSQL database",
      category: "Database",
    },

    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS S3",
      description: "File storage",
      category: "Database",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "PostgreSQL",
      description: "Relational database",
      category: "Database",
    },

    // Cloud & Infrastructure
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS",
      description: "Cloud infrastructure",
      category: "Cloud",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AWS Lambda",
      description: "Serverless functions",
      category: "Cloud",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "CloudFront",
      description: "Content delivery network",
      category: "Cloud",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AWS IAM",
      description: "Identity management",
      category: "Cloud",
    },

    // Maps & Location Services
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Google Maps API",
      description: "Real-time navigation",
      category: "Maps",
    },

    {
      icon: <Compass className="w-8 h-8" />,
      title: "Geolocation API",
      description: "GPS tracking",
      category: "Maps",
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Routing Engine",
      description: "Optimized routes",
      category: "Maps",
    },

    // AI & Machine Learning
    {
      icon: <Brain className="w-8 h-8" />,
      title: "TensorFlow",
      description: "Machine learning models",
      category: "AI/ML",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scikit-learn",
      description: "Predictive analytics",
      category: "AI/ML",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "OpenAI API",
      description: "AI-powered features",
      category: "AI/ML",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pandas",
      description: "Data analysis",
      category: "AI/ML",
    },

    // Real-time Communication
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Socket.io",
      description: "Real-time updates",
      category: "Real-time",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Twilio",
      description: "SMS notifications",
      category: "Real-time",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Push Notifications",
      description: "Mobile alerts",
      category: "Real-time",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "WebRTC",
      description: "Voice communication",
      category: "Real-time",
    },

    // Payment & Security
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Stripe",
      description: "Payment processing",
      category: "Payment",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SSL/TLS",
      description: "Data encryption",
      category: "Payment",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "OAuth 2.0",
      description: "Social authentication",
      category: "Payment",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "2FA",
      description: "Two-factor authentication",
      category: "Payment",
    },

    // DevOps & Monitoring
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "GitHub Actions",
      description: "CI/CD pipeline",
      category: "DevOps",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "New Relic",
      description: "Application monitoring",
      category: "DevOps",
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Sentry",
      description: "Error tracking",
      category: "DevOps",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Grafana",
      description: "Metrics visualization",
      category: "DevOps",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-10 left-10 w-32 h-32 text-blue-200 animate-delivery-pulse"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3" />
          </svg>
          <svg
            className="absolute top-1/3 right-20 w-24 h-24 text-indigo-200 animate-package-bounce"
            viewBox="0 0 100 100"
          >
            <rect x="25" y="25" width="50" height="50" fill="currentColor" opacity="0.4" />
          </svg>
          <svg
            className="absolute bottom-20 left-1/4 w-40 h-40 text-blue-100"
            viewBox="0 0 100 100"
          >
            <path
              d="M20,80 Q50,20 80,80"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="animate-route-trace"
              strokeDasharray="10,5"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 animate-delivery-pulse">
                  Fast & Reliable Delivery
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Swift
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {" "}
                    Parcel
                  </span>
                  <br />
                  Delivery
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Revolutionary courier platform with AI-powered logistics, real-time tracking, and
                  lightning-fast delivery across the globe
                </p>
              </div>

              {/* Key Benefits Pills */}
              <div className="flex flex-wrap gap-3">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    View Portfolios
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">Packages Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Side - Delivery Tracking Interface */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-blue-200 sm:block hidden">
                {/* Delivery Tracking Dashboard */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Live Tracking</h3>
                    <div className="animate-truck-move">
                      <Truck className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>

                  {/* Package Status */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium opacity-90">Package #SPD123456</span>
                      <Badge className="bg-white/20 text-white">In Transit</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold">New York → Los Angeles</div>
                      <div className="text-sm opacity-90">Expected: Today, 3:30 PM</div>
                    </div>
                  </div>

                  {/* Delivery Progress */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Delivery Progress</h4>
                    <div className="space-y-3">
                      {[
                        {
                          status: "Package Picked Up",
                          time: "9:00 AM",
                          completed: true,
                        },
                        {
                          status: "In Transit",
                          time: "10:30 AM",
                          completed: true,
                        },
                        {
                          status: "Out for Delivery",
                          time: "2:00 PM",
                          completed: false,
                        },
                        {
                          status: "Delivered",
                          time: "3:30 PM",
                          completed: false,
                        },
                      ].map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${step.completed ? "bg-green-500" : "bg-gray-300"
                              } ${!step.completed && index === 2
                                ? "animate-delivery-pulse bg-blue-500"
                                : ""
                              }`}
                          />
                          <div className="flex-1">
                            <div
                              className={`font-medium ${step.completed ? "text-gray-900" : "text-gray-500"
                                }`}
                            >
                              {step.status}
                            </div>
                            <div className="text-sm text-gray-500">{step.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Map Simulation */}
                  <div className="bg-gray-100 rounded-xl p-4 relative overflow-hidden">
                    <div className="text-sm font-medium text-gray-600 mb-3">Live Location</div>
                    <div className="relative h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                      {/* Route Path */}
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 200 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M20,80 Q100,20 180,80"
                          stroke="orange"
                          strokeWidth="4"
                          fill="none"
                          className="animate-route-trace"
                          strokeDasharray="10,5"
                          strokeLinecap="round"
                        />
                        {/* Route Dots */}
                        <circle cx="20" cy="80" r="3" fill="orange" />
                        <circle cx="100" cy="20" r="3" fill="orange" />
                        <circle cx="180" cy="80" r="3" fill="orange" />
                      </svg>

                      {/* Start Point - Pickup Location */}
                      <div className="absolute top-2 left-2">
                        <MapPin className="w-5 h-5 text-red-500 animate-bounce" />
                        <div className="absolute -bottom-6 left-0 text-xs text-gray-600 font-medium whitespace-nowrap">
                          Pickup
                        </div>
                      </div>

                      {/* End Point - Delivery Location */}
                      <div className="absolute top-2 right-2">
                        <MapPin className="w-5 h-5 text-green-500" />
                        <div className="absolute -bottom-6 right-0 text-xs text-gray-600 font-medium whitespace-nowrap">
                          Delivery
                        </div>
                      </div>

                      {/* Moving Truck with Progress Animation */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-truck-move">
                        <Truck className="w-6 h-6 text-blue-500" />
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-medium">
                          Driver
                        </div>
                      </div>

                      {/* Delivery Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-r-full animate-pulse"
                          style={{ width: "65%" }}
                        ></div>
                      </div>

                      {/* Map Grid Lines */}
                      <div className="absolute inset-0 opacity-20">
                        <div
                          className="h-full w-full"
                          style={{
                            backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                          `,
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>
                    </div>

                    {/* Delivery Status Indicator */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">Package Picked Up</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">In Transit</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">Out for Delivery</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <span className="text-xs text-gray-400">Delivered</span>
                      </div>
                    </div>
                  </div>

                  {/* Driver Info */}
                  <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">John Smith</div>
                      <div className="text-sm text-gray-600">Your Delivery Driver</div>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">4.9</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                        <PhoneCall className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 animate-package-bounce">
                <Package className="w-8 h-8 text-blue-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Secure Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Delivery Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 mb-4">
              🚀 Advanced Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Next-Generation
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Delivery Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary features powered by AI, machine learning, and cutting-edge logistics
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* AI-Powered Route Optimization */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Route Optimization</h3>
                  <p className="text-gray-600">
                    Machine learning algorithms for optimal delivery routes
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time traffic analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Weather condition integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Fuel efficiency optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Dynamic route adjustments</span>
                </div>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Predictive Analytics</h3>
                  <p className="text-gray-600">Advanced forecasting for delivery optimization</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Demand prediction models</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Delivery time estimation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Capacity planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Risk assessment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 mb-4">
              Delivery Solutions
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Delivery Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored delivery solutions for every business need and package type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-commerce Delivery */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Delivery</h3>
              <p className="text-gray-600 mb-6">
                Seamless integration with major e-commerce platforms
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Shopify integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">WooCommerce support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Automated shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Order tracking</span>
                </div>
              </div>
            </Card>

            {/* Bulk Shipping */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bulk Shipping</h3>
              <p className="text-gray-600 mb-6">Efficient handling of large volume shipments</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Volume discounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Pallet handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Warehouse management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Inventory tracking</span>
                </div>
              </div>
            </Card>

            {/* International Shipping */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">International Shipping</h3>
              <p className="text-gray-600 mb-6">Global delivery network with customs handling</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Customs clearance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Documentation support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Multi-language support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Global tracking</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 mb-4">
              🔒 Security & Compliance
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Security
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bank-level security with comprehensive compliance and data protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Protection */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">GDPR compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SOC 2 Type II</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Regular security audits</span>
                </div>
              </div>
            </Card>

            {/* Insurance Coverage */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Coverage</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Full package insurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Liability protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Accident coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Claims processing</span>
                </div>
              </div>
            </Card>

            {/* Driver Verification */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Driver Verification</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Background checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">License verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Drug testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Regular monitoring</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 mb-4">
              🛠️ Technology Stack
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Built with
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Modern Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tech stack powering our advanced delivery platform with cutting-edge
              tools and frameworks
            </p>
          </div>

          {/* Technology Categories */}
          <div className="space-y-12">
            {/* Frontend Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Frontend Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {techStack
                  .filter((tech) => tech.category === "Frontend")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-4 lg:p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white text-sm lg:text-base">{tech.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1 truncate">
                            {tech.title}
                          </h3>
                          <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Backend Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {techStack
                  .filter((tech) => tech.category === "Backend")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-4 lg:p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white text-sm lg:text-base">{tech.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1 truncate">
                            {tech.title}
                          </h3>
                          <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Database & Storage */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Database & Storage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {techStack
                  .filter((tech) => tech.category === "Database")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-4 lg:p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white text-sm lg:text-base">{tech.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1 truncate">
                            {tech.title}
                          </h3>
                          <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Cloud & Infrastructure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack
                  .filter((tech) => tech.category === "Cloud")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white">{tech.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.title}</h3>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Maps & Location Services */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Maps & Location Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack
                  .filter((tech) => tech.category === "Maps")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white">{tech.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.title}</h3>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                AI & Machine Learning
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack
                  .filter((tech) => tech.category === "AI/ML")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white">{tech.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.title}</h3>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Real-time Communication */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Real-time Communication
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack
                  .filter((tech) => tech.category === "Real-time")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white">{tech.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.title}</h3>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Payment & Security */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Payment & Security
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack
                  .filter((tech) => tech.category === "Payment")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white">{tech.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.title}</h3>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* DevOps & Monitoring */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                DevOps & Monitoring
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack
                  .filter((tech) => tech.category === "DevOps")
                  .map((tech, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-white">{tech.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.title}</h3>
                          <p className="text-gray-600 text-sm">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Delivery Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and individuals who trust SwiftParcel for their courier
            needs
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
}
