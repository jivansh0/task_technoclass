'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Navigation links
const navLinks = [
  { name: 'Home', href: '#', isHome: true },
  { name: 'Technodisplay', href: '#' },
  { name: 'Technocamera', href: '#' },
  { name: 'TechnoSpeaker', href: '#' },
  { name: 'TechnoBoard', href: '#' },
  { name: 'TechnoLight', href: '#' },
  { name: 'TechnoDesk', href: '#' },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="w-24 flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          {/* Desktop nav links (shows on xl and up) */}
          <div className="hidden xl:flex items-center justify-center flex-1">
            <ul className="flex flex-wrap gap-x-4 items-end">
              {navLinks.map((link) => (
                <li key={link.name} className={link.isHome ? 'relative flex items-center' : ''}>
                  <Link href={link.href} className={link.isHome ? 'font-bold text-black' : 'text-black'}>{link.name}</Link>
                  {link.isHome && (
                    <span className="w-1.5 h-1.5 bg-black rounded-full block absolute left-1/2 -translate-x-1/2" style={{ bottom: -10 }} />
                  )}
                </li>
              ))}
            </ul>
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 ml-8">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {/* Hamburger menu for mobile and iPad Pro (shows below xl) */}
          <div className="xl:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2"
            >
              {!showMenu ? (
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu (shows when hamburger is clicked) */}
      {showMenu && (
        <div className="xl:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={link.isHome ? 'font-bold block text-black' : 'block text-black'}>
                {link.name}
              </Link>
            ))}
            <button className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
