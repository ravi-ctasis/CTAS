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
    title: "Automated Product Data Extraction | Ctas Info Services",
    description: "Automates product data extraction, normalization, and organization from multiple online sources with elite accuracy.",
    url: "https://www.ctasis.com/portfolios/automated-product-data-extraction-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/automated-product-data-extraction-platform.webp",
        width: 1200,
        height: 630,
        alt: "Automated Product Data Extraction | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Product Data Extraction | Ctas Info Services",
    description: "Automates product data extraction, normalization, and organization from multiple online sources with elite accuracy.",
    images: ["https://www.ctasis.com/portfolio-banners/automated-product-data-extraction-platform.webp"],
  },
};

export default function AutomatedProductDataExtractionPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
