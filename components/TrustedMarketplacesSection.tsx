"use client";
import Image from "next/image";

const marketplaces = [
  { name: "Amazon", logo: "/amazon.svg", width: 100, height: 32 },
  { name: "eBay", logo: "/ebay-logo.svg", width: 80, height: 32 },
  { name: "Walmart", logo: "/walmart-logo.svg", width: 110, height: 32 },
  { name: "Bol.com", logo: "/bol.webp", width: 70, height: 32 },
  { name: "Etsy", logo: "/etsy-logo.webp", width: 80, height: 32 },
  { name: "Rakuten", logo: "/rakuten.webp", width: 100, height: 32 },
  { name: "TikTok Shop", logo: "/tiktok.webp", width: 110, height: 36 },
  { name: "Alibaba", logo: "/alibaba_logo.svg", width: 100, height: 32 },
  { name: "AliExpress", logo: "/aliexpress_logo.webp", width: 110, height: 32 },
  { name: "Lazada", logo: "/lazada_logo.svg", width: 90, height: 32 },
  { name: "Catch", logo: "/catch_logo.png", width: 80, height: 32 },
  { name: "Otto", logo: "/otto_logo.jpeg", width: 80, height: 32 },
  { name: "Temu", logo: "/temu_logo.svg", width: 80, height: 32 },
  { name: "Worten", logo: "/worten-logo.webp", width: 90, height: 32 },
  { name: "Kaufland", logo: "/kaufland.webp", width: 100, height: 36 },
  { name: "DHL", logo: "/dhl-3.svg", width: 70, height: 28 },
  { name: "FedEx", logo: "/fedex.svg", width: 90, height: 28 },
  { name: "Shopify", logo: "/shopify-logo.svg", width: 90, height: 32 },
  { name: "QuickBooks", logo: "/quickbooks-logo.svg", width: 110, height: 32 },
  { name: "OpenAI GPT", logo: "/gpt-logo.webp", width: 36, height: 36 },
  { name: "Claude", logo: "/claude-logo.svg", width: 36, height: 36 },
  { name: "Gemini", logo: "/gemini-logo.webp", width: 80, height: 28 },
];

const TrustedMarketplacesSection = () => {
  const doubled = [...marketplaces, ...marketplaces];

  return (
    <section
      className="py-16 sm:py-20 bg-white border-y border-slate-100"
      aria-label="Trusted by leading global marketplaces"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Trusted Worldwide
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Businesses Growing With CTAS
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Helping ecommerce brands, wholesalers, distributors, marketplaces and manufacturers
            automate their business across every major global platform.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            { value: "35+", label: "Marketplace APIs" },
            { value: "1.5M+", label: "Orders Synced" },
            { value: "40K+", label: "Products Managed" },
            { value: "99.9%", label: "API Reliability" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-5 px-4 rounded-xl border border-slate-100 bg-slate-50"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-8 sm:gap-12"
            style={{
              animation: "marquee 32s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((mp, i) => (
              <div
                key={`${mp.name}-${i}`}
                className="flex items-center justify-center bg-white border border-slate-100 rounded-xl px-6 py-4 shadow-sm min-w-[130px] h-[72px] hover:border-blue-200 hover:shadow-md transition-all duration-300 flex-shrink-0"
              >
                <Image
                  src={mp.logo}
                  alt={`${mp.name} marketplace integration`}
                  width={mp.width}
                  height={mp.height}
                  className="object-contain max-h-8 w-auto"
                  sizes="110px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedMarketplacesSection;
