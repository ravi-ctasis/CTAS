import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Doctor Appointment App Development | Ctas Info Services',
  description: 'Digital health solutions for clinics and hospitals. Develop secure telemedicine and doctor appointment booking applications compliant with healthcare standards.',
  keywords: ['Doctor appointment app', 'Telemedicine software', 'Healthcare app development', 'Clinic booking app'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/doctor-appointment-app',
  },
  openGraph: {
    title: 'Doctor Appointment App Development | Healthcare Solutions | Ctas Info Services',
    description: 'Digital health solutions for clinics and hospitals. Develop secure telemedicine and doctor appointment booking applications compliant with healthcare standards.',
    url: 'https://www.ctasis.com/solutions/doctor-appointment-app',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Doctor Appointment App Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doctor Appointment App Development | Healthcare Solutions | Ctas Info Services',
    description: 'Digital health solutions for clinics and hospitals. Develop secure telemedicine and doctor appointment booking applications compliant with healthcare standards.',
    images: ['https://www.ctasis.com/assets/images/logo-icon.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DoctorAppClient() {
  return <Client />;
}
