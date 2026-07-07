"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Code,
  Database,
  Users,
  Award,
  BarChart,
  Layers,
  Network,
  Braces,
  Zap,
  Shield,
  Clock,
  Globe,
  Coffee,
  Rocket,
  Search,
  TrendingUp,
  Headphones,
  FileText,
  Activity,
  Lock,
  Target,
} from "lucide-react";

const apiTypes = [
  {
    title: "REST API Development",
    description:
      "Standard RESTful APIs for web and mobile applications with comprehensive documentation",
    icon: Globe,
    features: [
      "HTTP/HTTPS protocols",
      "JSON/XML responses",
      "CRUD operations",
      "Authentication & Authorization",
      "Rate limiting",
      "API documentation",
    ],
    pills: ["Web Applications", "Mobile Apps", "Third-party Integrations", "Microservices"],
    tags: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "GraphQL API Development",
    description:
      "Modern query language for flexible data fetching with type safety and real-time subscriptions",
    icon: Network,
    features: [
      "Single endpoint",
      "Type-safe queries",
      "Real-time subscriptions",
      "Introspection",
      "Schema validation",
      "Performance optimization",
    ],
    pills: ["React Applications", "Mobile Apps", "Real-time Systems", "Data Analytics"],
    tags: [
      "Apollo Server",
      "GraphQL Yoga",
      "Prisma",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "WebSocket",
    ],
  },
  {
    title: "Microservices Architecture",
    description: "Scalable architecture with independent services for large-scale applications",
    icon: Layers,
    features: [
      "Service isolation",
      "Load balancing",
      "Service discovery",
      "Circuit breakers",
      "Distributed tracing",
      "Container orchestration",
    ],
    pills: ["Enterprise Systems", "Cloud Platforms", "Distributed Systems", "Scalable Applications"],
    tags: [
      "Docker",
      "Kubernetes",
      "gRPC",
      "RabbitMQ",
      "Apache Kafka",
      "Consul",
      "Istio",
      "Prometheus",
    ],
  },
  {
    title: "Real-time API Development",
    description:
      "WebSocket and Server-Sent Events for live data streaming and real-time communication",
    icon: Zap,
    features: [
      "WebSocket connections",
      "Server-Sent Events",
      "Real-time messaging",
      "Live notifications",
      "Collaborative features",
      "Low latency",
    ],
    pills: ["Chat Applications", "Gaming Platforms", "Live Streaming", "Collaborative Tools"],
    tags: [
      "Socket.io",
      "WebRTC",
      "SignalR",
      "Redis",
      "Apache Kafka",
      "RabbitMQ",
      "Node.js",
      "WebSocket",
    ],
  },
  {
    title: "API Integration Services",
    description: "Third-party API integration and management for seamless data exchange",
    icon: Network,
    features: [
      "Third-party API integration",
      "Data synchronization",
      "Error handling",
      "Webhook setup",
      "API monitoring",
      "Documentation",
    ],
    pills: ["E-commerce Platforms", "Payment Systems", "Social Media", "Analytics Tools"],
    tags: [
      "REST APIs",
      "GraphQL",
      "Webhooks",
      "OAuth",
      "JWT",
      "Rate Limiting",
      "API Gateway",
      "Monitoring Tools",
    ],
  },
  {
    title: "API Security & Compliance",
    description: "Enterprise-grade security implementation and compliance management",
    icon: Shield,
    features: [
      "Authentication & Authorization",
      "Data encryption",
      "API rate limiting",
      "Security monitoring",
      "Compliance management",
      "Audit logging",
    ],
    pills: ["Enterprise Systems", "Financial Services", "Healthcare", "Government"],
    tags: [
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "HTTPS",
      "API Keys",
      "Rate Limiting",
      "Security Headers",
      "Audit Logs",
    ],
  },
];

const techCategories = [
  {
    title: "Backend Technologies",
    description: "Server-side development frameworks and technologies",
    icon: Code,
    technologies: [
      { name: "Node.js", icon: Braces, level: "Expert" },
      { name: "Python", icon: Code, level: "Expert" },
      { name: "Java", icon: Coffee, level: "Expert" },
      { name: "Express.js", icon: Network, level: "Expert" },
      { name: "Django", icon: Code, level: "Expert" },
      { name: "Spring Boot", icon: Coffee, level: "Advanced" },
      { name: "FastAPI", icon: Code, level: "Expert" },
      { name: "NestJS", icon: Braces, level: "Advanced" },
      { name: "Go", icon: Code, level: "Advanced" },
      { name: "PHP", icon: Code, level: "Advanced" },
    ],
  },
  {
    title: "Database Technologies",
    description: "Database management systems and data storage solutions",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", icon: Database, level: "Expert" },
      { name: "MongoDB", icon: Database, level: "Expert" },
      { name: "MySQL", icon: Database, level: "Expert" },
      { name: "Redis", icon: Database, level: "Expert" },
      { name: "Elasticsearch", icon: Database, level: "Advanced" },
      { name: "Cassandra", icon: Database, level: "Advanced" },
      { name: "DynamoDB", icon: Database, level: "Advanced" },
      { name: "Firebase", icon: Database, level: "Expert" },
      { name: "Supabase", icon: Database, level: "Advanced" },
      { name: "Neo4j", icon: Database, level: "Intermediate" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "API Planning & Design",
    description: "Understanding requirements and designing API architecture with best practices",
    icon: Search,
  },
  {
    step: "02",
    title: "Database Design",
    description: "Creating efficient database schemas and data models",
    icon: Database,
  },
  {
    step: "03",
    title: "API Development",
    description: "Building robust APIs with proper authentication and error handling",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & Security",
    description: "Comprehensive testing and security measures for robust APIs",
    icon: Shield,
  },
  {
    step: "05",
    title: "Deployment & Monitoring",
    description: "Deploying APIs to production and maintaining optimal performance",
    icon: Rocket,
  },
];

const keyFeatures = [
  {
    title: "High Performance",
    description: "Optimized APIs with caching and load balancing",
    icon: Zap,
  },
  {
    title: "Security First",
    description: "Enterprise-grade security and authentication",
    icon: Shield,
  },
  {
    title: "Scalable Architecture",
    description: "Horizontal scaling and microservices design",
    icon: Layers,
  },
  {
    title: "Real-time Analytics",
    description: "Live monitoring and performance insights",
    icon: Activity,
  },
  {
    title: "API Documentation",
    description: "Comprehensive documentation and testing tools",
    icon: FileText,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and maintenance",
    icon: Headphones,
  },
];

const benefits = [
  {
    title: "Faster Development",
    description:
      "Well-designed APIs accelerate frontend development and reduce time-to-market for your applications",
    icon: Rocket,
  },
  {
    title: "Better Integration",
    description:
      "Seamless integration with third-party services and existing systems for enhanced functionality",
    icon: Network,
  },
  {
    title: "Enhanced Security",
    description:
      "Robust security measures protect your data and ensure compliance with industry standards",
    icon: Lock,
  },
  {
    title: "Scalability",
    description:
      "APIs that grow with your business, handling increased load and user demands efficiently",
    icon: TrendingUp,
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce development costs and maintenance overhead with well-architected API solutions",
    icon: BarChart,
  },
  {
    title: "Future-Proof",
    description:
      "Modern API architecture ensures your solutions remain relevant and adaptable to future needs",
    icon: Target,
  },
];

const topicalGuideTabs = [
  {
    id: "planning",
    title: "API Planning & Design",
    content:
      "Essential steps to plan and design robust APIs that meet your business requirements",
    points: [
      "Define API requirements and endpoints",
      "Design data models and schemas",
      "Plan authentication and authorization",
      "Create API documentation structure",
      "Design error handling and responses",
      "Plan for scalability and performance",
    ],
  },
  {
    id: "development",
    title: "API Development",
    content: "The technical development process from coding to deployment",
    points: [
      "Set up development environment and tools",
      "Implement core API endpoints",
      "Add authentication and security",
      "Implement error handling and validation",
      "Create comprehensive tests",
      "Optimize performance and caching",
    ],
  },
  {
    id: "testing",
    title: "API Testing & Security",
    content: "Comprehensive testing and security measures for robust APIs",
    points: [
      "Perform unit and integration testing",
      "Conduct security vulnerability testing",
      "Test performance and load capacity",
      "Validate authentication and authorization",
      "Test error handling and edge cases",
      "Implement monitoring and logging",
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Monitoring",
    content: "Deploying APIs to production and maintaining optimal performance",
    points: [
      "Deploy to cloud platforms or on-premise",
      "Set up monitoring and alerting",
      "Implement logging and analytics",
      "Configure backup and disaster recovery",
      "Set up CI/CD pipelines",
      "Plan for maintenance and updates",
    ],
  },
];

export default function APIDevelopmentPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "API Development Services",
        hero: {
          badge: "API Development Services",
          title: "Enterprise",
          highlight: "API Development",
          description:
            "We design and develop scalable, secure, and high-performance APIs that seamlessly connect and power your applications. From REST to GraphQL, we deliver enterprise-grade backend solutions tailored to your business needs.",
          stats: [
            { number: "100+", label: "APIs Developed", icon: Code },
            { number: "99.9%", label: "Uptime", icon: Users },
            { number: "5+", label: "Years Experience", icon: Award },
            { number: "24/7", label: "Support", icon: Clock },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            header: {
              badge: "API Types",
              title: "Enterprise",
              highlight: "API Solutions",
              description:
                "From REST and GraphQL to microservices and real-time APIs, we build backend solutions tailored to your business needs.",
            },
            items: apiTypes,
            columns: 3,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "Modern",
              highlight: "Tech Stack",
              description:
                "We use cutting-edge technologies organized by development layers to build robust and scalable API solutions.",
            },
            categories: techCategories,
          },
          {
            type: "process",
            header: {
              badge: "Our Process",
              title: "API Development",
              highlight: "Process",
              description:
                "Our proven development process ensures quality, transparency, and timely delivery of robust API solutions.",
            },
            steps: process,
          },
          {
            type: "benefits",
            header: {
              badge: "Why Choose Us",
              title: "Key",
              highlight: "Features",
              description:
                "We deliver exceptional API solutions with cutting-edge features and technologies.",
            },
            items: keyFeatures,
          },
          {
            type: "benefits",
            header: {
              badge: "Why Choose API Development?",
              title: "Benefits of",
              highlight: "Professional API Development",
              description:
                "Unlock new opportunities with expertly built APIs that streamline operations, enhance connectivity, and accelerate business growth.",
            },
            items: benefits,
          },
          {
            type: "tabs",
            header: {
              badge: "Complete Guide",
              title: "Topical Guide for",
              highlight: "API Development",
              description:
                "Everything you need to know about API development, from planning to deployment.",
            },
            tabs: topicalGuideTabs,
            defaultTab: "planning",
          },
        ],
        cta: {
          title: "Ready to Build Your API Solution?",
          description:
            "Let's discuss your API requirements and create a robust backend solution that scales with your business.",
          primaryLabel: "Get Started Today",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
