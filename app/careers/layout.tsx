import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Ctas Team",
  description: "Join Ctas Info Services LLP. Open positions in web development, AI, e-commerce, and cloud solutions.",
  keywords: [
    "IT jobs Ahmedabad",
    "remote developer careers",
    "software engineer vacancies India",
    "apply for tech jobs",
    "Ctas careers",
  ],
  openGraph: {
    title: "Careers at Ctas Info Services | Grow with Us",
    description: "Build the future of AI and E-commerce. Join our team of expert developers and innovators.",
    url: "https://www.ctasis.com/careers",
  },
  alternates: {
    canonical: "https://www.ctasis.com/careers",
    languages: {
      "en-US": "https://www.ctasis.com/careers",
      "en-IN": "https://www.ctasis.com/careers",
      "x-default": "https://www.ctasis.com/careers",
    },
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

