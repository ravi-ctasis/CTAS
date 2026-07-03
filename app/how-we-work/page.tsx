"use client";

import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import {
  Users,
  Shield,
  CheckCircle,
  MessageCircle,
  Code,
  Users2,
  Rocket,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import Analyzing from "../../public/analyzing.webp";
import Hiring from "../../public/developers-hiring.webp";
import project from "../../public/Initiatingproject.webp";
import Delivering from "../../public/delivering.webp";
import Link from "next/link";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    title: "Project Consultation",
    description: "Expert consultation for your project requirements",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Team Assembly",
    description: "Assembling the perfect team for your project",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
  },
  {
    id: 3,
    title: "Development Process",
    description: "Agile development with regular updates",
    icon: <Code className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Comprehensive testing and quality checks",
    icon: <Shield className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    title: "Deployment",
    description: "Smooth deployment and go-live support",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
  },
  {
    id: 6,
    title: "Ongoing Support",
    description: "24/7 support and maintenance services",
    icon: <Headphones className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-600",
  },
];

const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How We <span className="text-orange-400">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery through collaboration,
              innovation, and excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Rocket className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing support, we provide end-to-end solutions that
              drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyzing Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Simple Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Analyzing Your Requirements</h2>
              <p className="text-lg text-gray-600 mb-8">
                We begin every project by thoroughly understanding your business needs, technical
                requirements, and success metrics. Our team conducts detailed analysis to ensure we
                deliver exactly what you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Analysis</h3>
                    <p className="text-gray-600">
                      Understanding your business goals and objectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Technical Assessment</h3>
                    <p className="text-gray-600">
                      Evaluating technical feasibility and requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Resource Planning</h3>
                    <p className="text-gray-600">Planning team allocation and project timeline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Illustration */}
            <div className="flex justify-center">
              <Image
                src={Analyzing}
                alt="Analyzing Requirements"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hiring the Best Developers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Simple Illustration */}
            <div className="flex justify-center">
              <Image
                src={Hiring}
                alt="Hiring Developers"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right Side - Simple Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hiring the Best Developers</h2>
              <p className="text-lg text-gray-600 mb-8">
                We carefully select and assemble a team of experienced developers, designers, and
                project managers who are perfectly suited for your project. Our rigorous hiring
                process ensures quality and expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Screening</h3>
                    <p className="text-gray-600">
                      Thorough evaluation of technical skills and experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Team Matching</h3>
                    <p className="text-gray-600">
                      Matching the right skills to your project requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Cultural Fit</h3>
                    <p className="text-gray-600">
                      Ensuring team members align with your company culture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiating Project Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Simple Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Initiating Your Project</h2>
              <p className="text-lg text-gray-600 mb-8">
                Once the team is assembled, we kick off your project with a comprehensive planning
                session. We establish clear communication channels, set up project management tools,
                and define success metrics.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Project Kickoff</h3>
                    <p className="text-gray-600">Comprehensive project initiation and planning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Communication Setup</h3>
                    <p className="text-gray-600">
                      Establishing clear communication channels and protocols
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Milestone Planning</h3>
                    <p className="text-gray-600">
                      Setting up project milestones and delivery schedules
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Simple Illustration */}
            <div className="flex justify-center">
              <Image
                src={project}
                alt="Initiating Project"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivering Quality Software Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Simple Content */}
            <div className="flex justify-center">
              <Image
                src={Delivering}
                alt="Delivering Quality Software"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right Side - Simple Illustration */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Delivering Quality Software</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team will work with you to understand your requirements. We will create a
                detailed project plan and timeline. Our developers will build your software using
                the latest technologies and best practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Development</h3>
                    <p className="text-gray-600">
                      Building software with clean code and best practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Regular Updates</h3>
                    <p className="text-gray-600">Providing regular progress updates and demos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Testing & QA</h3>
                    <p className="text-gray-600">Comprehensive testing and quality assurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Process?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology and experienced team ensure successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users2 className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced developers and designers bring years of expertise to every project
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorous testing and quality assurance processes ensure bug-free, reliable software
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Agile development methodology ensures faster delivery without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your requirements and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
              asChild
            >
              <Link href="/contact-us">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
              asChild
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default HowWeWork;
