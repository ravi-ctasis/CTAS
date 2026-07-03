import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Development Services | Ctas Info",
  description:
    "Expert web development: custom websites, web applications, React, Next.js, Node.js. Professional developers delivering modern, scalable solutions.",
  keywords: [
    // Core Web Development Services
    "Web development services",
    "Website development services",
    "Custom web application development",
    "E-commerce website development",
    "Frontend development services",
    "Backend development services",
    "Full-stack development company",
    "Progressive web app development",
    "CMS development services",
    "Enterprise web applications",

    // Technologies & Frameworks
    "Next.js development services",
    "React web applications",
    "full-stack development company",
    "Node.js development",
    "TypeScript development",
    "JavaScript frameworks",
    "Headless CMS development",
    "MERN stack development",
    "MEAN stack development",

    // E-commerce Solutions
    "E-commerce development services",
    "Online store development",
    "Shopping cart integration",
    "Payment gateway integration",
    "WooCommerce development",
    "Shopify development services",
    "Magento development",
    "Headless e-commerce solutions",

    // Business Solutions
    "Custom CRM development",
    "Business web applications",
    "SaaS application development",
    "Progressive web apps (PWA)",
    "Single Page Applications (SPA)",
    "Enterprise web portals",
    "Custom API development",
    "Third-party API integration",

    // Performance & Optimization
    "Website performance optimization",
    "Web application security",
    "Responsive web design services",
    "Mobile-first web development",
    "Web accessibility services",
    "SEO-friendly web development"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.ctasis.com/services/web-development",
    languages: {
      "en-US": "https://www.ctasis.com/services/web-development",
      "en-IN": "https://www.ctasis.com/services/web-development",
      "x-default": "https://www.ctasis.com/services/web-development",
    },
  },
  openGraph: {
    title: "Custom Web Development & Professional Scalable Solutions | Ctas",
    description: "Build high-performance, modern web applications with our expert team. Specializing in Next.js, React, and tailored enterprise solutions.",
    url: "https://www.ctasis.com/services/web-development",
    images: [
      {
        url: "/web-development-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Web Development Services",
      },
    ],
  },
};

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
