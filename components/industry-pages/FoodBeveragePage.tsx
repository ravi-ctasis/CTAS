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
  MessageSquare,
  Monitor,
  Server,
  Shield,
  Smartphone,
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
  Mail,
  Building,
  Settings,
  Coffee,
  Container,
  CreditCard,
  ShoppingCart,
  Package,
  Map,
  Thermometer,
  Truck,
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

const platformFeatures = [
  {
    icon: ShoppingCart,
    title: "Order Management",
    description:
      "Seamless order processing, real-time tracking, and automated notifications for customers and restaurants.",
    highlight: "Real-time Updates",
  },
  {
    icon: Building,
    title: "Restaurant Dashboard",
    description:
      "Comprehensive management tools for menu updates, order processing, and business analytics.",
    highlight: "Full Control",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Data-driven insights for menu optimization, customer behavior, and operational efficiency.",
    highlight: "Smart Insights",
  },
  {
    icon: Shield,
    title: "Payment Security",
    description:
      "Secure payment processing with PCI DSS compliance and fraud protection systems.",
    highlight: "100% Secure",
  },
];

const platformMetrics = [
  { label: "Order Accuracy", value: "99.8%" },
  { label: "Delivery Time", value: "25 min" },
  { label: "Customer Satisfaction", value: "4.8★" },
  { label: "Restaurant Growth", value: "35%" },
];

const businessImpact = [
  "Increase order volume by 40%",
  "Reduce operational costs by 25%",
  "Improve customer retention by 50%",
  "Boost restaurant revenue by 35%",
];

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description: "Custom restaurant websites with modern design and functionality",
    features: [
      "Responsive Design",
      "Online Ordering",
      "Menu Management",
      "Customer Reviews",
      "SEO Optimization",
      "Analytics Integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native iOS and Android apps for restaurants and delivery",
    features: [
      "Cross-platform Development",
      "Push Notifications",
      "Offline Functionality",
      "Payment Integration",
      "Real-time Updates",
      "User Authentication",
    ],
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamless integration with existing restaurant systems",
    features: [
      "POS Integration",
      "Payment Gateways",
      "Inventory Systems",
      "Accounting Software",
      "CRM Integration",
      "API Development",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Advanced analytics and reporting for business growth",
    features: [
      "Sales Analytics",
      "Customer Insights",
      "Performance Metrics",
      "Predictive Analytics",
      "Custom Dashboards",
      "Data Visualization",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with industry standards",
    features: [
      "PCI DSS Compliance",
      "Data Encryption",
      "Fraud Protection",
      "Secure Payments",
      "User Privacy",
      "Regular Audits",
    ],
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "24/7 technical support and maintenance services",
    features: [
      "Technical Support",
      "System Maintenance",
      "Training Programs",
      "Documentation",
      "Updates & Patches",
      "Emergency Response",
    ],
  },
];

const platformFeatureCards = [
  {
    icon: ShoppingCart,
    title: "Order Management",
    description: "End-to-end order processing from customer to kitchen to delivery.",
    features: ["Real-time Order Tracking", "Kitchen Display System", "Automated Notifications"],
  },
  {
    icon: Building,
    title: "Restaurant Management",
    description: "Complete restaurant operations dashboard with menu and inventory control.",
    features: ["Menu Management", "Inventory Control", "Staff Scheduling"],
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Personalized ordering experience with loyalty programs and recommendations.",
    features: ["User Profiles", "Loyalty Programs", "Smart Recommendations"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven insights for business optimization and growth strategies.",
    features: ["Sales Analytics", "Customer Insights", "Performance Metrics"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with industry compliance standards.",
    features: ["PCI DSS Compliance", "Data Encryption", "Fraud Protection"],
  },
  {
    icon: Globe,
    title: "Multi-platform Support",
    description: "Seamless experience across web, mobile, and tablet devices.",
    features: ["Web Applications", "Mobile Apps", "Tablet Interfaces"],
  },
];

const useCases = [
  {
    icon: Building,
    title: "Fine Dining",
    description:
      "Elegant reservation systems, table management, and premium customer experiences.",
    features: ["Reservation Management", "Table Service", "Wine Pairing"],
  },
  {
    icon: Coffee,
    title: "Cafés & Coffee Shops",
    description: "Quick service platforms with loyalty programs and mobile ordering.",
    features: ["Mobile Ordering", "Loyalty Programs", "Quick Service"],
  },
  {
    icon: Truck,
    title: "Food Delivery",
    description: "End-to-end delivery management from order to doorstep delivery.",
    features: ["Route Optimization", "Real-time Tracking", "Driver Management"],
  },
  {
    icon: ShoppingCart,
    title: "Ghost Kitchens",
    description: "Virtual restaurant operations with delivery-only business models.",
    features: ["Virtual Menus", "Delivery Focus", "Cost Optimization"],
  },
  {
    icon: Users,
    title: "Food Trucks",
    description: "Mobile food service management with location-based marketing.",
    features: ["Location Services", "Mobile POS", "Social Marketing"],
  },
  {
    icon: Package,
    title: "Meal Prep Services",
    description: "Subscription-based meal planning and delivery services.",
    features: ["Subscription Management", "Meal Planning", "Nutrition Tracking"],
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
    title: "Food Industry APIs",
    technologies: [
      { name: "Google Maps API", icon: Map },
      { name: "Stripe API", icon: CreditCard },
      { name: "Twilio API", icon: MessageSquare },
      { name: "SendGrid API", icon: Mail },
    ],
  },
  {
    id: "iot",
    title: "IoT & Hardware",
    technologies: [
      { name: "POS Systems", icon: Monitor },
      { name: "Kitchen Display", icon: Smartphone },
      { name: "Inventory Sensors", icon: Activity },
      { name: "Temperature Monitoring", icon: Thermometer },
    ],
  },
  {
    id: "security",
    title: "Security & Privacy",
    technologies: [
      { name: "OAuth 2.0", icon: Shield },
      { name: "JWT", icon: Lock },
      { name: "SSL/TLS", icon: Shield },
      { name: "PCI DSS", icon: Award },
    ],
  },
  {
    id: "ai",
    title: "AI & Analytics",
    technologies: [
      { name: "TensorFlow", icon: Brain },
      { name: "Predictive Analytics", icon: TrendingUp },
      { name: "Menu Optimization", icon: BarChart3 },
      { name: "Customer Insights", icon: Users },
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Food & Beverage Software Development",
      description:
        "Restaurant management, food delivery platforms, and culinary innovation technology solutions.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Food & Beverage Software Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Food & Beverage",
          item: "https://www.ctasis.com/industries/food-beverage",
        },
      ],
    },
  ],
};

export default function FoodBeveragePage() {
  const [activeTech, setActiveTech] = useState(0);
  const currentTech = techCategories[activeTech];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Food & Beverage Technology Solutions"
          badge="Culinary Innovation Platform"
          title="Revolutionize"
          highlight="Food & Beverage"
          description="Build innovative restaurant and delivery platforms that connect customers with amazing culinary experiences, streamline operations, and drive growth in the food industry."
          stats={[
            { number: "10K+", label: "Restaurants Served", icon: Rocket },
            { number: "1M+", label: "Orders Processed", icon: TrendingUp },
            { number: "45%", label: "Revenue Growth", icon: Target },
            { number: "4.8★", label: "Customer Rating", icon: CheckCircle },
          ]}
          primaryCta={{ label: "Start Your Project", href: "/contact-us" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
        />

        {/* Core capabilities — split with metrics and business impact */}
        <SectionWrap>
          <SectionHeader
            badge="Core Capabilities"
            title="Why Choose Our"
            highlight="Food Platform?"
            description="Discover the essential features that make our restaurant and delivery platforms stand out in the competitive food industry market."
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

        {/* Our services — bento grid */}
        <SectionWrap alt>
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Food Industry"
            highlight="Solutions"
            description="We provide end-to-end technology solutions that cover every aspect of the food & beverage industry digital transformation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col ${
                  i === 0 ? "md:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <IconBox icon={service.icon} />
                <h3 className={`${fraunces.className} text-lg sm:text-xl font-medium text-slate-900 mt-5 mb-2`}>
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2 flex-1">
                  {service.features.map((f) => (
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

        {/* Platform features — horizontal scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Platform Features"
            title="Comprehensive Food Platform"
            highlight="Features"
            description="Our platform combines cutting-edge technology with intuitive design to create powerful restaurant and delivery applications that users love."
          />
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {platformFeatureCards.map((feature, i) => (
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
            </div>
          </div>
        </SectionWrap>

        {/* Use cases — zigzag alternating rows */}
        <SectionWrap alt>
          <SectionHeader
            badge="Use Cases"
            title="Food & Beverage"
            highlight="Use Cases"
            description="From fine dining to fast food, our platform serves diverse food industry needs across multiple business models and use cases."
          />
          <div className="space-y-10 sm:space-y-12">
            {useCases.map((useCase, i) => (
              <motion.article
                key={useCase.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`flex flex-col sm:flex-row gap-5 sm:gap-8 items-start ${
                  i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
                }`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${CYAN}18` }}
                >
                  <useCase.icon className="w-7 h-7" style={{ color: NAVY }} />
                </div>
                <div className="flex-1">
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
                    {useCase.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-4">{useCase.description}</p>
                  <ul
                    className={`flex flex-wrap gap-2 ${i % 2 === 1 ? "sm:justify-end" : ""}`}
                    aria-label={`${useCase.title} features`}
                  >
                    {useCase.features.map((f) => (
                      <li key={f}>
                        <Pill>{f}</Pill>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Technologies — tabbed sidebar */}
        <SectionWrap>
          <SectionHeader
            badge="Technology"
            title="Food Technology"
            highlight="Stack"
            description="Cutting-edge technologies and frameworks that power modern restaurant and delivery applications."
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
          title="Ready to Transform Food & Beverage?"
          description="Join the culinary revolution with our comprehensive platform. Let's create food solutions that delight customers and drive growth."
          primaryLabel="Start Your Project"
          primaryHref="/contact-us"
          secondaryLabel="Portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
