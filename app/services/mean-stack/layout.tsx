import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEAN Stack Development Services | Ctas Info",
  description: "Expert MEAN stack development: MongoDB, Express, Angular, Node.js. Full-stack JavaScript solutions for modern businesses.",
  keywords: [
    "MEAN stack development company",
    "Angular web applications",
    "MongoDB database services",
    "Node.js backend developers",
    "full-stack JavaScript development",
    "Express.js apps",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/mean-stack",
    languages: {
      "en-US": "https://www.ctasis.com/services/mean-stack",
      "en-IN": "https://www.ctasis.com/services/mean-stack",
      "x-default": "https://www.ctasis.com/services/mean-stack",
    },
  },
  openGraph: {
    title: "Enterprise MEAN Stack Development & Modern App Solutions | Ctas",
    description: "Build robust, scalable web applications with our expert MEAN stack developers. Specializing in high-performance full-stack JavaScript.",
    url: "https://www.ctasis.com/services/mean-stack",
  },
};

export default function MeanStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

