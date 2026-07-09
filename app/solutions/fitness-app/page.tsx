"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Dumbbell,
  Heart,
  Monitor,
  Smartphone,
  Users,
  Zap,
  Target,
  Award,
  CheckCircle2,
  Star,
  Play,
  Download,
  Database,
  Cloud,
  Brain,
  ArrowRight,
  Server,
  Code,
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
  "AI-Powered Workouts",
  "Real-time Analytics",
  "Cross-Platform Sync",
  "Web & Mobile Apps",
];

const bottomStats = [
  { number: "500K+", label: "Active Users" },
  { number: "4.8★", label: "App Store Rating" },
  { number: "$2M+", label: "Revenue Generated" },
  { number: "99.9%", label: "Uptime Guarantee" },
];

const highlights = [
  {
    icon: Zap,
    title: "95% User Retention",
    description:
      "Our fitness apps maintain exceptional user engagement through personalized experiences, gamification, and social features that keep users coming back.",
    bullets: [
      "Personalized workout plans",
      "Progress tracking & analytics",
      "Social challenges & leaderboards",
    ],
    span: "md:col-span-2 lg:row-span-2",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Leverage machine learning algorithms to provide intelligent workout recommendations, form analysis, and predictive health insights.",
    bullets: ["Smart workout suggestions", "Real-time form feedback", "Predictive health analytics"],
    span: "",
  },
  {
    icon: Award,
    title: "Revenue Generation",
    description:
      "Multiple monetization strategies including premium subscriptions, in-app purchases, and affiliate partnerships to maximize profitability.",
    bullets: ["Subscription tiers", "Premium features", "Affiliate partnerships"],
    span: "",
  },
];

const features = [
  {
    id: "workout-tracking",
    icon: Activity,
    title: "Workout Tracking",
    description: "Track your workouts, sets, reps, and progress over time",
    benefits: ["Progress monitoring", "Performance analytics", "Goal setting"],
  },
  {
    id: "nutrition-planning",
    icon: Heart,
    title: "Nutrition Planning",
    description: "Plan meals, track macros, and maintain healthy eating habits",
    benefits: ["Macro tracking", "Meal planning", "Calorie counting"],
  },
  {
    id: "social-features",
    icon: Users,
    title: "Social Features",
    description: "Connect with friends, join challenges, and share achievements",
    benefits: ["Friend challenges", "Community support", "Achievement sharing"],
  },
  {
    id: "personal-training",
    icon: Target,
    title: "Personal Training",
    description: "AI-powered workout recommendations and form guidance",
    benefits: ["AI recommendations", "Form guidance", "Personalized plans"],
  },
];

const platforms = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    bullets: ["React Native & Flutter", "Native iOS & Android", "Offline functionality", "Push notifications"],
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Responsive web apps accessible from any device",
    bullets: ["React.js & Next.js", "Progressive Web Apps", "Cross-browser compatibility", "SEO optimized"],
  },
  {
    icon: Users,
    title: "Cross-Platform Sync",
    description: "Seamless data synchronization across all platforms",
    bullets: ["Real-time sync", "Cloud storage", "User preferences", "Progress tracking"],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "User Engagement",
    description:
      "Advanced gamification, social features, and personalized content keep users motivated and engaged.",
    bullets: ["Gamified challenges", "Social interactions", "Progress tracking"],
  },
  {
    icon: Cloud,
    title: "Scalable Architecture",
    description:
      "Built with modern cloud technologies to handle growth from startup to enterprise scale.",
    bullets: ["Cloud-native design", "Auto-scaling", "High availability"],
  },
  {
    icon: Award,
    title: "Monetization Ready",
    description:
      "Multiple revenue streams including subscriptions, in-app purchases, and premium features.",
    bullets: ["Subscription plans", "Premium features", "In-app purchases"],
  },
];

const techCategories = [
  { id: "all", title: "All", items: [] as { name: string; category: string; icon: React.ElementType }[] },
  {
    id: "mobile",
    title: "Mobile",
    items: [
      { name: "React Native", category: "Mobile", icon: Smartphone },
      { name: "Flutter", category: "Mobile", icon: Smartphone },
    ],
  },
  {
    id: "web",
    title: "Web",
    items: [
      { name: "React.js", category: "Web", icon: Monitor },
      { name: "Next.js", category: "Web", icon: Monitor },
      { name: "Angular", category: "Web", icon: Monitor },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", category: "Backend", icon: Server },
      { name: "Python", category: "Backend", icon: Server },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "MongoDB", category: "Database", icon: Database },
      { name: "PostgreSQL", category: "Database", icon: Database },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    items: [
      { name: "AWS", category: "Cloud", icon: Cloud },
      { name: "Firebase", category: "Cloud", icon: Cloud },
    ],
  },
  {
    id: "ai",
    title: "AI/ML",
    items: [
      { name: "TensorFlow", category: "AI/ML", icon: Brain },
      { name: "OpenAI API", category: "AI/ML", icon: Brain },
    ],
  },
];

techCategories[0].items = techCategories.slice(1).flatMap((c) => c.items);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Fitness App Development Services",
      description:
        "Custom fitness app development with workout tracking, nutrition plans, wearable integrations, activity monitoring, and personalized fitness experiences.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Fitness App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fitness App",
          item: "https://www.ctasis.com/solutions/fitness-app",
        },
      ],
    },
  ],
};

const FitnessAppMockup = () => (
  <div className="relative mx-auto max-w-sm">
    <div
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] backdrop-blur-sm p-5 sm:p-6 shadow-2xl"
      aria-hidden="true"
    >
      <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-6" />
      <div className="flex items-center justify-between mb-5">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{ backgroundColor: CYAN }}
        >
          <Activity className="w-5 h-5 text-white" />
        </div>
        <div className="text-right">
          <div className={`${fraunces.className} text-lg font-medium text-[#F2F6F9]`}>2,847</div>
          <div className="text-xs text-[#93A3AF]">calories</div>
        </div>
      </div>
      <div className="space-y-2 mb-5">
        <div className="h-2 bg-white/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: CYAN }}
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        </div>
        <div className="text-center text-xs text-[#93A3AF]">Daily Goal: 75%</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center rounded-xl bg-white/[0.05] border border-white/10 p-3">
          <div className={`${fraunces.className} text-base font-medium text-[#F2F6F9]`}>12</div>
          <div className="text-[10px] text-[#93A3AF]">workouts</div>
        </div>
        <div className="text-center rounded-xl bg-white/[0.05] border border-white/10 p-3">
          <div className={`${fraunces.className} text-base font-medium text-[#F2F6F9]`}>8.2</div>
          <div className="text-[10px] text-[#93A3AF]">avg rating</div>
        </div>
        <div className="text-center rounded-xl bg-white/[0.05] border border-white/10 p-3">
          <div className={`${fraunces.className} text-base font-medium text-[#F2F6F9]`}>156</div>
          <div className="text-[10px] text-[#93A3AF]">streak</div>
        </div>
      </div>
    </div>

    <motion.div
      {...fadeUp}
      className="absolute -top-4 -right-4 sm:-right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hidden sm:flex"
      style={{ backgroundColor: CYAN }}
    >
      <Zap className="w-7 h-7 text-white" />
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-4 -left-4 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hidden sm:flex"
      style={{ backgroundColor: NAVY }}
    >
      <Star className="w-6 h-6 text-white" />
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.15 }}
      className="absolute top-1/4 -left-8 rounded-xl border border-white/10 bg-white/[0.08] p-2 hidden lg:block"
    >
      <Dumbbell className="w-5 h-5" style={{ color: CYAN_LIGHT }} />
    </motion.div>
  </div>
);

const FitnessAppPage = () => {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Split hero with fitness mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Fitness App Development"
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
                  <Dumbbell className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  🚀 Next-Gen Fitness Technology
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Build the Future of{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Fitness Apps & Websites
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Create engaging fitness applications and websites that transform user behavior, track real-time
                  progress, and build sustainable healthy habits through AI-powered insights and gamified experiences
                  across all platforms.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {heroBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-[#C7D2D9]">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Play className="w-4 h-4" />
                    Portfolio
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    Get Free Demo
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <FitnessAppMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animated stats grid */}
        <SectionWrap>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Fitness app statistics">
            {bottomStats.map((stat, i) => (
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

        {/* Key highlights — asymmetric bento */}
        <SectionWrap alt>
          <SectionHeader
            badge="Key Highlights"
            title="Why Fitness Apps Built with Ctas"
            highlight="Dominate the Market"
            description="Our proven approach combines cutting-edge technology with fitness industry expertise to deliver apps that users love and businesses profit from."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {highlights.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow ${item.span}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${CYAN}18` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mb-3`}>
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-5">{item.description}</p>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Features — horizontal scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Core Features"
            title="Powerful Features for"
            highlight="Modern Fitness"
            description="Our fitness app solution includes everything you need to create an engaging and effective fitness platform"
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[300px] sm:w-[320px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        {/* Platforms — zigzag alternating */}
        <SectionWrap alt>
          <SectionHeader
            badge="Platforms"
            title="Multi-Platform"
            highlight="Fitness Solutions"
            description="We build fitness solutions across all platforms to reach your users wherever they are"
          />
          <div className="space-y-8 lg:space-y-12">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex flex-col sm:flex-row gap-6 sm:gap-10 items-center ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-full sm:w-2/5 rounded-[1.5rem] border border-slate-200/80 bg-[#F6F8FA] p-8 sm:p-10 flex flex-col items-center justify-center"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <platform.icon className="w-8 h-8" style={{ color: NAVY }} />
                  </div>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 text-center`}>
                    {platform.title}
                  </h3>
                </div>
                <div className="w-full sm:w-3/5">
                  <p className="text-slate-500 leading-relaxed mb-5">{platform.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {platform.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        {/* Benefits — split with engagement metrics */}
        <SectionWrap>
          <SectionHeader
            badge="Benefits"
            title="Why Choose Our"
            highlight="Fitness App Solution?"
            description="Comprehensive features designed to maximize user engagement and business success"
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex gap-4 sm:gap-5"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <benefit.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-3">{benefit.description}</p>
                    <ul className="space-y-1.5">
                      {benefit.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${CYAN}18` }}
                >
                  <Activity className="w-8 h-8" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>
                  Engagement Snapshot
                </h3>
                <p className="text-sm text-slate-500">Key performance indicators from fitness apps we build</p>
              </div>
              <div className="space-y-5">
                {[
                  { label: "User Retention", value: "95%", progress: 95 },
                  { label: "Daily Active Users", value: "500K+", progress: 88 },
                  { label: "App Store Rating", value: "4.8★", progress: 96 },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{metric.label}</span>
                      <span className="text-sm font-bold" style={{ color: NAVY }}>
                        {metric.value.match(/^[\d.]+/) ? <AnimatedStat value={metric.value} /> : metric.value}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[#EAF3F8] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: CYAN }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionWrap>

        {/* Technology stack — tabbed sidebar */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology Stack"
            title="Cutting-Edge"
            highlight="Technology Stack"
            description="Built with modern technologies to ensure scalability, performance, and user experience"
          />
          <div className="grid lg:grid-cols-[minmax(0,200px)_1fr] gap-6 lg:gap-10 items-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Technology categories">
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
                      key={tech.name}
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-[#13345A]/20 hover:shadow-md transition-all"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${CYAN}18` }}
                      >
                        <tech.icon className="w-5 h-5" style={{ color: NAVY }} />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">{tech.name}</h3>
                      <p className="text-xs text-slate-500">{tech.category}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
                <Code className="w-4 h-4" style={{ color: CYAN }} />
                Explore our{" "}
                <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  mobile app development
                </Link>{" "}
                and{" "}
                <Link href="/industries/wellness" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  wellness industry
                </Link>{" "}
                expertise
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Build Your Fitness App & Website?"
          description="Let's discuss how we can help you create fitness solutions that transform lives and drive business growth across all platforms."
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

export default FitnessAppPage;
