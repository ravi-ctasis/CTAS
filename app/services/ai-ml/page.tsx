import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services | Ctas Info Services',
  description: 'Leverage AI and Machine Learning to transform your business. We build custom predictive models, NLP tools, and intelligent automation systems.',
  keywords: ['AI services', 'Machine Learning company', 'Enterprise AI development', 'Custom ML models', 'AI automation'],
  alternates: {
    canonical: 'https://www.ctasis.com/services/ai-ml',
  },
  openGraph: {
    title: 'AI & Machine Learning Services | Custom Enterprise Solutions | Ctas Info Services',
    description: 'Leverage AI and Machine Learning to transform your business. We build custom predictive models, NLP tools, and intelligent automation systems.',
    url: 'https://www.ctasis.com/services/ai-ml',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'AI & Machine Learning Services by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Machine Learning Services | Custom Enterprise Solutions | Ctas Info Services',
    description: 'Leverage AI and Machine Learning to transform your business. We build custom predictive models, NLP tools, and intelligent automation systems.',
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

export default function AimLClient() {
  return <Client />;
}
