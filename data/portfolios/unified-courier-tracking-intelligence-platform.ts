import type { PortfolioDetailData } from "@/types/portfolio-detail";

export const unifiedCourierTrackingIntelligencePlatformData: PortfolioDetailData = {
  title: "Unified Courier Tracking & Intelligence Platform",
  category: "Marketplace Solutions",
  industry: "E-commerce",
  description:
    "A unified platform for tracking and managing courier operations efficiently across multiple partners.",
  longDescription:
    "Businesses often work with multiple courier services—DHL, FedEx, UPS, BlueDart, Delhivery, and others. Managing shipments across separate portals is time-consuming, prone to errors, and delays customer satisfaction. This platform centralizes all courier tracking into a single dashboard, providing real-time updates, automated notifications, and streamlined delivery management for improved operational efficiency.",
  image: "/courier-tracking-simple-compose.webp",
  technologies: [
    "Node.js",
    "React",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Elasticsearch",
    "RabbitMQ",
  ],
  link: "#",
  featured: true,
  stats: {
    views: "20k",
    likes: "2.5k",
    clients: "200+",
    revenue: "$1.8M+",
    efficiency: "90%",
    accuracy: "98.5%",
  },
  year: "2024",
  duration: "10 months",
  teamSize: "15",
  budget: "$350k",
  status: "Completed",
  challenges: [
    "Multiple Courier Portal Management - Operations teams struggled with managing 10+ different courier portals, leading to inefficiency and errors",
    "Lack of Real-time Visibility - No centralized view of shipment status across different courier services, making it difficult to track performance",
    "Manual Exception Handling - Delayed notifications and manual intervention required for delivery exceptions and customer issues",
    "Inconsistent Data Sources - Different data formats and update frequencies from various courier APIs created integration challenges",
    "Limited Performance Analytics - No way to compare courier performance or optimize selection based on historical data",
    "Scalability for Growing Operations - Manual processes couldn't scale with increasing shipment volumes",
  ],
  solutions: [
    "Unified Courier Integration Layer - Connects multiple courier APIs into one consolidated data source with standardized formats",
    "Real-time Tracking Engine - Processes live status updates from all couriers and provides instant visibility through WebSocket connections",
    "AI-Powered Predictive Analytics - Machine learning algorithms forecast delivery times, identify potential delays, and suggest optimization strategies",
    "Automated Exception Management - Intelligent alert system that flags delays, failed deliveries, and risks with automated notifications",
    "Performance Analytics & Reports - Generate performance reports by courier, zone, or delivery time for data-driven decisions",
    "Scalable SaaS Architecture - Flexible, scalable platform that grows with your business needs",
  ],
  results: [
    "50% Reduction in Manual Work - Automated tracking and exception handling significantly reduced manual intervention requirements",
    "99.2% Delivery Accuracy - AI-powered predictions and proactive issue detection improved overall delivery success rates",
    "30% Cost Optimization - Data-driven courier selection and route optimization reduced logistics costs significantly",
    "Real-time Customer Updates - Instant notifications and accurate tracking improved customer satisfaction and trust",
    "Centralized Visibility - All courier services in one dashboard, eliminating the need to juggle multiple portals",
  ],
  features: [
    {
      title: "All Couriers in One Place",
      description: "Centralized visibility across all courier carriers with unified tracking interface.",
      icon: "BarChart3",
    },
    {
      title: "AI-Powered Predictions",
      description: "Smart ETAs and proactive issue detection using machine learning algorithms.",
      icon: "TrendingUp",
    },
    {
      title: "Subscription Flexibility",
      description: "Affordable monthly/yearly plans that scale with your business size and requirements.",
      icon: "Users",
    },
    {
      title: "Custom Alerts",
      description:
        "Instant updates on exceptions, delays, or successful deliveries via email, SMS, or app notifications.",
      icon: "Cloud",
    },
    {
      title: "Data-Driven Courier Selection",
      description:
        "Performance analytics to identify which courier performs best for specific routes and delivery types.",
      icon: "Search",
    },
    {
      title: "Time & Cost Savings",
      description: "Reduce manual work and improve logistics ROI through automation and optimization.",
      icon: "Shield",
    },
  ],
  techStack: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "Code", description: "Modern UI framework" },
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
      category: "AI & Analytics",
      technologies: [
        { name: "Machine Learning", icon: "Activity", description: "Predictive analytics" },
        { name: "Elasticsearch", icon: "Search", description: "Search engine" },
        { name: "RabbitMQ", icon: "Activity", description: "Message broker" },
      ],
    },
  ],
  hero: {
    badge: "Courier Tracking Platform",
    badgeIcon: "Truck",
    titleLine1: "Unified Courier",
    titleLine2: "Tracking & Intelligence Platform",
    heroImage: {
      src: "/courier-tracking-simple-compose.webp",
      alt: "Lemonmode Courier Sync",
    },
    heroStats: [
      { valueKey: "revenue", label: "Revenue Generated" },
      { valueKey: "efficiency", label: "Efficiency Gain" },
      { valueKey: "accuracy", label: "Accuracy Rate" },
    ],
    ctaLabel: "Get Free Quote",
  },
  sections: [
    {
      type: "differentiators",
      items: [
        {
          title: "All Couriers in One Place",
          description: "Centralized visibility across carriers.",
          icon: "Zap",
        },
        {
          title: "AI-Powered Predictions",
          description: "Smarter ETAs and proactive issue detection.",
          icon: "Globe",
        },
        {
          title: "Custom Alerts",
          description: "Instant updates on exceptions, delays, or successful deliveries.",
          icon: "Shield",
        },
        {
          title: "Data-Driven Courier Selection",
          description: "Identify which courier performs best for your routes.",
          icon: "BarChart3",
        },
        {
          title: "Time & Cost Savings",
          description: "Reduce manual work and improve logistics ROI.",
          icon: "Cloud",
        },
        {
          title: "Enhanced Reporting",
          description:
            "Detailed analytics on sales, production, and market trends empower data-driven decisions.",
          icon: "TrendingUp",
        },
      ],
    },
    {
      type: "card-grid",
      title: "Critical Parts of the Platform",
      subtitle: "Core components that power our comprehensive courier tracking solution",
      columns: 2,
      items: [
        {
          title: "Courier Integration Layer",
          description:
            "Connects multiple APIs into one source, standardizing data formats and ensuring seamless communication across all courier services.",
          icon: "Cloud",
        },
        {
          title: "Tracking Engine",
          description:
            "Processes real-time status updates from all courier services, providing instant visibility and accurate tracking information.",
          icon: "Activity",
        },
        {
          title: "Exception Management System",
          description:
            "Flags delays, failed deliveries, and risks automatically, enabling proactive problem resolution and customer communication.",
          icon: "Shield",
        },
        {
          title: "Predictive AI Layer",
          description:
            "Forecasts ETAs and risk levels using machine learning algorithms trained on historical delivery data and real-time conditions.",
          icon: "TrendingUp",
        },
        {
          title: "Notification & Alerts Module",
          description:
            "Keeps users informed via email, SMS, or app notifications with customizable alert preferences and real-time updates.",
          icon: "Settings",
        },
        {
          title: "Analytics & Reports",
          description:
            "Performance tracking and optimization insights with detailed reports by courier, zone, or delivery time for data-driven decisions.",
          icon: "BarChart3",
        },
        {
          title: "Subscription & User Management",
          description:
            "Flexible, scalable SaaS model with user management, subscription tiers, and billing integration for businesses of all sizes.",
          icon: "Users",
          fullWidth: true,
        },
      ],
    },
    {
      type: "card-grid",
      title: "End-to-End Flow Overview",
      subtitle: "Step-by-step process of how our courier tracking platform works",
      columns: 2,
      items: [
        {
          title: "Courier APIs connected",
          description:
            "Connects to multiple courier APIs to fetch real-time data and shipment statuses.",
          icon: "Cloud",
        },
        {
          title: "Multi-carrier data consolidated",
          description:
            "Consolidates data from various courier services into a single, unified dashboard.",
          icon: "Database",
        },
        {
          title: "Tracking engine updates shipments in real-time",
          description:
            "Processes real-time status updates from all courier services, providing instant visibility and accurate tracking information.",
          icon: "Activity",
        },
        {
          title: "Exception system detects issues & triggers alerts",
          description:
            "Flags delays, failed deliveries, and risks automatically, enabling proactive problem resolution and customer communication.",
          icon: "Shield",
        },
        {
          title: "Predictive AI forecasts delivery outcomes",
          description:
            "Forecasts ETAs and risk levels using machine learning algorithms trained on historical delivery data and real-time conditions.",
          icon: "TrendingUp",
        },
        {
          title: "Dashboard & reports present actionable insights",
          description:
            "Performance tracking and optimization insights with detailed reports by courier, zone, or delivery time for data-driven decisions.",
          icon: "BarChart3",
        },
      ],
    },
    {
      type: "tech-stack",
      description:
        "Built with cutting-edge technologies to ensure scalability, performance, and reliability.",
    },
    {
      type: "cta",
      title: "Ready to Transform Your Courier Operations?",
      description:
        "Let's discuss how our Courier Tracking Platform can streamline your operations and boost your global sales.",
      buttonLabel: "Get Free Quote",
    },
  ],
};
