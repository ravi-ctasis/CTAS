"use client";

import Script from "next/script";

const ServiceSchema = () => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technology Services by Ctas Info Services LLP",
    description:
      "Comprehensive technology services including Amazon SP-API integration, AI solutions, web development, and e-commerce automation",
    numberOfItems: 12,
    itemListElement: [
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/amazon-services",
        name: "Amazon SP-API Integration",
        description:
          "Complete Amazon SP-API integration services for marketplace automation, inventory management, and order processing",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "API Integration",
        category: "E-commerce Technology",
        offers: {
          "@type": "Offer",
          description: "Custom Amazon SP-API integration solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/web-development",
        name: "Web Development",
        description:
          "Custom web application development using modern technologies like React, Next.js, and TypeScript",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Web Development",
        category: "Software Development",
        offers: {
          "@type": "Offer",
          description: "Custom web development solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/mobile-apps",
        name: "Mobile App Development",
        description: "Native and cross-platform mobile application development for iOS and Android",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Mobile Development",
        category: "Software Development",
        offers: {
          "@type": "Offer",
          description: "Custom mobile app development solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/ai-solutions",
        name: "AI-Powered Solutions",
        description:
          "Artificial Intelligence integration, machine learning solutions, and AI-powered automation for business processes",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "AI Integration",
        category: "Artificial Intelligence",
        offers: {
          "@type": "Offer",
          description: "AI-powered business solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/cloud-solutions",
        name: "Cloud Solutions",
        description:
          "Cloud migration, architecture design, and optimization using AWS, Azure, and Google Cloud platforms",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Cloud Computing",
        category: "Infrastructure",
        offers: {
          "@type": "Offer",
          description: "Comprehensive cloud solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/e-commerce-solutions",
        name: "E-commerce Solutions",
        description:
          "Custom e-commerce platform development, marketplace integrations, and online store optimization",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "E-commerce Development",
        category: "E-commerce Technology",
        offers: {
          "@type": "Offer",
          description: "Custom e-commerce solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/devops",
        name: "DevOps Services",
        description:
          "DevOps implementation, CI/CD pipeline setup, server management, and infrastructure automation",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "DevOps",
        category: "Infrastructure",
        offers: {
          "@type": "Offer",
          description: "DevOps and infrastructure services",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/fintech-solutions",
        name: "FinTech Solutions",
        description:
          "Financial technology solutions including payment gateways, banking systems, and financial applications with PCI DSS compliance",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Financial Technology",
        category: "Financial Services",
        offers: {
          "@type": "Offer",
          description: "Secure FinTech solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/healthcare-technology",
        name: "Healthcare Technology",
        description:
          "HIPAA-compliant healthcare solutions including patient management systems, telemedicine platforms, and health analytics",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Healthcare Technology",
        category: "Healthcare",
        offers: {
          "@type": "Offer",
          description: "HIPAA-compliant healthcare solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/logistics-automation",
        name: "Logistics & Supply Chain",
        description:
          "IoT-enabled logistics solutions, supply chain automation, and real-time tracking systems for efficient operations",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Logistics Technology",
        category: "Logistics",
        offers: {
          "@type": "Offer",
          description: "Logistics and supply chain solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/education-technology",
        name: "Education Technology",
        description:
          "E-learning platforms, LMS development, virtual classrooms, and educational technology solutions",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Education Technology",
        category: "Education",
        offers: {
          "@type": "Offer",
          description: "Educational technology solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.ctasis.com/services/marketplace-automation",
        name: "Marketplace Automation",
        description:
          "Multi-marketplace management, inventory synchronization, and automated listing across Amazon, eBay, Walmart, and other platforms",
        provider: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
        },
        areaServed: "Worldwide",
        serviceType: "Marketplace Integration",
        category: "E-commerce Technology",
        offers: {
          "@type": "Offer",
          description: "Multi-marketplace automation solutions",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData),
      }}
    />
  );
};

export default ServiceSchema;
