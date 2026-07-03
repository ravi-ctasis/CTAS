import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Tech Solutions | Digital Property | Ctas Info",
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
    title: "Innovative PropTech & Real Estate Software Solutions | Ctas",
    description: "Modernize property management and sales with custom tech. Expert developers for the real estate industry.",
    url: "https://www.ctasis.com/industries/real-estate",
  },
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
