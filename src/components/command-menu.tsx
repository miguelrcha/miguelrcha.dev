"use client";

import { Activity, Award, Command, Printer, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SocialLink = { label: string; href: string; icon: React.ReactNode };

type CommandItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  onSelect: () => void;
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openLink(href: string) {
  if (href.startsWith("mailto:")) {
    window.location.href = href;
  } else {
    window.open(href, "_blank", "noopener,noreferrer");
  }
}

function CommandGroup({
  label,
  items,
  flatItems,
  highlighted,
  onSelect,
  onHover,
}: {
  label: string;
  items: CommandItem[];
  flatItems: CommandItem[];
  highlighted: number;
  onSelect: (item: CommandItem) => void;
  onHover: (index: number) => void;
}) {
  return (
    <div className="mb-1 last:mb-0">
      <p className="px-2 pb-1 pt-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide" style={{ color: "hsl(var(--muted-foreground))" }}>
        {label}
      </p>
      {items.map((item) => {
        const index = flatItems.indexOf(item);
        const isHighlighted = index === highlighted;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            onMouseEnter={() => onHover(index)}
            className="flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm"
            style={{
              backgroundColor: isHighlighted ? "hsl(var(--accent))" : "transparent",
              color: "hsl(var(--foreground))",
            }}
          >
            {item.icon}
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function CommandMenuModal({ open, onClose, actions, links }: { open: boolean; onClose: () => void; actions: CommandItem[]; links: CommandItem[] }) {
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setHighlighted(0);
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  const filteredActions = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));
  const filteredLinks = links.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()));
  const flatItems = [...filteredActions, ...filteredLinks];

  useEffect(() => {
    setHighlighted(0);
  }, [query]);

  if (!open) return null;

  function activate(item: CommandItem) {
    item.onSelect();
    onClose();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((i) => Math.min(i + 1, flatItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = flatItems[highlighted];
      if (item) activate(item);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center px-4 pt-[15vh] print:hidden"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="h-fit w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl"
        style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center gap-2 border-b px-3.5 py-3" style={{ borderColor: "hsl(var(--border))" }}>
          <Search size={16} style={{ color: "hsl(var(--muted-foreground))" }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent font-mono text-sm outline-none"
            style={{ color: "hsl(var(--foreground))" }}
          />
          <button type="button" onClick={onClose} aria-label="Close" className="rounded p-0.5 transition-colors hover:bg-accent">
            <X size={16} style={{ color: "hsl(var(--muted-foreground))" }} />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-1.5">
          {flatItems.length === 0 && (
            <p className="px-2 py-6 text-center font-mono text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
              No results found.
            </p>
          )}
          {filteredActions.length > 0 && (
            <CommandGroup label="Actions" items={filteredActions} flatItems={flatItems} highlighted={highlighted} onSelect={activate} onHover={setHighlighted} />
          )}
          {filteredLinks.length > 0 && (
            <CommandGroup label="Links" items={filteredLinks} flatItems={flatItems} highlighted={highlighted} onSelect={activate} onHover={setHighlighted} />
          )}
        </div>
      </div>
    </div>
  );
}

export function CommandMenu({ socialLinks }: { socialLinks: SocialLink[] }) {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPod|iPad/.test(navigator.platform));
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions: CommandItem[] = [
    { id: "print", label: "Print", icon: <Printer size={16} />, onSelect: () => window.print() },
    { id: "certifications", label: "Certifications", icon: <Award size={16} />, onSelect: () => scrollToSection("certifications") },
    { id: "activity", label: "Activity", icon: <Activity size={16} />, onSelect: () => scrollToSection("activity") },
  ];

  const links: CommandItem[] = socialLinks.map((s) => ({
    id: s.label,
    label: s.label,
    icon: s.icon,
    onSelect: () => openLink(s.href),
  }));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="fixed right-4 bottom-4 z-40 flex items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 md:hidden print:hidden"
        style={{
          width: 48,
          height: 48,
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <Command size={20} />
      </button>
      <div className="fixed inset-x-0 bottom-0 z-40 hidden border-t md:block print:hidden" style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-center gap-1.5 py-[5px] font-sans text-sm font-medium transition-colors hover:bg-accent"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <span>Press</span>
          <kbd
            className="inline-flex h-4 items-center gap-0.5 rounded border px-1.5 font-mono text-[11px] font-medium"
            style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--muted-foreground))" }}
          >
            {isMac ? (
              <>
                <span className="text-sm leading-none">⌘</span>
                <span>+J</span>
              </>
            ) : (
              "Ctrl +J"
            )}
          </kbd>
          <span>to open the command menu</span>
        </button>
      </div>
      <CommandMenuModal open={open} onClose={() => setOpen(false)} actions={actions} links={links} />
    </>
  );
}
