"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageHero,
  PageCTA,
  SectionHeader,
  fadeUp,
  NAVY,
  CYAN,
} from "@/components/page-design";
import type { ServicePageConfig, ServiceSection } from "@/types/service-page";

const SectionWrap = ({
  children,
  alt = false,
}: {
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-white" : "bg-[#F6F8FA]"}`}>
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">{children}</div>
  </section>
);

const IconBox = ({ icon: Icon }: { icon: LucideIcon }) => (
  <div
    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: `${CYAN}18` }}
  >
    <Icon className="w-5 h-5" style={{ color: NAVY }} />
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-[#EAF3F8] text-[#13345A] border border-[#13345A]/10">
    {children}
  </span>
);

const CardsSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "cards" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div
      className={`grid gap-5 sm:gap-6 ${
        section.columns === 2
          ? "md:grid-cols-2"
          : section.columns === 3
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2"
      }`}
    >
      {section.items.map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeUp}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className={`bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300 h-full ${
            section.variant === "horizontal" ? "flex gap-4 items-start" : ""
          }`}
        >
          {section.variant === "horizontal" ? (
            <IconBox icon={item.icon} />
          ) : (
            <div className="mb-5">
              <IconBox icon={item.icon} />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.description}</p>
            {item.features && (
              <ul className="space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            {item.pills && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.pills.map((p) => (
                  <Pill key={p}>{p}</Pill>
                ))}
              </div>
            )}
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const BenefitsSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "benefits" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {section.items.map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeUp}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="text-center bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: `${CYAN}18` }}
          >
            <item.icon className="w-6 h-6" style={{ color: NAVY }} />
          </div>
          <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const ProcessSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "process" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
      {section.steps.map((step, i) => (
        <motion.div
          key={step.step}
          {...fadeUp}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="relative bg-white border border-slate-200/80 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
        >
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: NAVY }}
          >
            {step.step}
          </div>
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 mt-2"
            style={{ backgroundColor: `${CYAN}18` }}
          >
            <step.icon className="w-5 h-5" style={{ color: NAVY }} />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-2">{step.title}</h3>
          <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const TechGridSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "tech-grid" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {section.items.map((tech, i) => (
        <motion.div
          key={tech.name}
          {...fadeUp}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-5 text-center hover:shadow-md transition-all"
        >
          {tech.icon && (
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: `${NAVY}10` }}
            >
              <tech.icon className="w-5 h-5" style={{ color: NAVY }} />
            </div>
          )}
          <h4 className="text-sm font-semibold text-slate-900 mb-1">{tech.name}</h4>
          {tech.level && (
            <span className="text-xs text-slate-400 uppercase tracking-wide">{tech.level}</span>
          )}
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const TechCategoriesSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "tech-categories" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="space-y-8">
      {section.categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          {...fadeUp}
          transition={{ duration: 0.45, delay: ci * 0.08 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            {cat.icon && <IconBox icon={cat.icon} />}
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{cat.title}</h3>
              {cat.description && <p className="text-sm text-slate-500 mt-0.5">{cat.description}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {cat.technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl bg-[#F6F8FA] border border-slate-100 p-4 text-center"
              >
                {tech.icon && (
                  <tech.icon className="w-5 h-5 mx-auto mb-2" style={{ color: NAVY }} />
                )}
                <div className="text-sm font-medium text-slate-800">{tech.name}</div>
                {tech.level && <div className="text-xs text-slate-400 mt-1">{tech.level}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const TabsSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "tabs" }>;
  index: number;
}) => {
  const [active, setActive] = useState(section.defaultTab || section.tabs[0]?.id || "");
  const current = section.tabs.find((t) => t.id === active) || section.tabs[0];

  return (
    <SectionWrap alt={index % 2 === 1}>
      <SectionHeader {...section.header} description={section.header.description || ""} />
      <div className="grid lg:grid-cols-[minmax(0,max-content)_1fr] gap-6 lg:gap-8 items-start">
        <nav className="flex flex-col gap-2 w-full lg:w-max lg:max-w-[min(100%,360px)]" aria-label="Guide sections">
          {section.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium leading-snug transition-all cursor-pointer ${
                active === tab.id
                  ? "text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#13345A]/30"
              }`}
              style={active === tab.id ? { backgroundColor: NAVY } : undefined}
            >
              {tab.title}
            </button>
          ))}
        </nav>
        <AnimatePresence mode="wait">
          <motion.div
            key={current?.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">{current?.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-4">{current?.content}</p>
            {current?.points && (
              <ul className="space-y-2">
                {current.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrap>
  );
};

const UseCasesSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "use-cases" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
      {section.items.map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeUp}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7"
        >
          <div className="flex items-start gap-4 mb-4">
            <IconBox icon={item.icon} />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.description}</p>
            </div>
          </div>
          {item.benefits && (
            <div className="flex flex-wrap gap-2">
              {item.benefits.map((b) => (
                <Pill key={b}>{b}</Pill>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const FilterFeaturesSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "filter-features" }>;
  index: number;
}) => {
  const [active, setActive] = useState("all");
  const filtered =
    active === "all" ? section.items : section.items.filter((f) => f.category === active);

  return (
    <SectionWrap alt={index % 2 === 1}>
      <SectionHeader {...section.header} description={section.header.description || ""} />
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {["all", ...section.categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer capitalize ${
              active === cat
                ? "text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200"
            }`}
            style={active === cat ? { backgroundColor: NAVY } : undefined}
          >
            {cat === "all" ? "All Features" : cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => (
          <motion.div
            key={item.title}
            layout
            {...fadeUp}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-all"
          >
            <IconBox icon={item.icon} />
            <h3 className="text-base font-semibold text-slate-900 mt-4 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            <span className="inline-block mt-3 text-xs font-medium uppercase tracking-wider text-slate-400">
              {item.category}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  );
};

const ProcessSidebarSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "process-sidebar" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
        <SectionHeader {...section.header} description={section.header.description || ""} align="left" />
        <div className="space-y-5 -mt-4">
          {section.steps.map((step) => (
            <div key={step.step} className="flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: NAVY }}
              >
                {step.step}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl p-7 sm:p-8 text-white"
        style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
      >
        <h3 className="text-xl font-semibold mb-3">{section.sidebar.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{section.sidebar.description}</p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {section.sidebar.items.map((item) => (
            <div key={item} className="px-3 py-2 bg-white/10 rounded-lg text-xs sm:text-sm">
              {item}
            </div>
          ))}
        </div>
        {section.sidebar.highlights && (
          <div className="space-y-2">
            {section.sidebar.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                {h}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  </SectionWrap>
);

const MarketplaceGridSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "marketplace-grid" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
      {section.items.map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeUp}
          transition={{ duration: 0.45, delay: i * 0.04 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:shadow-lg transition-all"
        >
          <div className="flex items-start gap-4 mb-4">
            <IconBox icon={item.icon} />
            <div>
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm mt-2" style={{ color: CYAN }}>
                {item.keyBenefits}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.supportedMarketplaces.map((mp) => (
              <Pill key={mp}>{mp}</Pill>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const FaqSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "faq" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="max-w-3xl mx-auto space-y-3">
      {section.items.map((faq, i) => (
        <motion.details
          key={faq.question}
          {...fadeUp}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden"
        >
          <summary className="cursor-pointer px-6 py-4 font-semibold text-slate-900 list-none flex items-center justify-between">
            {faq.question}
            <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
          </summary>
          <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
            {faq.answer}
          </div>
        </motion.details>
      ))}
    </div>
  </SectionWrap>
);

const SpotlightSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "spotlight" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {section.metrics.map((m, i) => (
        <motion.div
          key={m.label}
          {...fadeUp}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="text-center bg-white border border-slate-200/80 rounded-2xl p-6"
        >
          <m.icon className="w-5 h-5 mx-auto mb-3" style={{ color: CYAN }} />
          <div className="text-2xl font-semibold text-slate-900">{m.number}</div>
          <div className="text-sm text-slate-500 mt-1">{m.label}</div>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const IntegrationsSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "integrations" }>;
  index: number;
}) => (
  <SectionWrap alt={index % 2 === 1}>
    <SectionHeader {...section.header} description={section.header.description || ""} />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {section.categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          {...fadeUp}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <IconBox icon={cat.icon} />
            <h3 className="font-semibold text-slate-900">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

const renderSection = (section: ServiceSection, index: number) => {
  switch (section.type) {
    case "cards":
      return <CardsSection key={index} section={section} index={index} />;
    case "benefits":
      return <BenefitsSection key={index} section={section} index={index} />;
    case "process":
      return <ProcessSection key={index} section={section} index={index} />;
    case "tech-grid":
      return <TechGridSection key={index} section={section} index={index} />;
    case "tech-categories":
      return <TechCategoriesSection key={index} section={section} index={index} />;
    case "tabs":
      return <TabsSection key={index} section={section} index={index} />;
    case "use-cases":
      return <UseCasesSection key={index} section={section} index={index} />;
    case "filter-features":
      return <FilterFeaturesSection key={index} section={section} index={index} />;
    case "process-sidebar":
      return <ProcessSidebarSection key={index} section={section} index={index} />;
    case "marketplace-grid":
      return <MarketplaceGridSection key={index} section={section} index={index} />;
    case "faq":
      return <FaqSection key={index} section={section} index={index} />;
    case "spotlight":
      return <SpotlightSection key={index} section={section} index={index} />;
    case "integrations":
      return <IntegrationsSection key={index} section={section} index={index} />;
    default:
      return null;
  }
};

const ServicePageTemplate = ({ config }: { config: ServicePageConfig }) => (
  <PageShell>
    {config.structuredData && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(config.structuredData) }}
      />
    )}
    <Navigation />
    <main>
      <PageHero
        ariaLabel={config.ariaLabel}
        badge={config.hero.badge}
        title={config.hero.title}
        highlight={config.hero.highlight}
        description={config.hero.description}
        stats={config.hero.stats}
        primaryCta={config.hero.primaryCta}
        secondaryCta={config.hero.secondaryCta}
      />
      {config.sections.map((section, i) => renderSection(section, i))}
      <PageCTA
        title={config.cta.title}
        description={config.cta.description}
        primaryLabel={config.cta.primaryLabel}
        primaryHref={config.cta.primaryHref}
        secondaryLabel={config.cta.secondaryLabel}
        secondaryHref={config.cta.secondaryHref}
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default ServicePageTemplate;
