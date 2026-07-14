import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Worten Integration Services | Ctas Info',
  description: 'Expert Worten integration and automation services. Inventory sync, order management, pricing automation, and analytics for Worten marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/worten' },
  openGraph: {
    title: 'Worten Integration Services | Ctas Info',
    description: 'Expert Worten integration and automation services.',
    url: 'https://www.ctasis.com/services/worten',
    type: 'website',
  },
};

import Client from './wortenClient';
export default function Page() { return <Client />; }
