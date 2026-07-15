import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Ctas Info Services",
  description:
    "UI/UX research, product design, and design systems from Ctas to craft intuitive, high-performing digital products.",
  keywords: [
    "user experience design",
    "modern UI development",
    "web design components",
    "custom prototyping",
    "product design systems",
  ],
  openGraph: {
    title: "Intuitive UI/UX Design & High-Performance Digital Products | Ctas",
    description: "Craft seamless user experiences with our design experts. From research to prototyping, we build beautiful and functional interfaces.",
    url: "https://www.ctasis.com/services/ui-ux",
  },
  alternates: {
    canonical: "https://www.ctasis.com/services/ui-ux",
    languages: {
      "en-US": "https://www.ctasis.com/services/ui-ux",
      "en-IN": "https://www.ctasis.com/services/ui-ux",
      "x-default": "https://www.ctasis.com/services/ui-ux",
    },
  },
};

export default function UIUXLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
