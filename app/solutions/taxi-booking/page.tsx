import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Taxi Booking App Development | Ctas Info Services',
  description: 'Launch your own ride-hailing business. We develop robust taxi booking apps with driver dispatching, fare estimation, and real-time mapping.',
  keywords: ['Taxi booking app', 'Ride-hailing software', 'Uber clone development', 'Driver dispatch app'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/taxi-booking',
  },
  openGraph: {
    title: 'Taxi Booking App Development | Ride-Hailing Solutions | Ctas Info Services',
    description: 'Launch your own ride-hailing business. We develop robust taxi booking apps with driver dispatching, fare estimation, and real-time mapping.',
    url: 'https://www.ctasis.com/solutions/taxi-booking',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Taxi Booking App Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Booking App Development | Ride-Hailing Solutions | Ctas Info Services',
    description: 'Launch your own ride-hailing business. We develop robust taxi booking apps with driver dispatching, fare estimation, and real-time mapping.',
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

export default function TaxiAppClient() {
  return <Client />;
}
