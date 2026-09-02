"use client";

import { useState } from "react";

function getDomain(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

export function CompanyHoverCard({
  name,
  url,
  className,
}: {
  name: string;
  url: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const domain = url ? getDomain(url) : null;

  if (!domain) {
    return <span className={className}>{name}</span>;
  }

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {name}
      </a>
      <span
        role="tooltip"
        className={`pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-72 -translate-x-1/2 overflow-hidden rounded-lg border shadow-lg transition-all duration-150 ${
          open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
        style={{
          backgroundColor: "hsl(var(--card))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--card-foreground))",
        }}
      >
        <span className="block aspect-[16/10] w-full" style={{ backgroundColor: "hsl(var(--border) / 0.4)" }}>
          {open && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=576&h=360`}
              alt={`Preview de ${domain}`}
              className="h-full w-full object-cover object-top"
            />
          )}
        </span>
        <span className="flex items-center justify-between gap-2 border-t px-2.5 py-1.5" style={{ borderColor: "hsl(var(--border))" }}>
          <span className="truncate text-xs font-semibold">{name}</span>
          <span className="truncate text-xs" style={{ color: "hsl(var(--foreground) / 0.6)" }}>
            {domain}
          </span>
        </span>
      </span>
    </span>
  );
}
