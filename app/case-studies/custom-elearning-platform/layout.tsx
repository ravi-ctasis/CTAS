import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom eLearning Platform Development | Ctas",
  description:
    "Ctas develops custom eLearning platforms: course management, video streaming, quizzes, and progress tracking.",
  keywords: [
    "eLearning platform case study",
    "custom LMS development results",
    "interactive education software",
    "video streaming for education",
    "student progress tracking systems",
    "EdTech digital transformation",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/case-studies/custom-elearning-platform",
    languages: {
      "en-US": "https://www.ctasis.com/case-studies/custom-elearning-platform",
      "en-IN": "https://www.ctasis.com/case-studies/custom-elearning-platform",
      "x-default": "https://www.ctasis.com/case-studies/custom-elearning-platform",
    },
  },
  openGraph: {
    title: "Innovative Custom eLearning Solutions - Case Study | Ctas",
    description: "Explore our robust EdTech platform with seamless video streaming and interactive quizzes. A success story in digital education.",
    url: "https://www.ctasis.com/case-studies/custom-elearning-platform",
  },
};

export default function CustomELearningPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
