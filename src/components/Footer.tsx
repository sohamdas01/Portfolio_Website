import React from 'react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-900 py-8 bg-neutral-950/40 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
        <p>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p>
          Built with Next.js 14, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
