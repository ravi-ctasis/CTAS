"use client";
import {
  Users,
  Award,
  Globe,
  ArrowRight,
  Eye,
  Check,
  ShieldCheck,
  Clock,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import { COMPANY_STATS, COMPANY_STAT_COPY } from "@/data/company-stats";

const features = [
  `${COMPANY_STAT_COPY.projectsDelivered} in Retail, Healthcare & Finance`,
  "AI-Augmented Development Using GPT, Claude & Gemini",
  `${COMPANY_STAT_COPY.certifiedDevelopers} in AI, Python, TypeScript & C#`,
  `End-to-End Marketplace Expertise Across ${COMPANY_STATS.marketplaces} Global Marketplaces`,
  "HIPAA-Compliant Healthcare Solutions",
  "PCI DSS & GDPR Compliant FinTech Solutions",
  "Multi-Platform E-Commerce Integration",
];

const achievements = [
  {
    icon: Users,
    number: COMPANY_STATS.projectsDelivered,
    label: "Projects Delivered",
    description: "Across Retail, Healthcare & Finance",
    iconBg: "bg-[#EAF3F8]",
    iconColor: "text-[#13345A]",
  },
  {
    icon: Award,
    number: COMPANY_STATS.certifiedDevelopers,
    label: "Certified Developers",
    description: "AI, Python, TypeScript & C#",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Globe,
    number: COMPANY_STATS.marketplaces,
    label: "Marketplaces",
    description: "Amazon, eBay, Walmart & More",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const bottomStats = [
  { icon: Clock, value: "99.9%", label: "Uptime" },
  { icon: ShieldCheck, value: "24/7", label: "Support" },
  { icon: BadgeCheck, value: "ISO", label: "Certified" },
];

const AboutSection = () => {
  return (
    <section
      className="py-10 sm:py-12 lg:py-14 section-bg-dots"
      aria-label="About Ctas Info Services LLP"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* ── Left: Content ── */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF3F8] border border-[#13345A]/15 text-[#13345A] text-xs font-semibold uppercase tracking-wider">
              About Ctas Info Services LLP
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight" itemProp="name">
              India&apos;s Trusted{" "}
              <span className="text-[#13345A]">AI-Powered Ecommerce Automation, Marketplace Integrations &amp; ERP/MVP/OMS/WMS, SaaS Development</span>{" "}
              Company
 
            </h2>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl" itemProp="description">
              Ctas Info Services LLP builds and ships custom web development, mobile apps, and
              e-commerce solutions faster and smarter — powered by an AI-augmented engineering
              workflow using GPT, Claude, Gemini and Cursor alongside 20+ certified developers.
              Since 2019, we have delivered {COMPANY_STATS.projectsDelivered} projects across retail, logistics, education,
              healthcare, and financial services in India and worldwide — specializing in Amazon
              SP-API integration, AI automation, and multi-marketplace synchronization for
              measurable business growth.
            </p>

            {/* Features checklist */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EAF3F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#13345A]" />
                  </span>
                  <span className="text-sm text-slate-600 leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#13345A] text-white text-sm font-semibold rounded-xl hover:bg-[#0E2843] transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolios"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 text-sm font-semibold rounded-xl hover:border-[#6FC3E4] transition-colors duration-200"
              >
                <Eye className="w-4 h-4" />
                View Our Work
              </Link>
            </div>
          </div>

          {/* ── Right: Metrics ── */}
          <div className="space-y-4">
            {/* Achievement cards */}
            {achievements.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="flex items-center gap-5 bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#13345A]/25 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl ${a.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${a.iconColor}`} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{a.number}</div>
                    <div className="text-sm font-semibold text-slate-700">{a.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{a.description}</div>
                  </div>
                </div>
              );
            })}

            {/* Years highlight card */}
            <div className="bg-gradient-to-br from-[#EAF3F8] via-white to-[#DCEEF5] border border-[#13345A]/15 rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#249BCA]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#13345A] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#13345A]/20">
                  <CalendarDays className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#13345A] leading-none">{COMPANY_STATS.yearsOfExcellence}</div>
                  <div className="text-base font-semibold text-slate-900 mt-1">Years of Excellence</div>
                  <div className="text-sm text-slate-500 mt-0.5">
                    Delivering web, mobile &amp; marketplace solutions since 2019
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom stats row */}
            <div className="grid grid-cols-3 gap-3">
              {bottomStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center"
                  >
                    <Icon className="w-4 h-4 text-slate-400 mx-auto mb-2" aria-hidden="true" />
                    <div className="text-base font-bold text-slate-900">{s.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
