import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Restaurant Management & Ordering App | Ctas Info Services',
  description: 'Empower your restaurant with a dedicated app. We build digital menus, table reservation systems, and direct ordering platforms to increase margins.',
  keywords: ['Restaurant app development', 'Digital menu software', 'Table reservation app', 'POS integration for restaurants'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/restaurant-app',
  },
  openGraph: {
    title: 'Restaurant Management & Ordering App Development | Ctas Info Services',
    description: 'Empower your restaurant with a dedicated app. We build digital menus, table reservation systems, and direct ordering platforms to increase margins.',
    url: 'https://www.ctasis.com/solutions/restaurant-app',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Restaurant Management & Ordering App Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Management & Ordering App Development | Ctas Info Services',
    description: 'Empower your restaurant with a dedicated app. We build digital menus, table reservation systems, and direct ordering platforms to increase margins.',
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

export default function RestaurantAppClient() {
  return <Client />;
}
