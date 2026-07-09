"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Fraunces } from "next/font/google";
import {
  ShieldCheck,
  Star,
  Quote,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { AnimatedStat } from "@/components/page-design";
import { COMPANY_STATS } from "@/data/company-stats";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const NAVY = "#13345A";
const CYAN = "#249BCA";
const CYAN_LIGHT = "#6FC3E4";

const techPartners = [
  {
    name: "Amazon Web Services",
    image: "/amazon-1.webp",
    label: "Cloud Infrastructure Partner",
    wide: true,
  },
  {
    name: "AWS Advanced Tier Services Partner",
    image: "/aws-advanced-tier.webp",
    label: "Advanced Tier Certified",
    wide: false,
  },
  {
    name: "Amazon Selling Partner API",
    image: "/amazon-selling-partner-source.webp",
    label: "SP-API Authorized Developer",
    wide: true,
  },
  {
    name: "Amazon Advertising Partner",
    image: "/amazon-ads.webp",
    label: "Advertising Solutions Partner",
    wide: true,
  },
];

const industryAwards = [
  {
    name: "Clutch — Top Web Developers USA 2024",
    image: "/web-dev-us.webp",
    label: "Top Web Developers · USA",
    wide: false,
  },
  {
    name: "Clutch — Top AI Company Mumbai 2024",
    image: "/artifical.webp",
    label: "Top AI Company · Mumbai",
    wide: false,
  },
  {
    name: "BusinessFirms Verified Agency",
    image: "/businessfirms.webp",
    label: "Verified & Star Rated",
    wide: false,
  },
  {
    name: "GoodFirms — Top Development Firm",
    image: "/goodfirms-1.webp",
    label: "Listed Top Development Firm",
    wide: true,
  },
];

const clutchStats = [
  { value: "4.9", label: "Clutch Rating", stars: true },
  { value: "50+", label: "Verified Reviews" },
  { value: "Top 5%", label: "E-Commerce Firms" },
];

const testimonials = [
  {
    review:
      "CTAS transformed our Amazon DE and NL operations. Their SP-API integration reduced manual work by 90% and our sales doubled in 3 months.",
    rating: 5,
  },
  {
    review:
      "The Bol.com and Shopify integration they built is rock-solid. Real-time inventory sync, automated order routing — exactly what we needed.",
    rating: 5,
  },
  {
    review:
      "From AI-powered repricing to cross-border fulfilment on FBA/FBM — CTAS handles everything. Highly recommended for any serious marketplace seller.",
    rating: 5,
  },
];

const trustMetrics = [
  { value: COMPANY_STATS.yearsOfExcellence, label: "Years of Excellence", animate: true },
  { value: "ISO", label: "Certified Quality", animate: false },
  { value: "99.9%", label: "Uptime SLA", animate: true },
  { value: "24/7", label: "Technical Support", animate: false },
];

const trustWallLogos = [...techPartners, ...industryAwards];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

/** SVG radial ring showing 4.9 / 5.0 */
const ClutchRatingRing = () => {
  const pct = (4.9 / 5) * 100;
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0">
      <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90" aria-hidden="true">
        <circle cx="64" cy="64" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <motion.circle
          cx="64"
          cy="64"
          r={r}
          fill="none"
          stroke={CYAN}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${fraunces.className} text-3xl sm:text-4xl font-medium text-white`}>
          <AnimatedStat value="4.9" />
        </span>
        <div className="flex gap-0.5 mt-1" aria-label="4.9 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[10px] text-white/40 mt-0.5">out of 5</span>
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => go(1), 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, go]);

  const t = testimonials[index];

  return (
    <div
      className="flex flex-col h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="flex items-center justify-between mb-4 px-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Client Reviews</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
            aria-label={paused ? "Resume testimonial rotation" : "Pause testimonial rotation"}
          >
            {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
            aria-label="Next review"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div
        className="relative flex-1 min-h-[200px] rounded-[1.75rem] border border-slate-200/80 bg-white p-6 sm:p-8 overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        aria-live="polite"
      >
        <Quote
          className="absolute top-5 right-6 w-10 h-10 text-[#249BCA]/10 pointer-events-none"
          aria-hidden="true"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="h-full flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${CYAN}22` }}
                aria-hidden="true"
              >
                <Quote className="w-4 h-4" style={{ color: CYAN }} />
              </div>
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p
              className={`${fraunces.className} text-base sm:text-lg text-slate-700 leading-relaxed italic flex-1`}
            >
              &ldquo;{t.review}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-1.5 mt-6 justify-center" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Review ${i + 1} of ${testimonials.length}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                i === index ? "w-6 bg-[#249BCA]" : "w-1.5 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustWallMarquee = () => {
  const doubled = [...trustWallLogos, ...trustWallLogos];

  return (
    <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap">
          Technology Partners &amp; Industry Recognition
        </span>
        <span className="flex-1 h-px bg-slate-200" />
      </div>

      <div
        className="group/marquee relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white py-6"
        onMouseEnter={(e) => e.currentTarget.classList.add("marquee-paused")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("marquee-paused")}
        onFocus={(e) => e.currentTarget.classList.add("marquee-paused")}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) e.currentTarget.classList.remove("marquee-paused");
        }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="trust-marquee-track flex gap-6 sm:gap-8 items-center"
          style={{ width: "max-content" }}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="group/logo flex flex-col items-center justify-center gap-2 px-5 py-4 min-w-[140px] flex-shrink-0"
            >
              <div className="h-[72px] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.wide ? 180 : 90}
                  height={item.wide ? 64 : 90}
                  loading="lazy"
                  sizes="180px"
                  className={`object-contain grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300 ${
                    item.wide ? "max-w-[160px] max-h-[56px]" : "max-w-[80px] max-h-[80px]"
                  } w-auto h-auto`}
                />
              </div>
              <p className="text-[10px] text-slate-500 text-center leading-snug max-w-[130px] group-hover/logo:text-slate-700 transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trust-marquee-track {
          animation: trust-marquee 40s linear infinite;
        }
        .marquee-paused .trust-marquee-track {
          animation-play-state: paused;
        }
        @keyframes trust-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.div>
  );
};

const AwardsRecognitionSection = () => {
  return (
    <section
      className="relative py-10 sm:py-12 lg:py-16 overflow-hidden"
      aria-label="Awards, certifications, Clutch reviews and industry recognition"
      style={{
        background: `linear-gradient(165deg, #EAF3F8 0%, #F6F8FA 35%, #ffffff 65%, #EAF3F8 100%)`,
      }}
    >
      {/* Diagonal pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 48px, rgba(19,52,90,0.03) 48px, rgba(19,52,90,0.03) 49px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#249BCA]/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            Awards &amp; Recognition
          </div>
          <h2
            className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 mb-4`}
          >
            Trusted, Certified &amp;{" "}
            <span className="italic" style={{ color: CYAN }}>
              Top-Rated
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Industry-certified technology partnerships, global platform recognition, and
            consistently outstanding client ratings on Clutch.
          </p>
        </motion.div>

        {/* Asymmetric Clutch hero + testimonial carousel */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-10 lg:mb-12 items-stretch">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 relative rounded-[2rem] p-8 sm:p-10 overflow-hidden flex flex-col sm:flex-row gap-8 items-center sm:items-start"
            style={{ backgroundImage: `linear-gradient(145deg, ${NAVY} 0%, #0E2233 55%, #0B1A26 100%)` }}
          >
            <div
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(36,155,202,0.35) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <ClutchRatingRing />

            <div className="relative flex-1 text-center sm:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                Clutch Recognition
              </p>
              <h3 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-white leading-snug mb-3`}>
                Top-Rated for{" "}
                <span className="italic" style={{ color: CYAN_LIGHT }}>
                  E-Commerce Development
                </span>
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md">
                Consistently ranked among leading e-commerce and marketplace integration firms on the
                world&apos;s premier B2B ratings platform.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                {clutchStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/[0.06] border border-white/10 px-2 py-3 text-center backdrop-blur-sm"
                  >
                    <div className={`${fraunces.className} text-lg sm:text-xl font-medium text-white`}>
                      {s.value}
                    </div>
                    {s.stars && (
                      <div className="flex justify-center gap-0.5 mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-2 h-2 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    )}
                    <div className="text-[9px] sm:text-[10px] text-white/40 mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="https://clutch.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] rounded-full"
                style={{ color: CYAN_LIGHT }}
              >
                View our Clutch profile
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col min-h-[320px]"
          >
            <TestimonialCarousel />
          </motion.div>
        </div>

        <TrustWallMarquee />

        {/* Animated trust metrics */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="relative rounded-[1.75rem] px-6 sm:px-10 py-8 sm:py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden border border-[#13345A]/10 shadow-xl shadow-[#13345A]/[0.06]"
          style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}
        >
          <div
            className="absolute -top-20 -right-16 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(36,155,202,0.35) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          {trustMetrics.map((t, i) => (
            <div
              key={t.label}
              className={`relative text-center ${i !== 0 ? "lg:border-l lg:border-white/10" : ""}`}
            >
              <div className={`${fraunces.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-white`}>
                {t.animate ? <AnimatedStat value={t.value} /> : t.value}
              </div>
              <div className="text-sm text-white/55 mt-2">{t.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsRecognitionSection;
