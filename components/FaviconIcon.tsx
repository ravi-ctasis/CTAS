"use client";

import Image from "next/image";



const FaviconIcon = ({ className = "w-4 h-4", ...props }) => {
  // Extract size from className if present (e.g., "w-4 h-4" -> 16)
  const sizeMatch = className.match(/w-(\d+)|h-(\d+)/);
  const size = sizeMatch ? parseInt(sizeMatch[1] || sizeMatch[2] || "19") : 19;

  return (
    <span className={`inline-flex items-center justify-center ${className}`} {...props}>
      <Image
        src="/favicon.ico"
        alt="Search"
        width={size}
        height={size}
        className="object-contain"
        unoptimized
      />
    </span>
  );
};

export default FaviconIcon;

