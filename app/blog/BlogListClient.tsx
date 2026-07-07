"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { PageShell, PageCTA } from "@/components/page-design";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    ArrowRight,
    Search,
    Calendar,
    Tag,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Filter,
    SortAsc,
} from "lucide-react";
import { BlogPost } from "@/lib/types";

interface BlogListClientProps {
    initialPosts: BlogPost[];
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Ctas Info Services LLP Blog",
        description: "Insights, tutorials, and best practices in technology and business.",
        url: "https://www.ctasis.com/blog",
        publisher: { "@type": "Organization", name: "Ctas Info Services LLP", url: "https://www.ctasis.com" },
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const [blogPosts] = useState<BlogPost[]>(initialPosts);
    const postsPerPage = 6;

    // Extract categories from markdown data
    const categories = useMemo(() => {
        const cats = Array.from(new Set(blogPosts.map((p) => p.category)));
        return ["All", ...cats];
    }, [blogPosts]);

    const filteredPosts = useMemo(() => {
        let filtered = [...blogPosts];

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
    }, [blogPosts, searchTerm, selectedCategory, sortBy]);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    // Reset to page 1 when filters change
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

            {/* Hero Section */}
            <section className="relative py-20 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-lg text-blue-100 mb-8">
                        Discover insights, tutorials, and best practices in technology and business.
                    </p>

                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 text-lg rounded-xl bg-white text-gray-800 border-none shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Filters and Sort */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Category Filter */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <Filter className="w-5 h-5 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">Category:</span>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Options */}
                        <div className="flex items-center gap-3">
                            <SortAsc className="w-5 h-5 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">Sort:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="most-viewed">Most Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog List */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {currentPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <BookOpen className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-600">No articles found.</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {currentPosts.map((post) => (
                                    <article
                                        key={post.id}
                                        className="flex flex-col border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
                                    >
                                        <div className="relative w-full h-56">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={currentPosts.indexOf(post) < 3}
                                            />
                                            {/* Featured badge removed or needs logic */}
                                        </div>
                                        <Link href={`/blog/${post.id}`}>
                                            <div className="p-5 flex flex-col flex-1">
                                                <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                                                    <span>•</span>
                                                    <span>{post.readTime} min read</span>
                                                </div>
                                                <h3 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                                                    {post.excerpt}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post.tags.slice(0, 3).map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="secondary"
                                                            className="bg-gray-100 text-gray-800 flex items-center text-xs"
                                                        >
                                                            <Tag className="w-3 h-3 mr-1" />
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                    {post.tags.length > 3 && (
                                                        <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
                                                            +{post.tags.length - 3}
                                                        </Badge>
                                                    )}
                                                </div>

                                                <div className="mt-auto">
                                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700">
                                                        Read Full Article
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-8">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="flex items-center gap-1"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </Button>

                                    <div className="flex gap-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                            if (
                                                page === 1 ||
                                                page === totalPages ||
                                                (page >= currentPage - 1 && page <= currentPage + 1)
                                            ) {
                                                return (
                                                    <Button
                                                        key={page}
                                                        variant={currentPage === page ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => handlePageChange(page)}
                                                        className={
                                                            currentPage === page
                                                                ? "bg-blue-600 text-white"
                                                                : "bg-white text-gray-700 hover:bg-gray-50"
                                                        }
                                                    >
                                                        {page}
                                                    </Button>
                                                );
                                            } else if (page === currentPage - 2 || page === currentPage + 2) {
                                                return (
                                                    <span key={page} className="px-2 py-1 text-gray-500">
                                                        ...
                                                    </span>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="flex items-center gap-1"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            )}

                            {/* Results count */}
                            <div className="text-center mt-6 text-sm text-gray-600">
                                Showing {startIndex + 1} -{" "}
                                {Math.min(startIndex + postsPerPage, filteredPosts.length)} of{" "}
                                {filteredPosts.length} articles
                            </div>
                        </>
                    )}
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
