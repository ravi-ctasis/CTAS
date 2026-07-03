
;
import {
  Phone,
  MessageCircle,
  Video,
  Users,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Building,
  Headphones,
  GraduationCap,
  Stethoscope,
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Code,
  WebcamIcon,
  Palette,
  Database,
  Server,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

const VoiceChatAppPage = () => {
  const features = [
    {
      icon: Phone,
      title: "Crystal Clear Voice Calls",
      description:
        "HD voice quality with noise cancellation and echo suppression for professional-grade communication.",
      color: "from-emerald-500 to-teal-600",
      gradient: "from-emerald-400/20 to-teal-500/20",
    },
    {
      icon: MessageCircle,
      title: "Real-time Messaging",
      description:
        "Instant text messages with read receipts, typing indicators, and message encryption.",
      color: "from-violet-500 to-purple-600",
      gradient: "from-violet-400/20 to-purple-500/20",
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description:
        "High-definition video calls with screen sharing, virtual backgrounds, and recording capabilities.",
      color: "from-rose-500 to-pink-600",
      gradient: "from-rose-400/20 to-pink-500/20",
    },
    {
      icon: Users,
      title: "Group Communication",
      description:
        "Create channels, manage teams, and organize conversations with advanced moderation tools.",
      color: "from-amber-500 to-orange-600",
      gradient: "from-amber-400/20 to-orange-500/20",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "End-to-end encryption, compliance features, and secure authentication for business use.",
      color: "from-sky-500 to-blue-600",
      gradient: "from-sky-400/20 to-blue-500/20",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized for low latency with global server infrastructure and intelligent routing.",
      color: "from-yellow-500 to-amber-600",
      gradient: "from-yellow-400/20 to-amber-500/20",
    },
  ];

  const useCases = [
    {
      title: "Business Communication",
      description:
        "Seamless team collaboration with integrated project management and file sharing.",
      icon: Building,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Customer Support",
      description:
        "Multi-channel support with AI-powered chatbots and seamless handoff to human agents.",
      icon: Headphones,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Education & Training",
      description:
        "Virtual classrooms with interactive whiteboards, breakout rooms, and progress tracking.",
      icon: GraduationCap,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Healthcare",
      description:
        "Secure telemedicine solutions with HIPAA compliance and medical record integration.",
      icon: Stethoscope,
      color: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Next-Gen Communication</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-7xl font-bold leading-tight text-slate-900">
                    Transform Your
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Communication
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                    Experience the future of real-time communication with our cutting-edge platform
                    featuring
                    <span className="text-blue-600 font-semibold"> crystal-clear voice</span>,
                    <span className="text-indigo-600 font-semibold"> instant messaging</span>, and
                    <span className="text-purple-600 font-semibold"> professional video calls</span>
                    .
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact-us">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold text-lg text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <span className="flex items-center">
                        Start Free Consultation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </Link>
                  <Link href="/contact-us">
                    <button className="px-8 py-4 border-2 border-slate-300 rounded-2xl font-semibold text-lg text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 transform hover:-translate-y-1">
                      <span className="flex items-center">
                        <Play className="w-5 h-5 mr-2" />
                        Portfolios
                      </span>
                    </button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-slate-900">99.9%</div>
                    <div className="text-sm text-slate-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-slate-900">50M+</div>
                    <div className="text-sm text-slate-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-slate-900">150+</div>
                    <div className="text-sm text-slate-600">Countries</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* Main App Mockup */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-slate-600 font-medium">VoiceChat Pro</div>
                    </div>

                    {/* Chat Interface Mockup */}
                    <div className="space-y-4">
                      {/* Active Call */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                              <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-900 text-lg">Team Meeting</div>
                            <div className="text-slate-600 text-sm">5 participants • 45 min</div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-slate-600">Live</span>
                            </div>
                          </div>
                          <button className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-white text-xs font-medium transition-colors duration-200">
                            End
                          </button>
                        </div>
                      </div>

                      {/* Message Notifications */}
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                            <MessageCircle className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-900 text-lg">Project Updates</div>
                            <div className="text-slate-600 text-sm">12 new messages</div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-slate-600">Unread</span>
                            </div>
                          </div>
                          <div className="bg-emerald-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                            12
                          </div>
                        </div>
                      </div>

                      {/* Scheduled Call */}
                      <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-4 border border-violet-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <Video className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-slate-900 text-lg">Client Call</div>
                            <div className="text-slate-600 text-sm">Scheduled in 15 min</div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-slate-600">Upcoming</span>
                            </div>
                          </div>
                          <button className="px-3 py-1 bg-violet-500 hover:bg-violet-600 rounded-lg text-white text-xs font-medium transition-colors duration-200">
                            Join
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Status Bar */}
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Connected</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>HD Audio</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Encrypted</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Powerful Features
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Everything You Need for
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Modern Communication
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover the tools that will revolutionize how you connect, collaborate, and
                communicate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 transform hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-medium mb-6">
                <Play className="w-4 h-4 mr-2" />
                See It In Action
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Experience Real-time
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Communication
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get a hands-on feel for how our platform transforms your daily communication needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-slate-500">VoiceChat Pro</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Team Meeting</div>
                        <div className="text-sm text-slate-600">5 participants • 45 min</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Project Updates</div>
                        <div className="text-sm text-slate-600">12 new messages</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-violet-50 rounded-2xl border border-violet-200">
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Client Call</div>
                        <div className="text-sm text-slate-600">Scheduled in 15 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5" />
                      <span className="text-slate-700">99.9% uptime guarantee with global CDN</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5" />
                      <span className="text-slate-700">
                        End-to-end encryption for maximum security
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5" />
                      <span className="text-slate-700">Global server network for low latency</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5" />
                      <span className="text-slate-700">24/7 customer support worldwide</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-6">
                    Join thousands of teams already using our platform for seamless communication.
                  </p>
                  <Link href="/contact-us">
                    <button className="w-full bg-white text-blue-600 py-4 px-6 rounded-2xl font-semibold hover:bg-slate-50 transition-colors duration-300 transform hover:-translate-y-1">
                      Start Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Industry Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Perfect for Every
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Industry
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From startups to enterprise, our platform adapts to your unique communication needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 transform hover:-translate-y-2"
                >
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${useCase.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <useCase.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Technologies Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Tech Stack
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Built with Modern
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our platform leverages cutting-edge technologies for optimal performance and
                scalability.
              </p>
            </div>

            {/* Frontend Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  {
                    name: "React Native",
                    icon: <Smartphone className="w-8 h-8" />,
                    color: "from-blue-500 to-cyan-600",
                    description: "Cross-platform mobile development",
                  },
                  {
                    name: "React.js",
                    icon: <Globe className="w-8 h-8" />,
                    color: "from-blue-600 to-indigo-700",
                    description: "Web application framework",
                  },
                  {
                    name: "TypeScript",
                    icon: <Code className="w-8 h-8" />,
                    color: "from-blue-700 to-indigo-800",
                    description: "Type-safe JavaScript",
                  },
                  {
                    name: "Next.js",
                    icon: <WebcamIcon className="w-8 h-8" />,
                    color: "from-slate-600 to-gray-700",
                    description: "React framework for production",
                  },
                  {
                    name: "Tailwind CSS",
                    icon: <Palette className="w-8 h-8" />,
                    color: "from-cyan-500 to-blue-600",
                    description: "Utility-first CSS framework",
                  },
                  {
                    name: "Redux",
                    icon: <Database className="w-8 h-8" />,
                    color: "from-purple-500 to-pink-600",
                    description: "State management",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 text-center mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-slate-600 text-xs text-center leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  {
                    name: "Node.js",
                    icon: <Server className="w-8 h-8" />,
                    color: "from-green-500 to-emerald-600",
                    description: "JavaScript runtime",
                  },
                  {
                    name: "Express.js",
                    icon: <Zap className="w-8 h-8" />,
                    color: "from-gray-500 to-slate-600",
                    description: "Web application framework",
                  },
                  {
                    name: "Python",
                    icon: <Code className="w-8 h-8" />,
                    color: "from-blue-500 to-indigo-600",
                    description: "Backend programming",
                  },
                  {
                    name: "Django",
                    icon: <Shield className="w-8 h-8" />,
                    color: "from-green-600 to-emerald-700",
                    description: "Python web framework",
                  },
                  {
                    name: "PostgreSQL",
                    icon: <Database className="w-8 h-8" />,
                    color: "from-blue-600 to-indigo-700",
                    description: "Relational database",
                  },
                  {
                    name: "MongoDB",
                    icon: <Database className="w-8 h-8" />,
                    color: "from-green-600 to-emerald-700",
                    description: "NoSQL database",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 text-center mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-slate-600 text-xs text-center leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure & DevOps */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Infrastructure & DevOps
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  {
                    name: "AWS",
                    icon: <Globe className="w-8 h-8" />,
                    color: "from-orange-500 to-red-600",
                    description: "Cloud infrastructure",
                  },
                  {
                    name: "Docker",
                    icon: <Server className="w-8 h-8" />,
                    color: "from-blue-500 to-indigo-600",
                    description: "Containerization",
                  },
                  {
                    name: "Nginx",
                    icon: <Zap className="w-8 h-8" />,
                    color: "from-green-500 to-emerald-600",
                    description: "Web server",
                  },

                  {
                    name: "Git",
                    icon: <Code className="w-8 h-8" />,
                    color: "from-orange-500 to-red-600",
                    description: "Version control",
                  },
                  {
                    name: "CI/CD",
                    icon: <Zap className="w-8 h-8" />,
                    color: "from-purple-500 to-pink-600",
                    description: "Automated deployment",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 text-center mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-slate-600 text-xs text-center leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Communication Today
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join the future of real-time communication and experience seamless collaboration like
              never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact-us">
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Start Free Consultation
                  {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
                </button>
              </Link>
              <Link href="/portfolios">
                <button className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default VoiceChatAppPage;
