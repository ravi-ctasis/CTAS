import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Marketplace Management Services | Ctas Info Services",
  description:
    "Marketplace setup, optimization, and integration services from Ctas for Amazon, eBay, Walmart, and more.",
  keywords: [
    "multi-marketplace management",
    "Amazon SP-API integration",
    "Walmart marketplace management",
    "eBay store optimization",
    "e-commerce automation",
    "marketplace inventory sync",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/marketplace",
    languages: {
      "en-US": "https://www.ctasis.com/services/marketplace",
      "en-IN": "https://www.ctasis.com/services/marketplace",
      "x-default": "https://www.ctasis.com/services/marketplace",
    },
  },
  openGraph: {
    title: "Expert Multi-Marketplace Management & Automation | Ctas",
    description: "Comprehensive solutions for Amazon, Walmart, eBay, and global marketplaces. Scale your e-commerce with automation and expert management.",
    url: "https://www.ctasis.com/services/marketplace",
    images: [
      {
        url: "/marketplace-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Multi-Marketplace Management Services",
      },
    ],
  },
};

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
