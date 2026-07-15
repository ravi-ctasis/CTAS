import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const googleSheetsSyncData: PortfolioDetailData = {
  title: "Google Sheets Integration with Direct Marketplace API Synchronization",
  category: "Marketplace Solutions",
  industry: "E-commerce",
  description:
    "An automated synchronization engine connecting Google Sheets directly with marketplace APIs (Amazon SP-API, eBay, etc.) for real-time inventory and pricing management.",
  longDescription:
    "An enterprise-grade solution that connects Google Sheets directly with marketplace APIs, enabling merchants to manage bulk changes (price, stock, details) inside Google Sheets. The synchronization engine monitors sheet edits, validates structural data, and calls Amazon SP-API and other marketplace endpoints with built-in rate-limiting compliance. It handles secure OAuth 2.0 multi-account seller auth, processes updates in queues, and updates sheet status rows upon completion.",
  image: "/portfolio-banners/google-sheets-integration.png",
  technologies: ["Google Sheets API", "Amazon SP-API", "OAuth 2.0", "Node.js", "React", "MongoDB"],
  link: "#",
  featured: true,
  stats: {
    synced: "10M+ Items",
    speed: "<5s Sync",
    sellers: "250+ Active",
    accuracy: "100.0%",
    savings: "25+ Hours/Wk",
  },
  year: "2025",
  duration: "4 months",
  teamSize: "5 Members",
  budget: "$75k",
  status: "Completed",
  challenges: [
    "Handling Google Sheets API write quota limits (100 operations per 100 seconds) and function execution timeouts.",
    "Resolving bidirectional synchronization concurrency conflicts when listings are modified on both the sheet and the marketplace simultaneously.",
    "Formulating a secure OAuth 2.0 credential storage schema that supports multiple independent sellers without cross-access leaks.",
  ],
  solutions: [
    "Implemented a highly optimized task-queue worker in Node.js that batches updates and throttles execution based on API rate limits.",
    "Designed a semantic change-detection system using row-level checksums that avoids sending redundant data updates.",
    "Encrypted marketplace login details and credentials using AWS KMS Key Management and handled automatic OAuth token refresh cycles.",
  ],
  results: [
    "99.98% synchronization success rate without triggering API rate-limit violations.",
    "Over 10 million inventory and catalog items synchronized dynamically.",
    "Reduced manual back-office listing updates by an average of 25+ hours per week per merchant.",
  ],
  features: [
    {
      title: "Real-Time Bidirectional Sync",
      description:
        "Changes applied within Google Sheets propagate to the marketplaces instantly, and external changes reflect back in the sheet.",
      icon: "Zap",
    },
    {
      title: "Multi-Marketplace OAuth Hub",
      description:
        "Allows multiple seller credentials and regional marketplaces (US, EU, JP) to be linked, managed, and authorized securely.",
      icon: "Shield",
    },
    {
      title: "Intelligent Rate-Limiter",
      description:
        "Built-in queue governor that automatically dynamically throttles updates to comply with Amazon SP-API rate limits.",
      icon: "Activity",
    },
    {
      title: "Detailed Audit Logging",
      description:
        "Each cell edit, API payload exchange, and execution status is tracked and logged for seamless troubleshooting.",
      icon: "BarChart3",
    },
  ],
  techStack: [
    {
      category: "Integration & Scripts",
      technologies: [
        { name: "Google Sheets API", icon: "Code", description: "Spreadsheet programmatic access" },
        { name: "Google Apps Script", icon: "Code", description: "Sheet event listeners and triggers" },
        { name: "OAuth 2.0", icon: "Shield", description: "Secure token-based marketplace authentication" },
      ],
    },
    {
      category: "Core Engine Services",
      technologies: [
        { name: "Node.js", icon: "Server", description: "High-performance synchronization backend" },
        { name: "TypeScript", icon: "Code", description: "Strongly typed secure application logic" },
        { name: "MongoDB", icon: "Database", description: "Metadata and sync state configuration store" },
        { name: "Redis", icon: "Activity", description: "Real-time task queuing and lock management" },
      ],
    },
    {
      category: "APIs & Ecosystem",
      technologies: [
        { name: "Amazon SP-API", icon: "Cloud", description: "Direct Selling Partner REST API endpoints" },
        { name: "eBay REST API", icon: "Cloud", description: "eBay developer integration portal" },
      ],
    },
  ],
  hero: {
    badge: "API Integration & Automation",
    badgeIcon: "Zap",
    titleLine1: "Google Sheets Marketplace",
    titleLine2: "API Synchronization",
    heroImage: {
      src: "/portfolio-banners/google-sheets-integration.png",
      alt: "Google Sheets Integration Dashboard Interface",
    },
    heroStats: [
      { valueKey: "synced", label: "Items Synced" },
      { valueKey: "speed", label: "Sync Latency" },
      { valueKey: "accuracy", label: "Sync Accuracy" },
    ],
    ctaLabel: "Connect Marketplace",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "Zero Delay Bidirectional Sync",
          description:
            "Propagates pricing and stock data back-and-forth between sheets and active channels in seconds, removing manual import/export steps.",
          icon: "Zap",
        },
        {
          title: "Enterprise Grade Credentials Encryption",
          description:
            "Uses industry-standard AES-256-GCM encryption with AWS KMS management to protect seller tokens and keys.",
          icon: "Shield",
        },
        {
          title: "Automatic Conflict Resolution",
          description:
            "Monitors timestamp mismatches and automatically highlights merge conflicts on the sheet with visual comments.",
          icon: "BarChart3",
        },
      ],
    },
    {
      type: "core-functionality",
      title: "Dynamic Synchronization Workflow",
      blocks: [
        {
          variant: "list",
          number: 1,
          title: "Sheet Listener and Script Automation",
          intro: "Seamless background event triggers:",
          items: [
            "OnEdit triggers catch cell updates in real-time",
            "Automatic data serialization into JSON structures",
            "Color-coded execution status cells (Queued, Syncing, Success, Error)",
            "Self-healing trigger recovery on network failure",
          ],
          closing: "Ensures spreadsheet changes are queued up automatically.",
          icon: "Code",
        },
        {
          variant: "grouped",
          number: 2,
          title: "API Gateway Sync Engine",
          intro: "Robust backend message handling:",
          groups: [
            {
              title: "Queue Management & Throttling",
              items: [
                "Dynamically respects Amazon SP-API and eBay rate limits.",
                "Executes retry loops with exponential backoff on server throttle codes (HTTP 429).",
              ],
            },
            {
              title: "Authentication Token Lifecycle",
              items: [
                "Decrypts seller tokens in-memory using HSM-based encryption keys.",
                "Automates refresh token exchange before access token expiration.",
              ],
            },
          ],
          icon: "Server",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with secure, cloud-scale components that bridge the responsiveness of spreadsheets with high-volume marketplace REST APIs.",
    },
    {
      type: "cta",
      title: "Direct Sheet-to-Marketplace Automation",
      description:
        "Connect your inventory spreadsheets directly with your selling accounts and remove manual uploads forever.",
      buttonLabel: "Unlock Sheet Sync",
    },
  ],
};
