"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  Search,
  Code,
  Mail,
  CheckCircle,
  Briefcase,
  Clock,
  MapPin,
  DollarSign,
  BookOpen,
  Coffee,
  Monitor,
  Users as TeamIcon,
  type LucideIcon,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ApplicationForm from "@/components/ApplicationForm";
import {
  PageShell,
  PageHero,
  SectionHeader,
  fadeUp,
  NAVY,
  CYAN,
} from "@/components/page-design";

const careerStats = [
  { number: "20+", label: "Open Positions", icon: Briefcase, description: "Across All Departments" },
  { number: "100%", label: "Growth Focused", icon: Target, description: "Career Development" },
  { number: "7+", label: "Years Average", icon: Clock, description: "Team Experience" },
  { number: "15+", label: "Technologies", icon: Code, description: "Modern Stack Learning" },
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Ahmedabad, Gujarat",
    experience: "3-5 years",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    description:
      "We're looking for a passionate Full-Stack Developer to join our team and help build scalable web applications using modern technologies.",
    responsibilities: [
      "Develop and maintain web applications using React and Node.js",
      "Write clean, maintainable, and efficient code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers",
    ],
    requirements: [
      "3+ years of experience in full-stack development",
      "Strong knowledge of React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Understanding of database design and optimization",
      "Excellent problem-solving skills",
    ],
    benefits: ["Competitive Salary", "Learning Budget", "Flexible Hours"],
    posted: "2 days ago",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Ahmedabad, Gujarat",
    experience: "2-4 years",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
    description:
      "Help us build and maintain robust, scalable infrastructure and deployment pipelines for our applications.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure on AWS/Azure",
      "Implement monitoring and logging solutions",
      "Ensure security and compliance",
      "Automate deployment processes",
    ],
    requirements: [
      "2+ years of DevOps experience",
      "Strong knowledge of Docker and Kubernetes",
      "Experience with cloud platforms",
      "Understanding of CI/CD principles",
      "Knowledge of monitoring tools",
    ],
    benefits: ["Competitive Salary", "Cloud Certifications", "Flexible Hours"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Ahmedabad, Gujarat",
    experience: "2-4 years",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
    description:
      "Create beautiful, intuitive user experiences and help shape the visual identity of our products.",
    responsibilities: [
      "Design user interfaces and user experiences",
      "Create wireframes, prototypes, and mockups",
      "Conduct user research and usability testing",
      "Collaborate with development teams",
      "Maintain design systems and guidelines",
    ],
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio showcasing web/mobile designs",
      "Understanding of user-centered design principles",
      "Experience with design systems",
    ],
    benefits: ["Competitive Salary", "Design Tools Budget", "Creative Freedom"],
    posted: "1 week ago",
  },
  {
    id: 5,
    title: "QA Engineer",
    department: "Quality Assurance",
    type: "Full-time",
    location: "Ahmedabad, Gujarat",
    experience: "2-3 years",
    skills: ["Selenium", "Jest", "Cypress", "API Testing", "Performance Testing"],
    description:
      "Ensure the highest quality standards for our applications through comprehensive testing and automation.",
    responsibilities: [
      "Design and execute test plans",
      "Develop automated test scripts",
      "Perform manual and automated testing",
      "Report and track bugs",
      "Collaborate with development teams",
    ],
    requirements: [
      "2+ years of QA experience",
      "Knowledge of testing frameworks and tools",
      "Experience with API testing",
      "Understanding of agile methodologies",
      "Strong attention to detail",
    ],
    benefits: ["Competitive Salary", "Testing Tools", "Career Growth"],
    posted: "5 days ago",
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Sales & Marketing",
    type: "Full-time",
    location: "Ahmedabad, Gujarat",
    experience: "3-5 years",
    skills: ["Sales", "Client Relations", "Market Research", "Proposal Writing", "Negotiation"],
    description:
      "Drive business growth by identifying new opportunities, building client relationships, and expanding our market presence.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Prepare proposals and presentations",
      "Negotiate contracts and agreements",
      "Track sales metrics and performance",
    ],
    requirements: [
      "3+ years of B2B sales experience",
      "Strong communication and negotiation skills",
      "Experience in technology sales",
      "Understanding of market trends",
      "Proven track record of meeting targets",
    ],
    benefits: ["Competitive Salary", "Commission Structure", "Performance Bonuses"],
    posted: "1 week ago",
  },
];

const companyBenefits = [
  { icon: DollarSign, title: "Competitive Salary", description: "Above-market compensation with regular reviews and performance-based increases" },
  { icon: BookOpen, title: "Learning Budget", description: "Annual budget for courses, certifications, and conferences" },
  { icon: Coffee, title: "Flexible Hours", description: "Work-life balance with flexible scheduling options" },
  { icon: TeamIcon, title: "Team Events", description: "Regular team building activities and social events" },
  { icon: Monitor, title: "Modern Equipment", description: "Latest technology and tools for optimal productivity" },
  { icon: Heart, title: "Work-Life Balance", description: "Supportive environment that values personal well-being" },
];

const companyValues = [
  { icon: Heart, title: "Work-Life Balance", description: "We believe in maintaining a healthy balance between work and personal life" },
  { icon: Lightbulb, title: "Innovation", description: "We encourage creative thinking and experimentation with new ideas" },
  { icon: Users, title: "Collaboration", description: "We foster a culture of teamwork and mutual support" },
  { icon: Target, title: "Growth", description: "We provide opportunities for continuous learning and career advancement" },
];

const applicationProcess = [
  { step: "01", title: "Apply", description: "Submit your resume and cover letter through our online application system", icon: Mail },
  { step: "02", title: "Initial Screening", description: "Our HR team reviews your application and conducts initial screening", icon: Search },
  { step: "03", title: "Technical Assessment", description: "Complete technical tests and coding challenges relevant to the role", icon: Code },
  { step: "04", title: "Interview Rounds", description: "Multiple interview rounds with team members and leadership", icon: Users },
  { step: "05", title: "Final Decision", description: "Receive feedback and final decision within 1-2 weeks", icon: CheckCircle },
];

const filters = ["All Positions", "Engineering", "AI & Innovation", "Design", "Quality Assurance", "Sales & Marketing"];

const BenefitCard = ({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all h-full"
  >
    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${CYAN}18` }}>
      <Icon className="w-6 h-6" style={{ color: NAVY }} />
    </div>
    <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </motion.div>
);

const CareersPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Positions");

  const filteredPositions = openPositions.filter((position) => {
    if (activeFilter === "All Positions") return true;
    return position.department === activeFilter;
  });

  return (
    <PageShell>
      <Navigation />
      <main>
        <PageHero
          ariaLabel="Careers"
          badge="Join Our Team"
          title="Build the Future"
          highlight="With Us"
          description="Join our dynamic team of innovators and help us create cutting-edge technology solutions that transform businesses worldwide."
          stats={careerStats}
        />

        <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <SectionHeader
              badge="Openings"
              title="Open"
              highlight="Positions"
              description="Explore our current job openings and find the perfect role that matches your skills and career goals."
            />
            <p className="text-center text-sm text-slate-400 -mt-8 mb-8">
              Showing {filteredPositions.length} of {openPositions.length} positions
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    activeFilter === filter
                      ? "text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#13345A]/30"
                  }`}
                  style={activeFilter === filter ? { backgroundColor: NAVY } : undefined}
                >
                  {filter}
                </button>
              ))}
            </div>

            {filteredPositions.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredPositions.map((position, i) => (
                  <motion.div
                    key={position.id}
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#13345A]/[0.04] transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="p-6 sm:p-7 text-white" style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}>
                      <h3 className="text-lg font-semibold mb-1">{position.title}</h3>
                      <p className="text-sm text-white/70 mb-4">{position.department}</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-2">
                          <Briefcase className="w-3.5 h-3.5" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-2">
                          <MapPin className="w-3.5 h-3.5" />
                          {position.location.split(",")[0]}
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-2 col-span-2">
                          <Clock className="w-3.5 h-3.5" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{position.description}</p>
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {position.skills.map((skill) => (
                            <span key={skill} className="px-2 py-0.5 rounded-full text-xs bg-[#EAF3F8] text-[#13345A]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-5">
                        <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Benefits</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {position.benefits.map((benefit) => (
                            <span key={benefit} className="px-2 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a href="mailto:info@ctasinfoservices.com" className="mt-auto">
                        <span
                          className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold rounded-full text-[#08141F] transition-all"
                          style={{ backgroundColor: CYAN }}
                        >
                          <Mail className="w-4 h-4" />
                          Apply Now
                        </span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No positions found</h3>
                <p className="text-sm text-slate-500 mb-4">
                  We don&apos;t have any open positions in &quot;{activeFilter}&quot; at the moment.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveFilter("All Positions")}
                  className="px-5 py-2 text-sm font-semibold rounded-full text-white cursor-pointer"
                  style={{ backgroundColor: NAVY }}
                >
                  View All Positions
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <SectionHeader badge="Benefits" title="Benefits &" highlight="Perks" description="We offer competitive benefits and a supportive environment that promotes growth and professional development." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {companyBenefits.map((benefit, i) => (
                <BenefitCard key={benefit.title} {...benefit} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <SectionHeader badge="Values" title="Company" highlight="Culture" description="We believe in creating an inclusive, supportive, and innovative work environment where everyone can thrive." />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {companyValues.map((value, i) => (
                <BenefitCard key={value.title} icon={value.icon} title={value.title} description={value.description} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <SectionHeader badge="How to Apply" title="Application" highlight="Process" description="Our streamlined application process ensures a smooth experience from application to onboarding." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
              {applicationProcess.map((process, i) => (
                <motion.div
                  key={process.step}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="text-center bg-[#F6F8FA] border border-slate-200/80 rounded-2xl p-6 relative"
                >
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: NAVY }}
                  >
                    {process.step}
                  </div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 mt-2" style={{ backgroundColor: `${CYAN}18` }}>
                    <process.icon className="w-5 h-5" style={{ color: NAVY }} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-[#F6F8FA]">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <SectionHeader badge="Apply Now" title="Submit Your" highlight="Application" description="Ready to join our team? Fill out the form below and we'll get back to you within 48 hours." />
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <ApplicationForm positions={openPositions} />
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </PageShell>
  );
};

export default CareersPage;
