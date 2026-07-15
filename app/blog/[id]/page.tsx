import { getBlogById, getAllBlogs } from "@/lib/blog";
import BlogClient from "./BlogClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    id: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) {
    return {
      title: "Blog Post Not Found | Ctas Info Services",
      description: "The blog post you are looking for could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishDate,
      authors: [blog.author?.name || "Ctas Team"],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    alternates: {
      canonical: `https://www.ctasis.com/blog/${blog.slug}`,
      languages: {
        "en-US": `https://www.ctasis.com/blog/${blog.slug}`,
        "en-IN": `https://www.ctasis.com/blog/${blog.slug}`,
        "x-default": `https://www.ctasis.com/blog/${blog.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) return notFound();

  const relatedPosts = getAllBlogs()
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  return <BlogClient blog={blog} relatedPosts={relatedPosts} />;
}
