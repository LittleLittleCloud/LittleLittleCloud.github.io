import React from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { SocialInformation, SocialInformationItem } from '@/pages';

interface SocialMediaItemProps extends SocialInformationItem {
  icon: React.ReactNode;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center gap-3 px-6 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-900/80 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
    aria-label={`Visit my ${label}`}
  >
    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
      {icon}
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {label}
      </span>
      <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
        {value}
      </span>
    </div>
    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <ExternalLink className="w-4 h-4 text-gray-400" />
    </div>
    
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/5 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
  </a>
);

interface SocialMediaBarProps extends SocialInformation {}

const SocialMediaBar: React.FC<SocialMediaBarProps> = (socials) => {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-2">
          Let's Connect
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Find me on these platforms
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <SocialMediaItem
          icon={<Github className="w-5 h-5" />}
          {...socials.github}
        />
        <SocialMediaItem
          icon={<Linkedin className="w-5 h-5" />}
          {...socials.linkedin}
        />
        <SocialMediaItem
          icon={<Twitter className="w-5 h-5" />}
          {...socials.twitter}
        />
        <SocialMediaItem
          icon={<Mail className="w-5 h-5" />}
          {...socials.email}
        />
      </div>
    </div>
  );
};

export default SocialMediaBar;
