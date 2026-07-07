"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Package,
  MapPin,
  Clock,
  Shield,
  Smartphone,
  Users,
  Zap,
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  Globe,
  TrendingUp,
  Bell,
  Route,
  BarChart3,
  MessageSquare,
  CreditCard,
  PhoneCall,
  Brain,
  ShoppingBag,
  User,
  Palette,
  Server,
  Database,
  Lock,
  Cloud,
  Compass,
  Phone,
  Radio,
  Eye,
  GitBranch,
  Activity,
  AlertCircle,
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

const allBenefits = [
  "99.9% Delivery Success Rate",
  "Real-time Package Tracking",
  "24/7 Customer Support",
  "Insurance Coverage",
  "Flexible Delivery Options",
  "Eco-friendly Routes",
];

const heroStats = [
  { number: "1M+", label: "Packages Delivered" },
  { number: "24/7", label: "Support Available" },
  { number: "99.9%", label: "Success Rate" },
];

const features = [
  {
    icon: Package,
    title: "Smart Package Tracking",
    description: "Real-time tracking with GPS precision, delivery updates, and photo confirmations",
    highlights: ["Live GPS Tracking", "Delivery Photos", "SMS Updates", "Route Optimization"],
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description: "Advanced logistics with driver allocation, vehicle tracking, and route optimization",
    highlights: ["Driver Assignment", "Vehicle Monitoring", "Fuel Optimization", "Performance Analytics"],
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Same-day, next-day, and scheduled delivery options with time slot selection",
    highlights: ["Same-day Delivery", "Time Slots", "Priority Handling", "Rush Orders"],
  },
  {
    icon: MapPin,
    title: "Location Services",
    description: "Precise address verification, GPS navigation, and location-based services",
    highlights: ["Address Validation", "GPS Navigation", "Location Sharing", "Geofencing"],
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "Insurance coverage, secure packaging, and tamper-proof delivery solutions",
    highlights: ["Package Insurance", "Secure Packaging", "Tamper Detection", "Signature Capture"],
  },
  {
    icon: Users,
    title: "Driver Network",
    description: "Verified drivers, real-time communication, and performance monitoring",
    highlights: ["Background Checks", "Driver Ratings", "Live Chat", "Performance Tracking"],
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description: "Native apps for customers and drivers with offline capabilities",
    highlights: ["Customer App", "Driver App", "Offline Mode", "Push Notifications"],
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Business insights, delivery analytics, and performance reporting",
    highlights: ["Delivery Metrics", "Revenue Analytics", "Customer Insights", "Route Analytics"],
  },
];

const deliverySolutions = [
  {
    icon: ShoppingBag,
    title: "E-commerce Delivery",
    description: "Seamless integration with major e-commerce platforms",
    items: ["Shopify integration", "WooCommerce support", "Automated shipping", "Order tracking"],
  },
  {
    icon: Package,
    title: "Bulk Shipping",
    description: "Efficient handling of large volume shipments",
    items: ["Volume discounts", "Pallet handling", "Warehouse management", "Inventory tracking"],
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Global delivery network with customs handling",
    items: ["Customs clearance", "Documentation support", "Multi-language support", "Global tracking"],
  },
];

const securitySections = [
  {
    icon: Shield,
    title: "Data Protection",
    items: ["End-to-end encryption", "GDPR compliance", "SOC 2 Type II", "Regular security audits"],
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    items: ["Full package insurance", "Liability protection", "Accident coverage", "Claims processing"],
  },
  {
    icon: User,
    title: "Driver Verification",
    items: ["Background checks", "License verification", "Drug testing", "Regular monitoring"],
  },
];

const techStack = [
  { icon: Smartphone, title: "React Native", description: "Cross-platform mobile apps", category: "Frontend" },
  { icon: Globe, title: "Next.js", description: "Web application framework", category: "Frontend" },
  { icon: Zap, title: "TypeScript", description: "Type-safe development", category: "Frontend" },
  { icon: Palette, title: "Tailwind CSS", description: "Utility-first styling", category: "Frontend" },
  { icon: Server, title: "Node.js", description: "Backend API services", category: "Backend" },
  { icon: Database, title: "Express.js", description: "Web application framework", category: "Backend" },
  { icon: Shield, title: "JWT Authentication", description: "Secure user authentication", category: "Backend" },
  { icon: Lock, title: "bcrypt", description: "Password hashing", category: "Backend" },
  { icon: Database, title: "MongoDB", description: "NoSQL database", category: "Database" },
  { icon: Cloud, title: "AWS S3", description: "File storage", category: "Database" },
  { icon: BarChart3, title: "PostgreSQL", description: "Relational database", category: "Database" },
  { icon: Cloud, title: "AWS", description: "Cloud infrastructure", category: "Cloud" },
  { icon: Zap, title: "AWS Lambda", description: "Serverless functions", category: "Cloud" },
  { icon: Globe, title: "CloudFront", description: "Content delivery network", category: "Cloud" },
  { icon: Shield, title: "AWS IAM", description: "Identity management", category: "Cloud" },
  { icon: MapPin, title: "Google Maps API", description: "Real-time navigation", category: "Maps" },
  { icon: Compass, title: "Geolocation API", description: "GPS tracking", category: "Maps" },
  { icon: Route, title: "Routing Engine", description: "Optimized routes", category: "Maps" },
  { icon: Brain, title: "TensorFlow", description: "Machine learning models", category: "AI/ML" },
  { icon: TrendingUp, title: "Scikit-learn", description: "Predictive analytics", category: "AI/ML" },
  { icon: Zap, title: "OpenAI API", description: "AI-powered features", category: "AI/ML" },
  { icon: BarChart3, title: "Pandas", description: "Data analysis", category: "AI/ML" },
  { icon: Bell, title: "Socket.io", description: "Real-time updates", category: "Real-time" },
  { icon: MessageSquare, title: "Twilio", description: "SMS notifications", category: "Real-time" },
  { icon: Phone, title: "Push Notifications", description: "Mobile alerts", category: "Real-time" },
  { icon: Radio, title: "WebRTC", description: "Voice communication", category: "Real-time" },
  { icon: CreditCard, title: "Stripe", description: "Payment processing", category: "Payment" },
  { icon: Shield, title: "SSL/TLS", description: "Data encryption", category: "Payment" },
  { icon: Lock, title: "OAuth 2.0", description: "Social authentication", category: "Payment" },
  { icon: Eye, title: "2FA", description: "Two-factor authentication", category: "Payment" },
  { icon: GitBranch, title: "GitHub Actions", description: "CI/CD pipeline", category: "DevOps" },
  { icon: Activity, title: "New Relic", description: "Application monitoring", category: "DevOps" },
  { icon: AlertCircle, title: "Sentry", description: "Error tracking", category: "DevOps" },
  { icon: BarChart3, title: "Grafana", description: "Metrics visualization", category: "DevOps" },
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
      name: "Parcel Delivery App Development Services",
      description:
        "Custom parcel delivery apps: real-time tracking, route optimization, courier management, and secure payments.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Parcel Delivery App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Parcel Delivery App",
          item: "https://www.ctasis.com/solutions/parcel-delivery-app",
        },
      ],
    },
  ],
};

const DeliveryTrackingMockup = () => (
  <div className="relative hidden sm:block">
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>Live Tracking</h3>
        <Truck className="w-7 h-7 text-orange-500" />
      </div>

      <div className="rounded-2xl p-5 text-white mb-5" style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}>
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="opacity-90">Package #SPD123456</span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs">In Transit</span>
        </div>
        <div className="text-base font-semibold">New York → Los Angeles</div>
        <div className="text-sm opacity-90">Expected: Today, 3:30 PM</div>
      </div>

      <div className="mb-5">
        <h4 className="font-semibold text-slate-800 text-sm mb-3">Delivery Progress</h4>
        <div className="space-y-3">
          {[
            { status: "Package Picked Up", time: "9:00 AM", completed: true },
            { status: "In Transit", time: "10:30 AM", completed: true },
            { status: "Out for Delivery", time: "2:00 PM", completed: false, active: true },
            { status: "Delivered", time: "3:30 PM", completed: false },
          ].map((step) => (
            <div key={step.status} className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  step.completed ? "bg-emerald-500" : step.active ? "bg-blue-500 animate-pulse" : "bg-slate-300"
                }`}
              />
              <div>
                <div className={`text-sm font-medium ${step.completed || step.active ? "text-slate-900" : "text-slate-500"}`}>
                  {step.status}
                </div>
                <div className="text-xs text-slate-500">{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-[#F6F8FA] p-3 mb-5">
        <div className="text-xs font-medium text-slate-600 mb-2">Live Location</div>
        <div className="relative h-24 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
          <div className="absolute top-2 left-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-[9px] text-slate-600">Pickup</span>
          </div>
          <div className="absolute top-2 right-2 text-right">
            <MapPin className="w-4 h-4 text-emerald-500 ml-auto" />
            <span className="text-[9px] text-slate-600">Delivery</span>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center">
            <Truck className="w-5 h-5 mx-auto" style={{ color: CYAN }} />
            <span className="text-[9px] font-medium" style={{ color: NAVY }}>Driver</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-200">
            <motion.div
              className="h-full rounded-r-full"
              style={{ backgroundColor: CYAN }}
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2 text-[9px] text-slate-500">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Package Picked Up</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> In Transit</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Out for Delivery</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> Delivered</span>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-[#F6F8FA] p-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: NAVY }}>
          <Users className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-slate-900 text-sm">John Smith</div>
          <div className="text-xs text-slate-500">Your Delivery Driver</div>
          <div className="flex items-center gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-current" />
            ))}
            <span className="text-[10px] text-slate-500 ml-1">4.9</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          <span className="p-2 rounded-lg border border-slate-200" aria-hidden="true">
            <MessageSquare className="w-4 h-4" style={{ color: CYAN }} />
          </span>
          <span className="p-2 rounded-lg border border-slate-200" aria-hidden="true">
            <PhoneCall className="w-4 h-4" style={{ color: CYAN }} />
          </span>
        </div>
      </div>
    </div>

    <motion.div {...fadeUp} className="absolute -top-4 -right-4 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-lg hidden md:block">
      <Package className="w-7 h-7" style={{ color: CYAN }} />
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-3 -left-3 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <CheckCircle2 className="w-4 h-4" />
      Secure Delivery
    </motion.div>
  </div>
);

export default function ParcelDeliveryApp() {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label="Parcel Delivery App Development"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                  Fast & Reliable Delivery
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Swift{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Parcel
                  </span>
                  <br />
                  Delivery
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-6 max-w-xl">
                  Revolutionary courier platform with AI-powered logistics, real-time tracking, and lightning-fast
                  delivery across the globe
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {allBenefits.slice(0, 4).map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#C7D2D9]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: CYAN }} />
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <Play className="w-4 h-4" />
                    View Portfolios
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4" role="list" aria-label="Delivery statistics">
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
                        {stat.number.match(/^[\d.]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#93A3AF]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <DeliveryTrackingMockup />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-10 sm:py-12 bg-white overflow-hidden" aria-label="Platform benefits">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(135deg, ${CYAN}08 0%, transparent 50%, ${NAVY}06 100%)` }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {allBenefits.map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200/80 bg-[#F6F8FA] text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                  {benefit}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <SectionWrap>
          <SectionHeader
            badge="Advanced Features"
            title="Next-Generation"
            highlight="Delivery Technology"
            description="Revolutionary features powered by AI, machine learning, and cutting-edge logistics technology"
          />
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <motion.div {...fadeUp} className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                  <Brain className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <div>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>AI Route Optimization</h3>
                  <p className="text-sm text-slate-500">Machine learning algorithms for optimal delivery routes</p>
                </div>
              </div>
              <ul className="space-y-2">
                {["Real-time traffic analysis", "Weather condition integration", "Fuel efficiency optimization", "Dynamic route adjustments"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.08 }} className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                  <TrendingUp className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <div>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-1`}>Predictive Analytics</h3>
                  <p className="text-sm text-slate-500">Advanced forecasting for delivery optimization</p>
                </div>
              </div>
              <ul className="space-y-2">
                {["Demand prediction models", "Delivery time estimation", "Capacity planning", "Risk assessment"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {features.map((feature, i) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={feature.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>{feature.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-1.5">
                      {feature.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        <SectionWrap alt>
          <SectionHeader
            badge="Delivery Solutions"
            title="Comprehensive"
            highlight="Delivery Services"
            description="Tailored delivery solutions for every business need and package type"
          />
          <div className="space-y-6 lg:space-y-8">
            {deliverySolutions.map((solution, i) => (
              <motion.article
                key={solution.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`flex flex-col sm:flex-row gap-6 sm:gap-10 items-start rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full sm:w-1/3 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                    <solution.icon className="w-7 h-7" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{solution.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{solution.description}</p>
                  </div>
                </div>
                <ul className="w-full sm:w-2/3 grid sm:grid-cols-2 gap-2.5">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap>
          <SectionHeader
            badge="Security & Compliance"
            title="Enterprise-Grade"
            highlight="Security"
            description="Bank-level security with comprehensive compliance and data protection"
          />
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {securitySections.map((section, i) => (
              <motion.div
                key={section.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${CYAN}18` }}>
                  <section.icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-4`}>{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap alt>
          <SectionHeader
            badge="Technology Stack"
            title="Built with"
            highlight="Modern Technologies"
            description="Comprehensive tech stack powering our advanced delivery platform with cutting-edge tools and frameworks"
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
                <Truck className="w-4 h-4" style={{ color: CYAN }} />
                See our{" "}
                <Link href="/industries/transportation" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  transportation industry
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
          title="Ready to Transform Your Delivery Experience?"
          description="Join thousands of businesses and individuals who trust SwiftParcel for their courier needs"
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
}
