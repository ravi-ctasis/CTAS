"use client";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { PageShell, PageHero, PageCTA } from "@/components/page-design";
import { Button } from "@/components/ui/button";

import {
  Code,
  Clock,
  Globe,
  Award,
  HardDrive,
  Cog,
  Cpu,
  Database,
  Monitor,
  Server,
  Network,
  Cloud,
  Building,
  BarChart3,
  Shield,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { useMemo } from "react";
import Link from "next/link";

const EnterprisePage = () => {
  // Memoize data to prevent unnecessary re-renders
  const enterpriseServices = useMemo(
    () => [
      {
        icon: Building,
        title: "Enterprise Resource Planning",
        description:
          "Comprehensive ERP solutions that streamline business operations, improve efficiency, and provide real-time insights across all departments.",
        features: ["Integrated Modules", "Real-time Analytics", "Scalable Architecture"],
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        icon: Users,
        title: "Enterprise Collaboration",
        description:
          "Advanced collaboration platforms that connect teams, departments, and stakeholders across the organization.",
        features: ["Team Management", "Document Sharing", "Communication Tools"],
        gradient: "from-green-600 to-emerald-600",
      },
      {
        icon: BarChart3,
        title: "Business Intelligence",
        description:
          "Powerful BI tools that transform data into actionable insights for strategic decision-making.",
        features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards"],
        gradient: "from-purple-600 to-pink-600",
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description:
          "Comprehensive security solutions that protect enterprise data, systems, and infrastructure.",
        features: ["Access Control", "Data Encryption", "Threat Detection"],
        gradient: "from-red-600 to-orange-600",
      },
      {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description:
          "Scalable cloud solutions that enable enterprise digital transformation and modernization.",
        features: ["Hybrid Cloud", "Auto-scaling", "Disaster Recovery"],
        gradient: "from-teal-600 to-cyan-600",
      },
      {
        icon: Cog,
        title: "Process Automation",
        description:
          "Intelligent automation solutions that optimize workflows and reduce manual tasks.",
        features: ["RPA Integration", "Workflow Management", "AI-powered Automation"],
        gradient: "from-indigo-600 to-purple-600",
      },
    ],
    []
  );

  const enterpriseTechnologies = useMemo(
    () => [
      { name: "Java", icon: Code, category: "Backend" },
      { name: "Spring Boot", icon: Server, category: "Framework" },
      { name: "Oracle", icon: Database, category: "Database" },
      { name: "React", icon: Monitor, category: "Frontend" },
      { name: "Node.js", icon: Cpu, category: "Runtime" },
      { name: "AWS", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: HardDrive, category: "Containerization" },
      { name: "Kubernetes", icon: Network, category: "Orchestration" },
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "Angular", icon: Monitor, category: "Frontend" },
      { name: "Python", icon: Code, category: "Backend" },
    ],
    []
  );

  const enterpriseStats = useMemo(
    () => [
      { label: "Enterprise Clients", value: "8+", icon: Building },
      { label: "Uptime Guarantee", value: "99.9%", icon: Clock },
      { label: "Certifications", value: "10+", icon: Award },
      { label: "Global Offices", value: "10+", icon: Globe },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise Software Development",
    description: "Enterprise digital transformation solutions including ERP, collaboration platforms, and business intelligence.",
    provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
    areaServed: "Worldwide",
    serviceType: "Enterprise Software Development",
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Enterprise Solutions"
          badge="Enterprise Solutions"
          title="Enterprise"
          highlight="Digital Transformation"
          description="Empowering enterprises with cutting-edge technology solutions, scalable architecture, and intelligent automation for the digital age."
          stats={enterpriseStats.map((s) => ({ number: s.value, label: s.label, icon: s.icon }))}
          primaryCta={{ label: "Start Free Consultation", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />
{/* Overview Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200 mb-6">
                <Star className="w-5 h-5 mr-2" />
                Enterprise Overview
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Comprehensive
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Enterprise Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end enterprise technology solutions designed to drive digital transformation,
                improve operational efficiency, and enable business growth across all industries.
              </p>
            </div>

            {/* Overview Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Overview Item 1 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                        Enterprise Architecture
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Scalable and robust enterprise architecture designed to handle complex
                        business requirements, high traffic loads, and seamless integration with
                        existing systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overview Item 2 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3">
                        User Experience
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Intuitive and user-friendly interfaces that enhance productivity, reduce
                        training time, and improve user adoption across all levels of the
                        organization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overview Item 3 */}
                <div className="group relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
                        Data Analytics
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Advanced analytics and business intelligence tools that provide real-time
                        insights, predictive modeling, and actionable data for strategic
                        decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="space-y-6">
                <div className="w-full h-auto rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Solutions</h3>
                    <p className="text-gray-600">Comprehensive business technology platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200 mb-6">
                <Star className="w-5 h-5 mr-2" />
                Enterprise Technology Solutions
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Comprehensive
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Enterprise Services
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                End-to-end enterprise solutions designed to drive digital transformation, improve
                operational efficiency, and enable business growth.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {enterpriseServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white rounded-3xl border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-blue-100/50"
                  >
                    <div className="p-8">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                        {service.description}
                      </p>

                      {/* Feature Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8">
                {/* Header */}
                <div className="space-y-3 lg:space-y-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                    Enterprise Features
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight">
                    Advanced Capabilities for
                    <span className="block text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                      Enterprise Platforms
                    </span>
                  </h2>
                </div>

                {/* Features List */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Feature 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                        Enterprise Security
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Comprehensive security framework with advanced threat detection, data
                        encryption, and compliance management for enterprise environments.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors">
                        Business Intelligence
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Advanced analytics and reporting tools providing real-time insights and
                        predictive modeling for strategic decision-making.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">
                        Cloud Infrastructure
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Scalable cloud solutions with hybrid architecture, auto-scaling, and
                        disaster recovery for enterprise applications.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto sm:mx-0">
                      <Cog className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                        Process Automation
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Intelligent automation solutions that optimize workflows, reduce manual
                        tasks, and improve operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Enterprise Dashboard Mockup */}
              <div className="relative mt-8 lg:mt-0">
                {/* Desktop Dashboard Frame */}
                <div className="relative mx-auto w-full max-w-md lg:max-w-lg bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-white text-sm font-medium">Enterprise Dashboard</div>
                    <div className="w-8"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-600 rounded-lg p-4 text-white">
                        <div className="text-2xl font-bold">$2.4M</div>
                        <div className="text-sm opacity-80">Revenue</div>
                      </div>
                      <div className="bg-green-600 rounded-lg p-4 text-white">
                        <div className="text-2xl font-bold">85%</div>
                        <div className="text-sm opacity-80">Efficiency</div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white text-sm font-medium">Performance</span>
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-blue-600 rounded"></div>
                          <span className="text-white text-xs">Q1</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-blue-600 rounded"></div>
                          <span className="text-white text-xs">Q2</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-blue-600 rounded"></div>
                          <span className="text-white text-xs">Q3</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-28 h-2 bg-blue-600 rounded"></div>
                          <span className="text-white text-xs">Q4</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-sm">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-white text-xs">System Update Completed</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-white text-xs">New User Registration</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-white text-xs">Backup Process Started</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
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
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <div className="text-center">
                      <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Key Features
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6">
                Enterprise Platform
                <span className="block text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
                  Key Features
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the powerful features that make our enterprise solutions the preferred
                choice for leading organizations worldwide.
              </p>
            </div>

            {/* Key Features List Style */}
            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Shield className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                        Enterprise Security
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Military-grade security with advanced encryption and multi-factor
                        authentication.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 lg:p-8 border border-indigo-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">256-bit Encryption</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Multi-Factor Auth</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Audit Logging</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Compliance Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <BarChart3 className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                        Real-Time Analytics
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Advanced analytics dashboard with real-time insights and predictive
                        modeling.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8 border border-purple-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Live Dashboards</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Predictive AI</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Custom Reports</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Data Visualization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Cloud className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                        Cloud Infrastructure
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Scalable cloud architecture with auto-scaling and disaster recovery.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 lg:p-8 border border-green-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Auto Scaling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Load Balancing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Disaster Recovery</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">High Availability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Cog className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                        Process Automation
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Intelligent automation workflows that streamline operations.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 lg:p-8 border border-orange-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">RPA Integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Workflow Engine</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">AI Automation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Smart Triggers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Users className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                        User Management
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Comprehensive user management with role-based access control.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 lg:p-8 border border-teal-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Role-Based Access</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Team Collaboration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Permission Control</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Single Sign-On</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                  {/* Left - Icon and Title */}
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Globe className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                        Global Deployment
                      </h3>
                      <p className="text-lg text-gray-600 max-w-md">
                        Worldwide deployment capabilities with multi-region support.
                      </p>
                    </div>
                  </div>

                  {/* Right - Features List */}
                  <div className="flex-1 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 lg:p-8 border border-pink-100">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Multi-Region</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Localization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">CDN Support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800">Edge Computing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <PageCTA
          title="Ready to Transform Your Enterprise Operations?"
          description="Partner with us to build scalable, secure enterprise solutions that drive digital transformation."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default EnterprisePage;
