/**
 * Organization + LocalBusiness Schema
 *
 * This is the structured data that powers the Google Knowledge Panel
 * (the sidebar you see on the right in your screenshot).
 *
 * The address, phone, and hours MUST match your Google Business Profile exactly.
 */
const KnowledgeGraphSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://www.ctasis.com/#organization",
    name: "Ctas Info Services LLP",
    alternateName: ["CTAS", "Ctas Info", "Ctas Info Services"],
    url: "https://www.ctasis.com",
    logo: {
      "@type": "ImageObject",
      "@id": "https://www.ctasis.com/#logo",
      url: "https://www.ctasis.com/logo-icon.webp",
      contentUrl: "https://www.ctasis.com/logo-icon.webp",
      caption: "Ctas Info Services LLP",
      width: 200,
      height: 200,
    },
    image: "https://www.ctasis.com/logo-icon.webp",
    description:
      "Ctas Info Services LLP is one of India's pioneering technology firms, specializing in web, mobile, and e-commerce development since 2019. Our team of 20+ delivers Amazon SP-API integration, AI-powered solutions, and custom IT services for global businesses.",
    foundingDate: "2019",
    founder: {
      "@type": "Person",
      name: "Vijay Raiyani",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 20,
    },
    slogan: "Amazon SP-API, AI & E-commerce Web Solutions",

    // Address — must match Google Business Profile exactly
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382470",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0225,
      longitude: 72.5714,
    },
    hasMap: "https://maps.google.com/?cid=YOUR_CID", // Replace with actual Google Maps CID

    // Contact
    telephone: "+91-99746-96186",
    email: "site@ctasis.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-99746-96186",
        contactType: "customer service",
        areaServed: ["IN", "US", "GB", "CA", "AU", "AE"],
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-99746-96186",
        contactType: "sales",
        areaServed: ["IN", "US", "GB", "CA", "AU", "AE"],
        availableLanguage: ["English"],
      },
    ],

    // Business hours — match Google Business Profile
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],

    // Social profiles — critical for Knowledge Panel
    sameAs: [
      "https://www.linkedin.com/company/ctas-info-services",
      "https://www.facebook.com/ctasinfoservices",
      "https://twitter.com/ctasinfoservices",
      "https://www.instagram.com/ctasinfoservices",
    ],

    // Aggregate rating (if available)
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5",
      bestRating: "5",
      worstRating: "1",
    },

    // What the company does
    knowsAbout: [
      "Amazon SP-API Integration",
      "Amazon Selling Partner API",
      "AI-Powered Web Solutions",
      "E-commerce Automation",
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "DevOps Services",
      "Custom Software Development",
      "UI/UX Design",
    ],

    // Price range
    priceRange: "$$",

    // Areas served
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],

    // Services offered
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development Services",
          url: "https://www.ctasis.com/services/web-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Amazon SP-API Integration",
          url: "https://www.ctasis.com/services/amazon-sp-api-integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Machine Learning Solutions",
          url: "https://www.ctasis.com/services/ai-ml",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Solutions",
          url: "https://www.ctasis.com/services/e-commerce-solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://www.ctasis.com/services/mobile-apps",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          url: "https://www.ctasis.com/services/custom-software",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
};

export default KnowledgeGraphSchema;
