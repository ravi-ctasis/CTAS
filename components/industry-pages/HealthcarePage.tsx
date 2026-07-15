"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Database,
  Server,
  Network,
  Cloud,
  HardDrive,
  Monitor,
  Code,
  Shield,
  BarChart3,
  Users,
  Building,
  Heart,
  Award,
  Globe,
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

const healthcareServices = [
  {
    icon: Shield,
    title: "HIPAA Compliant Systems",
    description:
      "Secure healthcare platforms with full HIPAA compliance, patient data protection, and audit trails.",
    features: ["HIPAA Compliance", "Data Encryption", "Audit Logging"],
  },
  {
    icon: Monitor,
    title: "Electronic Health Records",
    description:
      "Comprehensive EHR systems with patient management, medical history, and clinical decision support.",
    features: ["Patient Records", "Medical History", "Clinical Support"],
  },
  {
    icon: BarChart3,
    title: "Healthcare Analytics",
    description:
      "Advanced analytics for patient outcomes, treatment effectiveness, and healthcare performance metrics.",
    features: ["Patient Analytics", "Treatment Insights", "Performance Metrics"],
  },
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Complete patient lifecycle management with appointment scheduling and care coordination.",
    features: ["Appointment Scheduling", "Care Coordination", "Patient Portal"],
  },
  {
    icon: Database,
    title: "Medical Data Security",
    description:
      "Bank-grade security for medical data with encryption, access controls, and compliance monitoring.",
    features: ["Data Encryption", "Access Controls", "Compliance Monitoring"],
  },
  {
    icon: Network,
    title: "Telemedicine Platform",
    description:
      "Secure telemedicine solutions with video consultations, remote monitoring, and virtual care.",
    features: ["Video Consultations", "Remote Monitoring", "Virtual Care"],
  },
];

const overviewItems = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description:
      "Full HIPAA compliance with data encryption, access controls, and audit trails to ensure patient privacy and regulatory compliance.",
  },
  {
    icon: Monitor,
    title: "Patient Care",
    description:
      "Comprehensive patient care management with electronic health records, appointment scheduling, and clinical decision support.",
  },
  {
    icon: BarChart3,
    title: "Clinical Intelligence",
    description:
      "AI-powered clinical intelligence with predictive analytics, treatment recommendations, and patient outcome analysis.",
  },
];

const overviewStats = [
  { label: "Healthcare Clients", value: "200+", icon: Building, progress: 80 },
  { label: "HIPAA Compliance", value: "100%", icon: Shield, progress: 100 },
  { label: "Patient Records", value: "2M+", icon: Heart, progress: 75 },
  { label: "Uptime Guarantee", value: "99.9%", icon: Clock, progress: 67 },
];

const keyFeatures = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description:
      "Full HIPAA compliance with data encryption, access controls, and comprehensive audit trails.",
    items: ["Data Encryption", "Access Controls", "Audit Trails", "Privacy Protection"],
  },
  {
    icon: Monitor,
    title: "Patient Care Management",
    description:
      "Comprehensive patient care with electronic health records and clinical decision support.",
    items: ["EHR Systems", "Appointment Scheduling", "Clinical Support", "Patient Portal"],
  },
  {
    icon: BarChart3,
    title: "Clinical Intelligence",
    description:
      "AI-powered clinical intelligence with predictive analytics and treatment recommendations.",
    items: [
      "Predictive Analytics",
      "Treatment Recommendations",
      "Outcome Analysis",
      "Risk Assessment",
    ],
  },
];

const healthcareTechnologies = [
  { name: "React", icon: Monitor, category: "Frontend" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Docker", icon: HardDrive, category: "Containerization" },
  { name: "HL7 FHIR", icon: Database, category: "Healthcare" },
  { name: "DICOM", icon: Monitor, category: "Imaging" },
  { name: "Kubernetes", icon: Network, category: "Orchestration" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Angular", icon: Monitor, category: "Frontend" },
  { name: "Python", icon: Code, category: "Backend" },
];

const healthcareStats = [
  { label: "Healthcare Clients", value: "200+", icon: Building },
  { label: "Certifications", value: "10+", icon: Award },
  { label: "Global Offices", value: "10+", icon: Globe },
  { label: "Uptime Guarantee", value: "99.9%", icon: Clock },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Healthcare Software Development",
      description:
        "HIPAA-compliant healthcare software including EHR systems, telemedicine platforms, and patient management solutions.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Healthcare Software Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare",
          item: "https://www.ctasis.com/industries/healthcare",
        },
      ],
    },
  ],
};

const HealthcarePage = () => (
  <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Healthcare Technology Solutions"
        badge="HIPAA Compliant Healthcare"
        title="Next-Generation"
        highlight="Healthcare Technology"
        description="Revolutionizing healthcare with HIPAA-compliant systems, AI-powered diagnostics, and secure patient care platforms for the digital health era."
        stats={healthcareStats.map((s) => ({ number: s.value, label: s.label, icon: s.icon }))}
        primaryCta={{ label: "Start Free Consultation", href: "/contact-us" }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
      />

      {/* Overview — split-screen with animated stat progress bars */}
      <SectionWrap>
        <SectionHeader
          badge="Healthcare Overview"
          title="Modern"
          highlight="Healthcare Solutions"
          description="End-to-end healthcare technology solutions designed to improve patient care, ensure data security, and enhance clinical outcomes with HIPAA compliance."
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
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {overviewStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <stat.icon className="w-5 h-5" style={{ color: NAVY }} />
                  </div>
                  <div className="text-right">
                    <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium`} style={{ color: NAVY }}>
                      <AnimatedStat value={stat.value} />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600">{stat.label}</div>
                  </div>
                </div>
                <div className="h-1.5 bg-[#EAF3F8] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: CYAN }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* Services — bento grid */}
      <SectionWrap alt>
        <SectionHeader
          badge="Healthcare Technology Solutions"
          title="Comprehensive"
          highlight="Healthcare Services"
          description="End-to-end healthcare solutions designed to improve patient care, ensure data security, and enhance clinical outcomes with full HIPAA compliance."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {healthcareServices.map((service, i) => (
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
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <Pill key={feature}>{feature}</Pill>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrap>

      {/* Key features — alternating split rows with check grids */}
      <SectionWrap>
        <SectionHeader
          badge="Key Features"
          title="Healthcare Platform"
          highlight="Key Features"
          description="Discover the powerful features that make our healthcare solutions the preferred choice for leading healthcare providers worldwide."
        />
        <div className="space-y-12 sm:space-y-16">
          {keyFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: NAVY }} />
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

      {/* Technologies — horizontal scroll */}
      <SectionWrap alt>
        <SectionHeader
          badge="Technology"
          title="Healthcare Technology"
          highlight="Stack"
          description="Cutting-edge technologies and healthcare standards that power modern healthcare solutions."
        />
        <DotCarousel bleed ariaLabel="Content carousel">
            {healthcareTechnologies.map((tech, i) => (
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

      <PageCTA
        title="Ready to Transform Your Healthcare Operations?"
        description="Let's discuss how our HIPAA-compliant healthcare solutions can improve patient care and operational efficiency."
        primaryLabel="Start Your Project"
        primaryHref="/contact-us"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolios"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default HealthcarePage;
