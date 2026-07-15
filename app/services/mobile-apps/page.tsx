import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Custom Mobile App Development Services (iOS & Android) | Ctas Info',
  description: 'Native and cross-platform mobile application development. We build intuitive, secure, and robust iOS and Android apps for modern enterprises.',
  keywords: ['Mobile app development', 'iOS developers', 'Android developers', 'React Native apps', 'Flutter development'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/mobile-apps',
  },
  openGraph: {
    title: 'Custom Mobile App Development Services (iOS & Android) | Ctas Info',
    description: 'Native and cross-platform mobile application development. We build intuitive, secure, and robust iOS and Android apps for modern enterprises.',
    url: 'https://www.ctasis.com/services/mobile-apps',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Mobile App Development Services (iOS & Android) by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Mobile App Development Services (iOS & Android) | Ctas Info',
    description: 'Native and cross-platform mobile application development. We build intuitive, secure, and robust iOS and Android apps for modern enterprises.',
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

export default function MobileAppsClient() {
  return <Client />;
}
