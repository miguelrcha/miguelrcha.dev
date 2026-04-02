import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{ maxWidth: "1400px" }}
      className="relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16"
    >
      <div className="mx-auto w-full max-w-2xl" style={{ backgroundColor: "#fff" }}>
        <div className="flex flex-col gap-y-3">
          <p className="font-mono text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            404
          </p>
          <h1 className="text-2xl font-bold">Page not found</h1>
          <p className="font-mono text-sm text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-x-1.5 font-mono text-sm hover:underline"
            style={{ color: "hsl(var(--muted-foreground))" }}
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
          </Link>
        </div>
      </div>
    </main>
  );
}
