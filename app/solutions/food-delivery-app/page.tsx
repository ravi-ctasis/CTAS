"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

import {
  Truck,
  Clock,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  MapPin,
  CreditCard,
  Bell,
  Search,
  Heart,
  ChefHat,
  Target,
  TrendingUp,
  BarChart3,
  Smartphone,
  Monitor,
  Server,
  CheckCircle,
  ArrowUpRight,
  Sparkles,
  Rocket,
  Globe as WebIcon,
  Menu,
  ShoppingCart,
  Package,
  Eye,
  Settings,
  Wifi,
  Battery,
  Signal,
  MessageCircle,
  Palette,
  Mail,
} from "lucide-react";
import Link from "next/link";

const FoodDeliveryAppPage = () => {
  const [activeSection] = useState("overview");
  const [selectedPlatform] = useState("all");

  const deliveryFeatures = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Real-time Tracking",
      description: "Live GPS updates with ETA",
      color: "from-emerald-400 to-teal-500",
      metric: "2.5x faster delivery",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Smart Scheduling",
      description: "AI-powered route optimization",
      color: "from-blue-400 to-indigo-500",
      metric: "30% time saved",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Secure Payments",
      description: "Multiple payment options",
      color: "from-purple-400 to-pink-500",
      metric: "99.9% secure",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Smart Discovery",
      description: "AI restaurant recommendations",
      color: "from-orange-400 to-red-500",
      metric: "5x faster search",
    },
  ];

  const platforms = [
    {
      name: "iOS App",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      features: ["Swift", "Core Data", "PushKit"],
    },
    {
      name: "Android App",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      features: ["Kotlin", "Room", "WorkManager"],
    },
    {
      name: "Web Platform",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      features: ["React", "Next.js", "TypeScript"],
    },
    {
      name: "Admin Dashboard",
      icon: <Settings className="w-8 h-8" />,
      color: "from-gray-600 to-slate-700",
      features: ["Vue.js", "Node.js", "MongoDB"],
    },
  ];

  const filteredPlatforms =
    selectedPlatform === "all"
      ? platforms
      : platforms.filter((platform) =>
        platform.name.toLowerCase().includes(selectedPlatform.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 lg:p-16 z-10">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg mb-6 sm:mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              #1 Food Delivery Platform
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="text-slate-800">Deliver</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600">
                Happiness
              </span>
              <span className="text-slate-800">to Every Door</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-8 sm:mb-12 leading-relaxed">
              Build the ultimate food delivery experience with AI-powered logistics, real-time
              tracking, and seamless user interfaces that keep customers coming back.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl font-bold rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Start Building
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-3 border-slate-300 text-slate-700 hover:bg-slate-100 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl font-bold rounded-2xl sm:rounded-3xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { number: "500+", label: "Apps Built" },
                { number: "10M+", label: "Orders" },
                { number: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - App Mockup */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 sm:p-8">
          <div className="relative">
            {/* Main Phone Mockup */}
            <div className="relative bg-white rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-4 sm:border-8 border-slate-800">
              <div className="w-64 sm:w-80 h-[480px] sm:h-[600px] bg-gradient-to-br from-slate-100 to-blue-100 rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-6 overflow-hidden">
                {/* App Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                      <ChefHat className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-slate-800 font-bold text-base sm:text-lg">FoodHub</div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Signal className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                    <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
                    <Battery className="w-4 h-3 sm:w-6 sm:h-4 text-slate-600" />
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm border border-slate-200">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    <div className="text-slate-400 text-xs sm:text-sm">Search restaurants...</div>
                  </div>
                </div>

                {/* Restaurant Cards */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Card 1 */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-slate-200">
                    <div className="w-full h-24 sm:h-32 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg sm:rounded-xl mb-2 sm:mb-3 relative">
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/90 rounded-full p-1 sm:p-2">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
                      <div className="h-3 sm:h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 sm:h-3 bg-slate-200 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <span className="text-xs sm:text-sm text-slate-600">4.8</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500">25-35 min</div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-sm border border-slate-200">
                    <div className="w-full h-16 sm:h-20 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg sm:rounded-xl mb-1 sm:mb-2 relative">
                      <div className="absolute top-1 right-1 bg-white/90 rounded-full p-1">
                        <Clock className="w-2 h-2 sm:w-3 sm:h-3 text-blue-500" />
                      </div>
                    </div>
                    <div className="h-2 sm:h-3 bg-slate-200 rounded w-2/3 mb-1"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg border border-slate-200">
                    <div className="flex items-center justify-around">
                      <div className="text-emerald-600">
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-slate-400">
                        <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-slate-400">
                        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="text-slate-400">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hide on very small screens */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200 hidden sm:block">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-800">Live</div>
                  <div className="text-xs text-slate-500">Tracking</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200 hidden sm:block">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-800">25 min</div>
                  <div className="text-xs text-slate-500">ETA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Sections - No Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Food Delivery App Development
            </h2>
            <p className="text-lg text-slate-600">
              Complete solutions for modern food delivery platforms
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="min-h-screen">
        {/* Overview Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-6 py-3 text-lg mb-6">
                <Target className="w-5 h-5 mr-2" />
                Why Choose Us
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
                The Complete
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  Food Delivery Solution
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From concept to launch, we provide everything you need to build a successful food
                delivery platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-slate-100"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-emerald-600">{feature.metric}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
                Powerful Features for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  Modern Delivery
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Real-time GPS Tracking",
                    description:
                      "Live location updates with estimated delivery times and route optimization.",
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: "Enterprise Security",
                    description:
                      "Bank-level security with end-to-end encryption and fraud protection.",
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8" />,
                    title: "Advanced Analytics",
                    description:
                      "Comprehensive insights into orders, customer behavior, and performance.",
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: "Multi-platform Support",
                    description: "Seamless experience across iOS, Android, and web platforms.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Performance Metrics</h3>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        label: "Order Success Rate",
                        value: "98.5%",
                        color: "from-emerald-400 to-teal-500",
                      },
                      {
                        label: "Customer Satisfaction",
                        value: "4.9/5",
                        color: "from-blue-400 to-indigo-500",
                      },
                      {
                        label: "Delivery Speed",
                        value: "22 min",
                        color: "from-purple-400 to-pink-500",
                      },
                      {
                        label: "App Performance",
                        value: "99.9%",
                        color: "from-orange-400 to-red-500",
                      },
                    ].map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-slate-700">
                          <span>{metric.label}</span>
                          <span>{metric.value}</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 bg-gradient-to-r ${metric.color} rounded-full`}
                            style={{ width: `${85 + index * 5}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        {activeSection === "platforms" && (
          <section className="py-15 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
                  Multi-Platform
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                    Development
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We build native and cross-platform solutions for all major platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredPlatforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-slate-100"
                  >
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-3xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <div className="text-white">{platform.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4">{platform.name}</h3>

                    <div className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Development Process Section */}
      <section className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-6 py-3 text-lg mb-6">
              <Rocket className="w-5 h-5 mr-2" />
              Our Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
              How We Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Your App
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven development methodology that ensures quality, speed, and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a detailed project roadmap",
                icon: <Search className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-600",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Create stunning UI/UX designs and interactive prototypes",
                icon: <Eye className="w-8 h-8" />,
                color: "from-purple-500 to-pink-600",
              },
              {
                step: "03",
                title: "Development",
                description: "Build your app using modern technologies and best practices",
                icon: <Code className="w-8 h-8" />,
                color: "from-emerald-500 to-teal-600",
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "Rigorous testing and smooth deployment to app stores",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "from-orange-500 to-red-600",
              },
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-slate-100">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <div className="text-white">{phase.icon}</div>
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-slate-600">{phase.step}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-4">{phase.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-15 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-6 py-3 text-lg mb-6">
              <Zap className="w-5 h-5 mr-2" />
              Key Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Modern Delivery Apps
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive features that make your food delivery app stand out from the
              competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Real-time GPS Tracking",
                description:
                  "Live location updates with estimated delivery times and route optimization for drivers and customers.",
                features: [
                  "Live driver tracking",
                  "ETA calculations",
                  "Route optimization",
                  "Geofencing",
                ],
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Advanced Security",
                description:
                  "Bank-level security with end-to-end encryption, fraud protection, and secure payment processing.",
                features: [
                  "SSL encryption",
                  "Fraud detection",
                  "Secure payments",
                  "Data protection",
                ],
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Analytics Dashboard",
                description:
                  "Comprehensive insights into orders, customer behavior, and business performance metrics.",
                features: [
                  "Sales analytics",
                  "Customer insights",
                  "Performance metrics",
                  "Custom reports",
                ],
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multi-platform Support",
                description:
                  "Native iOS and Android apps with responsive web platform for maximum reach.",
                features: ["iOS app", "Android app", "Web platform", "Cross-platform sync"],
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Payment Integration",
                description:
                  "Multiple payment methods including cards, digital wallets, and cash on delivery.",
                features: [
                  "Credit/Debit cards",
                  "Digital wallets",
                  "Cash on delivery",
                  "Split payments",
                ],
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "User Management",
                description:
                  "Comprehensive user profiles, preferences, and loyalty programs for customer retention.",
                features: ["User profiles", "Preferences", "Loyalty programs", "Referral system"],
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Push Notifications",
                description:
                  "Smart notifications for order updates, promotions, and customer engagement.",
                features: [
                  "Order updates",
                  "Promotional alerts",
                  "Custom notifications",
                  "Scheduled messages",
                ],
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Inventory Management",
                description:
                  "Real-time inventory tracking with automatic updates and low stock alerts.",
                features: [
                  "Real-time updates",
                  "Low stock alerts",
                  "Category management",
                  "Bulk operations",
                ],
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Customer Support",
                description:
                  "Built-in chat support, ticket system, and help center for excellent customer service.",
                features: ["Live chat", "Ticket system", "Help center", "FAQ integration"],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>

                <div className="space-y-2">
                  {feature.features.map((subFeature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-slate-600">{subFeature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-6 py-3 text-lg mb-4">
              <Code className="w-5 h-5 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-4">
              Built with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Modern Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to ensure your app is fast, secure, and scalable.
            </p>
          </div>

          {/* Frontend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "React Native",
                  icon: <Smartphone className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-600",
                  description: "Cross-platform mobile development",
                },
                {
                  name: "React.js",
                  icon: <Globe className="w-8 h-8" />,
                  color: "from-blue-600 to-indigo-700",
                  description: "Web application framework",
                },
                {
                  name: "TypeScript",
                  icon: <Code className="w-8 h-8" />,
                  color: "from-blue-700 to-indigo-800",
                  description: "Type-safe JavaScript",
                },
                {
                  name: "Next.js",
                  icon: <WebIcon className="w-8 h-8" />,
                  color: "from-slate-600 to-gray-700",
                  description: "React framework for production",
                },
                {
                  name: "Tailwind CSS",
                  icon: <Palette className="w-8 h-8" />,
                  color: "from-cyan-500 to-blue-600",
                  description: "Utility-first CSS framework",
                },
                {
                  name: "Redux",
                  icon: <Database className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-600",
                  description: "State management",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{tech.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">{tech.name}</h4>
                  <p className="text-gray-400 text-xs text-center">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "Node.js",
                  icon: <Server className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-600",
                  description: "JavaScript runtime",
                },
                {
                  name: "Express.js",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-gray-500 to-slate-600",
                  description: "Web application framework",
                },
                {
                  name: "Python",
                  icon: <Code className="w-8 h-8" />,
                  color: "from-blue-500 to-indigo-600",
                  description: "Backend programming",
                },
                {
                  name: "Django",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-green-600 to-emerald-700",
                  description: "Python web framework",
                },
                {
                  name: "PostgreSQL",
                  icon: <Database className="w-8 h-8" />,
                  color: "from-blue-600 to-indigo-700",
                  description: "Relational database",
                },
                {
                  name: "MongoDB",
                  icon: <Database className="w-8 h-8" />,
                  color: "from-green-600 to-emerald-700",
                  description: "NoSQL database",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{tech.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">{tech.name}</h4>
                  <p className="text-gray-400 text-xs text-center">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Cloud & DevOps</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "AWS",
                  icon: <Cloud className="w-8 h-8" />,
                  color: "from-orange-500 to-red-600",
                  description: "Cloud infrastructure",
                },
                {
                  name: "Docker",
                  icon: <Package className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-600",
                  description: "Containerization",
                },
                {
                  name: "Kubernetes",
                  icon: <Server className="w-8 h-8" />,
                  color: "from-blue-600 to-indigo-700",
                  description: "Container orchestration",
                },
                {
                  name: "CI/CD",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-600",
                  description: "Automated deployment",
                },
                {
                  name: "Nginx",
                  icon: <Globe className="w-8 h-8" />,
                  color: "from-green-600 to-emerald-700",
                  description: "Web server",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{tech.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">{tech.name}</h4>
                  <p className="text-xs text-gray-400 text-center">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Third-party Integrations */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Integrations & APIs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "Stripe",
                  icon: <CreditCard className="w-8 h-8" />,
                  color: "from-purple-500 to-indigo-600",
                  description: "Payment processing",
                },
                {
                  name: "Google Maps",
                  icon: <MapPin className="w-8 h-8" />,
                  color: "from-blue-500 to-green-600",
                  description: "Location services",
                },
                {
                  name: "Firebase",
                  icon: <Zap className="w-8 h-8" />,
                  color: "from-orange-500 to-yellow-600",
                  description: "Backend services",
                },
                {
                  name: "Twilio",
                  icon: <MessageCircle className="w-8 h-8" />,
                  color: "from-red-500 to-pink-600",
                  description: "SMS & notifications",
                },
                {
                  name: "SendGrid",
                  icon: <Mail className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-600",
                  description: "Email services",
                },
                {
                  name: "Analytics",
                  icon: <BarChart3 className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-600",
                  description: "Data insights",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-y-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{tech.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">{tech.name}</h4>
                  <p className="text-xs text-gray-400 text-center">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
            Transform Your Food Delivery Business
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let&apos;s build the next generation of food delivery technology together.
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

export default FoodDeliveryAppPage;
