import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intelligent Repricing System | E-Commerce | Ctas Info",
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
        title: "Intelligent Repricing Engine - Case Study | CTAS",
        description: "Maximize margins with our real-time repricing system. Explore how we automate price optimization for millions of SKUs.",
        url: "https://www.ctasis.com/portfolios/intelligent-repricing-system",
    },
};

export default function IntelligentRepricingSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
