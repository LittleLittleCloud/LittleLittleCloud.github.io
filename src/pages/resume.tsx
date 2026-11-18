import Head from "next/head";
import Link from "next/link";
import localFont from "next/font/local";
import type { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Download, Github, Globe, Linkedin, Mail, Star, Twitter, type LucideIcon } from "lucide-react";
import { profile as resume, profileRepos, type ContactKind } from "@/data/profile";
import { fetchStarCounts, formatStars, type StarCounts } from "@/lib/github-stars";

const CONTACT_ICONS: Record<ContactKind, LucideIcon> = {
  email: Mail,
  website: Globe,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

type ResumeProps = { stars: StarCounts };

export const getStaticProps: GetStaticProps<ResumeProps> = async () => ({
  props: { stars: await fetchStarCounts(profileRepos()) },
});

/** Inline Markdown (links, bold, code) without block wrappers or prose styles. */
function Md({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <>{children}</>,
        a: ({ node, ...props }) => (
          <a {...props} className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900" />
        ),
        strong: ({ node, ...props }) => <strong {...props} className="font-semibold text-neutral-900" />,
        code: ({ node, inline, ...props }) => <code {...props} className="font-mono text-[0.92em]" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

function Stars({ repo, stars }: { repo?: string; stars: StarCounts }) {
  const n = repo ? stars[repo] : undefined;
  if (n === undefined) return null;
  return (
    <a
      href={`https://github.com/${repo}/stargazers`}
      className="ml-1.5 inline-flex items-center gap-0.5 align-baseline text-[0.85em] font-medium tabular-nums text-neutral-500"
      title={`${n.toLocaleString("en-US")} GitHub stars`}
    >
      <Star className="h-[0.9em] w-[0.9em] fill-amber-400 text-amber-400" aria-hidden />
      {formatStars(n)}
    </a>
  );
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const SITE_URL = "https://littlelittlecloud.com";
const PDF_FILENAME = `${resume.name.replace(/\s+/g, "-")}-Resume`;

function downloadPdf() {
  // Browsers use document.title as the default "Save as PDF" file name.
  const previous = document.title;
  const restore = () => {
    document.title = previous;
    window.removeEventListener("afterprint", restore);
  };
  window.addEventListener("afterprint", restore);
  document.title = PDF_FILENAME;
  window.print();
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 border-b border-neutral-300 pb-1 text-[0.8rem] print:mb-1.5 print:text-[8pt] font-semibold uppercase tracking-[0.12em] text-neutral-500">
      {children}
    </h2>
  );
}

function ExternalName({ name, href }: { name: string; href?: string }) {
  if (!href) return <>{name}</>;
  return (
    <a href={href} className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900">
      {name}
    </a>
  );
}

export default function ResumePage({ stars }: ResumeProps) {
  const title = `${resume.name} – Resume`;

  return (
    <div className={`${geistSans.variable} font-sans min-h-screen bg-neutral-200 dark:bg-neutral-900 print:bg-white`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={resume.summary} />
        <link rel="canonical" href={`${SITE_URL}/resume`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={resume.summary} />
        <meta property="og:url" content={`${SITE_URL}/resume`} />
        <style>{`@page { size: letter; margin: 0.35in 0.5in; }`}</style>
      </Head>

      {/* Toolbar (screen only) */}
      <div className="sticky top-0 z-10 border-b border-neutral-300 bg-white/90 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/90 print:hidden">
        <div className="mx-auto flex max-w-[8.5in] items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            littlelittlecloud.com
          </Link>
          <button
            type="button"
            onClick={downloadPdf}
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download PDF
          </button>
        </div>
      </div>

      {/* Paper */}
      <main className="mx-auto my-6 max-w-[8.5in] bg-white px-6 py-8 text-[0.95rem] leading-snug text-neutral-800 shadow-xl sm:px-[0.6in] sm:py-[0.55in] print:my-0 print:max-w-none print:p-0 print:text-[9pt] print:leading-[1.3] print:shadow-none">
        <header className="mb-5 print:mb-2.5">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 print:text-[22pt]">{resume.name}</h1>
          <p className="mt-1 text-base font-medium text-neutral-600 print:text-[11pt]">{resume.headline}</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600 print:mt-1.5 print:gap-x-3 print:gap-y-0.5 print:text-[8.5pt]">
            {resume.contacts.filter((c) => c.onResume).map((c) => {
              const Icon = CONTACT_ICONS[c.kind];
              return (
                <li key={c.href}>
                  <a href={c.href} className="inline-flex items-center gap-1.5 hover:text-neutral-900 hover:underline">
                    <Icon className="h-[1.05em] w-[1.05em] shrink-0 text-neutral-500" aria-hidden />
                    {c.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </header>

        <section className="mb-5 print:mb-2.5">
          <SectionTitle>Summary</SectionTitle>
          <p>{resume.summary}</p>
        </section>

        <section className="mb-5 print:mb-2.5">
          <SectionTitle>Experience</SectionTitle>
          {resume.experience.map((job) => (
            <div key={job.company}>
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-neutral-900 print:text-[11.5pt]">{job.company}</h3>
                <ul className="mt-0.5 space-y-0.5">
                  {job.roles.map((r) => (
                    <li key={r.title} className="flex justify-between gap-4">
                      <span className="font-medium">{r.title}</span>
                      <span className="shrink-0 tabular-nums text-neutral-500">
                        {r.start} – {r.end}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 print:space-y-2">
                {job.highlights.map((h) => (
                  <div key={h.name} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <p>
                        <span className="font-semibold text-neutral-900">
                          <ExternalName name={h.name} href={h.url} />
                        </span>
                        <Stars repo={h.repo} stars={stars} />
                        <span className="text-neutral-500"> · {h.role}</span>
                      </p>
                      <span className="shrink-0 tabular-nums text-sm text-neutral-500 print:text-[8.5pt]">{h.period}</span>
                    </div>
                    <p className="italic text-neutral-600">{h.intro}</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-neutral-400">
                      {h.bullets.map((b) => (
                        <li key={b}><Md>{b}</Md></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-5 break-inside-avoid print:mb-2.5">
          <SectionTitle>Open Source</SectionTitle>
          <div className="space-y-3 print:space-y-2">
            {resume.ossProjects.map((p) => (
              <div key={p.name} className="break-inside-avoid">
                <p>
                  <span className="font-semibold text-neutral-900">
                    <ExternalName name={p.name} href={p.url} />
                  </span>
                  <Stars repo={p.repo} stars={stars} />
                  <span className="text-neutral-500"> · {p.role}</span>
                </p>
                <p className="italic text-neutral-600">
                  <Md>{p.description}</Md>
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-neutral-400">
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <Md>{b}</Md>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-5 sm:grid-cols-2 print:grid-cols-2">
          <section className="break-inside-avoid">
            <SectionTitle>Education</SectionTitle>
            {resume.education.map((e) => (
              <div key={e.school}>
                <p className="font-semibold text-neutral-900">{e.school}</p>
                <p className="flex justify-between gap-4">
                  <span>{e.degree}</span>
                  <span className="shrink-0 tabular-nums text-neutral-500">
                    {e.start} – {e.end}
                  </span>
                </p>
              </div>
            ))}
          </section>

          <section className="break-inside-avoid">
            <SectionTitle>Skills</SectionTitle>
            <dl className="space-y-0.5">
              {resume.skills.map((s) => (
                <div key={s.label} className="flex gap-2">
                  <dt className="w-20 shrink-0 font-semibold text-neutral-900">{s.label}</dt>
                  <dd>{s.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
    </div>
  );
}
