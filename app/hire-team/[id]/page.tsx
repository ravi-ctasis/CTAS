"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Users,
  Zap,
  Sparkles,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { HireTeamHeroTitle, HireTeamHeroParagraphs } from "@/components/hire/HireTeamHeroCopy";
import {
  PageShell,
  SectionHeader,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
  CYAN_LIGHT,
  AnimatedStat,
  DotCarousel,
} from "@/components/page-design";
import {
  allPagesData,
  DeveloperType,
  FAQ,
  Highlight,
  HiringStep,
  Logo,
  Reason,
  Stat,
  IntroContent,
  SectionHeader as FaqSectionHeader,
  SectionMedia,
} from "@/data/hire-page-data";

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

function getSectionData<T>(pageId: string, sectionId: string): T[] {
  const page = allPagesData.find((p) => p.pageId === pageId);
  if (!page) return [];
  const section = page.sections.find((s) => s.sectionId === sectionId);
  if (!section) return [];
  return section.data as T[];
}

const TrialForm = () => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl">
      <h2 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mb-6`}>
        RISK-FREE 10 DAYS TRIAL!
      </h2>
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        {[
          { id: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name" },
          { id: "email", label: "Email", type: "email", placeholder: "Enter your email" },
          { id: "phone", label: "Phone", type: "tel", placeholder: "Enter your phone number" },
        ].map((field) => (
          <div key={field.id} className="flex flex-col">
            <label htmlFor={field.id} className="mb-1.5 text-sm font-medium text-slate-700">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
            />
          </div>
        ))}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1.5 text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            ref={textareaRef}
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
            style={{ minHeight: "100px" }}
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 text-sm font-semibold rounded-full px-6 py-3.5 text-[#08141F] transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
          style={{ backgroundColor: CYAN }}
        >
          Hire an Expert Now!
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default function HireTeamPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const params = useParams();
  const pageId = params.id as string;

  const introContent = getSectionData<IntroContent>(pageId, "intro");
  const intro = introContent[0];
  const faqHeader = getSectionData<FaqSectionHeader>(pageId, "faqHeader")[0];
  const faqMedia = getSectionData<SectionMedia>(pageId, "faqMedia")[0];
  const logos = getSectionData<Logo>(pageId, "hero");
  const developerTypes = getSectionData<DeveloperType>(pageId, "developerType");
  const reasons = getSectionData<Reason>(pageId, "reasons");
  const faqs = getSectionData<FAQ>(pageId, "faqs");
  const stats = getSectionData<Stat>(pageId, "stats");
  const highlights = getSectionData<Highlight>(pageId, "highlights");
  const hiringSteps = getSectionData<HiringStep>(pageId, "hiringSteps");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: intro?.title || `Hire ${pageId.replace(/-/g, " ")}`,
        description: intro?.paragraphs?.[0] || "Hire expert remote developers from Ctas.",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
          url: "https://www.ctasis.com",
        },
        areaServed: "Worldwide",
        serviceType: "Staff Augmentation",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Hire Team", item: "https://www.ctasis.com/hire-team" },
          {
            "@type": "ListItem",
            position: 3,
            name: intro?.title || pageId,
            item: `https://www.ctasis.com/hire-team/${pageId}`,
          },
        ],
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — split-screen + trial form */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
          aria-label="Hire developers"
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
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-[10px] sm:text-xs font-medium mb-6 max-w-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  NO HIRING FEE, HIRE OFFSHORE DEVELOPERS &amp; SAVE UP TO 60% COST &amp; TIME. START WORKING FROM NEXT DAY
                </div>
                <HireTeamHeroTitle pageId={pageId} />
                <HireTeamHeroParagraphs pageId={pageId} />
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90 mb-8"
                  style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                >
                  Hire Developer
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-[#93A3AF]">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: CYAN_LIGHT }} />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <TrialForm />
              </motion.div>
            </div>
          </div>

          {/* Logo marquee */}
          {logos.length > 0 && (
            <div className="relative mt-12 border-t border-white/10 bg-white/[0.04] py-6 overflow-hidden">
              <style>{`
                @keyframes hireLogoMarquee {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
                .hire-logo-marquee {
                  animation: hireLogoMarquee 40s linear infinite;
                }
              `}</style>
              <div className="flex gap-10 sm:gap-14 w-max hire-logo-marquee">
                {[...logos, ...logos].map((logo, i) => (
                  <div key={`${logo.alt}-${i}`} className="relative w-16 h-10 sm:w-20 sm:h-12 flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="80px" loading={i < logos.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Intro — asymmetric split */}
        <SectionWrap alt>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest mb-6">
                PART-TIME, FULL-TIME, AND HOURLY
              </div>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mb-6`}>
                {intro?.title || "Build with Dedicated Developers"}
              </h2>
              {(intro?.paragraphs || []).map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-slate-500 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all hover:opacity-90 mt-4"
                style={{ backgroundColor: CYAN }}
              >
                {intro?.ctaText || "Get Started"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden border border-slate-200/80 shadow-lg">
              <Image
                src={intro?.imageSrc || "/hire-web-developers-one.webp"}
                alt={intro?.imageAlt || "Hire Developers"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </SectionWrap>

        {/* Developer types — horizontal snap-scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Trusted By Industry Leaders"
            title="Worlds Top Companies Trusting Ctas for Hiring Dedicated Web Developers in India"
            description="From startups to global enterprises, businesses trust our expert developers to deliver scalable and secure digital solutions across industries."
          />
          <DotCarousel bleed ariaLabel="Content carousel">
              {developerTypes.map((devType, i) => (
                <motion.article
                  key={devType.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start"
                >
                  <div className="h-full rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-all">
                    <IconBox icon={devType.icon} />
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-5 mb-2`}>{devType.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{devType.description}</p>
                  </div>
                </motion.article>
              ))}
          </DotCarousel>
        </SectionWrap>

        {/* Reasons — staggered 2-column list */}
        <SectionWrap alt>
          <SectionHeader
            badge="Why Hire"
            title="Why Hiring Web Developers Is the Right Choice"
            highlight="for Your Business"
            description="Hiring professional web developers ensures access to technical expertise, efficiency, and scalable solutions to help your business grow online. From custom web applications and APIs to eCommerce platforms and enterprise-grade solutions, they provide reliable, future-ready solutions tailored to your business needs."
          />
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {reasons.map((reason, i) => (
              <motion.article
                key={reason.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200/80 bg-[#F6F8FA] p-6 hover:border-[#13345A]/15 transition-colors"
              >
                <span className={`${fraunces.className} text-2xl font-medium flex-shrink-0`} style={{ color: `${CYAN}88` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>{reason.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>

        {/* FAQ — split image + accordion */}
        <SectionWrap>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.div {...fadeUp} className="relative aspect-[6/5] rounded-[1.5rem] overflow-hidden border border-slate-200/80 shadow-lg">
              <Image
                src={faqMedia?.imageSrc || "/hire-web-developers-two.webp"}
                alt={faqMedia?.imageAlt || "FAQ Illustration"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest mb-4">
                  FAQ
                </div>
                <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mb-4`}>
                  {faqHeader?.title || "Frequently Asked Questions"}
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {faqHeader?.description ||
                    "Get answers to the most common questions about hiring dedicated developers and how they can help build scalable, secure, and high-performing applications."}
                </p>
              </div>
              <div className="space-y-3 -mt-4">
                {faqs.map((faq, index) => (
                  <div key={faq.question} className="rounded-xl border border-slate-200/80 bg-white overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#249BCA]"
                      aria-expanded={openIndex === index}
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionWrap>

        {/* Build Smarter — asymmetric CTA + stats */}
        <SectionWrap alt>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
            <motion.div
              {...fadeUp}
              className="rounded-[1.75rem] p-8 sm:p-10 lg:p-12 text-white"
              style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}
            >
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium mb-4`}>
                Build Smarter with Top Talent
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                Ready to elevate your software projects? Hire our expert developers and experience unparalleled innovation and efficiency.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all hover:opacity-90"
                style={{ backgroundColor: CYAN }}
              >
                GET A FREE CONSULTATION
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  {...fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[1.25rem] border border-slate-200/80 bg-white p-6 text-center hover:shadow-md transition-all"
                >
                  <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900`}>
                    {stat.value.match(/^[\d.+]+/) ? <AnimatedStat value={stat.value} /> : stat.value}
                  </div>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Why Ctas — split certified block + highlights bento */}
        <SectionWrap>
          <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-8 lg:gap-12 items-start">
            <motion.div {...fadeUp}>
              <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-2`}>
                Hire Web Developer
              </h2>
              <p className="text-slate-500 text-base mb-6">Why Ctas Is Your Workforce?</p>
              <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-8 shadow-sm">
                <Users className="w-10 h-10 mb-4" style={{ color: CYAN }} />
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-3`}>Our Certified Team</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Selecting the right development partner plays a key role in building stable and high-performing web applications. At Ctas, we combine technical skill with transparent processes and proven experience. With more than a decade of successful web development projects, we deliver secure, scalable, and cost-effective solutions on time and within budget.
                </p>
              </div>
              <motion.p {...fadeUp} className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600">
                <Sparkles className="w-4 h-4" style={{ color: CYAN }} />
                Explore our{" "}
                <Link href="/services/custom-software" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  custom software
                </Link>{" "}
                and{" "}
                <Link href="/how-we-work" className="font-semibold hover:underline" style={{ color: NAVY }}>
                  how we work
                </Link>
              </motion.p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {highlights.map((highlight, i) => (
                <motion.article
                  key={highlight.title}
                  {...fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-[1.25rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-all"
                >
                  <IconBox icon={highlight.icon} />
                  <h3 className={`${fraunces.className} text-base font-medium text-slate-900 mt-4 mb-2`}>{highlight.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{highlight.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Hiring process — numbered horizontal stepper */}
        <SectionWrap alt>
          <SectionHeader
            badge="Our Process"
            title="Our Web Developer"
            highlight="Hiring Process"
            description="Follow our streamlined hiring process to onboard the best Web developers for your project."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {hiringSteps.map((step, i) => (
              <motion.article
                key={step.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-[1.5rem] border border-slate-200/80 bg-white p-6 text-center hover:shadow-lg transition-all"
              >
                <span className={`${fraunces.className} text-3xl font-medium absolute top-4 right-5`} style={{ color: `${CYAN}44` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: NAVY }}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`${fraunces.className} text-base font-medium text-slate-900 mb-2`}>{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                {i < hiringSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-0.5 -translate-y-1/2" style={{ backgroundColor: CYAN }} aria-hidden="true" />
                )}
              </motion.article>
            ))}
          </div>
        </SectionWrap>
      </main>
      <FooterSection />
    </PageShell>
  );
}
