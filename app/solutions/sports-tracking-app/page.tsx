import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Sports Tracking & Analytics App Development | Ctas Info',
  description: 'Custom sports tracking solutions. We build apps that monitor athletic performance, integrate with wearables, and provide deep biometrical analytics.',
  keywords: ['Sports tracking app', 'Athletic performance software', 'Wearable integration app', 'Sports analytics development'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/sports-tracking-app',
  },
  openGraph: {
    title: 'Sports Tracking & Analytics App Development | Ctas Info',
    description: 'Custom sports tracking solutions. We build apps that monitor athletic performance, integrate with wearables, and provide deep biometrical analytics.',
    url: 'https://www.ctasis.com/solutions/sports-tracking-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Sports Tracking & Analytics App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Tracking & Analytics App Development | Ctas Info',
    description: 'Custom sports tracking solutions. We build apps that monitor athletic performance, integrate with wearables, and provide deep biometrical analytics.',
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

export default function SportsAppClient() {
  return <Client />;
}
