"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export interface CountryItem {
  /** ISO country code, e.g. "de", "fr", "uk" — file must exist at `${flagDir}/${code}.webp` */
  code: string;
  /** Human-readable country name, e.g. "Germany" */
  name: string;
  /** Optional descriptive alt text; falls back to "<name> flag" */
  alt?: string;
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/**
 * A single flag + country-name tile. Generic and reusable with any ISO code.
 * Flag dimensions are fixed (explicit width/height) so no layout shift occurs.
 */
export const CountryBadge = ({
  code,
  name,
  alt,
  flagDir = "/flags",
  dark = false,
}: CountryItem & { flagDir?: string; dark?: boolean }) => {
  const src = `${flagDir}/${code.toLowerCase()}.webp`;
  return (
    <motion.div
      variants={badgeVariants}
      whileHover={{ scale: 1.05, y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={`group flex flex-col items-center gap-1.5 rounded-xl p-2.5 border transition-shadow duration-200 ${
        dark
          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-lg hover:shadow-black/20"
          : "bg-white border-slate-200 hover:shadow-md"
      }`}
    >
      <span className="relative block w-9 h-6 overflow-hidden rounded-[3px] ring-1 ring-black/10 shadow-sm">
        <Image
          src={src}
          alt={alt || `${name} flag`}
          width={36}
          height={24}
          loading="lazy"
          sizes="36px"
          className="w-9 h-6 object-cover"
        />
      </span>
      <span
        className={`text-[10px] leading-tight text-center transition-colors duration-200 underline-offset-2 group-hover:underline ${
          dark
            ? "text-slate-400 group-hover:text-[#6FC3E4]"
            : "text-slate-500 group-hover:text-blue-600"
        }`}
      >
        {name}
      </span>
    </motion.div>
  );
};

/**
 * Staggered, scroll-reveal grid of country flags. Reusable anywhere — pass any
 * list of `{ code, name, alt? }`. Flags fade + scale in one after another.
 */
export const MarketplaceFlagGrid = ({
  markets,
  flagDir = "/flags",
  dark = false,
  className = "grid grid-cols-3 gap-2",
}: {
  markets: CountryItem[];
  flagDir?: string;
  dark?: boolean;
  className?: string;
}) => (
  <motion.div
    variants={gridVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-40px" }}
    className={className}
  >
    {markets.map((m) => (
      <CountryBadge key={m.code} {...m} flagDir={flagDir} dark={dark} />
    ))}
  </motion.div>
);

export default MarketplaceFlagGrid;
