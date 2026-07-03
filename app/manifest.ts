import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ctas Info – Amazon SP-API, AI & E-commerce Solutions',
    short_name: 'Ctas',
    description: 'India\'s pioneering technology firm specializing in Amazon SP-API integration, AI-powered web solutions, e-commerce automation, and custom IT services for global businesses since 2019.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['business', 'productivity', 'technology'],
    icons: [
      {
        src: '/logo_large.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      },
      {
        src: '/favicon.ico',
        sizes: '15x15 32x32',
        type: 'image/x-icon'
      }
    ],
    screenshots: [
      {
        src: '/assets/images/og-image.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        form_factor: 'wide'
      }
    ],
    related_applications: [],
    prefer_related_applications: false
  }
}
