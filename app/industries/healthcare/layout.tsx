import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Healthcare Software Development | HIPAA Compliant | Ctas Info",
  description:
    "Healthcare software development services including HIPAA compliant systems, electronic health records, telemedicine platforms, and medical data security solutions.",
  keywords: [
    "healthcare software development",
    " HIPAA compliant systems",
    "electronic health records",
    "telemedicine platforms",
    " medical software",
    "healthcare IT solutions",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/healthcare",
    languages: {
      "en-US": "https://www.ctasis.com/industries/healthcare",
      "en-IN": "https://www.ctasis.com/industries/healthcare",
      "x-default": "https://www.ctasis.com/industries/healthcare",
    },
  },
  openGraph: {
    title:
      "Healthcare Software Development | HIPAA Compliant Solutions | Ctas Info Services LLP",
    description:
      "Healthcare software development services including HIPAA compliant systems, electronic health records, telemedicine platforms.",
    type: "website",
    url: "https://www.ctasis.com/industries/healthcare",
  },
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
