"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Bell,
  Search,
  Clock,
  CheckCircle2,
  Award,
  TrendingUp,
  MessageCircle,
  DollarSign,
  Gift,
  Smartphone,
  Monitor,
  Tablet,
  Briefcase,
  Wifi,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageCTA,
  SectionHeader,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
  CYAN_LIGHT,
  AnimatedStat,
} from "@/components/page-design";

const SectionWrap = ({
  children,
  alt = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-white" : "bg-[#F6F8FA]"}`}>
    <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">{children}</div>
  </section>
);

const IconBox = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div
    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: `${CYAN}18` }}
  >
    <Icon className="w-5 h-5" style={{ color: NAVY }} />
  </div>
);

const heroStats = [
  { number: "500K+", label: "Active Users" },
  { number: "10K+", label: "Hotels Listed" },
  { number: "99.9%", label: "Uptime" },
];

const trustIndicators = [
  { icon: Shield, label: "SSL Secured" },
  { icon: CheckCircle2, label: "24/7 Support" },
  { icon: Star, label: "4.9/5 Rating" },
];

const whyChoose = [
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description:
      "Advanced pricing strategies, dynamic rates, and smart upselling features to maximize hotel revenue and occupancy rates.",
    items: ["Dynamic pricing algorithms", "Smart upselling features", "Revenue analytics dashboard"],
  },
  {
    icon: Users,
    title: "Exceptional Guest Experience",
    description:
      "Seamless booking process, personalized recommendations, and 24/7 support to ensure guests have the best possible experience.",
    items: ["One-click booking process", "Personalized recommendations", "24/7 customer support"],
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description:
      "Cloud-native platform built to handle growth from boutique hotels to international chains with auto-scaling and high availability.",
    items: ["Auto-scaling infrastructure", "99.9% uptime guarantee", "Global CDN distribution"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with PCI DSS compliance, SSL encryption, and fraud detection to protect sensitive booking and payment data.",
    items: ["PCI DSS compliance", "SSL/TLS encryption", "Fraud detection system"],
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Support",
    description:
      "Native iOS and Android apps, responsive web platform, and PWA support to reach guests on any device, anywhere.",
    items: ["Native mobile apps", "Responsive web platform", "PWA capabilities"],
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description:
      "Real-time dashboards with booking trends, guest behavior analysis, and revenue insights to optimize business performance.",
    items: ["Real-time booking analytics", "Guest behavior insights", "Performance optimization"],
  },
];

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Tailored hotel booking platform development with custom features, integrations, and branding to match your unique business requirements.",
    items: ["Custom UI/UX design", "Third-party integrations", "Brand customization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native iOS and Android applications with advanced features, offline capabilities, and seamless user experience across all devices.",
    items: ["Native iOS & Android apps", "Offline functionality", "Push notifications"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud infrastructure setup with AWS, auto-scaling, load balancing, and 99.9% uptime guarantee for your platform.",
    items: ["AWS cloud setup", "Auto-scaling configuration", "Load balancing"],
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Secure payment gateway integration with multiple payment methods, fraud detection, and PCI DSS compliance for safe transactions.",
    items: ["Multiple payment methods", "Fraud detection", "PCI DSS compliance"],
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description:
      "Comprehensive analytics dashboard with real-time insights, booking trends, revenue reports, and performance optimization tools.",
    items: ["Real-time dashboards", "Revenue analytics", "Performance insights"],
  },
  {
    icon: MessageCircle,
    title: "Ongoing Support",
    description:
      "24/7 technical support, regular updates, maintenance, and feature enhancements to keep your platform running smoothly.",
    items: ["24/7 technical support", "Regular updates", "Maintenance services"],
  },
];

const features = [
  {
    icon: Search,
    title: "Smart Search & Filters",
    description:
      "Advanced search with location-based recommendations, price filters, and amenity preferences.",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description:
      "Real-time availability checking and instant booking confirmation with secure payment processing.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Multiple payment options with SSL encryption and fraud protection for safe transactions.",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description: "Authentic guest reviews, photos, and ratings to help users make informed decisions.",
  },
  {
    icon: Bell,
    title: "Price Alerts",
    description: "Smart notifications for price drops and special deals on preferred destinations.",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Global platform supporting multiple languages and currencies for international travelers.",
  },
];

const advancedFeatures = [
  {
    icon: Zap,
    title: "AI-Powered Recommendations",
    description:
      "Machine learning algorithms analyze user preferences, booking history, and market trends to provide personalized hotel recommendations.",
    items: ["Personalized suggestions", "Smart pricing alerts", "Behavioral analysis"],
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description:
      "Comprehensive dashboard with real-time insights, booking trends, revenue analytics, and performance metrics for hoteliers.",
    items: ["Live booking tracking", "Revenue optimization", "Performance insights"],
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Global platform supporting 50+ languages with automatic translation and localized content for international travelers.",
    items: ["50+ languages", "Localized content", "Currency conversion"],
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Enterprise-grade security with SSL encryption, fraud detection, and PCI compliance for safe and secure transactions.",
    items: ["SSL encryption", "Fraud detection", "PCI compliance"],
  },
  {
    icon: DollarSign,
    title: "Smart Pricing Engine",
    description:
      "Dynamic pricing system that adjusts rates based on demand, seasonality, and market conditions for optimal revenue.",
    items: ["Dynamic pricing", "Demand forecasting", "Revenue optimization"],
  },
  {
    icon: Code,
    title: "API Integration",
    description:
      "Comprehensive REST API with extensive documentation for seamless integration with existing systems and third-party services.",
    items: ["RESTful API", "Webhook support", "SDK libraries"],
  },
];

const scaleItems = [
  {
    icon: Server,
    title: "Microservices Architecture",
    description: "Scalable and maintainable system design",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Platform",
    description: "Built on AWS with global CDN",
  },
  {
    icon: Database,
    title: "Real-Time Database",
    description: "Instant synchronization across devices",
  },
];

const performanceMetrics = [
  { label: "Response Time", value: "~50ms", width: "95%" },
  { label: "Uptime", value: "99.9%", width: "99.9%" },
  { label: "Concurrent Users", value: "100K+", width: "90%" },
];

const platforms = [
  {
    icon: Smartphone,
    title: "iOS App",
    description:
      "Native iOS application with Apple Pay integration, Siri shortcuts, and seamless iCloud synchronization.",
    items: ["Apple Pay integration", "Siri shortcuts", "iCloud sync"],
  },
  {
    icon: Smartphone,
    title: "Android App",
    description:
      "Native Android application with Google Pay, fingerprint authentication, and Material Design 3.",
    items: ["Google Pay support", "Fingerprint auth", "Material Design 3"],
  },
  {
    icon: Monitor,
    title: "Web Platform",
    description:
      "Progressive Web App with offline support, push notifications, and responsive design for all devices.",
    items: ["PWA support", "Offline mode", "Push notifications"],
  },
  {
    icon: Tablet,
    title: "Tablet App",
    description: "Optimized tablet experience with split-screen support, enhanced UI, and touch gestures.",
    items: ["Split-screen mode", "Enhanced UI", "Touch gestures"],
  },
];

const techStack = [
  { icon: Smartphone, title: "React Native", description: "Cross-platform mobile development for iOS and Android", category: "Frontend" },
  { icon: Monitor, title: "Next.js", description: "Server-side rendering and web application framework", category: "Frontend" },
  { icon: Database, title: "PostgreSQL", description: "Reliable database for booking data and user management", category: "Database" },
  { icon: Cloud, title: "AWS", description: "Scalable cloud infrastructure and services", category: "Cloud" },
  { icon: Server, title: "Node.js", description: "Backend API development and real-time features", category: "Backend" },
  { icon: Shield, title: "Stripe", description: "Secure payment processing and subscription management", category: "Payment" },
  { icon: Zap, title: "TypeScript", description: "Type-safe JavaScript for robust development", category: "Languages" },
  { icon: Globe, title: "GraphQL", description: "Flexible API query language for efficient data fetching", category: "APIs" },
  { icon: Award, title: "Docker", description: "Containerization for consistent deployment", category: "DevOps" },
  { icon: Code, title: "Kubernetes", description: "Container orchestration and scaling management", category: "DevOps" },
  { icon: Bell, title: "Socket.io", description: "Real-time communication and notifications", category: "Real-time" },
  { icon: Search, title: "Elasticsearch", description: "Advanced search and analytics engine", category: "Search" },
  { icon: Users, title: "MongoDB", description: "Flexible NoSQL database for dynamic data", category: "Database" },
  { icon: MapPin, title: "Google Maps API", description: "Location services and mapping integration", category: "APIs" },
  { icon: MessageCircle, title: "Twilio", description: "SMS and communication services", category: "Real-time" },
  { icon: Calendar, title: "JWT", description: "Secure authentication and authorization", category: "Security" },
  { icon: Star, title: "Jest", description: "Comprehensive testing framework", category: "Testing" },
  { icon: Clock, title: "Cron Jobs", description: "Automated task scheduling and processing", category: "Backend" },
  { icon: Wifi, title: "WebRTC", description: "Real-time video and audio communication", category: "Real-time" },
  { icon: Gift, title: "Webpack", description: "Module bundling and asset optimization", category: "Frontend" },
  { icon: Briefcase, title: "Jenkins", description: "Continuous integration and deployment", category: "DevOps" },
  { icon: Database, title: "S3 Storage", description: "Scalable cloud storage for media files", category: "Cloud" },
  { icon: CheckCircle2, title: "Cypress", description: "End-to-end testing automation", category: "Testing" },
];

const techCategories = [
  { id: "all", title: "All", items: [] as typeof techStack },
  ...Array.from(new Set(techStack.map((t) => t.category))).map((cat) => ({
    id: cat.toLowerCase().replace(/[^a-z]/g, "-"),
    title: cat,
    items: techStack.filter((t) => t.category === cat),
  })),
];

techCategories[0].items = techStack;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Hotel Booking App Development Services",
      description:
        "Custom hotel booking app solutions: room search, real-time availability, secure payments, and property management.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Hotel Booking App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hotel Booking App",
          item: "https://www.ctasis.com/solutions/hotel-booking-app",
        },
      ],
    },
  ],
};

const HotelBookMockup = () => (
  <div className="relative hidden sm:block">
    <div className="mx-auto w-[280px] sm:w-[300px] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-900 p-2 shadow-2xl">
      <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="p-5 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Hotel className="w-6 h-6" />
              <span className="font-bold text-base">HotelBook</span>
            </div>
            <Search className="w-4 h-4 opacity-80" />
          </div>
          <div className="text-xs opacity-90">Find your perfect stay</div>
        </div>
        <div className="p-4 space-y-3">
          {[
            { name: "Grand Plaza Hotel", location: "Downtown, New York", price: "$299", rating: "4.8", tag: "Popular", tagColor: "bg-blue-100 text-blue-600" },
            { name: "Seaside Resort", location: "Miami Beach, FL", price: "$450", rating: "4.9", tag: "Luxury", tagColor: "bg-purple-100 text-purple-600" },
          ].map((hotel) => (
            <div key={hotel.name} className="bg-white rounded-xl p-3.5 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${CYAN}22` }}>
                  <Hotel className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-slate-900">{hotel.price}</div>
                  <div className="text-[10px] text-slate-500">per night</div>
                </div>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-0.5">{hotel.name}</h3>
              <p className="text-xs text-slate-500 mb-2">{hotel.location}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  <span className="text-xs font-semibold">{hotel.rating}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${hotel.tagColor}`}>{hotel.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden md:flex items-center gap-1.5"
    >
      <MapPin className="w-4 h-4" style={{ color: CYAN }} />
      <span className="text-xs font-medium text-slate-700">Live Demo</span>
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-2 -left-2 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
      4.9/5 Rating
    </motion.div>
  </div>
);

export default function HotelBookingAppPage() {
  const [activeWhy, setActiveWhy] = useState(0);
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — split-screen with mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label="Hotel Booking App Development"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Live Demo Available
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Transform Your{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Hotel Business
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-[#C7D2D9]">With Smart Booking</span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-6 max-w-xl">
                  Revolutionize your travel business with our cutting-edge hotel booking platform.{" "}
                  <span className="text-[#E2E8ED]">
                    AI-powered recommendations, real-time analytics, and seamless multi-platform experience.
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Play className="w-4 h-4" />
                    View Portfolios
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8" role="list" aria-label="Platform statistics">
                  {heroStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                      className="text-center"
                      role="listitem"
                    >
                      <div className={`${fraunces.className} text-xl sm:text-2xl font-medium text-[#F2F6F9] mb-1`}>
                        {stat.number.match(/^[\d.]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#93A3AF]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-[#93A3AF]">
                  {trustIndicators.map((item) => (
                    <span key={item.label} className="inline-flex items-center gap-1.5">
                      <item.icon className="w-3.5 h-3.5" style={{ color: CYAN }} />
                      {item.label}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <HotelBookMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose — tabbed sidebar */}
        <SectionWrap>
          <SectionHeader
            badge="Why Choose Us"
            title="Why Choose Our"
            highlight="Hotel Booking App Solution?"
            description="Comprehensive features and proven technology designed to maximize hotel bookings, enhance guest experience, and drive business growth across all platforms."
          />
          <div className="grid lg:grid-cols-[minmax(0,260px)_1fr] gap-6 lg:gap-10 items-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Solution benefits">
              {whyChoose.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveWhy(i)}
                  className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    activeWhy === i
                      ? "text-white shadow-md"
                      : "text-slate-600 bg-white border border-slate-200/80 hover:border-[#13345A]/20"
                  }`}
                  style={activeWhy === i ? { backgroundColor: NAVY } : undefined}
                  aria-current={activeWhy === i ? "true" : undefined}
                >
                  {item.title}
                </button>
              ))}
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={whyChoose[activeWhy].title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-5">
                  <IconBox icon={whyChoose[activeWhy].icon} />
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
                      {whyChoose[activeWhy].title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{whyChoose[activeWhy].description}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {whyChoose[activeWhy].items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionWrap>

        {/* Services — horizontal timeline */}
        <SectionWrap alt>
          <SectionHeader
            badge="Our Services"
            title="Comprehensive"
            highlight="Services"
            description="From initial consultation to ongoing support, we provide end-to-end hotel booking platform development and management services tailored to your business needs."
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, i) => (
                <motion.article
                  key={service.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="relative rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 relative z-10"
                      style={{ backgroundColor: NAVY }}
                    >
                      {i + 1}
                    </div>
                    <IconBox icon={service.icon} />
                  </div>
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Features — horizontal snap-scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Core Features"
            title="Powerful Features for"
            highlight="Modern Travel"
            description="Our hotel booking platform comes packed with features designed to enhance the travel experience for both guests and hoteliers."
          />
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>{feature.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Advanced Features — bento grid on dark panel */}
        <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}>
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-semibold uppercase tracking-widest">
                Advanced
              </div>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-white mt-4 mb-4 mx-auto`}>
                Advanced{" "}
                <span className="italic" style={{ color: CYAN_LIGHT }}>
                  Features
                </span>
              </h2>
              <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Experience cutting-edge technology with our advanced hotel booking platform. From AI-powered recommendations to real-time analytics, we provide everything you need.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">
              {advancedFeatures.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className={`rounded-[1.5rem] border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 hover:bg-white/[0.09] transition-all ${
                    i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${CYAN}22` }}>
                    <feature.icon className="w-5 h-5" style={{ color: CYAN_LIGHT }} />
                  </div>
                  <h3 className={`${fraunces.className} text-lg font-medium text-white mb-2`}>{feature.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-1.5">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>

            {/* Scale & Performance — split-screen */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10">
              <motion.div {...fadeUp}>
                <h3 className={`${fraunces.className} text-2xl font-medium text-white mb-4`}>
                  Built for{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Scale & Performance
                  </span>
                </h3>
                <p className="text-base text-white/60 leading-relaxed mb-8">
                  Our platform handles millions of bookings with 99.9% uptime, ensuring your business never stops growing.
                </p>
                <div className="space-y-5">
                  {scaleItems.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}22` }}>
                        <item.icon className="w-5 h-5" style={{ color: CYAN_LIGHT }} />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-white/50">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div {...fadeUp} transition={{ delay: 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-7">
                <h4 className={`${fraunces.className} text-xl font-medium text-white mb-6 text-center`}>Performance Metrics</h4>
                <div className="space-y-5">
                  {performanceMetrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white/60">{metric.label}</span>
                        <span className="text-sm font-semibold text-white">{metric.value}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: CYAN }}
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack — tabbed sidebar */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology Stack"
            title="Built with Modern"
            highlight="Technology"
            description="Our hotel booking platform is built using cutting-edge technologies to ensure scalability, security, and exceptional performance."
          />
          <div className="grid lg:grid-cols-[minmax(0,220px)_1fr] gap-6 lg:gap-10 items-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Technology layers">
              {techCategories.map((cat, ci) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTech(ci)}
                  className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    activeTech === ci
                      ? "text-white shadow-md"
                      : "text-slate-600 bg-white border border-slate-200/80 hover:border-[#13345A]/20"
                  }`}
                  style={activeTech === ci ? { backgroundColor: NAVY } : undefined}
                  aria-current={activeTech === ci ? "true" : undefined}
                >
                  {cat.title}
                </button>
              ))}
            </nav>
            <div>
              <p className="text-sm text-slate-500 mb-6">
                {currentTech.items.length} technolog{currentTech.items.length !== 1 ? "ies" : "y"}
                {activeTech > 0 && ` in ${currentTech.title}`}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTech.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {currentTech.items.map((tech) => (
                    <div
                      key={`${tech.title}-${tech.category}`}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${CYAN}18` }}>
                        <tech.icon className="w-5 h-5" style={{ color: NAVY }} />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">{tech.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
                <Hotel className="w-4 h-4" style={{ color: CYAN }} />
                Explore our{" "}
                <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  mobile app development
                </Link>{" "}
                and{" "}
                <Link href="/services/web-development" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  web development
                </Link>{" "}
                services
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        {/* Multi-Platform — zigzag alternating rows */}
        <SectionWrap>
          <SectionHeader
            badge="Multi-Platform"
            title="Multi-Platform"
            highlight="Solutions"
            description="Our hotel booking platform is available across all devices and platforms, ensuring seamless access for travelers and hoteliers worldwide."
          />
          <div className="space-y-6 lg:space-y-8">
            {platforms.map((platform, i) => (
              <motion.article
                key={platform.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex flex-col sm:flex-row gap-6 sm:gap-10 items-start rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full sm:w-1/3 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                    <platform.icon className="w-7 h-7" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{platform.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{platform.description}</p>
                  </div>
                </div>
                <ul className="w-full sm:w-2/3 grid sm:grid-cols-3 gap-2.5">
                  {platform.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Transform Your Hotel Business?"
          description="Join thousands of hoteliers who have already revolutionized their booking process with our comprehensive hotel booking platform."
          primaryLabel="Start Free Consultation"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
