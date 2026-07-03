"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const shippingPartners = [
  { name: "DHL", logo: "/dhl-3.svg", wide: true },
  { name: "FedEx", logo: "/fedex.svg", wide: true },
  { name: "Shiprocket", logo: "/Shiprocket.svg", wide: true },
  { name: "Shipmondo", logo: "/shipmondo-logo.webp", wide: true },
  { name: "SendCloud", logo: "/sendcloud-logo.webp", wide: true },
  { name: "TNT", logo: "/tnt-logo.svg", wide: false },
  { name: "USPS", logo: "/USPS-logo.webp", wide: true },
];

const erpPartners = [
  { name: "QuickBooks", logo: "/quickbooks-logo.svg", wide: true },
  { name: "ShipStation", logo: "/shipstation-logo.svg", wide: true },
  { name: "Zoho", logo: "/zoho.svg", wide: true },
];

const aiPartners = [
  { name: "OpenAI GPT", logo: "/gpt-logo.webp", wide: false },
  { name: "Claude", logo: "/claude-logo.svg", wide: false },
  { name: "Gemini", logo: "/gemini-logo.webp", wide: false },
  { name: "Cursor", logo: "/cursor-logo.svg", wide: false },
  { name: "Lovable", logo: "/lovable-logo.webp", wide: false },
];

const amazonMarkets = [
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "NL", name: "Netherlands" },
  { code: "SE", name: "Sweden" },
  { code: "PL", name: "Poland" },
  { code: "BE", name: "Belgium" },
  { code: "UK", name: "United Kingdom" },
];

interface PartnerLogo {
  name: string;
  logo: string;
  wide: boolean;
}

const LogoChip = ({ p }: { p: PartnerLogo }) => (
  <div className="flex items-center justify-center bg-white border border-slate-200 rounded-xl px-5 py-3.5 h-[60px] hover:border-blue-200 hover:shadow-sm transition-all duration-200">
    <Image
      src={p.logo}
      alt={`${p.name} integration partner`}
      width={p.wide ? 100 : 52}
      height={p.wide ? 28 : 36}
      className={`object-contain ${p.wide ? "max-w-[96px] max-h-[28px]" : "max-w-[48px] max-h-[34px]"} w-auto h-auto`}
      loading="lazy"
      sizes="100px"
    />
  </div>
);

const IntegrationPartnersSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-slate-50"
      aria-label="Integration partners — shipping, ERP, AI and Amazon marketplace coverage"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Integration Ecosystem
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Every Platform You Need, <span className="text-blue-600">Already Connected</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From global carriers and ERP systems to the latest AI models — CTAS integrates your
            entire commerce stack and sells on 9 Amazon EU marketplaces on your behalf.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Shipping Partners ── */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Shipping & Logistics</h3>
                <p className="text-xs text-slate-400">DHL · FedEx · Shiprocket · SendCloud · TNT · USPS & more</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {shippingPartners.map((p) => <LogoChip key={p.name} p={p} />)}
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Also: UPS, Bombino, Cirro, Quickship, Easyship — 15+ carriers supported
            </p>
          </div>

          {/* ── ERP & Accounting ── */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">ERP & Accounting</h3>
                <p className="text-xs text-slate-400">QuickBooks · ShipStation · Zoho</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 mb-5">
              {erpPartners.map((p) => <LogoChip key={p.name} p={p} />)}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full sync of orders, invoices, stock and financial reconciliation across your accounting and fulfilment systems.
            </p>

            {/* AI Partners */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.35A3.001 3.001 0 0112 15a3 3 0 01-2.121-.879l-.347-.347z" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-slate-900">AI Model Integration</h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {aiPartners.map((p) => <LogoChip key={p.name} p={p} />)}
              </div>
            </div>
          </div>

          {/* ── Amazon EU Coverage ── */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 text-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Image src="/amazon-logo.svg" alt="Amazon" width={20} height={20} className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Amazon EU Marketplaces</h3>
                <p className="text-xs text-slate-400">We sell on your behalf across 9 markets</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-5">
              {amazonMarkets.map((m) => (
                <div
                  key={m.code}
                  className="bg-white/5 border border-white/8 rounded-xl p-2.5 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-xs font-bold text-white">.{m.code.toLowerCase()}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{m.name}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              {[
                "FBA · FBM · 3PL · AWD Services",
                "Seller Central & Vendor Central",
                "Buy Box Optimisation",
                "SP-API Authorized Developer",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/services/amazon-sp-api-integration"
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn about Amazon Integration
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntegrationPartnersSection;
