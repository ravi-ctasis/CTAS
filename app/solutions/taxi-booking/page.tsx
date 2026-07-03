
;
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  Car,
  MapPin,
  Clock,
  Star,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  CreditCard,
  Bell,
  Search,
  CheckCircle,
  Award,
  MessageCircle,
  DollarSign,
  Tablet,
  TrendingDown,
  Cpu,
  Headphones,
  Apple,
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
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
        <div className={`w-full h-full ${gradient} rounded-full blur-2xl`}></div>
      </div>

      <div className="relative z-10">
        <div
          className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${gradient} text-white mb-6 shadow-lg border-2 border-white/20`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>

        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
      </div>

      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-60"></div>
    </div>
  );
};

const TechStack: React.FC<TechStackProps> = ({ icon, name, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20">
          <div className="text-white text-2xl">{icon}</div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>

        <p className="text-sm text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-500 group-hover:w-full"></div>

      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-60"></div>
    </div>
  );
};

export default function TaxiBookingAppPage() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Smart Location Detection",
      description:
        "Automatic GPS location detection with address autocomplete and favorite locations for quick booking.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Real-Time Tracking",
      description:
        "Live driver tracking with ETA updates, route optimization, and real-time notifications throughout the ride.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Safety Features",
      description:
        "Emergency SOS button, driver verification, trip sharing, and 24/7 customer support for passenger safety.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Driver Ratings",
      description:
        "Comprehensive rating system with detailed reviews, driver profiles, and quality assurance measures.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Bell className="w-8 h-8 text-red-500" />,
      title: "Smart Notifications",
      description:
        "Push notifications for booking confirmations, driver arrival, trip completion, and promotional offers.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: "Multi-City Support",
      description:
        "Operational across multiple cities with local regulations compliance and city-specific features.",
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
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden py-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Moving Taxi Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-bounce">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full"></div>
          </div>
          <div className="absolute top-40 right-20 w-12 h-12 opacity-15 animate-pulse">
            <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
          </div>
          <div
            className="absolute bottom-32 left-1/3 w-20 h-20 opacity-25 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
          </div>

          {/* Road Pattern */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-800 to-gray-600 opacity-10">
            <div className="w-full h-2 bg-blue-400 opacity-30 animate-pulse"></div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center animate-bounce">
            <Car className="w-4 h-4 text-blue-600" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center animate-pulse">
            <MapPin className="w-3 h-3 text-indigo-600" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <Star className="w-5 h-5 text-purple-600" />
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-10 right-10 w-24 h-24 border-2 border-blue-200 rounded-full animate-spin opacity-30"></div>
          <div
            className="absolute bottom-20 left-10 w-32 h-32 border-2 border-indigo-200 rounded-full animate-spin opacity-20"
            style={{ animationDirection: "reverse" }}
          ></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-purple-200 rounded-full animate-spin opacity-25"></div>
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left order-2 md:order-1">
              {/* Unique Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg mb-8">
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold text-sm">
                  🚕 Instant Booking Available
                </span>
              </div>

              {/* Main Heading */}
              <div className="mb-6 lg:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 lg:mb-6 leading-none">
                  <span className="block">Your Ride,</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                    Your Way
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-600 mt-2 lg:mt-4">
                    Taxi Booking Made Simple
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-2xl leading-relaxed">
                Experience the future of transportation with our intelligent taxi booking platform.
                <span className="text-gray-900 font-semibold">
                  {" "}
                  Book rides in seconds, track in real-time, and arrive safely every time.
                </span>
              </p>

              {/* Unique Stats Row */}
              <div className="flex flex-wrap gap-4 lg:gap-8 mb-8 lg:mb-10">
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg border border-blue-100">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">2M+</div>
                  <div className="text-gray-600 text-xs lg:text-sm font-medium">Happy Rides</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg border border-indigo-100">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-600">75K+</div>
                  <div className="text-gray-600 text-xs lg:text-sm font-medium">
                    Trusted Drivers
                  </div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg border border-purple-100">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-600 text-xs lg:text-sm font-medium">Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                  <Button className="group relative bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-lg rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold overflow-hidden transform hover:scale-105">
                    <span className="relative z-10 flex items-center">Get Free Quote</span>
                    {/* Button Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button
                    variant="outline"
                    className="group relative border-3 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 lg:px-12 py-4 lg:py-6 text-base lg:text-lg rounded-2xl lg:rounded-3xl transition-all duration-300 font-bold shadow-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      <Play className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                      View Portfolios
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 text-gray-600 text-sm">
                <div className="flex items-center bg-white/80 px-3 py-2 rounded-full shadow-sm">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  <span className="font-medium text-xs sm:text-sm">Verified Drivers</span>
                </div>
                <div className="flex items-center bg-white/80 px-3 py-2 rounded-full shadow-sm">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span className="font-medium text-xs sm:text-sm">Safe Rides</span>
                </div>
                <div className="flex items-center bg-white/80 px-3 py-2 rounded-full shadow-sm">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="font-medium text-xs sm:text-sm">4.9★ Rating</span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0">
              {/* Unique Taxi App Mockup */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-none">
                {/* Phone Frame with Taxi Theme */}
                <div className="relative w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] md:w-[360px] md:h-[540px] lg:w-[400px] lg:h-[600px] xl:w-[440px] xl:h-[660px] mx-auto bg-gradient-to-br from-blue-400 to-indigo-400 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] xl:rounded-[4rem] p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 shadow-2xl border-2 sm:border-3 lg:border-4 border-blue-300">
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-white to-blue-50 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] xl:rounded-[3.5rem] overflow-hidden relative">
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                      <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-5">
                        <div className="flex items-center">
                          <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 mr-2 sm:mr-2.5 md:mr-3 lg:mr-3.5" />
                          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                            TaxiExpress
                          </span>
                        </div>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Bell className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5" />
                        </div>
                      </div>
                      <div className="text-sm sm:text-base md:text-lg lg:text-lg opacity-90">
                        Where to today?
                      </div>
                    </div>

                    {/* Location Input */}
                    <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                      <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg border border-blue-100 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                        <div className="flex items-center mb-3 sm:mb-3.5 md:mb-4 lg:mb-4.5">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-blue-100 rounded-full flex items-center justify-center mr-2.5 sm:mr-3 md:mr-3.5 lg:mr-4">
                            <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-blue-600" />
                          </div>
                          <input
                            type="text"
                            placeholder="Enter destination..."
                            className="flex-1 text-sm sm:text-base md:text-lg lg:text-lg text-gray-900 placeholder-gray-500 outline-none"
                            readOnly
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-indigo-100 rounded-full flex items-center justify-center mr-2.5 sm:mr-3 md:mr-3.5 lg:mr-4">
                            <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-indigo-600" />
                          </div>
                          <input
                            type="text"
                            placeholder="Enter pickup location..."
                            className="flex-1 text-sm sm:text-base md:text-lg lg:text-lg text-gray-900 placeholder-gray-500 outline-none"
                            readOnly
                          />
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                          <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-blue-600 mx-auto mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5" />
                          <div className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900">
                            Standard
                          </div>
                          <div className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-600">
                            $8-12
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                          <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-indigo-600 mx-auto mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5" />
                          <div className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold text-gray-900">
                            Premium
                          </div>
                          <div className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-600">
                            $15-20
                          </div>
                        </div>
                      </div>

                      {/* Driver Card */}
                      <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg border border-blue-100">
                        <div className="flex items-center justify-between mb-3 sm:mb-3.5 md:mb-4 lg:mb-4.5">
                          <div className="flex items-center">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center mr-2.5 sm:mr-3 md:mr-3.5 lg:mr-4">
                              <Car className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                                Mike Johnson
                              </h3>
                              <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-600">
                                Toyota Camry • 2 min away
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600">
                              $12.50
                            </div>
                            <div className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-500">
                              estimated
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-yellow-400 fill-current mr-1.5 sm:mr-2 md:mr-2.5 lg:mr-3" />
                            <span className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold">
                              4.9
                            </span>
                            <span className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-500 ml-1.5 sm:ml-2 md:ml-2.5 lg:ml-3">
                              (2.5k rides)
                            </span>
                          </div>
                          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-xl sm:rounded-2xl md:rounded-3xl text-sm sm:text-base md:text-lg lg:text-lg font-semibold">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements Around Phone */}
                <div className="absolute -top-2 -right-2 sm:-top-2.5 sm:-right-2.5 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 xl:-top-5 xl:-right-5 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-md sm:blur-lg md:blur-xl lg:blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-2.5 sm:-left-2.5 md:-bottom-3 md:-left-3 lg:-bottom-4 lg:-left-4 xl:-bottom-5 xl:-left-5 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-md sm:blur-lg md:blur-xl lg:blur-2xl animate-bounce"></div>

                {/* Decorative Taxi Elements */}
                <div className="absolute -top-3 left-3 sm:-top-3.5 sm:left-3.5 md:-top-4 md:left-4 lg:-top-5 lg:left-5 xl:-top-6 xl:left-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-blue-200 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce">
                  <Car className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 text-blue-600" />
                </div>
                <div className="absolute -bottom-3 right-3 sm:-bottom-3.5 sm:right-3.5 md:-bottom-4 md:right-4 lg:-bottom-5 lg:right-5 xl:-bottom-6 xl:right-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-indigo-200 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border-2 border-blue-200 rounded-full animate-spin opacity-30"></div>
        <div
          className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-indigo-200 rounded-full animate-spin opacity-25"
          style={{ animationDirection: "reverse" }}
        ></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Modern Transportation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our taxi booking platform comes packed with features designed to enhance the
              transportation experience for both passengers and drivers.
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

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg mb-6">
              <span className="text-white font-semibold text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Smart Choice for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                {" "}
                Modern Transportation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of technology, safety, and convenience with our
              comprehensive taxi booking platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Instant Booking */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
              <div className="mt-6 lg:mt-8 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Instant Booking
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  Book your ride in under 30 seconds with our streamlined booking process. No
                  waiting, no complications - just instant confirmation.
                </p>
                <div className="mt-4 lg:mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-blue-600 font-semibold">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>30s Booking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 24/7 Availability */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
              <div className="mt-6 lg:mt-8 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  24/7 Availability
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  Round-the-clock service available whenever you need it. Early morning flights,
                  late night events, or emergency rides - we&apos;re always here.
                </p>
                <div className="mt-4 lg:mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-indigo-600 font-semibold">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>Always Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Drivers */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
              <div className="mt-6 lg:mt-8 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Verified Drivers
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  All drivers undergo rigorous background checks and vehicle inspections. Your
                  safety is our top priority with every ride.
                </p>
                <div className="mt-4 lg:mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-purple-600 font-semibold">
                    <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>100% Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Pricing */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
              <div className="mt-6 lg:mt-8 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Competitive Pricing
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  Transparent pricing with no hidden fees. Compare rates instantly and choose the
                  best option for your budget and needs.
                </p>
                <div className="mt-4 lg:mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-blue-600 font-semibold">
                    <TrendingDown className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>Best Rates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Technology */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
              <div className="mt-6 lg:mt-8 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Advanced Technology
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  AI-powered matching, real-time tracking, and smart notifications. Experience the
                  future of transportation technology.
                </p>
                <div className="mt-4 lg:mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-indigo-600 font-semibold">
                    <Zap className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>AI-Powered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Support */}
            <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                  <Headphones className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
              </div>
              <div className="mt-6 lg:mt-8 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  24/7 Support
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  Dedicated customer support team available round the clock. Get help anytime with
                  live chat, phone, or email support.
                </p>
                <div className="mt-4 lg:mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-purple-600 font-semibold">
                    <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span>Live Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Platform Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg mb-6">
              <span className="text-white font-semibold text-sm">Multi-Platform</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Smartphone className="inline-block w-8 h-8 mr-3 text-blue-500" />
              Multi-Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our taxi booking service seamlessly across all your devices with native apps
              and responsive web platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* iOS App */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Native iOS app with Apple Pay integration, Siri shortcuts, and iCloud sync for
                  seamless experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-indigo-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Apple Pay</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-indigo-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Siri Integration</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-indigo-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>iCloud Sync</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-2xl font-bold">
                  <Apple className="w-5 h-5 mr-2" />
                  Download on App Store
                </Button>
              </div>
            </div>

            {/* Android App */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Native Android app with Google Pay, Material Design 3, and seamless Google Maps
                  integration.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-purple-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Google Pay</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-purple-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Material Design</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-purple-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Google Maps</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl font-bold">
                  <Play className="w-5 h-5 mr-2" />
                  Get on Google Play
                </Button>
              </div>
            </div>

            {/* Web Platform */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Platform</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Responsive web platform with PWA features, offline support, and cross-browser
                  compatibility.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>PWA Support</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Offline Mode</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Cross-Browser</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-2xl font-bold">
                  <Globe className="w-5 h-5 mr-2" />
                  Access Web App
                </Button>
              </div>
            </div>

            {/* Tablet App */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Tablet className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tablet App</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Optimized tablet experience with split-screen support, enhanced UI, and touch
                  gestures.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-indigo-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Split Screen</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-indigo-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Enhanced UI</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-indigo-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Touch Gestures</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-2xl font-bold">
                  <Tablet className="w-5 h-5 mr-2" />
                  Download Tablet App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          {/* Key Features Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Essential Features for Modern Taxi Apps
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Based on industry best practices and user expectations, our taxi booking apps
                include these essential features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ride Booking & Management</h4>
                <p className="text-gray-600">
                  Quick and easy ride booking with real-time availability and instant booking
                  confirmations or ride scheduling.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">GPS & Real-Time Tracking</h4>
                <p className="text-gray-600">
                  Real-time location tracking for both passengers and drivers with accurate routes
                  and ETA updates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">In-App Payment Options</h4>
                <p className="text-gray-600">
                  Secure multiple payment options including credit cards, debit cards, and digital
                  wallets for convenience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Rating System</h4>
                <p className="text-gray-600">
                  Driver and passenger rating system to promote accountability and improve service
                  quality.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Safety Features</h4>
                <p className="text-gray-600">
                  Emergency SOS button, driver verification, and 24/7 support for complete peace of
                  mind.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Smart Notifications</h4>
                <p className="text-gray-600">
                  Intelligent push notifications for ride updates, driver arrival, and payment
                  confirmations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built with Modern
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our taxi booking platform is built using cutting-edge technologies to ensure
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Transportation Business?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of taxi companies who have already revolutionized their booking process
            with our comprehensive taxi booking platform.
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
