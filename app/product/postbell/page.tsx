import type { Metadata } from "next";
import PostbellPage from "./client";

export const metadata: Metadata = {
  title: {
    absolute: "Postbell: Amazon Multi-Channel Order Alerts"
  },
  description: "Create, schedule, and publish content automatically across 9+ social media channels with Postbell. Generate engaging marketing copy and visuals using AI.",
  keywords: [
    "social media automation",
    "AI content creation",
    "social media scheduling",
    "multi-platform publishing",
    "Postbell",
    "social media management",
  ],
  alternates: {
    canonical: "/product/postbell",
  },
  openGraph: {
    title: "Postbell — AI-Powered Social Media Automation Platform",
    description: "Create, schedule, and publish content automatically across 9+ social media channels with Postbell. Generate engaging marketing copy and visuals using AI.",
    url: "/product/postbell",
    images: [
      {
        url: "/products/postbell-og.webp",
        width: 1200,
        height: 630,
        alt: "Postbell Social Media Automation Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Postbell — AI-Powered Social Media Automation Platform",
    description: "Create, schedule, and publish content automatically across 9+ social media channels with Postbell. Generate engaging marketing copy and visuals using AI.",
    images: ["/products/postbell-og.webp"],
  },
};

export default function Page() {
  return <PostbellPage />;
}
