"use client";

import Script from "next/script";

const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Ctas Info Services LLP provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ctas Info Services LLP provides comprehensive technology services including Amazon SP-API integration, AI-powered web solutions, e-commerce automation, custom web and mobile app development, cloud solutions, DevOps services, FinTech solutions, healthcare technology, logistics automation, and education technology platforms. We specialize in multi-marketplace management and AI integration for global businesses."
        }
      },
      {
        "@type": "Question",
        name: "Where is Ctas Info Services LLP located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ctas Info Services LLP is located in Ahmedabad, Gujarat, India. We serve clients globally with our headquarters in Ahmedabad and provide remote services to businesses worldwide."
        }
      },
      {
        "@type": "Question",
        name: "What is Amazon SP-API integration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amazon SP-API (Selling Partner API) integration allows businesses to programmatically access Amazon's marketplace data and functionality. We help businesses integrate with Amazon SP-API to automate inventory management, order processing, product listings, pricing optimization, and analytics across multiple Amazon marketplaces."
        }
      },
      {
        "@type": "Question",
        name: "How long has Ctas Info Services LLP been in business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ctas Info Services LLP has been in business since 2019, making us one of India's pioneering technology firms. We have over 5 years of experience in delivering cutting-edge technology solutions to businesses worldwide."
        }
      },
      {
        "@type": "Question",
        name: "What industries does Ctas Info Services LLP serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve multiple industries including retail, healthcare, financial services, logistics, education, e-commerce, and technology. Our solutions are tailored for businesses looking to scale globally through technology innovation and automation."
        }
      },
      {
        "@type": "Question",
        name: "Does Ctas Info Services LLP provide AI solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in AI-powered solutions including machine learning integration, AI analytics, automated decision-making systems, predictive analytics, and intelligent automation for e-commerce and business processes."
        }
      },
      {
        "@type": "Question",
        name: "What technologies does Ctas Info Services LLP use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use modern technologies including React, Next.js, TypeScript, Python, Node.js, AWS, Azure, Google Cloud, Amazon SP-API, AI/ML frameworks, cloud computing platforms, and various e-commerce and marketplace APIs."
        }
      },
      {
        "@type": "Question",
        name: "How many projects has Ctas Info Services LLP completed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ctas Info Services LLP has successfully delivered over 100 projects across retail, healthcare, and financial services. Our team of 20+ certified professionals has extensive experience in various technology domains."
        }
      },
      {
        "@type": "Question",
        name: "Does Ctas Info Services LLP provide cloud solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive cloud solutions including cloud migration, cloud architecture design, cloud security, cloud optimization, and multi-cloud strategies using AWS, Azure, and Google Cloud platforms."
        }
      },
      {
        "@type": "Question",
        name: "What makes Ctas Info Services LLP different from other technology companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ctas Info Services LLP stands out for our specialized expertise in Amazon SP-API integration, AI-powered solutions, multi-marketplace management, and our proven track record of delivering 200+ successful projects. We combine deep domain expertise with innovative technology solutions and provide 24/7 support with 99.9% uptime."
        }
      }
    ]
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
};

export default FAQSchema;
