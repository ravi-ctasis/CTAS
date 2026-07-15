import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at CTAS: Careers & Team",
  description:
    "Discover Life at Ctas — a culture built on innovation, learning, collaboration, and growth. Explore how our team works, learns, and builds the future together.",
  alternates: {
    canonical: "https://www.ctasis.com/life-at-ctas",
    languages: {
      "en-US": "https://www.ctasis.com/life-at-ctas",
      "en-IN": "https://www.ctasis.com/life-at-ctas",
      "x-default": "https://www.ctasis.com/life-at-ctas",
    },
  },
  openGraph: {
    title: "Life at CTAS: Careers & Team",
    description: "Discover Life at Ctas — a culture built on innovation, learning, collaboration, and growth. Explore how our team works, learns, and builds the future together.",
    url: "https://www.ctasis.com/life-at-ctas",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Life at CTAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life at CTAS: Careers & Team",
    description: "Discover Life at Ctas — a culture built on innovation, learning, collaboration, and growth. Explore how our team works, learns, and builds the future together.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
};

export default function LifeAtCtasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
