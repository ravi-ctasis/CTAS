import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Ctas Info Journey, Mission & Vision",
  description:
    "Learn the story of Ctas Info Services LLP — our journey, mission, vision, and values that define us as a trusted digital innovation, AI, and e-commerce technology partner.",
  keywords: [
    "company founding",
    "IT growth story",
    "technology milestones Ahmedabad",
    "mission and vision",
    "Ctas Info history",
  ],
  openGraph: {
    title: "The Journey of Ctas Info Services | Mission & Innovation",
    description: "Explore our origins and the values that drive us. Learn how we became a global leader in AI and E-commerce solutions.",
    url: "https://www.ctasis.com/our-story",
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
