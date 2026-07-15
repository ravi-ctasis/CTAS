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
        title: "Smart Production & Inventory Tracking System | CTAS",
        description: "Maintain full visibility across your production cycle. Explore our custom inventory tracking and audit history platform.",
        url: "https://www.ctasis.com/portfolios/production-inventory-tracking-platform",
    },
};

export default function ProductionInventoryTrackingPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
