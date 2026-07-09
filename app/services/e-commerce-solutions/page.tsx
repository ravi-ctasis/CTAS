"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  Users,
  Award,
  Clock,
  CheckCircle,
  Search,
  BarChart,
  Rocket,
  Shield,
  Code,
  Smartphone,
  Building,
  Store,
  Zap,
  TrendingUp,
  Cloud,
  Target,
  Star,
} from "lucide-react";

const ecommerceTypes = [
  {
    title: "B2B E-commerce",
    description:
      "Enterprise-level B2B e-commerce platforms for wholesale and business transactions",
    icon: Building,
    image: "/service-banners/e-commerce-solutions.webp",
    features: [
      "Bulk ordering and inventory management",
      "Multi-tier pricing and customer groups",
      "Advanced payment and credit terms",
      "Integration with ERP systems",
      "Custom catalog management",
      "B2B-specific analytics and reporting",
    ],
    pills: ["Magento", "Shopify Plus", "WooCommerce", "SAP Commerce", "Oracle Commerce", "Salesforce Commerce"],
  },
  {
    title: "B2C E-commerce",
    description: "Consumer-focused e-commerce solutions for retail businesses",
    icon: ShoppingCart,
    features: [
      "User-friendly shopping experience",
      "Mobile-responsive design",
      "Multiple payment gateways",
      "Inventory and order management",
      "Customer reviews and ratings",
      "Marketing and promotion tools",
    ],
    pills: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "PrestaShop", "OpenCart"],
  },
  {
    title: "Marketplace Platform",
    description: "Multi-vendor marketplace platforms connecting buyers and sellers",
    icon: Users,
    features: [
      "Multi-vendor management system",
      "Commission and payment processing",
      "Vendor onboarding and verification",
      "Dispute resolution system",
      "Advanced search and filtering",
      "Real-time inventory sync",
    ],
    pills: ["Magento", "WooCommerce", "Shopify", "Custom Development", "Node.js", "React"],
  },
  {
    title: "Mobile e-Commerce",
    description: "Mobile-first e-commerce applications for iOS and Android",
    icon: Smartphone,
    features: [
      "Native mobile applications",
      "Push notifications and alerts",
      "Offline shopping capabilities",
      "Mobile payment integration",
      "Location-based services",
      "Social media integration",
    ],
    pills: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
  },
  {
    title: "Subscription e-Commerce",
    description: "Recurring billing and subscription management platforms",
    icon: Package,
    features: [
      "Recurring billing automation",
      "Subscription lifecycle management",
      "Tiered pricing models",
      "Usage-based billing",
      "Customer retention tools",
      "Analytics and reporting",
    ],
    pills: ["Stripe", "Chargebee", "Recurly", "WooCommerce", "Shopify", "Custom APIs"],
  },
  {
    title: "Headless e-Commerce",
    description: "Decoupled e-commerce solutions with flexible frontend options",
    icon: Code,
    features: [
      "API-first architecture",
      "Multiple frontend options",
      "Omnichannel capabilities",
      "Custom user experiences",
      "Scalable infrastructure",
      "Real-time data sync",
    ],
    pills: ["Shopify Plus", "Magento", "BigCommerce", "CommerceTools", "Stripe", "Custom APIs"],
  },
];

const techCategories = [
  {
    title: "E-commerce Platforms",
    description: "Leading e-commerce platforms and solutions",
    icon: ShoppingCart,
    technologies: [
      { name: "Shopify", icon: ShoppingCart, level: "Expert" },
      { name: "Magento", icon: ShoppingCart, level: "Expert" },
      { name: "WooCommerce", icon: ShoppingCart, level: "Expert" },
      { name: "BigCommerce", icon: ShoppingCart, level: "Advanced" },
      { name: "PrestaShop", icon: ShoppingCart, level: "Advanced" },
      { name: "OpenCart", icon: ShoppingCart, level: "Intermediate" },
    ],
  },
  {
    title: "Payment Gateways",
    description: "Secure payment processing solutions",
    icon: CreditCard,
    technologies: [
      { name: "Stripe", icon: CreditCard, level: "Expert" },
      { name: "PayPal", icon: CreditCard, level: "Expert" },
      { name: "Square", icon: CreditCard, level: "Advanced" },
      { name: "Paytm", icon: CreditCard, level: "Advanced" },
      { name: "Razorpay", icon: CreditCard, level: "Expert" },
      { name: "PayU", icon: CreditCard, level: "Advanced" },
    ],
  },
  {
    title: "Inventory Management",
    description: "Inventory and order management systems",
    icon: Package,
    technologies: [
      { name: "TradeGecko", icon: Package, level: "Advanced" },
      { name: "Zoho Inventory", icon: Package, level: "Advanced" },
      { name: "Fishbowl", icon: Package, level: "Intermediate" },
      { name: "SAP Business One", icon: Package, level: "Expert" },
      { name: "NetSuite", icon: Package, level: "Expert" },
      { name: "QuickBooks", icon: Package, level: "Advanced" },
    ],
  },
  {
    title: "Shipping & Logistics",
    description: "Shipping and logistics integration solutions",
    icon: Truck,
    technologies: [
      { name: "ShipStation", icon: Truck, level: "Advanced" },
      { name: "ShipBob", icon: Truck, level: "Advanced" },
      { name: "FedEx API", icon: Truck, level: "Expert" },
      { name: "UPS API", icon: Truck, level: "Expert" },
      { name: "DHL API", icon: Truck, level: "Advanced" },
      { name: "USPS API", icon: Truck, level: "Advanced" },
    ],
  },
  {
    title: "Analytics & Marketing",
    description: "E-commerce analytics and marketing tools",
    icon: BarChart,
    technologies: [
      { name: "Google Analytics", icon: BarChart, level: "Expert" },
      { name: "Klaviyo", icon: BarChart, level: "Advanced" },
      { name: "Mailchimp", icon: BarChart, level: "Advanced" },
      { name: "Facebook Pixel", icon: BarChart, level: "Expert" },
      { name: "Hotjar", icon: BarChart, level: "Advanced" },
      { name: "Segment", icon: BarChart, level: "Advanced" },
    ],
  },
  {
    title: "Security & Compliance",
    description: "E-commerce security and compliance solutions",
    icon: Shield,
    technologies: [
      { name: "SSL Certificates", icon: Shield, level: "Expert" },
      { name: "PCI DSS", icon: Shield, level: "Expert" },
      { name: "GDPR Compliance", icon: Shield, level: "Advanced" },
      { name: "Fraud Detection", icon: Shield, level: "Advanced" },
      { name: "3D Secure", icon: Shield, level: "Expert" },
      { name: "Tokenization", icon: Shield, level: "Advanced" },
    ],
  },
];

const integrations = [
  {
    title: "Marketplace Integrations",
    icon: Store,
    items: ["Amazon", "eBay", "Walmart", "Shopify", "TikTok Shop", "Etsy"],
  },
  {
    title: "Amazon Solutions",
    icon: Store,
    items: [
      "Amazon SP-API",
      "FBA Management",
      "FBM Management",
      "Amazon Advertising",
      "Amazon Reviews",
      "Amazon Analytics",
      "Amazon Inventory",
      "Amazon Automation",
      "Amazon Compliance",
    ],
  },
  {
    title: "Payment Gateways",
    icon: CreditCard,
    items: ["Stripe", "PayPal", "Square", "Razorpay", "PayU", "Paytm"],
  },
  {
    title: "Shipping & Logistics",
    icon: Truck,
    items: ["FedEx", "Shiprocket", "DHL", "BlueDart", "Ecom Express", "Delhivery"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "DigitalOcean",
      "Vercel",
      "Netlify",
      "AWS Lambda",
      "Cloudflare Workers",
      "Render",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your business requirements and e-commerce goals",
    icon: Search,
  },
  {
    step: "02",
    title: "Platform Selection",
    description: "Choosing the right e-commerce platform for your business needs",
    icon: ShoppingCart,
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Creating custom e-commerce solutions with modern technologies",
    icon: Code,
  },
  {
    step: "04",
    title: "Integration & Testing",
    description: "Integrating payment gateways and testing all functionalities",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Launch & Optimization",
    description: "Launching your e-commerce platform and optimizing performance",
    icon: Rocket,
  },
];

const topicalGuideTabs = [
  {
    id: "platform-selection",
    title: "E-commerce Platform Selection",
    content:
      "Selecting the perfect e-commerce platform is crucial for your business success. Consider factors like business size, budget, features, and scalability.",
    points: [
      "Evaluate your business requirements and target audience",
      "Compare platform features, pricing, and scalability",
      "Consider integration capabilities with existing systems",
      "Assess technical support and community resources",
      "Review security features and compliance requirements",
      "Start with a platform that can grow with your business",
      "Consider cloud-based solutions for better scalability",
      "Look for platforms with strong mobile e-commerce support",
      "Ensure the platform supports your preferred payment methods",
      "Check for built-in SEO and marketing tools",
    ],
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Integration",
    content:
      "Integrating reliable payment gateways is essential for e-commerce success. Choose payment solutions that offer security, convenience, and global reach.",
    points: [
      "Select payment gateways that support your target markets",
      "Implement secure payment processing protocols",
      "Integrate multiple payment methods for customer convenience",
      "Set up fraud detection and prevention systems",
      "Ensure PCI DSS compliance for payment security",
      "Offer multiple payment options to increase conversion rates",
      "Implement 3D Secure for additional security layers",
      "Use tokenization to protect sensitive payment data",
      "Regularly monitor and analyze payment processing metrics",
      "Have backup payment gateways for business continuity",
    ],
  },
  {
    id: "mobile-commerce",
    title: "Mobile e-Commerce Strategy",
    content:
      "Mobile e-commerce is essential for modern e-commerce success. Develop a mobile-first strategy to capture the growing mobile shopping market.",
    points: [
      "Design responsive websites that work on all devices",
      "Develop native mobile apps for better user experience",
      "Optimize checkout process for mobile users",
      "Implement mobile payment solutions like Apple Pay and Google Pay",
      "Use push notifications to engage mobile customers",
      "Focus on fast loading times for mobile users",
      "Simplify navigation and checkout for mobile screens",
      "Implement progressive web app (PWA) features",
      "Use mobile analytics to understand user behavior",
      "Test your mobile experience across different devices",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "E-commerce Solutions",
      description:
        "End-to-end e-commerce development by Ctas: marketplaces, custom stores, payment integration, logistics, and workflow automation.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "E-commerce Development",
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
          name: "E-commerce Solutions",
          item: "https://www.ctasis.com/services/e-commerce-solutions",
        },
      ],
    },
  ],
};

export default function EcommerceSolutionsPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "E-commerce Solutions",
        structuredData,
        hero: {
          badge: "E-commerce Solutions",
          title: "E-commerce",
          highlight: "Solutions",
          description:
            "We build powerful e-commerce platforms that drive sales and enhance customer experience. From B2B to B2C, marketplace to subscription models, we create comprehensive e-commerce solutions.",
          stats: [
            { number: "200+", label: "E-commerce Stores", icon: ShoppingCart },
            { number: "95%", label: "Client Satisfaction", icon: Users },
            { number: "16+", label: "Years of Excellence", icon: Award },
            { number: "24/7", label: "Support", icon: Clock },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "bento",
            header: {
              badge: "Solutions",
              title: "E-commerce",
              highlight: "Types",
              description:
                "Comprehensive e-commerce solutions tailored to your business model and growth goals.",
            },
            items: ecommerceTypes,
            columns: 3,
          },
          {
            type: "benefits",
            variant: "icon-strip",
            header: {
              badge: "Amazon Expertise",
              title: "Premier",
              highlight: "Amazon Solutions",
              description:
                "As Amazon-certified partners, we provide comprehensive Amazon marketplace solutions that drive sales growth and operational efficiency.",
            },
            items: [
              {
                title: "Amazon SP-API Certified",
                description: "Official Amazon Selling Partner API integration expertise",
                icon: Shield,
              },
              {
                title: "60+ Amazon Projects",
                description: "Proven track record with successful Amazon implementations",
                icon: Target,
              },
              {
                title: "FBA/FBM Management",
                description: "Complete fulfillment solution for both FBA and FBM models",
                icon: Package,
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support for your Amazon operations",
                icon: Clock,
              },
            ],
          },
          {
            type: "spotlight",
            header: {
              badge: "Amazon Success",
              title: "Amazon Success",
              highlight: "Metrics",
              description: "Measurable results from our Amazon marketplace expertise.",
            },
            metrics: [
              { number: "300%", label: "Average Sales Growth", icon: TrendingUp },
              { number: "95%", label: "Order Accuracy", icon: Package },
              { number: "50%", label: "Cost Reduction", icon: Zap },
              { number: "4.8/5", label: "Client Rating", icon: Star },
            ],
          },
          {
            type: "integrations",
            header: {
              badge: "Integrations",
              title: "E-commerce",
              highlight: "Integrations",
              description:
                "Connect your e-commerce store with essential third-party services to streamline operations, enhance customer experience, and drive growth.",
            },
            categories: integrations,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "E-commerce",
              highlight: "Tech Stack",
              description:
                "We use cutting-edge e-commerce technologies organized by development layers to build robust and scalable online stores.",
            },
            categories: techCategories,
          },
          {
            type: "process",
            variant: "timeline",
            header: {
              badge: "Our Process",
              title: "Development",
              highlight: "Process",
              description:
                "Our proven development process ensures quality, transparency, and timely delivery.",
            },
            steps: process,
          },
          {
            type: "tabs",
            header: {
              badge: "E-commerce Guide",
              title: "E-commerce",
              highlight: "Development Guide",
              description:
                "A comprehensive resource with essential insights, strategies, and best practices to help you build, grow, and optimize successful e-commerce platforms.",
            },
            tabs: topicalGuideTabs,
            defaultTab: "platform-selection",
          },
        ],
        cta: {
          title: "Ready to Build Your E-commerce Platform?",
          description:
            "Let's discuss your e-commerce requirements and create a powerful online store that drives sales and enhances customer experience.",
          primaryLabel: "Get Started Today",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
