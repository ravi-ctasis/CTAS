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
    </main>
    <FooterSection />
  </PageShell>
);

export default ContactUsPage;
