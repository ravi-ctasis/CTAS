import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marketplace Platform Case Study | Ctas Info Services",
    description:
        "Ctas develops multi-vendor marketplace platforms: buyers and sellers connect seamlessly with advanced ecommerce capabilities.",
    keywords: [
        "multi-vendor marketplace case study",
        "service booking marketplace success",
        "peer-to-peer commerce platform",
        "marketplace developer results",
        "scalable vendor management solutions",
        "advanced checkout and booking tech",
    ],
    alternates: {
        canonical: "https://www.ctasis.com/case-studies/marketplace-service",
        languages: {
            "en-US": "https://www.ctasis.com/case-studies/marketplace-service",
            "en-IN": "https://www.ctasis.com/case-studies/marketplace-service",
            "x-default": "https://www.ctasis.com/case-studies/marketplace-service",
        },
    },
    openGraph: {
        title: "Scale Your Multi-Vendor Marketplace - Case Study | Ctas Info Services",
        description: "Connect buyers and sellers with a high-performance marketplace platform. A case study in advanced vendor management and booking tech.",
        url: "https://www.ctasis.com/case-studies/marketplace-service",
    },
};

export default function MarketplaceServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
