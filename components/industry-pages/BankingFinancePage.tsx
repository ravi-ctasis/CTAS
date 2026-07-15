"use client";

import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  Building,
  Users,
  BarChart3,
  CheckCircle,
  Code,
  Database,
  Monitor,
  Server,
  Cpu,
  Network,
  Wallet,
  HardDrive,
  DollarSign,
  Globe,
  Cloud,
  Clock,
  ArrowRight,
  ArrowUpRight,
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

const bankingServices = [
  {
    icon: Shield,
    title: "Secure Banking Platforms",
    description:
      "Enterprise-grade banking solutions with end-to-end encryption and compliance with financial regulations.",
    features: ["PCI DSS Compliance", "256-bit Encryption", "Real-time Monitoring"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Seamless payment processing with support for multiple payment methods and currencies.",
    features: ["Multi-currency", "Fraud Detection", "Instant Settlement"],
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description:
      "Advanced analytics and reporting tools for financial data visualization and insights.",
    features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports"],
  },
  {
    icon: Database,
    title: "Compliance Management",
    description: "Automated compliance monitoring and reporting for regulatory requirements.",
    features: ["KYC/AML", "Audit Trails", "Regulatory Reporting"],
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Comprehensive customer relationship management for banking operations.",
    features: ["Account Management", "Customer Support", "Self-service Portal"],
  },
  {
    icon: Building,
    title: "Core Banking Systems",
    description: "Modern core banking infrastructure with scalability and reliability.",
    features: ["Account Processing", "Transaction Management", "Multi-branch Support"],
  },
];

const advancedFeatures = [
  {
    icon: Wallet,
    title: "Digital Wallet Integration",
    description:
      "Seamless integration with multiple digital wallets, ensuring secure and straightforward transactions across all banking operations with real-time synchronization and multi-device support.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Advanced analytics dashboard providing real-time insights into transactions, user behavior, and financial performance metrics with predictive modeling and customizable reports.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Bank-grade security protocols with automated compliance monitoring and regulatory reporting for all financial transactions, ensuring full adherence to international standards.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description:
      "Support for multiple currencies and payment methods, enabling global banking operations with localized user experiences and real-time exchange rate calculations.",
  },
];

const bankingTechnologies = [
  { name: "Java", icon: Code, category: "Backend" },
  { name: "Spring Boot", icon: Server, category: "Framework" },
  { name: "Oracle", icon: Database, category: "Database" },
  { name: "React", icon: Monitor, category: "Frontend" },
  { name: "Node.js", icon: Cpu, category: "Runtime" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Docker", icon: HardDrive, category: "Containerization" },
  { name: "Kubernetes", icon: Network, category: "Orchestration" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Angular", icon: Monitor, category: "Frontend" },
  { name: "Python", icon: Code, category: "Backend" },
];

const bankingCaseStudies = [
  {
    title: "Digital Banking Transformation",
    company: "Regional Bank",
    industry: "Banking",
    description:
      "Complete digital transformation of traditional banking operations with modern technology stack.",
    results: {
      efficiency: "85%",
      costReduction: "40%",
      customerSatisfaction: "95%",
      timeToMarket: "60%",
    },
    technologies: ["Java", "React", "AWS", "Docker"],
    image: "/banking-case-1.jpg",
  },
  {
    title: "Payment Gateway Integration",
    company: "FinTech Startup",
    industry: "Financial Services",
    description:
      "Seamless payment processing platform with multi-currency support and fraud detection.",
    results: {
      efficiency: "90%",
      costReduction: "35%",
      customerSatisfaction: "98%",
      timeToMarket: "70%",
    },
    technologies: ["Node.js", "React", "MongoDB", "Stripe"],
    image: "/banking-case-2.jpg",
  },
  {
    title: "Compliance Management System",
    company: "International Bank",
    industry: "Banking",
    description:
      "Automated compliance monitoring and reporting system for regulatory requirements.",
    results: {
      efficiency: "80%",
      costReduction: "50%",
      customerSatisfaction: "92%",
      timeToMarket: "45%",
    },
    technologies: ["Java", "Angular", "Oracle", "AWS"],
    image: "/banking-case-3.jpg",
  },
];

const bankingStats = [
  { label: "Banks Served", value: "10+", icon: Building },
  { label: "Security Certifications", value: "15+", icon: Shield },
  { label: "Regulatory Compliance", value: "100%", icon: CheckCircle },
  { label: "Uptime Guarantee", value: "99.9%", icon: Clock },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Banking & Finance Software Development",
      description:
        "Secure banking and finance software development including fintech solutions, payment processing, financial analytics, and digital banking platforms.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Banking & Fintech Software Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Banking & Finance",
          item: "https://www.ctasis.com/industries/banking-finance",
        },
      ],
    },
  ],
};

const formatResultKey = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();

const BankingMockup = () => (
  <div className="relative mx-auto w-72 sm:w-80">
    <div className="rounded-[2.5rem] p-2 shadow-2xl border border-slate-800/80 bg-slate-900">
      <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="flex justify-between items-center px-5 py-2.5 text-white text-xs">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-0.5 h-2.5 bg-white rounded-full" />
            <div className="w-0.5 h-2.5 bg-white rounded-full" />
            <div className="w-0.5 h-2.5 bg-white rounded-full" />
            <div className="w-5 h-2.5 border border-white rounded-sm">
              <div className="w-3 h-1 bg-white rounded-sm m-0.5" />
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <h3 className="text-white text-sm font-semibold">Digital Banking</h3>
        </div>
        <div className="px-5 pb-6 space-y-4">
          <div
            className="rounded-2xl p-5 text-white"
            style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #249BCA)` }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs opacity-80">Total Balance</span>
              <DollarSign className="w-4 h-4 opacity-80" />
            </div>
            <div className="text-2xl font-bold mb-1">$24,850.00</div>
            <div className="text-xs opacity-80">+12.5% from last month</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Send", icon: ArrowUpRight, color: "#249BCA" },
              { label: "Receive", icon: ArrowRight, color: "#6FC3E4" },
              { label: "Invest", icon: BarChart3, color: NAVY },
            ].map((action) => (
              <div key={action.label} className="bg-white/10 rounded-xl p-3 text-center">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center mx-auto mb-1.5"
                  style={{ backgroundColor: action.color }}
                >
                  <action.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white text-[10px]">{action.label}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="text-white text-xs font-semibold">Recent Transactions</h4>
            <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-red-500/90 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-white text-xs">Netflix</div>
                  <div className="text-slate-400 text-[10px]">Entertainment</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white text-xs">-$15.99</div>
                <div className="text-slate-400 text-[10px]">Today</div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-emerald-500/90 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-white text-xs">Salary</div>
                  <div className="text-slate-400 text-[10px]">Income</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white text-xs">+$3,500.00</div>
                <div className="text-slate-400 text-[10px]">Yesterday</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-3 flex justify-around">
          {["Home", "Cards", "Invest", "Profile"].map((item, i) => (
            <div key={item} className="text-center">
              <div
                className={`w-5 h-5 rounded-md mx-auto mb-1 ${i === 0 ? "" : "bg-white/20"}`}
                style={i === 0 ? { backgroundColor: CYAN } : undefined}
              />
              <span className={`text-[10px] ${i === 0 ? "text-white" : "text-slate-500"}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const BankingFinancePage = () => (
  <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Banking & Finance Solutions"
        badge="Enterprise Banking Solutions"
        title="Next-Generation"
        highlight="Banking Technology"
        description="Revolutionizing financial services with AI-powered solutions, blockchain integration, and cloud-native architecture for the digital banking era."
        stats={bankingStats.map((s) => ({ number: s.value, label: s.label, icon: s.icon }))}
        primaryCta={{ label: "Start Free Consultation", href: "/contact-us" }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
      />

      {/* Services — bento grid */}
      <SectionWrap>
        <SectionHeader
          badge="Banking Technology Solutions"
          title="Enterprise-Grade"
          highlight="Financial Services"
          description="Cutting-edge banking solutions designed for the digital age, featuring AI-powered analytics, blockchain security, and cloud-native architecture."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {bankingServices.map((service, i) => (
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
              <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <Pill key={feature}>{feature}</Pill>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto" style={{ color: NAVY }}>
                Explore Solution
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </SectionWrap>

      {/* Advanced features — split-screen with mockup */}
      <SectionWrap alt>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              badge="Unique Features"
              title="Advanced Features for"
              highlight="Banking Platforms"
              description=""
              align="left"
            />
            <div className="space-y-8 -mt-4">
              {advancedFeatures.map((feature, i) => (
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
          </div>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
            <BankingMockup />
          </motion.div>
        </div>
      </SectionWrap>

      {/* Technologies — horizontal scroll */}
      <SectionWrap>
        <SectionHeader
          badge="Technology"
          title="Banking Technology"
          highlight="Stack"
          description="Cutting-edge technologies and frameworks that power modern banking solutions."
        />
        <DotCarousel bleed ariaLabel="Content carousel">
            {bankingTechnologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="flex-shrink-0 w-[140px] sm:w-[160px] snap-start"
              >
                <div className="bg-white border border-slate-200/80 rounded-2xl p-5 text-center hover:border-[#13345A]/20 hover:shadow-md transition-all h-full">
                  <tech.icon className="w-7 h-7 mx-auto mb-3" style={{ color: NAVY }} />
                  <div className="text-sm font-semibold text-slate-900">{tech.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{tech.category}</div>
                </div>
              </motion.div>
            ))}
        </DotCarousel>
      </SectionWrap>

      {/* Case studies — alternating split with stat grid */}
      <SectionWrap alt>
        <SectionHeader
          badge="Success Stories"
          title="Banking Success"
          highlight="Stories"
          description="Real-world implementations that have transformed banking operations and customer experiences with measurable results."
        />
        <div className="space-y-12 sm:space-y-16">
          {bankingCaseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Pill>{study.industry}</Pill>
                <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mt-4 mb-2`}>
                  {study.title}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: CYAN }}>
                  {study.company}
                </p>
                <p className="text-slate-500 leading-relaxed mb-6">{study.description}</p>
                <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <Pill key={tech}>{tech}</Pill>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h4 className="text-sm font-semibold text-slate-900 mb-4">Key Results</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrap>

      <PageCTA
        title="Ready to Transform Your Banking Operations?"
        description="Let's discuss how our secure, compliant, and innovative solutions can drive your financial institution's digital transformation."
        primaryLabel="Start Free Consultation"
        primaryHref="/contact-us"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolios"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default BankingFinancePage;
