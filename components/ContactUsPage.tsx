"use client";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ContactFormSection from "@/components/ContactFormSection";
import { PageShell, PageHero } from "@/components/page-design";

const ContactUsPage = () => (
  <PageShell>
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Contact Us"
        badge="Get In Touch"
        title="Let's Start a"
        highlight="Conversation"
        description="Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />
      <ContactFormSection />
      {/* Consultation & FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consultation Process Column */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#249BCA] font-bold">Our Workflow</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-6">Our Consultation Process</h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                At Ctas Info Services, we believe that successful projects are built on clear communication, thorough planning, and robust execution. From the moment you reach out, our team works closely with you to understand your objectives and map out a precise development path.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Requirements scoping", desc: "We schedule an initial call to discuss your business challenges, current software stack, and ideal system objectives." },
                  { step: "02", title: "Technical Feasibility Analysis", desc: "Our engineers analyze integration APIs, data schemas, and performance requirements to design a stable system architecture." },
                  { step: "03", title: "Custom Proposal & Timeline", desc: "We deliver a comprehensive roadmap outlining deliverables, team composition, technology choices, milestones, and budgeting." },
                  { step: "04", title: "Iterative Development & Demos", desc: "Using agile sprints, we construct your application, hosting regular demonstrations to incorporate your feedback at every step." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-2xl font-black text-slate-300 font-mono tracking-tight leading-none pt-1">{item.step}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Column */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#249BCA] font-bold">Common Queries</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {[
                  { q: "How quickly can your dedicated developers start on a project?", a: "Most engagements can kick off inside 24 to 48 hours. We maintain a pool of certified remote experts ready to seamlessly integrate into your workflow." },
                  { q: "Do you offer post-production maintenance and support?", a: "Yes, we provide ongoing support, routine server monitoring, performance audits, security patches, and application updates tailored to your operational SLA." },
                  { q: "Can we hire developers for short-term projects?", a: "Yes. Our risk-free trial allows you to hire top-tier developers on a flexible basis to ensure they perfectly match your high technical standards." },
                  { q: "How do you guarantee the security of our data?", a: "We sign strict NDAs, enforce role-based access management, run static analysis code checks, and set up encrypted database architectures to protect your intellectual property." }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-xl p-5 hover:border-slate-300 transition-colors">
                    <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                      <span className="text-[#249BCA] font-black mr-1">Q.</span>
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed pl-5">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <FooterSection />
  </PageShell>
);

export default ContactUsPage;
