import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parcel Delivery App Development Services | Ctas Info",
  description:
    "Ctas builds custom parcel delivery apps: real-time tracking, route optimization, courier management, and secure payments.",
  keywords: [
    "parcel delivery app development",
    "courier management software",
    "last-mile delivery solutions",
    "real-time parcel tracking",
    "logistics fleet management",
    "delivery route optimization",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/parcel-delivery-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/parcel-delivery-app",
      "en-IN": "https://www.ctasis.com/solutions/parcel-delivery-app",
      "x-default": "https://www.ctasis.com/solutions/parcel-delivery-app",
    },
  },
  openGraph: {
    title: "Expert Logistics & Last-Mile Delivery App Solutions | Ctas",
    description:
      "Optimize your delivery operations with a custom mobile platform. Real-time tracking and intelligent route optimization for logistics.",
    url: "https://www.ctasis.com/solutions/parcel-delivery-app",
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

export default function ParcelDeliveryAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
