import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & LMS Software Solutions | Ctas Info Services",
  description:
    "Ctas builds LMS platforms, virtual classrooms, and analytics-powered EdTech solutions for schools, universities, and corporate training.",
  keywords: [
    "EdTech software solutions",
    "custom LMS development",
    "virtual classroom platforms",
    "educational analytics software",
    "e-learning portal development",
    "corporate training systems",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/industries/education",
    languages: {
      "en-US": "https://www.ctasis.com/industries/education",
      "en-IN": "https://www.ctasis.com/industries/education",
      "x-default": "https://www.ctasis.com/industries/education",
    },
  },
  openGraph: {
    title: "Education & LMS Software Solutions | Ctas Info Services",
    description: "Ctas builds LMS platforms, virtual classrooms, and analytics-powered EdTech solutions for schools, universities, and corporate training.",
    url: "https://www.ctasis.com/industries/education",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/education-img.webp",
        width: 1200,
        height: 630,
        alt: "Education & LMS Software Solutions | Ctas Info Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education & LMS Software Solutions | Ctas Info Services",
    description: "Ctas builds LMS platforms, virtual classrooms, and analytics-powered EdTech solutions for schools, universities, and corporate training.",
    images: ["https://www.ctasis.com/education-img.webp"],
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
