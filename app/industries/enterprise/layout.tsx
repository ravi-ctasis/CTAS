import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise ERP & CRM Software | Ctas Info Services",
  description:
    "Enterprise-grade software, ERP, CRM, analytics, and cloud solutions from Ctas tailored for global organizations and large enterprises.",
  keywords: [
    "enterprise software development",
    "custom ERP solutions",
    "CRM implementation services",
    "enterprise cloud migration",
    "business process management software",
    "corporate analytics platforms",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/enterprise",
    languages: {
      "en-US": "https://www.ctasis.com/industries/enterprise",
      "en-IN": "https://www.ctasis.com/industries/enterprise",
      "x-default": "https://www.ctasis.com/industries/enterprise",
    },
  },
  openGraph: {
    title: "Enterprise ERP & CRM Software | Ctas Info Services",
    description: "Enterprise-grade software, ERP, CRM, analytics, and cloud solutions from Ctas tailored for global organizations and large enterprises.",
    url: "https://www.ctasis.com/industries/enterprise",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/enterprise-dashboard.webp",
        width: 1200,
        height: 630,
        alt: "Enterprise ERP & CRM Software | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise ERP & CRM Software | Ctas Info Services",
    description: "Enterprise-grade software, ERP, CRM, analytics, and cloud solutions from Ctas tailored for global organizations and large enterprises.",
    images: ["https://www.ctasis.com/enterprise-dashboard.webp"],
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
