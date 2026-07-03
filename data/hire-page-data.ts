import { ActivityIcon, Apple, BarChart3, Box, Brush, CheckCircle, Clock, Cloud, Code, Coins, Cpu, Database, Globe, Layers, Layout, Lightbulb, Mail, MousePointer, Network, Palette, PenTool, Search, Server, Share2, Shield, ShoppingCart, Smartphone, UserCheck, Users, Video, Wallet, Watch, Wifi, Zap } from "lucide-react";

// Interfaces
export interface Logo {
    src: string;
    alt: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface DeveloperType {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface Developer {
    name: string;
    experience: string;
    role: string;
    description: string;
    skills: string[];
    imageSrc: string;
    imageAlt: string;
}

export interface Reason {
    title: string;
    description: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Highlight {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface HiringStep {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface CaseStudy {
    title: string;
    client: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

// Generic content block for section bodies (used for second section/intros)
export interface IntroContent {
    title: string;
    paragraphs: string[];
    imageSrc?: string;
    imageAlt?: string;
    ctaText?: string;
}

// Simple header/description for sections like FAQ header
export interface SectionHeader {
    title: string;
    description: string;
}

// Media for a section (e.g., FAQ illustration)
export interface SectionMedia {
    imageSrc: string;
    imageAlt: string;
}

export interface PageSection {
    sectionId: string;
    data:
    | Logo[]
    | FAQ[]
    | DeveloperType[]
    | Developer[]
    | Reason[]
    | Stat[]
    | Highlight[]
    | HiringStep[]
    | CaseStudy[]
    | IntroContent[]
    | SectionHeader[]
    | SectionMedia[];
}

export interface PageData {
    pageId: string;
    sections: PageSection[];
}

// Consolidated Data for Multiple Pages
export const allPagesData: PageData[] = [
    {
        pageId: "webdevelopers",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Web Developers for Secure, Scalable Solutions",
                        paragraphs: [
                            "Hire experienced web developers to create robust, high-performing, and secure web applications. Our team delivers custom web apps, APIs, and data-driven platforms tailored for efficiency, reliability, and long-term growth.",
                            "Collaborate with dedicated web development experts who understand your business goals and provide solutions that optimize workflows, improve performance, and drive business success.",
                        ],
                        imageSrc: "/hire-web-developers-one.webp",
                        imageAlt: "Web Developers",
                        ctaText: "Hire Certified Web Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Professional Web Developers for Every Industry",
                        description:
                            "Hire experienced web developers to create secure, high-performing, and scalable web applications. With expertise across sectors like eCommerce, healthcare, finance, and logistics, they deliver custom web solutions, APIs, automation tools, and data-driven platforms that are tailored to your business objectives and built for reliability and efficiency.",
                    },
                    {
                        title: "Dependable Web Development with Timely Delivery",
                        description:
                            "Hire web developers who build secure, scalable, and high-performance applications while ensuring projects are delivered on time. Using agile methodologies, transparent communication, and structured workflows, we make sure your development goals are achieved efficiently.",
                    },
                    {
                        title: "Custom Web Development Solutions Built for Your Success",
                        description:
                            "Every business is unique, and our web developers craft solutions tailored to your specific goals. From powerful web applications and APIs to scalable enterprise platforms, we deliver secure, high-performance systems that help your business grow, adapt, and stay ahead of the competition.",
                    },
                    {
                        title: "Adaptable Hiring Options for Web Developers",
                        description:
                            "Hire web developers the way your business needs — full-time, part-time, or hourly. Our flexible models allow you to scale your team seamlessly, control costs, and ensure consistent, top-quality development for every project.",
                    },
                    {
                        title: "Expertise in Modern Web Frameworks and Technologies",
                        description:
                            "Our web developers leverage the latest frameworks and development tools to build secure, scalable, and high-performance applications. With expertise in API integrations, database management, and performance optimization, they deliver custom solutions tailored to your business goals.",
                    },
                    {
                        title: "Secure, Scalable, and High-Performance Web Solutions",
                        description:
                            "Our web developers create robust and reliable applications tailored to your business. With efficient code, strong architecture, and thorough testing, they ensure your web solutions are secure, scalable, and built to deliver long-term results.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire web developers?",
                        answer:
                            "Professional web developers create custom, secure, and scalable web applications that help your business grow efficiently.",
                    },
                    {
                        question: "Can web developers handle complex projects?",
                        answer:
                            "Yes, they can manage advanced web applications, APIs, eCommerce platforms, and enterprise solutions tailored to your requirements.",
                    },
                    {
                        question: "Is hiring web developers cost-effective?",
                        answer:
                            "Hiring dedicated web developers from India ensures top-quality development at competitive rates, saving both time and resources.",
                    },
                    {
                        question: "Will they maintain and upgrade existing projects?",
                        answer:
                            "Absolutely. Web developers can maintain, update, and optimize your current applications for long-term stability and performance.",
                    },
                    {
                        question: "How quickly can projects be delivered?",
                        answer:
                            "Web developers follow agile practices and best development standards to deliver projects efficiently without compromising quality.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hiring Web Developers Is the Right Fit for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated Web developers and how they can help build scalable, secure, and high-performing web applications.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-web-developers-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "15+", label: "Projects Completed" },
                    { value: "10+", label: "Clients Served" },
                    { value: "12+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },

    {
        pageId: "hire-php-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top PHP Developers for Secure, Scalable Solutions",
                        paragraphs: [
                            "Hire skilled PHP developers to build dynamic, high-performing, and secure web applications tailored to your business needs. Our developers specialize in modern frameworks like Laravel, CodeIgniter, and Symfony to deliver scalable, maintainable solutions with clean, efficient code.",
                            "Partner with our dedicated PHP development team to enhance your digital presence, streamline operations, and achieve faster project delivery. We focus on performance, reliability, and long-term value to help your business grow confidently.",
                        ],

                        imageSrc: "/hire-php.webp",
                        imageAlt: "Web Developers",
                        ctaText: "Hire Certified Web Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "Priya Patel",
                        experience: "7+",
                        role: "Senior PHP Developer",
                        description:
                            "Expert in building enterprise-level PHP applications with Laravel, Symfony, and custom frameworks.",
                        skills: ["PHP", "Laravel", "MySQL", "REST APIs"],
                        imageSrc: "/developers/priya-patel.jpg",
                        imageAlt: "Priya Patel",
                    },
                    {
                        name: "Rahul Sharma",
                        experience: "5+",
                        role: "WordPress Developer",
                        description:
                            "Specializes in WordPress development, custom themes, plugins, and WooCommerce solutions.",
                        skills: ["WordPress", "PHP", "JavaScript", "WooCommerce"],
                        imageSrc: "/developers/rahul-sharma.jpg",
                        imageAlt: "Rahul Sharma",
                    },
                    {
                        name: "Sneha Gupta",
                        experience: "6+",
                        role: "Laravel Developer",
                        description:
                            "Experienced Laravel developer with expertise in building scalable web applications and APIs.",
                        skills: ["Laravel", "PHP", "Vue.js", "MySQL"],
                        imageSrc: "/developers/sneha-gupta.jpg",
                        imageAlt: "Sneha Gupta",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Professional PHP Developers for Every Project",
                        description:
                            "Hire skilled PHP developers to build secure, scalable, and high-performing web applications tailored to your business needs.",
                    },
                    {
                        title: "Flexible Hiring Options",
                        description:
                            "Hire PHP developers on a full-time, part-time, or hourly basis to fit your project requirements and budget.",
                    },
                    {
                        title: "Expertise in Modern PHP Technologies",
                        description:
                            "Our PHP developers are proficient in Laravel, Symfony, CodeIgniter, WordPress, and cloud technologies to deliver cutting-edge solutions.",
                    },
                    {
                        title: "Timely Delivery & High-Quality Standards",
                        description:
                            "We follow agile methodologies, best coding practices, and quality assurance to ensure projects are delivered efficiently without compromising quality.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire PHP developers?",
                        answer:
                            "PHP developers build scalable, secure, and high-performance web applications using modern frameworks and best practices.",
                    },
                    {
                        question: "Can PHP developers handle complex projects?",
                        answer:
                            "Yes, they are experienced in building complex web applications using Laravel, Symfony, WordPress, and custom PHP solutions.",
                    },
                    {
                        question: "What are the hiring options available?",
                        answer:
                            "You can hire PHP developers full-time, part-time, or on an hourly basis based on your project needs.",
                    },
                    {
                        question: "Do PHP developers provide maintenance and support?",
                        answer:
                            "Absolutely, they can maintain, update, and optimize your existing PHP applications for long-term stability.",
                    },
                    {
                        question: "How quickly can projects be delivered?",
                        answer:
                            "Following agile practices and best development standards, projects can be delivered efficiently without compromising quality.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hiring PHP Developers Is the Right Fit for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated Web developers and how they can help build scalable, secure, and high-performing web applications.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-php-developers.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "150+", label: "PHP Projects Completed" },
                    { value: "100+", label: "Satisfied Clients" },
                    { value: "40+", label: "Expert PHP Developers" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Dedicated & Skilled PHP Teams",
                        description:
                            "Our teams of PHP developers are highly motivated and experienced in delivering innovative solutions.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Innovative & Secure Solutions",
                        description:
                            "Creative PHP applications with high security standards to protect your business.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Assurance",
                        description:
                            "Follow best practices to ensure high-quality, secure, and scalable PHP applications.",
                    },
                    {
                        icon: Clock,
                        title: "Timely Project Delivery",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery for every PHP project.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description: "We analyze your PHP project requirements and technical goals.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description: "We shortlist top PHP developers based on skills and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description: "Conduct interviews or technical assessments to select the best developers.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description: "Onboard selected PHP developers and start your project seamlessly.",
                    },
                ],
            },
        ],
    },
    // Data for Python Developers Page
    {
        pageId: "hire-python-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Python Developers for Scalable, Intelligent Solutions",
                        paragraphs: [
                            "Hire experienced Python developers to build powerful, secure, and data-driven web applications tailored to your business goals. Our team leverages leading Python frameworks like Django and Flask to create scalable, high-performance solutions optimized for speed and flexibility.",
                            "Collaborate with our dedicated Python developers to develop custom software, APIs, and AI-powered systems that enhance efficiency and drive innovation. We ensure clean, maintainable code and reliable performance to support your business growth long-term.",
                        ],

                        imageSrc: "/hire-python-one.webp",
                        imageAlt: "Web Developers",
                        ctaText: "Hire Certified Web Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "Arjun Singh",
                        experience: "8+",
                        role: "Senior Python Developer",
                        description:
                            "Expert in building enterprise-level Python applications with Django, FastAPI, and microservices architecture.",
                        skills: ["Python", "Django", "FastAPI", "PostgreSQL"],
                        imageSrc: "/developers/arjun-singh.jpg",
                        imageAlt: "Arjun Singh",
                    },
                    {
                        name: "Kavya Reddy",
                        experience: "6+",
                        role: "Data Science Developer",
                        description:
                            "Specializes in machine learning, data analysis, and AI solutions using Python and related libraries.",
                        skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
                        imageSrc: "/developers/kavya-reddy.jpg",
                        imageAlt: "Kavya Reddy",
                    },
                    {
                        name: "Vikram Joshi",
                        experience: "5+",
                        role: "Django Developer",
                        description:
                            "Experienced Django developer with expertise in building scalable web applications and REST APIs.",
                        skills: ["Django", "Python", "React", "MongoDB"],
                        imageSrc: "/developers/vikram-joshi.jpg",
                        imageAlt: "Vikram Joshi",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Professional Python Developers for Every Project",
                        description:
                            "Hire skilled Python developers to build secure, scalable, and high-performing applications tailored to your business needs.",
                    },
                    {
                        title: "Flexible Hiring Options",
                        description:
                            "Hire Python developers on a full-time, part-time, or hourly basis to fit your project requirements and budget.",
                    },
                    {
                        title: "Expertise in Modern Python Technologies",
                        description:
                            "Our Python developers are proficient in Django, Flask, FastAPI, data science libraries, and cloud technologies to deliver cutting-edge solutions.",
                    },
                    {
                        title: "Timely Delivery & High-Quality Standards",
                        description:
                            "We follow agile methodologies, best coding practices, and quality assurance to ensure projects are delivered efficiently without compromising quality.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Python developers?",
                        answer:
                            "Python developers build scalable, secure, and high-performance applications using modern frameworks and best practices.",
                    },
                    {
                        question: "Can Python developers handle complex projects?",
                        answer:
                            "Yes, they are experienced in building complex applications using Django, Flask, FastAPI, and data science solutions.",
                    },
                    {
                        question: "What are the hiring options available?",
                        answer:
                            "You can hire Python developers full-time, part-time, or on an hourly basis based on your project needs.",
                    },
                    {
                        question: "Do Python developers provide maintenance and support?",
                        answer:
                            "Absolutely, they can maintain, update, and optimize your existing Python applications for long-term stability.",
                    },
                    {
                        question: "How quickly can projects be delivered?",
                        answer:
                            "Following agile practices and best development standards, projects can be delivered efficiently without compromising quality.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hiring Python Developers Is the Right Fit for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated Python developers and how they can help build scalable, secure, and intelligent web applications tailored to your business needs.",
                    },

                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-python-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "180+", label: "Python Projects Completed" },
                    { value: "120+", label: "Satisfied Clients" },
                    { value: "60+", label: "Expert Python Developers" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Dedicated & Skilled Python Teams",
                        description:
                            "Our teams of Python developers are highly motivated and experienced in delivering innovative solutions.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Innovative & Secure Solutions",
                        description:
                            "Creative Python applications with high security standards to protect your business.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Assurance",
                        description:
                            "Follow best practices to ensure high-quality, secure, and scalable Python applications.",
                    },
                    {
                        icon: Clock,
                        title: "Timely Project Delivery",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery for every Python project.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description: "We analyze your Python project requirements and technical goals.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description: "We shortlist top Python developers based on skills and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description: "Conduct interviews or technical assessments to select the best developers.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description: "Onboard selected Python developers and start your project seamlessly.",
                    },
                ],
            },
        ],
    },
    // Data for Ruby Developers Page
    {
        pageId: "hire-ruby-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Ruby on Rails Developers for Secure, Scalable Solutions",
                        paragraphs: [
                            "Hire experienced Ruby on Rails developers to build fast, secure, and scalable web applications tailored to your business requirements. Our team specializes in creating efficient, data-driven, and maintainable solutions using the latest Rails frameworks and best practices.",
                            "Collaborate with dedicated Ruby on Rails experts who focus on performance, reliability, and long-term scalability — helping your business innovate faster, streamline operations, and deliver exceptional digital experiences.",
                        ],

                        imageSrc: "/hire-ruby-developer-one.webp",
                        imageAlt: "Ruby on Rails Developers",
                        ctaText: "Hire Certified Ruby on Rails Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Ruby on Rails Developers for Every Industry",
                        description:
                            "Hire skilled Ruby on Rails developers to build secure, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers custom Rails solutions, APIs, automation systems, and data-driven platforms designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable Ruby on Rails Development with On-Time Delivery",
                        description:
                            "Our Ruby on Rails developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom Ruby on Rails Solutions Tailored for Your Success",
                        description:
                            "Every business has unique needs, and our Ruby on Rails developers craft custom solutions that align with your goals. From scalable web apps and APIs to enterprise-grade platforms, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for Ruby on Rails Developers",
                        description:
                            "Hire Ruby on Rails developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team effortlessly, control project costs, and maintain consistent quality throughout your development process.",
                    },
                    {
                        title: "Proficiency in Modern Ruby on Rails Frameworks and Tools",
                        description:
                            "Our developers are well-versed in the latest Ruby on Rails frameworks, tools, and best practices. From API integration and database optimization to performance tuning, they deliver reliable, maintainable, and scalable web solutions built to meet your business requirements.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Ruby on Rails Solutions",
                        description:
                            "Our Ruby on Rails developers deliver secure, efficient, and scalable web applications using clean architecture and optimized code. With strong testing and QA practices, we ensure your application performs flawlessly and grows with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Ruby on Rails developers?",
                        answer:
                            "Ruby on Rails developers build secure, scalable, and high-performance web applications that accelerate your business growth and digital transformation.",
                    },
                    {
                        question: "Can Ruby on Rails developers handle complex projects?",
                        answer:
                            "Yes. Our Ruby on Rails experts can manage complex web apps, APIs, enterprise systems, and eCommerce platforms with precision and reliability.",
                    },
                    {
                        question: "Is hiring Ruby on Rails developers cost-effective?",
                        answer:
                            "Hiring dedicated Ruby on Rails developers from India offers world-class expertise at competitive rates, helping you save development time and costs.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Ruby on Rails projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing support, upgrades, and performance optimization to keep your Ruby on Rails applications running smoothly and securely.",
                    },
                    {
                        question: "How fast can Ruby on Rails projects be delivered?",
                        answer:
                            "Using agile workflows, modern tools, and best coding practices, our Ruby on Rails developers deliver high-quality projects quickly and efficiently without sacrificing quality.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hiring Ruby on Rails Developers Is the Right Fit for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated Ruby on Rails developers and how they can help build secure, scalable, and high-performing web applications.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-web-developers-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "10+", label: "Projects Completed" },
                    { value: "8+", label: "Clients Served" },
                    { value: "11+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    // Data for .net Developers Page
    {
        pageId: "hire-aspnet-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top .NET Developers for Secure, Scalable Solutions",
                        paragraphs: [
                            "Hire experienced .NET developers to build robust, secure, and scalable web applications tailored to your business needs. Our team specializes in creating maintainable, high-performance solutions using the latest .NET frameworks and industry best practices.",
                            "Collaborate with dedicated .NET experts who focus on efficiency, reliability, and long-term scalability — helping your business innovate faster, streamline workflows, and deliver exceptional digital experiences.",
                        ],
                        imageSrc: "/hire-asp-net-one.webp",
                        imageAlt: ".NET Developers",
                        ctaText: "Hire Certified .NET Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert .NET Developers for Every Industry",
                        description:
                            "Hire skilled .NET developers to build secure, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers custom .NET solutions, APIs, automation systems, and data-driven platforms designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable .NET Development with On-Time Delivery",
                        description:
                            "Our .NET developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom .NET Solutions Tailored for Your Success",
                        description:
                            "Every business has unique needs, and our .NET developers craft custom solutions that align with your goals. From scalable web apps and APIs to enterprise-grade platforms, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for .NET Developers",
                        description:
                            "Hire .NET developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team effortlessly, control project costs, and maintain consistent quality throughout your development process.",
                    },
                    {
                        title: "Proficiency in Modern .NET Frameworks and Tools",
                        description:
                            "Our developers are well-versed in the latest .NET frameworks, tools, and best practices. From API integration and database optimization to performance tuning, they deliver reliable, maintainable, and scalable web solutions built to meet your business requirements.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable .NET Solutions",
                        description:
                            "Our .NET developers deliver secure, efficient, and scalable web applications using clean architecture and optimized code. With strong testing and QA practices, we ensure your application performs flawlessly and grows with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire .NET developers?",
                        answer:
                            ".NET developers build secure, scalable, and high-performance web applications that accelerate your business growth and digital transformation.",
                    },
                    {
                        question: "Can .NET developers handle complex projects?",
                        answer:
                            "Yes. Our .NET experts can manage complex web apps, APIs, enterprise systems, and eCommerce platforms with precision and reliability.",
                    },
                    {
                        question: "Is hiring .NET developers cost-effective?",
                        answer:
                            "Hiring dedicated .NET developers from India offers world-class expertise at competitive rates, helping you save development time and costs.",
                    },
                    {
                        question: "Can they maintain and upgrade existing .NET projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing support, upgrades, and performance optimization to keep your .NET applications running smoothly and securely.",
                    },
                    {
                        question: "How fast can .NET projects be delivered?",
                        answer:
                            "Using agile workflows, modern tools, and best coding practices, our .NET developers deliver high-quality projects quickly and efficiently without sacrificing quality.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hiring .NET Developers Is the Right Fit for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated .NET developers and how they can help build secure, scalable, and high-performing web applications.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-asp-net-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "12+", label: "Projects Completed" },
                    { value: "10+", label: "Clients Served" },
                    { value: "8+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-laravel-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Laravel Developers for Secure and Scalable Web Solutions",
                        paragraphs: [
                            "Hire skilled Laravel developers to build robust, secure, and scalable web applications tailored to your business needs. Our team specializes in creating maintainable, high-performance solutions using the latest Laravel frameworks and best development practices.",
                            "Work with dedicated Laravel experts who prioritize efficiency, reliability, and long-term scalability — helping your business innovate faster, streamline workflows, and deliver exceptional digital experiences.",
                        ],
                        imageSrc: "/hire-laravel-developer-one.webp",
                        imageAlt: "Laravel Developers",
                        ctaText: "Hire Certified Laravel Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Laravel Developers for Every Industry",
                        description:
                            "Hire skilled Laravel developers to build secure, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers custom Laravel solutions, APIs, automation systems, and data-driven platforms designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable Laravel Development with On-Time Delivery",
                        description:
                            "Our Laravel developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom Laravel Solutions Tailored for Your Success",
                        description:
                            "Every business has unique needs, and our Laravel developers craft custom solutions that align with your goals. From scalable web apps and APIs to enterprise-grade platforms, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for Laravel Developers",
                        description:
                            "Hire Laravel developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team effortlessly, control project costs, and maintain consistent quality throughout your development process.",
                    },
                    {
                        title: "Proficiency in Modern Laravel Frameworks and Tools",
                        description:
                            "Our developers are well-versed in the latest Laravel frameworks, tools, and best practices. From API integration and database optimization to performance tuning, they deliver reliable, maintainable, and scalable web solutions built to meet your business requirements.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Laravel Solutions",
                        description:
                            "Our Laravel developers deliver secure, efficient, and scalable web applications using clean architecture and optimized code. With strong testing and QA practices, we ensure your application performs flawlessly and grows with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Laravel developers?",
                        answer:
                            "Laravel developers build secure, scalable, and high-performance web applications that accelerate your business growth and digital transformation.",
                    },
                    {
                        question: "Can Laravel developers handle complex projects?",
                        answer:
                            "Yes. Our Laravel experts can manage complex web apps, APIs, enterprise systems, and eCommerce platforms with precision and reliability.",
                    },
                    {
                        question: "Is hiring Laravel developers cost-effective?",
                        answer:
                            "Hiring dedicated Laravel developers from India offers world-class expertise at competitive rates, helping you save development time and costs.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Laravel projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing support, upgrades, and performance optimization to keep your Laravel applications running smoothly and securely.",
                    },
                    {
                        question: "How fast can Laravel projects be delivered?",
                        answer:
                            "Using agile workflows, modern tools, and best coding practices, our Laravel developers deliver high-quality projects quickly and efficiently without sacrificing quality.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Laravel Developers for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated Laravel developers and how they can help build secure, scalable, and high-performing web applications.",
                    },
                ],
            },


            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-laravel-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "14+", label: "Projects Completed" },
                    { value: "10+", label: "Clients Served" },
                    { value: "8+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-java-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Java Developers for Secure and Scalable Web Solutions",
                        paragraphs: [
                            "Hire skilled Java developers to build robust, secure, and scalable web applications tailored to your business needs. Our team specializes in creating maintainable, high-performance solutions using the latest Java frameworks and best development practices.",
                            "Work with dedicated Java experts who prioritize efficiency, reliability, and long-term scalability — helping your business innovate faster, streamline workflows, and deliver exceptional digital experiences.",
                        ],
                        imageSrc: "/hire-java-developer-one.webp",
                        imageAlt: "Java Developers",
                        ctaText: "Hire Certified Java Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Java Developers for Every Industry",
                        description:
                            "Hire skilled Java developers to build secure, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers custom Java solutions, APIs, automation systems, and data-driven platforms designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable Java Development with On-Time Delivery",
                        description:
                            "Our Java developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom Java Solutions Tailored for Your Success",
                        description:
                            "Every business has unique needs, and our Java developers craft custom solutions that align with your goals. From scalable web apps and APIs to enterprise-grade platforms, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for Java Developers",
                        description:
                            "Hire Java developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team effortlessly, control project costs, and maintain consistent quality throughout your development process.",
                    },
                    {
                        title: "Proficiency in Modern Java Frameworks and Tools",
                        description:
                            "Our developers are well-versed in the latest Java frameworks, tools, and best practices. From API integration and database optimization to performance tuning, they deliver reliable, maintainable, and scalable web solutions built to meet your business requirements.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Java Solutions",
                        description:
                            "Our Java developers deliver secure, efficient, and scalable web applications using clean architecture and optimized code. With strong testing and QA practices, we ensure your application performs flawlessly and grows with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Java developers?",
                        answer:
                            "Java developers build secure, scalable, and high-performance web applications that accelerate your business growth and digital transformation.",
                    },
                    {
                        question: "Can Java developers handle complex projects?",
                        answer:
                            "Yes. Our Java experts can manage complex web apps, APIs, enterprise systems, and eCommerce platforms with precision and reliability.",
                    },
                    {
                        question: "Is hiring Java developers cost-effective?",
                        answer:
                            "Hiring dedicated Java developers from India offers world-class expertise at competitive rates, helping you save development time and costs.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Java projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing support, upgrades, and performance optimization to keep your Java applications running smoothly and securely.",
                    },
                    {
                        question: "How fast can Java projects be delivered?",
                        answer:
                            "Using agile workflows, modern tools, and best coding practices, our Java developers deliver high-quality projects quickly and efficiently without sacrificing quality.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Java Developers for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated Java developers and how they can help build secure, scalable, and high-performing web applications.",
                    },
                ],
            },


            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-java-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "15+", label: "Projects Completed" },
                    { value: "10+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-devops-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top DevOps Engineers for Efficient and Scalable Operations",
                        paragraphs: [
                            "Hire skilled DevOps engineers to streamline your development and deployment pipelines. Our team specializes in automating workflows, ensuring continuous integration and delivery, and maintaining scalable, secure, and reliable infrastructure.",
                            "Collaborate with dedicated DevOps experts who focus on performance, monitoring, and operational efficiency — helping your business deliver faster releases, reduce downtime, and achieve seamless cloud and on-premise deployments.",
                        ],
                        imageSrc: "/hire-devops-developer-one.webp",
                        imageAlt: "DevOps Developers",
                        ctaText: "Hire Certified DevOps Engineers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert DevOps Engineers for Every Industry",
                        description:
                            "Hire skilled DevOps engineers to optimize your development, deployment, and infrastructure processes. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers automation pipelines, CI/CD solutions, cloud deployments, and monitoring systems designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable DevOps Services with On-Time Delivery",
                        description:
                            "Our DevOps engineers follow agile practices and maintain clear communication to ensure timely project completion. They implement robust, scalable infrastructure and automated workflows that meet your business objectives without compromising quality.",
                    },
                    {
                        title: "Custom DevOps Solutions Tailored for Your Success",
                        description:
                            "Every business has unique operational needs, and our DevOps engineers design custom solutions that align with your goals. From cloud infrastructure and CI/CD pipelines to monitoring and automation, we build secure, high-performance systems that help your business innovate and scale.",
                    },
                    {
                        title: "Flexible Hiring Models for DevOps Engineers",
                        description:
                            "Hire DevOps engineers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team efficiently, manage costs, and maintain consistent quality throughout your DevOps projects.",
                    },
                    {
                        title: "Proficiency in Modern DevOps Tools and Practices",
                        description:
                            "Our engineers are experts in the latest DevOps tools, frameworks, and best practices. From containerization and cloud orchestration to CI/CD, monitoring, and automation, they deliver maintainable and scalable solutions tailored to your business needs.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable DevOps Solutions",
                        description:
                            "Our DevOps engineers ensure your infrastructure and workflows are secure, efficient, and scalable. With robust monitoring, optimized automation, and strong QA practices, your applications and deployments perform reliably and grow with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire DevOps engineers?",
                        answer:
                            "DevOps engineers optimize development, deployment, and infrastructure processes, ensuring your applications run securely, reliably, and at scale.",
                    },
                    {
                        question: "Can DevOps engineers handle complex projects?",
                        answer:
                            "Yes. Our DevOps experts can manage cloud infrastructure, CI/CD pipelines, automation workflows, and monitoring systems for complex enterprise solutions.",
                    },
                    {
                        question: "Is hiring DevOps engineers cost-effective?",
                        answer:
                            "Hiring dedicated DevOps engineers from India provides top-notch expertise at competitive rates, saving time, reducing operational costs, and improving delivery efficiency.",
                    },
                    {
                        question: "Can they maintain and optimize existing systems?",
                        answer:
                            "Absolutely. Our DevOps engineers offer ongoing maintenance, upgrades, and performance tuning to ensure your infrastructure and workflows remain robust and efficient.",
                    },
                    {
                        question: "How fast can DevOps projects be implemented?",
                        answer:
                            "Following agile methodologies and best practices, our DevOps engineers implement projects efficiently without compromising quality, ensuring faster time-to-market.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire DevOps Engineers for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated DevOps engineers and how they can help streamline development, deployment, and infrastructure for secure, scalable, and high-performing systems.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-devops-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "18+", label: "Projects Completed" },
                    { value: "14+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-angular-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Angular Developers for Dynamic and Scalable Web Applications",
                        paragraphs: [
                            "Hire skilled Angular developers to build responsive, high-performing, and scalable web applications tailored to your business needs. Our team specializes in creating maintainable, modular, and dynamic front-end solutions using the latest Angular frameworks and best development practices.",
                            "Work with dedicated Angular experts who focus on user experience, performance, and long-term scalability — helping your business deliver interactive web applications, streamline workflows, and provide exceptional digital experiences.",
                        ],
                        imageSrc: "/hire-angular-developer-one.webp",
                        imageAlt: "Angular Developers",
                        ctaText: "Hire Certified Angular Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Angular Developers for Every Industry",
                        description:
                            "Hire skilled Angular developers to build dynamic, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers modular front-end solutions, SPAs, and interactive dashboards designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable Angular Development with On-Time Delivery",
                        description:
                            "Our Angular developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable front-end applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom Angular Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our Angular developers craft custom solutions that align with your goals. From dynamic web apps and dashboards to complex enterprise SPAs, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for Angular Developers",
                        description:
                            "Hire Angular developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team effortlessly, control project costs, and maintain consistent quality throughout your front-end development process.",
                    },
                    {
                        title: "Proficiency in Modern Angular Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest Angular frameworks, tools, and best practices. From API integration and component optimization to performance tuning, they deliver reliable, maintainable, and scalable web solutions built to meet your business requirements.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Angular Solutions",
                        description:
                            "Our Angular developers deliver secure, efficient, and scalable front-end applications using clean architecture and optimized code. With thorough testing and QA practices, we ensure your web solutions perform flawlessly and grow with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Angular developers?",
                        answer:
                            "Angular developers build dynamic, high-performing, and scalable web applications that enhance user experience, streamline workflows, and accelerate your business growth.",
                    },
                    {
                        question: "Can Angular developers handle complex projects?",
                        answer:
                            "Yes. Our Angular experts can manage SPAs, dashboards, component libraries, API integrations, and enterprise-level front-end solutions with precision and reliability.",
                    },
                    {
                        question: "Is hiring Angular developers cost-effective?",
                        answer:
                            "Hiring dedicated Angular developers from India provides expert front-end development at competitive rates, saving time and resources while ensuring high-quality output.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Angular projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, feature enhancements, and performance optimization to ensure your Angular applications remain robust, efficient, and up-to-date.",
                    },
                    {
                        question: "How fast can Angular projects be delivered?",
                        answer:
                            "Following agile practices and modern development standards, our Angular developers deliver projects efficiently without compromising quality, ensuring timely delivery and faster time-to-market.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Angular Developers for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated Angular developers and how they can help build dynamic, scalable, and high-performing web applications.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-angular-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "18+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-react-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top React Developers for Dynamic and Scalable Web Applications",
                        paragraphs: [
                            "Hire skilled React developers to build responsive, high-performing, and scalable web applications tailored to your business needs. Our team specializes in creating maintainable, modular, and dynamic front-end solutions using the latest React frameworks and best development practices.",
                            "Work with dedicated React experts who focus on user experience, performance, and long-term scalability — helping your business deliver interactive web applications, streamline workflows, and provide exceptional digital experiences.",
                        ],
                        imageSrc: "/hire-react-developer-one.webp",
                        imageAlt: "React Developers",
                        ctaText: "Hire Certified React Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert React Developers for Every Industry",
                        description:
                            "Hire skilled React developers to build dynamic, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers modular front-end solutions, SPAs, and interactive dashboards designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable React Development with On-Time Delivery",
                        description:
                            "Our React developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable front-end applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom React Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our React developers craft custom solutions that align with your goals. From dynamic web apps and dashboards to complex enterprise SPAs, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for React Developers",
                        description:
                            "Hire React developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team effortlessly, control project costs, and maintain consistent quality throughout your front-end development process.",
                    },
                    {
                        title: "Proficiency in Modern React Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest React frameworks, tools, and best practices. From API integration and component optimization to performance tuning, they deliver reliable, maintainable, and scalable web solutions built to meet your business requirements.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable React Solutions",
                        description:
                            "Our React developers deliver secure, efficient, and scalable front-end applications using clean architecture and optimized code. With thorough testing and QA practices, we ensure your web solutions perform flawlessly and grow with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire React developers?",
                        answer:
                            "React developers build dynamic, high-performing, and scalable web applications that enhance user experience, streamline workflows, and accelerate your business growth.",
                    },
                    {
                        question: "Can React developers handle complex projects?",
                        answer:
                            "Yes. Our React experts can manage SPAs, dashboards, component libraries, API integrations, and enterprise-level front-end solutions with precision and reliability.",
                    },
                    {
                        question: "Is hiring React developers cost-effective?",
                        answer:
                            "Hiring dedicated React developers from India provides expert front-end development at competitive rates, saving time and resources while ensuring high-quality output.",
                    },
                    {
                        question: "Can they maintain and upgrade existing React projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, feature enhancements, and performance optimization to ensure your React applications remain robust, efficient, and up-to-date.",
                    },
                    {
                        question: "How fast can React projects be delivered?",
                        answer:
                            "Following agile practices and modern development standards, our React developers deliver projects efficiently without compromising quality, ensuring timely delivery and faster time-to-market.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire React Developers for Your Business?",
                        description: "Get answers to the most common questions about hiring dedicated React developers and how they can help build dynamic, scalable, and high-performing web applications.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-react-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "18+", label: "Clients Served" },
                    { value: "15+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-vue-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Vue.js Developers for Scalable and High-Performing Web Applications",
                        paragraphs: [
                            "Hire experienced Vue.js developers to build responsive, fast, and scalable web applications tailored to your business goals. Our team specializes in creating modular, maintainable, and interactive front-end solutions using the latest Vue.js frameworks and modern development practices.",
                            "Collaborate with dedicated Vue.js experts who focus on performance, user experience, and scalability — helping your business deliver seamless web applications, improve workflows, and provide engaging digital experiences.",
                        ],
                        imageSrc: "/hire-vue-developer-one.webp",
                        imageAlt: "Vue.js Developers",
                        ctaText: "Hire Certified Vue.js Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Vue.js Developers for Every Industry",
                        description:
                            "Hire skilled Vue.js developers to build dynamic, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers modular front-end solutions, SPAs, and interactive dashboards designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable Vue.js Development with On-Time Delivery",
                        description:
                            "Our Vue.js developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable front-end applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom Vue.js Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our Vue.js developers craft custom solutions that align with your goals. From dynamic web apps and dashboards to complex enterprise SPAs, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for Vue.js Developers",
                        description:
                            "Hire Vue.js developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team effortlessly, control project costs, and maintain consistent quality throughout your front-end development process.",
                    },
                    {
                        title: "Proficiency in Modern Vue.js Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest Vue.js frameworks, tools, and best practices. From API integration and component optimization to performance tuning, they deliver reliable, maintainable, and scalable web solutions built to meet your business requirements.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Vue.js Solutions",
                        description:
                            "Our Vue.js developers deliver secure, efficient, and scalable front-end applications using clean architecture and optimized code. With thorough testing and QA practices, we ensure your web solutions perform flawlessly and grow with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Vue.js developers?",
                        answer:
                            "Vue.js developers build dynamic, high-performing, and scalable web applications that enhance user experience, streamline workflows, and accelerate your business growth.",
                    },
                    {
                        question: "Can Vue.js developers handle complex projects?",
                        answer:
                            "Yes. Our Vue.js experts can manage SPAs, dashboards, component libraries, API integrations, and enterprise-level front-end solutions with precision and reliability.",
                    },
                    {
                        question: "Is hiring Vue.js developers cost-effective?",
                        answer:
                            "Hiring dedicated Vue.js developers from India provides expert front-end development at competitive rates, saving time and resources while ensuring high-quality output.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Vue.js projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, feature enhancements, and performance optimization to ensure your Vue.js applications remain robust, efficient, and up-to-date.",
                    },
                    {
                        question: "How fast can Vue.js projects be delivered?",
                        answer:
                            "Following agile practices and modern development standards, our Vue.js developers deliver projects efficiently without compromising quality, ensuring timely delivery and faster time-to-market.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Vue.js Developers for Your Business?",
                        description:
                            "Get answers to the most common questions about hiring dedicated Vue.js developers and how they can help build dynamic, scalable, and high-performing web applications.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-vue-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "19+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "12+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-node-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Node.js Developers for Scalable and High-Performing Web Applications",
                        paragraphs: [
                            "Hire experienced Node.js developers to build fast, scalable, and secure backend solutions tailored to your business goals. Our team specializes in creating modular, maintainable, and efficient server-side applications using the latest Node.js frameworks and modern development practices.",
                            "Collaborate with dedicated Node.js experts who focus on performance, reliability, and scalability — helping your business deliver seamless web applications, optimize workflows, and provide robust digital solutions.",
                        ],
                        imageSrc: "/hire-node-developer-one.webp",
                        imageAlt: "Node.js Developers",
                        ctaText: "Hire Certified Node.js Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Node.js Developers for Every Industry",
                        description:
                            "Hire skilled Node.js developers to build scalable, high-performing, and secure backend solutions. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers RESTful APIs, microservices, and real-time applications designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable Node.js Development with On-Time Delivery",
                        description:
                            "Our Node.js developers follow agile methodologies and maintain clear communication to ensure timely project delivery. They create robust, scalable backend systems that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom Node.js Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our Node.js developers craft custom solutions that align with your goals. From API-driven applications and microservices to enterprise-grade backend platforms, we build secure, high-performance systems that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for Node.js Developers",
                        description:
                            "Hire Node.js developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team efficiently, control project costs, and maintain consistent quality throughout your backend development projects.",
                    },
                    {
                        title: "Proficiency in Modern Node.js Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest Node.js frameworks, libraries, and tools. From API development and database integration to performance tuning and testing, they deliver reliable, maintainable, and scalable backend solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Node.js Solutions",
                        description:
                            "Our Node.js developers deliver secure, efficient, and scalable server-side applications. With optimized architecture, modular code, and thorough testing, we ensure your backend systems perform flawlessly and grow with your business.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Node.js developers?",
                        answer:
                            "Node.js developers build scalable, high-performing, and secure backend solutions that accelerate business growth and ensure reliable server-side operations.",
                    },
                    {
                        question: "Can Node.js developers handle complex projects?",
                        answer:
                            "Yes. Our Node.js experts can manage RESTful APIs, microservices, real-time applications, and enterprise-level backend systems with precision and reliability.",
                    },
                    {
                        question: "Is hiring Node.js developers cost-effective?",
                        answer:
                            "Hiring dedicated Node.js developers from India provides top-tier backend expertise at competitive rates, saving development time and operational costs while ensuring quality.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Node.js projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, feature upgrades, and performance optimization to ensure your Node.js applications remain robust, secure, and up-to-date.",
                    },
                    {
                        question: "How fast can Node.js projects be delivered?",
                        answer:
                            "Following agile methodologies and best coding practices, our Node.js developers deliver high-quality backend projects efficiently without compromising performance, ensuring timely delivery.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Node.js Developers for Your Business?",
                        description:
                            "Get answers to the most common questions about hiring dedicated Node.js developers and how they can help build scalable, high-performing, and secure backend solutions for your business.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-node-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "18+", label: "Clients Served" },
                    { value: "14+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },

    {
        pageId: "hire-mean-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top MEAN Stack Developers for Scalable Full-Stack Solutions",
                        paragraphs: [
                            "Hire experienced MEAN Stack developers to build fast, secure, and scalable full-stack web applications tailored to your business goals. Our team specializes in creating modular, maintainable, and high-performance applications using MongoDB, Express.js, Angular, and Node.js.",
                            "Collaborate with dedicated MEAN Stack experts who focus on performance, reliability, and scalability — helping your business deliver seamless web applications, optimize workflows, and provide robust digital solutions.",
                        ],
                        imageSrc: "/hire-mean-developer-one.webp",
                        imageAlt: "MEAN Stack Developers",
                        ctaText: "Hire Certified MEAN Stack Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert MEAN Stack Developers for Every Industry",
                        description:
                            "Hire skilled MEAN Stack developers to build full-stack, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers end-to-end solutions using MongoDB, Express.js, Angular, and Node.js designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable MEAN Stack Development with On-Time Delivery",
                        description:
                            "Our MEAN developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable full-stack applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom MEAN Stack Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our MEAN Stack developers craft custom solutions that align with your goals. From dynamic front-end interfaces with Angular to secure Node.js backends, we deliver integrated, high-performance applications that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for MEAN Stack Developers",
                        description:
                            "Hire MEAN Stack developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team efficiently, manage costs, and maintain consistent quality throughout your full-stack projects.",
                    },
                    {
                        title: "Proficiency in Modern MEAN Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest MEAN Stack frameworks, libraries, and tools. From MongoDB database integration and RESTful API development to Angular UI optimization and Node.js backend performance tuning, they deliver maintainable and scalable full-stack solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable MEAN Solutions",
                        description:
                            "Our MEAN Stack developers deliver secure, efficient, and scalable full-stack applications. With modular architecture, optimized code, and thorough testing, we ensure your web solutions perform flawlessly and grow with your business.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire MEAN Stack developers?",
                        answer:
                            "MEAN Stack developers build scalable, high-performing, and full-stack web applications that accelerate business growth and ensure seamless integration between frontend and backend systems using MongoDB, Express.js, Angular, and Node.js.",
                    },
                    {
                        question: "Can MEAN Stack developers handle complex projects?",
                        answer:
                            "Yes. Our MEAN experts can manage SPAs, enterprise dashboards, RESTful APIs, microservices, and real-time web applications with precision, scalability, and reliability.",
                    },
                    {
                        question: "Is hiring MEAN Stack developers cost-effective?",
                        answer:
                            "Hiring dedicated MEAN Stack developers from India provides top-tier full-stack expertise at competitive rates, saving development time and operational costs while ensuring quality, performance, and long-term maintainability.",
                    },
                    {
                        question: "Can they maintain and upgrade existing MEAN Stack projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, updates, and performance optimization to ensure your MEAN Stack applications remain robust, secure, and up-to-date with the latest technologies.",
                    },
                    {
                        question: "How fast can MEAN Stack projects be delivered?",
                        answer:
                            "By following agile methodologies and modern development standards, our MEAN Stack developers deliver high-quality full-stack applications efficiently, ensuring timely delivery without compromising on quality or performance.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire MEAN Stack Developers for Your Business?",
                        description:
                            "Get answers to the most common questions about hiring dedicated MEAN Stack developers and how they can help build scalable, high-performing, and full-stack web applications using MongoDB, Express.js, Angular, and Node.js for your business.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-mean-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "22+", label: "Projects Completed" },
                    { value: "20+", label: "Clients Served" },
                    { value: "16+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-mern-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top MERN Stack Developers for Scalable Full-Stack Solutions",
                        paragraphs: [
                            "Hire experienced MERN Stack developers to build fast, secure, and scalable full-stack web applications tailored to your business goals. Our team specializes in creating modular, maintainable, and high-performance applications using MongoDB, Express.js, React, and Node.js.",
                            "Collaborate with dedicated MERN Stack experts who focus on performance, reliability, and scalability — helping your business deliver seamless web applications, optimize workflows, and provide robust digital solutions.",
                        ],
                        imageSrc: "/hire-mern-developer-one.webp",
                        imageAlt: "MERN Stack Developers",
                        ctaText: "Hire Certified MERN Stack Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert MERN Stack Developers for Every Industry",
                        description:
                            "Hire skilled MERN Stack developers to build full-stack, high-performing, and scalable web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers end-to-end solutions using MongoDB, Express.js, React, and Node.js designed for efficiency and reliability.",
                    },
                    {
                        title: "Reliable MERN Stack Development with On-Time Delivery",
                        description:
                            "Our MERN developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable full-stack applications that meet your business objectives without compromising quality or performance.",
                    },
                    {
                        title: "Custom MERN Stack Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our MERN Stack developers craft custom solutions that align with your goals. From dynamic front-end interfaces with React to secure Node.js backends, we deliver integrated, high-performance applications that help your business innovate and grow.",
                    },
                    {
                        title: "Flexible Hiring Models for MERN Stack Developers",
                        description:
                            "Hire MERN Stack developers on your preferred terms — full-time, part-time, or hourly. Our flexible hiring models let you scale your team efficiently, manage costs, and maintain consistent quality throughout your full-stack projects.",
                    },
                    {
                        title: "Proficiency in Modern MERN Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest MERN Stack frameworks, libraries, and tools. From MongoDB database integration and API development to React UI optimization and Node.js backend performance tuning, they deliver maintainable and scalable full-stack solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable MERN Solutions",
                        description:
                            "Our MERN Stack developers deliver secure, efficient, and scalable full-stack applications. With modular architecture, optimized code, and thorough testing, we ensure your web solutions perform flawlessly and grow with your business.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire MERN Stack developers?",
                        answer:
                            "MERN Stack developers build scalable, high-performing, and full-stack web applications that accelerate business growth and ensure seamless integration between frontend and backend systems.",
                    },
                    {
                        question: "Can MERN Stack developers handle complex projects?",
                        answer:
                            "Yes. Our MERN experts can manage SPAs, dashboards, RESTful APIs, microservices, real-time applications, and enterprise-level full-stack solutions with precision and reliability.",
                    },
                    {
                        question: "Is hiring MERN Stack developers cost-effective?",
                        answer:
                            "Hiring dedicated MERN Stack developers from India provides top-tier full-stack expertise at competitive rates, saving development time and operational costs while ensuring quality and maintainability.",
                    },
                    {
                        question: "Can they maintain and upgrade existing MERN Stack projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, feature upgrades, and performance optimization to ensure your MERN applications remain robust, secure, and up-to-date.",
                    },
                    {
                        question: "How fast can MERN Stack projects be delivered?",
                        answer:
                            "Following agile methodologies and best coding practices, our MERN Stack developers deliver high-quality full-stack projects efficiently without compromising performance, ensuring timely delivery.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire MERN Stack Developers for Your Business?",
                        description:
                            "Get answers to the most common questions about hiring dedicated MERN Stack developers and how they can help build scalable, high-performing, and full-stack web applications for your business.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-mern-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "24+", label: "Projects Completed" },
                    { value: "18+", label: "Clients Served" },
                    { value: "14+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-blazor-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Blazor Developers for Scalable and Interactive Web Applications",
                        paragraphs: [
                            "Hire skilled Blazor developers to build fast, secure, and scalable web applications tailored to your business objectives. Our team excels in developing robust, maintainable, and interactive applications using Blazor and .NET technologies.",
                            "Collaborate with dedicated Blazor experts who prioritize performance, scalability, and reliability — helping your business create seamless digital solutions, enhance workflows, and deliver exceptional user experiences across all platforms.",
                        ],
                        imageSrc: "/hire-blazor-developer-one.webp",
                        imageAlt: "Blazor Developers",
                        ctaText: "Hire Certified Blazor Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Blazor Developers for Every Industry",
                        description:
                            "Hire skilled Blazor developers to build scalable, high-performing, and interactive web applications. With experience across industries like eCommerce, healthcare, finance, and logistics, our team delivers end-to-end solutions using Blazor and .NET technologies — designed for performance, efficiency, and reliability.",
                    },
                    {
                        title: "Reliable Blazor Development with On-Time Delivery",
                        description:
                            "Our Blazor developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable applications that meet your business goals without compromising on quality or performance.",
                    },
                    {
                        title: "Custom Blazor Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our Blazor developers craft customized solutions that align with your objectives. From dynamic front-ends to secure .NET backends, we deliver fully integrated, high-performance applications that help your business grow and innovate.",
                    },
                    {
                        title: "Flexible Hiring Models for Blazor Developers",
                        description:
                            "Hire Blazor developers on your preferred terms — full-time, part-time, or hourly. Our flexible engagement models let you scale your team efficiently, control project costs, and maintain consistent quality across all stages of development.",
                    },
                    {
                        title: "Proficiency in Modern Blazor Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest Blazor and .NET frameworks, libraries, and tools. From API integration and component optimization to performance tuning, they deliver maintainable and scalable solutions tailored to your business needs.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Blazor Solutions",
                        description:
                            "Our Blazor developers deliver secure, efficient, and scalable web applications. With modular architecture, optimized code, and rigorous testing, we ensure your solutions perform flawlessly and evolve alongside your business.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Blazor developers?",
                        answer:
                            "Blazor developers build scalable, high-performing, and interactive web applications that accelerate business growth while providing seamless integration between client-side and server-side .NET components.",
                    },
                    {
                        question: "Can Blazor developers handle complex projects?",
                        answer:
                            "Yes. Our Blazor experts can manage SPAs, enterprise dashboards, RESTful APIs, real-time applications, and full-stack .NET solutions with precision, scalability, and reliability.",
                    },
                    {
                        question: "Is hiring Blazor developers cost-effective?",
                        answer:
                            "Hiring dedicated Blazor developers from India provides top-tier expertise at competitive rates, saving development time and operational costs while ensuring maintainable, high-quality solutions.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Blazor projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, feature enhancements, and performance optimization to ensure your Blazor applications remain secure, robust, and up-to-date with the latest technologies.",
                    },
                    {
                        question: "How fast can Blazor projects be delivered?",
                        answer:
                            "By following agile methodologies and modern .NET development standards, our Blazor developers deliver high-quality applications efficiently, ensuring timely delivery without compromising performance or reliability.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Blazor Developers for Your Business?",
                        description:
                            "Get answers to the most common questions about hiring dedicated Blazor developers and how they can help build scalable, high-performing, and interactive web applications using .NET technologies for your business.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-blazor-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "8+", label: "Projects Completed" },
                    { value: "4+", label: "Clients Served" },
                    { value: "5+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-magento-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Top Magento Developers for Scalable and Robust E-commerce Solutions",
                        paragraphs: [
                            "Hire skilled Magento developers to build fast, secure, and scalable e-commerce websites tailored to your business goals. Our team specializes in creating maintainable, feature-rich, and dynamic online stores using the latest Magento frameworks and best development practices.",
                            "Collaborate with dedicated Magento experts who focus on performance, customization, and seamless shopping experiences — helping your business deliver high-converting online stores, optimize workflows, and provide exceptional digital retail solutions.",
                        ],
                        imageSrc: "/hire-magento-developer-one.webp",
                        imageAlt: "Magento Developers",
                        ctaText: "Hire Certified Magento Developers",
                    },
                ],
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Magento Developers for Every Industry",
                        description:
                            "Hire skilled Magento developers to build scalable, high-performing, and feature-rich e-commerce websites. With experience across industries like retail, fashion, electronics, and logistics, our team delivers end-to-end Magento solutions designed for efficiency, flexibility, and reliability.",
                    },
                    {
                        title: "Reliable Magento Development with On-Time Delivery",
                        description:
                            "Our Magento developers follow agile methodologies and maintain transparent communication to ensure timely project delivery. They create robust, scalable online stores that meet your business objectives without compromising on quality or performance.",
                    },
                    {
                        title: "Custom Magento Solutions Tailored for Your Success",
                        description:
                            "Every business has unique requirements, and our Magento developers craft customized solutions that align with your goals. From dynamic storefronts to secure payment integrations, we deliver fully integrated, high-performance e-commerce platforms that help your business grow and innovate.",
                    },
                    {
                        title: "Flexible Hiring Models for Magento Developers",
                        description:
                            "Hire Magento developers on your preferred terms — full-time, part-time, or hourly. Our flexible engagement models let you scale your team efficiently, manage costs, and maintain consistent quality across all stages of development.",
                    },
                    {
                        title: "Proficiency in Modern Magento Frameworks and Tools",
                        description:
                            "Our developers are experts in the latest Magento frameworks, extensions, and tools. From custom module development and API integration to performance optimization and theme customization, they deliver maintainable and scalable e-commerce solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Magento Solutions",
                        description:
                            "Our Magento developers deliver secure, efficient, and scalable online stores. With modular architecture, optimized code, and thorough testing, we ensure your e-commerce solutions perform flawlessly and grow with your business.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Magento developers?",
                        answer:
                            "Magento developers build scalable, high-performing, and feature-rich e-commerce solutions that accelerate business growth while providing seamless shopping experiences for your customers.",
                    },
                    {
                        question: "Can Magento developers handle complex projects?",
                        answer:
                            "Yes. Our Magento experts can manage multi-store setups, custom modules, third-party integrations, payment gateways, and enterprise-level e-commerce platforms with precision, scalability, and reliability.",
                    },
                    {
                        question: "Is hiring Magento developers cost-effective?",
                        answer:
                            "Hiring dedicated Magento developers from India provides top-tier e-commerce expertise at competitive rates, saving development time and operational costs while ensuring maintainable, high-quality solutions.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Magento projects?",
                        answer:
                            "Absolutely. Our developers provide ongoing maintenance, feature upgrades, and performance optimization to ensure your Magento stores remain secure, robust, and up-to-date with the latest platform updates and best practices.",
                    },
                    {
                        question: "How fast can Magento projects be delivered?",
                        answer:
                            "By following agile methodologies and modern Magento development standards, our developers deliver high-quality e-commerce solutions efficiently, ensuring timely delivery without compromising performance or reliability.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Magento Developers for Your Business?",
                        description:
                            "Get answers to the most common questions about hiring dedicated Magento developers and how they can help build scalable, high-performing, and feature-rich e-commerce solutions for your business.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-magento-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "18+", label: "Projects Completed" },
                    { value: "12+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-wordpress-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert WordPress Developers for Custom and Scalable Websites",
                        paragraphs: [
                            "Hire experienced WordPress developers to build secure, high-performing, and visually stunning websites tailored to your business needs. Our team specializes in developing custom WordPress themes, plugins, and scalable CMS solutions optimized for speed, SEO, and seamless user experience.",
                            "Collaborate with dedicated WordPress experts who focus on flexibility, performance, and innovation — helping your business create powerful websites, streamline content management, and deliver exceptional digital experiences across all devices.",
                        ],
                        imageSrc: "/hire-wordpress-developer-one.webp",
                        imageAlt: "WordPress Developers",
                        ctaText: "Hire Certified WordPress Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert WordPress Developers for Every Industry",
                        description:
                            "Hire skilled WordPress developers to build high-performing, SEO-friendly, and fully customizable websites. With experience across industries like eCommerce, healthcare, education, and finance, our team delivers end-to-end WordPress solutions designed for flexibility, performance, and scalability.",
                    },
                    {
                        title: "Reliable WordPress Development with On-Time Delivery",
                        description:
                            "Our WordPress developers follow agile methodologies and transparent communication to ensure timely delivery of every project. They create robust, scalable, and visually appealing websites that meet your business goals without compromising on performance or quality.",
                    },
                    {
                        title: "Custom WordPress Solutions Tailored for Your Success",
                        description:
                            "Every business is unique, and our WordPress developers craft tailored solutions that align with your vision. From custom theme design and plugin development to WooCommerce integrations, we deliver engaging and conversion-focused websites that help your business grow online.",
                    },
                    {
                        title: "Flexible Hiring Models for WordPress Developers",
                        description:
                            "Hire WordPress developers based on your needs — full-time, part-time, or hourly. Our flexible engagement models allow you to scale your team efficiently, control development costs, and maintain consistent quality throughout your projects.",
                    },
                    {
                        title: "Proficiency in Modern WordPress Tools and Technologies",
                        description:
                            "Our developers are proficient in the latest WordPress frameworks, page builders, and tools. From Gutenberg and Elementor to API integration, plugin customization, and site optimization, they deliver maintainable and future-ready web solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable WordPress Websites",
                        description:
                            "Our WordPress developers deliver secure, efficient, and scalable websites built to perform. With clean code, optimized performance, and strong security practices, we ensure your site remains fast, reliable, and easy to manage as your business grows.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire WordPress developers?",
                        answer:
                            "Hiring expert WordPress developers helps you create fully customized, responsive, and SEO-friendly websites tailored to your business needs. They ensure fast performance, easy content management, and scalable solutions to grow your online presence effectively.",
                    },
                    {
                        question: "Can WordPress developers handle complex projects?",
                        answer:
                            "Yes. Our skilled WordPress developers can manage everything from custom theme and plugin development to API integrations, WooCommerce setups, and enterprise-grade websites — ensuring flexibility, scalability, and robust functionality for your business.",
                    },
                    {
                        question: "Is hiring WordPress developers cost-effective?",
                        answer:
                            "Hiring dedicated WordPress developers from India is a highly cost-effective choice. You get access to experienced professionals who deliver high-quality, feature-rich websites at competitive prices while saving time and reducing operational overhead.",
                    },
                    {
                        question: "Can they maintain and upgrade existing WordPress websites?",
                        answer:
                            "Absolutely. Our WordPress developers provide ongoing maintenance, security updates, performance optimization, and version upgrades to keep your site fast, secure, and aligned with the latest WordPress standards and technologies.",
                    },
                    {
                        question: "How fast can WordPress projects be delivered?",
                        answer:
                            "Using agile workflows and modern WordPress development standards, our team ensures on-time project delivery. Timelines depend on project complexity, but our developers prioritize quality, performance, and client satisfaction at every stage.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire WordPress Developers for Your Business?",
                        description:
                            "Discover why hiring expert Magento developers is the key to building a powerful, scalable, and high-performing eCommerce store. Our certified WordPress developers deliver customized, secure, and SEO-friendly solutions that enhance user experience, boost sales, and help your business grow in the competitive online marketplace.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-wordpress-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "18+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-shopify-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Shopify Developers for Custom and Scalable eCommerce Stores",
                        paragraphs: [
                            "Hire skilled Shopify developers to build secure, high-performing, and visually appealing online stores tailored to your business needs. Our team specializes in custom Shopify theme development, app integrations, and scalable eCommerce solutions optimized for speed, SEO, and seamless shopping experiences.",
                            "Work with dedicated Shopify experts who focus on flexibility, performance, and innovation — helping your business create powerful online stores, streamline store management, and deliver exceptional digital shopping experiences across all devices.",
                        ],
                        imageSrc: "/hire-shopify-developer-one.webp",
                        imageAlt: "Shopify Developers",
                        ctaText: "Hire Certified Shopify Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Shopify Developers for Every Industry",
                        description:
                            "Hire skilled Shopify developers to build high-performing, SEO-friendly, and fully customizable online stores. With experience across industries like fashion, electronics, health & beauty, and retail, our team delivers end-to-end Shopify solutions designed for flexibility, performance, and scalability.",
                    },
                    {
                        title: "Reliable Shopify Development with On-Time Delivery",
                        description:
                            "Our Shopify developers follow agile methodologies and maintain transparent communication to ensure timely delivery of every project. They create robust, scalable, and visually appealing eCommerce stores that meet your business goals without compromising on performance or quality.",
                    },
                    {
                        title: "Custom Shopify Solutions Tailored for Your Success",
                        description:
                            "Every business is unique, and our Shopify developers craft tailored solutions to match your vision. From custom theme design and app integrations to advanced checkout customization, we deliver engaging and conversion-focused stores that drive online growth.",
                    },
                    {
                        title: "Flexible Hiring Models for Shopify Developers",
                        description:
                            "Hire Shopify developers based on your requirements — full-time, part-time, or hourly. Our flexible engagement models let you scale your development team efficiently, manage costs effectively, and maintain consistent quality throughout your projects.",
                    },
                    {
                        title: "Proficiency in Modern Shopify Tools and Technologies",
                        description:
                            "Our developers are skilled in the latest Shopify frameworks, Liquid templates, and development tools. From Shopify Plus and app integrations to API customizations and store optimization, they deliver maintainable and future-ready eCommerce solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Shopify Stores",
                        description:
                            "Our Shopify developers deliver secure, fast, and scalable online stores. With clean code, optimized performance, and strong security practices, we ensure your Shopify store remains reliable, easy to manage, and ready for growth as your business expands.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Shopify developers?",
                        answer:
                            "Hiring expert Shopify developers helps you build fully customized, responsive, and SEO-friendly online stores tailored to your business goals. They ensure fast performance, seamless shopping experiences, and scalable solutions that drive online sales and growth.",
                    },
                    {
                        question: "Can Shopify developers handle complex projects?",
                        answer:
                            "Yes. Our skilled Shopify developers can handle everything from custom theme development and app integrations to advanced checkout customization and multi-store setups — ensuring your eCommerce store is flexible, scalable, and robust.",
                    },
                    {
                        question: "Is hiring Shopify developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Shopify developers from India gives you access to experienced professionals at competitive rates. You benefit from faster development, high-quality stores, and reduced operational costs without compromising on performance or functionality.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Shopify stores?",
                        answer:
                            "Yes. Our Shopify developers provide ongoing maintenance, theme and app updates, performance optimization, and security enhancements to ensure your store remains fast, secure, and aligned with the latest Shopify features and best practices.",
                    },
                    {
                        question: "How fast can Shopify projects be delivered?",
                        answer:
                            "Using agile methodologies and modern Shopify development standards, our team ensures timely delivery of high-quality eCommerce solutions. Project timelines depend on complexity, but we prioritize performance, reliability, and client satisfaction at every stage.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Shopify Developers for Your Business?",
                        description:
                            "Discover why hiring expert Shopify developers is essential for building a powerful, scalable, and high-performing online store. Our certified Shopify developers deliver customized, secure, and SEO-friendly solutions that enhance user experience, increase conversions, and help your business succeed in the competitive eCommerce landscape.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-shopify-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "12+", label: "Projects Completed" },
                    { value: "10+", label: "Clients Served" },
                    { value: "8+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-drupal-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Drupal Developers for Custom and Scalable Websites",
                        paragraphs: [
                            "Hire experienced Drupal developers to build secure, high-performing, and fully customizable websites tailored to your business needs. Our team specializes in Drupal CMS development, custom module creation, and scalable enterprise solutions optimized for speed, SEO, and seamless user experience.",
                            "Collaborate with dedicated Drupal experts who focus on flexibility, performance, and innovation — helping your business create powerful websites, streamline content management, and deliver exceptional digital experiences across all devices.",
                        ],
                        imageSrc: "/hire-drupal-developer-one.webp",
                        imageAlt: "Drupal Developers",
                        ctaText: "Hire Certified Drupal Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Drupal Developers for Every Industry",
                        description:
                            "Hire skilled Drupal developers to build high-performing, SEO-friendly, and fully customizable websites. With experience across industries like eCommerce, healthcare, education, and finance, our team delivers end-to-end Drupal solutions designed for flexibility, performance, and scalability.",
                    },
                    {
                        title: "Reliable Drupal Development with On-Time Delivery",
                        description:
                            "Our Drupal developers follow agile methodologies and maintain transparent communication to ensure timely delivery of every project. They create robust, scalable, and visually appealing websites that meet your business goals without compromising on performance or quality.",
                    },
                    {
                        title: "Custom Drupal Solutions Tailored for Your Success",
                        description:
                            "Every business is unique, and our Drupal developers craft tailored solutions that align with your vision. From custom theme design and module development to complex content workflows, we deliver engaging and conversion-focused websites that help your business grow online.",
                    },
                    {
                        title: "Flexible Hiring Models for Drupal Developers",
                        description:
                            "Hire Drupal developers based on your requirements — full-time, part-time, or hourly. Our flexible engagement models let you scale your team efficiently, control development costs, and maintain consistent quality throughout your projects.",
                    },
                    {
                        title: "Proficiency in Modern Drupal Tools and Technologies",
                        description:
                            "Our developers are proficient in the latest Drupal frameworks, modules, and development tools. From Drupal 9/10, API integrations, and custom module development to site optimization, they deliver maintainable and future-ready web solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Drupal Websites",
                        description:
                            "Our Drupal developers deliver secure, efficient, and scalable websites built to perform. With clean code, optimized performance, and strong security practices, we ensure your Drupal site remains fast, reliable, and easy to manage as your business grows.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Drupal developers?",
                        answer:
                            "Hiring expert Drupal developers helps you build fully customized, responsive, and SEO-friendly websites tailored to your business needs. They ensure fast performance, flexible content management, and scalable solutions to grow your online presence effectively.",
                    },
                    {
                        question: "Can Drupal developers handle complex projects?",
                        answer:
                            "Yes. Our skilled Drupal developers can manage everything from custom theme and module development to API integrations, complex content workflows, and enterprise-grade websites — ensuring flexibility, scalability, and robust functionality for your business.",
                    },
                    {
                        question: "Is hiring Drupal developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Drupal developers from India is a cost-effective choice. You gain access to experienced professionals who deliver high-quality, feature-rich websites at competitive rates while saving time and reducing operational overhead.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Drupal websites?",
                        answer:
                            "Yes. Our Drupal developers provide ongoing maintenance, security updates, performance optimization, and version upgrades to keep your site fast, secure, and aligned with the latest Drupal standards and best practices.",
                    },
                    {
                        question: "How fast can Drupal projects be delivered?",
                        answer:
                            "Using agile workflows and modern Drupal development standards, our team ensures timely project delivery. Project timelines depend on complexity, but we prioritize quality, performance, and client satisfaction at every stage.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Drupal Developers for Your Business?",
                        description:
                            "Discover why hiring expert Drupal developers is essential for building powerful, scalable, and high-performing websites. Our certified Drupal developers deliver customized, secure, and SEO-friendly solutions that enhance user experience, improve business efficiency, and help your organization grow in the competitive digital landscape.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-drupal-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "10+", label: "Projects Completed" },
                    { value: "8+", label: "Clients Served" },
                    { value: "7+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-html5-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert HTML5 Developers for Custom and Scalable Websites",
                        paragraphs: [
                            "Hire experienced HTML5 developers to build secure, high-performing, and fully responsive websites tailored to your business needs. Our team specializes in HTML5 web development, interactive UI/UX, and scalable front-end solutions optimized for speed, SEO, and seamless user experience.",
                            "Work with dedicated HTML5 experts who prioritize flexibility, performance, and innovation — helping your business create powerful websites, streamline content management, and deliver exceptional digital experiences across all devices.",
                        ],
                        imageSrc: "/hire-html5-developer-one.webp",
                        imageAlt: "HTML5 Developers",
                        ctaText: "Hire Certified HTML5 Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert HTML5 Developers for Every Industry",
                        description:
                            "Hire skilled HTML5 developers to build high-performing, SEO-friendly, and fully responsive websites. With experience across industries like eCommerce, healthcare, education, and finance, our team delivers end-to-end HTML5 solutions designed for flexibility, performance, and scalability.",
                    },
                    {
                        title: "Reliable HTML5 Development with On-Time Delivery",
                        description:
                            "Our HTML5 developers follow agile methodologies and maintain transparent communication to ensure timely delivery of every project. They create robust, scalable, and visually appealing websites that meet your business goals without compromising on performance or quality.",
                    },
                    {
                        title: "Custom HTML5 Solutions Tailored for Your Success",
                        description:
                            "Every business is unique, and our HTML5 developers craft tailored solutions aligned with your vision. From custom UI/UX design and interactive web elements to responsive layouts, we deliver engaging and conversion-focused websites that help your business grow online.",
                    },
                    {
                        title: "Flexible Hiring Models for HTML5 Developers",
                        description:
                            "Hire HTML5 developers based on your requirements — full-time, part-time, or hourly. Our flexible engagement models let you scale your team efficiently, manage development costs, and maintain consistent quality across projects.",
                    },
                    {
                        title: "Proficiency in Modern HTML5 Tools and Technologies",
                        description:
                            "Our developers are proficient in the latest HTML5 standards, CSS3, JavaScript frameworks, and front-end libraries. From responsive design and cross-browser compatibility to animation and API integrations, they deliver maintainable and future-ready web solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable HTML5 Websites",
                        description:
                            "Our HTML5 developers deliver secure, efficient, and scalable websites built to perform. With clean code, optimized performance, and strong security practices, we ensure your website remains fast, reliable, and easy to manage as your business grows.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire HTML5 developers?",
                        answer:
                            "Hiring expert HTML5 developers helps you build fully customized, responsive, and SEO-friendly websites tailored to your business needs. They ensure fast performance, cross-browser compatibility, and scalable solutions to grow your online presence effectively.",
                    },
                    {
                        question: "Can HTML5 developers handle complex projects?",
                        answer:
                            "Yes. Our skilled HTML5 developers can manage everything from interactive UI/UX design and responsive layouts to API integrations and dynamic web applications — ensuring flexibility, scalability, and robust functionality for your business.",
                    },
                    {
                        question: "Is hiring HTML5 developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated HTML5 developers from India is a cost-effective choice. You gain access to experienced professionals who deliver high-quality, feature-rich websites at competitive rates while saving time and reducing operational overhead.",
                    },
                    {
                        question: "Can they maintain and upgrade existing HTML5 websites?",
                        answer:
                            "Yes. Our HTML5 developers provide ongoing maintenance, performance optimization, and feature updates to ensure your site remains fast, secure, and aligned with the latest web standards and best practices.",
                    },
                    {
                        question: "How fast can HTML5 projects be delivered?",
                        answer:
                            "Using agile workflows and modern HTML5 development standards, our team ensures timely project delivery. Project timelines depend on complexity, but we prioritize quality, performance, and client satisfaction at every stage.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire HTML5 Developers for Your Business?",
                        description:
                            "Discover why hiring expert HTML5 developers is crucial for building powerful, scalable, and high-performing websites. Our certified HTML5 developers deliver customized, secure, and SEO-friendly solutions that enhance user experience, improve business efficiency, and help your organization succeed in the competitive digital landscape.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-html5-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "18+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-umbraco-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Umbraco Developers for Custom and Scalable Websites",
                        paragraphs: [
                            "Hire experienced Umbraco developers to build secure, high-performing, and fully customizable websites tailored to your business needs. Our team specializes in Umbraco CMS development, custom module creation, and scalable enterprise solutions optimized for speed, SEO, and seamless user experience.",
                            "Work with dedicated Umbraco experts who prioritize flexibility, performance, and innovation — helping your business create powerful websites, streamline content management, and deliver exceptional digital experiences across all devices.",
                        ],
                        imageSrc: "/hire-umbraco-developer-one.webp",
                        imageAlt: "Umbraco Developers",
                        ctaText: "Hire Certified Umbraco Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Umbraco Developers for Every Industry",
                        description:
                            "Hire skilled Umbraco developers to build high-performing, SEO-friendly, and fully customizable websites. With experience across industries like eCommerce, healthcare, education, and finance, our team delivers end-to-end Umbraco solutions designed for flexibility, performance, and scalability.",
                    },
                    {
                        title: "Reliable Umbraco Development with On-Time Delivery",
                        description:
                            "Our Umbraco developers follow agile methodologies and maintain transparent communication to ensure timely delivery of every project. They create robust, scalable, and visually appealing websites that meet your business goals without compromising on performance or quality.",
                    },
                    {
                        title: "Custom Umbraco Solutions Tailored for Your Success",
                        description:
                            "Every business is unique, and our Umbraco developers craft tailored solutions aligned with your vision. From custom theme design and module development to complex content workflows, we deliver engaging and conversion-focused websites that help your business grow online.",
                    },
                    {
                        title: "Flexible Hiring Models for Umbraco Developers",
                        description:
                            "Hire Umbraco developers based on your requirements — full-time, part-time, or hourly. Our flexible engagement models let you scale your team efficiently, manage development costs, and maintain consistent quality across projects.",
                    },
                    {
                        title: "Proficiency in Modern Umbraco Tools and Technologies",
                        description:
                            "Our developers are proficient in the latest Umbraco frameworks, modules, and development tools. From Umbraco CMS 9/10, API integrations, and custom module development to site optimization, they deliver maintainable and future-ready web solutions.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable Umbraco Websites",
                        description:
                            "Our Umbraco developers deliver secure, efficient, and scalable websites built to perform. With clean code, optimized performance, and strong security practices, we ensure your Umbraco site remains fast, reliable, and easy to manage as your business grows.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Umbraco developers?",
                        answer:
                            "Hiring expert Umbraco developers helps you build fully customized, secure, and scalable websites tailored to your business needs. They ensure fast performance, flexible content management, and maintainable solutions to grow your online presence effectively.",
                    },
                    {
                        question: "Can Umbraco developers handle complex projects?",
                        answer:
                            "Yes. Our skilled Umbraco developers can manage everything from custom module and theme development to API integrations and complex content workflows — ensuring flexibility, scalability, and robust functionality for your business.",
                    },
                    {
                        question: "Is hiring Umbraco developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Umbraco developers from India is a cost-effective choice. You gain access to experienced professionals who deliver high-quality, feature-rich websites at competitive rates while saving time and reducing operational overhead.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Umbraco websites?",
                        answer:
                            "Yes. Our Umbraco developers provide ongoing maintenance, performance optimization, and version upgrades to ensure your site remains fast, secure, and aligned with the latest Umbraco standards and best practices.",
                    },
                    {
                        question: "How fast can Umbraco projects be delivered?",
                        answer:
                            "Using agile workflows and modern Umbraco development standards, our team ensures timely project delivery. Project timelines depend on complexity, but we prioritize quality, performance, and client satisfaction at every stage.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Umbraco Developers for Your Business?",
                        description:
                            "Discover why hiring expert Umbraco developers is essential for building powerful, scalable, and high-performing websites. Our certified Umbraco developers deliver customized, secure, and SEO-friendly solutions that enhance user experience, streamline business processes, and help your organization grow in the competitive digital landscape.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-umbraco-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-smartcontract-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Smart Contract Developers for Secure Blockchain Solutions",
                        paragraphs: [
                            "Hire experienced Smart Contract developers to build reliable, secure, and efficient blockchain-based applications. Our team specializes in Ethereum, Solidity, and Web3 development — delivering custom smart contracts that power DeFi platforms, NFTs, token ecosystems, and enterprise blockchain solutions.",
                            "Work with certified blockchain experts who ensure transparency, automation, and trust through robust smart contract architecture. From auditing and optimization to full-scale dApp integration, our developers help you launch scalable and secure blockchain solutions with confidence.",
                        ],
                        imageSrc: "/hire-smartcontract-one.webp",
                        imageAlt: "Smart Contract Developers",
                        ctaText: "Hire Certified Smart Contract Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Smart Contract Developers for Every Industry",
                        description:
                            "Hire skilled Smart Contract developers to build secure, transparent, and decentralized blockchain solutions. With experience across industries like finance, supply chain, real estate, and gaming, our developers deliver blockchain-powered systems that ensure trust, automation, and efficiency.",
                    },
                    {
                        title: "Reliable Smart Contract Development with On-Time Delivery",
                        description:
                            "Our Smart Contract developers follow agile methodologies and maintain transparent communication to ensure your blockchain projects are delivered on schedule. They build reliable, bug-free, and high-performing smart contracts that meet your business goals with precision and quality.",
                    },
                    {
                        title: "Custom Smart Contract Solutions Tailored to Your Needs",
                        description:
                            "Every project is unique, and our developers create smart contracts customized to your specific requirements. From token creation and decentralized finance (DeFi) solutions to NFT marketplaces and automated escrow systems, we craft solutions that fit your business objectives perfectly.",
                    },
                    {
                        title: "Flexible Hiring Models for Smart Contract Developers",
                        description:
                            "Hire Smart Contract developers according to your needs — full-time, part-time, or hourly. Our flexible engagement models let you scale your blockchain team efficiently, manage budgets, and maintain consistent project quality throughout the development lifecycle.",
                    },
                    {
                        title: "Expertise in Leading Blockchain Platforms and Tools",
                        description:
                            "Our developers are proficient in Ethereum, Binance Smart Chain, Polygon, and other major blockchain ecosystems. Using Solidity, Web3.js, and Truffle, they build secure, efficient, and scalable Smart Contract solutions for diverse business use cases.",
                    },
                    {
                        title: "Secure, Scalable, and High-Performance Blockchain Solutions",
                        description:
                            "We deliver Smart Contracts built for security, reliability, and scalability. With rigorous testing, code audits, and best blockchain development practices, our developers ensure that your decentralized applications run efficiently and remain tamper-proof at all times.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Smart Contract developers?",
                        answer:
                            "Hiring expert Smart Contract developers enables your business to leverage blockchain technology for secure, transparent, and automated transactions. They design and deploy tamper-proof smart contracts that improve efficiency, reduce operational costs, and eliminate intermediaries.",
                    },
                    {
                        question: "Can Smart Contract developers handle complex blockchain projects?",
                        answer:
                            "Yes. Our experienced Smart Contract developers can manage complex blockchain implementations — from DeFi platforms and NFT marketplaces to supply chain automation and DAO development — ensuring scalability, security, and reliability at every stage.",
                    },
                    {
                        question: "Is hiring Smart Contract developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Smart Contract developers from India is a cost-effective choice. You gain access to blockchain experts who deliver enterprise-grade smart contracts and decentralized applications at competitive rates without compromising on quality or performance.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Smart Contracts?",
                        answer:
                            "Yes. Our Smart Contract developers provide ongoing maintenance, auditing, and version upgrades to ensure your contracts remain secure, optimized, and aligned with the latest blockchain protocols and business needs.",
                    },
                    {
                        question: "How fast can Smart Contract projects be delivered?",
                        answer:
                            "Using agile development practices and advanced blockchain frameworks, our team ensures timely project delivery. The duration depends on project complexity, but we prioritize quality, transparency, and reliability in every development cycle.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Smart Contract Developers for Your Business?",
                        description:
                            "Discover why hiring expert Smart Contract developers is essential for building secure, transparent, and automated blockchain solutions. Our certified Smart Contract developers specialize in creating decentralized applications and blockchain-based systems that enhance trust, reduce costs, and streamline business transactions with precision and reliability.",
                    },
                ],
            },


            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-smartcontract-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-ethereum-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Ethereum Developers for Scalable Blockchain Solutions",
                        paragraphs: [
                            "Hire experienced Ethereum developers to build decentralized, secure, and high-performance blockchain applications tailored to your business needs. Our team specializes in Ethereum, Solidity, and Web3 development — delivering robust dApps, token systems, DeFi platforms, and NFT marketplaces powered by smart contracts.",
                            "Collaborate with certified Ethereum developers who combine blockchain innovation with technical precision. From contract deployment and gas optimization to seamless dApp integration, we ensure your Ethereum-based solutions are scalable, secure, and ready for real-world adoption.",
                        ],
                        imageSrc: "/hire-ethereum-developer-one.webp",
                        imageAlt: "Ethereum Developers",
                        ctaText: "Hire Certified Ethereum Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Ethereum Developers for Secure Blockchain Solutions",
                        description:
                            "Hire professional Ethereum developers to build decentralized, transparent, and secure blockchain applications. With expertise across industries like fintech, supply chain, healthcare, and gaming, our team delivers end-to-end Ethereum development solutions that drive innovation and trust.",
                    },
                    {
                        title: "Reliable Ethereum Development with On-Time Delivery",
                        description:
                            "Our Ethereum developers follow agile methodologies and maintain transparent communication to ensure timely and efficient project delivery. They build scalable, secure, and optimized blockchain solutions that align perfectly with your business goals and technical requirements.",
                    },
                    {
                        title: "Custom Ethereum Solutions Tailored for Your Business",
                        description:
                            "Every business is unique, and our Ethereum developers craft custom blockchain applications tailored to your specific needs. From smart contract development and dApp creation to tokenization and DeFi integration, we deliver solutions that empower your business with blockchain efficiency.",
                    },
                    {
                        title: "Flexible Hiring Models for Ethereum Developers",
                        description:
                            "Hire Ethereum developers based on your project scope — full-time, part-time, or hourly. Our flexible engagement models help you scale your blockchain team quickly, manage development costs effectively, and ensure consistent delivery across projects.",
                    },
                    {
                        title: "Expertise in Leading Ethereum Tools and Frameworks",
                        description:
                            "Our developers are proficient in Solidity, Web3.js, Truffle, Hardhat, and other Ethereum development tools. From contract deployment to front-end dApp integration, they ensure efficient, secure, and reliable blockchain implementation for your business.",
                    },
                    {
                        title: "High-Performance, Secure, and Scalable Ethereum Solutions",
                        description:
                            "Our Ethereum developers deliver blockchain solutions built for performance, scalability, and security. With best-in-class smart contract design, optimized gas usage, and advanced cryptographic standards, we help you launch robust and future-ready decentralized systems.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Ethereum developers?",
                        answer:
                            "Hiring expert Ethereum developers helps you leverage the full potential of blockchain technology to build secure, transparent, and decentralized solutions. They specialize in smart contracts, dApps, and token-based ecosystems that enhance automation, trust, and efficiency across your business processes.",
                    },
                    {
                        question: "Can Ethereum developers handle complex blockchain projects?",
                        answer:
                            "Yes. Our experienced Ethereum developers are skilled in managing complex blockchain projects, including DeFi platforms, NFT marketplaces, DAOs, and enterprise-grade dApps. They ensure scalability, interoperability, and reliability in every solution delivered.",
                    },
                    {
                        question: "Is hiring Ethereum developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Ethereum developers from India is a cost-effective way to access blockchain expertise. You benefit from highly skilled professionals who deliver high-quality Ethereum solutions at competitive rates, optimizing both cost and performance.",
                    },
                    {
                        question: "Can they maintain and upgrade existing Ethereum smart contracts?",
                        answer:
                            "Yes. Our Ethereum developers offer continuous maintenance, auditing, and version upgrades for existing smart contracts and dApps — ensuring ongoing security, compliance, and compatibility with the latest Ethereum protocols and network updates.",
                    },
                    {
                        question: "How fast can Ethereum projects be delivered?",
                        answer:
                            "Using agile methodologies and modern Ethereum frameworks like Solidity, Web3.js, and Hardhat, our developers ensure timely project delivery. Timelines vary depending on complexity, but we always prioritize quality, transparency, and performance.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Ethereum Developers for Your Business?",
                        description:
                            "Discover why hiring expert Ethereum developers is essential for building secure, scalable, and future-ready blockchain solutions. Our certified Ethereum developers deliver customized smart contracts, dApps, and decentralized systems that enhance transparency, automate processes, and drive innovation across industries.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-ethereum-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-ico-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert ICO Developers for Successful Token Launches",
                        paragraphs: [
                            "Hire experienced ICO developers to plan, develop, and launch secure, transparent, and high-performing Initial Coin Offerings (ICOs). Our team specializes in end-to-end ICO development — including token creation, smart contract deployment, whitepaper drafting, and investor dashboard setup — helping you raise funds efficiently and compliantly.",
                            "Collaborate with certified blockchain experts who ensure every stage of your ICO is optimized for success. From tokenomics design and wallet integration to KYC/AML implementation and exchange listing support, we help you launch your ICO confidently and attract the right investors.",
                        ],
                        imageSrc: "/hire-ico-one.webp",
                        imageAlt: "ICO Developers",
                        ctaText: "Hire Certified ICO Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert ICO Developers for Successful Token Launches",
                        description:
                            "Hire professional ICO developers to plan, design, and launch secure and scalable Initial Coin Offerings. With experience across industries like fintech, gaming, real estate, and blockchain startups, our team delivers end-to-end ICO solutions that drive investor trust and project success.",
                    },
                    {
                        title: "Reliable ICO Development with On-Time Delivery",
                        description:
                            "Our ICO developers follow agile methodologies and maintain transparent communication to ensure every project milestone is achieved on time. From whitepaper creation to token deployment, we deliver efficient, compliant, and high-quality ICO solutions aligned with your goals.",
                    },
                    {
                        title: "Custom ICO Solutions Tailored to Your Vision",
                        description:
                            "Every ICO project is unique, and our developers create tailored blockchain solutions that reflect your tokenomics, business model, and brand identity. Whether you need ERC-20 token development, investor dashboards, or multi-chain support, we ensure complete customization and scalability.",
                    },
                    {
                        title: "Flexible Hiring Models for ICO Developers",
                        description:
                            "Hire ICO developers based on your requirements — full-time, part-time, or hourly. Our flexible engagement models help you scale quickly, manage costs efficiently, and ensure consistent quality and delivery throughout the ICO lifecycle.",
                    },
                    {
                        title: "Proficiency in Leading ICO and Blockchain Technologies",
                        description:
                            "Our developers are experts in Ethereum, Solidity, Web3.js, Binance Smart Chain, and Polygon. They leverage advanced frameworks to build secure tokens, automate fundraising processes, and ensure compliance with global blockchain standards.",
                    },
                    {
                        title: "High-Quality, Secure, and Scalable ICO Solutions",
                        description:
                            "Our ICO developers build high-performance blockchain solutions that are secure, scalable, and investor-friendly. With best practices in smart contract security, KYC/AML integration, and transparent fundraising architecture, we ensure your ICO launch is smooth and credible.",
                    },
                ],
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire ICO developers?",
                        answer:
                            "Hiring expert ICO developers helps you launch secure, compliant, and investor-ready token offerings. They design and implement blockchain-based fundraising solutions that streamline token creation, automate transactions, and ensure transparency for investors.",
                    },
                    {
                        question: "Can ICO developers handle complex blockchain fundraising projects?",
                        answer:
                            "Yes. Our experienced ICO developers specialize in end-to-end ICO development — from whitepaper creation, smart contract deployment, and tokenomics design to investor dashboards and KYC/AML integration. They ensure your ICO project runs smoothly and meets global standards.",
                    },
                    {
                        question: "Is hiring ICO developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated ICO developers from India gives you access to top blockchain talent at competitive rates. Our experts deliver high-quality, scalable, and secure ICO solutions that help you raise funds efficiently while minimizing development costs.",
                    },
                    {
                        question: "Can they maintain and optimize existing ICO platforms?",
                        answer:
                            "Yes. Our ICO developers provide continuous support, maintenance, and upgrades for existing ICO platforms. They enhance security, improve smart contract efficiency, and integrate new blockchain features to keep your platform up-to-date and investor-friendly.",
                    },
                    {
                        question: "How fast can ICO projects be launched?",
                        answer:
                            "Using agile methodologies and advanced blockchain frameworks like Ethereum, BSC, and Polygon, our team ensures fast and reliable ICO launches. Project timelines depend on complexity, but we focus on quality, transparency, and compliance at every step.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire ICO Developers for Your Blockchain Project?",
                        description:
                            "Discover why hiring expert ICO developers is crucial for launching secure, transparent, and investor-ready token offerings. Our certified ICO developers deliver end-to-end ICO solutions — from token creation and smart contract development to platform integration — helping your business raise capital efficiently and confidently in the blockchain ecosystem.",
                    },
                ],
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-ico-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-cryptocurrency-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Cryptocurrency Developers for Secure and Scalable Blockchain Solutions",
                        paragraphs: [
                            "Hire experienced Cryptocurrency developers to build secure, scalable, and innovative blockchain-based digital currency solutions. Our team specializes in cryptocurrency development, wallet integration, blockchain architecture, and custom token creation — helping you launch next-generation crypto platforms with confidence.",
                            "Work with certified blockchain professionals who understand the complexities of cryptocurrency ecosystems. From coin development and smart contract integration to exchange platform setup and security auditing, we ensure your crypto solution is fast, reliable, and ready for mass adoption.",
                        ],
                        imageSrc: "/hire-cryptocurrency-one.webp",
                        imageAlt: "Cryptocurrency Developers",
                        ctaText: "Hire Certified Cryptocurrency Developers",
                    },
                ],
            },


            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Cryptocurrency Developers for Blockchain Innovation",
                        description:
                            "Hire skilled cryptocurrency developers to design and build secure, scalable, and innovative blockchain solutions. With experience across fintech, trading, DeFi, and digital payment systems, our team delivers end-to-end cryptocurrency development services that empower global businesses.",
                    },
                    {
                        title: "Reliable Cryptocurrency Development with On-Time Delivery",
                        description:
                            "Our cryptocurrency developers follow agile methodologies and transparent workflows to ensure every milestone is met on schedule. From coin creation and blockchain setup to wallet integration and exchange deployment, we deliver reliable and high-performance crypto solutions.",
                    },
                    {
                        title: "Custom Cryptocurrency Solutions Tailored to Your Business",
                        description:
                            "Every crypto project has unique goals, and our developers craft custom blockchain solutions to meet them. Whether you need a new digital currency, DeFi token, or blockchain-powered financial platform, we design and implement solutions optimized for scalability and security.",
                    },
                    {
                        title: "Flexible Hiring Models for Cryptocurrency Developers",
                        description:
                            "Hire cryptocurrency developers on your terms — full-time, part-time, or hourly. Our flexible engagement models help you manage costs efficiently while ensuring consistent delivery and innovation throughout your project.",
                    },
                    {
                        title: "Proficiency in Leading Blockchain and Crypto Technologies",
                        description:
                            "Our developers are proficient in Bitcoin, Ethereum, Binance Smart Chain, Polygon, and other major blockchain frameworks. They use advanced tools like Solidity, Web3.js, and Node.js to build robust, secure, and compliant cryptocurrency systems.",
                    },
                    {
                        title: "High-Performance, Secure, and Scalable Crypto Solutions",
                        description:
                            "We deliver secure and scalable cryptocurrency platforms optimized for performance and reliability. From smart contract audits and encryption standards to multi-signature wallets and KYC integration, we ensure your crypto ecosystem is built for long-term success.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire cryptocurrency developers?",
                        answer:
                            "Hiring expert cryptocurrency developers ensures your blockchain project is secure, scalable, and future-ready. They design, develop, and deploy custom cryptocurrencies, wallets, and decentralized systems that meet global standards and business objectives.",
                    },
                    {
                        question: "Can cryptocurrency developers create custom coins and tokens?",
                        answer:
                            "Yes. Our cryptocurrency developers specialize in creating custom coins, tokens, and blockchain networks. They use technologies like Ethereum, Bitcoin, and Binance Smart Chain to build digital assets tailored to your specific ecosystem and tokenomics model.",
                    },
                    {
                        question: "Is hiring cryptocurrency developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated cryptocurrency developers from India gives you access to top blockchain expertise at competitive rates. Our team delivers high-quality crypto solutions that reduce costs and accelerate your project’s time-to-market.",
                    },
                    {
                        question: "Can they integrate cryptocurrency with existing systems?",
                        answer:
                            "Yes. Our developers can seamlessly integrate cryptocurrency payment systems, wallets, and blockchain APIs with your existing platforms or business applications, ensuring secure and efficient crypto transactions.",
                    },
                    {
                        question: "How long does cryptocurrency development take?",
                        answer:
                            "Development time depends on project complexity, such as blockchain selection, wallet features, and exchange integration. Using agile methods and proven frameworks, our cryptocurrency developers ensure timely delivery without compromising on performance or security.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Cryptocurrency Developers for Your Blockchain Project?",
                        description:
                            "Discover why hiring expert cryptocurrency developers is essential for building secure, scalable, and innovative blockchain solutions. Our certified cryptocurrency developers specialize in creating custom coins, wallets, payment gateways, and blockchain networks — helping your business leverage decentralized technology to enhance transparency, efficiency, and global reach.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-cryptocurrency-one.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-graphql-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert GraphQL Developers for Efficient and Scalable API Solutions",
                        paragraphs: [
                            "Hire experienced GraphQL developers to build powerful, flexible, and efficient APIs that optimize data management and enhance application performance. Our team specializes in GraphQL API development, schema design, and backend integration — helping businesses streamline data communication and reduce server load.",
                            "Collaborate with certified GraphQL professionals who design and implement APIs that deliver precise data queries and faster responses. From building GraphQL servers and integrating with databases to optimizing frontend performance, we ensure your applications are secure, scalable, and future-ready.",
                        ],
                        imageSrc: "/hire-graphql-one.webp",
                        imageAlt: "GraphQL Developers",
                        ctaText: "Hire Certified GraphQL Developers",
                    },
                ],
            },


            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert GraphQL Developers for Modern API Development",
                        description:
                            "Hire skilled GraphQL developers to build efficient, flexible, and high-performance APIs that power your applications. Our team specializes in developing scalable GraphQL solutions that streamline data fetching, reduce API overhead, and enhance performance across web and mobile platforms.",
                    },
                    {
                        title: "Reliable GraphQL Development with On-Time Delivery",
                        description:
                            "Our GraphQL developers follow agile methodologies and clean architecture principles to deliver projects on time and with precision. From API schema design to backend integration and optimization, we ensure smooth communication between your frontend and backend systems.",
                    },
                    {
                        title: "Custom GraphQL APIs Tailored to Your Business Needs",
                        description:
                            "Every business has unique data and integration requirements. We create custom GraphQL APIs that fit your workflows — whether for eCommerce, SaaS platforms, analytics dashboards, or enterprise systems — ensuring seamless data access and interoperability.",
                    },
                    {
                        title: "Flexible Hiring Models for GraphQL Developers",
                        description:
                            "Hire GraphQL developers on flexible engagement models — full-time, part-time, or hourly. Our adaptable hiring options give you access to top talent while optimizing costs and maintaining project agility.",
                    },
                    {
                        title: "Proficiency in Modern Frameworks and Data Technologies",
                        description:
                            "Our developers are proficient in GraphQL, Apollo, Node.js, React, and TypeScript. They combine deep knowledge of APIs, databases, and microservices to build robust, secure, and scalable GraphQL-powered applications.",
                    },
                    {
                        title: "High-Performance, Secure, and Scalable API Solutions",
                        description:
                            "We deliver GraphQL APIs that are optimized for performance, security, and scalability. From authentication and caching to schema federation and real-time data subscriptions, our solutions ensure your applications perform seamlessly in production environments.",
                    },
                ],
            },



            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire GraphQL developers?",
                        answer:
                            "Hiring expert GraphQL developers ensures your applications run faster and more efficiently. They design and implement flexible APIs that optimize data fetching, reduce network load, and deliver a seamless experience across your web and mobile platforms.",
                    },
                    {
                        question: "Can GraphQL developers integrate with existing REST APIs?",
                        answer:
                            "Yes. Our GraphQL developers can seamlessly integrate GraphQL layers over existing REST APIs, allowing you to modernize your backend without rebuilding it. This improves performance, flexibility, and developer productivity.",
                    },
                    {
                        question: "Is hiring GraphQL developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated GraphQL developers from India provides access to top talent at competitive rates. Our developers deliver scalable, high-performance GraphQL APIs that help optimize resources and accelerate project delivery.",
                    },
                    {
                        question: "Do your GraphQL developers have experience with major frameworks?",
                        answer:
                            "Yes. Our developers are skilled in popular frameworks and tools such as Apollo, Hasura, Node.js, and React. They build GraphQL APIs that integrate smoothly with modern tech stacks and microservice architectures.",
                    },
                    {
                        question: "How long does it take to build a GraphQL API?",
                        answer:
                            "The development timeline depends on your project’s size and complexity. Our GraphQL developers follow agile methodologies to ensure efficient development cycles and timely delivery without compromising on performance or quality.",
                    },
                ],
            },


            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire GraphQL Developers for Your Business?",
                        description:
                            "Discover why hiring expert GraphQL developers is essential for building efficient, scalable, and high-performance APIs. Our certified GraphQL developers specialize in creating flexible data-fetching solutions that improve speed, reduce API complexity, and enhance application performance — helping your business deliver seamless user experiences across web and mobile platforms.",
                    },
                ],
            },


            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-graphql-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-powerbi-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Power BI Developers for Data-Driven Business Insights",
                        paragraphs: [
                            "Hire experienced Power BI developers to transform your raw data into actionable business insights. Our team specializes in Power BI dashboard development, data modeling, report automation, and analytics integration — helping you make smarter, faster, and data-backed decisions.",
                            "Work with certified Power BI professionals who understand business intelligence, data visualization, and enterprise reporting. From connecting multiple data sources to building interactive dashboards and embedding analytics into your workflows, we ensure your Power BI solutions are powerful, secure, and scalable.",
                        ],
                        imageSrc: "/hire-powerbi-one.webp",
                        imageAlt: "Power BI Developers",
                        ctaText: "Hire Certified Power BI Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Power BI Developers for Intelligent Data Solutions",
                        description:
                            "Hire skilled Power BI developers to design and implement data-driven business intelligence solutions. With expertise across industries like finance, healthcare, retail, and manufacturing, our team delivers interactive dashboards and analytics that empower smarter decision-making.",
                    },
                    {
                        title: "Reliable Power BI Development with On-Time Delivery",
                        description:
                            "Our Power BI developers follow agile methodologies and maintain transparent workflows to ensure timely delivery of every analytics project. From data modeling and dashboard creation to cloud integration, we deliver reliable and high-performance Power BI solutions.",
                    },
                    {
                        title: "Custom Power BI Solutions Tailored to Your Business Needs",
                        description:
                            "Every organization has unique data challenges. Our developers create custom Power BI dashboards and reports that align with your business goals, KPIs, and visual standards — helping you turn complex data into actionable insights.",
                    },
                    {
                        title: "Flexible Hiring Models for Power BI Developers",
                        description:
                            "Hire Power BI developers on your preferred terms — full-time, part-time, or hourly. Our flexible engagement models help you manage costs efficiently while ensuring consistent quality, scalability, and business value.",
                    },
                    {
                        title: "Proficiency in Leading Data and BI Technologies",
                        description:
                            "Our developers are proficient in Power BI, DAX, SQL, Azure Data Services, and Power Platform tools. They integrate diverse data sources and leverage advanced analytics to deliver unified, real-time business insights.",
                    },
                    {
                        title: "High-Performance, Secure, and Scalable BI Solutions",
                        description:
                            "We build Power BI solutions optimized for performance, scalability, and security. From enterprise-grade data governance to role-based access and cloud deployment, we ensure your BI ecosystem is fast, compliant, and future-ready.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Power BI developers?",
                        answer:
                            "Hiring expert Power BI developers helps you transform raw business data into interactive, insightful, and decision-ready dashboards. They build scalable BI solutions that enable real-time analytics, streamline reporting, and improve strategic planning.",
                    },
                    {
                        question: "Can Power BI developers handle complex data projects?",
                        answer:
                            "Yes. Our experienced Power BI developers can manage complex data models, multi-source integrations, and enterprise-scale dashboards. They ensure data accuracy, performance optimization, and seamless collaboration across business units.",
                    },
                    {
                        question: "Is hiring Power BI developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Power BI developers from India is a cost-effective choice. You gain access to skilled professionals who deliver enterprise-grade BI solutions at competitive rates, helping you optimize costs and maximize ROI.",
                    },
                    {
                        question: "Can they integrate Power BI with existing business systems?",
                        answer:
                            "Yes. Our developers can seamlessly integrate Power BI with ERP, CRM, Excel, Azure, SQL Server, and other business applications to unify your data ecosystem and provide real-time, actionable insights.",
                    },
                    {
                        question: "How long does Power BI development take?",
                        answer:
                            "The development timeline depends on project complexity and data volume. Using agile methodologies, our Power BI developers ensure timely delivery while maintaining accuracy, security, and high performance.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Power BI Developers for Your Business?",
                        description:
                            "Discover why hiring expert Power BI developers is essential for turning raw data into powerful business insights. Our certified Power BI developers design and implement interactive dashboards, data models, and real-time analytics solutions that help organizations make informed decisions, improve efficiency, and drive strategic growth.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-powerbi-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-chatbot-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Chatbot Developers for Intelligent Conversational Solutions",
                        paragraphs: [
                            "Hire experienced Chatbot developers to build intelligent, interactive, and AI-powered conversational systems that enhance customer engagement and automate business processes. Our team specializes in chatbot development using Dialogflow, Microsoft Bot Framework, and Rasa — creating chatbots for websites, mobile apps, and social platforms.",
                            "Collaborate with certified AI developers who design chatbots that understand natural language, provide instant support, and deliver personalized experiences. From customer service automation to enterprise AI assistants, we help you implement smart, scalable, and high-performing chatbot solutions that improve user satisfaction and business efficiency.",
                        ],
                        imageSrc: "/hire-chatbot-one.webp",
                        imageAlt: "Chatbot Developers",
                        ctaText: "Hire Certified Chatbot Developers",
                    },
                ],
            },


            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Chatbot Developers for Intelligent Conversational Solutions",
                        description:
                            "Hire skilled chatbot developers to create AI-powered conversational experiences that enhance customer engagement and automate support. Our team builds smart, context-aware chatbots using Dialogflow, Microsoft Bot Framework, Rasa, and other leading AI technologies.",
                    },
                    {
                        title: "Reliable Chatbot Development with On-Time Delivery",
                        description:
                            "Our chatbot developers follow agile methodologies to ensure timely project delivery and consistent performance. From conversational flow design to multi-platform integration, we build reliable chatbots that deliver measurable business value.",
                    },
                    {
                        title: "Custom Chatbot Solutions Tailored to Your Business Needs",
                        description:
                            "Every business requires unique conversational solutions. We develop custom chatbots aligned with your industry, goals, and customer needs — from eCommerce assistants to enterprise AI support bots.",
                    },
                    {
                        title: "Flexible Hiring Models for Chatbot Developers",
                        description:
                            "Hire chatbot developers on your preferred terms — full-time, part-time, or hourly. Our flexible engagement models allow you to scale efficiently while maintaining quality and productivity.",
                    },
                    {
                        title: "Proficiency in Leading AI and NLP Technologies",
                        description:
                            "Our developers are proficient in Dialogflow, Microsoft Bot Framework, Rasa, IBM Watson, and OpenAI APIs. They integrate natural language understanding, machine learning, and automation tools to create intelligent, responsive chatbots.",
                    },
                    {
                        title: "Secure, Scalable, and High-Performance Chatbot Solutions",
                        description:
                            "We build chatbot solutions optimized for performance, scalability, and security. From encryption and data protection to API integrations, our bots deliver seamless, compliant, and future-ready conversational experiences.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire chatbot developers?",
                        answer:
                            "Hiring expert chatbot developers helps you build intelligent, automated conversational systems that enhance customer experience, reduce support costs, and streamline business communication. They design AI-powered bots capable of understanding natural language and responding in real-time.",
                    },
                    {
                        question: "Can chatbot developers build AI and NLP-based chatbots?",
                        answer:
                            "Yes. Our skilled chatbot developers specialize in AI-driven chatbot development using technologies like Dialogflow, Microsoft Bot Framework, Rasa, and OpenAI APIs. They create conversational bots that understand user intent and deliver personalized interactions across multiple platforms.",
                    },
                    {
                        question: "Is hiring chatbot developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated chatbot developers from India is a cost-efficient solution. You gain access to experienced AI and automation experts who deliver high-quality chatbots at competitive rates, ensuring faster ROI and better customer engagement.",
                    },
                    {
                        question: "Can they integrate chatbots with existing business systems?",
                        answer:
                            "Yes. Our developers can seamlessly integrate chatbots with CRMs, websites, mobile apps, help desks, and messaging platforms like WhatsApp, Slack, and Facebook Messenger — ensuring smooth automation and data synchronization.",
                    },
                    {
                        question: "How long does chatbot development take?",
                        answer:
                            "The development timeline depends on the chatbot’s complexity, use case, and integrations required. Using agile methodologies, our chatbot developers ensure timely delivery of high-performing, secure, and scalable conversational solutions.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Chatbot Developers for Your Business?",
                        description:
                            "Discover why hiring expert chatbot developers is essential for automating customer interactions, enhancing engagement, and improving efficiency. Our certified chatbot developers specialize in building AI-driven conversational solutions that understand natural language, integrate seamlessly with your business systems, and deliver 24/7 intelligent support across multiple platforms.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-chatbot-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-dialogflow-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Dialogflow Developers for AI-Powered Conversational Experiences",
                        paragraphs: [
                            "Hire experienced Dialogflow developers to build intelligent, natural, and context-aware conversational agents that enhance customer interactions and automate communication workflows. Our team specializes in creating custom Dialogflow chatbots for web, mobile, and voice platforms — ensuring seamless integration and real-time engagement.",
                            "Work with certified Dialogflow professionals who leverage Google Cloud AI, NLP, and machine learning to deliver chatbots that understand intent, manage complex dialogues, and provide personalized responses. From customer support automation to virtual assistants and multi-channel chat experiences, we ensure your Dialogflow solution is secure, scalable, and performance-driven.",
                        ],
                        imageSrc: "/hire-dialogflow-one.webp",
                        imageAlt: "Dialogflow Developers",
                        ctaText: "Hire Certified Dialogflow Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Dialogflow Developers for Smart Conversational AI",
                        description:
                            "Hire skilled Dialogflow developers to design and implement intelligent conversational AI solutions. Our team builds advanced chatbots that understand natural language, automate interactions, and deliver engaging user experiences across web, mobile, and voice platforms.",
                    },
                    {
                        title: "Reliable Dialogflow Development with On-Time Delivery",
                        description:
                            "Our Dialogflow developers follow agile methodologies and structured workflows to ensure timely project completion. From intent design and entity mapping to integration with CRMs and APIs, we deliver reliable, production-ready chatbot solutions.",
                    },
                    {
                        title: "Custom Dialogflow Chatbots Tailored to Your Business",
                        description:
                            "Every organization has unique conversational goals. We develop custom Dialogflow chatbots designed to meet your specific requirements — whether for eCommerce, customer service, healthcare, education, or enterprise automation.",
                    },
                    {
                        title: "Flexible Hiring Models for Dialogflow Developers",
                        description:
                            "Hire Dialogflow developers on flexible engagement models — full-time, part-time, or hourly. Our scalable hiring options help you balance cost, quality, and productivity to meet your business needs effectively.",
                    },
                    {
                        title: "Proficiency in Google Cloud AI and NLP Technologies",
                        description:
                            "Our developers are proficient in Dialogflow CX, Dialogflow ES, Google Cloud AI, Node.js, and RESTful APIs. They leverage advanced NLP, intent recognition, and context management to create natural and dynamic chatbot experiences.",
                    },
                    {
                        title: "Secure, Scalable, and High-Performance Dialogflow Solutions",
                        description:
                            "We build Dialogflow solutions that are secure, scalable, and optimized for performance. From authentication and data privacy to multi-language and omnichannel support, our chatbots ensure reliability, compliance, and exceptional user engagement.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Dialogflow developers?",
                        answer:
                            "Hiring expert Dialogflow developers enables you to build AI-powered conversational agents that understand natural language, automate communication, and enhance customer engagement. They design intelligent bots that deliver human-like interactions and improve user satisfaction.",
                    },
                    {
                        question: "Can Dialogflow developers create custom AI and NLP-based chatbots?",
                        answer:
                            "Yes. Our skilled Dialogflow developers specialize in creating intelligent chatbots using Dialogflow CX and ES, leveraging Google Cloud’s NLP capabilities. They build AI-driven bots that understand intent, context, and sentiment, ensuring accurate and dynamic conversations.",
                    },
                    {
                        question: "Is hiring Dialogflow developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Dialogflow developers from India is a cost-effective way to access advanced conversational AI expertise. You get scalable, enterprise-grade chatbot solutions at competitive rates — optimizing both cost and performance.",
                    },
                    {
                        question: "Can Dialogflow developers integrate chatbots with existing business systems?",
                        answer:
                            "Yes. Our Dialogflow experts can seamlessly integrate chatbots with CRMs, ERPs, websites, mobile apps, and messaging platforms like WhatsApp, Slack, and Facebook Messenger — ensuring unified, automated, and efficient customer interactions.",
                    },
                    {
                        question: "How long does Dialogflow chatbot development take?",
                        answer:
                            "Development time depends on the chatbot’s complexity, conversation flow, and integrations. Our Dialogflow developers use agile practices to ensure quick, efficient delivery while maintaining high accuracy, performance, and reliability.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Dialogflow Developers for Your Business?",
                        description:
                            "Discover why hiring expert Dialogflow developers is essential for creating intelligent, conversational AI solutions that enhance customer engagement and streamline operations. Our certified Dialogflow developers specialize in building context-aware chatbots and voice assistants that integrate seamlessly with websites, apps, and business systems — delivering 24/7 automated support with natural, human-like interactions.",
                    },
                ],
            },


            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-dialogflow-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-rpa-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert RPA Developers for Intelligent Process Automation",
                        paragraphs: [
                            "Hire experienced RPA developers to automate repetitive business processes and enhance operational efficiency with intelligent robotic solutions. Our team specializes in Robotic Process Automation (RPA) using tools like UiPath, Automation Anywhere, and Blue Prism — helping businesses streamline workflows, reduce manual effort, and achieve higher productivity.",
                            "Collaborate with certified RPA professionals who design, build, and deploy automation bots tailored to your business needs. From data processing and report generation to ERP automation and AI-driven workflows, we ensure your RPA implementation is secure, scalable, and cost-effective.",
                        ],
                        imageSrc: "/hire-rpa-one.webp",
                        imageAlt: "RPA Developers",
                        ctaText: "Hire Certified RPA Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert RPA Developers for Intelligent Process Automation",
                        description:
                            "Hire skilled RPA developers to design and implement intelligent automation workflows that optimize efficiency and accuracy. Our team specializes in building custom bots that automate repetitive tasks across finance, HR, operations, and IT using tools like UiPath, Automation Anywhere, and Blue Prism.",
                    },
                    {
                        title: "Reliable RPA Development with On-Time Delivery",
                        description:
                            "Our RPA developers follow agile methodologies and structured workflows to ensure every automation project is delivered on time. From process assessment and bot design to deployment and monitoring, we guarantee high-quality automation outcomes.",
                    },
                    {
                        title: "Custom RPA Solutions Tailored to Your Business Processes",
                        description:
                            "Every enterprise has unique automation needs. We build custom RPA solutions that align with your business workflows — whether it’s invoice processing, data migration, customer onboarding, or compliance reporting.",
                    },
                    {
                        title: "Flexible Hiring Models for RPA Developers",
                        description:
                            "Hire RPA developers on flexible terms — full-time, part-time, or hourly — based on your project scope and goals. Our engagement models ensure cost efficiency, scalability, and consistent automation performance.",
                    },
                    {
                        title: "Proficiency in Leading RPA Tools and AI Technologies",
                        description:
                            "Our developers are proficient in UiPath, Automation Anywhere, Blue Prism, and Power Automate. They combine RPA with AI, OCR, and machine learning to build smarter bots that learn and adapt to dynamic business environments.",
                    },
                    {
                        title: "Secure, Scalable, and High-Performance RPA Solutions",
                        description:
                            "We deliver RPA systems that are secure, scalable, and enterprise-ready. With role-based access, audit trails, and robust encryption, our automation solutions ensure compliance, reliability, and sustained business growth.",
                    },
                ],
            },


            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire RPA developers?",
                        answer:
                            "Hiring expert RPA developers helps automate repetitive business tasks, increase efficiency, and reduce operational costs. They design and implement intelligent bots that streamline workflows, improve accuracy, and enhance productivity across departments.",
                    },
                    {
                        question: "Can RPA developers build custom automation workflows?",
                        answer:
                            "Yes. Our skilled RPA developers specialize in creating custom automation workflows using tools like UiPath, Blue Prism, Automation Anywhere, and Power Automate. They tailor bots to your unique business processes and system architecture.",
                    },
                    {
                        question: "Is hiring RPA developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated RPA developers from India offers access to top automation expertise at competitive rates. Our team delivers scalable, secure, and high-performing RPA solutions that ensure rapid ROI and long-term value.",
                    },
                    {
                        question: "Can RPA developers integrate bots with existing business systems?",
                        answer:
                            "Yes. Our RPA developers can integrate automation bots with your existing ERP, CRM, HRM, and legacy systems — enabling seamless data transfer, workflow automation, and real-time monitoring across your organization.",
                    },
                    {
                        question: "How long does RPA development take?",
                        answer:
                            "The development timeline depends on the complexity and scope of your automation project. Using agile methodologies, our RPA developers ensure fast deployment, continuous optimization, and minimal disruption to existing processes.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire RPA Developers for Your Business?",
                        description:
                            "Discover why hiring expert RPA developers is essential for automating repetitive tasks, improving operational efficiency, and reducing business costs. Our certified RPA developers specialize in building intelligent automation solutions using UiPath, Blue Prism, Automation Anywhere, and Power Automate — helping your business streamline workflows, enhance accuracy, and drive digital transformation.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-rpa-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-tensorflow-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert TensorFlow Developers for Advanced AI & Machine Learning Solutions",
                        paragraphs: [
                            "Hire skilled TensorFlow developers to build intelligent, data-driven AI and machine learning solutions that power predictive analytics, automation, and innovation. Our experts specialize in TensorFlow development for deep learning, computer vision, natural language processing, and neural network modeling — helping businesses leverage the full potential of artificial intelligence.",
                            "Work with certified TensorFlow professionals who design, train, and deploy scalable ML models tailored to your business needs. From research and prototyping to production-grade implementation, we ensure your AI systems are optimized for accuracy, performance, and real-world impact.",
                        ],
                        imageSrc: "/hire-tensorflow-one.webp",
                        imageAlt: "TensorFlow Developers",
                        ctaText: "Hire Certified TensorFlow Developers",
                    },
                ],
            },


            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Software Developers",
                        description:
                            "Our software developers bring extensive experience in building custom software applications, including CMS platforms, mobile apps, and eCommerce solutions. They focus on creating scalable, secure, and high-performance applications tailored to your business needs.",
                    },
                    {
                        icon: Server,
                        title: "Hire Front-End Developers",
                        description:
                            "Work with our skilled front-end developers to craft interactive, responsive, and visually appealing web interfaces. With expertise in modern frameworks and technologies, they ensure seamless user experiences across devices and platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Developers & IT Consultants",
                        description:
                            "Our dedicated developers and IT consultants bring proven expertise to help you tackle technical challenges, optimize workflows, and deliver solutions that align with your business goals.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Cloud Developers",
                        description:
                            "Leverage our cloud development team to build interactive, scalable, and business-ready applications. From mobile apps to enterprise solutions, our developers ensure performance, security, and seamless deployment.",
                    },
                    {
                        icon: Code,
                        title: "Hire Maintenance Engineers",
                        description:
                            "Work with experienced software maintenance engineers to keep your applications updated, secure, and running smoothly. They provide continuous support to ensure your software performs reliably over time.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire eCommerce Developers",
                        description:
                            "Hire dedicated eCommerce developers with expertise in platforms like Magento, Shopify, WooCommerce, and more. They build secure, scalable, and feature-rich online stores tailored to your business needs. Partnered for creative software development and web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert TensorFlow Developers for Advanced AI Solutions",
                        description:
                            "Hire experienced TensorFlow developers to build intelligent machine learning models and deep learning systems that drive innovation and automation. Our team specializes in TensorFlow-based solutions for predictive analytics, computer vision, NLP, and data-driven decision-making.",
                    },
                    {
                        title: "Reliable TensorFlow Development with On-Time Delivery",
                        description:
                            "Our TensorFlow developers follow agile methodologies to ensure timely delivery of high-performance AI solutions. From model design and training to deployment and optimization, we maintain precision and reliability at every stage.",
                    },
                    {
                        title: "Custom TensorFlow Solutions Tailored to Your Business Needs",
                        description:
                            "Every business has unique data and AI requirements. We develop custom TensorFlow solutions designed for your specific use case — whether it's image recognition, fraud detection, recommendation engines, or predictive analytics.",
                    },
                    {
                        title: "Flexible Hiring Models for TensorFlow Developers",
                        description:
                            "Hire TensorFlow developers on your preferred terms — full-time, part-time, or hourly. Our flexible engagement models ensure scalability, cost-efficiency, and expert support throughout your AI project lifecycle.",
                    },
                    {
                        title: "Proficiency in AI, Deep Learning, and Data Science Tools",
                        description:
                            "Our developers are proficient in TensorFlow, Keras, Python, OpenCV, NumPy, and TensorFlow Extended (TFX). They combine deep learning expertise with data science best practices to build accurate, scalable, and production-ready AI models.",
                    },
                    {
                        title: "Secure, Scalable, and High-Performance TensorFlow Implementations",
                        description:
                            "We deliver TensorFlow solutions that are secure, scalable, and optimized for enterprise performance. From GPU acceleration to cloud deployment, our AI systems ensure reliability, speed, and seamless integration with your existing infrastructure.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire TensorFlow developers?",
                        answer:
                            "Hiring expert TensorFlow developers helps you leverage deep learning and AI to build intelligent systems that enhance automation, analytics, and decision-making. They design, train, and deploy advanced machine learning models that solve complex business challenges efficiently.",
                    },
                    {
                        question: "Can TensorFlow developers build custom AI and ML models?",
                        answer:
                            "Yes. Our skilled TensorFlow developers specialize in building custom AI and machine learning models tailored to your specific business requirements — including computer vision, NLP, predictive analytics, and recommendation systems.",
                    },
                    {
                        question: "Is hiring TensorFlow developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated TensorFlow developers from India gives you access to world-class AI expertise at competitive rates. You gain scalable, high-quality ML solutions that deliver faster ROI and measurable business value.",
                    },
                    {
                        question: "Can TensorFlow developers integrate AI models with existing systems?",
                        answer:
                            "Yes. Our TensorFlow developers can integrate machine learning models with your existing web apps, mobile platforms, CRMs, or cloud systems — ensuring smooth deployment, automation, and real-time data processing.",
                    },
                    {
                        question: "How long does TensorFlow model development take?",
                        answer:
                            "The development time depends on the complexity of your use case, data availability, and model architecture. Our TensorFlow developers use agile methodologies to ensure timely delivery, continuous optimization, and scalable AI performance.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire TensorFlow Developers for Your Business?",
                        description:
                            "Discover why hiring expert TensorFlow developers is essential for implementing AI-driven solutions that enhance automation, decision-making, and innovation. Our certified TensorFlow developers specialize in building intelligent machine learning models for predictive analytics, computer vision, NLP, and data processing — helping your business leverage deep learning to gain a competitive edge and drive digital transformation.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-tensorflow-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-kentico-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Kentico Developers for Powerful CMS & Digital Experience Solutions",
                        paragraphs: [
                            "Hire experienced Kentico developers to build dynamic, scalable, and feature-rich digital experiences powered by Kentico Xperience. Our experts specialize in developing enterprise-grade websites, eCommerce platforms, and content management systems that deliver seamless performance, personalized user experiences, and easy scalability.",
                            "Collaborate with certified Kentico professionals who combine CMS expertise with modern technologies like ASP.NET Core, Azure, and headless architecture. From custom module development to third-party integrations and digital marketing automation, we ensure your Kentico solution is secure, optimized, and future-ready.",
                        ],
                        imageSrc: "/hire-kentico-one.webp",
                        imageAlt: "Kentico Developers",
                        ctaText: "Hire Certified Kentico Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Kentico Front-End Developers",
                        description:
                            "Collaborate with skilled Kentico front-end developers to create responsive, visually appealing, and user-friendly web interfaces that align with your brand and deliver exceptional digital experiences.",
                    },
                    {
                        icon: Server,
                        title: "Hire Kentico Back-End Developers",
                        description:
                            "Our Kentico back-end developers ensure your website’s architecture is optimized for speed, security, and scalability. They integrate APIs, databases, and third-party systems for a seamless digital experience across all platforms.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the capabilities of our full-stack developers to build feature-rich, user-friendly software applications. From front-end to back-end, they deliver end-to-end solutions that are scalable, secure, and optimized for performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire API Developers",
                        description:
                            "Work with skilled developers to create secure, scalable, and high-performance APIs for your web or mobile applications. Our experts ensure seamless integration and reliable functionality for all your projects.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Kentico Developers & Consultants",
                        description:
                            "Get access to experienced Kentico developers and consultants who provide end-to-end development, migration, and maintenance support — helping you maximize platform capabilities and ensure long-term scalability.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Kentico CMS Developers",
                        description:
                            "Hire certified Kentico CMS developers to design and implement enterprise-grade content management systems. They build intuitive, flexible, and maintainable CMS solutions that streamline content workflows and improve user engagement.",
                    },
                    {
                        icon: Code,
                        title: "Hire Kentico Integration Experts",
                        description:
                            "Our Kentico integration specialists connect your CMS with CRMs, ERPs, marketing tools, and eCommerce systems — ensuring unified workflows and data synchronization across your business ecosystem.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire AR/VR Experts",
                        description:
                            "Collaborate with dedicated AR/VR developers to create immersive applications that enhance user engagement and deliver innovative customer experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI/ML Experts",
                        description:
                            "Leverage the expertise of AI/ML specialists who are proficient in the latest technologies to develop intelligent solutions that drive growth, optimize operations, and unlock new business opportunities.",
                    },
                    {
                        icon: Users,
                        title: "Hire Big Data Experts",
                        description:
                            "Work with skilled big data professionals who leverage technologies like Power BI, Hadoop, and more to analyze data, uncover insights, and develop custom business solutions that drive informed decision-making.",
                    },
                    {
                        icon: Layers,
                        title: "Hire Kentico Developers",
                        description:
                            "Work with expert Kentico developers to build dynamic, content-rich, and scalable digital experiences. Our team specializes in Kentico Xperience CMS and eCommerce development — delivering secure, high-performance, and SEO-friendly web solutions tailored to your business objectives.",
                    },
                    {
                        icon: Box,
                        title: "Hire CMS Developers",
                        description:
                            "Collaborate with CMS developers to create advanced, real-time web applications on platforms like Drupal, WordPress, and Joomla. They deliver solutions that are user-friendly, scalable, and optimized for performance.",
                    },
                ],
            },
            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Kentico Developers for Dynamic Digital Solutions",
                        description:
                            "Hire skilled Kentico developers to build robust, scalable, and high-performing digital platforms using Kentico Xperience. Our team specializes in creating CMS-driven websites, eCommerce solutions, and digital experience platforms that deliver seamless performance and personalized engagement.",
                    },
                    {
                        title: "Reliable Kentico Development with On-Time Delivery",
                        description:
                            "Our Kentico developers follow agile methodologies and structured workflows to ensure timely and high-quality delivery. From CMS customization and API integration to deployment and optimization, we ensure every project meets your business goals.",
                    },
                    {
                        title: "Custom Kentico Solutions Tailored to Your Business Needs",
                        description:
                            "Every organization has unique digital requirements. We develop custom Kentico solutions aligned with your business objectives — from corporate websites and online stores to intranets and marketing automation systems.",
                    },
                    {
                        title: "Flexible Hiring Models for Kentico Developers",
                        description:
                            "Hire Kentico developers on your terms — full-time, part-time, or hourly. Our flexible engagement models help you scale your development team efficiently while maintaining quality, cost-effectiveness, and productivity.",
                    },
                    {
                        title: "Proficiency in Kentico Xperience and Modern Web Technologies",
                        description:
                            "Our developers are proficient in Kentico Xperience, ASP.NET Core, C#, MVC, SQL Server, and Azure. They combine deep technical knowledge with creative design to deliver secure, high-performing, and user-friendly digital experiences.",
                    },
                    {
                        title: "Secure, Scalable, and Optimized Kentico Implementations",
                        description:
                            "We deliver Kentico solutions that are secure, scalable, and optimized for enterprise performance. From cloud deployment and content personalization to marketing automation and analytics, our experts ensure your digital ecosystem is reliable and future-ready.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire Kentico developers?",
                        answer:
                            "Hiring expert Kentico developers helps you build robust, scalable, and feature-rich digital experiences using Kentico Xperience. They design and develop CMS-driven websites, eCommerce solutions, and enterprise portals that deliver seamless performance and engaging user experiences.",
                    },
                    {
                        question: "Can Kentico developers create custom CMS and eCommerce solutions?",
                        answer:
                            "Yes. Our skilled Kentico developers specialize in building fully customized CMS and eCommerce platforms tailored to your specific business needs. They leverage Kentico’s powerful modules, integrations, and APIs to deliver flexible, high-performing digital solutions.",
                    },
                    {
                        question: "Is hiring Kentico developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated Kentico developers from India offers access to top-tier technical talent at competitive rates. You gain reliable, scalable, and enterprise-grade solutions while optimizing development costs and timelines.",
                    },
                    {
                        question: "Can Kentico developers integrate the platform with existing business systems?",
                        answer:
                            "Yes. Our Kentico experts can seamlessly integrate your website or application with CRMs, ERPs, payment gateways, and marketing tools — ensuring a connected, automated, and efficient digital ecosystem.",
                    },
                    {
                        question: "How long does Kentico development take?",
                        answer:
                            "The development timeline depends on your project’s scope, design complexity, and integration requirements. Using agile methodologies, our Kentico developers ensure fast, high-quality delivery and continuous optimization.",
                    },
                ],
            },
            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Kentico Developers for Your Business?",
                        description:
                            "Discover why hiring expert Kentico developers is essential for building dynamic, scalable, and content-rich digital experiences. Our certified Kentico developers specialize in crafting custom CMS and eCommerce solutions using Kentico Xperience — helping businesses streamline content management, enhance customer engagement, and accelerate digital transformation.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-kentico-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-seo-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert SEO Developers to Boost Your Website Visibility and Performance",
                        paragraphs: [
                            "Hire experienced SEO developers to enhance your website’s visibility, ranking, and performance across search engines. Our SEO experts specialize in technical SEO, on-page optimization, and site performance improvements to ensure your digital presence drives measurable results and organic growth.",
                            "Collaborate with certified SEO professionals who understand search algorithms, web architecture, and analytics. From keyword optimization and structured data implementation to performance tracking and SEO audits, we ensure your website is fully optimized for maximum visibility, speed, and conversion.",
                        ],
                        imageSrc: "/hire-seo-one.webp",
                        imageAlt: "SEO Developers",
                        ctaText: "Hire Certified SEO Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Technical SEO Developers",
                        description:
                            "Collaborate with skilled technical SEO developers to optimize your website architecture, page speed, and crawlability. They ensure your site meets Google’s best practices for indexing, Core Web Vitals, and mobile responsiveness.",
                    },
                    {
                        icon: Server,
                        title: "Hire On-Page SEO Experts",
                        description:
                            "Our on-page SEO experts enhance your website content, metadata, and internal linking to improve keyword visibility and user experience. They ensure every page is optimized for both users and search engines.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Off-Page SEO Specialists",
                        description:
                            "Leverage the expertise of off-page SEO specialists to build strong backlinks, boost domain authority, and enhance your brand’s credibility through ethical link-building and digital PR strategies.",
                    },
                    {
                        icon: Database,
                        title: "Hire Local SEO Developers",
                        description:
                            "Work with local SEO developers who optimize your business listings, Google My Business profile, and local citations — ensuring your brand ranks higher in location-based searches and maps results.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated SEO Developers & Consultants",
                        description:
                            "Get access to experienced SEO developers and consultants who provide end-to-end optimization — from keyword research and site audits to content strategy and continuous ranking improvements.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Enterprise SEO Experts",
                        description:
                            "Our enterprise SEO professionals specialize in managing large-scale websites, ensuring seamless technical optimization, analytics integration, and SEO automation for long-term success.",
                    },
                    {
                        icon: Code,
                        title: "Hire E-Commerce SEO Developers",
                        description:
                            "Hire e-commerce SEO specialists to optimize your product pages, schema markup, and site structure — driving higher visibility, traffic, and conversions for your online store.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire Mobile SEO Developers",
                        description:
                            "Collaborate with mobile SEO experts to ensure your website performs flawlessly on all devices. They optimize for mobile indexing, AMP, and responsive design to improve user experience and search rankings.",
                    },
                    {
                        icon: Zap,
                        title: "Hire Analytics & Reporting Specialists",
                        description:
                            "Leverage the skills of SEO analysts who integrate tools like Google Analytics, Tag Manager, and Search Console to track performance, identify trends, and deliver actionable insights for improvement.",
                    },
                    {
                        icon: Users,
                        title: "Hire Content SEO Strategists",
                        description:
                            "Work with content-focused SEO strategists who align keyword research with content planning, ensuring your site ranks for relevant topics and engages your target audience effectively.",
                    },
                    {
                        icon: Layers,
                        title: "Hire International SEO Experts",
                        description:
                            "Hire international SEO professionals who optimize your website for global audiences with multilingual, hreflang, and geo-targeting strategies to improve reach and visibility across regions.",
                    },
                    {
                        icon: Box,
                        title: "Hire SEO Audit & Optimization Experts",
                        description:
                            "Collaborate with SEO audit experts to identify technical issues, optimize performance, and enhance your overall search engine readiness — ensuring sustainable traffic growth and visibility.",
                    },
                ],
            },

            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert SEO Developers for Enhanced Search Visibility",
                        description:
                            "Hire skilled SEO developers to optimize your website for better search rankings, faster performance, and higher organic traffic. Our experts specialize in technical SEO, structured data implementation, and site performance optimization to boost your online presence.",
                    },
                    {
                        title: "Reliable SEO Development with Proven Results",
                        description:
                            "Our SEO developers follow data-driven strategies and best practices to deliver measurable results. From technical audits and on-page optimization to analytics integration and performance tracking, we ensure your website ranks higher and performs flawlessly.",
                    },
                    {
                        title: "Custom SEO Solutions Tailored to Your Business Goals",
                        description:
                            "Every business has unique SEO needs. We create custom SEO solutions that align with your goals — from local and enterprise SEO to eCommerce and multilingual optimization, ensuring your brand reaches the right audience effectively.",
                    },
                    {
                        title: "Flexible Hiring Models for SEO Developers",
                        description:
                            "Hire SEO developers on flexible engagement models — full-time, part-time, or hourly — based on your project needs. We offer cost-effective solutions without compromising quality, consistency, or results.",
                    },
                    {
                        title: "Proficiency in Advanced SEO Tools and Technologies",
                        description:
                            "Our developers are skilled in using top SEO tools like Google Search Console, Ahrefs, SEMrush, Screaming Frog, and Lighthouse. They combine technical knowledge with strategic insights to improve site health, visibility, and authority.",
                    },
                    {
                        title: "Secure, Scalable, and Performance-Optimized SEO Implementations",
                        description:
                            "We ensure your website is secure, scalable, and fully optimized for both users and search engines. From page speed and mobile responsiveness to Core Web Vitals and structured markup, our SEO experts build for long-term success.",
                    },
                ],
            },


            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire SEO developers?",
                        answer:
                            "Hiring expert SEO developers ensures your website is optimized for search engines and users alike. They enhance website structure, speed, and accessibility to improve rankings, organic visibility, and overall performance.",
                    },
                    {
                        question: "Can SEO developers handle technical and on-page optimization?",
                        answer:
                            "Yes. Our skilled SEO developers specialize in both technical and on-page optimization — including site audits, meta tag implementation, structured data, mobile optimization, and improving Core Web Vitals for better user experience and ranking.",
                    },
                    {
                        question: "Is hiring SEO developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated SEO developers from India provides access to top-tier optimization experts at competitive rates. You get measurable results, improved site health, and long-term ROI without overspending.",
                    },
                    {
                        question: "Can SEO developers integrate analytics and tracking tools?",
                        answer:
                            "Yes. Our SEO experts can integrate tools like Google Analytics, Tag Manager, and Search Console to monitor performance, user behavior, and conversions — helping you make data-driven marketing decisions.",
                    },
                    {
                        question: "How long does it take to see SEO results?",
                        answer:
                            "SEO is a long-term process. While minor improvements may appear within weeks, significant ranking and traffic growth typically occur within 3–6 months. Our developers use continuous optimization to achieve sustainable results.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire SEO Developers for Your Business?",
                        description:
                            "Discover why hiring expert SEO developers is essential for improving your website’s visibility, traffic, and performance. Our certified SEO developers specialize in technical SEO, on-page optimization, and analytics integration — helping your business achieve higher search rankings, faster load times, and stronger online presence across all major search engines.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-seo-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-smm-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert SMM Developers to Grow Your Brand and Engagement Online",
                        paragraphs: [
                            "Hire experienced SMM developers to strengthen your brand presence and engagement across social media platforms. Our experts specialize in creating data-driven social media strategies, campaign automation, and performance analytics that help your business reach a wider audience and generate measurable growth.",
                            "Collaborate with certified SMM professionals who understand platform algorithms, audience behavior, and digital marketing tools. From content scheduling and ad optimization to analytics integration and ROI tracking, we ensure your social media campaigns deliver consistent engagement, conversions, and brand loyalty.",
                        ],
                        imageSrc: "/hire-smm-one.webp",
                        imageAlt: "SMM Developers",
                        ctaText: "Hire Certified SMM Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire PPC Campaign Strategists",
                        description:
                            "Collaborate with expert PPC strategists who design and execute data-driven pay-per-click campaigns. They analyze audience behavior, optimize targeting, and ensure your ads reach the right users at the right time for maximum ROI.",
                    },
                    {
                        icon: Server,
                        title: "Hire Google Ads Developers",
                        description:
                            "Our Google Ads developers specialize in creating and managing high-performing campaigns across Search, Display, and Shopping networks. They handle ad setup, keyword bidding, and optimization to ensure cost-effective lead generation.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Bing Ads Specialists",
                        description:
                            "Leverage the expertise of our Bing Ads specialists to expand your reach beyond Google. They manage campaigns with strategic targeting and budget optimization to maximize conversions and traffic from Microsoft’s ad ecosystem.",
                    },
                    {
                        icon: Database,
                        title: "Hire Remarketing Experts",
                        description:
                            "Work with remarketing professionals who help you re-engage previous visitors and turn them into loyal customers. They create audience segments, dynamic ads, and retargeting strategies to boost conversion rates effectively.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated PPC Developers & Consultants",
                        description:
                            "Get access to certified PPC developers and consultants who manage your end-to-end advertising campaigns — from keyword research and ad copy creation to performance analysis and continuous optimization.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Social Media Ad Specialists",
                        description:
                            "Our social media PPC experts run paid ad campaigns across Facebook, Instagram, LinkedIn, and X (Twitter), ensuring your brand achieves visibility, engagement, and measurable growth across all platforms.",
                    },
                    {
                        icon: Code,
                        title: "Hire Conversion Rate Optimization (CRO) Experts",
                        description:
                            "Our CRO experts analyze landing pages, user behavior, and funnel performance to increase click-through rates and conversions — ensuring your PPC budget drives maximum results.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire Mobile Ads Developers",
                        description:
                            "Collaborate with mobile PPC developers to create high-performing ads tailored for smartphones and apps. They specialize in Google App Campaigns and in-app advertising for enhanced mobile engagement.",
                    },
                    {
                        icon: Zap,
                        title: "Hire Analytics & Tracking Specialists",
                        description:
                            "Leverage the skills of analytics experts who integrate tools like Google Tag Manager, Analytics 4, and Data Studio — enabling real-time performance tracking, goal monitoring, and campaign reporting.",
                    },
                    {
                        icon: Users,
                        title: "Hire E-Commerce PPC Specialists",
                        description:
                            "Work with eCommerce-focused PPC experts who specialize in Shopping Ads, product feeds, and campaign optimization — driving traffic and boosting conversions for your online store.",
                    },
                    {
                        icon: Layers,
                        title: "Hire Multi-Platform PPC Managers",
                        description:
                            "Hire professionals experienced in managing campaigns across Google, Bing, Amazon, and social channels — ensuring consistent branding, optimized budgets, and unified performance analytics.",
                    },
                    {
                        icon: Box,
                        title: "Hire PPC Automation Experts",
                        description:
                            "Collaborate with automation-focused PPC developers who use AI tools and scripts to streamline bid adjustments, audience targeting, and reporting — maximizing efficiency and reducing manual effort.",
                    },
                ],
            },

            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert SMM Developers for Effective Brand Growth",
                        description:
                            "Hire skilled SMM developers to craft high-performing social media campaigns that enhance brand visibility, engagement, and conversions. Our experts specialize in multi-platform marketing strategies, automation, and analytics to help your business connect with the right audience.",
                    },
                    {
                        title: "Reliable SMM Campaign Management with Measurable Results",
                        description:
                            "Our SMM developers use data-driven strategies to manage and optimize campaigns across platforms like Facebook, Instagram, LinkedIn, and X (Twitter). From content creation to performance tracking, we ensure every campaign delivers measurable engagement and ROI.",
                    },
                    {
                        title: "Custom SMM Strategies Tailored to Your Business Objectives",
                        description:
                            "Every brand has unique goals. We develop customized SMM strategies that align with your marketing objectives — from brand awareness and lead generation to customer retention and community building.",
                    },
                    {
                        title: "Flexible Hiring Models for SMM Developers",
                        description:
                            "Hire SMM developers on flexible terms — full-time, part-time, or hourly — based on your business needs. Our adaptable engagement models help you scale campaigns efficiently while ensuring consistent performance and innovation.",
                    },
                    {
                        title: "Proficiency in Leading Social Media and Analytics Tools",
                        description:
                            "Our developers are proficient in tools like Meta Business Suite, Hootsuite, Buffer, Sprout Social, and Google Analytics. They leverage insights and automation to optimize campaign performance and enhance audience engagement.",
                    },
                    {
                        title: "ROI-Driven, Scalable, and Creative SMM Implementations",
                        description:
                            "We deliver creative, scalable, and ROI-focused social media marketing solutions. From ad optimization and influencer collaboration to trend analysis and A/B testing, our experts ensure your brand stays relevant and impactful.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire SMM developers?",
                        answer:
                            "Hiring expert SMM developers helps your brand build a strong social media presence across platforms like Facebook, Instagram, LinkedIn, and X (Twitter). They design and execute strategies that boost engagement, increase followers, and drive conversions.",
                    },
                    {
                        question: "Can SMM developers manage multiple social media platforms?",
                        answer:
                            "Yes. Our skilled SMM developers are experienced in managing and optimizing campaigns across multiple social media platforms simultaneously — ensuring consistent branding, audience targeting, and performance tracking.",
                    },
                    {
                        question: "Is hiring SMM developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated SMM developers from India gives you access to top-tier marketing expertise at competitive rates. You benefit from data-driven campaigns, better ROI, and efficient resource management.",
                    },
                    {
                        question: "Can SMM developers integrate analytics and reporting tools?",
                        answer:
                            "Yes. Our SMM experts can integrate tools like Meta Business Suite, Google Analytics, Hootsuite, and Sprout Social to monitor campaign performance, audience engagement, and conversions in real time.",
                    },
                    {
                        question: "How long does it take to see results from SMM campaigns?",
                        answer:
                            "Social media results vary based on campaign objectives and platform algorithms. Typically, brands notice engagement and follower growth within weeks, with measurable ROI and conversions improving over 2–3 months of consistent optimization.",
                    },
                ],
            },


            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire SMM Developers for Your Business?",
                        description:
                            "Discover why hiring expert SMM developers is essential for growing your brand’s online presence, engagement, and customer loyalty. Our certified social media marketing developers specialize in creating data-driven campaigns, managing multiple platforms, and optimizing performance — helping your business connect with audiences, increase conversions, and build a strong digital identity.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-smm-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-ppc-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert PPC Developers to Maximize ROI and Drive Targeted Traffic",
                        paragraphs: [
                            "Hire experienced PPC developers to create, manage, and optimize high-performing pay-per-click campaigns across Google Ads, Bing, and social media platforms. Our experts specialize in keyword targeting, ad optimization, and conversion tracking to help your business attract qualified leads and achieve measurable growth.",
                            "Collaborate with certified PPC professionals who understand bidding strategies, audience segmentation, and campaign analytics. From A/B testing and ad copy creation to budget optimization and performance monitoring, we ensure your paid campaigns deliver maximum ROI and consistent business success.",
                        ],
                        imageSrc: "/hire-ppc-one.webp",
                        imageAlt: "PPC Developers",
                        ctaText: "Hire Certified PPC Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire PPC Campaign Developers",
                        description:
                            "Collaborate with skilled PPC campaign developers to design, manage, and optimize ad campaigns across Google Ads, Bing, and social media platforms — ensuring precise targeting and maximum ROI.",
                    },
                    {
                        icon: Server,
                        title: "Hire PPC Strategy Experts",
                        description:
                            "Our PPC strategy experts create data-driven plans that align with your business goals. They manage keyword research, budget allocation, and performance tracking to drive consistent conversions and profitability.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Marketing Developers",
                        description:
                            "Leverage the expertise of full-stack marketing developers who integrate PPC campaigns with analytics, SEO, and automation systems to deliver seamless and measurable marketing performance.",
                    },
                    {
                        icon: Database,
                        title: "Hire Conversion Tracking Developers",
                        description:
                            "Work with experts who set up and manage advanced conversion tracking, analytics, and pixel integrations to measure campaign success and optimize ad spend effectively.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated PPC Developers & Consultants",
                        description:
                            "Get access to experienced PPC developers and consultants who provide full-cycle management — from campaign setup and optimization to performance analysis and budget refinement.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Google Ads Developers",
                        description:
                            "Hire certified Google Ads developers to manage and optimize your search, display, shopping, and remarketing campaigns — ensuring improved visibility and better ROI across all ad networks.",
                    },
                    {
                        icon: Code,
                        title: "Hire Automation & API Integration Experts",
                        description:
                            "Our automation specialists integrate APIs and tools like Google Ads API, Meta Ads Manager, and data pipelines to streamline campaign reporting and performance monitoring.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire Social Media Ad Experts",
                        description:
                            "Collaborate with professionals skilled in Facebook, Instagram, LinkedIn, and YouTube ad platforms to design, manage, and optimize paid campaigns that drive engagement and conversions.",
                    },
                    {
                        icon: Zap,
                        title: "Hire AI-Driven PPC Specialists",
                        description:
                            "Leverage AI-powered optimization to improve bidding, audience targeting, and ad performance. Our AI/ML specialists use predictive analytics to boost efficiency and conversion rates.",
                    },
                    {
                        icon: Users,
                        title: "Hire Remarketing & Retargeting Experts",
                        description:
                            "Work with specialists who create intelligent remarketing strategies to re-engage potential customers, increase brand recall, and maximize your campaign conversion rates.",
                    },
                    {
                        icon: Layers,
                        title: "Hire PPC Optimization Developers",
                        description:
                            "Our PPC optimization developers continuously test and refine your ad creatives, targeting, and landing pages — ensuring higher CTRs, lower CPCs, and improved ROI.",
                    },
                    {
                        icon: Box,
                        title: "Hire Digital Advertising Developers",
                        description:
                            "Collaborate with experts who manage your entire digital advertising ecosystem — integrating PPC, display, shopping, and social campaigns into one performance-driven strategy.",
                    },
                ],
            },

            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert PPC Developers for High-Performance Campaigns",
                        description:
                            "Hire skilled PPC developers to design, manage, and optimize ad campaigns that deliver maximum ROI. Our experts specialize in Google Ads, Bing Ads, and social media advertising — ensuring your business achieves top visibility and measurable growth.",
                    },
                    {
                        title: "Reliable PPC Management with Proven Results",
                        description:
                            "Our PPC developers implement data-driven strategies to maximize conversions and minimize ad spend waste. From keyword research and bid management to A/B testing and performance analysis, we ensure your campaigns generate consistent, trackable results.",
                    },
                    {
                        title: "Custom PPC Solutions Tailored to Your Business Goals",
                        description:
                            "Every business requires a unique advertising approach. We build customized PPC solutions aligned with your objectives — whether it’s driving leads, boosting eCommerce sales, or enhancing brand visibility across multiple platforms.",
                    },
                    {
                        title: "Flexible Hiring Models for PPC Developers",
                        description:
                            "Hire PPC developers on flexible engagement models — full-time, part-time, or hourly — based on your project and budget needs. Scale your ad campaigns effortlessly while maintaining complete control over quality and performance.",
                    },
                    {
                        title: "Proficiency in Leading PPC Platforms and Tools",
                        description:
                            "Our PPC developers are experts in Google Ads, Microsoft Ads, Meta Ads Manager, LinkedIn Ads, and analytics tools like Google Tag Manager and Data Studio. They use advanced automation and analytics to ensure optimal campaign outcomes.",
                    },
                    {
                        title: "ROI-Driven, Scalable, and Performance-Optimized PPC Implementations",
                        description:
                            "We focus on delivering measurable ROI through continuous optimization, audience targeting, and creative testing. Our PPC experts ensure your campaigns remain scalable, cost-efficient, and performance-optimized for long-term success.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire PPC developers?",
                        answer:
                            "Hiring expert PPC developers ensures your ad campaigns are strategically planned, efficiently managed, and optimized for maximum ROI. They help you reach the right audience, improve ad performance, and reduce unnecessary ad spend.",
                    },
                    {
                        question: "Can PPC developers manage multiple ad platforms?",
                        answer:
                            "Yes. Our skilled PPC developers are experienced in managing campaigns across multiple ad platforms, including Google Ads, Microsoft Ads, Meta Ads, LinkedIn Ads, and more — ensuring consistent targeting, messaging, and reporting.",
                    },
                    {
                        question: "Is hiring PPC developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated PPC developers from India gives you access to top-tier advertising talent at competitive rates. You benefit from optimized campaigns, higher conversion rates, and better ROI for every dollar spent.",
                    },
                    {
                        question: "Can PPC developers integrate analytics and tracking tools?",
                        answer:
                            "Yes. Our PPC experts can integrate tools like Google Tag Manager, Google Analytics, and Data Studio to monitor ad performance, conversion tracking, and ROI in real time — enabling data-driven decision-making.",
                    },
                    {
                        question: "How long does it take to see results from PPC campaigns?",
                        answer:
                            "PPC delivers immediate visibility once campaigns go live. While some conversions can happen within days, our developers continuously optimize bids, keywords, and targeting to achieve long-term efficiency and improved ROI over weeks and months.",
                    },
                ],
            },


            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire PPC Developers for Your Business?",
                        description:
                            "Discover why hiring expert PPC developers is crucial for driving targeted traffic, generating qualified leads, and maximizing ad spend efficiency. Our certified PPC specialists create, manage, and optimize pay-per-click campaigns across Google Ads, Bing, and social platforms — helping your business achieve faster results, higher ROI, and measurable growth through data-driven advertising strategies.",
                    },
                ],
            },


            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-ppc-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-fullstack-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Full-Stack Developers to Build Scalable and High-Performance Applications",
                        paragraphs: [
                            "Hire experienced Full-Stack developers to design, develop, and maintain robust web and mobile applications that deliver seamless user experiences. Our experts are proficient in both front-end and back-end technologies, ensuring your digital products are fast, secure, and scalable.",
                            "Collaborate with certified Full-Stack professionals skilled in frameworks like React, Angular, Node.js, Python, and .NET. From UI/UX design to API integration and database management, we provide end-to-end development solutions that accelerate your project’s success and maximize ROI.",
                        ],
                        imageSrc: "/hire-fullstack-one.webp",
                        imageAlt: "Full-Stack Developers",
                        ctaText: "Hire Certified Full-Stack Developers",
                    },
                ],
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Front-End Developers",
                        description:
                            "Collaborate with expert front-end developers to build responsive, user-friendly, and visually stunning web interfaces using technologies like React, Angular, and Vue.js — ensuring seamless user experiences across devices.",
                    },
                    {
                        icon: Server,
                        title: "Hire Back-End Developers",
                        description:
                            "Our skilled back-end developers specialize in Node.js, Python, PHP, and .NET to create secure, high-performance server-side applications with scalable architectures and robust APIs.",
                    },
                    {
                        icon: Cloud,
                        title: "Hire Full-Stack Developers",
                        description:
                            "Leverage the expertise of our Full-Stack developers who handle both front-end and back-end development — delivering complete, scalable, and efficient web and mobile solutions tailored to your business needs.",
                    },
                    {
                        icon: Database,
                        title: "Hire Database Developers",
                        description:
                            "Work with experienced database developers skilled in MySQL, MongoDB, PostgreSQL, and Firebase to design, manage, and optimize your application’s data infrastructure for speed and reliability.",
                    },
                    {
                        icon: Shield,
                        title: "Hire Dedicated Full-Stack Developers & Consultants",
                        description:
                            "Get access to dedicated Full-Stack developers and consultants who provide end-to-end support — from planning and architecture to deployment and maintenance for web and enterprise applications.",
                    },
                    {
                        icon: Globe,
                        title: "Hire Web Application Developers",
                        description:
                            "Hire expert web developers to build scalable, high-performing web applications using modern frameworks, microservices, and cloud-native technologies.",
                    },
                    {
                        icon: Code,
                        title: "Hire API Integration Specialists",
                        description:
                            "Our API integration experts ensure seamless connectivity between your front-end and back-end systems — enabling smooth data flow and efficient third-party integrations.",
                    },
                    {
                        icon: Smartphone,
                        title: "Hire Mobile App Developers",
                        description:
                            "Collaborate with professionals skilled in cross-platform and native mobile development using React Native, Flutter, and Swift to deliver high-quality mobile experiences.",
                    },
                    {
                        icon: Zap,
                        title: "Hire DevOps & Cloud Integration Experts",
                        description:
                            "Leverage the skills of DevOps professionals who implement CI/CD pipelines, automate deployments, and optimize cloud infrastructure for your full-stack applications.",
                    },
                    {
                        icon: Users,
                        title: "Hire UI/UX Developers",
                        description:
                            "Work with creative UI/UX developers who craft intuitive designs, interactive interfaces, and optimized user flows to improve usability and engagement.",
                    },
                    {
                        icon: Layers,
                        title: "Hire MEAN/MERN Stack Developers",
                        description:
                            "Our MEAN and MERN stack developers combine MongoDB, Express, Angular/React, and Node.js to deliver modern, efficient, and scalable web applications.",
                    },
                    {
                        icon: Box,
                        title: "Hire Software Architects",
                        description:
                            "Collaborate with experienced software architects who design system architectures, choose the right tech stack, and ensure your project is secure, scalable, and future-ready.",
                    },
                ],
            },

            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Full-Stack Developers for End-to-End Solutions",
                        description:
                            "Hire skilled full-stack developers to build complete, high-performance web and mobile applications. Our experts handle everything from UI/UX design to backend architecture, ensuring seamless functionality, scalability, and exceptional user experience.",
                    },
                    {
                        title: "Reliable Development with Proven Expertise",
                        description:
                            "Our full-stack developers bring extensive experience in technologies like React, Angular, Node.js, Python, and MongoDB. They ensure your applications are fast, secure, and built using best practices for long-term maintainability and performance.",
                    },
                    {
                        title: "Custom Full-Stack Solutions Tailored to Your Business Needs",
                        description:
                            "Every project is unique. We create custom full-stack development solutions that align with your goals — whether it’s building enterprise software, SaaS products, eCommerce platforms, or scalable web applications.",
                    },
                    {
                        title: "Flexible Hiring Models for Full-Stack Developers",
                        description:
                            "Hire full-stack developers on flexible terms — full-time, part-time, or hourly — based on your project requirements. Our flexible engagement models help you scale your development team efficiently without compromising quality or delivery speed.",
                    },
                    {
                        title: "Proficiency in Modern Frameworks and Technologies",
                        description:
                            "Our developers are proficient in leading technologies like React, Next.js, Node.js, Express, Python, Django, and cloud platforms like AWS and Azure. They integrate front-end and back-end systems to deliver seamless, high-performing applications.",
                    },
                    {
                        title: "Scalable, Secure, and High-Performance Development",
                        description:
                            "We focus on building secure, scalable, and optimized applications using best coding practices and modern architecture. Our full-stack experts ensure your product performs reliably and evolves easily with your growing business needs.",
                    },
                ],
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire full-stack developers?",
                        answer:
                            "Hiring full-stack developers ensures your web or app development process is seamless from front-end to back-end. They bring versatility, efficiency, and technical expertise to handle design, logic, and database integration — reducing dependency on multiple specialists.",
                    },
                    {
                        question: "Can full-stack developers handle both front-end and back-end development?",
                        answer:
                            "Yes. Our full-stack developers are proficient in both client-side and server-side technologies. They can design responsive user interfaces, develop APIs, manage databases, and ensure smooth integration between all components of your application.",
                    },
                    {
                        question: "Is hiring full-stack developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated full-stack developers from India allows you to reduce costs without compromising quality. With a single resource handling multiple layers of development, you save time and budget while maintaining efficient workflows.",
                    },
                    {
                        question: "What technologies do your full-stack developers specialize in?",
                        answer:
                            "Our developers are experienced with technologies like React, Angular, Vue.js, Node.js, Express, Python, PHP, Laravel, .NET, and databases like MySQL, PostgreSQL, and MongoDB — ensuring your application is modern, secure, and scalable.",
                    },
                    {
                        question: "How long does it take to develop a full-stack application?",
                        answer:
                            "Project timelines vary based on scope, complexity, and features. Typically, a full-stack web application can take a few weeks to several months. Our developers follow agile methodologies to ensure timely delivery and regular progress updates.",
                    },
                ],
            },


            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Full-Stack Developers for Your Business?",
                        description:
                            "Discover why hiring expert full-stack developers is essential for building scalable, efficient, and modern web applications. Our certified full-stack professionals specialize in both front-end and back-end development — delivering end-to-end solutions that combine seamless design, powerful functionality, and optimized performance. Whether you’re developing a new product or enhancing an existing system, our developers ensure faster delivery, better integration, and long-term scalability.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-fullstack-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-web-developers",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Web Developers to Build Scalable, Responsive, and High-Performance Websites",
                        paragraphs: [
                            "Hire experienced web developers to design, develop, and maintain modern, responsive, and SEO-friendly websites that deliver exceptional user experiences. Our experts specialize in front-end and back-end web technologies, ensuring your site is fast, secure, and optimized for performance.",
                            "Collaborate with certified web development professionals skilled in frameworks and technologies like HTML5, CSS3, JavaScript, React, Angular, PHP, Laravel, and WordPress. From UI/UX design to backend integration and deployment, we provide end-to-end web development solutions that drive business growth and maximize ROI."
                        ],
                        imageSrc: "/hire-web-developers-one.webp",
                        imageAlt: "Web Developers",
                        ctaText: "Hire Certified Web Developers"
                    }
                ]
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Front-End Web Developers",
                        description:
                            "Work with professional front-end web developers who craft responsive, visually stunning, and interactive websites using React, Angular, and Vue.js — ensuring seamless performance across all devices and browsers."
                    },
                    {
                        icon: Server,
                        title: "Hire Back-End Web Developers",
                        description:
                            "Our expert back-end web developers build secure, scalable, and high-performance server-side systems using Node.js, PHP, Laravel, Python, and .NET — ensuring smooth data handling and efficient integrations."
                    },
                    {
                        icon: Globe,
                        title: "Hire CMS Web Developers",
                        description:
                            "Hire CMS specialists experienced in WordPress, Joomla, and Drupal to develop, customize, and manage content-rich websites that are SEO-friendly and easy to maintain."
                    },
                    {
                        icon: ShoppingCart,
                        title: "Hire E-commerce Web Developers",
                        description:
                            "Collaborate with skilled e-commerce developers who create fast, secure, and conversion-optimized online stores using Shopify, WooCommerce, Magento, and custom frameworks."
                    },
                    {
                        icon: Database,
                        title: "Hire Database & API Developers",
                        description:
                            "Our web database experts ensure your data systems are efficient, reliable, and secure — using MySQL, PostgreSQL, and MongoDB, while integrating RESTful and GraphQL APIs for seamless functionality."
                    },
                    {
                        icon: Users,
                        title: "Hire UI/UX Web Designers",
                        description:
                            "Work with creative UI/UX designers who specialize in crafting engaging, accessible, and conversion-focused web interfaces that deliver an exceptional user experience."
                    },
                    {
                        icon: Cloud,
                        title: "Hire Web Application Developers",
                        description:
                            "Build custom web applications with our experts skilled in modern frameworks, microservices, and cloud-based solutions — ensuring scalability, performance, and reliability."
                    },
                    {
                        icon: Zap,
                        title: "Hire Web Performance Optimization Experts",
                        description:
                            "Boost your website speed and performance with developers who optimize code, caching, and delivery networks — ensuring better SEO ranking and user retention."
                    },
                    {
                        icon: Code,
                        title: "Hire API Integration Specialists",
                        description:
                            "Our integration experts seamlessly connect your website with CRMs, payment gateways, analytics, and third-party systems — improving efficiency and automation."
                    },
                    {
                        icon: Shield,
                        title: "Hire Web Security Specialists",
                        description:
                            "Ensure your website’s protection with professionals who implement best-in-class security protocols, SSL, data encryption, and vulnerability testing."
                    },
                    {
                        icon: Layers,
                        title: "Hire Custom Web Application Developers",
                        description:
                            "Get tailored web solutions designed from the ground up — optimized for your business logic, user requirements, and growth objectives."
                    },
                    {
                        icon: Box,
                        title: "Hire Web Architects & Consultants",
                        description:
                            "Collaborate with experienced web architects who plan scalable architectures, select the right technology stack, and ensure your project’s long-term success."
                    }
                ]
            },

            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Web Developers for Scalable and High-Quality Websites",
                        description:
                            "Hire experienced web developers who specialize in creating modern, responsive, and high-performing websites. Our experts deliver robust front-end and back-end solutions that enhance user experience and business growth."
                    },
                    {
                        title: "Comprehensive Web Development Expertise",
                        description:
                            "Our web developers are skilled in technologies like HTML5, CSS3, JavaScript, React, Angular, Node.js, PHP, and .NET — ensuring fast, secure, and scalable web applications built to meet your unique requirements."
                    },
                    {
                        title: "Custom Web Solutions Tailored to Your Business",
                        description:
                            "We provide custom web development services designed to align perfectly with your business goals — from eCommerce and CMS platforms to enterprise-grade web applications with advanced functionality and integrations."
                    },
                    {
                        title: "Flexible Hiring Models to Match Your Needs",
                        description:
                            "Hire web developers on your preferred terms — full-time, part-time, or project-based. Our flexible engagement models allow you to scale your development team as needed while maintaining quality and efficiency."
                    },
                    {
                        title: "Proficiency in Modern Frameworks and CMS Platforms",
                        description:
                            "Our developers work with the latest frameworks and content management systems like React, Next.js, Laravel, WordPress, and Shopify — ensuring your website is dynamic, maintainable, and future-ready."
                    },
                    {
                        title: "SEO-Friendly, Secure, and High-Performance Development",
                        description:
                            "We build websites optimized for search engines, performance, and security. From responsive design to secure hosting and optimized load times, our web developers ensure your site delivers an exceptional digital experience."
                    }
                ]
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire SEO developers?",
                        answer:
                            "Hiring expert SEO developers ensures your website is optimized for both search engines and users. They improve website structure, speed, and accessibility to enhance rankings, organic visibility, and overall site performance.",
                    },
                    {
                        question: "Can SEO developers handle technical and on-page optimization?",
                        answer:
                            "Yes. Our skilled SEO developers specialize in both technical and on-page optimization — including site audits, meta tag implementation, structured data, mobile optimization, and improving Core Web Vitals for better performance and rankings.",
                    },
                    {
                        question: "Is hiring SEO developers cost-effective?",
                        answer:
                            "Absolutely. Hiring dedicated SEO developers from India gives you access to top-tier optimization experts at competitive rates. You’ll achieve measurable improvements, stronger site health, and long-term ROI without exceeding your budget.",
                    },
                    {
                        question: "Can SEO developers integrate analytics and tracking tools?",
                        answer:
                            "Yes. Our SEO professionals can integrate tools like Google Analytics, Tag Manager, and Search Console to track performance, user behavior, and conversions — enabling data-driven decisions that improve your marketing strategy.",
                    },
                    {
                        question: "How long does it take to see SEO results?",
                        answer:
                            "SEO is a strategic, long-term process. While initial improvements may be visible within a few weeks, substantial ranking and traffic growth typically take 3–6 months. Our developers ensure consistent optimization for sustainable success.",
                    },
                ],
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire web developers for Your Business?",
                        description:
                            "Discover why hiring expert web developers is essential for building scalable, efficient, and modern web applications. Our certified web professionals specialize in both front-end and back-end development — delivering end-to-end solutions that combine seamless design, powerful functionality, and optimized performance. Whether you’re developing a new product or enhancing an existing system, our developers ensure faster delivery, better integration, and long-term scalability.",
                    },
                ],
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-ppc-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-software-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Software Developers to Build Scalable, Secure, and High-Performance Solutions",
                        paragraphs: [
                            "Hire experienced software developers to design, develop, and maintain custom software solutions tailored to your business needs. Our experts specialize in building high-quality, scalable, and efficient applications that enhance productivity and deliver seamless user experiences.",
                            "Collaborate with certified software development professionals skilled in technologies like Java, .NET, Python, C#, PHP, and Node.js. From architecture design and API integration to deployment and maintenance, we provide end-to-end software development services that drive innovation and maximize ROI."
                        ],
                        imageSrc: "/hire-software-developer-one.webp",
                        imageAlt: "Software Developers",
                        ctaText: "Hire Certified Software Developers"
                    }
                ]
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Front-End Software Developers",
                        description:
                            "Collaborate with front-end software developers who create responsive, intuitive, and dynamic user interfaces using React, Angular, and Vue.js — ensuring smooth user interactions and optimal performance across all devices."
                    },
                    {
                        icon: Server,
                        title: "Hire Back-End Software Developers",
                        description:
                            "Our expert back-end software developers specialize in building secure, efficient, and scalable server-side systems using technologies like Node.js, Python, Java, PHP, and .NET — ensuring robust functionality and seamless integrations."
                    },
                    {
                        icon: Database,
                        title: "Hire Database & API Developers",
                        description:
                            "Work with skilled database and API developers who design, manage, and optimize your data infrastructure using MySQL, PostgreSQL, MongoDB, and RESTful or GraphQL APIs for reliable, high-speed performance."
                    },
                    {
                        icon: Cloud,
                        title: "Hire Cloud Application Developers",
                        description:
                            "Hire cloud experts proficient in AWS, Azure, and Google Cloud to develop, deploy, and manage scalable software applications that are secure, high-performing, and cost-efficient."
                    },
                    {
                        icon: Shield,
                        title: "Hire Software Security Engineers",
                        description:
                            "Ensure your software solutions are protected from vulnerabilities with developers who implement robust authentication, encryption, and compliance-based security measures."
                    },
                    {
                        icon: Code,
                        title: "Hire Custom Software Developers",
                        description:
                            "Get tailor-made software solutions built to fit your unique business requirements — from SaaS platforms and enterprise applications to workflow automation tools."
                    },
                    {
                        icon: Zap,
                        title: "Hire DevOps Engineers",
                        description:
                            "Accelerate your software delivery process with DevOps experts who automate CI/CD pipelines, manage deployments, and ensure efficient collaboration between development and operations teams."
                    },
                    {
                        icon: Layers,
                        title: "Hire Full-Stack Software Developers",
                        description:
                            "Leverage the expertise of full-stack software developers who handle both front-end and back-end systems — delivering end-to-end, scalable, and performance-optimized applications."
                    },
                    {
                        icon: Users,
                        title: "Hire UI/UX Software Designers",
                        description:
                            "Work with creative UI/UX designers who craft engaging, user-friendly interfaces and seamless digital experiences that improve usability and customer satisfaction."
                    },
                    {
                        icon: Globe,
                        title: "Hire Enterprise Software Developers",
                        description:
                            "Collaborate with professionals who specialize in building enterprise-grade software solutions that streamline operations, enhance data security, and support large-scale business processes."
                    },
                    {
                        icon: ShoppingCart,
                        title: "Hire SaaS Application Developers",
                        description:
                            "Build robust SaaS products with developers experienced in subscription models, API integration, multi-tenant architecture, and cloud deployment — ensuring scalability and reliability."
                    },
                    {
                        icon: Box,
                        title: "Hire Software Architects & Consultants",
                        description:
                            "Partner with experienced software architects who design scalable system architectures, select the right technologies, and provide strategic guidance for long-term project success."
                    }
                ]
            },


            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Web Developers for Scalable and High-Quality Websites",
                        description:
                            "Hire professional web developers who build responsive, high-performance, and visually engaging websites. Our experts deliver end-to-end web solutions that ensure seamless functionality, improved user engagement, and long-term scalability."
                    },
                    {
                        title: "Comprehensive Front-End and Back-End Expertise",
                        description:
                            "Our web developers are proficient in HTML5, CSS3, JavaScript, React, Angular, Node.js, PHP, and .NET — creating fast, secure, and feature-rich websites tailored to your specific business goals."
                    },
                    {
                        title: "Custom Web Solutions Designed Around Your Business",
                        description:
                            "Every business has unique needs. We develop custom websites and web applications — from CMS-driven platforms and eCommerce sites to enterprise-grade digital solutions — built to enhance your brand and drive measurable growth."
                    },
                    {
                        title: "Flexible Hiring Models for Seamless Collaboration",
                        description:
                            "Hire dedicated web developers on your preferred terms — full-time, part-time, or hourly. Our flexible engagement models let you scale your team quickly while maintaining development quality and delivery speed."
                    },
                    {
                        title: "Proficiency in Modern Frameworks and CMS Platforms",
                        description:
                            "Our developers work with the latest technologies like React, Next.js, Laravel, WordPress, and Shopify. We ensure your website is dynamic, easy to maintain, and future-ready — backed by clean code and modern architecture."
                    },
                    {
                        title: "SEO-Friendly, Secure, and High-Performance Websites",
                        description:
                            "We prioritize performance, SEO, and security in every project. From responsive design and fast load times to SSL implementation and optimized site structures, our web developers build websites that rank well and perform flawlessly."
                    }
                ]
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire software developers for my business?",
                        answer:
                            "Hiring professional software developers ensures your applications are built with scalability, performance, and security in mind. Our experts develop custom software solutions that automate workflows, improve efficiency, and drive long-term business growth."
                    },
                    {
                        question: "What technologies do your software developers specialize in?",
                        answer:
                            "Our software developers are skilled in modern technologies and frameworks, including .NET, Java, Python, Node.js, React, Angular, C#, and PHP. We also have expertise in cloud platforms like AWS, Azure, and Google Cloud for building scalable enterprise-grade solutions."
                    },
                    {
                        question: "Can I hire software developers on a flexible basis?",
                        answer:
                            "Yes. We provide flexible engagement models that allow you to hire developers on a full-time, part-time, or hourly basis — giving you complete control over team size, budget, and project timelines."
                    },
                    {
                        question: "Do your software developers handle both front-end and back-end development?",
                        answer:
                            "Absolutely. Our full-stack software developers manage both client-side and server-side development, ensuring seamless integration, robust functionality, and optimized performance across all platforms."
                    },
                    {
                        question: "Will the software be customized to my business needs?",
                        answer:
                            "Yes. We build fully customized software solutions tailored to your specific business requirements, workflows, and goals. Every product is designed to enhance usability, efficiency, and ROI."
                    },
                    {
                        question: "How long does it take to develop a custom software solution?",
                        answer:
                            "The development timeline depends on your project’s scope, features, and complexity. Generally, small applications may take 6–10 weeks, while enterprise-level solutions can take several months. We ensure timely delivery through agile development practices."
                    }
                ]
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Software Developers for Your Business?",
                        description:
                            "Hiring experienced software developers is essential for building reliable, scalable, and innovative applications that streamline operations and accelerate growth. Our certified software professionals specialize in custom software development, enterprise solutions, and system integration — ensuring your products are robust, secure, and tailored to your business goals. Whether developing new software or modernizing legacy systems, our team delivers performance-driven, future-ready solutions that empower digital transformation."
                    }
                ]
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-ppc-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-software-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Software Developers to Build Scalable, Secure, and High-Performance Solutions",
                        paragraphs: [
                            "Hire experienced software developers to design, develop, and maintain custom software solutions tailored to your business needs. Our experts specialize in building high-quality, scalable, and efficient applications that enhance productivity and deliver seamless user experiences.",
                            "Collaborate with certified software development professionals skilled in technologies like Java, .NET, Python, C#, PHP, and Node.js. From architecture design and API integration to deployment and maintenance, we provide end-to-end software development services that drive innovation and maximize ROI."
                        ],
                        imageSrc: "/hire-software-developer-one.webp",
                        imageAlt: "Software Developers",
                        ctaText: "Hire Certified Software Developers"
                    }
                ]
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Front-End Software Developers",
                        description:
                            "Collaborate with front-end software developers who create responsive, intuitive, and dynamic user interfaces using React, Angular, and Vue.js — ensuring smooth user interactions and optimal performance across all devices."
                    },
                    {
                        icon: Server,
                        title: "Hire Back-End Software Developers",
                        description:
                            "Our expert back-end software developers specialize in building secure, efficient, and scalable server-side systems using technologies like Node.js, Python, Java, PHP, and .NET — ensuring robust functionality and seamless integrations."
                    },
                    {
                        icon: Database,
                        title: "Hire Database & API Developers",
                        description:
                            "Work with skilled database and API developers who design, manage, and optimize your data infrastructure using MySQL, PostgreSQL, MongoDB, and RESTful or GraphQL APIs for reliable, high-speed performance."
                    },
                    {
                        icon: Cloud,
                        title: "Hire Cloud Application Developers",
                        description:
                            "Hire cloud experts proficient in AWS, Azure, and Google Cloud to develop, deploy, and manage scalable software applications that are secure, high-performing, and cost-efficient."
                    },
                    {
                        icon: Shield,
                        title: "Hire Software Security Engineers",
                        description:
                            "Ensure your software solutions are protected from vulnerabilities with developers who implement robust authentication, encryption, and compliance-based security measures."
                    },
                    {
                        icon: Code,
                        title: "Hire Custom Software Developers",
                        description:
                            "Get tailor-made software solutions built to fit your unique business requirements — from SaaS platforms and enterprise applications to workflow automation tools."
                    },
                    {
                        icon: Zap,
                        title: "Hire DevOps Engineers",
                        description:
                            "Accelerate your software delivery process with DevOps experts who automate CI/CD pipelines, manage deployments, and ensure efficient collaboration between development and operations teams."
                    },
                    {
                        icon: Layers,
                        title: "Hire Full-Stack Software Developers",
                        description:
                            "Leverage the expertise of full-stack software developers who handle both front-end and back-end systems — delivering end-to-end, scalable, and performance-optimized applications."
                    },
                    {
                        icon: Users,
                        title: "Hire UI/UX Software Designers",
                        description:
                            "Work with creative UI/UX designers who craft engaging, user-friendly interfaces and seamless digital experiences that improve usability and customer satisfaction."
                    },
                    {
                        icon: Globe,
                        title: "Hire Enterprise Software Developers",
                        description:
                            "Collaborate with professionals who specialize in building enterprise-grade software solutions that streamline operations, enhance data security, and support large-scale business processes."
                    },
                    {
                        icon: ShoppingCart,
                        title: "Hire SaaS Application Developers",
                        description:
                            "Build robust SaaS products with developers experienced in subscription models, API integration, multi-tenant architecture, and cloud deployment — ensuring scalability and reliability."
                    },
                    {
                        icon: Box,
                        title: "Hire Software Architects & Consultants",
                        description:
                            "Partner with experienced software architects who design scalable system architectures, select the right technologies, and provide strategic guidance for long-term project success."
                    }
                ]
            },


            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Web Developers for Scalable and High-Quality Websites",
                        description:
                            "Hire professional web developers who build responsive, high-performance, and visually engaging websites. Our experts deliver end-to-end web solutions that ensure seamless functionality, improved user engagement, and long-term scalability."
                    },
                    {
                        title: "Comprehensive Front-End and Back-End Expertise",
                        description:
                            "Our web developers are proficient in HTML5, CSS3, JavaScript, React, Angular, Node.js, PHP, and .NET — creating fast, secure, and feature-rich websites tailored to your specific business goals."
                    },
                    {
                        title: "Custom Web Solutions Designed Around Your Business",
                        description:
                            "Every business has unique needs. We develop custom websites and web applications — from CMS-driven platforms and eCommerce sites to enterprise-grade digital solutions — built to enhance your brand and drive measurable growth."
                    },
                    {
                        title: "Flexible Hiring Models for Seamless Collaboration",
                        description:
                            "Hire dedicated web developers on your preferred terms — full-time, part-time, or hourly. Our flexible engagement models let you scale your team quickly while maintaining development quality and delivery speed."
                    },
                    {
                        title: "Proficiency in Modern Frameworks and CMS Platforms",
                        description:
                            "Our developers work with the latest technologies like React, Next.js, Laravel, WordPress, and Shopify. We ensure your website is dynamic, easy to maintain, and future-ready — backed by clean code and modern architecture."
                    },
                    {
                        title: "SEO-Friendly, Secure, and High-Performance Websites",
                        description:
                            "We prioritize performance, SEO, and security in every project. From responsive design and fast load times to SSL implementation and optimized site structures, our web developers build websites that rank well and perform flawlessly."
                    }
                ]
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire web developers for my business?",
                        answer:
                            "Hiring professional web developers ensures your website is fast, secure, and optimized for performance. Our developers create modern, responsive, and user-friendly websites that help strengthen your brand presence and drive measurable business growth."
                    },
                    {
                        question: "What technologies do your web developers specialize in?",
                        answer:
                            "Our web developers are skilled in a wide range of technologies, including HTML5, CSS3, JavaScript, React, Angular, Node.js, PHP, Laravel, WordPress, and Shopify — delivering full-stack development solutions tailored to your needs."
                    },
                    {
                        question: "Can I hire web developers on a flexible basis?",
                        answer:
                            "Yes. We offer flexible hiring models that allow you to hire developers on a full-time, part-time, or hourly basis. You can easily scale your team up or down based on project requirements and timelines."
                    },
                    {
                        question: "Do your web developers handle both front-end and back-end development?",
                        answer:
                            "Absolutely. Our full-stack web developers are proficient in both front-end and back-end technologies, enabling them to build complete, integrated web applications with seamless performance and smooth functionality."
                    },
                    {
                        question: "Will my website be SEO-friendly and mobile responsive?",
                        answer:
                            "Yes. Every website we build is mobile-responsive, SEO-optimized, and performance-driven. Our developers follow best practices in coding, design, and optimization to ensure your site ranks well and delivers an exceptional user experience."
                    },
                    {
                        question: "How long does it take to develop a website?",
                        answer:
                            "The timeline depends on the project’s complexity, features, and design requirements. Typically, a standard business website can take 4–8 weeks, while larger or custom web applications may require additional time. We ensure timely delivery without compromising quality."
                    }
                ]
            },


            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Web Developers for Your Business?",
                        description:
                            "Hiring expert web developers is key to building scalable, efficient, and future-ready digital solutions. Our certified web professionals excel in both front-end and back-end development — delivering seamless, high-performing websites and web applications. Whether you're creating a new platform or enhancing an existing one, our developers ensure faster delivery, flawless integration, and long-term scalability to support your business growth."
                    }
                ]
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-software-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-web-app-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Web App Developers to Build Scalable, Secure, and High-Performance Applications",
                        paragraphs: [
                            "Hire experienced web app developers to design, develop, and maintain custom web applications tailored to your business goals. Our specialists create fast, scalable, and reliable solutions that deliver seamless user experiences and drive digital growth.",
                            "Collaborate with certified professionals skilled in modern web technologies like React, Angular, Vue.js, Node.js, .NET, PHP, and Python. From architecture design and API integration to deployment and optimization, we provide end-to-end web application development services that ensure innovation, performance, and long-term success."
                        ],
                        imageSrc: "/hire-web-app-developer-one.webp",
                        imageAlt: "Web App Developers",
                        ctaText: "Hire Certified Web App Developers"
                    }
                ]
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Cpu,
                        title: "Hire Front-End Web App Developers",
                        description:
                            "Collaborate with skilled front-end web app developers who craft responsive, engaging, and dynamic interfaces using React, Angular, and Vue.js — ensuring seamless user experiences across all devices."
                    },
                    {
                        icon: Server,
                        title: "Hire Back-End Web App Developers",
                        description:
                            "Our back-end experts build secure, efficient, and scalable server-side systems using Node.js, Python, PHP, Java, and .NET — ensuring your web applications run smoothly and integrate flawlessly with third-party systems."
                    },
                    {
                        icon: Database,
                        title: "Hire Database & API Developers",
                        description:
                            "Work with experienced developers who design and optimize data-driven web apps using MySQL, PostgreSQL, and MongoDB, while integrating RESTful and GraphQL APIs for reliable, real-time data access."
                    },
                    {
                        icon: Cloud,
                        title: "Hire Cloud Web App Developers",
                        description:
                            "Hire cloud specialists proficient in AWS, Azure, and Google Cloud to build, deploy, and manage scalable web applications with enhanced performance, flexibility, and security."
                    },
                    {
                        icon: Shield,
                        title: "Hire Web App Security Engineers",
                        description:
                            "Protect your web applications from vulnerabilities with experts who implement encryption, authentication, and compliance-based security standards for data safety and integrity."
                    },
                    {
                        icon: Code,
                        title: "Hire Custom Web App Developers",
                        description:
                            "Get tailor-made web application solutions built to your exact business needs — from SaaS platforms and enterprise systems to workflow automation and business process tools."
                    },
                    {
                        icon: Zap,
                        title: "Hire DevOps Engineers",
                        description:
                            "Accelerate your web app delivery lifecycle with DevOps engineers who streamline CI/CD pipelines, manage automated deployments, and optimize collaboration between development and operations teams."
                    },
                    {
                        icon: Layers,
                        title: "Hire Full-Stack Web App Developers",
                        description:
                            "Leverage full-stack developers who handle both client and server-side development — delivering high-performance, end-to-end web applications optimized for scalability and speed."
                    },
                    {
                        icon: Users,
                        title: "Hire UI/UX Web App Designers",
                        description:
                            "Work with creative UI/UX designers who craft intuitive, visually appealing, and user-centric interfaces that boost engagement and improve customer satisfaction."
                    },
                    {
                        icon: Globe,
                        title: "Hire Enterprise Web App Developers",
                        description:
                            "Collaborate with professionals experienced in building enterprise-grade web applications that streamline operations, ensure scalability, and support complex business workflows."
                    },
                    {
                        icon: ShoppingCart,
                        title: "Hire SaaS Web App Developers",
                        description:
                            "Build powerful SaaS web applications with experts who excel in subscription systems, API integrations, multi-tenant architecture, and secure cloud deployment."
                    },
                    {
                        icon: Box,
                        title: "Hire Web App Architects & Consultants",
                        description:
                            "Partner with experienced architects and consultants who design scalable architectures, select optimal tech stacks, and ensure long-term performance and success of your web applications."
                    }
                ]
            },

            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Web App Developers for Scalable and High-Performance Solutions",
                        description:
                            "Hire experienced web app developers who specialize in creating scalable, secure, and high-performing applications. Our experts deliver end-to-end web solutions designed to enhance user experience, boost performance, and support your business growth."
                    },
                    {
                        title: "Comprehensive Front-End and Back-End Development Expertise",
                        description:
                            "Our web app developers are proficient in modern technologies such as React, Angular, Vue.js, Node.js, Python, PHP, and .NET — ensuring seamless integration, robust functionality, and efficient performance across all platforms."
                    },
                    {
                        title: "Custom Web Applications Tailored to Your Business Needs",
                        description:
                            "We build fully customized web applications that align with your business objectives — from SaaS products and enterprise tools to customer portals and workflow automation systems. Every solution is built for scalability, usability, and long-term value."
                    },
                    {
                        title: "Flexible Hiring Models for Agile Development Teams",
                        description:
                            "Hire dedicated web app developers on flexible engagement models — full-time, part-time, or hourly — depending on your project scope and goals. Our adaptable approach allows you to scale efficiently while maintaining quality and delivery speed."
                    },
                    {
                        title: "Proficiency in Modern Frameworks and Cloud Technologies",
                        description:
                            "Our developers are skilled in the latest frameworks and cloud ecosystems like Next.js, Django, Laravel, AWS, and Azure. We ensure your web applications are fast, reliable, and built with future-ready architecture."
                    },
                    {
                        title: "Secure, SEO-Friendly, and Optimized Web Applications",
                        description:
                            "Every web app we build is optimized for performance, SEO, and security. With clean code, strong encryption, and efficient data handling, our developers ensure your application performs flawlessly and ranks effectively in search results."
                    }
                ]
            },


            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire web app developers for my business?",
                        answer:
                            "Hiring professional web app developers ensures your applications are fast, scalable, and secure. Our developers design and build high-performing web applications that streamline operations, enhance user engagement, and support your digital transformation goals."
                    },
                    {
                        question: "What technologies do your web app developers specialize in?",
                        answer:
                            "Our web app developers are skilled in a broad range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, Laravel, .NET, and cloud platforms like AWS and Azure — delivering robust, full-stack web application solutions."
                    },
                    {
                        question: "Can I hire web app developers on a flexible basis?",
                        answer:
                            "Yes. We offer flexible hiring models that let you hire developers on a full-time, part-time, or hourly basis. You can easily scale your team and resources according to your project needs and delivery timelines."
                    },
                    {
                        question: "Do your web app developers handle both front-end and back-end development?",
                        answer:
                            "Absolutely. Our full-stack web app developers are proficient in both front-end and back-end technologies, ensuring seamless functionality, efficient data flow, and optimal performance across all layers of your application."
                    },
                    {
                        question: "Will my web application be secure, scalable, and SEO-friendly?",
                        answer:
                            "Yes. Every web application we build is optimized for performance, scalability, and security. Our developers follow best coding practices and implement SEO and security measures to ensure your app performs reliably and ranks effectively."
                    },
                    {
                        question: "How long does it take to develop a web application?",
                        answer:
                            "The development timeline depends on your project’s scope, features, and complexity. Typically, small to medium web apps can take 6–10 weeks, while enterprise-grade or custom applications may require more time. We ensure on-time delivery with uncompromised quality."
                    }
                ]
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Web Developers for Your Business?",
                        description:
                            "Hiring expert web developers is key to building scalable, efficient, and future-ready digital solutions. Our certified web professionals excel in both front-end and back-end development — delivering seamless, high-performing websites and web applications. Whether you're creating a new platform or enhancing an existing one, our developers ensure faster delivery, flawless integration, and long-term scalability to support your business growth."
                    }
                ]
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-web-app-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-webdesign-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Web Design Developers to Create Engaging, Responsive, and User-Centric Websites",
                        paragraphs: [
                            "Hire professional web design developers who craft visually stunning, responsive, and conversion-focused websites. Our experts combine creative design principles with technical precision to deliver websites that captivate users and strengthen your digital presence.",
                            "Work with skilled designers and front-end developers experienced in HTML5, CSS3, JavaScript, Figma, Adobe XD, and modern frameworks like React and Next.js. From UI/UX design and responsive layouts to brand consistency and usability optimization, we ensure your website stands out with both form and function."
                        ],
                        imageSrc: "/hire-webdesign-developer-one.webp",
                        imageAlt: "Web Design Developers",
                        ctaText: "Hire Certified Web Design Developers"
                    }
                ]
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Layout,
                        title: "Hire Front-End Web Designers",
                        description:
                            "Work with front-end web designers who build visually stunning, responsive, and user-friendly interfaces using HTML5, CSS3, JavaScript, and frameworks like React, Angular, and Vue.js — ensuring a seamless experience across all devices."
                    },
                    {
                        icon: Brush,
                        title: "Hire UI/UX Web Design Experts",
                        description:
                            "Collaborate with creative UI/UX professionals who specialize in intuitive layouts, engaging interactions, and modern aesthetics — transforming user journeys into delightful digital experiences."
                    },
                    {
                        icon: Palette,
                        title: "Hire Creative Visual Designers",
                        description:
                            "Our visual design experts bring your brand to life through thoughtful color schemes, typography, and imagery that align perfectly with your brand identity and audience expectations."
                    },
                    {
                        icon: Smartphone,
                        title: "Hire Responsive Web Design Specialists",
                        description:
                            "Ensure your website looks and performs flawlessly on every screen size. Our responsive design specialists craft layouts that adapt beautifully to desktops, tablets, and mobile devices."
                    },
                    {
                        icon: Layers,
                        title: "Hire Full-Stack Web Design Developers",
                        description:
                            "Combine aesthetics with functionality. Our full-stack web design developers manage both design and implementation — blending UI precision with optimized front-end code for high performance."
                    },
                    {
                        icon: Code,
                        title: "Hire Custom Website Design Developers",
                        description:
                            "Get tailor-made website designs built around your business goals. From landing pages to eCommerce sites, we create pixel-perfect, conversion-focused solutions that stand out online."
                    },
                    {
                        icon: Globe,
                        title: "Hire CMS Web Design Developers",
                        description:
                            "Work with developers experienced in WordPress, Shopify, Webflow, and custom CMS solutions — building easy-to-manage, visually consistent, and SEO-friendly websites."
                    },
                    {
                        icon: Zap,
                        title: "Hire Motion & Interaction Designers",
                        description:
                            "Bring your website to life with micro-interactions and smooth animations. Our designers use motion design to enhance usability, storytelling, and engagement."
                    },
                    {
                        icon: Shield,
                        title: "Hire Web Accessibility Experts",
                        description:
                            "Ensure your website is inclusive and compliant with accessibility standards. Our experts design for all users, focusing on clarity, readability, and accessible navigation."
                    },
                    {
                        icon: Cloud,
                        title: "Hire Performance Optimization Designers",
                        description:
                            "Optimize your site for speed and performance. Our specialists reduce load times, refine visuals, and enhance user experience — improving both UX and SEO."
                    },
                    {
                        icon: Users,
                        title: "Hire Branding & Identity Designers",
                        description:
                            "Strengthen your digital identity with experts who create cohesive branding elements — ensuring visual harmony across your website, logo, and marketing materials."
                    },
                    {
                        icon: Box,
                        title: "Hire Web Design Consultants",
                        description:
                            "Partner with experienced consultants who guide your web design strategy — from UX audits and design systems to modernizing existing interfaces for better engagement and ROI."
                    }
                ]
            },


            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Expert Web Design Developers for Stunning and High-Performance Websites",
                        description:
                            "Hire professional web design developers who craft visually captivating, user-friendly, and high-performing websites. Our experts focus on creating designs that engage users, reflect your brand identity, and deliver measurable business impact."
                    },
                    {
                        title: "Comprehensive UI/UX and Front-End Design Expertise",
                        description:
                            "Our designers and developers specialize in UI/UX design, responsive layouts, and front-end technologies like HTML5, CSS3, JavaScript, React, and Vue.js — ensuring smooth functionality with beautiful aesthetics on every device."
                    },
                    {
                        title: "Custom Website Designs Aligned with Your Brand Vision",
                        description:
                            "We design and develop websites that reflect your unique business goals and brand personality. From corporate sites and eCommerce stores to creative portfolios, every project is tailored to deliver a memorable user experience."
                    },
                    {
                        title: "Flexible Hiring Models for Creative Design Teams",
                        description:
                            "Hire dedicated web design developers on flexible terms — full-time, part-time, or hourly. Scale your creative team effortlessly while maintaining top design quality and timely project delivery."
                    },
                    {
                        title: "Proficiency in Modern Tools and Design Systems",
                        description:
                            "Our experts work with industry-leading tools like Figma, Adobe XD, Sketch, and Webflow, combined with modern front-end frameworks. We ensure pixel-perfect precision, component consistency, and effortless scalability."
                    },
                    {
                        title: "SEO-Optimized, Fast, and Mobile-Responsive Web Designs",
                        description:
                            "Every design we deliver is optimized for speed, SEO, and responsiveness. With mobile-first principles, optimized visuals, and clean code, we create websites that perform flawlessly and rank higher in search engines."
                    }
                ]
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire web design developers for my business?",
                        answer:
                            "Hiring expert web design developers ensures your website is visually stunning, user-friendly, and optimized for performance. Our designers and front-end specialists create responsive, SEO-ready designs that enhance user engagement and strengthen your brand identity."
                    },
                    {
                        question: "What tools and technologies do your web design developers use?",
                        answer:
                            "Our web design developers work with cutting-edge tools and technologies including Figma, Adobe XD, Sketch, Webflow, HTML5, CSS3, JavaScript, React, and Vue.js — ensuring designs that are both creative and technically sound."
                    },
                    {
                        question: "Can I hire web design developers on a flexible basis?",
                        answer:
                            "Yes. We offer flexible hiring models so you can hire web design developers on a full-time, part-time, or hourly basis — giving you complete control over your budget, workflow, and project timelines."
                    },
                    {
                        question: "Do your web design developers handle responsive and UX optimization?",
                        answer:
                            "Absolutely. Our developers ensure every design is fully responsive, mobile-friendly, and optimized for the best user experience. We follow UX best practices to ensure smooth navigation and high user satisfaction across all devices."
                    },
                    {
                        question: "Will my website design be SEO-friendly and performance-optimized?",
                        answer:
                            "Yes. Every website we design is built with SEO and performance in mind. From optimized layouts and clean code to fast-loading pages and structured data, we ensure your site ranks well and delivers superior performance."
                    },
                    {
                        question: "How long does it take to design and develop a website?",
                        answer:
                            "The timeline depends on the design complexity, number of pages, and functionality required. Typically, a standard website takes 3–6 weeks, while larger or custom designs may take longer. We ensure on-time delivery with exceptional quality and precision."
                    }
                ]
            },


            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Web Design Developers for Your Business?",
                        description:
                            "Hiring skilled web design developers is essential for creating visually appealing, user-friendly, and performance-driven websites. Our certified design professionals blend creativity with technical expertise — delivering responsive, SEO-optimized, and engaging digital experiences. Whether you’re building a new website or redesigning an existing one, our designers ensure intuitive layouts, consistent branding, and exceptional user experiences that drive business growth."
                    }
                ]
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-ppc-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    // {
    //     pageId: "hire-webdesign-developer",
    //     sections: [
    //         {
    //             sectionId: "hero",
    //             data: [
    //                 { src: "/amazon-web.svg", alt: "amazon-web" },
    //                 { src: "/amazon-1.webp", alt: "amazon" },
    //                 { src: "/decathlon-logo.svg", alt: "decathlon" },
    //                 { src: "/dhl-3.svg", alt: "dhl" },
    //                 { src: "/ebay-logo.svg", alt: "ebay" },
    //                 { src: "/ecomexpress.svg", alt: "ecomexpress" },
    //                 { src: "/fbm.webp", alt: "fbm" },
    //                 { src: "/fba.webp", alt: "fba" },
    //                 { src: "/fedex.svg", alt: "fedex" },
    //                 { src: "/fnac.webp", alt: "fnac" },
    //                 { src: "/paypal.svg", alt: "paypal" },
    //                 { src: "/paytm.svg", alt: "paytm" },
    //             ],
    //         },
    //         {
    //             sectionId: "intro",
    //             data: [
    //                 {
    //                     title: "Hire Expert Web Design Developers to Create Stunning, User-Centric Digital Experiences",
    //                     paragraphs: [
    //                         "Hire professional web design developers who specialize in crafting visually engaging, responsive, and user-friendly websites that strengthen your brand identity and enhance user experience. Our designers blend creativity with functionality to deliver web designs that captivate and convert.",
    //                         "Collaborate with certified UI/UX experts skilled in Figma, Adobe XD, HTML5, CSS3, and responsive frameworks. From design concept and prototyping to front-end development and performance optimization, we ensure every pixel of your website aligns with your business goals and drives results."
    //                     ],
    //                     imageSrc: "/hire-webdesign-developer-one.webp",
    //                     imageAlt: "Web Design Developers",
    //                     ctaText: "Hire Certified Web Design Developers"
    //                 }
    //             ]
    //         },
    //         {
    //             sectionId: "developerType",
    //             data: [
    //                 {
    //                     icon: Search,
    //                     title: "Hire SEO Specialists",
    //                     description:
    //                         "Boost your website’s visibility with SEO experts who optimize site structure, content, and backlinks to improve search engine rankings and drive targeted organic traffic."
    //                 },
    //                 {
    //                     icon: MousePointer,
    //                     title: "Hire PPC & Google Ads Experts",
    //                     description:
    //                         "Collaborate with certified PPC professionals who create, manage, and optimize Google Ads and paid campaigns — ensuring maximum ROI through strategic bidding and audience targeting."
    //                 },
    //                 {
    //                     icon: Share2,
    //                     title: "Hire Social Media Marketing Experts",
    //                     description:
    //                         "Grow your brand presence and engagement across platforms like Facebook, Instagram, LinkedIn, and X (Twitter). Our social media marketers craft tailored campaigns that connect with your audience and drive conversions."
    //                 },
    //                 {
    //                     icon: PenTool,
    //                     title: "Hire Content Marketing Specialists",
    //                     description:
    //                         "Work with content strategists who create impactful blogs, website copy, and marketing assets that build authority, improve SEO, and nurture customer trust."
    //                 },
    //                 {
    //                     icon: Mail,
    //                     title: "Hire Email Marketing Experts",
    //                     description:
    //                         "Reach and retain customers with personalized email campaigns designed to increase engagement, conversions, and customer loyalty using tools like Mailchimp and HubSpot."
    //                 },
    //                 {
    //                     icon: BarChart3,
    //                     title: "Hire Digital Marketing Analysts",
    //                     description:
    //                         "Leverage data-driven insights with experts who monitor campaign performance, analyze user behavior, and optimize strategies for higher conversions and better ROI."
    //                 },
    //                 {
    //                     icon: Globe,
    //                     title: "Hire SEO & SEM Specialists",
    //                     description:
    //                         "Combine the power of organic and paid search marketing. Our SEO/SEM professionals ensure your website ranks high while maximizing visibility through targeted ad placements."
    //                 },
    //                 {
    //                     icon: ShoppingCart,
    //                     title: "Hire E-commerce Marketing Experts",
    //                     description:
    //                         "Increase your online store’s traffic and sales with e-commerce marketing specialists experienced in Shopify, WooCommerce, and Magento — optimizing every step of the buyer journey."
    //                 },
    //                 {
    //                     icon: Video,
    //                     title: "Hire Video Marketing Specialists",
    //                     description:
    //                         "Engage audiences through high-quality video campaigns. Our experts manage YouTube SEO, video ads, and storytelling content to amplify your brand message and visibility."
    //                 },
    //                 {
    //                     icon: Cpu,
    //                     title: "Hire Marketing Automation Experts",
    //                     description:
    //                         "Automate workflows and campaigns with specialists skilled in tools like HubSpot, Marketo, and ActiveCampaign — ensuring personalized, data-driven communication at scale."
    //                 },
    //                 {
    //                     icon: Users,
    //                     title: "Hire Brand & Reputation Managers",
    //                     description:
    //                         "Protect and grow your brand image with professionals who monitor online reputation, manage reviews, and implement PR strategies that build trust and credibility."
    //                 },
    //                 {
    //                     icon: Box,
    //                     title: "Hire Digital Marketing Consultants",
    //                     description:
    //                         "Work with experienced consultants who audit your digital presence, plan integrated marketing strategies, and guide your team toward sustained growth and digital success."
    //                 }
    //             ]
    //         },


    //         {
    //             sectionId: "developers",
    //             data: [
    //                 {
    //                     name: "John Doe",
    //                     experience: "7+",
    //                     role: "Full Stack Developer",
    //                     description:
    //                         "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
    //                     skills: ["Ruby On Rails", "React", "Node.js"],
    //                     imageSrc: "/developers/john-doe.jpg",
    //                     imageAlt: "John Doe",
    //                 },
    //                 {
    //                     name: "Jane Smith",
    //                     experience: "5+",
    //                     role: "Data Engineer",
    //                     description:
    //                         "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
    //                     skills: ["Hadoop", "Spark", "Power BI"],
    //                     imageSrc: "/developers/jane-smith.jpg",
    //                     imageAlt: "Jane Smith",
    //                 },
    //                 {
    //                     name: "Mark Johnson",
    //                     experience: "6+",
    //                     role: "eCommerce Developer",
    //                     description:
    //                         "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
    //                     skills: ["Magento", "Shopify", "WooCommerce"],
    //                     imageSrc: "/developers/mark-johnson.jpg",
    //                     imageAlt: "Mark Johnson",
    //                 },
    //             ],
    //         },
    //         {
    //             sectionId: "reasons",
    //             data: [
    //                 {
    //                     title: "Certified Digital Marketing Experts Driving Real Business Growth",
    //                     description:
    //                         "Hire skilled digital marketing professionals who create data-driven strategies to increase traffic, leads, and sales. Our certified experts deliver measurable results through tailored SEO, PPC, social media, and content campaigns."
    //                 },
    //                 {
    //                     title: "Comprehensive Expertise Across All Marketing Channels",
    //                     description:
    //                         "Our team specializes in multi-channel marketing — including SEO, PPC, SMM, content marketing, and email automation. We build integrated strategies that ensure consistent brand visibility and audience engagement across platforms."
    //                 },
    //                 {
    //                     title: "Performance-Driven and ROI-Focused Campaign Management",
    //                     description:
    //                         "We don’t just market — we deliver performance. Every campaign is optimized for conversions, with continuous testing, tracking, and analysis to maximize ROI and business impact."
    //                 },
    //                 {
    //                     title: "Custom Digital Marketing Strategies for Your Brand",
    //                     description:
    //                         "Get marketing solutions that align perfectly with your business goals, audience, and industry. From brand awareness to lead generation, our experts tailor every campaign to your unique objectives."
    //                 },
    //                 {
    //                     title: "Flexible Hiring Models to Match Your Marketing Needs",
    //                     description:
    //                         "Hire dedicated digital marketers on flexible terms — hourly, part-time, or full-time. Easily scale your team based on campaign demands while maintaining consistency and quality."
    //                 },
    //                 {
    //                     title: "Advanced Tools, Analytics, and Automation for Smarter Marketing",
    //                     description:
    //                         "We leverage leading tools like Google Analytics, SEMrush, Ahrefs, HubSpot, and Meta Ads Manager for performance tracking and marketing automation — ensuring your campaigns run efficiently and deliver actionable insights."
    //                 }
    //             ]
    //         },

    //         {
    //             sectionId: "faqs",
    //             data: [
    //                 {
    //                     question: "Why should I hire digital marketing experts for my business?",
    //                     answer:
    //                         "Hiring professional digital marketing experts ensures your brand reaches the right audience through effective, data-driven campaigns. Our specialists help you increase visibility, generate leads, and boost conversions across multiple online platforms."
    //                 },
    //                 {
    //                     question: "What digital marketing services do you provide?",
    //                     answer:
    //                         "Our digital marketing team offers end-to-end services including SEO, PPC, social media marketing, content marketing, email marketing, and conversion rate optimization. We tailor strategies to align with your brand goals and audience needs."
    //                 },
    //                 {
    //                     question: "Can I hire digital marketing professionals on a flexible basis?",
    //                     answer:
    //                         "Yes. We offer flexible hiring options so you can hire digital marketing experts on a full-time, part-time, or hourly basis — giving you full control over your project scope, timeline, and budget."
    //                 },
    //                 {
    //                     question: "Do your marketers handle both strategy and execution?",
    //                     answer:
    //                         "Absolutely. Our digital marketing experts manage everything from campaign planning and strategy development to execution, optimization, and performance tracking — ensuring consistent, measurable growth."
    //                 },
    //                 {
    //                     question: "How do you measure the success of marketing campaigns?",
    //                     answer:
    //                         "We use advanced analytics tools like Google Analytics, SEMrush, and HubSpot to monitor KPIs such as traffic, engagement, conversions, and ROI. Regular reports keep you informed of your campaign’s progress and impact."
    //                 },
    //                 {
    //                     question: "How long does it take to see results from digital marketing?",
    //                     answer:
    //                         "Results vary depending on your goals and marketing channels. SEO efforts may take 3–6 months for significant organic growth, while PPC and social media campaigns can show measurable results within weeks of launch."
    //                 }
    //             ]
    //         },

    //         {
    //             sectionId: "faqHeader",
    //             data: [
    //                 {
    //                     title: "Why Hire Digital Marketing Experts for Your Business?",
    //                     description:
    //                         "Hiring experienced digital marketing experts is crucial for growing your online presence, attracting qualified leads, and increasing conversions. Our certified marketing professionals specialize in SEO, PPC, social media, and content marketing — helping your brand reach the right audience with the right message. Whether you're launching new campaigns or optimizing existing ones, our team ensures measurable results, improved ROI, and sustainable business growth through strategic digital marketing."
    //                 }
    //             ]
    //         },

    //         {
    //             sectionId: "faqMedia",
    //             data: [
    //                 {
    //                     imageSrc: "/hire-webdesign-developer-two.webp",
    //                     imageAlt: "FAQ Illustration",
    //                 },
    //             ],
    //         },
    //         {
    //             sectionId: "stats",
    //             data: [
    //                 { value: "20+", label: "Projects Completed" },
    //                 { value: "15+", label: "Clients Served" },
    //                 { value: "10+", label: "Professionals" },
    //             ],
    //         },
    //         {
    //             sectionId: "highlights",
    //             data: [
    //                 {
    //                     icon: Users,
    //                     title: "Highly Creative & Motivated Teams",
    //                     description:
    //                         "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
    //                 },
    //                 {
    //                     icon: Lightbulb,
    //                     title: "Your Ideas Are Safe With Us",
    //                     description:
    //                         "Creative and Innovative Ideas protected with high confidentiality standards.",
    //                 },
    //                 {
    //                     icon: Shield,
    //                     title: "Quality & Security Adherence",
    //                     description:
    //                         "We follow best practices to ensure high-quality, secure, and scalable web applications.",
    //                 },
    //                 {
    //                     icon: Clock,
    //                     title: "Faster Project Development",
    //                     description:
    //                         "Efficient workflows and experienced teams ensure timely delivery of your projects.",
    //                 },
    //             ],
    //         },
    //         {
    //             sectionId: "hiringSteps",
    //             data: [
    //                 {
    //                     icon: Search,
    //                     title: "Requirement Analysis",
    //                     description:
    //                         "Share your project requirements, and we will understand your goals and technical needs.",
    //                 },
    //                 {
    //                     icon: Users,
    //                     title: "Candidate Shortlisting",
    //                     description:
    //                         "We identify top Web developers matching your requirements based on skill and experience.",
    //                 },
    //                 {
    //                     icon: UserCheck,
    //                     title: "Interview & Assessment",
    //                     description:
    //                         "Conduct technical interviews or tests to select the best developer for your project.",
    //                 },
    //                 {
    //                     icon: CheckCircle,
    //                     title: "Onboarding & Start",
    //                     description:
    //                         "Once selected, we onboard the developer and start working on your project efficiently.",
    //                 },
    //             ],
    //         },
    //     ],
    // },
    {
        pageId: "hire-digital-marketing",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Digital Marketing Specialists to Boost Your Online Visibility and Drive Business Growth",
                        paragraphs: [
                            "Hire professional digital marketing specialists who craft data-driven strategies to enhance online visibility, attract qualified leads, and maximize conversions. Our experts blend creativity, analytics, and technology to deliver measurable marketing success across all digital platforms.",
                            "Collaborate with certified professionals skilled in SEO, PPC, social media marketing, content strategy, and email automation. From campaign strategy and audience segmentation to performance optimization and ROI tracking, we help your brand reach the right audience and achieve sustainable growth."
                        ],
                        imageSrc: "/hire-digital-marketing-one.webp",
                        imageAlt: "Digital Marketing Specialists",
                        ctaText: "Hire Certified Digital Marketing Experts"
                    }
                ]
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Search,
                        title: "Hire SEO Specialists",
                        description:
                            "Boost your website’s visibility and ranking with SEO experts who optimize your site structure, content, and backlinks to drive targeted organic traffic and long-term growth."
                    },
                    {
                        icon: MousePointer,
                        title: "Hire PPC & Google Ads Experts",
                        description:
                            "Collaborate with certified PPC professionals who plan, create, and manage high-performing Google Ads and paid campaigns — ensuring maximum ROI through precise audience targeting and bid optimization."
                    },
                    {
                        icon: Share2,
                        title: "Hire Social Media Marketing Experts",
                        description:
                            "Grow your brand presence and engagement on platforms like Facebook, Instagram, LinkedIn, and X (Twitter). Our social media marketers craft audience-driven campaigns that build relationships and increase conversions."
                    },
                    {
                        icon: PenTool,
                        title: "Hire Content Marketing Specialists",
                        description:
                            "Partner with content strategists who create impactful blogs, website copy, and marketing assets that strengthen your brand authority, improve SEO, and nurture customer trust."
                    },
                    {
                        icon: Mail,
                        title: "Hire Email Marketing Experts",
                        description:
                            "Reach and retain customers through personalized, automated email campaigns built to boost engagement, conversions, and customer loyalty using tools like Mailchimp and HubSpot."
                    },
                    {
                        icon: BarChart3,
                        title: "Hire Digital Marketing Analysts",
                        description:
                            "Leverage actionable insights with data analysts who monitor campaign performance, analyze user behavior, and optimize marketing strategies for higher ROI and conversions."
                    },
                    {
                        icon: Globe,
                        title: "Hire SEO & SEM Specialists",
                        description:
                            "Combine the power of organic and paid marketing. Our SEO/SEM experts enhance visibility through keyword optimization, ad placements, and continuous campaign performance tracking."
                    },
                    {
                        icon: ShoppingCart,
                        title: "Hire E-commerce Marketing Experts",
                        description:
                            "Increase traffic and sales for your online store with e-commerce marketing specialists experienced in Shopify, WooCommerce, and Magento — optimizing every step of the customer journey."
                    },
                    {
                        icon: Video,
                        title: "Hire Video Marketing Specialists",
                        description:
                            "Engage and inspire audiences with high-quality video campaigns. Our experts manage YouTube SEO, video ads, and storytelling content that amplifies your brand’s voice and visibility."
                    },
                    {
                        icon: Cpu,
                        title: "Hire Marketing Automation Experts",
                        description:
                            "Automate workflows and campaigns with specialists skilled in HubSpot, Marketo, and ActiveCampaign — ensuring consistent, personalized communication at scale."
                    },
                    {
                        icon: Users,
                        title: "Hire Brand & Reputation Managers",
                        description:
                            "Safeguard your brand image with professionals who manage online reputation, monitor reviews, and execute PR strategies that enhance trust and credibility."
                    },
                    {
                        icon: Box,
                        title: "Hire Digital Marketing Consultants",
                        description:
                            "Work with seasoned consultants who audit your digital ecosystem, design integrated marketing strategies, and guide your business toward sustainable online success."
                    }
                ]
            },



            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Certified Digital Marketing Experts Driving Measurable Growth",
                        description:
                            "Hire certified digital marketing professionals who craft data-driven strategies to boost traffic, generate quality leads, and increase conversions. Our experts deliver tangible results through SEO, PPC, social media, and content marketing excellence."
                    },
                    {
                        title: "Comprehensive Expertise Across Every Digital Channel",
                        description:
                            "Our team excels in a full spectrum of digital marketing services — including SEO, PPC, social media, content, and email automation. We create unified strategies that ensure consistent brand visibility and audience engagement across all platforms."
                    },
                    {
                        title: "Performance-Driven Campaigns Focused on ROI",
                        description:
                            "We go beyond marketing — we focus on measurable performance. Each campaign is optimized through continuous testing, tracking, and analytics to deliver higher ROI and stronger business outcomes."
                    },
                    {
                        title: "Customized Marketing Strategies for Your Business Goals",
                        description:
                            "Every brand is unique — and so is our approach. We develop personalized digital marketing strategies tailored to your audience, objectives, and industry to drive meaningful engagement and long-term success."
                    },
                    {
                        title: "Flexible Hiring Models to Suit Your Marketing Needs",
                        description:
                            "Scale your marketing team effortlessly with flexible hiring options — hourly, part-time, or full-time. Maintain quality and consistency while adapting to project demands and budget requirements."
                    },
                    {
                        title: "Powered by Advanced Tools, Analytics & Automation",
                        description:
                            "We use industry-leading platforms like Google Analytics, SEMrush, Ahrefs, HubSpot, and Meta Ads Manager to automate processes, track performance, and generate actionable insights for smarter marketing decisions."
                    }
                ]
            },


            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire digital marketing experts for my business?",
                        answer:
                            "Hiring professional digital marketing experts ensures your brand connects with the right audience through strategic, data-driven campaigns. Our certified marketers help increase brand visibility, attract qualified leads, and drive measurable conversions across multiple digital platforms."
                    },
                    {
                        question: "What digital marketing services do you offer?",
                        answer:
                            "We provide comprehensive digital marketing services including SEO, PPC, social media marketing, content marketing, email marketing, and conversion rate optimization. Each strategy is customized to align with your business objectives and target audience."
                    },
                    {
                        question: "Can I hire digital marketing professionals on a flexible basis?",
                        answer:
                            "Yes. You can hire our digital marketing experts on full-time, part-time, or hourly models — allowing you to scale your marketing efforts based on project size, budget, and timelines."
                    },
                    {
                        question: "Do your marketers handle both strategy and execution?",
                        answer:
                            "Absolutely. Our digital marketing specialists manage every stage — from strategy development and campaign planning to execution, optimization, and performance tracking — ensuring consistent growth and maximum ROI."
                    },
                    {
                        question: "How do you measure the success of digital marketing campaigns?",
                        answer:
                            "We track key performance metrics such as traffic, engagement, conversions, and ROI using tools like Google Analytics, SEMrush, Ahrefs, and HubSpot. You receive detailed performance reports to monitor results and make data-backed decisions."
                    },
                    {
                        question: "How long does it take to see results from digital marketing?",
                        answer:
                            "Results depend on your goals and chosen marketing channels. SEO typically shows significant growth within 3–6 months, while PPC and social media campaigns can deliver measurable results within weeks of launch."
                    }
                ]
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Digital Marketing Experts for Your Business?",
                        description:
                            "Hiring professional digital marketing experts is essential for building a strong online presence, generating quality leads, and driving higher conversions. Our certified marketers specialize in SEO, PPC, social media, content, and email marketing — ensuring your brand connects with the right audience through data-driven campaigns. Whether you're launching new strategies or optimizing existing ones, our team delivers measurable results, improved ROI, and long-term business growth through effective digital marketing."
                    }
                ]
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-ppc-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-blockchain-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Blockchain Developers to Build Secure, Scalable, and Decentralized Solutions",
                        paragraphs: [
                            "Hire professional blockchain developers who specialize in creating secure, transparent, and high-performance decentralized applications (dApps) and smart contracts. Our blockchain experts bring extensive experience in Ethereum, Hyperledger, Solidity, and other cutting-edge technologies to help businesses innovate and scale with confidence.",
                            "Collaborate with certified blockchain professionals skilled in DeFi platforms, NFT marketplaces, crypto wallets, and token development. From architecture design and smart contract development to auditing and integration, we ensure your blockchain solutions are efficient, compliant, and future-ready."
                        ],
                        imageSrc: "/hire-blockchain-developer-one.webp",
                        imageAlt: "Blockchain Developers",
                        ctaText: "Hire Certified Blockchain Developers"
                    }
                ]
            },
            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Layers,
                        title: "Hire Smart Contract Developers",
                        description:
                            "Work with expert smart contract developers who build, audit, and deploy secure, efficient, and transparent smart contracts on Ethereum, Binance Smart Chain, Polygon, and other blockchain platforms."
                    },
                    {
                        icon: Code,
                        title: "Hire dApp Developers",
                        description:
                            "Build powerful decentralized applications with skilled dApp developers experienced in Solidity, Web3.js, and Truffle. We create scalable and user-friendly apps for DeFi, NFTs, and enterprise solutions."
                    },
                    {
                        icon: Shield,
                        title: "Hire Blockchain Security Experts",
                        description:
                            "Ensure the safety of your blockchain ecosystem with certified security experts who perform smart contract audits, vulnerability assessments, and implement robust cybersecurity protocols."
                    },
                    {
                        icon: Wallet,
                        title: "Hire Crypto Wallet Developers",
                        description:
                            "Develop secure and multi-currency crypto wallets for web and mobile platforms. Our wallet developers integrate seamless transactions, encryption, and multi-signature authentication."
                    },
                    {
                        icon: Coins,
                        title: "Hire Cryptocurrency Developers",
                        description:
                            "Launch your own cryptocurrency or token with blockchain developers skilled in tokenomics, smart contracts, and blockchain integration — tailored for ICOs, DeFi, and NFT ecosystems."
                    },
                    {
                        icon: Network,
                        title: "Hire Blockchain Integration Specialists",
                        description:
                            "Integrate blockchain into your existing systems with experts who ensure smooth interoperability, data integrity, and enhanced transparency across business workflows."
                    },
                    {
                        icon: Database,
                        title: "Hire Hyperledger Developers",
                        description:
                            "Build enterprise-grade private blockchain networks with certified Hyperledger Fabric and Sawtooth developers — ideal for supply chain, fintech, and healthcare solutions."
                    },
                    {
                        icon: Cpu,
                        title: "Hire DeFi Developers",
                        description:
                            "Create decentralized finance platforms with experts in lending protocols, liquidity pools, staking systems, and smart contract automation — driving financial innovation securely."
                    },
                    {
                        icon: Zap,
                        title: "Hire NFT Developers",
                        description:
                            "Develop feature-rich NFT marketplaces and minting platforms with NFT specialists who ensure seamless trading, blockchain transparency, and high performance."
                    },
                    {
                        icon: Cloud,
                        title: "Hire Blockchain Architects",
                        description:
                            "Design scalable and secure blockchain infrastructure with architects who specialize in consensus mechanisms, node management, and cross-chain communication."
                    },
                    {
                        icon: Users,
                        title: "Hire Blockchain Consultants",
                        description:
                            "Get expert blockchain consulting for project planning, tokenomics design, and technology selection — guiding your blockchain journey from concept to deployment."
                    },
                    {
                        icon: Globe,
                        title: "Hire Web3 Developers",
                        description:
                            "Empower your digital ecosystem with Web3 developers skilled in decentralized identity, wallets, and integration — bridging traditional applications with blockchain technology."
                    }
                ]
            },


            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Certified Blockchain Developers Delivering Secure and Scalable Solutions",
                        description:
                            "Hire experienced blockchain developers who build secure, transparent, and high-performance decentralized solutions. Our certified experts specialize in smart contracts, dApps, and blockchain integration to drive innovation and business efficiency."
                    },
                    {
                        title: "End-to-End Blockchain Development Expertise",
                        description:
                            "From architecture design and smart contract creation to tokenization and decentralized app deployment, our team offers comprehensive blockchain development services tailored to your business needs."
                    },
                    {
                        title: "Security-First Approach with Proven Blockchain Frameworks",
                        description:
                            "We prioritize security and integrity at every step. Our developers are proficient in leading blockchain platforms like Ethereum, Polygon, Hyperledger, and Solana — ensuring robust, tamper-proof systems for your projects."
                    },
                    {
                        title: "Custom Blockchain Solutions Aligned with Your Business Goals",
                        description:
                            "Whether you’re building DeFi platforms, NFT marketplaces, or supply chain networks, we design custom blockchain solutions that align with your objectives and deliver measurable results."
                    },
                    {
                        title: "Flexible Hiring Models to Fit Your Project Scope",
                        description:
                            "Hire blockchain experts on your terms — full-time, part-time, or hourly. Scale your team effortlessly while maintaining top-tier development quality and timely project delivery."
                    },
                    {
                        title: "Cutting-Edge Tools and Technologies for Blockchain Innovation",
                        description:
                            "Our developers leverage advanced blockchain frameworks, smart contract tools, and Web3 technologies — including Solidity, Hardhat, Truffle, and IPFS — to build efficient, future-ready decentralized applications."
                    }
                ]
            },
            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire blockchain developers for my project?",
                        answer:
                            "Hiring expert blockchain developers ensures your application is built on a secure, transparent, and scalable architecture. Our certified developers specialize in building decentralized solutions that enhance trust, efficiency, and innovation across industries."
                    },
                    {
                        question: "What blockchain development services do you offer?",
                        answer:
                            "We offer a wide range of blockchain development services including smart contract development, decentralized app (dApp) creation, DeFi platforms, NFT marketplace development, crypto wallet integration, and blockchain consulting across Ethereum, Polygon, and Hyperledger."
                    },
                    {
                        question: "Can I hire blockchain developers on a flexible basis?",
                        answer:
                            "Yes. You can hire our blockchain experts on full-time, part-time, or hourly models — allowing you to scale your development team based on your project scope, timeline, and budget."
                    },
                    {
                        question: "Do your blockchain developers handle both backend and smart contract development?",
                        answer:
                            "Absolutely. Our developers handle the entire blockchain development lifecycle — from architecture design and smart contract coding to integration, testing, and deployment — ensuring secure and efficient decentralized solutions."
                    },
                    {
                        question: "How do you ensure the security and reliability of blockchain solutions?",
                        answer:
                            "We implement rigorous smart contract audits, encryption protocols, and consensus mechanisms to eliminate vulnerabilities. Our team follows best practices using frameworks like Hardhat, Truffle, and OpenZeppelin for secure blockchain development."
                    },
                    {
                        question: "Which technologies and platforms do your blockchain developers specialize in?",
                        answer:
                            "Our blockchain developers are skilled in Solidity, Rust, Web3.js, Hardhat, Truffle, and IPFS, with expertise across Ethereum, Polygon, Solana, Binance Smart Chain, and Hyperledger — delivering high-performance decentralized solutions."
                    }
                ]
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Blockchain Developers for Your Project?",
                        description:
                            "Hiring professional blockchain developers is crucial for building secure, transparent, and scalable decentralized solutions. Our certified blockchain experts specialize in smart contracts, dApps, DeFi platforms, and NFT marketplaces — ensuring your project leverages the full potential of blockchain technology. Whether you’re creating a new blockchain-based platform or integrating decentralized features into existing systems, our team delivers innovative, efficient, and future-ready blockchain solutions that drive real business value."
                    }
                ]
            },
            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-blockchain-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
    {
        pageId: "hire-wearable-developer",
        sections: [
            {
                sectionId: "hero",
                data: [
                    { src: "/amazon-web.svg", alt: "amazon-web" },
                    { src: "/amazon-1.webp", alt: "amazon" },
                    { src: "/decathlon-logo.svg", alt: "decathlon" },
                    { src: "/dhl-3.svg", alt: "dhl" },
                    { src: "/ebay-logo.svg", alt: "ebay" },
                    { src: "/ecomexpress.svg", alt: "ecomexpress" },
                    { src: "/fbm.webp", alt: "fbm" },
                    { src: "/fba.webp", alt: "fba" },
                    { src: "/fedex.svg", alt: "fedex" },
                    { src: "/fnac.webp", alt: "fnac" },
                    { src: "/paypal.svg", alt: "paypal" },
                    { src: "/paytm.svg", alt: "paytm" },
                ],
            },
            {
                sectionId: "intro",
                data: [
                    {
                        title: "Hire Expert Wearable App Developers to Build Smart, Connected, and User-Centric Solutions",
                        paragraphs: [
                            "Hire professional wearable app developers who create innovative and data-driven applications for smartwatches, fitness trackers, and IoT-enabled wearables. Our experts design seamless, real-time, and high-performance apps that enhance user engagement, health tracking, and productivity across multiple platforms.",
                            "Work with certified wearable developers skilled in Android Wear OS, Apple watchOS, Fitbit OS, and other emerging technologies. From sensor integration and data synchronization to UI/UX design and cross-device compatibility, we ensure your wearable solutions are smart, secure, and future-ready."
                        ],
                        imageSrc: "/hire-wearable-developer-one.webp",
                        imageAlt: "Wearable App Developers",
                        ctaText: "Hire Certified Wearable App Developers"
                    }
                ]
            },

            {
                sectionId: "developerType",
                data: [
                    {
                        icon: Watch,
                        title: "Hire Android Wear OS Developers",
                        description:
                            "Build high-performance wearable apps for Android smartwatches with our experienced Wear OS developers. We create intuitive, responsive, and sensor-integrated apps optimized for seamless user experiences."
                    },
                    {
                        icon: Apple,
                        title: "Hire Apple watchOS Developers",
                        description:
                            "Work with skilled Apple watchOS developers to create innovative apps for Apple Watch. Our experts deliver health, fitness, and productivity apps that integrate smoothly with iOS devices and Apple’s ecosystem."
                    },
                    {
                        icon: ActivityIcon,
                        title: "Hire Fitness & Health App Developers",
                        description:
                            "Partner with developers who specialize in fitness tracking, heart rate monitoring, and activity analytics. We build apps that collect, visualize, and interpret health data in real time."
                    },
                    {
                        icon: Cpu,
                        title: "Hire IoT-Enabled Wearable Developers",
                        description:
                            "Develop smart wearable solutions integrated with IoT systems. Our developers connect devices, sensors, and cloud platforms to provide real-time insights and automated responses."
                    },
                    {
                        icon: Wifi,
                        title: "Hire Bluetooth & Sensor Integration Experts",
                        description:
                            "Hire specialists experienced in Bluetooth Low Energy (BLE), NFC, GPS, and advanced sensor APIs to ensure your wearable devices deliver accurate data and seamless connectivity."
                    },
                    {
                        icon: Smartphone,
                        title: "Hire Cross-Platform Wearable Developers",
                        description:
                            "Get wearable apps that run seamlessly across Android and iOS ecosystems. Our developers use React Native, Flutter, and Kotlin Multiplatform to ensure consistent performance and design."
                    },
                    {
                        icon: Cloud,
                        title: "Hire Cloud & Data Sync Specialists",
                        description:
                            "Ensure smooth data synchronization and storage with experts who integrate wearables with AWS, Azure, and Firebase — enabling real-time tracking, reporting, and analytics."
                    },
                    {
                        icon: BarChart3,
                        title: "Hire Wearable App Data Analysts",
                        description:
                            "Leverage data from wearables with specialists who design dashboards and analytics tools to track performance, trends, and insights for smarter business decisions."
                    },
                    {
                        icon: Shield,
                        title: "Hire Wearable Security & Compliance Experts",
                        description:
                            "Protect sensitive health and user data with developers who ensure compliance with GDPR, HIPAA, and privacy standards through encryption and secure APIs."
                    },
                    {
                        icon: Layers,
                        title: "Hire AR/VR Wearable App Developers",
                        description:
                            "Enhance user experiences with immersive AR and VR integrations for wearables. Our developers create interactive training, gaming, and simulation applications tailored for smart devices."
                    },
                    {
                        icon: Users,
                        title: "Hire Wearable App UI/UX Designers",
                        description:
                            "Work with creative designers who craft intuitive, minimal, and user-friendly interfaces optimized for small wearable screens and smooth navigation."
                    },
                    {
                        icon: Globe,
                        title: "Hire Wearable App Consultants",
                        description:
                            "Get expert consulting on wearable app architecture, platform selection, and performance optimization to bring your smart device vision to life efficiently."
                    }
                ]
            },


            {
                sectionId: "developers",
                data: [
                    {
                        name: "John Doe",
                        experience: "7+",
                        role: "Full Stack Developer",
                        description:
                            "Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.",
                        skills: ["Ruby On Rails", "React", "Node.js"],
                        imageSrc: "/developers/john-doe.jpg",
                        imageAlt: "John Doe",
                    },
                    {
                        name: "Jane Smith",
                        experience: "5+",
                        role: "Data Engineer",
                        description:
                            "Specialized in data engineering solutions, ETL processes, and analytics platforms.",
                        skills: ["Hadoop", "Spark", "Power BI"],
                        imageSrc: "/developers/jane-smith.jpg",
                        imageAlt: "Jane Smith",
                    },
                    {
                        name: "Mark Johnson",
                        experience: "6+",
                        role: "eCommerce Developer",
                        description:
                            "Expert in building Magento, Shopify, and WooCommerce platforms for scalable eCommerce solutions.",
                        skills: ["Magento", "Shopify", "WooCommerce"],
                        imageSrc: "/developers/mark-johnson.jpg",
                        imageAlt: "Mark Johnson",
                    },
                ],
            },
            {
                sectionId: "reasons",
                data: [
                    {
                        title: "Certified Wearable App Developers Delivering Smart, Connected Experiences",
                        description:
                            "Hire experienced wearable app developers who build innovative, high-performance solutions for smartwatches, fitness trackers, and IoT-enabled devices. Our certified experts create seamless, data-driven experiences that enhance user engagement and business efficiency."
                    },
                    {
                        title: "End-to-End Wearable App Development Expertise",
                        description:
                            "From concept and UI/UX design to sensor integration and cloud synchronization, our team provides complete wearable app development services tailored to your platform — including Wear OS, watchOS, and custom embedded systems."
                    },
                    {
                        title: "Seamless Integration with IoT and Smart Devices",
                        description:
                            "Our wearable developers specialize in IoT connectivity and device interoperability. We integrate your wearable solutions with smartphones, healthcare systems, and cloud platforms for real-time data tracking and analytics."
                    },
                    {
                        title: "Custom Wearable Solutions Aligned with Your Business Goals",
                        description:
                            "Whether you're building fitness trackers, healthcare monitoring systems, or enterprise wearables, we design and develop customized apps that align with your brand goals and deliver measurable results."
                    },
                    {
                        title: "Flexible Hiring Models to Match Your Project Needs",
                        description:
                            "Hire wearable app developers on flexible engagement models — hourly, part-time, or full-time. Scale your team based on project scope, budget, and timeline while ensuring consistent quality and performance."
                    },
                    {
                        title: "Expertise in Emerging Technologies and Secure Data Management",
                        description:
                            "Our developers leverage advanced tools and frameworks — including Bluetooth LE, NFC, and real-time cloud APIs — while ensuring compliance with data security standards like HIPAA and GDPR for maximum privacy and reliability."
                    }
                ]
            },

            {
                sectionId: "faqs",
                data: [
                    {
                        question: "Why should I hire wearable app developers for my project?",
                        answer:
                            "Hiring expert wearable app developers ensures your application seamlessly integrates with smart devices while delivering real-time data tracking and exceptional user experiences. Our specialists design secure, high-performance wearable solutions tailored for fitness, healthcare, and enterprise use cases."
                    },
                    {
                        question: "What wearable app development services do you offer?",
                        answer:
                            "We provide end-to-end wearable app development services including smartwatch app design, health and fitness tracking solutions, IoT device integration, Bluetooth and sensor connectivity, real-time analytics, and cloud synchronization for Android and iOS wearables."
                    },
                    {
                        question: "Can I hire wearable developers on a flexible basis?",
                        answer:
                            "Yes. You can hire our wearable app developers on full-time, part-time, or hourly engagement models — allowing you to scale your team and resources according to your project timeline and budget."
                    },
                    {
                        question: "Do your developers handle both app design and hardware integration?",
                        answer:
                            "Absolutely. Our wearable developers specialize in both front-end app design and backend integration with sensors, APIs, and IoT devices. We ensure seamless communication between hardware and software for smooth, data-driven functionality."
                    },
                    {
                        question: "How do you ensure the security and privacy of wearable applications?",
                        answer:
                            "We follow best practices in data encryption, API security, and compliance standards like HIPAA and GDPR. Our team ensures all wearable applications handle sensitive user data securely and maintain high reliability across connected devices."
                    },
                    {
                        question: "Which platforms and technologies do your wearable developers specialize in?",
                        answer:
                            "Our wearable developers are proficient in Wear OS, watchOS, Tizen, Fitbit OS, and Garmin Connect IQ, using technologies such as Flutter, React Native, Swift, Kotlin, and Bluetooth LE for seamless multi-platform app experiences."
                    }
                ]
            },

            {
                sectionId: "faqHeader",
                data: [
                    {
                        title: "Why Hire Wearable App Developers for Your Project?",
                        description:
                            "Hiring professional wearable app developers is essential for creating innovative, user-friendly, and data-driven applications that seamlessly integrate with smart devices. Our certified developers specialize in building wearable solutions for fitness, healthcare, lifestyle, and enterprise applications — ensuring real-time connectivity, secure data handling, and exceptional user experiences. Whether you’re developing smartwatch apps, fitness trackers, or IoT-integrated platforms, our team delivers reliable, high-performance wearable solutions tailored to your business needs."
                    }
                ]
            },

            {
                sectionId: "faqMedia",
                data: [
                    {
                        imageSrc: "/hire-wearable-developer-two.webp",
                        imageAlt: "FAQ Illustration",
                    },
                ],
            },
            {
                sectionId: "stats",
                data: [
                    { value: "20+", label: "Projects Completed" },
                    { value: "15+", label: "Clients Served" },
                    { value: "10+", label: "Professionals" },
                ],
            },
            {
                sectionId: "highlights",
                data: [
                    {
                        icon: Users,
                        title: "Highly Creative & Motivated Teams",
                        description:
                            "Dedicated Team of Expert Developers delivering innovative solutions tailored to your business.",
                    },
                    {
                        icon: Lightbulb,
                        title: "Your Ideas Are Safe With Us",
                        description:
                            "Creative and Innovative Ideas protected with high confidentiality standards.",
                    },
                    {
                        icon: Shield,
                        title: "Quality & Security Adherence",
                        description:
                            "We follow best practices to ensure high-quality, secure, and scalable web applications.",
                    },
                    {
                        icon: Clock,
                        title: "Faster Project Development",
                        description:
                            "Efficient workflows and experienced teams ensure timely delivery of your projects.",
                    },
                ],
            },
            {
                sectionId: "hiringSteps",
                data: [
                    {
                        icon: Search,
                        title: "Requirement Analysis",
                        description:
                            "Share your project requirements, and we will understand your goals and technical needs.",
                    },
                    {
                        icon: Users,
                        title: "Candidate Shortlisting",
                        description:
                            "We identify top Web developers matching your requirements based on skill and experience.",
                    },
                    {
                        icon: UserCheck,
                        title: "Interview & Assessment",
                        description:
                            "Conduct technical interviews or tests to select the best developer for your project.",
                    },
                    {
                        icon: CheckCircle,
                        title: "Onboarding & Start",
                        description:
                            "Once selected, we onboard the developer and start working on your project efficiently.",
                    },
                ],
            },
        ],
    },
];