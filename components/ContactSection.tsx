"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Upload,
  File,
  X,
  Loader2,
  AlertTriangle,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [fileError, setFileError] = useState("");

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => setSubmitStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const maxSize = 10 * 1024 * 1024;
    const valid: File[] = [];
    const invalid: string[] = [];
    files.forEach((f) => (f.size > maxSize ? invalid.push(f.name) : valid.push(f)));
    if (invalid.length > 0) {
      setFileError(`Files larger than 10MB: ${invalid.join(", ")}`);
      setTimeout(() => setFileError(""), 5000);
    } else {
      setFileError("");
    }
    setSelectedFiles((prev) => [...prev, ...valid]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const fd = new FormData();
      fd.append("firstName", formData.firstName);
      fd.append("lastName", formData.lastName);
      fd.append("email", formData.email);
      fd.append("company", formData.company);
      fd.append("projectDetails", formData.projectDetails);
      selectedFiles.forEach((file, i) => fd.append(`file_${i}`, file));
      fd.append(
        "fileMetadata",
        JSON.stringify(selectedFiles.map((f) => ({ name: f.name, size: formatFileSize(f.size), type: f.type })))
      );
      const res = await fetch("/api/send-email", { method: "POST", body: fd });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", company: "", projectDetails: "" });
        setSelectedFiles([]);
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@ctasis.com",
      meta: "Get in touch anytime",
      badge: "< 2hrs",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      href: "mailto:info@ctasis.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 79489 93409",
      meta: "Mon-Fri 9AM-6PM IST",
      badge: "Immediate",
      badgeColor: "bg-green-50 text-green-700 border-green-200",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      href: "tel:+917948993409",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail:
        "A-865/866, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, near BSNL Office, Gota, Ahmedabad, Gujarat 382470",
      meta: "India's Tech Hub",
      badge: "By Appointment",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      href: null,
    },
  ];

  const quickStats = [
    { icon: Clock, label: "24h Response", sub: "Average response time" },
    { icon: Globe, label: "Global Reach", sub: "Worldwide support" },
    { icon: MessageSquare, label: "Expert Support", sub: "Technical assistance" },
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-slate-50"
      aria-label="Contact CTAS Info Services"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how our AI-enhanced expertise and e-commerce mastery can drive your
            growth. Our experts are ready to provide personalized solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ── Form ── */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Send us a message</h3>
              <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                Free consultation
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl h-11"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl h-11"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl h-11"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl h-11"
                />
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Project Details *
                </label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements, budget, and timeline..."
                  rows={4}
                  className="border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none rounded-xl"
                  required
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                  Attach Files (Optional)
                </label>
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center w-full h-11 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200"
                    >
                      <Upload className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-sm text-slate-500">Click to upload or drag and drop</span>
                    </label>
                  </div>

                  {fileError && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <p className="text-xs text-red-600">{fileError}</p>
                    </div>
                  )}

                  {selectedFiles.length > 0 && (
                    <div className="space-y-1.5">
                      {selectedFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                          <div className="flex items-center gap-2">
                            <File className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                            <span className="text-xs text-slate-700 truncate max-w-[200px]">{file.name}</span>
                            <span className="text-xs text-slate-400">{formatFileSize(file.size)}</span>
                          </div>
                          <button type="button" onClick={() => removeFile(idx)} className="p-1 hover:bg-red-50 rounded transition-colors">
                            <X className="w-3.5 h-3.5 text-slate-400 hover:text-red-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-slate-400">Supported: PDF, JPG, JPEG, PNG, DOC (Max 10MB each)</p>
                </div>
              </div>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-sm text-green-700">
                    Thank you! Your message was sent. We&apos;ll respond within 24 hours.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl p-4">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                We&apos;ll respond within 24 hours
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request a Quote
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Contact Info ── */}
          <div className="space-y-4">
            {/* Contact cards */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${info.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${info.iconColor}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{info.title}</h4>
                      <span className={`text-xs font-medium border px-2 py-0.5 rounded-full flex-shrink-0 ${info.badgeColor}`}>
                        {info.badge}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 leading-relaxed">{info.detail}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{info.meta}</p>
                  </div>
                </div>
              );

              return info.href ? (
                <a key={info.title} href={info.href} className="block group" aria-label={`${info.title}: ${info.detail}`}>
                  {content}
                </a>
              ) : (
                <div key={info.title}>{content}</div>
              );
            })}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "200+", label: "Happy Clients", color: "text-green-600" },
                { value: "7+", label: "Years Experience", color: "text-blue-600" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {quickStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                    <Icon className="w-4 h-4 text-slate-400 mx-auto mb-2" aria-hidden="true" />
                    <div className="text-xs font-semibold text-slate-900">{s.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5 hidden sm:block">{s.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
