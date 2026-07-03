import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Booking App Development Services | Ctas Info",
  description:
    "Ctas delivers custom hotel booking app solutions: room search, real-time availability, secure payments, and property management.",
  keywords: [
    "hotel booking app development",
    "room reservation software",
    "property management systems",
    "travel & hospitality apps",
    "real-time hotel availability",
    "OTA platform development",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/hotel-booking-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/hotel-booking-app",
      "en-IN": "https://www.ctasis.com/solutions/hotel-booking-app",
      "x-default": "https://www.ctasis.com/solutions/hotel-booking-app",
    },
  },
  openGraph: {
    title: "Transform Travel Experiences with Custom Booking Apps | Ctas",
    description:
      "Build a premium hotel booking platform with real-time sync and secure payments. Expert solutions for the hospitality industry.",
    url: "https://www.ctasis.com/solutions/hotel-booking-app",
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

export default function HotelBookingAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
