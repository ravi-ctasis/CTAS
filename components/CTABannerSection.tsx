"use client";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const CTABannerSection = () => {
  return (
    <section
      className="py-12 sm:py-16 bg-white"
      aria-label="Call to action - start your project with CTAS"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl px-8 sm:px-12 lg:px-16 py-12 sm:py-14 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>
          </div>

          {/* Accent circle */}
          <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-blue-600/10" />
          <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-blue-600/10" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                Ready to Scale?
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Let&apos;s Build Your Next Digital Success Story
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                Whether you&apos;re building an enterprise platform, integrating marketplaces, automating
                ERP, or creating AI-powered products — our experts are ready to help.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-white border border-white/30 text-sm font-semibold rounded-xl hover:border-white/60 transition-colors duration-200"
              >
                Request a Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;
