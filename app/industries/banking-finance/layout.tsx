import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking & Fintech Software Development | Ctas Info Services",
  description: "Secure fintech and banking software development, including payment processing, financial analytics, and compliance systems.",
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
    title: "Banking & Fintech Software Development | Ctas Info Services",
    description: "Secure fintech and banking software development, including payment processing, financial analytics, and compliance systems.",
    url: "https://www.ctasis.com/industries/banking-finance",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/banking-finance.webp",
        width: 1200,
        height: 630,
        alt: "Banking & Fintech Software Development | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking & Fintech Software Development | Ctas Info Services",
    description: "Secure fintech and banking software development, including payment processing, financial analytics, and compliance systems.",
    images: ["https://www.ctasis.com/banking-finance.webp"],
  },
};

export default function BankingFinancePage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
