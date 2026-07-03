import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development | Enterprise | Ctas Info",
  description:
    "Ctas provides custom software development services including enterprise apps, MVP development, automation, and product engineering using modern tech stacks.",
  keywords: [
    "custom software development company",
    "enterprise software solutions",
    "MVP development for startups",
    "product engineering services",
    "business process automation software",
    "dedicated development team",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/custom-software",
    languages: {
      "en-US": "https://www.ctasis.com/services/custom-software",
      "en-IN": "https://www.ctasis.com/services/custom-software",
      "x-default": "https://www.ctasis.com/services/custom-software",
    },
  },
  openGraph: {
    title: "Custom Software Development & Product Engineering | Ctas",
    description: "Build scalable, custom software tailored to your business needs. Expert enterprise and MVP development solutions.",
    url: "https://www.ctasis.com/services/custom-software",
  },
};

export default function CustomSoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
