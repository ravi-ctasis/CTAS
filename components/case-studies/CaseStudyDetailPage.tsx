"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  DollarSign,
  Layers,
  Quote,
  Rocket,
  Settings,
  Sparkles,
  Target,
  Users,
  Zap,
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
} from "@/components/page-design";
import type { CaseStudyDetailData } from "@/types/case-study-detail";

const SectionWrap = ({
  children,
  alt = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-white" : "bg-[#F6F8FA]"}`}>
    <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">{children}</div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.08] border border-white/15 text-[#C7D2D9]">
    {children}
  </span>
);

const parseOutcome = (outcome: string) => {
  const parts = outcome.split(/\s*[–—-]\s*/);
  if (parts.length >= 2) {
    return { title: parts[0].trim(), body: parts.slice(1).join(" – ").trim() };
  }
  return { title: outcome, body: "" };
};

const statLabels: Record<string, string> = {
  platforms: "Platforms",
  vendors: "Vendors",
  products: "Products",
  users: "Users",
  rating: "Rating",
  visitors: "Visitors",
  orders: "Orders",
  marketplaces: "Marketplaces",
  efficiency: "Efficiency",
  accuracy: "Accuracy",
  reduction: "Reduction",
  courses: "Courses",
  students: "Students",
  instructors: "Instructors",
  completion: "Completion",
  services: "Services",
  transactions: "Transactions",
};

type Props = {
  data: CaseStudyDetailData;
  slug: string;
};

export default function CaseStudyDetailPage({ data, slug }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: data.title,
        description: data.description,
        image: data.heroImage.src.startsWith("http")
          ? data.heroImage.src
          : `https://www.ctasis.com${data.heroImage.src}`,
        author: { "@type": "Organization", name: "Ctas Info Services LLP" },
        publisher: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
          url: "https://www.ctasis.com",
        },
        about: data.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: "https://www.ctasis.com/case-studies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title,
            item: `https://www.ctasis.com/case-studies/${slug}`,
          },
        ],
      },
    ],
  };

  const statEntries = Object.entries(data.stats);
  const useFeatureScroll = data.keyFeatures.length > 12;

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — dark with meta strip */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label={data.title}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#93A3AF] hover:text-white transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-center max-w-4xl mx-auto mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                {data.category}
              </div>
              <h1
                className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-4`}
              >
                {data.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#C7D2D9] font-medium mb-4">{data.subtitle}</p>
              <p className="text-base text-[#93A3AF] leading-relaxed">{data.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              <Pill>{data.industry}</Pill>
              <Pill>
                <Clock className="w-3 h-3 inline mr-1" />
                {data.duration}
              </Pill>
              <Pill>
                <Users className="w-3 h-3 inline mr-1" />
                Team: {data.teamSize}
              </Pill>
              <Pill>
                <DollarSign className="w-3 h-3 inline mr-1" />
                {data.budget}
              </Pill>
              <Pill>{data.status}</Pill>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7A8B97] mb-3">Technology</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {data.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.08] border border-white/10 text-sm text-[#E7F1F7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7A8B97] mb-3">Platform</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {data.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 rounded-lg bg-white/[0.08] border border-white/10 text-sm text-[#E7F1F7]"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats — animated counter band */}
        <SectionWrap alt>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {statEntries.map(([key, value], i) => (
              <motion.div
                key={key}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200/80 bg-[#F6F8FA] p-5 text-center hover:shadow-md transition-shadow"
              >
                <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium`} style={{ color: NAVY }}>
                  <AnimatedStat value={value} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 capitalize">
                  {statLabels[key] || key}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        {/* Overview — split intro */}
        <SectionWrap>
          <SectionHeader
            badge="Overview"
            title="Project"
            highlight="Overview"
            description={data.longDescription}
            align="left"
          />
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div {...fadeUp} className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8">
              <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-4`}>Client Context</h3>
              <p className="text-slate-600 leading-relaxed">{data.client.description}</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.08 }} className="space-y-4">
              {data.projectHighlights.slice(0, 3).map((highlight, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl bg-white border border-slate-100"
                >
                  <Rocket className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                  <p className="text-sm text-slate-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </SectionWrap>

        {/* Challenges vs Solutions — comparison split */}
        <SectionWrap alt>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div {...fadeUp}>
              <SectionHeader
                badge="Challenges"
                title="Key"
                highlight="Challenges"
                description="Obstacles we identified and addressed during the project."
                align="left"
              />
              <ul className="space-y-3" aria-label="Project challenges">
                {data.challenges.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 px-4 py-3 rounded-xl bg-[#F6F8FA] border border-slate-100 text-sm text-slate-700"
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                      style={{ backgroundColor: NAVY }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <SectionHeader
                badge="Solutions"
                title="Our"
                highlight="Solutions"
                description="Technical and strategic approaches that resolved each challenge."
                align="left"
              />
              <ul className="space-y-3" aria-label="Project solutions">
                {data.solutions.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200/80 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </SectionWrap>

        {/* Project Highlights — vertical timeline */}
        <SectionWrap>
          <SectionHeader
            badge="Highlights"
            title="Project"
            highlight="Highlights"
            description="Key features and achievements delivered."
          />
          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-5 sm:left-6 top-0 bottom-0 w-px"
              style={{ backgroundColor: `${CYAN}44` }}
              aria-hidden="true"
            />
            <div className="space-y-6">
              {data.projectHighlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="relative flex gap-5 pl-12 sm:pl-14"
                >
                  <div
                    className="absolute left-2 sm:left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: CYAN }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-1">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Goals — offset 2×2 grid */}
        <SectionWrap alt>
          <SectionHeader
            badge="Goals"
            title="Strategic"
            highlight="Objectives"
            description="Strategic objectives that guided the project."
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {data.goals.map((goal, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-[#F6F8FA] p-6 sm:p-7 ${
                  i % 2 === 1 ? "sm:mt-6" : ""
                }`}
              >
                <Target className="w-5 h-5 mb-3" style={{ color: NAVY }} />
                <p className="text-slate-700 leading-relaxed">{goal}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrap>

        {/* Strategy — horizontal stepper */}
        <SectionWrap>
          <SectionHeader
            badge="Strategy"
            title="Implementation"
            highlight="Approach"
            description="Implementation approach and technical decisions."
          />
          <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
            <div className="flex gap-4 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
              {data.strategy.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
                >
                  <div className="h-full rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: NAVY }}
                      >
                        {i + 1}
                      </div>
                      <Settings className="w-5 h-5" style={{ color: CYAN }} />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrap>

        {/* Outcomes — parsed highlight cards */}
        <SectionWrap alt>
          <SectionHeader
            badge="Outcomes"
            title="Achieved"
            highlight="Results"
            description="Measurable results and business impact."
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {data.outcomes.map((outcome, i) => {
              const parsed = parseOutcome(outcome);
              return (
                <motion.article
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7 hover:shadow-md transition-shadow"
                >
                  <Award className="w-5 h-5 mb-3" style={{ color: CYAN }} />
                  <h3 className="font-semibold text-slate-900 mb-2">{parsed.title}</h3>
                  {parsed.body && <p className="text-sm text-slate-600 leading-relaxed">{parsed.body}</p>}
                </motion.article>
              );
            })}
          </div>
        </SectionWrap>

        {/* Our Client — split + requirements timeline */}
        <SectionWrap>
          <SectionHeader badge="Client" title="Our" highlight="Client" description="Who we built this for." />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <motion.div {...fadeUp} className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${CYAN}18` }}
                >
                  <Briefcase className="w-7 h-7" style={{ color: NAVY }} />
                </div>
                <div>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{data.client.name}</h3>
                  <p className="text-sm text-slate-500">
                    {data.client.industry} · {data.client.size} · {data.client.location}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{data.client.description}</p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.08 }} className="relative">
              <h3 className="font-semibold text-slate-900 mb-6">Client Requirements</h3>
              <div
                className="absolute left-5 top-14 bottom-0 w-px"
                style={{ backgroundColor: `${CYAN}44` }}
                aria-hidden="true"
              />
              <ul className="space-y-5">
                {data.client.requirements.map((req, i) => (
                  <li key={i} className="relative flex gap-4 pl-12">
                    <div
                      className="absolute left-2 w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center text-xs font-bold z-10"
                      style={{ borderColor: CYAN, color: NAVY }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed pt-1">{req}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </SectionWrap>

        {/* Testimonial — centered quote */}
        <SectionWrap alt>
          <motion.blockquote
            {...fadeUp}
            className="relative max-w-3xl mx-auto text-center px-6 sm:px-10"
          >
            <Quote className="w-10 h-10 mx-auto mb-6 opacity-30" style={{ color: CYAN }} />
            <p className={`${fraunces.className} text-xl sm:text-2xl text-slate-800 leading-relaxed italic mb-8`}>
              &ldquo;{data.client.testimonial.quote}&rdquo;
            </p>
            <footer className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image
                  src={data.client.testimonial.avatar}
                  alt={data.client.testimonial.author}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="text-center sm:text-left">
                <cite className="not-italic font-semibold text-slate-900">{data.client.testimonial.author}</cite>
                <p className="text-sm text-slate-500">{data.client.testimonial.position}</p>
              </div>
            </footer>
          </motion.blockquote>
        </SectionWrap>

        {/* Proposed Solution — zigzag split with image */}
        <SectionWrap>
          <SectionHeader
            badge="Solution"
            title="Proposed"
            highlight="Solution"
            description="Our approach and rationale."
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div {...fadeUp} className="space-y-6 order-2 lg:order-1">
              <div>
                <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-4`}>Our Approach</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{data.proposedSolution.description}</p>
                <h4 className="font-semibold text-slate-900 mb-4">Why We Choose This Solution?</h4>
                <ul className="space-y-3">
                  {data.proposedSolution.whyChoose.map((reason, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden border border-slate-200/80 shadow-xl order-1 lg:order-2"
            >
              <Image
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </motion.div>
          </div>
        </SectionWrap>

        {/* Benefits — accent strip */}
        <SectionWrap alt>
          <motion.div
            {...fadeUp}
            className="rounded-[1.75rem] px-8 sm:px-12 py-10 sm:py-12 text-center"
            style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}
          >
            <Zap className="w-8 h-8 mx-auto mb-4" style={{ color: CYAN_LIGHT }} />
            <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-white mb-4`}>
              Benefit of This Solution
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {data.benefits[0]}
            </p>
          </motion.div>
        </SectionWrap>

        {/* Key Features — bento or horizontal scroll */}
        <SectionWrap>
          <SectionHeader
            badge="Features"
            title="Key"
            highlight="Features"
            description="Core platform capabilities delivered."
          />
          {useFeatureScroll ? (
            <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">
              <div className="flex gap-4 overflow-x-auto pb-4 px-6 sm:px-10 lg:px-16 xl:px-20 snap-x snap-mandatory">
                {data.keyFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex-shrink-0 w-[260px] snap-start rounded-[1.25rem] border border-slate-200/80 bg-white p-5"
                  >
                    <Layers className="w-4 h-4 mb-3" style={{ color: CYAN }} />
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
              {data.keyFeatures.map((feature, i) => (
                <motion.article
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.04 }}
                  className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-5 sm:p-6 hover:shadow-md transition-shadow ${
                    i === 0 ? "sm:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 mb-3" style={{ color: CYAN }} />
                  <h3 className={`${fraunces.className} text-base sm:text-lg font-medium text-slate-900 mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          )}
          <motion.p {...fadeUp} className="mt-10 inline-flex items-center gap-2 text-sm text-slate-600">
            <Sparkles className="w-4 h-4" style={{ color: CYAN }} />
            Explore more on our{" "}
            <Link href="/portfolios" className="font-semibold hover:underline" style={{ color: NAVY }}>
              portfolios
            </Link>{" "}
            and{" "}
            <Link href="/solutions" className="font-semibold hover:underline" style={{ color: NAVY }}>
              solutions
            </Link>
            .
          </motion.p>
        </SectionWrap>

        <PageCTA
          title="You Have A Vision. We Have A Way!"
          description="Please send us information about your project. One of our project managers shall evaluate your project requirements and give you a formal proposal. Detailed information will help us evaluate your project accurately."
          primaryLabel="Get Started Free"
          primaryHref="/contact-us"
          secondaryLabel="view portfolio"
          secondaryHref="/portfolios"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
