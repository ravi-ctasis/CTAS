import {
  Code,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  CheckCircle,
  Monitor,
  Server,
  Cloud,
  Palette,
  Search,
  Rocket,
  TrendingUp,
  Headphones,
  FileText,
  Building,
  Cpu,
  Layers,
  Network,
  Activity,
  Braces,
  Brackets,
  Square,
  Circle,
  Triangle,
  Hexagon,
} from "lucide-react";

export const techCategories = [
  {
    title: "Front-end",
    description: "Modern user interface frameworks and libraries",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    technologies: [
      {
        name: "React",
        icon: Braces,
        color: "from-blue-500 to-cyan-500",
        level: "Expert",
      },
      {
        name: "Angular",
        icon: Circle,
        color: "from-red-500 to-pink-500",
        level: "Advanced",
      },
      {
        name: "Vue.js",
        icon: Triangle,
        color: "from-green-500 to-emerald-500",
        level: "Expert",
      },
      {
        name: "TypeScript",
        icon: Brackets,
        color: "from-blue-600 to-blue-700",
        level: "Expert",
      },
      {
        name: "Next.js",
        icon: Square,
        color: "from-black to-gray-800",
        level: "Advanced",
      },
      {
        name: "Tailwind CSS",
        icon: Palette,
        color: "from-cyan-500 to-blue-500",
        level: "Expert",
      },
      {
        name: "Preact ",
        icon: Layers,
        color: "from-cyan-500 to-blue-500",
        level: "Expert",
      },
      {
        name: "Remix js",
        icon: Braces,
        color: "from-cyan-500 to-blue-500",
        level: "Expert",
      },
      {
        name: "Django",
        icon: Circle,
        color: "from-cyan-500 to-blue-500",
        level: "Expert",
      },
    ],
  },
  {
    title: "Back-end",
    description: "Server-side technologies and frameworks",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    technologies: [
      {
        name: "Node.js",
        icon: Hexagon,
        color: "from-green-600 to-green-700",
        level: "Expert",
      },
      {
        name: "Python",
        icon: Cpu,
        color: "from-yellow-500 to-orange-500",
        level: "Advanced",
      },
      {
        name: "PHP",
        icon: Code,
        color: "from-purple-500 to-pink-500",
        level: "Expert",
      },
      {
        name: "Laravel",
        icon: Layers,
        color: "from-red-500 to-orange-500",
        level: "Advanced",
      },
      {
        name: "Flask",
        icon: Building,
        color: "from-green-500 to-teal-500",
        level: "Advanced",
      },
      {
        name: "Express.js",
        icon: Network,
        color: "from-gray-600 to-gray-800",
        level: "Expert",
      },
    ],
  },
  {
    title: "Web Server",
    description: "Cloud platforms and deployment solutions",
    icon: Cloud,
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
    technologies: [
      {
        name: "AWS",
        icon: Cloud,
        color: "from-orange-500 to-red-500",
        level: "Expert",
      },
      {
        name: "Azure",
        icon: Cloud,
        color: "from-blue-500 to-blue-600",
        level: "Advanced",
      },
      {
        name: "Docker",
        icon: Server,
        color: "from-blue-500 to-cyan-500",
        level: "Advanced",
      },
      {
        name: "MySQL",
        icon: Database,
        color: "from-blue-500 to-indigo-500",
        level: "Expert",
      },
      {
        name: "MongoDB",
        icon: Database,
        color: "from-green-500 to-teal-500",
        level: "Advanced",
      },
      {
        name: "PostgreSQL",
        icon: Activity,
        color: "from-red-500 to-pink-500",
        level: "Advanced",
      },
    ],
  },
];

export const services = [
  {
    title: "Custom Web Development",
    description:
      "Professional custom web development services with tailored web applications built from scratch to meet your specific business requirements using modern technologies",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "UI/UX Design",
      "Performance Optimization",
    ],
  },
  {
    title: "CMS-Based Websites",
    description:
      "Expert content management system development that gives you full control over your website content with professional CMS solutions",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    features: [
      "WordPress Development",
      "Drupal Solutions",
      "Joomla Development",
      "Content Management",
    ],
  },
  {
    title: "eCommerce Development",
    description:
      "Professional eCommerce development services with complete online store solutions including payment processing and inventory management",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500",
    features: [
      "Payment Gateways",
      "Inventory Management",
      "Order Processing",
      "Analytics Dashboard",
    ],
  },
  {
    title: "Enterprise Web Applications",
    description:
      "Expert enterprise web application development with scalable web applications designed for large organizations and complex business processes",
    icon: Building,
    color: "from-indigo-500 to-purple-500",
    features: [
      "Scalable Architecture",
      "Multi-user Systems",
      "Advanced Security",
      "Integration APIs",
    ],
  },
  {
    title: "PHP Web Development",
    description:
      "Professional PHP web development services with robust web applications built using PHP frameworks and modern development practices",
    icon: Server,
    color: "from-orange-500 to-red-500",
    features: [
      "Laravel Development",
      "CodeIgniter Solutions",
      "Custom PHP Applications",
      "API Development",
    ],
  },
  {
    title: "Python Development",
    description:
      "Expert Python web development with modern web applications and backend systems built using Python frameworks and best practices",
    icon: Cpu,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Django Development",
      "Flask Applications",
      "Data Processing",
      "Machine Learning Integration",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements and creating a detailed project plan",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your website with modern technologies and best practices",
    icon: Code,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Comprehensive testing across all devices and browsers",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deployment, monitoring, and ongoing maintenance support",
    icon: Rocket,
    color: "from-indigo-500 to-purple-500",
  },
];

export const features = [
  {
    title: "Responsive Design",
    description: "Websites that look perfect on all devices",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SEO Optimized",
    description: "Built for search engine visibility and ranking",
    icon: Search,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Fast Performance",
    description: "Lightning-fast loading speeds and optimization",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Security First",
    description: "Enterprise-grade security and data protection",
    icon: Shield,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business needs",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: Headphones,
    color: "from-teal-500 to-cyan-500",
  },
];

export const heroStats = [
  { number: "200+", label: "Websites Built", icon: Globe },
  { number: "200+", label: "Happy Clients", icon: Users },
  { number: "16+", label: "Years of Excellence", icon: Award },
  { number: "24/7", label: "Support", icon: Clock },
];
