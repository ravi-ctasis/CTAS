"use client";
import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Globe,
  Zap,
  TrendingUp,
  Cloud,
  Target,
  Star,
} from "lucide-react";
import Link from "next/link";

const EcommerceSolutions = () => {
  const ecommerceTypes = [
    {
      title: "B2B E-commerce",
      description:
        "Enterprise-level B2B e-commerce platforms for wholesale and business transactions",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Bulk ordering and inventory management",
        "Multi-tier pricing and customer groups",
        "Advanced payment and credit terms",
        "Integration with ERP systems",
        "Custom catalog management",
        "B2B-specific analytics and reporting",
      ],
      technologies: [
        "Magento",
        "Shopify Plus",
        "WooCommerce",
        "SAP Commerce",
        "Oracle Commerce",
        "Salesforce Commerce",
      ],
    },
    {
      title: "B2C E-commerce",
      description: "Consumer-focused e-commerce solutions for retail businesses",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      features: [
        "User-friendly shopping experience",
        "Mobile-responsive design",
        "Multiple payment gateways",
        "Inventory and order management",
        "Customer reviews and ratings",
        "Marketing and promotion tools",
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "PrestaShop", "OpenCart"],
    },
    {
      title: "Marketplace Platform",
      description: "Multi-vendor marketplace platforms connecting buyers and sellers",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      features: [
        "Multi-vendor management system",
        "Commission and payment processing",
        "Vendor onboarding and verification",
        "Dispute resolution system",
        "Advanced search and filtering",
        "Real-time inventory sync",
      ],
      technologies: ["Magento", "WooCommerce", "Shopify", "Custom Development", "Node.js", "React"],
    },
    {
      title: "Mobile e-Commerce",
      description: "Mobile-first e-commerce applications for iOS and Android",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      features: [
        "Native mobile applications",
        "Push notifications and alerts",
        "Offline shopping capabilities",
        "Mobile payment integration",
        "Location-based services",
        "Social media integration",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
    },
    {
      title: "Subscription e-Commerce",
      description: "Recurring billing and subscription management platforms",
      icon: Package,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Recurring billing automation",
        "Subscription lifecycle management",
        "Tiered pricing models",
        "Usage-based billing",
        "Customer retention tools",
        "Analytics and reporting",
      ],
      technologies: ["Stripe", "Chargebee", "Recurly", "WooCommerce", "Shopify", "Custom APIs"],
    },
    {
      title: "Headless e-Commerce",
      description: "Decoupled e-commerce solutions with flexible frontend options",
      icon: Code,
      color: "from-teal-500 to-cyan-500",
      features: [
        "API-first architecture",
        "Multiple frontend options",
        "Omnichannel capabilities",
        "Custom user experiences",
        "Scalable infrastructure",
        "Real-time data sync",
      ],
      technologies: [
        "Shopify Plus",
        "Magento",
        "BigCommerce",
        "CommerceTools",
        "Stripe",
        "Custom APIs",
      ],
    },
  ];

  const techCategories = [
    {
      title: "E-commerce Platforms",
      description: "Leading e-commerce platforms and solutions",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      technologies: [
        {
          name: "Shopify",
          icon: ShoppingCart,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "Magento",
          icon: ShoppingCart,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "WooCommerce",
          icon: ShoppingCart,
          color: "from-blue-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "BigCommerce",
          icon: ShoppingCart,
          color: "from-purple-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "PrestaShop",
          icon: ShoppingCart,
          color: "from-green-500 to-teal-500",
          level: "Advanced",
        },
        {
          name: "OpenCart",
          icon: ShoppingCart,
          color: "from-gray-500 to-gray-600",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Payment Gateways",
      description: "Secure payment processing solutions",
      icon: CreditCard,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      technologies: [
        {
          name: "Stripe",
          img: "/stripe.svg",
          icon: CreditCard,
          color: "from-purple-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "PayPal",
          img: "/paypal.svg",
          icon: CreditCard,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Square",
          img: "/payment-square.svg",
          icon: CreditCard,
          color: "from-green-500 to-emerald-500",
          level: "Advanced",
        },
        {
          name: "Paytm",
          img: "/paytm.svg",
          icon: CreditCard,
          color: "from-blue-500 to-blue-600",
          level: "Advanced",
        },
        {
          name: "Razorpay",
          img: "/Razorpay_logo.svg",
          icon: CreditCard,
          color: "from-blue-600 to-indigo-600",
          level: "Expert",
        },
        {
          name: "PayU",
          img: "/payu-icon.svg",
          icon: CreditCard,
          color: "from-green-600 to-emerald-600",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Inventory Management",
      description: "Inventory and order management systems",
      icon: Package,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      technologies: [
        {
          name: "TradeGecko",
          icon: Package,
          color: "from-blue-500 to-cyan-500",
          level: "Advanced",
        },
        {
          name: "Zoho Inventory",
          icon: Package,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "Fishbowl",
          icon: Package,
          color: "from-green-500 to-emerald-500",
          level: "Intermediate",
        },
        {
          name: "SAP Business One",
          icon: Package,
          color: "from-blue-500 to-blue-600",
          level: "Expert",
        },
        {
          name: "NetSuite",
          icon: Package,
          color: "from-orange-500 to-red-500",
          level: "Expert",
        },
        {
          name: "QuickBooks",
          icon: Package,
          color: "from-green-500 to-teal-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Shipping & Logistics",
      description: "Shipping and logistics integration solutions",
      icon: Truck,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      technologies: [
        {
          name: "ShipStation",
          icon: Truck,
          color: "from-blue-500 to-cyan-500",
          level: "Advanced",
        },
        {
          name: "ShipBob",
          icon: Truck,
          color: "from-green-500 to-emerald-500",
          level: "Advanced",
        },
        {
          name: "FedEx API",
          icon: Truck,
          color: "from-purple-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "UPS API",
          icon: Truck,
          color: "from-brown-500 to-brown-600",
          level: "Expert",
        },
        {
          name: "DHL API",
          icon: Truck,
          color: "from-yellow-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "USPS API",
          icon: Truck,
          color: "from-blue-500 to-blue-600",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Analytics & Marketing",
      description: "E-commerce analytics and marketing tools",
      icon: BarChart,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      technologies: [
        {
          name: "Google Analytics",
          icon: BarChart,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Klaviyo",
          icon: BarChart,
          color: "from-purple-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "Mailchimp",
          icon: BarChart,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "Facebook Pixel",
          icon: BarChart,
          color: "from-blue-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "Hotjar",
          icon: BarChart,
          color: "from-orange-500 to-red-500",
          level: "Advanced",
        },
        {
          name: "Segment",
          icon: BarChart,
          color: "from-purple-500 to-indigo-500",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Security & Compliance",
      description: "E-commerce security and compliance solutions",
      icon: Shield,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      technologies: [
        {
          name: "SSL Certificates",
          icon: Shield,
          color: "from-green-500 to-emerald-500",
          level: "Expert",
        },
        {
          name: "PCI DSS",
          icon: Shield,
          color: "from-blue-500 to-indigo-500",
          level: "Expert",
        },
        {
          name: "GDPR Compliance",
          icon: Shield,
          color: "from-purple-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "Fraud Detection",
          icon: Shield,
          color: "from-red-500 to-pink-500",
          level: "Advanced",
        },
        {
          name: "3D Secure",
          icon: Shield,
          color: "from-blue-500 to-cyan-500",
          level: "Expert",
        },
        {
          name: "Tokenization",
          icon: Shield,
          color: "from-gray-500 to-gray-600",
          level: "Advanced",
        },
      ],
    },
  ];

  const integrations = [
    {
      category: "Marketplace Integrations",
      icon: Store,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      description: "Connect your store with major global marketplaces",
      integrations: [
        {
          name: "Amazon",
          img: "/amazon.svg",
          icon: Store,
          color: "from-orange-500 to-yellow-500",
          description: "SP-API integration with FBA/FBM management",
          features: ["Order Management", "Inventory Sync", "Analytics", "Automation"],
          level: "Expert",
        },
        {
          name: "eBay",
          img: "/ebay-logo.svg",
          icon: ShoppingCart,
          color: "from-blue-500 to-cyan-500",
          description: "eBay API integration with listing management",
          features: ["Listing Management", "Order Processing", "Inventory Sync", "Analytics"],
          level: "Expert",
        },
        {
          name: "Walmart",
          img: "/walmart-logo.svg",
          icon: Package,
          color: "from-blue-600 to-indigo-600",
          description: "Walmart Marketplace integration",
          features: [
            "Product Management",
            "Order Fulfillment",
            "Performance Analytics",
            "API Integration",
          ],
          level: "Advanced",
        },
        {
          name: "Shopify",
          img: "/shopify-logo.svg",
          icon: Globe,
          color: "from-green-500 to-emerald-500",
          description: "Shopify store development and integration",
          features: ["Custom Themes", "App Development", "API Integration", "Payment Gateways"],
          level: "Expert",
        },
        {
          name: "TikTok Shop",
          img: "/tiktokshop.svg",
          icon: Smartphone,
          color: "from-pink-500 to-purple-500",
          description: "TikTok Shop social commerce integration",
          features: ["Social Commerce", "Influencer Tools", "Analytics", "API Integration"],
          level: "Advanced",
        },
        {
          name: "Etsy",
          img: "/etsy-logo.webp",
          icon: Store,
          color: "from-orange-600 to-red-600",
          description: "Etsy marketplace integration",
          features: ["Product Management", "Seller Tools", "Analytics", "API Integration"],
          level: "Advanced",
        },
      ],
    },
    {
      category: "Amazon Solutions",
      icon: Store,
      color: "from-orange-600 to-yellow-600",
      bgColor: "from-orange-50 to-yellow-50",
      description: "Comprehensive Amazon marketplace solutions and services",
      integrations: [
        {
          name: "Amazon SP-API",
          img: "/amazon.svg",
          icon: Store,
          color: "from-orange-500 to-yellow-500",
          description: "Selling Partner API integration for advanced automation",
          features: [
            "Order Management",
            "Inventory Sync",
            "Product Catalog",
            "Reports & Analytics",
          ],
          level: "Expert",
        },
        {
          name: "FBA Management",
          icon: Package,
          img: "/fba.webp",
          color: "from-blue-500 to-cyan-500",
          description: "Fulfillment by Amazon management system",
          features: [
            "Inventory Planning",
            "Shipment Management",
            "Performance Tracking",
            "Cost Optimization",
          ],
          level: "Expert",
        },
        {
          name: "FBM Management",
          icon: Truck,
          img: "/fbm.webp",
          color: "from-green-500 to-emerald-500",
          description: "Fulfillment by Merchant management platform",
          features: [
            "Order Processing",
            "Shipping Integration",
            "Tracking Management",
            "Performance Analytics",
          ],
          level: "Expert",
        },
        {
          name: "Amazon Advertising",
          icon: Target,
          img: "/amazon-logo.svg",
          color: "from-purple-500 to-pink-500",
          description: "Amazon PPC and advertising campaign management",
          features: [
            "Sponsored Products",
            "Sponsored Brands",
            "Sponsored Display",
            "Campaign Optimization",
          ],
          level: "Expert",
        },
        {
          name: "Amazon Reviews",
          icon: Star,
          color: "from-yellow-500 to-orange-500",
          description: "Review management and feedback automation",
          features: [
            "Review Requests",
            "Feedback Management",
            "Review Analytics",
            "Automation Tools",
          ],
          level: "Expert",
        },
        {
          name: "Amazon Analytics",
          icon: BarChart,
          color: "from-indigo-500 to-purple-500",
          description: "Advanced analytics and reporting dashboard",
          features: [
            "Sales Analytics",
            "Performance Metrics",
            "Competitor Analysis",
            "Custom Reports",
          ],
          level: "Expert",
        },
        {
          name: "Amazon Inventory",
          icon: Package,
          color: "from-teal-500 to-cyan-500",
          description: "Intelligent inventory management system",
          features: [
            "Stock Monitoring",
            "Reorder Alerts",
            "Demand Forecasting",
            "Multi-channel Sync",
          ],
          level: "Expert",
        },
        {
          name: "Amazon Automation",
          icon: Zap,
          color: "from-red-500 to-pink-500",
          description: "Automated workflows and business processes",
          features: [
            "Price Automation",
            "Listing Management",
            "Order Processing",
            "Workflow Automation",
          ],
          level: "Expert",
        },
        {
          name: "Amazon Compliance",
          icon: Shield,
          color: "from-gray-500 to-gray-600",
          description: "Compliance monitoring and policy management",
          features: [
            "Policy Compliance",
            "Account Health",
            "Violation Alerts",
            "Compliance Reports",
          ],
          level: "Expert",
        },
      ],
    },
    {
      category: "Payment Gateways",
      icon: CreditCard,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      description: "Secure payment processing solutions",
      integrations: [
        {
          name: "Stripe",
          icon: CreditCard,
          img: "/stripe.svg",
          color: "from-purple-500 to-indigo-500",
          description: "Modern payment processing platform",
          features: [
            "Card Payments",
            "Digital Wallets",
            "Subscription Billing",
            "Fraud Protection",
          ],
          level: "Expert",
        },
        {
          name: "PayPal",
          icon: CreditCard,
          img: "/paypal.svg",
          color: "from-blue-500 to-cyan-500",
          description: "Global payment solution",
          features: [
            "PayPal Checkout",
            "PayPal Credit",
            "International Payments",
            "Mobile Payments",
          ],
          level: "Expert",
        },
        {
          name: "Square",
          icon: CreditCard,
          img: "/payment-square.svg",
          color: "from-green-500 to-emerald-500",
          description: "Complete payment ecosystem",
          features: ["Online Payments", "Point of Sale", "Invoicing", "Analytics"],
          level: "Advanced",
        },
        {
          name: "Razorpay",
          icon: CreditCard,
          img: "/Razorpay_logo.svg",
          color: "from-blue-500 to-blue-600",
          description: "Indian payment gateway",
          features: ["UPI Payments", "Card Payments", "Net Banking", "Wallet Integration"],
          level: "Expert",
        },
        {
          name: "PayU",
          icon: CreditCard,
          img: "/payu-icon.svg",
          color: "from-orange-500 to-red-500",
          description: "Multi-country payment platform",
          features: ["Multi-Currency", "Fraud Protection", "Mobile Payments", "Analytics"],
          level: "Advanced",
        },
        {
          name: "Paytm",
          img: "/paytm.svg",
          color: "from-blue-500 to-indigo-500",
          description: "Reliable payment gateway",
          features: ["Card Processing", "ACH Payments", "Recurring Billing", "Fraud Detection"],
          level: "Advanced",
        },
      ],
    },
    {
      category: "Shipping & Logistics",
      icon: Truck,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      description: "Shipping and logistics management",
      integrations: [
        {
          name: "FedEx",
          icon: Truck,
          img: "/fedex.svg",
          color: "from-purple-500 to-indigo-500",
          description: "FedEx shipping integration",
          features: ["Rate Calculation", "Label Generation", "Tracking", "Pickup Scheduling"],
          level: "Expert",
        },
        {
          name: "Shiprocket",
          icon: Truck,
          img: "/Shiprocket.svg",
          color: "from-brown-500 to-brown-600",
          description: "UPS shipping services",
          features: ["Shipping Rates", "Label Printing", "Tracking", "Delivery Confirmation"],
          level: "Expert",
        },
        {
          name: "DHL",
          icon: Truck,
          img: "/dhl-3.svg",
          color: "from-yellow-500 to-red-500",
          description: "DHL international shipping",
          features: ["International Shipping", "Customs Clearance", "Tracking", "Insurance"],
          level: "Advanced",
        },
        {
          name: "BlueDart",
          icon: Truck,
          img: "/blue-dart.webp",
          color: "from-blue-500 to-cyan-500",
          description: "Multi-carrier shipping platform",
          features: ["Multi-Carrier", "Batch Processing", "Automation", "Analytics"],
          level: "Advanced",
        },
        {
          name: "Ecom Express",
          icon: Truck,
          img: "/ecomexpress.svg",
          color: "from-green-500 to-emerald-500",
          description: "Fulfillment and shipping solution",
          features: ["Fulfillment", "Inventory Management", "Shipping", "Returns"],
          level: "Advanced",
        },
        {
          name: "Delhivery",
          icon: Truck,
          img: "/delhivery.webp",
          color: "from-orange-500 to-red-500",
          description: "Indian logistics platform",
          features: ["Express Delivery", "COD", "Reverse Logistics", "Analytics"],
          level: "Expert",
        },
      ],
    },

    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      description: "Cloud hosting and infrastructure",
      integrations: [
        {
          name: "AWS",
          icon: Cloud,
          img: "/amazon-web.svg",
          color: "from-orange-500 to-yellow-500",
          description: "Amazon Web Services",
          features: ["EC2", "S3", "RDS", "Lambda"],
          level: "Expert",
        },
        {
          name: "Google Cloud",
          icon: Cloud,
          img: "/google_cloud-icon.svg",
          color: "from-blue-500 to-cyan-500",
          description: "Google Cloud Platform",
          features: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions"],
          level: "Advanced",
        },
        {
          name: "Azure",
          icon: Cloud,
          img: "/azure.webp",
          color: "from-blue-500 to-indigo-500",
          description: "Microsoft Azure",
          features: ["Virtual Machines", "Storage", "SQL Database", "Functions"],
          level: "Advanced",
        },
        {
          name: "DigitalOcean",
          icon: Cloud,
          img: "/digitalocean-icon.svg",
          color: "from-blue-500 to-blue-600",
          description: "Cloud infrastructure platform",
          features: ["Droplets", "Spaces", "Databases", "Kubernetes"],
          level: "Advanced",
        },
        {
          name: "Vercel",
          icon: Cloud,
          img: "/vercel-icon-svgrepo-com.svg",
          color: "from-gray-500 to-gray-600",
          description: "Frontend cloud platform",
          features: ["Static Hosting", "Serverless Functions", "Edge Network", "Analytics"],
          level: "Expert",
        },
        {
          name: "Netlify",
          icon: Cloud,
          img: "/netlify.svg",
          color: "from-green-500 to-emerald-500",
          description: "Web development platform",
          features: ["Static Hosting", "Forms", "Functions", "CDN"],
          level: "Advanced",
        },
        {
          name: "AWS Lambda",
          icon: Cloud,
          img: "/amazon-web.svg",
          color: "from-gray-500 to-gray-600",
          description: "AWS Lambda",
          features: ["Serverless Functions", "Event-Driven Architecture"],
          level: "Expert",
        },
        {
          name: "Cloudflare Workers",
          icon: Cloud,
          img: "/cloudflare.svg",
          color: "from-gray-500 to-gray-600",
          description: "Cloudflare Workers",
          features: ["Serverless Functions", "Edge Network", "Analytics"],
          level: "Expert",
        },
        {
          name: "Render",
          icon: Cloud,
          img: "/render-icon.svg",
          color: "from-gray-500 to-gray-600",
          description: "Cloudflare Workers",
          features: ["Serverless Functions", "Edge Network", "Analytics"],
          level: "Expert",
        },
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your business requirements and e-commerce goals",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Platform Selection",
      description: "Choosing the right e-commerce platform for your business needs",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Creating custom e-commerce solutions with modern technologies",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "04",
      title: "Integration & Testing",
      description: "Integrating payment gateways and testing all functionalities",
      icon: CheckCircle,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Launch & Optimization",
      description: "Launching your e-commerce platform and optimizing performance",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const topicalGuide = [
    {
      title: "E-commerce Platform Selection",
      content: {
        title: "Choosing the Right E-commerce Platform",
        description:
          "Selecting the perfect e-commerce platform is crucial for your business success. Consider factors like business size, budget, features, and scalability.",
        points: [
          "Evaluate your business requirements and target audience",
          "Compare platform features, pricing, and scalability",
          "Consider integration capabilities with existing systems",
          "Assess technical support and community resources",
          "Review security features and compliance requirements",
        ],
        tips: [
          "Start with a platform that can grow with your business",
          "Consider cloud-based solutions for better scalability",
          "Look for platforms with strong mobile e-commerce support",
          "Ensure the platform supports your preferred payment methods",
          "Check for built-in SEO and marketing tools",
        ],
      },
    },
    {
      title: "Payment Gateway Integration",
      content: {
        title: "Secure Payment Processing Solutions",
        description:
          "Integrating reliable payment gateways is essential for e-commerce success. Choose payment solutions that offer security, convenience, and global reach.",
        points: [
          "Select payment gateways that support your target markets",
          "Implement secure payment processing protocols",
          "Integrate multiple payment methods for customer convenience",
          "Set up fraud detection and prevention systems",
          "Ensure PCI DSS compliance for payment security",
        ],
        tips: [
          "Offer multiple payment options to increase conversion rates",
          "Implement 3D Secure for additional security layers",
          "Use tokenization to protect sensitive payment data",
          "Regularly monitor and analyze payment processing metrics",
          "Have backup payment gateways for business continuity",
        ],
      },
    },
    {
      title: "Mobile e-Commerce Strategy",
      content: {
        title: "Mobile-First E-commerce Approach",
        description:
          "Mobile e-commerce is essential for modern e-commerce success. Develop a mobile-first strategy to capture the growing mobile shopping market.",
        points: [
          "Design responsive websites that work on all devices",
          "Develop native mobile apps for better user experience",
          "Optimize checkout process for mobile users",
          "Implement mobile payment solutions like Apple Pay and Google Pay",
          "Use push notifications to engage mobile customers",
        ],
        tips: [
          "Focus on fast loading times for mobile users",
          "Simplify navigation and checkout for mobile screens",
          "Implement progressive web app (PWA) features",
          "Use mobile analytics to understand user behavior",
          "Test your mobile experience across different devices",
        ],
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-indigo-900/95"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">
                E-commerce Solutions
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                E-commerce{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                We build powerful e-commerce platforms that drive sales and enhance customer
                experience. From B2B to B2C, marketplace to subscription models, we create
                comprehensive e-commerce solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/portfolios">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-3 rounded-lg">
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  number: "200+",
                  label: "E-commerce Stores",
                  icon: ShoppingCart,
                },
                { number: "95%", label: "Client Satisfaction", icon: Users },
                { number: "5+", label: "Years Experience", icon: Award },
                { number: "24/7", label: "Support", icon: Clock },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-purple-400" />
                    <div className="text-xl lg:text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm lg:text-base text-white/90">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* E-commerce Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {ecommerceTypes.map((app, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white shadow-lg group hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${app.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                      >
                        <app.icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors duration-300">
                      {app.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-center text-sm">
                      {app.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Amazon Solutions Spotlight */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Amazon Expertise
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Premier{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                  Amazon Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As Amazon-certified partners, we provide comprehensive Amazon marketplace solutions
                that drive sales growth and operational efficiency.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our Amazon Solutions?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Amazon SP-API Certified</h4>
                      <p className="text-gray-600 text-sm">
                        Official Amazon Selling Partner API integration expertise
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">60+ Amazon Projects</h4>
                      <p className="text-gray-600 text-sm">
                        Proven track record with successful Amazon implementations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">FBA/FBM Management</h4>
                      <p className="text-gray-600 text-sm">
                        Complete fulfillment solution for both FBA and FBM models
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600 text-sm">
                        Round-the-clock support for your Amazon operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Amazon Success Metrics</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-1">300%</h5>
                    <p className="text-gray-600 text-sm">Average Sales Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-1">95%</h5>
                    <p className="text-gray-600 text-sm">Order Accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-1">50%</h5>
                    <p className="text-gray-600 text-sm">Cost Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-1">4.8/5</h5>
                    <p className="text-gray-600 text-sm">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Integrations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                Integrations
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                E-commerce{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">
                  Integrations
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Connect your e-commerce store with essential third-party services to streamline
                operations, enhance customer experience, and drive growth.
              </p>
            </div>

            <div className="space-y-12">
              {integrations.map((category, categoryIndex) => (
                <div key={categoryIndex} className="relative">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 ${"img" in category && category.img && typeof category.img === "string"
                          ? "bg-white border-2 border-gray-200"
                          : `bg-gradient-to-r ${category.color}`
                        } rounded-3xl mb-4 shadow-lg`}
                    >
                      {"img" in category && category.img && typeof category.img === "string" ? (
                        <Image
                          src={category.img as string}
                          alt={category.category}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      ) : (
                        <category.icon className="w-10 h-10 text-white" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.category}</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  {/* Integrations Grid */}
                  <div
                    className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 shadow-lg`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.integrations.map((integration, integrationIndex) => (
                        <div
                          key={integrationIndex}
                          className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="flex items-center mb-4">
                            <div
                              className={`w-12 h-12 ${"img" in integration && integration.img
                                  ? "bg-white border border-gray-200"
                                  : `bg-gradient-to-r ${integration.color}`
                                } rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                              {"img" in integration && integration.img ? (
                                <Image
                                  src={integration.img}
                                  alt={integration.name}
                                  width={36}
                                  height={36}
                                  className="object-contain"
                                />
                              ) : "icon" in integration && integration.icon ? (
                                <integration.icon className="w-6 h-6 text-white" />
                              ) : null}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg">
                                {integration.name}
                              </h4>
                              <Badge
                                className={`text-xs ${integration.level === "Expert"
                                    ? "bg-green-100 text-green-700 border-green-200"
                                    : integration.level === "Advanced"
                                      ? "bg-blue-100 text-blue-700 border-blue-200"
                                      : "bg-gray-100 text-gray-700 border-gray-200"
                                  }`}
                              >
                                {integration.level}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            {integration.description}
                          </p>
                          <div className="space-y-2">
                            {integration.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Our Process
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Development{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, and timely delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
              {process.map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white text-center"
                >
                  <CardContent className="p-6 lg:p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {"img" in step && step.img && typeof step.img === "string" ? (
                        <Image
                          src={step.img as string}
                          alt={step.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : (
                        <step.icon className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="text-2xl font-bold text-gray-300 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Topical Guide Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 px-6 py-2 text-sm font-semibold">
                E-commerce Guide
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                E-commerce{" "}
                <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  Development Guide
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A comprehensive resource with essential insights, strategies, and best practices to
                help you build, grow, and optimize successful e-commerce platforms.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Tabs */}
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
                  <div className="space-y-2">
                    {topicalGuide.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${activeTab === index
                            ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                          }`}
                      >
                        <h3 className="font-semibold text-sm lg:text-base">{tab.title}</h3>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 p-8">
                  {topicalGuide[activeTab] && (
                    <div key={activeTab} className="animate-fade-in-up">
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {topicalGuide[activeTab].content.title}
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                          {topicalGuide[activeTab].content.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Key Points */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                            Key Points
                          </h4>
                          <div className="space-y-4">
                            {topicalGuide[activeTab].content.points.map((point, index) => (
                              <div key={index} className="flex items-start">
                                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                  <span className="text-white text-sm font-bold">{index + 1}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pro Tips */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                            Pro Tips
                          </h4>
                          <div className="space-y-4">
                            {topicalGuide[activeTab].content.tips.map((tip, index) => (
                              <div
                                key={index}
                                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-l-4 border-purple-500"
                              >
                                <div className="flex items-start">
                                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                    <span className="text-white text-sm font-bold">
                                      {index + 1}
                                    </span>
                                  </div>
                                  <p className="text-gray-700 leading-relaxed font-medium">{tip}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Technologies
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                E-commerce{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Tech Stack
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We use cutting-edge e-commerce technologies organized by development layers to build
                robust and scalable online stores.
              </p>
            </div>

            <div className="space-y-8">
              {techCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="relative">
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl mb-4 shadow-lg`}
                    >
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  {/* Technologies Grid */}
                  <div
                    className={`bg-gradient-to-br ${category.bgColor} rounded-3xl p-8 shadow-lg`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                      {category.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="bg-white rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 group"
                        >
                          <div
                            className={`w-12 h-12 ${"img" in tech && typeof tech.img === "string"
                                ? "bg-white border border-gray-200"
                                : `bg-gradient-to-r ${tech.color}`
                              } rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                          >
                            {"img" in tech && typeof tech.img === "string" ? (
                              <Image
                                src={tech.img}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            ) : "icon" in tech && tech.icon ? (
                              <tech.icon className="w-6 h-6 text-white" />
                            ) : (
                              <CreditCard className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h4>
                          <Badge
                            className={`text-xs ${tech.level === "Expert"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : tech.level === "Advanced"
                                  ? "bg-blue-100 text-blue-700 border-blue-200"
                                  : "bg-gray-100 text-gray-700 border-gray-200"
                              }`}
                          >
                            {tech.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
              Ready to Build Your{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                E-commerce Platform?
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Let&apos;s discuss your e-commerce requirements and create a powerful online store
              that drives sales and enhances customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-3 rounded-lg">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default EcommerceSolutions;
