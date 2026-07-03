"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

import {
  MapPin,
  Calendar,
  Users,
  Star,
  Heart,
  Search,
  Plane,
  Camera,
  Globe,
  Clock,
  Shield,
  Zap,
  Smartphone,
  Monitor,
  Server,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  CreditCard,
  Bell,
  Palette,
  TrendingUp,
  Package,
  Settings,
  Rocket,
  Sparkles,
  Signal,
  Wifi,
  Battery,
  Target,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const TravelAppPage = () => {
  const [selectedPlatform] = useState("all");

  const travelFeatures = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Real-time Booking",
      description: "Instant flight and hotel reservations",
      color: "from-blue-400 to-indigo-500",
      metric: "2.5x faster booking",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Smart Planning",
      description: "AI-powered itinerary creation",
      color: "from-emerald-400 to-teal-500",
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
      description: "AI destination recommendations",
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

  const techStack = [
    {
      category: "Frontend",
      items: [
        {
          name: "React Native",
          icon: <Code className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "TypeScript",
          icon: <Code className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "Tailwind CSS",
          icon: <Palette className="w-6 h-6" />,
          color: "bg-cyan-100 text-cyan-600",
        },
        {
          name: "Redux Toolkit",
          icon: <Database className="w-6 h-6" />,
          color: "bg-purple-100 text-purple-600",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: <Server className="w-6 h-6" />,
          color: "bg-green-100 text-green-600",
        },
        {
          name: "Express.js",
          icon: <Server className="w-6 h-6" />,
          color: "bg-gray-100 text-gray-600",
        },
        {
          name: "PostgreSQL",
          icon: <Database className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        {
          name: "AWS",
          icon: <Cloud className="w-6 h-6" />,
          color: "bg-orange-100 text-orange-600",
        },
        {
          name: "Docker",
          icon: <Package className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "Kubernetes",
          icon: <Server className="w-6 h-6" />,
          color: "bg-blue-100 text-blue-600",
        },
        {
          name: "CI/CD",
          icon: <Zap className="w-6 h-6" />,
          color: "bg-green-100 text-green-600",
        },
      ],
    },
  ];

  const integrations = [
    {
      name: "Payment Gateways",
      icon: <CreditCard className="w-12 h-12" />,
      color: "from-green-400 to-emerald-500",
      items: ["Stripe", "PayPal", "Square", "Apple Pay"],
    },
    {
      name: "Maps & Location",
      icon: <MapPin className="w-12 h-12" />,
      color: "from-blue-400 to-indigo-500",
      items: ["Google Maps", "Mapbox", "Geocoding", "Geofencing"],
    },
    {
      name: "Analytics",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-purple-400 to-pink-500",
      items: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar"],
    },
    {
      name: "Communication",
      icon: <Bell className="w-12 h-12" />,
      color: "from-orange-400 to-red-500",
      items: ["Twilio", "SendGrid", "Firebase", "OneSignal"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 z-10">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-lg mb-4 sm:mb-6 md:mb-8 shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
              #1 Travel Platform
            </Badge>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight">
              <span className="text-slate-800">Explore</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
                The World
              </span>
              <span className="text-slate-800">with Confidence</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
              Build the ultimate travel experience with AI-powered booking, real-time updates, and
              seamless user interfaces that keep travelers coming back.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl font-bold rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                  Start Building
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 sm:border-3 border-slate-300 text-slate-700 hover:bg-slate-100 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl font-bold rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-300"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
                  View Portfolios
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { number: "500+", label: "Apps Built" },
                { number: "10M+", label: "Bookings" },
                { number: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-blue-600 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - App Mockup */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="relative">
            {/* Main Phone Mockup */}
            <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-2 sm:border-4 md:border-6 lg:border-8 border-slate-800">
              <div className="w-48 sm:w-64 md:w-80 h-[360px] sm:h-[480px] md:h-[600px] bg-gradient-to-br from-slate-100 to-blue-100 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] p-3 sm:p-4 md:p-6 overflow-hidden">
                {/* App Header */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Plane className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-slate-800 font-bold text-sm sm:text-base md:text-lg">
                      Wanderlust
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Signal className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-slate-600" />
                    <Wifi className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-slate-600" />
                    <Battery className="w-3 h-2 sm:w-4 sm:h-3 md:w-6 md:h-4 text-slate-600" />
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 md:mb-6 shadow-sm border border-slate-200">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Search className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-slate-400" />
                    <div className="text-slate-400 text-xs sm:text-sm">Search destinations...</div>
                  </div>
                </div>

                {/* Destination Cards */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Card 1 */}
                  <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg border border-slate-200">
                    <div className="w-full h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-md sm:rounded-lg md:rounded-xl mb-1 sm:mb-2 md:mb-3 relative">
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/90 rounded-full p-1 sm:p-2">
                        <Heart className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-500" />
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2 mb-1 sm:mb-2 md:mb-3">
                      <div className="h-2 sm:h-3 md:h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-1 sm:h-2 md:h-3 bg-slate-200 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                        <span className="text-xs sm:text-sm text-slate-600">4.8</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500">From $599</div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 shadow-sm border border-slate-200">
                    <div className="w-full h-12 sm:h-16 md:h-20 bg-gradient-to-r from-green-200 to-emerald-200 rounded-md sm:rounded-lg md:rounded-xl mb-1 sm:mb-2 relative">
                      <div className="absolute top-1 right-1 bg-white/90 rounded-full p-1">
                        <Clock className="w-2 h-2 sm:w-3 sm:h-3 text-green-500" />
                      </div>
                    </div>
                    <div className="h-2 sm:h-3 bg-slate-200 rounded w-2/3 mb-1"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6">
                  <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 shadow-lg border border-slate-200">
                    <div className="flex items-center justify-around">
                      <div className="text-blue-600">
                        <Plane className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-slate-400">
                        <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-slate-400">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-slate-400">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Responsive visibility */}
            <div className="absolute -top-2 sm:-top-4 md:-top-6 -right-2 sm:-right-4 md:-right-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-slate-200 hidden sm:block">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-slate-800">
                    Live
                  </div>
                  <div className="text-xs text-slate-500">Booking</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 -left-2 sm:-left-4 md:-left-6 bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-slate-200 hidden sm:block">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-slate-800">
                    24h
                  </div>
                  <div className="text-xs text-slate-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Sections - No Tabs */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 sm:mb-4">
              Travel App Development
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Complete solutions for modern travel booking platforms
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="min-h-screen">
        {/* Overview Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg mb-4 sm:mb-6">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Why Choose Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4 sm:mb-6">
                The Complete
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  Travel Booking Solution
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                From concept to launch, we provide everything you need to build a successful travel
                booking platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {travelFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 border border-slate-100"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-blue-600">
                      {feature.metric}
                    </span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-200/20 rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-purple-200/20 rounded-full blur-2xl sm:blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg mb-4 sm:mb-6">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Next-Gen Travel Technology
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4 sm:mb-6 md:mb-8">
                Revolutionary Features for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
                  Smart Travel
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Experience the future of travel with AI-powered intelligence, blockchain security,
                and immersive AR experiences that transform how you explore the world.
              </p>
            </div>

            {/* Main Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
              {/* Left Side - Feature Cards */}
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
                    title: "AI-Powered Smart Booking",
                    description:
                      "Machine learning algorithms predict optimal booking times, suggest personalized deals, and automatically rebook for better prices.",
                    color: "from-blue-500 to-indigo-600",
                    gradient: "from-blue-100 to-indigo-100",
                    stats: "40% savings",
                  },
                  {
                    icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
                    title: "Predictive Itinerary AI",
                    description:
                      "Advanced AI analyzes your preferences, weather patterns, and crowd data to create perfect travel schedules.",
                    color: "from-emerald-500 to-teal-600",
                    gradient: "from-emerald-100 to-teal-100",
                    stats: "95% accuracy",
                  },
                  {
                    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                    title: "Blockchain Security",
                    description:
                      "Decentralized identity verification, tamper-proof booking records, and cryptocurrency payment options.",
                    color: "from-purple-500 to-pink-600",
                    gradient: "from-purple-100 to-pink-100",
                    stats: "100% secure",
                  },
                  {
                    icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />,
                    title: "AR Travel Assistant",
                    description:
                      "Augmented reality navigation, real-time translation, and immersive destination previews through your camera.",
                    color: "from-orange-500 to-red-600",
                    gradient: "from-orange-100 to-red-100",
                    stats: "3D experience",
                  },
                ].map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border border-white/50">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-white">{feature.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                              {feature.title}
                            </h3>
                            <span
                              className={`text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} text-slate-700`}
                            >
                              {feature.stats}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                  </div>
                ))}
              </div>

              {/* Right Side - Interactive Dashboard */}
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/50 relative overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
                          Travel Dashboard
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600">
                          Real-time analytics & insights
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm font-medium text-green-600">Live</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                    {[
                      {
                        label: "Active Bookings",
                        value: "1,247",
                        change: "+12%",
                        color: "text-blue-600",
                        bg: "bg-blue-50",
                      },
                      {
                        label: "Revenue Today",
                        value: "$45,892",
                        change: "+8%",
                        color: "text-green-600",
                        bg: "bg-green-50",
                      },
                      {
                        label: "Customer Satisfaction",
                        value: "98.5%",
                        change: "+2%",
                        color: "text-purple-600",
                        bg: "bg-purple-50",
                      },
                      {
                        label: "System Uptime",
                        value: "99.9%",
                        change: "+0.1%",
                        color: "text-orange-600",
                        bg: "bg-orange-50",
                      },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`${stat.bg} rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/50`}
                      >
                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <span className="text-xs sm:text-sm font-medium text-slate-600">
                            {stat.label}
                          </span>
                          <span className="text-xs font-bold text-green-600">{stat.change}</span>
                        </div>
                        <div className={`text-lg sm:text-xl md:text-2xl font-black ${stat.color}`}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">
                      Recent Activity
                    </h4>
                    {[
                      {
                        action: "Flight booked",
                        detail: "NYC → Paris",
                        time: "2 min ago",
                        icon: "✈️",
                      },
                      {
                        action: "Hotel reserved",
                        detail: "Luxury Suite",
                        time: "5 min ago",
                        icon: "🏨",
                      },
                      {
                        action: "Payment processed",
                        detail: "$1,299",
                        time: "8 min ago",
                        icon: "💳",
                      },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-50/50 rounded-lg sm:rounded-xl"
                      >
                        <div className="text-lg sm:text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-800 text-sm sm:text-base">
                            {activity.action}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-600">{activity.detail}</div>
                        </div>
                        <div className="text-xs text-slate-500">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xl">
                  Live Data
                </div>
                <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xl">
                  Real-time
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-4 sm:right-8 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Bottom Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Quantum Computing",
                  description: "Next-generation processing power for complex travel algorithms",
                  color: "from-indigo-500 to-purple-600",
                },
                {
                  icon: <Server className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "IoT Integration",
                  description: "Seamless connectivity with smart devices and sensors",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
                  title: "Edge Computing",
                  description: "Ultra-fast processing with local AI models for instant responses",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4 sm:mb-6">
                Multi-Platform
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  Development
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                Build once, deploy everywhere. Our solutions work seamlessly across all major
                platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {filteredPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 border border-slate-100"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${platform.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{platform.icon}</div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                    {platform.name}
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    {platform.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm sm:text-base text-slate-600 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4 sm:mb-6">
                How We Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  Your Travel App
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We analyze your requirements and create a detailed roadmap.",
                  icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description: "Create stunning UI/UX designs and interactive prototypes.",
                  icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "Build robust features with comprehensive testing.",
                  icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "Launch your app and provide ongoing maintenance.",
                  icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
                },
              ].map((process, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 border border-slate-100">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                      <div className="text-white">{process.icon}</div>
                    </div>

                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                      <span className="text-2xl sm:text-3xl font-black text-blue-600">
                        {process.step}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                      {process.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>

                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4 sm:mb-6">
                Technology
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  Stack
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                We use cutting-edge technologies to build scalable and high-performance travel
                applications.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {techStack.map((category) => (
                <div key={category.category}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                      >
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-slate-700">{item.icon}</div>
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-800">
                          {item.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-4 sm:mb-6">
                Integrations &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  APIs
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 border border-slate-100"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${integration.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                  >
                    <div className="text-white">{integration.icon}</div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
                    {integration.name}
                  </h3>

                  <div className="space-y-2 sm:space-y-3">
                    {integration.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm sm:text-base text-slate-600 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8">
              Transform Your Travel Business
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Let&apos;s build the next generation of travel technology together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
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
      </div>

      <FooterSection />
    </div>
  );
};

export default TravelAppPage;
