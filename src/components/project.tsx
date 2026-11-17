import React from "react";
import { ExternalLink } from "lucide-react";
import { PersonalInformation, ProjectMetadata } from "@/pages";
import { Markdown } from "./markdown";
import { StarBadge } from "./star-badge";
import { Section, cardClass } from "./section";

const ProjectItem: React.FC<ProjectMetadata> = ({ name, description, url, repo, stars, role }) => (
  <div className={`${cardClass} p-5 sm:p-8`}>
    <div className="mb-4 flex items-start justify-between gap-4">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{name}</h3>
        {repo && stars !== undefined && <StarBadge repo={repo} stars={stars} />}
        {role && <span className="text-base text-slate-500 dark:text-slate-400">· {role}</span>}
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name}`}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      )}
    </div>
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <Markdown>{description}</Markdown>
    </div>
  </div>
);

const ProjectSection: React.FC<PersonalInformation> = ({ projects }) => (
  <Section id="projects" title="Open Source" subtitle="Open-source projects I created and lead">
    <div className="grid gap-6">
      {projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </div>
  </Section>
);

export default ProjectSection;
