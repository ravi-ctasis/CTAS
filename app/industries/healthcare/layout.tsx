import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "HIPAA Healthcare Software Development | Ctas Info Services",
  description: "HIPAA-compliant healthcare software development services, including telemedicine platforms and medical data solutions.",
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
    title: "HIPAA Healthcare Software Development | Ctas Info Services",
    description: "HIPAA-compliant healthcare software development services, including telemedicine platforms and medical data solutions.",
    url: "https://www.ctasis.com/industries/healthcare",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/healthcare.webp",
        width: 1200,
        height: 630,
        alt: "HIPAA Healthcare Software Development | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA Healthcare Software Development | Ctas Info Services",
    description: "HIPAA-compliant healthcare software development services, including telemedicine platforms and medical data solutions.",
    images: ["https://www.ctasis.com/healthcare.webp"],
  },
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
