import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Automated SKU & Identifier Framework | Ctas Info Services",
    description: "A unified system for generating global Master SKUs and managing identifiers (ASIN, EAN, UPC) across all marketplaces.",
    keywords: [
        "automated SKU generation",
        "marketplace identifier management",
        "ASIN EAN UPC tracking",
        "global master SKU system",
        "inventory consistency framework",
        "cross-marketplace SKU sync",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/automated-sku-identifier-framework",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/automated-sku-identifier-framework",
            "en-IN": "https://www.ctasis.com/portfolios/automated-sku-identifier-framework",
            "x-default": "https://www.ctasis.com/portfolios/automated-sku-identifier-framework",
        },
    },
    openGraph: {
    title: "Automated SKU & Identifier Framework | Ctas Info Services",
    description: "A unified system for generating global Master SKUs and managing identifiers (ASIN, EAN, UPC) across all marketplaces.",
    url: "https://www.ctasis.com/portfolios/automated-sku-identifier-framework",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/automated-sku-identifier-framework.webp",
        width: 1200,
        height: 630,
        alt: "Automated SKU & Identifier Framework | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated SKU & Identifier Framework | Ctas Info Services",
    description: "A unified system for generating global Master SKUs and managing identifiers (ASIN, EAN, UPC) across all marketplaces.",
    images: ["https://www.ctasis.com/portfolio-banners/automated-sku-identifier-framework.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
