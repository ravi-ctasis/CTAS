"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Search,
  Heart,
  Users,
  Star,
  Clock,
  MapPin,
  Calendar,
  Shield,
  Camera,
  Globe,
  Server,
  Zap,
  Smartphone,
  Monitor,
  Settings,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  CreditCard,
  Bell,
  Palette,
  TrendingUp,
  Package,
  Rocket,
  Sparkles,
  Signal,
  Wifi,
  Battery,
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
  { number: "500+", label: "Apps Built" },
  { number: "10M+", label: "Bookings" },
  { number: "99.9%", label: "Uptime" },
];

const travelFeatures = [
  {
    icon: Plane,
    title: "Real-time Booking",
    description: "Instant flight and hotel reservations",
    metric: "2.5x faster booking",
  },
  {
    icon: Clock,
    title: "Smart Planning",
    description: "AI-powered itinerary creation",
    metric: "30% time saved",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options",
    metric: "99.9% secure",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "AI destination recommendations",
    metric: "5x faster search",
  },
];

const nextGenFeatures = [
  {
    icon: MapPin,
    title: "AI-Powered Smart Booking",
    description:
      "Machine learning algorithms predict optimal booking times, suggest personalized deals, and automatically rebook for better prices.",
    stats: "40% savings",
  },
  {
    icon: Calendar,
    title: "Predictive Itinerary AI",
    description:
      "Advanced AI analyzes your preferences, weather patterns, and crowd data to create perfect travel schedules.",
    stats: "95% accuracy",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description:
      "Decentralized identity verification, tamper-proof booking records, and cryptocurrency payment options.",
    stats: "100% secure",
  },
  {
    icon: Camera,
    title: "AR Travel Assistant",
    description:
      "Augmented reality navigation, real-time translation, and immersive destination previews through your camera.",
    stats: "3D experience",
  },
];

const bottomFeatures = [
  {
    icon: Globe,
    title: "Quantum Computing",
    description: "Next-generation processing power for complex travel algorithms",
  },
  {
    icon: Server,
    title: "IoT Integration",
    description: "Seamless connectivity with smart devices and sensors",
  },
  {
    icon: Zap,
    title: "Edge Computing",
    description: "Ultra-fast processing with local AI models for instant responses",
  },
];

const dashboardStats = [
  { label: "Active Bookings", value: "1,247", change: "+12%" },
  { label: "Revenue Today", value: "$45,892", change: "+8%" },
  { label: "Customer Satisfaction", value: "98.5%", change: "+2%" },
  { label: "System Uptime", value: "99.9%", change: "+0.1%" },
];

const recentActivity = [
  { action: "Flight booked", detail: "NYC → Paris", time: "2 min ago", emoji: "✈️" },
  { action: "Hotel reserved", detail: "Luxury Suite", time: "5 min ago", emoji: "🏨" },
  { action: "Payment processed", detail: "$1,299", time: "8 min ago", emoji: "💳" },
];

const platforms = [
  { name: "iOS App", icon: Smartphone, features: ["Swift", "Core Data", "PushKit"] },
  { name: "Android App", icon: Smartphone, features: ["Kotlin", "Room", "WorkManager"] },
  { name: "Web Platform", icon: Monitor, features: ["React", "Next.js", "TypeScript"] },
  { name: "Admin Dashboard", icon: Settings, features: ["Vue.js", "Node.js", "MongoDB"] },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed roadmap.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create stunning UI/UX designs and interactive prototypes.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build robust features with comprehensive testing.",
    icon: Code,
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch your app and provide ongoing maintenance.",
    icon: Rocket,
  },
];

const techStack = [
  { icon: Code, title: "React Native", category: "Frontend" },
  { icon: Code, title: "TypeScript", category: "Frontend" },
  { icon: Palette, title: "Tailwind CSS", category: "Frontend" },
  { icon: Database, title: "Redux Toolkit", category: "Frontend" },
  { icon: Server, title: "Node.js", category: "Backend" },
  { icon: Server, title: "Express.js", category: "Backend" },
  { icon: Database, title: "PostgreSQL", category: "Backend" },
  { icon: Cloud, title: "AWS", category: "Cloud & DevOps" },
  { icon: Package, title: "Docker", category: "Cloud & DevOps" },
  { icon: Server, title: "Kubernetes", category: "Cloud & DevOps" },
  { icon: Zap, title: "CI/CD", category: "Cloud & DevOps" },
];

const techCategories = Array.from(new Set(techStack.map((t) => t.category))).map((cat) => ({
  title: cat,
  items: techStack.filter((t) => t.category === cat),
}));

const integrations = [
  { icon: CreditCard, name: "Payment Gateways", items: ["Stripe", "PayPal", "Square", "Apple Pay"] },
  { icon: MapPin, name: "Maps & Location", items: ["Google Maps", "Mapbox", "Geocoding", "Geofencing"] },
  { icon: TrendingUp, name: "Analytics", items: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar"] },
  { icon: Bell, name: "Communication", items: ["Twilio", "SendGrid", "Firebase", "OneSignal"] },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Travel App Development Services",
      description:
        "Custom travel apps: flight and hotel bookings, itinerary management, and seamless travel planning.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Travel App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Travel App",
          item: "https://www.ctasis.com/solutions/travel-app",
        },
      ],
    },
  ],
};

const WanderlustMockup = () => (
  <div className="relative hidden sm:block">
    <div className="mx-auto w-[260px] sm:w-[280px] rounded-[1.5rem] border-[6px] border-slate-800 bg-slate-900 p-2 shadow-2xl">
      <div className="rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-slate-100 to-blue-100 p-4 relative min-h-[420px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: NAVY }}>
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm text-slate-800">Wanderlust</span>
          </div>
          <div className="flex items-center gap-1">
            <Signal className="w-3 h-3 text-slate-500" />
            <Wifi className="w-3 h-3 text-slate-500" />
            <Battery className="w-4 h-3 text-slate-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 mb-3 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-400">Search destinations...</span>
          </div>
        </div>

        <div className="space-y-3 mb-14">
          <div className="bg-white rounded-xl p-3 shadow-lg border border-slate-200">
            <div className="w-full h-20 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg mb-2 relative">
              <div className="absolute top-1.5 right-1.5 bg-white/90 rounded-full p-1">
                <Heart className="w-3 h-3 text-red-500" />
              </div>
            </div>
            <div className="h-2.5 bg-slate-200 rounded w-3/4 mb-1" />
            <div className="h-2 bg-slate-200 rounded w-1/2 mb-2" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-current" />
                <span className="text-xs text-slate-600">4.8</span>
              </div>
              <span className="text-xs text-slate-500">From $599</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-200">
            <div className="w-full h-14 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg mb-2 relative">
              <div className="absolute top-1 right-1 bg-white/90 rounded-full p-1">
                <Clock className="w-2.5 h-2.5 text-green-500" />
              </div>
            </div>
            <div className="h-2 bg-slate-200 rounded w-2/3 mb-1" />
            <div className="h-2 bg-slate-200 rounded w-1/3" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white rounded-xl p-2.5 shadow-lg border border-slate-200">
            <div className="flex items-center justify-around">
              <Plane className="w-5 h-5" style={{ color: CYAN }} />
              <Search className="w-5 h-5 text-slate-400" />
              <Heart className="w-5 h-5 text-slate-400" />
              <Users className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden md:flex items-center gap-2"
    >
      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: NAVY }}>
        <Plane className="w-4 h-4 text-white" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-800">Live</div>
        <div className="text-[10px] text-slate-500">Booking</div>
      </div>
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-2 -left-2 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <Clock className="w-3.5 h-3.5" />
      24h Support
    </motion.div>
  </div>
);

const TravelDashboardMockup = () => (
  <div className="relative">
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: NAVY }}>
            <Plane className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`${fraunces.className} text-lg font-medium text-slate-900`}>Travel Dashboard</h3>
            <p className="text-xs text-slate-500">Real-time analytics &amp; insights</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-400" />
          <span className="text-xs font-medium text-emerald-600">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-[#F6F8FA] border border-slate-100 p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] sm:text-xs text-slate-500">{stat.label}</span>
              <span className="text-[10px] font-bold text-emerald-600">{stat.change}</span>
            </div>
            <div className={`${fraunces.className} text-base sm:text-lg font-medium`} style={{ color: NAVY }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-sm font-semibold text-slate-800 mb-3">Recent Activity</h4>
      <div className="space-y-2">
        {recentActivity.map((item) => (
          <div key={item.action} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F6F8FA]">
            <span className="text-lg">{item.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-slate-800">{item.action}</div>
              <div className="text-[10px] text-slate-500">{item.detail}</div>
            </div>
            <span className="text-[10px] text-slate-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
    <span className="absolute -top-3 -right-3 rounded-full px-3 py-1 text-[10px] font-semibold text-white shadow-lg bg-emerald-500">
      Live Data
    </span>
    <span className="absolute -bottom-3 -left-3 rounded-full px-3 py-1 text-[10px] font-semibold text-white shadow-lg bg-purple-500">
      Real-time
    </span>
  </div>
);

export default function TravelAppPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — split-screen */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label="Travel App Development"
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
                  <Sparkles className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  #1 Travel Platform
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Explore{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    The World
                  </span>{" "}
                  with Confidence
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Build the ultimate travel experience with AI-powered booking, real-time updates, and seamless user
                  interfaces that keep travelers coming back.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Rocket className="w-4 h-4" />
                    Start Building
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <Play className="w-4 h-4" />
                    View Portfolios
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4" role="list" aria-label="Platform statistics">
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
                        {stat.number.match(/^[\d.$]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#93A3AF]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <WanderlustMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro strip — centered banner */}
        <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80" aria-label="Travel App Development overview">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
            <motion.div {...fadeUp}>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-3`}>
                Travel App Development
              </h2>
              <p className="text-base sm:text-lg text-slate-500">
                Complete solutions for modern travel booking platforms
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose — 4-col metrics grid */}
        <SectionWrap>
          <SectionHeader
            badge="Why Choose Us"
            title="The Complete"
            highlight="Travel Booking Solution"
            description="From concept to launch, we provide everything you need to build a successful travel booking platform."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {travelFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-all"
              >
                <IconBox icon={feature.icon} />
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-4 mb-2`}>{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{feature.description}</p>
                <div className="text-xs font-semibold" style={{ color: CYAN }}>
                  {feature.metric.match(/^[\d.]+/) ? (
                    <>
                      <AnimatedStat value={feature.metric.match(/^[\d.]+/)![0]} />
                      {feature.metric.replace(/^[\d.]+/, "")}
                    </>
                  ) : (
                    feature.metric
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Next-Gen — split feature stack + dashboard mockup */}
        <SectionWrap alt>
          <SectionHeader
            badge="Next-Gen Travel Technology"
            title="Revolutionary Features for"
            highlight="Smart Travel"
            description="Experience the future of travel with AI-powered intelligence, blockchain security, and immersive AR experiences that transform how you explore the world."
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-12">
            <div className="space-y-4">
              {nextGenFeatures.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-[1.25rem] border border-slate-200/80 bg-white p-5 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <IconBox icon={feature.icon} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className={`${fraunces.className} text-base font-medium text-slate-900`}>{feature.title}</h3>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EAF3F8] text-slate-700 flex-shrink-0">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <TravelDashboardMockup />
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {bottomFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="text-center rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${CYAN}18` }}>
                  <feature.icon className="w-7 h-7" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Platforms — 2x2 grid */}
        <SectionWrap>
          <SectionHeader
            badge="Platforms"
            title="Multi-Platform"
            highlight="Development"
            description="Build once, deploy everywhere. Our solutions work seamlessly across all major platforms."
          />
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {platforms.map((platform, i) => (
              <motion.article
                key={platform.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                <IconBox icon={platform.icon} />
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mt-5 mb-4`}>{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Process — numbered horizontal stepper */}
        <SectionWrap alt>
          <SectionHeader
            badge="Our Process"
            title="How We Build"
            highlight="Your Travel App"
            description="From discovery and planning through deployment and ongoing support."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {processSteps.map((step, i) => (
              <motion.article
                key={step.step}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-all"
              >
                <span className={`${fraunces.className} text-3xl font-medium absolute top-5 right-5`} style={{ color: `${CYAN}55` }}>
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: NAVY }}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 -translate-y-1/2"
                    style={{ backgroundColor: CYAN }}
                    aria-hidden="true"
                  />
                )}
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Tech Stack — 2x2 category grid */}
        <SectionWrap>
          <SectionHeader
            badge="Technology"
            title="Technology"
            highlight="Stack"
            description="We use cutting-edge technologies to build scalable and high-performance travel applications."
          />
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
            {techCategories.map((cat, ci) => (
              <motion.article
                key={cat.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: ci * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{cat.title}</h3>
                  <span className="h-0.5 flex-1 max-w-[48px] rounded-full" style={{ backgroundColor: CYAN }} aria-hidden="true" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.title}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-[#F6F8FA] p-3"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                        <tech.icon className="w-4 h-4" style={{ color: NAVY }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{tech.title}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
            <Plane className="w-4 h-4" style={{ color: CYAN }} />
            Explore our{" "}
            <Link href="/solutions/hotel-booking-app" className="font-semibold hover:underline" style={{ color: NAVY }}>
              hotel booking app
            </Link>{" "}
            and{" "}
            <Link href="/solutions/ticket-booking-app" className="font-semibold hover:underline" style={{ color: NAVY }}>
              ticket booking app
            </Link>{" "}
            solutions
          </motion.p>
        </SectionWrap>

        {/* Integrations — horizontal snap-scroll */}
        <SectionWrap alt>
          <SectionHeader
            badge="Integrations"
            title="Integrations &"
            highlight="APIs"
            description="Connect with payment gateways, maps, analytics, and communication services."
          />
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {integrations.map((integration, i) => (
                <motion.article
                  key={integration.name}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={integration.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-4`}>{integration.name}</h3>
                    <ul className="space-y-2">
                      {integration.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Transform Your Travel Business"
          description="Let's build the next generation of travel technology together."
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
