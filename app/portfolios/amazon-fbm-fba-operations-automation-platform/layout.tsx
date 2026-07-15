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
    title: "Amazon FBA & FBM Automation Platform | Ctas Info Services",
    description: "A centralized, web-based platform for managing Amazon FBA and FBM operations: inventory, orders, shipments, and performance analytics.",
    url: "https://www.ctasis.com/portfolios/amazon-fbm-fba-operations-automation-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/amazon-fbm-fba-operations-automation-platform.webp",
        width: 1200,
        height: 630,
        alt: "Amazon FBA & FBM Automation Platform | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon FBA & FBM Automation Platform | Ctas Info Services",
    description: "A centralized, web-based platform for managing Amazon FBA and FBM operations: inventory, orders, shipments, and performance analytics.",
    images: ["https://www.ctasis.com/portfolio-banners/amazon-fbm-fba-operations-automation-platform.webp"],
  },
};

export default function AmazonFbaFbmOperationsAutomationPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
