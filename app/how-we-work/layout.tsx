import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work | Ctas Info Services LLP – Process, Workflow & Delivery",
  description:
    "Discover how Ctas Info Services LLP works — from discovery and planning to design, development, testing, and on-time project delivery through a transparent, efficient, and quality-driven process.",
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
