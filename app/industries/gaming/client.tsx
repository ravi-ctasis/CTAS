"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Monitor,
  Smartphone,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Code,
  Palette,
  Database,
  Cloud,
  BarChart3,
  Building,
  Package,
  Target,
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

export default function GamingPage() {
  const heroData = useMemo(
    () => ({
      title: "Interactive Gaming Solutions",
      subtitle: "Revolutionizing the Gaming Industry with Cutting-Edge Technology",
      description:
        "We create immersive, interactive gaming experiences that engage players and drive business growth. From mobile games to VR experiences, our solutions push the boundaries of what's possible in gaming.",
      stats: [
        { label: "Games Developed", value: "200+", icon: Gamepad2 },
        { label: "Active Players", value: "10M+", icon: Users },
        { label: "Revenue Growth", value: "300%", icon: TrendingUp },
        { label: "Platforms", value: "35+", icon: Globe },
      ],
    }),
    []
  );

  const keyFeaturesData = useMemo(
    () => ({
      title: "Why Choose Our Gaming Platform?",
      subtitle: "Advanced features that set us apart in the gaming industry",
      features: [
        {
          icon: Zap,
          title: "Real-time Multiplayer",
          description: "Seamless multiplayer experiences with low latency and high performance",
          highlight: "50ms latency",
        },
        {
          icon: Shield,
          title: "Anti-cheat Protection",
          description: "Advanced security measures to ensure fair gameplay",
          highlight: "99.9% accuracy",
        },
        {
          icon: Cloud,
          title: "Cloud Gaming",
          description: "Stream games instantly without downloads or installations",
          highlight: "4K streaming",
        },
        {
          icon: Palette,
          title: "Custom Graphics",
          description: "Stunning visuals with customizable art styles and themes",
          highlight: "Unreal Engine 5",
        },
      ],
    }),
    []
  );

  const featuresData = useMemo(
    () => ({
      title: "Comprehensive Gaming Solutions",
      subtitle: "End-to-end gaming development and management platform",
      features: [
        {
          icon: Monitor,
          title: "PC Gaming",
          description: "High-performance PC games with advanced graphics and physics",
          features: [
            "DirectX 12 Support",
            "Ray Tracing",
            "4K Resolution",
            "VR Ready",
            "Mod Support",
          ],
        },
        {
          icon: Smartphone,
          title: "Mobile Gaming",
          description: "Engaging mobile games optimized for all devices",
          features: [
            "Cross-platform",
            "Touch Controls",
            "Offline Mode",
            "Push Notifications",
            "Social Features",
          ],
        },
        {
          icon: Gamepad2,
          title: "Console Gaming",
          description: "Next-gen console games with cutting-edge technology",
          features: ["4K HDR", "60 FPS", "Ray Tracing", "DualSense Support", "Cloud Saves"],
        },
        {
          icon: Users,
          title: "Multiplayer Gaming",
          description: "Massive multiplayer experiences with global connectivity",
          features: [
            "1000+ Players",
            "Global Servers",
            "Matchmaking",
            "Voice Chat",
            "Leaderboards",
          ],
        },
      ],
    }),
    []
  );

  const useCasesData = useMemo(
    () => ({
      title: "Gaming Use Cases",
      subtitle: "Versatile solutions for every gaming need",
      useCases: [
        {
          icon: Building,
          title: "Game Studios",
          description: "Complete game development solutions for indie and AAA studios",
          features: [
            "Game Engine Integration",
            "Asset Management",
            "Version Control",
            "Testing Tools",
            "Deployment Pipeline",
          ],
        },
        {
          icon: Users,
          title: "Esports Platforms",
          description: "Professional esports infrastructure and tournament management",
          features: [
            "Tournament Brackets",
            "Live Streaming",
            "Prize Management",
            "Player Profiles",
            "Analytics",
          ],
        },
        {
          icon: Package,
          title: "Gaming Marketplaces",
          description: "Digital distribution platforms for games and content",
          features: [
            "Payment Processing",
            "DRM Protection",
            "Content Moderation",
            "Review System",
            "Recommendations",
          ],
        },
        {
          icon: BarChart3,
          title: "Gaming Analytics",
          description: "Comprehensive analytics and player behavior insights",
          features: [
            "Player Metrics",
            "Revenue Analytics",
            "Engagement Tracking",
            "A/B Testing",
            "Predictive Modeling",
          ],
        },
      ],
    }),
    []
  );

  const technologyData = useMemo(
    () => ({
      title: "Technology Stack",
      subtitle: "Built with cutting-edge technologies for optimal performance",
      technologies: [
        { name: "Unity", category: "Game Engine", icon: Code },
        { name: "Unreal Engine", category: "Game Engine", icon: Palette },
        { name: "Node.js", category: "Backend", icon: Code },
        { name: "MongoDB", category: "Database", icon: Database },
        { name: "AWS", category: "Cloud", icon: Cloud },
        { name: "WebGL", category: "Graphics", icon: Monitor },
        { name: "WebRTC", category: "Real-time", icon: Globe },
      ],
    }),
    []
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Gaming Software Development",
        description: heroData.description,
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
          url: "https://www.ctasis.com",
        },
        areaServed: "Worldwide",
        serviceType: "Gaming Software Development",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Gaming",
            item: "https://www.ctasis.com/industries/gaming",
          },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Interactive Gaming Solutions"
          badge="🎮 Gaming Solutions"
          title="Interactive Gaming"
          highlight="Solutions"
          description={`${heroData.subtitle} ${heroData.description}`}
          stats={heroData.stats.map((s) => ({
            number: s.value,
            label: s.label,
            icon: s.icon,
          }))}
          primaryCta={{ label: "Start Gaming", href: "/contact-us" }}
          secondaryCta={{ label: "Discover Gaming Solutions", href: "/portfolios" }}
        />

        {/* Key features — staggered offset 2×2 grid */}
        <SectionWrap>
          <SectionHeader
            badge="✨ Key Features"
            title="Why Choose Our"
            highlight="Gaming Platform?"
            description={keyFeaturesData.subtitle}
          />
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {keyFeaturesData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  {...fadeUp}
                  transition={{ delay: index * 0.06 }}
                  className={`relative rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-all ${
                    index % 2 === 1 ? "sm:mt-8" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${CYAN}18` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: NAVY }} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`${fraunces.className} text-lg sm:text-xl font-medium text-slate-900 mb-2`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-3">{feature.description}</p>
                      <Pill>{feature.highlight}</Pill>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </SectionWrap>

        {/* Comprehensive solutions — alternating zigzag */}
        <SectionWrap alt>
          <SectionHeader
            badge="Features"
            title="Comprehensive"
            highlight="Gaming Solutions"
            description={featuresData.subtitle}
          />
          <div className="space-y-12 sm:space-y-16">
            {featuresData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  {...fadeUp}
                  transition={{ delay: index * 0.04 }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${CYAN}18` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: NAVY }} />
                      </div>
                      <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                  <ul
                    className={`grid sm:grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    aria-label={`${feature.title} capabilities`}
                  >
                    {feature.features.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#F6F8FA] border border-slate-100 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </SectionWrap>

        {/* Use cases — 2×2 split with stat accents */}
        <SectionWrap>
          <SectionHeader
            badge="Use Cases"
            title="Gaming"
            highlight="Use Cases"
            description={useCasesData.subtitle}
          />
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {useCasesData.useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.article
                  key={useCase.title}
                  {...fadeUp}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.75rem] border border-slate-200/80 bg-white overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start gap-4">
                    <IconBox icon={Icon} />
                    <div>
                      <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                  <ul className="p-6 sm:p-8 pt-5 grid sm:grid-cols-2 gap-2" aria-label={`${useCase.title} features`}>
                    {useCase.features.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
          <motion.p {...fadeUp} className="mt-10 inline-flex items-center gap-2 text-sm text-slate-600">
            <Target className="w-4 h-4" style={{ color: CYAN }} />
            Explore our{" "}
            <Link href="/solutions" className="font-semibold hover:underline" style={{ color: NAVY }}>
              app solutions
            </Link>{" "}
            and{" "}
            <Link href="/case-studies" className="font-semibold hover:underline" style={{ color: NAVY }}>
              gaming case studies
            </Link>
          </motion.p>
        </SectionWrap>

        {/* Technology — horizontal scroll strip */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology"
            title="Technology"
            highlight="Stack"
            description={technologyData.subtitle}
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {technologyData.technologies.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.04 }}
                    className="flex-shrink-0 w-[150px] sm:w-[170px] snap-start"
                  >
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 text-center hover:border-[#13345A]/20 hover:shadow-md transition-all h-full">
                      <Icon className="w-7 h-7 mx-auto mb-3" style={{ color: NAVY }} />
                      <div className="text-sm font-semibold text-slate-900">{tech.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{tech.category}</div>
                    </div>
                  </motion.div>
                );
              })}
        </DotCarousel>
        </SectionWrap>

        <PageCTA
          title="Ready to Transform Your Gaming Business?"
          description="Join the ranks of successful gaming businesses built by Ctas. Get started with a free consultation and project estimate."
          primaryLabel="Start Free Consultation"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/contact-us"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
