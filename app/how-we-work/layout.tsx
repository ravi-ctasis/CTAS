import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Agile Working Process",
  description: "Discover how Ctas Info Services LLP delivers transparent, efficient, and quality-driven software solutions on time.",
  alternates: {
    canonical: "https://www.ctasis.com/how-we-work",
    languages: {
      "en-US": "https://www.ctasis.com/how-we-work",
      "en-IN": "https://www.ctasis.com/how-we-work",
      "x-default": "https://www.ctasis.com/how-we-work",
    },
  },
  openGraph: {
    title: "Our Agile Working Process",
    description: "Discover how Ctas Info Services LLP delivers transparent, efficient, and quality-driven software solutions on time.",
    url: "https://www.ctasis.com/how-we-work",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Our Agile Working Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Agile Working Process",
    description: "Discover how Ctas Info Services LLP delivers transparent, efficient, and quality-driven software solutions on time.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
