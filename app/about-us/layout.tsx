import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI & E-commerce Solutions | Ctas Info Services",
  description: "Ctas Info Services LLP delivers AI web development, Amazon SP-API integration, and e-commerce automation solutions globally.",
  keywords: [
    "company history",
    "tech experts Ahmedabad",
    "IT service leadership",
    "mission and vision",
    "about Ctas Info Services",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.ctasis.com/about-us",
    languages: {
      "en-US": "https://www.ctasis.com/about-us",
      "en-IN": "https://www.ctasis.com/about-us",
      "x-default": "https://www.ctasis.com/about-us",
    },
  },
  openGraph: {
    title: "About Us | Ctas Info Services LLP – AI & E-commerce Solutions in India",
    description:
      "Ctas Info Services LLP is a trusted IT company in India delivering AI-powered web development, Amazon SP-API integration, and scalable e-commerce automation solutions for global businesses.",
    url: "https://www.ctasis.com/about-us",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
