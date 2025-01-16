import React, { useEffect } from "react";
import Image from "next/image";
import { PersonalInformation } from "@/pages";
import Link from "next/link";
import { GithubIcon, Linkedin, Mail, Twitter } from "lucide-react";
import { Markdown } from "./markdown";
import ContactComponent from "./contact";

export interface AboutProps extends PersonalInformation {}

const About: React.FC<AboutProps> = ({ name, description, socials, profile }) => {
  const iconSize = 20;
  useEffect(() => {
    console.log("About component mounted");
  }, []);
  return (
    <div id="about" className="flex flex-col items-center max-w-4xl pt-16 mx-auto p-6 ">
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-64">
          <div className="relative h-80">
            <Image
              src={profile}
              alt="PanPan"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1">
          <Markdown>{description}</Markdown>
        </div>
      </div>
      <ContactComponent {...socials} />
    </div>
  );
};

export default About;
