import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Fitness & Health App Development | Ctas Info Services',
  description: 'Custom fitness app development. Build health tracking, workout streaming, and personalized nutrition planning applications for iOS and Android.',
  keywords: ['Fitness app development', 'Health tracking app', 'Workout app developers', 'Diet app development'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/fitness-app',
  },
  openGraph: {
    title: 'Fitness & Health App Development | Workout Tracking Solutions | Ctas Info Services',
    description: 'Custom fitness app development. Build health tracking, workout streaming, and personalized nutrition planning applications for iOS and Android.',
    url: 'https://www.ctasis.com/solutions/fitness-app',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Fitness & Health App Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitness & Health App Development | Workout Tracking Solutions | Ctas Info Services',
    description: 'Custom fitness app development. Build health tracking, workout streaming, and personalized nutrition planning applications for iOS and Android.',
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

export default function FitnessAppClient() {
  return <Client />;
}
