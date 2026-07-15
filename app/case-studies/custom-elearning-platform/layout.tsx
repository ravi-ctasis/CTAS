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
    title: "Custom eLearning Platform Development | Ctas",
    description: "Ctas develops custom eLearning platforms: course management, video streaming, quizzes, and progress tracking.",
    url: "https://www.ctasis.com/case-studies/custom-elearning-platform",
    type: "website",
    images: [
      {
        url: "https://www.ctasis.com/custom-e-learning.webp",
        width: 1200,
        height: 630,
        alt: "Custom eLearning Platform Development | Ctas",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom eLearning Platform Development | Ctas",
    description: "Ctas develops custom eLearning platforms: course management, video streaming, quizzes, and progress tracking.",
    images: ["https://www.ctasis.com/custom-e-learning.webp"],
  },
};

export default function CustomELearningPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
