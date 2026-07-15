"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Smartphone,
  Globe,
  Users,
  Target,
  Award,
  Clock,
  CheckCircle,
  Monitor,
  Server,
  Cloud,
  Palette,
  Search,
  BarChart,
  Settings,
  Rocket,
  Star,
  TrendingUp,
  Headphones,
  Network,
  Activity,
  Braces,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Zap,
  Shield,
  Code,
  Wifi,
} from "lucide-react";

const appTypes = [
  {
    title: "Native Android Apps",
    description:
      "High-performance Android applications built with Kotlin and Java for optimal performance and user experience",
    icon: Smartphone,
    features: [
      "Kotlin Development",
      "Material Design",
      "Google Play Store",
      "Android Integration",
      "Performance Optimization",
    ],
  },
  {
    title: "Native iOS Apps",
    description:
      "Premium iOS applications built specifically for iPhone and iPad using Swift and Objective-C",
    icon: Smartphone,
    features: [
      "Swift Development",
      "iOS UI/UX",
      "App Store Optimization",
      "Performance Tuning",
      "Apple Ecosystem",
    ],
  },
  {
    title: "React Native Apps",
    description:
      "Cross-platform mobile applications built with React Native for code reusability and native performance",
    icon: Braces,
    features: [
      "React Native",
      "JavaScript/TypeScript",
      "Code Reusability",
      "Native Performance",
      "Hot Reload",
    ],
  },
  {
    title: "Flutter Apps",
    description:
      "Beautiful, natively compiled applications built with Flutter for multiple platforms from a single codebase",
    icon: Circle,
    features: [
      "Flutter Development",
      "Dart Language",
      "Single Codebase",
      "Native Performance",
      "Rich Widgets",
    ],
  },
  {
    title: "Swift Apps",
    description:
      "Modern iOS applications built with Swift for iPhone, iPad, and Apple ecosystem devices",
    icon: Code,
    features: [
      "Swift Development",
      "iOS Native",
      "Apple Frameworks",
      "Performance Optimization",
      "Security",
    ],
  },
  {
    title: "Hybrid Apps",
    description:
      "Versatile applications that combine web technologies with native capabilities for cross-platform development",
    icon: Globe,
    features: [
      "Web Technologies",
      "Native Bridge",
      "Cross-Platform",
      "Plugin Support",
      "Rapid Development",
    ],
  },
];

const techCategories = [
  {
    title: "Front-end",
    description: "Mobile UI frameworks and development tools",
    icon: Smartphone,
    technologies: [
      { name: "React Native", icon: Braces, level: "Expert" },
      { name: "Flutter", icon: Circle, level: "Expert" },
      { name: "Swift", icon: Code, level: "Advanced" },
      { name: "Kotlin", icon: Code, level: "Advanced" },
      { name: "Ionic", icon: Triangle, level: "Advanced" },
      { name: "Xamarin", icon: Square, level: "Advanced" },
    ],
  },
  {
    title: "Back-end",
    description: "Server-side technologies for mobile app support",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: Hexagon, level: "Expert" },
      { name: "Firebase", icon: Cloud, level: "Expert" },
      { name: "AWS Mobile", icon: Cloud, level: "Advanced" },
      { name: "GraphQL", icon: Network, level: "Advanced" },
      { name: "REST APIs", icon: Network, level: "Expert" },
      { name: "WebSocket", icon: Activity, level: "Advanced" },
    ],
  },
  {
    title: "Tools & Services",
    description: "Development tools and third-party services",
    icon: Settings,
    technologies: [
      { name: "Xcode", icon: Monitor, level: "Expert" },
      { name: "Android Studio", icon: Monitor, level: "Expert" },
      { name: "VS Code", icon: Monitor, level: "Expert" },
      { name: "Git", icon: Code, level: "Expert" },
      { name: "Jenkins", icon: Server, level: "Advanced" },
      { name: "Docker", icon: Server, level: "Advanced" },
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your app requirements and creating detailed project roadmap",
    icon: Search,
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Creating intuitive mobile interfaces and user experience designs",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description: "Building your mobile app with modern technologies and best practices",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing across all devices and platforms",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "App store submission, deployment, and post-launch support",
    icon: Rocket,
  },
];

const features = [
  {
    title: "Native Performance",
    description: "Apps that run smoothly with native device capabilities",
    icon: Zap,
  },
  {
    title: "Cross-Platform",
    description: "Single codebase that works on iOS and Android",
    icon: Globe,
  },
  {
    title: "Offline Support",
    description: "Apps that work without internet connection",
    icon: Wifi,
  },
  {
    title: "Push Notifications",
    description: "Real-time notifications to engage users",
    icon: Headphones,
  },
  {
    title: "Security First",
    description: "Enterprise-grade security and data protection",
    icon: Shield,
  },
  {
    title: "Analytics & Insights",
    description: "Comprehensive analytics to track app performance",
    icon: BarChart,
  },
];

const benefits = [
  {
    title: "Boost Your Revenue",
    description:
      "Mobile apps can increase your business revenue by up to 40% through direct sales, in-app purchases, and enhanced customer engagement",
    icon: TrendingUp,
  },
  {
    title: "Enhance Customer Experience",
    description:
      "Provide seamless, personalized experiences that keep customers engaged and coming back for more",
    icon: Users,
  },
  {
    title: "Build Brand Loyalty",
    description:
      "Create strong brand connections through consistent mobile experiences and direct customer communication",
    icon: Star,
  },
  {
    title: "Stay Ahead of Competition",
    description:
      "Gain a competitive edge by offering modern mobile solutions that meet today's customer expectations",
    icon: Target,
  },
  {
    title: "24/7 Business Access",
    description:
      "Make your business accessible to customers anytime, anywhere, increasing sales opportunities",
    icon: Clock,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Get valuable insights into customer behavior, preferences, and trends to make informed business decisions",
    icon: BarChart,
  },
];

const topicalGuide = [
  {
    id: "planning",
    title: "Mobile App Planning & Strategy",
    content:
      "Essential steps to plan and strategize your mobile app development project",
    points: [
      "Define your app's purpose and target audience",
      "Conduct market research and competitor analysis",
      "Choose the right platform (iOS, Android, or both)",
      "Plan your app's features and functionality",
      "Create a detailed project timeline and budget",
      "Select the right development team or agency",
    ],
  },
  {
    id: "design",
    title: "User Interface & Experience Design",
    content:
      "Creating intuitive and engaging user experiences for your mobile app",
    points: [
      "Design user-friendly interfaces and navigation",
      "Create wireframes and interactive prototypes",
      "Implement modern design principles and trends",
      "Ensure accessibility and inclusive design",
      "Optimize for different screen sizes and devices",
      "Design for both iOS and Android guidelines",
    ],
  },
  {
    id: "development",
    title: "Mobile App Development Process",
    content:
      "The technical development process from coding to deployment",
    points: [
      "Choose the right technology stack and frameworks",
      "Set up development environment and tools",
      "Implement core features and functionality",
      "Integrate APIs and third-party services",
      "Ensure code quality and best practices",
      "Implement security measures and data protection",
    ],
  },
  {
    id: "testing",
    title: "Quality Assurance & Testing",
    content:
      "Comprehensive testing to ensure your app works perfectly",
    points: [
      "Perform functional testing on all features",
      "Conduct user acceptance testing (UAT)",
      "Test on multiple devices and screen sizes",
      "Perform performance and load testing",
      "Security testing and vulnerability assessment",
      "Beta testing with real users",
    ],
  },
  {
    id: "deployment",
    title: "App Store Deployment & Launch",
    content:
      "Successfully launching your app on app stores and marketing it",
    points: [
      "Prepare app store listings and descriptions",
      "Create compelling app store screenshots and videos",
      "Submit apps to Apple App Store and Google Play",
      "Implement app store optimization (ASO)",
      "Plan marketing and promotional strategies",
      "Monitor app performance and user feedback",
    ],
  },
  {
    id: "maintenance",
    title: "Ongoing Maintenance & Updates",
    content:
      "Keeping your app updated and maintaining its performance",
    points: [
      "Regular bug fixes and performance improvements",
      "Add new features and functionality",
      "Update for new OS versions and devices",
      "Monitor app analytics and user behavior",
      "Handle user support and feedback",
      "Plan for app scaling and growth",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Mobile App Development Services",
      description:
        "Expert mobile app development: iOS, Android, React Native, Flutter. Native and cross-platform solutions.",
      provider: {
        "@type": "Organization",
        name: "Ctas Info Services LLP",
        url: "https://www.ctasis.com",
      },
      serviceType: "Mobile App Development",
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ctasis.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ctasis.com/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mobile Apps",
          item: "https://www.ctasis.com/services/mobile-apps",
        },
      ],
    },
  ],
};

export default function MobileAppsPage() {
  return (
    <ServicePageTemplate
      config={{
        ariaLabel: "Mobile App Development Services",
        structuredData,
        hero: {
          badge: "Mobile App Development",
          title: "Mobile",
          highlight: "App Development",
          description:
            "We create innovative mobile applications that engage users and drive business growth. From native iOS/Android apps to cross-platform solutions, we deliver exceptional mobile experiences.",
          stats: [
            { number: "200+", label: "Projects Delivered", icon: Smartphone },
            { number: "200+", label: "Happy Clients", icon: Users },
            { number: "16+", label: "Years of Excellence", icon: Award },
            { number: "24/7", label: "Support", icon: Clock },
          ],
          primaryCta: { label: "Get Free Quote", href: "/contact-us" },
          secondaryCta: { label: "View Our Portfolio", href: "/portfolios" },
        },
        sections: [
          {
            type: "cards",
            variant: "scroll",
            header: {
              badge: "App Types",
              title: "Mobile App",
              highlight: "Solutions",
              description:
                "From native iOS and Android to cross-platform frameworks, we build apps tailored to your goals.",
            },
            items: appTypes,
            columns: 3,
          },
          {
            type: "tech-categories",
            header: {
              badge: "Technologies",
              title: "Mobile",
              highlight: "Tech Stack",
              description:
                "We use cutting-edge mobile development technologies to build robust and scalable applications.",
            },
            categories: techCategories,
          },
          {
            type: "process",
            variant: "horizontal",
            header: {
              badge: "Our Process",
              title: "Development",
              highlight: "Process",
              description:
                "Our proven mobile app development process ensures quality, transparency, and timely delivery.",
            },
            steps: process,
          },
          {
            type: "benefits",
            variant: "icon-strip",
            header: {
              badge: "Why Choose Us",
              title: "Key",
              highlight: "Features",
              description:
                "We deliver exceptional mobile solutions with cutting-edge features and technologies.",
            },
            items: features,
          },
          {
            type: "benefits",
            variant: "zigzag",
            header: {
              badge: "Why Choose Mobile Apps?",
              title: "Benefits of",
              highlight: "Mobile App Development",
              description:
                "Discover how mobile app development can transform your business and drive growth.",
            },
            items: benefits,
          },
          {
            type: "tabs",
            header: {
              badge: "Complete Guide",
              title: "Topical Guide for",
              highlight: "Mobile App Development",
              description:
                "Everything you need to know about mobile app development, from planning to deployment.",
            },
            tabs: topicalGuide,
            defaultTab: "planning",
          },
        ],
        cta: {
          title: "Ready to Build Your Mobile App?",
          description:
            "Let's discuss your app idea and create a stunning mobile application that drives results.",
          primaryLabel: "Get Started Today",
          primaryHref: "/contact-us",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolios",
        },
      }}
    />
  );
}
