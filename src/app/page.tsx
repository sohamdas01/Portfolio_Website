import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col font-sans selection:bg-violet-500/30 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Site Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-900 to-transparent my-4" />

        {/* Skills Section */}
        <Skills />

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-900 to-transparent my-4" />

        {/* Projects Section */}
        <Projects />

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-900 to-transparent my-4" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
