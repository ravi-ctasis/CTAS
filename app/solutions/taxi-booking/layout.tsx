import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi Booking App Development Services | Ctas Info Services",
  description:
    "Ctas develops custom taxi booking apps with real-time ride tracking, driver management, secure payments, fare calculation, and seamless passenger experiences.",
  keywords: [
    "uber-like app development",
    "real-time ride tracking",
    "dispatch management software",
    "taxi fleet management",
    "ride-sharing app solutions",
  ],
  openGraph: {
    title: "Scalable Taxi Booking & Dispatch Solutions | Ctas Info Services",
    description:
      "Build a custom, high-performance ride-hailing app with real-time tracking and secure payments. Scale your transport business with our experts.",
    url: "https://www.ctasis.com/solutions/taxi-booking",
  },
  alternates: {
    canonical: "https://www.ctasis.com/solutions/taxi-booking",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/taxi-booking",
      "en-IN": "https://www.ctasis.com/solutions/taxi-booking",
      "x-default": "https://www.ctasis.com/solutions/taxi-booking",
    },
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

export default function TaxiBookingAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
