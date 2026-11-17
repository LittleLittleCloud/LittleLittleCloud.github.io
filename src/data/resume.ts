// Single source of truth for the /resume page (and its PDF export via print).
// Edit this file to update the resume; no layout changes needed.

export type ResumeLink = { label: string; href: string };

export type ResumeRole = { title: string; start: string; end: string };

export type ResumeHighlightGroup = {
  name: string;
  href?: string;
  role: string;
  period: string;
  summary?: string;
  bullets: string[];
};

export type ResumeSideProject = { name: string; href: string; description: string };

export type Resume = {
  name: string;
  headline: string;
  contacts: ResumeLink[];
  summary: string;
  experience: {
    company: string;
    roles: ResumeRole[];
    highlights: ResumeHighlightGroup[];
  }[];
  sideProjects: ResumeSideProject[];
  education: { school: string; degree: string; start: string; end: string }[];
  skills: { label: string; items: string[] }[];
};

export const resume: Resume = {
  name: "XiaoYun Zhang",
  headline: "Senior Software Engineer · AI Agents & Machine Learning for .NET",
  contacts: [
    { label: "xiaoyun@littlelittlecloud.com", href: "mailto:xiaoyun@littlelittlecloud.com" },
    { label: "littlelittlecloud.com", href: "https://littlelittlecloud.com" },
    { label: "github.com/LittleLittleCloud", href: "https://github.com/LittleLittleCloud" },
    { label: "linkedin.com/in/xiaoyun-zhang-1b531013a", href: "https://www.linkedin.com/in/xiaoyun-zhang-1b531013a/" },
  ],
  summary:
    "Senior software engineer in Microsoft Developer Division building AI and machine learning developer tools since 2018. Co-author of AutoGen, one of the most popular multi-agent LLM frameworks, and core contributor to ML.NET, where I built the AutoML v2 engine and native GenAI model support.",
  experience: [
    {
      company: "Microsoft",
      roles: [
        { title: "Senior Software Engineer", start: "Sep 2022", end: "Present" },
        { title: "Software Engineer II", start: "Sep 2020", end: "Sep 2022" },
        { title: "Software Engineer", start: "Oct 2018", end: "Sep 2020" },
      ],
      highlights: [
        {
          name: "AutoGen",
          href: "https://github.com/microsoft/autogen",
          role: "Co-author & core contributor",
          period: "May 2023 – Present",
          summary: "Open-source multi-agent framework for building agentic AI applications.",
          bullets: [
            "Pioneered the multi-agent pattern in AutoGen, helping establish it as one of the most popular frameworks in the LLM-agent field.",
            "Proposed and implemented the GroupChat pattern, a key feature driving AutoGen's adoption.",
            "Maintained the core library across both the .NET and Python implementations.",
            "Contributed to AutoGen's influence on subsequent multi-agent frameworks across the AI industry.",
          ],
        },
        {
          name: "ML.NET",
          href: "https://github.com/dotnet/machinelearning",
          role: "Core contributor",
          period: "May 2019 – Present",
          summary: "The most popular machine learning framework for .NET.",
          bullets: [
            "Implemented the Microsoft.ML.AutoML v2 framework from scratch, inspired by FLAML, delivering state-of-the-art performance on tabular data.",
            "Built a highly extensible AutoML framework widely used by internal teams for online model updates.",
            "Built Microsoft.ML.GenAI, implementing Phi-3, Llama 3, Mistral and Stable Diffusion on TorchSharp so .NET developers can run GenAI models natively.",
            "Led ML.NET Model Builder, the Visual Studio machine learning wizard, delivering AutoML for classification, regression, object detection and NLP.",
          ],
        },
      ],
    },
  ],
  sideProjects: [
    {
      name: "RazorConsole",
      href: "https://github.com/RazorConsole/RazorConsole",
      description: "Build rich, interactive terminal UIs with Razor components.",
    },
    {
      name: "StepWise",
      href: "https://github.com/LittleLittleCloud/StepWise",
      description: "Agentic workflow engine for building, visualizing and executing event-driven workflows in .NET.",
    },
    {
      name: "LLM Canvas",
      href: "https://github.com/LittleLittleCloud/llm-canvas",
      description: "Programmatically create and visualize branching LLM conversation trees, with local deployment.",
    },
    {
      name: "Agent ChatRoom",
      href: "https://github.com/LittleLittleCloud/Agent-ChatRoom",
      description: "Multi-agent group-chat UI for AutoGen agents.",
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
