"use client";
import {
  ShoppingCart,
  Factory,
  Truck,
  CreditCard,
  Heart,
  GraduationCap,
  BookOpen,
  Boxes,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: ShoppingCart,
    name: "Ecommerce & Retail",
    description:
      "End-to-end marketplace integrations, ERP connectivity, inventory automation and AI-powered product management for online retailers and D2C brands.",
    highlights: ["Marketplace API Integration", "Inventory Sync", "Order Automation"],
    href: "/industries/retail",
    color: "blue",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Production tracking, warehouse management, logistics integration and ERP-connected workflows that streamline factory-to-marketplace operations.",
    highlights: ["ERP Integration", "Production Tracking", "Logistics Automation"],
    href: "/industries/enterprise",
    color: "slate",
  },
  {
    icon: Truck,
    name: "Distribution & Logistics",
    description:
      "Supply chain automation, shipment tracking, last-mile delivery integration and multi-carrier management for distributors and 3PLs.",
    highlights: ["Supply Chain Automation", "Carrier Integration", "Shipment Tracking"],
    href: "/industries/transportation",
    color: "slate",
  },
  {
    icon: CreditCard,
    name: "FinTech",
    description:
      "PCI DSS and GDPR-compliant payment integrations, financial reconciliation, settlement reporting and secure API workflows for financial services.",
    highlights: ["PCI DSS Compliance", "Payment Integration", "Financial Reporting"],
    href: "/industries/banking-finance",
    color: "slate",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "HIPAA-compliant healthcare platforms, medical record management, patient portals and secure data exchange solutions for healthcare providers.",
    highlights: ["HIPAA Compliance", "Patient Portals", "Medical Data Exchange"],
    href: "/industries/healthcare",
    color: "slate",
  },
  {
    icon: GraduationCap,
    name: "EdTech",
    description:
      "Learning management systems, student portals, course delivery platforms and educational automation tools for institutions and e-learning businesses.",
    highlights: ["LMS Development", "Student Portals", "Course Automation"],
    href: "/industries/education",
    color: "slate",
  },
  {
    icon: BookOpen,
    name: "Publishing & Media",
    description:
      "Digital catalogue management, multi-channel publishing automation, book marketplace integrations for publishers, bookstores and media companies.",
    highlights: ["Catalogue Management", "Multi-Channel Publishing", "Marketplace Sync"],
    href: "/industries/enterprise",
    color: "slate",
  },
  {
    icon: Boxes,
    name: "Wholesale & B2B",
    description:
      "B2B portals, bulk order management, pricing tier automation and ERP-connected wholesale platforms for distributors and manufacturers.",
    highlights: ["B2B Portal", "Bulk Order Management", "ERP Connectivity"],
    href: "/industries/enterprise",
    color: "slate",
  },
];

const colorMap: Record<string, { bg: string; icon: string; highlight: string }> = {
  blue: {
    bg: "bg-blue-50 border-blue-200 hover:border-blue-400",
    icon: "bg-blue-600 text-white",
    highlight: "bg-blue-50 text-blue-700 border-blue-200",
  },
  slate: {
    bg: "bg-white border-slate-200 hover:border-blue-300",
    icon: "bg-slate-100 text-slate-700",
    highlight: "bg-slate-50 text-slate-600 border-slate-200",
  },
};

const IndustriesSection = () => {
  return (
    <section
      className="py-10 sm:py-12 lg:py-14 bg-white"
      aria-label="Industries we serve"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Industries
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Helping Every Industry <span className="text-blue-600">Go Digital</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From ecommerce startups to multinational manufacturers, we build digital ecosystems
            that automate complex operations and drive measurable growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const colors = colorMap[industry.color];
            return (
              <article
                key={industry.name}
                className={`border rounded-2xl p-6 transition-all duration-300 hover:shadow-md flex flex-col ${colors.bg}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Thing"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${colors.icon}`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2" itemProp="name">
                  {industry.name}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1" itemProp="description">
                  {industry.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 mb-5">
                  {industry.highlights.map((h) => (
                    <li
                      key={h}
                      className={`text-xs font-medium border px-2.5 py-1 rounded-full ${colors.highlight}`}
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href={industry.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                  aria-label={`Learn about our ${industry.name} solutions`}
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Don&apos;t see your industry?
            </h3>
            <p className="text-slate-500 text-sm sm:text-base">
              We work with businesses across all verticals. Let&apos;s discuss your specific requirements.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
