import React, { useEffect } from "react";
import Image from "next/image";
import { PersonalInformation } from "@/pages";
import Link from "next/link";
import { GithubIcon, Linkedin, Mail, Twitter } from "lucide-react";
import { Markdown } from "./markdown";

export interface AboutProps extends PersonalInformation {}

const About: React.FC<AboutProps> = ({ name, description, socials, profile }) => {

  useEffect(() => {
    console.log("About component mounted");
  }, []);
  return (
    <div id="about" className="max-w-4xl pt-16 mx-auto p-6 ">
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-64">
          <div className="relative h-80">
            <Image
              src={profile}
              alt="Me at Giza Pyramid"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="my-12 flex justify-center gap-8">
            <Link
              href={socials.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <GithubIcon size={30} />
            </Link>
            <Link
              href={socials.linkedin}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Linkedin size={30} />
            </Link>
            <Link
              href={socials.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Twitter size={30} />
            </Link>
            <Link
              href={socials.email}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <Mail size={30} />
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default About;
