"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "18+", label: "Countries Served" },
  { value: "500+", label: "Successful Projects" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "24/7", label: "Support" },
];

const regions = [
  {
    code: "IN",
    name: "India",
    role: "Primary Development Center",
    desc: "Ahmedabad, Gujarat — Engineering hub with 20+ certified developers.",
  },
  {
    code: "EU",
    name: "Europe",
    role: "Marketplace Consulting",
    desc: "Bol.com, Allegro, Worten and EU marketplace integrations.",
  },
  {
    code: "US",
    name: "USA",
    role: "Enterprise Sales & Support",
    desc: "Amazon, Walmart and major North American marketplace clients.",
  },
  {
    code: "AU",
    name: "Australia",
    role: "APAC Partnerships",
    desc: "Catch, Kogan and regional marketplace integrations.",
  },
  {
    code: "GB",
    name: "United Kingdom",
    role: "European Hub",
    desc: "UK marketplace operations and European business partnerships.",
  },
];

const GlobalPresenceSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 section-bg-dots overflow-hidden"
      aria-label="CTAS global presence — clients across Europe, USA, India, Australia and UK"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header — full width */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            Global Presence
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Helping Businesses Across Europe, UK, USA &amp; Asia
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            CTAS partners with startups, SMBs and enterprise organizations to build scalable
            commerce ecosystems connecting marketplaces, ERP platforms, warehouses and logistics
            providers across 18+ countries.
          </p>
        </div>

        {/* Stats — full width row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {stats.map((s) => (
            <div key={s.label} className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/50">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">{s.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Regions + Map — balanced two columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left: Region list */}
          <div className="flex flex-col gap-3">
            {regions.map((r) => (
              <div
                key={r.code}
                className="flex items-center gap-3 p-3.5 sm:p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 text-xs font-bold text-blue-700">
                  {r.code}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 text-sm leading-snug">
                    {r.name} — {r.role}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{r.desc}</div>
                </div>
              </div>
            ))}

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 w-fit mt-2"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Map — fills column height, crops PNG padding */}
          <div className="flex flex-col gap-3 min-h-[320px] sm:min-h-[380px] lg:min-h-0">
            <div className="relative flex-1 min-h-[280px] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 border border-slate-200 overflow-hidden">
              <div className="absolute -inset-[20%] sm:-inset-[18%]">
                <div className="relative w-full h-full">
                  <Image
                  src="/world-map.png"
                  alt="CTAS global presence map showing offices in India, USA, UK, Europe and Australia"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900">5 Key Markets</div>
                  <div className="text-xs text-slate-500">IN · EU · US · AU · UK</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="text-xs text-slate-500">Primary HQ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span className="text-xs text-slate-500">Active Region</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
