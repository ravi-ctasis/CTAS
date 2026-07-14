import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walmart Integration Services | Ctas Info',
  description: 'Expert Walmart integration and automation services. Inventory sync, order management, pricing automation, and analytics for Walmart marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/walmart-marketplace' },
  openGraph: {
    title: 'Walmart Integration Services | Ctas Info',
    description: 'Expert Walmart integration and automation services.',
    url: 'https://www.ctasis.com/services/walmart-marketplace',
    type: 'website',
  },
};

import Client from './walmartClient';
export default function Page() { return <Client />; }
