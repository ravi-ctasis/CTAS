"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageCTA,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
  CYAN_LIGHT,
} from "@/components/page-design";
import {
  ArrowRight,
  Search,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { BlogPost } from "@/lib/types";

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Ctas Info Services LLP Blog",
        description: "Insights, tutorials, and best practices in technology and business.",
        url: "https://www.ctasis.com/blog",
        publisher: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.ctasis.com/blog" },
        ],
      },
    ],
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = useMemo(() => {
    const cats = Array.from(new Set(initialPosts.map((p) => p.category)));
    return ["All", ...cats];
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    let filtered = [...initialPosts];

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    const sortFunctions: Record<string, (a: BlogPost, b: BlogPost) => number> = {
      newest: (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
      oldest: (a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime(),
      "most-viewed": (a, b) => (b.views || 0) - (a.views || 0),
    };

    filtered.sort(sortFunctions[sortBy] || sortFunctions.newest);
    return filtered;
  }, [initialPosts, searchTerm, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  const featuredPost = filteredPosts[0];

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navigation />
      <main>
        {/* Hero — split with embedded search */}
        <section
          className="relative overflow-hidden bg-gradient-to-b from-[#0B1A26] via-[#0E2233] to-[#122B40] py-16 sm:py-20 lg:py-24"
          aria-label="Our Blog"
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
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#A9B7C2] text-xs font-medium mb-6">
                  <BookOpen className="w-3.5 h-3.5" style={{ color: CYAN_LIGHT }} />
                  Insights &amp; Tutorials
                </div>
                <h1 className={`${fraunces.className} text-3xl sm:text-4xl lg:text-5xl font-medium text-[#F2F6F9] leading-[1.12] mb-6`}>
                  Our Blog
                </h1>
                <p className="text-base sm:text-lg text-[#93A3AF] leading-relaxed max-w-xl">
                  Discover insights, tutorials, and best practices in technology and business.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 text-base border-0 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category pills + sort */}
        <section className="py-5 bg-white border-b border-slate-200/80">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1 snap-x flex-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                      selectedCategory === category ? "text-white" : "bg-[#F6F8FA] text-slate-600 border border-slate-200"
                    }`}
                    style={selectedCategory === category ? { backgroundColor: NAVY } : undefined}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                  aria-label="Sort articles"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="most-viewed">Most Viewed</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured post — large bento */}
        {featuredPost && currentPage === 1 && !searchTerm && selectedCategory === "All" && (
          <section className="py-12 sm:py-16 bg-[#F6F8FA]">
            <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
              <motion.article
                {...fadeUp}
                className="grid lg:grid-cols-2 gap-0 rounded-[1.75rem] border border-slate-200/80 bg-white overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={featuredPost.publishDate}>
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </time>
                    <span>•</span>
                    <span>{featuredPost.readTime} min read</span>
                  </div>
                  <h2 className={`${fraunces.className} text-2xl sm:text-3xl font-medium text-slate-900 mb-3`}>
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-5 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F6F8FA] text-xs text-slate-600">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-[#08141F] w-fit transition-all hover:opacity-90"
                    style={{ backgroundColor: CYAN }}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            </div>
          </section>
        )}

        {/* Article grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            {currentPosts.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                <p className="text-slate-600">No articles found.</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {currentPosts
                    .filter((post) => !(currentPage === 1 && !searchTerm && selectedCategory === "All" && post.id === featuredPost?.id))
                    .map((post, index) => (
                      <motion.article
                        key={post.id}
                        {...fadeUp}
                        transition={{ delay: index * 0.05 }}
                        className="group flex flex-col rounded-[1.5rem] border border-slate-200/80 bg-white overflow-hidden hover:shadow-lg transition-all"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading={index < 3 ? "eager" : "lazy"}
                          />
                        </div>
                        <Link href={`/blog/${post.slug}`} className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
                            <Calendar className="w-3 h-3" />
                            <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString()}</time>
                            <span>•</span>
                            <span>{post.readTime} min read</span>
                          </div>
                          <h3 className={`${fraunces.className} text-lg font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-[#13345A] transition-colors`}>
                            {post.title}
                          </h3>
                          <p className="text-sm text-slate-500 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#F6F8FA] text-xs text-slate-600">
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="px-2 py-0.5 text-xs text-slate-500 bg-[#F6F8FA] rounded-md">
                                +{post.tags.length - 3}
                              </span>
                            )}
                          </div>
                          <span
                            className="inline-flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl text-white mt-auto"
                            style={{ backgroundColor: NAVY }}
                          >
                            Read Full Article
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </motion.article>
                    ))}
                </div>

                {totalPages > 1 && (
                  <nav className="flex items-center justify-center gap-2" aria-label="Blog pagination">
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 disabled:opacity-40 hover:bg-[#F6F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>
                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              type="button"
                              onClick={() => handlePageChange(page)}
                              className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                                currentPage === page ? "text-white" : "border border-slate-200 text-slate-700 hover:bg-[#F6F8FA]"
                              }`}
                              style={currentPage === page ? { backgroundColor: NAVY } : undefined}
                              aria-current={currentPage === page ? "page" : undefined}
                            >
                              {page}
                            </button>
                          );
                        }
                        if (page === currentPage - 2 || page === currentPage + 2) {
                          return (
                            <span key={page} className="px-2 py-1 text-slate-400">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 disabled:opacity-40 hover:bg-[#F6F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </nav>
                )}

                <p className="text-center mt-6 text-sm text-slate-500">
                  Showing {startIndex + 1} - {Math.min(startIndex + postsPerPage, filteredPosts.length)} of{" "}
                  {filteredPosts.length} articles
                </p>
              </>
            )}
            <motion.p {...fadeUp} className="mt-10 inline-flex items-center gap-2 text-sm text-slate-600">
              <Sparkles className="w-4 h-4" style={{ color: CYAN }} />
              Explore our{" "}
              <Link href="/services" className="font-semibold hover:underline" style={{ color: NAVY }}>
                services
              </Link>{" "}
              and{" "}
              <Link href="/case-studies" className="font-semibold hover:underline" style={{ color: NAVY }}>
                case studies
              </Link>
            </motion.p>
          </div>
        </section>

        <PageCTA
          title="Ready to Transform Your Business?"
          description="Explore our services or get in touch to discuss how we can help you achieve your technology goals."
          primaryLabel="Explore Services"
          primaryHref="/services"
          secondaryLabel="Contact Us"
          secondaryHref="/contact-us"
        />
      </main>
      <FooterSection />
    </PageShell>
  );
}
