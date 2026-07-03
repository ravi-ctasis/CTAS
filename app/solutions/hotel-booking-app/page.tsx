
;
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  Hotel,
  MapPin,
  Calendar,
  Users,
  Star,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  Server,
  CreditCard,
  Wifi,
  Bell,
  Search,
  Clock,
  CheckCircle,
  Award,
  TrendingUp,
  MessageCircle,
  DollarSign,
  Gift,
  Smartphone,
  Monitor,
  Tablet,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface TechStackProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
        <div className={`w-full h-full ${gradient} rounded-full blur-2xl`}></div>
      </div>

      {/* Icon Container */}
      <div className="relative z-10">
        <div
          className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${gradient} text-white mb-6 shadow-lg border-2 border-white/20`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-60"></div>
    </div>
  );
};

const TechStack: React.FC<TechStackProps> = ({ icon, name, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-2xl"></div>
      </div>

      {/* Icon Container */}
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20">
          <div className="text-white text-2xl">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-500 group-hover:w-full"></div>

      {/* Corner Decoration */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-60"></div>
    </div>
  );
};

const HotelBookingAppPage = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Smart Search & Filters",
      description:
        "Advanced search with location-based recommendations, price filters, and amenity preferences.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "Instant Booking",
      description:
        "Real-time availability checking and instant booking confirmation with secure payment processing.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Secure Payments",
      description:
        "Multiple payment options with SSL encryption and fraud protection for safe transactions.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Reviews & Ratings",
      description:
        "Authentic guest reviews, photos, and ratings to help users make informed decisions.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Bell className="w-8 h-8 text-red-500" />,
      title: "Price Alerts",
      description:
        "Smart notifications for price drops and special deals on preferred destinations.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: "Multi-language Support",
      description:
        "Global platform supporting multiple languages and currencies for international travelers.",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  const techStack = [
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      name: "React Native",
      description: "Cross-platform mobile development for iOS and Android",
    },
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      name: "Next.js",
      description: "Server-side rendering and web application framework",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      name: "PostgreSQL",
      description: "Reliable database for booking data and user management",
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      name: "AWS",
      description: "Scalable cloud infrastructure and services",
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      name: "Node.js",
      description: "Backend API development and real-time features",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      name: "Stripe",
      description: "Secure payment processing and subscription management",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      name: "TypeScript",
      description: "Type-safe JavaScript for robust development",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      name: "GraphQL",
      description: "Flexible API query language for efficient data fetching",
    },

    {
      icon: <Award className="w-8 h-8 text-white" />,
      name: "Docker",
      description: "Containerization for consistent deployment",
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      name: "Kubernetes",
      description: "Container orchestration and scaling management",
    },
    {
      icon: <Bell className="w-8 h-8 text-white" />,
      name: "Socket.io",
      description: "Real-time communication and notifications",
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      name: "Elasticsearch",
      description: "Advanced search and analytics engine",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      name: "MongoDB",
      description: "Flexible NoSQL database for dynamic data",
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      name: "Google Maps API",
      description: "Location services and mapping integration",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      name: "Twilio",
      description: "SMS and communication services",
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      name: "JWT",
      description: "Secure authentication and authorization",
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      name: "Jest",
      description: "Comprehensive testing framework",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      name: "Cron Jobs",
      description: "Automated task scheduling and processing",
    },
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      name: "WebRTC",
      description: "Real-time video and audio communication",
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      name: "Webpack",
      description: "Module bundling and asset optimization",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      name: "Jenkins",
      description: "Continuous integration and deployment",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      name: "S3 Storage",
      description: "Scalable cloud storage for media files",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      name: "Cypress",
      description: "End-to-end testing automation",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-spin"></div>
            <div
              className="absolute top-40 right-32 w-24 h-24 border-2 border-white/20 rounded-full animate-spin"
              style={{ animationDirection: "reverse" }}
            ></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-white/20 rounded-full animate-spin"></div>
            <div
              className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white/20 rounded-full animate-spin"
              style={{ animationDirection: "reverse" }}
            ></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-pulse"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-spin"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Live Demo Available</span>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
                  <span className="block">Transform Your</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Hotel Business
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300 mt-4">
                    With Smart Booking
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
                Revolutionize your travel business with our cutting-edge hotel booking platform.
                <span className="text-white font-medium">
                  {" "}
                  AI-powered recommendations, real-time analytics, and seamless multi-platform
                  experience.
                </span>
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500K+</div>
                  <div className="text-gray-400 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-gray-400 text-sm">Hotels Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/portfolios
"
                >
                  <Button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-semibold overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      <Play className="w-5 h-5 mr-3" />
                      View Portfolios
                    </span>
                    {/* Button Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button
                    variant="outline"
                    className="group relative border-2 border-white/30 text-white hover:bg-white hover:text-indigo-900 px-10 py-5 text-lg rounded-2xl transition-all duration-300 font-semibold backdrop-blur-sm"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center mt-8 text-gray-400 text-sm">
                <div className="flex items-center mr-6">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center mr-6">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative lg:flex items-center justify-center hidden">
              {/* Main Hotel App Mockup */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-700">
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2.5rem] overflow-hidden relative">
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Hotel className="w-8 h-8 mr-3" />
                          <span className="text-xl font-bold">HotelBook</span>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Search className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-sm opacity-90">Find your perfect stay</div>
                    </div>

                    {/* Hotel Cards */}
                    <div className="p-4 space-y-4">
                      {/* Hotel Card 1 */}
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <Hotel className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">$299</div>
                            <div className="text-sm text-gray-500">per night</div>
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Grand Plaza Hotel</h3>
                        <p className="text-sm text-gray-600 mb-3">Downtown, New York</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-semibold">4.8</span>
                          </div>
                          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                            Popular
                          </div>
                        </div>
                      </div>

                      {/* Hotel Card 2 */}
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Hotel className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">$450</div>
                            <div className="text-sm text-gray-500">per night</div>
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Seaside Resort</h3>
                        <p className="text-sm text-gray-600 mb-3">Miami Beach, FL</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-semibold">4.9</span>
                          </div>
                          <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                            Luxury
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements Around Phone */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-bounce"></div>

                {/* Decorative Icons */}
                <div className="absolute -top-8 left-8 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-8 right-8 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border border-white/10 rounded-full animate-spin"></div>
        <div
          className="absolute bottom-1/4 left-10 w-24 h-24 border border-white/10 rounded-full animate-spin"
          style={{ animationDirection: "reverse" }}
        ></div>
      </section>

      {/* Why Choose Our Hotel Booking App Solution? */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Why Choose Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                {" "}
                Hotel Booking App Solution?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive features and proven technology designed to maximize hotel bookings,
              enhance guest experience, and drive business growth across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Revenue Optimization */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Optimization</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced pricing strategies, dynamic rates, and smart upselling features to
                  maximize hotel revenue and occupancy rates.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Dynamic pricing algorithms
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Smart upselling features
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Revenue analytics dashboard
                  </li>
                </ul>
              </div>
            </div>

            {/* Guest Experience */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Exceptional Guest Experience
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seamless booking process, personalized recommendations, and 24/7 support to ensure
                  guests have the best possible experience.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    One-click booking process
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Personalized recommendations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    24/7 customer support
                  </li>
                </ul>
              </div>
            </div>

            {/* Scalable Architecture */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Server className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cloud-native platform built to handle growth from boutique hotels to international
                  chains with auto-scaling and high availability.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    Auto-scaling infrastructure
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    99.9% uptime guarantee
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    Global CDN distribution
                  </li>
                </ul>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bank-level security with PCI DSS compliance, SSL encryption, and fraud detection
                  to protect sensitive booking and payment data.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    PCI DSS compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    SSL/TLS encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                    Fraud detection system
                  </li>
                </ul>
              </div>
            </div>

            {/* Multi-Platform Support */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Platform Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Native iOS and Android apps, responsive web platform, and PWA support to reach
                  guests on any device, anywhere.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                    Native mobile apps
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                    Responsive web platform
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                    PWA capabilities
                  </li>
                </ul>
              </div>
            </div>

            {/* Analytics & Insights */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Real-time dashboards with booking trends, guest behavior analysis, and revenue
                  insights to optimize business performance.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    Real-time booking analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    Guest behavior insights
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    Performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From initial consultation to ongoing support, we provide end-to-end hotel booking
              platform development and management services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Development */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Tailored hotel booking platform development with custom features, integrations,
                  and branding to match your unique business requirements.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Custom UI/UX design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Third-party integrations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                    Brand customization
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="group relative bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Native iOS and Android applications with advanced features, offline capabilities,
                  and seamless user experience across all devices.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Native iOS & Android apps
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Offline functionality
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    Push notifications
                  </li>
                </ul>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Cloud className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Scalable cloud infrastructure setup with AWS, auto-scaling, load balancing, and
                  99.9% uptime guarantee for your platform.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    AWS cloud setup
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    Auto-scaling configuration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                    Load balancing
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Integration */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-100">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Integration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Secure payment gateway integration with multiple payment methods, fraud detection,
                  and PCI DSS compliance for safe transactions.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                    Multiple payment methods
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                    Fraud detection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                    PCI DSS compliance
                  </li>
                </ul>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-teal-100">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive analytics dashboard with real-time insights, booking trends, revenue
                  reports, and performance optimization tools.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    Real-time dashboards
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    Revenue analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
                    Performance insights
                  </li>
                </ul>
              </div>
            </div>

            {/* Ongoing Support */}
            <div className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-indigo-100">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  24/7 technical support, regular updates, maintenance, and feature enhancements to
                  keep your platform running smoothly.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                    24/7 technical support
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                    Regular updates
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
                    Maintenance services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {" "}
                Modern Travel
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hotel booking platform comes packed with features designed to enhance the travel
              experience for both guests and hoteliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-8">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                {" "}
                Features
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Experience cutting-edge technology with our advanced hotel booking platform. From
              AI-powered recommendations to real-time analytics, we provide everything you need.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Recommendations */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Recommendations</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Machine learning algorithms analyze user preferences, booking history, and market
                  trends to provide personalized hotel recommendations.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Personalized suggestions
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Smart pricing alerts
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Behavioral analysis
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time Analytics */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Analytics</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Comprehensive dashboard with real-time insights, booking trends, revenue
                  analytics, and performance metrics for hoteliers.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Live booking tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Revenue optimization
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Performance insights
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Language Support */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Multi-Language Support</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Global platform supporting 50+ languages with automatic translation and localized
                  content for international travelers.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    50+ languages
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Localized content
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Currency conversion
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Security */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Advanced Security</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Enterprise-grade security with SSL encryption, fraud detection, and PCI compliance
                  for safe and secure transactions.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    SSL encryption
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Fraud detection
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    PCI compliance
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Pricing Engine */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Smart Pricing Engine</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Dynamic pricing system that adjusts rates based on demand, seasonality, and market
                  conditions for optimal revenue.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Dynamic pricing
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Demand forecasting
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Revenue optimization
                  </div>
                </div>
              </div>
            </div>

            {/* API Integration */}
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">API Integration</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Comprehensive REST API with extensive documentation for seamless integration with
                  existing systems and third-party services.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    RESTful API
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    Webhook support
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                    SDK libraries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Built for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {" "}
                  Scale & Performance
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our platform handles millions of bookings with 99.9% uptime, ensuring your business
                never stops growing.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Microservices Architecture</h4>
                    <p className="text-gray-400">Scalable and maintainable system design</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Cloud-Native Platform</h4>
                    <p className="text-gray-400">Built on AWS with global CDN</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Real-Time Database</h4>
                    <p className="text-gray-400">Instant synchronization across devices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-white/20 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">
                  Performance Metrics
                </h4>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Response Time</span>
                      <span className="text-white font-semibold">~50ms</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Uptime</span>
                      <span className="text-white font-semibold">99.9%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                        style={{ width: "99.9%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Concurrent Users</span>
                      <span className="text-white font-semibold">100K+</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built with Modern
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {" "}
                Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hotel booking platform is built using cutting-edge technologies to ensure
              scalability, security, and exceptional performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <TechStack
                key={index}
                icon={tech.icon}
                name={tech.name}
                description={tech.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Platform Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Multi-Platform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                {" "}
                Solutions
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Our hotel booking platform is available across all devices and platforms, ensuring
              seamless access for travelers and hoteliers worldwide.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* iOS App */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Native iOS application with Apple Pay integration, Siri shortcuts, and seamless
                  iCloud synchronization.
                </p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Apple Pay integration
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Siri shortcuts
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    iCloud sync
                  </div>
                </div>
              </div>
            </div>

            {/* Android App */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Native Android application with Google Pay, fingerprint authentication, and
                  Material Design 3.
                </p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Google Pay support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Fingerprint auth
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Material Design 3
                  </div>
                </div>
              </div>
            </div>

            {/* Web Platform */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Monitor className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Platform</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Progressive Web App with offline support, push notifications, and responsive
                  design for all devices.
                </p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    PWA support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Offline mode
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Push notifications
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet App */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Tablet className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tablet App</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Optimized tablet experience with split-screen support, enhanced UI, and touch
                  gestures.
                </p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Split-screen mode
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Enhanced UI
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Touch gestures
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Hotel Business?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of hoteliers who have already revolutionized their booking process with
            our comprehensive hotel booking platform.
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

export default HotelBookingAppPage;
