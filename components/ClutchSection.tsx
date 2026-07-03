"use client";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus W.",
    company: "E-Commerce Store Owner, Germany",
    review:
      "CTAS transformed our Amazon DE and NL operations. Their SP-API integration reduced manual work by 90% and our sales doubled in 3 months.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    company: "Operations Director, Netherlands",
    review:
      "The Bol.com and Shopify integration they built is rock-solid. Real-time inventory sync, automated order routing — exactly what we needed.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    company: "CEO, Multi-Channel Retailer",
    review:
      "From AI-powered repricing to cross-border fulfilment on FBA/FBM — CTAS handles everything. Highly recommended for any serious marketplace seller.",
    rating: 5,
  },
];

const ClutchSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 section-bg-dots"
      aria-label="Clutch reviews and recognition"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Clutch certificate visual ── */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold">
              Recognized & Certified
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 text-center lg:text-left">
              Top-Rated on <span className="text-orange-500">Clutch</span> for<br />
              E-Commerce Development
            </h2>

            <p className="text-slate-500 text-base leading-relaxed text-center lg:text-left max-w-lg">
              CTAS Info Services is consistently ranked as a top e-commerce and marketplace
              integration firm on Clutch — the world&apos;s leading B2B ratings platform.
              Our verified reviews reflect measurable results for our clients.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-center min-w-[110px]">
                <div className="text-2xl font-bold text-slate-900">4.9</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-1">Clutch Rating</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-center min-w-[110px]">
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-xs text-slate-400 mt-1">Verified Reviews</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-center min-w-[110px]">
                <div className="text-2xl font-bold text-slate-900">Top 5%</div>
                <div className="text-xs text-slate-400 mt-1">E-Commerce Firms</div>
              </div>
            </div>

            {/* Clutch certificate image */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm w-full max-w-sm">
              <Image
                src="/clutch-Certificates.webp"
                alt="CTAS Info Services Clutch Top E-Commerce Development Company Certificate"
                width={480}
                height={340}
                className="w-full h-auto object-contain rounded-xl"
                sizes="(max-width: 640px) 100vw, 480px"
                loading="lazy"
              />
            </div>

            <Link
              href="https://clutch.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors"
            >
              View our Clutch profile
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* ── Right: Client testimonials ── */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
              What Our Clients Say
            </p>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-orange-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.company}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClutchSection;
