import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Chat App Development Services | Ctas Info",
  description:
    "Ctas develops custom voice chat apps: real-time audio communication, group calls, and moderation tools.",
  keywords: [
    "voice chat app development",
    "real-time audio communication",
    "group voice calls platform",
    "audio moderation tools",
    "Discord-like app services",
    "secure voice messaging tech",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/solutions/voice-chat-app",
    languages: {
      "en-US": "https://www.ctasis.com/solutions/voice-chat-app",
      "en-IN": "https://www.ctasis.com/solutions/voice-chat-app",
      "x-default": "https://www.ctasis.com/solutions/voice-chat-app",
    },
  },
  openGraph: {
    title: "High-Quality Real-Time Voice Chat & Community Apps | Ctas",
    description:
      "Connect your community with crystal-clear voice chat. Expert developers for real-time audio platforms and secure group calls.",
    url: "https://www.ctasis.com/solutions/voice-chat-app",
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
};

export default function VoiceChatAppPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
