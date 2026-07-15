"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Phone,
  Users,
  Globe,
  ArrowRight,
  Database,
  Server,
  CheckCircle2,
  Search,
  MapPin,
  Heart,
  Cloud,
  Smartphone,
  Code,
  Star,
  TrendingUp,
  Sliders,
  Shield,
  Building,
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

const heroBenefits = ["AI-Powered Discovery", "Virtual Reality Tours", "Market Intelligence"];

const stats = [
  { number: "75K+", label: "Properties Listed" },
  { number: "35K+", label: "Happy Users" },
  { number: "750+", label: "Real Estate Agents" },
  { number: "4.9★", label: "Average Rating" },
];

const features = [
  {
    icon: Search,
    title: "AI-Powered Smart Search",
    description:
      "Advanced property discovery with intelligent filters, natural language processing, and predictive search suggestions",
    highlights: ["Voice Search", "Auto-complete", "Smart Filters", "Saved Searches"],
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description:
      "Comprehensive neighborhood insights with crime data, school ratings, transportation, and local amenities analysis",
    highlights: ["Crime Statistics", "School Ratings", "Transport Links", "Local Amenities"],
  },
  {
    icon: Home,
    title: "Virtual Reality Tours",
    description:
      "Immersive 3D virtual tours with 360° walkthroughs, AR furniture placement, and virtual staging",
    highlights: ["360° Tours", "AR Staging", "Floor Plans", "Virtual Walkthrough"],
  },
  {
    icon: Heart,
    title: "Personalized Recommendations",
    description:
      "ML-driven property suggestions based on preferences, browsing history, and behavioral patterns",
    highlights: ["Smart Matching", "Preference Learning", "Market Alerts", "Price Predictions"],
  },
  {
    icon: TrendingUp,
    title: "Market Analytics",
    description:
      "Real-time market trends, price history, investment potential analysis, and market forecasting",
    highlights: ["Price Trends", "Investment ROI", "Market Forecast", "Comparable Sales"],
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "End-to-end encrypted communications, secure document sharing, and verified agent profiles",
    highlights: ["Bank-level Security", "Document Vault", "Identity Verification", "Secure Messaging"],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description:
      "Native mobile apps with offline viewing, push notifications, and GPS-based property discovery",
    highlights: ["Offline Mode", "Push Notifications", "GPS Discovery", "Touch ID Login"],
  },
  {
    icon: Users,
    title: "Agent Network",
    description:
      "Connect with verified real estate professionals, schedule viewings, and access expert consultation",
    highlights: ["Verified Agents", "Video Consultations", "Instant Scheduling", "Expert Reviews"],
  },
];

const benefits = [
  {
    icon: Home,
    title: "For Homebuyers",
    items: [
      "Advanced property search with AI filters",
      "Virtual reality property tours",
      "Real-time market analysis and trends",
      "Mortgage calculator and financing tools",
      "Property comparison and evaluation",
      "Saved searches with instant alerts",
    ],
  },
  {
    icon: Building2,
    title: "For Property Sellers",
    items: [
      "Comprehensive listing management",
      "AI-powered market value estimation",
      "Professional photography and staging",
      "Lead generation and tracking system",
      "Performance analytics and insights",
      "Virtual staging and 3D modeling",
    ],
  },
  {
    icon: Users,
    title: "For Real Estate Agents",
    items: [
      "Advanced CRM and lead management",
      "Property listing and marketing tools",
      "Client communication platform",
      "Market analysis and reporting",
      "Commission tracking and analytics",
      "Mobile app for field operations",
    ],
  },
];

const techStack = [
  { icon: Code, title: "React Native", description: "Cross-platform mobile development", category: "Frontend" },
  { icon: Globe, title: "Next.js", description: "React framework for web applications", category: "Frontend" },
  { icon: Server, title: "Node.js", description: "JavaScript runtime for backend services", category: "Backend" },
  { icon: Database, title: "PostgreSQL", description: "Advanced relational database system", category: "Database" },
  { icon: Database, title: "MongoDB", description: "NoSQL database for flexible data storage", category: "Database" },
  { icon: Cloud, title: "AWS", description: "Comprehensive cloud infrastructure", category: "Cloud" },
  { icon: Cloud, title: "Google Cloud", description: "Machine learning and analytics platform", category: "Cloud" },
  { icon: Server, title: "Docker", description: "Containerization for deployment", category: "DevOps" },
  { icon: Server, title: "Kubernetes", description: "Container orchestration platform", category: "DevOps" },
  { icon: Globe, title: "Google Maps API", description: "Advanced mapping and location services", category: "APIs" },
  { icon: Globe, title: "Stripe API", description: "Secure payment processing", category: "APIs" },
  { icon: Shield, title: "Auth0", description: "Authentication and authorization", category: "Security" },
  { icon: Shield, title: "JWT", description: "JSON Web Tokens for secure sessions", category: "Security" },
  { icon: TrendingUp, title: "TensorFlow", description: "Machine learning for property recommendations", category: "AI/ML" },
  { icon: TrendingUp, title: "Python", description: "Data analysis and AI algorithms", category: "AI/ML" },
  { icon: Smartphone, title: "React Native", description: "iOS and Android mobile applications", category: "Mobile" },
  { icon: Smartphone, title: "Flutter", description: "Cross-platform mobile development", category: "Mobile" },
  { icon: Globe, title: "Socket.io", description: "Real-time communication and notifications", category: "Real-time" },
  { icon: Server, title: "GraphQL", description: "Efficient API query language", category: "APIs" },
  { icon: Code, title: "TypeScript", description: "Type-safe JavaScript development", category: "Languages" },
  { icon: Database, title: "Elasticsearch", description: "Advanced search and analytics", category: "Search" },
  { icon: Cloud, title: "CloudFlare", description: "CDN and security services", category: "Infrastructure" },
  { icon: TrendingUp, title: "Apache Kafka", description: "Event streaming and data pipelines", category: "Data" },
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
      name: "Property Finder App Development Services",
      description:
        "Advanced property finder apps: map-based search, virtual tours, agent management, and real estate listings.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Property Finder App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Property Finder App",
          item: "https://www.ctasis.com/solutions/property-finder-app",
        },
      ],
    },
  ],
};

const PropertyVisionMockup = () => (
  <div className="relative mx-auto max-w-xs hidden lg:block">
    <motion.div
      {...fadeUp}
      className="absolute -top-3 left-0 rounded-xl border border-slate-200/80 bg-white px-2.5 py-1.5 shadow-md text-xs z-10"
    >
      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block mr-1.5 animate-pulse" />
      AI Powered
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.08 }}
      className="absolute top-16 -right-4 rounded-xl border border-slate-200/80 bg-white px-2.5 py-1.5 shadow-md text-xs z-10"
    >
      <Star className="w-3 h-3 text-amber-400 inline mr-1" />
      4.9 Rating
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.12 }}
      className="absolute bottom-24 -left-4 rounded-xl border border-slate-200/80 bg-white px-2.5 py-1.5 shadow-md text-xs z-10"
    >
      <MapPin className="w-3 h-3 inline mr-1" style={{ color: CYAN }} />
      Live Location
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.16 }}
      className="absolute bottom-8 -right-3 rounded-xl border border-slate-200/80 bg-white px-2.5 py-1.5 shadow-md text-xs z-10"
    >
      <Shield className="w-3 h-3 inline mr-1" style={{ color: NAVY }} />
      Secure
    </motion.div>

    <div className="relative w-[280px] h-[560px] bg-white rounded-[2.25rem] border-4 border-slate-200 shadow-2xl overflow-hidden transform rotate-2">
      <div className="h-6 bg-white border-b border-slate-100 flex items-center justify-between px-4 text-[10px] text-slate-500">
        <span className="font-semibold">9:41</span>
        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-medium" style={{ backgroundColor: `${CYAN}18`, color: NAVY }}>
          Live
        </span>
      </div>

      <div className="px-3 pt-3 pb-2 bg-[#F6F8FA]">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className={`${fraunces.className} text-sm font-medium text-slate-900`}>PropertyVision</div>
            <div className="text-[10px]" style={{ color: CYAN }}>AI Real Estate Discovery</div>
          </div>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: NAVY }}>
            <Home className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex gap-1.5 text-[9px]">
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">3,247 Properties</span>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium flex items-center gap-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +5.2%
          </span>
        </div>
      </div>

      <div className="px-3 py-2">
        <div className="flex items-center bg-white rounded-xl px-2.5 py-2 border border-slate-200 shadow-sm">
          <Search className="w-3.5 h-3.5 mr-1.5" style={{ color: CYAN }} />
          <span className="text-[10px] text-slate-400 flex-1">Search dream property...</span>
          <div className="p-1 rounded-md" style={{ backgroundColor: CYAN }}>
            <Sliders className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
      </div>

      <div className="px-3 space-y-2 overflow-hidden flex-1">
        {[
          {
            title: "Luxury Penthouse",
            loc: "Manhattan • 3 beds • 2 baths",
            price: "$1.2M",
            rating: "4.9",
            featured: true,
            icon: Home,
          },
          {
            title: "Modern Townhouse",
            loc: "Brooklyn • 4 beds • 3 baths",
            price: "$950K",
            rating: "4.7",
            featured: false,
            icon: Building2,
          },
          {
            title: "Seaside Villa",
            loc: "Malibu • 5 beds • 4 baths",
            price: "$2.1M",
            rating: "5.0",
            featured: false,
            icon: Home,
          },
        ].map((prop) => (
          <div key={prop.title} className="rounded-xl border border-slate-200 bg-white p-2.5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}22` }}>
                <prop.icon className="w-5 h-5" style={{ color: NAVY }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-bold text-slate-800 truncate">{prop.title}</span>
                  {prop.featured && (
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full font-bold" style={{ backgroundColor: `${CYAN}18`, color: NAVY }}>
                      Featured
                    </span>
                  )}
                </div>
                <div className="text-[9px] text-slate-500">{prop.loc}</div>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[10px] font-bold" style={{ color: NAVY }}>{prop.price}</span>
                  <span className="text-[9px] text-slate-500 flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 text-amber-400 fill-current" />
                    {prop.rating}
                  </span>
                </div>
              </div>
              <Heart className="w-4 h-4 text-pink-500 fill-current flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-2 py-2 border-t border-slate-200 bg-white text-[9px]">
        {[
          { icon: Home, label: "Home", active: true },
          { icon: Search, label: "Search", active: false },
          { icon: MapPin, label: "Map", active: false },
          { icon: Heart, label: "Saved", active: false },
          { icon: Users, label: "Agents", active: false },
        ].map((nav) => (
          <div key={nav.label} className="flex flex-col items-center">
            <div className={`p-1.5 rounded-lg ${nav.active ? "" : ""}`} style={nav.active ? { backgroundColor: CYAN } : undefined}>
              <nav.icon className={`w-4 h-4 ${nav.active ? "text-white" : "text-slate-400"}`} />
            </div>
            <span className={nav.active ? "font-bold mt-0.5" : "text-slate-400 mt-0.5"} style={nav.active ? { color: NAVY } : undefined}>
              {nav.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PropertyFinderAppPage = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeTech, setActiveTech] = useState(0);
  const currentBenefit = benefits[activeBenefit];
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Property Finder App Development"
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
                  🏘️ Next-Gen Property Platform
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Find Your{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Dream Property
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-6 max-w-xl">
                  Experience the future of real estate with our cutting-edge property discovery platform. Powered by AI
                  and designed for the modern property hunter.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {heroBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-[#C7D2D9]">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Phone className="w-4 h-4" />
                    Get Free Quote
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <ArrowRight className="w-4 h-4" />
                    View Portfolios
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <PropertyVisionMockup />
              </motion.div>
            </div>
          </div>
        </section>

        <SectionWrap>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Property platform statistics">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="text-center rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-md transition-shadow"
                role="listitem"
              >
                <div className={`${fraunces.className} text-3xl sm:text-4xl font-medium mb-2`} style={{ color: NAVY }}>
                  {stat.number.match(/^[\d.]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap alt>
          <SectionHeader
            badge="Features"
            title="Key Features for"
            highlight="Modern Property Discovery"
            description="Comprehensive platform with advanced AI, virtual tours, market analytics, and secure transactions for the ultimate real estate experience"
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex-shrink-0 w-[300px] sm:w-[320px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-1.5">
                      {feature.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        <SectionWrap>
          <SectionHeader
            badge="Benefits"
            title="Benefits for All Real Estate"
            highlight="Stakeholders"
            description="Our platform creates value for buyers, sellers, and real estate professionals with cutting-edge technology"
          />
          <div className="grid lg:grid-cols-[minmax(0,220px)_1fr] gap-6 lg:gap-10 items-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Stakeholder benefits">
              {benefits.map((benefit, bi) => (
                <button
                  key={benefit.title}
                  type="button"
                  onClick={() => setActiveBenefit(bi)}
                  className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    activeBenefit === bi
                      ? "text-white shadow-md"
                      : "text-slate-600 bg-white border border-slate-200/80 hover:border-[#13345A]/20"
                  }`}
                  style={activeBenefit === bi ? { backgroundColor: NAVY } : undefined}
                  aria-current={activeBenefit === bi ? "true" : undefined}
                >
                  {benefit.title}
                </button>
              ))}
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBenefit.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${CYAN}18` }}>
                    <currentBenefit.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{currentBenefit.title}</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {currentBenefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionWrap>

        <SectionWrap alt>
          <SectionHeader
            badge="Technology"
            title="Complete"
            highlight="Technology Stack"
            description="Built with cutting-edge technologies across frontend, backend, mobile, AI/ML, and cloud infrastructure"
          />
          <div className="grid lg:grid-cols-[minmax(0,200px)_1fr] gap-6 lg:gap-10 items-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 max-h-[320px] lg:max-h-[480px] lg:overflow-y-auto" aria-label="Technology categories">
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
                      <p className="text-xs text-slate-500 mb-2">{tech.description}</p>
                      <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${CYAN}18`, color: NAVY }}>
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
                <Building className="w-4 h-4" style={{ color: CYAN }} />
                Explore our{" "}
                <Link href="/services/web-development" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  web development
                </Link>{" "}
                and{" "}
                <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  mobile app services
                </Link>
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Transform Property Discovery?"
          description="Join the real estate revolution with a smart, efficient, and user-friendly property discovery platform."
          primaryLabel={
            <>
              Start Free Consultation
              <ArrowRight className="w-4 h-4" />
            </>
          }
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default PropertyFinderAppPage;
