import {
  Scan,
  Zap,
  Shield,
  CheckCircle,
  Code,
  Cpu,
  Globe,
  ArrowRight,
  Award,
  Clock,
  Store,
  Scissors,
  Camera,
  Droplet,
} from "lucide-react";
import Link from "next/link";
import MetaTags from "@/components/MetaTags";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const features = [
  {
    title: "High-Speed Barcode Decoding",
    description: "Lightning-fast barcode scanning powered by WebAssembly for minimal latency",
    icon: Zap,
  },
  {
    title: "98.2% Scan Accuracy",
    description: "Industry-leading accuracy even with blurry, faded, and damaged barcodes",
    icon: CheckCircle,
  },
  {
    title: "Blurry & Damaged Recognition",
    description: "Advanced algorithms decode low-quality and damaged barcodes reliably",
    icon: Shield,
  },
  {
    title: "Real-Time Browser-Based Scanning",
    description: "Scan directly in your browser without any software installation",
    icon: Globe,
  },
  {
    title: "Secure Scan History",
    description: "Encrypted data storage with comprehensive audit trails",
    icon: Shield,
  },
  {
    title: "Lightweight Architecture",
    description: "Fast client-side processing with minimal server dependency",
    icon: Zap,
  },
];

const techStack = [
  {
    category: "Website",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: Code,
  },
  {
    category: "Scanner",
    technologies: ["Angular", "WebAssembly", "Barcode Libraries"],
    icon: Scan,
  },
  {
    category: "Backend",
    technologies: ["Python", "Django", "PostgreSQL", "Redis"],
    icon: Cpu,
  },
];

const useCases = [
  {
    title: "Warehouses",
    description: "Streamline inventory management with rapid barcode scanning",
    icon: Globe,
  },
  {
    title: "Logistics & Supply Chain",
    description: "Track shipments and manage logistics operations efficiently",
    icon: ArrowRight,
  },
  {
    title: "Retail Stores",
    description: "Accelerate checkout and inventory processes",
    icon: Store,
  },
  {
    title: "Inventory Management",
    description: "Maintain accurate stock levels with real-time scanning",
    icon: CheckCircle,
  },
  {
    title: "Manufacturing Operations",
    description: "Track production and quality control with precision",
    icon: Cpu,
  },
];

// Updated to match the vertical timeline / "Integrate in minutes" design
const process = [
  {
    step: "01",
    title: "Upload or Capture",
    description: "Use your camera or upload an image containing a barcode.",
    icon: Camera,
  },
  {
    step: "02",
    title: "Detect Barcode",
    description: "ScanPro automatically locates supported barcodes in the image.",
    icon: Scan,
  },
  {
    step: "03",
    title: "Decode Instantly",
    description: "Extract barcode data quickly with reliable detection accuracy.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Use the Result",
    description: "Copy, verify, or integrate decoded data into your workflow.",
    icon: CheckCircle,
  },
];

// New "Real-World Resilience" section data
const resilienceCards = [
  {
    title: "Damaged",
    description: "Scratched, torn, partially occluded labels.",
    confidence: "99.02%",
    icon: Scissors,
    variant: "damaged",
  },
  {
    title: "Code 128 Fast Detect",
    description: "Instant decoding from camera captures and complex shipping labels.",
    confidence: "99.02%",
    icon: Camera,
    variant: "code128",
  },
  {
    title: "Blurry",
    description: "Low-focus captures decoded reliably.",
    confidence: "99.02%",
    icon: Droplet,
    variant: "blurry",
  },
];

export default function CTASScanProPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FA]">
      <Navigation />

      <main>
        <MetaTags
          title="CTAS ScanPro - High-Performance Barcode Scanning Solution"
          description="CTAS ScanPro delivers 98.2% barcode scanning accuracy for retail, warehousing, and logistics. Real-time browser-based scanning with secure data storage."
          keywords={["barcode scanning", "inventory management", "warehouse scanning", "retail barcode", "logistics tracking", "CTAS ScanPro"]}
          ogImage="/products/scanpro-og.webp"
        />
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.ctasis.com" },
            { name: "Products", url: "https://www.ctasis.com/product" },
            { name: "CTAS ScanPro", url: "https://www.ctasis.com/product/ctas-scanpro" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                  Barcode Scanning Solution
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  CTAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">ScanPro</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  High-Performance Barcode Scanning Solution with 98.2% decoding accuracy. Designed for retail, warehousing, logistics, and inventory management.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "98.2%", label: "Accuracy", icon: CheckCircle },
                    { number: "Real-time", label: "Scanning", icon: Zap },
                    { number: "Browser", label: "Based", icon: Globe },
                    { number: "Secure", label: "Storage", icon: Shield },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Animated live-scan card replacing the static hero image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-1">
                  <ScanLiveAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Resilience Section */}
        <section className="py-20 px-4 bg-[#F6F8FA]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="text-xs font-semibold tracking-widest text-blue-600 mb-3">
                REAL-WORLD RESILIENCE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-3xl leading-tight">
                Decodes barcodes that{" "}
                <span className="text-blue-400">others</span>{" "}
                <span className="text-blue-400">give up on</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {resilienceCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <card.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-600">
                      DECODED
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>

                  <div className="bg-slate-50 rounded-xl h-40 flex items-center justify-center mb-4 relative overflow-hidden border border-slate-100">
                    <BarcodeVisual variant={card.variant} />
                  </div>

                  <p className="text-gray-500 text-sm mb-4">{card.description}</p>

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

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Core Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features designed for high-volume business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section - vertical timeline style */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-semibold tracking-widest text-blue-600 mb-3">
                HOW IT WORKS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Integrate in <span className="text-blue-500">minutes</span>. Scale with confidence.
              </h2>
              <p className="text-gray-500">
                Four simple steps to transform your barcode scanning workflow
              </p>
            </div>

            <div className="relative">
              {process.map((step, index) => (
                <div key={index} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* connecting line */}
                  {index !== process.length - 1 && (
                    <span className="absolute left-8 top-16 w-px h-full bg-blue-200" />
                  )}

                  {/* number/icon bubble */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center text-white shadow-md">
                      <step.icon className="w-5 h-5 mb-0.5" />
                      <span className="text-[10px] font-bold">{step.step}</span>
                    </div>
                  </div>

                  {/* content card */}
                  <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{step.description}</p>
                    <div className="h-1 rounded-full bg-gradient-to-r from-blue-400 to-orange-300 w-full opacity-70" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold border border-blue-200 hover:shadow-md transition-all duration-300"
              >
                Ready to get started? <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with modern, scalable technologies
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {techStack.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed for diverse business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose CTAS ScanPro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Benefits that set us apart
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fast Client-Side Processing",
                  description: "Minimal latency with WebAssembly-powered decoding",
                  icon: Zap,
                },
                {
                  title: "Accurate Decoding",
                  description: "Reliable scanning of damaged and low-quality barcodes",
                  icon: CheckCircle,
                },
                {
                  title: "Lightweight & Scalable",
                  description: "Secure architecture built for high-volume operations",
                  icon: Shield,
                },
                {
                  title: "Reliable Performance",
                  description: "Consistent results for business-critical operations",
                  icon: Award,
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-orange-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Scanning Operations?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Get started with CTAS ScanPro and experience 98.2% accuracy in barcode scanning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
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
/*  Animated "SCANPRO / LIVE" hero widget (replaces static hero image) */
/* ------------------------------------------------------------------ */
function ScanLiveAnimation() {
  return (
    <div className="bg-white rounded-xl p-8 relative overflow-hidden">
      <style>{`
        @keyframes scanpro-sweep {
          0% { top: 42%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 88%; opacity: 0; }
        }
        @keyframes scanpro-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scanpro-float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .scanpro-scanline {
          animation: scanpro-sweep 2.4s ease-in-out infinite;
        }
        .scanpro-live-dot {
          animation: scanpro-pulse 1.4s ease-in-out infinite;
        }
        .scanpro-float {
          animation: scanpro-float-card 3s ease-in-out infinite;
        }
      `}</style>

      {/* dotted background grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative bg-white rounded-xl border border-gray-100 shadow-md p-5">
        {/* top bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="text-xs font-semibold text-gray-400 tracking-widest">
            SCANPRO / LIVE
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 scanpro-live-dot" />
            <span className="text-xs font-semibold text-blue-500">LIVE</span>
          </div>
        </div>

        {/* scan area */}
        <div className="relative bg-slate-50 rounded-lg border border-slate-100 h-64 overflow-hidden">
          {/* corner brackets */}
          <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-blue-400 rounded-tl-md z-10" />
          <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-blue-400 rounded-tr-md z-10" />
          <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-blue-400 rounded-bl-md z-10" />
          <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-blue-400 rounded-br-md z-10" />

          {/* top row: detected + decode time badges, side by side, out of barcode's way */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-3 z-20">
            <div className="scanpro-float bg-white/95 backdrop-blur rounded-lg shadow-md px-3 py-2 text-left">
              <div className="text-[9px] font-semibold text-gray-400 tracking-wider">DETECTED</div>
              <div className="text-sm font-bold text-gray-900">Code 128</div>
              <div className="text-[10px] text-gray-500">99.02% confidence</div>
            </div>

            <div className="scanpro-float bg-white/95 backdrop-blur rounded-lg shadow-md px-3 py-2 text-right">
              <div className="text-[9px] font-semibold text-gray-400 tracking-wider">DECODE TIME</div>
              <div className="text-sm font-bold text-gray-900">
                18.0 <span className="text-xs font-normal">ms</span>
              </div>
            </div>
          </div>

          {/* barcode pinned to the bottom half, clear of the badges above */}
          <div className="absolute inset-x-0 bottom-5 flex justify-center px-6">
            <svg viewBox="0 0 220 70" className="w-3/5 h-auto relative z-10">
              {Array.from({ length: 34 }).map((_, i) => {
                const widths = [2, 4, 1, 3, 2, 5, 1, 2, 4, 3];
                const w = widths[i % widths.length];
                const x = i * 6.4;
                return (
                  <rect key={i} x={x} y={5} width={w} height={60} fill="#1e293b" />
                );
              })}
            </svg>
          </div>

          {/* moving scan line, sweeps only across the barcode's band */}
          <div className="scanpro-scanline absolute left-8 right-8 h-0.5 bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)] z-10" />
        </div>

        {/* blur recovery footer badge */}
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
/*  Small barcode illustrations for the resilience cards               */
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
        // damaged: skip a couple bars and add a "torn" patch
        if (variant === "damaged" && (i === 10 || i === 11)) return null;
        return (
          <rect
            key={i}
            x={x}
            y={4}
            width={w}
            height={52}
            fill="#1e293b"
            opacity={variant === "blurry" ? 0.55 : 1}
            filter={variant === "blurry" ? "url(#blurFilter)" : undefined}
          />
        );
      })}
      {variant === "blurry" && (
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
      )}
      {variant === "damaged" && (
        <>
          <rect x="68" y="0" width="16" height="26" fill="#F6F8FA" stroke="#e2e8f0" />
          <rect x="140" y="34" width="20" height="26" fill="#F6F8FA" stroke="#e2e8f0" />
        </>
      )}
    </svg>
  );
}