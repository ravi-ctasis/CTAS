"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MessageCircle,
  Share2,
  Globe,
  Zap,
  Shield,
  Star,
  Camera,
  Video,
  TrendingUp,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Bell,
  Settings,
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  Twitter,
  Instagram,
  Ghost,
  Facebook,
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
  dark = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
  dark?: boolean;
}) => (
  <section
    className={`py-10 sm:py-12 lg:py-14 ${
      dark ? "bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40]" : alt ? "bg-white" : "bg-[#F6F8FA]"
    }`}
  >
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
  { icon: Zap, text: "Launch in 8-12 weeks" },
  { icon: Shield, text: "100% Custom Design" },
  { icon: Users, text: "AI Community Engine" },
  { icon: Globe, text: "Multi-Platform" },
];

const stats = [
  { number: "200+", label: "Social Apps Built" },
  { number: "5M+", label: "Users Connected" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

const features = [
  {
    icon: Users,
    title: "Community Building",
    description:
      "Create and manage communities, groups, and interest-based networks with advanced moderation tools.",
  },
  {
    icon: MessageCircle,
    title: "Real-time Communication",
    description:
      "Instant messaging, voice calls, video chat, and group conversations with end-to-end encryption.",
  },
  {
    icon: Share2,
    title: "Content Sharing",
    description:
      "Share photos, videos, stories, and live streams with advanced privacy controls and content moderation.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description:
      "Connect with users worldwide through location-based features, language support, and cultural integration.",
  },
  {
    icon: Zap,
    title: "Smart Recommendations",
    description: "AI-powered content discovery, friend suggestions, and personalized feed algorithms.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Advanced privacy settings, content control, and robust security measures to protect user data.",
  },
];

const communityFeatures = [
  {
    icon: Users,
    title: "Group Management",
    description:
      "Create public and private groups with role-based permissions, moderation tools, and content guidelines.",
  },
  {
    icon: MessageCircle,
    title: "Discussion Forums",
    description: "Threaded conversations, polls, and Q&A features to facilitate meaningful discussions.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Track community growth, engagement metrics, and member activity with detailed insights.",
  },
  {
    icon: Shield,
    title: "Moderation Tools",
    description: "AI-powered content filtering, user reporting, and automated moderation workflows.",
  },
];

const contentTools = [
  {
    icon: Camera,
    title: "Photo & Video",
    description: "High-quality media upload with filters, editing tools, and story features",
  },
  {
    icon: Video,
    title: "Live Streaming",
    description: "Real-time video streaming with chat, reactions, and recording capabilities",
  },
  {
    icon: MessageCircle,
    title: "Story Creation",
    description: "Ephemeral content with stickers, text overlays, and interactive elements",
  },
  {
    icon: Share2,
    title: "Content Sharing",
    description: "Cross-platform sharing with privacy controls and engagement tracking",
  },
];

const monetization = [
  {
    title: "Premium Subscriptions",
    description: "Tiered membership plans with exclusive features, content, and community access",
    icon: Star,
    features: ["Ad-free experience", "Premium content", "Advanced features"],
  },
  {
    title: "Advertising Platform",
    description: "Targeted advertising with analytics, sponsored content, and influencer partnerships",
    icon: TrendingUp,
    features: ["Targeted ads", "Sponsored posts", "Analytics dashboard"],
  },
  {
    title: "E-commerce Integration",
    description: "Direct selling capabilities with marketplace features and payment processing",
    icon: ShoppingBag,
    features: ["Product listings", "Payment processing", "Order management"],
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description:
      "All messages and data are encrypted using industry-standard protocols for maximum security.",
  },
  {
    icon: Settings,
    title: "Privacy Controls",
    description:
      "Granular privacy settings allowing users to control who sees their content and profile information.",
  },
  {
    icon: Bell,
    title: "Content Moderation",
    description: "AI-powered content filtering and human moderation to maintain community standards.",
  },
  {
    icon: Users,
    title: "User Verification",
    description: "Multi-factor authentication and identity verification to prevent fake accounts.",
  },
];

const securityMetrics = [
  { label: "Data Protection", value: "100%" },
  { label: "Uptime", value: "99.9%" },
  { label: "Compliance", value: "100%" },
];

const techStack = [
  { icon: Smartphone, title: "React Native", description: "Cross-platform mobile development", category: "Frontend" },
  { icon: Monitor, title: "Next.js", description: "Modern web framework", category: "Frontend" },
  { icon: Code, title: "TypeScript", description: "Type-safe development", category: "Frontend" },
  { icon: Server, title: "Node.js", description: "Scalable backend services", category: "Backend" },
  { icon: Server, title: "Python", description: "FastAPI & Django", category: "Backend" },
  { icon: Database, title: "MongoDB", description: "NoSQL database", category: "Database" },
  { icon: Database, title: "PostgreSQL", description: "Advanced SQL database", category: "Database" },
  { icon: Cloud, title: "AWS", description: "Cloud infrastructure", category: "Cloud & DevOps" },
  { icon: Cloud, title: "Firebase", description: "Google's backend service", category: "Cloud & DevOps" },
];

const techCategories = [
  { id: "all", title: "All", items: techStack },
  ...["Frontend", "Backend", "Database", "Cloud & DevOps"].map((cat) => ({
    id: cat.toLowerCase().replace(/[^a-z]/g, "-"),
    title: cat,
    items: techStack.filter((t) => t.category === cat),
  })),
];

const avatars = ["/team1.webp", "/team2.webp", "/team3.webp", "/team4.webp"];

const socialIcons = [
  { icon: Twitter, color: "bg-sky-500" },
  { icon: MessageCircle, color: "bg-green-500" },
  { icon: Instagram, color: "bg-pink-500" },
  { icon: Ghost, color: "bg-yellow-500" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Social Networking App Development Services",
      description:
        "Custom social networking apps: real-time messaging, news feeds, friend connections, and engaging community features.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Social Networking App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Social Networking App",
          item: "https://www.ctasis.com/solutions/social-networking-app",
        },
      ],
    },
  ],
};

const CommunityOrbitMockup = () => (
  <div className="relative hidden sm:flex items-center justify-center w-full h-[400px] lg:h-[480px]">
    <div className="absolute w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] rounded-full border-2 border-dashed border-white/20 animate-[spin_30s_linear_infinite]" aria-hidden="true" />
    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center text-white shadow-2xl z-20">
      <Facebook className="w-10 h-10 lg:w-12 lg:h-12" />
    </div>
    {avatars.map((src, i) => {
      const angle = (i / avatars.length) * 2 * Math.PI;
      const radius = 130;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return (
        <div
          key={src}
          className="absolute z-10"
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <Image
            src={src}
            alt={`Community member ${i + 1}`}
            width={64}
            height={64}
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      );
    })}
    {socialIcons.map((item, i) => {
      const angle = ((i + 0.5) / socialIcons.length) * 2 * Math.PI;
      const radius = 185;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const Icon = item.icon;
      return (
        <div
          key={i}
          className={`absolute ${item.color} w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white shadow-lg z-10`}
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
        </div>
      );
    })}
  </div>
);

const CommunityStatsMockup = () => (
  <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-xl">
    <div className="text-center mb-6">
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: NAVY }}>
        <Users className="w-7 h-7 text-white" />
      </div>
      <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>Community Stats</h3>
      <p className="text-xs text-slate-500">Live community data</p>
    </div>
    <div className="space-y-3">
      {[
        { label: "Active Users", value: "15.2K", icon: Users, bg: "bg-blue-50" },
        { label: "Groups Created", value: "847", icon: MessageCircle, bg: "bg-emerald-50" },
        { label: "Posts Today", value: "2.1K", icon: Share2, bg: "bg-purple-50" },
      ].map((item) => (
        <div key={item.label} className={`flex items-center justify-between p-3 rounded-xl ${item.bg}`}>
          <div>
            <div className="text-xs text-slate-500">{item.label}</div>
            <div className="text-lg font-bold" style={{ color: NAVY }}>{item.value}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <item.icon className="w-5 h-5" style={{ color: CYAN }} />
          </div>
        </div>
      ))}
      <div className="mt-4 p-4 rounded-xl bg-[#F6F8FA] text-center">
        <div className={`${fraunces.className} text-2xl font-medium text-slate-900 mb-1`}>98%</div>
        <div className="text-xs text-slate-500">User Satisfaction</div>
      </div>
    </div>
  </div>
);

const SecurityScoreMockup = () => (
  <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl">
    <div className="text-center mb-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center mx-auto mb-3">
        <Shield className="w-8 h-8 text-white" />
      </div>
      <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>Security Score</h3>
      <p className="text-sm text-slate-500">Platform security metrics</p>
    </div>
    <div className="space-y-4">
      {securityMetrics.map((metric) => (
        <div key={metric.label} className="flex items-center justify-between p-3 rounded-xl bg-[#F6F8FA]">
          <span className="text-sm font-medium text-slate-700">{metric.label}</span>
          <div className="flex items-center gap-2">
            <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full rounded-full"
                style={{ backgroundColor: CYAN }}
              />
            </div>
            <span className="text-sm font-semibold text-slate-800 w-12 text-right">{metric.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function SocialNetworkingAppPage() {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — split-screen with orbit */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Social Networking App Development"
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
                  <Users className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  #1 Social Networking App Development
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Build Your{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Community
                  </span>{" "}
                  Platform
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Create a powerful social networking app that connects people, builds communities, and fosters
                  meaningful relationships. AI-powered recommendations, real-time communication, and scalable
                  architecture.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {heroBenefits.map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-2 text-sm text-[#93A3AF]">
                      <benefit.icon className="w-4 h-4 flex-shrink-0" style={{ color: CYAN_LIGHT }} />
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Play className="w-4 h-4" />
                    Get Free Quote
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    View Portfolios
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <CommunityOrbitMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats — dark band with animated counters */}
        <SectionWrap dark>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center rounded-2xl bg-white/[0.05] border border-white/10 p-5 sm:p-6"
              >
                <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-[#F2F6F9] mb-2`}>
                  {stat.number.match(/^[\d.]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
                </div>
                <div className="text-sm text-[#93A3AF]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        {/* Features — horizontal snap-scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Core Features"
            title="Social Networking"
            highlight="Features"
            description="Build a comprehensive social platform with all the features users expect and innovative tools that set you apart."
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

        {/* Community — split list + stats mockup */}
        <SectionWrap alt>
          <SectionHeader
            badge="Community Features"
            title="Build Thriving"
            highlight="Communities"
            description="Advanced tools to create, manage, and grow engaged communities around shared interests and goals."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="space-y-6">
              {communityFeatures.map((item, i) => (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-4"
                >
                  <IconBox icon={item.icon} />
                  <div>
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <CommunityStatsMockup />
            </motion.div>
          </div>
        </SectionWrap>

        {/* Content Creation — 4-col icon grid */}
        <SectionWrap>
          <SectionHeader
            badge="Content Creation"
            title="Rich Content"
            highlight="Tools"
            description="Powerful tools for creating, editing, and sharing multimedia content that engages your community."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contentTools.map((tool, i) => (
              <motion.article
                key={tool.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-all text-center sm:text-left"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto sm:mx-0 mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: NAVY }}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{tool.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Monetization — 3 comparison cards */}
        <SectionWrap alt>
          <SectionHeader
            badge="Monetization"
            title="Revenue"
            highlight="Generation"
            description="Multiple revenue streams to monetize your social platform and ensure sustainable growth."
          />
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {monetization.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-[#F6F8FA] flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2 text-center`}>{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 text-center">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Security — split with progress visualization */}
        <SectionWrap>
          <SectionHeader
            badge="Security & Privacy"
            title="Enterprise-Grade"
            highlight="Security"
            description="Protect your users and platform with advanced security measures and privacy controls."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="space-y-6">
              {securityFeatures.map((item, i) => (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-4"
                >
                  <IconBox icon={item.icon} />
                  <div>
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <SecurityScoreMockup />
            </motion.div>
          </div>
        </SectionWrap>

        {/* Tech Stack — tabbed sidebar */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology Stack"
            title="Powered by Cutting-Edge"
            highlight="Technologies"
            description="We leverage the latest technologies to build fast, secure, and scalable social networking applications."
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
                <Users className="w-4 h-4" style={{ color: CYAN }} />
                Explore our{" "}
                <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  mobile app development
                </Link>{" "}
                and{" "}
                <Link href="/solutions/influencer-marketing-app" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  influencer marketing app
                </Link>{" "}
                solutions
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Build Your Social Network?"
          description="Join the ranks of successful social platforms built by Ctas. Get started with a free consultation and project estimate."
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
