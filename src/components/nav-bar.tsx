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
}

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
    <div className={`fixed top-0 z-50 left-0 right-0 transition-all duration-300`}>
      <div className={`backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg ${isScrolled ? 'shadow-xl' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                {name}
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item: NavItem) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                ))}
                <a
                  href={resumeUrl}
                  className="ml-4 relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-b border-gray-200/20 dark:border-gray-700/20 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={resumeUrl}
              className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-base font-medium text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
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
