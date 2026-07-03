import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions Services | Ctas Info",
  description: "Expert cloud solutions: AWS, Azure, GCP, Docker, Kubernetes. Scalable infrastructure and DevOps services.",
  keywords: [
    "AWS cloud services",
    "Azure migration",
    "cloud infrastructure management",
    "serverless architecture",
    "cloud computing experts",
  ],
  openGraph: {
    title: "Scalable Cloud Infrastructure & Solutions | Ctas Info Services",
    description: "Expert AWS, Azure, and GCP management. Optimize your business with high-performance cloud architecture.",
    url: "https://www.ctasis.com/services/cloud-solutions",
  },
  alternates: {
    canonical: "https://www.ctasis.com/services/cloud-solutions",
    languages: {
      "en-US": "https://www.ctasis.com/services/cloud-solutions",
      "en-IN": "https://www.ctasis.com/services/cloud-solutions",
      "x-default": "https://www.ctasis.com/services/cloud-solutions",
    },
  },
};

export default function CloudSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

