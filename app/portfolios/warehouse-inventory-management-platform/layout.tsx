import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smart Warehouse Management Platform | Ctas Info Services",
    description:
        "An intelligent platform for real-time stock visibility and warehouse operations to prevent overselling.",
    keywords: [
        "smart warehouse management",
        "real-time stock visibility",
        "automated warehouse workflows",
        "inventory accuracy software",
        "e-commerce fulfillment platform",
        "warehouse operations tech",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/warehouse-inventory-management-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/warehouse-inventory-management-platform",
            "en-IN": "https://www.ctasis.com/portfolios/warehouse-inventory-management-platform",
            "x-default": "https://www.ctasis.com/portfolios/warehouse-inventory-management-platform",
        },
    },
    openGraph: {
    title: "Smart Warehouse Management Platform | Ctas Info Services",
    description: "An intelligent platform for real-time stock visibility and warehouse operations to prevent overselling.",
    url: "https://www.ctasis.com/portfolios/warehouse-inventory-management-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/warehouse-inventory-management-platform.webp",
        width: 1200,
        height: 630,
        alt: "Smart Warehouse Management Platform | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Warehouse Management Platform | Ctas Info Services",
    description: "An intelligent platform for real-time stock visibility and warehouse operations to prevent overselling.",
    images: ["https://www.ctasis.com/portfolio-banners/warehouse-inventory-management-platform.webp"],
  },
};

export default function WarehouseInventoryManagementPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
