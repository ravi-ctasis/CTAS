import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon Services | Store Setup, PPC & SEO | Ctas",
  description:
    "Ctas provides complete Amazon services including store setup, product listing, A+ content, Amazon SEO, PPC management, and brand growth solutions.",
  keywords: [
    // Core Services
    "Amazon store setup services",
    "Amazon PPC management",
    "Amazon SEO agency",
    "A+ content creation",
    "Amazon account management",
    "Amazon brand growth solutions",

    // MWS to SP-API Migration
    "Amazon MWS to SP API migration",
    "Migrate Amazon MWS to Selling Partner API",
    "Amazon SP API migration services",
    "Amazon MWS deprecation migration",
    "Amazon SP API upgrade services",

    // Seller Tools & SaaS
    "Amazon seller tool development",
    "Amazon marketplace software development",
    "Amazon SaaS application development",
    "Custom Amazon analytics software",
    "Amazon seller dashboard development",
    "Amazon seller automation software",

    // Advertising & PPC
    "Amazon Advertising API developer",
    "Amazon Ads API integration",
    "Amazon sponsored ads API services",
    "Amazon PPC automation software",
    "Amazon campaign optimization software",

    // Inventory & FBA
    "Amazon inventory management system",
    "Automated Amazon inventory system",
    "Amazon FBA inventory automation",
    "FBA inventory replenishment system",
    "Amazon inventory forecasting tools",

    // Product & Performance
    "Amazon product tracking API",
    "Amazon price monitoring system",
    "Amazon Buy Box monitoring software",
    "Amazon competitor price monitoring",
    "Amazon sales rank tracking software",

    // Vendor Central
    "Amazon Vendor Central API integration",
    "Vendor Central automation services",
    "Vendor Central reporting API",
    "Amazon Vendor inventory sync",

    // MCF & Omnichannel
    "Amazon multi-channel fulfillment sync",
    "Amazon order management system",
    "Multi-marketplace inventory sync",
    "Amazon MCF integration services",

    // Analytics & BI
    "Amazon seller data analytics software",
    "Amazon sales analytics dashboard",
    "Amazon performance reporting tools",
    "Amazon business intelligence tools",

    // Agency & Consulting
    "Amazon marketplace automation agency",
    "Amazon seller automation services",
    "Amazon API consulting services",
    "Amazon technical consulting",
    "Amazon software development agency",
    "SP-API migration consulting"
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/amazon-services",
    languages: {
      "en-US": "https://www.ctasis.com/services/amazon-services",
      "en-IN": "https://www.ctasis.com/services/amazon-services",
      "x-default": "https://www.ctasis.com/services/amazon-services",
    },
  },
  openGraph: {
    title: "Complete Amazon Store Management & Growth Services | Ctas",
    description: "Scale your Amazon business with expert PPC, SEO, and store management. From setup to A+ content, we handle it all.",
    url: "https://www.ctasis.com/services/amazon-services",
    images: [
      {
        url: "/amazon-services-banner.webp",
        width: 1200,
        height: 630,
        alt: "Amazon Store Setup and Management Services",
      },
    ],
  },
};

export default function AmazonServicesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
