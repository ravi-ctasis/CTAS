"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fraunces } from "next/font/google";
import { ShieldCheck, Star, Quote, ExternalLink } from "lucide-react";

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
  { value: "7+", label: "Years in Business" },
  { value: "ISO", label: "Certified Quality" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Technical Support" },
];

interface CertItem {
  name: string;
  image: string;
  label: string;
  wide: boolean;
}

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

const CertCard = ({
  item,
  priority,
  index,
}: {
  item: CertItem;
  priority?: boolean;
  index: number;
}) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between gap-4 hover:border-[#13345A]/20 hover:shadow-xl hover:shadow-[#13345A]/[0.05] hover:-translate-y-1 transition-all duration-300 min-h-[176px] overflow-hidden"
  >
    <div
      className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-[#249BCA]/0 group-hover:bg-[#249BCA]/10 blur-2xl transition-all duration-500 pointer-events-none"
      aria-hidden="true"
    />
    <div className="flex-1 flex items-center justify-center w-full min-h-[88px]">
      <Image
        src={item.image}
        alt={item.name}
        width={item.wide ? 220 : 110}
        height={item.wide ? 80 : 110}
        className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
          item.wide
            ? "max-w-[200px] max-h-[68px] w-auto h-auto"
            : "max-w-[100px] max-h-[100px] w-auto h-auto"
        }`}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        sizes="220px"
      />
    </div>
    <div className="text-center relative w-full pt-3 border-t border-slate-100">
      <p className="text-xs font-medium text-slate-500 leading-relaxed">{item.label}</p>
    </div>
  </motion.div>
);

const ReviewCard = ({ review, rating, index }: { review: string; rating: number; index: number }) => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: "easeOut" }}
    className="group relative bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 hover:border-[#249BCA]/30 hover:shadow-lg hover:shadow-[#13345A]/[0.04] transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <Quote className="w-4 h-4 text-slate-200 group-hover:text-[#249BCA]/40 transition-colors" aria-hidden="true" />
    </div>
    <p className={`${fraunces.className} text-sm sm:text-[0.95rem] text-slate-600 leading-relaxed italic`}>
      &ldquo;{review}&rdquo;
    </p>
  </motion.div>
);

const AwardsRecognitionSection = () => {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-[#F6F8FA] overflow-hidden"
      aria-label="Awards, certifications, Clutch reviews and industry recognition"
    >
      {/* Ambient glows */}
      <div
        className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(36,155,202,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 -left-24 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(19,52,90,0.09) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* ── Header ── */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-widest mb-4">
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

        {/* ── Clutch spotlight + Reviews ── */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 mb-14 lg:mb-16">
          {/* Clutch panel */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative rounded-[1.75rem] p-7 sm:p-8 overflow-hidden flex flex-col justify-between min-h-[320px]"
            style={{ backgroundImage: `linear-gradient(145deg, ${NAVY} 0%, #0E2233 55%, #0B1A26 100%)` }}
          >
            <div
              className="absolute -top-20 -right-16 w-56 h-56 rounded-full blur-[90px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(36,155,202,0.4) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                Clutch Recognition
              </p>
              <h3 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-white leading-snug mb-3`}>
                Top-Rated for{" "}
                <span className="italic" style={{ color: CYAN_LIGHT }}>
                  E-Commerce Development
                </span>
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                Consistently ranked among leading e-commerce and marketplace integration
                firms on the world&apos;s premier B2B ratings platform.
              </p>
            </div>

            <div className="relative grid grid-cols-3 gap-3 mt-8">
              {clutchStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white/[0.06] border border-white/10 px-3 py-4 text-center backdrop-blur-sm"
                >
                  <div className={`${fraunces.className} text-xl sm:text-2xl font-medium text-white`}>
                    {s.value}
                  </div>
                  {s.stars && (
                    <div className="flex justify-center gap-0.5 mt-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  )}
                  <div className="text-[10px] text-white/40 mt-1.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="https://clutch.co"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-colors"
              style={{ color: CYAN_LIGHT }}
            >
              View our Clutch profile
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Reviews */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 px-1">
              Client Reviews
            </p>
            {testimonials.map((t, i) => (
              <ReviewCard key={i} review={t.review} rating={t.rating} index={i} />
            ))}
          </div>
        </div>

        {/* ── Technology Partners ── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap">
              Technology Partners
            </span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {techPartners.map((item, i) => (
              <CertCard key={item.name} item={item} priority={i < 2} index={i} />
            ))}
          </div>
        </div>

        {/* ── Industry Recognition ── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap">
              Industry Recognition
            </span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {industryAwards.map((item, i) => (
              <CertCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ── Trust metrics ── */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl px-6 sm:px-8 py-7 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 overflow-hidden border border-[#13345A]/10"
          style={{ backgroundImage: `linear-gradient(135deg, ${NAVY}, #0E2233 55%, #0B1A26)` }}
        >
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-[90px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(36,155,202,0.35) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          {trustMetrics.map((t, i) => (
            <div
              key={t.label}
              className={`relative text-center ${i !== 0 ? "sm:border-l sm:border-white/10" : ""}`}
            >
              <div className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-white`}>
                {t.value}
              </div>
              <div className="text-sm text-white/50 mt-1">{t.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsRecognitionSection;
