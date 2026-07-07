"use client";
import React, { useMemo } from "react";
import Navigation from "@/components/Navigation";
import {
  Activity,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Layers,
  Lock,
  Server,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Target,
  Rocket,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Container,
  Truck,
  Plane,
  Ship,
  Train,
  Route,
  Package,
  Warehouse,
  Fuel,
  Map,
  Satellite,
  Radio,
  Signal,
  Car,
} from "lucide-react";
import FooterSection from "@/components/FooterSection";
import { PageShell, PageHero, PageCTA } from "@/components/page-design";
import Link from "next/link";

export default function TransportationPage() {
  const transportationTechnologies = useMemo(
    () => [
      // Frontend
      { name: "React Native", icon: Zap, category: "Mobile" },
      { name: "Flutter", icon: Rocket, category: "Mobile" },
      { name: "Swift", icon: Star, category: "iOS" },
      { name: "Kotlin", icon: Target, category: "Android" },
      { name: "TypeScript", icon: Code, category: "Frontend" },

      // Backend / Runtime
      { name: "Node.js", icon: Cpu, category: "Backend" },
      { name: "Python", icon: Brain, category: "Backend" },
      { name: "Django", icon: Server, category: "Backend" },
      { name: "FastAPI", icon: Zap, category: "Backend" },
      { name: "Firebase", icon: Cloud, category: "Backend" },

      // Databases
      { name: "PostgreSQL", icon: Database, category: "Database" },
      { name: "MongoDB", icon: HardDrive, category: "Database" },
      { name: "SQLite", icon: Layers, category: "Local" },

      // Cloud & Infra
      { name: "AWS", icon: Globe, category: "Cloud" },
      { name: "Google Cloud", icon: Cloud, category: "Cloud" },
      { name: "Azure", icon: Cloud, category: "Cloud" },
      { name: "Docker", icon: Container, category: "Containerization" },

      // Transportation APIs
      { name: "Google Maps API", icon: Map, category: "Maps" },
      { name: "OpenStreetMap", icon: Globe, category: "Maps" },
      { name: "Uber API", icon: Car, category: "Ride-Sharing" },

      // IoT & Hardware
      { name: "GPS Tracking", icon: Satellite, category: "Location" },
      { name: "RFID Systems", icon: Radio, category: "Identification" },
      { name: "Sensors", icon: Activity, category: "Monitoring" },
      { name: "Telematics", icon: Signal, category: "Communication" },

      // Security & Privacy
      { name: "OAuth 2.0", icon: Shield, category: "Security" },
      { name: "JWT", icon: Lock, category: "Security" },
      { name: "SSL/TLS", icon: Shield, category: "Encryption" },
      { name: "GDPR", icon: Award, category: "Compliance" },

      // AI & Analytics
      { name: "TensorFlow", icon: Brain, category: "AI/ML" },
      { name: "Predictive Analytics", icon: TrendingUp, category: "Analytics" },
      { name: "Route Optimization", icon: Route, category: "AI/ML" },
      { name: "Traffic Analysis", icon: BarChart3, category: "Analytics" },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transportation & Logistics Software Development",
    description: "Smart mobility and logistics application development for fleet management, route optimization, and supply chain.",
    provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
    areaServed: "Worldwide",
    serviceType: "Transportation Software Development",
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Transportation & Logistics Solutions"
          badge="Smart Mobility Solutions"
          title="Revolutionize"
          highlight="Transportation"
          description="Build innovative mobility and logistics applications that optimize routes, enhance fleet management, and create seamless transportation experiences for the modern world."
          stats={[{ number: "500+", label: "Fleets Managed", icon: Rocket }, { number: "10K+", label: "Routes Optimized", icon: TrendingUp }, { number: "25%", label: "Fuel Savings", icon: Target }, { number: "99.9%", label: "Uptime", icon: CheckCircle }]}
          primaryCta={{ label: "Start Your Project", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />
{/* KEY FEATURES SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-bold mb-6 shadow-lg">
                <Rocket className="w-4 h-4 mr-2" />
                Core Capabilities
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Transportation Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the essential features that make our mobility and logistics applications
                stand out in the competitive transportation market.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Main Features */}
              <div className="space-y-8">
                {[
                  {
                    icon: Route,
                    title: "Route Optimization",
                    description:
                      "AI-powered route planning that reduces fuel costs, delivery times, and operational expenses.",
                    highlight: "25% Cost Reduction",
                  },
                  {
                    icon: Truck,
                    title: "Fleet Management",
                    description:
                      "Comprehensive fleet tracking, maintenance scheduling, and driver performance monitoring.",
                    highlight: "Real-time Tracking",
                  },
                  {
                    icon: BarChart3,
                    title: "Advanced Analytics",
                    description:
                      "Data-driven insights for fuel efficiency, driver behavior, and operational optimization.",
                    highlight: "Predictive Analytics",
                  },
                  {
                    icon: Shield,
                    title: "Safety & Compliance",
                    description:
                      "Driver safety monitoring, regulatory compliance, and incident prevention systems.",
                    highlight: "Safety First",
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-semibold rounded-full">
                          {feature.highlight}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column - Feature Stats & Benefits */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Platform Metrics
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        label: "Route Efficiency",
                        value: "35%",
                        color: "text-emerald-600",
                      },
                      {
                        label: "Fuel Savings",
                        value: "25%",
                        color: "text-blue-600",
                      },
                      {
                        label: "Delivery Time",
                        value: "40%",
                        color: "text-purple-600",
                      },
                      {
                        label: "Safety Score",
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

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <h3 className="text-2xl font-bold mb-6 text-center relative z-10">
                    Business Impact
                  </h3>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "Reduce operational costs by 30%",
                      "Improve delivery efficiency by 40%",
                      "Enhance fleet safety by 50%",
                      "Boost customer satisfaction by 35%",
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

        {/* FEATURES SECTION */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-2xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Transportation Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with intuitive design to create
                powerful mobility and logistics applications that users love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Route,
                  title: "Route Optimization",
                  description:
                    "AI-powered route planning with real-time traffic updates and dynamic rerouting capabilities.",
                  features: ["Real-time Traffic", "Dynamic Rerouting", "Multi-stop Planning"],
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Truck,
                  title: "Fleet Management",
                  description:
                    "Comprehensive fleet tracking, maintenance scheduling, and driver performance monitoring.",
                  features: ["GPS Tracking", "Maintenance Alerts", "Driver Analytics"],
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Package,
                  title: "Logistics Management",
                  description:
                    "End-to-end logistics solutions from warehouse management to last-mile delivery.",
                  features: ["Warehouse Management", "Inventory Tracking", "Last-mile Delivery"],
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  icon: Shield,
                  title: "Safety & Compliance",
                  description:
                    "Driver safety monitoring, regulatory compliance, and incident prevention systems.",
                  features: ["Driver Monitoring", "Compliance Tracking", "Safety Alerts"],
                  gradient: "from-red-500 to-orange-600",
                },
                {
                  icon: Brain,
                  title: "AI-Powered Insights",
                  description:
                    "Machine learning algorithms for predictive maintenance, fuel optimization, and performance analytics.",
                  features: [
                    "Predictive Maintenance",
                    "Fuel Optimization",
                    "Performance Analytics",
                  ],
                  gradient: "from-yellow-500 to-orange-600",
                },
                {
                  icon: Users,
                  title: "Customer Experience",
                  description:
                    "Real-time tracking, delivery notifications, and seamless customer communication.",
                  features: ["Real-time Tracking", "Delivery Notifications", "Customer Portal"],
                  gradient: "from-indigo-500 to-purple-600",
                },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden"
                  >
                    {/* Background gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon with gradient background */}
                    <div
                      className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} w-16 h-16 flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

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
                );
              })}
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-2xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Transportation Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From delivery services to fleet operators, our platform serves diverse
                transportation needs across multiple industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: "Delivery Services",
                  description:
                    "Last-mile delivery optimization, route planning, and real-time tracking for e-commerce and logistics companies.",
                  features: ["Route Optimization", "Real-time Tracking", "Customer Notifications"],
                },
                {
                  icon: Car,
                  title: "Ride-Sharing",
                  description:
                    "Driver management, passenger matching, and payment processing for modern transportation services.",
                  features: ["Driver Management", "Passenger Matching", "Payment Processing"],
                },
                {
                  icon: Plane,
                  title: "Aviation Logistics",
                  description:
                    "Cargo tracking, flight scheduling, and ground operations management for aviation companies.",
                  features: ["Cargo Tracking", "Flight Scheduling", "Ground Operations"],
                },
                {
                  icon: Ship,
                  title: "Maritime Shipping",
                  description:
                    "Container tracking, port operations, and maritime logistics management solutions.",
                  features: ["Container Tracking", "Port Operations", "Maritime Logistics"],
                },
                {
                  icon: Train,
                  title: "Rail Transportation",
                  description:
                    "Freight management, passenger services, and rail infrastructure monitoring.",
                  features: [
                    "Freight Management",
                    "Passenger Services",
                    "Infrastructure Monitoring",
                  ],
                },
                {
                  icon: Warehouse,
                  title: "Warehouse Management",
                  description:
                    "Inventory control, order fulfillment, and warehouse automation solutions.",
                  features: ["Inventory Control", "Order Fulfillment", "Warehouse Automation"],
                },
              ].map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group hover:scale-105"
                  >
                    <div className="text-4xl mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-center">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Transportation Technology
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                  Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks that power modern transportation and
                logistics applications.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {transportationTechnologies.map((tech, index) => {
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
        <PageCTA
          title="Ready to Transform Transportation?"
          description="Let's build innovative mobility solutions that optimize operations and enhance customer experiences."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
