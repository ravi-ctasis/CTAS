import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Design Packages | UI/UX & Web | Ctas Info Services",
  description: "Comprehensive design packages from Ctas: branding, UI/UX, and web design. Complete visual identity solutions for growing businesses.",
  keywords: [
    "complete design packages",
    "corporate branding services",
    "UI/UX design bundles",
    "web design identity",
    "logo and brand guidelines",
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/complete-design-packages",
    languages: {
      "en-US": "https://www.ctasis.com/services/complete-design-packages",
      "en-IN": "https://www.ctasis.com/services/complete-design-packages",
      "x-default": "https://www.ctasis.com/services/complete-design-packages",
    },
  },
  openGraph: {
    title: "All-in-One Design & Branding Packages | Ctas Info Services",
    description: "Elevate your brand with our complete design solutions. From UI/UX to full visual identity, we deliver premium design bundles.",
    url: "https://www.ctasis.com/services/complete-design-packages",
  },
};

export default function CompleteDesignPackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

