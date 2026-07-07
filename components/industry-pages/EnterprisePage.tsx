"use client";

import { motion } from "framer-motion";
import {
  Code,
  Clock,
  Globe,
  Award,
  HardDrive,
  Cog,
  Cpu,
  Database,
  Monitor,
  Server,
  Network,
  Cloud,
  Building,
  BarChart3,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
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

const enterpriseServices = [
  {
    icon: Building,
    title: "Enterprise Resource Planning",
    description:
      "Comprehensive ERP solutions that streamline business operations, improve efficiency, and provide real-time insights across all departments.",
    features: ["Integrated Modules", "Real-time Analytics", "Scalable Architecture"],
  },
  {
    icon: Users,
    title: "Enterprise Collaboration",
    description:
      "Advanced collaboration platforms that connect teams, departments, and stakeholders across the organization.",
    features: ["Team Management", "Document Sharing", "Communication Tools"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Powerful BI tools that transform data into actionable insights for strategic decision-making.",
    features: ["Data Visualization", "Predictive Analytics", "Custom Dashboards"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Comprehensive security solutions that protect enterprise data, systems, and infrastructure.",
    features: ["Access Control", "Data Encryption", "Threat Detection"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions that enable enterprise digital transformation and modernization.",
    features: ["Hybrid Cloud", "Auto-scaling", "Disaster Recovery"],
  },
  {
    icon: Cog,
    title: "Process Automation",
    description:
      "Intelligent automation solutions that optimize workflows and reduce manual tasks.",
    features: ["RPA Integration", "Workflow Management", "AI-powered Automation"],
  },
];

const overviewItems = [
  {
    icon: Building,
    title: "Enterprise Architecture",
    description:
      "Scalable and robust enterprise architecture designed to handle complex business requirements, high traffic loads, and seamless integration with existing systems.",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "Intuitive and user-friendly interfaces that enhance productivity, reduce training time, and improve user adoption across all levels of the organization.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Advanced analytics and business intelligence tools that provide real-time insights, predictive modeling, and actionable data for strategic decision-making.",
  },
];

const advancedFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Comprehensive security framework with advanced threat detection, data encryption, and compliance management for enterprise environments.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Advanced analytics and reporting tools providing real-time insights and predictive modeling for strategic decision-making.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions with hybrid architecture, auto-scaling, and disaster recovery for enterprise applications.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description:
      "Intelligent automation solutions that optimize workflows, reduce manual tasks, and improve operational efficiency.",
  },
];

const enterpriseTechnologies = [
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

const keyFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Military-grade security with advanced encryption and multi-factor authentication.",
    items: ["256-bit Encryption", "Multi-Factor Auth", "Audit Logging", "Compliance Ready"],
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Advanced analytics dashboard with real-time insights and predictive modeling.",
    items: ["Live Dashboards", "Predictive AI", "Custom Reports", "Data Visualization"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud architecture with auto-scaling and disaster recovery.",
    items: ["Auto Scaling", "Load Balancing", "Disaster Recovery", "High Availability"],
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Intelligent automation workflows that streamline operations.",
    items: ["RPA Integration", "Workflow Engine", "AI Automation", "Smart Triggers"],
  },
  {
    icon: Users,
    title: "User Management",
    description: "Comprehensive user management with role-based access control.",
    items: ["Role-Based Access", "Team Collaboration", "Permission Control", "Single Sign-On"],
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Worldwide deployment capabilities with multi-region support.",
    items: ["Multi-Region", "Localization", "CDN Support", "Edge Computing"],
  },
];

const enterpriseStats = [
  { label: "Enterprise Clients", value: "8+", icon: Building },
  { label: "Uptime Guarantee", value: "99.9%", icon: Clock },
  { label: "Certifications", value: "10+", icon: Award },
  { label: "Global Offices", value: "10+", icon: Globe },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Enterprise Software Development",
      description:
        "Enterprise digital transformation solutions including ERP, collaboration platforms, and business intelligence.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Enterprise Software Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Enterprise",
          item: "https://www.ctasis.com/industries/enterprise",
        },
      ],
    },
  ],
};

const EnterpriseDashboardMockup = () => (
  <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
    <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-800/80 bg-slate-900">
      <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="text-white text-sm font-medium">Enterprise Dashboard</div>
        <div className="w-8" />
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg p-4 text-white" style={{ backgroundColor: NAVY }}>
            <div className="text-2xl font-bold">$2.4M</div>
            <div className="text-sm opacity-80">Revenue</div>
          </div>
          <div className="rounded-lg p-4 text-white" style={{ backgroundColor: "#249BCA" }}>
            <div className="text-2xl font-bold">85%</div>
            <div className="text-sm opacity-80">Efficiency</div>
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Performance</span>
            <div className="w-4 h-4 rounded" style={{ backgroundColor: CYAN }} />
          </div>
          <div className="space-y-2">
            {[
              { label: "Q1", width: "w-16" },
              { label: "Q2", width: "w-20" },
              { label: "Q3", width: "w-24" },
              { label: "Q4", width: "w-28" },
            ].map((q) => (
              <div key={q.label} className="flex items-center space-x-2">
                <div className={`${q.width} h-2 rounded`} style={{ backgroundColor: CYAN }} />
                <span className="text-white text-xs">{q.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm">Recent Activity</h4>
          <div className="space-y-2">
            {[
              { color: "bg-green-500", text: "System Update Completed" },
              { color: "bg-blue-500", text: "New User Registration" },
              { color: "bg-yellow-500", text: "Backup Process Started" },
            ].map((item) => (
              <div key={item.text} className="flex items-center space-x-3 bg-slate-800 rounded-lg p-3">
                <div className={`w-2 h-2 ${item.color} rounded-full`} />
                <span className="text-white text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const EnterprisePage = () => (
  <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Enterprise Solutions"
        badge="Enterprise Solutions"
        title="Enterprise"
        highlight="Digital Transformation"
        description="Empowering enterprises with cutting-edge technology solutions, scalable architecture, and intelligent automation for the digital age."
        stats={enterpriseStats.map((s) => ({ number: s.value, label: s.label, icon: s.icon }))}
        primaryCta={{ label: "Start Free Consultation", href: "/contact-us" }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
      />

      {/* Overview — split-screen */}
      <SectionWrap>
        <SectionHeader
          badge="Enterprise Overview"
          title="Comprehensive"
          highlight="Enterprise Solutions"
          description="End-to-end enterprise technology solutions designed to drive digital transformation, improve operational efficiency, and enable business growth across all industries."
        />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            {overviewItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-4 sm:gap-5"
              >
                <IconBox icon={item.icon} />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[1.5rem] border border-slate-200/80 bg-white p-8 sm:p-10 text-center shadow-sm"
          >
            <div className="text-6xl mb-4">🏢</div>
            <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-2`}>
              Enterprise Solutions
            </h3>
            <p className="text-slate-500">Comprehensive business technology platform</p>
          </motion.div>
        </div>
      </SectionWrap>

      {/* Services — horizontal scroll */}
      <SectionWrap alt>
        <SectionHeader
          badge="Enterprise Technology Solutions"
          title="Comprehensive"
          highlight="Enterprise Services"
          description="End-to-end enterprise solutions designed to drive digital transformation, improve operational efficiency, and enable business growth."
        />
        <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
          <div className="flex gap-5 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
            {enterpriseServices.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
              >
                <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] transition-all flex flex-col">
                  <IconBox icon={service.icon} />
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
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
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* Advanced features — split-screen with dashboard mockup */}
      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              badge="Enterprise Features"
              title="Advanced Capabilities for"
              highlight="Enterprise Platforms"
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
            <EnterpriseDashboardMockup />
          </motion.div>
        </div>
      </SectionWrap>

      {/* Technologies — icon strip grid */}
      <SectionWrap alt>
        <SectionHeader
          badge="Technology"
          title="Enterprise Technology"
          highlight="Stack"
          description="Cutting-edge technologies and frameworks that power modern enterprise solutions."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {enterpriseTechnologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl border border-transparent hover:border-slate-200/80 hover:bg-white hover:shadow-md transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                style={{ backgroundColor: `${CYAN}18` }}
              >
                <tech.icon className="w-6 h-6" style={{ color: NAVY }} />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-slate-500">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      {/* Key features — alternating split rows */}
      <SectionWrap>
        <SectionHeader
          badge="Key Features"
          title="Enterprise Platform"
          highlight="Key Features"
          description="Discover the powerful features that make our enterprise solutions the preferred choice for leading organizations worldwide."
        />
        <div className="space-y-12 sm:space-y-16">
          {keyFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: NAVY }} />
                  </div>
                  <div>
                    <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
              <ul className={`grid sm:grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-slate-100 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </SectionWrap>

      <PageCTA
        title="Ready to Transform Your Enterprise Operations?"
        description="Partner with us to build scalable, secure enterprise solutions that drive digital transformation."
        primaryLabel="Start Your Project"
        primaryHref="/contact-us"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolios"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default EnterprisePage;
