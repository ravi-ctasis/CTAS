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
  MessageSquare,
  Monitor,
  Server,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
  Target,
  Rocket,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Mail,
  Building,
  Settings,
  Coffee,
  Container,
  Utensils,
  CreditCard,
  ShoppingCart,
  Package,
  Map,
  Thermometer,
  Truck,
} from "lucide-react";
import FooterSection from "@/components/FooterSection";
import { PageShell, PageHero, PageCTA } from "@/components/page-design";
import Link from "next/link";

export default function FoodBeveragePage() {
  const foodTechnologies = useMemo(
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

      // Food Industry APIs
      { name: "Google Maps API", icon: Map, category: "Maps" },
      { name: "Stripe API", icon: CreditCard, category: "Payments" },
      { name: "Twilio API", icon: MessageSquare, category: "SMS" },
      { name: "SendGrid API", icon: Mail, category: "Email" },

      // IoT & Hardware
      { name: "POS Systems", icon: Monitor, category: "Hardware" },
      { name: "Kitchen Display", icon: Smartphone, category: "Hardware" },
      { name: "Inventory Sensors", icon: Activity, category: "IoT" },
      { name: "Temperature Monitoring", icon: Thermometer, category: "IoT" },

      // Security & Privacy
      { name: "OAuth 2.0", icon: Shield, category: "Security" },
      { name: "JWT", icon: Lock, category: "Security" },
      { name: "SSL/TLS", icon: Shield, category: "Encryption" },
      { name: "PCI DSS", icon: Award, category: "Compliance" },

      // AI & Analytics
      { name: "TensorFlow", icon: Brain, category: "AI/ML" },
      { name: "Predictive Analytics", icon: TrendingUp, category: "Analytics" },
      { name: "Menu Optimization", icon: BarChart3, category: "AI/ML" },
      { name: "Customer Insights", icon: Users, category: "Analytics" },
    ],
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Food & Beverage Software Development",
    description: "Restaurant management, food delivery platforms, and culinary innovation technology solutions.",
    provider: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
    areaServed: "Worldwide",
    serviceType: "Food & Beverage Software Development",
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Food & Beverage Technology Solutions"
          badge="Culinary Innovation Platform"
          title="Revolutionize"
          highlight="Food & Beverage"
          description="Build innovative restaurant and delivery platforms that connect customers with amazing culinary experiences, streamline operations, and drive growth in the food industry."
          stats={[{ number: "10K+", label: "Restaurants Served", icon: Rocket }, { number: "1M+", label: "Orders Processed", icon: TrendingUp }, { number: "45%", label: "Revenue Growth", icon: Target }, { number: "4.8★", label: "Customer Rating", icon: CheckCircle }]}
          primaryCta={{ label: "Start Your Project", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />
{/* KEY FEATURES SECTION */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-red-200 to-yellow-200 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-bold mb-6 shadow-lg">
                <Rocket className="w-4 h-4 mr-2" />
                Core Capabilities
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Food Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover the essential features that make our restaurant and delivery platforms
                stand out in the competitive food industry market.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Main Features */}
              <div className="space-y-8">
                {[
                  {
                    icon: ShoppingCart,
                    title: "Order Management",
                    description:
                      "Seamless order processing, real-time tracking, and automated notifications for customers and restaurants.",
                    highlight: "Real-time Updates",
                  },
                  {
                    icon: Building,
                    title: "Restaurant Dashboard",
                    description:
                      "Comprehensive management tools for menu updates, order processing, and business analytics.",
                    highlight: "Full Control",
                  },
                  {
                    icon: BarChart3,
                    title: "Advanced Analytics",
                    description:
                      "Data-driven insights for menu optimization, customer behavior, and operational efficiency.",
                    highlight: "Smart Insights",
                  },
                  {
                    icon: Shield,
                    title: "Payment Security",
                    description:
                      "Secure payment processing with PCI DSS compliance and fraud protection systems.",
                    highlight: "100% Secure",
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-semibold rounded-full">
                          {feature.highlight}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column - Feature Stats & Benefits */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-xl border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Platform Metrics
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        label: "Order Accuracy",
                        value: "99.8%",
                        color: "text-green-600",
                      },
                      {
                        label: "Delivery Time",
                        value: "25 min",
                        color: "text-orange-600",
                      },
                      {
                        label: "Customer Satisfaction",
                        value: "4.8★",
                        color: "text-yellow-600",
                      },
                      {
                        label: "Restaurant Growth",
                        value: "35%",
                        color: "text-red-600",
                      },
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">{stat.label}</span>
                        <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <h3 className="text-2xl font-bold mb-6 text-center relative z-10">
                    Business Impact
                  </h3>
                  <ul className="space-y-4 relative z-10">
                    {[
                      "Increase order volume by 40%",
                      "Reduce operational costs by 25%",
                      "Improve customer retention by 50%",
                      "Boost restaurant revenue by 35%",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE PROVIDE SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-red-200 to-yellow-200 rounded-full blur-2xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-bold mb-6 shadow-lg">
                <Target className="w-4 h-4 mr-2" />
                Our Services
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Food Industry Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end technology solutions that cover every aspect of the food &
                beverage industry digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Monitor,
                  title: "Website Development",
                  description: "Custom restaurant websites with modern design and functionality",
                  features: [
                    "Responsive Design",
                    "Online Ordering",
                    "Menu Management",
                    "Customer Reviews",
                    "SEO Optimization",
                    "Analytics Integration",
                  ],
                  color: "from-orange-500 to-red-600",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Applications",
                  description: "Native iOS and Android apps for restaurants and delivery",
                  features: [
                    "Cross-platform Development",
                    "Push Notifications",
                    "Offline Functionality",
                    "Payment Integration",
                    "Real-time Updates",
                    "User Authentication",
                  ],
                  color: "from-red-500 to-yellow-600",
                },
                {
                  icon: Settings,
                  title: "System Integration",
                  description: "Seamless integration with existing restaurant systems",
                  features: [
                    "POS Integration",
                    "Payment Gateways",
                    "Inventory Systems",
                    "Accounting Software",
                    "CRM Integration",
                    "API Development",
                  ],
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  icon: BarChart3,
                  title: "Business Intelligence",
                  description: "Advanced analytics and reporting for business growth",
                  features: [
                    "Sales Analytics",
                    "Customer Insights",
                    "Performance Metrics",
                    "Predictive Analytics",
                    "Custom Dashboards",
                    "Data Visualization",
                  ],
                  color: "from-orange-500 to-red-600",
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security with industry standards",
                  features: [
                    "PCI DSS Compliance",
                    "Data Encryption",
                    "Fraud Protection",
                    "Secure Payments",
                    "User Privacy",
                    "Regular Audits",
                  ],
                  color: "from-red-500 to-yellow-600",
                },
                {
                  icon: Users,
                  title: "Customer Support",
                  description: "24/7 technical support and maintenance services",
                  features: [
                    "Technical Support",
                    "System Maintenance",
                    "Training Programs",
                    "Documentation",
                    "Updates & Patches",
                    "Emergency Response",
                  ],
                  color: "from-yellow-500 to-orange-600",
                },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-orange-100"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-red-200 to-yellow-200 rounded-full blur-2xl opacity-20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Food Platform Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with intuitive design to create
                powerful restaurant and delivery applications that users love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShoppingCart,
                  title: "Order Management",
                  description: "End-to-end order processing from customer to kitchen to delivery.",
                  features: [
                    "Real-time Order Tracking",
                    "Kitchen Display System",
                    "Automated Notifications",
                  ],
                  gradient: "from-orange-500 to-red-600",
                },
                {
                  icon: Building,
                  title: "Restaurant Management",
                  description:
                    "Complete restaurant operations dashboard with menu and inventory control.",
                  features: ["Menu Management", "Inventory Control", "Staff Scheduling"],
                  gradient: "from-red-500 to-yellow-600",
                },
                {
                  icon: Users,
                  title: "Customer Experience",
                  description:
                    "Personalized ordering experience with loyalty programs and recommendations.",
                  features: ["User Profiles", "Loyalty Programs", "Smart Recommendations"],
                  gradient: "from-yellow-500 to-orange-600",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Insights",
                  description:
                    "Data-driven insights for business optimization and growth strategies.",
                  features: ["Sales Analytics", "Customer Insights", "Performance Metrics"],
                  gradient: "from-orange-500 to-red-600",
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security with industry compliance standards.",
                  features: ["PCI DSS Compliance", "Data Encryption", "Fraud Protection"],
                  gradient: "from-red-500 to-yellow-600",
                },
                {
                  icon: Globe,
                  title: "Multi-platform Support",
                  description: "Seamless experience across web, mobile, and tablet devices.",
                  features: ["Web Applications", "Mobile Apps", "Tablet Interfaces"],
                  gradient: "from-yellow-500 to-orange-600",
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

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                    {/* Feature List */}
                    <ul className="space-y-2">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-red-200 to-yellow-200 rounded-full blur-2xl opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Food & Beverage Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From fine dining to fast food, our platform serves diverse food industry needs
                across multiple business models and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building,
                  title: "Fine Dining",
                  description:
                    "Elegant reservation systems, table management, and premium customer experiences.",
                  features: ["Reservation Management", "Table Service", "Wine Pairing"],
                },
                {
                  icon: Coffee,
                  title: "Cafés & Coffee Shops",
                  description: "Quick service platforms with loyalty programs and mobile ordering.",
                  features: ["Mobile Ordering", "Loyalty Programs", "Quick Service"],
                },
                {
                  icon: Truck,
                  title: "Food Delivery",
                  description: "End-to-end delivery management from order to doorstep delivery.",
                  features: ["Route Optimization", "Real-time Tracking", "Driver Management"],
                },
                {
                  icon: ShoppingCart,
                  title: "Ghost Kitchens",
                  description: "Virtual restaurant operations with delivery-only business models.",
                  features: ["Virtual Menus", "Delivery Focus", "Cost Optimization"],
                },
                {
                  icon: Users,
                  title: "Food Trucks",
                  description: "Mobile food service management with location-based marketing.",
                  features: ["Location Services", "Mobile POS", "Social Marketing"],
                },
                {
                  icon: Package,
                  title: "Meal Prep Services",
                  description: "Subscription-based meal planning and delivery services.",
                  features: ["Subscription Management", "Meal Planning", "Nutrition Tracking"],
                },
              ].map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group hover:scale-105"
                  >
                    <div className="text-4xl mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl text-white">
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
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3"></div>
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
                Food Technology
                <span className="block text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                  Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies and frameworks that power modern restaurant and delivery
                applications.
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
              {foodTechnologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <div className="text-center">
                      <Icon className="w-8 h-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
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
          title="Ready to Transform Food & Beverage?"
          description="Join the culinary revolution with our comprehensive platform. Let's create food solutions that delight customers and drive growth."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="Portfolio"
          secondaryHref="/portfolios"
        />
      </main>

      <FooterSection />

      {/* Floating Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 group"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <ArrowUp className="w-6 h-6 relative z-10" />
      </button>
    </PageShell>
  );
}
