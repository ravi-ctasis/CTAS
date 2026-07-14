"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const primaryServices = [
  {
    name: "Amazon SP-API",
    logo: "/amazon.svg",
    logoAlt: "Amazon Selling Partner API integration",
    logoWidth: 100,
    logoHeight: 32,
    features: [
      "Listings & Catalog Management",
      "Inventory & Order Sync",
      "Feeds, Reports & Financial Reconciliation",
      "Vendor Central & Seller Central",
    ],
    link: "/services/amazon-sp-api-integration",
    popular: true,
  },
  {
    name: "Bol.com",
    logo: "/bol.webp",
    logoAlt: "Bol.com marketplace integration",
    logoWidth: 60,
    logoHeight: 32,
    features: [
      "Retailer API & Offers",
      "Inventory & Order Management",
      "Shipments & Returns",
      "Pricing Automation",
    ],
    link: "/services/bol-com",
    popular: false,
  },
  {
    name: "Kaufland",
    logo: "/kaufland.webp",
    logoAlt: "Kaufland global marketplace integration",
    logoWidth: 110,
    logoHeight: 36,
    features: [
      "Product Feed & Catalog",
      "Order Processing & Fulfilment",
      "Returns Management",
      "Pricing & Inventory Sync",
    ],
    link: "/services/kaufland",
    popular: false,
  },
  {
    name: "Shopify",
    logo: "/shopify-logo.svg",
    logoAlt: "Shopify e-commerce integration",
    logoWidth: 100,
    logoHeight: 32,
    features: [
      "Products & Collections Sync",
      "Customer & Order Management",
      "Inventory Automation",
      "Custom App Development",
    ],
    link: "/services/shopify",
    popular: true,
  },
  {
    name: "Fnac",
    logo: "/fnac.webp",
    logoAlt: "Fnac marketplace integration",
    logoWidth: 90,
    logoHeight: 32,
    features: [
      "Product Catalog Management",
      "Order & Shipment Sync",
      "Pricing & Offers",
      "Returns Handling",
    ],
    link: "/services/fnac",
    popular: false,
  },
];

const secondaryServices = [
  {
    name: "TikTok Shop",
    logo: "/tiktok.webp",
    logoAlt: "TikTok Shop marketplace integration",
    logoWidth: 110,
    logoHeight: 36,
    description:
      "Launch and automate your TikTok Shop presence — product listings, live-commerce sync, order management and fulfilment automation for social commerce.",
    features: ["Product Listings", "Live Commerce Sync", "Order Management", "Fulfilment Automation"],
    link: "/services/tiktok-shop",
  },
  {
    name: "Walmart",
    logo: "/walmart-logo.svg",
    logoAlt: "Walmart marketplace integration",
    logoWidth: 110,
    logoHeight: 32,
    description:
      "Manage Walmart listings, inventory, pricing and fulfilment automatically with our certified integration platform.",
    features: ["Feed Upload", "Order Sync", "Inventory", "Returns Processing"],
    link: "/services/walmart-marketplace",
  },
  {
    name: "Worten",
    logo: "/worten-logo.webp",
    logoAlt: "Worten marketplace integration",
    logoWidth: 110,
    logoHeight: 36,
    description:
      "Integrate with Worten, the leading electronics & home appliance marketplace in Portugal and Spain, with full catalogue and order automation.",
    features: ["Catalogue Sync", "Order Automation", "Pricing Rules", "Inventory Management"],
    link: "/services/worten",
  },
  {
    name: "Allegro",
    logo: "/allegro_logo.svg",
    logoAlt: "Allegro marketplace integration",
    logoWidth: 100,
    logoHeight: 32,
    description:
      "Poland's largest marketplace — automate offers, product catalogue, order processing, payments and invoicing with real-time synchronization.",
    features: ["Offer Management", "Order Processing", "Invoice Automation", "Real-Time Sync"],
    link: "/services/allegro",
  },
  {
    name: "Rakuten",
    logo: "/rakuten.webp",
    logoAlt: "Rakuten global marketplace integration",
    logoWidth: 110,
    logoHeight: 32,
    description:
      "Sell across Rakuten's global marketplace with automated listings, order management, inventory sync and returns processing for international reach.",
    features: ["Listings Sync", "Order Management", "Inventory Sync", "Returns Processing"],
    link: "/services/rakuten",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="py-10 sm:py-12 lg:py-14 section-bg-dots"
      aria-label="Marketplace integration and domain solutions"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Our Core Services
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Supporting Every Major{" "}
            <span className="text-blue-600">Global Marketplace</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re selling books, electronics, furniture, fashion or industrial products,
            CTAS provides deep marketplace integration expertise across 35+ platforms.
          </p>
        </div>

        {/* Primary Services - 5 Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {primaryServices.map((service) => (
            <article
              key={service.name}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              {service.popular && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-blue-600 text-white px-2.5 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div className="h-10 flex items-center mb-5">
                <Image
                  src={service.logo}
                  alt={service.logoAlt}
                  width={service.logoWidth}
                  height={service.logoHeight}
                  className="object-contain max-h-8 w-auto"
                  sizes="100px"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-4" itemProp="name">
                {service.name} Integration
              </h3>

              <ul className="space-y-2 flex-1 mb-5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                aria-label={`Learn more about ${service.name} integration`}
              >
                Explore
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>

        {/* Secondary Services - 5 Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {secondaryServices.map((service) => (
            <article
              key={service.name}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="h-10 flex items-center mb-4">
                <Image
                  src={service.logo}
                  alt={service.logoAlt}
                  width={service.logoWidth}
                  height={service.logoHeight}
                  className="object-contain max-h-8 w-auto"
                  sizes="100px"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3" itemProp="name">
                {service.name}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1" itemProp="description">
                {service.description}
              </p>

              <ul className="flex flex-wrap gap-1.5 mb-5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs font-medium bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                aria-label={`Learn more about ${service.name}`}
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/services/marketplace"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-200"
          >
            View All Integration Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
