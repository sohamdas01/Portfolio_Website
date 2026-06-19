import React from 'react';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';
import { personalInfo, education } from '@/lib/data';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Developer Description */}
          <div className="md:col-span-3">
            <FadeIn delay={100}>
              <h3 className="text-xl font-bold text-white mb-4">
                Full-Stack & GenAI Engineer based in Kolkata, India
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6 text-base sm:text-lg">
                {personalInfo.summary}
              </p>
            </FadeIn>
          </div>

          {/* Education details Card */}
          <div className="md:col-span-2">
            <FadeIn delay={200}>
              <div className="relative group bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-violet-500/30 transition-all duration-350 shadow-xl shadow-black/40">
                {/* Micro-glow */}
                <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-violet-500/5 blur-[40px] pointer-events-none group-hover:bg-violet-500/10 transition-all duration-300" />
                
                <GraduationCap className="w-8 h-8 text-violet-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                  {education.degree}
                </h3>
                <p className="text-sm text-neutral-400 mb-5 leading-normal">
                  {education.institution}
                </p>

                <div className="flex flex-col gap-3.5 text-sm border-t border-neutral-800 pt-5">
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Award className="w-4 h-4 text-violet-400" />
                    <span>
                      CGPA: <strong className="text-white font-semibold">{education.cgpa}</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-neutral-300 mt-1">
                    <BookOpen className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="block font-semibold text-neutral-200 mb-2">
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {education.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs px-2.5 py-1 rounded bg-neutral-950/80 border border-neutral-800 text-neutral-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
