import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Ctas Experts",
  description: "Meet the Ctas team: 20+ certified developers specializing in AI, web development, and e-commerce solutions.",
  keywords: [
    "CTAS leadership",
    "expert software developers",
    "engineering team India",
    "tech leadership",
    "meet the developers",
  ],
  openGraph: {
    title: "Meet the Expert Team Behind Ctas Info Services",
    description: "Highly skilled developers and innovators dedicated to delivering elite technology solutions.",
    url: "https://www.ctasis.com/team",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/life-at-ctas-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Meet the Expert Team Behind Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Expert Team Behind Ctas Info Services",
    description: "Highly skilled developers and innovators dedicated to delivering elite technology solutions.",
    images: ["https://www.ctasis.com/life-at-ctas-banner.jpg"],
  },
  alternates: {
    canonical: "https://www.ctasis.com/team",
    languages: {
      "en-US": "https://www.ctasis.com/team",
      "en-IN": "https://www.ctasis.com/team",
      "x-default": "https://www.ctasis.com/team",
    },
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

