import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & LMS Software Solutions | EdTech | Ctas Info",
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
    title: "Modern EdTech Solutions & Custom LMS Development | Ctas",
    description: "Empower learners with intuitive educational platforms. Expert developers for schools, universities, and professional training providers.",
    url: "https://www.ctasis.com/industries/education",
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
