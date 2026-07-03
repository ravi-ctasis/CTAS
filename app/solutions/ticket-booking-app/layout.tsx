import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ticket Booking App Development Services | Ctas Info",
  description:
    "Ctas provides custom ticket booking app development: real-time seat selection, event management, and secure payments.",
  keywords: [
    "ticket booking app development",
    "event management software",
    "online seat selection systems",
    "concert ticket platforms",
    "movie booking app services",
    "secure event payment gateways",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/ticket-booking-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/ticket-booking-app",
      "en-IN": "https://www.ctasis.com/solutions/ticket-booking-app",
      "x-default": "https://www.ctasis.com/solutions/ticket-booking-app",
    },
  },
  openGraph: {
    title: "Streamlined Ticket Booking & Event Management Solutions | Ctas",
    description:
      "Build a high-performance booking platform for events and entertainment. Advanced seat mapping and secure payment integrations.",
    url: "https://www.ctasis.com/solutions/ticket-booking-app",
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

export default function TicketBookingAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
