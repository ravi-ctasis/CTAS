import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Influencer Marketing Development | Ctas Info Services',
  description: 'Build platforms that connect brands with content creators. We develop analytics-driven influencer marketing and campaign management software.',
  keywords: ['Influencer marketing app', 'Creator platform development', 'Social media marketing software', 'Brand campaign app'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/influencer-marketing-app',
  },
  openGraph: {
    title: 'Influencer Marketing Platform Development | Social Tech | Ctas Info Services',
    description: 'Build platforms that connect brands with content creators. We develop analytics-driven influencer marketing and campaign management software.',
    url: 'https://www.ctasis.com/solutions/influencer-marketing-app',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Influencer Marketing Platform Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Marketing Platform Development | Social Tech | Ctas Info Services',
    description: 'Build platforms that connect brands with content creators. We develop analytics-driven influencer marketing and campaign management software.',
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

export default function InfluencerAppClient() {
  return <Client />;
}
