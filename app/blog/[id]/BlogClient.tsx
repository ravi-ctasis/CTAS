"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { BlogPost } from "@/lib/types";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

type BlogProps = {
  blog: BlogPost & { content: string };
  relatedPosts: BlogPost[];
};

export default function BlogClient({ blog, relatedPosts }: BlogProps) {
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse the blog content to extract headings
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
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <main className="bg-slate-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-blue-100 to-slate-50 pt-8 pb-5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation */}
            <div className="mb-8 flex justify-start">
              <Link href="/blog">
                <span className="inline-flex items-start text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 hover:border-blue-300 shadow-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </span>
              </Link>
            </div>

            {/* Title & Meta */}
            <div className="text-center space-y-8">
              <Badge className="bg-blue-600 text-white px-4 py-1.5 text-sm font-medium rounded-full shadow-lg shadow-blue-600/20 border-0">
                {blog.category}
              </Badge>

              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
                {blog.title}
              </h1>

              <div className="flex items-center justify-center gap-2 text-slate-600 text-sm md:text-base font-medium">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>
                  {new Date(blog.publishDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mx-3" />
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{blog.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image - Overlapping the gradient */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-16">
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] border border-slate-200/50 ring-4 ring-white">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar: Author & Related Blogs & Share */}
            <aside className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">
                      CT
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">CTAS Team</div>
                      <div className="text-xs text-slate-500">Tech Editors</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Expert insights from our engineering and product teams.
                  </p>
                </div>

                {/* Related Blogs (Moved to Left) */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <h3 className="font-bold text-slate-900 mb-4 text-lg">Related Blogs</h3>
                    <div className="space-y-6">
                      {relatedPosts.map((post) => (
                        <Link href={`/blog/${post.id}`} key={post.id} className="group block">
                          <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h4>
                          <div className="text-xs text-slate-500 flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Center Content */}
            <article className="lg:col-span-8">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_2px_40px_rgba(0,0,0,0.04)]">
                <article
                  id="blog-content"
                  className="prose prose-lg prose-slate max-w-none 
                                    [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:tracking-tight [&_h2]:scroll-mt-32
                                    [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:scroll-mt-32
                                    [&_p]:mb-6 [&_p]:leading-8 [&_p]:text-lg [&_p]:text-slate-700
                                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_li]:mb-3 [&_li]:text-lg [&_li]:text-slate-700
                                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8
                                    [&_strong]:font-bold [&_strong]:text-slate-900
                                    [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
                                    [&_pre]:bg-slate-900 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto
                                    [&_pre_code]:bg-transparent [&_pre_code]:text-slate-100 [&_pre_code]:p-0
                                    [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:bg-slate-50 [&_blockquote]:py-4 [&_blockquote]:pr-6 [&_blockquote]:my-8 [&_blockquote]:rounded-r-lg [&_blockquote]:text-slate-700
                                    [&_a]:text-blue-600 [&_a]:font-medium [&_a]:underline decoration-blue-200 underline-offset-4 hover:[&_a]:decoration-blue-600 hover:[&_a]:text-blue-800 transition-all
                                    [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:border [&_table]:border-slate-200 [&_table]:overflow-x-auto [&_table]:text-sm [&_table]:shadow-sm
                                    [&_th]:bg-slate-100 [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:border [&_th]:border-slate-200 [&_th]:text-slate-900 [&_th]:whitespace-nowrap
                                    [&_td]:p-3 [&_td]:border [&_td]:border-slate-200 [&_td]:text-slate-700
                                    [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-8 [&_img]:mx-auto
                                    scroll-mt-32"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                {/* End of article separator */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-slate-500 italic">Thanks for reading!</p>
                </div>
              </div>
            </article>

            {/* Right Sidebar: Topics & Tags */}
            <aside className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                {/* Tags */}
                <div className="bg-white p-6 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <h3 className="font-bold text-slate-900 mb-4 text-lg">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-slate-50 hover:bg-slate-100 text-slate-600 font-normal px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
