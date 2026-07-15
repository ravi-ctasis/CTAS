import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Travel App Development | Journey Planning Solutions | Ctas Info',
  description: 'Transform tourism with custom travel apps. We build itinerary planners, flight booking engines, and immersive travel guides for modern explorers.',
  keywords: ['Travel app development', 'Itinerary planner app', 'Tourism software solutions', 'Flight booking platform'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/travel-app',
  },
  openGraph: {
    title: 'Travel App Development | Journey Planning Solutions | Ctas Info',
    description: 'Transform tourism with custom travel apps. We build itinerary planners, flight booking engines, and immersive travel guides for modern explorers.',
    url: 'https://www.ctasis.com/solutions/travel-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Travel App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel App Development | Journey Planning Solutions | Ctas Info',
    description: 'Transform tourism with custom travel apps. We build itinerary planners, flight booking engines, and immersive travel guides for modern explorers.',
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

export default function TravelAppClient() {
  return <Client />;
}
