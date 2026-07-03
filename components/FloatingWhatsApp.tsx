"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [messages] = useState([
    {
      id: 1,
      text: "Hello! 👋 How can we help you today?",
      sender: "support",
      time: currentTime,
    },
  ]);

  const whatsappNumber = "9974696186";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 sm:bottom-20 w-72 sm:w-80 h-80 sm:h-[400px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] text-white p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo-icon.webp"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="sm:w-8 sm:h-auto rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 dark:bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div>
                <h3 className="font-semibold text-xs sm:text-sm text-white">Ctas Info Services</h3>
                <p className="text-xs text-green-100 dark:text-green-200 flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 dark:bg-green-500 rounded-full mr-1"></div>
                  Online
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-green-200 dark:hover:text-green-300 transition-colors p-1 cursor-pointer "
              aria-label="Close chat"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div
            className="flex-1 bg-[#E5DDD5] dark:bg-gray-800 p-3 sm:p-4 overflow-y-auto"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 sm:mb-4 ${
                  msg.sender === "user" ? "flex justify-end" : "flex justify-start"
                }`}
              >
                <div
                  className={`max-w-60 sm:max-w-xs px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-[#DCF8C6] text-gray-800 rounded-br-sm dark:bg-[#056162] dark:text-white"
                      : "bg-white text-gray-800 rounded-bl-sm shadow-sm dark:bg-gray-700 dark:text-white dark:border dark:border-gray-600"
                  }`}
                >
                  <div className="text-xs sm:text-sm leading-relaxed">{msg.text}</div>
                  <div
                    className={`text-xs mt-1 flex items-center justify-end ${
                      msg.sender === "user"
                        ? "text-gray-500 dark:text-green-200"
                        : "text-gray-500 dark:text-gray-300"
                    }`}
                  >
                    <span>{currentTime}</span>
                    {msg.sender === "user" && (
                      <span className="ml-1 text-blue-500 dark:text-blue-400">✓✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input Area */}
          <div className="p-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={handleWhatsAppDirect} className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="text-[#919191] dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                disabled={!message.trim()}
              >
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  className="sm:w-9 sm:h-9"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center relative cursor-pointer ${
          isOpen ? "bg-[#25D366] hover:bg-[#20BA5A]" : "bg-[#25D366] hover:bg-[#20BA5A] "
        }`}
        aria-label={isOpen ? "Close chat" : "Open WhatsApp chat"}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>

        {/* Pulse Animation */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
