import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { projectsData } from '@/lib/data';
import FadeIn from './FadeIn';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const isLast = idx === projectsData.length - 1;
            return (
              <FadeIn
                key={project.title}
                delay={idx * 100}
                duration={650}
                className={isLast ? 'md:col-span-2 md:max-w-3xl md:mx-auto md:w-full' : ''}
              >
                <div className="group relative bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between hover:border-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all duration-350 shadow-xl shadow-black/40">
                  {/* Subtle hover gradient glow */}
                  <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-violet-500/0 blur-[60px] pointer-events-none group-hover:bg-violet-500/5 transition-all duration-350" />
                  
                  <div>
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white mb-3.5 group-hover:text-violet-400 transition-colors duration-200 leading-snug">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded bg-neutral-950/80 border border-neutral-800 text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold px-4.5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-205"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold px-4.5 py-2.5 rounded-lg hover:-translate-y-0.5 transition-all duration-205"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold px-4.5 py-2.5 rounded-lg hover:-translate-y-0.5 transition-all duration-205"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      Video Demo
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
