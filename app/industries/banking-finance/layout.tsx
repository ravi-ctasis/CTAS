import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking & Fintech Software Development | Ctas Info",
  description:
    "Secure banking and finance software development services including fintech solutions, payment processing, financial analytics, compliance systems, and digital banking platforms.",
  keywords: [
    "banking software development",
    "fintech solutions",
    " financial software",
    "payment processing",
    " digital banking",
    " financial analytics",
    " compliance systems",
    "banking IT solutions",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/banking-finance",
    languages: {
      "en-US": "https://www.ctasis.com/industries/banking-finance",
      "en-IN": "https://www.ctasis.com/industries/banking-finance",
      "x-default": "https://www.ctasis.com/industries/banking-finance",
    },
  },
  openGraph: {
    title: "Banking & Finance Software Development | Fintech Solutions | Ctas Info Services LLP",
    description:
      "Secure banking and finance software development services including fintech solutions, payment processing, financial analytics, and compliance systems.",
    type: "website",
    url: "https://www.ctasis.com/industries/banking-finance",
  },
};

export default function BankingFinancePage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
