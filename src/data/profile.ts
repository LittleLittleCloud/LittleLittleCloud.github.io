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
  headline: "Senior Software Engineer · AI Agents, Machine Learning & Developer Tools for AI Coding",
  photo: "avatar.jpg",
  about: `I build AI agents and the developer tools they run on.

I am a senior software engineer at Microsoft CoreAI, where I make [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) work well for AI coding agents: an MCP server and agent plugin that bring it into GitHub Copilot and OpenAI Codex, and faster startup for agents that work across many git worktrees. Before that, I co-authored [AutoGen](https://github.com/microsoft/autogen) and built the AutoML v2 engine and GenAI model support in [ML.NET](https://github.com/dotnet/machinelearning).

Outside of work I lead [RazorConsole](https://github.com/RazorConsole/RazorConsole), a React Ink–style TUI framework for .NET, and hang out with my cat.
`,
  summary:
    "Senior software engineer at Microsoft since 2018 (now CoreAI), building AI agents and the developer tools they run on. Currently making C# Dev Kit agent-ready for GitHub Copilot and OpenAI Codex. Co-authored AutoGen; built ML.NET's AutoML v2 engine and GenAI model support. Creator of RazorConsole.",
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
      summary: "CoreAI: AI coding agents, developer tools for VS Code and Visual Studio, and machine learning for .NET.",
      roles: [
        { title: "Senior Software Engineer", start: "Sep 2022", end: "Present" },
        { title: "Software Engineer II", start: "Sep 2020", end: "Sep 2022" },
        { title: "Software Engineer", start: "Oct 2018", end: "Sep 2020" },
      ],
      highlights: [
        {
          name: "C# Dev Kit",
          url: "https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit",
          role: "AI coding agent integration, debugger & Hot Reload",
          period: "2024 – Present",
          intro: "Microsoft's official extension for C# and .NET development in VS Code.",
          bullets: [
            "**C# Dev Kit for coding agents**: Own its integration into GitHub Copilot and OpenAI Codex (MCP server + agent plugin): agents use its build, diagnostics and format instead of `dotnet` CLI, reusing the loaded workspace.",
            "**Language service cache**: Faster startup for coding agents across many git worktrees; shipped in recent releases.",
            "**Core experiences**: Own the .NET debugger, .NET Aspire integration and Hot Reload.",
          ],
        },
        {
          name: "AutoGen",
          url: "https://github.com/microsoft/autogen",
          repo: "microsoft/autogen",
          role: "Co-author & core contributor",
          period: "May 2023 – Mid 2024",
          intro: "Open-source multi-agent framework for agentic AI, created by Microsoft and Penn State University.",
          bullets: [
            "Pioneered AutoGen's multi-agent pattern, helping make it one of the most popular LLM-agent frameworks.",
            "Proposed and implemented the **GroupChat** pattern, a key feature driving AutoGen's adoption.",
            "Maintained the core library across the Python and .NET implementations.",
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
            "**AutoML**: Built [Microsoft.ML.AutoML](https://www.nuget.org/packages/Microsoft.ML.AutoML) v2 from scratch, inspired by [FLAML](https://github.com/microsoft/FLAML); used by internal teams for online model updates.",
            "**GenAI**: Built `Microsoft.ML.GenAI`, running Phi-3, Llama 3, Mistral and Stable Diffusion natively in .NET on [TorchSharp](https://github.com/dotnet/TorchSharp).",
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
