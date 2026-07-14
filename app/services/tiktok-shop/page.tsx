import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TikTok Shop Integration Services | Ctas Info',
  description: 'Expert TikTok Shop integration and automation services. Inventory sync, order management, pricing automation, and analytics for TikTok Shop marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/tiktok-shop' },
  openGraph: {
    title: 'TikTok Shop Integration Services | Ctas Info',
    description: 'Expert TikTok Shop integration and automation services.',
    url: 'https://www.ctasis.com/services/tiktok-shop',
    type: 'website',
  },
};

import Client from './tiktokshopClient';
export default function Page() { return <Client />; }
