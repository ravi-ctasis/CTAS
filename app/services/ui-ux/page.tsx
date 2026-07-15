import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'UI/UX Design Services | Ctas Info Services',
  description: 'Strategic UI/UX design services to boost user engagement and conversions. We create user-centric, wireframed, and visually stunning interfaces.',
  keywords: ['UI/UX design services', 'User interface design', 'User experience design', 'Web app design', 'Mobile UX'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/ui-ux',
  },
  openGraph: {
    title: 'UI/UX Design Services | Interface & Experience Design | Ctas Info Services',
    description: 'Strategic UI/UX design services to boost user engagement and conversions. We create user-centric, wireframed, and visually stunning interfaces.',
    url: 'https://www.ctasis.com/services/ui-ux',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Services | Interface & Experience Design | Ctas Info Services',
    description: 'Strategic UI/UX design services to boost user engagement and conversions. We create user-centric, wireframed, and visually stunning interfaces.',
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

export default function UiUxClient() {
  return <Client />;
}
