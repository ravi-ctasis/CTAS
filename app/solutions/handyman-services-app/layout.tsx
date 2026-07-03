import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handyman Services App Development | Ctas Info",
  description:
    "Ctas builds custom handyman services apps: service booking, real-time tracking, provider management, and secure payments.",
  keywords: [
    "handyman app development",
    "on-demand service platform",
    "home services booking software",
    "provider management system",
    "real-time service tracking",
    "TaskRabbit clone development",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/handyman-services-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/handyman-services-app",
      "en-IN": "https://www.ctasis.com/solutions/handyman-services-app",
      "x-default": "https://www.ctasis.com/solutions/handyman-services-app",
    },
  },
  openGraph: {
    title: "Build a Scalable On-Demand Handyman Platform | Ctas",
    description:
      "Modernize home services with a custom booking app. Expert developers for on-demand service platforms and real-time tracking.",
    url: "https://www.ctasis.com/solutions/handyman-services-app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HandymanServicesAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
