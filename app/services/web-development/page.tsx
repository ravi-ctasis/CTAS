"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Code,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  CheckCircle,
  Monitor,
  Server,
  Cloud,
  Palette,
  Search,
  Rocket,
  TrendingUp,
  Headphones,
  FileText,
  Building,
  Cpu,
  Layers,
  Network,
  Activity,
  Braces,
  Brackets,
  Square,
  Circle,
  Triangle,
  Hexagon,
} from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Professional Web Development Services",
      description:
        "Expert web development services including custom websites, web applications, React, Next.js, Node.js solutions.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
        logo: "https://www.ctasis.com/assets/images/ctas-logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+917948993409",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "English",
        },
      },
      serviceType: "Web Development",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Professional Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Development",
              description:
                "Professional custom web development services with tailored web applications",
              provider: {
                "@type": "Organization",
                name: "Ctas Info Services LLP",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "eCommerce Development",
              description:
                "Professional eCommerce development services with complete online store solutions including payment processing and inventory management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise Web Applications",
              description:
                "Scalable web applications designed for large organizations and complex business processes",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        description:
          "Professional web development services including custom websites, web applications, React, Next.js, Node.js solutions.",
        images: ["https://www.ctasis.com/assets/images/web-dev-twitter-card.jpg"],
        site: "@ctasinfoservices",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Development",
          item: "https://www.ctasis.com/services/web-development",
        },
      ],
    },
  ],
};

const services = [
  {
    title: "Custom Web Development",
    description:
      "Professional custom web development services with tailored web applications built from scratch to meet your specific business requirements using modern technologies",
    icon: Monitor,
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "UI/UX Design",
      "Performance Optimization",
    ],
  },
  {
    title: "CMS-Based Websites",
    description:
      "Expert content management system development that gives you full control over your website content with professional CMS solutions",
    icon: FileText,
    features: [
      "WordPress Development",
      "Drupal Solutions",
      "Joomla Development",
      "Content Management",
    ],
  },
  {
    title: "eCommerce Development",
    description:
      "Professional eCommerce development services with complete online store solutions including payment processing and inventory management",
    icon: ShoppingCart,
    features: [
      "Payment Gateways",
      "Inventory Management",
      "Order Processing",
      "Analytics Dashboard",
    ],
  },
  {
    title: "Enterprise Web Applications",
    description:
      "Expert enterprise web application development with scalable web applications designed for large organizations and complex business processes",
    icon: Building,
    features: [
      "Scalable Architecture",
      "Multi-user Systems",
      "Advanced Security",
      "Integration APIs",
    ],
  },
  {
    title: "PHP Web Development",
    description:
      "Professional PHP web development services with robust web applications built using PHP frameworks and modern development practices",
    icon: Server,
    features: [
      "Laravel Development",
      "CodeIgniter Solutions",
      "Custom PHP Applications",
      "API Development",
    ],
  },
  {
    title: "Python Development",
    description:
      "Expert Python web development with modern web applications and backend systems built using Python frameworks and best practices",
    icon: Cpu,
    features: [
      "Django Development",
      "Flask Applications",
      "Data Processing",
      "Machine Learning Integration",
    ],
  },
];

const techCategories = [
  {
    title: "Front-end",
    description: "Modern user interface frameworks and libraries",
    icon: Monitor,
    technologies: [
      { name: "React", icon: Braces, level: "Expert" },
      { name: "Angular", icon: Circle, level: "Advanced" },
      { name: "Vue.js", icon: Triangle, level: "Expert" },
      { name: "TypeScript", icon: Brackets, level: "Expert" },
      { name: "Next.js", icon: Square, level: "Advanced" },
      { name: "Tailwind CSS", icon: Palette, level: "Expert" },
      { name: "Preact ", icon: Layers, level: "Expert" },
      { name: "Remix js", icon: Braces, level: "Expert" },
      { name: "Django", icon: Circle, level: "Expert" },
    ],
  },
  {
    title: "Back-end",
    description: "Server-side technologies and frameworks",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: Hexagon, level: "Expert" },
      { name: "Python", icon: Cpu, level: "Advanced" },
      { name: "PHP", icon: Code, level: "Expert" },
      { name: "Laravel", icon: Layers, level: "Advanced" },
      { name: "Flask", icon: Building, level: "Advanced" },
      { name: "Express.js", icon: Network, level: "Expert" },
    ],
  },
  {
    title: "Web Server",
    description: "Cloud platforms and deployment solutions",
    icon: Cloud,
    technologies: [
      { name: "AWS", icon: Cloud, level: "Expert" },
      { name: "Azure", icon: Cloud, level: "Advanced" },
      { name: "Docker", icon: Server, level: "Advanced" },
      { name: "MySQL", icon: Database, level: "Expert" },
      { name: "MongoDB", icon: Database, level: "Advanced" },
      { name: "PostgreSQL", icon: Activity, level: "Advanced" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements and creating a detailed project plan",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "Building your website with modern technologies and best practices",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing across all devices and browsers",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deployment, monitoring, and ongoing maintenance support",
    icon: Rocket,
  },
];

const features = [
  {
    title: "Responsive Design",
    description: "Websites that look perfect on all devices",
    icon: Smartphone,
  },
  {
    title: "SEO Optimized",
    description: "Built for search engine visibility and ranking",
    icon: Search,
  },
  {
    title: "Fast Performance",
    description: "Lightning-fast loading speeds and optimization",
    icon: Zap,
  },
  {
    title: "Security First",
    description: "Enterprise-grade security and data protection",
    icon: Shield,
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business needs",
    icon: TrendingUp,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: Headphones,
  },
];

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Web Development Services",
        structuredData,
        hero: {
          badge: "Our Website Development Services",
          title: "Professional",
          highlight: "Web Development Services",
          description:
            "We create cutting-edge web applications that drive business growth. From responsive websites to complex web platforms, we deliver solutions that exceed expectations.",
          stats: [
            { number: "100+", label: "Websites Built", icon: Globe },
            { number: "50+", label: "Happy Clients", icon: Users },
            { number: "7+", label: "Years Experience", icon: Award },
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
              badge: "Our Professional Web Development Services",
              title: "Comprehensive",
              highlight: "Web Development Solutions",
              description:
                "We offer end-to-end professional web development services tailored to your business needs. Our expert developers deliver custom web solutions using modern technologies.",
            },
            items: services,
            columns: 3,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "Modern",
              highlight: "Tech Stack",
              description:
                "We use cutting-edge technologies organized by development layers to build robust and scalable web applications.",
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
            type: "benefits",
            variant: "zigzag",
            header: {
              badge: "Why Choose Us",
              title: "Key",
              highlight: "Features",
              description:
                "We deliver exceptional web solutions with cutting-edge features and technologies.",
            },
            items: features,
          },
        ],
        cta: {
          title: "Ready to Build Your Website?",
          description:
            "Let's discuss your project and create a stunning website that drives results.",
          primaryLabel: "Get Started Today",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
