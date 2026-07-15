import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process & Technical Delivery | Ctas Info Services",
  description: "Discover how Ctas Info Services LLP delivers transparent, efficient, and quality-driven software solutions on time.",
  alternates: {
    canonical: "https://www.ctasis.com/how-we-work",
    languages: {
      "en-US": "https://www.ctasis.com/how-we-work",
      "en-IN": "https://www.ctasis.com/how-we-work",
      "x-default": "https://www.ctasis.com/how-we-work",
    },
  },
};

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
