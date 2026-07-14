import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Integration Services | Custom Development & Automation | Ctas Info",
  description: "Build, scale, and optimize your Shopify store with our expert development and integration services. From custom theme development to multi-channel marketplace automation.",
  alternates: {
    canonical: "https://www.ctasis.com/services/shopify",
  },
  openGraph: {
    title: "Shopify Integration Services | Custom Development & Automation | Ctas Info",
    description: "Build, scale, and optimize your Shopify store with our expert development and integration services.",
    url: "https://www.ctasis.com/services/shopify",
    type: "website",
  },
};

import ShopifyClient from './shopifyClient';

export default function Page() {
  return <ShopifyClient />;
}
