import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Shop Integration & Automation | Ctas Info Services',
  description: 'Master TikTok social commerce. Automate viral live-stream inventory sync, order fulfillment, product listings, and affiliate campaign management.',
  keywords: ['TikTok Shop integration', 'TikTok commerce', 'TikTok Shop API', 'Social commerce automation', 'TikTok live sync'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/tiktok-shop',
  },
  openGraph: {
    title: 'TikTok Shop Integration & Fulfillment Automation | Ctas Info Services',
    description: 'Master TikTok social commerce. Automate viral live-stream inventory sync, order fulfillment, product listings, and affiliate campaign management.',
    url: 'https://www.ctasis.com/services/tiktok-shop',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'TikTok Shop Integration Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Shop Integration & Fulfillment Automation | Ctas Info Services',
    description: 'Master TikTok social commerce. Automate viral live-stream inventory sync, order fulfillment, product listings, and affiliate campaign management.',
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

import Client from './tiktokshopClient';

export default function Page() { return <Client />; }
