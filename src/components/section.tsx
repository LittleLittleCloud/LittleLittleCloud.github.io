import React from "react";

/** Shared surface style for content cards across homepage sections. */
export const cardClass =
  "rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

/** Homepage section with an anchor offset that clears the fixed navbar. */
export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
    {children}
  </section>
);
