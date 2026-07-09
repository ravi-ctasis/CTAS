"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle2,
  Layers,
  Phone,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
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
import type {
  PortfolioContentBlock,
  PortfolioDetailData,
  PortfolioSection,
} from "@/types/portfolio-detail";

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

const getIcon = (name: string): LucideIcon => {
  const icon = (LucideIcons as unknown as Record<string, LucideIcon>)[name];
  return icon || LucideIcons.Zap;
};

const IconBox = ({ icon: name, size = "md" }: { icon: string; size?: "sm" | "md" | "lg" }) => {
  const Icon = getIcon(name);
  const dim = size === "lg" ? "w-14 h-14" : size === "sm" ? "w-9 h-9" : "w-11 h-11";
  const iconDim = size === "lg" ? "w-7 h-7" : size === "sm" ? "w-4 h-4" : "w-5 h-5";
  return (
    <div
      className={`${dim} rounded-xl flex items-center justify-center flex-shrink-0`}
      style={{ backgroundColor: `${CYAN}18` }}
    >
      <Icon className={iconDim} style={{ color: NAVY }} />
    </div>
  );
};

const statLabelMap: Record<string, string> = {
  views: "Views",
  likes: "Likes",
  clients: "Clients",
  revenue: "Revenue Generated",
  efficiency: "Efficiency Gain",
  accuracy: "Accuracy Rate",
  books: "Books in Inventory",
  orders: "Orders Processed",
  satisfaction: "Customer Satisfaction",
  deliveries: "On-Time Deliveries",
};

const ContentBlockCard = ({ block, index }: { block: PortfolioContentBlock; index: number }) => {
  const num = block.number ?? index + 1;
  return (
    <motion.article
      {...fadeUp}
      transition={{ delay: index * 0.05 }}
      className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow h-full"
    >
      <div className="flex items-start gap-4 mb-5">
        <IconBox icon={block.icon} size="lg" />
        <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
          {block.number !== undefined ? `${num}. ` : ""}
          {block.title}
        </h3>
      </div>
      <p className="text-slate-600 leading-relaxed mb-5">{block.intro}</p>

      {block.variant === "list" && (
        <>
          <ul className="space-y-2.5" aria-label={block.title}>
            {block.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: CYAN }} />
                {item}
              </li>
            ))}
          </ul>
          {block.closing && <p className="text-slate-600 mt-5 text-sm leading-relaxed">{block.closing}</p>}
        </>
      )}

      {block.variant === "grouped" && (
        <div className="space-y-5">
          {block.groups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-slate-900 mb-2">{group.title}</h4>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {block.closing && <p className="text-slate-600 mt-5 text-sm leading-relaxed">{block.closing}</p>}
        </div>
      )}

      {block.variant === "subsections" && (
        <div className="space-y-4">
          {block.subsections.map((sub) => (
            <div key={sub.title}>
              <h4 className="font-semibold text-slate-900 mb-1">{sub.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{sub.description}</p>
            </div>
          ))}
        </div>
      )}
    </motion.article>
  );
};

const renderSection = (
  section: PortfolioSection,
  data: PortfolioDetailData,
  index: number
): React.ReactNode => {
  const alt = index % 2 === 1;

  switch (section.type) {
    case "differentiators":
      return (
        <SectionWrap key={`diff-${index}`} alt={alt}>
          <SectionHeader
            badge="Value"
            title={section.title || "Key Differentiators & Client Value"}
            highlight=""
            description="What sets this solution apart for our clients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {section.items.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-md transition-shadow ${
                  i % 5 === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <IconBox icon={item.icon} />
                <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mt-4 mb-2`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>
      );

    case "advantages":
      return (
        <SectionWrap key={`adv-${index}`} alt={alt}>
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest mb-4">
              Advantages
            </div>
            <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900`}>
              {section.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {(section.items || data.features).map((feature, i) => (
              <motion.article
                key={feature.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <IconBox icon={feature.icon} />
                  <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>
      );

    case "core-functionality":
      return (
        <SectionWrap key={`core-${index}`} alt={alt}>
          <SectionHeader
            badge="Functionality"
            title={section.title}
            highlight=""
            description={section.subtitle || ""}
          />
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
            {section.blocks.map((block, i) => (
              <ContentBlockCard key={`${block.title}-${i}`} block={block} index={i} />
            ))}
          </div>
        </SectionWrap>
      );

    case "critical-components":
      return (
        <SectionWrap key={`crit-${index}`} alt={alt}>
          <SectionHeader
            badge="Architecture"
            title={section.title}
            highlight=""
            description={section.subtitle || ""}
          />
          <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
            {section.blocks.map((block, i) => (
              <ContentBlockCard key={`${block.title}-${i}`} block={block} index={i} />
            ))}
          </div>
        </SectionWrap>
      );

    case "card-grid": {
      const cols = section.columns || 2;
      return (
        <SectionWrap key={`grid-${index}`} alt={alt}>
          <SectionHeader
            badge="Platform"
            title={section.title}
            highlight=""
            description={section.subtitle || ""}
          />
          <div className={`grid gap-5 sm:gap-6 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
            {section.items.map((item, i) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className={`rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow ${
                  item.fullWidth ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <IconBox icon={item.icon} size="lg" />
                  <div>
                    <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrap>
      );
    }

    case "feature-showcase":
      return (
        <SectionWrap key={`showcase-${index}`} alt={alt}>
          <SectionHeader
            badge="System"
            title={section.title}
            highlight=""
            description={section.subtitle || ""}
          />
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
            {data.features.map((feature, i) => (
              <motion.article
                key={feature.title}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <IconBox icon={feature.icon} size="lg" />
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>
                    {i + 1}. {feature.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </SectionWrap>
      );

    case "tech-stack":
      return (
        <SectionWrap key={`tech-${index}`} alt={alt}>
          <SectionHeader badge="Technology" title="Technology" highlight="Stack" description={section.description} />
          <DotCarousel bleed ariaLabel="Content carousel">
              {data.techStack.flatMap((cat) =>
                cat.technologies.map((tech, i) => (
                  <motion.div
                    key={`${cat.category}-${tech.name}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex-shrink-0 w-[160px] snap-start"
                  >
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center h-full hover:shadow-md transition-shadow">
                      <IconBox icon={tech.icon} />
                      <div className="font-semibold text-slate-900 text-sm mt-3">{tech.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{cat.category}</div>
                      <div className="text-xs text-slate-400 mt-2 leading-snug">{tech.description}</div>
                    </div>
                  </motion.div>
                ))
              )}
        </DotCarousel>
        </SectionWrap>
      );

    case "cta":
      return (
        <PageCTA
          key={`cta-${index}`}
          title={section.title}
          description={section.description}
          primaryLabel={section.buttonLabel || "Get Free Quote"}
          primaryHref="/contact-us"
        />
      );

    default:
      return null;
  }
};

type Props = {
  data: PortfolioDetailData;
  slug: string;
};

export default function PortfolioDetailPage({ data, slug }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: data.title,
        description: data.description,
        image: data.hero.heroImage.src.startsWith("http")
          ? data.hero.heroImage.src
          : `https://www.ctasis.com${data.hero.heroImage.src}`,
        author: { "@type": "Organization", name: "Ctas Info Services LLP" },
        about: data.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Portfolios", item: "https://www.ctasis.com/portfolios" },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title,
            item: `https://www.ctasis.com/portfolios/${slug}`,
          },
        ],
      },
    ],
  };

  const statEntries = Object.entries(data.stats);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — split with image */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-10 sm:py-12 lg:py-14"
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
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <Link
                href="/portfolios"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#93A3AF] hover:text-white transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolios
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                  {React.createElement(getIcon(data.hero.badgeIcon), {
                    className: "w-3.5 h-3.5",
                    style: { color: CYAN_LIGHT },
                  })}
                  {data.hero.badge}
                </div>
                <h1
                  className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-5`}
                >
                  {data.hero.titleLine1}
                  {data.hero.titleLine2 && (
                    <span className="block italic mt-1" style={{ color: CYAN_LIGHT }}>
                      {data.hero.titleLine2}
                    </span>
                  )}
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed mb-8">{data.description}</p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all hover:opacity-90 mb-10"
                  style={{ backgroundColor: CYAN }}
                >
                  <Phone className="w-4 h-4" />
                  {data.hero.ctaLabel || "Get Free Quote"}
                </Link>
                <div className="grid grid-cols-3 gap-4">
                  {data.hero.heroStats.map((stat) => (
                    <div key={stat.label} className="text-center rounded-xl bg-white/[0.05] border border-white/10 p-4">
                      <div className={`${fraunces.className} text-xl sm:text-2xl font-medium text-[#F2F6F9]`}>
                        <AnimatedStat value={data.stats[stat.valueKey] || ""} />
                      </div>
                      <div className="text-xs text-[#93A3AF] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <Image
                  src={data.hero.heroImage.src}
                  alt={data.hero.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview — split with sticky sidebar */}
        <SectionWrap alt>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <motion.div {...fadeUp}>
                <SectionHeader
                  badge="Overview"
                  title="Project"
                  highlight="Overview"
                  description={data.longDescription}
                  align="left"
                />
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6">
                    <h3 className="font-semibold text-slate-900 mb-4">Key Challenges</h3>
                    <ul className="space-y-2.5" aria-label="Key challenges">
                      {data.challenges.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-400" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200/80 bg-[#F6F8FA] p-6">
                    <h3 className="font-semibold text-slate-900 mb-4">Our Solutions</h3>
                    <ul className="space-y-2.5" aria-label="Our solutions">
                      {data.solutions.map((s) => (
                        <li key={s} className="flex gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {data.results.length > 0 && (
                <motion.div {...fadeUp}>
                  <h3 className={`${fraunces.className} text-xl font-medium text-slate-900 mb-4`}>Results</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.results.map((r) => (
                      <span
                        key={r}
                        className="inline-flex px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <aside className="space-y-5">
              <motion.div {...fadeUp} className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 lg:sticky lg:top-24">
                <h3 className="font-semibold text-slate-900 mb-5">Project Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div>
                      <div className="text-slate-500">Duration</div>
                      <div className="font-semibold text-slate-900">{data.duration}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div>
                      <div className="text-slate-500">Team Size</div>
                      <div className="font-semibold text-slate-900">{data.teamSize} members</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Award className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div>
                      <div className="text-slate-500">Status</div>
                      <div className="font-semibold" style={{ color: CYAN }}>
                        {data.status || "Completed"}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div>
                      <div className="text-slate-500">Year</div>
                      <div className="font-semibold text-slate-900">{data.year}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ delay: 0.06 }} className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#EAF3F8] text-[#13345A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Project Stats</h3>
                <div className="space-y-3 text-sm">
                  {statEntries.map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-4">
                      <span className="text-slate-500 capitalize">{statLabelMap[key] || key}</span>
                      <span className="font-semibold text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
          <motion.p {...fadeUp} className="mt-10 inline-flex items-center gap-2 text-sm text-slate-600">
            <Sparkles className="w-4 h-4" style={{ color: CYAN }} />
            See related{" "}
            <Link href="/case-studies" className="font-semibold hover:underline" style={{ color: NAVY }}>
              case studies
            </Link>{" "}
            and{" "}
            <Link href="/solutions" className="font-semibold hover:underline" style={{ color: NAVY }}>
              solutions
            </Link>
            .
          </motion.p>
        </SectionWrap>

        {data.sections.map((section, i) => renderSection(section, data, i))}
      </main>
      <FooterSection />
    </PageShell>
  );
}
