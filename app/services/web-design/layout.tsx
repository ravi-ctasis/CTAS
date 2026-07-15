import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services | Modern UI/UX | Ctas Info Services",
  description:
    "Professional web design services from Ctas, creating modern, responsive, and high-performing websites tailored for business growth.",
  keywords: [
    "professional web design",
    "responsive website layouts",
    "modern UI/UX design",
    "custom web aesthetics",
    "landing page design services",
    "corporate web design company",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/web-design",
    languages: {
      "en-US": "https://www.ctasis.com/services/web-design",
      "en-IN": "https://www.ctasis.com/services/web-design",
      "x-default": "https://www.ctasis.com/services/web-design",
    },
  },
  openGraph: {
    title: "Beautiful, Modern & SEO-Friendly Web Design | Ctas",
    description: "Convert visitors into customers with premium web design. Our experts create responsive websites that drive business growth.",
    url: "https://www.ctasis.com/services/web-design",
  },
};

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
