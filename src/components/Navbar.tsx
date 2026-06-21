'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="text-2xl font-bold tracking-tight text-white flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 shrink-0 shadow-md shadow-violet-500/5">
            <Image
              src="/avatar.jpg"
              alt={personalInfo.name}
              height={44}
              width={44}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:to-indigo-300 transition-all">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-indigo-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Soham_Das_Resume.pdf"
            download
            className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg shadow-violet-500/10 hover:shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="/Soham_Das_Resume.pdf"
            download
            className="flex items-center justify-center p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
            aria-label="Download Resume"
          >
            <Download className="w-4.5 h-4.5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible py-6' : 'opacity-0 -translate-y-4 invisible h-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
