import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at Ctas Info Services | Culture & Work Values",
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
};

export default function LifeAtCtasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
