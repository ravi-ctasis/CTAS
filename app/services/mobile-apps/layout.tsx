import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Ctas Info",
  description: "Expert mobile app development: iOS, Android, React Native, Flutter. Native and cross-platform solutions.",
  keywords: [
    "React Native development",
    "iOS app services",
    "Android application experts",
    "cross-platform apps",
    "mobile product design",
  ],
  openGraph: {
    title: "High-Performance Mobile App Development | Ctas Info Services",
    description: "Build scalable iOS and Android applications with our expert mobile team. Specializing in React Native and Flutter for global brands.",
    url: "https://www.ctasis.com/services/mobile-apps",
  },
  alternates: {
    canonical: "https://www.ctasis.com/services/mobile-apps",
    languages: {
      "en-US": "https://www.ctasis.com/services/mobile-apps",
      "en-IN": "https://www.ctasis.com/services/mobile-apps",
      "x-default": "https://www.ctasis.com/services/mobile-apps",
    },
  },
};

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

