"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Auto-hide status messages after 5 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData to handle form submission
      const formDataToSend = new FormData();

      // Get page information
      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const pageTitle = typeof window !== "undefined" ? document.title : "";
      const referrer = typeof window !== "undefined" ? document.referrer : "";

      // Add form fields
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("company", formData.company || "");
      formDataToSend.append("projectDetails", formData.projectDetails);

      // Add page information
      formDataToSend.append("pageUrl", pageUrl);
      formDataToSend.append("pageTitle", pageTitle);
      formDataToSend.append("referrer", referrer);

      // Add empty file metadata for API compatibility
      formDataToSend.append("fileMetadata", JSON.stringify([]));

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          projectDetails: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F6F8FA]">
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 flex flex-col h-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Send us a message</h2>
              <p className="text-slate-500 text-sm">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col h-full">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="h-10 text-sm border border-slate-200 focus:border-[#13345A] rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="h-10 text-sm border border-slate-200 focus:border-[#13345A] rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="h-10 text-sm border border-slate-200 focus:border-[#13345A] rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="h-10 text-sm border border-slate-200 focus:border-[#13345A] rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="h-10 text-sm border border-slate-200 focus:border-[#13345A] rounded-lg"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <Textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us about your project or how we can help you..."
                  className="text-sm border border-slate-200 focus:border-[#13345A] rounded-lg resize-none h-full"
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <p className="text-sm text-green-700">
                      Thank you! Your message has been sent successfully. We&apos;ll respond within
                      24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-sm text-red-700">
                      Sorry, there was an error sending your message. Please try again or contact us
                      directly.
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2 mt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#13345A] hover:bg-[#0E2843] text-white font-medium py-3 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Request a Quote
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Other Ways to Reach Us */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 flex flex-col h-full">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Other Ways to Reach Us</h2>
              <p className="text-slate-500 text-sm">Choose the method that works best for you</p>
            </div>

            <div className="space-y-4 flex-1">
              <div className="bg-[#F6F8FA] rounded-xl p-4 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-[#13345A] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-500 text-sm mb-1">Send us an email anytime</p>
                    <a href="mailto:info@ctasis.com" className="text-[#13345A] font-medium hover:text-[#249BCA] text-sm">
                      info@ctasis.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F6F8FA] rounded-xl p-4 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-[#249BCA] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-500 text-sm mb-1">Mon-Fri from 10am to 8pm</p>
                    <a href="tel:+917948993409" className="text-[#13345A] font-medium hover:text-[#249BCA] text-sm">
                      +91 7948993409
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F6F8FA] rounded-xl p-4 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-[#13345A] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-500 text-sm mb-1">Our office location</p>
                    <p className="text-slate-700 font-medium text-sm">
                      A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy,
                      near BSNL Office, Gota, Ahmedabad, Gujarat 382470
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F6F8FA] rounded-xl p-4 border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-[#249BCA] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-500 text-sm mb-1">When we&apos;re available</p>
                    <p className="text-slate-700 font-medium text-sm">Mon-Fri: 10AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
