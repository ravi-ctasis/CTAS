"use client";

import { motion } from "framer-motion";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import { Sparkles, ArrowRight, type LucideIcon } from "lucide-react";

export const NAVY = "#13345A";
export const CYAN = "#249BCA";
export const CYAN_LIGHT = "#6FC3E4";

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest">
    {children}
  </div>
);

export const SectionHeader = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "center" | "left";
}) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.5 }}
    className={align === "center" ? "text-center mb-12 sm:mb-14" : "mb-10"}
  >
    <SectionBadge>{badge}</SectionBadge>
    <h2
      className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mt-4 mb-4 ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {title}{" "}
      {highlight && (
        <span className="italic" style={{ color: CYAN }}>
          {highlight}
        </span>
      )}
    </h2>
    <p
      className={`text-slate-500 text-base sm:text-lg leading-relaxed max-w-3xl ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {description}
    </p>
  </motion.div>
);

export type HeroStat = {
  number: string;
  label: string;
  icon: LucideIcon;
  description?: string;
};

export const PageHero = ({
  badge,
  title,
  highlight,
  description,
  stats,
  ariaLabel,
  primaryCta,
  secondaryCta,
}: {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  stats?: HeroStat[];
  ariaLabel?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) => (
  <section
    className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
    aria-label={ariaLabel}
  >
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
      aria-hidden="true"
    />
    <motion.div
      className="absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(36,155,202,0.22) 0%, transparent 70%)" }}
      animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />

    <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-center max-w-4xl mx-auto ${stats ? "mb-12 sm:mb-14" : ""}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
          {badge}
        </div>
        <h1
          className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-medium text-[#F2F6F9] leading-[1.12] tracking-tight mb-6`}
        >
          {title}{" "}
          {highlight && (
            <span className="italic" style={{ color: CYAN_LIGHT }}>
              {highlight}
            </span>
          )}
        </h1>
        <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      {stats && stats.length > 0 && (
        <div
          className={`grid gap-4 sm:gap-5 ${
            stats.length <= 2
              ? "grid-cols-2 max-w-xl mx-auto"
              : stats.length === 3
                ? "grid-cols-3 max-w-3xl mx-auto"
                : "grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm p-5 sm:p-6 text-center hover:bg-white/[0.08] transition-colors"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-3" style={{ color: CYAN }} />
              <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-[#F2F6F9]`}>
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-[#C7D2D9] mt-1">{stat.label}</div>
              {stat.description && (
                <div className="text-xs text-[#7A8B97] mt-1 leading-snug">{stat.description}</div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {(primaryCta || secondaryCta) && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`flex flex-col sm:flex-row gap-3 justify-center ${
            stats && stats.length > 0 ? "mt-10 sm:mt-12" : "mt-8 sm:mt-10"
          }`}
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full text-[#08141F] transition-all duration-200 shadow-lg hover:opacity-90"
              style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full text-white border border-white/20 hover:bg-white/[0.06] transition-all duration-200"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      )}
    </div>
  </section>
);

export const PageCTA = ({
  title,
  description,
  primaryHref = "/contact-us",
  primaryLabel = "Book a Free Consultation",
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: React.ReactNode;
  secondaryHref?: string;
  secondaryLabel?: string;
}) => (
  <section className="py-16 sm:py-20">
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="relative rounded-[1.75rem] px-8 sm:px-12 lg:px-16 py-12 sm:py-14 overflow-hidden text-center"
        style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}
      >
        <div
          className="absolute -top-20 -right-16 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(36,155,202,0.35) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4`}>
            {title}
          </h2>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[#08141F] text-sm font-semibold rounded-full transition-all duration-200 shadow-lg"
              style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white border border-white/20 text-sm font-semibold rounded-full hover:bg-white/[0.06] transition-all duration-200"
              >
                {secondaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#F6F8FA]">{children}</div>
);
