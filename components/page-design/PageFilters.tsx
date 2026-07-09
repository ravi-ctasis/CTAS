"use client";

import { useState } from "react";
import { Search, X, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { CYAN, NAVY } from "./index";

export type FilterGroup = {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  accent?: "navy" | "cyan";
};

const DEFAULT_VISIBLE = 6;

/** Horizontal pill toolbar (legacy / compact pages) */
const FilterGroupRow = ({
  label,
  options,
  value,
  onChange,
  accent = "navy",
}: FilterGroup) => (
  <div>
    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">{label}</p>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
              isActive
                ? "text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-[#13345A]/25"
            }`}
            style={
              isActive
                ? {
                    backgroundColor: accent === "cyan" ? CYAN : NAVY,
                    color: accent === "cyan" ? "#08141F" : "#fff",
                  }
                : undefined
            }
          >
            {opt}
          </button>
        );
      })}
    </div>
  </div>
);

export const PageFilterToolbar = ({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  sortControl,
  filterGroups,
  onClear,
  showClear = false,
  actions,
  resultCount,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  sortControl?: React.ReactNode;
  filterGroups: FilterGroup[];
  onClear?: () => void;
  showClear?: boolean;
  actions?: React.ReactNode;
  resultCount?: { showing: number; total: number };
}) => {
  const activeFilters =
    filterGroups.filter((g) => g.value !== "All").length + (searchValue.trim() ? 1 : 0);

  return (
    <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-4">
        <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-[#F6F8FA] to-white p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <div className="relative flex-1 lg:max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {sortControl}
              {actions}
              {showClear && onClear && (
                <button
                  type="button"
                  onClick={onClear}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600 hover:bg-[#F6F8FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear{activeFilters > 0 ? ` (${activeFilters})` : ""}
                </button>
              )}
            </div>
          </div>

          {resultCount && (
            <p className="text-xs text-slate-500">
              Showing <span className="font-semibold text-slate-800">{resultCount.showing}</span> of{" "}
              <span className="font-semibold text-slate-800">{resultCount.total}</span> results
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-1 border-t border-slate-200/70">
            {filterGroups.map((group) => (
              <FilterGroupRow key={group.id} {...group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/** Amazon-style sidebar filter group with See more / See less */
const SidebarFilterGroup = ({
  label,
  options,
  value,
  onChange,
  accent = "navy",
  defaultVisible = DEFAULT_VISIBLE,
}: FilterGroup & { defaultVisible?: number }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleOptions = expanded ? options : options.slice(0, defaultVisible);
  const hiddenCount = options.length - defaultVisible;
  const activeColor = accent === "cyan" ? CYAN : NAVY;

  return (
    <div className="pb-4 mb-4 border-b border-slate-200/80 last:border-0 last:mb-0 last:pb-0">
      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2.5">{label}</p>
      <ul className="space-y-0.5" role="listbox" aria-label={label}>
        {visibleOptions.map((opt) => {
          const isActive = value === opt;
          return (
            <li key={opt}>
              <button
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => onChange(opt)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[13px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] ${
                  isActive
                    ? "font-semibold bg-[#EAF3F8] text-[#13345A]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="inline-flex items-start gap-2">
                  <span
                    className={`mt-0.5 w-3.5 h-3.5 rounded-sm border flex-shrink-0 flex items-center justify-center ${
                      isActive ? "border-transparent" : "border-slate-300 bg-white"
                    }`}
                    style={isActive ? { backgroundColor: activeColor } : undefined}
                    aria-hidden="true"
                  >
                    {isActive && (
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6.5L4.5 8.5L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="break-words">{opt}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-1 text-[13px] font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] rounded"
          style={{ color: CYAN }}
        >
          {expanded ? (
            <>
              See less
              <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              See more ({hiddenCount})
              <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
};

/**
 * Sticky left sidebar filters (Amazon-style).
 * Desktop: sticky beside content. Mobile: collapsible panel above results.
 */
export const PageFilterSidebar = ({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  filterGroups,
  onClear,
  showClear = false,
  actions,
  resultCount,
  sortControl,
  children,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filterGroups: FilterGroup[];
  onClear?: () => void;
  showClear?: boolean;
  actions?: React.ReactNode;
  resultCount?: { showing: number; total: number };
  sortControl?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeFilters =
    filterGroups.filter((g) => g.value !== "All").length + (searchValue.trim() ? 1 : 0);

  const sidebarBody = (
    <>
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-slate-500" aria-hidden="true" />
          <h2 className="text-sm font-bold text-slate-900 tracking-wide">Filters</h2>
          {activeFilters > 0 && (
            <span
              className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: NAVY }}
            >
              {activeFilters}
            </span>
          )}
        </div>
        {showClear && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA] rounded"
          >
            <X className="w-3.5 h-3.5" />
            Clear
          </button>
        )}
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
        <input
          type="search"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#249BCA]"
        />
      </div>

      {filterGroups.map((group) => (
        <SidebarFilterGroup key={group.id} {...group} defaultVisible={DEFAULT_VISIBLE} />
      ))}
    </>
  );

  return (
    <section className="bg-[#F6F8FA]">
      <div className="max-w-[1584px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-6 sm:py-8">
        {/* Mobile: compact bar + collapsible filters */}
        <div className="lg:hidden mb-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilters > 0 && (
                <span
                  className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: NAVY }}
                >
                  {activeFilters}
                </span>
              )}
              {mobileOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {actions}
            {sortControl}
            {showClear && onClear && activeFilters > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>
          {resultCount && (
            <p className="text-xs text-slate-500">
              Showing <span className="font-semibold text-slate-800">{resultCount.showing}</span> of{" "}
              <span className="font-semibold text-slate-800">{resultCount.total}</span> results
            </p>
          )}
          {mobileOpen && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">{sidebarBody}</div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          {/* Desktop sticky sidebar — stays fixed while portfolio cards scroll */}
          <aside
            className="hidden lg:block w-[240px] xl:w-[260px] shrink-0 sticky top-[7.5rem] z-20 self-start"
            aria-label="Portfolio filters"
          >
            <div className="max-h-[calc(100vh-8.5rem)] overflow-y-auto overscroll-y-contain rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm [scrollbar-width:thin]">
              {sidebarBody}
            </div>
          </aside>

          {/* Main content — scrolls independently */}
          <div className="min-w-0 flex-1 w-full">
            <div className="hidden lg:flex flex-wrap items-center justify-between gap-3 mb-5">
              {resultCount ? (
                <p className="text-sm text-slate-600">
                  Showing <span className="font-semibold text-slate-900">{resultCount.showing}</span> of{" "}
                  <span className="font-semibold text-slate-900">{resultCount.total}</span> results
                </p>
              ) : (
                <span />
              )}
              <div className="flex flex-wrap items-center gap-2">
                {sortControl}
                {actions}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
