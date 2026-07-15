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
    title: "Advanced Logistics & Transportation Software | Ctas Info Services",
    description: "Optimize your fleet and logistics with real-time tracking and route intelligence. Expert solutions for the transportation industry.",
    url: "https://www.ctasis.com/industries/transportation",
  },
};

export default function TransportationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
