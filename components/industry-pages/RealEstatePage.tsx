"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Globe,
  Smartphone,
  Database,
  Brain,
  Cloud,
  Home,
  MapPin,
  Search,
  Calculator,
  FileText,
  Camera,
  ChartBar,
  CreditCard,
  Star,
  Building,
  Trophy,
  Map as MapIcon,
  CheckCircle2,
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

const realEstateServices = [
  {
    icon: Home,
    title: "Property Management Platforms",
    description:
      "Comprehensive property management solutions with tenant portal, maintenance tracking, and financial reporting.",
    features: ["Tenant Portal", "Maintenance Tracking", "Financial Reporting"],
    popular: true,
  },
  {
    icon: Search,
    title: "Property Search & Listing",
    description:
      "Advanced property search platforms with AI-powered recommendations and virtual tour integration.",
    features: ["AI Recommendations", "Virtual Tours", "Advanced Filters"],
    popular: false,
  },
  {
    icon: Calculator,
    title: "Investment Analysis Tools",
    description:
      "Real estate investment calculators and analysis tools for ROI calculations and market insights.",
    features: ["ROI Calculator", "Market Analysis", "Investment Tracking"],
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Market Analytics Dashboard",
    description:
      "Real-time market analytics and trend analysis for informed real estate decisions.",
    features: ["Market Trends", "Price Analysis", "Demand Forecasting"],
    popular: false,
  },
  {
    icon: Users,
    title: "CRM & Lead Management",
    description:
      "Customer relationship management systems designed for real estate professionals.",
    features: ["Lead Tracking", "Client Database", "Follow-up Automation"],
    popular: false,
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Secure document management and e-signature solutions for real estate transactions.",
    features: ["E-Signatures", "Document Storage", "Compliance Tracking"],
    popular: false,
  },
];

const advancedFeatures = [
  {
    icon: MapPin,
    title: "Location Intelligence",
    description:
      "Advanced mapping and location-based services with neighborhood insights and proximity analysis for informed property decisions.",
  },
  {
    icon: Camera,
    title: "Virtual Tours & 3D",
    description:
      "Immersive virtual tour experiences with 3D modeling and interactive property showcases for remote viewing.",
  },
  {
    icon: ChartBar,
    title: "Market Analytics",
    description:
      "Comprehensive market analysis tools with price trends, demand forecasting, and investment insights for data-driven decisions.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Blockchain-powered secure transaction systems with smart contracts and escrow services for safe property deals.",
  },
];

const realEstateTechnologies = [
  { icon: Globe, name: "Web Platforms", category: "Frontend" },
  { icon: Smartphone, name: "Mobile Apps", category: "Mobile" },
  { icon: Database, name: "Property Database", category: "Backend" },
  { icon: MapIcon, name: "GIS Mapping", category: "Location" },
  { icon: Camera, name: "VR/AR", category: "Visualization" },
  { icon: Shield, name: "Blockchain", category: "Security" },
  { icon: Brain, name: "AI/ML", category: "Intelligence" },
  { icon: Cloud, name: "Cloud Services", category: "Infrastructure" },
  { icon: BarChart3, name: "Analytics", category: "Data" },
  { icon: Users, name: "CRM Systems", category: "Management" },
  { icon: FileText, name: "E-Signatures", category: "Documents" },
  { icon: CreditCard, name: "Payment Gateways", category: "Finance" },
];

const realEstateCaseStudies = [
  {
    title: "Digital Property Marketplace",
    company: "UrbanReal Estate",
    industry: "Property Platform",
    description:
      "Developed a comprehensive digital marketplace connecting buyers, sellers, and agents with advanced search capabilities, virtual tours, and secure transaction processing.",
    results: {
      "User Growth": "300%",
      "Transaction Volume": "$28M+",
      "Agent Efficiency": "40%",
      "Customer Satisfaction": "95%",
    },
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Google Maps API"],
  },
  {
    title: "Property Management System",
    company: "RentFlow Solutions",
    industry: "Property Management",
    description:
      "Built an end-to-end property management platform with tenant portal, maintenance tracking, rent collection, and financial reporting capabilities.",
    results: {
      "Properties Managed": "10,000+",
      "Tenant Retention": "85%",
      "Maintenance Response": "2hrs",
      "Revenue Increase": "25%",
    },
    technologies: ["Vue.js", "Python", "MongoDB", "Firebase", "Twilio", "QuickBooks API"],
  },
  {
    title: "Investment Analysis Platform",
    company: "InvestEstate Pro",
    industry: "Investment Tools",
    description:
      "Created an advanced investment analysis platform with ROI calculators, market trend analysis, and portfolio management tools for real estate investors.",
    results: {
      "Investment Analyzed": "$200M+",
      "User Accuracy": "92%",
      "Market Coverage": "50+ Cities",
      "ROI Improvement": "15%",
    },
    technologies: ["Angular", "Java", "MySQL", "Azure", "Yahoo Finance API", "Tableau"],
  },
];

const realEstateStats = [
  { icon: Home, value: "50+", label: "Properties Managed" },
  { icon: Users, value: "10+", label: "Active Users" },
  { icon: Building, value: "10+", label: "Properties Managed" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Real Estate Software Development",
      description:
        "Smart real estate technology solutions including property management, virtual tours, and digital transaction platforms.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Real Estate Software Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://www.ctasis.com/industries" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Real Estate",
          item: "https://www.ctasis.com/industries/real-estate",
        },
      ],
    },
  ],
};

const PropertySearchMockup = () => (
  <div className="relative mx-auto w-72 sm:w-80">
    <div className="rounded-[2.5rem] p-2 shadow-2xl border-4 border-slate-900 bg-white">
      <div className="rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div
          className="text-white p-4 flex items-center justify-between"
          style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #249BCA)` }}
        >
          <h3 className="text-sm font-bold">Property Search</h3>
          <Search className="w-4 h-4" />
        </div>
        <div className="p-4 space-y-2">
          {[
            { label: "Location", value: "Downtown, City Center" },
            { label: "Price Range", value: "$200K - $500K" },
            { label: "Property Type", value: "Apartment, Condo" },
          ].map((filter) => (
            <div key={filter.label} className="bg-white rounded-lg p-3 shadow-sm border border-slate-100">
              <div className="text-xs font-medium text-slate-700 mb-0.5">{filter.label}</div>
              <div className="text-xs text-slate-500">{filter.value}</div>
            </div>
          ))}
        </div>
        <div className="px-4 space-y-2 pb-2">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-[#249BCA]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${CYAN}18` }}>
                <Home className="w-5 h-5" style={{ color: NAVY }} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Modern Apartment</div>
                <div className="text-[10px] text-slate-500">2BR • 2BA • 1,200 sqft</div>
                <div className="text-xs font-bold" style={{ color: CYAN }}>
                  $350,000
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${CYAN}18` }}>
                <Building className="w-5 h-5" style={{ color: NAVY }} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Luxury Condo</div>
                <div className="text-[10px] text-slate-500">3BR • 2BA • 1,500 sqft</div>
                <div className="text-xs font-bold" style={{ color: CYAN }}>
                  $450,000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-4 pt-2">
          <button type="button" className="flex-1 text-xs py-2 rounded-lg text-white" style={{ backgroundColor: NAVY }}>
            Previous
          </button>
          <button type="button" className="flex-1 text-xs py-2 rounded-lg text-white" style={{ backgroundColor: NAVY }}>
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
);

const RealEstatePage = () => (
  <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Real Estate Technology Solutions"
        badge="Real Estate Technology Solutions"
        title="Smart Real Estate"
        highlight="Technology"
        description="Revolutionizing real estate with AI-powered platforms, virtual tours, and digital transaction solutions for the modern property market."
        stats={realEstateStats.map((s) => ({ number: s.value, label: s.label, icon: s.icon }))}
        primaryCta={{ label: "Start Transformation", href: "/contact-us" }}
        secondaryCta={{ label: "View Portfolio", href: "/portfolios" }}
      />

      {/* Services — alternating split rows */}
      <SectionWrap>
        <SectionHeader
          badge="Real Estate Technology Solutions"
          title="Comprehensive Real Estate"
          highlight="Solutions"
          description="From property management to investment analysis, we provide end-to-end technology solutions for the real estate industry."
        />
        <div className="divide-y divide-slate-100" id="real-estate-services">
          {realEstateServices.map((service, i) => (
            <motion.article
              key={service.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start py-10 sm:py-12"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <IconBox icon={service.icon} />
                  <div>
                    {service.popular && (
                      <span
                        className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white mb-1"
                        style={{ backgroundColor: CYAN }}
                      >
                        Popular
                      </span>
                    )}
                    <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </div>
              <ul className={`grid sm:grid-cols-2 gap-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-slate-100 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </SectionWrap>

      {/* Advanced features — mockup left, features right */}
      <SectionWrap alt>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="order-2 lg:order-1">
            <PropertySearchMockup />
          </motion.div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              badge="Advanced Features"
              title="Next-Generation"
              highlight="Real Estate Tech"
              description=""
              align="left"
            />
            <div className="space-y-8 -mt-4">
              {advancedFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`flex gap-4 sm:gap-5 ${i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* Technologies — icon strip grid */}
      <SectionWrap>
        <SectionHeader
          badge="Technology"
          title="Real Estate"
          highlight="Technology Stack"
          description="Cutting-edge technologies powering modern real estate solutions."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {realEstateTechnologies.map((tech, i) => (
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

      {/* Case studies — horizontal scroll */}
      <SectionWrap alt>
        <SectionHeader
          badge="Success Stories"
          title="Real Estate Success"
          highlight="Stories"
          description="Real-world implementations that have transformed real estate operations and customer experiences with measurable results."
        />
        <DotCarousel bleed ariaLabel="Content carousel">
            {realEstateCaseStudies.map((study, i) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex-shrink-0 w-[340px] sm:w-[400px] snap-start"
              >
                <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:shadow-lg transition-shadow">
                  <Pill>{study.industry}</Pill>
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-4 mb-1`}>
                    {study.title}
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: CYAN }}>
                    {study.company}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{study.description}</p>
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {study.technologies.map((tech) => (
                      <Pill key={tech}>{tech}</Pill>
                    ))}
                  </div>
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                    Key Results
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="rounded-xl bg-[#F6F8FA] p-3 text-center">
                        <div className={`${fraunces.className} text-lg font-medium`} style={{ color: NAVY }}>
                          <AnimatedStat value={value} />
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
        </DotCarousel>
      </SectionWrap>

      <PageCTA
        title="Ready to Transform Your Real Estate Business?"
        description="Let's discuss how our innovative real estate technology solutions can drive your property business forward."
        primaryLabel="Start Your Project"
        primaryHref="/contact-us"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolios"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default RealEstatePage;
