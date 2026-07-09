"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { CYAN } from "./index";

type DotCarouselProps = {
  children: React.ReactNode;
  bleed?: boolean;
  ariaLabel?: string;
  className?: string;
  trackClassName?: string;
  variant?: "light" | "dark";
};

export const DotCarousel = ({
  children,
  bleed = false,
  ariaLabel = "Carousel",
  className = "gap-4 sm:gap-5",
  trackClassName = "px-6 sm:px-10 lg:px-14 xl:px-16",
  variant = "light",
}: DotCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);
  const count = items.length;

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el || count === 0) return;

    const childEls = Array.from(el.children) as HTMLElement[];
    const scrollLeft = el.scrollLeft;
    let closest = 0;
    let minDist = Infinity;

    childEls.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, [count]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateActiveIndex();
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      el.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(index);
  };

  const track = (
    <>
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1 ${trackClassName} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </div>
      {count > 1 && (
        <div
          className="flex items-center justify-center gap-2 mt-4 px-4"
          role="tablist"
          aria-label={`${ariaLabel} pagination`}
        >
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Go to item ${i + 1}`}
              aria-selected={i === activeIndex}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8"
                  : variant === "dark"
                    ? "w-1.5 bg-white/15 hover:bg-white/30"
                    : "w-1.5 bg-slate-200 hover:bg-slate-300"
              }`}
              style={i === activeIndex ? { backgroundColor: CYAN } : undefined}
            />
          ))}
        </div>
      )}
    </>
  );

  if (bleed) {
    return <div className="-mx-6 sm:-mx-10 lg:-mx-16 xl:-mx-20">{track}</div>;
  }

  return track;
};
