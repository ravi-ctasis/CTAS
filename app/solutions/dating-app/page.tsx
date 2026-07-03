"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
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
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Server,
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
          {icon ? (
            <div className="text-white">{icon}</div>
          ) : (
            <Heart className="w-8 h-8 text-white" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>
      </div>

      {/* Corner Decoration */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-60"></div>
    </div>
  );
};

const TechStack: React.FC<TechStackProps> = ({ icon, name, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl"></div>
      </div>

      {/* Icon Container */}
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20">
          <div className="text-white text-2xl">
            {icon || <Code className="w-8 h-8 text-white" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-purple-600 transition-colors duration-300">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full"></div>

      {/* Corner Decoration */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-60"></div>
    </div>
  );
};

const DatingAppPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Smart Matching Algorithm",
      description:
        "AI-powered compatibility matching using advanced algorithms and user behavior analysis.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "Real-time Chat & Video",
      description: "Seamless messaging, voice calls, and video chat with end-to-end encryption.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Privacy & Security",
      description: "Advanced privacy controls, location masking, and verified user profiles.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Community Features",
      description: "Group events, shared interests, and community building tools.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Instant Notifications",
      description: "Push notifications for matches, messages, and important updates.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Star className="w-8 h-8 text-pink-500" />,
      title: "Premium Features",
      description: "Advanced filters, unlimited likes, and premium matching options.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const techStack = [
    // Frontend Technologies
    {
      icon: <MobileIcon className="w-6 h-6" />,
      name: "React Native",
      description: "Cross-platform mobile development",
      category: "Frontend",
    },
    {
      icon: <WebIcon className="w-6 h-6" />,
      name: "Next.js",
      description: "Modern web framework",
      category: "Frontend",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "TypeScript",
      description: "Type-safe development",
      category: "Frontend",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "React.js",
      description: "Modern UI library",
      category: "Frontend",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Vue.js",
      description: "Progressive framework",
      category: "Frontend",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Angular",
      description: "Enterprise framework",
      category: "Frontend",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Flutter",
      description: "Google's UI toolkit",
      category: "Frontend",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Swift",
      description: "iOS development",
      category: "Frontend",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Kotlin",
      description: "Android development",
      category: "Frontend",
    },

    // Backend Technologies
    {
      icon: <Server className="w-6 h-6" />,
      name: "Node.js",
      description: "Scalable backend services",
      category: "Backend",
    },
    {
      icon: <Server className="w-6 h-6" />,
      name: "Python",
      description: "FastAPI & Django",
      category: "Backend",
    },
    {
      icon: <Server className="w-6 h-6" />,
      name: "Java",
      description: "Spring Boot framework",
      category: "Backend",
    },
    {
      icon: <Server className="w-6 h-6" />,
      name: "Go",
      description: "High-performance backend",
      category: "Backend",
    },
    {
      icon: <Server className="w-6 h-6" />,
      name: "PHP",
      description: "Laravel framework",
      category: "Backend",
    },
    {
      icon: <Server className="w-6 h-6" />,
      name: "Ruby",
      description: "Ruby on Rails",
      category: "Backend",
    },
    {
      icon: <Server className="w-6 h-6" />,
      name: "C#",
      description: ".NET Core framework",
      category: "Backend",
    },

    // Database Technologies
    {
      icon: <Database className="w-6 h-6" />,
      name: "MongoDB",
      description: "NoSQL database",
      category: "Database",
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "PostgreSQL",
      description: "Advanced SQL database",
      category: "Database",
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "MySQL",
      description: "Reliable SQL database",
      category: "Database",
    },

    {
      icon: <Database className="w-6 h-6" />,
      name: "Elasticsearch",
      description: "Search & analytics",
      category: "Database",
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Firebase",
      description: "Google's backend service",
      category: "Database",
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Supabase",
      description: "Open source Firebase",
      category: "Database",
    },

    // Cloud & DevOps Technologies
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "AWS",
      description: "Cloud infrastructure",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Google Cloud",
      description: "Google's cloud platform",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Azure",
      description: "Microsoft's cloud",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Docker",
      description: "Containerization",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Kubernetes",
      description: "Container orchestration",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Terraform",
      description: "Infrastructure as code",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Jenkins",
      description: "CI/CD automation",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "GitHub Actions",
      description: "GitHub CI/CD",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Vercel",
      description: "Deployment platform",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Netlify",
      description: "Web deployment",
      category: "Cloud & DevOps",
    },
  ];

  // Filter tech stack based on selected category
  const filteredTechStack =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white py-24 px-4 sm:px-6 lg:px-8"
      // ref={ref}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left contents">
              <div className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 mb-4 backdrop-blur-sm"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  #1 Dating App Development Company
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Build Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200">
                    Modern
                  </span>
                  <span className="block text-white">Dating App</span>
                </h1>
                <p className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
                  Create a visually stunning dating app that combines beautiful design with powerful
                  matching algorithms. AI-powered compatibility, real-time chat, and scalable
                  architecture ready for millions of users.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: <Zap className="w-5 h-5" />,
                      text: "Launch in 8-12 weeks",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      text: "100% Custom Design",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      text: "AI Matching Engine",
                    },
                    {
                      icon: <Globe className="w-5 h-5" />,
                      text: "Multi-Platform",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="text-pink-200">{benefit.icon}</div>
                      <span className="opacity-90">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/portfolios">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Portfolios
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Visual Content */}
              <div className="relative">
                {/* Floating App Mockup */}
                <div className="relative">
                  {/* Main Phone Mockup */}
                  <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform rotate-3 flex items-center justify-center gap-2">
                    <div className="w-64 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-4 overflow-hidden">
                      {/* App Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
                        <div className="text-xs text-gray-600 font-medium">Dating App</div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      </div>

                      {/* Main Profile Card */}
                      <div className="bg-white rounded-xl p-4 shadow-lg mb-4 relative overflow-hidden">
                        {/* Profile Image */}
                        <div className="w-full h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg mb-3 relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                            <Image
                              src="/dating-app-scroll.webp"
                              alt="Profile mockup"
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
                            <Heart className="w-4 h-4 text-pink-500" />
                          </div>
                        </div>

                        {/* Profile Info */}
                        <div className="space-y-2 mb-3">
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>

                        {/* Interest Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
                          <div className="w-16 h-2 bg-purple-200 rounded-full"></div>
                          <div className="w-14 h-2 bg-blue-200 rounded-full"></div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          <div className="flex-1 h-8 bg-red-400 rounded-lg"></div>
                          <div className="flex-1 h-8 bg-green-400 rounded-lg"></div>
                        </div>
                      </div>

                      {/* Second Profile Card */}
                      <div className="bg-white rounded-xl p-3 shadow-sm relative overflow-hidden">
                        <div className="w-full h-20 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg mb-2 relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          <div className="absolute top-1 right-1 bg-white/90 rounded-full p-1">
                            <MessageCircle className="w-3 h-3 text-blue-500" />
                          </div>
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-2/3 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                      </div>

                      {/* Floating Elements Inside App */}
                      <div className="absolute top-16 right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>

                      <div className="absolute bottom-20 left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div className="w-64 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-4 overflow-hidden">
                      <section className="max-w-7xl mx-auto ">
                        <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-pink-50 to-purple-50">
                          <div className="absolute w-full animate-scroll-vertical space-y-6">
                            {[
                              "/dating-app-scroll.webp", // demo 1
                              "/dating-app-scroll-img.webp", // demo 2
                              "/dating-app-scroll-demo.webp", // demo 3
                              "/dating-app-scroll.webp", // demo 4 (reuse for variety)
                              "/dating-app-scroll-img.webp", // demo 5 (reuse for variety)
                              "/dating-app-scroll-demo.webp", // demo 6 (reuse for variety)
                            ].map((img, i) => (
                              <div
                                key={i}
                                className="w-full h-[350px] flex items-center justify-center"
                              >
                                <Image
                                  src={img}
                                  alt={`Dating App Mockup ${i + 1}`}
                                  width={400}
                                  height={700}
                                  className="rounded-2xl shadow-lg object-cover h-full"
                                  unoptimized
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <style jsx>{`
                          @keyframes scroll-vertical {
                            0% {
                              transform: translateY(0);
                            }
                            100% {
                              transform: translateY(-100%);
                            }
                          }
                          .animate-scroll-vertical {
                            animation: scroll-vertical 25s linear infinite;
                          }
                        `}</style>
                      </section>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800">2.5M+</div>
                        <div className="text-xs text-gray-500">Matches Made</div>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-1 rounded-full w-4/5"></div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800">98%</div>
                        <div className="text-xs text-gray-500">Success Rate</div>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-1 rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* Additional Floating Element */}
                  <div className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-gray-800">Live Users</div>
                      <div className="text-xs text-gray-500">Online Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          // variants={containerVariants}
          // initial="hidden"
          // animate={controls}
          >
            {[
              { number: "50+", label: "Dating Apps Built" },
              { number: "2M+", label: "Users Connected" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                // variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      // ref={ref}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 border-purple-200 mb-4"
            >
              <Zap className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dating App Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dating apps need more than just swipes. Our innovative design creates engaging, visual
              experiences that keep users coming back.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          // variants={containerVariants}
          // initial="hidden"
          // animate={controls}
          >
            {features && features.length > 0 ? (
              features.map((feature, index) => (
                <div key={index}>
                  <FeatureCard {...feature} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">No features available</div>
            )}
          </div>

          {/* Feature Highlights */}
          <div
            className="mt-16 text-center"
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 bg-white rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">100% Customizable</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
              <div className="sm:hidden w-full h-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Scalable Architecture</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
              <div className="sm:hidden w-full h-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          >
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Key Highlights
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Dating App Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge dating apps with proven technology stacks and innovative
              features that drive user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Key Features List */}
            <div
              // initial={{ opacity: 0, x: -50 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "AI-Powered Matching",
                  description:
                    "Advanced machine learning algorithms for intelligent compatibility matching based on user preferences and behavior patterns.",
                  color: "text-pink-500",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Enterprise Security",
                  description:
                    "Bank-level security with end-to-end encryption, GDPR compliance, and advanced privacy controls for user data protection.",
                  color: "text-green-500",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Lightning Fast Performance",
                  description:
                    "Optimized for speed with real-time updates, instant messaging, and seamless user experience across all devices.",
                  color: "text-yellow-500",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Scalable Architecture",
                  description:
                    "Built to handle millions of users with cloud-native architecture, load balancing, and auto-scaling capabilities.",
                  color: "text-purple-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.6, delay: index * 0.1 }}
                  // viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Visual Element */}
            <div
              // initial={{ opacity: 0, x: 50 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Success Metrics</h3>
                    <p className="text-gray-600">Track your app&apos;s performance</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">User Engagement</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-pink-400 rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">75%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Match Success</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-14 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">87%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Retention Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div className="w-10 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-800">62%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mb-4 shadow-lg"
            >
              <Code className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powered by Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies to build fast, secure, and scalable dating
              applications that deliver exceptional user experiences.
            </p>
          </div>

          {/* Tech Categories */}
          <div className="mb-12">
            <div
              className="flex flex-wrap justify-center gap-4 mb-8"
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            // viewport={{ once: true }}
            >
              {["Frontend", "Backend", "Database", "Cloud & DevOps"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500 shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-600"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Category Count */}
            <div
              className="text-center text-gray-600 mb-8"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.3 }}
            >
              <span className="font-medium">
                {filteredTechStack.length} technology
                {filteredTechStack.length !== 1 ? "s" : ""}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </span>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          // variants={containerVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          >
            {filteredTechStack.map((tech) => (
              <div key={tech.name}>
                <TechStack {...tech} />
              </div>
            ))}
          </div>

          {/* Additional Tech Info */}
          <div
            className="mt-16 text-center"
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 font-medium">
                All technologies are production-ready and battle-tested
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Build Your Dating App?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the ranks of successful dating apps built by Ctas. Get started with a free
              consultation and project estimate.
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
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default DatingAppPage;
