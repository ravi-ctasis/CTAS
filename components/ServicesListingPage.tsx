"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  Cloud,
  Shield,
  Target,
  Award,
  CheckCircle2,
  Clock,
  DollarSign,
  Rocket,
  Palette,
  Settings,
  Search,
  ShoppingCart,
  Users,
  ArrowUpRight,
  FileText,
  TrendingUp,
  Heart,
  Gamepad2,
  Home,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Star,
  type LucideIcon,
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
import { COMPANY_STATS } from "@/data/company-stats";

const whyChooseUs = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Certified professionals with 5+ years of experience",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Affordable rates with transparent pricing structure",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements and creating a detailed project plan",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "Building your website with modern technologies and best practices",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing across all devices and browsers",
    icon: CheckCircle2,
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deployment, monitoring, and ongoing maintenance support",
    icon: Rocket,
  },
];

const featuredServices = [
  {
    title: "Web Design",
    href: "/services/web-design",
    cta: "Learn How We Did It",
    icon: Palette,
    span: "md:col-span-1",
  },
  {
    title: "CMS E-commerce Development",
    href: "/services/e-commerce-solutions",
    cta: "Learn How We Did It",
    icon: ShoppingCart,
    span: "md:col-span-1",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    cta: "Learn How We Did It",
    icon: Globe,
    span: "md:col-span-1",
  },
  {
    title: "Amazon Seller Account Setup & Optimization",
    href: "/services/amazon-services",
    cta: "Boost Your Sales",
    icon: ShoppingCart,
    span: "md:col-span-2 lg:row-span-2",
    featured: true,
    badge: "HOT SERVICE",
  },
  {
    title: "Cloud Services",
    href: "/services/cloud-solutions",
    cta: "Learn How We Did It",
    icon: Cloud,
    span: "md:col-span-1",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-apps",
    cta: "Learn How We Did It",
    icon: Smartphone,
    span: "md:col-span-1",
  },
];

const digitalServices = [
  {
    title: "Multi-Marketplace Management",
    href: "/services/marketplace",
    description:
      "Manage stock, pricing, and orders across Amazon, Walmart, eBay, Shopify, Etsy, TikTok Shop, and more from a single platform.",
    icon: Globe,
    features: ["Unified Dashboard", "Cross-Platform Sync", "Centralized Inventory", "Automated Pricing"],
  },
  {
    title: "Amazon Seller Account Setup",
    href: "/services/amazon-services",
    description:
      "Complete Amazon seller account setup and optimization for maximum sales and visibility.",
    icon: TrendingUp,
    features: ["Account Setup", "Listing Optimization", "PPC Management", "Sales Analytics"],
  },
  {
    title: "Web Design",
    href: "/services/web-design",
    description:
      "Creative and modern website designs that capture your brand essence and engage your audience.",
    icon: Palette,
    features: ["Responsive Design", "UI/UX Design", "Brand Integration", "SEO Optimized"],
  },
  {
    title: "CMS Development",
    href: "/services/e-commerce-solutions",
    description:
      "Custom content management systems that make website management easy and efficient.",
    icon: FileText,
    features: ["WordPress Development", "Custom CMS", "Content Management", "Admin Panel"],
  },
  {
    title: "E-commerce Development",
    href: "/services/e-commerce-solutions",
    description:
      "Complete online store solutions with payment integration and inventory management.",
    icon: ShoppingCart,
    features: ["Online Store", "Payment Gateway", "Inventory Management", "Order Processing"],
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Custom web applications and websites built with modern technologies and best practices.",
    icon: Globe,
    features: ["Custom Websites", "Web Applications", "API Development", "Performance Optimization"],
  },
  {
    title: "Cloud Services",
    href: "/services/cloud-solutions",
    description:
      "Cloud infrastructure and services for scalable, secure, and reliable applications.",
    icon: Cloud,
    features: ["AWS Services", "Azure Solutions", "Server Management", "Backup & Recovery"],
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-apps",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
  },
];

const industries = [
  {
    title: "SME Business Solutions",
    href: "/industries/enterprise",
    description:
      "Custom software solutions tailored for small and medium enterprises to streamline operations and boost productivity.",
    icon: Users,
  },
  {
    title: "Finance and FinTech",
    href: "/industries/banking-finance",
    description:
      "Innovative financial technology solutions including payment systems, banking apps, and fintech platforms.",
    icon: DollarSign,
  },
  {
    title: "E-commerce and Retail",
    href: "/industries/retail",
    description:
      "Complete e-commerce solutions including online stores, inventory management, and retail automation systems.",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare & Fitness",
    href: "/industries/healthcare",
    description:
      "Healthcare management systems, telemedicine platforms, and fitness tracking applications for better health outcomes.",
    icon: Heart,
  },
  {
    title: "Gaming/Entertainment",
    href: "/industries/gaming",
    description:
      "Interactive gaming platforms, entertainment apps, and immersive digital experiences for engaging user interactions.",
    icon: Gamepad2,
  },
  {
    title: "Travel and Hospitality",
    href: "/industries/transportation",
    description:
      "Travel booking platforms, hotel management systems, and hospitality solutions for seamless guest experiences.",
    icon: Globe,
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Property management systems, real estate platforms, and digital solutions for modern real estate businesses.",
    icon: Home,
  },
  {
    title: "EdTech",
    href: "/industries/education",
    description:
      "Educational technology platforms, learning management systems, and digital learning solutions for modern education.",
    icon: GraduationCap,
  },
];

const amazonServices = [
  {
    title: "Account Setup",
    icon: ShoppingCart,
    items: [
      "Professional seller account creation",
      "Business verification & documentation",
      "Tax information setup",
      "Payment method configuration",
    ],
  },
  {
    title: "Listing Optimization",
    icon: TrendingUp,
    items: [
      "SEO-optimized product titles",
      "Compelling product descriptions",
      "High-quality image optimization",
      "Keyword research & implementation",
    ],
  },
  {
    title: "Performance Analytics",
    icon: BarChart3,
    items: [
      "Sales performance tracking",
      "Competitor analysis",
      "ROI optimization strategies",
      "Monthly performance reports",
    ],
  },
  {
    title: "Compliance & Security",
    icon: Shield,
    items: [
      "Amazon policy compliance",
      "Account security setup",
      "Fraud prevention measures",
      "Regular security audits",
    ],
  },
  {
    title: "Customer Support",
    icon: MessageSquare,
    items: [
      "Review management",
      "Customer inquiry handling",
      "Return & refund management",
      "24/7 support availability",
    ],
  },
  {
    title: "Ongoing Management",
    icon: Settings,
    items: [
      "Inventory management",
      "Pricing strategy optimization",
      "Campaign management",
      "Regular account maintenance",
    ],
  },
];

const amazonStats = [
  { number: "200+", label: "Seller Accounts", icon: TrendingUp },
  { number: "₹28M+", label: "Revenue Generated", icon: DollarSign },
  { number: "4.8★", label: "Average Rating", icon: Star },
  { number: "24/7", label: "Support Available", icon: Clock },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "IT Services | Ctas Info Services LLP",
      description:
        "Comprehensive IT services including web development, mobile apps, AI/ML, cloud computing, DevOps, and e-commerce solutions.",
      url: "https://www.ctasis.com/services",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
      ],
    },
  ],
};

const IconBox = ({ icon: Icon }: { icon: LucideIcon }) => (
  <div
    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: `${CYAN}18` }}
  >
    <Icon className="w-5 h-5" style={{ color: NAVY }} />
  </div>
);

const ServicesListingPage = () => (
  <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Our Services"
        badge="Our Services"
        title="Comprehensive"
        highlight="E-commerce & IT Solutions"
        description="From web development to mobile apps, custom software to e-commerce solutions - we deliver cutting-edge digital solutions that drive business growth and success."
        stats={[
          { number: COMPANY_STATS.projectsDelivered, label: "Projects Delivered", icon: Target, description: "Successfully Completed" },
          { number: COMPANY_STATS.teamMembers, label: "Team Members", icon: Users, description: "Expert Professionals" },
          { number: COMPANY_STATS.yearsOfExcellence, label: "Years of Excellence", icon: Award, description: "Industry Expertise" },
          { number: COMPANY_STATS.marketplaces, label: "Marketplaces", icon: Code, description: "Global Integrations" },
        ]}
        primaryCta={{ label: "View Our Work", href: "/portfolios" }}
        secondaryCta={{ label: "Schedule a Call", href: "/contact-us" }}
      />

      {/* Featured Services — bento grid */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]" aria-labelledby="featured-services-heading">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <motion.h2
            id="featured-services-heading"
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-8 sm:mb-10`}
          >
            Featured Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[minmax(180px,auto)]">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-[1.5rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#13345A]/[0.06] ${
                  service.featured
                    ? `${service.span} min-h-[280px] lg:min-h-[380px] border-orange-200/60`
                    : `${service.span} min-h-[200px] border-slate-200/80`
                }`}
                style={
                  service.featured
                    ? { backgroundImage: `linear-gradient(145deg, ${NAVY}, #1a3d5c 40%, #0E2233)` }
                    : { backgroundColor: "#fff" }
                }
              >
                {service.featured && (
                  <>
                    <div
                      className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-40"
                      style={{ background: "radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 70%)" }}
                      aria-hidden="true"
                    />
                    {service.badge && (
                      <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white">
                        {service.badge}
                      </span>
                    )}
                  </>
                )}

                <Link href={service.href} className="flex flex-col justify-between h-full p-6 sm:p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] focus-visible:ring-offset-2 rounded-[1.5rem]">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        service.featured ? "bg-white/10" : ""
                      }`}
                      style={service.featured ? undefined : { backgroundColor: `${CYAN}18` }}
                    >
                      <service.icon
                        className="w-6 h-6"
                        style={{ color: service.featured ? "#6FC3E4" : NAVY }}
                      />
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        service.featured ? "text-white/50 group-hover:text-white" : "text-slate-300 group-hover:text-[#13345A]"
                      }`}
                    />
                  </div>

                  <div className="mt-auto pt-6">
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-2 leading-snug ${
                        service.featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                        service.featured ? "text-[#6FC3E4] group-hover:text-white" : "text-[#249BCA] group-hover:text-[#13345A]"
                      } transition-colors`}
                    >
                      {service.cta}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Digital Services — alternating split rows */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white" aria-labelledby="digital-services-heading">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader
            badge="Our Services"
            title="Professional"
            highlight="Digital Services"
            description="We provide comprehensive digital solutions to help your business grow and succeed online."
          />

          <div className="space-y-0 divide-y divide-slate-100">
            {digitalServices.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-10 sm:py-12 ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <IconBox icon={service.icon} />
                    <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] rounded-full"
                    style={{ color: NAVY }}
                  >
                    Explore service
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#F6F8FA] border border-slate-100 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — horizontal icon strip with connectors */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]" aria-labelledby="why-choose-heading">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader
            badge="Why Choose Us"
            title="The"
            highlight="Ctas Advantage"
            description="We deliver exceptional results through our expertise, quality, and commitment to your success."
          />

          <div className="relative">
            <div
              className="hidden lg:block absolute top-[2.75rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#13345A]/15 to-transparent"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform shadow-sm border border-slate-200/60 bg-white"
                  >
                    <item.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries — horizontal scroll showcase */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white overflow-hidden" aria-labelledby="industries-heading">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-8 sm:mb-10">
          <SectionHeader
            badge="Industries We Serve"
            title="Industries We"
            highlight="Empower"
            description="We don't believe in one-size-fits-all. We specialize in crafting bespoke software solutions that directly address the unique complexities and opportunities within diverse sectors."
          />
        </div>

        <DotCarousel ariaLabel="Industries we serve">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
              >
                <Link
                  href={industry.href}
                  className="group block h-full rounded-[1.5rem] p-6 sm:p-7 border border-slate-200/80 bg-[#F6F8FA] hover:bg-white hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${NAVY}10` }}
                    >
                      <industry.icon className="w-5 h-5" style={{ color: NAVY }} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#13345A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{industry.description}</p>
                </Link>
              </motion.div>
            ))}
        </DotCarousel>
      </section>

      {/* Development Process — vertical timeline */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]" aria-labelledby="process-heading">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader
            badge="Our Process"
            title="Development"
            highlight="Process"
            description="Our proven development process ensures quality, transparency, and timely delivery."
          />

          <div className="max-w-3xl mx-auto relative">
            <div
              className="absolute left-[1.35rem] sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#249BCA]/40 via-[#13345A]/20 to-transparent"
              aria-hidden="true"
            />
            <div className="space-y-8 sm:space-y-10">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex gap-5 sm:gap-8 pl-0"
                >
                  <div
                    className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold border-4 border-[#F6F8FA]"
                    style={{ backgroundColor: NAVY }}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1 pt-1 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-4 h-4" style={{ color: CYAN }} />
                      <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Services — asymmetric split + checklist grid */}
      <section
        className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden"
        aria-labelledby="amazon-services-heading"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(135deg, #f97316 0%, transparent 50%, #ec4899 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-10 items-start mb-8 sm:mb-10">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeader
                badge="Amazon Services"
                title="Amazon Seller"
                highlight="Account Setup & Optimization"
                description="At Ctas Info Services LLP, we offer end-to-end e-commerce and IT solutions tailored for online businesses."
                align="left"
              />
              <Link
                href="/services/amazon-services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#08141F] transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] focus-visible:ring-offset-2"
                style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
              >
                Explore Amazon Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {amazonServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl border border-slate-200/80 bg-[#F6F8FA] p-5 sm:p-6 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconBox icon={service.icon} />
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Amazon Stats — animated counter bar */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="rounded-[1.75rem] overflow-hidden border border-slate-200/80"
            style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
            role="list"
            aria-label="Amazon services statistics"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {amazonStats.map((stat) => (
                <div key={stat.label} className="p-6 sm:p-8 text-center" role="listitem">
                  <stat.icon className="w-5 h-5 mx-auto mb-3" style={{ color: CYAN }} aria-hidden="true" />
                  <p className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-white mb-1`}>
                    <AnimatedStat value={stat.number} />
                  </p>
                  <p className="text-sm text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="Ready to Start Your Project?"
        description="Let's discuss your requirements and create a custom solution that drives your business forward. Get in touch with our experts today."
        primaryLabel="Get Free Quote"
        primaryHref="/contact-us"
        secondaryLabel="View Our Portfolio"
        secondaryHref="/portfolios"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default ServicesListingPage;
