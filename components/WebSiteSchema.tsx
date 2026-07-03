/**
 * WebSite Schema
 *
 * This is separate from the Organization schema.
 * It tells Google about the website itself.
 *
 * NOTE: SearchAction removed because there is no /search page.
 * Adding a fake SearchAction hurts credibility with Google's validator.
 * Add it back ONLY when you build a real search page.
 */
const WebSiteSchema = () => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ctasis.com/#website",
    url: "https://www.ctasis.com",
    name: "Ctas Info Services LLP",
    alternateName: "CTAS",
    description:
      "India's pioneering technology firm specializing in Amazon SP-API integration, AI-powered web solutions, e-commerce automation, and custom IT services for global businesses since 2019.",
    publisher: {
      "@id": "https://www.ctasis.com/#organization",
    },
    inLanguage: "en",
    copyrightYear: 2019,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData),
      }}
    />
  );
};

export default WebSiteSchema;
