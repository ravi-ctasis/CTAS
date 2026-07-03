"use client";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const metrics = [
  { value: "98%", label: "Automation Accuracy" },
  { value: "85%", label: "Manual Work Reduced" },
  { value: "3x", label: "Faster Product Creation" },
  { value: "24/7", label: "AI Processing" },
];

const capabilities = [
  "AI-Powered Product Enrichment & Translations",
  "Inventory Demand Forecasting",
  "Dynamic Pricing & Repricing Automation",
  "Intelligent Customer Support Automation",
  "AI Content Generation at Scale",
  "Predictive Analytics & Business Insights",
];

const AISection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-slate-900 text-white overflow-hidden relative"
      aria-label="AI and machine learning automation solutions"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
              Artificial Intelligence
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Automate Everything With Artificial Intelligence
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              Build intelligent commerce workflows using AI-powered product enrichment, translations,
              inventory prediction, dynamic pricing, customer support, content generation and analytics.
            </p>

            {/* Capabilities */}
            <ul className="space-y-3 mb-10">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </span>
                  <span className="text-sm text-slate-300">{cap}</span>
                </li>
              ))}
            </ul>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{m.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/ai-ml"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                Explore AI Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white border border-white/30 text-sm font-semibold rounded-xl hover:border-white/60 transition-colors duration-200"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Right - Terminal / Dashboard Mockup */}
          <div className="relative">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-slate-500 font-mono">ctas-ai-engine.ts</span>
              </div>

              {/* Code / Activity blocks */}
              <div className="p-5 sm:p-6 space-y-4 font-mono text-sm">
                {/* Product generator block */}
                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">AI Product Generator</span>
                    <span className="text-xs font-semibold text-cyan-400">Running...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-xs">✓</span>
                      <span className="text-xs text-slate-300">Analyzing product catalog</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-xs">✓</span>
                      <span className="text-xs text-slate-300">Generating SEO titles (EN, DE, NL)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 text-xs">⟳</span>
                      <span className="text-xs text-slate-400">Enriching 2,340 descriptions...</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-slate-700 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: "76%", animation: "progress-pulse 3s ease-in-out infinite" }}
                    />
                  </div>
                  <div className="text-right text-xs text-slate-500 mt-1">76% complete</div>
                </div>

                {/* Translation Engine */}
                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Translation Engine</div>
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md">EN</span>
                    <span className="text-slate-500">→</span>
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-md">DE</span>
                    <span className="text-slate-500">→</span>
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-md">NL</span>
                    <span className="text-slate-500">→</span>
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-md">FR</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">12 languages supported</div>
                </div>

                {/* Pricing Intelligence */}
                <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Pricing Intelligence</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Products", value: "40K+" },
                      { label: "Rules Active", value: "847" },
                      { label: "Avg. Margin", value: "+12%" },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="text-sm font-bold text-white">{item.value}</div>
                        <div className="text-xs text-slate-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live feed */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  AI engine processing 24/7 — last sync 2s ago
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Live
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-pulse {
          0%, 100% { width: 76%; }
          50% { width: 82%; }
        }
      `}</style>
    </section>
  );
};

export default AISection;
