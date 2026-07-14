import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rakuten Integration Services | Ctas Info',
  description: 'Expert Rakuten integration and automation services. Inventory sync, order management, pricing automation, and analytics for Rakuten marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/rakuten' },
  openGraph: {
    title: 'Rakuten Integration Services | Ctas Info',
    description: 'Expert Rakuten integration and automation services.',
    url: 'https://www.ctasis.com/services/rakuten',
    type: 'website',
  },
};

import Client from './rakutenClient';
export default function Page() { return <Client />; }
