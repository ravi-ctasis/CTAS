import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Automated Product Data Extraction | Ctas Info Services",
    description:
        "Automates product data extraction, normalization, and organization from multiple online sources with elite accuracy.",
    keywords: [
        "automated data extraction",
        "product data normalization",
        "web scraping for e-commerce",
        "data organization platform",
        "online source data mining",
        "custom extraction software",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/automated-product-data-extraction-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/automated-product-data-extraction-platform",
            "en-IN": "https://www.ctasis.com/portfolios/automated-product-data-extraction-platform",
            "x-default": "https://www.ctasis.com/portfolios/automated-product-data-extraction-platform",
        },
    },
    openGraph: {
        title: "High-Accuracy Automated Data Extraction Platform | CTAS",
        description: "Transform raw web data into actionable business intelligence. Explore our custom extraction and normalization platform.",
        url: "https://www.ctasis.com/portfolios/automated-product-data-extraction-platform",
    },
};

export default function AutomatedProductDataExtractionPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
