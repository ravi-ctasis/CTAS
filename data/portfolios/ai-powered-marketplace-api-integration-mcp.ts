import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const aiMarketplaceMcpData: PortfolioDetailData = {
  title: "AI-Powered Enterprise Systems Integration Using Model Context Protocol (MCP)",
  category: "AI Solutions",
  industry: "Enterprise Software",
  description:
    "A next-generation AI architecture utilizing the Model Context Protocol (MCP) to interact directly with any enterprise database or REST API, enabling natural language command execution, data analysis, and system management.",
  longDescription:
    "This scalable AI server architecture leverages the Model Context Protocol (MCP) to bridge the gap between advanced foundation LLMs and secure internal business APIs (CRMs, ERPs, custom software). By using MCP, the AI assistant dynamically discovers and uses registered tools to query proprietary databases, generate reports, and safely trigger system actions via natural language instructions. It features complex prompt security, SQL-injection prevention, LLM context-window token compression, and dual-layer authorization validation hooks for sensitive operations.",
  image: "/mcp-api-integration-img.png",
  technologies: ["Model Context Protocol (MCP)", "LLM Orchestration", "Enterprise REST APIs", "Node.js", "TypeScript"],
  link: "#",
  featured: true,
  stats: {
    queries: "50k+ Daily",
    accuracy: "99.4%",
    response: "<350ms",
    setup: "<15 Min",
    savings: "4.5 Hours/D",
  },
  year: "2026",
  duration: "6 months",
  teamSize: "4 Members",
  budget: "$95k",
  status: "Completed",
  challenges: [
    "Preventing the AI model from making hallucinated or unsafe API calls that could corrupt enterprise records or bypass access barriers.",
    "Translating ambiguous natural language instructions (e.g., 'find the latest system errors and create a summary report') into exact multi-parameter backend queries.",
    "Optimizing payload limits and dynamically caching schema responses to prevent the LLM from exceeding token limits during massive database read operations.",
  ],
  solutions: [
    "Designed and implemented strict json-schema validation layers alongside a dual-authorization manual approval step for destructive/write actions.",
    "Integrated a semantic router powered by fast vector embeddings that precisely maps text intents to exact backend routes and capabilities.",
    "Built a payload compression and token-caching system that cuts request sizing by 65% securely keeping large database tables within prompt windows.",
  ],
  results: [
    "Completed over 50,000 automated query operations daily across multiple enterprise departments with an average response latency of under 350ms.",
    "Lowered data reconciliation and manual report generation times from hours down to near-instant natural language queries.",
    "Decreased AI token billing overheads by 55% via selective payload indexing and context compaction techniques.",
  ],
  features: [
    {
      title: "Universal MCP Server Design",
      description:
        "Standardized protocol server enabling secure, direct interaction between LLMs (Claude, GPT) and any proprietary business system.",
      icon: "Server",
    },
    {
      title: "Natural Language System Ops",
      description:
        "Allows non-technical staff to execute complex procedures, generate analytics, or lookup records simply by asking conversational questions.",
      icon: "MessageSquare",
    },
    {
      title: "Guardrail Security Engine",
      description:
        "Hardcoded security boundaries that enforce schema validations and restrict unauthorized system deletions or mutations.",
      icon: "Shield",
    },
    {
      title: "Real-Time Data Streams",
      description:
        "Flows real-time company performance metrics, logs, and database summaries organically into the conversational interface.",
      icon: "BarChart3",
    },
  ],
  techStack: [
    {
      category: "AI & Protocol Architecture",
      technologies: [
        { name: "Model Context Protocol (MCP)", icon: "Server", description: "Open standard connecting AI models to external data" },
        { name: "LLM Orchestration", icon: "Brain", description: "Dynamic parameter extraction and secure tool execution" },
        { name: "Semantic Routing", icon: "TrendingUp", description: "Vector-based intent detection engine" },
      ],
    },
    {
      category: "Secure API Implementation",
      technologies: [
        { name: "Node.js", icon: "Server", description: "Fast event-driven gateway stack" },
        { name: "TypeScript", icon: "Code", description: "Strictly-typed scalable backend frameworks" },
        { name: "Claude Desktop", icon: "Smartphone", description: "Direct developer client container integration" },
      ],
    },
    {
      category: "Enterprise Systems",
      technologies: [
        { name: "REST/GraphQL APIs", icon: "Cloud", description: "Universal connectors to business systems" },
        { name: "SQL/NoSQL Databases", icon: "Database", description: "Dynamic queries across relational and document stores" },
      ],
    },
  ],
  hero: {
    badge: "AI & System Architecture",
    badgeIcon: "Zap",
    titleLine1: "AI-Powered Enterprise Systems",
    titleLine2: "MCP Server Integration",
    heroImage: {
      src: "/mcp-api-integration-img.png",
      alt: "AI-Powered Enterprise Systems MCP Interface Architecture",
    },
    heroStats: [
      { valueKey: "queries", label: "Daily Queries" },
      { valueKey: "accuracy", label: "Intent Accuracy" },
      { valueKey: "response", label: "Server Latency" },
    ],
    ctaLabel: "Link AI Server",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "Standardized MCP Tool Declarations",
          description:
            "Enables rapid custom tool integration. Connect a new enterprise data module in minutes just by declaring the JSON schema.",
          icon: "Zap",
        },
        {
          title: "Strict Safety & Guardrail Enforcement",
          description:
            "Provides an absolute programmatic floor preventing external LLMs from exposing sensitive data or manipulating core datasets.",
          icon: "Shield",
        },
        {
          title: "Agnostic System Agility",
          description:
            "Compatible with any system, whether it connects to internal CRM data, custom-built ERPs, or public APIs seamlessly.",
          icon: "BarChart3",
        },
      ],
    },
    {
      type: "core-functionality",
      title: "MCP Workflow Pipeline",
      blocks: [
        {
          variant: "list",
          number: 1,
          title: "Prompt Parameter Extraction Layer",
          intro: "Seamless multi-system language processing:",
          items: [
            "Converts conversational queries to normalized JSON parameters",
            "Identifies exact system resources, records, or timelines being queried",
            "Validates prompt integrity to avoid malicious prompt injections",
            "Resolves ambiguous industry acronyms into functional database values",
          ],
          closing: "Turns messy conversational prompts into perfectly formatted API commands.",
          icon: "Code",
        },
        {
          variant: "grouped",
          number: 2,
          title: "Secure Execution Environment",
          intro: "Protected backend execution flow:",
          groups: [
            {
              title: "Tool Scheme Injection",
              items: [
                "Dynamically shares active tool capabilities and limits with the LLM instantly.",
                "Executes tool procedures inside isolated Node.js proxy containers.",
              ],
            },
            {
              title: "Access Control & Validation",
              items: [
                "Requires multi-factor capability pin codes for operations affecting system state.",
                "Encrypts immutable audit logs detailing every query, action, and executed system modification.",
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
        "Leverages cutting-edge Model Context Protocol (MCP) to empower enterprise systems with advanced LLM agents while maintaining rigorous security layers.",
    },
    {
      type: "cta",
      title: "Transform Raw Systems Into Intelligent Agents",
      description:
        "Link your business operations directly with advanced AI models securely via the Model Context Protocol.",
      buttonLabel: "Implement MCP Ecosystem",
    },
  ],
};
