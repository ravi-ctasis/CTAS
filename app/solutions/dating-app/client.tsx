"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  Play,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
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
  { icon: Zap, text: "Launch in 8-12 weeks" },
  { icon: Shield, text: "100% Custom Design" },
  { icon: Users, text: "AI Matching Engine" },
  { icon: Globe, text: "Multi-Platform" },
];

const stats = [
  { number: "200+", label: "Dating Apps Built" },
  { number: "2M+", label: "Users Connected" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

const features = [
  {
    icon: Heart,
    title: "Smart Matching Algorithm",
    description:
      "AI-powered compatibility matching using advanced algorithms and user behavior analysis.",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat & Video",
    description: "Seamless messaging, voice calls, and video chat with end-to-end encryption.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Advanced privacy controls, location masking, and verified user profiles.",
  },
  {
    icon: Users,
    title: "Community Features",
    description: "Group events, shared interests, and community building tools.",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Push notifications for matches, messages, and important updates.",
  },
  {
    icon: Star,
    title: "Premium Features",
    description: "Advanced filters, unlimited likes, and premium matching options.",
  },
];

const featureHighlights = ["100% Customizable", "Scalable Architecture", "AI-Powered"];

const keyFeatures = [
  {
    icon: Heart,
    title: "AI-Powered Matching",
    description:
      "Advanced machine learning algorithms for intelligent compatibility matching based on user preferences and behavior patterns.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, GDPR compliance, and advanced privacy controls for user data protection.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Optimized for speed with real-time updates, instant messaging, and seamless user experience across all devices.",
  },
  {
    icon: Users,
    title: "Scalable Architecture",
    description:
      "Built to handle millions of users with cloud-native architecture, load balancing, and auto-scaling capabilities.",
  },
];

const successMetrics = [
  { label: "User Engagement", value: "75%", progress: 75 },
  { label: "Match Success", value: "87%", progress: 87 },
  { label: "Retention Rate", value: "62%", progress: 62 },
];

const scrollImages = [
  { src: "/dating-app-scroll.webp", alt: "Dating App Mockup 1" },
  { src: "/dating-app-scroll-img.webp", alt: "Dating App Mockup 2" },
  { src: "/dating-app-scroll-demo.webp", alt: "Dating App Mockup 3" },
];

const techCategories = [
  {
    id: "all",
    title: "All",
    items: [] as { name: string; description: string; icon: React.ElementType }[],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "React Native", description: "Cross-platform mobile development", icon: Smartphone },
      { name: "Next.js", description: "Modern web framework", icon: Monitor },
      { name: "TypeScript", description: "Type-safe development", icon: Code },
      { name: "React.js", description: "Modern UI library", icon: Code },
      { name: "Vue.js", description: "Progressive framework", icon: Code },
      { name: "Angular", description: "Enterprise framework", icon: Code },
      { name: "Flutter", description: "Google's UI toolkit", icon: Code },
      { name: "Swift", description: "iOS development", icon: Code },
      { name: "Kotlin", description: "Android development", icon: Code },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", description: "Scalable backend services", icon: Server },
      { name: "Python", description: "FastAPI & Django", icon: Server },
      { name: "Java", description: "Spring Boot framework", icon: Server },
      { name: "Go", description: "High-performance backend", icon: Server },
      { name: "PHP", description: "Laravel framework", icon: Server },
      { name: "Ruby", description: "Ruby on Rails", icon: Server },
      { name: "C#", description: ".NET Core framework", icon: Server },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "MongoDB", description: "NoSQL database", icon: Database },
      { name: "PostgreSQL", description: "Advanced SQL database", icon: Database },
      { name: "MySQL", description: "Reliable SQL database", icon: Database },
      { name: "Elasticsearch", description: "Search & analytics", icon: Database },
      { name: "Firebase", description: "Google's backend service", icon: Database },
      { name: "Supabase", description: "Open source Firebase", icon: Database },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", description: "Cloud infrastructure", icon: Cloud },
      { name: "Google Cloud", description: "Google's cloud platform", icon: Cloud },
      { name: "Azure", description: "Microsoft's cloud", icon: Cloud },
      { name: "Docker", description: "Containerization", icon: Cloud },
      { name: "Kubernetes", description: "Container orchestration", icon: Cloud },
      { name: "Terraform", description: "Infrastructure as code", icon: Cloud },
      { name: "Jenkins", description: "CI/CD automation", icon: Cloud },
      { name: "GitHub Actions", description: "GitHub CI/CD", icon: Cloud },
      { name: "Vercel", description: "Deployment platform", icon: Cloud },
      { name: "Netlify", description: "Web deployment", icon: Cloud },
    ],
  },
];

techCategories[0].items = techCategories.slice(1).flatMap((c) => c.items);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Dating App Development Services",
      description:
        "Custom dating app development services including matchmaking algorithms, real-time chat, secure authentication, and modern UI/UX for high-engagement social platforms.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Dating App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dating App",
          item: "https://www.ctasis.com/solutions/dating-app",
        },
      ],
    },
  ],
};

const DatingAppMockup = () => (
  <div className="relative mx-auto max-w-lg">
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-2 shadow-xl">
        <div className="rounded-[1.5rem] overflow-hidden bg-[#F6F8FA] p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: CYAN }} />
            <span className="text-xs text-slate-500 font-medium">Dating App</span>
            <div className="w-6 h-6 rounded-full bg-slate-200" />
          </div>
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-3">
            <Image
              src="/dating-app-scroll.webp"
              alt="Profile mockup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 200px"
              priority
            />
            <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
              <Heart className="w-4 h-4" style={{ color: CYAN }} />
            </div>
          </div>
          <div className="space-y-2 mb-3">
            <div className="h-3 bg-slate-200 rounded w-3/4" />
            <div className="h-2 bg-slate-200 rounded w-1/2" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-8 rounded-lg bg-red-400/80" />
            <div className="flex-1 h-8 rounded-lg bg-emerald-400/80" />
          </div>
        </div>
      </div>
      <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-2 shadow-xl overflow-hidden">
        <div className="relative h-[340px] sm:h-[380px] overflow-hidden rounded-[1.5rem] bg-[#F6F8FA]">
          <motion.div
            className="space-y-4 p-2"
            animate={{ y: [0, -600] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...scrollImages, ...scrollImages].map((img, i) => (
              <div key={`${img.src}-${i}`} className="relative w-full h-[280px] rounded-xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 200px"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-2 sm:-right-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-lg max-w-[160px]"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: CYAN }}>
          <Heart className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className={`${fraunces.className} text-lg font-medium text-slate-900`}>2.5M+</div>
          <div className="text-xs text-slate-500">Matches Made</div>
        </div>
      </div>
      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full w-4/5 rounded-full" style={{ backgroundColor: CYAN }} />
      </div>
    </motion.div>

    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-3 -left-2 sm:-left-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-lg max-w-[160px]"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: NAVY }}>
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className={`${fraunces.className} text-lg font-medium text-slate-900`}>98%</div>
          <div className="text-xs text-slate-500">Success Rate</div>
        </div>
      </div>
      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full w-full rounded-full" style={{ backgroundColor: NAVY }} />
      </div>
    </motion.div>

    <motion.div
      {...fadeUp}
      transition={{ delay: 0.15 }}
      className="absolute top-1/2 -right-6 sm:-right-10 rounded-xl border border-slate-200/80 bg-white p-3 shadow-md text-center hidden sm:block"
    >
      <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1" style={{ backgroundColor: `${CYAN}18` }}>
        <Users className="w-4 h-4" style={{ color: NAVY }} />
      </div>
      <div className="text-xs font-semibold text-slate-800">Live Users</div>
      <div className="text-xs text-slate-500">Online Now</div>
    </motion.div>
  </div>
);

const DatingAppPage = () => {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Split hero with app mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Dating App Development"
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
                  <Heart className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  #1 Dating App Development Company
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Build Your{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Modern
                  </span>{" "}
                  Dating App
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Create a visually stunning dating app that combines beautiful design with powerful matching
                  algorithms. AI-powered compatibility, real-time chat, and scalable architecture ready for millions
                  of users.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {heroBenefits.map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-2 text-sm text-[#C7D2D9]">
                      <benefit.icon className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      <span>{benefit.text}</span>
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
                    Portfolios
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <DatingAppMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats — animated counter grid */}
        <SectionWrap>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Dating app statistics">
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

        {/* Core features — horizontal scroll */}
        <SectionWrap alt>
          <SectionHeader
            badge="Core Features"
            title="Dating App"
            highlight="Features"
            description="Dating apps need more than just swipes. Our innovative design creates engaging, visual experiences that keep users coming back."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            {featureHighlights.map((highlight, i) => (
              <div key={highlight} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:block w-px h-5 bg-slate-200" aria-hidden="true" />}
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: CYAN }} aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700">{highlight}</span>
              </div>
            ))}
          </motion.div>
        </SectionWrap>

        {/* Key highlights — split with success metrics */}
        <SectionWrap>
          <SectionHeader
            badge="Key Highlights"
            title="Why Choose Our"
            highlight="Dating App Development?"
            description="We deliver cutting-edge dating apps with proven technology stacks and innovative features that drive user engagement."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="space-y-8">
              {keyFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex gap-4 sm:gap-5"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{feature.description}</p>
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
                  <Heart className="w-8 h-8" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>Success Metrics</h3>
                <p className="text-sm text-slate-500">Track your app&apos;s performance</p>
              </div>
              <div className="space-y-5">
                {successMetrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{metric.label}</span>
                      <span className="text-sm font-bold" style={{ color: NAVY }}>
                        <AnimatedStat value={metric.value} />
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
            title="Powered by"
            highlight="Cutting-Edge Technologies"
            description="We leverage the latest technologies to build fast, secure, and scalable dating applications that deliver exceptional user experiences."
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
                      <p className="text-xs text-slate-500 leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <motion.p
                {...fadeUp}
                className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600"
              >
                <Zap className="w-4 h-4" style={{ color: CYAN }} />
                All technologies are production-ready and battle-tested
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Build Your Dating App?"
          description="Join the ranks of successful dating apps built by Ctas. Get started with a free consultation and project estimate."
          primaryLabel="Start Free Consultation"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default DatingAppPage;
