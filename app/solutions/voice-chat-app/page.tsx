import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Voice Chat App Development | Ctas Info Services',
  description: 'Secure, low-latency audio communication. We develop scalable voice chat and VoIP applications tailored for gaming, enterprise, or social use.',
  keywords: ['Voice chat app', 'VoIP development', 'Audio streaming app', 'Clubhouse clone', 'Secure communication software'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/voice-chat-app',
  },
  openGraph: {
    title: 'Voice Chat & Communication App Development | Ctas Info Services',
    description: 'Secure, low-latency audio communication. We develop scalable voice chat and VoIP applications tailored for gaming, enterprise, or social use.',
    url: 'https://www.ctasis.com/solutions/voice-chat-app',
    siteName: 'Ctas Info Services',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Voice Chat & Communication App Development by Ctas Info Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice Chat & Communication App Development | Ctas Info Services',
    description: 'Secure, low-latency audio communication. We develop scalable voice chat and VoIP applications tailored for gaming, enterprise, or social use.',
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

export default function VoiceAppClient() {
  return <Client />;
}
