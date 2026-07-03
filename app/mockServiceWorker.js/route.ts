import { NextResponse } from 'next/server';

/**
 * Handler for MSW (Mock Service Worker) requests
 * Returns an empty service worker file to prevent 404 errors
 * This is commonly requested by browser extensions or dev tools
 */
export async function GET() {
  // Return an empty service worker file
  return new NextResponse('', {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript',
      'Service-Worker-Allowed': '/',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}


