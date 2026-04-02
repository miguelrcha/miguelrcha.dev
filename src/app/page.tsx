import { Globe, Mail } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

// ── Brand SVG icons ───────────────────────────────────────────────────────────
function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

function YoutubeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const PERSON = {
  name: "Matheus Audibert",
  title: "Intern Software Engineer",
  location: "Brazil",
  avatar: "https://github.com/matheusaudibert.png",
  social: [
    { label: "Email", href: "mailto:contact.audibert@gmail.com", icon: <Mail size={16} /> },
    { label: "GitHub", href: "https://github.com/matheusaudibert", icon: <GithubIcon size={16} /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/matheusaudibert", icon: <LinkedinIcon size={16} /> },
    { label: "Instagram", href: "https://instagram.com/tlvzaudibert", icon: <InstagramIcon size={16} /> },
    { label: "X / Twitter", href: "https://x.com/audibosta", icon: <XIcon size={16} /> },
    { label: "YouTube", href: "https://www.youtube.com/@audibert", icon: <YoutubeIcon size={16} /> },
  ],
};

const WORK_EXPERIENCE = [
  {
    company: "Itaú Unibanco",
    companyUrl: "https://www.itau.com.br",
    companyDescription: "Largest bank in Latin America and one of the largest financial institutions in the world.",
    role: "Intern Software Engineer",
    period: "August 2025 - Present",
    tags: ["Hybrid", "Python", "AWS", "Software Architecture", "MySQL"],
    bullets: [
      "Owned end-to-end development of an internal product impacting multiple directorates, spanning from architecture design and technical decision-making to business stakeholder alignment and product demos.",
      "Built the full AWS infrastructure using ECS, Lambda, Athena, S3, RDS, IAM, and VPC, with a Python/Streamlit frontend, enabling scalable and secure delivery.",
      "Democratized workforce intelligence across Itaú by centralizing data on employee movements, open positions, and headcount costs into a single, director-level platform.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Discord Newsletter",
    description: "A Discord bot that automatically delivers Filipe Deschamps' newsletter updates.",
    tags: ["Discord.js", "API", "Community"],
    href: "https://newsletterbot.audibert.dev/",
  },
  {
    title: "Cardzera",
    description: "A Discord bot that generates a custom card for your Discord server.",
    tags: ["Discord.js", "SVG", "Community"],
    href: "https://github.com/matheusaudibert/cardzera",
  },
  {
    title: "Aprova",
    description: "A project built for Alura AI Imersion. It got first place. I also made a video about it.",
    tags: ["Python", "Streamlit", "Gemini SDK"],
    href: "https://github.com/matheusaudibert/projeto-aprova",
  },
  {
    title: "Commitly",
    description: "A web-based tool that easly generates commits for your GitHub profile.",
    tags: ["GitHub", "Next.js", "MongoDB"],
    href: "https://commitly.shardweb.app/",
  },
];

const SKILLS = [
  "Python", "Node.js", "Discord.js", "JavaScript", "AWS",
  "MySQL", "MongoDB", "API", "Software Architecture", "Serverless",
  "Design Systems", "Git",
];

// ── Sub-components ────────────────────────────────────────────────────────────

function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-md transition-colors hover:bg-accent"
      style={{
        width: 32, height: 32, flexShrink: 0,
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

function SecondaryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", borderRadius: 6,
      border: "1px solid transparent", padding: "2px 8px",
      fontWeight: 600, fontFamily: "ui-monospace, monospace", fontSize: 12,
      backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))",
      whiteSpace: "nowrap", verticalAlign: "middle",
    }}>
      {children}
    </span>
  );
}

function DarkBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", borderRadius: 6,
      border: "1px solid transparent", padding: "2px 8px",
      fontWeight: 600, fontFamily: "ui-monospace, monospace", fontSize: 12,
      backgroundColor: "rgba(17, 24, 39, 0.8)", color: "hsl(var(--primary-foreground))",
    }}>
      {children}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const blogPosts = getAllPosts();

  return (
    <>
      <main
        style={{ maxWidth: "1400px" }}
        className="relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-11"
      >
        <div className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4" style={{ backgroundColor: "#fff" }}>

          {/* ── Header ── */}
          <header className="flex items-center justify-between">
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img style={{ aspectRatio: "1/1", height: "100%", width: "100%", objectFit: "cover" }} src={PERSON.avatar} alt={PERSON.name} />
            </a>
          </header>

          {/* ── About ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">About</h2>
            <p className="font-mono text-sm text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
              Software Engineer focused on building scalable cloud-native systems and data-driven internal products. Experienced in end-to-end delivery from architecture to stakeholder alignment. Beyond engineering, I create tech content on{" "}
              <a href="https://www.youtube.com/@audibert" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "rgba(255, 0, 0, 0.75)" }}>
                @audibert
              </a>
              , manage a programming community on Discord with nearly 20k members (
              <a href="https://discord.gg/programador" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "rgba(88, 101, 242, 0.85)" }}>
                @servidordosprogramadores
              </a>
              ), and I&apos;m currently building my own SaaS,{" "}
              <a href="" rel="noopener noreferrer" className="hover:underline" style={{ color: "rgba(88, 242, 165, 0.85)" }}>
                @codario
              </a>
              .
            </p>
          </section>

          {/* ── Work Experience ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <div className="flex flex-col gap-y-4">
              {WORK_EXPERIENCE.map((job) => (
                <div key={job.company} className="rounded-lg py-1 print:py-0" style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))" }}>
                  <div className="flex flex-col space-y-1.5 print:space-y-1">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none flex-wrap gap-y-1">
                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{job.company}</a>
                        <ul className="list-none p-0 hidden gap-x-1 sm:inline-flex">
                          {job.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                        </ul>
                      </h3>
                      <div className="text-sm tabular-nums shrink-0" style={{ color: "#6b7280" }}>{job.period}</div>
                    </div>
                    <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">{job.role}</h4>
                    {job.companyDescription && (
                      <p className="font-mono text-xs text-pretty" style={{ color: "hsl(var(--muted-foreground))" }}>{job.companyDescription}</p>
                    )}
                  </div>
                  <div className="mt-2 text-xs print:mt-1 print:text-[10px] text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
                    <ul className="list-inside list-disc space-y-1">
                      {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  </div>
                  <div className="mt-2 sm:hidden">
                    <ul className="inline-flex list-none p-0 -mx-2 flex-wrap gap-1">
                      {job.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Projects ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <div key={project.title} className="rounded-lg border flex h-full flex-col overflow-hidden p-3" style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }} role="article">
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-semibold tracking-tight text-base">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
                      ) : project.title}
                    </h3>
                    <p className="font-mono text-xs text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{project.description}</p>
                  </div>
                  <div className="mt-auto pt-3">
                    <ul className="flex list-none flex-wrap gap-1 p-0">
                      {project.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Skills ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Skills</h2>
            <ul className="flex list-none flex-wrap gap-1 p-0">
              {SKILLS.map((skill) => <li key={skill}><DarkBadge>{skill}</DarkBadge></li>)}
            </ul>
          </section>

          {/* ── Blog ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Blog</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="hover:no-underline" style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    className="rounded-lg border flex h-full flex-col overflow-hidden p-3 transition-colors hover:bg-accent"
                    style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
                    role="article"
                  >
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-semibold tracking-tight text-base">{post.title}</h3>
                      <p className="font-mono text-xs text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{post.description}</p>
                    </div>
                    <div className="mt-auto pt-3 flex items-end justify-between gap-2">
                      <ul className="flex list-none flex-wrap gap-1 p-0">
                        {post.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                      </ul>
                      <span className="font-mono text-xs tabular-nums shrink-0" style={{ color: "hsl(var(--muted-foreground))" }}>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

    </>
  );
}
