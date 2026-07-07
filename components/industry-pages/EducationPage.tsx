"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  HardDrive,
  Layers,
  Lock,
  MessageSquare,
  Monitor,
  Network,
  Server,
  Smartphone,
  Rocket,
  Trophy,
  ShieldCheck,
  Gamepad2,
  BookOpen,
  Link2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageHero,
  PageCTA,
  SectionHeader,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
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

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-[#EAF3F8] text-[#13345A] border border-[#13345A]/10">
    {children}
  </span>
);

const lmsFeatures = [
  {
    icon: BookOpen,
    title: "Course Management",
    description:
      "Create, organize, and deliver courses with our intuitive course builder. Support multiple content types and learning paths.",
    features: ["Drag & Drop Builder", "Content Templates", "Learning Paths"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track learner progress, engagement, and performance with detailed analytics and customizable reports.",
    features: ["Real-time Dashboards", "Custom Reports", "Progress Tracking"],
  },
  {
    icon: Smartphone,
    title: "Mobile Learning",
    description:
      "Seamless learning experience across all devices with our responsive mobile app and web platform.",
    features: ["Native Mobile Apps", "Offline Access", "Push Notifications"],
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-level security with SSO, role-based access control, and compliance with educational standards.",
    features: ["SSO Integration", "Role Management", "Data Encryption"],
  },
  {
    icon: Link2,
    title: "Third-party Integrations",
    description:
      "Connect with your existing tools and systems for a seamless workflow integration.",
    features: ["Payment Gateways", "CRM Systems", "Video Conferencing"],
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description:
      "Boost engagement with badges, points, leaderboards, and interactive learning elements.",
    features: ["Achievement System", "Leaderboards", "Interactive Quizzes"],
  },
];

const platformFeatures = [
  {
    icon: Rocket,
    title: "Training portal , Group training",
    description:
      "Built with modern architecture ensuring sub-second load times and seamless user experience across all devices.",
    highlight: "99.9% Uptime Guarantee",
  },
  {
    icon: ShieldCheck,
    title: "Live Streaming",
    description:
      "Bank-level encryption, SSO integration, and compliance with international educational standards and regulations.",
    highlight: "SOC 2 Type II Certified",
  },
  {
    icon: Smartphone,
    title: "Online assessments",
    description:
      "Native mobile apps for iOS and Android, plus responsive web design that works perfectly on any device.",
    highlight: "Mobile-First Design",
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Intelligent content recommendations, automated grading, and personalized learning paths for each student.",
    highlight: "Machine Learning Engine",
  },
];

const platformStats = [
  { label: "Average Load Time", value: "< 1 second" },
  { label: "Concurrent Users", value: "100,000+" },
  { label: "Data Centers", value: "12 Global" },
  { label: "Security Score", value: "A+ Rating" },
];

const keyBenefits = [
  "Reduce training costs by up to 60%",
  "Increase learner engagement by 40%",
  "Improve completion rates by 35%",
  "Cut administrative time by 50%",
];

const techCategories = [
  {
    id: "frontend",
    title: "Frontend",
    technologies: [
      { name: "React", icon: Monitor },
      { name: "Next.js", icon: Monitor },
      { name: "Angular", icon: Monitor },
      { name: "Tailwind CSS", icon: Layers },
      { name: "TypeScript", icon: Code },
    ],
  },
  {
    id: "backend",
    title: "Backend / Runtime",
    technologies: [
      { name: "Node.js", icon: Cpu },
      { name: "Express.js", icon: Server },
      { name: "NestJS", icon: Server },
      { name: "Python", icon: Code },
      { name: "Django", icon: Server },
      { name: "FastAPI", icon: Server },
      { name: "Java", icon: Code },
      { name: "Spring Boot", icon: Server },
      { name: "PHP / Laravel", icon: Server },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Oracle", icon: Database },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infra",
    technologies: [
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "Google Cloud", icon: Cloud },
      { name: "Vercel", icon: Cloud },
      { name: "Docker", icon: HardDrive },
      { name: "Kubernetes", icon: Network },
    ],
  },
  {
    id: "realtime",
    title: "Real-time & Video",
    technologies: [
      { name: "WebRTC", icon: MessageSquare },
      { name: "Socket.io", icon: MessageSquare },
      { name: "Zoom API", icon: MessageSquare },
      { name: "MS Teams API", icon: MessageSquare },
    ],
  },
  {
    id: "security",
    title: "Security",
    technologies: [
      { name: "OAuth 2.0", icon: Lock },
      { name: "JWT", icon: Lock },
      { name: "SSO", icon: Lock },
    ],
  },
  {
    id: "ai",
    title: "AI & Analytics",
    technologies: [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Brain },
      { name: "Dialogflow", icon: Brain },
      { name: "Power BI", icon: BarChart3 },
      { name: "Tableau", icon: BarChart3 },
    ],
  },
];

const caseStudies = [
  {
    title: "University LMS Implementation",
    company: "State University",
    industry: "Higher Education",
    description:
      "Complete digital transformation of traditional learning methods with modern LMS platform for 25,000+ students.",
    results: {
      studentEngagement: "85%",
      costReduction: "40%",
      learningOutcomes: "92%",
      timeToDeploy: "60%",
    },
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "K-12 Digital Learning Platform",
    company: "School District",
    industry: "K-12 Education",
    description:
      "Comprehensive digital learning solution for elementary and high school students with parent portal access.",
    results: {
      studentEngagement: "90%",
      costReduction: "35%",
      parentSatisfaction: "95%",
      timeToDeploy: "70%",
    },
    technologies: ["Angular", "Python", "PostgreSQL", "Azure"],
  },
  {
    title: "Corporate Training Platform",
    company: "Fortune 500 Company",
    industry: "Corporate Training",
    description:
      "Enterprise learning management system for employee training and professional development programs.",
    results: {
      employeeEngagement: "88%",
      costReduction: "45%",
      skillImprovement: "94%",
      timeToDeploy: "50%",
    },
    technologies: ["React", "Java", "Oracle", "GCP"],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Learning Management System Development",
      description:
        "Comprehensive LMS platform development for K-12, higher education, and corporate training with gamification and analytics.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Education Technology Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Education",
          item: "https://www.ctasis.com/industries/education",
        },
      ],
    },
  ],
};

const formatResultKey = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();

const LmsDashboardMockup = () => (
  <div className="relative mx-auto max-w-md">
    <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-2 shadow-xl">
      <div className="rounded-[1.5rem] overflow-hidden" style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}>
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs font-medium text-white/70">LMS Dashboard</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="h-3 rounded-full bg-white/15 w-full" />
          <div className="h-3 rounded-full bg-white/10 w-3/4" />
          <div className="h-3 rounded-full bg-white/10 w-1/2" />
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="h-20 rounded-xl bg-white/10 border border-white/10" />
            <div className="h-20 rounded-xl bg-white/10 border border-white/10" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {["Courses", "Students", "Reports"].map((label) => (
              <div key={label} className="rounded-lg bg-white/10 p-3 text-center">
                <div className="w-6 h-6 rounded-md mx-auto mb-1.5" style={{ backgroundColor: CYAN }} />
                <span className="text-[10px] text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <motion.div
      className="absolute -top-3 -right-3 w-16 h-16 rounded-full opacity-60 pointer-events-none"
      style={{ background: `radial-gradient(circle, ${CYAN}88, transparent 70%)` }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      aria-hidden="true"
    />
  </div>
);

const EducationPage = () => {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Education & LMS Solutions"
          badge="Leading LMS Solutions"
          title="Transform Education with"
          highlight="Smart LMS"
          description="Empower educators and learners with our comprehensive Learning Management System. From K-12 to corporate training, deliver engaging, scalable, and secure learning experiences."
          primaryCta={{ label: "Start Free Trial", href: "/contact-us" }}
          secondaryCta={{ label: "Portfolio", href: "/portfolios" }}
        />

        {/* LMS features — horizontal scroll */}
        <SectionWrap>
          <SectionHeader
            badge="LMS Capabilities"
            title="Everything You Need for"
            highlight="Modern Learning"
            description="Our comprehensive LMS platform combines cutting-edge technology with intuitive design to create the ultimate learning experience for educators and students alike."
          />
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {lmsFeatures.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] transition-all flex flex-col">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Key features — split with mockup, stats, and benefits */}
        <SectionWrap alt>
          <SectionHeader
            badge="Key Features"
            title="Why Choose Our"
            highlight="LMS Platform?"
            description="Discover the core capabilities that make our Learning Management System the preferred choice for educational institutions worldwide."
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="space-y-8">
              {platformFeatures.map((feature, i) => (
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
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-3">{feature.description}</p>
                    <Pill>{feature.highlight}</Pill>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
                <LmsDashboardMockup />
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-6 text-center`}>
                  Platform Statistics
                </h3>
                <div className="space-y-5" role="list" aria-label="Platform statistics">
                  {platformStats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center gap-4" role="listitem">
                      <span className="text-sm text-slate-600 font-medium">{stat.label}</span>
                      <span className="text-base sm:text-lg font-bold" style={{ color: NAVY }}>
                        {stat.value.match(/^[\d.]+/) ? <AnimatedStat value={stat.value} /> : stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-[1.5rem] px-6 sm:px-8 py-8 text-white"
                style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
              >
                <h3 className={`${fraunces.className} text-xl font-medium mb-6 text-center`}>Key Benefits</h3>
                <ul className="space-y-4">
                  {keyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm sm:text-base text-white/85">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </SectionWrap>

        {/* Technologies — tabbed sidebar */}
        <SectionWrap>
          <SectionHeader
            badge="Technology"
            title="Enterprise Technology"
            highlight="Stack"
            description="Cutting-edge technologies and frameworks that power modern enterprise solutions."
          />
          <div className="grid lg:grid-cols-[minmax(0,240px)_1fr] gap-6 lg:gap-10 items-start">
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
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTech.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
              >
                {currentTech.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#13345A]/20 hover:shadow-md transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${CYAN}18` }}
                    >
                      <tech.icon className="w-5 h-5" style={{ color: NAVY }} />
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionWrap>

        {/* Case studies — alternating split with animated stats */}
        <SectionWrap alt>
          <div className="text-center mb-12 sm:mb-14">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-4 flex items-center justify-center gap-3`}>
                <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" aria-hidden="true" />
                Success Stories
              </h2>
              <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mb-4`}>
                Education{" "}
                <span className="italic" style={{ color: CYAN }}>
                  Success Stories
                </span>
              </h3>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Real-world implementations that have transformed educational institutions and learning
                experiences with measurable results.
              </p>
            </motion.div>
          </div>
          <div className="space-y-12 sm:space-y-16">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Pill>{study.industry}</Pill>
                  <h4 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mt-4 mb-2`}>
                    {study.title}
                  </h4>
                  <p className="text-sm font-semibold mb-4" style={{ color: CYAN }}>
                    {study.company}
                  </p>
                  <p className="text-slate-500 leading-relaxed mb-6">{study.description}</p>
                  <h5 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <Pill key={tech}>{tech}</Pill>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h5 className="text-sm font-semibold text-slate-900 mb-4">Key Results</h5>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 text-center hover:shadow-md transition-shadow"
                      >
                        <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium mb-1`} style={{ color: NAVY }}>
                          <AnimatedStat value={value} />
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500 font-medium">{formatResultKey(key)}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] focus-visible:ring-offset-2"
                    style={{ backgroundColor: NAVY }}
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Revolutionize Learning?"
          description="Join hundreds of institutions already transforming education with our LMS platform. Start your journey today with a free consultation and demo."
          primaryLabel="Get Started Free"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default EducationPage;
