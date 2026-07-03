import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & E-commerce Solutions | Ctas Info",
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
    title: "Transforming Retail with Omnichannel & Tech Solutions | Ctas",
    description: "Scale your retail business with integrated digital solutions. Expert developers for POS, inventory, and logistics.",
    url: "https://www.ctasis.com/industries/retail",
  },
};

export default function RetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
