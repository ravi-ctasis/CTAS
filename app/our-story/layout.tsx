import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story: History & Growth",
  description: "Learn the story of Ctas Info Services LLP — our journey, mission, vision, and core values that drive our team forward.",
  keywords: [
    "company founding",
    "IT growth story",
    "technology milestones Ahmedabad",
    "mission and vision",
    "Ctas Info Services history",
  ],
  openGraph: {
    title: "Our Story: History & Growth",
    description: "Explore our origins and the values that drive us. Learn how we became a global leader in AI and E-commerce solutions.",
    url: "https://www.ctasis.com/our-story",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Our Story: History & Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story: History & Growth",
    description: "Explore our origins and the values that drive us. Learn how we became a global leader in AI and E-commerce solutions.",
    images: ["https://www.ctasis.com/logo-icon.webp"],
  },
  alternates: {
    canonical: "https://www.ctasis.com/our-story",
    languages: {
      "en-US": "https://www.ctasis.com/our-story",
      "en-IN": "https://www.ctasis.com/our-story",
      "x-default": "https://www.ctasis.com/our-story",
    },
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
