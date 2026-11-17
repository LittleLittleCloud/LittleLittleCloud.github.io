import React from "react";
import { ExternalLink } from "lucide-react";
import { PersonalInformation, WorkExperience, WorkHighlight } from "@/pages";
import { Markdown } from "./markdown";

const Highlight: React.FC<WorkHighlight> = ({ name, url, role, period, description }) => (
  <div className="rounded-xl border border-gray-200/60 bg-white/50 p-4 dark:border-gray-700/40 dark:bg-gray-900/40 sm:p-6">
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {name}
            <ExternalLink className="h-4 w-4 opacity-60" aria-hidden />
          </a>
        ) : (
          name
        )}
        <span className="ml-2 text-base font-medium text-gray-500 dark:text-gray-400">· {role}</span>
      </h4>
      <span className="shrink-0 text-sm tabular-nums text-gray-500 dark:text-gray-400">{period}</span>
    </div>
    <div className="prose prose-gray mt-3 max-w-none dark:prose-invert">
      <Markdown>{description}</Markdown>
    </div>
  </div>
);

const ExperienceItem: React.FC<WorkExperience> = ({ company, roles, summary, highlights }) => (
  <div className="rounded-2xl border border-gray-200/20 bg-white/60 p-4 shadow-lg backdrop-blur-xl dark:border-gray-700/20 dark:bg-gray-900/60 sm:p-8">
    <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{company}</h3>
        {summary && <p className="mt-2 text-gray-600 dark:text-gray-300">{summary}</p>}
      </div>

      {/* Role progression, most recent first */}
      <ol className="relative space-y-3 border-l-2 border-blue-500/40 pl-5 lg:w-[26rem] lg:shrink-0">
        {roles.map((r, i) => (
          <li key={r.title} className="relative">
            <span
              className={`absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full ${
                i === 0 ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 lg:flex-nowrap">
              <span className={`font-semibold ${i === 0 ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                {r.title}
              </span>
              <span className="whitespace-nowrap text-sm tabular-nums text-gray-500 dark:text-gray-400">
                {r.startDate} – {r.endDate}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>

    <div className="space-y-5">
      {highlights.map((h) => (
        <Highlight key={h.name} {...h} />
      ))}
    </div>
  </div>
);

const Experience: React.FC<PersonalInformation> = ({ workExperience }) => {
  return (
    <div id="experience" className="scroll-mt-20 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200 lg:text-5xl">
          Work Experience
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400">
          AI and machine learning for .NET developers
        </p>
      </div>

      <div className="space-y-8">
        {workExperience.map((exp) => (
          <ExperienceItem key={exp.company} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
