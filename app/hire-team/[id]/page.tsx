"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import {
    ArrowRight,
    ChevronDown,
    Shield,
    Users,
    Zap,
} from "lucide-react";
import {
    allPagesData,
    DeveloperType,
    FAQ,
    Highlight,
    HiringStep,
    Logo,
    Reason,
    Stat,
    // types from data for dynamic sections
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    IntroContent,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    SectionHeader,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    SectionMedia,
} from "@/data/hire-page-data";
import { useParams } from "next/navigation";
import Image from "next/image";


export default function Webdevelopers() {
    const [message, setMessage] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Auto-resize textarea
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [message]);

    const params = useParams();
    const pageId = params.id as string;

    function getSectionData<T>(sectionId: string): T[] {
        const page = allPagesData.find((p) => p.pageId === pageId);
        if (!page) return [];
        const section = page.sections.find((s) => s.sectionId === sectionId);
        if (!section) return [];
        return section.data as T[];
    }

    const introContent = (getSectionData as unknown as <T>(s: string) => T[])("intro") as unknown as IntroContent[];
    const intro = introContent && introContent.length > 0 ? introContent[0] : undefined;
    const faqHeaderContent = (getSectionData as unknown as <T>(s: string) => T[])("faqHeader") as unknown as SectionHeader[];
    const faqHeader = faqHeaderContent && faqHeaderContent.length > 0 ? faqHeaderContent[0] : undefined;
    const faqMediaContent = (getSectionData as unknown as <T>(s: string) => T[])("faqMedia") as unknown as SectionMedia[];
    const faqMedia = faqMediaContent && faqMediaContent.length > 0 ? faqMediaContent[0] : undefined;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navigation />
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white h-auto w-full">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                    </div>
                </div>
                <div className="relative container mx-auto px-4 py-10 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 max-w-full lg:max-w-3xl text-center sm:text-left">
                                {/* Animated dot */}
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>

                                {/* Text */}
                                <p className="text-xs sm:text-sm md:text-base font-medium text-green-600 leading-relaxed">
                                    NO HIRING FEE, HIRE OFFSHORE DEVELOPERS & SAVE UP TO 60% COST & TIME. START WORKING FROM NEXT DAY
                                </p>
                            </div>

                            <h1 className="text-4xl sm:text-2xl lg:text-5xl font-bold mb-6 leading-tight">
                                <span className="block bg-clip-text text-white text-transparent">
                                    {pageId === "webdevelopers" && "Hire Top Web Developers in India"}
                                    {pageId === "hire-aspnet-developer" && "Hire Top ASP.NET Developers in India"}
                                    {pageId === "hire-java-developer" && "Hire Top Java Developers in India"}
                                    {pageId === "hire-php-developer" && "Hire Top PHP Developers in India"}
                                    {pageId === "hire-python-developer" && "Hire Top Python Developers in India"}
                                    {pageId === "hire-ruby-developer" && "Hire Top Ruby Developers in India"}
                                    {pageId === "hire-laravel-developer" && "Hire Top Laravel Developers in India"}
                                    {pageId === "hire-devops-developer" && "Hire Top DevOps Developers in India"}
                                    {pageId === "hire-angular-developer" && "Hire Top Angular Developers in India"}
                                    {pageId === "hire-react-developer" && "Hire Top React Developers in India"}
                                    {pageId === "hire-vue-developer" && "Hire Top Vue.js Developers in India"}
                                    {pageId === "hire-node-developer" && "Hire Top Node.js Developers in India"}
                                    {pageId === "hire-mern-developer" && "Hire Top MERN Developers in India"}
                                    {pageId === "hire-mean-developer" && "Hire Top MEAN Developers in India"}
                                    {pageId === "hire-blazor-developer" && "Hire Top Blazor Developers in India"}
                                    {pageId === "hire-magento-developer" && "Hire Top Magento Developers in India"}
                                    {pageId === "hire-umbraco-developer" && "Hire Top Umbraco Developers in India"}
                                    {pageId === "hire-html5-developer" && "Hire Top HTML5 Developers in India"}
                                    {pageId === "hire-drupal-developer" && "Hire Top Drupal Developers in India"}
                                    {pageId === "hire-shopify-developer" && "Hire Top Shopify Developers in India"}
                                    {pageId === "hire-wordpress-developer" && "Hire Top Wordpress Developers in India"}
                                    {pageId === "hire-smartcontract-developer" && "Hire Expert Smart Contract Developers"}
                                    {pageId === "hire-ethereum-developer" && "Hire Certified Ethereum Developers"}
                                    {pageId === "hire-ico-developer" && "Hire Professional ICO Developers"}
                                    {pageId === "hire-cryptocurrency-developer" && "Hire Experienced Cryptocurrency Developers"}
                                    {pageId === "hire-graphql-developer" && "Hire Skilled GraphQL Developers"}
                                    {pageId === "hire-powerbi-developer" && "Hire Dedicated Power BI Developers"}
                                    {pageId === "hire-chatbot-developer" && "Hire Chatbot Developers for AI-Powered Automation"}
                                    {pageId === "hire-dialogflow-developer" && "Hire Certified Dialogflow Developers"}
                                    {pageId === "hire-rpa-developer" && "Hire Expert RPA Developers for Intelligent Automation"}
                                    {pageId === "hire-tensorflow-developer" && "Hire Certified TensorFlow Developers"}
                                    {pageId === "hire-kentico-developer" && "Hire Expert Kentico Developers for CMS & Digital Experience Solutions"}
                                    {pageId === "hire-seo-developer" && "Hire Expert SEO Developers to Boost Your Website Visibility and Performance"}
                                    {pageId === "hire-smm-developer" && "Hire Expert SMM Developers to Grow Your Brand and Engagement Online"}
                                    {pageId === "hire-ppc-developer" && "Hire Certified PPC Developers for High-Performance Advertising Campaigns"}
                                    {pageId === "hire-fullstack-developer" && "Hire Full Stack Developers"}
                                    {pageId === "hire-web-developers" && "Hire Web Developers"}
                                    {pageId === "hire-software-developer" && "Hire Software Developers"}
                                    {pageId === "hire-web-app-developer" && "Hire Web App Developers"}
                                    {pageId === "hire-webdesign-developer" && "Hire Web Designers"}
                                    {pageId === "hire-digital-marketing" && "Hire Digital Marketing Experts"}
                                    {pageId === "hire-blockchain-developer" && "Hire Blockchain Developers"}
                                    {pageId === "hire-wearable-developer" && "Hire Wearable App Developers"}


                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-full lg:max-w-none">
                                {pageId === "webdevelopers" && "Finding skilled and dedicated web developers to build custom, high-performance web solutions can be challenging. With years of experience, Ctas is a trusted partner for web development services. Hire web developers in India or the USA to create solutions that help your business thrive in the digital marketplace."}
                                {pageId === "hire-aspnet-developer" && "Finding skilled and dedicated ASP.NET developers to build robust, scalable web applications can be challenging. With years of experience, Ctas is a trusted partner for ASP.NET development services. Hire ASP.NET developers in India to create enterprise-grade solutions that help your business thrive."}
                                {pageId === "hire-java-developer" && "Finding skilled and dedicated Java developers to build robust, scalable applications can be challenging. With years of experience, Ctas is a trusted partner for Java development services. Hire Java developers in India to create enterprise-grade solutions that help your business thrive."}
                                {pageId === "hire-php-developer" && "Finding skilled and dedicated PHP developers to build dynamic, scalable web applications can be challenging. With years of experience, Ctas is a trusted partner for PHP development services. Hire PHP developers in India to create powerful web solutions that help your business grow."}
                                {pageId === "hire-python-developer" && "Finding skilled and dedicated Python developers to build versatile, high-performance applications can be challenging. With years of experience, Ctas is a trusted partner for Python development services. Hire Python developers in India to create innovative solutions that help your business succeed."}
                                {pageId === "hire-ruby-developer" && "Finding skilled and dedicated Ruby developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for Ruby development services. Hire Ruby developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-laravel-developer" && "Finding skilled and dedicated Laravel developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for Laravel development services. Hire Laravel developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-devops-developer" && "Finding skilled and dedicated DevOps developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for DevOps development services. Hire DevOps developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-angular-developer" && "Finding skilled and dedicated Angular developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for Angular development services. Hire Angular developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-react-developer" && "Finding skilled and dedicated React developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for React development services. Hire React developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-vue-developer" && "Finding skilled and dedicated Vue.js developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for Vue.js development services. Hire Vue.js developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-node-developer" && "Finding skilled and dedicated Node.js developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for Node.js development services. Hire Node.js developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-mern-developer" && "Finding skilled and dedicated MERN developers to build elegant, maintainable web applications can be challenging. With years of experience, Ctas is a trusted partner for MERN development services. Hire MERN developers in India to create beautiful solutions that help your business thrive."}
                                {pageId === "hire-mean-developer" && "Finding skilled and dedicated MEAN Stack developers to build robust, maintainable, and scalable web applications can be challenging. With years of experience, Ctas is a trusted partner for MEAN Stack development services. Hire MEAN Stack developers in India to create powerful full-stack solutions that help your business thrive."}
                                {pageId === "hire-blazor-developer" &&
                                    "Finding skilled and dedicated Blazor developers to build robust, maintainable, and scalable web applications can be challenging. With years of experience, Ctas is a trusted partner for Blazor development services. Hire Blazor developers in India to create powerful, interactive solutions that help your business thrive."}
                                {pageId === "hire-magento-developer" &&
                                    "Finding skilled and dedicated Magento developers to build robust, maintainable, and scalable e-commerce platforms can be challenging. With years of experience, Ctas is a trusted partner for Magento development services. Hire Magento developers in India to create powerful, secure, and high-performing online stores that help your business thrive."}
                                {pageId === "hire-umbraco-developer" &&
                                    "Finding skilled and dedicated Umbraco developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for Umbraco development services. Hire Umbraco developers in India to create powerful, secure, and high-performing websites that help your business thrive."}

                                {pageId === "hire-wordpress-developer" &&
                                    "Finding skilled and dedicated WordPress developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for WordPress development services. Hire WordPress developers in India to create powerful, secure, and high-performing websites that help your business thrive."}
                                {pageId === "hire-shopify-developer" &&
                                    "Finding skilled and dedicated Shopify developers to build robust, maintainable, and scalable online stores can be challenging. With years of experience, Ctas is a trusted partner for Shopify development services. Hire Shopify developers in India to create powerful, secure, and high-performing eCommerce websites that help your business thrive."}
                                {pageId === "hire-drupal-developer" &&
                                    "Finding skilled and dedicated Drupal developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for Drupal development services. Hire Drupal developers in India to create powerful, secure, and high-performing websites that help your business thrive."}
                                {pageId === "hire-html5-developer" &&
                                    "Finding skilled and dedicated html5 developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for html5 development services. Hire html5 developers in India to create powerful, secure, and high-performing websites that help your business thrive."}
                                {pageId === "hire-smartcontract-developer" &&
                                    "Finding skilled and dedicated Smart Contract developers to build secure, reliable, and decentralized blockchain applications can be challenging. With proven expertise, Ctas is your trusted partner for Smart Contract development services. Hire Smart Contract developers in India to create efficient, transparent, and tamper-proof blockchain solutions that drive trust and innovation."}

                                {pageId === "hire-ethereum-developer" &&
                                    "Finding experienced Ethereum developers to build decentralized applications and blockchain-based platforms can be complex. With years of blockchain expertise, Ctas offers certified Ethereum development services. Hire Ethereum developers in India to create secure, scalable, and high-performance dApps and smart contract solutions tailored to your business goals."}

                                {pageId === "hire-ico-developer" &&
                                    "Launching a successful ICO requires experienced blockchain and tokenization experts. Ctas provides end-to-end ICO development services, from smart contract creation to wallet integration and marketing support. Hire ICO developers in India to ensure a secure, transparent, and compliant fundraising process for your blockchain venture."}

                                {pageId === "hire-cryptocurrency-developer" &&
                                    "Building reliable cryptocurrency platforms requires skilled developers with deep blockchain expertise. Ctas offers professional cryptocurrency development services for custom tokens, exchanges, and wallets. Hire cryptocurrency developers in India to create scalable, secure, and high-performance digital currency solutions for your business."}

                                {pageId === "hire-graphql-developer" &&
                                    "Finding expert GraphQL developers to build fast, flexible, and efficient APIs can be difficult. Ctas provides skilled GraphQL development services to enhance data querying, performance, and integration. Hire GraphQL developers in India to deliver seamless, data-driven applications optimized for modern architectures."}

                                {pageId === "hire-powerbi-developer" &&
                                    "Transform your business data into actionable insights with expert Power BI developers. Ctas offers Power BI development services to create custom dashboards, reports, and analytics solutions. Hire Power BI developers in India to unlock powerful visualization and decision-making capabilities for your enterprise."}

                                {pageId === "hire-chatbot-developer" &&
                                    "Finding expert chatbot developers to build intelligent conversational systems can be challenging. Ctas provides certified chatbot development services using AI and NLP technologies. Hire chatbot developers in India to create interactive, automated, and customer-focused chat solutions for web, mobile, and social platforms."}

                                {pageId === "hire-dialogflow-developer" &&
                                    "Developing natural and engaging conversational AI requires experienced Dialogflow developers. Ctas specializes in creating advanced chatbots and virtual assistants with Google Dialogflow. Hire Dialogflow developers in India to automate customer interactions and deliver personalized, intelligent user experiences."}

                                {pageId === "hire-rpa-developer" &&
                                    "Automating business processes efficiently requires skilled RPA developers. Ctas offers intelligent automation solutions using leading RPA platforms. Hire RPA developers in India to streamline workflows, reduce costs, and enhance productivity with customized robotic process automation."}

                                {pageId === "hire-tensorflow-developer" &&
                                    "Finding certified TensorFlow developers to build cutting-edge AI and machine learning solutions can be challenging. Ctas provides expert TensorFlow development services for deep learning, computer vision, and predictive analytics. Hire TensorFlow developers in India to transform your data into intelligent, high-performing business solutions."}

                                {pageId === "hire-kentico-developer" &&
                                    "Building scalable, feature-rich, and secure digital experiences requires expert Kentico developers. Ctas offers professional Kentico development services to create CMS-driven websites, eCommerce platforms, and enterprise portals. Hire Kentico developers in India to deliver seamless, high-performance digital solutions for your business."}
                                {pageId === "hire-seo-developer" &&
                                    "Enhancing your website’s visibility, traffic, and rankings requires skilled SEO developers. Ctas offers professional SEO development services focused on technical optimization, performance tuning, and analytics integration. Hire SEO developers in India to ensure your website achieves higher search engine rankings and sustainable organic growth."}

                                {pageId === "hire-smm-developer" &&
                                    "Building a strong social media presence and engaging audience connections requires expert SMM developers. Ctas provides professional SMM development and marketing services to enhance brand visibility, boost engagement, and drive conversions. Hire SMM developers in India to create data-driven campaigns that grow your digital influence."}

                                {pageId === "hire-ppc-developer" &&
                                    "Driving qualified leads and measurable ROI through paid campaigns requires experienced PPC developers. Ctas offers expert PPC development and management services, focusing on strategy, optimization, and analytics. Hire PPC developers in India to create targeted, cost-effective ad campaigns that deliver maximum conversions and business growth."}
                                {pageId === "hire-fullstack-developer" &&
                                    "Hire experienced Full Stack Developers to build robust, scalable, and high-performance web and mobile applications. Our developers specialize in both frontend and backend technologies, ensuring seamless integration, clean architecture, and efficient workflows for modern digital solutions."}

                                {pageId === "hire-web-developers" &&
                                    "Hire professional Web Developers to create responsive, secure, and high-performing websites. Our experts craft dynamic and user-friendly web solutions tailored to your business goals using the latest frameworks and technologies."}

                                {pageId === "hire-software-developer" &&
                                    "Hire expert Software Developers to build reliable, scalable, and custom software solutions. From concept to deployment, our developers deliver innovative products that enhance productivity and drive business growth."}

                                {pageId === "hire-web-app-developer" &&
                                    "Hire skilled Web App Developers to design and develop interactive, high-performance web applications. Our developers leverage modern frameworks to create seamless user experiences across all devices and platforms."}

                                {pageId === "hire-webdesign-developer" &&
                                    "Hire creative Web Designers who craft visually appealing, user-centered, and brand-aligned website designs. Our design experts ensure that every pixel enhances usability, engagement, and digital identity."}

                                {pageId === "hire-digital-marketing" &&
                                    "Hire certified Digital Marketing Experts to increase your online visibility, generate qualified leads, and maximize conversions. Our team combines data-driven strategies, creativity, and technology to deliver measurable marketing success."}

                                {pageId === "hire-blockchain-developer" &&
                                    "Hire experienced Blockchain Developers to build secure, decentralized, and future-ready blockchain solutions. From smart contracts and dApps to DeFi and NFT platforms, our experts bring innovation and scalability to your blockchain projects."}

                                {pageId === "hire-wearable-developer" &&
                                    "Hire professional Wearable App Developers to create smart, connected, and user-centric wearable applications. Our experts design seamless, data-driven solutions for smartwatches, fitness trackers, and IoT-enabled devices — enhancing engagement, health tracking, and productivity."}

                                {pageId === "hire-ppc-developer" &&
                                    "Driving qualified leads and measurable ROI through paid campaigns requires experienced PPC developers. Ctas offers expert PPC development and management services, focusing on strategy, optimization, and analytics. Hire PPC developers in India to create targeted, cost-effective ad campaigns that deliver maximum conversions and business growth."}



                            </p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-full lg:max-w-none">
                                {pageId === "webdevelopers" && "Our team provides access to a carefully selected pool of top web development talent, including front-end, back-end, and full-stack developers. By hiring web developers from India, you ensure timely delivery of tailored projects that meet your business objectives and drive measurable results."}
                                {pageId === "hire-aspnet-developer" && "Our team provides access to a carefully selected pool of top ASP.NET development talent, including .NET Core, MVC, and enterprise developers. By hiring ASP.NET developers from India, you ensure timely delivery of robust applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-java-developer" && "Our team provides access to a carefully selected pool of top Java development talent, including Spring, Hibernate, and enterprise developers. By hiring Java developers from India, you ensure timely delivery of robust applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-php-developer" && "Our team provides access to a carefully selected pool of top PHP development talent, including Laravel, WordPress, and custom PHP developers. By hiring PHP developers from India, you ensure timely delivery of dynamic web solutions that meet your business objectives and drive measurable results."}
                                {pageId === "hire-python-developer" && "Our team provides access to a carefully selected pool of top Python development talent, including Django, Flask, and data science developers. By hiring Python developers from India, you ensure timely delivery of versatile applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-ruby-developer" && "Our team provides access to a carefully selected pool of top Ruby development talent, including Rails, Sinatra, and full-stack developers. By hiring Ruby developers from India, you ensure timely delivery of elegant applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-laravel-developer" && "Our team provides access to a carefully selected pool of top Laravel development talent, including Laravel, Lumen, and enterprise developers. By hiring Laravel developers from India, you ensure timely delivery of elegant applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-devops-developer" && "Our team provides access to a carefully selected pool of top DevOps development talent, including Docker, Kubernetes, and enterprise developers. By hiring DevOps developers from India, you ensure timely delivery of elegant applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-angular-developer" && "Our team provides access to a carefully selected pool of top Angular development talent, including Angular, RxJS, and enterprise developers. By hiring Angular developers from India, you ensure timely delivery of elegant applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-react-developer" && "Our team provides access to a carefully selected pool of top React development talent, including React, Redux, and enterprise developers. By hiring React developers from India, you ensure timely delivery of elegant applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-vue-developer" && "Our team provides access to a carefully selected pool of top Vue.js development talent, including Vue.js, Vuex, and enterprise developers. By hiring Vue.js developers from India, you ensure timely delivery of elegant applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-node-developer" && "Our team provides access to a carefully selected pool of top Node.js development talent, including Node.js, Express, and enterprise developers. By hiring Node.js developers from India, you ensure timely delivery of elegant applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-mern-developer" && "Our team provides access to a carefully selected pool of top MERN Stack development talent, including MongoDB, Express.js, React.js, and Node.js experts. By hiring MERN developers from India, you ensure timely delivery of dynamic, scalable applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-mean-developer" && "Our team provides access to a carefully selected pool of top MEAN Stack development talent, including MongoDB, Express.js, Angular, and Node.js experts. By hiring MEAN developers from India, you ensure timely delivery of dynamic, scalable applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-blazor-developer" &&
                                    "Our team provides access to a carefully selected pool of top Blazor development talent, including front-end and backend experts. By hiring Blazor developers from India, you ensure timely delivery of interactive, scalable applications that meet your business objectives and drive measurable results."}
                                {pageId === "hire-magento-developer" &&
                                    "Our team provides access to a carefully selected pool of top Magento development talent, including front-end and backend e-commerce experts. By hiring Magento developers from India, you ensure timely delivery of scalable, secure, and high-performing online stores that meet your business objectives and drive measurable results."}
                                {
                                    pageId === "hire-magento-developer" &&
                                    "Finding skilled and dedicated Magento developers to build robust, maintainable, and scalable e-commerce platforms can be challenging. With years of experience, Ctas is a trusted partner for Magento development services. Hire Magento developers in India to create powerful, secure, and high-performing online stores that help your business thrive."
                                }

                                {
                                    pageId === "hire-wordpress-developer" &&
                                    "Finding skilled and dedicated WordPress developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for WordPress development services. Hire WordPress developers in India to create powerful, secure, and high-performing websites that help your business thrive."
                                }

                                {
                                    pageId === "hire-shopify-developer" &&
                                    "Finding skilled and dedicated Shopify developers to build robust, maintainable, and scalable online stores can be challenging. With years of experience, Ctas is a trusted partner for Shopify development services. Hire Shopify developers in India to create powerful, secure, and high-performing eCommerce websites that help your business thrive."
                                }

                                {
                                    pageId === "hire-drupal-developer" &&
                                    "Finding skilled and dedicated Drupal developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for Drupal development services. Hire Drupal developers in India to create powerful, secure, and high-performing websites that help your business thrive."
                                }

                                {
                                    pageId === "hire-html5-developer" &&
                                    "Finding skilled and dedicated HTML5 developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for HTML5 development services. Hire HTML5 developers in India to create powerful, secure, and high-performing websites that help your business thrive."
                                }

                                {
                                    pageId === "hire-umbraco-developer" &&
                                    "Finding skilled and dedicated Umbraco developers to build robust, maintainable, and scalable websites can be challenging. With years of experience, Ctas is a trusted partner for Umbraco development services. Hire Umbraco developers in India to create powerful, secure, and high-performing websites that help your business thrive."
                                }
                                {
                                    pageId === "hire-smartcontract-developer" &&
                                    "Finding skilled and dedicated Smart Contract developers to build secure, transparent, and efficient blockchain solutions can be challenging. With years of experience, Ctas is a trusted partner for Smart Contract development services. Hire Smart Contract developers in India to create reliable, automated, and high-performing blockchain applications for your business."
                                }

                                {
                                    pageId === "hire-ethereum-developer" &&
                                    "Finding skilled and dedicated Ethereum developers to build decentralized, secure, and scalable blockchain applications can be challenging. With years of experience, Ctas is a trusted partner for Ethereum development services. Hire Ethereum developers in India to create custom dApps, smart contracts, and blockchain solutions that drive business innovation."
                                }

                                {
                                    pageId === "hire-ico-developer" &&
                                    "Finding skilled and dedicated ICO developers to build secure and transparent token launch platforms can be challenging. With years of experience, Ctas is a trusted partner for ICO development services. Hire ICO developers in India to create reliable blockchain-based fundraising platforms and token ecosystems tailored to your project goals."
                                }

                                {
                                    pageId === "hire-cryptocurrency-developer" &&
                                    "Finding skilled and dedicated Cryptocurrency developers to build secure, scalable, and efficient blockchain solutions can be challenging. With years of experience, Ctas is a trusted partner for Cryptocurrency development services. Hire Cryptocurrency developers in India to create robust wallets, exchanges, and decentralized applications for your business."
                                }

                                {
                                    pageId === "hire-graphql-developer" &&
                                    "Finding skilled and dedicated GraphQL developers to build efficient, flexible, and high-performing APIs can be challenging. With years of experience, Ctas is a trusted partner for GraphQL development services. Hire GraphQL developers in India to create scalable APIs that improve data fetching, performance, and client-side flexibility."
                                }

                                {
                                    pageId === "hire-powerbi-developer" &&
                                    "Finding skilled and dedicated Power BI developers to transform data into actionable insights can be challenging. With years of experience, Ctas is a trusted partner for Power BI development services. Hire Power BI developers in India to build dynamic dashboards, interactive reports, and data-driven solutions that empower smarter business decisions."
                                }

                                {
                                    pageId === "hire-chatbot-developer" &&
                                    "Finding skilled and dedicated Chatbot developers to build AI-driven conversational experiences can be challenging. With years of experience, Ctas is a trusted partner for Chatbot development services. Hire Chatbot developers in India to create intelligent chatbots that automate support, engage customers, and enhance business efficiency."
                                }

                                {
                                    pageId === "hire-dialogflow-developer" &&
                                    "Finding skilled and dedicated Dialogflow developers to build intelligent, interactive, and scalable conversational solutions can be challenging. With years of experience, Ctas is a trusted partner for Dialogflow development services. Hire Dialogflow developers in India to create robust AI chatbots that automate interactions and drive business growth."
                                }

                                {
                                    pageId === "hire-rpa-developer" &&
                                    "Finding skilled and dedicated RPA developers to automate repetitive business tasks and enhance operational efficiency can be challenging. With years of experience, Ctas is a trusted partner for RPA development services. Hire RPA developers in India to build intelligent automation solutions that streamline workflows and reduce costs."
                                }

                                {
                                    pageId === "hire-tensorflow-developer" &&
                                    "Finding skilled and dedicated TensorFlow developers to build advanced AI and machine learning solutions can be challenging. With years of experience, Ctas is a trusted partner for TensorFlow development services. Hire TensorFlow developers in India to create intelligent, data-driven systems that enhance automation, analytics, and business innovation."
                                }

                                {
                                    pageId === "hire-kentico-developer" &&
                                    "Finding skilled and dedicated Kentico developers to build robust, maintainable, and scalable digital experiences can be challenging. With years of experience, Ctas is a trusted partner for Kentico development services. Hire Kentico developers in India to create powerful, secure, and high-performing websites and enterprise CMS solutions that help your business thrive."
                                }
                                {
                                    pageId === "hire-seo-developer" &&
                                    "Finding experienced and dedicated SEO developers to improve your website’s visibility and performance can be challenging. With years of expertise, Ctas is a trusted partner for SEO development services. Hire SEO developers in India to optimize your site architecture, enhance search rankings, and drive sustainable organic growth for your business."
                                }

                                {
                                    pageId === "hire-smm-developer" &&
                                    "Finding skilled and dedicated SMM developers to strengthen your brand’s social presence and engagement can be challenging. With proven expertise, Ctas is a trusted partner for social media marketing and development services. Hire SMM developers in India to create data-driven campaigns that boost visibility, increase conversions, and grow your digital community."
                                }

                                {
                                    pageId === "hire-ppc-developer" &&
                                    "Finding certified and dedicated PPC developers to deliver high-ROI advertising campaigns can be challenging. With years of experience, Ctas is a reliable partner for PPC development and management services. Hire PPC developers in India to create, optimize, and manage data-driven paid campaigns that maximize conversions and business growth."
                                }
                                {
                                    pageId === "hire-fullstack-developer" &&
                                    "Finding skilled and versatile Full Stack Developers who can manage both frontend and backend efficiently is crucial for modern digital solutions. Ctas provides experienced Full Stack developers specializing in frameworks like React, Angular, Node.js, and .NET. Hire Full Stack developers in India to build scalable, secure, and performance-driven web and mobile applications."
                                }

                                {
                                    pageId === "hire-web-developers" &&
                                    "Hiring professional Web Developers who can turn your business vision into an engaging online experience is key to digital success. Ctas offers expert web developers proficient in modern technologies like HTML5, CSS3, JavaScript, and CMS platforms. Hire web developers in India to build responsive, SEO-friendly, and high-performing websites tailored to your goals."
                                }

                                {
                                    pageId === "hire-software-developer" &&
                                    "Building reliable and efficient software solutions requires expert developers who understand both technology and business logic. Ctas offers certified software developers skilled in end-to-end software design, development, and maintenance. Hire software developers in India to create robust applications that enhance efficiency, scalability, and business value."
                                }

                                {
                                    pageId === "hire-web-app-developer" &&
                                    "Creating powerful and scalable web applications demands developers who excel in performance, design, and usability. Ctas provides skilled web app developers experienced in React, Angular, Vue, and backend technologies. Hire web app developers in India to deliver seamless, secure, and user-centric digital experiences for your customers."
                                }

                                {
                                    pageId === "hire-webdesign-developer" &&
                                    "A visually compelling and user-friendly design can transform your digital presence. Ctas offers creative and skilled web design developers who blend aesthetics with functionality. Hire web design developers in India to craft responsive, brand-aligned, and conversion-focused website designs that captivate and engage your audience."
                                }

                                {
                                    pageId === "hire-digital-marketing" &&
                                    "Driving online visibility, engagement, and conversions requires data-driven digital marketing strategies. Ctas provides certified digital marketing experts skilled in SEO, PPC, social media, and content marketing. Hire digital marketing professionals in India to grow your brand presence, generate quality leads, and achieve measurable business results."
                                }

                                {
                                    pageId === "hire-blockchain-developer" &&
                                    "Building secure, transparent, and future-ready blockchain solutions demands experienced professionals. Ctas offers certified blockchain developers proficient in Ethereum, Solidity, Hyperledger, and Web3. Hire blockchain developers in India to develop decentralized apps, smart contracts, DeFi platforms, and NFT solutions that drive innovation and trust."
                                }

                                {
                                    pageId === "hire-wearable-developer" &&
                                    "Developing smart and connected wearable applications requires experts who understand both technology and user experience. Ctas provides professional wearable app developers skilled in Android Wear OS, watchOS, and IoT platforms. Hire wearable developers in India to build data-driven apps for smartwatches and fitness trackers that enhance engagement and health insights."
                                }

                                {
                                    pageId === "hire-ppc-developer" &&
                                    "Finding certified and dedicated PPC developers to deliver high-ROI advertising campaigns can be challenging. With years of experience, Ctas is a reliable partner for PPC development and management services. Hire PPC developers in India to create, optimize, and manage data-driven paid campaigns that maximize conversions and business growth."
                                }


                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/contact-us">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                    >
                                        {/* {pageId === "webdevelopers" && "Hire Certified Web Developers for Your Next Project"}
                                        {pageId === "hire-aspnet-developer" && "Hire Certified ASP.NET Developers for Your Next Project"}
                                        {pageId === "hire-java-developer" && "Hire Certified Java Developers for Your Next Project"}
                                        {pageId === "hire-php-developer" && "Hire Certified PHP Developers for Your Next Project"}
                                        {pageId === "hire-python-developer" && "Hire Certified Python Developers for Your Next Project"}
                                        {pageId === "hire-ruby-developer" && "Hire Certified Ruby Developers for Your Next Project"}
                                        {pageId === "hire-laravel-developer" && "Hire Certified Laravel Developers for Your Next Project"}
                                        {pageId === "hire-devops-developer" && "Hire Certified DevOps Developers for Your Next Project"}
                                        {pageId === "hire-angular-developer" && "Hire Certified Angular Developers for Your Next Project"}
                                        {pageId === "hire-react-developer" && "Hire Certified React Developers for Your Next Project"}
                                        {pageId === "hire-vue-developer" && "Hire Certified Vue.js Developers for Your Next Project"}
                                        {pageId === "hire-node-developer" && "Hire Certified Node.js Developers for Your Next Project"}
                                        {pageId === "hire-mean-developer" && "Hire Certified MEAN Developers for Your Next Project"}
                                        {pageId === "hire-mern-developer" && "Hire Certified MERN Developers for Your Next Project"}
                                        {pageId === "hire-blazor-developer" && "Hire Certified Blazor Developers for Your Next Project"}
                                        {pageId === "hire-magento-developer" && "Hire Certified Magento Developers for Your Next Project"} */}
                                        Hire Developer
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex flex-wrap items-center justify-center sm:justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-blue-200">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                                    <span>PCI DSS Compliant</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
                                    <span>99.9% Uptime</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Users className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400" />
                                    <span>24/7 Support</span>
                                </div>
                            </div>

                        </div>
                        <div className="relative  lg:flex flex-col p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl w-full">
                            <h2 className="text-2xl font-extrabold text-blue-900 mb-6">
                                RISK-FREE 10 DAYS TRIAL!
                            </h2>
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="firstName" className="mb-1 text-gray-700 font-medium">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="mb-1 text-gray-700 font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="mb-1 text-gray-700 font-medium">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="mb-1 text-gray-700 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        ref={textareaRef}
                                        placeholder="Write your message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black resize-none"
                                        style={{ minHeight: "100px" }} // Added for better UX
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-700 transition shadow-md mt-3 cursor-pointer"
                                >
                                    Hire an Expert Now!
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </form>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-0 lg:mt-10 md:mt-0 sm:mt-20">
                    <div className=" md:relative lg:relative p-4 bg-white/70 flex flex-wrap justify-center gap-4 sm:gap-4 md:gap-6 h-auto w-full shadow-md">
                        {getSectionData<Logo>("hero").map((logo, index) => (
                            <div
                                key={index}
                                className="relative w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* Second Section from data: intro */}
            <div className="relative container mx-auto px-4 py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Text */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-black/20 mb-6 justify-center lg:justify-start">
                            <span className="text-sm font-medium text-orange-400">
                                PART-TIME, FULL-TIME, AND HOURLY
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                            <span className="block text-black bg-clip-text">
                                {intro?.title || "Build with Dedicated Developers"}
                            </span>
                        </h2>
                        {(intro?.paragraphs || []).map((p, i) => (
                            <p key={i} className="text-base sm:text-lg lg:text-xl text-black mb-6 max-w-full lg:max-w-none leading-relaxed">
                                {p}
                            </p>
                        ))}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                            <Link href="/contact-us">
                                <Button
                                    size="lg"
                                    className="relative group overflow-hidden rounded-2xl px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 cursor-pointer w-full sm:w-auto text-center"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 group-hover:translate-x-1 w-full sm:w-auto">
                                        {intro?.ctaText || "Get Started"}
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>

                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/10 to-white/20 blur-xl transition-all duration-500 rounded-2xl"></div>
                                </Button>

                            </Link>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center">
                        <Image
                            src={intro?.imageSrc || "/hire-web-developers-one.webp"}
                            alt={intro?.imageAlt || "Hire Developers"}
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>


            {/* Developer Types Section */}
            <section className="relative bg-gradient-to-b from-white to-blue-50 py-10">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        Worlds Top Companies Trusting <span className="text-blue-600">Ctas</span> for Hiring Dedicated Web Developers in India
                        {/* {pageId === "webdevelopers" ? "web" : pageId === "aspnet" ? "ASP.NET" : pageId === "hire-java-developer" ? "Java" : pageId === "hire-php-developer" ? "PHP" : pageId === "hire-python-developer" ? "Python" : pageId === "hire-ruby-developer" ? "Ruby" : pageId === "hire-laravel-developer" ? "Laravel" : pageId === "hire-devops-developer" ? "DevOps" : pageId === "hire-angular-developer" ? "Angular" : pageId === "hire-react-developer" ? "React" : pageId === "hire-vue-developer" ? "Vue.js" : pageId === "hire-mean-developer" ? "MEAN" : pageId === "hire-blazor-developer" ? "MEAN" : pageId === "hire-blazor-developer" ? "Blazor" : pageId === "hire-magento-developer" ? "Magento" : "Web"} */}
                        {/* Web Developers in India */}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
                        From startups to global enterprises, businesses trust our expert
                        {/* {pageId === "webdevelopers" ? "web" : pageId === "aspnet" ? "ASP.NET" : pageId === "hire-java-developer" ? "Java" : pageId === "hire-php-developer" ? "PHP" : pageId === "hire-python-developer" ? "Python" : pageId === "hire-ruby-developer" ? "Ruby" : pageId === "hire-laravel-developer" ? "Laravel" : pageId === "hire-devops-developer" ? "DevOps" : pageId === "hire-angular-developer" ? "Angular" : pageId === "hire-react-developer" ? "React" : pageId === "hire-vue-developer" ? "Vue.js" : pageId === "hire-mean-developer" ? "MEAN" : pageId === "hire-blazor-developer" ? "MEAN" : pageId === "hire-blazor-developer" ? "Blazor" : pageId === "hire-magento-developer" ? "Magento" : "Web"}  */}
                        developers to deliver scalable and secure digital solutions across industries.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getSectionData<DeveloperType>("developerType").map((devType, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-start justify-start border border-gray-100"
                            >
                                <div className="bg-blue-100 rounded-full p-4 mb-4">
                                    <devType.icon className="text-blue-600 w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{devType.title}</h3>
                                <p className="text-gray-500 text-md text-start">{devType.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Developers Section */}
            {/* <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Available Developers for Hire
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Hire top dedicated developers from India across multiple technologies. Browse profiles and find your perfect match for your projects.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getSectionData<Developer>("developers").map((developer, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                            >
                                <img
                                    src={developer.imageSrc}
                                    alt={developer.imageAlt}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {developer.name} <span className="text-sm text-gray-500">exp.{developer.experience}</span>
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-2">{developer.role}</p>
                                        <p className="text-gray-600 mb-4 text-sm">{developer.description}</p>
                                        <div className="flex flex-wrap justify-start gap-2 mb-4">
                                            {developer.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold rounded-xl px-6 py-2 hover:bg-blue-700 transition shadow-md mt-4">
                                        Hire Now
                                        <Code className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Why Hire Web Developers Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Why Hiring Web Developers Is the Right Choice for Your Business
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
                        Hiring professional web developers ensures access to technical expertise, efficiency, and scalable solutions to help your business grow online. From custom web applications and APIs to eCommerce platforms and enterprise-grade solutions, they provide reliable, future-ready solutions tailored to your business needs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getSectionData<Reason>("reasons").map((reason, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-6 flex flex-col items-start shadow hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-start">{reason.title}</h3>
                                <p className="text-gray-600 text-md text-start">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 w-full flex justify-center">
                        <Image
                            src={faqMedia?.imageSrc || "/hire-web-developers-two.webp"}
                            alt={faqMedia?.imageAlt || "FAQ Illustration"}
                            width={600}
                            height={500}
                            className="object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-start lg:text-left">
                            {faqHeader?.title || "Frequently Asked Questions"}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mb-12 text-lg text-start lg:text-left">
                            {faqHeader?.description || "Get answers to the most common questions about hiring dedicated developers and how they can help build scalable, secure, and high-performing applications."}
                        </p>
                        <div className="space-y-4 p-2 text-left">
                            {getSectionData<FAQ>("faqs").map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow hover:shadow-lg transition p-2 cursor-pointer border border-gray-100 flex items-center gap-4"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-600 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                            />
                                        </div>
                                        <p
                                            className={` text-gray-600 text-sm transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0 overflow-hidden"}`}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Build Smarter Section */}
            <section className="w-full py-10 bg-gray-50 flex justify-center">
                <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12">
                    <div className="lg:w-1/2 w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col justify-center items-start">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">
                            Build Smarter with Top Talent
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 mb-6">
                            Ready to elevate your software projects? Hire our expert developers and experience unparalleled innovation and efficiency.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all cursor-pointer">
                                GET A FREE CONSULTATION
                            </button>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {getSectionData<Stat>("stats").map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center"
                            >
                                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="mt-2 text-gray-500 text-sm text-center">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Ctas Section */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-start gap-12">
                        <div className="flex-1 space-y-6">
                            <div className="text-left">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                    Hire Web Developer
                                    {/* {pageId === "webdevelopers" ? "Web" : pageId === "aspnet" ? "ASP.NET" : pageId === "hire-java-developer" ? "Java" : pageId === "hire-php-developer" ? "PHP" : pageId === "hire-python-developer" ? "Python" : pageId === "hire-ruby-developer" ? "Ruby" : pageId === "hire-laravel-developer" ? "Laravel" : pageId === "hire-devops-developer" ? "DevOps" : pageId === "hire-angular-developer" ? "Angular" : pageId === "hire-react-developer" ? "React" : pageId === "hire-vue-developer" ? "Vue.js" : pageId === "hire-blazor-developer" ? "Blazor" : pageId === "hire-magento-developer" ? "Magento" : "Web"} */}

                                </h2>
                                <p className="text-gray-600 text-lg max-w-xl">
                                    Why Ctas Is Your Workforce?
                                </p>
                            </div>
                            <div className="bg-blue-50 rounded-3xl shadow-xl p-10 text-left">
                                <Users className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Our Certified Team
                                </h3>
                                <p className="text-gray-700 max-w-xl">
                                    Selecting the right development partner plays a key role in building stable and high-performing web applications. At Ctas, we combine technical skill with transparent processes and proven experience. With more than a decade of successful web development projects, we deliver secure, scalable, and cost-effective solutions on time and within budget.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {getSectionData<Highlight>("highlights").map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col items-start text-left hover:shadow-2xl transition transform hover:-translate-y-1"
                                >
                                    <highlight.icon className="w-10 h-10 text-blue-600 mb-4" />
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{highlight.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Hiring Process Section */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Our Web
                            {/* {pageId === "webdevelopers" ? "Web" : pageId === "aspnet" ? "ASP.NET" : pageId === "hire-java-developer" ? "Java" : pageId === "hire-php-developer" ? "PHP" : pageId === "hire-python-developer" ? "Python" : pageId === "hire-ruby-developer" ? "Ruby" : pageId === "hire-laravel-developer" ? "Laravel" : pageId === "hire-mean-developer" ? "MEAN" : pageId === "hire-blazor-developer" ? "Blazor" : pageId === "hire-magento-developer" ? "Magento" : "Web"} */}
                            Developer Hiring Process
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Follow our streamlined hiring process to onboard the best Web
                            {/* {pageId === "webdevelopers" ? "Web" : pageId === "aspnet" ? "ASP.NET" : pageId === "hire-java-developer" ? "Java" : pageId === "hire-php-developer" ? "PHP" : pageId === "hire-python-developer" ? "Python" : pageId === "hire-ruby-developer" ? "Ruby" : pageId === "hire-mean-developer" ? "Blazor" : pageId === "hire-magento-developer" ? "Magento" : "Web"} */}
                            developers for your project.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {getSectionData<HiringStep>("hiringSteps").map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
                            >
                                <step.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
}