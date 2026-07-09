"use client";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Executive Dashboard with Real-Time KPIs",
  "Inventory Forecasting & Demand Planning",
  "Sales Analytics Across All Channels",
  "AI-Powered Business Recommendations",
  "Live API Health Monitoring",
  "Warehouse KPIs & Fulfillment Metrics",
];

const BusinessIntelligenceSection = () => {
  return (
    <section
      className="py-10 sm:py-12 lg:py-14 bg-slate-50"
      aria-label="Business intelligence and real-time analytics dashboard"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
              Business Intelligence
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Real-Time Business Insights Across Every Channel
            </h2>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
              Monitor every marketplace, warehouse, ERP, sales channel and logistics provider from
              one intelligent dashboard. Get the clarity your business needs to act fast and grow
              confidently.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </span>
                  <span className="text-sm text-slate-600">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/marketplace"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 text-sm font-semibold rounded-xl hover:border-blue-300 transition-colors duration-200"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Right - Dashboard Image */}
          <div>
            <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xl">
              <Image
                src="/Business-Analytics-Dashboard.png"
                alt="CTAS Real-Time Business Analytics Dashboard showing sales, inventory, API monitoring and warehouse KPIs"
                width={900}
                height={560}
                className="rounded-xl w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority={false}
              />
            </div>

            {/* Quick stats below image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: "99.1%", label: "Order Accuracy" },
                { value: "98.7%", label: "API Uptime" },
                { value: "19.3s", label: "Avg. Processing" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-slate-200 rounded-xl p-3 text-center"
                >
                  <div className="text-lg font-bold text-slate-900">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligenceSection;
