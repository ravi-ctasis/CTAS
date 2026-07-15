"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Video,
  Users,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Building,
  Headphones,
  GraduationCap,
  Stethoscope,
  Play,
  ArrowRight,
  CheckCircle2,
  Code,
  Monitor,
  Palette,
  Database,
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

const heroStats = [
  { number: "99.9%", label: "Uptime" },
  { number: "28M+", label: "Users" },
  { number: "20+", label: "Countries" },
];

const features = [
  {
    icon: Phone,
    title: "Crystal Clear Voice Calls",
    description:
      "HD voice quality with noise cancellation and echo suppression for professional-grade communication.",
  },
  {
    icon: MessageCircle,
    title: "Real-time Messaging",
    description:
      "Instant text messages with read receipts, typing indicators, and message encryption.",
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description:
      "High-definition video calls with screen sharing, virtual backgrounds, and recording capabilities.",
  },
  {
    icon: Users,
    title: "Group Communication",
    description:
      "Create channels, manage teams, and organize conversations with advanced moderation tools.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, compliance features, and secure authentication for business use.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for low latency with global server infrastructure and intelligent routing.",
  },
];

const keyBenefits = [
  "99.9% uptime guarantee with global CDN",
  "End-to-end encryption for maximum security",
  "Global server network for low latency",
  "24/7 customer support worldwide",
];

const useCases = [
  {
    icon: Building,
    title: "Business Communication",
    description:
      "Seamless team collaboration with integrated project management and file sharing.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Multi-channel support with AI-powered chatbots and seamless handoff to human agents.",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description:
      "Virtual classrooms with interactive whiteboards, breakout rooms, and progress tracking.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Secure telemedicine solutions with HIPAA compliance and medical record integration.",
  },
];

const techCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      { name: "React Native", description: "Cross-platform mobile development", icon: Smartphone },
      { name: "React.js", description: "Web application framework", icon: Globe },
      { name: "TypeScript", description: "Type-safe JavaScript", icon: Code },
      { name: "Next.js", description: "React framework for production", icon: Monitor },
      { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: Palette },
      { name: "Redux", description: "State management", icon: Database },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    items: [
      { name: "Node.js", description: "JavaScript runtime", icon: Server },
      { name: "Express.js", description: "Web application framework", icon: Zap },
      { name: "Python", description: "Backend programming", icon: Code },
      { name: "Django", description: "Python web framework", icon: Shield },
      { name: "PostgreSQL", description: "Relational database", icon: Database },
      { name: "MongoDB", description: "NoSQL database", icon: Database },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    items: [
      { name: "AWS", description: "Cloud infrastructure", icon: Globe },
      { name: "Docker", description: "Containerization", icon: Server },
      { name: "Nginx", description: "Web server", icon: Zap },
      { name: "Git", description: "Version control", icon: Code },
      { name: "CI/CD", description: "Automated deployment", icon: Zap },
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Voice Chat App Development Services",
      description:
        "Custom voice chat app development: real-time audio communication, group calls, and moderation tools.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Voice Chat App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Voice Chat App",
          item: "https://www.ctasis.com/solutions/voice-chat-app",
        },
      ],
    },
  ],
};

const VoiceChatMockup = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`rounded-[1.5rem] border border-slate-200/80 bg-white shadow-xl overflow-hidden ${
      compact ? "p-5 sm:p-6" : "p-6 sm:p-8"
    }`}
    aria-hidden={compact ? undefined : true}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
        <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
      </div>
      <span className="text-sm text-slate-500 font-medium">VoiceChat Pro</span>
    </div>

    <div className="space-y-3">
      <div className="rounded-2xl p-4 border border-blue-200/80 bg-[#EAF3F8]/60">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ backgroundColor: NAVY }}
            >
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-slate-900">Team Meeting</div>
            <div className="text-sm text-slate-500">5 participants • 45 min</div>
            {!compact && (
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-500">Live</span>
              </div>
            )}
          </div>
          {!compact && (
            <span className="px-2.5 py-1 bg-red-500 text-white text-xs font-medium rounded-lg">End</span>
          )}
        </div>
      </div>

      <div className="rounded-2xl p-4 border border-emerald-200/80 bg-emerald-50/50">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: CYAN }}
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-slate-900">Project Updates</div>
            <div className="text-sm text-slate-500">12 new messages</div>
            {!compact && (
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-500">Unread</span>
              </div>
            )}
          </div>
          {!compact && (
            <span
              className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: CYAN }}
            >
              12
            </span>
          )}
        </div>
      </div>

      <div className="rounded-2xl p-4 border border-violet-200/80 bg-violet-50/40">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-slate-900">Client Call</div>
            <div className="text-sm text-slate-500">Scheduled in 15 min</div>
            {!compact && (
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-500">Upcoming</span>
              </div>
            )}
          </div>
          {!compact && (
            <span className="px-2.5 py-1 bg-violet-600 text-white text-xs font-medium rounded-lg">Join</span>
          )}
        </div>
      </div>
    </div>

    {!compact && (
      <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          Connected
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CYAN }} />
          HD Audio
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
          Encrypted
        </div>
      </div>
    )}
  </div>
);

const VoiceChatAppPage = () => {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main id="main-content">
        {/* Split hero with VoiceChat Pro mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Voice Chat App Development"
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
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Next-Gen Communication
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Transform Your{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Communication
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Experience the future of real-time communication with our cutting-edge platform featuring{" "}
                  <span className="font-semibold text-[#C7D2D9]">crystal-clear voice</span>,{" "}
                  <span className="font-semibold text-[#C7D2D9]">instant messaging</span>, and{" "}
                  <span className="font-semibold text-[#C7D2D9]">professional video calls</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    Start Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <Play className="w-4 h-4" />
                    Portfolios
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:gap-6" role="list" aria-label="Voice chat statistics">
                  {heroStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                      className="text-center"
                      role="listitem"
                    >
                      <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-[#F2F6F9] mb-1`}>
                        <AnimatedStat value={stat.number} />
                      </div>
                      <div className="text-xs sm:text-sm text-[#93A3AF]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden lg:block"
              >
                <VoiceChatMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features — horizontal scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Powerful Features"
            title="Everything You Need for"
            highlight="Modern Communication"
            description="Discover the tools that will revolutionize how you connect, collaborate, and communicate."
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
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:shadow-xl transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        {/* Interactive demo — split screen */}
        <SectionWrap alt>
          <SectionHeader
            badge="See It In Action"
            title="Experience Real-time"
            highlight="Communication"
            description="Get a hands-on feel for how our platform transforms your daily communication needs."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <VoiceChatMockup compact />
            </motion.div>
            <div className="space-y-6">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-5`}>Key Benefits</h3>
                <ul className="space-y-3">
                  {keyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      <span className="text-slate-600 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="rounded-[1.5rem] p-6 sm:p-8 text-white overflow-hidden relative"
                style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
              >
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[60px] pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(36,155,202,0.35) 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <h3 className={`${fraunces.className} text-xl font-medium mb-3`}>Ready to Get Started?</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    Join thousands of teams already using our platform for seamless communication.
                  </p>
                  <Link
                    href="/contact-us"
                    className="block w-full text-center px-6 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200"
                    style={{ backgroundColor: CYAN }}
                  >
                    Start Free Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrap>

        {/* Use cases — zigzag alternating */}
        <SectionWrap>
          <SectionHeader
            badge="Industry Solutions"
            title="Perfect for Every"
            highlight="Industry"
            description="From startups to enterprise, our platform adapts to your unique communication needs."
          />
          <div className="space-y-6 lg:space-y-8">
            {useCases.map((useCase, i) => (
              <motion.article
                key={useCase.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex flex-col sm:flex-row gap-6 sm:gap-10 items-center rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div
                  className="w-full sm:w-1/3 flex flex-col items-center justify-center text-center py-4"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <useCase.icon className="w-8 h-8" style={{ color: NAVY }} />
                  </div>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{useCase.title}</h3>
                </div>
                <div className="w-full sm:w-2/3">
                  <p className="text-slate-500 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Tech stack — tabbed sidebar */}
        <SectionWrap alt>
          <SectionHeader
            badge="Tech Stack"
            title="Built with Modern"
            highlight="Technologies"
            description="Our platform leverages cutting-edge technologies for optimal performance and scalability."
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
                {currentTech.items.length} technolog{currentTech.items.length !== 1 ? "ies" : "y"} in{" "}
                {currentTech.title}
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
              <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
                <Phone className="w-4 h-4" style={{ color: CYAN }} />
                See our{" "}
                <Link href="/industries/healthcare" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  healthcare
                </Link>{" "}
                and{" "}
                <Link href="/services/custom-software" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  custom software
                </Link>{" "}
                expertise
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Transform Your Communication Today"
          description="Join the future of real-time communication and experience seamless collaboration like never before."
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

export default VoiceChatAppPage;
