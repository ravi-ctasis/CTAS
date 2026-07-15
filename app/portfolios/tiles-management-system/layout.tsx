import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tiles Management System | Portfolios | Ctas Info Services",
    description:
        "A centralized platform for managing tile production, domestic and international sales, and secure workflows.",
    keywords: [
        "tiles management system",
        "manufacturing sales platform",
        "domestic sales tracking",
        "international trade software",
        "buyer seller management",
        "tiles industry ERP",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/tiles-management-system",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/tiles-management-system",
            "en-IN": "https://www.ctasis.com/portfolios/tiles-management-system",
            "x-default": "https://www.ctasis.com/portfolios/tiles-management-system",
        },
    },
    openGraph: {
        title: "Enterprise Tiles Production & Sales Management | CTAS",
        description: "Centralize your tiles business with our custom ERP. Full visibility into production and international sales workflows.",
        url: "https://www.ctasis.com/portfolios/tiles-management-system",
    },
};

export default function TilesManagementSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
