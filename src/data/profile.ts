// Single source of truth for both the homepage (/) and the resume (/resume).
// Edit content here; both pages pick it up. Text fields marked (md) accept
// inline Markdown (links, **bold**, `code`).

export type ContactKind = "email" | "website" | "github" | "linkedin" | "twitter";

export type Contact = {
  kind: ContactKind;
  label: string; // full text, e.g. "github.com/LittleLittleCloud"
  handle: string; // short text, e.g. "LittleLittleCloud"
  href: string;
  onResume: boolean;
};

export type Role = { title: string; start: string; end: string };

export type Highlight = {
  name: string;
  url: string;
  repo?: string; // "owner/name" on GitHub; shows a star badge (omit for closed source)
  role: string;
  period: string;
  intro: string; // one sentence about the project
  bullets: string[]; // (md) your contributions
};

export type Job = {
  company: string;
  summary: string;
  roles: Role[]; // most recent first
  highlights: Highlight[];
};

export type OssProject = {
  name: string;
  url: string;
  repo?: string;
  role: string;
  description: string; // (md) one sentence
  bullets: string[]; // (md) highlights
};

export type Education = { school: string; degree: string; start: string; end: string };

export type Profile = {
  name: string;
  headline: string;
  photo: string;
  about: string; // (md) homepage About section, can be multiple paragraphs
  summary: string; // resume Summary, 2-3 sentences
  contacts: Contact[];
  experience: Job[];
  ossProjects: OssProject[];
  education: Education[];
  skills: { label: string; items: string[] }[];
};

export const profile: Profile = {
  name: "XiaoYun Zhang",
  headline: "Senior Software Engineer · .NET Developer Tools, AI Agents & Machine Learning",
  photo: "profile.jpg",
  about: `I am a senior software engineer at Microsoft Developer Division. I am passionate about developing software, contributing to open-source projects, and cat.

At Microsoft, I build developer tools and AI for .NET. Since 2024 I have worked on [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) for VS Code, where I own the debugger, .NET Aspire integration and Hot Reload. Before that, I co-authored [AutoGen](https://github.com/microsoft/autogen), a multi-agent framework that makes it easy to build AI agents, and was a core contributor to [ML.NET](https://github.com/dotnet/machinelearning), where I built the AutoML v2 engine and brought GenAI models such as Phi-3 and Llama 3 to .NET, and led its Visual Studio tooling, ML.NET Model Builder.

Outside of work I lead [RazorConsole](https://github.com/RazorConsole/RazorConsole), an open-source library for building terminal UIs with Razor components. I also enjoy creating projects that are fun and/or useful, and play ~with~ my cat.
`,
  summary:
    "Senior software engineer in Microsoft Developer Division building .NET developer tools and AI since 2018. Own the debugger, .NET Aspire integration and Hot Reload in C# Dev Kit for VS Code. Previously co-authored AutoGen, one of the most popular multi-agent LLM frameworks, and was a core contributor to ML.NET, building its AutoML v2 engine and native GenAI model support. Creator of RazorConsole.",
  contacts: [
    {
      kind: "email",
      label: "xiaoyun@littlelittlecloud.com",
      handle: "xiaoyun@littlelittlecloud.com",
      href: "mailto:xiaoyun@littlelittlecloud.com",
      onResume: true,
    },
    {
      kind: "website",
      label: "littlelittlecloud.com",
      handle: "littlelittlecloud.com",
      href: "https://littlelittlecloud.com",
      onResume: true,
    },
    {
      kind: "github",
      label: "github.com/LittleLittleCloud",
      handle: "LittleLittleCloud",
      href: "https://github.com/LittleLittleCloud",
      onResume: true,
    },
    {
      kind: "linkedin",
      label: "linkedin.com/in/xiaoyun-zhang-1b531013a",
      handle: "XiaoYun Zhang",
      href: "https://www.linkedin.com/in/xiaoyun-zhang-1b531013a/",
      onResume: true,
    },
    {
      kind: "twitter",
      label: "x.com/bigmiao6",
      handle: "bigmiao6",
      href: "https://x.com/bigmiao6",
      onResume: false,
    },
  ],
  experience: [
    {
      company: "Microsoft",
      summary: "Developer Division: .NET developer tools for VS Code and Visual Studio, and AI / machine learning for .NET.",
      roles: [
        { title: "Senior Software Engineer", start: "Sep 2022", end: "Present" },
        { title: "Software Engineer II", start: "Sep 2020", end: "Sep 2022" },
        { title: "Software Engineer", start: "Oct 2018", end: "Sep 2020" },
      ],
      highlights: [
        {
          name: "C# Dev Kit",
          url: "https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit",
          role: "Debugger, .NET Aspire & Hot Reload",
          period: "2024 – Present",
          intro: "Microsoft's official extension for C# and .NET development in VS Code.",
          bullets: [
            "**Debugger**: Responsible for the .NET debugging experience in C# Dev Kit.",
            "**.NET Aspire**: Responsible for the .NET Aspire integration, so developers can run and debug Aspire apps from VS Code.",
            "**Hot Reload**: Responsible for Hot Reload, applying code changes to a running app without restarting it.",
          ],
        },
        {
          name: "AutoGen",
          url: "https://github.com/microsoft/autogen",
          repo: "microsoft/autogen",
          role: "Co-author & core contributor",
          period: "May 2023 – Mid 2024",
          intro:
            "Open-source multi-agent framework for building agentic AI applications, created jointly by Microsoft and Penn State University.",
          bullets: [
            "Pioneered the multi-agent pattern in AutoGen, helping establish it as one of the most popular frameworks in the LLM-agent field.",
            "Proposed and implemented the **GroupChat** pattern, a key feature driving AutoGen's adoption.",
            "Maintained the core library across both the Python and .NET implementations.",
          ],
        },
        {
          name: "ML.NET",
          url: "https://github.com/dotnet/machinelearning",
          repo: "dotnet/machinelearning",
          role: "Core contributor",
          period: "May 2019 – 2023",
          intro: "Microsoft's open-source, cross-platform machine learning framework for .NET.",
          bullets: [
            "**AutoML**: Implemented [Microsoft.ML.AutoML](https://www.nuget.org/packages/Microsoft.ML.AutoML) v2 from scratch, inspired by [FLAML](https://github.com/microsoft/FLAML), delivering state-of-the-art performance on tabular data. Its extensible design is widely used by internal teams for online model updates.",
            "**GenAI**: Built `Microsoft.ML.GenAI`, which implements popular models such as Phi-3, Llama 3 and Mistral (plus Stable Diffusion) on [TorchSharp](https://github.com/dotnet/TorchSharp), so .NET developers can run them natively.",
            "**Tooling**: Led [ML.NET Model Builder](https://dotnet.microsoft.com/en-us/apps/machinelearning-ai/ml-dotnet/model-builder), the Visual Studio wizard that brings AutoML to .NET developers.",
          ],
        },
      ],
    },
  ],
  ossProjects: [
    {
      name: "RazorConsole",
      url: "https://github.com/RazorConsole/RazorConsole",
      repo: "RazorConsole/RazorConsole",
      role: "Creator & lead",
      description: "A React Ink–style TUI framework for .NET that builds rich, interactive terminal apps with Razor components.",
      bullets: [
        "**Razor components for TUI**: Compose terminal interfaces with the same Razor component model used for web UI.",
        "**Built-in mouse & keyboard support**: Interactive elements handle mouse and keyboard input out of the box.",
        "**Built-in tools for agentic coding**: Ships tooling that helps AI coding agents build and iterate on RazorConsole apps.",
      ],
    },
  ],
  education: [
    {
      school: "Xi'an Jiaotong University",
      degree: "B.S. in Computer Science and Technology",
      start: "2014",
      end: "2018",
    },
  ],
  skills: [
    { label: "Languages", items: ["C#", "Python", "TypeScript / JavaScript"] },
    { label: "AI / ML", items: ["LLM agents & multi-agent systems", "AutoML", "GenAI model integration"] },
    { label: "Platforms", items: [".NET", "ML.NET", "TorchSharp", "Visual Studio extensibility"] },
  ],
};

/** All GitHub repos referenced by the profile (for fetching star counts). */
export const profileRepos = (): string[] =>
  [
    ...profile.experience.flatMap((j) => j.highlights.map((h) => h.repo)),
    ...profile.ossProjects.map((p) => p.repo),
  ].filter((r): r is string => Boolean(r));
