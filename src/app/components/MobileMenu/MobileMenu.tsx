'use client';

import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { type MobileMenuLink, MobileMenuProps } from './MobileMenu.d';

import Link from 'next/link';
const defaultLinks: MobileMenuLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Login', href: '/login' },
];


const MobileMenu = ({
  links = defaultLinks,
  className = '',
  iconClassName = '',
  menuClassName = '',
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: MobileMenuLink) => {
    if (link.onClick) {
      link.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
        <button
          onClick={toggleMenu}
          className={`text-gray-700 hover:text-gray-500 focus:outline-none transition-colors ${iconClassName}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <RxHamburgerMenu className="text-3xl" />
          )}
        </button>
      {/* Expandable Menu */}
      {isOpen && (
        <div
          className={`fixed right-0 top-11.5  bg-gray-900/95 backdrop-blur-sm shadow-lg ${menuClassName}`}
        >
          <nav className="flex flex-col space-y-1 p-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="block text-white hover:text-blue-400 hover:bg-gray-800 px-4 py-3 rounded-md text-lg font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export { MobileMenu };