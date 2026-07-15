import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Dating App Development Solutions | Custom Matchmaking Apps | Ctas Info',
  description: 'Engaging, secure dating app development. We build scalable matchmaking platforms with real-time chat, geolocation, and advanced matching algorithms.',
  keywords: ['Dating app development', 'Matchmaking software', 'Tinder clone', 'Custom dating app', 'Geolocation apps'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/dating-app',
  },
  openGraph: {
    title: 'Dating App Development Solutions | Custom Matchmaking Apps | Ctas Info',
    description: 'Engaging, secure dating app development. We build scalable matchmaking platforms with real-time chat, geolocation, and advanced matching algorithms.',
    url: 'https://www.ctasis.com/solutions/dating-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Dating App Development Solutions by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dating App Development Solutions | Custom Matchmaking Apps | Ctas Info',
    description: 'Engaging, secure dating app development. We build scalable matchmaking platforms with real-time chat, geolocation, and advanced matching algorithms.',
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

export default function DatingAppClient() {
  return <Client />;
}
