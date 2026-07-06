"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Code,
  Globe,
  UserCheck,
  Clock,
  Brain,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageHero,
  SectionHeader,
  SectionBadge,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
} from "@/components/page-design";

const teamStats = [
  { number: "20+", label: "Team Members", icon: Users, description: "Certified Professionals" },
  { number: "100+", label: "Projects Delivered", icon: Target, description: "Successfully Completed" },
  { number: "7+", label: "Years Experience", icon: Award, description: "Industry Expertise" },
  { number: "15+", label: "Technologies", icon: Code, description: "Modern Stack Mastery" },
];

const leadershipTeam = [
  {
    name: "Ctas Leadership",
    role: "Executive Team",
    bio: "Our experienced leadership team brings together decades of expertise in technology, business strategy, and innovation to drive Ctas Info Services LLP mission of delivering exceptional digital solutions.",
    expertise: ["Technology Strategy", "Business Development", "Innovation Management"],
  },
  {
    name: "Technical Leadership",
    role: "CTO & Technical Directors",
    bio: "Our technical leadership ensures cutting-edge technology implementation, architectural excellence, and innovative solutions that drive business growth and digital transformation.",
    expertise: ["System Architecture", "Technology Stack", "Innovation"],
  },
];

const developmentTeam = [
  {
    name: "Frontend Developers",
    role: "UI/UX & Frontend Experts",
    bio: "Our frontend team specializes in creating intuitive, responsive, and modern user interfaces using React, Angular, Vue.js, and the latest web technologies.",
    expertise: ["React", "Angular", "Vue.js", "TypeScript"],
    achievements: "30+ Web Applications • Responsive Design • Performance Optimization",
  },
  {
    name: "Backend Developers",
    role: "Server-Side & API Experts",
    bio: "Our backend developers build robust, scalable, and secure server-side applications using Node.js, Python, C#, and modern database technologies.",
    expertise: ["Node.js", "Python", "C#", "Database Design"],
    achievements: "40+ Server-Side Apps Developed",
  },
  {
    name: "Mobile Developers",
    role: "Native & Cross-Platform Experts",
    bio: "Our mobile development team creates high-performance native and cross-platform applications for iOS, Android, and hybrid platforms.",
    expertise: ["React Native", "Flutter", "iOS", "Android"],
    achievements: "25+ Mobile Apps • Cross-Platform • App Store Success",
  },
];

const specializedTeam = [
  {
    name: "AI & ML Engineers",
    role: "Artificial Intelligence & Machine Learning Experts",
    bio: "Our AI team specializes in machine learning, natural language processing, and intelligent automation solutions that drive business efficiency.",
    expertise: ["Artificial Intelligence", "Machine Learning", "NLP", "RAG Systems", "OpenAI Solutions"],
    achievements: "15+ AI Solutions • Automation • Predictive Analytics",
  },
  {
    name: "DevOps Engineers",
    role: "Infrastructure, Deployment & Automation",
    bio: "Our DevOps team specializes in cloud infrastructure, continuous integration, and automated deployment pipelines for smooth, secure operations at scale.",
    expertise: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    achievements: "50+ Deployments • CI/CD Pipelines • 24/7 Monitoring",
  },
  {
    name: "QA & Test Engineers",
    role: "Quality Assurance and Testing",
    bio: "Our QA team ensures top-quality software through thorough manual and automated testing, performance analysis, and security validation.",
    expertise: ["Automated Testing", "Performance Testing", "Security Testing", "Test Automation"],
    achievements: "100+ Tested Projects • Zero Critical Bugs • Performance Optimization",
  },
];

const companyCulture = [
  { icon: Heart, title: "Collaborative Environment", description: "We foster a culture of teamwork, open communication, and mutual support where every team member's contribution is valued." },
  { icon: Lightbulb, title: "Innovation Focus", description: "We encourage creative thinking, continuous learning, and experimentation with new technologies and methodologies." },
  { icon: Target, title: "Excellence Driven", description: "We maintain high standards of quality, performance, and professionalism in everything we do." },
  { icon: Globe, title: "Global Perspective", description: "We embrace diversity, global best practices, and international standards in our work and team composition." },
];

const teamBenefits = [
  { icon: UserCheck, title: "Professional Growth", description: "Continuous learning opportunities, certifications, and career advancement paths" },
  { icon: Clock, title: "Flexible Work", description: "Work-life balance with flexible hours and remote work options" },
  { icon: Award, title: "Recognition", description: "Performance-based rewards, recognition programs, and achievement celebrations" },
  { icon: Users, title: "Team Events", description: "Regular team building activities, workshops, and social events" },
];

const SkillBadge = ({ children }: { children: string }) => (
  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-[#EAF3F8] text-[#13345A] border border-[#13345A]/10">
    {children}
  </span>
);

const TeamCard = ({
  name,
  role,
  bio,
  expertise,
  achievements,
  icon: Icon,
  index,
}: {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  achievements?: string;
  icon: LucideIcon;
  index: number;
}) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] transition-all duration-300 h-full"
  >
    <div className="flex items-start gap-4 mb-5">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${CYAN}18` }}
      >
        <Icon className="w-6 h-6" style={{ color: NAVY }} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm font-medium mt-0.5" style={{ color: CYAN }}>
          {role}
        </p>
      </div>
    </div>
    <p className="text-sm text-slate-500 leading-relaxed mb-5">{bio}</p>
    <div className="flex flex-wrap gap-2 mb-3">
      {expertise.map((skill) => (
        <SkillBadge key={skill}>{skill}</SkillBadge>
      ))}
    </div>
    {achievements && <p className="text-xs text-slate-400">{achievements}</p>}
  </motion.div>
);

const TeamPage = () => (
  <PageShell>
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Our Team"
        badge="Meet Our Team"
        title="Our"
        highlight="Expert Team"
        description="Meet the passionate professionals who drive innovation and deliver exceptional results at Ctas Info Services LLP — combining deep technology expertise with AI-augmented workflows."
        stats={teamStats}
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Leadership" title="Our" highlight="Leadership Team" description="Experienced leaders who drive innovation, strategy, and excellence across all aspects of our organization." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {leadershipTeam.map((member, i) => (
              <TeamCard key={member.name} {...member} icon={Users} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Development" title="Technical" highlight="Experts" description="Our certified developers specialize in modern technologies and deliver cutting-edge solutions." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {developmentTeam.map((member, i) => (
              <TeamCard key={member.name} {...member} icon={Code} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Specialized" title="Domain" highlight="Specialists" description="Our specialized teams bring deep expertise in AI, DevOps, QA, and other critical areas." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {specializedTeam.map((member, i) => (
              <TeamCard key={member.name} {...member} icon={Brain} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Culture" title="Company" highlight="Culture" description="We believe in fostering a positive, inclusive, and growth-oriented work environment." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {companyCulture.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center bg-[#F6F8FA] border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${CYAN}18` }}>
                  <item.icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionHeader badge="Benefits" title="Working" highlight="With Us" description="We offer competitive benefits and a supportive environment for professional growth." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {teamBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${NAVY}10` }}>
                  <benefit.icon className="w-6 h-6" style={{ color: NAVY }} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="relative rounded-[1.75rem] px-8 sm:px-12 py-12 sm:py-14 overflow-hidden text-center"
            style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}
          >
            <div className="relative max-w-2xl mx-auto">
              <SectionBadge>Join Us</SectionBadge>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-white mt-4 mb-4`}>
                Want to Join Our Team?
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-8">
                Are you passionate about technology and innovation? Join our dynamic team and help us build the future of digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:info@ctasinfoservice.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[#08141F] text-sm font-semibold rounded-full"
                  style={{ backgroundColor: CYAN }}
                >
                  <Mail className="w-4 h-4" />
                  Send Your CV
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white border border-white/20 text-sm font-semibold rounded-full hover:bg-white/[0.06] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Schedule a Call
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <FooterSection />
  </PageShell>
);

export default TeamPage;
