import React from "react";
import { ExternalLink } from "lucide-react";
import { PersonalInformation, WorkExperience, WorkHighlight } from "@/pages";
import { Markdown } from "./markdown";
import { StarBadge } from "./star-badge";
import { Section, cardClass } from "./section";

const Highlight: React.FC<WorkHighlight> = ({ name, url, repo, stars, role, period, description }) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60 sm:p-6">
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-blue-700 dark:hover:text-blue-400"
          >
            {name}
            <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden />
          </a>
        ) : (
          name
        )}
        {repo && stars !== undefined && (
          <span className="ml-2">
            <StarBadge repo={repo} stars={stars} />
          </span>
        )}
        <span className="ml-2 text-base font-normal text-slate-500 dark:text-slate-400">· {role}</span>
      </h4>
      <span className="shrink-0 text-sm tabular-nums text-slate-500 dark:text-slate-400">{period}</span>
    </div>
    <div className="prose prose-slate mt-3 max-w-none dark:prose-invert">
      <Markdown>{description}</Markdown>
    </div>
  </div>
);

const Job: React.FC<WorkExperience> = ({ company, roles, summary, highlights }) => (
  <div className={`${cardClass} p-5 sm:p-8`}>
    <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{company}</h3>
        {summary && <p className="mt-2 text-slate-600 dark:text-slate-400">{summary}</p>}
      </div>

      {/* Role progression, most recent first */}
      <ol className="space-y-3 border-l-2 border-slate-200 pl-5 dark:border-slate-700 lg:w-[26rem] lg:shrink-0">
        {roles.map((r, i) => (
          <li key={r.title} className="relative">
            <span
              className={`absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-white dark:ring-slate-900 ${
                i === 0 ? "bg-blue-600 dark:bg-blue-500" : "bg-slate-300 dark:bg-slate-600"
              }`}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 lg:flex-nowrap">
              <span
                className={`font-semibold ${i === 0 ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}
              >
                {r.title}
              </span>
              <span className="whitespace-nowrap text-sm tabular-nums text-slate-500 dark:text-slate-400">
                {r.startDate} – {r.endDate}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>

    <div className="space-y-4">
      {highlights.map((h) => (
        <Highlight key={h.name} {...h} />
      ))}
    </div>
  </div>
);

const Experience: React.FC<PersonalInformation> = ({ workExperience }) => (
  <Section id="experience" title="Work Experience" subtitle="AI agents, machine learning and developer tools for AI coding">
    <div className="space-y-6">
      {workExperience.map((exp) => (
        <Job key={exp.company} {...exp} />
      ))}
    </div>
  </Section>
);

export default Experience;
