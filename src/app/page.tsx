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
  name: "Miguel Rocha Xavier",
  title: "Intern Software Engineer",
  location: "Brazil",
  avatar: "https://github.com/miguelrcha.png", // Att profile icon
  social: [
    { label: "Email", href: "mailto:contact.miguellrochaxavier@gmail.com", icon: <Mail size={16} /> },
    { label: "GitHub", href: "https://github.com/miguelrcha", icon: <GithubIcon size={16} /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/miguelrochaxavier", icon: <LinkedinIcon size={16} /> },
    { label: "X", href: "https://x.com/miguel_rcha", icon: <XIcon size={16} /> },
    { label: "Youtube", href: "https://www.youtube.com/@miguelrcha", icon: <YoutubeIcon size={16} /> },
  ],
};

const WORK_EXPERIENCE = [
  {
    company: "ArcelorMittal Brasil",
    companyUrl: "https://brasil.arcelormittal.com/",
    companyDescription: "One of the largest steel producers in the world.",
    role: "Software Developer (STEM)",
    period: "Jun 2025 - Present",
    tags: ["Remote", "Intern", "Power Platform"],
    bullets: [
      "Worked on a STEM scholarship program focused on process transformation and the creation of digital solutions that drive operational efficiency and data-driven decision-making.",
      "With a strong focus on System Development, I design and build scalable applications using Power Platform, developing advanced dashboards and automated workflows to ensure productivity, reduce rework, and optimize user experience.",
    ],
  },
  {
    company: "EternosDevs",
    companyUrl: "",
    companyDescription: "Minecraft server focused on survival multiplayer [SMP] and engaging experience for players of all ages, with a strong emphasis on community and creativity.",
    role: "Co-founder & Backend Engineer",
    period: "Apr 2026 - Present",
    tags: ["Remote", "Java", "MySQL" ],
    bullets: [
      "Co-founded the project with two partners and leading the technical development, including programming, system architecture, and design decisions.",
      "Currently building a Minecraft SMP server (pre-launch), developing backend systems in Java and continuously improving my backend development skills."
    ],
  }

];

const FORMATION = [
  {
    company: "Centro Universitário Católica de Santa Catarina - Joinville",
    companyUrl: "https://www.catolicasc.org.br/",
    companyDescription: "A prestigious university in Brazil known for its strong emphasis on technology and innovation.",
    role: "Bachelor Software Engineering",
    period: "Fev 2026 - Fev 2030",
    tags: [""],
    bullets: [
      "Currently pursuing a degree in Software Engineering at Católica SC (1st semester), building foundational knowledge in programming, systems development, and software design principles.",
    ],
  },
  {
    company: "SENAI - Escola SESI de Referência - Joinville",
    companyUrl: "https://www.catolicasc.org.br/",
    companyDescription: "A prestigious university in Brazil known for its strong emphasis on technology and innovation.",
    role: "Technical Degree System Development ",
    period: "Fev 2023 - Dez 2025",
    tags: [""],
    bullets: [
      "Built Smarttrain during a technical course at SENAI/SC Joinville, developing a mobile app and web platform for railway management focused on Smart Cities and Digital Transformation in Transportation. Worked on UX/UI mobile-first mockups, website development, database implementation, and real-time dashboard features for train status, schedules, alerts, route management, preventive maintenance, performance reports, and energy consumption analysis.",
      "Also presented the project at multiple SENAI Family Day events, showcasing its impact on innovation and transportation digitalization.",
    ],
  }
]

const PROJECTS = [
  {
    title: "Talkbridge AI",
    description: "Interactive agentic that resides in a terminal, understands what is being transmitted via audio, and automatically translates it into any language you want to learn.",
    tags: ["Python", "LLM Integration"],
    href: "https://github.com/talkbridge-ai/talkbridge-ai-prospect",
  },
];

const SKILLS = [
  "Java", "Spring Boot", "Next.js/React", "Typescript", "Golang",
  "MySQL", "PostgreSQL", "Software Architecture", "Git",
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
              Graduated in Systems Development Technician and a Software Engineering student. I'm passionate about software development and solving real-world problems, and I thrive in dynamic environments. I enjoy continuous learning and professional growth, exploring new technologies and methodologies to enhance my expertise through experiences, online courses, literature, and networking.{" "}

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

          {/* ── Formation ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Formation</h2>
            <div className="flex flex-col gap-y-4">
              {FORMATION.map((education) => (
                <div key={education.company} className="rounded-lg py-1 print:py-0" style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))" }}>
                  <div className="flex flex-col space-y-1.5 print:space-y-1">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none flex-wrap gap-y-1">
                        <a href={education.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{education.company}</a>
                        <ul className="list-none p-0 hidden gap-x-1 sm:inline-flex">
                          {education.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                        </ul>
                      </h3>
                      <div className="text-sm tabular-nums shrink-0" style={{ color: "#6b7280" }}>{education.period}</div>
                    </div>
                    <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">{education.role}</h4>
                    {education.companyDescription && (
                      <p className="font-mono text-xs text-pretty" style={{ color: "hsl(var(--muted-foreground))" }}>{education.companyDescription}</p>
                    )}
                  </div>
                  <div className="mt-2 text-xs print:mt-1 print:text-[10px] text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
                    <ul className="list-inside list-disc space-y-1">
                      {education.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  </div>
                  <div className="mt-2 sm:hidden">
                    <ul className="inline-flex list-none p-0 -mx-2 flex-wrap gap-1">
                      {education.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
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
