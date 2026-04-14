"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/blog";
import { Globe, Mail } from "lucide-react";

/* ── SocialButton (igual page) ── */
function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-md transition-colors hover:bg-accent"
      style={{
        width: 32,
        height: 32,
        flexShrink: 0,
        border: "1px solid hsl(var(--input))",
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

/* ── Icons iguais ── */
function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
/* ── PERSON ── */
const PERSON = {
  name: "Miguel Rocha Xavier",
  title: "Intern Software Engineer / System Development Technial",
  location: "Brazil",
  avatar: "https://github.com/miguelrcha.png",
  social: [
    { label: "Email", href: "mailto:contact.miguellrochaxavier@gmail.com", icon: <Mail size={16} /> },
    { label: "GitHub", href: "https://github.com/miguelrcha", icon: <GithubIcon size={16} /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/miguelrochaxavier", icon: <LinkedinIcon size={16} /> },
    { label: "X", href: "https://x.com/miguel_rcha", icon: <XIcon size={16} /> },
  ],
};

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const router = useRouter();

  return (
    <main
      style={{ maxWidth: "1400px" }}
      className="relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-11"
    >
      <div className="mx-auto w-full max-w-2xl space-y-8" style={{ backgroundColor: "#fff" }}>

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-x-1.5 font-mono text-sm hover:underline print:hidden"
          style={{ color: "hsl(var(--muted-foreground))", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          go back home
        </button>

        {/* Post metadata */}
        <div className="flex flex-col gap-y-2">
          <p className="font-mono text-xs tabular-nums" style={{ color: "hsl(var(--muted-foreground))" }}>
            {post.date}
          </p>
          <ul className="flex list-none flex-wrap gap-1 p-0">
            {post.tags.map((tag) => (
              <li key={tag}>
                <span style={{ display: "inline-flex", alignItems: "center", borderRadius: "6px", border: "1px solid transparent", padding: "2px 8px", fontWeight: 600, fontFamily: "ui-monospace, monospace", fontSize: "12px", backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))" }}>
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Markdown content (SEU ORIGINAL) */}
        <article className="prose-blog">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-bold mt-8 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-base font-semibold mt-6 mb-2">{children}</h3>,
              p: ({ children }) => <p className="font-mono text-sm mb-4 text-pretty leading-relaxed" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{children}</p>,
              strong: ({ children }) => <strong className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              ul: ({ children }) => <ul className="list-disc list-inside font-mono text-sm mb-4 space-y-1" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside font-mono text-sm mb-4 space-y-1" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{children}</ol>,
              li: ({ children }) => <li>{children}</li>,
              code: ({ className, children, ...props }) => {
                const isBlock = className?.includes("language-");
                if (isBlock) {
                  return (
                    <pre style={{ backgroundColor: "hsl(var(--muted))", borderRadius: "8px", padding: "16px", overflowX: "auto", marginBottom: "16px", border: "1px solid hsl(var(--border))" }}>
                      <code className={className} style={{ fontFamily: "ui-monospace, monospace", fontSize: "13px", color: "hsl(var(--foreground))" }} {...props}>{children}</code>
                    </pre>
                  );
                }
                return <code style={{ fontFamily: "ui-monospace, monospace", fontSize: "13px", backgroundColor: "hsl(var(--muted))", borderRadius: "4px", padding: "2px 6px", color: "hsl(var(--foreground))" }} {...props}>{children}</code>;
              },
              img: ({ src, alt, width, height, style, ...props }) => (
                <img src={src} alt={alt ?? ""} width={width} height={height} style={{ borderRadius: "8px", maxWidth: "100%", marginBottom: "16px", ...(typeof style === "object" ? style : {}) }} {...props} />
              ),
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}>{children}</a>
              ),
              blockquote: ({ children }) => (
                <blockquote style={{ borderLeft: "3px solid hsl(var(--border))", paddingLeft: "16px", marginBottom: "16px", color: "hsl(var(--muted-foreground))", fontStyle: "italic" }}>{children}</blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* 🔥 PERSON FINAL (IGUAL AO PAGE) */}
        <div className="flex items-center justify-between pt-8" style={{ borderTop: "1px solid hsl(var(--border))" }}>
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{PERSON.name}</h1>

            <p className="max-w-md text-pretty font-mono text-sm" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
              {PERSON.title}
            </p>

            <p className="max-w-md items-center text-pretty font-mono text-xs" style={{ color: "hsl(var(--foreground))" }}>
              <span className="inline-flex gap-x-1.5 align-baseline leading-none">
                <Globe size={12} />
                {PERSON.location}
              </span>
            </p>

            <div className="flex gap-x-1 pt-1 font-mono text-sm print:hidden">
              {PERSON.social.map((s) => (
                <SocialButton key={s.label} href={s.href} label={s.label}>
                  {s.icon}
                </SocialButton>
              ))}
            </div>
          </div>

          <a href="/" style={{ position: "relative", display: "flex", flexShrink: 0, overflow: "hidden", borderRadius: 12, width: 112, height: 112 }}>
            <img style={{ aspectRatio: "1/1", height: "100%", width: "100%", objectFit: "cover" }} src={PERSON.avatar} alt={PERSON.name} />
          </a>
        </div>

      </div>
    </main>
  );
}
