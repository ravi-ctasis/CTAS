"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Shield,
  Zap,
  CheckCircle2,
  Star,
  Database,
  Cloud,
  Brain,
  Wallet,
  Lock,
  QrCode,
  Send,
  DollarSign,
  TrendingUp,
  BarChart3,
  Users,
  Smartphone,
  Monitor,
  Bell,
  RadioReceiver,
  ArrowRight,
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

const heroBenefits = [
  "Bank-Grade Security",
  "Instant Transfers",
  "Global Payments",
  "Web & Mobile Apps",
];

const highlights = [
  {
    icon: Shield,
    title: "99.9% Security Rate",
    description:
      "Our mobile wallet apps maintain exceptional security through advanced encryption, biometric authentication, and fraud detection systems.",
    items: ["Bank-grade encryption", "Biometric authentication", "Real-time fraud detection"],
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description:
      "Lightning-fast payment processing with real-time settlement and global reach for seamless cross-border transactions.",
    items: ["Real-time processing", "Global reach", "Low transaction fees"],
  },
  {
    icon: TrendingUp,
    title: "Revenue Generation",
    description:
      "Multiple monetization strategies including transaction fees, premium features, and merchant partnerships to maximize profitability.",
    items: ["Transaction fees", "Premium features", "Merchant partnerships"],
  },
];

const bottomStats = [
  { number: "2M+", label: "Active Users" },
  { number: "4.9★", label: "App Store Rating" },
  { number: "$28M+", label: "Transactions Processed" },
  { number: "99.9%", label: "Uptime Guarantee" },
];

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Bank-grade security with biometric authentication and encryption",
    benefits: ["Biometric authentication", "End-to-end encryption", "Fraud protection"],
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive money instantly across the globe",
    benefits: ["Real-time transfers", "Global reach", "Low fees"],
  },
  {
    icon: QrCode,
    title: "QR Payments",
    description: "Quick and contactless payments using QR codes",
    benefits: ["Contactless payments", "QR code scanning", "Merchant integration"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Comprehensive spending analytics and financial insights",
    benefits: ["Spending analytics", "Budget tracking", "Financial insights"],
  },
  {
    icon: DollarSign,
    title: "Multi-Currency Support",
    description: "Support for multiple currencies and exchange rates",
    benefits: ["Multiple currencies", "Real-time exchange rates", "Currency conversion"],
  },
  {
    icon: CreditCard,
    title: "Bill Payments",
    description: "Pay utility bills, subscriptions, and recurring payments",
    benefits: ["Utility bill payments", "Subscription management", "Recurring payments"],
  },
  {
    icon: TrendingUp,
    title: "Investment Tools",
    description: "Built-in investment options and portfolio management",
    benefits: ["Investment options", "Portfolio tracking", "Market insights"],
  },
  {
    icon: Star,
    title: "Loyalty & Rewards",
    description: "Earn points, cashback, and rewards on transactions",
    benefits: ["Cashback rewards", "Loyalty points", "Partner benefits"],
  },
  {
    icon: RadioReceiver,
    title: "NFC Payments",
    description: "Contactless payments using Near Field Communication",
    benefits: ["Contactless payments", "NFC technology", "Quick transactions"],
  },
  {
    icon: Users,
    title: "Split Bills",
    description: "Easily split expenses with friends and family",
    benefits: ["Group payments", "Expense splitting", "Payment reminders"],
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description: "Generate virtual cards for online transactions",
    benefits: ["Virtual card generation", "Online security", "Temporary cards"],
  },
];

const platforms = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    items: ["React Native & Flutter", "Native iOS & Android", "Biometric authentication", "Push notifications"],
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Responsive web apps accessible from any device",
    items: ["React.js & Next.js", "Progressive Web Apps", "Cross-browser compatibility", "SSL encryption"],
  },
  {
    icon: Users,
    title: "Cross-Platform Sync",
    description: "Seamless data synchronization across all platforms",
    items: ["Real-time sync", "Cloud storage", "User preferences", "Transaction history"],
  },
];

const benefits = [
  {
    icon: Shield,
    title: "User Trust & Security",
    description:
      "Advanced security features, encryption, and compliance standards that users can trust with their financial data.",
    items: ["Bank-grade security", "Regulatory compliance", "Fraud protection"],
  },
  {
    icon: Cloud,
    title: "Scalable Architecture",
    description: "Built with modern cloud technologies to handle growth from startup to enterprise scale.",
    items: ["Cloud-native design", "Auto-scaling", "High availability"],
  },
  {
    icon: TrendingUp,
    title: "Monetization Ready",
    description: "Multiple revenue streams including transaction fees, premium features, and merchant partnerships.",
    items: ["Transaction fees", "Premium features", "Merchant partnerships"],
  },
];

const techStack = [
  { icon: Smartphone, title: "React Native", description: "Cross-platform mobile development", category: "Mobile" },
  { icon: Smartphone, title: "Flutter", description: "Cross-platform mobile framework", category: "Mobile" },
  { icon: Monitor, title: "React.js", description: "Web application library", category: "Web" },
  { icon: Monitor, title: "Next.js", description: "React framework for production", category: "Web" },
  { icon: Monitor, title: "Angular", description: "Enterprise web framework", category: "Web" },
  { icon: Monitor, title: "Node.js", description: "JavaScript runtime for backend", category: "Backend" },
  { icon: Monitor, title: "Python", description: "Backend and data processing", category: "Backend" },
  { icon: Database, title: "MongoDB", description: "NoSQL database for flexible data", category: "Database" },
  { icon: Database, title: "PostgreSQL", description: "Relational database system", category: "Database" },
  { icon: Cloud, title: "AWS", description: "Cloud infrastructure and services", category: "Cloud" },
  { icon: Cloud, title: "Firebase", description: "Real-time database and auth", category: "Cloud" },
  { icon: Brain, title: "TensorFlow", description: "Machine learning framework", category: "AI/ML" },
  { icon: Brain, title: "OpenAI API", description: "AI-powered features and insights", category: "AI/ML" },
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
      name: "Mobile Wallet App Development Services",
      description:
        "Secure mobile wallet app development: UPI integration, digital payments, money transfers, and QR scanning.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Mobile Wallet App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mobile Wallet App",
          item: "https://www.ctasis.com/solutions/mobile-wallet-app",
        },
      ],
    },
  ],
};

const PayFlowMockup = () => (
  <div className="relative hidden sm:block">
    <div className="mx-auto w-[280px] sm:w-[300px] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-900 p-2 shadow-2xl">
      <div className="rounded-[2rem] overflow-hidden" style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}>
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: CYAN }}>
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-sm">PayFlow</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="rounded-xl p-4 mb-3 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${CYAN}, #1a7aa8)` }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80 text-xs font-medium">Total Balance</span>
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                <Lock className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div className="text-xl font-bold mb-1">$2,847.50</div>
            <div className="text-white/70 text-[10px]">Available for transactions</div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="rounded-xl bg-white/10 p-3 text-center">
              <Send className="w-6 h-6 mx-auto mb-1 text-emerald-300" />
              <div className="text-white font-semibold text-xs">Send Money</div>
            </div>
            <div className="rounded-xl bg-white/10 p-3 text-center">
              <QrCode className="w-6 h-6 mx-auto mb-1" style={{ color: CYAN_LIGHT }} />
              <div className="text-white font-semibold text-xs">Scan QR</div>
            </div>
          </div>

          <div className="rounded-xl bg-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/80 text-xs font-medium">Recent Transactions</span>
              <span className="text-white/60 text-[10px]">View All</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-xs">Coffee Shop</div>
                  <div className="text-white/70 text-[10px]">Today, 9:30 AM</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-xs">-$4.50</div>
                  <div className="text-white/60 text-[10px]">Completed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: CYAN }}>
                  <RadioReceiver className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-xs">John Smith</div>
                  <div className="text-white/70 text-[10px]">Yesterday, 3:15 PM</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold text-xs">+$25.00</div>
                  <div className="text-white/60 text-[10px]">Received</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden md:flex items-center gap-1.5"
    >
      <Shield className="w-4 h-4" style={{ color: CYAN }} />
      <span className="text-xs font-medium text-slate-700">Bank-Grade</span>
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-2 -left-2 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <Lock className="w-3.5 h-3.5" />
      Secure
    </motion.div>
  </div>
);

export default function MobileWalletAppPage() {
  const [activeHighlight, setActiveHighlight] = useState(0);
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
          aria-label="Mobile Wallet App Development"
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
                  Next-Gen Digital Payments
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Build the Future of{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Mobile Wallet Apps
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-6 max-w-xl">
                  Create secure, fast, and user-friendly mobile wallet applications that revolutionize digital payments
                  with cutting-edge technology and seamless user experiences across all platforms.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {heroBenefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#C7D2D9]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CYAN }} />
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
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
                    Get Free Demo
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <PayFlowMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Highlights — tabbed sidebar + animated stats */}
        <SectionWrap>
          <SectionHeader
            badge="Key Highlights"
            title="Why Mobile Wallet Apps Built with Ctas"
            highlight="Dominate the Market"
            description="Our proven approach combines cutting-edge technology with financial industry expertise to deliver apps that users trust and businesses profit from."
          />
          <div className="grid lg:grid-cols-[minmax(0,240px)_1fr] gap-6 lg:gap-10 items-start mb-12">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Key highlights">
              {highlights.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveHighlight(i)}
                  className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    activeHighlight === i
                      ? "text-white shadow-md"
                      : "text-slate-600 bg-white border border-slate-200/80 hover:border-[#13345A]/20"
                  }`}
                  style={activeHighlight === i ? { backgroundColor: NAVY } : undefined}
                  aria-current={activeHighlight === i ? "true" : undefined}
                >
                  {item.title}
                </button>
              ))}
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={highlights[activeHighlight].title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-5">
                  <IconBox icon={highlights[activeHighlight].icon} />
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
                      {highlights[activeHighlight].title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{highlights[activeHighlight].description}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {highlights[activeHighlight].items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 rounded-[1.75rem] border border-slate-200/80 bg-white p-6 sm:p-8"
            role="list"
            aria-label="Platform statistics"
          >
            {bottomStats.map((stat) => (
              <div key={stat.label} className="text-center" role="listitem">
                <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium mb-1`} style={{ color: NAVY }}>
                  {stat.number.match(/^[\d.$]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </SectionWrap>

        {/* Features — horizontal snap-scroll */}
        <SectionWrap alt>
          <SectionHeader
            badge="Core Features"
            title="Powerful Features for"
            highlight="Modern Digital Payments"
            description="Our mobile wallet app solution includes everything you need to create a secure and efficient payment platform"
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>{feature.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-1.5">
                      {feature.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        {/* Platforms — 2x2 asymmetric grid */}
        <SectionWrap>
          <SectionHeader
            badge="Multi-Platform"
            title="Multi-Platform"
            highlight="Payment Solutions"
            description="We build payment solutions across all platforms to reach your users wherever they are"
          />
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {platforms.map((platform, i) => (
              <motion.article
                key={platform.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-all ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
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
                <ul className="grid sm:grid-cols-2 gap-2">
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

        {/* Benefits — zigzag alternating rows */}
        <SectionWrap alt>
          <SectionHeader
            badge="Why Choose Us"
            title="Why Choose Our"
            highlight="Mobile Wallet App Solution?"
            description="Comprehensive features designed to maximize user trust and business success"
          />
          <div className="space-y-6 lg:space-y-8">
            {benefits.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex flex-col sm:flex-row gap-6 sm:gap-10 items-start rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full sm:w-1/3 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                    <item.icon className="w-7 h-7" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                  </div>
                </div>
                <ul className="w-full sm:w-2/3 grid sm:grid-cols-3 gap-2.5">
                  {item.items.map((li) => (
                    <li key={li} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {li}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Tech Stack — tabbed sidebar */}
        <SectionWrap>
          <SectionHeader
            badge="Technology Stack"
            title="Cutting-Edge"
            highlight="Technology Stack"
            description="Built with modern technologies to ensure security, performance, and user experience"
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
                <Wallet className="w-4 h-4" style={{ color: CYAN }} />
                See our{" "}
                <Link href="/services/custom-software" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  custom software
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
          title="Ready to Build Your Mobile Wallet App & Website?"
          description="Let's discuss how we can help you create secure payment solutions that transform lives and drive business growth across all platforms."
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
