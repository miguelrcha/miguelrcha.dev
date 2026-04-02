"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/blog";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: "6px",
                    border: "1px solid transparent",
                    padding: "2px 8px",
                    fontWeight: 600,
                    fontFamily: "ui-monospace, monospace",
                    fontSize: "12px",
                    backgroundColor: "hsl(var(--secondary))",
                    color: "hsl(var(--secondary-foreground))",
                  }}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Markdown content */}
        <article className="prose-blog">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-bold mt-8 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-semibold mt-6 mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="font-mono text-sm mb-4 text-pretty leading-relaxed" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold" style={{ color: "hsl(var(--foreground))" }}>
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic">{children}</em>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside font-mono text-sm mb-4 space-y-1" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside font-mono text-sm mb-4 space-y-1" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
                  {children}
                </ol>
              ),
              li: ({ children }) => <li>{children}</li>,
              code: ({ className, children, ...props }) => {
                const isBlock = className?.includes("language-");
                if (isBlock) {
                  return (
                    <pre
                      style={{
                        backgroundColor: "hsl(var(--muted))",
                        borderRadius: "8px",
                        padding: "16px",
                        overflowX: "auto",
                        marginBottom: "16px",
                        border: "1px solid hsl(var(--border))",
                      }}
                    >
                      <code
                        className={className}
                        style={{
                          fontFamily: "ui-monospace, monospace",
                          fontSize: "13px",
                          color: "hsl(var(--foreground))",
                        }}
                        {...props}
                      >
                        {children}
                      </code>
                    </pre>
                  );
                }
                return (
                  <code
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: "13px",
                      backgroundColor: "hsl(var(--muted))",
                      borderRadius: "4px",
                      padding: "2px 6px",
                      color: "hsl(var(--foreground))",
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              img: ({ src, alt, width, height, style, ...props }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt={alt ?? ""}
                  width={width}
                  height={height}
                  style={{
                    borderRadius: "8px",
                    maxWidth: "100%",
                    marginBottom: "16px",
                    ...(typeof style === "object" ? style : {}),
                  }}
                  {...props}
                />
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote
                  style={{
                    borderLeft: "3px solid hsl(var(--border))",
                    paddingLeft: "16px",
                    marginBottom: "16px",
                    color: "hsl(var(--muted-foreground))",
                    fontStyle: "italic",
                  }}
                >
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
