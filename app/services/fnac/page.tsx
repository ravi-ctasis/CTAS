import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fnac Integration Services | Ctas Info',
  description: 'Expert Fnac integration and automation services. Inventory sync, order management, pricing automation, and analytics for Fnac marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/fnac' },
  openGraph: {
    title: 'Fnac Integration Services | Ctas Info',
    description: 'Expert Fnac integration and automation services.',
    url: 'https://www.ctasis.com/services/fnac',
    type: 'website',
  },
};

import Client from './fnacClient';
export default function Page() { return <Client />; }
