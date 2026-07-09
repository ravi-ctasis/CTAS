"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
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
  Calendar,
  CheckCircle2,
  Heart,
  Activity,
  Microscope,
  Brain,
  Baby,
  Eye,
  Bone,
  Syringe,
  FileText,
  Bell,
  Video,
  UserCheck,
  Star,
  Lock,
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

const featurePills = ["AI Scheduling", "Telemedicine", "HIPAA Secure", "24/7 Access"];

const stats = [
  { number: "1000+", label: "Verified Doctors" },
  { number: "50K+", label: "Happy Patients" },
  { number: "25+", label: "Medical Specialties" },
  { number: "4.9★", label: "Average Rating" },
];

const features = [
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    description:
      "Intelligent scheduling system with real-time availability, automated reminders, and conflict detection.",
    span: "md:col-span-2",
  },
  {
    icon: UserCheck,
    title: "Doctor Verification",
    description:
      "Comprehensive verification system including medical licenses, certifications, and background checks.",
    span: "",
  },
  {
    icon: Video,
    title: "Telemedicine Integration",
    description:
      "Built-in video consultation platform with screen sharing, file sharing, and secure communication.",
    span: "",
  },
  {
    icon: FileText,
    title: "Digital Health Records",
    description:
      "Secure patient records management with HIPAA compliance and easy access for authorized personnel.",
    span: "",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automated reminders for appointments, medication schedules, and follow-up consultations.",
    span: "",
  },
  {
    icon: Star,
    title: "Patient Reviews",
    description:
      "Comprehensive rating system for doctors and clinics to help patients make informed decisions.",
    span: "",
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description:
      "End-to-end encryption and security measures to ensure patient data protection and privacy.",
    span: "",
  },
  {
    icon: Activity,
    title: "Health Analytics",
    description:
      "Advanced analytics dashboard for healthcare providers to track patient outcomes and practice efficiency.",
    span: "md:col-span-2",
  },
];

const benefits = [
  {
    icon: Users,
    title: "For Patients",
    items: [
      "Easy appointment booking and management",
      "Access to verified healthcare providers",
      "Secure telemedicine consultations",
      "Digital health records access",
      "Automated appointment reminders",
      "Transparent pricing and reviews",
    ],
  },
  {
    icon: Stethoscope,
    title: "For Doctors",
    items: [
      "Streamlined patient management",
      "Digital health records integration",
      "Telemedicine consultation tools",
      "Automated scheduling system",
      "Patient communication platform",
      "Practice analytics and insights",
    ],
  },
  {
    icon: Heart,
    title: "For Healthcare",
    items: [
      "Improved patient outcomes",
      "Reduced administrative burden",
      "Better resource utilization",
      "Enhanced patient engagement",
      "Compliance and security",
      "Data-driven insights",
    ],
  },
];

const specialties = [
  { name: "Cardiology", icon: Heart },
  { name: "Dermatology", icon: Activity },
  { name: "Neurology", icon: Brain },
  { name: "Pediatrics", icon: Baby },
  { name: "Ophthalmology", icon: Eye },
  { name: "Dentistry", icon: Activity },
  { name: "Orthopedics", icon: Bone },
  { name: "Psychiatry", icon: Brain },
  { name: "Gynecology", icon: Heart },
  { name: "Oncology", icon: Microscope },
  { name: "Emergency Medicine", icon: Syringe },
  { name: "General Practice", icon: Stethoscope },
];

const techStack = [
  { icon: Smartphone, name: "React Native", description: "Cross-platform mobile development for iOS and Android" },
  { icon: Globe, name: "Next.js", description: "Modern web framework for admin dashboard and web app" },
  { icon: Server, name: "Node.js", description: "Scalable backend server with Express.js framework" },
  { icon: Database, name: "PostgreSQL", description: "Reliable relational database for healthcare data" },
  { icon: Cloud, name: "AWS", description: "HIPAA-compliant cloud infrastructure" },
  { icon: Zap, name: "WebRTC", description: "Real-time video communication for telemedicine" },
];

const securityFeatures = [
  { icon: Lock, title: "End-to-End Encryption", desc: "All data encrypted in transit and at rest" },
  { icon: Shield, title: "HIPAA Compliance", desc: "Full compliance with healthcare regulations" },
  { icon: UserCheck, title: "Access Control", desc: "Role-based permissions and authentication" },
  { icon: Activity, title: "Audit Trails", desc: "Complete audit logs for compliance" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Doctor Appointment App Development Services",
      description:
        "Custom doctor appointment app solutions: patient booking, telemedicine, scheduling, secure EMR integration, and real-time notifications.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      areaServed: "Worldwide",
      serviceType: "Doctor Appointment App Development",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.ctasis.com/solutions" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Doctor Appointment App",
          item: "https://www.ctasis.com/solutions/doctor-appointment-app",
        },
      ],
    },
  ],
};

const HealthcareBookingMockup = () => (
  <div className="relative mx-auto max-w-md hidden lg:block">
    <div className="relative rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200/80 bg-[#F6F8FA] overflow-hidden">
      <div className="text-center mb-5">
        <div className="relative inline-block">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
            style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
          >
            <Activity className="w-7 h-7 text-white" />
          </div>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
        </div>
        <div className="mt-3">
          <div className={`${fraunces.className} text-lg font-medium text-slate-900`}>
            Healthcare Booking System
          </div>
          <div className="text-sm text-slate-500">Smart Appointment Management</div>
          <div className="flex items-center justify-center gap-3 mt-2 text-xs">
            <span className="flex items-center gap-1 text-emerald-600">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> Live
            </span>
            <span className="flex items-center gap-1" style={{ color: CYAN }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: CYAN }} /> Secure
            </span>
            <span className="flex items-center gap-1 text-violet-600">
              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" /> HIPAA
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <div className="rounded-xl p-3 border border-emerald-200 bg-emerald-50/60">
          <div className="flex items-center justify-between mb-1">
            <span className="text-emerald-700 text-[10px] font-bold">Book Appointment</span>
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-emerald-800 text-sm font-bold">Quick Book</div>
          <div className="text-emerald-600 text-[10px]">Find available slots</div>
          <div className="text-emerald-500 text-[10px] mt-0.5">12 slots today</div>
        </div>
        <div className="rounded-xl p-3 border border-blue-200 bg-blue-50/60">
          <div className="flex items-center justify-between mb-1">
            <span className="text-blue-700 text-[10px] font-bold">Video Consult</span>
            <Video className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <div className="text-blue-800 text-sm font-bold">Telemedicine</div>
          <div className="text-blue-600 text-[10px]">Connect instantly</div>
          <div className="text-blue-500 text-[10px] mt-0.5">8 doctors online</div>
        </div>
      </div>

      <div className="rounded-xl p-3.5 mb-4 border border-slate-200 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-slate-900 text-sm">Patient Dashboard</span>
          <span className="text-slate-400 text-[10px]">Welcome back, John</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3 text-center">
          <div>
            <div className="text-base font-bold" style={{ color: NAVY }}>3</div>
            <div className="text-[10px] text-slate-500">Upcoming</div>
          </div>
          <div>
            <div className="text-base font-bold text-emerald-600">12</div>
            <div className="text-[10px] text-slate-500">Completed</div>
          </div>
          <div>
            <div className="text-base font-bold text-violet-600">4.9★</div>
            <div className="text-[10px] text-slate-500">Rating</div>
          </div>
        </div>
        <div className="rounded-lg p-2.5 border border-slate-200 bg-[#F6F8FA]">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-slate-800 font-semibold text-[10px]">Next Appointment</div>
              <div className="text-slate-500 text-[10px]">Dr. Sarah Johnson - Cardiology</div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-slate-800 font-bold text-[10px]">Dec 15, 2:00 PM</div>
              <div className="text-slate-400 text-[10px]">In 2 days</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Book Now", icon: Calendar },
          { label: "Consult", icon: Video },
          { label: "Records", icon: FileText },
        ].map((action) => (
          <span
            key={action.label}
            className="flex items-center justify-center gap-1 py-2 rounded-lg text-[10px] font-bold text-white"
            style={{ backgroundColor: NAVY }}
          >
            <action.icon className="w-3 h-3" />
            {action.label}
          </span>
        ))}
      </div>

      <div className="absolute top-3 right-3 rounded-lg p-2 border border-slate-200 bg-white/95 text-center">
        <div className="text-slate-500 text-[10px]">Emergency</div>
        <div className="text-red-600 font-bold text-sm">24/7</div>
        <div className="text-slate-500 text-[10px]">Available</div>
      </div>
    </div>
  </div>
);

const DoctorAppointmentAppPage = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const currentBenefit = benefits[activeBenefit];

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main id="main-content">
        {/* Split hero with healthcare booking mockup */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Doctor Appointment App Development"
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
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: CYAN_LIGHT }} />
                  Healthcare Innovation
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  <span className="block">Doctor</span>
                  <span className="italic" style={{ color: CYAN_LIGHT }}>
                    Appointment
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-[#F2F6F9]">Platform</span>
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-6 max-w-xl">
                  Next-generation healthcare booking system with AI-powered scheduling,{" "}
                  <span className="font-semibold text-[#C7D2D9]">telemedicine integration</span>, and advanced patient
                  management.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featurePills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/15 bg-white/[0.08]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/portfolios"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
                    style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                  >
                    <Play className="w-4 h-4" />
                    view Portfolios
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <HealthcareBookingMockup />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats — animated counter grid */}
        <SectionWrap>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Healthcare platform statistics">
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

        {/* Features — bento grid */}
        <SectionWrap alt>
          <SectionHeader
            badge="Features"
            title="Advanced Features for"
            highlight="Healthcare"
            description="Our comprehensive platform provides everything needed for modern healthcare management"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {features.map((feature, i) => (
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
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* Benefits — tabbed sidebar */}
        <SectionWrap>
          <SectionHeader
            badge="Benefits"
            title="Benefits for All Healthcare"
            highlight="Stakeholders"
            description="Our platform creates value for patients, doctors, and healthcare systems"
          />
          <div className="grid lg:grid-cols-[minmax(0,220px)_1fr] gap-6 lg:gap-10 items-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" aria-label="Stakeholder benefits">
              {benefits.map((benefit, bi) => (
                <button
                  key={benefit.title}
                  type="button"
                  onClick={() => setActiveBenefit(bi)}
                  className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                    activeBenefit === bi
                      ? "text-white shadow-md"
                      : "text-slate-600 bg-white border border-slate-200/80 hover:border-[#13345A]/20"
                  }`}
                  style={activeBenefit === bi ? { backgroundColor: NAVY } : undefined}
                  aria-current={activeBenefit === bi ? "true" : undefined}
                >
                  {benefit.title}
                </button>
              ))}
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBenefit.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <currentBenefit.icon className="w-6 h-6" style={{ color: NAVY }} />
                  </div>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>
                    {currentBenefit.title}
                  </h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {currentBenefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </SectionWrap>

        {/* Specialties — horizontal scroll */}
        <SectionWrap alt>
          <SectionHeader
            badge="Specialties"
            title="Comprehensive Medical"
            highlight="Specialties"
            description="Covering all major medical fields and specialties"
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {specialties.map((specialty, i) => (
                <motion.div
                  key={specialty.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="flex-shrink-0 w-[200px] sm:w-[220px] snap-start rounded-[1.25rem] border border-slate-200/80 bg-white p-5 hover:shadow-md transition-shadow border-l-4"
                  style={{ borderLeftColor: CYAN }}
                >
                  <specialty.icon className="w-6 h-6 mb-3" style={{ color: CYAN }} />
                  <span className="font-semibold text-slate-800 text-sm">{specialty.name}</span>
                </motion.div>
              ))}
        </DotCarousel>
        </SectionWrap>

        {/* Tech stack — 3-column grid */}
        <SectionWrap>
          <SectionHeader
            badge="Technology"
            title="HIPAA-Compliant"
            highlight="Technology Stack"
            description="Built with security-first technologies for healthcare applications"
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
            <Stethoscope className="w-4 h-4 inline mr-1.5" style={{ color: CYAN }} />
            See our{" "}
            <Link href="/industries/healthcare" className="font-semibold hover:underline" style={{ color: NAVY }}>
              healthcare industry
            </Link>{" "}
            and{" "}
            <Link href="/services/custom-software" className="font-semibold hover:underline" style={{ color: NAVY }}>
              custom software
            </Link>{" "}
            solutions
          </motion.p>
        </SectionWrap>

        {/* Security — split with compliance checklist */}
        <SectionWrap alt>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <SectionHeader
                badge="Security"
                title="Enterprise-Grade"
                highlight="Security"
                description="HIPAA-compliant security measures to protect patient data"
                align="left"
              />
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-[1.25rem] border border-slate-200/80 bg-white p-5 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: NAVY }} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrap>

        <PageCTA
          title="Ready to Transform Healthcare Access?"
          description="Join the healthcare revolution with a secure, efficient, and patient-friendly appointment booking platform."
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
};

export default DoctorAppointmentAppPage;
