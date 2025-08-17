import React, { useEffect } from "react";
import Image from "next/image";
import { PersonalInformation, SocialInformation, SocialInformationItem } from "@/pages";
import { Markdown } from "./markdown";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export interface AboutProps extends PersonalInformation {}

interface SocialMediaItemProps extends SocialInformationItem {
  icon: React.ReactNode;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
    aria-label={`Visit my ${label}`}
    title={`${label}: ${value}`}
  >
    <div className="flex-shrink-0 text-current">
      {icon}
    </div>
    <span className="text-sm font-medium">{label}</span>
  </a>
);

const About: React.FC<AboutProps> = ({ name, description, profile, socials }) => {
  useEffect(() => {
    console.log("About component mounted");
  }, []);
  
  return (
    <div id="about" className="pt-24 pb-16">
      {/* Combined About and Social Media Section in One Card */}
      <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-3xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 p-8 lg:p-12">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-72 h-80 overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <Image
                  src={profile}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                {name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                Senior Software Engineer at Microsoft
              </p>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Markdown>{description}</Markdown>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center gap-6 border-t border-gray-200/20 dark:border-gray-700/20">
          <SocialMediaItem
            icon={<Github className="w-4 h-4" />}
            {...socials.github}
          />
          <SocialMediaItem
            icon={<Linkedin className="w-4 h-4" />}
            {...socials.linkedin}
          />
          <SocialMediaItem
            icon={<Twitter className="w-4 h-4" />}
            {...socials.twitter}
          />
          <SocialMediaItem
            icon={<Mail className="w-4 h-4" />}
            {...socials.email}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
