export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    publishDate: string;
    category: string;
    tags: string[];
    image: string;
    sections: any[];
    readTime: number;
    views: number;
    content?: string;
    href?: string;
    author?: {
        name: string;
        bio?: string;
        avatar?: string;
        social?: {
            twitter?: string;
            linkedin?: string;
            github?: string;
        };
    };
};
