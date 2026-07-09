"use client";

import { motion } from "framer-motion";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  HandHeart,
  Shield,
  Star,
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  CheckCircle2,
  Globe,
  Building,
  Brain,
  ShoppingCart,
  Database,
  Cloud,
  Smartphone,
  Phone,
  Truck,
  GraduationCap,
  Utensils,
  Home,
  CreditCard,
  Activity,
  ArrowRight,
  Sparkles,
  MapPin,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { COMPANY_STATS, COMPANY_STAT_COPY } from "@/data/company-stats";
import Image from "next/image";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const NAVY = "#13345A";
const CYAN = "#249BCA";
const CYAN_LIGHT = "#6FC3E4";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest">
    {children}
  </div>
);

const SectionHeader = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "center" | "left";
}) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.5 }}
    className={align === "center" ? "text-center mb-8 sm:mb-10" : "mb-10"}
  >
    <SectionBadge>{badge}</SectionBadge>
    <h2
      className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mt-4 mb-4 ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {title}{" "}
      {highlight && (
        <span className="italic" style={{ color: CYAN }}>
          {highlight}
        </span>
      )}
    </h2>
    <p
      className={`text-slate-500 text-base sm:text-lg leading-relaxed max-w-3xl ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {description}
    </p>
  </motion.div>
);

const stats = [
  { number: COMPANY_STATS.projectsDelivered, label: "Projects Delivered", icon: Target, description: "Retail, Healthcare & Finance" },
  { number: COMPANY_STATS.certifiedDevelopers, label: "Certified Developers", icon: Users, description: "AI, Python, TypeScript & C#" },
  { number: COMPANY_STATS.marketplaces, label: "Marketplaces", icon: ShoppingCart, description: "Amazon, eBay, Walmart & More" },
  { number: "2019", label: "Founded", icon: Building, description: "Ahmedabad, Gujarat, India" },
];

const coreValues = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We maintain the highest standards of quality in every project, ensuring exceptional results that exceed expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly explore cutting-edge technologies and creative solutions to stay ahead of industry trends.",
  },
  {
    icon: HandHeart,
    title: "Collaboration",
    description:
      "We believe in working together with our clients and team members to achieve shared success and growth.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold honesty, transparency, and ethical practices in all our business relationships and deliverables.",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description:
      "We leverage GPT, Claude, Gemini and Cursor alongside expert engineers to build intelligent, scalable solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We serve clients worldwide with expertise in international marketplace integrations and global solutions.",
  },
];

const services = [
  {
    icon: ShoppingCart,
    title: "Marketplace Integration",
    description: `Amazon SP-API, eBay, Walmart, TikTok Shop, Shopify, and ${COMPANY_STATS.marketplaces} global platforms`,
    features: ["Multi-Platform Support", "AI-Powered Automation", "Real-time Sync"],
    href: "/services/marketplace",
  },
  {
    icon: Code,
    title: "AI-Augmented Web Development",
    description: "MERN Stack, MEAN Stack, WordPress, Laravel — shipped faster with AI-assisted workflows",
    features: ["Frontend & Backend", "CMS Development", "API Integration"],
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS/Android and cross-platform solutions with React Native, Flutter",
    features: ["Native Apps", "Cross-Platform", "UI/UX Design"],
    href: "/services/mobile-apps",
  },
  {
    icon: Database,
    title: "E-Commerce Solutions",
    description: "WooCommerce, Shopify, Magento with secure payment gateways and AI recommendations",
    features: ["Platform Development", "Payment Integration", "AI Recommendations"],
    href: "/services/e-commerce-solutions",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "OpenAI, Claude, Gemini integration, AI agents, RAG systems, and intelligent automation",
    features: ["GPT & Claude", "AI Agents", "Smart Automation"],
    href: "/services/ai-ml",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Azure, AWS, Docker, Kubernetes with automated testing and CI/CD pipelines",
    features: ["Cloud Deployment", "DevOps Automation", "24/7 Monitoring"],
    href: "/services/devops",
  },
];

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, target audience, and technical requirements through comprehensive discovery sessions.",
    icon: Search,
    features: ["Business Analysis", "Requirements Gathering", "Technical Planning", "Project Timeline"],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our design team creates intuitive interfaces and interactive prototypes aligned with your brand and UX goals.",
    icon: Palette,
    features: ["UI/UX Design", "Wireframing", "Prototyping", "Brand Integration"],
  },
  {
    step: "03",
    title: "AI-Augmented Development",
    description:
      "Certified developers build your solution using modern tech and AI-assisted workflows for speed and quality.",
    icon: Code,
    features: ["Frontend Development", "Backend Development", "API Integration", "Database Design"],
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all devices.",
    icon: TestTube,
    features: ["Functional Testing", "Performance Testing", "Security Testing", "Cross-browser Testing"],
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description:
      "We deploy to production with proper monitoring, backup systems, and performance optimization.",
    icon: Rocket,
    features: ["Cloud Deployment", "Performance Optimization", "Monitoring Setup", "Launch Support"],
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description:
      "Ongoing support, maintenance, and updates to ensure your solution continues to perform at its best.",
    icon: Shield,
    features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Security Patches"],
  },
];

const industries = [
  { icon: ShoppingCart, title: "Retail & E-Commerce", description: "AI-powered stores and marketplace integrations", href: "/industries/retail" },
  { icon: Heart, title: "Healthcare & Life Sciences", description: "HIPAA-compliant portals and telemedicine apps", href: "/industries/healthcare" },
  { icon: CreditCard, title: "Banking & Finance", description: "PCI DSS compliant fintech and payment solutions", href: "/industries/banking-finance" },
  { icon: Truck, title: "Transportation & Logistics", description: "Route optimization and supply chain management", href: "/industries/transportation" },
  { icon: GraduationCap, title: "Education & E-Learning", description: "AI-driven LMS and student management systems", href: "/industries/education" },
  { icon: Building, title: "Enterprise & Corporate", description: "Scalable architectures and process automation", href: "/industries/enterprise" },
  { icon: Utensils, title: "Food & Beverage", description: "Restaurant management and delivery platforms", href: "/industries/food-beverage" },
  { icon: Home, title: "Real Estate", description: "Property management and virtual tour platforms", href: "/industries/real-estate" },
  { icon: Activity, title: "Wellness & Fitness", description: "Health tracking and fitness management apps", href: "/industries/wellness" },
];

const marketplaces = [
  {
    logo: "/amazon.svg",
    title: "Amazon",
    description: "Complete SP-API integration with FBA/FBM management",
    href: "/services/amazon-services",
  },
  {
    logo: "/ebay-logo.svg",
    title: "eBay",
    description: "Listing management, order processing, and inventory sync",
    href: "/services/marketplace",
  },
  {
    logo: "/walmart.webp",
    title: "Walmart",
    description: "Product management and order fulfillment automation",
    href: "/services/marketplace",
  },
  {
    logo: "/shopify-logo.svg",
    title: "Shopify",
    description: "Custom themes, apps, and third-party integrations",
    href: "/services/e-commerce-solutions",
  },
  {
    logo: "/tiktok.webp",
    title: "TikTok Shop",
    description: "Social commerce and influencer marketing tools",
    href: "/services/marketplace",
  },
  {
    logo: "/etsy-logo.webp",
    title: "Etsy",
    description: "Handmade product management and seller tools",
    href: "/services/marketplace",
  },
];

const storyHighlights = [
  COMPANY_STAT_COPY.projectsDelivered + " Successfully",
  "AI-Augmented Development with GPT, Claude & Gemini",
  `${COMPANY_STATS.certifiedDevelopers} Certified Technology Experts`,
  `${COMPANY_STATS.marketplaces} Global Marketplace Integrations`,
];

const teamMetrics = [
  { icon: Users, label: "Team Size", value: `${COMPANY_STATS.teamMembers} Professionals` },
  { icon: Target, label: "Success Rate", value: "98% Client Satisfaction" },
  { icon: Globe, label: "Global Reach", value: `${COMPANY_STATS.countries} Countries` },
  { icon: Award, label: "Experience", value: `${COMPANY_STATS.yearsOfExcellence} Years` },
];

const IconCard = ({
  icon: Icon,
  logo,
  title,
  description,
  features,
  href,
  index,
}: {
  icon?: LucideIcon;
  logo?: string;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  index: number;
}) => {
  const content = (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300"
    >
      {logo ? (
        <div className="w-14 h-14 rounded-xl bg-[#F6F8FA] border border-slate-100 flex items-center justify-center mb-5 p-1">
          <Image
            src={logo}
            alt={`${title} logo`}
            width={40}
            height={40}
            className="object-contain w-full h-full"
          />
        </div>
      ) : Icon ? (
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
          style={{ backgroundColor: `${CYAN}18` }}
        >
          <Icon className="w-5 h-5" style={{ color: NAVY }} />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
              {f}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: NAVY }}>
          Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      )}
    </motion.div>
  );

  return href ? <Link href={href} className="block h-full">{content}</Link> : content;
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />

      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="About Ctas Info Services LLP"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(36,155,202,0.22) 0%, transparent 70%)" }}
            animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-8 sm:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                About Ctas Info Services LLP
              </div>
              <h1
                className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-medium text-[#F2F6F9] leading-[1.12] tracking-tight mb-6`}
              >
                India&apos;s Pioneering{" "}
                <span className="italic" style={{ color: CYAN_LIGHT }}>
                  AI-Powered Technology Firm
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed max-w-3xl mx-auto">
                Ctas Info Services LLP specializes in AI-augmented web development, mobile apps, and
                e-commerce automation since 2019. Our team of {COMPANY_STATS.certifiedDevelopers} certified professionals has delivered
                {COMPANY_STATS.projectsDelivered} projects across retail, logistics, education, healthcare, and financial services —
                combining deep domain expertise with GPT, Claude, Gemini and Cursor to drive measurable
                growth for businesses in India and worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm p-5 sm:p-6 text-center hover:bg-white/[0.08] transition-colors"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-3" style={{ color: CYAN }} />
                  <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-[#F2F6F9]`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-[#C7D2D9] mt-1">{stat.label}</div>
                  <div className="text-xs text-[#7A8B97] mt-1 leading-snug">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
                <SectionBadge>Our Story</SectionBadge>
                <h2
                  className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mt-4 mb-5 leading-tight`}
                >
                  Transforming Businesses Through{" "}
                  <span className="italic" style={{ color: NAVY }}>
                    Smart Technology
                  </span>
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
                  Since 2019, Ctas Info Services LLP has been at the forefront of digital
                  transformation — helping businesses harness AI-augmented engineering, marketplace
                  automation, and modern web platforms to achieve unprecedented growth and efficiency.
                </p>
                <div className="space-y-3 mb-8">
                  {storyHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: NAVY }} />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy,
                    near BSNL Office, Gota, Ahmedabad, Gujarat 382470
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="bg-white border border-slate-200/80 rounded-[1.75rem] p-7 sm:p-8 shadow-sm">
                  <div className="grid grid-cols-2 gap-4 sm:gap-5">
                    {teamMetrics.map((m) => (
                      <div
                        key={m.label}
                        className="text-center p-4 sm:p-5 rounded-2xl bg-[#F6F8FA] border border-slate-100"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                          style={{ backgroundColor: `${NAVY}12` }}
                        >
                          <m.icon className="w-5 h-5" style={{ color: NAVY }} />
                        </div>
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">{m.label}</h3>
                        <p className="text-xs text-slate-500">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-5 rounded-2xl p-6 flex items-center gap-5"
                    style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <CalendarDays className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`${fraunces.className} text-3xl font-medium text-white`}>{COMPANY_STATS.yearsOfExcellence}</div>
                      <div className="text-sm font-semibold text-white/90">Years of Excellence</div>
                      <div className="text-xs text-white/50 mt-0.5">Delivering since 2019</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-10 sm:py-12 lg:py-14 section-bg-dots">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader
              badge="Our Values"
              title="Core Values That"
              highlight="Drive Our Success"
              description="We build strong relationships based on trust, innovation, and excellence. Our values guide every decision and every solution we deliver."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, ${CYAN})` }}
                  >
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader
              badge="Our Services"
              title="Comprehensive"
              highlight="Technology Solutions"
              description="End-to-end technology solutions — from AI integration and marketplace automation to cloud infrastructure — built to help businesses grow and scale."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {services.map((service, i) => (
                <IconCard key={service.title} {...service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Development Process ── */}
        <section className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader
              badge="Our Process"
              title="AI-Augmented"
              highlight="Development Process"
              description="A proven, systematic approach to deliver high-quality solutions that meet your business objectives and exceed user expectations."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {developmentProcess.map((process, i) => (
                <motion.div
                  key={process.step}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative bg-[#F6F8FA] border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-[#13345A]/15 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <span
                    className={`${fraunces.className} absolute top-4 right-5 text-4xl font-medium text-slate-100 select-none`}
                  >
                    {process.step}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <process.icon className="w-5 h-5" style={{ color: NAVY }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 relative">{process.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 relative">{process.description}</p>
                  <ul className="space-y-2 relative">
                    {process.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: CYAN }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="py-10 sm:py-12 lg:py-14 section-bg-dots">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader
              badge="Industries"
              title="Industries We"
              highlight="Specialize In"
              description="Deep domain expertise across multiple industries enables us to deliver tailored solutions that drive real business value."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {industries.map((industry, i) => (
                <Link key={industry.title} href={industry.href} className="group block">
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="flex items-start gap-4 bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 hover:border-[#13345A]/20 hover:shadow-md transition-all duration-300 h-full"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${NAVY}12` }}
                    >
                      <industry.icon className="w-5 h-5" style={{ color: NAVY }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-[#13345A] transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{industry.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marketplaces ── */}
        <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <SectionHeader
              badge="Marketplace Expertise"
              title="Global"
              highlight="Marketplace Integration"
              description="We integrate with major global marketplaces, helping businesses expand their reach and automate operations across multiple platforms."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {marketplaces.map((mp, i) => (
                <IconCard key={mp.title} {...mp} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-10 sm:py-12">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="relative rounded-[1.75rem] px-8 sm:px-12 lg:px-16 py-8 sm:py-10 overflow-hidden text-center"
              style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}
            >
              <div
                className="absolute -top-20 -right-16 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(36,155,202,0.35) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative max-w-4xl mx-auto">
                <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4`}>
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8">
                  Let&apos;s discuss how our AI-augmented expertise and e-commerce mastery can drive
                  your growth. Our experts are ready to provide personalized solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[#08141F] text-sm font-semibold rounded-full transition-all duration-200 shadow-lg"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Phone className="w-4 h-4" />
                    Book a Free Consultation
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white border border-white/20 text-sm font-semibold rounded-full hover:bg-white/[0.06] transition-all duration-200"
                  >
                    View Our Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default AboutUsPage;
