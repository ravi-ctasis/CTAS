"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const hubNodes = [
  { label: "Amazon", logo: "/amazon.svg", x: 50, y: 8, size: 88 },
  { label: "AliExpress", logo: "/aliexpress_logo.webp", x: 82, y: 28, size: 88 },
  { label: "FedEx", logo: "/fedex.svg", x: 82, y: 62, size: 88 },
  { label: "Bol.com", logo: "/bol.webp", x: 50, y: 82, size: 60 },
  { label: "DHL", logo: "/dhl-3.svg", x: 18, y: 62, size: 88 },
  { label: "Shopify", logo: "/shopify-logo.svg", x: 18, y: 28, size: 88 },
];

const stats = [
  { value: "35+", label: "Marketplace APIs" },
  { value: "1.5M+", label: "Orders Synced" },
  { value: "40K+", label: "Products Managed" },
  { value: "99.9%", label: "API Reliability" },
];

const orbitAngles = [0, 60, 120, 180, 240, 300];

const MarketplaceEcosystemSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden"
      aria-label="Enterprise marketplace ecosystem platform"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              Enterprise Marketplace Hub
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Connect Every Marketplace From One Intelligent Platform
            </h2>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
              CTAS enables enterprises to synchronize products, inventory, orders, shipments,
              invoices, pricing, warehouses and accounting systems across every marketplace using
              one centralized integration platform.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/services/marketplace"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Integrations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right - Animated Hub Diagram */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] mx-auto">

              {/* Outer rotating ring */}
              <div className="absolute inset-4 rounded-full border border-blue-200/60 animate-spin-slow" />
              {/* Inner ring */}
              <div className="absolute inset-16 rounded-full border border-slate-200/80 animate-spin-slow-reverse" />

              {/* Orbit dots — rotate as a group */}
              <div className="absolute inset-0 animate-spin-slow pointer-events-none sm:hidden">
                {orbitAngles.map((deg) => (
                  <div
                    key={deg}
                    className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-blue-400/70 shadow-sm shadow-blue-400/40"
                    style={{ transform: `rotate(${deg}deg) translateX(148px)` }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 animate-spin-slow pointer-events-none hidden sm:block">
                {orbitAngles.map((deg) => (
                  <div
                    key={`lg-${deg}`}
                    className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-blue-400/70 shadow-sm shadow-blue-400/40"
                    style={{ transform: `rotate(${deg}deg) translateX(208px)` }}
                  />
                ))}
              </div>

              {/* Connection lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
                aria-hidden="true"
              >
                {hubNodes.map((node) => (
                  <line
                    key={node.label}
                    x1="50%"
                    y1="50%"
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke="#93c5fd"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-dash"
                  />
                ))}
              </svg>

              {/* Hub nodes */}
              {hubNodes.map((node, i) => (
                <div
                  key={node.label}
                  className="absolute z-[2]"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="flex flex-col items-center gap-1.5 animate-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center w-16 h-12 sm:w-[72px] sm:h-14 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-300">
                    {node.logo ? (
                      <Image
                        src={node.logo}
                        alt={node.label}
                        width={node.size}
                        height={28}
                        className="object-contain max-h-6 w-auto px-1"
                        sizes="72px"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-slate-600">{node.label}</span>
                    )}
                  </div>
                  {node.logo && (
                    <span className="text-xs text-slate-400 font-medium">{node.label}</span>
                  )}
                  </div>
                </div>
              ))}

              {/* Center CTAS Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="absolute inset-0 -m-4 rounded-full bg-blue-400/10 animate-hub-pulse" aria-hidden="true" />
                <Image
                  src="/logo-icon.webp"
                  alt="CTAS Hub"
                  width={112}
                  height={112}
                  className="relative w-20 h-20 sm:w-28 sm:h-28 object-contain bg-transparent animate-float"
                  sizes="112px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceEcosystemSection;
