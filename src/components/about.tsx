import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { PersonalInformation, SocialInformationItem } from "@/pages";
import { Markdown } from "./markdown";
import { cardClass } from "./section";

const SocialLink: React.FC<SocialInformationItem & { icon: React.ReactNode }> = ({ icon, label, value, href }) => (
  <a
    href={href}
    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    title={`${label}: ${value}`}
    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
  >
    <span aria-hidden>{icon}</span>
    {label}
  </a>
);

const About: React.FC<PersonalInformation> = ({ name, title, description, profile, socials }) => (
  <section id="about" className="scroll-mt-24 pt-24">
    <div className={`${cardClass} p-6 sm:p-10`}>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div className="shrink-0 rounded-3xl bg-white p-2 shadow-md ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
          <div className="relative h-72 w-64 overflow-hidden rounded-2xl sm:h-80 sm:w-72">
            <Image src={profile} alt={name} fill priority sizes="288px" className="object-cover" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-5xl">{name}</h1>
          <p className="mt-3 text-lg font-medium text-slate-600 dark:text-slate-300">{title}</p>

          <div className="prose prose-slate mt-6 max-w-none dark:prose-invert lg:prose-lg">
            <Markdown>{description}</Markdown>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <SocialLink icon={<Github className="h-4 w-4" />} {...socials.github} />
            <SocialLink icon={<Linkedin className="h-4 w-4" />} {...socials.linkedin} />
            <SocialLink icon={<Twitter className="h-4 w-4" />} {...socials.twitter} />
            <SocialLink icon={<Mail className="h-4 w-4" />} {...socials.email} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
