import { getAllBlogs } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

;

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <BlogListClient initialPosts={posts} />
  );
}
