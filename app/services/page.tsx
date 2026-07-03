import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Code,
  Cloud,
  Shield,
  Target,
  Award,
  CheckCircle,
  Clock,
  DollarSign,
  Rocket,
  Palette,
  Settings,
  Search,
  ShoppingCart,
  Phone,
  Users,
  ArrowUpRight,
  FileText,
  TrendingUp,
  Heart,
  Gamepad2,
  Home,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Star,
  Mail,
} from "lucide-react";
import Link from "next/link";

;

const Services = () => {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified professionals with 5+ years of experience",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Affordable rates with transparent pricing structure",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
      color: "from-orange-500 to-red-500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a detailed project plan",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with modern technologies and best practices",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across all devices and browsers",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deployment, monitoring, and ongoing maintenance support",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">Our Services</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Comprehensive{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  E-commerce & IT Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                From web development to mobile apps, custom software to e-commerce solutions - we
                deliver cutting-edge digital solutions that drive business growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolios">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    <Rocket className="w-5 h-5 mr-2" />
                    view work
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 lg:p-6">
                  <Target className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-xl lg:text-2xl font-bold mb-1">100+</div>
                  <div className="text-sm lg:text-base text-white/90 mb-1">Projects Delivered</div>
                  <div className="text-xs text-white/70">Successfully Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 lg:p-6">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-xl lg:text-2xl font-bold mb-1">20+</div>
                  <div className="text-sm lg:text-base text-white/90 mb-1">Team Members</div>
                  <div className="text-xs text-white/70">Expert Professionals</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 lg:p-6">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-xl lg:text-2xl font-bold mb-1">7+</div>
                  <div className="text-sm lg:text-base text-white/90 mb-1">Years Experience</div>
                  <div className="text-xs text-white/70">Industry Expertise</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 lg:p-6">
                  <Code className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-xl lg:text-2xl font-bold mb-1">15+</div>
                  <div className="text-sm lg:text-base text-white/90 mb-1">Technologies</div>
                  <div className="text-xs text-white/70">Modern Stack</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-10">Featured Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Web Design */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg bg-gradient-to-br from-blue-900 to-cyan-900">
                <div className="relative h-80 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10"></div>

                  {/* Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-8 right-8 w-12 h-12 bg-cyan-400/20 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-300/10 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Top-Left Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center relative">
                      <Palette className="w-5 h-5 text-white" />
                      {/* Sparkles */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
                      <div
                        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full flex items-center justify-center border border-white/30">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400/60 to-cyan-400/60 rounded-full flex items-center justify-center">
                          <Palette className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-white/30 rounded-full animate-bounce"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Overlays */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-3 text-center">Web Design</h3>
                  <Link href="/services/web-design">
                    <div className="flex items-center justify-center text-sm font-medium hover:underline cursor-pointer group-hover:text-blue-200 transition-colors">
                      Learn How We Did It{" "}
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* CMS Ecommerce Development */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg bg-gradient-to-br from-green-900 to-emerald-900">
                <div className="relative h-80 bg-gradient-to-br from-green-600/30 to-emerald-600/30 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10"></div>

                  {/* Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-green-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-8 right-8 w-12 h-12 bg-emerald-400/20 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-300/10 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Top-Left Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center relative">
                      <ShoppingCart className="w-5 h-5 text-white" />
                      {/* Sparkles */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full animate-ping"></div>
                      <div
                        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-400/40 to-emerald-400/40 rounded-full flex items-center justify-center border border-white/30">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400/60 to-emerald-400/60 rounded-full flex items-center justify-center">
                          <ShoppingCart className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-white/30 rounded-full animate-bounce"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Overlays */}
                <div className="absolute bottom-3 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-3 text-center">CMS E-commerce Development</h3>
                  <Link href="/services/e-commerce-solutions">
                    <div className="flex items-center justify-center text-sm font-medium hover:underline cursor-pointer group-hover:text-green-200 transition-colors">
                      Learn How We Did It{" "}
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Web Development */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg bg-gradient-to-br from-purple-900 to-pink-900">
                <div className="relative h-80 bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10"></div>

                  {/* Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-8 right-8 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-300/10 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Top-Left Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center relative">
                      <Code className="w-5 h-5 text-white" />
                      {/* Sparkles */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-300 rounded-full animate-ping"></div>
                      <div
                        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full flex items-center justify-center border border-white/30">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400/60 to-pink-400/60 rounded-full flex items-center justify-center">
                          <Globe className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-white/30 rounded-full animate-bounce"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Overlays */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-3 text-center">Web Development</h3>
                  <Link href="/services/web-development">
                    <div className="flex items-center justify-center text-sm font-medium hover:underline cursor-pointer group-hover:text-purple-200 transition-colors">
                      Learn How We Did It{" "}
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Amazon Seller Services - HIGHLIGHTED */}
              <div className="relative rounded-2xl overflow-hidden group shadow-2xl bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 transform hover:scale-105 transition-all duration-500 border-2 border-orange-400/30">
                {/* Special Highlight Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    HOT SERVICE
                  </div>
                </div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-pink-400/20 rounded-2xl animate-pulse"></div>

                <div className="relative h-80 bg-gradient-to-br from-orange-600/40 via-red-600/40 to-pink-600/40 flex items-center justify-center overflow-hidden">
                  {/* Enhanced Background Pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 via-red-400/15 to-pink-400/15"></div>
                    {/* Amazon Logo Pattern */}
                    <div className="absolute top-4 left-4 w-8 h-8 text-orange-300/30 text-2xl">
                      📦
                    </div>
                    <div className="absolute top-4 right-12 w-8 h-8 text-red-300/30 text-2xl">
                      🚀
                    </div>
                    <div className="absolute bottom-4 left-12 w-8 h-8 text-pink-300/30 text-2xl">
                      💰
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 text-orange-300/30 text-2xl">
                      📈
                    </div>
                  </div>

                  {/* Enhanced Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-20 h-20 bg-orange-400/25 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-8 right-8 w-16 h-16 bg-red-400/25 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-pink-300/20 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                    {/* Additional floating elements */}
                    <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-orange-300/20 rounded-full animate-bounce"></div>
                    <div
                      className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-red-300/20 rounded-full animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>

                  {/* Enhanced Top-Left Icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl border border-orange-200/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-lg flex items-center justify-center relative">
                      <ShoppingCart className="w-6 h-6 text-white" />
                      {/* Enhanced Sparkles */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                      <div
                        className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Enhanced Central Icon */}
                  <div className="relative z-10">
                    <div className="w-36 h-36 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl">
                      <div className="w-28 h-28 bg-gradient-to-br from-orange-400/50 via-red-400/50 to-pink-400/50 rounded-full flex items-center justify-center border-2 border-white/40">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400/80 via-red-400/80 to-pink-400/80 rounded-full flex items-center justify-center border border-white/50">
                          <div className="text-4xl">📦</div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Floating Elements */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-4 h-4 bg-white/40 rounded-full animate-bounce"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Text Overlays */}
                <div className="absolute bottom-1 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-1 text-center text-white">
                    Amazon Seller Account Setup & Optimization
                  </h3>
                  <Link href="/services/amazon-services">
                    <div className="flex items-center justify-center text-sm font-medium hover:underline cursor-pointer group-hover:text-orange-200 transition-colors">
                      <span className="mr-2">Boost Your Sales</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-orange-400/50 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-red-400/50 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-pink-400/50 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-orange-400/50 rounded-br-2xl"></div>
              </div>

              {/* Cloud Services */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg bg-gradient-to-br from-cyan-900 to-blue-900">
                <div className="relative h-80 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10"></div>

                  {/* Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-cyan-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-8 right-8 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-300/10 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Top-Left Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center relative">
                      <Cloud className="w-5 h-5 text-white" />
                      {/* Sparkles */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                      <div
                        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-full flex items-center justify-center border border-white/30">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/60 to-blue-400/60 rounded-full flex items-center justify-center">
                          <Cloud className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-white/30 rounded-full animate-bounce"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Overlays */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-3 text-center">Cloud Services</h3>
                  <Link href="/services/cloud-solutions">
                    <div className="flex items-center justify-center text-sm font-medium hover:underline cursor-pointer group-hover:text-cyan-200 transition-colors">
                      Learn How We Did It{" "}
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="relative rounded-2xl overflow-hidden group shadow-lg bg-gradient-to-br from-indigo-900 to-purple-900">
                <div className="relative h-80 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-purple-400/10"></div>

                  {/* Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-indigo-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute bottom-8 right-8 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-300/10 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Top-Left Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center relative">
                      <Smartphone className="w-5 h-5 text-white" />
                      {/* Sparkles */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
                      <div
                        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Central Icon */}
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 rounded-full flex items-center justify-center border border-white/30">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-400/60 to-purple-400/60 rounded-full flex items-center justify-center">
                          <Smartphone className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-white/30 rounded-full animate-bounce"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Overlays */}
                <div className="absolute bottom-3 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-3 text-center">Mobile App Development</h3>
                  <Link href="/services/mobile-apps">
                    <div className="flex items-center justify-center text-sm font-medium hover:underline cursor-pointer group-hover:text-indigo-200 transition-colors">
                      Learn How We Did It{" "}
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Services
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Digital Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive digital solutions to help your business grow and succeed
                online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Multi-Marketplace Management */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Multi-Marketplace Management
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Manage stock, pricing, and orders across Amazon, Walmart, eBay, Shopify, Etsy,
                    TikTok Shop, and more from a single platform.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Unified Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Cross-Platform Sync</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Centralized Inventory</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Automated Pricing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Amazon Seller Account Setup
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Complete Amazon seller account setup and optimization for maximum sales and
                    visibility.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Account Setup</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Listing Optimization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">PPC Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Sales Analytics</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Web Design</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Creative and modern website designs that capture your brand essence and engage
                    your audience.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Responsive Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">UI/UX Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Brand Integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">SEO Optimized</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">CMS Development</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Custom content management systems that make website management easy and
                    efficient.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">WordPress Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Custom CMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Content Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Admin Panel</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Development</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Complete online store solutions with payment integration and inventory
                    management.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Online Store</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Payment Gateway</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Inventory Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Order Processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Web Development</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Custom web applications and websites built with modern technologies and best
                    practices.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Custom Websites</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Web Applications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">API Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Performance Optimization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Services</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Cloud infrastructure and services for scalable, secure, and reliable
                    applications.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">AWS Services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Azure Solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Server Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Backup & Recovery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App Development</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Native and cross-platform mobile applications for iOS and Android platforms.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">iOS Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Android Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">React Native</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Flutter Apps</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Ctas Advantage
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise, quality, and commitment to
                your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {whyChooseUs.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 text-center"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
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

        {/* Industries Slider Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Industries We Serve
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Industries We{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Empower
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We don&apos;t believe in one-size-fits-all. We specialize in crafting bespoke
                software solutions that directly address the unique complexities and opportunities
                within diverse sectors.
              </p>
            </div>

            <div className="relative">
              {/* Navigation Arrows */}

              {/* Industries Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* SME Business Solutions */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">SME Business Solutions</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Custom software solutions tailored for small and medium enterprises to
                        streamline operations and boost productivity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Finance and FinTech */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900 to-emerald-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Finance and FinTech</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Innovative financial technology solutions including payment systems, banking
                        apps, and fintech platforms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* E-commerce and Retail */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-900 to-red-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">E-commerce and Retail</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Complete e-commerce solutions including online stores, inventory management,
                        and retail automation systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Healthcare & Fitness */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 to-pink-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Healthcare & Fitness</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Healthcare management systems, telemedicine platforms, and fitness tracking
                        applications for better health outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gaming/Entertainment */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-cyan-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Gamepad2 className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Gaming/Entertainment</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Interactive gaming platforms, entertainment apps, and immersive digital
                        experiences for engaging user interactions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Travel and Hospitality */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900 to-green-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-green-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Travel and Hospitality</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Travel booking platforms, hotel management systems, and hospitality
                        solutions for seamless guest experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Real Estate */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900 to-orange-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-amber-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Real Estate</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Property management systems, real estate platforms, and digital solutions
                        for modern real estate businesses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EdTech */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-900 to-purple-900 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20"></div>
                  <div className="relative p-6 h-64 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">EdTech</h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Educational technology platforms, learning management systems, and digital
                        learning solutions for modern education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Development{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, and timely delivery.
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

        {/* Amazon Seller Services Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Amazon Services
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Amazon Seller{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                  Account Setup & Optimization
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Ctas Info Services LLP, we offer end-to-end e-commerce and IT solutions tailored
                for online businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Account Setup
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Professional seller account creation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Business verification & documentation</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Tax information setup</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Payment method configuration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Listing Optimization
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>SEO-optimized product titles</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Compelling product descriptions</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>High-quality image optimization</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Keyword research & implementation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Performance Analytics
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Sales performance tracking</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Competitor analysis</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>ROI optimization strategies</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Monthly performance reports</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Compliance & Security
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Amazon policy compliance</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Account security setup</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Fraud prevention measures</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Regular security audits</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Customer Support
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Review management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Customer inquiry handling</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Return & refund management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>24/7 support availability</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-white">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Ongoing Management
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Inventory management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Pricing strategy optimization</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Campaign management</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span>Regular account maintenance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Amazon Stats */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600">Seller Accounts</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">₹50M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">4.8★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let&apos;s discuss your requirements and create a custom solution that drives your
              business forward. Get in touch with our experts today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
                >
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

export default Services;
