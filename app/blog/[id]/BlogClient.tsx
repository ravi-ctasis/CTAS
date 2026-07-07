"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { BlogPost } from "@/lib/types";
import { ArrowLeft, Calendar, Clock, Tag, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import {
  PageShell,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
  CYAN_LIGHT,
} from "@/components/page-design";

type BlogProps = {
  blog: BlogPost & { content: string };
  relatedPosts: BlogPost[];
};

export default function BlogClient({ blog, relatedPosts }: BlogProps) {
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.excerpt,
        image: blog.image,
        datePublished: blog.publishDate,
        author: {
          "@type": "Organization",
          name: blog.author?.name || "CTAS Team",
        },
        publisher: {
          "@type": "Organization",
          name: "Ctas Info Services LLP",
          url: "https://www.ctasis.com",
        },
        url: `https://www.ctasis.com/blog/${blog.slug}`,
        articleSection: blog.category,
        keywords: blog.tags?.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ctasis.com/blog" },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `https://www.ctasis.com/blog/${blog.slug}`,
          },
        ],
      },
    ],
  };

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.content, "text/html");
    const headings = doc.querySelectorAll("h2, h3");

    const tocItems: { id: string; text: string; level: number }[] = [];

    headings.forEach((heading, index) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      tocItems.push({
        id: id || `heading-${index}`,
        text,
        level: parseInt(heading.tagName.substring(1)),
      });
    });

    setToc(tocItems);
  }, [blog.content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = toc.map((item) => document.getElementById(item.id));

      let current = "";
      for (const el of headingElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 150) {
            current = el.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  useEffect(() => {
    if (!activeId) return;

    const activeLink = document.querySelector(`a[href="#${activeId}"]`);
    const tocContainer = document.getElementById("toc-container");

    if (activeLink && tocContainer) {
      const containerRect = tocContainer.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      const isOutOfView =
        linkRect.top < containerRect.top + 20 || linkRect.bottom > containerRect.bottom - 20;

      if (isOutOfView) {
        activeLink.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }, [activeId]);

  useEffect(() => {
    const article = document.getElementById("blog-content");
    if (!article) return;

    const headings = article.querySelectorAll("h2, h3");
    headings.forEach((heading, index) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      heading.id = id || `heading-${index}`;
    });
  }, [blog.content]);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />

      <main>
        {/* Hero — dark with meta */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] pt-8 pb-16 sm:pb-20"
          aria-label={blog.title}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E7F1F7 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#93A3AF] hover:text-white transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: `${CYAN}22`, color: CYAN_LIGHT }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                {blog.category}
              </span>

              <h1
                className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] tracking-tight mb-6`}
              >
                {blog.title}
              </h1>

              <div className="flex items-center justify-center flex-wrap gap-3 text-sm text-[#93A3AF]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" style={{ color: CYAN }} />
                  <time dateTime={blog.publishDate}>
                    {new Date(blog.publishDate).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" style={{ color: CYAN }} />
                  {blog.readTime} min read
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured image — overlapping */}
        <div className="max-w-5xl mx-auto px-6 sm:px-10 -mt-10 sm:-mt-14 relative z-10 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-[21/9] rounded-[1.75rem] overflow-hidden shadow-2xl border border-white/10 ring-4 ring-[#F6F8FA]"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </motion.div>
        </div>

        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left sidebar — author + related */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <motion.div
                  {...fadeUp}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6"
                >
                  <h2 className="font-semibold text-slate-900 mb-4 text-base">About the Author</h2>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                      style={{ backgroundColor: `${CYAN}18`, color: NAVY }}
                    >
                      CT
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">CTAS Team</div>
                      <div className="text-xs text-slate-500">Tech Editors</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Expert insights from our engineering and product teams.
                  </p>
                </motion.div>

                {relatedPosts.length > 0 && (
                  <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.08 }}
                    className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6"
                  >
                    <h2 className="font-semibold text-slate-900 mb-4 text-base">Related Blogs</h2>
                    <div className="space-y-5">
                      {relatedPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                          <h3 className="font-medium text-slate-900 group-hover:text-[#13345A] transition-colors line-clamp-2 mb-1.5 text-sm">
                            {post.title}
                          </h3>
                          <div className="text-xs text-slate-500 flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            <time dateTime={post.publishDate}>
                              {new Date(post.publishDate).toLocaleDateString()}
                            </time>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </aside>

            {/* Center — article body */}
            <article className="lg:col-span-6 order-1 lg:order-2">
              <motion.div
                {...fadeUp}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12"
              >
                <div
                  id="blog-content"
                  className="prose prose-lg prose-slate max-w-none
                    [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:scroll-mt-32
                    [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:scroll-mt-32
                    [&_p]:mb-6 [&_p]:leading-8 [&_p]:text-base sm:[&_p]:text-lg [&_p]:text-slate-700
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_li]:mb-3 [&_li]:text-slate-700
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8
                    [&_strong]:font-bold [&_strong]:text-slate-900
                    [&_code]:bg-[#F6F8FA] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
                    [&_pre]:bg-[#0B1A26] [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto
                    [&_pre_code]:bg-transparent [&_pre_code]:text-slate-100 [&_pre_code]:p-0
                    [&_blockquote]:border-l-4 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:bg-[#F6F8FA] [&_blockquote]:py-4 [&_blockquote]:pr-6 [&_blockquote]:my-8 [&_blockquote]:rounded-r-lg [&_blockquote]:text-slate-700
                    [&_a]:font-medium [&_a]:underline decoration-[#249BCA]/30 underline-offset-4 hover:[&_a]:decoration-[#249BCA] transition-all
                    [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:border [&_table]:border-slate-200 [&_table]:text-sm
                    [&_th]:bg-[#F6F8FA] [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:border [&_th]:border-slate-200
                    [&_td]:p-3 [&_td]:border [&_td]:border-slate-200 [&_td]:text-slate-700
                    [&_img]:rounded-xl [&_img]:shadow-md [&_img]:my-8"
                  style={{ ["--tw-prose-links" as string]: NAVY }}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <p className="text-slate-500 italic">Thanks for reading!</p>
                </div>
              </motion.div>
            </article>

            {/* Right sidebar — TOC + tags */}
            <aside className="lg:col-span-3 order-3">
              <div className="lg:sticky lg:top-24 space-y-6">
                {toc.length > 0 && (
                  <motion.nav
                    {...fadeUp}
                    aria-label="Table of contents"
                    className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6"
                  >
                    <h2 className="font-semibold text-slate-900 mb-4 text-base">On This Page</h2>
                    <ul id="toc-container" className="space-y-2 max-h-[40vh] overflow-y-auto">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block text-sm leading-snug transition-colors rounded-lg px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                              item.level === 3 ? "pl-5" : ""
                            } ${
                              activeId === item.id
                                ? "font-semibold text-[#13345A] bg-[#EAF3F8]"
                                : "text-slate-600 hover:text-[#13345A]"
                            }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.nav>
                )}

                {blog.tags && blog.tags.length > 0 && (
                  <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.06 }}
                    className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6"
                  >
                    <h2 className="font-semibold text-slate-900 mb-4 text-base">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F6F8FA] text-xs text-slate-600 border border-slate-100"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </aside>
          </div>
        </div>

      </main>

      <FooterSection />
    </PageShell>
  );
}
