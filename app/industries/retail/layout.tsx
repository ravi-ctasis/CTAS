import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & E-commerce Solutions | Ctas Info Services",
  description:
    "Retail and e-commerce technology by Ctas: omnichannel platforms, POS, inventory, logistics, and supply chain analytics.",
  keywords: [
    "retail software solutions",
    "retail POS systems",
    "inventory management for retail",
    "retail logistics technology",
    "e-commerce retail integration",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/retail",
    languages: {
      "en-US": "https://www.ctasis.com/industries/retail",
      "en-IN": "https://www.ctasis.com/industries/retail",
      "x-default": "https://www.ctasis.com/industries/retail",
    },
  },
  openGraph: {
    title: "Retail & E-commerce Solutions | Ctas Info Services",
    description: "Retail and e-commerce technology by Ctas: omnichannel platforms, POS, inventory, logistics, and supply chain analytics.",
    url: "https://www.ctasis.com/industries/retail",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/service-banners/e-commerce-solutions.webp",
        width: 1200,
        height: 630,
        alt: "Retail & E-commerce Solutions | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & E-commerce Solutions | Ctas Info Services",
    description: "Retail and e-commerce technology by Ctas: omnichannel platforms, POS, inventory, logistics, and supply chain analytics.",
    images: ["https://www.ctasis.com/service-banners/e-commerce-solutions.webp"],
  },
};

export default function RetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
