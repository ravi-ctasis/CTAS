import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intelligent Repricing System | Ctas Info Services",
    description:
        "An intelligent repricing engine that optimizes prices across millions of SKUs in real-time for Amazon and other marketplaces.",
    keywords: [
        "intelligent repricing engine",
        "real-time price optimization",
        "e-commerce profitability tool",
        "Amazon repricing software",
        "automated marketplace pricing",
        "dynamic pricing algorithms",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/intelligent-repricing-system",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/intelligent-repricing-system",
            "en-IN": "https://www.ctasis.com/portfolios/intelligent-repricing-system",
            "x-default": "https://www.ctasis.com/portfolios/intelligent-repricing-system",
        },
    },
    openGraph: {
    title: "Intelligent Repricing System | Ctas Info Services",
    description: "An intelligent repricing engine that optimizes prices across millions of SKUs in real-time for Amazon and other marketplaces.",
    url: "https://www.ctasis.com/portfolios/intelligent-repricing-system",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/intelligent-repricing-system.webp",
        width: 1200,
        height: 630,
        alt: "Intelligent Repricing System | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligent Repricing System | Ctas Info Services",
    description: "An intelligent repricing engine that optimizes prices across millions of SKUs in real-time for Amazon and other marketplaces.",
    images: ["https://www.ctasis.com/portfolio-banners/intelligent-repricing-system.webp"],
  },
};

export default function IntelligentRepricingSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
