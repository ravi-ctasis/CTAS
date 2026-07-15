import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Automation Services | Ctas Info Services",
  description: "Streamline your online store with Ctas' E-commerce automation solutions: product listings, inventory management, order processing, and AI-powered workflows.",
  keywords: [
    // Core E-commerce Automation
    "e-commerce workflow automation",
    "automated inventory management",
    "AI powered e-commerce solutions",
    "automated order processing",
    "product listing automation",
    "e-commerce efficiency tools",

    // Marketplace Integration
    "Multi marketplace inventory management",
    "Marketplace API integration services",
    "Custom marketplace connector development",
    "Enterprise marketplace architecture",
    "Multi-channel order management system",
    "Omnichannel retail management software",
    "Marketplace connector development (SaaS)",
    "Scalable e-commerce microservices",

    // Platform-Specific Solutions
    "Shopify to Amazon integration agency",
    "Walmart marketplace API developer",
    "TikTok Shop automation for enterprise",
    "eBay API developer for inventory sync",
    "Multi-channel e-commerce API tools",
    "Adobe Commerce vs custom development",

    // Advanced E-commerce Features
    "Headless commerce development company",
    "B2B e-commerce platform development",
    "Custom e-commerce marketplace build",
    "Shopify ERP integration services",
    "D2C brand technology scaling partner",
    "Custom e-commerce checkout optimization",

    // Inventory & Fulfillment
    "E-commerce stock forecasting software",
    "Global e-commerce logistics software",
    "Real-time marketplace inventory sync",
    "Automated order fulfillment software",
    "Predictive inventory forecasting API",
    "Cross-border logistics automation",

    // Marketing & Optimization
    "Marketplace SEO audit services",
    "Walmart SEO ranking strategy",
    "Marketplace conversion rate optimization",
    "Amazon A+ content design services",
    "Multi-marketplace keyword research",
    "Automated product description generator",
    "E-commerce visual search optimization",

    // Advertising & Analytics
    "Marketplace PPC automation software",
    "Walmart sponsored products agency",
    "Scaling marketplace ad spend ROI",
    "Multi-channel ad attribution tools",
    "Custom bidding algorithm development",
    "Marketplace media buying services",
    "Marketplace analytics dashboard build",

    // Business Solutions
    "Marketplace brand protection services",
    "Global marketplace expansion consultant",
    "Custom marketplace repricing tool",
    "Automated returns management system",
    "AI marketplace automation agency"
  ],
  alternates: {
    canonical: "https://www.ctasis.com/services/ecommerce-workflow-automation",
    languages: {
      "en-US": "https://www.ctasis.com/services/ecommerce-workflow-automation",
      "en-IN": "https://www.ctasis.com/services/ecommerce-workflow-automation",
      "x-default": "https://www.ctasis.com/services/ecommerce-workflow-automation",
    },
  },
  openGraph: {
    title: "Streamline Your Business with E-commerce Automation | Ctas",
    description: "Boost efficiency and reduce manual work with custom AI-powered workflows. Expert automation for global online stores.",
    url: "/services/ecommerce-workflow-automation",
    siteName: "Ctas Info Services",
    images: [{
      url: "/images/og/ecommerce-automation.jpg",
      width: 1200,
      height: 630,
      alt: "Ecommerce Workflow Automation by Ctas"
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Automation Services | Ctas Info Services",
    description: "Streamline your online store with AI-powered automation solutions for inventory, orders, and workflows.",
    images: ["/images/og/ecommerce-automation.jpg"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },
};

export default function EcommerceAutomationPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
