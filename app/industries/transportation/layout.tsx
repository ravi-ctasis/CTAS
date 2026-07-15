import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation & Logistics Tech | Ctas Info Services",
  description:
    "Transportation and logistics software by Ctas: fleet management, TMS, route optimization, telematics, and real-time visibility.",
  keywords: [
    "transportation software solutions",
    "logistics management systems",
    "fleet tracking software",
    "TMS system development",
    "route optimization for tech",
    "supply chain visibility",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/transportation",
    languages: {
      "en-US": "https://www.ctasis.com/industries/transportation",
      "en-IN": "https://www.ctasis.com/industries/transportation",
      "x-default": "https://www.ctasis.com/industries/transportation",
    },
  },
  openGraph: {
    title: "Transportation & Logistics Tech | Ctas Info Services",
    description: "Transportation and logistics software by Ctas: fleet management, TMS, route optimization, telematics, and real-time visibility.",
    url: "https://www.ctasis.com/industries/transportation",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logistics.webp",
        width: 1200,
        height: 630,
        alt: "Transportation & Logistics Tech | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportation & Logistics Tech | Ctas Info Services",
    description: "Transportation and logistics software by Ctas: fleet management, TMS, route optimization, telematics, and real-time visibility.",
    images: ["https://www.ctasis.com/logistics.webp"],
  },
};

export default function TransportationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
