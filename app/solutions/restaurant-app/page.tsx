"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChefHat,
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
  CreditCard,
  Target,
  TrendingUp,
  BarChart3,
  Smartphone,
  Monitor,
  Server,
  CheckCircle2,
  Sparkles,
  Rocket,
  Menu,
  Package,
  Palette,
  Receipt,
  Truck,
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

const restaurantFeatures = [
  {
    icon: ChefHat,
    title: "Kitchen Management",
    description: "Real-time order tracking & prep",
    metric: "40% faster service",
  },
  {
    icon: Receipt,
    title: "Smart POS System",
    description: "Integrated payment & inventory",
    metric: "99.9% accuracy",
  },
  {
    icon: Users,
    title: "Customer Engagement",
    description: "Loyalty programs & feedback",
    metric: "3x customer retention",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time business insights",
    metric: "25% revenue increase",
  },
];

const restaurantModules = [
  {
    icon: Menu,
    title: "Order Management",
    description: "Streamlined ordering process with real-time updates",
    features: ["Table reservations", "Online ordering", "Kitchen notifications", "Order tracking"],
  },
  {
    icon: ChefHat,
    title: "Kitchen Operations",
    description: "Efficient kitchen workflow and staff management",
    features: ["Recipe management", "Prep lists", "Cooking timers", "Staff scheduling"],
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Enhanced dining experience and customer satisfaction",
    features: ["Digital menus", "Table service", "Feedback system", "Loyalty rewards"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Data-driven insights for business growth",
    features: ["Sales analytics", "Inventory reports", "Customer insights", "Performance metrics"],
  },
];

const integrations = [
  {
    icon: CreditCard,
    name: "Payment Gateways",
    items: ["Stripe", "Square", "PayPal", "Apple Pay"],
  },
  {
    icon: Receipt,
    name: "POS Systems",
    items: ["Toast", "Square POS", "Lightspeed", "Shopify POS"],
  },
  {
    icon: Truck,
    name: "Delivery Partners",
    items: ["Uber Eats", "DoorDash", "Grubhub", "Postmates"],
  },
  {
    icon: Target,
    name: "Marketing Tools",
    items: ["Mailchimp", "HubSpot", "Google Ads", "Facebook Ads"],
  },
];

const whyChoose = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description:
      "Get your restaurant up and running in under 24 hours with our streamlined onboarding process.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption and PCI DSS compliance for all transactions.",
  },
  {
    icon: Globe,
    title: "Global Support",
    description:
      "24/7 customer support in multiple languages with dedicated account managers for enterprise clients.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time insights into sales, inventory, customer behavior, and operational efficiency.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Optimized for mobile devices with offline capabilities and push notifications for real-time updates.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business, supporting from single locations to multi-chain operations.",
  },
];

const techStack = [
  { icon: Code, title: "React Native", description: "Cross-platform mobile apps", category: "Frontend" },
  { icon: Code, title: "TypeScript", description: "Type-safe development", category: "Frontend" },
  { icon: Palette, title: "Tailwind CSS", description: "Utility-first styling", category: "Frontend" },
  { icon: Database, title: "Redux Toolkit", description: "State management", category: "Frontend" },
  { icon: Server, title: "Node.js", description: "JavaScript runtime for backend", category: "Backend" },
  { icon: Server, title: "Express.js", description: "Web application framework", category: "Backend" },
  { icon: Database, title: "PostgreSQL", description: "Relational database system", category: "Backend" },
  { icon: Cloud, title: "AWS", description: "Cloud infrastructure and services", category: "Cloud & DevOps" },
  { icon: Package, title: "Docker", description: "Containerization platform", category: "Cloud & DevOps" },
  { icon: Server, title: "Kubernetes", description: "Container orchestration", category: "Cloud & DevOps" },
  { icon: Zap, title: "CI/CD", description: "Continuous integration and deployment", category: "Cloud & DevOps" },
  { icon: Receipt, title: "POS Integration", description: "Point-of-sale system integration", category: "Restaurant Specific" },
  { icon: Monitor, title: "Kitchen Display", description: "Kitchen display system", category: "Restaurant Specific" },
  { icon: Package, title: "Inventory Management", description: "Stock and inventory tracking", category: "Restaurant Specific" },
  { icon: Star, title: "Loyalty System", description: "Customer loyalty and rewards", category: "Restaurant Specific" },
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
      name: "Restaurant App Development Services",
      description:
        "Advanced restaurant apps with online ordering, table management, kitchen display systems, and seamless dining experiences.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Restaurant App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Restaurant App",
          item: "https://www.ctasis.com/solutions/restaurant-app",
        },
      ],
    },
  ],
};

const recentOrders = [
  { id: "1247", detail: "Table 5 • 2 items", amount: "$32", time: "5 min ago", bg: "bg-emerald-50" },
  { id: "1248", detail: "Delivery • 3 items", amount: "$45", time: "3 min ago", bg: "bg-teal-50" },
  { id: "1249", detail: "Takeaway • 1 item", amount: "$18", time: "1 min ago", bg: "bg-cyan-50" },
];

const GourmetDelightsMockup = () => (
  <div className="relative hidden sm:block">
    <div className="mx-auto w-[280px] sm:w-[300px] rounded-[1.5rem] border-[6px] border-slate-800 bg-slate-900 p-2 shadow-2xl">
      <div className="rounded-[2rem] overflow-hidden bg-white p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6" style={{ color: CYAN }} />
            <div>
              <div className="font-bold text-sm text-slate-900">Gourmet Delights</div>
              <div className="text-[10px] text-slate-500">Restaurant Management</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ backgroundColor: `${CYAN}18`, color: NAVY }}>
            Online
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { value: "24", label: "Orders Today" },
            { value: "$1,247", label: "Revenue" },
            { value: "4.8★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-base font-bold" style={{ color: NAVY }}>{stat.value}</div>
              <div className="text-[9px] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {recentOrders.map((order) => (
            <div key={order.id} className={`${order.bg} rounded-lg p-2.5`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 text-xs">Order #{order.id}</p>
                  <p className="text-[10px] text-slate-600">{order.detail}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xs" style={{ color: NAVY }}>{order.amount}</div>
                  <div className="text-[10px] text-slate-500">{order.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-lg hidden md:flex items-center gap-1.5"
    >
      <Star className="w-4 h-4 text-amber-400 fill-current" />
      <span className="text-xs font-medium text-slate-700">4.8★ Rating</span>
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-2 -left-2 rounded-xl px-3 py-2 shadow-lg text-white text-xs font-medium flex items-center gap-1.5"
      style={{ backgroundColor: NAVY }}
    >
      <TrendingUp className="w-3.5 h-3.5" />
      24 Orders Today
    </motion.div>
  </div>
);

export default function RestaurantAppPage() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label="Restaurant App Development"
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
                  <Sparkles className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  Complete Restaurant Tech Stack
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Restaurant App{" "}
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Solutions
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8 max-w-xl">
                  Transform your restaurant with our comprehensive digital platform. From kitchen management to
                  customer engagement, we&apos;ve got everything covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
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
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <GourmetDelightsMockup />
              </motion.div>
            </div>
          </div>
        </section>

        <SectionWrap>
          <SectionHeader
            badge="Core Features"
            title="Complete"
            highlight="Restaurant Management"
            description="Everything you need to run a modern, efficient restaurant operation"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {restaurantFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-all text-center sm:text-left"
              >
                <IconBox icon={feature.icon} />
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-4 mb-2`}>{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{feature.description}</p>
                <div className="text-xs font-semibold" style={{ color: CYAN }}>
                  {feature.metric.match(/^[\d.]+/) ? (
                    <>
                      <AnimatedStat value={feature.metric.match(/^[\d.]+/)![0]} />
                      {feature.metric.replace(/^[\d.]+/, "")}
                    </>
                  ) : (
                    feature.metric
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap alt>
          <SectionHeader
            badge="Modules"
            title="Restaurant-Specific"
            highlight="Modules"
            description="Specialized features designed specifically for restaurant operations"
          />
          <div className="grid lg:grid-cols-[minmax(0,240px)_1fr] gap-6 lg:gap-10 items-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Restaurant modules">
              {restaurantModules.map((mod, i) => (
                <button
                  key={mod.title}
                  type="button"
                  onClick={() => setActiveModule(i)}
                  className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    activeModule === i
                      ? "text-white shadow-md"
                      : "text-slate-600 bg-white border border-slate-200/80 hover:border-[#13345A]/20"
                  }`}
                  style={activeModule === i ? { backgroundColor: NAVY } : undefined}
                  aria-current={activeModule === i ? "true" : undefined}
                >
                  {mod.title}
                </button>
              ))}
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={restaurantModules[activeModule].title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-5">
                  <IconBox icon={restaurantModules[activeModule].icon} />
                  <div>
                    <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
                      {restaurantModules[activeModule].title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{restaurantModules[activeModule].description}</p>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {restaurantModules[activeModule].features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionWrap>

        <SectionWrap>
          <SectionHeader
            badge="Integrations"
            title="Seamless"
            highlight="Integrations"
            description="Connect with your existing tools and services effortlessly"
          />
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {integrations.map((integration, i) => (
                <motion.article
                  key={integration.name}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 hover:shadow-lg transition-all">
                    <IconBox icon={integration.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-4`}>{integration.name}</h3>
                    <ul className="space-y-2">
                      {integration.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CYAN }} />
                          {item}
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
            badge="Why Choose Us"
            title="Why Choose"
            highlight="Our Platform?"
            description="Comprehensive features designed specifically for restaurant success"
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {whyChoose.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                  <item.icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <div>
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        <SectionWrap>
          <SectionHeader
            badge="Technology Stack"
            title="Complete"
            highlight="Tech Stack"
            description="Built with modern technologies for scalability, performance, and reliability"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {techCategories.slice(1).map((cat, ci) => (
              <motion.article
                key={cat.id}
                {...fadeUp}
                transition={{ duration: 0.45, delay: ci * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{cat.title}</h3>
                  <span className="h-0.5 flex-1 max-w-[48px] rounded-full" style={{ backgroundColor: CYAN }} aria-hidden="true" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.title}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#F6F8FA] p-3.5 hover:border-[#13345A]/15 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${CYAN}18` }}>
                        <tech.icon className="w-4 h-4" style={{ color: NAVY }} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-slate-900">{tech.title}</h4>
                        <p className="text-xs text-slate-500 truncate">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p {...fadeUp} className="mt-8 inline-flex items-center gap-2 text-sm text-slate-600">
            <ChefHat className="w-4 h-4" style={{ color: CYAN }} />
            See our{" "}
            <Link href="/industries/food-beverage" className="font-semibold hover:underline" style={{ color: NAVY }}>
              food & beverage industry
            </Link>{" "}
            and{" "}
            <Link href="/solutions/food-delivery-app" className="font-semibold hover:underline" style={{ color: NAVY }}>
              food delivery app
            </Link>{" "}
            solutions
          </motion.p>
        </SectionWrap>

        <PageCTA
          title="Ready to Transform Your Restaurant?"
          description="Join thousands of restaurants that have modernized their operations with our comprehensive solution."
          primaryLabel="Start Free Consultation"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
