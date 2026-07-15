import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Food Delivery App Development | Restaurant SaaS Solutions | Ctas Info',
  description: 'On-demand food delivery solutions. We build scalable platforms connecting restaurants, drivers, and customers with real-time GPS tracking.',
  keywords: ['Food delivery app', 'On-demand delivery software', 'Restaurant ordering system', 'Uber Eats clone'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/food-delivery-app',
  },
  openGraph: {
    title: 'Food Delivery App Development | Restaurant SaaS Solutions | Ctas Info',
    description: 'On-demand food delivery solutions. We build scalable platforms connecting restaurants, drivers, and customers with real-time GPS tracking.',
    url: 'https://www.ctasis.com/solutions/food-delivery-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Food Delivery App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Delivery App Development | Restaurant SaaS Solutions | Ctas Info',
    description: 'On-demand food delivery solutions. We build scalable platforms connecting restaurants, drivers, and customers with real-time GPS tracking.',
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

export default function FoodAppClient() {
  return <Client />;
}
