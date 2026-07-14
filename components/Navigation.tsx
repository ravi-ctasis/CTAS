"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData, hireMenu } from "@/data/navigationData";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);

  // Helper function to check if a path is active
  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Helper function to check if any dropdown items are active
  const isAnyDropdownItemActive = (menuKey: string) => {
    const menuData = navigationData[menuKey as keyof typeof navigationData];
    if (!menuData) return false;

    return menuData.items.some((category: any) =>
      category.links.some((item: any) => pathname.startsWith(item.href))
    );
  };

  // Helper function to check if main menu or any dropdown is active
  const isMainMenuActive = (href: string, menuKey?: string) => {
    if (isActivePath(href)) {
      return true;
    }
    if (menuKey && isAnyDropdownItemActive(menuKey)) {
      return true;
    }
    return false;
  };

  // Memoize contact info
  const contactInfo = useMemo(
    () => [
      {
        icon: Mail,
        text: "info@ctasis.com",
        href: "mailto:info@ctasis.com",
      },
      {
        icon: Phone,
        text: "+91 7948993409",
        href: "tel:+917948993409",
        flag: "🇮🇳",
      },
    ],
    []
  );

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Prevent horizontal scroll when a desktop dropdown is open
  useEffect(() => {
    document.body.style.overflowX = activeDropdown ? "hidden" : "unset";
    return () => {
      document.body.style.overflowX = "unset";
    };
  }, [activeDropdown]);

  const handleMouseEnter = (key: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
    setHoverTimeout(timeout);
  };

  // Toggle mobile dropdown - only one can be open at a time
  const toggleMobileDropdown = (key: string) => {
    setMobileDropdowns((prev) => {
      if (prev[key]) {
        return { ...prev, [key]: false };
      }
      const newState: Record<string, boolean> = {};
      Object.keys(prev).forEach((k) => {
        newState[k] = false;
      });
      newState[key] = true;
      return newState;
    });
  };

  const renderFullWidthDropdown = (key: string, data: any) => {
    const getHref = (item: any) => item.href || `/hire-team/hire-${item.pageId}-developer`;

    if (key === "hiredevelopers") {
      return (
        <div
          className="fixed left-0 right-0 w-full bg-white dark:bg-gray-900 shadow-xl z-50 hidden lg:block top-26"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dark:bg-gray-800 border-t mt-3  border-gray-200 dark:border-none">
            <div className="mx-20 px-4 py-6">
              <div className="flex gap-6">
                {/* Left Tabs */}
                <div className="flex flex-col flex-1 border-r border-gray-200 dark:border-gray-700 pr-6">
                  <div className="flex mb-4">
                    {data.items.map((category: any, index: number) => (
                      <button
                        key={index}
                        onMouseEnter={() => setActiveTab(index)}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeTab === index
                          ? "text-[#13345A] dark:text-[#6FC3E4] border-b-2 border-[#13345A] dark:border-[#6FC3E4]"
                          : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                          }`}
                      >
                        {category.category}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="grid grid-cols-5 gap-4">
                    {data.items[activeTab].links.map((item: any, idx: number) => (
                      <Link
                        key={idx}
                        href={getHref(item)}
                        className={`group/item flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 ${isActivePath(getHref(item))
                          ? "bg-[#EAF3F8] dark:bg-[#13345A]/20 text-[#13345A] dark:text-[#6FC3E4]"
                        : "hover:bg-[#EAF3F8] dark:hover:bg-gray-700"
                          }`}
                        aria-label={item.name}
                      >
                        {item.icon && (
                          <item.icon className="w-5 h-5 flex-shrink-0 text-[#13345A] dark:text-[#6FC3E4] group-hover/item:text-orange-500" />
                        )}
                        <div>
                          <div className="font-medium text-sm text-gray-900 dark:text-white group-hover/item:text-[#13345A] dark:group-hover/item:text-[#6FC3E4]">
                            {item.name}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Section */}
                <div className="pl-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Hire Dedicated Developers
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {hireMenu.map((item, index) => (
                      <Link
                        key={index}
                        href={getHref(item)}
                        className={`flex items-center space-x-2 text-sm text-gray-900 dark:text-white hover:text-[#13345A] dark:hover:text-[#6FC3E4] transition-colors duration-200 rounded-lg p-1 ${isActivePath(getHref(item))
                          ? "font-semibold bg-[#EAF3F8] dark:bg-[#13345A]/20"
                          : ""
                          }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Fallback for other dropdowns
    return (
      <div
        className="fixed left-0 right-0 w-full bg-white dark:bg-gray-900 shadow-xl z-50 hidden lg:block top-26"
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="dark:bg-gray-800 border-t mt-3 border-gray-200 dark:border-none overflow-visible">
          <div className="max-w-[1584px] mx-auto px-4 py-6 flex">
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pr-8 border-r border-gray-200 dark:border-gray-700">
              {data.items.map((categoryData: any, cIndex: number) => (
                <div key={cIndex} className={`space-y-4 ${key === "product" ? "col-span-full" : ""}`}>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                    {categoryData.category}
                  </h3>
                  <ul className={key === "product" ? "grid grid-cols-2 lg:grid-cols-4 gap-4" : "space-y-3"}>
                    {categoryData.links.map((item: any, iIndex: number) => (
                      <li key={iIndex}>
                        <Link
                          href={getHref(item)}
                          className={`group/item flex items-start space-x-3 p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6FC3E4] focus:ring-offset-2 ${isActivePath(getHref(item))
                            ? "bg-[#EAF3F8] dark:bg-[#13345A]/20 text-[#13345A] dark:text-[#6FC3E4]"
                        : "hover:bg-[#EAF3F8] dark:hover:bg-gray-700"
                            }`}
                          aria-label={`${item.name} - ${item.description}`}
                        >
                          {item.icon && (
                            <item.icon
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors ${isActivePath(getHref(item))
                                ? "text-[#13345A] dark:text-[#6FC3E4]"
                                : "text-[#13345A] dark:text-[#6FC3E4] group-hover/item:text-orange-500"
                                }`}
                            />
                          )}
                          <div>
                            <div
                              className={`font-medium text-sm transition-colors ${isActivePath(getHref(item))
                                ? "text-[#13345A] dark:text-[#6FC3E4]"
                                : "text-gray-900 dark:text-white group-hover/item:text-[#13345A] dark:group-hover/item:text-[#6FC3E4]"
                                }`}
                            >
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="w-72 ml-8 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{data.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                {data.description}
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                {data.ctaText}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="sticky top-0 w-full z-50">
        {/* Top Contact Bar - Responsive */}
        <div className="bg-[#13345A] text-white py-2 px-4 hidden lg:block">
          <div className="px-9 sm:px-9 mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {contactInfo.slice(0, 3).map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-xs lg:text-sm"
                >
                  <contact.icon className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">{contact.text}</span>
                  <span className="lg:hidden">{contact.text.split(" ")[0]}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="flex space-x-2 lg:space-x-3">
                <Link
                  href="https://www.linkedin.com/in/ctas-info-services-llp"
                  className="flex items-center space-x-1 hover:text-orange-400 transition-colors text-xs lg:text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-3 h-3 lg:w-4 lg:h-4" />
                </Link>
                <Link
                  href="https://www.facebook.com/people/Ctas-Info-Service/61566714244013/"
                  className="flex items-center space-x-1 hover:text-orange-400 transition-colors text-xs lg:text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-3 h-3 lg:w-4 lg:h-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/ctasinfoservice/"
                  className="flex items-center space-x-1 hover:text-orange-400 transition-colors text-xs lg:text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-3 h-3 lg:w-4 lg:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          ref={navRef}
          className={`relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"
            }`}
        >
          <div className="mx-auto px-8 sm:px-8">
            <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20 sm:px-6">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 group"
                aria-label="Go to homepage"
              >
                <div className="relative">
                  <Image
                    src="/logo_large.svg"
                    alt="Ctas Info Services LLP - Leading Technology Solutions"
                    width={80}
                    height={112}
                    className="w-1/2 h-28 object-contain dark:hidden"
                    priority
                    sizes="(max-width: 768px) 40px, 80px"
                  />
                  <Image
                    src="/ctas-logo-footer.webp"
                    alt="Ctas Info Services LLP - Leading Technology Solutions"
                    width={80}
                    height={112}
                    className="w-1/2 h-28 object-contain hidden dark:block"
                    priority
                    sizes="(max-width: 768px) 40px, 80px"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-2">
                <Link
                  href="/"
                  className={`px-2 xl:px-2 2xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 relative group overflow-hidden ${isActivePath("/")
                    ? "text-[#13345A] dark:text-[#6FC3E4]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                    }`}
                  aria-current={isActivePath("/") ? "page" : undefined}
                >
                  Home
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#13345A] to-[#249BCA] dark:from-[#6FC3E4] dark:to-[#249BCA] transition-all duration-500 ease-out ${isActivePath("/")
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                  ></span>
                </Link>

                {Object.entries(navigationData).map(([key, data]) => (
                  <div
                    key={key}
                    className="relative overflow-visible"
                    onMouseEnter={() => handleMouseEnter(key)}
                  // onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={data.href}
                      className={`w-max flex items-center px-2 xl:px-2 2xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 relative group overflow-hidden ${isMainMenuActive(data.href, key)
                        ? "text-[#13345A] dark:text-[#6FC3E4]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                        }`}
                      aria-current={isMainMenuActive(data.href, key) ? "page" : undefined}
                    >
                      {data.title}
                      <ChevronDown
                        className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transition-transform duration-300 ${activeDropdown === key ? "rotate-180" : ""
                          }`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#13345A] to-[#249BCA] dark:from-[#6FC3E4] dark:to-[#249BCA] transition-all duration-500 ease-out ${isMainMenuActive(data.href, key)
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                          }`}
                      ></span>
                    </Link>
                    {activeDropdown === key && renderFullWidthDropdown(key, data)}
                  </div>
                ))}
                <Link
                  href="/case-studies"
                  className={`w-max px-2 xl:px-2 2xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 relative group overflow-hidden ${isActivePath("/case-studies")
                    ? "text-[#13345A] dark:text-[#6FC3E4]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                    }`}
                  aria-current={isActivePath("/case-studies") ? "page" : undefined}
                >
                  Case Studies
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#13345A] to-[#249BCA] dark:from-[#6FC3E4] dark:to-[#249BCA] transition-all duration-500 ease-out ${isActivePath("/case-studies")
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                  ></span>
                </Link>
                <Link
                  href="/portfolios"
                  className={`px-2 xl:px-2 2xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 relative group overflow-hidden ${isActivePath("/portfolios")
                    ? "text-[#13345A] dark:text-[#6FC3E4]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                    }`}
                  aria-current={isActivePath("/portfolios") ? "page" : undefined}
                >
                  Portfolios
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#13345A] to-[#249BCA] dark:from-[#6FC3E4] dark:to-[#249BCA] transition-all duration-500 ease-out ${isActivePath("/portfolios")
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                  ></span>
                </Link>
                <Link
                  href="/blog"
                  className={`px-2 xl:px-2 2xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 relative group overflow-hidden ${isActivePath("/blog")
                    ? "text-[#13345A] dark:text-[#6FC3E4]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                    }`}
                  aria-current={isActivePath("/blog") ? "page" : undefined}
                >
                  Blog
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#13345A] to-[#249BCA] dark:from-[#6FC3E4] dark:to-[#249BCA] transition-all duration-500 ease-out ${isActivePath("/blog")
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                  ></span>
                </Link>

                <Link href="/contact-us">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4] hover:bg-[#EAF3F8] dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6FC3E4] focus:ring-offset-2"
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden absolute   w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-40 max-h-[calc(100vh-0.5rem)] overflow-y-auto"
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              <div className=" flex  flex-col items-start  lg:hidden gap-3 p-2 space-x-1 xl:space-x-2 2xl:space-x-2 h-screen">
                {/* Home Link */}
                <Link
                  href="/"
                  className={`px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 relative group overflow-hidden ${isActivePath("/")
                    ? "text-[#13345A] dark:text-[#6FC3E4]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                    }`}
                >
                  Home
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#13345A] to-[#249BCA] dark:from-[#6FC3E4] dark:to-[#249BCA] transition-all duration-500 ease-out ${isActivePath("/")
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                  ></span>
                </Link>

                {Object.entries(navigationData).map(([key, data]) => (
                  <div key={key} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                    <button
                      onClick={() => toggleMobileDropdown(key)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${isMainMenuActive(data.href, key)
                        ? "text-[#13345A] dark:text-[#6FC3E4] bg-[#EAF3F8] dark:bg-gray-700 border-l-4 border-[#13345A] dark:border-[#6FC3E4]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4] hover:bg-[#EAF3F8] dark:hover:bg-gray-700"
                        }`}
                    >
                      <span>{data.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${mobileDropdowns[key] ? "rotate-90" : ""
                          }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdowns[key] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="ml-4 space-y-1 mt-2">
                        {data.items.map((categoryData: any, categoryIndex: number) => (
                          <div key={categoryIndex} className="space-y-1">
                            <div className="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 border-l-2 border-gray-300 dark:border-gray-600">
                              {categoryData.category}
                            </div>
                            <div className="ml-2 space-y-1">
                              {categoryData.links.map((item: any, itemIndex: number) => (
                                <Link
                                  key={itemIndex}
                                  href={item.href}
                                  className={`flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition-colors ${isActivePath(item.href)
                                    ? "text-[#13345A] dark:text-[#6FC3E4] bg-[#EAF3F8] dark:bg-gray-700"
                                    : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4] hover:bg-[#EAF3F8] dark:hover:bg-gray-700"
                                    }`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.icon && (
                                    <item.icon className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                  )}
                                  <div className="flex-1">
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            {data.title}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                            {data.description}
                          </div>
                          <Link
                            href={data.ctaHref}
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-xs hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {data.ctaText}
                            <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {["/case-studies", "/portfolios", "/blog"].map((href) => (
                  <Link
                    key={href}
                    href={href}
                    className={`px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 relative group overflow-hidden ${isActivePath(href)
                      ? "text-[#13345A] dark:text-[#6FC3E4]"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#13345A] dark:hover:text-[#6FC3E4]"
                      }`}
                  >
                    {href === "/case-studies"
                      ? "Case Studies"
                      : href === "/portfolios"
                        ? "Portfolios"
                        : "Blog"}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#13345A] to-[#249BCA] dark:from-[#6FC3E4] dark:to-[#249BCA] transition-all duration-500 ease-out ${isActivePath(href)
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                    ></span>
                  </Link>
                ))}

                {/* CTA Button */}
                <Link href="/contact-us">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navigation;
