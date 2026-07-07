"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Heart,
  Target,
  Award,
  Rocket,
  Users,
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

const milestones = [
  { year: "2019", icon: Calendar, title: "Founded", description: "Established in 2019 with a vision to build delightful software." },
  { year: "Launch", icon: Rocket, title: "First Launch", description: "Shipped our first enterprise product used by thousands of users." },
  { year: "100+", icon: Award, title: "Milestones", description: "100+ successful deliveries across web, mobile, and cloud." },
  { year: "20+", icon: Users, title: "Team", description: "A diverse team of specialists distributed across time zones." },
];

const values = [
  { icon: Heart, title: "People First", description: "We design for real people and measure success by how much value we create for them." },
  { icon: Target, title: "Outcome Over Output", description: "We prioritize clarity, iteration, and shipping meaningful improvements." },
  { icon: Award, title: "Pursuit of Craft", description: "We sweat the details and hold a high bar for quality across the stack." },
];

const timeline = [
  {
    year: "2019",
    icon: Calendar,
    title: "The Foundation",
    description:
      "Ctas was founded with a vision to revolutionize digital experiences. We started with a small team of passionate developers and designers, committed to delivering exceptional software solutions that drive real business value.",
    align: "left" as const,
  },
  {
    year: "2020",
    icon: Rocket,
    title: "Digital Transformation Pioneer",
    description:
      "During the global shift to digital, we became pioneers in helping businesses transform their operations. We delivered 50+ successful projects across web development, mobile applications, and cloud infrastructure.",
    align: "right" as const,
  },
  {
    year: "2021",
    icon: Users,
    title: "Global Expansion & Team Growth",
    description:
      "We expanded our reach internationally, serving clients across 15+ countries. Our team grew to 20+ skilled professionals, enabling 24/7 development cycles and round-the-clock support.",
    align: "left" as const,
  },
  {
    year: "2022",
    icon: Target,
    title: "Amazon Services Excellence",
    description:
      "Launched our specialized Amazon services division, becoming certified partners in FBA/FBM management, automated product listing systems, and intelligent review feedback platforms.",
    align: "right" as const,
  },
  {
    year: "2023",
    icon: Award,
    title: "AI & Innovation Leadership",
    description:
      "Integrated cutting-edge AI/ML solutions across our service portfolio. We developed proprietary automation tools, intelligent chatbots, and predictive analytics platforms powered by GPT, Claude, and Gemini.",
    align: "left" as const,
  },
  {
    year: "2024",
    icon: Heart,
    title: "Future-Ready Innovation",
    description:
      "Today, we're at the forefront of emerging technologies, serving 500+ clients worldwide. From blockchain solutions to IoT integrations, we continue to push boundaries and deliver transformative digital experiences.",
    align: "right" as const,
  },
];

const globalStats = [
  { number: "18+", label: "Countries" },
  { number: "100+", label: "Projects Delivered" },
  { number: "98%", label: "On-time Delivery" },
  { number: "4.9/5", label: "Client Rating" },
];

const ValueCard = ({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 h-full hover:shadow-lg transition-all"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${CYAN}18` }}>
        <Icon className="w-4 h-4" style={{ color: NAVY }} />
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </motion.div>
);

const OurStoryPage = () => (
  <PageShell>
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Our Story"
        badge="Our Journey"
        title="Our"
        highlight="Story"
        description="Discover our journey — from a small team with a big idea to a trusted partner delivering impactful digital products worldwide."
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest">
                Origins
              </span>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mt-4 mb-5`}>
                How It <span className="italic" style={{ color: CYAN }}>Started</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-4">
                We began with a simple mission: help teams move faster with technology that feels effortless. Over the years, we have grown into a multi-disciplinary crew of designers, engineers, and strategists who share the same obsession for craft and outcomes.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                Today, we partner with ambitious organizations to design, build, and scale products that users love — powered by AI-augmented development workflows using GPT, Claude, and Gemini alongside expert engineering.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <m.icon className="w-4 h-4" style={{ color: CYAN }} />
                    <h3 className="font-semibold text-slate-900 text-sm">{m.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Beliefs" title="What We" highlight="Believe" description="The principles that guide every project, partnership, and product we build." />
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Timeline" title="Our" highlight="Journey" description="Key milestones that shaped who we are today." />
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#13345A]/20 via-[#249BCA]/40 to-[#13345A]/20 hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`relative md:grid md:grid-cols-2 items-center gap-8 py-5 ${
                  item.align === "right" ? "" : ""
                }`}
              >
                {item.align === "left" ? (
                  <>
                    <div className="md:pr-10 md:text-right">
                      <span className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: CYAN }}>
                        <item.icon className="w-3.5 h-3.5" /> {item.year}
                      </span>
                      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
                        <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-10">
                      <span className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: CYAN }}>
                        <item.icon className="w-3.5 h-3.5" /> {item.year}
                      </span>
                      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
                        <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full ring-4 ring-[#F6F8FA]" style={{ backgroundColor: NAVY }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Impact" title="Global" highlight="Presence" description="Numbers that reflect our commitment to excellence and client success." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {globalStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-center bg-[#F6F8FA] border border-slate-200/80 rounded-2xl p-6 sm:p-8"
              >
                <div className={`${fraunces.className} text-3xl sm:text-4xl font-medium mb-1`} style={{ color: NAVY }}>
                  {stat.number}
                </div>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Write the Next Chapter With Us?"
        description="Partner with India's AI-powered technology firm and transform your business with smart, scalable solutions."
        primaryLabel="Start a Conversation"
        secondaryHref="/about-us"
        secondaryLabel="Learn More About Us"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default OurStoryPage;
