"use client";
import React, { useMemo } from "react";
import Navigation from "@/components/Navigation";
import {
  BarChart,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  HardDrive,
  Layers,
  Lock,
  MessageSquare,
  Monitor,
  Network,
  Server,
  BarChart3,
  Smartphone,
  Rocket,
  Trophy,
  ShieldCheck,
  Gamepad,
} from "lucide-react";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function EducationLMSPage() {
  const enterpriseTechnologies = useMemo(
    () => [
      // Frontend
      { name: "React", icon: Monitor, category: "Frontend" },
      { name: "Next.js", icon: Monitor, category: "Frontend" },
      { name: "Angular", icon: Monitor, category: "Frontend" },
      { name: "Tailwind CSS", icon: Layers, category: "Frontend" },
      { name: "TypeScript", icon: Code, category: "Frontend" },

      // Backend / Runtime
      { name: "Node.js", icon: Cpu, category: "Backend" },
      { name: "Express.js", icon: Server, category: "Backend" },
      { name: "NestJS", icon: Server, category: "Backend" },
      { name: "Python", icon: Code, category: "Backend" },
      { name: "Django", icon: Server, category: "Backend" },
      { name: "FastAPI", icon: Server, category: "Backend" },
      { name: "Java", icon: Code, category: "Backend" },
      { name: "Spring Boot", icon: Server, category: "Framework" },
      { name: "PHP / Laravel", icon: Server, category: "Backend" },

      // Databases
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "MySQL", icon: Database, category: "Database" },
      { name: "MongoDB", icon: Database, category: "Database" },
      { name: "Oracle", icon: Database, category: "Database" },

      // Cloud & Infra
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Azure", icon: Cloud, category: "Cloud" },
      { name: "Google Cloud", icon: Cloud, category: "Cloud" },
      { name: "Vercel", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: HardDrive, category: "Containerization" },
      { name: "Kubernetes", icon: Network, category: "Orchestration" },

      // Real-time & Video
      { name: "WebRTC", icon: MessageSquare, category: "Real-Time" },
      { name: "Socket.io", icon: MessageSquare, category: "Real-Time" },
      { name: "Zoom API", icon: MessageSquare, category: "Integration" },
      { name: "MS Teams API", icon: MessageSquare, category: "Integration" },

      // Security
      { name: "OAuth 2.0", icon: Lock, category: "Security" },
      { name: "JWT", icon: Lock, category: "Security" },
      { name: "SSO", icon: Lock, category: "Security" },

      // AI & Analytics
      { name: "TensorFlow", icon: Brain, category: "AI/ML" },
      { name: "PyTorch", icon: Brain, category: "AI/ML" },
      { name: "Dialogflow", icon: Brain, category: "AI/ML" },
      { name: "Power BI", icon: BarChart, category: "Analytics" },
      { name: "Tableau", icon: BarChart, category: "Analytics" },
    ],
    []
  );
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full translate-y-32 -translate-x-32"></div>

          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Leading LMS Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                Transform Education with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Smart LMS
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Empower educators and learners with our comprehensive Learning Management System.
                From K-12 to corporate training, deliver engaging, scalable, and secure learning
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/portfolios"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Portfolio
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-600 text-sm font-medium">LMS Dashboard</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-green-200 to-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything You Need for Modern Learning
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive LMS platform combines cutting-edge technology with intuitive
                design to create the ultimate learning experience for educators and students alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📚",
                  title: "Course Management",
                  description:
                    "Create, organize, and deliver courses with our intuitive course builder. Support multiple content types and learning paths.",
                  features: ["Drag & Drop Builder", "Content Templates", "Learning Paths"],
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: BarChart3,
                  title: "Advanced Analytics",
                  description:
                    "Track learner progress, engagement, and performance with detailed analytics and customizable reports.",
                  features: ["Real-time Dashboards", "Custom Reports", "Progress Tracking"],
                  gradient: "from-green-500 to-emerald-600",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Learning",
                  description:
                    "Seamless learning experience across all devices with our responsive mobile app and web platform.",
                  features: ["Native Mobile Apps", "Offline Access", "Push Notifications"],
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  icon: Lock,
                  title: "Enterprise Security",
                  description:
                    "Bank-level security with SSO, role-based access control, and compliance with educational standards.",
                  features: ["SSO Integration", "Role Management", "Data Encryption"],
                  gradient: "from-red-500 to-orange-600",
                },
                {
                  icon: Link,
                  title: "Third-party Integrations",
                  description:
                    "Connect with your existing tools and systems for a seamless workflow integration.",
                  features: ["Payment Gateways", "CRM Systems", "Video Conferencing"],
                  gradient: "from-yellow-500 to-orange-600",
                },
                {
                  icon: Gamepad,
                  title: "Gamification",
                  description:
                    "Boost engagement with badges, points, leaderboards, and interactive learning elements.",
                  features: ["Achievement System", "Leaderboards", "Interactive Quizzes"],
                  gradient: "from-indigo-500 to-purple-600",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Features list with improved styling */}
                  <ul className="space-y-3">
                    {feature.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 flex-shrink-0`}
                        ></div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect indicator */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 shadow-lg">
                Key Features
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our LMS Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the core capabilities that make our Learning Management System the
                preferred choice for educational institutions worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Main Features */}
              <div className="space-y-8">
                {[
                  {
                    icon: <Rocket className="w-8 h-8 text-white" />,
                    title: "Training portal , Group training",
                    description:
                      "Built with modern architecture ensuring sub-second load times and seamless user experience across all devices.",
                    highlight: "99.9% Uptime Guarantee",
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8 text-white" />,
                    title: "Live Streaming",
                    description:
                      "Bank-level encryption, SSO integration, and compliance with international educational standards and regulations.",
                    highlight: "SOC 2 Type II Certified",
                  },
                  {
                    icon: <Smartphone className="w-8 h-8 text-white" />,
                    title: "Online assessments",
                    description:
                      "Native mobile apps for iOS and Android, plus responsive web design that works perfectly on any device.",
                    highlight: "Mobile-First Design",
                  },
                  {
                    icon: <Brain className="w-8 h-8 text-white" />,
                    title: "AI-Powered Learning",
                    description:
                      "Intelligent content recommendations, automated grading, and personalized learning paths for each student.",
                    highlight: "Machine Learning Engine",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                        {feature.highlight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Feature Stats & Benefits */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Platform Statistics
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        label: "Average Load Time",
                        value: "< 1 second",
                        color: "text-green-600",
                      },
                      {
                        label: "Concurrent Users",
                        value: "100,000+",
                        color: "text-blue-600",
                      },
                      {
                        label: "Data Centers",
                        value: "12 Global",
                        color: "text-purple-600",
                      },
                      {
                        label: "Security Score",
                        value: "A+ Rating",
                        color: "text-orange-600",
                      },
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">{stat.label}</span>
                        <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">Key Benefits</h3>
                  <ul className="space-y-4">
                    {[
                      "Reduce training costs by up to 60%",
                      "Increase learner engagement by 40%",
                      "Improve completion rates by 35%",
                      "Cut administrative time by 50%",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-blue-50">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Enterprise Technology
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks that power modern enterprise solutions.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {enterpriseTechnologies.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <div className="text-center">
                      <tech.icon className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <Trophy className="inline-block w-8 h-8 mr-3 text-yellow-500" />
                Success Stories
              </h2>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Education Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real-world implementations that have transformed educational institutions and
                learning experiences with measurable results.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "University LMS Implementation",
                  company: "State University",
                  industry: "Higher Education",
                  description:
                    "Complete digital transformation of traditional learning methods with modern LMS platform for 25,000+ students.",
                  results: {
                    studentEngagement: "85%",
                    costReduction: "40%",
                    learningOutcomes: "92%",
                    timeToDeploy: "60%",
                  },
                  technologies: ["React", "Node.js", "MongoDB", "AWS"],
                },
                {
                  title: "K-12 Digital Learning Platform",
                  company: "School District",
                  industry: "K-12 Education",
                  description:
                    "Comprehensive digital learning solution for elementary and high school students with parent portal access.",
                  results: {
                    studentEngagement: "90%",
                    costReduction: "35%",
                    parentSatisfaction: "95%",
                    timeToDeploy: "70%",
                  },
                  technologies: ["Angular", "Python", "PostgreSQL", "Azure"],
                },
                {
                  title: "Corporate Training Platform",
                  company: "Fortune 500 Company",
                  industry: "Corporate Training",
                  description:
                    "Enterprise learning management system for employee training and professional development programs.",
                  results: {
                    employeeEngagement: "88%",
                    costReduction: "45%",
                    skillImprovement: "94%",
                    timeToDeploy: "50%",
                  },
                  technologies: ["React", "Java", "Oracle", "GCP"],
                },
              ].map((study, index) => (
                <div key={index} className="relative">
                  <div className="p-6 lg:p-8 bg-white rounded-2xl shadow-lg">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                      {/* Left Content */}
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span
                              className={`px-4 py-2 rounded-full text-sm font-bold ${index % 2 === 0
                                ? "bg-indigo-100 text-indigo-700"
                                : "bg-purple-100 text-purple-700"
                                }`}
                            >
                              {study.industry}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-lg text-indigo-600 font-semibold">{study.company}</p>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">{study.description}</p>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium border ${index % 2 === 0
                                  ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                  : "bg-purple-50 text-purple-700 border-purple-200"
                                  }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Results */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-gray-900 text-center lg:text-left">
                          Key Results
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div
                              key={key}
                              className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${index % 2 === 0
                                ? "bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200"
                                : "bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
                                }`}
                            >
                              <div
                                className={`text-2xl lg:text-3xl font-black mb-2 ${index % 2 === 0 ? "text-indigo-600" : "text-purple-600"
                                  }`}
                              >
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 font-medium capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center lg:text-left">
                          <Link href="/case-studies">
                            <button
                              className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${index % 2 === 0
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                                : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                                }`}
                            >
                              View Full Case Study
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-20 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Revolutionize Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of institutions already transforming education with our LMS platform.
              Start your journey today with a free consultation and demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/portfolios"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
