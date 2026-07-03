import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Solutions | ERP & CRM | Ctas Info",
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
    title: "Robust Enterprise Solutions & Digital Transformation | Ctas",
    description: "Scale your organization with elite enterprise-grade software. Custom ERP, CRM, and cloud-driven business analytics.",
    url: "https://www.ctasis.com/industries/enterprise",
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
