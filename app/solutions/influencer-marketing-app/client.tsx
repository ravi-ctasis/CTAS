"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  TrendingUp,
  Star,
  MessageCircle,
  Calendar,
  Target,
  BarChart3,
  Zap,
  Award,
  DollarSign,
  Smartphone,
  Monitor,
  Database,
  Cloud,
  Brain,
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
  { number: "50K+", label: "Creators" },
  { number: "$2.5B+", label: "Revenue Generated" },
  { number: "95%", label: "Success Rate" },
];

const features = [
  {
    icon: Users,
    title: "Creator Discovery",
    description:
      "Find the perfect influencers across all social media platforms with advanced filtering and AI-powered matching.",
  },
  {
    icon: Target,
    title: "Campaign Management",
    description:
      "Create, track, and manage influencer campaigns with real-time analytics and performance insights.",
  },
  {
    icon: BarChart3,
    title: "Analytics & ROI",
    description:
      "Comprehensive analytics dashboard with ROI tracking, engagement metrics, and campaign performance.",
  },
  {
    icon: MessageCircle,
    title: "Communication Hub",
    description: "Built-in messaging system for seamless collaboration between brands and influencers.",
  },
  {
    icon: Calendar,
    title: "Content Scheduling",
    description: "Schedule and coordinate content across multiple platforms with automated posting.",
  },
  {
    icon: Star,
    title: "Performance Tracking",
    description:
      "Track influencer performance, engagement rates, and audience demographics in real-time.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Reach",
    description: "Tap into influencer audiences to expand your brand reach exponentially.",
  },
  {
    icon: Target,
    title: "Targeted Marketing",
    description: "Reach your exact target audience through carefully selected influencers.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description: "Track campaign performance with detailed analytics and ROI metrics.",
  },
  {
    icon: Users,
    title: "Authentic Engagement",
    description: "Build genuine connections with audiences through trusted influencers.",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Launch campaigns quickly with our streamlined influencer discovery and management tools.",
  },
  {
    icon: Award,
    title: "Brand Credibility",
    description: "Enhance brand credibility through partnerships with respected influencers.",
  },
];

const campaignTypes = [
  {
    icon: Target,
    title: "Product Launch",
    description:
      "Launch new products with strategic influencer partnerships and coordinated content campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Brand Awareness",
    description:
      "Increase brand visibility and reach new audiences through authentic influencer partnerships.",
  },
  {
    icon: DollarSign,
    title: "Sales & Conversions",
    description: "Drive sales and conversions with performance-based influencer marketing campaigns.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Build engaged communities around your brand with long-term influencer relationships.",
  },
];

const techStack = [
  { icon: Smartphone, title: "React Native", description: "Cross-platform mobile development", category: "Mobile" },
  { icon: Smartphone, title: "Flutter", description: "Cross-platform mobile framework", category: "Mobile" },
  { icon: Monitor, title: "React.js", description: "Web application library", category: "Web" },
  { icon: Monitor, title: "Next.js", description: "React framework for production", category: "Web" },
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
      name: "Influencer Marketing App Development Services",
      description:
        "Custom influencer marketing apps: campaign management, influencer discovery, analytics, and collaboration tools.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Influencer Marketing App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Influencer Marketing App",
          item: "https://www.ctasis.com/solutions/influencer-marketing-app",
        },
      ],
    },
  ],
};

const feedItems = [
  { initials: "SJ", name: "New Post Live", handle: "@sarahjohnson • 2 min ago", metric: "1.2K likes", color: "from-pink-500 to-purple-500" },
  { initials: "MC", name: "Live Stream Active", handle: "@mikechen • Live now", metric: "2.1K watching", color: "from-red-500 to-orange-500" },
  { initials: "ED", name: "Story Update", handle: "@emmadavis • 5 min ago", metric: "856 views", color: "from-blue-500 to-cyan-500" },
];

const SocialCommandCenterMockup = () => (
  <div className="relative hidden sm:block">
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: NAVY }}>
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`${fraunces.className} text-base font-medium text-slate-900`}>Social Command Center</h3>
            <p className="text-xs font-medium" style={{ color: CYAN }}>Multi-Platform Control</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: CYAN }} />
          <span className="text-xs font-medium" style={{ color: CYAN }}>Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-xl p-3 border border-slate-200/80 bg-[#F6F8FA]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-900">Instagram</span>
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
          </div>
          <div className="text-[10px] text-slate-500">2.5M Reach</div>
          <div className="text-[10px] text-pink-600 font-medium">8.2% Engagement</div>
        </div>
        <div className="rounded-xl p-3 border border-slate-200/80 bg-[#F6F8FA]">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-900">YouTube</span>
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          </div>
          <div className="text-[10px] text-slate-500">1.8M Views</div>
          <div className="text-[10px] text-red-600 font-medium">12.5% CTR</div>
        </div>
      </div>

      <div className="rounded-xl bg-[#F6F8FA] border border-slate-200/80 p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-slate-800">Live Content Feed</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CYAN }} />
            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </div>
        </div>
        <div className="space-y-2">
          {feedItems.map((item) => (
            <div key={item.initials} className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-100">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-[10px] font-bold">{item.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-slate-900">{item.name}</div>
                <div className="text-[10px] text-slate-500">{item.handle}</div>
              </div>
              <div className="text-[10px] font-semibold" style={{ color: CYAN }}>{item.metric}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-semibold text-slate-800">Real-time Metrics</h4>
          <span className="text-[10px] font-medium" style={{ color: CYAN }}>Live</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: "2.4M", label: "Total Reach" },
            { value: "6.5%", label: "Engagement" },
            { value: "$89K", label: "Revenue" },
          ].map((m) => (
            <div key={m.label} className="text-center p-2.5 rounded-lg bg-[#F6F8FA] border border-slate-200/80">
              <div className="font-bold text-sm" style={{ color: NAVY }}>{m.value}</div>
              <div className="text-[10px] text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <span className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white" style={{ backgroundColor: NAVY }}>
          <MessageCircle className="w-3.5 h-3.5" />
          Schedule Post
        </span>
        <span className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white" style={{ backgroundColor: CYAN }}>
          <TrendingUp className="w-3.5 h-3.5" />
          View Analytics
        </span>
      </div>
    </div>
    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden md:flex items-center gap-1.5"
    >
      <Users className="w-4 h-4" style={{ color: CYAN }} />
      <span className="text-xs font-medium text-slate-700">50K+ Creators</span>
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-2 -left-2 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <TrendingUp className="w-3.5 h-3.5" />
      95% Success
    </motion.div>
  </div>
);

export default function InfluencerMarketingApp() {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Influencer Marketing App Development"
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
                  Influencer Marketing Platform
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Connect Brands with{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Top Creators
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  The ultimate platform for brands to discover, collaborate with, and manage influencer marketing
                  campaigns. Connect with authentic creators and drive real results.
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
                <SocialCommandCenterMockup />
              </motion.div>
            </div>
          </div>
        </section>

        <SectionWrap>
          <SectionHeader
            badge="Key Features"
            title="Everything You Need for"
            highlight="Successful Influencer Marketing"
            description="Our comprehensive platform provides all the tools needed to discover, connect with, and manage influencer marketing campaigns effectively."
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

        <SectionWrap alt>
          <SectionHeader
            badge="Benefits"
            title="Why Choose Our"
            highlight="Influencer Marketing Platform?"
            description="Experience the advantages of our comprehensive influencer marketing solution."
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
                <IconBox icon={item.icon} />
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-4 mb-2`}>{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap>
          <SectionHeader
            badge="Campaign Types"
            title="Campaign Types"
            highlight="We Support"
            description="From product launches to brand awareness, we support all types of influencer marketing campaigns."
          />
          <div className="space-y-6 lg:space-y-8">
            {campaignTypes.map((item, i) => (
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
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{item.title}</h3>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap alt>
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
                <Users className="w-4 h-4" style={{ color: CYAN }} />
                Explore our{" "}
                <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  mobile app development
                </Link>{" "}
                and{" "}
                <Link href="/services/custom-software" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  custom software
                </Link>{" "}
                services
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Transform Your Influencer Marketing?"
          description="Join thousands of brands already using our platform to connect with top creators and drive real results."
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
