import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Social Networking App Development | Community Platforms | Ctas Info',
  description: 'Build the next massive social platform. We develop highly scalable social networking apps with real-time feeds, messaging, and content moderation.',
  keywords: ['Social networking app', 'Community app development', 'Social media software', 'Messaging app developers'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/social-networking-app',
  },
  openGraph: {
    title: 'Social Networking App Development | Community Platforms | Ctas Info',
    description: 'Build the next massive social platform. We develop highly scalable social networking apps with real-time feeds, messaging, and content moderation.',
    url: 'https://www.ctasis.com/solutions/social-networking-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Social Networking App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Networking App Development | Community Platforms | Ctas Info',
    description: 'Build the next massive social platform. We develop highly scalable social networking apps with real-time feeds, messaging, and content moderation.',
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

export default function SocialAppClient() {
  return <Client />;
}
