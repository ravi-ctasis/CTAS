import type { Metadata } from 'next';
import Client from './client';

export const metadata: Metadata = {
  title: 'Event & Ticket Booking App Development | Entertainment Tech | Ctas Info',
  description: 'Scalable ticket booking platforms. We build apps for events, movies, and concerts with interactive seat selection and secure QR code ticketing.',
  keywords: ['Ticket booking app', 'Event software', 'Movie ticketing app', 'QR code ticketing'],
  alternates: {
    canonical: 'https://www.ctasis.com/solutions/ticket-booking-app',
  },
  openGraph: {
    title: 'Event & Ticket Booking App Development | Entertainment Tech | Ctas Info',
    description: 'Scalable ticket booking platforms. We build apps for events, movies, and concerts with interactive seat selection and secure QR code ticketing.',
    url: 'https://www.ctasis.com/solutions/ticket-booking-app',
    siteName: 'Ctas Info',
    type: 'website',
    images: [
      {
        url: 'https://www.ctasis.com/assets/images/logo-icon.webp',
        width: 1200,
        height: 630,
        alt: 'Event & Ticket Booking App Development by Ctas Info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event & Ticket Booking App Development | Entertainment Tech | Ctas Info',
    description: 'Scalable ticket booking platforms. We build apps for events, movies, and concerts with interactive seat selection and secure QR code ticketing.',
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

export default function TicketAppClient() {
  return <Client />;
}
