import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Property Finder & Real Estate App Development | Ctas Info',
  description: 'Next-gen real estate applications. We build property search platforms with virtual tours, advanced CRM integrations, and IDX/MLS feeds.',
  keywords: ['Real estate app development', 'Property finder software', 'Zillow clone', 'MLS integration'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/property-finder-app',
  },
  openGraph: {
    title: 'Property Finder & Real Estate App Development | Ctas Info',
    description: 'Next-gen real estate applications. We build property search platforms with virtual tours, advanced CRM integrations, and IDX/MLS feeds.',
    url: 'https://www.ctasis.com/solutions/property-finder-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Property Finder & Real Estate App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Finder & Real Estate App Development | Ctas Info',
    description: 'Next-gen real estate applications. We build property search platforms with virtual tours, advanced CRM integrations, and IDX/MLS feeds.',
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

export default function PropertyAppClient() {
  return <Client />;
}
