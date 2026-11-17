import React from "react";
import { PersonalInformation } from "@/pages";
import { Section, cardClass } from "./section";

const EducationSection: React.FC<PersonalInformation> = ({ education }) => (
  <Section id="education" title="Education">
    <div className="space-y-4">
      {education.map((e) => (
        <div
          key={e.school}
          className={`${cardClass} flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:p-6`}
        >
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{e.school}</h3>
            <p className="text-slate-600 dark:text-slate-400">{e.degree}</p>
          </div>
          <span className="shrink-0 text-sm tabular-nums text-slate-500 dark:text-slate-400">
            {e.startDate} – {e.endDate}
          </span>
        </div>
      ))}
    </div>
  </Section>
);

export default EducationSection;
