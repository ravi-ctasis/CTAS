import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kaufland Integration Services | Ctas Info',
  description: 'Expert Kaufland integration and automation services. Inventory sync, order management, pricing automation, and analytics for Kaufland marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/kaufland' },
  openGraph: {
    title: 'Kaufland Integration Services | Ctas Info',
    description: 'Expert Kaufland integration and automation services.',
    url: 'https://www.ctasis.com/services/kaufland',
    type: 'website',
  },
};

import Client from './kauflandClient';
export default function Page() { return <Client />; }
