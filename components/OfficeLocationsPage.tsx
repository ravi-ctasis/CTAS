"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react";

import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import {
  PageShell,
  PageHero,
  PageCTA,
  SectionHeader,
  fadeUp,
  fraunces,
  NAVY,
  CYAN,
} from "@/components/page-design";

const office = {
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
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14677.863503494289!2d72.5370109!3d23.1166406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83dd203973ad%3A0x5cc3fba7c64241c7!2sCtas%20Info%20Services%20LLP!5e0!3m2!1sen!2sin!4v1783348770725!5m2!1sen!2sin",
  mapsLink: "https://www.google.com/maps/place/Ctas+Info+Services+LLP/@23.1166406,72.5370109,17z",
};

const globalReach = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We work with clients across 20+ countries, providing seamless communication and project delivery.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our distributed team ensures round-the-clock support and fast project delivery across time zones.",
  },
  {
    icon: Users,
    title: "Remote-First",
    description:
      "Our remote-first culture allows us to hire the best talent and serve clients more effectively.",
  },
];

const InfoRow = ({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3">
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{ backgroundColor: `${NAVY}10` }}
    >
      <Icon className="w-4 h-4" style={{ color: NAVY }} />
    </div>
    <div className="min-w-0">
      <div className="font-semibold text-slate-900 text-sm mb-0.5">{label}</div>
      <div className="text-slate-500 text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

const OfficeLocationsPage = () => (
  <PageShell>
    <Navigation />
    <main>
      <PageHero
        ariaLabel="Office Locations"
        badge="Our Presence"
        title="Our"
        highlight="Global Presence"
        description="Connecting with clients worldwide through our strategically located office in Ahmedabad, India — serving businesses across 20+ countries."
        stats={[
          { number: "1", label: "Office", icon: MapPin, description: "Ahmedabad HQ" },
          { number: "20+", label: "Team Members", icon: Users, description: "Certified experts" },
          { number: "24/7", label: "Support", icon: Globe, description: "Global coverage" },
        ]}
      />

      <section className="py-10 sm:py-12 lg:py-14 bg-[#F6F8FA]">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader
            badge="Visit Us"
            title="Find Us"
            highlight="Near You"
            description="Visit our office for in-person consultations, project discussions, or to meet our talented team."
          />

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-[1584px] mx-auto">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200/80 rounded-[1.75rem] p-7 sm:p-9 shadow-sm h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div>
                  <h3 className={`${fraunces.className} text-xl sm:text-2xl font-medium text-slate-900 mb-2`}>
                    {office.name}
                  </h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <span className="text-xl mr-2" aria-label="India flag">
                      {office.flag}
                    </span>
                    {office.city}, {office.country}
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Established</div>
                  <div className="font-semibold text-slate-900">{office.established}</div>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <InfoRow icon={MapPin} label="Address">
                  {office.address}
                </InfoRow>
                <InfoRow icon={Phone} label="Phone">
                  <Link href={`tel:${office.phone}`} className="hover:text-[#13345A] transition-colors">
                    {office.phone}
                  </Link>
                </InfoRow>
                <InfoRow icon={Mail} label="Email">
                  <Link href={`mailto:${office.email}`} className="hover:text-[#13345A] transition-colors">
                    {office.email}
                  </Link>
                </InfoRow>
                <InfoRow icon={Clock} label="Business Hours">
                  {office.hours}
                </InfoRow>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-slate-900 text-sm">Team Size</span>
                  <span className="text-sm font-semibold" style={{ color: CYAN }}>
                    {office.teamSize}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{office.description}</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col bg-white border border-slate-200/80 rounded-[1.75rem] overflow-hidden shadow-sm h-full min-h-[320px] lg:min-h-0"
            >
              <div className="px-6 sm:px-7 py-5 border-b border-slate-100">
                <h3 className={`${fraunces.className} text-lg sm:text-xl font-medium text-slate-900`}>
                  Office Location
                </h3>
                <p className="text-sm text-slate-500 mt-1">Ctas Info Services LLP, Gota, Ahmedabad</p>
              </div>
              <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
                <iframe
                  src={office.mapEmbedUrl}
                  title="Ctas Info Services LLP office location on Google Maps"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  // Required when parent page sets Cross-Origin-Embedder-Policy
                  {...({ credentialless: "" } as React.IframeHTMLAttributes<HTMLIFrameElement>)}
                />
              </div>
              <div className="px-6 sm:px-7 py-4 border-t border-slate-100 bg-[#F6F8FA]">
                <Link
                  href={office.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: NAVY }}
                >
                  <MapPin className="w-4 h-4" style={{ color: CYAN }} />
                  Open in Google Maps
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <SectionHeader
            badge="Worldwide"
            title="Serving Clients"
            highlight="Worldwide"
            description="While our office is in India, we serve clients globally with a remote-first approach and flexible working model."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {globalReach.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center bg-[#F6F8FA] border border-slate-200/80 rounded-2xl p-7 sm:p-8 hover:shadow-lg hover:shadow-[#13345A]/[0.04] transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${CYAN}18` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: NAVY }} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Start Your Project?"
        description="Whether you're nearby or across the globe, we're here to bring your ideas to life."
        primaryLabel="Get In Touch"
        secondaryHref="/services"
        secondaryLabel="View Our Services"
      />
    </main>
    <FooterSection />
  </PageShell>
);

export default OfficeLocationsPage;
