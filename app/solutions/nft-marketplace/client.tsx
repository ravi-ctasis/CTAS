"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Database,
  BarChart3,
  Palette,
  Code,
  Server,
  Network,
  Star,
  CheckCircle2,
  Cloud,
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
  { number: "$2.5B+", label: "Trading Volume" },
  { number: "500K+", label: "Active Users" },
  { number: "99.9%", label: "Uptime" },
];

const keyHighlights = [
  {
    icon: Wallet,
    title: "Secure Wallet Integration",
    description: "Multi-chain wallet support with advanced security features",
  },
  {
    icon: TrendingUp,
    title: "Real-time Trading",
    description: "Instant buy/sell with real-time price updates and market data",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive market analysis and portfolio tracking tools",
  },
  {
    icon: Users,
    title: "Community Features",
    description: "Social trading, collections, and community engagement tools",
  },
  {
    icon: Globe,
    title: "Cross-Chain Support",
    description: "Trade NFTs across multiple blockchain networks seamlessly",
  },
  {
    icon: Zap,
    title: "AI-Powered Discovery",
    description: "Smart recommendations and trending NFT discovery",
  },
];

const features = [
  {
    icon: Network,
    title: "Multi-Chain Support",
    description: "Trade NFTs across Ethereum, Polygon, BSC, and other networks",
  },
  {
    icon: Code,
    title: "Smart Contracts",
    description: "Custom smart contracts for minting, trading, and royalties",
  },
  {
    icon: BarChart3,
    title: "Marketplace Analytics",
    description: "Real-time market data, trends, and portfolio analytics",
  },
  {
    icon: Palette,
    title: "Creator Tools",
    description: "Advanced tools for artists and creators to mint and sell",
  },
  {
    icon: TrendingUp,
    title: "Auction System",
    description: "Dutch and English auction formats with bidding mechanisms",
  },
  {
    icon: Zap,
    title: "Gas Optimization",
    description: "Optimized transactions to minimize gas fees and costs",
  },
  {
    icon: Wallet,
    title: "Royalty Management",
    description: "Automatic royalty distribution to creators on secondary sales",
  },
  {
    icon: Database,
    title: "Collection Management",
    description: "Organize and manage NFT collections with metadata",
  },
];

const platforms = [
  {
    icon: Smartphone,
    name: "iOS App",
    description: "Native iOS app with Apple Pay integration",
    features: ["Swift UI", "Core Data", "ARKit Support"],
  },
  {
    icon: Smartphone,
    name: "Android App",
    description: "Android app with Google Pay integration",
    features: ["Kotlin", "Jetpack Compose", "Material Design"],
  },
  {
    icon: Monitor,
    name: "Web Platform",
    description: "Responsive web application with PWA support",
    features: ["React.js", "Next.js", "Web3.js"],
  },
  {
    icon: Tablet,
    name: "Tablet App",
    description: "Optimized tablet experience for larger screens",
    features: ["Adaptive UI", "Touch Gestures", "Split View"],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Maximize profits with advanced trading features and analytics",
  },
  {
    icon: Star,
    title: "Exceptional User Experience",
    description: "Intuitive interface designed for both beginners and experts",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description: "Built to handle millions of users and transactions",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with multi-layer protection",
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description: "Seamless experience across all devices and platforms",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights and reporting tools",
  },
];

const techStack = [
  { icon: Smartphone, title: "React Native", description: "Cross-platform mobile apps", category: "Mobile" },
  { icon: Smartphone, title: "Flutter", description: "Cross-platform mobile framework", category: "Mobile" },
  { icon: Smartphone, title: "Swift", description: "Native iOS development", category: "Mobile" },
  { icon: Smartphone, title: "Kotlin", description: "Native Android development", category: "Mobile" },
  { icon: Monitor, title: "React.js", description: "Web application library", category: "Web" },
  { icon: Monitor, title: "Next.js", description: "React framework for production", category: "Web" },
  { icon: Monitor, title: "Vue.js", description: "Progressive web framework", category: "Web" },
  { icon: Monitor, title: "Angular", description: "Enterprise web framework", category: "Web" },
  { icon: Server, title: "Node.js", description: "JavaScript runtime for backend", category: "Backend" },
  { icon: Server, title: "Python", description: "Backend and data processing", category: "Backend" },
  { icon: Code, title: "Solidity", description: "Smart contract development", category: "Blockchain" },
  { icon: Code, title: "Web3.js", description: "Ethereum JavaScript API", category: "Blockchain" },
  { icon: Code, title: "Ethereum", description: "Primary blockchain network", category: "Blockchain" },
  { icon: Code, title: "Polygon", description: "Layer 2 scaling solution", category: "Blockchain" },
  { icon: Database, title: "IPFS", description: "Decentralized file storage", category: "Storage" },
  { icon: Cloud, title: "AWS S3", description: "Cloud object storage", category: "Storage" },
  { icon: Cloud, title: "Firebase", description: "Real-time database and auth", category: "Cloud" },
  { icon: Database, title: "MongoDB", description: "NoSQL database for flexible data", category: "Database" },
  { icon: Database, title: "PostgreSQL", description: "Relational database system", category: "Database" },
  { icon: Server, title: "Docker", description: "Containerization platform", category: "DevOps" },
  { icon: Server, title: "Kubernetes", description: "Container orchestration", category: "DevOps" },
  { icon: Network, title: "GraphQL", description: "Flexible API query language", category: "API" },
  { icon: Network, title: "REST API", description: "RESTful web services", category: "API" },
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
      name: "NFT Marketplace Development Services",
      description:
        "Secure and scalable NFT marketplace platforms: minting, wallets, auctions, smart contracts, and multi-chain support.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "NFT Marketplace Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "NFT Marketplace",
          item: "https://www.ctasis.com/solutions/nft-marketplace",
        },
      ],
    },
  ],
};

const NFTTraderProMockup = () => (
  <div className="relative hidden sm:block">
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: CYAN }}>
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`${fraunces.className} text-base font-medium text-slate-900`}>NFT Trader Pro</h3>
            <p className="text-xs font-medium" style={{ color: CYAN }}>Live Trading</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-600 text-xs font-medium">Online</span>
        </div>
      </div>

      <div className="rounded-xl bg-[#F6F8FA] border border-slate-200/80 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-slate-800">Price Chart</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            ))}
          </div>
        </div>
        <div className="h-24 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 p-2 mb-2 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
            <path
              d="M0,80 L20,70 L40,60 L60,50 L80,40 L100,30 L120,35 L140,25 L160,20 L180,15 L200,10"
              stroke={CYAN}
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <span className="absolute top-1 left-1 text-[9px] font-semibold text-emerald-600">2.8 ETH</span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-semibold text-emerald-600">2.5 ETH</span>
          <span className="absolute bottom-1 right-1 text-[9px] font-semibold text-emerald-600">2.2 ETH</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-emerald-600">2.5 ETH</span>
            <span className="text-emerald-600 text-xs">+12.5%</span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>
          <span className="text-slate-500 text-[10px]">24h Change</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-xl p-3 border border-slate-200/80" style={{ backgroundColor: `${CYAN}08` }}>
          <div className="font-bold text-lg" style={{ color: NAVY }}>2.4K</div>
          <div className="text-slate-500 text-[10px]">Floor Price</div>
        </div>
        <div className="rounded-xl p-3 border border-slate-200/80 bg-[#F6F8FA]">
          <div className="font-bold text-lg" style={{ color: NAVY }}>156</div>
          <div className="text-slate-500 text-[10px]">Owners</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {["Buy", "Sell", "Bid"].map((action) => (
          <span
            key={action}
            className="text-center py-2 rounded-lg text-xs font-semibold text-white"
            style={{ backgroundColor: action === "Sell" ? "#e11d48" : action === "Bid" ? NAVY : CYAN }}
          >
            {action}
          </span>
        ))}
      </div>
    </div>
    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden md:flex items-center gap-1.5"
    >
      <Wallet className="w-4 h-4" style={{ color: CYAN }} />
      <span className="text-xs font-medium text-slate-700">Multi-Chain</span>
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-2 -left-2 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <Shield className="w-3.5 h-3.5" />
      Secure Trading
    </motion.div>
  </div>
);

export default function NFTMarketplace() {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="NFT Marketplace Development"
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
                  <Palette className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  NFT Marketplace Solution
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Digital Asset{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Trading Platform
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Build a secure, scalable NFT marketplace with advanced trading features, multi-chain support, and
                  AI-powered discovery for the next generation of digital assets.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
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
                <NFTTraderProMockup />
              </motion.div>
            </div>
          </div>
        </section>

        <SectionWrap>
          <SectionHeader
            badge="Key Highlights"
            title="Why NFT Marketplaces Built with Ctas"
            highlight="Succeed"
            description="Our NFT marketplace solutions ensure successful digital asset trading through advanced technology, security, and user experience."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {keyHighlights.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={item.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        <section className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader
              badge="Features"
              title="Advanced NFT Marketplace"
              highlight="Features"
              description="Comprehensive features designed for modern NFT marketplaces with security, scalability, and user experience at the core."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className={`rounded-[1.5rem] border border-slate-200/80 bg-[#F6F8FA] p-5 sm:p-6 hover:bg-white hover:shadow-md transition-all ${
                    i === 0 ? "sm:col-span-2 lg:col-span-2" : i === 3 ? "lg:row-span-1" : ""
                  }`}
                >
                  <IconBox icon={feature.icon} />
                  <h3 className={`${fraunces.className} text-base sm:text-lg font-medium text-slate-900 mt-4 mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <SectionWrap>
          <SectionHeader
            badge="Multi-Platform"
            title="Multi-Platform"
            highlight="NFT Solutions"
            description="Deploy your NFT marketplace across all platforms with native performance and seamless user experience."
          />
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {platforms.map((platform, i) => (
              <motion.article
                key={platform.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                    <platform.icon className="w-7 h-7" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>{platform.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{platform.description}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {platform.features.map((f) => (
                    <li
                      key={f}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F6F8FA] text-slate-600 border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-3 h-3" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap alt>
          <SectionHeader
            badge="Why Choose Us"
            title="Why Choose Our"
            highlight="NFT Marketplace Solution?"
            description="Experience the advantages of our comprehensive NFT marketplace development approach."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {benefits.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7 hover:shadow-lg transition-all ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                    <item.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap>
          <SectionHeader
            badge="Technology Stack"
            title="Technology"
            highlight="Stack"
            description="Built with cutting-edge technologies for performance, security, and scalability."
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
                <Code className="w-4 h-4" style={{ color: CYAN }} />
                See our{" "}
                <Link href="/services/custom-software" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  custom software
                </Link>{" "}
                and{" "}
                <Link href="/solutions/e-commerce" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  e-commerce
                </Link>{" "}
                solutions
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Build Your NFT Marketplace?"
          description="Join the digital asset revolution with our comprehensive NFT marketplace solution."
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
