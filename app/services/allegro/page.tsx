import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allegro Integration Services | Ctas Info',
  description: 'Expert Allegro integration and automation services. Inventory sync, order management, pricing automation, and analytics for Allegro marketplace.',
  alternates: { canonical: 'https://www.ctasis.com/services/allegro' },
  openGraph: {
    title: 'Allegro Integration Services | Ctas Info',
    description: 'Expert Allegro integration and automation services.',
    url: 'https://www.ctasis.com/services/allegro',
    type: 'website',
  },
};

import Client from './allegroClient';
export default function Page() { return <Client />; }
