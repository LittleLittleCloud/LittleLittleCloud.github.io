import localFont from "next/font/local";
import Head from "next/head";
import Navbar from "@/components/nav-bar";
import About from "@/components/about";
import Experience from "@/components/experience";
import EducationSection from "@/components/education";
import ProjectSection from "@/components/project";
import type { GetStaticProps } from "next";
import { fetchStarCounts, type StarCounts } from "@/lib/github-stars";
import { profile, profileRepos, type ContactKind } from "@/data/profile";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export type ProjectMetadata = {
  name: string;
  description: string;
  url?: string;
  repo?: string; // "owner/name" on GitHub, enables the star badge
  stars?: number;
  role?: string;
};

export type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export type WorkRole = {
  title: string;
  startDate: string;
  endDate: string;
};

export type WorkHighlight = {
  name: string;
  url?: string;
  repo?: string; // "owner/name" on GitHub, enables the star badge
  stars?: number;
  role: string;
  period: string;
  description: string; // markdown
};

export type WorkExperience = {
  company: string;
  roles: WorkRole[];
  summary?: string;
  highlights: WorkHighlight[];
};

export type SocialInformationItem = {
  label: string;
  value: string;
  href: string;
};

export type SocialInformation = {
  github: SocialInformationItem;
  linkedin: SocialInformationItem;
  twitter: SocialInformationItem;
  email: SocialInformationItem;
};

export type PersonalInformation = {
  name: string;
  title: string;
  profile: string;
  resumeUrl?: string;
  description: string;
  socials: SocialInformation;
  projects: ProjectMetadata[];
  education: Education[];
  workExperience: WorkExperience[];
};

// Homepage view of the shared profile in src/data/profile.ts.
export const getPersonalInformation = (): PersonalInformation => {
  const contact = (kind: ContactKind, label: string): SocialInformationItem => {
    const c = profile.contacts.find((x) => x.kind === kind)!;
    return { label, value: c.handle, href: c.href };
  };

  return {
    name: profile.name,
    title: profile.headline,
    description: profile.about,
    profile: profile.photo,
    resumeUrl: "/resume",
    socials: {
      github: contact("github", "GitHub"),
      linkedin: contact("linkedin", "LinkedIn"),
      twitter: contact("twitter", "X"),
      email: contact("email", "Email"),
    },
    projects: profile.ossProjects.map((p) => ({
      name: p.name,
      url: p.url,
      repo: p.repo,
      role: p.role,
      description: `${p.description}\n\n${p.bullets.map((b) => `- ${b}`).join("\n")}\n`,
    })),
    education: profile.education.map((e) => ({
      school: e.school,
      degree: e.degree,
      startDate: e.start,
      endDate: e.end,
    })),
    workExperience: profile.experience.map((job) => ({
      company: job.company,
      summary: job.summary,
      roles: job.roles.map((r) => ({ title: r.title, startDate: r.start, endDate: r.end })),
      highlights: job.highlights.map((h) => ({
        name: h.name,
        url: h.url,
        repo: h.repo,
        role: h.role,
        period: h.period,
        description: `${h.intro}\n\n${h.bullets.map((b) => `- ${b}`).join("\n")}\n`,
      })),
    })),
  };
};

const SITE_URL = "https://littlelittlecloud.com";

const withStars = (info: PersonalInformation, stars: StarCounts): PersonalInformation => ({
  ...info,
  projects: info.projects.map((p) => (p.repo ? { ...p, stars: stars[p.repo] } : p)),
  workExperience: info.workExperience.map((w) => ({
    ...w,
    highlights: w.highlights.map((h) => (h.repo ? { ...h, stars: stars[h.repo] } : h)),
  })),
});

type HomeProps = { stars: StarCounts };

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const stars = await fetchStarCounts(profileRepos());
  return { props: { stars } };
};

export default function Home({ stars }: HomeProps) {
  const personalInformation = withStars(getPersonalInformation(), stars);
  const pageTitle = `${personalInformation.name} - Senior Software Engineer at Microsoft`;
  const pageDescription =
    "XiaoYun Zhang is a senior software engineer at Microsoft building .NET developer tools and AI: C# Dev Kit (debugger, .NET Aspire, Hot Reload), co-author of AutoGen, former ML.NET core contributor, and creator of RazorConsole.";

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 ${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${SITE_URL}/${personalInformation.profile}`} />
        <meta property="og:image:alt" content={personalInformation.name} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@${personalInformation.socials.twitter.value}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/${personalInformation.profile}`} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8fafc" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInformation.name,
              url: SITE_URL,
              image: `${SITE_URL}/${personalInformation.profile}`,
              jobTitle: "Senior Software Engineer",
              worksFor: { "@type": "Organization", name: "Microsoft" },
              alumniOf: personalInformation.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
              sameAs: [
                personalInformation.socials.github.href,
                personalInformation.socials.linkedin.href,
                personalInformation.socials.twitter.href,
              ],
            }),
          }}
        />
      </Head>
      
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <Navbar {...personalInformation} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <About {...personalInformation} />
          <Experience {...personalInformation} />
          <ProjectSection {...personalInformation} />
          <EducationSection {...personalInformation} />
        </div>

        <footer className="mt-16 border-t border-gray-200/20 backdrop-blur-sm bg-white/10 dark:bg-gray-900/10">
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600 dark:text-gray-400">
              {`© ${new Date().getFullYear()} ${personalInformation.name}. All rights reserved.`}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
