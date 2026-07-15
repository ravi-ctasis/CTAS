"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  Star,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Play,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Server,
  Home,
  Calendar,
  MapPin,
  CreditCard,
  MessageSquare,
  CheckCircle2,
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

const heroBenefits = ["Verified Professionals", "Instant Booking", "Secure Payments"];

const stats = [
  { number: "200+", label: "Verified Handymen" },
  { number: "10K+", label: "Happy Customers" },
  { number: "200+", label: "Service Categories" },
  { number: "4.8★", label: "Average Rating" },
];

const features = [
  {
    icon: Wrench,
    title: "Service Booking",
    description:
      "Easy-to-use booking system for customers to schedule handyman services with real-time availability.",
  },
  {
    icon: MapPin,
    title: "Location-Based Matching",
    description:
      "Smart algorithm to match customers with nearby qualified handymen based on location and service type.",
  },
  {
    icon: Calendar,
    title: "Real-Time Scheduling",
    description: "Dynamic calendar system with instant booking confirmation and automated reminders.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with secure transaction processing and escrow protection.",
  },
  {
    icon: MessageSquare,
    title: "In-App Communication",
    description:
      "Built-in chat and call features for seamless communication between customers and handymen.",
  },
  {
    icon: Star,
    title: "Rating & Reviews",
    description:
      "Comprehensive review system to help customers choose the best handymen and maintain quality standards.",
  },
  {
    icon: Shield,
    title: "Verification System",
    description:
      "Background checks, ID verification, and insurance validation for all registered handymen.",
  },
  {
    icon: Truck,
    title: "Service Tracking",
    description:
      "Real-time tracking of handyman location and estimated arrival time for better customer experience.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "For Customers",
    items: [
      "Quick access to qualified handymen",
      "Transparent pricing and service details",
      "Real-time tracking and updates",
      "Secure payment processing",
      "Easy booking and rescheduling",
      "Quality assurance through reviews",
    ],
  },
  {
    icon: Wrench,
    title: "For Handymen",
    items: [
      "Increased job opportunities",
      "Flexible working hours",
      "Direct customer communication",
      "Secure payment collection",
      "Professional profile building",
      "Customer feedback and ratings",
    ],
  },
  {
    icon: Home,
    title: "For Homeowners",
    items: [
      "Reliable home maintenance services",
      "Emergency service availability",
      "Professional quality assurance",
      "Cost-effective solutions",
      "Scheduled maintenance plans",
      "Warranty and insurance coverage",
    ],
  },
];

const techStack = [
  { icon: Smartphone, name: "React Native", description: "Cross-platform mobile development for iOS and Android" },
  { icon: Globe, name: "Next.js", description: "Modern web framework for admin dashboard and web app" },
  { icon: Server, name: "Node.js", description: "Scalable backend server with Express.js framework" },
  { icon: Database, name: "MongoDB", description: "Flexible NoSQL database for dynamic data management" },
  { icon: Cloud, name: "AWS", description: "Cloud infrastructure for scalability and reliability" },
  { icon: Zap, name: "Socket.io", description: "Real-time communication and notifications" },
];

const serviceCategories = [
  "Plumbing Services",
  "Electrical Work",
  "Carpentry & Woodwork",
  "Painting & Decorating",
  "Cleaning Services",
  "Landscaping & Gardening",
  "HVAC Services",
  "Appliance Repair",
  "Roofing & Gutters",
  "Flooring Installation",
  "Window & Door Repair",
  "General Maintenance",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Handyman Services App Development",
      description:
        "Custom handyman services apps: service booking, real-time tracking, provider management, and secure payments.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Handyman Services App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Handyman Services App",
          item: "https://www.ctasis.com/solutions/handyman-services-app",
        },
      ],
    },
  ],
};

const HandymanMockup = () => (
  <div className="relative mx-auto max-w-xs hidden lg:block">
    <div className="relative mx-auto w-72 h-[520px] bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl">
      <div
        className="w-full h-full rounded-[2rem] p-5 overflow-hidden"
        style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 60%, ${CYAN}88)` }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-sm font-medium">Home Services</span>
        </div>

        <div className="bg-white/20 rounded-full p-2.5 flex items-center mb-4">
          <MapPin className="w-4 h-4 text-white mr-2 flex-shrink-0" />
          <span className="text-white text-xs">Find services near you...</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {["Plumbing", "Electrical", "Cleaning", "Repair"].map((service) => (
            <div key={service} className="bg-white/20 rounded-xl p-2.5 text-center">
              <div className="w-7 h-7 bg-white/30 rounded-full mx-auto mb-1.5" />
              <span className="text-white text-[10px] font-medium">{service}</span>
            </div>
          ))}
        </div>

        <div className="bg-white/20 rounded-xl p-3.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/30 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-sm">John Smith</div>
              <div className="text-blue-200 text-xs">Plumbing Expert</div>
              <div className="flex items-center mt-1">
                <Star className="w-3 h-3 fill-current" style={{ color: CYAN_LIGHT }} />
                <span className="text-white text-xs ml-1">4.9 (127 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <motion.div
      {...fadeUp}
      className="absolute -top-3 -right-3 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
      style={{ backgroundColor: CYAN_LIGHT }}
    >
      <Shield className="w-7 h-7" style={{ color: NAVY }} />
    </motion.div>
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.1 }}
      className="absolute -bottom-3 -left-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl"
    >
      <Users className="w-6 h-6" style={{ color: NAVY }} />
    </motion.div>
  </div>
);

const HandymanServicesAppPage = () => (
  <PageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Navigation />
    <main>
      {/* Split hero with phone mockup */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
        aria-label="Handyman Services App Development"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                <Wrench className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                Home Services Marketplace
              </div>
              <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                <span className="block">Handyman</span>
                <span className="italic" style={{ color: CYAN_LIGHT }}>
                  Services App
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-6 max-w-xl">
                Revolutionize home maintenance with our comprehensive marketplace platform.{" "}
                <span className="font-semibold text-[#C7D2D9]">
                  Connect homeowners with verified professionals
                </span>{" "}
                for reliable, convenient, and quality home services.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {heroBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-[#C7D2D9]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                  style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                >
                  <Play className="w-4 h-4" />
                  Start Free Consultation
                </Link>
                <Link
                  href="/portfolios"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                >
                  Portfolios
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <HandymanMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats — animated counter grid */}
      <SectionWrap>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Handyman platform statistics">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="text-center rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-md transition-shadow"
              role="listitem"
            >
              <div className={`${fraunces.className} text-3xl sm:text-4xl font-medium mb-2`} style={{ color: NAVY }}>
                {stat.number.match(/^[\d.]+/) ? <AnimatedStat value={stat.number} /> : stat.number}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      {/* Features — horizontal scroll */}
      <SectionWrap alt>
        <SectionHeader
          badge="Features"
          title="Powerful Features for"
          highlight="Home Services"
          description="Our comprehensive platform provides everything needed to run a successful home services marketplace"
        />
        <DotCarousel bleed ariaLabel="Content carousel">
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
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.article>
            ))}
        </DotCarousel>
      </SectionWrap>

      {/* Benefits — zigzag alternating */}
      <SectionWrap>
        <SectionHeader
          badge="Benefits"
          title="Benefits for All"
          highlight="Stakeholders"
          description="Our platform creates value for customers, service providers, and homeowners alike"
        />
        <div className="space-y-6 lg:space-y-8">
          {benefits.map((benefit, i) => (
            <motion.article
              key={benefit.title}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`flex flex-col sm:flex-row gap-6 sm:gap-10 items-start rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full sm:w-1/3 flex items-center gap-4 sm:flex-col sm:text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${CYAN}18` }}
                >
                  <benefit.icon className="w-7 h-7" style={{ color: NAVY }} />
                </div>
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{benefit.title}</h3>
              </div>
              <ul className="w-full sm:w-2/3 grid sm:grid-cols-2 gap-2.5">
                {benefit.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </SectionWrap>

      {/* Tech stack — icon strip grid */}
      <SectionWrap alt>
        <SectionHeader
          badge="Technology"
          title="Cutting-Edge"
          highlight="Technology Stack"
          description="Built with modern technologies for performance, scalability, and reliability"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 text-center hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${CYAN}18` }}
              >
                <tech.icon className="w-6 h-6" style={{ color: NAVY }} />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{tech.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeUp} className="mt-8 text-center text-sm text-slate-600">
          <Code className="w-4 h-4 inline mr-1.5" style={{ color: CYAN }} />
          Explore our{" "}
          <Link href="/services/mobile-apps" className="font-semibold hover:underline" style={{ color: NAVY }}>
            mobile app development
          </Link>{" "}
          and{" "}
          <Link href="/industries/transportation" className="font-semibold hover:underline" style={{ color: NAVY }}>
            on-demand platform
          </Link>{" "}
          expertise
        </motion.p>
      </SectionWrap>

      {/* Service categories — bento-style grid */}
      <SectionWrap>
        <SectionHeader
          badge="Categories"
          title="Comprehensive"
          highlight="Service Categories"
          description="Covering all aspects of home maintenance and improvement"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceCategories.map((service, i) => (
            <motion.div
              key={service}
              {...fadeUp}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
              className={`flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 hover:shadow-md transition-shadow border-l-4 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ borderLeftColor: CYAN }}
            >
              <Wrench className="w-5 h-5 flex-shrink-0" style={{ color: CYAN }} />
              <span className="font-semibold text-slate-800 text-sm sm:text-base">{service}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      <PageCTA
        title="Ready to Build Your Handyman Services Platform?"
        description="Join the growing home services market with a professional, feature-rich platform that connects customers with skilled professionals."
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

export default HandymanServicesAppPage;
