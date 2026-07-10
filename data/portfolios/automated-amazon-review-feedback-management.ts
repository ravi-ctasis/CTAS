import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const automatedAmazonReviewFeedbackManagementData: PortfolioDetailData = {
  title: "Amazon Review Feedback System",
  category: "E-commerce Automation",
  industry: "Amazon FBA/FBM & Multi-Marketplace",
  description:
    "Automates Amazon customer review requests, enabling sellers to efficiently manage feedback, track responses, and gain insights to enhance customer satisfaction.",
  longDescription:
    "The Review Feedback System automates Amazon customer review requests, enabling sellers to efficiently manage and monitor feedback from their customers. It helps businesses send personalized and timely review requests, track customer responses, and analyze feedback to enhance products and services. The system also allows Amazon sellers to submit their own feedback directly, providing a streamlined way to gather and manage customer opinions and improve overall satisfaction.",
  image: "/portfolio-banners/automated-amazon-review-feedback-management.webp",
  technologies: [
    "Amazon SP API",
    "React.js",
    "NodeJs",
    "MongoDB",
    "Express",
    "JWT",
    "PM2",
  ],
  link: "#",
  featured: true,
  stats: {
    views: "15k",
    likes: "1.8k",
    clients: "80+",
    revenue: "$1.2M+",
    responseRate: "95%",
    reviews: "50k+",
  },
  year: "2025",
  duration: "2 months",
  teamSize: "5",
  budget: "",
  status: "Completed",
  challenges: [
    "Timely Review Requests – Ensuring review requests are sent within the allowed time window.",
    "API Rate Limits – Handling Amazon API restrictions without disruption.",
    "Order Data Volume – Processing and managing large datasets of customer orders.",
    "Feedback Tracking Accuracy – Maintaining precise status updates across thousands of requests.",
    "Seller Credential Security – Protecting sensitive login and authentication data.",
  ],
  solutions: [
    "Automated Scheduling – Cron-based scheduling system ensures timely review requests.",
    "API Compliance – Intelligent throttling and delay logic to respect Amazon rate limits.",
    "Scalable Data Handling – Optimized queries and indexing for high-volume order processing.",
    "Real-Time Tracking – Status flags (Pending, Sent, Completed) ensure accuracy in feedback monitoring.",
    "Secure Authentication – JWT-based credential management for strong data security.",
  ],
  results: [
    "Improved Customer Engagement – Higher review response rates",
    "Scalable Feedback Collection – Handles large order volumes",
    "Accurate Order Tracking – Detailed order status updates",
    "Secure Data Management – Safe handling of seller credentials",
  ],
  features: [
    {
      title: "Orders Management",
      description:
        "View, filter, and manage customer orders with detailed information.",
      icon: "ShoppingCart",
    },
    {
      title: "Search and Filtering",
      description:
        "Search orders by ID, email, or ASIN and filter by date or marketplace.",
      icon: "Search",
    },
    {
      title: "Marketplace Integration",
      description:
        "Supports multiple marketplaces like Amazon US, IN, UK for seamless tracking.",
      icon: "Globe",
    },
    {
      title: "Action Controls",
      description:
        "Manually send review requests and monitor request status.",
      icon: "Settings",
    },
    {
      title: "Credentials Management",
      description:
        "Securely store and manage Amazon seller credentials for API access.",
      icon: "Shield",
    },
    {
      title: "Settings Configuration",
      description:
        "Customize review request rules, marketplace settings, and automation schedules.",
      icon: "Package",
    },
    {
      title: "Automated Review Requests",
      description:
        "Schedule and automate personalized review requests for customers.",
      icon: "MessageSquare",
    },
    {
      title: "Automated Cron Jobs",
      description:
        "Run background jobs for feedback requests with secure API authentication.",
      icon: "Activity",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", icon: "Code", description: "Dynamic UI framework" },
        { name: "TypeScript", icon: "Code", description: "Type-safe development" },
        { name: "Tailwind CSS", icon: "Code", description: "Utility-first styling" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Scalable runtime" },
        { name: "Express.js", icon: "Server", description: "Web framework" },
        { name: "MongoDB", icon: "Database", description: "NoSQL database" },
        { name: "JWT", icon: "Shield", description: "Secure authentication" },
        { name: "PM2", icon: "Activity", description: "Process management" },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "Cloud", description: "Cloud infrastructure" },
        { name: "Docker", icon: "Package", description: "Containerization" },
      ],
    },
    {
      category: "Scheduler Integrations and Reporting",
      technologies: [
        { name: "node-cron", icon: "Calendar", description: "Task scheduling and automation" },
        { name: "morgan", icon: "BarChart3", description: "HTTP request logging and analytics" },
      ],
    },
  ],
  hero: {
    badge: "Customer Feedback Automation",
    badgeIcon: "MessageSquare",
    titleLine1: "Automated Amazon",
    titleLine2: "Review & Feedback Management",
    heroImage: {
      src: "/portfolio-banners/automated-amazon-review-feedback-management.webp",
      alt: "Amazon Review Feedback",
    },
    heroStats: [
      { valueKey: "revenue", label: "Revenue Impact" },
      { valueKey: "responseRate", label: "Response Rate" },
      { valueKey: "reviews", label: "Reviews Collected" },
    ],
    ctaLabel: "Get Free Quote",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "Efficiency & Time-Saving",
          description: "Automates repetitive tasks, reducing manual effort.",
          icon: "MessageSquare",
        },
        {
          title: "Improved Customer Engagement",
          description: "Timely review requests increase response rates.",
          icon: "Users",
        },
        {
          title: "Accurate Order Tracking",
          description: "Detailed order status updates for better monitoring.",
          icon: "ShoppingCart",
        },
        {
          title: "Enhanced Data Management",
          description: "Quick access to orders via filters and search.",
          icon: "Database",
        },
        {
          title: "Security & Compliance",
          description: "Secure credential storage and API compliance.",
          icon: "Shield",
        },
        {
          title: "Scalability",
          description: "Handles large order volumes without manual intervention.",
          icon: "TrendingUp",
        },
        {
          title: "Customizability",
          description: "Flexible settings for tailored review requests.",
          icon: "Settings",
        },
        {
          title: "Auditability",
          description: "Logs feedback requests for traceability and compliance.",
          icon: "Activity",
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
          title: "Orders Management",
          intro:
            "Centralized control over customer orders with smart filtering and tracking:",
          items: [
            "Search, view, and filter all customer orders in one place",
            "Track details like Order ID, buyer info, items, and shipping",
            "Highlight and flag orders eligible for feedback requests",
          ],
          closing:
            "Simplifies order monitoring and ensures timely review follow-ups.",
          icon: "ShoppingCart",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Search & Filtering",
          intro: "",
          groups: [
            {
              title: "Order Search",
              items: [
                "Search by Order ID, buyer email, product name, or ASIN",
                "Get instant, accurate results for faster navigation",
              ],
            },
            {
              title: "Advanced Filters",
              items: [
                "Apply date ranges, marketplace filters, and fulfillment types",
                "Quickly narrow down results with dynamic filtering",
              ],
            },
            {
              title: "",
              items: [
                "Enables fast discovery of specific orders, saving time and boosting efficiency.",
              ],
            },
          ],
          icon: "Search",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Marketplace Integration",
          intro: "",
          groups: [
            {
              title: "Multi-Marketplace Support",
              items: [
                "Integrates with Amazon US, IN, UK, and other regions",
                "Adapts to marketplace-specific rules and data formats",
              ],
            },
            {
              title: "Unified Order Tracking",
              items: [
                "Tracks orders seamlessly across multiple platforms",
                "Ensures consistent and reliable feedback collection",
              ],
            },
            {
              title: "",
              items: [
                "Provides centralized visibility across marketplaces, simplifying global operations.",
              ],
            },
          ],
          icon: "Globe",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Action Controls",
          intro: "",
          groups: [
            {
              title: "Request Management",
              items: [
                "View and manage request status (Pending, Sent)",
                "Manually trigger feedback requests when needed",
              ],
            },
            {
              title: "Status Monitoring",
              items: [
                "Monitor all active requests at a glance",
                "Get real-time updates on request progress",
              ],
            },
            {
              title: "",
              items: [
                "Empowers sellers with full control and visibility over review request actions.",
              ],
            },
          ],
          icon: "Settings",
        },
        {
          variant: "grouped",
          number: 5,
          title: "Credentials Management",
          intro: "",
          groups: [
            {
              title: "Secure Storage",
              items: [
                "Safely stores Client ID, Client Secret, and Seller ID",
                "Uses JWT encryption for authentication and validation",
              ],
            },
            {
              title: "API Access",
              items: [
                "Provides secure access to order fetching and feedback requests",
                "Fully compliant with Amazon SP-API security standards",
              ],
            },
            {
              title: "",
              items: [
                "Ensures sensitive seller credentials are protected while enabling seamless API operations.",
              ],
            },
          ],
          icon: "Shield",
        },
        {
          variant: "grouped",
          number: 6,
          title: "Settings Configuration",
          intro: "",
          groups: [
            {
              title: "Customization",
              items: [
                "Update profile details and marketplace preferences",
                "Define custom rules for order matching and eligibility",
              ],
            },
            {
              title: "Automation Control",
              items: [
                "Enable or disable automated scheduling as needed",
                "Configure review request intervals and timing",
              ],
            },
            {
              title: "",
              items: [
                "Provides flexibility to tailor system behavior, balancing automation with business-specific needs.",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 7,
          title: "Automated Review Requests",
          intro: "",
          groups: [
            {
              title: "Scheduling",
              items: [
                "Configure one-time or recurring review request schedules",
                "Automate follow-ups with intelligent timing",
              ],
            },
            {
              title: "Personalization",
              items: [
                "Send personalized review requests tailored to orders",
                "Improve engagement and increase response rates",
              ],
            },
            {
              title: "Compliance & Efficiency",
              items: [
                "Adheres to Amazon's review request policies",
                "Optimized scheduling to avoid API rate limit issues",
              ],
            },
            {
              title: "",
              items: [
                "Ensures timely, personalized, and policy-compliant review requests that scale with order volume.",
              ],
            },
          ],
          icon: "MessageSquare",
        },
        {
          variant: "grouped",
          number: 8,
          title: "Automated Cron Jobs",
          intro: "",
          groups: [
            {
              title: "Background Automation",
              items: [
                "Sends feedback requests via scheduled jobs",
                "Uses secure API authentication",
              ],
            },
            {
              title: "API Compliance",
              items: [
                "Implements throttling to avoid API limits",
                "Tracks requests with isNeedToSend/isSent flags",
              ],
            },
          ],
          icon: "Activity",
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
          title: "Review Request Automation",
          intro: "",
          subsections: [
            {
              title: "Automated Scheduling",
              description:
                "Automatically schedules review requests and follow-ups to ensure timely engagement.",
            },
            {
              title: "Personalization",
              description:
                "Sends tailored requests for each customer, increasing the likelihood of responses.",
            },
            {
              title: "API Integration",
              description:
                "Securely connects with Amazon SP API to send requests and track statuses in real-time.",
            },
            {
              title: "Compliance & Efficiency",
              description:
                "Ensures adherence to Amazon guidelines while avoiding API rate limit issues.",
            },
          ],
          icon: "MessageSquare",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Order Management Engine",
          intro: "",
          subsections: [
            {
              title: "Order Tracking",
              description:
                "Monitors order details including Order ID, buyer email, items, and shipping methods for complete visibility.",
            },
            {
              title: "Search & Filters",
              description:
                "Quickly locate orders using multiple search criteria and advanced filters such as date ranges and marketplaces.",
            },
            {
              title: "Eligibility Check",
              description:
                "Automatically identifies orders that are eligible for review requests while preventing duplicates or ineligible entries.",
            },
            {
              title: "Compliance & Accuracy",
              description:
                "Ensures all order data is accurate and adheres to marketplace guidelines for smooth feedback management.",
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Feedback Analytics & Reporting",
          intro: "",
          subsections: [
            {
              title: "Insights Generation",
              description:
                "Analyzes customer reviews to uncover actionable insights for product enhancements and service improvements.",
            },
            {
              title: "Reporting Tools",
              description:
                "Generates detailed reports for audits, performance tracking, and strategic decision-making.",
            },
            {
              title: "Data Visualization",
              description:
                "Presents trends, metrics, and review statistics in interactive, easy-to-read dashboards for better understanding.",
            },
            {
              title: "Feedback Trends & Alerts",
              description:
                "Highlights emerging feedback patterns and triggers alerts for critical issues requiring immediate action.",
            },
          ],
          icon: "BarChart3",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability for customer feedback automation.",
    },
    {
      type: "cta",
      title: "Ready to Boost Your Customer Feedback?",
      description:
        "Let's discuss how our Review Feedback System can enhance customer engagement and streamline feedback collection.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
