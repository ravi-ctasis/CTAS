import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MERN Stack Development Services | Ctas Info Services",
  description: "Build modern, scalable, and high-performance web applications with Ctas MERN Stack Development. Expert in MongoDB, Express.js, React, and Node.js.",
  keywords: [
    "MERN stack development services",
    "React.js web applications",
    "custom MERN stack apps",
    "Node.js development company",
    "MongoDB integration",
    "modern full-stack web solutions",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/mern-stack",
    languages: {
      "en-US": "https://www.ctasis.com/services/mern-stack",
      "en-IN": "https://www.ctasis.com/services/mern-stack",
      "x-default": "https://www.ctasis.com/services/mern-stack",
    },
  },
  openGraph: {
    title: "Modern MERN Stack Development & Scalable Web Apps | Ctas",
    description: "Launch high-performance React and Node.js applications with our expert MERN team. Custom solutions for the modern web.",
    url: "https://www.ctasis.com/services/mern-stack",
  },
};

export default function MERNStackPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
