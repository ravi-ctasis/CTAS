import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Hotel Booking App Development | Ctas Info Services',
  description: 'Advanced hotel booking platforms. We develop seamless reservation systems with property management, secure gateways, and dynamic pricing.',
  keywords: ['Hotel booking app', 'Hospitality app development', 'Reservation system software', 'Property management app'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/hotel-booking-app',
  },
  openGraph: {
    title: 'Hotel Booking App Development | Hospitality Tech Solutions | Ctas Info Services',
    description: 'Advanced hotel booking platforms. We develop seamless reservation systems with property management, secure gateways, and dynamic pricing.',
    url: 'https://www.ctasis.com/solutions/hotel-booking-app',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Hotel Booking App Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Booking App Development | Hospitality Tech Solutions | Ctas Info Services',
    description: 'Advanced hotel booking platforms. We develop seamless reservation systems with property management, secure gateways, and dynamic pricing.',
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

export default function HotelAppClient() {
  return <Client />;
}
