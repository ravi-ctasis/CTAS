import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Complete Design Packages | UI/UX | Ctas Info Services',
  description: 'End-to-end design packages for startups and enterprises. We deliver cohesive branding, stunning UI/UX, and complete visual identities.',
  keywords: ['Complete design packages', 'UI/UX design bundle', 'Corporate branding services', 'Web design packages'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/complete-design-packages',
  },
  openGraph: {
    title: 'Complete Design Packages | UI/UX & Branding | Ctas Info Services',
    description: 'End-to-end design packages for startups and enterprises. We deliver cohesive branding, stunning UI/UX, and complete visual identities.',
    url: 'https://www.ctasis.com/services/complete-design-packages',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Complete Design Packages by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Design Packages | UI/UX & Branding | Ctas Info Services',
    description: 'End-to-end design packages for startups and enterprises. We deliver cohesive branding, stunning UI/UX, and complete visual identities.',
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

export default function DesignPackagesClient() {
  return <Client />;
}
