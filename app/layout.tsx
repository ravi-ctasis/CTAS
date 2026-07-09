import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"));

import WebSiteSchema from "@/components/WebSiteSchema";
import KnowledgeGraphSchema from "@/components/KnowledgeGraphSchema";
import SiteNavigationSchema from "@/components/SiteNavigationSchema";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Ctas Info Services - Amazon SP-API, AI & E-commerce Web Solutions",
    template: "%s | Ctas Info Services LLP",
  },
  description:
    "India’s pioneering Ctas Info Services LLP delivers AI web solutions, SP-API integration, e-commerce automation & IT services for global growth. 200+ projects delivered across retail, healthcare, and finance.",
  keywords: [
    "Ctas Info Services LLP",
    "Amazon SP API integration",
    "AI web development",
    "e-commerce web solutions",
    "Amazon automation software",
    "multi-marketplace inventory management",
    "Buy Box optimization tools",
    "Amazon A+ content management",
    "AI-powered e-commerce analytics",
    "Custom IT & software development",
    "Marketplace automation solutions",
    "Web & IT services for e-commerce",
    "Ahmedabad web development company",
    "India technology firm",
    "Amazon Seller Tools",
    "e-commerce platform development",
    "AI integration services",
    "Cloud solutions India",
    "FinTech development",
    "Healthcare technology solutions",
    "Logistics automation",
    "Education technology platforms",
    "it company",
    "it company near me",
    "IT services company",
    "Cloud & DevOps services",
    "Global IT services company",
    "Software development company serving worldwide",
    "selling partner api developer india",
  ],
  authors: [
    {
      name: "Ctas Info – Amazon SP-API, AI & E-commerce Web Solutions",
      url: "https://www.ctasis.com",
    },
  ],
  creator: "Ctas Info – Amazon SP-API, AI & E-commerce Web Solutions",
  publisher: "Ctas Info – Amazon SP-API, AI & E-commerce Web Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.ctasis.com"),
  alternates: {
    canonical: "https://www.ctasis.com",
    languages: {
      "x-default": "https://www.ctasis.com",

      "en-US": "https://www.ctasis.com",
      "en-IN": "https://www.ctasis.com",
      "en-GB": "https://www.ctasis.com",
      "en-CA": "https://www.ctasis.com",
      "en-AU": "https://www.ctasis.com",
      "en-AE": "https://www.ctasis.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ctasis.com",
    siteName: "Ctas Info – Amazon SP-API, AI & E-commerce Web Solutions",
    title: "Ctas Info – Amazon SP-API, AI & E-commerce Web Solutions",
    description:
      "India's pioneering technology firm specializing in Amazon SP-API integration, AI-powered web solutions, e-commerce automation, and custom IT services for global businesses since 2019.",
    images: [
      {
        url: "https://www.ctasis.com/logo-icon.webp",
        width: 1200,
        height: 630,
        alt: "Ctas Info Services LLP - Amazon SP-API & AI Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ctasinfoservices",
    creator: "@ctasinfoservices",
    title: "Ctas Info – Amazon SP-API, AI & E-commerce Web Solutions",
    description:
      "India's pioneering technology firm specializing in Amazon SP-API integration, AI-powered web solutions, e-commerce automation, and custom IT services for global businesses since 2019.",
    // images: ["https://ctasis.com/assets/images/twitter-card.jpg"],
  },
  verification: {
    google: "4843sqAFjwrPjde6AKJZWXP2vQismaEdFg7-4d6jUmI",
  },
  category: "Technology",
  classification: "Technology Services",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Ctas",
    "application-name": "Ctas",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
    "DC.title": "Ctas Info – Amazon SP-API, AI & E-commerce Web Solutions",
    "DC.creator": "Ctas Info Services LLP",
    "DC.subject": "Technology, Amazon SP-API, AI, e-commerce, Web Development",
    "DC.description":
      "India's pioneering technology firm specializing in Amazon SP-API integration, AI-powered web solutions, e-commerce automation, and custom IT services for global businesses since 2019.",
    "DC.publisher": "Ctas Info Services LLP",
    "DC.contributor": "Ctas Info Services LLP",
    "DC.date": "2019",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://www.ctasis.com",
    "DC.source": "https://www.ctasis.com",
    "DC.language": "en",
    "DC.relation": "https://www.ctasis.com",
    "DC.coverage": "Worldwide",
    "DC.rights": "Copyright 2024 Ctas Info Services LLP",
  },
  icons: {
    apple: "/logo_large.svg",
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.webp", sizes: "15x15", type: "image/webp" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO & Sitelinks */}
        <WebSiteSchema />
        <KnowledgeGraphSchema />
        <SiteNavigationSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <FloatingWhatsApp />
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={"GTM-PQLQNJS"} />
        <GoogleAnalytics gaId={"G-0M6803LW7E"} />
      </body>
    </html>
  );
}
