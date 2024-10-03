import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { PersonalInformation } from '@/pages';

// Define types for navigation items
type NavItem = {
  name: string;
  href: string;
};

// Define props for the Navbar component
export interface NavbarProps extends PersonalInformation {
};

const Navbar: React.FC<NavbarProps> = ({ name, resumeUrl }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: NavItem[] = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className={`fixed top-0 z-50 left-0 right-0`}>
      <div className={`w-full  max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  transition-all duration-300 ${isScrolled ? 'bg-primary/90 shadow-md' : ''}`}>
        <div className="flex items-center justify-between h-16">
          <div className="flex grow items-center">
            <Link href="/" className="text-xl font-bold">
              {name}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item: NavItem) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={resumeUrl}
                className="bg-pink-500 hover:bg-pink-600 px-3 py-2 rounded-md text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="bg-pink-500 hover:bg-pink-600 block px-3 py-2 rounded-md text-base font-medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

function setIsScrolled(arg0: boolean) {
    throw new Error('Function not implemented.');
}
