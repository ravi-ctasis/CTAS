import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Appointment App Development Services | Ctas Info",
  description:
    "Ctas offers custom doctor appointment app solutions: patient booking, telemedicine, scheduling, secure EMR integration, and real-time notifications.",
  keywords: [
    "doctor appointment app development",
    "telemedicine platform services",
    "patient booking systems",
    "healthcare mobile apps",
    "EMR integration solutions",
    "doctor scheduling software",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/doctor-appointment-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/doctor-appointment-app",
      "en-IN": "https://www.ctasis.com/solutions/doctor-appointment-app",
      "x-default": "https://www.ctasis.com/solutions/doctor-appointment-app",
    },
  },
  openGraph: {
    title: "Custom Healthcare & Telemedicine App Development | Ctas",
    description:
      "Modernize patient care with a custom doctor appointment app. Seamless scheduling, telemedicine, and secure EMR integration.",
    url: "https://www.ctasis.com/solutions/doctor-appointment-app",
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

export default function DoctorAppointmentAppPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
