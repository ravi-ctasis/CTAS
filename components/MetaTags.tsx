"use client";

import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const MetaTags = ({
  title = "Ctas Info Services – Amazon SP-API, AI & E-commerce Solutions",
  description = "Ctas Info Services LLP delivers AI/ML, Amazon SP-API, cloud, DevOps, web & mobile apps, and e-commerce automation for global business growth.",
  keywords = [
    "Ctas Info Services LLP",
    "Amazon SP API integration",
    "AI web development",
    "E-commerce web solutions",
    "Amazon automation software",
    "multi-marketplace inventory management",
    "Ahmedabad web development company",
    "India technology firm",
  ],
  canonical = "https://www.ctasis.com/",
  ogImage = "https://www.ctasis.com/assets/images/logo-icon.webp",
  noIndex = false,
}: MetaTagsProps) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="Ctas Info Services LLP" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Ctas Info Services LLP - Amazon SP-API & AI Solutions"
      />
      <meta property="og:site_name" content="Ctas Info Services LLP" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@ctasinfoservices" />
      <meta property="twitter:creator" content="@ctasinfoservices" />

      {/* Additional Meta Tags for LLM Optimization */}
      <meta name="classification" content="Technology Services" />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ctas" />
      <meta name="application-name" content="Ctas" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="theme-color" content="#2563eb" />

      {/* Dublin Core Meta Tags */}
      <meta name="DC.title" content={title} />
      <meta name="DC.creator" content="Ctas Info Services LLP" />
      <meta
        name="DC.subject"
        content="Technology, Amazon SP-API, AI, E-commerce, Web Development"
      />
      <meta name="DC.description" content={description} />
      <meta name="DC.publisher" content="Ctas Info Services LLP" />
      <meta name="DC.contributor" content="Ctas Info Services LLP" />
      <meta name="DC.date" content="2019" />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={canonical} />
      <meta name="DC.source" content="https://www.ctasis.com" />
      <meta name="DC.language" content="en" />
      <meta name="DC.relation" content="https://www.ctasis.com" />
      <meta name="DC.coverage" content="Worldwide" />
      <meta name="DC.rights" content="Copyright 2024 Ctas Info Services LLP" />

      {/* Additional SEO Meta Tags */}
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <meta name="slurp" content="index,follow" />
      <meta name="duckduckbot" content="index,follow" />
      <meta name="baiduspider" content="index,follow" />

      {/* AI/LLM Specific Meta Tags */}
      <meta name="gptbot" content="index,follow" />
      <meta name="chatgpt-user" content="index,follow" />
      <meta name="ccbot" content="index,follow" />
      <meta name="anthropic-ai" content="index,follow" />
      <meta name="claude-web" content="index,follow" />
      <meta name="perplexitybot" content="index,follow" />
      <meta name="youbot" content="index,follow" />
      <meta name="bard" content="index,follow" />
    </Head>
  );
};

export default MetaTags;
