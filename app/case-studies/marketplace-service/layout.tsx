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
    title: "Marketplace Platform Case Study | Ctas Info Services",
    description: "Ctas develops multi-vendor marketplace platforms: buyers and sellers connect seamlessly with advanced ecommerce capabilities.",
    url: "https://www.ctasis.com/case-studies/marketplace-service",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/marketplace-service.webp",
        width: 1200,
        height: 630,
        alt: "Marketplace Platform Case Study | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace Platform Case Study | Ctas Info Services",
    description: "Ctas develops multi-vendor marketplace platforms: buyers and sellers connect seamlessly with advanced ecommerce capabilities.",
    images: ["https://www.ctasis.com/marketplace-service.webp"],
  },
};

export default function MarketplaceServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
