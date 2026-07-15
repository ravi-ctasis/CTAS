import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon SP-API Integration Services | Ctas Info Services",
  description: "Amazon SP-API integration services to automate product listings, orders, inventory, pricing, and reporting.",
  keywords: [
    "Amazon SP-API integration",
    "Amazon automation services",
    "selling partner api developers",
    "Amazon inventory management sync",
    "automated product listing Amazon",
    "Amazon order management API",
    "Amazon SP API integration services",
    "Amazon SP API development company",
    "Amazon SP API consultant",
    "Amazon SP API developer",
    "Amazon SP API implementation",
    "Amazon Selling Partner API services",
    "Amazon SP API custom development",
    "Amazon SP API automation",
    "Amazon SP API solutions",
    "Amazon SP API support services",
    "Amazon SP API advertising automation",
    "Automated Amazon inventory sync API",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/amazon-sp-api-integration",
    languages: {
      "en-US": "https://www.ctasis.com/services/amazon-sp-api-integration",
      "en-IN": "https://www.ctasis.com/services/amazon-sp-api-integration",
      "x-default": "https://www.ctasis.com/services/amazon-sp-api-integration",
    },
  },
  openGraph: {
    title: "Expert Amazon Selling Partner API (SP-API) Integration | Ctas",
    description: "Automate your Amazon business with custom SP-API solutions. From inventory sync to reporting, scale your operations with Ctas expert developers.",
    url: "https://www.ctasis.com/services/amazon-sp-api-integration",
    images: [
      {
        url: "/amazon-sp-api-banner.webp",
        width: 1200,
        height: 630,
        alt: "Amazon SP-API Integration Services",
      },
    ],
  },
};

export default function AmazonSPAPIIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
