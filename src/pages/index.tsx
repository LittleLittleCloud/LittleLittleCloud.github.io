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
  url: string;
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

export type SocialInformation = {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
};

export type PersonalInformation = {
  name: string;
  title: string;
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
    description:
      "Welcome to my personal website. I'm a software developer and cat lover",
    socials: {
      github: "JohnDoe",
      linkedin: "JohnDoe",
      twitter: "JohnDoe",
      email: "JohnDoe@gmail.com",
    },
    projects: [
      {
        name: "Project 1",
        description: "This is a description for Project 1.",
        url: "#",
      },
      {
        name: "Project 2",
        description: "This is a description for Project 2.",
        url: "#",
      },
    ],
    education: [
      {
        school: "University of Example",
        degree: "Bachelor of Science",
        major: "Computer Science",
        graduation: "May 2023",
      },
    ],
    workExperience: [
      {
        company: "Example Company",
        position: "Software Engineer",
        startDate: "May 2023",
        endDate: "Present",
        description:
          "This is a description for my work experience at Example Company.",
      },
    ],
  } as PersonalInformation;
};

export default function Home() {
  const personalInformation = getPersonalInformation();

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <Navbar {...personalInformation} />
        <About {...personalInformation} />
        <ProjectSection {...personalInformation} />
        <Experience {...personalInformation} />
        <EducationSection {...personalInformation} />
      </main>

      <footer className="hadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
