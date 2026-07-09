"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Layers,
  Lock,
  Server,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Target,
  Rocket,
  Star,
  Award,
  CheckCircle,
  CheckCircle2,
  BarChart3,
  Container,
  Truck,
  Plane,
  Ship,
  Train,
  Route,
  Package,
  Warehouse,
  Map,
  Satellite,
  Radio,
  Signal,
  Car,
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
    icon: Route,
    title: "Route Optimization",
    description:
      "AI-powered route planning that reduces fuel costs, delivery times, and operational expenses.",
    highlight: "25% Cost Reduction",
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Comprehensive fleet tracking, maintenance scheduling, and driver performance monitoring.",
    highlight: "Real-time Tracking",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Data-driven insights for fuel efficiency, driver behavior, and operational optimization.",
    highlight: "Predictive Analytics",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description:
      "Driver safety monitoring, regulatory compliance, and incident prevention systems.",
    highlight: "Safety First",
  },
];

const platformMetrics = [
  { label: "Route Efficiency", value: "35%" },
  { label: "Fuel Savings", value: "25%" },
  { label: "Delivery Time", value: "40%" },
  { label: "Safety Score", value: "A+ Rating" },
];

const businessImpact = [
  "Reduce operational costs by 30%",
  "Improve delivery efficiency by 40%",
  "Enhance fleet safety by 50%",
  "Boost customer satisfaction by 35%",
];

const transportFeatures = [
  {
    icon: Route,
    title: "Route Optimization",
    description:
      "AI-powered route planning with real-time traffic updates and dynamic rerouting capabilities.",
    features: ["Real-time Traffic", "Dynamic Rerouting", "Multi-stop Planning"],
  },
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Comprehensive fleet tracking, maintenance scheduling, and driver performance monitoring.",
    features: ["GPS Tracking", "Maintenance Alerts", "Driver Analytics"],
  },
  {
    icon: Package,
    title: "Logistics Management",
    description:
      "End-to-end logistics solutions from warehouse management to last-mile delivery.",
    features: ["Warehouse Management", "Inventory Tracking", "Last-mile Delivery"],
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description:
      "Driver safety monitoring, regulatory compliance, and incident prevention systems.",
    features: ["Driver Monitoring", "Compliance Tracking", "Safety Alerts"],
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Machine learning algorithms for predictive maintenance, fuel optimization, and performance analytics.",
    features: ["Predictive Maintenance", "Fuel Optimization", "Performance Analytics"],
  },
  {
    icon: Users,
    title: "Customer Experience",
    description:
      "Real-time tracking, delivery notifications, and seamless customer communication.",
    features: ["Real-time Tracking", "Delivery Notifications", "Customer Portal"],
  },
];

const useCases = [
  {
    icon: Truck,
    title: "Delivery Services",
    description:
      "Last-mile delivery optimization, route planning, and real-time tracking for e-commerce and logistics companies.",
    features: ["Route Optimization", "Real-time Tracking", "Customer Notifications"],
  },
  {
    icon: Car,
    title: "Ride-Sharing",
    description:
      "Driver management, passenger matching, and payment processing for modern transportation services.",
    features: ["Driver Management", "Passenger Matching", "Payment Processing"],
  },
  {
    icon: Plane,
    title: "Aviation Logistics",
    description:
      "Cargo tracking, flight scheduling, and ground operations management for aviation companies.",
    features: ["Cargo Tracking", "Flight Scheduling", "Ground Operations"],
  },
  {
    icon: Ship,
    title: "Maritime Shipping",
    description:
      "Container tracking, port operations, and maritime logistics management solutions.",
    features: ["Container Tracking", "Port Operations", "Maritime Logistics"],
  },
  {
    icon: Train,
    title: "Rail Transportation",
    description:
      "Freight management, passenger services, and rail infrastructure monitoring.",
    features: ["Freight Management", "Passenger Services", "Infrastructure Monitoring"],
  },
  {
    icon: Warehouse,
    title: "Warehouse Management",
    description:
      "Inventory control, order fulfillment, and warehouse automation solutions.",
    features: ["Inventory Control", "Order Fulfillment", "Warehouse Automation"],
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
      { name: "Azure", icon: Cloud },
      { name: "Docker", icon: Container },
    ],
  },
  {
    id: "apis",
    title: "Transportation APIs",
    technologies: [
      { name: "Google Maps API", icon: Map },
      { name: "OpenStreetMap", icon: Globe },
      { name: "Uber API", icon: Car },
    ],
  },
  {
    id: "iot",
    title: "IoT & Hardware",
    technologies: [
      { name: "GPS Tracking", icon: Satellite },
      { name: "RFID Systems", icon: Radio },
      { name: "Sensors", icon: Activity },
      { name: "Telematics", icon: Signal },
    ],
  },
  {
    id: "security",
    title: "Security & Privacy",
    technologies: [
      { name: "OAuth 2.0", icon: Shield },
      { name: "JWT", icon: Lock },
      { name: "SSL/TLS", icon: Shield },
      { name: "GDPR", icon: Award },
    ],
  },
  {
    id: "ai",
    title: "AI & Analytics",
    technologies: [
      { name: "TensorFlow", icon: Brain },
      { name: "Predictive Analytics", icon: TrendingUp },
      { name: "Route Optimization", icon: Route },
      { name: "Traffic Analysis", icon: BarChart3 },
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Transportation & Logistics Software Development",
      description:
        "Smart mobility and logistics application development for fleet management, route optimization, and supply chain.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Transportation Software Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Transportation",
          item: "https://www.ctasis.com/industries/transportation",
        },
      ],
    },
  ],
};

const TransportationPage = () => {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Transportation & Logistics Solutions"
          badge="Smart Mobility Solutions"
          title="Revolutionize"
          highlight="Transportation"
          description="Build innovative mobility and logistics applications that optimize routes, enhance fleet management, and create seamless transportation experiences for the modern world."
          stats={[
            { number: "200+", label: "Fleets Managed", icon: Rocket },
            { number: "10K+", label: "Routes Optimized", icon: TrendingUp },
            { number: "25%", label: "Fuel Savings", icon: Target },
            { number: "99.9%", label: "Uptime", icon: CheckCircle },
          ]}
          primaryCta={{ label: "Start Your Project", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />

        {/* Core capabilities — split with metrics and business impact */}
        <SectionWrap>
          <SectionHeader
            badge="Core Capabilities"
            title="Why Choose Our"
            highlight="Transportation Platform?"
            description="Discover the essential features that make our mobility and logistics applications stand out in the competitive transportation market."
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
            <div className="space-y-6">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-6 text-center`}>
                  Platform Metrics
                </h3>
                <div className="space-y-5" role="list" aria-label="Platform metrics">
                  {platformMetrics.map((stat) => (
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
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-[1.5rem] px-6 sm:px-8 py-8 text-white"
                style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
              >
                <h3 className={`${fraunces.className} text-xl font-medium mb-6 text-center`}>Business Impact</h3>
                <ul className="space-y-4">
                  {businessImpact.map((benefit) => (
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

        {/* Comprehensive features — bento grid */}
        <SectionWrap alt>
          <SectionHeader
            badge="Platform Features"
            title="Comprehensive"
            highlight="Transportation Features"
            description="Our platform combines cutting-edge technology with intuitive design to create powerful mobility and logistics applications that users love."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
            {transportFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col ${
                  i === 0 ? "md:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <IconBox icon={feature.icon} />
                <h3 className={`${fraunces.className} text-lg sm:text-xl font-medium text-slate-900 mt-5 mb-2`}>
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
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Use cases — horizontal scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Use Cases"
            title="Transportation"
            highlight="Use Cases"
            description="From delivery services to fleet operators, our platform serves diverse transportation needs across multiple industries and use cases."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {useCases.map((useCase, i) => (
                <motion.article
                  key={useCase.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
                >
                  <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] transition-all flex flex-col">
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
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        {/* Technologies — tabbed sidebar */}
        <SectionWrap alt>
          <SectionHeader
            badge="Technology"
            title="Transportation Technology"
            highlight="Stack"
            description="Cutting-edge technologies and frameworks that power modern transportation and logistics applications."
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
          title="Ready to Transform Transportation?"
          description="Let's build innovative mobility solutions that optimize operations and enhance customer experiences."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="View Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default TransportationPage;
