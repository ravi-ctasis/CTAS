/**
 * SiteNavigationElement Schema
 *
 * This structured data tells Google which pages are the primary navigation
 * items — the ones that should appear as sitelinks in search results.
 *
 * Only include 6-8 of your MOST IMPORTANT pages here.
 * Google uses this + internal link structure + click-through data to
 * decide which sitelinks to show.
 */
const SiteNavigationSchema = () => {
  const siteNavigationData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        "@id": "https://www.ctasis.com/#site-navigation",
        name: "About Us",
        description: "Learn about Ctas Info Services LLP, our mission, values, and expert team",
        url: "https://www.ctasis.com/about-us",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Services",
        description: "Web development, AI/ML, Amazon SP-API, e-commerce solutions and more",
        url: "https://www.ctasis.com/services",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Contact Us",
        description: "Get in touch with Ctas Info Services LLP for your project requirements",
        url: "https://www.ctasis.com/contact-us",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Portfolios",
        description: "Explore our portfolio of 100+ successfully delivered projects worldwide",
        url: "https://www.ctasis.com/portfolios",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Case Studies",
        description: "Real-world success stories from Amazon automation to e-commerce platforms",
        url: "https://www.ctasis.com/case-studies",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Blog",
        description: "Latest insights on Amazon SP-API, AI, web development and e-commerce",
        url: "https://www.ctasis.com/blog",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Careers",
        description: "Join our growing team of developers, designers and tech experts",
        url: "https://www.ctasis.com/careers",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Our Team",
        description: "Meet the expert professionals behind Ctas Info Services LLP",
        url: "https://www.ctasis.com/team",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteNavigationData),
      }}
    />
  );
};

export default SiteNavigationSchema;
