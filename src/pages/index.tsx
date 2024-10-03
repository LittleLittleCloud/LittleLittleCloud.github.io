import Image from "next/image";
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

export type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
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

In Microsoft, I am primarily focused on AI for .Net and Visual Studio. I co-authored and contributed to [AutoGen](https://github.com/microsoft/autogen), a multi-agent framework that enables developers to create AI agents with ease. I also work on [ML.Net](https://github.com/dotnet/machinelearning) \
and [ML.NET Model Builder](https://dotnet.microsoft.com/en-us/apps/machinelearning-ai/ml-dotnet/model-builder) to make machine learning more accessible to .Net developers.

In my free time, I enjoy creating projects that are fun and/or useful. And my current active projects are [StepWise](https://github.com/LittleLittleCloud/StepWise) and [Agent-ChatRoom](https://github.com/LittleLittleCloud/Agent-ChatRoom). \
Where \`StepWise\` is a agentic workflow engine that helps developers to code, visualize and execute workflows with ease. And \`Agent-ChatRoom\` is a multi-agent chat app that allows users to create and interact with autogen agents in a group chat.\


Feel free to reach out to me if you have any questions or just want to chat. I am always happy to help and make new friends.
`,
    profile: "profile.png",
    resumeUrl: "resumeLatest.pdf",
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
        value: "xiaoyuz@microsoft.com",
        href: "mailto:xiaoyuz@microsoft.com",
      },
    },
    projects: [
      {
        name: "AutoGen",
        description: `
[AutoGen](https://github.com/microsoft/autogen) is an open-source multi-agent framework created by the joined effort of Microsoft and Penn State University. As the co-author and core contributor of AutoGen, my primary focus on this project are \
developing the core functionalities, like group chat. Plus the .Net Implementation of this framework.`,
      },
      {
        name: "ML.Net",
        description: "[ML.Net](https://github.com/dotnet/machinelearning) is an open-source and cross-platform machine learning framework for .NET developers. I start contributing to this project since 2019, and my primary focus is on the \
        [Microsoft.ML.AutoML](https://www.nuget.org/packages/Microsoft.ML.AutoML/0.22.0-preview.24378.1) library, which uses [Flaml](https://github.com/microsoft/FLAML) as the tuning engine behind \
        to provide a simple and efficient way to optimize hyperparameters for machine learning models. Other than that, I am also working on `Microsoft.ML.GenAI` \
        which implements a series of popular GenAI models, such as Phi, Llama and Mistral, using the [Torchsharp](https://github.com/dotnet/torchsharp) library.",
      },
      {
        name: "ML.Net Model Builder",
        description: "[ML.NET Model Builder](https://dotnet.microsoft.com/en-us/apps/machinelearning-ai/ml-dotnet/model-builder) is a simple UI tool that makes it easy to build, train, and deploy custom machine learning models in .NET. \
        I start working on this project since 2019. As the core contributor of this project, I anticipate all the development cycles of this project, from the initial design to the final release. \
        ML.Net Model Builder is now part of .Net development workload in Visual Studio 2022.",
      },
      {
        name: "Agent-ChatRoom",
        description: "[Agent-ChatRoom](https://github.com/LittleLittleCloud/Agent-ChatRoom) is a multi-agent chat app that allows users to create and interact with autogen agents in a group chat.",
      },
      {
        name: "StepWise",
        description: "[StepWise](https://github.com/LittleLittleCloud/StepWise) is an agentic workflow engine that helps developers to code, visualize and execute workflows with ease.",
      }
    ],
    education: [
      {
        school: "Xi'an Jiaotong University",
        degree: "Bachelor of Science",
        startDate: "September 2014",
        endDate: "June 2018",
        major: "Computer Science",
      },
    ],
    workExperience: [
      {
        company: "Microsoft",
        position: "Senior Software Engineer",
        startDate: "October 2018",
        endDate: "Present",
        description: "- Co-authored and Co-created AutoGen, a multi-agent framework that enables developers to create AI agents with ease. \
        I am responsible for developing the core functionalities, like group chat, and the .Net Implementation of this framework. \n \
- Develop ML.Net, the most popular machine learning framework for .Net developers. In ML.Net, I am primarily working on Microsoft.ML.AutoML to provide a simple and efficient way to optimize hyperparameters for machine learning models. \
Plus Microsoft.ML.GenAI which implements a series of popular GenAI models, such as Phi, Llama and Mistral, using the Torchsharp library. \n \
- Develop ML.Net Model Builder, a simple UI tool that makes it easy to build, train, and deploy custom machine learning models in .NET. I anticipate all the development cycles of this project, from the initial design to the final release."
      },
    ],
  } as PersonalInformation;
};

export default function Home() {
  const personalInformation = getPersonalInformation();

  return (
    <div className="min-h-screen bg-accent/10">
      <main className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8 bg-primary">
        <Navbar {...personalInformation} />
        <About {...personalInformation} />
        <ProjectSection {...personalInformation} />
        <Experience {...personalInformation} />
        <EducationSection {...personalInformation} />
      </main>

      <footer className="hadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            {`© 2024 ${personalInformation.name}. All rights reserved.`}
          </p>
        </div>
      </footer>
    </div>
  );
}
