import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazon Product Management Automation | Ctas Info Services",
    description:
        "All-in-one Amazon product management automation software: AIrepricing, smart inventory control, and multi-marketplace integration.",
    keywords: [
        "Amazon product management software",
        "AI repricing tool for Amazon",
        "smart inventory control platform",
        "multi-marketplace integration sell",
        "Amazon automation for enterprises",
        "automated seller central tools",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/portfolios/amazon-product-management-automation-platform",
        languages: {
            "en-US": "https://www.ctasis.com/portfolios/amazon-product-management-automation-platform",
            "en-IN": "https://www.ctasis.com/portfolios/amazon-product-management-automation-platform",
            "x-default": "https://www.ctasis.com/portfolios/amazon-product-management-automation-platform",
        },
    },
    openGraph: {
    title: "Amazon Product Management Automation | Ctas Info Services",
    description: "All-in-one Amazon product management automation software: AIrepricing, smart inventory control, and multi-marketplace integration.",
    url: "https://www.ctasis.com/portfolios/amazon-product-management-automation-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/portfolio-banners/amazon-product-management-automation-platform.webp",
        width: 1200,
        height: 630,
        alt: "Amazon Product Management Automation | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Product Management Automation | Ctas Info Services",
    description: "All-in-one Amazon product management automation software: AIrepricing, smart inventory control, and multi-marketplace integration.",
    images: ["https://www.ctasis.com/portfolio-banners/amazon-product-management-automation-platform.webp"],
  },
};

export default function AmazonProductManagementAutomationPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
