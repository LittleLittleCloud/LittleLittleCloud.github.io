import localFont from "next/font/local";
import Head from "next/head";
import Navbar from "@/components/nav-bar";
import About from "@/components/about";
import Experience from "@/components/experience";
import EducationSection from "@/components/education";
import ProjectSection from "@/components/project";

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
};

export type Education = {
  school: string;
  degree: string;
  major: string;
  graduation: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type WorkRole = {
  title: string;
  startDate: string;
  endDate: string;
};

export type WorkHighlight = {
  name: string;
  url?: string;
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

export const getPersonalInformation = () => {
  return {
    name: "XiaoYun Zhang",
    title: "Web Developer | Tech Enthusiast | Coffee Lover",
    description:`I am a senior software engineer at Microsoft Developer Division. I am passionate about developing software, contributing to open-source projects, and cat.

At Microsoft, I focus on AI for .NET and Visual Studio. I co-authored [AutoGen](https://github.com/microsoft/autogen), a multi-agent framework that makes it easy to build AI agents. I am also a core contributor to [ML.NET](https://github.com/dotnet/machinelearning), where I built the AutoML v2 engine and brought GenAI models such as Phi-3 and Llama 3 to .NET, and I led its Visual Studio tooling, ML.NET Model Builder.

In my free time, I enjoy creating projects that are fun and/or useful, and play ~with~ my cat.
`,
    profile: "profile.jpg",
    resumeUrl: "/resume",
    socials: {
      github: {
        label: "GitHub",
        value: "LittleLittleCloud",
        href: "https://github.com/LittleLittleCloud",
      },
      linkedin: {
        label: "LinkedIn",
        value: "XiaoYun Zhang",
        href: "https://www.linkedin.com/in/xiaoyun-zhang-1b531013a/",
      },
      twitter: {
        label: "Twitter",
        value: "bigmiao6",
        href: "https://x.com/bigmiao6",
      },
      email: {
        label: "Email",
        value: "xiaoyun@littlelittlecloud.com",
        href: "mailto:xiaoyun@littlelittlecloud.com",
      },
    },
    projects: [
      {
        name: "RazorConsole",
        url: "https://github.com/RazorConsole/RazorConsole",
        description: `[RazorConsole](https://github.com/RazorConsole/RazorConsole) bridges the gap between modern web UI development and console applications. It lets you create sophisticated terminal interfaces using Razor components, complete with interactive elements, rich styling, and familiar development patterns.`,
      }
    ],
    education: [
      {
        school: "Xi'an Jiaotong University",
        degree: "Bachelor of Science",
        startDate: "September 2014",
        endDate: "June 2018",
        major: "Computer Science",
        graduation: "June 2018",
        description: "I graduated from Xi'an Jiaotong University with a Bachelor of Science in Computer Science.",      },
    ],
    workExperience: [
      {
        company: "Microsoft",
        roles: [
          { title: "Senior Software Engineer", startDate: "Sep 2022", endDate: "Present" },
          { title: "Software Engineer II", startDate: "Sep 2020", endDate: "Sep 2022" },
          { title: "Software Engineer", startDate: "Oct 2018", endDate: "Sep 2020" },
        ],
        summary: "Developer Division: AI and machine learning for .NET and Visual Studio.",
        highlights: [
          {
            name: "AutoGen",
            url: "https://github.com/microsoft/autogen",
            role: "Co-author & core contributor",
            period: "May 2023 – Present",
            description: `
[AutoGen](https://github.com/microsoft/autogen) is an open-source multi-agent framework for building agentic AI applications, created jointly by Microsoft and Penn State University.

- Pioneered the multi-agent pattern in AutoGen, helping establish it as one of the most popular frameworks in the LLM-agent field.
- Proposed and implemented the **GroupChat** pattern, a key feature driving AutoGen's adoption.
- Maintained the core library across both the Python and .NET implementations.
`,
          },
          {
            name: "ML.NET",
            url: "https://github.com/dotnet/machinelearning",
            role: "Core contributor",
            period: "May 2019 – Present",
            description: `
[ML.NET](https://github.com/dotnet/machinelearning) is Microsoft's open-source, cross-platform machine learning framework for .NET.

- **AutoML**: Implemented [Microsoft.ML.AutoML](https://www.nuget.org/packages/Microsoft.ML.AutoML) v2 from scratch, inspired by [FLAML](https://github.com/microsoft/FLAML), delivering state-of-the-art performance on tabular data. Its extensible design is widely used by internal teams for online model updates.
- **GenAI**: Built \`Microsoft.ML.GenAI\`, which implements popular models such as Phi-3, Llama 3 and Mistral (plus Stable Diffusion) on [TorchSharp](https://github.com/dotnet/TorchSharp), so .NET developers can run them natively.
- **Tooling**: Led [ML.NET Model Builder](https://dotnet.microsoft.com/en-us/apps/machinelearning-ai/ml-dotnet/model-builder), the Visual Studio wizard that brings AutoML to .NET developers.
`,
          },
        ],
      },
    ],
  } as PersonalInformation;
};

const SITE_URL = "https://littlelittlecloud.com";

export default function Home() {
  const personalInformation = getPersonalInformation();
  const pageTitle = `${personalInformation.name} - Senior Software Engineer at Microsoft`;
  const pageDescription =
    "XiaoYun Zhang is a senior software engineer at Microsoft working on AI for .NET: co-author of AutoGen, and contributor to ML.NET and ML.NET Model Builder.";

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
