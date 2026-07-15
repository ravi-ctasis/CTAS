"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle2,
  Award,
  MessageCircle,
  DollarSign,
  Tablet,
  TrendingDown,
  Cpu,
  Headphones,
  Apple,
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
  DotCarousel,
} from "@/components/page-design";

const SectionWrap = ({
  children,
  alt = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={`py-10 sm:py-12 lg:py-14 ${alt ? "bg-white" : "bg-[#F6F8FA]"}`}>
    <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">{children}</div>
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
  { number: "2M+", label: "Happy Rides" },
  { number: "75K+", label: "Trusted Drivers" },
  { number: "24/7", label: "Support" },
];

const trustIndicators = [
  { icon: Shield, label: "Verified Drivers" },
  { icon: CheckCircle2, label: "Safe Rides" },
  { icon: Star, label: "4.9★ Rating" },
];

const features = [
  {
    icon: Search,
    title: "Smart Location Detection",
    description:
      "Automatic GPS location detection with address autocomplete and favorite locations for quick booking.",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description:
      "Live driver tracking with ETA updates, route optimization, and real-time notifications throughout the ride.",
  },
  {
    icon: Shield,
    title: "Safety Features",
    description:
      "Emergency SOS button, driver verification, trip sharing, and 24/7 customer support for passenger safety.",
  },
  {
    icon: Star,
    title: "Driver Ratings",
    description:
      "Comprehensive rating system with detailed reviews, driver profiles, and quality assurance measures.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Push notifications for booking confirmations, driver arrival, trip completion, and promotional offers.",
  },
  {
    icon: Globe,
    title: "Multi-City Support",
    description:
      "Operational across multiple cities with local regulations compliance and city-specific features.",
  },
];

const whyChoose = [
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "Book your ride in under 30 seconds with our streamlined booking process. No waiting, no complications - just instant confirmation.",
    badge: "30s Booking",
    badgeIcon: Clock,
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock service available whenever you need it. Early morning flights, late night events, or emergency rides - we're always here.",
    badge: "Always Available",
    badgeIcon: CheckCircle2,
  },
  {
    icon: Shield,
    title: "Verified Drivers",
    description:
      "All drivers undergo rigorous background checks and vehicle inspections. Your safety is our top priority with every ride.",
    badge: "100% Verified",
    badgeIcon: CheckCircle2,
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Transparent pricing with no hidden fees. Compare rates instantly and choose the best option for your budget and needs.",
    badge: "Best Rates",
    badgeIcon: TrendingDown,
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description:
      "AI-powered matching, real-time tracking, and smart notifications. Experience the future of transportation technology.",
    badge: "AI-Powered",
    badgeIcon: Zap,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated customer support team available round the clock. Get help anytime with live chat, phone, or email support.",
    badge: "Live Support",
    badgeIcon: MessageCircle,
  },
];

const platforms = [
  {
    icon: Smartphone,
    title: "iOS App",
    description: "Native iOS app with Apple Pay integration, Siri shortcuts, and iCloud sync for seamless experience.",
    items: ["Apple Pay", "Siri Integration", "iCloud Sync"],
    cta: "Download on App Store",
    ctaIcon: Apple,
  },
  {
    icon: Smartphone,
    title: "Android App",
    description: "Native Android app with Google Pay, Material Design 3, and seamless Google Maps integration.",
    items: ["Google Pay", "Material Design", "Google Maps"],
    cta: "Get on Google Play",
    ctaIcon: Play,
  },
  {
    icon: Globe,
    title: "Web Platform",
    description: "Responsive web platform with PWA features, offline support, and cross-browser compatibility.",
    items: ["PWA Support", "Offline Mode", "Cross-Browser"],
    cta: "Access Web App",
    ctaIcon: Globe,
  },
  {
    icon: Tablet,
    title: "Tablet App",
    description: "Optimized tablet experience with split-screen support, enhanced UI, and touch gestures.",
    items: ["Split Screen", "Enhanced UI", "Touch Gestures"],
    cta: "Download Tablet App",
    ctaIcon: Tablet,
  },
];

const essentialFeatures = [
  {
    icon: Car,
    title: "Ride Booking & Management",
    description:
      "Quick and easy ride booking with real-time availability and instant booking confirmations or ride scheduling.",
  },
  {
    icon: MapPin,
    title: "GPS & Real-Time Tracking",
    description:
      "Real-time location tracking for both passengers and drivers with accurate routes and ETA updates.",
  },
  {
    icon: CreditCard,
    title: "In-App Payment Options",
    description:
      "Secure multiple payment options including credit cards, debit cards, and digital wallets for convenience.",
  },
  {
    icon: Star,
    title: "Rating System",
    description:
      "Driver and passenger rating system to promote accountability and improve service quality.",
  },
  {
    icon: Shield,
    title: "Safety Features",
    description: "Emergency SOS button, driver verification, and 24/7 support for complete peace of mind.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Intelligent push notifications for ride updates, driver arrival, and payment confirmations.",
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
      name: "Taxi Booking App Development Services",
      description:
        "Custom taxi booking apps with real-time ride tracking, driver management, secure payments, fare calculation, and seamless passenger experiences.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Taxi Booking App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Taxi Booking",
          item: "https://www.ctasis.com/solutions/taxi-booking",
        },
      ],
    },
  ],
};

const TaxiExpressMockup = () => (
  <div className="relative hidden sm:block">
    <div className="mx-auto w-[280px] sm:w-[300px] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-900 p-2 shadow-2xl">
      <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-white to-blue-50">
        <div className="p-5 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Car className="w-6 h-6" />
              <span className="font-bold text-base">TaxiExpress</span>
            </div>
            <Bell className="w-4 h-4 opacity-80" />
          </div>
          <div className="text-xs opacity-90">Where to today?</div>
        </div>
        <div className="p-4 space-y-3">
          <div className="bg-white rounded-xl p-3.5 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin className="w-4 h-4" style={{ color: NAVY }} />
              </div>
              <span className="text-xs text-slate-500">Enter destination...</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-xs text-slate-500">Enter pickup location...</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Standard", price: "$8-12", icon: Car },
              { label: "Premium", price: "$15-20", icon: Star },
            ].map((tier) => (
              <div key={tier.label} className="bg-slate-50 rounded-xl p-2.5 text-center border border-slate-100">
                <tier.icon className="w-5 h-5 mx-auto mb-1" style={{ color: NAVY }} />
                <div className="text-xs font-semibold text-slate-900">{tier.label}</div>
                <div className="text-[10px] text-slate-500">{tier.price}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-3.5 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: NAVY }}>
                  <Car className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Mike Johnson</div>
                  <div className="text-[10px] text-slate-500">Toyota Camry • 2 min away</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold" style={{ color: CYAN }}>$12.50</div>
                <div className="text-[10px] text-slate-500">estimated</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-current" />
                <span className="text-xs font-semibold">4.9</span>
                <span className="text-[10px] text-slate-500">(2.5k rides)</span>
              </div>
              <span className="px-3 py-1 rounded-lg text-[10px] font-semibold text-white" style={{ backgroundColor: CYAN }}>
                Book Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden md:flex items-center gap-1.5"
    >
      <Car className="w-4 h-4" style={{ color: CYAN }} />
      <span className="text-xs font-medium text-slate-700">Instant Booking</span>
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-2 -left-2 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <Shield className="w-3.5 h-3.5" />
      Verified Drivers
    </motion.div>
  </div>
);

export default function TaxiBookingAppPage() {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — split-screen with mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Taxi Booking App Development"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  🚕 Instant Booking Available
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Your Ride,{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Your Way
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-[#C7D2D9]">Taxi Booking Made Simple</span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-6 max-w-xl">
                  Experience the future of transportation with our intelligent taxi booking platform.{" "}
                  <span className="text-[#E2E8ED]">
                    Book rides in seconds, track in real-time, and arrive safely every time.
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <Play className="w-4 h-4" />
                    View Portfolios
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
                <TaxiExpressMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features — horizontal snap-scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Core Features"
            title="Powerful Features for"
            highlight="Modern Transportation"
            description="Our taxi booking platform comes packed with features designed to enhance the transportation experience for both passengers and drivers."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
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
          </DotCarousel>
        </SectionWrap>

        {/* Why Choose — asymmetric bento grid */}
        <SectionWrap alt>
          <SectionHeader
            badge="Why Choose Us"
            title="The Smart Choice for"
            highlight="Modern Transportation"
            description="Experience the perfect blend of technology, safety, and convenience with our comprehensive taxi booking platform."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {whyChoose.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7 hover:shadow-lg transition-all ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <IconBox icon={item.icon} />
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ backgroundColor: `${CYAN}15`, color: NAVY }}>
                    <item.badgeIcon className="w-3 h-3" />
                    {item.badge}
                  </span>
                </div>
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Multi-Platform — 2x2 asymmetric grid with CTA buttons */}
        <SectionWrap>
          <SectionHeader
            badge="Multi-Platform"
            title="Multi-Platform"
            highlight="Access"
            description="Access our taxi booking service seamlessly across all your devices with native apps and responsive web platform."
          />
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {platforms.map((platform, i) => (
              <motion.article
                key={platform.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-all ${
                  i === 0 ? "md:row-span-1" : ""
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                    <platform.icon className="w-7 h-7" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>{platform.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{platform.description}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {platform.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F6F8FA] text-slate-600 border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-3 h-3" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: NAVY }}>
                  <platform.ctaIcon className="w-4 h-4" />
                  {platform.cta}
                </span>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Essential Features — diagonal accent strip + 3-column grid */}
        <section className="relative py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(135deg, ${CYAN}08 0%, transparent 50%, ${NAVY}06 100%)` }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader
              badge="Essential Features"
              title="Essential Features for"
              highlight="Modern Taxi Apps"
              description="Based on industry best practices and user expectations, our taxi booking apps include these essential features."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {essentialFeatures.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-[#F6F8FA] p-6 hover:bg-white hover:shadow-md transition-all"
                >
                  <IconBox icon={feature.icon} />
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-4 mb-2`}>{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack — 3-column icon grid */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology Stack"
            title="Built with Modern"
            highlight="Technology"
            description="Our taxi booking platform is built using cutting-edge technologies to ensure scalability, security, and exceptional performance."
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
                <Car className="w-4 h-4" style={{ color: CYAN }} />
                See our{" "}
                <Link href="/industries/transportation" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  transportation industry
                </Link>{" "}
                and{" "}
                <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  mobile app development
                </Link>{" "}
                expertise
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Transform Your Transportation Business?"
          description="Join thousands of taxi companies who have already revolutionized their booking process with our comprehensive taxi booking platform."
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
