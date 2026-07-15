import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Tech & Property Software | Ctas Info Services",
  description:
    "Property tech solutions from Ctas: listings, virtual tours, CRM, analytics, and transaction workflows for the real estate market.",
  keywords: [
    "Real Estate tech solutions",
    "PropTech software development",
    "virtual property tours",
    "real estate CRM systems",
    "property listing management",
    "real estate transaction automation",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/real-estate",
    languages: {
      "en-US": "https://www.ctasis.com/industries/real-estate",
      "en-IN": "https://www.ctasis.com/industries/real-estate",
      "x-default": "https://www.ctasis.com/industries/real-estate",
    },
  },
  openGraph: {
    title: "Real Estate Tech & Property Software | Ctas Info Services",
    description: "Property tech solutions from Ctas: listings, virtual tours, CRM, analytics, and transaction workflows for the real estate market.",
    url: "https://www.ctasis.com/industries/real-estate",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Real Estate Tech & Property Software | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Tech & Property Software | Ctas Info Services",
    description: "Property tech solutions from Ctas: listings, virtual tours, CRM, analytics, and transaction workflows for the real estate market.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
