import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Delivery App Development Services | Ctas Info Services",
  description:
    "Ctas provides custom food delivery app development: real-time order tracking, restaurant panels, delivery partner apps, and secure payments.",
  keywords: [
    "food delivery app development",
    "restaurant delivery software",
    "real-time order tracking systems",
    "on-demand delivery platform",
    "UberEats clone development",
    "delivery partner application",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/food-delivery-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/food-delivery-app",
      "en-IN": "https://www.ctasis.com/solutions/food-delivery-app",
      "x-default": "https://www.ctasis.com/solutions/food-delivery-app",
    },
  },
  openGraph: {
    title: "Custom Food Delivery & Restaurant Platform Solutions | Ctas",
    description:
      "Launch your food delivery business with a powerful on-demand platform. Real-time tracking, secure payments, and custom panels.",
    url: "https://www.ctasis.com/solutions/food-delivery-app",
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

export default function FoodDeliveryAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
