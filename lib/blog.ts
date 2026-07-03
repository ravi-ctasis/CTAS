import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "./types";
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark-dimmed.css'

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export function getAllBlogs(): BlogPost[] {

    return fs.readdirSync(BLOG_DIR).map((file) => {
        const slug = file.replace(".md", "");
        const { data } = matter(
            fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
        );

        const { ...rest } = data as any;
        return {
            id: slug,
            slug,
            tags: [],
            category: "Uncategorized",
            relatedPosts: [],
            ...rest,
        } as BlogPost;
    }).sort((a, b) => {
        if (a.publishDate < b.publishDate) {
            return 1;
        } else {
            return -1;
        }
    });

}


export async function getBlogById(id: string): Promise<(BlogPost & { content: string }) | null> {
    const filePath = path.join(BLOG_DIR, `${id}.md`);
    if (!fs.existsSync(filePath)) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));

    // Process markdown to HTML
    const result = await unified()
        .use(remarkParse)
        .use(remarkGfm) // Support GitHub Flavored Markdown
        .use(remarkMath) // Support math equations
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeSanitize) // Sanitize HTML
        .use(rehypeHighlight) // Add syntax highlighting
        .use(rehypeStringify) // Convert to HTML string
        .process(content);

    const contentHtml = String(result.value);

    const { ...rest } = data as any;
    return {
        id,
        slug: id,
        tags: [],
        category: "Uncategorized",
        relatedPosts: [],
        ...rest,
        content: contentHtml,
    } as BlogPost & { content: string };
}
