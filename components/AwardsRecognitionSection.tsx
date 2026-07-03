"use client";
import Image from "next/image";

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

const trustMetrics = [
  { value: "7+", label: "Years in Business" },
  { value: "ISO", label: "Certified Quality" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Technical Support" },
];

interface AwardItem {
  name: string;
  image: string;
  label: string;
  wide: boolean;
}

const AwardCard = ({ item, priority }: { item: AwardItem; priority?: boolean }) => (
  <div className="group bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-between gap-5 hover:border-blue-200 hover:shadow-lg transition-all duration-300 min-h-[190px]">
    <div className="flex-1 flex items-center justify-center w-full">
      <Image
        src={item.image}
        alt={item.name}
        width={item.wide ? 220 : 110}
        height={item.wide ? 80 : 110}
        className={`object-contain ${
          item.wide
            ? "max-w-[200px] max-h-[72px] w-auto h-auto"
            : "max-w-[110px] max-h-[110px] w-auto h-auto"
        }`}
        quality={95}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        sizes="220px"
      />
    </div>
    <span className="text-xs font-medium text-slate-400 text-center leading-relaxed tracking-wide">
      {item.label}
    </span>
  </div>
);

const AwardsRecognitionSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      aria-label="Awards, certifications and industry recognition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Awards &amp; Recognition
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Committed to Excellence
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Recognized by leading industry platforms and certified by the world&apos;s largest
            technology companies for delivering exceptional results.
          </p>
        </div>

        {/* ── Technology Partners ── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap">
              Technology Partners
            </span>
            <span className="flex-1 h-px bg-slate-100" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {techPartners.map((item, i) => (
              <AwardCard key={item.name} item={item} priority={i < 2} />
            ))}
          </div>
        </div>

        {/* ── Industry Recognition ── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap">
              Industry Recognition
            </span>
            <span className="flex-1 h-px bg-slate-100" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {industryAwards.map((item) => (
              <AwardCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* ── Trust metrics ── */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {trustMetrics.map((t) => (
            <div key={t.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">{t.value}</div>
              <div className="text-sm text-slate-500 mt-1">{t.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsRecognitionSection;
