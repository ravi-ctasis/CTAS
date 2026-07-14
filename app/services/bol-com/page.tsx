import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bol.com Integration Services | Ctas Info',
  description: 'Expert Bol.com integration and automation services. Inventory sync, order management, pricing automation, and analytics for Bol.com marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/bol-com' },
  openGraph: {
    title: 'Bol.com Integration Services | Ctas Info',
    description: 'Expert Bol.com integration and automation services.',
    url: 'https://www.ctasis.com/services/bol-com',
    type: 'website',
  },
};

import Client from './bolcomClient';
export default function Page() { return <Client />; }
