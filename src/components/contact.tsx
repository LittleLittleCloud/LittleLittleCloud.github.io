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
    className="flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-colors duration-300"
  >
    {icon}
    <span>{value}</span>
  </a>
);

const ContactComponent: React.FC<SocialInformation> = (socials) => {
  return (
    <div className="shadow-md rounded-lg py-6 w-full mx-auto">
      <div className="space-y-3">
        <ContactItem
          icon={<Mail className="w-5 h-5" />}
          {...socials.email}
        />
        <ContactItem
          icon={<Github className="w-5 h-5" />}
          {...socials.github}
        />
        <ContactItem
          icon={<Linkedin className="w-5 h-5" />}
          {...socials.linkedin}
        />
        <ContactItem
          icon={<Twitter className="w-5 h-5" />}
          {...socials.twitter}
        />
      </div>
    </div>
  );
};

export default ContactComponent;