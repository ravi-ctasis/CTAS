import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web Dev, AI & E-commerce | Ctas Info",
  description: "Explore our diverse portfolio of cutting-edge projects including Amazon SP-API integrations, AI web solutions, and e-commerce platforms.",
  keywords: [
    "Ctas portfolio",
    "web development projects",
    "AI software case studies",
    "Amazon SP-API projects",
    "e-commerce automation portfolio",
    "enterprise software examples",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/portfolios",
    languages: {
      "en-US": "https://www.ctasis.com/portfolios",
      "en-IN": "https://www.ctasis.com/portfolios",
      "x-default": "https://www.ctasis.com/portfolios",
    },
  },
  openGraph: {
    title: "Portfolio | Web Dev, AI & E-commerce | Ctas Info",
    description: "Explore our diverse portfolio of cutting-edge projects including Amazon SP-API integrations, AI web solutions, and e-commerce platforms.",
    url: "https://www.ctasis.com/portfolios",
    type: "website",
  },
};

export default function PortfoliosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
