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
        title: "Amazon Product Management Automation - Case Study | CTAS",
        description: "Scale your Amazon business with AI-driven repricing and smart inventory. Explore our custom multi-marketplace management platform.",
        url: "https://www.ctasis.com/portfolios/amazon-product-management-automation-platform",
    },
};

export default function AmazonProductManagementAutomationPlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
