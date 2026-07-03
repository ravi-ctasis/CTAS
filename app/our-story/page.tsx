;

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, Target, Award, Rocket, Users } from "lucide-react";

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Story</h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our journey — from a small team with a big idea to a trusted partner delivering
            impactful digital products worldwide.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it started</h2>
            <p className="text-gray-600 leading-relaxed">
              We began with a simple mission: help teams move faster with technology that feels
              effortless. Over the years, we have grown into a multi-disciplinary crew of designers,
              engineers, and strategists who share the same obsession for craft and outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Today, we partner with ambitious organizations to design, build, and scale products
              that users love. Our journey is defined by curiosity, resilience, and a relentless
              focus on delivering value.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Founded</h3>
              </div>
              <p className="text-gray-600">
                Established in 2019 with a vision to build delightful software.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Rocket className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">First Launch</h3>
              </div>
              <p className="text-gray-600">
                Shipped our first enterprise product used by thousands of users.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">Milestones</h3>
              </div>
              <p className="text-gray-600">
                50+ successful deliveries across web, mobile, and cloud.
              </p>
            </Card>
            <Card className="p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">Team</h3>
              </div>
              <p className="text-gray-600">
                A diverse team of specialists distributed across time zones.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What we believe</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-rose-600" />
                <h3 className="font-semibold text-gray-900">People first</h3>
              </div>
              <p className="text-gray-600">
                We design for real people and measure success by how much value we create for them.
              </p>
            </Card>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Outcome over output</h3>
              </div>
              <p className="text-gray-600">
                We prioritize clarity, iteration, and shipping meaningful improvements.
              </p>
            </Card>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">Pursuit of craft</h3>
              </div>
              <p className="text-gray-600">
                We sweat the details and hold a high bar for quality across the stack.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Journey</h2>
          {/* Centered alternating timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Spine */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 rounded-full"></div>

            {/* 2019 */}
            <div className="relative md:grid md:grid-cols-2 items-center gap-10 py-6">
              {/* left card */}
              <div className="md:pr-10 md:text-right">
                <span className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  <Calendar className="w-4 h-4" /> 2019
                </span>
                <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">The Foundation</h3>
                  <p className="text-gray-600 mt-1">
                    Ctas was founded with a vision to revolutionize digital experiences. We started
                    with a small team of passionate developers and designers, committed to
                    delivering exceptional software solutions that drive real business value.
                  </p>
                </div>
              </div>
              {/* node */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white shadow-lg"></div>
              </div>
            </div>

            {/* 2020 */}
            <div className="relative md:grid md:grid-cols-2 items-center gap-10 py-6">
              {/* node */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white shadow-lg"></div>
              </div>
              {/* right card */}
              <div className="md:col-start-2 md:pl-10">
                <span className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                  <Rocket className="w-4 h-4" /> 2020
                </span>
                <div className="bg-white border border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">Digital Transformation Pioneer</h3>
                  <p className="text-gray-600 mt-1">
                    During the global shift to digital, we became pioneers in helping businesses
                    transform their operations. We delivered 50+ successful projects across web
                    development, mobile applications, and cloud infrastructure, establishing
                    ourselves as trusted technology partners.
                  </p>
                </div>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative md:grid md:grid-cols-2 items-center gap-10 py-6">
              {/* left card */}
              <div className="md:pr-10 md:text-right">
                <span className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  <Users className="w-4 h-4" /> 2021
                </span>
                <div className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">Global Expansion & Team Growth</h3>
                  <p className="text-gray-600 mt-1">
                    We expanded our reach internationally, serving clients across 15+ countries. Our
                    team grew to 50+ skilled professionals, enabling 24/7 development cycles and
                    round-the-clock support for our global clientele.
                  </p>
                </div>
              </div>
              {/* node */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white shadow-lg"></div>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative md:grid md:grid-cols-2 items-center gap-10 py-6">
              {/* node */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-purple-600 ring-4 ring-white shadow-lg"></div>
              </div>
              {/* right card */}
              <div className="md:col-start-2 md:pl-10">
                <span className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-purple-700">
                  <Target className="w-4 h-4" /> 2022
                </span>
                <div className="bg-white border border-purple-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">Amazon Services Excellence</h3>
                  <p className="text-gray-600 mt-1">
                    Launched our specialized Amazon services division, becoming certified partners
                    in FBA/FBM management, automated product listing systems, and intelligent review
                    feedback platforms. We helped 200+ sellers optimize their Amazon operations and
                    increase revenue by 40% on average.
                  </p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="relative md:grid md:grid-cols-2 items-center gap-10 py-6">
              {/* left card */}
              <div className="md:pr-10 md:text-right">
                <span className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-amber-700">
                  <Award className="w-4 h-4" /> 2023
                </span>
                <div className="bg-white border border-amber-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">AI & Innovation Leadership</h3>
                  <p className="text-gray-600 mt-1">
                    Integrated cutting-edge AI/ML solutions across our service portfolio. We
                    developed proprietary automation tools, intelligent chatbots, and predictive
                    analytics platforms that revolutionized how our clients interact with their
                    customers and manage their businesses.
                  </p>
                </div>
              </div>
              {/* node */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-amber-600 ring-4 ring-white shadow-lg"></div>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative md:grid md:grid-cols-2 items-center gap-10 py-6">
              {/* node */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-red-600 ring-4 ring-white shadow-lg"></div>
              </div>
              {/* right card */}
              <div className="md:col-start-2 md:pl-10">
                <span className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-red-700">
                  <Heart className="w-4 h-4" /> 2024
                </span>
                <div className="bg-white border border-red-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">Future-Ready Innovation</h3>
                  <p className="text-gray-600 mt-1">
                    Today, were at the forefront of emerging technologies, serving 500+ clients
                    worldwide with our comprehensive suite of services. From blockchain solutions to
                    IoT integrations, we continue to push boundaries and deliver transformative
                    digital experiences that shape the future of business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900">Alex Patel</h3>
              <p className="text-sm text-gray-500 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Product strategist focused on compounding value through
                thoughtful execution.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900">Sara Kim</h3>
              <p className="text-sm text-gray-500 mb-3">Head of Design</p>
              <p className="text-gray-600 text-sm">
                Leads design systems and research to deliver accessible, elegant
                experiences.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900">Diego Alvarez</h3>
              <p className="text-sm text-gray-500 mb-3">Head of Engineering</p>
              <p className="text-gray-600 text-sm">
                Builds reliable platforms with a bias for performance and
                maintainability.
              </p>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Global Presence */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Global presence</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card className="p-6">
              <h3 className="text-3xl font-bold text-blue-700">5+</h3>
              <p className="text-gray-600">Countries</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-3xl font-bold text-indigo-700">100+</h3>
              <p className="text-gray-600">Projects delivered</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-3xl font-bold text-emerald-700">98%</h3>
              <p className="text-gray-600">On-time delivery</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-3xl font-bold text-amber-700">4.9/5</h3>
              <p className="text-gray-600">Client rating</p>
            </Card>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default OurStoryPage;
