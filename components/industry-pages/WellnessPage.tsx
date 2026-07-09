"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Apple,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Heart,
  Layers,
  Lock,
  Server,
  Shield,
  TrendingUp,
  Users,
  Watch,
  Zap,
  Target,
  Rocket,
  Star,
  Award,
  CheckCircle,
  CheckCircle2,
  BarChart3,
  Container,
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

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-[#EAF3F8] text-[#13345A] border border-[#13345A]/10">
    {children}
  </span>
);

const platformFeatures = [
  {
    icon: Rocket,
    title: "Multi-Platform Development",
    description:
      "Native iOS and Android apps with seamless cross-platform synchronization and responsive web interfaces.",
    highlight: "Cross-Platform Sync",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, HIPAA compliance, and secure user authentication for healthcare applications.",
    highlight: "HIPAA Compliant",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time health metrics, customizable dashboards, and predictive health insights powered by AI.",
    highlight: "AI-Powered Insights",
  },
  {
    icon: Target,
    title: "Device Integration",
    description:
      "Seamless integration with fitness trackers, smartwatches, and health monitoring devices.",
    highlight: "Wearable Support",
  },
];

const healthFeatures = [
  {
    icon: Zap,
    title: "Cross-Platform Apps",
    description:
      "Native iOS and Android apps with seamless web synchronization and wearable device integration.",
    features: ["iOS & Android Native", "Wearable Integration", "Web Dashboard"],
  },
  {
    icon: BarChart3,
    title: "Health Analytics",
    description:
      "Advanced analytics and insights with customizable dashboards and progress visualization.",
    features: ["Real-time Metrics", "Custom Dashboards", "Progress Reports"],
  },
  {
    icon: Target,
    title: "Device Integration",
    description:
      "Seamless integration with fitness trackers, smartwatches, and health monitoring devices.",
    features: ["Apple Watch", "Fitbit Integration", "Garmin Connect"],
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "HIPAA-compliant data handling with end-to-end encryption and secure user authentication.",
    features: ["HIPAA Compliance", "Data Encryption", "Secure Authentication"],
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Machine learning algorithms that provide personalized recommendations and predictive health insights.",
    features: ["Smart Recommendations", "Predictive Analytics", "Personalized Plans"],
  },
  {
    icon: Users,
    title: "Social Features",
    description:
      "Community features, challenges, and social sharing to boost motivation and engagement.",
    features: ["Community Challenges", "Social Sharing", "Friend Connections"],
  },
];

const useCases = [
  {
    icon: Target,
    title: "Fitness Applications",
    description:
      "Workout tracking, exercise libraries, and personalized training programs for all fitness levels.",
    features: ["Workout Plans", "Exercise Library", "Progress Tracking"],
  },
  {
    icon: Heart,
    title: "Nutrition Platforms",
    description:
      "Meal planning, calorie tracking, and dietary recommendations for healthy eating habits.",
    features: ["Meal Planning", "Calorie Tracking", "Dietary Guidance"],
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description:
      "Meditation, stress management, and mental health tools for holistic wellness.",
    features: ["Meditation Guides", "Stress Relief", "Sleep Support"],
  },
  {
    icon: Shield,
    title: "Healthcare Solutions",
    description:
      "Patient monitoring, health records, and telemedicine solutions for healthcare providers.",
    features: ["Patient Monitoring", "Health Records", "Telemedicine"],
  },
  {
    icon: Users,
    title: "Senior Health",
    description:
      "Age-appropriate fitness programs, health monitoring, and social engagement features.",
    features: ["Senior Fitness", "Health Monitoring", "Social Features"],
  },
  {
    icon: Star,
    title: "Family Wellness",
    description:
      "Family health tracking, child health monitoring, and shared wellness goals.",
    features: ["Family Dashboard", "Child Health", "Shared Goals"],
  },
];

const techCategories = [
  {
    id: "mobile",
    title: "Mobile",
    technologies: [
      { name: "React Native", icon: Zap },
      { name: "Flutter", icon: Rocket },
      { name: "Swift", icon: Star },
      { name: "Kotlin", icon: Target },
      { name: "TypeScript", icon: Code },
    ],
  },
  {
    id: "backend",
    title: "Backend / Runtime",
    technologies: [
      { name: "Node.js", icon: Cpu },
      { name: "Python", icon: Brain },
      { name: "Django", icon: Server },
      { name: "FastAPI", icon: Zap },
      { name: "Firebase", icon: Cloud },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: HardDrive },
      { name: "SQLite", icon: Layers },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infra",
    technologies: [
      { name: "AWS", icon: Globe },
      { name: "Google Cloud", icon: Cloud },
      { name: "Apple HealthKit", icon: Apple },
      { name: "Google Fit", icon: Activity },
      { name: "Docker", icon: Container },
    ],
  },
  {
    id: "fitness",
    title: "Health & Fitness APIs",
    technologies: [
      { name: "Strava API", icon: TrendingUp },
      { name: "Fitbit API", icon: Watch },
      { name: "MyFitnessPal API", icon: Heart },
      { name: "Garmin API", icon: Target },
    ],
  },
  {
    id: "security",
    title: "Security & Privacy",
    technologies: [
      { name: "OAuth 2.0", icon: Shield },
      { name: "JWT", icon: Lock },
      { name: "HIPAA", icon: CheckCircle },
      { name: "GDPR", icon: Award },
    ],
  },
  {
    id: "ai",
    title: "AI & Analytics",
    technologies: [
      { name: "TensorFlow", icon: Brain },
      { name: "Core ML", icon: Zap },
      { name: "Health Analytics", icon: BarChart3 },
      { name: "Predictive Models", icon: TrendingUp },
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Wellness & Health App Development",
      description:
        "Digital health and wellness application development with AI, IoT, and wearable device integration.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Health & Wellness App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wellness",
          item: "https://www.ctasis.com/industries/wellness",
        },
      ],
    },
  ],
};

const WellnessMockup = () => (
  <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-8 sm:p-10 text-center shadow-sm">
    <div
      className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
      style={{ backgroundColor: `${CYAN}18` }}
      aria-hidden="true"
    >
      <Heart className="w-8 h-8" style={{ color: NAVY }} />
    </div>
    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
      Digital Health Solutions
    </h3>
    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
      Comprehensive wellness and healthcare technology platform
    </p>
  </div>
);

const WellnessPage = () => {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Wellness & Health Tech Solutions"
          badge="Next-Gen Health Tech"
          title="Revolutionize"
          highlight="Digital Health"
          description="Create cutting-edge health applications that leverage AI, IoT, and cloud technologies to deliver personalized healthcare experiences that transform lives."
          stats={[
            { number: "200+", label: "Projects Delivered", icon: Rocket },
            { number: "2M+", label: "Active Users", icon: Users },
            { number: "50+", label: "Health Metrics", icon: TrendingUp },
            { number: "99.9%", label: "Uptime", icon: CheckCircle },
          ]}
          primaryCta={{ label: "Start Your Project", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />

        {/* Core capabilities — split-screen with wellness mockup */}
        <SectionWrap>
          <SectionHeader
            badge="Core Capabilities"
            title="Why Choose Our"
            highlight="Health Platform?"
            description="Discover the essential features that make our health and fitness applications stand out in the competitive digital health market."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
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
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <WellnessMockup />
            </motion.div>
          </div>
        </SectionWrap>

        {/* Comprehensive features — horizontal scroll */}
        <SectionWrap alt>
          <SectionHeader
            badge="Platform Features"
            title="Comprehensive"
            highlight="Health Features"
            description="Our platform combines cutting-edge technology with intuitive design to create powerful health and fitness applications that users love."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {healthFeatures.map((feature, i) => (
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
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        {/* Use cases — bento grid */}
        <SectionWrap>
          <SectionHeader
            badge="Use Cases"
            title="Health App"
            highlight="Use Cases"
            description="From fitness enthusiasts to healthcare providers, our platform serves diverse health needs across multiple industries and use cases."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
            {useCases.map((useCase, i) => (
              <motion.article
                key={useCase.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col ${
                  i === 0 ? "md:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className="flex justify-center mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <useCase.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                </div>
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2 text-center`}>
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 text-center flex-1">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((f) => (
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

        {/* Technologies — tabbed sidebar */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology"
            title="Health Technology"
            highlight="Stack"
            description="Cutting-edge technologies and frameworks that power modern health and fitness applications."
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

        <PageCTA
          title="Ready to Build Your Health App?"
          description="Join the digital health revolution with our comprehensive platform. Let's create an application that transforms lives and promotes better health."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default WellnessPage;
