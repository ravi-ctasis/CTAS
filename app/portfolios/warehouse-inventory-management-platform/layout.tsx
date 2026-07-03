import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smart Warehouse Management Platform | Ctas Info",
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
        title: "Enterprise Smart Warehouse & Inventory Management | CTAS",
        description: "Eliminate overselling and optimize stock with our intelligent warehouse platform. Real-time visibility for complex e-commerce operations.",
        url: "https://www.ctasis.com/portfolios/warehouse-inventory-management-platform",
    },
};

export default function WarehouseInventoryManagementPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
