import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Software & IT Solutions for Gaming Industry | Ctas Info',
  description: 'Ctas Info provides specialized tech solutions for the Gaming sector. Increase operational efficiency and player engagement with custom enterprise software.',
  keywords: ['Gaming software solutions', 'Gaming tech', 'Game development IT', 'Enterprise gaming software', 'Ctas Info Gaming'],
  alternates: {
    canonical: 'https://www.ctasis.com/industries/gaming',
  },
  openGraph: {
    title: 'Software & IT Solutions for Gaming Industry | Ctas Info',
    description: 'Ctas Info provides specialized tech solutions for the Gaming sector. Increase operational efficiency and player engagement with custom enterprise software.',
    url: 'https://www.ctasis.com/industries/gaming',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Software & IT Solutions for Gaming Industry by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software & IT Solutions for Gaming Industry | Ctas Info',
    description: 'Ctas Info provides specialized tech solutions for the Gaming sector. Increase operational efficiency and player engagement with custom enterprise software.',
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

export default function GamingClient() {
  return <Client />;
}
