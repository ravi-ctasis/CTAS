"use client";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  Search,
  Code,
  Mail,
  CheckCircle,
  Briefcase,
  Clock,
  MapPin as Location,
  DollarSign,
  BookOpen,
  Coffee,
  Monitor,
  Gift,
  Users as Team,
} from "lucide-react";
import { useState } from "react";
import ApplicationForm from "@/components/ApplicationForm";

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState("All Positions");

  const careerStats = [
    {
      number: "20+",
      label: "Open Positions",
      icon: Briefcase,
      description: "Across All Departments",
    },
    {
      number: "100%",
      label: "Growth Focused",
      icon: Target,
      description: "Career Development",
    },
    {
      number: "7+",
      label: "Years Average",
      icon: Clock,
      description: "Team Experience",
    },
    {
      number: "15+",
      label: "Technologies",
      icon: Code,
      description: "Modern Stack Learning",
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Ahmedabad, Gujarat",
      experience: "3-5 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      description:
        "We're looking for a passionate Full-Stack Developer to join our team and help build scalable web applications using modern technologies.",
      responsibilities: [
        "Develop and maintain web applications using React and Node.js",
        "Write clean, maintainable, and efficient code",
        "Collaborate with cross-functional teams",
        "Participate in code reviews and technical discussions",
        "Mentor junior developers",
      ],
      requirements: [
        "3+ years of experience in full-stack development",
        "Strong knowledge of React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Understanding of database design and optimization",
        "Excellent problem-solving skills",
      ],
      benefits: ["Competitive Salary", "Learning Budget", "Flexible Hours"],
      posted: "2 days ago",
    },
    // {
    //   id: 2,
    //   title: "AI/ML Engineer",
    //   department: "AI & Innovation",
    //   type: "Full-time",
    //   location: "Ahmedabad, Gujarat",
    //   experience: "2-4 years",
    //   salary: "₹10-18 LPA",
    //   skills: ["Python", "Machine Learning", "OpenAI", "TensorFlow", "NLP"],
    //   description:
    //     "Join our AI team to build intelligent solutions and drive innovation through machine learning and artificial intelligence.",
    //   responsibilities: [
    //     "Develop AI/ML models and algorithms",
    //     "Integrate OpenAI APIs and build RAG systems",
    //     "Implement natural language processing solutions",
    //     "Optimize model performance and accuracy",
    //     "Stay updated with latest AI trends",
    //   ],
    //   requirements: [
    //     "2+ years of experience in AI/ML development",
    //     "Strong Python programming skills",
    //     "Experience with OpenAI APIs and LLMs",
    //     "Knowledge of machine learning frameworks",
    //     "Understanding of NLP and computer vision",
    //   ],
    //   benefits: [
    //     "Premium Salary",
    //     "AI Conference Budget",
    //     "Research Time",
    //     "Stock Options",
    //   ],
    //   posted: "1 week ago",
    // },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Full-time",
      location: "Ahmedabad, Gujarat",
      experience: "2-4 years",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
      description:
        "Help us build and maintain robust, scalable infrastructure and deployment pipelines for our applications.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure on AWS/Azure",
        "Implement monitoring and logging solutions",
        "Ensure security and compliance",
        "Automate deployment processes",
      ],
      requirements: [
        "2+ years of DevOps experience",
        "Strong knowledge of Docker and Kubernetes",
        "Experience with cloud platforms",
        "Understanding of CI/CD principles",
        "Knowledge of monitoring tools",
      ],
      benefits: ["Competitive Salary", "Cloud Certifications", "Flexible Hours"],
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Ahmedabad, Gujarat",
      experience: "2-4 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
      description:
        "Create beautiful, intuitive user experiences and help shape the visual identity of our products.",
      responsibilities: [
        "Design user interfaces and user experiences",
        "Create wireframes, prototypes, and mockups",
        "Conduct user research and usability testing",
        "Collaborate with development teams",
        "Maintain design systems and guidelines",
      ],
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio showcasing web/mobile designs",
        "Understanding of user-centered design principles",
        "Experience with design systems",
      ],
      benefits: [
        "Competitive Salary",
        "Design Tools Budget",
        "Conference Attendance",
        "Creative Freedom",
      ],
      posted: "1 week ago",
    },
    {
      id: 5,
      title: "QA Engineer",
      department: "Quality Assurance",
      type: "Full-time",
      location: "Ahmedabad, Gujarat",
      experience: "2-3 years",
      skills: ["Selenium", "Jest", "Cypress", "API Testing", "Performance Testing"],
      description:
        "Ensure the highest quality standards for our applications through comprehensive testing and automation.",
      responsibilities: [
        "Design and execute test plans",
        "Develop automated test scripts",
        "Perform manual and automated testing",
        "Report and track bugs",
        "Collaborate with development teams",
      ],
      requirements: [
        "2+ years of QA experience",
        "Knowledge of testing frameworks and tools",
        "Experience with API testing",
        "Understanding of agile methodologies",
        "Strong attention to detail",
      ],
      benefits: ["Competitive Salary", "Testing Tools", "Training Programs", "Career Growth"],
      posted: "5 days ago",
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "Sales & Marketing",
      type: "Full-time",
      location: "Ahmedabad, Gujarat",
      experience: "3-5 years",
      skills: ["Sales", "Client Relations", "Market Research", "Proposal Writing", "Negotiation"],
      description:
        "Drive business growth by identifying new opportunities, building client relationships, and expanding our market presence.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Prepare proposals and presentations",
        "Negotiate contracts and agreements",
        "Track sales metrics and performance",
      ],
      requirements: [
        "3+ years of B2B sales experience",
        "Strong communication and negotiation skills",
        "Experience in technology sales",
        "Understanding of market trends",
        "Proven track record of meeting targets",
      ],
      benefits: [
        "Competitive Salary",
        "Commission Structure",
        "Travel Allowance",
        "Performance Bonuses",
      ],
      posted: "1 week ago",
    },
  ];

  const filteredPositions = openPositions.filter((position) => {
    if (activeFilter === "All Positions") return true;
    return position.department === activeFilter;
  });

  const companyBenefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation with regular reviews and performance-based increases",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "Annual budget for courses, certifications, and conferences",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Coffee,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling options",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Team,
      title: "Team Events",
      description: "Regular team building activities and social events",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Monitor,
      title: "Modern Equipment",
      description: "Latest technology and tools for optimal productivity",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Supportive environment that values personal well-being",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const companyValues = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between work and personal life",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and experimentation with new ideas",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster a culture of teamwork and mutual support",
    },
    {
      icon: Target,
      title: "Growth",
      description: "We provide opportunities for continuous learning and career advancement",
    },
  ];

  const applicationProcess = [
    {
      step: "01",
      title: "Apply ",
      description: "Submit your resume and cover letter through our online application system",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "Our HR team reviews your application and conducts initial screening",
      icon: Search,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Technical Assessment",
      description: "Complete technical tests and coding challenges relevant to the role",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Interview Rounds",
      description: "Multiple interview rounds with team members and leadership",
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "05",
      title: "Final Decision",
      description: "Receive feedback and final decision within 1-2 weeks",
      icon: CheckCircle,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-white/10 text-white border-white/20">Join Our Team</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Build the Future{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  With Us
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                Join our dynamic team of innovators and help us create cutting-edge technology
                solutions that transform businesses worldwide. We&apos;re looking for passionate
                individuals who share our vision of excellence and innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {careerStats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-4 lg:p-6">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-3 text-blue-400" />
                    <div className="text-xl lg:text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm lg:text-base text-white/90 mb-1">{stat.label}</div>
                    <div className="text-xs text-white/70">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Current Openings
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Open{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Positions
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role that matches your skills
                and career goals.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-500">
                  Showing {filteredPositions.length} of {openPositions.length} positions
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                "All Positions",
                "Engineering",
                "AI & Innovation",
                "Design",
                "Quality Assurance",
                "Sales & Marketing",
              ].map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`transition-all duration-300 cursor-pointer ${activeFilter === filter
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
                    }`}
                >
                  {filter}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPositions.length > 0 ? (
                filteredPositions.map((position) => (
                  <Card
                    key={position.id}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden relative h-full flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="relative bg-white rounded-lg h-full flex flex-col">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div
                          className={`p-6 lg:p-8 ${position.department === "Engineering"
                            ? "bg-gradient-to-br from-blue-600 to-indigo-700"
                            : position.department === "AI & Innovation"
                              ? "bg-gradient-to-br from-purple-600 to-pink-600"
                              : position.department === "Infrastructure"
                                ? "bg-gradient-to-br from-emerald-600 to-teal-700"
                                : position.department === "Design"
                                  ? "bg-gradient-to-br from-violet-500 to-purple-600"
                                  : position.department === "Quality Assurance"
                                    ? "bg-gradient-to-br from-indigo-600 to-blue-700"
                                    : position.department === "Sales & Marketing"
                                      ? "bg-gradient-to-br from-cyan-600 to-blue-600"
                                      : "bg-gradient-to-br from-blue-600 to-purple-700"
                            } text-white relative overflow-hidden`}
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                          <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                  {position.title}
                                </h3>
                                <p className="text-blue-100 font-semibold mb-2">
                                  {position.department}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                <Briefcase className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                  {position.type}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                <Location className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                  {position.location}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                <Clock className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                  {position.experience}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 lg:p-8 flex-1 flex flex-col">
                          <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">
                            {position.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Code className="w-4 h-4 mr-2 text-blue-600" />
                              Required Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {position.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Gift className="w-4 h-4 mr-2 text-green-600" />
                              Benefits
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {position.benefits.map((benefit, benefitIndex) => (
                                <Badge
                                  key={benefitIndex}
                                  className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 hover:from-green-200 hover:to-emerald-200 transition-all duration-300"
                                >
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                            <a href="mailto:info@ctasinfoservices.com">
                              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 group-hover:scale-105 cursor-pointer">
                                <Mail className="w-4 h-4 mr-2" />
                                Apply Now
                              </Button>
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
                    <p className="text-gray-600 mb-4">
                      We don&apos;t have any open positions in the &quot;
                      {activeFilter}&quot; department at the moment.
                    </p>
                    <Button
                      onClick={() => setActiveFilter("All Positions")}
                      className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                    >
                      View All Positions
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Why Join Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Benefits &{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Perks
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment that promotes growth,
                work-life balance, and professional development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {companyBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
                Our Values
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Company{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Culture
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in creating an inclusive, supportive, and innovative work environment
                where everyone can thrive and grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {companyValues.map((value, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50"
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                How to Apply
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Application{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Process
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined application process ensures a smooth experience from application to
                onboarding.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block">
                <div className="absolute top-1/2 left-1/4 w-3/5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"></div>
                <div className="absolute top-1/4 left-1/2 w-0.5 h-1/2 bg-gradient-to-b from-purple-500 to-green-500 transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 right-1/4 w-3/5 h-0.5 bg-gradient-to-l from-green-500 to-orange-500 transform -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 left-1/2 w-0.5 h-1/2 bg-gradient-to-t from-orange-500 to-indigo-500 transform -translate-x-1/2"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                {applicationProcess.map((process, index) => (
                  <div key={index} className="relative flex justify-center">
                    <div className="relative group">
                      <div className="absolute inset-0 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 blur-sm"></div>

                      <div className="relative w-52 h-52 bg-white rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden">
                        <div
                          className={`absolute inset-1 rounded-full bg-gradient-to-r ${process.color} opacity-90`}
                        ></div>

                        <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center p-4 text-center">
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            {process.step}
                          </div>

                          <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                            <process.icon className="w-6 h-6 text-gray-700" />
                          </div>

                          <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                            {process.title}
                          </h3>

                          <p className="text-xs text-gray-600 leading-tight">
                            {process.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-teal-100 text-teal-700 border-teal-200">Apply Now</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Submit Your{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Application
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to join our team? Fill out the form below and we&apos;ll get back to you
                within 48 hours.
              </p>
            </div>

            <ApplicationForm positions={openPositions} />
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Careers;
