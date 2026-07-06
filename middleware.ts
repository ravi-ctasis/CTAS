import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  const response = NextResponse.next();

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "img-src 'self' https://lifeatctas.s3.ap-south-1.amazonaws.com https://*.s3.ap-south-1.amazonaws.com https://*.googleapis.com https://*.gstatic.com https://maps.googleapis.com https://maps.gstatic.com",
    "media-src 'self' https://lifeatctas.s3.ap-south-1.amazonaws.com https://*.s3.ap-south-1.amazonaws.com",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com https://vercel.live",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vercel.live https://maps.googleapis.com https://*.googleapis.com",
    "frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com",
    "child-src 'self' https://www.google.com https://maps.google.com https://*.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Complete Security Headers Set
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // HSTS Header - Critical Security Enhancement
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  // Additional Security Headers
  response.headers.set("X-XSS-Protection", "1; mode=block");
  // Relaxed COEP to prevent timeout issues with external resources
  // Change from "require-corp" to "credentialless" for better compatibility
  response.headers.set("Cross-Origin-Embedder-Policy", "credentialless");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  // Relaxed CORP to allow loading resources that might not have proper headers
  response.headers.set("Cross-Origin-Resource-Policy", "cross-origin");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - mockServiceWorker.js (MSW service worker)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|mockServiceWorker.js).*)",
  ],
};
