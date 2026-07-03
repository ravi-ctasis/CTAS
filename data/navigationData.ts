import {
    Users,
    Building,
    Briefcase,
    Star,
    Clock,
    Globe,
    Smartphone,
    Code,
    ShoppingCart,
    Brain,
    Heart,
    AppWindowIcon,
    Workflow,
    ServerCog,
    CreditCard,
    Stethoscope,
    GraduationCap,
    Car,
    Utensils,
    Dumbbell,
    Users as UsersIcon,
    Calendar,
    Home,
    MapPin,
    Gamepad2,
    Wallet,
    Ticket,
    Plane,
    Code2,
    Layers,
    Network,
    TerminalSquare,
    Gem,
    Coffee,
    Wrench,
    SquareCode,
    Atom,
    Hexagon,
    Server,
    Package,
    Boxes,
    Cpu,
    ShoppingBag,
    Store,
    Layout,
    Blocks,
    Rocket,
    Coins,
    Share2,
    BarChart3,
    MessageCircle,
    Bot,
    Search,
    MousePointerClick,
} from "lucide-react";

export const navigationData = {
    company: {
        title: "Company",
        href: "/about-us",
        items: [
            {
                category: "About",
                links: [
                    {
                        icon: Users,
                        name: "About Us",
                        href: "/about-us",
                        description: "Learn about our mission and values",
                    },
                    {
                        icon: Building,
                        name: "Our Team",
                        href: "/team",
                        description: "Meet our expert professionals",
                    },
                    {
                        icon: Briefcase,
                        name: "Careers",
                        href: "/careers",
                        description: "Join our growing team",
                    },
                    {
                        icon: Star,
                        name: "Our Story",
                        href: "/our-story",
                        description: "Discover our journey",
                    },
                ],
            },
            {
                category: "Culture",
                links: [
                    {
                        icon: Clock,
                        name: "How We Work",
                        href: "/how-we-work",
                        description: "Our approach to building products",
                    },
                    {
                        icon: Building,
                        name: "Office Locations",
                        href: "/office-locations",
                        description: "Find us worldwide",
                    },
                    {
                        icon: Building,
                        name: "Life@ctas",
                        href: "/life-at-ctas",
                        description: "Find us worldwide",
                    },
                ],
            },
        ],
        description:
            "Discover who we are, what drives us, and how we're revolutionizing the tech industry with innovative solutions.",
        ctaText: "  Talk to our experts",
        ctaHref: "/contact-us",
    },
    services: {
        title: "Services",
        href: "/services",
        items: [
            {
                category: "Development",
                links: [
                    {
                        icon: Globe,
                        name: "Web Development",
                        href: "/services/web-development",
                        description: "Custom web applications and websites",
                    },
                    {
                        icon: Smartphone,
                        name: "Mobile Apps",
                        href: "/services/mobile-apps",
                        description: "iOS and Android applications",
                    },
                    {
                        icon: Code,
                        name: "Custom Software",
                        href: "/services/custom-software",
                        description: "Tailored software solutions",
                    },
                    {
                        icon: ShoppingCart,
                        name: "E-commerce Solutions",
                        href: "/services/e-commerce-solutions",
                        description: "Online store development",
                    },
                    {
                        icon: Brain,
                        name: "AI/ML Solutions",
                        href: "/services/ai-ml",
                        description: "AI/ML solutions",
                    },
                ],
            },
            {
                category: "Technology",
                links: [
                    {
                        icon: Code,
                        name: "API Development",
                        href: "/services/api-development",
                        description: "Robust backend solutions",
                    },
                    {
                        icon: Building,
                        name: "Cloud Solutions",
                        href: "/services/cloud-solutions",
                        description: "Scalable cloud infrastructure",
                    },
                    {
                        icon: Users,
                        name: "DevOps",
                        href: "/services/devops",
                        description: "Continuous integration and deployment",
                    },
                    {
                        icon: Users,
                        name: "MERN Stack",
                        href: "/services/mern-stack",
                        description: "Full-stack development",
                    },
                    {
                        icon: Users,
                        name: "MEAN Stack",
                        href: "/services/mean-stack",
                        description: "Full-stack development",
                    },
                ],
            },
            {
                category: "Design & UX",
                links: [
                    {
                        icon: Heart,
                        name: "UI/UX Design",
                        href: "/services/ui-ux",
                        description: "User-centered design solutions",
                    },
                    {
                        icon: Star,
                        name: "Brand Identity",
                        href: "/services/complete-design-packages",
                        description: "Complete brand design packages",
                    },
                    {
                        icon: Globe,
                        name: "Web Design",
                        href: "/services/web-design",
                        description: "Modern responsive designs",
                    },
                ],
            },
            {
                category: "e-Commerce & Automation",
                links: [
                    {
                        icon: AppWindowIcon,
                        name: "Amazon SP API Integration",
                        href: "/services/amazon-sp-api-integration",
                        description: "Amazon Selling Partner API integration",
                    },
                    {
                        icon: Workflow,
                        name: "e-Commerce Workflow Automation",
                        href: "/services/ecommerce-workflow-automation",
                        description: "Automate catalog, orders & fulfillment",
                    },
                    {
                        icon: ServerCog,
                        name: "Amazon Services",
                        href: "/services/amazon-services",
                        description: "Complete Amazon marketplace solutions",
                    },
                    {
                        icon: ShoppingCart,
                        name: "Marketplace",
                        href: "/services/marketplace",
                        description: "Multi-platform marketplace integration",
                    },
                ],
            },
        ],
        description:
            "From concept to deployment, we deliver cutting-edge digital solutions that drive business growth and user engagement.",
        ctaText: "  Talk to our experts ",
        ctaHref: "/contact-us",
    },
    industries: {
        title: "Industries",
        href: "/services#industries",
        items: [
            {
                category: "Finance & Business",
                links: [
                    {
                        icon: CreditCard,
                        name: "Banking & Finance",
                        href: "/industries/banking-finance",
                        description: "Secure financial solutions",
                    },
                    {
                        icon: Building,
                        name: "Real Estate",
                        href: "/industries/real-estate",
                        description: "Property management systems",
                    },
                    {
                        icon: Briefcase,
                        name: "Enterprise",
                        href: "/industries/enterprise",
                        description: "Large-scale business solutions",
                    },
                    {
                        icon: ShoppingCart,
                        name: "Retail",
                        href: "/industries/retail",
                        description: "Modern retail platforms",
                    },
                ],
            },
            {
                category: "Healthcare & Education",
                links: [
                    {
                        icon: Stethoscope,
                        name: "Healthcare",
                        href: "/industries/healthcare",
                        description: "HIPAA compliant systems",
                    },
                    {
                        icon: GraduationCap,
                        name: "Education",
                        href: "/industries/education",
                        description: "Learning management systems",
                    },
                    {
                        icon: Heart,
                        name: "Wellness",
                        href: "/industries/wellness",
                        description: "Health and fitness apps",
                    },
                ],
            },
            {
                category: "Lifestyle & Entertainment",
                links: [
                    {
                        icon: Car,
                        name: "Transportation",
                        href: "/industries/transportation",
                        description: "Mobility and logistics solutions",
                    },
                    {
                        icon: Utensils,
                        name: "Food & Beverage",
                        href: "/industries/food-beverage",
                        description: "Restaurant and delivery platforms",
                    },
                ],
            },
        ],
        description:
            "Specialized solutions tailored for diverse industries, leveraging deep domain expertise and cutting-edge technology.",
        ctaText: "  Talk to our experts",
        ctaHref: "/contact-us",
    },
    solutions: {
        title: "Solutions",
        href: "/services#solutions",
        items: [
            {
                category: "On-Demand",
                links: [
                    {
                        icon: Heart,
                        name: "Dating App",
                        href: "/solutions/dating-app",
                        description: "Connect people meaningfully",
                    },
                    {
                        icon: Dumbbell,
                        name: "Fitness App",
                        href: "/solutions/fitness-app",
                        description: "Health and workout tracking",
                    },
                    {
                        icon: Utensils,
                        name: "Food Delivery App",
                        href: "/solutions/food-delivery-app",
                        description: "Restaurant delivery platform",
                    },
                    {
                        icon: ShoppingCart,
                        name: "E-commerce Marketplace",
                        href: "/solutions/e-commerce",
                        description: "Multi-vendor marketplace",
                    },
                    {
                        icon: UsersIcon,
                        name: "Voice/Chat App",
                        href: "/solutions/voice-chat-app",
                        description: "Real-time communication",
                    },
                ],
            },
            {
                category: "Business Solutions",
                links: [
                    {
                        icon: Building,
                        name: "Handyman Services App",
                        href: "/solutions/handyman-services-app",
                        description: "Home service marketplace",
                    },
                    {
                        icon: Calendar,
                        name: "Doctor Appointment App",
                        href: "/solutions/doctor-appointment-app",
                        description: "Healthcare booking system",
                    },
                    {
                        icon: Home,
                        name: "Property Finder App",
                        href: "/solutions/property-finder-app",
                        description: "Real estate discovery",
                    },
                    {
                        icon: MapPin,
                        name: "Parcel/Courier Delivery App",
                        href: "/solutions/parcel-delivery-app",
                        description: "Package tracking system",
                    },
                    {
                        icon: Building,
                        name: "Hotel Booking App",
                        href: "/solutions/hotel-booking-app",
                        description: "Travel accommodation",
                    },
                ],
            },
            {
                category: "Emerging Tech",
                links: [
                    {
                        icon: Car,
                        name: "Taxi Booking App",
                        href: "/solutions/taxi-booking",
                        description: "Ride-hailing platform",
                    },
                    {
                        icon: Gamepad2,
                        name: "Sports Tracking App",
                        href: "/solutions/sports-tracking-app",
                        description: "Sports tracking and social",
                    },
                    {
                        icon: Wallet,
                        name: "Mobile Wallet App",
                        href: "/solutions/mobile-wallet-app",
                        description: "Digital payment solution",
                    },
                    {
                        icon: Ticket,
                        name: "Ticket Booking App",
                        href: "/solutions/ticket-booking-app",
                        description: "Event and travel booking",
                    },
                    {
                        icon: Star,
                        name: "NFT Marketplace Solutions",
                        href: "/solutions/nft-marketplace",
                        description: "Digital asset trading",
                    },
                    {
                        icon: UsersIcon,
                        name: "Influencer Marketing App",
                        href: "/solutions/influencer-marketing-app",
                        description: "Creator collaboration platform",
                    },
                ],
            },
            {
                category: "Other Solutions",
                links: [
                    {
                        icon: Utensils,
                        name: "Restaurant App Solutions",
                        href: "/solutions/restaurant-app",
                        description: "Complete restaurant tech stack",
                    },
                    {
                        icon: Plane,
                        name: "Travel App",
                        href: "/solutions/travel-app",
                        description: "Trip planning and booking",
                    },
                    {
                        icon: Heart,
                        name: "Social Networking App",
                        href: "/solutions/social-networking-app",
                        description: "Community building platform",
                    },
                ],
            },
        ],
        description:
            "Ready-to-launch solutions that accelerate your business growth with proven technology and modern user experiences.",
        ctaText: " Talk to our experts",
        ctaHref: "/contact-us",
    },
    hiredevelopers: {
        title: "Hire Team",
        href: "/services#hire-developers",
        items: [
            {
                category: "Web",
                links: [
                    {
                        icon: Code2,
                        name: "PHP",
                        pageId: "php",
                        description: "Dynamic server-side scripting & web app development",
                    },
                    {
                        icon: Layers,
                        name: "Laravel",
                        pageId: "laravel",
                        description: "Robust and scalable PHP framework for modern web apps",
                    },
                    {
                        icon: Network,
                        name: ".NET",
                        pageId: "aspnet",
                        description: "Enterprise-grade web apps & cloud-based solutions",
                    },
                    {
                        icon: TerminalSquare,
                        name: "Python",
                        pageId: "python",
                        description: "Versatile web development with Django & Flask",
                    },
                    {
                        icon: Gem,
                        name: "Ruby",
                        pageId: "ruby",
                        description: "Elegant and efficient web apps using Ruby on Rails",
                    },
                    {
                        icon: Coffee,
                        name: "Java",
                        pageId: "java",
                        description: "Secure and scalable enterprise web application development",
                    },
                    {
                        icon: Wrench,
                        name: "DevOps",
                        pageId: "devops",
                        description: "Continuous integration, automation & deployment experts",
                    },
                    {
                        icon: SquareCode,
                        name: "Angular",
                        pageId: "angular",
                        description: "Dynamic single-page apps with TypeScript-based architecture",
                    },
                    {
                        icon: Atom,
                        name: "React JS",
                        pageId: "react",
                        description: "Interactive front-end interfaces with React & Next.js",
                    },
                    {
                        icon: Hexagon,
                        name: "Vue JS",
                        pageId: "vue",
                        description: "Lightweight, flexible, and fast progressive web apps",
                    },
                    {
                        icon: Server,
                        name: "Node JS",
                        pageId: "node",
                        description: "High-performance back-end & API development",
                    },
                    {
                        icon: Package,
                        name: "MEAN",
                        pageId: "mean",
                        description:
                            "Full-stack JavaScript solutions with MongoDB, Express, Angular, and Node",
                    },
                    {
                        icon: Boxes,
                        name: "MERN",
                        pageId: "mern",
                        description: "Full-stack web applications using MongoDB, Express, React, and Node",
                    },
                    {
                        icon: Cpu,
                        name: "Blazor",
                        pageId: "blazor",
                        description: "Modern .NET web apps using C# and WebAssembly",
                    },
                ].map((item) => ({ ...item, href: `/hire-team/hire-${item.pageId}-developer` })),
            },
            {
                category: "eCommerce",
                links: [
                    {
                        icon: ShoppingBag,
                        name: "Magento",
                        pageId: "magento",
                        description: "Complete eCommerce web & app solutions",
                    },
                    {
                        icon: Globe,
                        name: "WordPress",
                        pageId: "wordpress",
                        description: "Custom CMS & website solutions",
                    },
                    {
                        icon: Store,
                        name: "Shopify",
                        pageId: "shopify",
                        description: "E-commerce store development solutions",
                    },
                    {
                        icon: Layers,
                        name: "Drupal",
                        pageId: "drupal",
                        description: "Enterprise CMS & digital experience platforms",
                    },
                    {
                        icon: Code2,
                        name: "HTML5",
                        pageId: "html5",
                        description: "Front-end web development & responsive design",
                    },
                    {
                        icon: Layout,
                        name: "Umbraco",
                        pageId: "umbraco",
                        description: "Enterprise CMS & content management solutions",
                    },
                ].map((item) => ({ ...item, href: `/hire-team/hire-${item.pageId}-developer` })),
            },

            {
                category: "Software",
                links: [
                    {
                        icon: Blocks,
                        name: "Smart Contract",
                        pageId: "smartcontract",
                        description: "Blockchain & DApps",
                    },
                    {
                        icon: Network,
                        name: "Ethereum",
                        pageId: "ethereum",
                        description: "Smart contracts & DApps",
                    },
                    {
                        icon: Rocket,
                        name: "ICO",
                        pageId: "ico",
                        description: "Apps for blockchain startups",
                    },
                    {
                        icon: Coins,
                        name: "Cryptocurrency",
                        pageId: "cryptocurrency",
                        description: "Blockchain & wallet solutions",
                    },
                    {
                        icon: Share2,
                        name: "GraphQL",
                        pageId: "graphql",
                        description: "API development & integration",
                    },
                    {
                        icon: BarChart3,
                        name: "PowerBI",
                        pageId: "powerbi",
                        description: "Business analytics & reports",
                    },
                    {
                        icon: MessageCircle,
                        name: "Chatbot",
                        pageId: "chatbot",
                        description: "AI & conversational bots",
                    },
                    {
                        icon: Bot,
                        name: "DialogFlow",
                        pageId: "dialogflow",
                        description: "AI chat & assistant solutions",
                    },
                    {
                        icon: Workflow,
                        name: "RPA",
                        pageId: "rpa",
                        description: "Automation & workflow solutions",
                    },
                    {
                        icon: Brain,
                        name: "TensorFlow",
                        pageId: "tensorflow",
                        description: "Machine learning & AI",
                    },
                    {
                        icon: Globe,
                        name: "Kentico",
                        pageId: "kentico",
                        description: "Enterprise CMS & portals",
                    },
                ].map((item) => ({ ...item, href: `/hire-team/hire-${item.pageId}-developer` })),
            },

            {
                category: "Digital Marketing",
                links: [
                    {
                        icon: Search,
                        name: "SEO",
                        pageId: "seo",
                        description: "SEO, Ads, and strategy experts",
                    },
                    { icon: Share2, name: "SMM", pageId: "smm", description: "Social media marketing" },
                    {
                        icon: MousePointerClick,
                        name: "PPC",
                        pageId: "ppc",
                        description: "Pay-per-click campaign experts",
                    },
                ].map((item) => ({ ...item, href: `/hire-team/hire-${item.pageId}-developer` })),
            },
        ],
        description:
            "Build your team with specialized developers for web, mobile, and emerging technologies.",
        ctaText: "Contact Us",
        ctaHref: "/contact-us",
    },
};

export const hireMenu = [
    {
        name: "Hire Full Stack Developers",
        href: "/hire-team/hire-fullstack-developer",
        pageId: "fullstack",
    },
    {
        name: "Hire Web Developers",
        href: "/hire-team/hire-web-developers",
        pageId: "webdevelopers",
    },
    {
        name: "Hire MERN Stack Developers",
        href: "/hire-team/hire-mern-developer",
        pageId: "mernstack",
    },
    {
        name: "Hire Software Developers",
        href: "/hire-team/hire-software-developer",
        pageId: "software",
    },
    {
        name: "Hire MEAN Stack Developers",
        href: "/hire-team/hire-mean-developer",
        pageId: "meanstack",
    },
    {
        name: "Hire Web App Developers",
        href: "/hire-team/hire-web-app-developer",
        pageId: "webapp",
    },
    { name: "Hire Blazor Developers", href: "/hire-team/hire-blazor-developer", pageId: "blazor" },
    {
        name: "Hire Web Designers",
        href: "/hire-team/hire-webdesign-developer",
        pageId: "webdesign",
    },
    {
        name: "Hire Digital Marketing Experts",
        href: "/hire-team/hire-digital-marketing",
        pageId: "digitalmarketing",
    },
    {
        name: "Hire Blockchain Developer",
        href: "/hire-team/hire-blockchain-developer",
        pageId: "blockchain",
    },
    {
        name: "Hire Wearable App Developers",
        href: "/hire-team/hire-wearable-developer",
        pageId: "wearable",
    },
];
