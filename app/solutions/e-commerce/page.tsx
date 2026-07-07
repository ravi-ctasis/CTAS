"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Database,
  Headphones,
  Rocket,
  Code,
  Server,
  Cloud,
  CreditCard,
  HardDrive,
  Play,
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

const trustIndicators = [
  { icon: Shield, text: "PCI DSS Compliant" },
  { icon: Zap, text: "99.9% Uptime" },
  { icon: Users, text: "24/7 Support" },
];

const stats = [
  { number: "500+", label: "E-Commerce Projects", icon: ShoppingCart },
  { number: "50M+", label: "Products Managed", icon: Database },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { number: "24/7", label: "Support Available", icon: Headphones },
];

const solutions = [
  {
    icon: ShoppingCart,
    title: "Multi-Platform Stores",
    description: "Build stores for Shopify, WooCommerce, Magento, and custom platforms",
    features: ["Responsive Design", "Mobile-First", "Cross-Browser"],
  },
  {
    icon: Globe,
    title: "Global Marketplace Integration",
    description: "Connect with Amazon, eBay, Walmart, and regional marketplaces",
    features: ["API Integration", "Inventory Sync", "Order Management"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "PCI DSS, GDPR, and industry-standard security protocols",
    features: ["SSL Certificates", "Fraud Protection", "Data Encryption"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds and SEO optimization",
    features: ["CDN Integration", "Image Optimization", "Caching"],
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Intuitive navigation and personalized shopping journeys",
    features: ["User Analytics", "A/B Testing", "Personalization"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Comprehensive reporting and business intelligence tools",
    features: ["Sales Analytics", "Customer Behavior", "ROI Tracking"],
  },
];

const powerfulFeatures = [
  {
    icon: ShoppingCart,
    title: "Multi-Platform Integration",
    description:
      "Seamlessly connect Shopify, WooCommerce, Magento, and custom platforms with unified inventory and order management.",
    features: ["API Integration", "Real-time Sync", "Centralized Control", "Cross-Platform Analytics"],
    span: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with PCI DSS compliance, fraud detection, and advanced encryption protocols.",
    features: ["SSL Certificates", "Fraud Protection", "GDPR Compliance", "Secure Payments"],
    span: "",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast loading speeds with CDN integration, image optimization, and advanced caching.",
    features: ["CDN Integration", "Image Optimization", "Lazy Loading", "Performance Monitoring"],
    span: "",
  },
  {
    icon: Users,
    title: "Customer Experience",
    description:
      "Personalized shopping journeys with AI-powered recommendations and intelligent search.",
    features: ["AI Recommendations", "Smart Search", "Personalization", "User Analytics"],
    span: "",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive business intelligence with real-time reporting and predictive insights.",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "ROI Tracking"],
    span: "",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Multi-language, multi-currency support with localized payment methods and shipping.",
    features: ["Multi-language", "Multi-currency", "Local Payments", "Global Shipping"],
    span: "md:col-span-2",
  },
];

const scaleBullets = [
  "Handle millions of products with lightning-fast search",
  "Process thousands of orders per minute",
  "99.9% uptime guarantee with global CDN",
  "Auto-scaling infrastructure for peak traffic",
];

const techCategories = [
  {
    id: "all",
    title: "All",
    items: [] as { name: string; category: string; icon: React.ElementType }[],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [{ name: "React/Next.js", category: "Frontend", icon: Code }],
  },
  {
    id: "backend",
    title: "Backend",
    items: [{ name: "Node.js/Express", category: "Backend", icon: Server }],
  },
  {
    id: "database",
    title: "Database",
    items: [{ name: "MongoDB/PostgreSQL", category: "Database", icon: Database }],
  },
  {
    id: "cloud",
    title: "Cloud",
    items: [{ name: "AWS/Azure", category: "Cloud", icon: Cloud }],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    items: [{ name: "Shopify API", category: "E-Commerce", icon: ShoppingCart }],
  },
  {
    id: "payments",
    title: "Payments",
    items: [{ name: "Stripe/PayPal", category: "Payments", icon: CreditCard }],
  },
  {
    id: "devops",
    title: "DevOps",
    items: [{ name: "Docker/Kubernetes", category: "DevOps", icon: HardDrive }],
  },
];

techCategories[0].items = techCategories.slice(1).flatMap((c) => c.items);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "E-Commerce Solutions",
      description:
        "Ctas builds scalable, secure, and high-performing online stores that drive sales and customer engagement across all platforms.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "E-Commerce Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "E-Commerce",
          item: "https://www.ctasis.com/solutions/e-commerce",
        },
      ],
    },
  ],
};

const ProjectifyMockup = () => (
  <div className="relative mx-auto max-w-lg hidden lg:block">
    <div className="relative">
      <div className="rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 p-1 shadow-2xl transform rotate-2">
        <div className="rounded-lg bg-white border border-slate-200 overflow-hidden shadow-xl">
          <div className="bg-white border-b border-slate-100 px-4 py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: NAVY }}>
                  <ShoppingCart className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-slate-800 font-semibold text-sm">Projectify</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-slate-200 rounded-full" />
                <div className="w-4 h-4 bg-slate-200 rounded-full" />
                <div className="w-6 h-6 bg-slate-300 rounded-full" />
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Revenue", value: "$45.2K" },
                { label: "Orders", value: "1,234" },
                { label: "Growth", value: "+23%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-2.5 text-white text-center"
                  style={{ backgroundColor: NAVY }}
                >
                  <div className={`${fraunces.className} text-sm font-medium`}>{stat.value}</div>
                  <div className="text-[10px] opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#F6F8FA] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-800 text-xs">Recent Orders</h3>
                <span className="text-xs font-medium" style={{ color: CYAN }}>
                  View All
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { id: "#1234", customer: "John Doe", amount: "$299.99", status: "Delivered" },
                  { id: "#1235", customer: "Jane Smith", amount: "$199.99", status: "Processing" },
                  { id: "#1236", customer: "Mike Johnson", amount: "$399.99", status: "Shipped" },
                ].map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between py-1.5 border-b border-slate-200/80 last:border-0 text-[10px]"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                      <span className="text-slate-500">{order.id}</span>
                      <span className="text-slate-800 font-medium truncate">{order.customer}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-slate-800 font-medium">{order.amount}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-full text-[9px] ${
                          order.status === "Delivered"
                            ? "bg-emerald-100 text-emerald-700"
                            : order.status === "Processing"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <span
                className="flex-1 text-center text-[10px] font-medium py-2 px-2 rounded-lg text-white"
                style={{ backgroundColor: CYAN }}
              >
                Add Product
              </span>
              <span className="flex-1 text-center text-[10px] font-medium py-2 px-2 rounded-lg bg-slate-100 text-slate-700">
                View Analytics
              </span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        {...fadeUp}
        className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4" style={{ color: CYAN }} />
          <span className="text-xs font-medium text-slate-700">Analytics</span>
        </div>
      </motion.div>
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.08 }}
        className="absolute -bottom-3 -left-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-medium text-slate-700">Global</span>
        </div>
      </motion.div>
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.12 }}
        className="absolute top-1/2 -left-10 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden xl:block"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4" style={{ color: NAVY }} />
          <span className="text-xs font-medium text-slate-700">Secure</span>
        </div>
      </motion.div>
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.16 }}
        className="absolute top-1/2 -right-12 rounded-xl p-3 shadow-lg text-center text-white"
        style={{ backgroundColor: NAVY }}
      >
        <div className={`${fraunces.className} text-lg font-medium`}>99.9%</div>
        <div className="text-[10px] opacity-90">Uptime</div>
      </motion.div>
    </div>
  </div>
);

export default function EcommercePage() {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Split hero with Projectify dashboard mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label="E-Commerce Development"
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
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: CYAN_LIGHT }} />
                  Trusted by 500+ Businesses
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Build Your{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    E-Commerce Empire
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Transform your business with cutting-edge e-commerce solutions. We build scalable, secure, and
                  high-performing online stores that drive sales and customer engagement across all platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    <Play className="w-4 h-4" />
                    View Portfolio
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-[#93A3AF]">
                  {trustIndicators.map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" style={{ color: CYAN }} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <ProjectifyMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats — animated counter grid */}
        <SectionWrap>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="E-commerce statistics">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="text-center rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-md transition-shadow"
                role="listitem"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3" style={{ color: CYAN }} />
                <div className={`${fraunces.className} text-3xl sm:text-4xl font-medium mb-2`} style={{ color: NAVY }}>
                  {stat.number.match(/^[\d.]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        {/* Complete solutions — horizontal scroll */}
        <SectionWrap alt>
          <SectionHeader
            badge="Solutions"
            title="Complete"
            highlight="E-Commerce Solutions"
            description="From concept to launch, we provide end-to-end e-commerce development services"
          />
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {solutions.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[300px] sm:w-[320px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:shadow-xl transition-all">
                    <IconBox icon={item.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Powerful features — bento grid */}
        <SectionWrap>
          <SectionHeader
            badge="Features"
            title="Powerful"
            highlight="E-Commerce Features"
            description="Discover the advanced capabilities that make our e-commerce solutions stand out from the competition"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {powerfulFeatures.map((feature, i) => (
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
                  {feature.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Scale & performance — split with CTA card */}
        <SectionWrap alt>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-6`}>
                Built for Scale & Performance
              </h2>
              <ul className="space-y-4">
                {scaleBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-[1.5rem] p-8 sm:p-10 text-white overflow-hidden"
              style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
            >
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(36,155,202,0.35) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${CYAN}30` }}
                >
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className={`${fraunces.className} text-2xl font-medium mb-3`}>Ready to Scale?</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto">
                  Our e-commerce solutions are designed to grow with your business, from startup to enterprise.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200"
                  style={{ backgroundColor: CYAN }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <motion.div
                {...fadeUp}
                className="absolute -top-3 -right-3 rounded-xl border border-white/10 bg-white p-3 shadow-lg text-center"
              >
                <div className={`${fraunces.className} text-xl font-medium`} style={{ color: NAVY }}>
                  500+
                </div>
                <div className="text-[10px] text-slate-500">Projects Delivered</div>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.08 }}
                className="absolute -bottom-3 -left-3 rounded-xl border border-white/10 bg-white p-3 shadow-lg text-center"
              >
                <div className={`${fraunces.className} text-xl font-medium text-emerald-600`}>99.9%</div>
                <div className="text-[10px] text-slate-500">Uptime</div>
              </motion.div>
            </motion.div>
          </div>
        </SectionWrap>

        {/* Technologies — tabbed sidebar */}
        <SectionWrap>
          <SectionHeader
            badge="Technology"
            title="Cutting-Edge"
            highlight="Technologies"
            description="Built with modern tech stack for scalability and performance"
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
                      className="rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-[#13345A]/20 hover:shadow-md transition-all text-center"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: `${CYAN}18` }}
                      >
                        <tech.icon className="w-6 h-6" style={{ color: NAVY }} />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">{tech.name}</h3>
                      <span
                        className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: `${CYAN}18`, color: NAVY }}
                      >
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
                <ShoppingCart className="w-4 h-4" style={{ color: CYAN }} />
                Explore our{" "}
                <Link href="/services/web-development" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  web development
                </Link>{" "}
                and{" "}
                <Link href="/industries/food-beverage" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  retail solutions
                </Link>
              </motion.p>
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Launch Your E-Commerce Success?"
          description="Let's discuss your project and create a custom solution that drives results"
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
