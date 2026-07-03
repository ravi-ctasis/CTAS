"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Globe, Users, ChevronRight } from "lucide-react";
import Link from "next/link";



const OfficeLocations = () => {
  const [selectedOffice] = useState(0);

  const offices = [
    {
      id: 1,
      name: "Headquarters - Ahmedabad",
      address:
        "A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470",
      city: "Ahmedabad",
      country: "India",
      flag: "🇮🇳",
      phone: "+91 7948993409",
      email: "info@ctasis.com",
      hours: "Mon - Fri: 10:00 AM - 8:00 PM",
      description:
        "Our main headquarters houses our core team of developers, designers, and project managers, ensuring excellence in every project.",
      teamSize: "20+ Members",
      established: "2019",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-orange-400">Global</span> Presence
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Connecting with clients worldwide through strategically located offices in India.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-xs sm:text-sm md:text-base">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" /> 1 Office
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" /> 20+ Team Members
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" /> 24/7 Support
            </div>
          </div>
        </div>
      </section>

      {/* Office Details Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us Near You
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Visit any of our offices for in-person consultations, project discussions, or to meet
              our talented team.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 justify-center items-center">
            {/* Office Card */}
            <Card className="p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {offices[selectedOffice].name}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <span className="text-xl sm:text-2xl mr-2" aria-label="India flag">{offices[selectedOffice].flag}</span>
                    <span className="text-sm sm:text-base">
                      {offices[selectedOffice].city}, {offices[selectedOffice].country}
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-xs sm:text-sm text-gray-500">Established</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {offices[selectedOffice].established}
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">Address</div>
                    <div className="text-gray-600 text-sm sm:text-base break-words">
                      {offices[selectedOffice].address}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">Phone</div>
                    <Link
                      href={`tel:${offices[selectedOffice].phone}`}
                      className="text-gray-600 hover:text-gray-800 text-sm sm:text-base break-all"
                    >
                      {offices[selectedOffice].phone}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">Email</div>
                    <Link
                      href={`mailto:${offices[selectedOffice].email}`}
                      className="text-gray-600 hover:text-gray-800 text-sm sm:text-base break-all"
                    >
                      {offices[selectedOffice].email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">
                      Business Hours
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      {offices[selectedOffice].hours}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-2 sm:mb-0">
                    Team Size
                  </h4>
                  <span className="text-gray-600 font-semibold text-sm sm:text-base">
                    {offices[selectedOffice].teamSize}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  {offices[selectedOffice].description}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving Clients Worldwide
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
            While our offices are in India, we serve clients globally with a remote-first approach
            and flexible working model.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We work with clients across 15+ countries, providing seamless communication and
                project delivery.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our distributed team ensures round-the-clock support and fast project delivery
                across time zones.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Remote-First</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our remote-first culture allows us to hire the best talent and serve clients more
                effectively.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Whether you&apos;re nearby or across the globe, we&apos;re here to bring your ideas to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 w-full sm:w-auto"
              asChild
            >
              <Link href="/contact-us">
                Get In Touch <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 sm:px-8 py-3 w-full sm:w-auto"
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

export default OfficeLocations;
