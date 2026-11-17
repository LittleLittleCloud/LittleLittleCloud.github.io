import React from "react";
import { profile } from "@/data/profile";
import { Markdown } from "./markdown";
import { Section, cardClass } from "./section";

const Publications: React.FC = () => {
  if (profile.publications.length === 0) return null;
  return (
    <Section id="publications" title="Publications">
      <ul className="space-y-4">
        {profile.publications.map((p) => (
          <li key={p.url} className={`${cardClass} p-5 sm:p-6`}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400"
            >
              {p.title}
            </a>
            <div className="prose prose-slate mt-1 max-w-none text-sm dark:prose-invert">
              <Markdown>{p.authors}</Markdown>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {p.venue}, {p.year}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Publications;
