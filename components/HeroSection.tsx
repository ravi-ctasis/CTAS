"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Fraunces } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cloud,
  Award,
  Globe2,
  Zap,
} from "lucide-react";

import { heroSlides } from "@/data/heroSlides";
import { COMPANY_STATS } from "@/data/company-stats";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const AUTOPLAY_MS = 5200;

/* Brand palette — sourced from the CTAS logo (navy #13345A + cyan #249BCA) */
const NAVY = "#13345A";
const CYAN = "#249BCA";
const CYAN_LIGHT = "#6FC3E4";
const CYAN_HOVER = "#3DAEDA";
const CYAN_ACTIVE = "#1C7CA1";

const trustBadges = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Cloud, label: "AWS Partner" },
  { icon: Award, label: "Clutch Top Developer" },
  { icon: Globe2, label: `${COMPANY_STATS.countries} Countries` },
];

const stats = [
  { v: COMPANY_STATS.marketplaces, l: "Marketplace APIs" },
  { v: COMPANY_STATS.ordersSynced, l: "Orders Synced" },
  { v: COMPANY_STATS.countries, l: "Countries Served" },
  { v: "99.9%", l: "API Reliability" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = heroSlides;
  const total = slides.length;

  const goTo = useCallback(
    (i: number) => setCurrentSlide(((i % total) + total) % total),
    [total]
  );
  const nextSlide = useCallback(() => goTo(currentSlide + 1), [goTo, currentSlide]);
  const prevSlide = useCallback(() => goTo(currentSlide - 1), [goTo, currentSlide]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isHovered, total]);

  const slide = slides[currentSlide];

  const [titleMain, titleHighlight] = useMemo(() => {
    const parts = slide.title.split(" – ");
    return parts.length === 2 ? parts : [slide.title, ""];
  }, [slide.title]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40]"
      aria-label="Hero section — CTAS Info Services"
      itemScope
      itemType="https://schema.org/Organization"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <h1 className="sr-only" itemProp="name">
        Ctas Info Services — Amazon SP-API Integration, AI Automation &amp; E-Commerce Solutions
      </h1>

      {/* ── Background atmosphere ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <motion.div
        className="absolute -top-40 -right-24 w-[620px] h-[620px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(36,155,202,0.24) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(19,52,90,0.45) 0%, transparent 70%)" }}
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 -120px 100px -80px rgba(4,10,16,0.6)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center py-10 sm:py-12 lg:py-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* ── LEFT: Content ── */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-7">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ backgroundColor: CYAN }}
                />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: CYAN }} />
              </span>
              <Sparkles className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
              <span itemProp="name">Ahmedabad&apos;s Leading Tech Experts Since 2019</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                role="tabpanel"
                aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
              >
                {/* Headline */}
                <h2
                  className={`${fraunces.className} text-[2.1rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-medium text-[#F2F6F9] leading-[1.12] tracking-tight mb-5`}
                >
                  <span className="block">{titleMain}</span>
                  {titleHighlight && (
                    <motion.span
                      className={`${fraunces.className} italic inline`}
                      style={{
                        color: CYAN_LIGHT,
                        boxDecorationBreak: "clone",
                        WebkitBoxDecorationBreak: "clone",
                        backgroundImage:
                          "linear-gradient(180deg, transparent 62%, rgba(36,155,202,0.3) 62%)",
                        paddingInline: "3px",
                      }}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                      {titleHighlight}
                    </motion.span>
                  )}
                </h2>

                {/* Subtitle */}
                <p
                  className={`${fraunces.className} italic text-base sm:text-lg mb-4 leading-snug`}
                  style={{ color: CYAN_LIGHT }}
                >
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-[0.95rem] text-[#93A3AF] leading-relaxed max-w-xl mb-7">
                  {slide.description}
                </p>

                {/* Feature checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8 max-w-xl">
                  {slide.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      <span className="text-sm text-[#C7D2D9]">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile-only compact tech strip */}
                <div className="flex lg:hidden items-center gap-2.5 overflow-x-auto pb-1 mb-8 -mx-1 px-1">
                  {slide.techStack?.map((tech, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center"
                    >
                      <Image
                        src={tech.image}
                        alt={tech.label}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                        sizes="24px"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs — static */}
            <div className="flex flex-wrap gap-3.5 mb-9">
              <Link
                href="tel:+917948993409"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-[#08141F] text-sm font-semibold rounded-full transition-all duration-200 shadow-lg"
                style={{ backgroundColor: CYAN, boxShadow: `0 10px 30px -8px ${CYAN}55` }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = CYAN_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = CYAN)}
                onMouseDown={(e) => (e.currentTarget.style.backgroundColor = CYAN_ACTIVE)}
                onMouseUp={(e) => (e.currentTarget.style.backgroundColor = CYAN_HOVER)}
                aria-label="Book a free strategy consultation call"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#F2F6F9] border border-white/15 text-sm font-semibold rounded-full hover:bg-white/[0.05] hover:border-white/25 transition-all duration-200"
                aria-label="Explore CTAS case studies and success stories"
              >
                Explore Case Studies
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustBadges.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-[#7A8B97] text-xs font-medium">
                  <t.icon className="w-3.5 h-3.5 text-[#5B6C78]" />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Capability showcase card ── */}
          <div className="hidden lg:flex flex-col items-center relative">
            <div className="relative w-full max-w-[440px]">
              {/* Decorative dashed ring */}
              <div
                className="absolute -inset-8 rounded-[2.5rem] pointer-events-none"
                style={{ border: "1px dashed rgba(255,255,255,0.08)" }}
                aria-hidden="true"
              />

              {/* Floating stat badges */}
              <motion.div
                className="hidden xl:flex absolute -top-7 -left-10 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#12283C]/90 border border-white/10 shadow-xl backdrop-blur-sm z-20"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${CYAN}26` }}
                >
                  <Zap className="w-4 h-4" style={{ color: CYAN }} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F2F6F9] leading-none">{COMPANY_STATS.ordersSynced}</div>
                  <div className="text-[10px] text-[#7A8B97] mt-1">Orders Synced</div>
                </div>
              </motion.div>

              <motion.div
                className="hidden xl:flex absolute -bottom-7 -right-9 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#12283C]/90 border border-white/10 shadow-xl backdrop-blur-sm z-20"
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${NAVY}55` }}
                >
                  <ShieldCheck className="w-4 h-4" style={{ color: CYAN_LIGHT }} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F2F6F9] leading-none">99.9%</div>
                  <div className="text-[10px] text-[#7A8B97] mt-1">API Uptime</div>
                </div>
              </motion.div>

              {/* Main card */}
              <div className="relative rounded-[2rem] bg-gradient-to-b from-[#12283C]/90 to-[#0C1B29]/90 border border-white/10 shadow-2xl backdrop-blur-xl p-7 xl:p-8 overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(36,155,202,0.22) 0%, transparent 70%)" }}
                  aria-hidden="true"
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${NAVY}, ${CYAN})`,
                          boxShadow: `0 8px 24px -6px ${CYAN}55`,
                        }}
                      >
                        <slide.icon className="w-6 h-6 text-[#F2F6F9]" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={prevSlide}
                          aria-label="Previous specialty"
                          className="w-8 h-8 rounded-full border border-white/10 hover:bg-white/[0.06] flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4 text-[#A9B7C2]" />
                        </button>
                        <button
                          onClick={nextSlide}
                          aria-label="Next specialty"
                          className="w-8 h-8 rounded-full border border-white/10 hover:bg-white/[0.06] flex items-center justify-center transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 text-[#A9B7C2]" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#7A8B97]">
                        Now Automating
                      </span>
                      <span className="text-[10px] font-mono text-[#5B6C78]">
                        {String(currentSlide + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#F2F6F9] leading-snug mb-5">
                      {slide.subtitle}
                    </h3>

                    {/* Feature checklist (compact) */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                      {slide.features.slice(0, 6).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 min-w-0">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                          <span className="text-xs text-[#A9B7C2] truncate">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-white/[0.07] mb-5" />

                    {/* Tech logos */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {slide.techStack?.map((tech, i) => (
                        <div
                          key={i}
                          title={tech.label}
                          className="w-18 h-18 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-[#249BCA]/50 hover:shadow-md hover:scale-105 transition-all duration-200"
                        >
                          <Image
                            src={tech.image}
                            alt={tech.label}
                            width={24}
                            height={24}
                            className="max-w-[56px] max-h-[28px] w-auto h-auto object-contain"
                            sizes="24px"
                            priority={i < 3}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Autoplay progress bar */}
                    <div className="h-1 rounded-full bg-white/[0.07] overflow-hidden">
                      <div
                        key={`bar-${currentSlide}`}
                        className="h-full rounded-full"
                        style={{
                          backgroundImage: `linear-gradient(90deg, ${NAVY}, ${CYAN})`,
                          animation: `heroProgress ${AUTOPLAY_MS}ms linear forwards`,
                          animationPlayState: isHovered ? "paused" : "running",
                        }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dot indicators */}
            <div
              className="flex items-center justify-center gap-2 mt-8"
              role="tablist"
              aria-label="Specialty indicators"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-selected={i === currentSlide}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-8" : "w-1.5 bg-white/15 hover:bg-white/30"
                  }`}
                  style={i === currentSlide ? { backgroundColor: CYAN } : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom stats bar ── */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`text-center sm:text-left px-2 sm:px-6 ${
                  i !== 0 ? "sm:border-l sm:border-white/[0.06]" : ""
                }`}
              >
                <div className={`${fraunces.className} text-xl sm:text-2xl font-medium text-[#F2F6F9]`}>
                  {s.v}
                </div>
                <div className="text-xs text-[#7A8B97] mt-0.5">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
