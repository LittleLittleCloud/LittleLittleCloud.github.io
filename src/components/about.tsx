import React from "react";
import Image from "next/image";
import { PersonalInformation } from "@/pages";
import Link from "next/link";
import { GithubIcon, Linkedin, Mail, Twitter } from "lucide-react";

export interface AboutProps extends PersonalInformation {}

const About: React.FC<AboutProps> = ({ name, description, socials }) => {
  return (
    <div id="about" className="max-w-4xl pt-16 mx-auto p-6 ">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <div className="relative w-64 h-80">
            <Image
              src="/path-to-your-image.jpg"
              alt="Me at Giza Pyramid"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="my-12 flex items-center gap-5">
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
          <p className="mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
