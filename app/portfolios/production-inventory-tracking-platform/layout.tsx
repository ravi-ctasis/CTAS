import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smart Production & Inventory Tracking | Ctas Info Services",
    description:
        "A centralized solution for managing production stages from PI creation to shipments with full audit history.",
    keywords: [
        "production tracking platform",
        "smart inventory management",
        "PI creation software",
        "shipment tracking system",
        "audit history management",
        "centralized production tool",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/production-inventory-tracking-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/production-inventory-tracking-platform",
            "en-IN": "https://www.ctasis.com/portfolios/production-inventory-tracking-platform",
            "x-default": "https://www.ctasis.com/portfolios/production-inventory-tracking-platform",
        },
    },
    openGraph: {
    title: "Smart Production & Inventory Tracking | Ctas Info Services",
    description: "A centralized solution for managing production stages from PI creation to shipments with full audit history.",
    url: "https://www.ctasis.com/portfolios/production-inventory-tracking-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/production-inventory-tracking-platform.webp",
        width: 1200,
        height: 630,
        alt: "Smart Production & Inventory Tracking | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Production & Inventory Tracking | Ctas Info Services",
    description: "A centralized solution for managing production stages from PI creation to shipments with full audit history.",
    images: ["https://www.ctasis.com/portfolio-banners/production-inventory-tracking-platform.webp"],
  },
};

export default function ProductionInventoryTrackingPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
