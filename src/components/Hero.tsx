'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

// Custom SVG Icon for LeetCode
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193a.039.039 0 0 0 .039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392a1.38 1.38 0 0 0 0-1.954l-2.359-2.359a1.38 1.38 0 0 0-1.955 0l-.303.303a1.128 1.128 0 0 1-1.618 0l-.303-.303a1.378 1.378 0 0 1 0-1.954l2.359-2.359c.54-.54 1.415-.54 1.955 0l2.396 2.392c2.21 2.207 5.814 2.239 8.063.074l.038-.038 4.277-4.193a5.938 5.938 0 0 0 1.271-1.818a5.83 5.83 0 0 0 .349-1.017a5.527 5.527 0 0 0 .062-2.362a5.35 5.35 0 0 0-.125-.513a5.266 5.266 0 0 0-1.209-2.104L16.85 6.226l-5.406-5.788A1.374 1.374 0 0 0 10.518 0Z" />
  </svg>
);

// Custom Representation for Hugging Face
const HuggingFaceIcon = () => (
  <span className="text-[22px] leading-none select-none grayscale hover:grayscale-0 transition-all duration-200">🤗</span>
);

const words = ["Full-Stack Developer", "GenAI Engineer", "RAG Systems Builder"];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 30 : 100;
    
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000); // Wait 2s at the end
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Decorative Grid and Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-indigo-600/20 blur-[130px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800 text-xs font-medium text-neutral-400 mb-6 hover:border-violet-500/30 transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open for Job and Internship Opportunities
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I am{" "}
          <span className="block mt-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Subtitle / Typing Animation */}
        <div className="text-xl sm:text-3xl font-bold text-neutral-300 min-h-[40px] mb-6 flex items-center justify-center">
          <span>I am a&nbsp;</span>
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent typing-cursor pr-1">
            {currentText}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full-Stack & GenAI Developer experienced in building production-ready AI systems using RAG, LangChain, and vector databases. Based in {personalInfo.location}.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-violet-500/10 hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white font-semibold px-8 py-4 rounded-full border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-4.5 h-4.5" />
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.huggingface}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-950 border border-neutral-900 text-neutral-400 hover:text-white hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 flex items-center justify-center"
            aria-label="Hugging Face"
          >
            <HuggingFaceIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
