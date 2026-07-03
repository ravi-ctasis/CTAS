import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, Lightbulb, Code, Globe, UserCheck, Clock, Brain, Mail, Phone } from "lucide-react";
import Link from "next/link";


const Team = () => {
  const teamStats = [
    {
      number: "20+",
      label: "Team Members",
      icon: Users,
      description: "Certified Professionals",
    },
    {
      number: "100+",
      label: "Projects Delivered",
      icon: Target,
      description: "Successfully Completed",
    },
    {
      number: "7+",
      label: "Years Experience",
      icon: Award,
      description: "Industry Expertise",
    },
    {
      number: "15+",
      label: "Technologies",
      icon: Code,
      description: "Modern Stack Mastery",
    },
  ];

  const leadershipTeam = [
    {
      name: "Ctas Leadership",
      role: "Executive Team",
      bio: "Our experienced leadership team brings together decades of expertise in technology, business strategy, and innovation to drive Ctas Info Services LLP mission of delivering exceptional digital solutions.",
      image: "/team1.webp",
      expertise: ["Technology Strategy", "Business Development", "Innovation Management"],
      achievements: ["100+ Projects Led", "20+ Team Members", "15+ Technologies"],
    },
    {
      name: "Technical Leadership",
      role: "CTO & Technical Directors",
      bio: "Our technical leadership ensures cutting-edge technology implementation, architectural excellence, and innovative solutions that drive business growth and digital transformation.",
      image: "/team2.webp",
      expertise: ["System Architecture", "Technology Stack", "Innovation"],
      achievements: ["50+ Complex Projects", "10+ Technology Stacks", "AI Integration"],
    },
  ];

  const developmentTeam = [
    {
      name: "Frontend Developers",
      role: "UI/UX & Frontend Experts",
      bio: "Our frontend team specializes in creating intuitive, responsive, and modern user interfaces using React, Angular, Vue.js, and the latest web technologies.",
      image: "/team3.webp",
      expertise: ["React", "Angular", "Vue.js", "TypeScript"],
      achievements: ["30+ Web Applications", "Responsive Design", "Performance Optimization"],
    },
    {
      name: "Backend Developers",
      role: "Server-Side & API Experts",
      bio: "Our backend developers build robust, scalable, and secure server-side applications using Node.js, Python, C#, and modern database technologies.",
      image: "/team4.webp",
      expertise: ["Node.js", "Python", "C#", "Database Design"],
      achievements: ["40+ APIs Developed => 40+ Server-Side Apps Developed"],
    },
    {
      name: "Mobile Developers",
      role: "Native & Cross-Platform Experts",
      bio: "Our mobile development team creates high-performance native and cross-platform applications for iOS, Android, and hybrid platforms.",
      image: "/team1.webp",
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      achievements: ["25+ Mobile Apps", "Cross-Platform", "App Store Success"],
    },
  ];

  const specializedTeam = [
    {
      name: "AI & ML Engineers",
      role: "Artificial Intelligence & Machine Learning Experts",
      bio: "Our AI team specializes in machine learning, natural language processing, and intelligent automation solutions that drive business efficiency.",
      image: "/team2.webp",
      expertise: [
        "Artificial Intelligence",
        "Machine Learning",
        "NLP",
        "Intelligent Automation",
        "Predictive Analytics",
        "RAG Systems",
        "OpenAI Solutions",
      ],
      achievements: ["15+ AI Solutions", "Automation", "Predictive Analytics"],
    },
    {
      name: "DevOps Engineers",
      role: "Experts in Infrastructure, Deployment & Automation",
      bio: "Our DevOps team specializes in cloud infrastructure, continuous integration, and automated deployment pipelines. We ensure applications run smoothly, securely, and at scale using modern cloud platforms and containerization tools.",
      image: "/team1.webp",
      expertise: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI / CD",
        "Cloud Automation",
        "Infrastructure Management",
      ],
      achievements: ["50+ Deployments", "CI/CD Pipelines", "24/7 Monitoring"],
    },
    {
      name: "QA & Test Engineers",
      role: "Experts in Quality Assurance and Testing",
      bio: "Our QA team ensures top-quality software through thorough manual and automated testing, performance analysis, and security validation. We help deliver reliable, bug-free applications that exceed user expectations.",
      image: "/team4.webp",
      expertise: [
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "QA Services",
        "Software Quality",
        "Test Automation",
      ],
      achievements: ["100+ Tested Projects", "Zero Critical Bugs", "Performance Optimization"],
    },
  ];

  const companyCulture = [
    {
      icon: Heart,
      title: "Collaborative Environment",
      description:
        "We foster a culture of teamwork, open communication, and mutual support where every team member's contribution is valued.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "We encourage creative thinking, continuous learning, and experimentation with new technologies and methodologies.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Excellence Driven",
      description:
        "We maintain high standards of quality, performance, and professionalism in everything we do.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "We embrace diversity, global best practices, and international standards in our work and team composition.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const teamBenefits = [
    {
      icon: UserCheck,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities, certifications, and career advancement paths",
    },
    {
      icon: Clock,
      title: "Flexible Work",
      description: "Work-life balance with flexible hours and remote work options",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance-based rewards, recognition programs, and achievement celebrations",
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team building activities, workshops, and social events",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section - Fixed responsive design */}
        <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-4 sm:mb-6 bg-white/10 text-white border-white/20 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                Meet Our Team
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Expert Team
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                Meet the passionate professionals who drive innovation and deliver exceptional
                results at Ctas Info Services LLP. Our diverse team brings together expertise in
                technology, design, and business strategy.
              </p>
            </div>

            {/* Team Stats - Fixed responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {teamStats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-3 sm:p-4 lg:p-6">
                    <stat.icon
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 text-blue-400"
                      aria-hidden="true"
                    />
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-white/90 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/70">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team - Fixed responsive design */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-700 border-blue-200 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                Leadership
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Leadership Team
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Experienced leaders who drive innovation, strategy, and excellence across all
                aspects of our organization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {leadershipTeam.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-white" />
                      </div>
                      <div className="flex-1 text-center sm:text-left mx-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                          {member.role}
                        </p>
                        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                          {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {member.expertise.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              className="bg-blue-100 text-blue-700 border-blue-200 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Development Team - Fixed responsive design */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-green-100 text-green-700 border-green-200 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                Development Team
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Technical{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Experts
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Our certified developers specialize in modern technologies and deliver cutting-edge
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {developmentTeam.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-green-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-3 sm:mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-green-100 text-green-700 border-green-200 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">{member.achievements.join(" • ")}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Team - Fixed responsive design */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-purple-100 text-purple-700 border-purple-200 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                Specialized Teams
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Domain{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Specialists
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Our specialized teams bring deep expertise in AI, DevOps, QA, and other critical
                areas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {specializedTeam.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-purple-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-3 sm:mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-purple-100 text-purple-700 border-purple-200 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">{member.achievements.join(" • ")}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture - Fixed responsive design */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-orange-100 text-orange-700 border-orange-200 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                Our Culture
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Company{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Culture
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                We believe in fostering a positive, inclusive, and growth-oriented work environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {companyCulture.map((culture, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-white"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${culture.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <culture.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {culture.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {culture.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Benefits - Fixed responsive design */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-teal-100 text-teal-700 border-teal-200 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                Why Join Us
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Benefits of{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Working With Us
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                We offer competitive benefits and a supportive environment for professional growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {teamBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 group border-0 bg-gray-50"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA - Fixed responsive design */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Are you passionate about technology and innovation? Join our dynamic team and help us
              build the future of digital solutions. We&apos;re always looking for talented
              individuals who share our values.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold" asChild>
                <a href="mailto:info@ctasinfoservice.com">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
                  Send Your CV
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
                asChild
              >
                <Link href="/contact-us">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Team;
