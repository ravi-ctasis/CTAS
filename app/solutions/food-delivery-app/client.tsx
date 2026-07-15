"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Clock,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  MapPin,
  CreditCard,
  Bell,
  Search,
  Heart,
  ChefHat,
  Target,
  TrendingUp,
  BarChart3,
  Smartphone,
  Monitor,
  Server,
  CheckCircle2,
  Sparkles,
  Rocket,
  Package,
  Eye,
  Settings,
  Wifi,
  Battery,
  Signal,
  MessageCircle,
  Palette,
  Mail,
  Menu,
  ShoppingCart,
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
  { number: "200+", label: "Apps Built" },
  { number: "10M+", label: "Orders" },
  { number: "99.9%", label: "Uptime" },
];

const deliveryFeatures = [
  {
    icon: Truck,
    title: "Real-time Tracking",
    description: "Live GPS updates with ETA",
    metric: "2.5x faster delivery",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "AI-powered route optimization",
    metric: "30% time saved",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options",
    metric: "99.9% secure",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "AI restaurant recommendations",
    metric: "5x faster search",
  },
];

const overviewFeatures = [
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Live location updates with estimated delivery times and route optimization.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and fraud protection.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive insights into orders, customer behavior, and performance.",
  },
  {
    icon: Globe,
    title: "Multi-platform Support",
    description: "Seamless experience across iOS, Android, and web platforms.",
  },
];

const performanceMetrics = [
  { label: "Order Success Rate", value: "98.5%", progress: 98.5 },
  { label: "Customer Satisfaction", value: "4.9/5", progress: 98 },
  { label: "Delivery Speed", value: "22 min", progress: 85 },
  { label: "App Performance", value: "99.9%", progress: 99.9 },
];

const platforms = [
  {
    name: "iOS App",
    icon: Smartphone,
    features: ["Swift", "Core Data", "PushKit"],
  },
  {
    name: "Android App",
    icon: Smartphone,
    features: ["Kotlin", "Room", "WorkManager"],
  },
  {
    name: "Web Platform",
    icon: Monitor,
    features: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Admin Dashboard",
    icon: Settings,
    features: ["Vue.js", "Node.js", "MongoDB"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create stunning UI/UX designs and interactive prototypes",
    icon: Eye,
  },
  {
    step: "03",
    title: "Development",
    description: "Build your app using modern technologies and best practices",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing and smooth deployment to app stores",
    icon: CheckCircle2,
  },
];

const keyFeatures = [
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description:
      "Live location updates with estimated delivery times and route optimization for drivers and customers.",
    features: ["Live driver tracking", "ETA calculations", "Route optimization", "Geofencing"],
    span: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Bank-level security with end-to-end encryption, fraud protection, and secure payment processing.",
    features: ["SSL encryption", "Fraud detection", "Secure payments", "Data protection"],
    span: "",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Comprehensive insights into orders, customer behavior, and business performance metrics.",
    features: ["Sales analytics", "Customer insights", "Performance metrics", "Custom reports"],
    span: "",
  },
  {
    icon: Globe,
    title: "Multi-platform Support",
    description: "Native iOS and Android apps with responsive web platform for maximum reach.",
    features: ["iOS app", "Android app", "Web platform", "Cross-platform sync"],
    span: "",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Multiple payment methods including cards, digital wallets, and cash on delivery.",
    features: ["Credit/Debit cards", "Digital wallets", "Cash on delivery", "Split payments"],
    span: "",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Comprehensive user profiles, preferences, and loyalty programs for customer retention.",
    features: ["User profiles", "Preferences", "Loyalty programs", "Referral system"],
    span: "",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Smart notifications for order updates, promotions, and customer engagement.",
    features: ["Order updates", "Promotional alerts", "Custom notifications", "Scheduled messages"],
    span: "",
  },
  {
    icon: Database,
    title: "Inventory Management",
    description: "Real-time inventory tracking with automatic updates and low stock alerts.",
    features: ["Real-time updates", "Low stock alerts", "Category management", "Bulk operations"],
    span: "",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description: "Built-in chat support, ticket system, and help center for excellent customer service.",
    features: ["Live chat", "Ticket system", "Help center", "FAQ integration"],
    span: "md:col-span-2",
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
    id: "cloud",
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", description: "Cloud infrastructure", icon: Cloud },
      { name: "Docker", description: "Containerization", icon: Package },
      { name: "Kubernetes", description: "Container orchestration", icon: Server },
      { name: "CI/CD", description: "Automated deployment", icon: Zap },
      { name: "Nginx", description: "Web server", icon: Globe },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & APIs",
    items: [
      { name: "Stripe", description: "Payment processing", icon: CreditCard },
      { name: "Google Maps", description: "Location services", icon: MapPin },
      { name: "Firebase", description: "Backend services", icon: Zap },
      { name: "Twilio", description: "SMS & notifications", icon: MessageCircle },
      { name: "SendGrid", description: "Email services", icon: Mail },
      { name: "Analytics", description: "Data insights", icon: BarChart3 },
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Food Delivery App Development Services",
      description:
        "Custom food delivery app development: real-time order tracking, restaurant panels, delivery partner apps, and secure payments.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Food Delivery App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Food Delivery App",
          item: "https://www.ctasis.com/solutions/food-delivery-app",
        },
      ],
    },
  ],
};

const FoodHubMockup = () => (
  <div className="relative mx-auto max-w-xs sm:max-w-sm">
    <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 shadow-2xl border-4 border-slate-800">
      <div className="w-64 sm:w-72 h-[420px] sm:h-[480px] bg-[#F6F8FA] rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 overflow-hidden relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: CYAN }}>
              <ChefHat className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-800 font-bold text-sm">FoodHub</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-4 h-3" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-3 mb-4 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Search className="w-4 h-4" />
            Search restaurants...
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
            <div className="w-full h-20 sm:h-24 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg mb-2 relative">
              <div className="absolute top-1.5 right-1.5 bg-white/90 rounded-full p-1">
                <Heart className="w-3 h-3 text-red-500" />
              </div>
            </div>
            <div className="space-y-1.5 mb-2">
              <div className="h-2.5 bg-slate-200 rounded w-3/4" />
              <div className="h-2 bg-slate-200 rounded w-1/2" />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                4.8
              </div>
              <span>25-35 min</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-slate-200">
            <div className="w-full h-14 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg mb-1.5 relative">
              <div className="absolute top-1 right-1 bg-white/90 rounded-full p-0.5">
                <Clock className="w-2.5 h-2.5" style={{ color: CYAN }} />
              </div>
            </div>
            <div className="h-2 bg-slate-200 rounded w-2/3 mb-1" />
            <div className="h-2 bg-slate-200 rounded w-1/3" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-md">
            <div className="flex items-center justify-around">
              <Menu className="w-5 h-5" style={{ color: CYAN }} />
              <Search className="w-5 h-5 text-slate-400" />
              <ShoppingCart className="w-5 h-5 text-slate-400" />
              <Heart className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <motion.div
      {...fadeUp}
      className="absolute -top-4 -right-4 sm:-right-6 rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-lg hidden sm:block"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: CYAN }}>
          <Truck className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className={`${fraunces.className} text-base font-medium text-slate-900`}>Live</div>
          <div className="text-xs text-slate-500">Tracking</div>
        </div>
      </div>
    </motion.div>

    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-4 -left-4 sm:-left-6 rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-lg hidden sm:block"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: NAVY }}>
          <Clock className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className={`${fraunces.className} text-base font-medium text-slate-900`}>25 min</div>
          <div className="text-xs text-slate-500">ETA</div>
        </div>
      </div>
    </motion.div>
  </div>
);

const FoodDeliveryAppPage = () => {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Split hero with FoodHub mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Food Delivery App Development"
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
                  <Sparkles className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  #1 Food Delivery Platform
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Deliver{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Happiness
                  </span>{" "}
                  to Every Door
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Build the ultimate food delivery experience with AI-powered logistics, real-time tracking, and
                  seamless user interfaces that keep customers coming back.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Rocket className="w-4 h-4" />
                    Start Building
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:gap-6" role="list" aria-label="Food delivery statistics">
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
              >
                <FoodHubMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro band — diagonal accent strip */}
        <section className="relative py-10 sm:py-12 bg-white overflow-hidden" aria-label="Food delivery overview">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${CYAN}08 0%, transparent 50%, ${NAVY}06 100%)`,
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 text-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-3`}>
                Food Delivery App Development
              </h2>
              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
                Complete solutions for modern food delivery platforms
              </p>
            </motion.div>
          </div>
        </section>

        {/* Delivery features — horizontal snap scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Why Choose Us"
            title="The Complete"
            highlight="Food Delivery Solution"
            description="From concept to launch, we provide everything you need to build a successful food delivery platform."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {deliveryFeatures.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: CYAN }}>
                        {feature.metric}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </div>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        {/* Features + performance metrics — split screen */}
        <SectionWrap alt>
          <SectionHeader
            badge="Features"
            title="Powerful Features for"
            highlight="Modern Delivery"
            description="Live location updates, enterprise security, advanced analytics, and multi-platform support."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="space-y-8">
              {overviewFeatures.map((feature, i) => (
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
                  <TrendingUp className="w-8 h-8" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>
                  Performance Metrics
                </h3>
              </div>
              <div className="space-y-5">
                {performanceMetrics.map((metric) => (
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

        {/* Platforms — 2x2 asymmetric grid */}
        <SectionWrap>
          <SectionHeader
            badge="Platforms"
            title="Multi-Platform"
            highlight="Development"
            description="We build native and cross-platform solutions for all major platforms."
          />
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {platforms.map((platform, i) => (
              <motion.article
                key={platform.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow ${
                  i === 0 ? "sm:row-span-2 flex flex-col justify-center" : ""
                }`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${CYAN}18` }}
                >
                  <platform.icon className="w-7 h-7" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-4`}>{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Development process — horizontal timeline */}
        <SectionWrap alt>
          <SectionHeader
            badge="Our Process"
            title="How We Build"
            highlight="Your App"
            description="A proven development methodology that ensures quality, speed, and success."
          />
          <div className="relative">
            <div
              className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {processSteps.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative text-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-white shadow-md"
                    style={{ backgroundColor: CYAN }}
                  >
                    <phase.icon className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className={`${fraunces.className} text-3xl font-medium text-slate-300 mb-2`}
                    aria-hidden="true"
                  >
                    {phase.step}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Key features — bento grid */}
        <SectionWrap>
          <SectionHeader
            badge="Key Features"
            title="Powerful Features for"
            highlight="Modern Delivery Apps"
            description="Comprehensive features that make your food delivery app stand out from the competition."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {keyFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow ${feature.span}`}
              >
                <IconBox icon={feature.icon} />
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.description}</p>
                <ul className="space-y-1.5">
                  {feature.features.map((sub) => (
                    <li key={sub} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                      {sub}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Technology stack — tabbed sidebar */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology Stack"
            title="Built with"
            highlight="Modern Technologies"
            description="We use cutting-edge technologies to ensure your app is fast, secure, and scalable."
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
                <Target className="w-4 h-4" style={{ color: CYAN }} />
                See our{" "}
                <Link href="/industries/food-beverage" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  food & beverage industry
                </Link>{" "}
                solutions and{" "}
                <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  mobile app services
                </Link>
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Transform Your Food Delivery Business"
          description="Let's build the next generation of food delivery technology together."
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

export default FoodDeliveryAppPage;
