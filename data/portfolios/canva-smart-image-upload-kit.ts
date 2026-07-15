import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const canvaSmartImageUploadKitData: PortfolioDetailData = {
  title: "Canva Smart Image Upload Kit",
  category: "E-commerce Image Automation",
  industry: "Amazon FBA",
  description:
    "Automates fetching, processing, and rendering of keychain order images into structured Canva grids for Amazon sellers.",
  longDescription:
    "The Canva Smart Image Upload Kit streamlines image processing for Amazon keychain orders by automating data retrieval, image cropping, and grid rendering. It integrates with the Amazon SP-API, filters orders by ASIN, and leverages the Canva UI Kit to deliver visually consistent grid templates, reducing manual effort and ensuring accuracy.",
  image: "/portfolio-banners/canva-smart-image-upload-kit.webp",
  technologies: ["React", "Node.js", "MongoDB", "Canva UI Kit", "Docker"],
  link: "#",
  featured: true,
  stats: {
    views: "20k",
    likes: "2.5k",
    clients: "100+",
    efficiency: "90%",
    accuracy: "98%",
  },
  year: "2025",
  duration: "6 months",
  teamSize: "10",
  budget: "$300k",
  challenges: [
    "Manual processing of keychain order images",
    "Ensuring precise cropping based on buyer placement and mask data",
    "Handling high-volume order retrieval and filtering",
    "Managing storage for large image assets",
    "Maintaining Amazon API compliance and security",
    "Rendering scalable grids for multiple layout types",
  ],
  solutions: [
    "Automated fetching of orders via Amazon SP-API",
    "Accurate image cropping using intersection and mask calculations",
    "ASIN-based filtering to target keychain orders",
    "Automatic folder cleanup after 48 hours to manage storage",
    "Secure access using Regulated Data Tokens",
    "Dynamic grid generation leveraging Canva UI Kit templates",
  ],
  results: [
    "Zero-Touch Image Processing – Fully automated order-to-grid workflow",
    "Error-Free Cropping – Accurate image rendering with buyer placement",
    "Scalable Operations – Handles high-volume keychain orders",
    "Amazon Compliance – Secure and compliant API interactions",
    "Customizable Grids – Flexible layouts for diverse use cases",
  ],
  features: [],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "Code", description: "Dynamic UI framework" },
        { name: "Canva UI Kit", icon: "Code", description: "Grid rendering library" },
        { name: "TypeScript", icon: "Code", description: "Type-safe development" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "Express.js", icon: "Server", description: "Web framework" },
        { name: "MongoDB", icon: "Database", description: "NoSQL database" },
      ],
    },
    {
      category: "APIs & Integration",
      technologies: [
        { name: "Amazon SP-API", icon: "Cloud", description: "Order data retrieval" },
        { name: "Regulated Data Token", icon: "Shield", description: "Secure API access" },
      ],
    },
    {
      category: "DevOps",
      technologies: [
        { name: "Docker", icon: "Package", description: "Containerization" },
        { name: "AWS", icon: "Cloud", description: "Cloud infrastructure" },
      ],
    },
  ],
  hero: {
    badge: "Image Automation Solution",
    badgeIcon: "Zap",
    titleLine1: "Canva Smart Image",
    titleLine2: "Upload Kit",
    heroImage: { src: "/portfolio-banners/canva-smart-image-upload-kit.webp", alt: "Desktop Responsive Image Grid Design" },
    heroStats: [
      { valueKey: "efficiency", label: "Efficiency Gain" },
      { valueKey: "accuracy", label: "Accuracy Rate" },
      { valueKey: "clients", label: "Clients Served" },
    ],
  },
  sections: [
    {
      type: "differentiators",
      title: "Key Differentiators & Client Value",
      items: [
        {
          title: "Zero-Touch Image Processing",
          description: "Fully automated workflow from order fetching to grid generation.",
          icon: "Zap",
        },
        {
          title: "Precise Image Cropping",
          description: "Accurate rendering with buyer placement and mask data.",
          icon: "Package",
        },
        {
          title: "Scalable Operations",
          description: "Handles high-volume keychain orders efficiently.",
          icon: "TrendingUp",
        },
        {
          title: "Amazon Compliance",
          description: "Secure and compliant API interactions with Amazon SP-API.",
          icon: "CheckCircle",
        },
        {
          title: "Customizable Grids",
          description: "Flexible layouts for diverse business needs.",
          icon: "Code",
        },
        {
          title: "Efficient Asset Management",
          description: "Organized storage with automated cleanup.",
          icon: "Database",
        },
      ],
    },
    {
      type: "core-functionality",
      title: "Core Functionality & Intelligence",
      blocks: [
        {
          variant: "list",
          number: 1,
          title: "Automated Order Fetching",
          intro:
            "Seamlessly retrieves keychain orders from Amazon SP-API with intelligent filtering and secure access:",
          items: [
            "Scheduled hourly order fetching via cron jobs",
            "ASIN-based filtering specifically for keychain orders",
            "Secure data access using Regulated Data Tokens",
            "API rate-limiting to ensure compliance and prevent throttling",
          ],
          closing: "Guarantees accurate, timely, and compliant order data retrieval.",
          icon: "Zap",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Dynamic Grid Rendering",
          intro: "",
          groups: [
            {
              title: "Grid Generation",
              items: [
                "Renders images on a 1200x800px canvas for high-resolution output",
                "Configurable spacing, margins, and image heights for flexible layouts",
                "Supports multi-page layouts with automatic page-break handling",
              ],
            },
            {
              title: "User Interaction",
              items: [
                "Preview and adjust grid layouts before final rendering",
                "Automatic download of generated templates for efficiency",
              ],
            },
            {
              title: "Canva UI Kit Integration",
              items: [
                "Ensures consistent, professional, and branded grid rendering",
                "Supports custom layout configurations for different order types",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Image Processing Pipeline",
          intro: "",
          groups: [
            {
              title: "Intersection Calculations",
              items: [
                "Calculates precise cropping coordinates for keychain images",
                "Accounts for buyer placement and mask data to maintain accuracy",
              ],
            },
            {
              title: "Image Cropping & Validation",
              items: [
                "Utilizes Sharp for efficient cropping, rotation, and resizing",
                "Validates image dimensions to prevent processing errors",
              ],
            },
            {
              title: "Scalable Backend Processing",
              items: [
                "Offloads heavy processing to backend services for performance",
                "Supports high-volume image handling for large Amazon orders",
              ],
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Asset Management & Storage",
          intro: "",
          groups: [
            {
              title: "Structured Storage",
              items: [
                "Organizes assets in /public/orderDate/ directories",
                "Extracts ZIP files containing images and JSON metadata",
              ],
            },
            {
              title: "Automated Cleanup",
              items: [
                "Automatically deletes folders older than 48 hours",
                "Optimizes disk space usage for efficient storage",
              ],
            },
            {
              title: "Logging & Monitoring",
              items: [
                "Maintains detailed logs for asset extraction and processing",
                "Tracks errors and system events for debugging and audits",
              ],
            },
          ],
          icon: "Database",
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
          title: "Amazon Fetcher",
          intro: "",
          subsections: [
            {
              title: "Order Retrieval",
              description:
                "Automatically fetches keychain orders from Amazon SP-API on an hourly schedule.",
            },
            {
              title: "Secure Data Access",
              description:
                "Ensures compliance using Regulated Data Tokens for secure API access.",
            },
            {
              title: "ASIN-Based Filtering",
              description:
                "Filters and prioritizes orders by specific ASINs for accuracy and relevance.",
            },
          ],
          icon: "Cloud",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Image Processing Core",
          intro: "",
          subsections: [
            {
              title: "Intersection Calculations",
              description:
                "Computes precise cropping coordinates and rotation points for accurate image placement.",
            },
            {
              title: "Image Cropping",
              description:
                "Utilizes Sharp for fast and efficient cropping, rotation, and validation of image dimensions.",
            },
            {
              title: "Scalable Rendering",
              description:
                "Offloads processing to the backend to handle high-volume image workflows seamlessly.",
            },
          ],
          icon: "Code",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Grid Rendering & Frontend",
          intro: "",
          subsections: [
            {
              title: "Dynamic Grid Generation",
              description:
                "Renders images in responsive, customizable grid layouts leveraging the Canva UI Kit for consistent visual structure.",
            },
            {
              title: "Interactive Preview & Adjustment",
              description:
                "Allows users to preview grids, adjust layouts, and automatically download finalized templates.",
            },
            {
              title: "React-Powered UI",
              description:
                "Built with React for a smooth, responsive, and intuitive user experience.",
            },
          ],
          icon: "Package",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with modern technologies for scalability, performance, and seamless image automation.",
    },
    {
      type: "cta",
      title: "Ready to Automate Your Image Processing?",
      description:
        "Let's discuss how the Canva Smart Image Upload Kit can streamline your Amazon keychain order processing.",
    },
  ],
};
