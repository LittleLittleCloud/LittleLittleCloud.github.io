import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { PersonalInformation, SocialInformation, SocialInformationItem } from '@/pages';

interface ContactItemProps extends SocialInformationItem {
  icon: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-transparent hover:border-gray-200/30 dark:hover:border-gray-600/30"
  >
    <div className="flex-shrink-0 p-2 rounded-md bg-gradient-to-br from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-200">
      {icon}
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{label}</span>
      <span className="text-sm text-gray-900 dark:text-gray-100 font-medium truncate">{value}</span>
    </div>
  </a>
);

const ContactComponent: React.FC<SocialInformation> = (socials) => {
  return (
    <div className="w-full max-w-xs">
      <div className="space-y-2">
        <ContactItem
          icon={<Mail className="w-4 h-4" />}
          {...socials.email}
        />
        <ContactItem
          icon={<Github className="w-4 h-4" />}
          {...socials.github}
        />
        <ContactItem
          icon={<Linkedin className="w-4 h-4" />}
          {...socials.linkedin}
        />
        <ContactItem
          icon={<Twitter className="w-4 h-4" />}
          {...socials.twitter}
        />
      </div>
    </div>
  );
};

export default ContactComponent;