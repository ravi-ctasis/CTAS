import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Parcel Delivery & Courier App Development | Logistics Tech | Ctas Info',
  description: 'Streamline logistics with custom parcel delivery apps. Features include real-time courier tracking, route optimization, and proof of delivery.',
  keywords: ['Parcel delivery app', 'Courier tracking software', 'Logistics app development', 'Last-mile delivery software'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/parcel-delivery-app',
  },
  openGraph: {
    title: 'Parcel Delivery & Courier App Development | Logistics Tech | Ctas Info',
    description: 'Streamline logistics with custom parcel delivery apps. Features include real-time courier tracking, route optimization, and proof of delivery.',
    url: 'https://www.ctasis.com/solutions/parcel-delivery-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Parcel Delivery & Courier App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parcel Delivery & Courier App Development | Logistics Tech | Ctas Info',
    description: 'Streamline logistics with custom parcel delivery apps. Features include real-time courier tracking, route optimization, and proof of delivery.',
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

export default function ParcelAppClient() {
  return <Client />;
}
