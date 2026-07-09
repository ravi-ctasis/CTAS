"use client";

import { useState } from "react";
import Image from "next/image";
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
  fraunces,
  NAVY,
  CYAN,
  AnimatedStat,
  DotCarousel,
} from "@/components/page-design";
import type { ServicePageConfig, ServiceSection } from "@/types/service-page";

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

const CardItemContent = ({
  item,
  horizontal = false,
}: {
  item: Extract<ServiceSection, { type: "cards" }>["items"][number];
  horizontal?: boolean;
}) => (
  <>
    {horizontal ? (
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
  </>
);

const CardsSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "cards" }>;
  index: number;
}) => {
  const variant = section.variant || "default";

  if (variant === "alternating") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <div className="divide-y divide-slate-100">
          {section.items.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start py-10 sm:py-12"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <IconBox icon={item.icon} />
                  <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
              {item.features && (
                <ul className={`grid sm:grid-cols-2 gap-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-slate-100 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </SectionWrap>
    );
  }

  if (variant === "bento") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {section.items.map((item, i) => {
            const isFeatured = i === 0;
            const featuredImage = isFeatured ? item.image : undefined;
            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`bg-white border border-slate-200/80 rounded-[1.5rem] overflow-hidden hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col ${
                  isFeatured ? "md:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {featuredImage && (
                  <div className="relative w-full aspect-[16/10] bg-[#F6F8FA] shrink-0">
                    <Image
                      src={featuredImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                      priority
                    />
                  </div>
                )}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <CardItemContent item={item} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrap>
    );
  }

  if (variant === "scroll") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <DotCarousel bleed ariaLabel={section.header.title || "Service highlights"}>
            {section.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
              >
                <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300">
                  <CardItemContent item={item} />
                </div>
              </motion.div>
            ))}
        </DotCarousel>
      </SectionWrap>
    );
  }

  return (
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
              variant === "horizontal" ? "flex gap-4 items-start" : ""
            }`}
          >
            <CardItemContent item={item} horizontal={variant === "horizontal"} />
          </motion.div>
        ))}
      </div>
    </SectionWrap>
  );
};

const BenefitsSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "benefits" }>;
  index: number;
}) => {
  const variant = section.variant || "grid";

  if (variant === "zigzag") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {section.items.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`flex flex-col sm:flex-row gap-5 sm:gap-8 items-start ${
                i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${CYAN}18` }}
              >
                <item.icon className="w-6 h-6" style={{ color: NAVY }} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrap>
    );
  }

  if (variant === "icon-strip") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {section.items.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl border border-transparent hover:border-slate-200/80 hover:bg-white hover:shadow-md transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                style={{ backgroundColor: `${CYAN}18` }}
              >
                <item.icon className="w-6 h-6" style={{ color: NAVY }} />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>
    );
  }

  return (
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
};

const ProcessSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "process" }>;
  index: number;
}) => {
  const variant = section.variant || "grid";

  if (variant === "timeline") {
    const timelineBorder = index % 2 === 1 ? "border-white" : "border-[#F6F8FA]";
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <div className="max-w-3xl mx-auto relative">
          <div
            className="absolute left-[1.35rem] sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#249BCA]/40 via-[#13345A]/20 to-transparent"
            aria-hidden="true"
          />
          <div className="space-y-8 sm:space-y-10">
            {section.steps.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex gap-5 sm:gap-8"
              >
                <div
                  className={`relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold border-4 ${timelineBorder}`}
                  style={{ backgroundColor: NAVY }}
                >
                  {step.step}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-4 h-4" style={{ color: CYAN }} />
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrap>
    );
  }

  if (variant === "horizontal") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <DotCarousel bleed ariaLabel={section.header.title || "Process steps"} className="gap-4 sm:gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5" trackClassName="px-2">
          {section.steps.map((step, i) => (
            <motion.div
              key={step.step}
              {...fadeUp}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative flex-shrink-0 w-[220px] lg:w-auto snap-start bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6"
            >
              {i < section.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-slate-200"
                  aria-hidden="true"
                />
              )}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold mb-4"
                style={{ backgroundColor: NAVY }}
              >
                {step.step}
              </div>
              <step.icon className="w-5 h-5 mb-3" style={{ color: CYAN }} />
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </DotCarousel>
      </SectionWrap>
    );
  }

  return (
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
};

const TechGridSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "tech-grid" }>;
  index: number;
}) => {
  const variant = section.variant || "grid";

  if (variant === "scroll") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <DotCarousel bleed ariaLabel={section.header.title || "Technologies"}>
            {section.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex-shrink-0 w-[160px] sm:w-[180px] snap-start bg-white border border-slate-200/80 rounded-2xl p-5 text-center hover:border-[#13345A]/20 hover:shadow-lg transition-all"
              >
                {tech.icon && (
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${CYAN}18` }}
                  >
                    <tech.icon className="w-5 h-5" style={{ color: NAVY }} />
                  </div>
                )}
                <h4 className="text-sm font-semibold text-slate-900 mb-1">{tech.name}</h4>
                {tech.level && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: CYAN }}>
                    {tech.level}
                  </span>
                )}
              </motion.div>
            ))}
        </DotCarousel>
      </SectionWrap>
    );
  }

  return (
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
};

const TechCategoriesSection = ({
  section,
  index,
}: {
  section: Extract<ServiceSection, { type: "tech-categories" }>;
  index: number;
}) => {
  const [active, setActive] = useState(0);
  const current = section.categories[active];

  return (
    <SectionWrap alt={index % 2 === 1}>
      <SectionHeader {...section.header} description={section.header.description || ""} />
      <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-6 lg:gap-10 items-start">
        <nav className="flex lg:flex-col gap-2 overflow-x-auto scrollbar-hide lg:overflow-visible pb-2 lg:pb-0" aria-label="Technology layers">
          {section.categories.map((cat, ci) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setActive(ci)}
              className={`flex-shrink-0 lg:w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                active === ci
                  ? "text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#13345A]/30"
              }`}
              style={active === ci ? { backgroundColor: NAVY } : undefined}
            >
              <span className="flex items-center gap-2.5">
                {cat.icon && <cat.icon className="w-4 h-4 flex-shrink-0" />}
                {cat.title}
              </span>
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={current?.title}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-2">
              {current?.icon && <IconBox icon={current.icon} />}
              <h3 className={`${fraunces.className} text-xl font-medium text-slate-900`}>{current?.title}</h3>
            </div>
            {current?.description && (
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{current.description}</p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {current?.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group rounded-xl bg-[#F6F8FA] border border-slate-100 p-4 text-center hover:border-[#13345A]/15 hover:shadow-sm transition-all"
                >
                  {tech.icon && (
                    <tech.icon className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform" style={{ color: NAVY }} />
                  )}
                  <div className="text-sm font-medium text-slate-800">{tech.name}</div>
                  {tech.level && (
                    <div
                      className="text-[10px] font-semibold uppercase tracking-wider mt-1.5"
                      style={{ color: CYAN }}
                    >
                      {tech.level}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrap>
  );
};

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
    <div className="divide-y divide-slate-100 max-w-5xl mx-auto">
      {section.items.map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeUp}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start py-10 sm:py-12"
        >
          <div className={i % 2 === 1 ? "lg:order-2" : ""}>
            <div className="flex items-center gap-4 mb-4">
              <IconBox icon={item.icon} />
              <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
                {item.title}
              </h3>
            </div>
            <p className="text-slate-500 leading-relaxed">{item.description}</p>
          </div>
          {item.benefits && (
            <ul className={`space-y-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              {item.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-slate-100 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                  {b}
                </li>
              ))}
            </ul>
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
}) => {
  const variant = section.variant || "grid";

  if (variant === "alternating") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <div className="divide-y divide-slate-100">
          {section.items.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start py-10 sm:py-12"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-start gap-4 mb-3">
                  <IconBox icon={item.icon} />
                  <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900`}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: CYAN }}>
                  {item.keyBenefits}
                </p>
              </div>
              <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {item.supportedMarketplaces.map((mp) => (
                  <Pill key={mp}>{mp}</Pill>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrap>
    );
  }

  if (variant === "scroll") {
    return (
      <SectionWrap alt={index % 2 === 1}>
        <SectionHeader {...section.header} description={section.header.description || ""} />
        <DotCarousel bleed ariaLabel={section.header.title || "Marketplace services"}>
            {section.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start"
              >
                <div className="h-full bg-white border border-slate-200/80 rounded-[1.5rem] p-6 sm:p-7 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.04] hover:-translate-y-0.5 transition-all duration-300">
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
                </div>
              </motion.div>
            ))}
        </DotCarousel>
      </SectionWrap>
    );
  }

  return (
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
};

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
    <SectionHeader
      {...section.header}
      description={section.header.description || section.description || ""}
    />
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5 }}
      className="rounded-[1.75rem] overflow-hidden border border-slate-200/80"
      style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233)` }}
      role="list"
      aria-label="Success metrics"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
        {section.metrics.map((m) => (
          <div key={m.label} className="p-6 sm:p-8 text-center" role="listitem">
            <m.icon className="w-5 h-5 mx-auto mb-3" style={{ color: CYAN }} aria-hidden="true" />
            <p className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-white mb-1`}>
              <AnimatedStat value={m.number} />
            </p>
            <p className="text-sm text-white/55">{m.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
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
    <div className="space-y-6 sm:space-y-8">
      {section.categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          {...fadeUp}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className={`rounded-[1.5rem] border border-slate-200/80 p-6 sm:p-8 ${
            i === 1 ? "bg-gradient-to-r from-[#F6F8FA] to-white" : "bg-white"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <IconBox icon={cat.icon} />
              <h3 className={`${fraunces.className} text-lg font-medium text-slate-900`}>{cat.title}</h3>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {cat.items.length} integrations
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span
                key={item}
                className="inline-flex px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#F6F8FA] text-slate-700 border border-slate-100 hover:border-[#13345A]/20 hover:bg-white transition-colors"
              >
                {item}
              </span>
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
