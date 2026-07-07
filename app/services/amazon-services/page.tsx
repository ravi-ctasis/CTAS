"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Search,
  TrendingUp,
  Shield,
  CheckCircle,
  Star,
  FileText,
  BarChart3,
  Zap,
  Target,
  Package,
  MessageCircle,
  Clock,
  Award,
  Truck,
  DollarSign,
} from "lucide-react";

const services = [
  {
    title: "Inventory & Order Management",
    description:
      "Centralized stock tracking, SP-API integrations, and automated fulfillment for FBA & FBM operations",
    icon: Package,
    features: [
      "Amazon Inventory Management (Private Label & White Label)",
      "Amazon SP-API Integrations for real-time data access",
      "Automated Purchase Orders to Suppliers/Wholesalers",
      "Automated Amazon Order Fulfillment (FBA & FBM)",
      "Returns & Refunds Management with automation",
      "Amazon Multi-Channel Fulfillment (MCF)",
    ],
  },
  {
    title: "Advertising & Content Optimization",
    description:
      "PPC campaign management, advanced advertising solutions, and enhanced content optimization",
    icon: TrendingUp,
    features: [
      "Amazon PPC Campaign Management (Sponsored Products, Brands, Display)",
      "Advanced Advertising Solutions (Amazon DSP, keyword tracking)",
      "A/B ad testing and budget optimization",
      "Amazon A+ Content & Brand Store Management",
      "Enhanced product descriptions and storefronts",
      "Conversion-optimized visuals and layouts",
    ],
  },
  {
    title: "Product Catalog & Listings",
    description:
      "Comprehensive product catalog management and listing optimization for maximum visibility",
    icon: FileText,
    features: [
      "Amazon Product Catalog Management",
      "Listing creation and bulk uploads",
      "Variation management and duplicate resolution",
      "Listing Optimization with SEO-driven content",
      "Enhanced product descriptions and keywords",
      "Professional image optimization",
    ],
  },
  {
    title: "Pricing & Repricing",
    description: "Dynamic pricing strategies and profitability analytics for Buy Box optimization",
    icon: DollarSign,
    features: [
      "Amazon Dynamic Repricing & Buy Box Optimization",
      "Automated pricing strategies for maximum wins",
      "Amazon Profitability & Pricing Analytics",
      "Fee breakdowns and margin tracking",
      "Competitor price intelligence",
      "Real-time pricing adjustments",
    ],
  },
  {
    title: "Fulfillment & Logistics",
    description: "End-to-end fulfillment solutions including FBA, FBM, and warehousing management",
    icon: Truck,
    features: [
      "Amazon FBA & FBM Solutions",
      "End-to-end fulfillment and shipping management",
      "Amazon Seller Flex & AWD (Amazon Warehousing & Distribution)",
      "Flexible storage and logistics solutions",
      "Reimbursement & Claims Management",
      "Lost inventory and shipment discrepancy handling",
    ],
  },
  {
    title: "Financial & Compliance",
    description:
      "Financial reconciliation, settlement reports, and comprehensive compliance management",
    icon: Shield,
    features: [
      "Amazon Financial Reconciliation & Settlement Reports",
      "Settlement validation and payout reconciliation",
      "P&L dashboards and financial tracking",
      "Compliance & Policy Management",
      "Restricted product alerts and MAP monitoring",
      "IP/trademark protection and suspension risk management",
    ],
  },
  {
    title: "Customer Engagement",
    description: "Comprehensive feedback management and customer relationship optimization",
    icon: MessageCircle,
    features: [
      "Amazon Feedback & Review Management",
      "Monitoring reviews and negative feedback alerts",
      "Automated response workflows",
      "Customer satisfaction tracking",
      "Review analysis and insights",
      "Proactive customer engagement strategies",
    ],
  },
  {
    title: "Data & Insights",
    description:
      "Advanced analytics, performance tracking, and AI-powered insights for strategic decision making",
    icon: BarChart3,
    features: [
      "Amazon Sales & Performance Analytics",
      "ASIN/SKU-level trends and Buy Box share analysis",
      "Sessions, conversion rates, and traffic insights",
      "Amazon Data Extraction & BI",
      "Historical performance and customer insights",
      "AI-Powered Insights & Forecasting",
    ],
  },
  {
    title: "Workflow Automation & Alerts",
    description: "Intelligent automation systems and real-time alerts for operational efficiency",
    icon: Zap,
    features: [
      "Low-inventory alerts and automated notifications",
      "Shipment delay notifications and tracking",
      "Supplier performance tracking and alerts",
      "Automated workflow optimization",
      "Real-time monitoring and reporting",
      "Custom alert configurations",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your current Amazon presence and identify optimization opportunities",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create a customized action plan tailored to your business goals",
    icon: Target,
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute the strategy with precision and monitor performance metrics",
    icon: Zap,
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuously refine and improve based on data and performance",
    icon: TrendingUp,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Amazon Services",
      description:
        "Ctas provides complete Amazon services including store setup, product listing, A+ content, Amazon SEO, PPC management, and brand growth solutions.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "Amazon Services",
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Amazon Services",
          item: "https://www.ctasis.com/services/amazon-services",
        },
      ],
    },
  ],
};

export default function AmazonServicesPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Amazon Services",
        structuredData,
        hero: {
          badge: "Premium Amazon Solutions",
          title: "Transform Your Amazon Business",
          highlight: "With Elite Services",
          description:
            "Unlock explosive growth with our 32+ professional services designed to optimize, automate, and scale your Amazon business to market-dominating success.",
          stats: [
            { number: "500+", label: "Success Stories", icon: Star },
            { number: "32+", label: "Professional Services", icon: CheckCircle },
            { number: "100%", label: "Secure & Reliable", icon: Shield },
            { number: "24/7", label: "Support", icon: Clock },
          ],
          primaryCta: { label: "Start Your Success Journey", href: "/contact-us" },
          secondaryCta: { label: "View Success Stories", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "alternating",
            header: {
              badge: "Our Services",
              title: "Our Premium",
              highlight: "Amazon Services",
              description:
                "Comprehensive solutions designed to optimize, automate, and scale your Amazon business.",
            },
            items: services,
            columns: 3,
          },
          {
            type: "benefits",
            variant: "icon-strip",
            header: {
              badge: "Why Choose Us",
              title: "Why Choose Our",
              highlight: "Amazon Services?",
              description: "Expert solutions backed by years of Amazon marketplace experience.",
            },
            items: [
              {
                title: "Expert Team",
                description: "Certified Amazon specialists with proven track record",
                icon: Award,
              },
              {
                title: "Proven Results",
                description: "Track record of success with measurable outcomes",
                icon: TrendingUp,
              },
              {
                title: "24/7 Support",
                description: "Always here to help when you need us most",
                icon: Clock,
              },
              {
                title: "Account Safety",
                description: "Protect your business with our expertise",
                icon: Shield,
              },
            ],
          },
          {
            type: "process",
            variant: "timeline",
            header: {
              badge: "Our Process",
              title: "Our 4-Step",
              highlight: "Success Process",
              description:
                "A proven methodology that transforms Amazon businesses from concept to market dominance.",
            },
            steps: processSteps,
          },
        ],
        cta: {
          title: "Ready to Transform Your Amazon Business?",
          description:
            "Let's work together to maximize your Amazon business success and achieve market dominance.",
          primaryLabel: "Start Your Success Journey",
          primaryHref: "/contact-us",
          secondaryLabel: "View Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
