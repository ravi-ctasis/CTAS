import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const ecommercePlatformData: PortfolioDetailData = {
  title: "E-Commerce Platform",
  category: "E-Commerce",
  industry: "Online Retail",
  description:
    "A customer-friendly e-commerce platform designed for speed, scalability, and intelligence, delivering a seamless shopping experience for buyers and sellers.",
  longDescription:
    "E-Commerce Platform is a customer-friendly e-commerce platform designed with the speed, scalability, and intelligence of modern cloud architecture. Built to deliver a smooth shopping experience like Amazon or Flipkart, E-Commerce Platform combines fast search, secure infrastructure, and seller-friendly tools—making it the perfect marketplace for both buyers and sellers.",
  image: "/e-commerce-platform.webp",
  technologies: ["React.js", "Node.js", "MongoDB", "AWS", "S3", "Lambda", "Docker"],
  link: "/portfolios/njour",
  featured: true,
  stats: {
    orders: "100k+",
    searches: "1M+",
    deliveries: "95%",
    satisfaction: "98%",
  },
  year: "2025",
  duration: "9 months",
  teamSize: "10",
  budget: "",
  challenges: [
    "Slow product search with large catalogs",
    "High load and scaling issues",
    "Manual order processing delays",
    "Complex seller onboarding",
    "Stock mismatch and overselling",
    "Courier and delivery tracking issues",
    "Media and catalog management bottlenecks",
  ],
  solutions: [
    "ElasticSearch-powered engine delivers instant results, even with large catalogs.",
    "Cloud-native architecture on AWS + Dockerensures smooth performance under heavy traffic",
    "End-to-end automationfrom checkout → warehouse → delivery speeds up operations",
    "Integrated real-time tracking dashboardwith automated notifications for customers.",
    "Smart warehouse allocationand automated inventory syncprevent overselling.",
    "Dedicated seller dashboard, “Get in Touch” process, and warehouse integration simplify seller operations.",
    "All images on S3, automated Lambda scriptsfor category/catalog updates ensure zero downtime.",
  ],
  results: [
    "Fast Search – Instant product discovery with ElasticSearch",
    "Scalable Performance – Handles high traffic with AWS and Docker",
    "Efficient Order Processing – Automated from checkout to delivery",
    "Simplified Seller Onboarding – Streamlined process for sellers",
    "Accurate Inventory – Prevents overselling with smart allocation",
    "Real-Time Tracking – Transparent order updates for customers",
    "Reliable Media Handling – Fast browsing with S3 and Lambda",
  ],
  features: [
    {
      title: "Fast Product Search",
      description:
        "ElasticSearch-powered search for instant product discovery across large catalogs.",
      icon: "Search",
    },
    {
      title: "Optimized Order Delivery",
      description:
        "Smart warehouse allocation and courier routing for same-day/next-day delivery.",
      icon: "Package",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Live order tracking dashboard with automated notifications via push/email/SMS.",
      icon: "TrendingUp",
    },
    {
      title: "Seller-Friendly Tools",
      description: "Easy onboarding and dashboard for managing stock, prices, and orders.",
      icon: "Users",
    },
    {
      title: "Automated Catalog Management",
      description:
        "Lambda scripts for auto-updated categories and zero-downtime catalog management.",
      icon: "Database",
    },
    {
      title: "Secure Infrastructure",
      description:
        "Cloud-native AWS architecture with S3 for secure media storage and data handling.",
      icon: "Shield",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", icon: "Code", description: "Dynamic UI framework" },
        { name: "Tailwind CSS", icon: "Code", description: "Utility-first styling" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "MongoDB", icon: "Database", description: "NoSQL database" },
      ],
    },
    {
      category: "Cloud & Storage",
      technologies: [
        { name: "AWS", icon: "Cloud", description: "Cloud infrastructure" },
        { name: "S3", icon: "Database", description: "Secure media storage" },
        { name: "Lambda", icon: "Zap", description: "Serverless automation" },
      ],
    },
    {
      category: "Containerization",
      technologies: [
        { name: "Docker", icon: "Package", description: "Containerized deployment" },
      ],
    },
  ],
  hero: {
    badge: "E-Commerce Platform",
    badgeIcon: "Search",
    titleLine1: "E-Commerce",
    titleLine2: "Platform",
    heroImage: { src: "/e-commerce-platform.webp", alt: "E-Commerce Platform" },
    heroStats: [
      { valueKey: "orders", label: "Orders Processed" },
      { valueKey: "searches", label: "Search Queries" },
      { valueKey: "satisfaction", label: "Customer Satisfaction" },
    ],
  },
  sections: [
    {
      type: "advantages",
      title: "Key Differentiators & Client Value",
    },
    {
      type: "core-functionality",
      title: "Core Functionality & Intelligence",
      blocks: [
        {
          variant: "list",
          number: 1,
          title: "Customer Experience",
          intro: "Seamless, intuitive, and fast shopping experience for customers:",
          items: [
            "Clean, lightweight interface inspired by Amazon and Flipkart",
            "ElasticSearch-powered instant product search",
            "Responsive design with smooth navigation across devices",
            "Quick and secure checkout with integrated payment options",
          ],
          closing:
            "Delivers a fast, reliable, and user-friendly shopping experience for all customers.",
          icon: "Search",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Order Management & Delivery",
          intro: "",
          groups: [
            {
              title: "End-to-End Workflow",
              items: [
                "Seamless cart-to-checkout process with integrated payments",
                "Auto-generated picklist and streamlined packing flow",
                "Automated order cancellations and refund handling",
              ],
            },
            {
              title: "Fast & Reliable Delivery",
              items: [
                "Smart warehouse allocation for nearest dispatch",
                "Optimized courier routing for faster delivery",
                "Same-day and next-day delivery options for eligible orders",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Real-Time Tracking & Notifications",
          intro: "",
          groups: [
            {
              title: "Order Tracking",
              items: [
                "Real-time tracking dashboard for all orders",
                "Automated updates from integrated courier services",
                "Transparent tracking to reduce customer inquiries",
              ],
            },
            {
              title: "Notifications",
              items: [
                "Push, email, and SMS notifications at every order stage",
                "Keeps customers informed and engaged throughout the delivery process",
              ],
            },
          ],
          icon: "TrendingUp",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Seller Engagement & Catalog Management",
          intro: "",
          groups: [
            {
              title: "Seller Tools",
              items: [
                "Simplified onboarding through ‘Get in Touch’ process",
                "Seller dashboard to manage inventory, pricing, and orders",
                "Promotions and warehouse deals for enhanced engagement",
              ],
            },
            {
              title: "Catalog Automation",
              items: [
                "Automated category updates using AWS Lambda scripts",
                "Continuous catalog management with zero downtime",
              ],
            },
          ],
          icon: "Users",
        },
      ],
    },
    {
      type: "critical-components",
      title: "Critical System Components",
      blocks: [
        {
          variant: "subsections",
          number: 1,
          title: "Search Engine",
          intro: "",
          subsections: [
            {
              title: "ElasticSearch Integration",
              description:
                "Provides instant product discovery with ElasticSearch-powered search for high-speed performance.",
            },
            {
              title: "Scalable & Efficient",
              description:
                "Optimized for large catalogs, ensuring fast, accurate, and relevant search results across the platform.",
            },
          ],
          icon: "Search",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Order Processing & Delivery",
          intro: "",
          subsections: [
            {
              title: "Automated Workflow",
              description:
                "End-to-end automation from cart to delivery with picklist and packing flow.",
            },
            {
              title: "Optimized Delivery",
              description:
                "Smart warehouse allocation and courier routing for fast delivery.",
            },
          ],
          icon: "Package",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Cloud-Native Architecture",
          intro: "",
          subsections: [
            {
              title: "AWS & S3",
              description:
                "Secure hosting and optimized media storage using AWS services and S3 buckets.",
            },
            {
              title: "Lambda & Docker",
              description:
                "Serverless automation with Lambda and containerized deployment via Docker for high scalability and reliability.",
            },
          ],
          icon: "Cloud",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with modern technologies for scalability, performance, and a seamless shopping experience.",
    },
    {
      type: "cta",
      title: "Ready to Launch Your E-Commerce Platform?",
      description:
        "Let's discuss how E-Commerce Platform can transform your online retail with fast search, reliable delivery, and seller-friendly tools.",
    },
  ],
};
