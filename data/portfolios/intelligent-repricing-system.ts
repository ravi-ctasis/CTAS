import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const intelligentRepricingSystemData: PortfolioDetailData = {
  title: "Intelligent Repricing System for E-Commerce Growth",
  category: "E-commerce Automation",
  industry: "Amazon FBA/FBM",
  description:
    "An intelligent repricing engine that optimizes prices across millions of SKUs in real-time, ensuring competitiveness and profitability on marketplaces like Amazon.",
  longDescription:
    "E-commerce is more competitive than ever. Marketplaces like Amazon, Cdiscount, and others change dynamically every second—where even a few cents difference can decide who wins the Buy Box. Managing millions of SKUs manually is impossible. Monitoring competitors, applying business rules, calculating margins, and updating prices across multiple platforms requires a scalable, automated solution. Our repricing system is an intelligent engine that continuously optimizes prices across large-scale inventories while protecting profitability.",
  image: "/portfolio-banners/intelligent-repricing-system.webp",
  technologies: ["Amazon SP API & Business API", "Angular", "NodeJs", "MongoDB", "Docker"],
  link: "#",
  featured: true,
  stats: {
    views: "25k",
    likes: "3k",
    clients: "150+",
    revenue: "$2.5M+",
    efficiency: "95%",
    buyBox: "95%",
  },
  year: "2025",
  duration: "8 months",
  teamSize: "12",
  budget: "$400k",
  challenges: [
    "Rapid competitor price fluctuations requiring constant monitoring",
    "Handling massive volumes of SKUs and pricing data efficiently",
    "Ensuring low-latency updates and maintaining data freshness",
    "Balancing large-scale automation with profitability protection",
  ],
  solutions: [
    "High-frequency repricing cycles with intelligent throttling mechanisms",
    "Optimized bulk write-backs, efficient database queries, and batch updates",
    "Prioritization pipelines for high-value SKUs and fast processing",
    "Consistent application of margin-protected rules across all SKUs",
  ],
  results: [
    "Enterprise-Scale Performance – Handles millions of inventory updates",
    "More Buy Boxes Won – Real-time price optimization",
    "Boosted Sales Velocity – Faster inventory movement",
    "Margin Protection – Prevents loss-making prices",
  ],
  features: [
    {
      title: "Fetch Competitor Data",
      description:
        "Retrieves competitor pricing and stock from marketplace APIs, handling massive data sets for quick analysis.",
      icon: "Zap",
    },
    {
      title: "Analyze & Apply Business Rules",
      description:
        "Applies strategies like margin thresholds and competitor positioning, scaling from a few SKUs to millions.",
      icon: "Package",
    },
    {
      title: "Check Stock & Eligibility",
      description:
        "Updates quantities to zero for out-of-stock or ineligible items, preventing listing errors.",
      icon: "ShoppingCart",
    },
    {
      title: "Calculate New Price",
      description:
        "Generates optimized prices balancing competitiveness and profitability, efficient for millions of rows.",
      icon: "Search",
    },
    {
      title: "Append Price History",
      description:
        "Logs every price change for trend analysis and compliance audits, enabling strategic insights.",
      icon: "Truck",
    },
    {
      title: "Bulk Write Back",
      description: "Updates tbl_amazon_in_inventories in batches of 1,000 for speed and reliability.",
      icon: "Shield",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "Angular", icon: "Code", description: "Dynamic UI framework" },
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
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "Cloud", description: "Cloud infrastructure" },
        { name: "Docker", icon: "Package", description: "Containerization" },
        { name: "Kubernetes", icon: "Settings", description: "Orchestration" },
      ],
    },
    {
      category: "Data & Analytics",
      technologies: [
        { name: "Elasticsearch", icon: "Search", description: "Search engine" },
        { name: "RabbitMQ", icon: "Activity", description: "Message broker" },
      ],
    },
  ],
  hero: {
    badge: "E-commerce Repricing Solution",
    badgeIcon: "Zap",
    titleLine1: "Intelligent Repricing",
    titleLine2: "Engine for Multi-Marketplace Growth",
    heroImage: { src: "/portfolio-banners/intelligent-repricing-system.webp", alt: "Amazon Review Feedback" },
    heroStats: [
      { valueKey: "revenue", label: "Revenue Generated" },
      { valueKey: "efficiency", label: "Efficiency Gain" },
      { valueKey: "buyBox", label: "Buy Box Wins" },
    ],
  },
  sections: [
    {
      type: "differentiators",
      title: "Key Differentiators & Client Value",
      items: [
        {
          title: "Enterprise-Scale Performance",
          description: "Handles millions of inventory updates without slowing down.",
          icon: "Zap",
        },
        {
          title: "More Buy Boxes Won",
          description: "Outperforms competitors with real-time price optimization.",
          icon: "Package",
        },
        {
          title: "Boosted Sales Velocity",
          description: "Moves inventory faster while staying competitive.",
          icon: "Truck",
        },
        {
          title: "Margin Protection",
          description: "Custom rules prevent loss-making prices.",
          icon: "CheckCircle",
        },
        {
          title: "Full Automation",
          description: "From data fetching to bulk updates, no manual work needed.",
          icon: "Shield",
        },
        {
          title: "Data-Driven Insights",
          description: "Price history logs enable strategic intelligence.",
          icon: "TrendingUp",
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
          title: "Fetch Competitor Data",
          intro:
            "Continuously retrieves competitor pricing and stock data from marketplace APIs for actionable insights:",
          items: [
            "Connects seamlessly to Amazon SP API and Business API",
            "Handles large-scale datasets for rapid analysis",
            "Cleans, structures, and prioritizes data efficiently",
            "Supports multiple marketplaces including Cdiscount and others",
          ],
          closing: "Provides real-time competitor insights to enable precise and dynamic repricing.",
          icon: "Zap",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Analyze & Apply Business Rules",
          intro: "",
          groups: [
            {
              title: "Pricing Strategies",
              items: [
                "Applies margin thresholds, shipping costs, and marketplace fees",
                "Considers competitor positioning and Buy Box dynamics",
                "Scales pricing decisions from a few to millions of SKUs",
              ],
            },
            {
              title: "Customizable Rules",
              items: [
                "User-defined pricing strategies tailored to business needs",
                "Ensures consistent application across multiple marketplaces",
              ],
            },
          ],
          icon: "Package",
        },
        {
          variant: "grouped",
          number: 3,
          title: "Check Stock & Eligibility",
          intro: "",
          groups: [
            {
              title: "Inventory Validation",
              items: [
                "Automatically sets quantity to zero for out-of-stock SKUs",
                "Flags ineligible products to prevent listing errors",
              ],
            },
            {
              title: "Compliance & Accuracy",
              items: [
                "Ensures compliance with marketplace rules and policies",
                "Maintains accurate representation of inventory across platforms",
              ],
            },
          ],
          icon: "ShoppingCart",
        },
        {
          variant: "grouped",
          number: 4,
          title: "Calculate New Price",
          intro: "",
          groups: [
            {
              title: "Optimized Pricing",
              items: [
                "Continuously balances competitiveness and profitability",
                "Efficiently calculates optimal prices for millions of SKUs",
              ],
            },
            {
              title: "Performance & Scalability",
              items: [
                "Prevents performance bottlenecks during repricing cycles",
                "Supports real-time price adjustments across multiple marketplaces",
              ],
            },
          ],
          icon: "Search",
        },
        {
          variant: "grouped",
          number: 5,
          title: "Append Price History",
          intro: "",
          groups: [
            {
              title: "Trend Analysis",
              items: [
                "Logs every price change for actionable insights",
                "Enables forecasting and strategy refinement for future repricing",
              ],
            },
            {
              title: "Compliance & Audit",
              items: [
                "Maintains audit-ready historical records",
                "Supports compliance with marketplace rules and regulations",
              ],
            },
          ],
          icon: "Truck",
        },
        {
          variant: "grouped",
          number: 6,
          title: "Bulk Write Back",
          intro: "",
          groups: [
            {
              title: "Batch Updates",
              items: [
                "Updates thousands of records per batch efficiently",
                "Optimized for speed, reliability, and minimal downtime",
              ],
            },
            {
              title: "Scalability",
              items: [
                "Handles millions of updates per cycle without performance degradation",
                "Ensures database integrity and stability at scale",
              ],
            },
          ],
          icon: "Shield",
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
          title: "Repricing Engine",
          intro: "",
          subsections: [
            {
              title: "Competitor Data Fetching",
              description:
                "Retrieves real-time competitor pricing and stock data through APIs for accurate decision-making.",
            },
            {
              title: "Price Optimization",
              description:
                "Calculates optimal prices balancing competitiveness and profitability with margin safeguards.",
            },
            {
              title: "High-Frequency Cycles",
              description:
                "Executes frequent repricing cycles with intelligent throttling to respond to market volatility.",
            },
          ],
          icon: "Zap",
        },
        {
          variant: "subsections",
          number: 2,
          title: "Data Processing Core",
          intro: "",
          subsections: [
            {
              title: "Batch Processing",
              description:
                "Processes millions of SKUs efficiently using optimized database queries for speed and reliability.",
            },
            {
              title: "Data Cleaning & Structuring",
              description:
                "Normalizes and structures large datasets to enable fast, accurate analysis.",
            },
            {
              title: "Scalability",
              description:
                "Designed to support high-volume operations without performance bottlenecks.",
            },
          ],
          icon: "Package",
        },
        {
          variant: "subsections",
          number: 3,
          title: "Compliance & Logging Layer",
          intro: "",
          subsections: [
            {
              title: "Price History Logging",
              description:
                "Captures all price changes for audit trails, trend analysis, and business insights.",
            },
            {
              title: "Marketplace Compliance",
              description:
                "Ensures all repricing actions follow Amazon and other marketplace rules, avoiding penalties.",
            },
            {
              title: "Data-Driven Insights",
              description:
                "Provides actionable insights to refine pricing strategies and forecast trends effectively.",
            },
          ],
          icon: "Shield",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability for e-commerce repricing.",
    },
    {
      type: "cta",
      title: "Ready to Optimize Your E-Commerce Pricing?",
      description:
        "Let's discuss how our intelligent repricing system can boost your Buy Box wins and profitability.",
    },
  ],
};
