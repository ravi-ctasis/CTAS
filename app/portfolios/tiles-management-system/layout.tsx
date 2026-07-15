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
    title: "Tiles Management System | Portfolios | Ctas Info Services",
    description: "A centralized platform for managing tile production, domestic and international sales, and secure workflows.",
    url: "https://www.ctasis.com/portfolios/tiles-management-system",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/tiles-management-system.webp",
        width: 1200,
        height: 630,
        alt: "Tiles Management System | Portfolios | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiles Management System | Portfolios | Ctas Info Services",
    description: "A centralized platform for managing tile production, domestic and international sales, and secure workflows.",
    images: ["https://www.ctasis.com/portfolio-banners/tiles-management-system.webp"],
  },
};

export default function TilesManagementSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
