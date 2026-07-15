"use client";

import {
  Scan,
  Zap,
  Shield,
  CheckCircle,
  Code,
  Cpu,
  Globe,
  ArrowRight,
  Camera,
  Droplet,
  Scissors,
  Store,
  Package,
  FileCheck,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import MetaTags from "@/components/MetaTags";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const coreBenefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Decoding",
    desc: "WebAssembly-powered client-side processing decodes barcodes in under 20ms — no server round-trips, no latency.",
  },
  {
    icon: CheckCircle,
    title: "98.2% Scan Accuracy",
    desc: "Industry-leading accuracy across all common barcode formats, regardless of print quality or lighting conditions.",
  },
  {
    icon: Shield,
    title: "Damaged & Blurry Recognition",
    desc: "Advanced algorithms recover and decode low-quality, scratched, faded, or partially obscured barcodes reliably.",
  },
  {
    icon: Globe,
    title: "100% Browser-Based",
    desc: "Scan directly in any modern browser — no apps, no plugins, no software installations required.",
  },
  {
    icon: Shield,
    title: "Secure Scan History",
    desc: "All scan data is stored with AES encryption, with comprehensive audit trails for compliance-ready operations.",
  },
  {
    icon: Zap,
    title: "Lightweight Architecture",
    desc: "Minimal server dependency with efficient client-side design — scales from a single device to enterprise fleets.",
  },
];

const supportedFormats = [
  "Code 128", "Code 39", "EAN-13", "EAN-8",
  "UPC-A", "UPC-E", "QR Code", "DataMatrix",
  "PDF417", "Aztec", "ITF", "Codabar",
];

const useCases = [
  {
    icon: Package,
    title: "Warehousing & Distribution",
    desc: "Speed up receiving, picking, and shipping with real-time barcode scanning right from a browser tab.",
  },
  {
    icon: Store,
    title: "Retail & POS",
    desc: "Accelerate checkout flows and stock audits without dedicated scanning hardware.",
  },
  {
    icon: FileCheck,
    title: "Inventory Management",
    desc: "Maintain accurate stock counts with mobile or desktop scanning — no dedicated devices needed.",
  },
  {
    icon: Cpu,
    title: "Manufacturing & QA",
    desc: "Track production lots and perform quality control checks with fast in-browser scanning.",
  },
  {
    icon: Globe,
    title: "Logistics & Supply Chain",
    desc: "Track shipments, verify delivery, and manage carrier labels across your entire supply chain.",
  },
  {
    icon: BarChart3,
    title: "Asset Tracking",
    desc: "Register, locate, and manage company assets across multiple locations using barcode-based tracking.",
  },
];

const process = [
  { step: "01", icon: Camera, title: "Capture", desc: "Point your device camera at any barcode or upload an image file." },
  { step: "02", icon: Scan, title: "Detect", desc: "ScanPro automatically finds and locates supported barcode types in the frame." },
  { step: "03", icon: Zap, title: "Decode", desc: "WebAssembly engine decodes the barcode data in under 20ms with high confidence." },
  { step: "04", icon: CheckCircle, title: "Use", desc: "Copy, export, or pipe the decoded data directly into your business workflow." },
];

const resilienceCards = [
  {
    title: "Damaged Labels",
    desc: "Scratched, torn, or partially obscured labels decoded with confidence.",
    confidence: "99.02%",
    icon: Scissors,
    variant: "damaged" as const,
  },
  {
    title: "Code 128 Fast Detect",
    desc: "Instant decoding from camera captures and complex shipping labels.",
    confidence: "99.02%",
    icon: Camera,
    variant: "code128" as const,
  },
  {
    title: "Blurry Barcodes",
    desc: "Low-focus or motion-blurred captures decoded reliably every time.",
    confidence: "99.02%",
    icon: Droplet,
    variant: "blurry" as const,
  },
];

const techStack = [
  { category: "Website", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"], icon: Code },
  { category: "Scanner Engine", technologies: ["Angular", "WebAssembly", "ZXing", "QuaggaJS"], icon: Scan },
  { category: "Backend & Storage", technologies: ["Python", "Django", "PostgreSQL", "Redis"], icon: Cpu },
];

export default function CTASScanProPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <MetaTags
          title="CTAS ScanPro — High-Performance Browser-Based Barcode Scanner"
          description="CTAS ScanPro delivers 98.2% barcode scanning accuracy for retail, warehouses, and logistics. Real-time browser-based scanning powered by WebAssembly. No installation required."
          keywords={["barcode scanner", "browser based scanning", "inventory scanner", "warehouse scanning software", "high accuracy barcode reader", "CTAS ScanPro"]}
          ogImage="/products/scanpro-og.webp"
        />
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.ctasis.com" },
            { name: "Products", url: "https://www.ctasis.com/product" },
            { name: "CTAS ScanPro", url: "https://www.ctasis.com/product/ctas-scanpro" },
          ]}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0d1f3c] via-[#13345A] to-[#1e4d80] py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-medium mb-6">
                <Scan className="w-4 h-4" />
                Barcode Scanning Solution
              </span>
              <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                CTAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">ScanPro</span>
              </h1>
              <p className="text-white/70 text-lg mb-4 leading-relaxed">
                High-Performance Barcode Scanning — right from your browser.
              </p>
              <p className="text-white/60 text-base mb-8 leading-relaxed">
                Powered by WebAssembly for sub-20ms decoding, ScanPro achieves 98.2% accuracy across all barcode types — even on blurry, damaged, or faded labels. No software installation. No dedicated hardware. Just your browser.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "98.2%", label: "Accuracy" },
                  { value: "<20ms", label: "Decode Speed" },
                  { value: "12+", label: "Barcode Formats" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-white/60 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  See Features
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-1">
                <ScanLiveAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Resilience */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Real-World Resilience</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 max-w-2xl leading-tight">
                Decodes barcodes that <span className="text-blue-500">others give up on</span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl">
                ScanPro handles real-world imperfections — damaged labels, motion blur, low contrast — with the same high confidence as pristine barcodes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {resilienceCards.map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <card.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-green-50 text-green-600">DECODED</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                  <div className="bg-slate-50 rounded-xl h-36 flex items-center justify-center mb-4 border border-slate-100">
                    <BarcodeVisual variant={card.variant} />
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{card.desc}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-gray-500">Confidence</span>
                    <span className="font-bold text-gray-900">{card.confidence}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes ScanPro Powerful</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Every feature is built around one goal: the fastest, most accurate barcode scanning available directly in a browser.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreBenefits.map((f, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Supported Barcode Formats</h2>
            <p className="text-gray-500 mb-10">Comprehensive support across all industry-standard 1D and 2D barcode types</p>
            <div className="flex flex-wrap justify-center gap-3">
              {supportedFormats.map((fmt, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">How It Works</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
                Integrate in <span className="text-blue-500">minutes</span>, scale with confidence
              </h2>
              <p className="text-gray-500">Four simple steps to bring barcode scanning to any workflow</p>
            </div>
            <div className="relative space-y-6">
              {process.map((step, i) => (
                <div key={i} className="relative flex gap-6">
                  {i < process.length - 1 && (
                    <span className="absolute left-8 top-16 w-px h-[calc(100%+24px)] bg-gradient-to-b from-blue-300 to-transparent" />
                  )}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex flex-col items-center justify-center text-white shadow-md">
                      <step.icon className="w-5 h-5 mb-0.5" />
                      <span className="text-[10px] font-bold">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 px-6 py-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Every Industry</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">ScanPro fits wherever barcodes are used — from warehouses to retail floors to hospitals.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((u, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    <u.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Built with modern, proven technologies chosen for performance and reliability at scale.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((t, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <t.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{t.category}</h3>
                  <div className="space-y-2">
                    {t.technologies.map((tech, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#13345A] to-[#249BCA]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Scanning?</h2>
            <p className="text-white/70 text-xl mb-10">
              Get 98.2% accuracy barcode scanning in your browser — no hardware, no install, no hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#13345A] rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated live-scan hero widget                                     */
/* ------------------------------------------------------------------ */
function ScanLiveAnimation() {
  return (
    <div className="bg-white rounded-xl p-8 relative overflow-hidden">
      <style>{`
        @keyframes scanpro-sweep { 0% { top: 42%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 88%; opacity: 0; } }
        @keyframes scanpro-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes scanpro-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .scanpro-scanline { animation: scanpro-sweep 2.4s ease-in-out infinite; }
        .scanpro-live-dot { animation: scanpro-pulse 1.4s ease-in-out infinite; }
        .scanpro-float { animation: scanpro-float 3s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)", backgroundSize: "18px 18px" }} />

      <div className="relative bg-white rounded-xl border border-gray-100 shadow-md p-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="text-xs font-semibold text-gray-400 tracking-widest">SCANPRO / LIVE</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 scanpro-live-dot" />
            <span className="text-xs font-semibold text-blue-500">LIVE</span>
          </div>
        </div>

        <div className="relative bg-slate-50 rounded-lg border border-slate-100 h-64 overflow-hidden">
          <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-blue-400 rounded-tl-md z-10" />
          <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-blue-400 rounded-tr-md z-10" />
          <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-blue-400 rounded-bl-md z-10" />
          <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-blue-400 rounded-br-md z-10" />

          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-3 z-20">
            <div className="scanpro-float bg-white/95 backdrop-blur rounded-lg shadow-md px-3 py-2">
              <div className="text-[9px] font-semibold text-gray-400 tracking-wider">DETECTED</div>
              <div className="text-sm font-bold text-gray-900">Code 128</div>
              <div className="text-[10px] text-gray-500">99.02% confidence</div>
            </div>
            <div className="scanpro-float bg-white/95 backdrop-blur rounded-lg shadow-md px-3 py-2 text-right">
              <div className="text-[9px] font-semibold text-gray-400 tracking-wider">DECODE TIME</div>
              <div className="text-sm font-bold text-gray-900">18.0 <span className="text-xs font-normal">ms</span></div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-5 flex justify-center px-6">
            <svg viewBox="0 0 220 70" className="w-3/5 h-auto relative z-10">
              {Array.from({ length: 34 }).map((_, i) => {
                const widths = [2, 4, 1, 3, 2, 5, 1, 2, 4, 3];
                const w = widths[i % widths.length];
                const x = i * 6.4;
                return <rect key={i} x={x} y={5} width={w} height={60} fill="#1e293b" />;
              })}
            </svg>
          </div>

          <div className="scanpro-scanline absolute left-8 right-8 h-0.5 bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)] z-10" />
        </div>

        <div className="scanpro-float mt-4 inline-flex items-start gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
          <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <div>
            <div className="text-[9px] font-semibold text-gray-400 tracking-wider">BLUR RECOVERY</div>
            <div className="text-xs font-bold text-gray-900">AI-enhanced detection engine</div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="text-3xl font-bold text-gray-900 mb-1">98.2%</div>
        <div className="text-gray-600">Scan Accuracy</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Barcode illustrations for resilience cards                         */
/* ------------------------------------------------------------------ */
function BarcodeVisual({ variant }: { variant: "damaged" | "code128" | "blurry" }) {
  const bars = Array.from({ length: 26 }).map((_, i) => {
    const widths = [2, 4, 1, 3, 2, 5, 1, 2];
    return widths[i % widths.length];
  });
  return (
    <svg viewBox="0 0 200 60" className="w-4/5 h-auto">
      {bars.map((w, i) => {
        const x = i * 7.6;
        if (variant === "damaged" && (i === 10 || i === 11)) return null;
        return (
          <rect key={i} x={x} y={4} width={w} height={52} fill="#1e293b"
            opacity={variant === "blurry" ? 0.55 : 1}
            filter={variant === "blurry" ? "url(#blurFilter)" : undefined}
          />
        );
      })}
      {variant === "blurry" && (
        <defs><filter id="blurFilter"><feGaussianBlur stdDeviation="1.2" /></filter></defs>
      )}
      {variant === "damaged" && (
        <>
          <rect x="68" y="0" width="16" height="26" fill="#f8fafc" stroke="#e2e8f0" />
          <rect x="140" y="34" width="20" height="26" fill="#f8fafc" stroke="#e2e8f0" />
        </>
      )}
    </svg>
  );
}
