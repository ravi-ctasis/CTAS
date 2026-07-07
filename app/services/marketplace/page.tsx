"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Package,
  Zap,
  Target,
  BarChart3,
  Settings,
  Shield,
  TrendingUp,
  FileText,
  MessageCircle,
  Truck,
  DollarSign,
  Lock,
  Database,
  Search,
  Eye,
  RotateCcw,
  Clock,
  Users,
} from "lucide-react";

const marketplaceServices = [
  {
    title: "Inventory Management (Private Label & White Label)",
    keyBenefits: "Centralized tracking, stock visibility, avoids overselling.",
    icon: Package,
    supportedMarketplaces: [
      "Amazon",
      "eBay",
      "Walmart",
      "Etsy",
      "Shopify",
      "TikTok Shop",
      "Bol",
      "Kaufland",
      "Worten",
      "Rakuten",
      "Fnac",
      "Decathlon",
      "Spartoo",
      "Frugoo",
      "Abebooks",
    ],
  },
  {
    title: "Amazon SP-API & Multi-Marketplace API Integrations",
    keyBenefits: "Unified access to inventory, orders, shipments & reports.",
    icon: Zap,
    supportedMarketplaces: [
      "Amazon SP-API",
      "Walmart",
      "eBay",
      "Etsy",
      "Shopify",
      "TikTok Shop",
      "Bol",
      "Kaufland",
      "Worten",
      "Rakuten",
      "Fnac",
      "Decathlon",
      "Spartoo",
      "Frugoo",
      "Abebooks",
    ],
  },
  {
    title: "Automated Purchase Orders (via FTP/API)",
    keyBenefits: "Seamless supplier backordering, reduces stock-outs.",
    icon: Target,
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify", "Bol", "Kaufland"],
  },
  {
    title: "Automated Order Fulfillment",
    keyBenefits: "Faster fulfillment, reduces manual effort, integrates with 3PLs.",
    icon: Truck,
    supportedMarketplaces: [
      "Amazon",
      "Walmart",
      "eBay",
      "Shopify",
      "Etsy",
      "TikTok Shop",
      "Bol",
      "Kaufland",
      "Worten",
      "Rakuten",
      "Fnac",
      "Decathlon",
    ],
  },
  {
    title: "Multi-Marketplace Synchronization",
    keyBenefits: "Real-time inventory sync, prevents overselling, consolidated management.",
    icon: Settings,
    supportedMarketplaces: ["All supported marketplaces"],
  },
  {
    title: "Marketplace Advertising & PPC Management",
    keyBenefits: "Campaign optimization, higher ROI, improved visibility.",
    icon: TrendingUp,
    supportedMarketplaces: [
      "Amazon",
      "Walmart",
      "eBay",
      "Etsy",
      "TikTok Shop",
      "Google Shopping",
    ],
  },
  {
    title: "Advanced Advertising (DSP, A/B Testing)",
    keyBenefits: "Audience targeting, keyword tracking, conversion optimization.",
    icon: BarChart3,
    supportedMarketplaces: ["Amazon DSP", "Walmart Connect", "eBay Ads"],
  },
  {
    title: "Amazon A+ Content & Brand Content",
    keyBenefits: "Enhanced brand pages, better conversion, improved SEO ranking.",
    icon: FileText,
    supportedMarketplaces: ["Amazon"],
  },
  {
    title: "Product Catalog Management",
    keyBenefits: "Bulk uploads, variation handling, listing error fixes.",
    icon: Package,
    supportedMarketplaces: [
      "Amazon",
      "Walmart",
      "eBay",
      "Etsy",
      "Shopify",
      "TikTok Shop",
      "Bol",
      "Kaufland",
      "Worten",
      "Rakuten",
      "Fnac",
      "Decathlon",
    ],
  },
  {
    title: "Content Optimization",
    keyBenefits: "SEO-driven titles, bullet points, descriptions & images.",
    icon: Search,
    supportedMarketplaces: ["Amazon", "eBay", "Walmart", "Etsy", "Shopify"],
  },
  {
    title: "Dynamic Repricing & Buy Box Optimization",
    keyBenefits: "Stay competitive, maximize Buy Box share, automated pricing.",
    icon: DollarSign,
    supportedMarketplaces: ["Amazon", "Walmart", "eBay"],
  },
  {
    title: "Pricing & Profitability Analytics",
    keyBenefits: "Profit calculation, fee analysis, competitor benchmarking.",
    icon: BarChart3,
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify"],
  },
  {
    title: "Fulfillment Solutions (FBA/FBM/3PL/AWD/WFS)",
    keyBenefits: "End-to-end order delivery, scalable logistics.",
    icon: Truck,
    supportedMarketplaces: [
      "Amazon (FBA, FBM, AWD, Seller Flex)",
      "Walmart (WFS)",
      "Shopify",
      "3PL providers",
    ],
  },
  {
    title: "Returns & Refunds Management",
    keyBenefits: "Automates returns, reduces losses, improves customer experience.",
    icon: RotateCcw,
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify"],
  },
  {
    title: "Reimbursement & Claims Management",
    keyBenefits: "Recover fees, shipment discrepancy claims, cost savings.",
    icon: Shield,
    supportedMarketplaces: ["Amazon (FBA)", "Walmart", "eBay"],
  },
  {
    title: "Financial Reconciliation & Settlement Reports",
    keyBenefits: "Settlement validation, payout reconciliation, P&L dashboards.",
    icon: FileText,
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify"],
  },
  {
    title: "Compliance & Policy Management",
    keyBenefits: "Avoids suspensions, MAP monitoring, IP/trademark protection.",
    icon: Lock,
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Etsy", "TikTok Shop"],
  },
  {
    title: "Customer Feedback & Review Management",
    keyBenefits: "Review monitoring, negative feedback alerts, automated responses.",
    icon: MessageCircle,
    supportedMarketplaces: ["Amazon", "eBay", "Walmart", "Etsy"],
  },
  {
    title: "Data Extraction & Marketplace Analytics",
    keyBenefits: "Business intelligence, competitor benchmarking, sales insights.",
    icon: Database,
    supportedMarketplaces: ["All supported marketplaces"],
  },
  {
    title: "Web Scraping & Data Aggregation",
    keyBenefits: "Competitive monitoring, catalog enrichment, price tracking.",
    icon: Eye,
    supportedMarketplaces: ["Amazon", "eBay", "Walmart", "Rakuten", "Fnac", "Shopify"],
  },
  {
    title: "Sales & Performance Analytics",
    keyBenefits: "Conversion tracking, Buy Box %, traffic insights.",
    icon: BarChart3,
    supportedMarketplaces: ["Amazon", "Walmart", "eBay", "Shopify", "Etsy"],
  },
];

export default function MarketplaceServicesPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Marketplace Services",
        hero: {
          badge: "Trusted by 1000+ Businesses",
          title: "Marketplace",
          highlight: "Services",
          description:
            "Comprehensive marketplace management solutions for all major e-commerce platforms. From inventory management to AI-powered insights, we've got you covered.",
          stats: [
            { number: "23+", label: "Services", icon: Package },
            { number: "15+", label: "Marketplaces", icon: Target },
            { number: "1000+", label: "Clients", icon: Users },
            { number: "24/7", label: "Support", icon: Clock },
          ],
          primaryCta: { label: "View All Services", href: "/services" },
          secondaryCta: { label: "Get Started", href: "/contact-us" },
        },
        sections: [
          {
            type: "marketplace-grid",
            header: {
              badge: "Our Services",
              title: "Marketplace",
              highlight: "Management Services",
              description:
                "End-to-end marketplace solutions covering inventory, fulfillment, advertising, analytics, and compliance across all major platforms.",
            },
            items: marketplaceServices,
          },
        ],
        cta: {
          title: "Ready to Scale Across Marketplaces?",
          description:
            "Let's discuss your multi-marketplace strategy and build solutions that streamline operations and drive growth.",
          primaryLabel: "Get Started",
          primaryHref: "/contact-us",
          secondaryLabel: "View All Services",
          secondaryHref: "/services",
        },
      }}
    />
  );
}
