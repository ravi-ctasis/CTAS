"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ctasis.com";

// Renders a normalized canonical URL for the current route.
export function CanonicalTag() {
  const pathname = usePathname();

  const canonicalUrl = useMemo(() => {
    const base = SITE_URL.replace(/\/$/, "");
    if (!pathname || pathname === "/") {
      return base;
    }
    return `${base}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  }, [pathname]);

  return <link rel="canonical" href={canonicalUrl} />;
}

export default CanonicalTag;
