"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  CheckCircle2,
  MessageCircle,
  Code,
  Users2,
  Rocket,
  ShieldCheck,
  Headphones,
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
} from "@/components/page-design";
import { COMPANY_STATS } from "@/data/company-stats";

import Analyzing from "../public/analyzing.webp";
import Hiring from "../public/developers-hiring.webp";
import project from "../public/Initiatingproject.webp";
import Delivering from "../public/delivering.webp";

const serviceCards = [
  { title: "Project Consultation", description: "Expert consultation for your project requirements", icon: MessageCircle },
  { title: "Team Assembly", description: "Assembling the perfect team for your project", icon: Users },
  { title: "Development Process", description: "Agile development with regular updates", icon: Code },
  { title: "Quality Assurance", description: "Comprehensive testing and quality checks", icon: Shield },
  { title: "Deployment", description: "Smooth deployment and go-live support", icon: Rocket },
  { title: "Ongoing Support", description: "24/7 support and maintenance services", icon: Headphones },
];

const processSections = [
  {
    title: "Analyzing Your Requirements",
    description:
      "We begin every project by thoroughly understanding your business needs, technical requirements, and success metrics. Our team conducts detailed analysis to ensure we deliver exactly what you need.",
    image: Analyzing,
    alt: "Analyzing Requirements",
    items: [
      { title: "Business Analysis", desc: "Understanding your business goals and objectives" },
      { title: "Technical Assessment", desc: "Evaluating technical feasibility and requirements" },
      { title: "Resource Planning", desc: "Planning team allocation and project timeline" },
    ],
    imageLeft: false,
  },
  {
    title: "Hiring the Best Developers",
    description:
      "We carefully select and assemble a team of experienced developers, designers, and project managers who are perfectly suited for your project. Our rigorous hiring process ensures quality and expertise.",
    image: Hiring,
    alt: "Hiring Developers",
    items: [
      { title: "Expert Screening", desc: "Thorough evaluation of technical skills and experience" },
      { title: "Team Matching", desc: "Matching the right skills to your project requirements" },
      { title: "Cultural Fit", desc: "Ensuring team members align with your company culture" },
    ],
    imageLeft: true,
  },
  {
    title: "Initiating Your Project",
    description:
      "Once the team is assembled, we kick off your project with a comprehensive planning session. We establish clear communication channels, set up project management tools, and define success metrics.",
    image: project,
    alt: "Initiating Project",
    items: [
      { title: "Project Kickoff", desc: "Comprehensive project initiation and planning" },
      { title: "Communication Setup", desc: "Establishing clear communication channels and protocols" },
      { title: "Milestone Planning", desc: "Setting up project milestones and delivery schedules" },
    ],
    imageLeft: false,
  },
  {
    title: "Delivering Quality Software",
    description:
      "Our team works with you to understand your requirements, create a detailed project plan, and build your software using the latest technologies and AI-augmented best practices.",
    image: Delivering,
    alt: "Delivering Quality Software",
    items: [
      { title: "Quality Development", desc: "Building software with clean code and best practices" },
      { title: "Regular Updates", desc: "Providing regular progress updates and demos" },
      { title: "Testing & QA", desc: "Comprehensive testing and quality assurance" },
    ],
    imageLeft: true,
  },
];

const whyChoose = [
  {
    icon: Users2,
    title: "Expert Team",
    description: "Our experienced developers and designers bring years of expertise to every project",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous testing and quality assurance processes ensure bug-free, reliable software",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile development methodology ensures faster delivery without compromising quality",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="group bg-white border border-slate-200/80 rounded-2xl p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300"
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform"
      style={{ backgroundColor: `${CYAN}18` }}
    >
      <Icon className="w-6 h-6" style={{ color: NAVY }} />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </motion.div>
);

const HowWeWorkPage = () => (
  <PageShell>
    <Navigation />
    <main>
      <PageHero
        ariaLabel="How We Work"
        badge="Our Process"
        title="How We"
        highlight="Work"
        description="Our proven methodology ensures successful project delivery through collaboration, AI-augmented innovation, and engineering excellence."
        stats={[
          { number: "6", label: "Process Steps", icon: Rocket, description: "End-to-end delivery" },
          { number: COMPANY_STATS.projectsDelivered, label: "Projects", icon: Shield, description: "Successfully delivered" },
          { number: COMPANY_STATS.certifiedDevelopers, label: "Experts", icon: Users, description: "Certified professionals" },
        ]}
      />

      <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader
            badge="Comprehensive Approach"
            title="Our"
            highlight="Methodology"
            description="From initial consultation to ongoing support, we provide end-to-end solutions that drive your business forward."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {serviceCards.map((service, i) => (
              <FeatureCard key={service.title} icon={service.icon} title={service.title} description={service.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {processSections.map((section, si) => (
        <section
          key={section.title}
          className={`py-10 sm:py-12 ${si % 2 === 1 ? "bg-white" : "bg-[#F6F8FA]"}`}
        >
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className={section.imageLeft ? "lg:order-2" : ""}
              >
                <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-5`}>
                  {section.title}
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">{section.description}</p>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={section.imageLeft ? "lg:order-1" : ""}
              >
                <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={600}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader
            badge="Why Choose Us"
            title="Why Our"
            highlight="Process Works"
            description="Our proven methodology and experienced team ensure successful project delivery every time."
          />
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {whyChoose.map((item, i) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Start Your Project?"
        description="Let's discuss your requirements and create something amazing together with our AI-augmented development team."
        primaryLabel="Get Started Today"
        secondaryHref="/services"
        secondaryLabel="View Our Services"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default HowWeWorkPage;
