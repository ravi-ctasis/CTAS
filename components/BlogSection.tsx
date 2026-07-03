"use client";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    slug: "amazon-sp-api-integration-guide",
    category: "Amazon SP-API",
    title: "Complete Guide to Amazon Selling Partner API Integration in 2025",
    excerpt:
      "A step-by-step walkthrough of integrating Amazon SP-API for catalog management, order automation, financial reconciliation and Seller Central compliance — with real-world architecture patterns.",
    image: "/amazon-sp-api-banner.webp",
    imageAlt: "Amazon Selling Partner API integration architecture guide",
    readTime: "9 min read",
    date: "Jun 18, 2025",
    href: "/blog/amazon-sp-api-guide",
  },
  {
    slug: "ai-ecommerce-automation-workflows",
    category: "AI Automation",
    title: "How AI is Transforming E-Commerce Workflow Automation for Mid-Market Sellers",
    excerpt:
      "From AI-powered product enrichment and multilingual content generation to dynamic repricing and intelligent demand forecasting — discover how machine learning is reshaping e-commerce operations.",
    image: "/automation-blueprint-banner.webp",
    imageAlt: "AI e-commerce automation workflow diagram",
    readTime: "7 min read",
    date: "May 29, 2025",
    href: "/blog/ai-ecommerce-automation",
  },
  {
    slug: "multi-marketplace-integration-architecture",
    category: "Marketplace Integration",
    title: "Multi-Marketplace Integration Architecture: Lessons from 35+ Platform Connections",
    excerpt:
      "Key architectural decisions, common pitfalls and proven patterns for building a resilient multi-marketplace integration platform connecting Amazon, Bol.com, Shopify, Allegro and beyond.",
    image: "/enterprise-dashboard.webp",
    imageAlt: "Multi-marketplace integration architecture diagram",
    readTime: "11 min read",
    date: "May 12, 2025",
    href: "/blog/multi-marketplace-integration-architecture",
  },
];

const BlogSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-slate-50"
      aria-label="Latest blog posts and resources"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Resources
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Insights &amp; Technical Guides
            </h2>
            <p className="text-slate-500 text-base mt-3 max-w-xl leading-relaxed">
              In-depth articles on marketplace integrations, AI automation and e-commerce
              engineering from the CTAS team.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Image */}
              <Link href={post.href} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={600}
                  height={340}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" aria-hidden="true" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-slate-900 leading-snug mb-3 flex-1"
                  itemProp="headline"
                >
                  <Link
                    href={post.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3" itemProp="description">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <time
                    dateTime={post.date}
                    className="text-xs text-slate-400"
                    itemProp="datePublished"
                  >
                    {post.date}
                  </time>
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                    aria-label={`Read: ${post.title}`}
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
