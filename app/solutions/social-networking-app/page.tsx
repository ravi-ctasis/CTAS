"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  Users,
  MessageCircle,
  Share2,
  Globe,
  Zap,
  Shield,
  Star,
  Camera,
  Video,
  TrendingUp,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Server,
  Bell,
  Settings,
  ShoppingBag,
  CheckCircle,
  Twitter,
  Instagram,
  Ghost,
  Facebook,
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
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-60"></div>
    </div>
  );
};

const TechStack: React.FC<TechStackProps> = ({ icon, name, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/20">
          <div className="text-white text-2xl">{icon}</div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 group-hover:w-full"></div>
      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-60"></div>
    </div>
  );
};

const SocialNetworkingAppPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const feedRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const feedElement = feedRef.current;
    if (!feedElement) return;

    const scrollInterval = setInterval(() => {
      if (feedElement.scrollTop >= feedElement.scrollHeight - feedElement.clientHeight) {
        // Reset to top when reaching bottom
        feedElement.scrollTop = 0;
      } else {
        // Scroll down smoothly
        feedElement.scrollTop += 2;
      }
    }, 100); // Scroll every 100ms

    return () => clearInterval(scrollInterval);
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Community Building",
      description:
        "Create and manage communities, groups, and interest-based networks with advanced moderation tools.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "Real-time Communication",
      description:
        "Instant messaging, voice calls, video chat, and group conversations with end-to-end encryption.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Share2 className="w-8 h-8 text-purple-500" />,
      title: "Content Sharing",
      description:
        "Share photos, videos, stories, and live streams with advanced privacy controls and content moderation.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Global Connectivity",
      description:
        "Connect with users worldwide through location-based features, language support, and cultural integration.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Smart Recommendations",
      description:
        "AI-powered content discovery, friend suggestions, and personalized feed algorithms.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: "Privacy & Security",
      description:
        "Advanced privacy settings, content control, and robust security measures to protect user data.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const techStack = [
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
      icon: <Cloud className="w-6 h-6" />,
      name: "AWS",
      description: "Cloud infrastructure",
      category: "Cloud & DevOps",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      name: "Firebase",
      description: "Google&apos;s backend service",
      category: "Cloud & DevOps",
    },
  ];

  const filteredTechStack =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  const icons = [
    { component: <Twitter size={28} />, color: "bg-sky-500" },
    { component: <MessageCircle size={28} />, color: "bg-green-500" },
    { component: <Instagram size={28} />, color: "bg-pink-500" },
    { component: <Ghost size={28} />, color: "bg-yellow-500" },
  ];

  const avatars = ["/team1.webp", "/team2.webp", "/team3.webp", "/team4.webp"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 mb-4 backdrop-blur-sm"
                >
                  <Users className="w-4 h-4 mr-2" />
                  #1 Social Networking App Development
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Build Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                    Community
                  </span>
                  <span className="block text-white">Platform</span>
                </h1>
                <p className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
                  Create a powerful social networking app that connects people, builds communities,
                  and fosters meaningful relationships. AI-powered recommendations, real-time
                  communication, and scalable architecture.
                </p>

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
                      text: "AI Community Engine",
                    },
                    {
                      icon: <Globe className="w-5 h-5" />,
                      text: "Multi-Platform",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="text-blue-200">{benefit.icon}</div>
                      <span className="opacity-90">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Button>
                  </Link>
                  <Link href="/portfolios">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
                    >
                      View Portfolios
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center w-full h-[650px]">
              {/* Center Node (Facebook) */}
              <div className="w-28 h-28 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 z-20">
                <Facebook size={48} />
              </div>

              {/* Animated Dotted Circle */}
              <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-dotted border-gray-300 animate-spin-slow"></div>

              {/* Surrounding Avatars */}
              {avatars.map((src, i) => {
                const angle = (i / avatars.length) * 2 * Math.PI;
                const radius = 180;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={i}
                    className="absolute transition-transform duration-300 hover:scale-110"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <image
                      href={src}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                );
              })}

              {/* Surrounding Social Icons */}
              {icons.map((icon, i) => {
                const angle = ((i + 0.5) / icons.length) * 2 * Math.PI; // staggered with avatars
                const radius = 260;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <div
                    key={i}
                    className={`absolute ${icon.color} w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-2xl`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {icon.component}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Social Apps Built" },
              { number: "5M+", label: "Users Connected" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Social Networking Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a comprehensive social platform with all the features users expect and
              innovative tools that set you apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 border-green-200 mb-4"
            >
              <Users className="w-4 h-4 mr-2" />
              Community Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Build Thriving Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools to create, manage, and grow engaged communities around shared interests
              and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Group Management",
                  description:
                    "Create public and private groups with role-based permissions, moderation tools, and content guidelines.",
                  color: "text-blue-500",
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "Discussion Forums",
                  description:
                    "Threaded conversations, polls, and Q&A features to facilitate meaningful discussions.",
                  color: "text-green-500",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Analytics Dashboard",
                  description:
                    "Track community growth, engagement metrics, and member activity with detailed insights.",
                  color: "text-purple-500",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Moderation Tools",
                  description:
                    "AI-powered content filtering, user reporting, and automated moderation workflows.",
                  color: "text-orange-500",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
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

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Community Stats</h3>
                  <p className="text-gray-600 text-sm">Live community data</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">Active Users</div>
                      <div className="text-lg font-bold text-blue-600">15.2K</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">Groups Created</div>
                      <div className="text-lg font-bold text-green-600">847</div>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">Posts Today</div>
                      <div className="text-lg font-bold text-purple-600">2.1K</div>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Share2 className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-1">98%</div>
                      <div className="text-sm text-gray-600">User Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-700 border-purple-200 mb-4"
            >
              <Camera className="w-4 h-4 mr-2" />
              Content Creation
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Rich Content Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools for creating, editing, and sharing multimedia content that engages your
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8 text-white" />,
                title: "Photo & Video",
                description:
                  "High-quality media upload with filters, editing tools, and story features",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Video className="w-8 h-8 text-white" />,
                title: "Live Streaming",
                description:
                  "Real-time video streaming with chat, reactions, and recording capabilities",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-white" />,
                title: "Story Creation",
                description:
                  "Ephemeral content with stickers, text overlays, and interactive elements",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: <Share2 className="w-8 h-8 text-white" />,
                title: "Content Sharing",
                description: "Cross-platform sharing with privacy controls and engagement tracking",
                gradient: "from-purple-500 to-indigo-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-700 border-yellow-200 mb-4"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Monetization
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Revenue Generation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple revenue streams to monetize your social platform and ensure sustainable
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Subscriptions",
                description:
                  "Tiered membership plans with exclusive features, content, and community access",
                icon: <Star className="w-8 h-8 text-yellow-500" />,
                features: ["Ad-free experience", "Premium content", "Advanced features"],
              },
              {
                title: "Advertising Platform",
                description:
                  "Targeted advertising with analytics, sponsored content, and influencer partnerships",
                icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                features: ["Targeted ads", "Sponsored posts", "Analytics dashboard"],
              },
              {
                title: "E-commerce Integration",
                description:
                  "Direct selling capabilities with marketplace features and payment processing",
                icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
                features: ["Product listings", "Payment processing", "Order management"],
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-700 border-green-200 mb-4"
            >
              <Shield className="w-4 h-4 mr-2" />
              Security & Privacy
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your users and platform with advanced security measures and privacy controls.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "End-to-End Encryption",
                  description:
                    "All messages and data are encrypted using industry-standard protocols for maximum security.",
                  color: "text-green-500",
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Privacy Controls",
                  description:
                    "Granular privacy settings allowing users to control who sees their content and profile information.",
                  color: "text-blue-500",
                },
                {
                  icon: <Bell className="w-6 h-6" />,
                  title: "Content Moderation",
                  description:
                    "AI-powered content filtering and human moderation to maintain community standards.",
                  color: "text-purple-500",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "User Verification",
                  description:
                    "Multi-factor authentication and identity verification to prevent fake accounts.",
                  color: "text-orange-500",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
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

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Security Score</h3>
                  <p className="text-gray-600">Platform security metrics</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Data Protection</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">100%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Uptime</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-15 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">99.9%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Compliance</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">100%</span>
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
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 mb-4 shadow-lg"
            >
              <Code className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powered by Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies to build fast, secure, and scalable social
              networking applications.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Frontend", "Backend", "Database", "Cloud & DevOps"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-500 shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechStack.map((tech) => (
              <div key={tech.name}>
                <TechStack {...tech} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Your Social Network?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the ranks of successful social platforms built by Ctas. Get started with a free
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
      </section>

      <FooterSection />
    </div>
  );
};

export default SocialNetworkingAppPage;
