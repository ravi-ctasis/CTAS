import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Digital Tech | Ctas Info Services",
  description: "Explore the industries Ctas Info Services LLP helps catalog. We build custom software, API integrations, and ecommerce tools for dynamic growth.",
  alternates: {
    canonical: "https://www.ctasis.com/industries",
    languages: {
      "en-US": "https://www.ctasis.com/industries",
      "en-IN": "https://www.ctasis.com/industries",
      "x-default": "https://www.ctasis.com/industries",
    },
  },
  openGraph: {
    title: "Industries We Serve | Digital Solutions | Ctas Info Services",
    description: "Explore the industries Ctas Info Services LLP helps catalog. We build custom software, API integrations, and ecommerce tools for dynamic growth.",
    url: "https://www.ctasis.com/industries",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Ctas Info Services LLP - Industries We Serve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Digital Solutions | Ctas Info Services",
    description: "Explore the industries Ctas Info Services LLP helps catalog. We build custom software, API integrations, and ecommerce tools for dynamic growth.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
