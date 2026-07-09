"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketplaceFlagGrid } from "@/components/CountryBadge";

const shippingPartners = [
  { name: "DHL", logo: "/dhl-3.svg", wide: true },
  { name: "FedEx", logo: "/fedex.svg", wide: true },
  { name: "Shiprocket", logo: "/Shiprocket.svg", wide: true },
  { name: "Shipmondo", logo: "/shipmondo-logo.webp", wide: true },
  { name: "SendCloud", logo: "/sendcloud-logo.webp", wide: true },
  { name: "TNT", logo: "/tnt-logo.svg", wide: false },
  { name: "ShipBob", logo: "/shipbob.svg", wide: true },
  { name: "ShipMonk", logo: "/shipmonk.svg", wide: true },
  { name: "Easyship", logo: "/easyship.svg", wide: true },
  { name: "Deliverr", logo: "/deliverr.png", wide: true },
];

const erpPartners = [
  { name: "QuickBooks", logo: "/quickbooks-logo.svg", wide: true },
  { name: "ShipStation", logo: "/shipstation-logo.svg", wide: true },
  { name: "Zoho", logo: "/zoho.svg", wide: true },
  { name: "Cin7", logo: "/cin7.svg", wide: true },
  { name: "Veeqo", logo: "/veeqo.svg", wide: true },
];

const aiPartners = [
  { name: "OpenAI GPT", logo: "/gpt-logo.webp", wide: false },
  { name: "Claude", logo: "/claude-logo.svg", wide: false },
  { name: "Gemini", logo: "/gemini-logo.webp", wide: false },
  { name: "Cursor", logo: "/cursor-logo.svg", wide: false },
  { name: "Lovable", logo: "/lovable-logo.webp", wide: false },
];

const marketplacePartners = [
  { name: "Amazon", logo: "/amazon.svg", wide: true },
  { name: "eBay", logo: "/ebay-logo.svg", wide: true },
  { name: "Walmart", logo: "/walmart-logo.svg", wide: true },
  { name: "Etsy", logo: "/etsy-logo.webp", wide: true },
  { name: "Bol.com", logo: "/bol.webp", wide: false },
  { name: "Allegro", logo: "/allegro_logo.svg", wide: true },
  { name: "Kaufland", logo: "/kaufland.webp", wide: true },
  { name: "Cdiscount", logo: "/cdiscount.svg", wide: true },
  { name: "Fnac", logo: "/fnac.webp", wide: true },
  { name: "Rakuten", logo: "/rakuten.webp", wide: true },
  { name: "Worten", logo: "/worten-logo.webp", wide: true },
  { name: "ManoMano", logo: "/manomano.svg", wide: true },
  { name: "OnBuy", logo: "/onbuy.svg", wide: true },
  { name: "Fruugo", logo: "/fruugo.svg", wide: true },
  { name: "CDON", logo: "/cdon.jpeg", wide: true },
  { name: "Spartoo", logo: "/spartoo.svg", wide: true },
  { name: "Otto", logo: "/otto_logo.jpeg", wide: true },
  { name: "Decathlon", logo: "/decathlon-logo.svg", wide: true },
  { name: "Alibaba", logo: "/alibaba_logo.svg", wide: true },
  { name: "AliExpress", logo: "/aliexpress_logo.webp", wide: true },
  { name: "Lazada", logo: "/lazada_logo.svg", wide: true },
  { name: "Temu", logo: "/temu_logo.svg", wide: true },
  { name: "TikTok Shop", logo: "/tiktokshop.svg", wide: true },
  { name: "Catch", logo: "/catch_logo.png", wide: true },
  { name: "Global Sources", logo: "/global-sources.svg", wide: true },
  { name: "BigBuy", logo: "/bigbuy.png", wide: true },
  { name: "BrandsGateway", logo: "/brandsgateway.svg", wide: true },
  { name: "Spocket", logo: "/spocket.webp", wide: true },
  { name: "Syncee", logo: "/syncee.svg", wide: true },
  { name: "SaleHoo", logo: "/salehoo.svg", wide: true },
];

const platformPartners = [
  { name: "Mirakl", logo: "/mirakl.png", wide: true },
  { name: "ChannelEngine", logo: "/channelengine.svg", wide: true },
  { name: "Channable", logo: "/channable.svg", wide: true },
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

const LogoChip = ({ p }: { p: PartnerLogo }) => {
  const imgClass =
    p.name === "Shiprocket"
      ? "object-contain max-w-[110px] max-h-[30px] w-auto h-auto"
      : `object-contain ${
          p.wide ? "max-w-[96px] max-h-[28px]" : "max-w-[48px] max-h-[34px]"
        } w-auto h-auto`;

  return (
    <div className="flex items-center justify-center bg-white border border-slate-200 rounded-xl px-1.5 py-1.5 h-[60px] min-w-[72px] hover:border-blue-200 hover:shadow-sm transition-all duration-200">
      {p.logo.endsWith(".svg") ? (
        // Native img avoids Next.js SVG optimizer stripping embedded <style> blocks
        <img src={p.logo} alt={`${p.name} integration partner`} className={imgClass} />
      ) : (
        <Image
          src={p.logo}
          alt={`${p.name} integration partner`}
          width={p.wide ? 100 : 52}
          height={p.wide ? 28 : 36}
          className={imgClass}
          loading="lazy"
          sizes="100px"
        />
      )}
    </div>
  );
};

const IntegrationPartnersSection = () => {
  return (
    <section
      className="py-10 sm:py-12 lg:py-14 bg-slate-50"
      aria-label="Integration partners — shipping, ERP, AI and Amazon marketplace coverage"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
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
                <h3 className="text-sm font-bold text-slate-900">Shipping, Logistics & Fulfilment</h3>
                <p className="text-xs text-slate-400">Carriers · 3PL · Cross-border fulfilment networks</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {shippingPartners.map((p) => <LogoChip key={p.name} p={p} />)}
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Also: UPS, Bombino, Cirro, Quickship — 15+ carriers &amp; fulfilment partners supported
            </p>

            {/* ── Multichannel & feed platforms ── */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Multichannel & Feed Platforms</h3>
                  <p className="text-xs text-slate-400">Connect via leading marketplace & product-feed management platforms</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {platformPartners.map((p) => <LogoChip key={p.name} p={p} />)}
              </div>
            </div>
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
                <h3 className="text-sm font-bold text-slate-900">ERP, Inventory & Accounting</h3>
                <p className="text-xs text-slate-400">QuickBooks · ShipStation · Zoho · Cin7 · Veeqo</p>
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
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 p-1 shadow-sm">
                <Image src="/amazon-logo.svg" alt="Amazon" width={20} height={20} className="w-5 h-5 object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Amazon EU Marketplaces</h3>
                <p className="text-xs text-slate-400">We sell on your behalf across 9 markets</p>
              </div>
            </div>

            <MarketplaceFlagGrid
              dark
              className="grid grid-cols-3 gap-2 mb-5"
              markets={amazonMarkets.map((m) => ({
                code: m.code,
                name: m.name,
                alt: `${m.name} flag - Amazon.${m.code.toLowerCase()} marketplace`,
              }))}
            />

            <div className="space-y-2 mb-6">
              {[
                "FBA, FBM, 3PL & Amazon Warehousing (AWD)",
                "Seller Central & Vendor Central Management",
                "Buy Box Optimisation & Automated Repricing",
                "SP-API Authorised Developer Integration",
                "Product Listings, A+ Content & Amazon SEO",
                "Sponsored Ads (PPC) & Campaign Management",
                "Inventory, Order & Returns Automation",
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

        {/* ── Marketplaces we integrate ── */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-7 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v4H3V3zm0 0l1.5 15a1 1 0 001 .9h11a1 1 0 001-.9L19 3M9 12h6" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Marketplaces We Integrate</h3>
              <p className="text-xs text-slate-400">30+ global & regional marketplaces — one unified integration layer</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {marketplacePartners.map((p) => <LogoChip key={p.name} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartnersSection;
