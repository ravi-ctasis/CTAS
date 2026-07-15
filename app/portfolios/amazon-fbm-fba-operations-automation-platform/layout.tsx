import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazon FBA & FBM Automation Platform | Ctas Info Services",
    description:
        "A centralized, web-based platform for managing Amazon FBA and FBM operations: inventory, orders, shipments, and performance analytics.",
    keywords: [
        "Amazon FBA automation",
        "FBM operations platform",
        "inventory management system",
        "automated shipping labels",
        "Amazon seller tools",
        "order fulfillment automation",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/amazon-fbm-fba-operations-automation-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/amazon-fbm-fba-operations-automation-platform",
            "en-IN": "https://www.ctasis.com/portfolios/amazon-fbm-fba-operations-automation-platform",
            "x-default": "https://www.ctasis.com/portfolios/amazon-fbm-fba-operations-automation-platform",
        },
    },
    openGraph: {
        title: "Amazon FBA & FBM Automation Platform - Case Study | CTAS",
        description: "Explore our centralized platform for scaling Amazon selling operations. Automated inventory, orders, and performance tracking.",
        url: "https://www.ctasis.com/portfolios/amazon-fbm-fba-operations-automation-platform",
    },
};

export default function AmazonFbaFbmOperationsAutomationPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
