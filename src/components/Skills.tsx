import React from 'react';
import { Brain, Code, Server, Database, Wrench } from 'lucide-react';
import { skillsData } from '@/lib/data';
import FadeIn from './FadeIn';

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "GenAI & LLM Engineering":
        return <Brain className="w-5.5 h-5.5 text-violet-400" />;
      case "Frontend & Web":
        return <Code className="w-5.5 h-5.5 text-violet-400" />;
      case "Backend & APIs":
        return <Server className="w-5.5 h-5.5 text-violet-400" />;
      case "Databases & Cloud":
        return <Database className="w-5.5 h-5.5 text-violet-400" />;
      case "Tools & DevOps":
        return <Wrench className="w-5.5 h-5.5 text-violet-400" />;
      default:
        return <Code className="w-5.5 h-5.5 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-neutral-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">My Skills</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryData, idx) => (
            <FadeIn key={categoryData.category} delay={idx * 100} duration={600}>
              <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 h-full hover:border-violet-500/20 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-350 flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-6">
                  {getCategoryIcon(categoryData.category)}
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {categoryData.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {categoryData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-950/60 border border-neutral-850 text-neutral-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/5 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-violet-500/10 cursor-default transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
