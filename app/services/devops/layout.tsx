import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps Services | Ctas Info",
  description:
    "CI/CD, infrastructure automation, observability, and cloud operations from Ctas to speed up delivery and reliability.",
  keywords: [
    "CI/CD pipelines",
    "Kubernetes orchestration",
    "infrastructure as code",
    "Jenkins automation",
    "cloud operations reliability",
  ],
  openGraph: {
    title: "Expert DevOps Services & Infrastructure Automation | Ctas",
    description: "Accelerate your software delivery with elite DevOps practices. We implement CI/CD, Kubernetes, and automated infrastructure for reliability.",
    url: "https://www.ctasis.com/services/devops",
  },
  alternates: {
    canonical: "https://www.ctasis.com/services/devops",
    languages: {
      "en-US": "https://www.ctasis.com/services/devops",
      "en-IN": "https://www.ctasis.com/services/devops",
      "x-default": "https://www.ctasis.com/services/devops",
    },
  },
};

export default function DevopsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
