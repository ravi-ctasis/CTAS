import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Development Services | Ctas Info Services",
  description: "Ctas builds scalable and secure APIs for web, mobile, and enterprise applications using REST, GraphQL, and microservices architecture.",
  keywords: [
    "custom API development",
    "RESTful API services",
    "GraphQL integration",
    "microservices architecture",
    "API security solutions",
    "third-party API integration",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/api-development",
    languages: {
      "en-US": "https://www.ctasis.com/services/api-development",
      "en-IN": "https://www.ctasis.com/services/api-development",
      "x-default": "https://www.ctasis.com/services/api-development",
    },
  },
  openGraph: {
    title: "Enterprise API Development & Integration Services | Ctas",
    description: "Build high-performance, secure APIs for your business. Specializing in REST, GraphQL, and seamless system integrations.",
    url: "https://www.ctasis.com/services/api-development",
  },
};

export default function ApiDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}




