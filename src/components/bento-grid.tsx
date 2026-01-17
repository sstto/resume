"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { BentoCard } from "@/components/ui/bento-card";
import { resumeData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Heart, 
  Github, 
  ExternalLink,
  Download,
  Mail,
  MapPin,
  Linkedin
} from "lucide-react";

export default function BentoGrid() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `Resume_${resumeData.name.replace(/\s+/g, '_')}`,
  });

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 md:px-8">
      <div 
        ref={contentRef} 
        className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto"
      >
        <BentoCard className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 border-blue-100 dark:border-zinc-700">
          <div className="flex flex-col justify-center h-full space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white mb-2">
                {resumeData.name}
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                {resumeData.nameEn}
              </p>
              <p className="text-xl md:text-2xl font-semibold text-zinc-600 dark:text-zinc-300">
                {resumeData.title}
              </p>
            </div>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {resumeData.about}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => window.location.href = `mailto:hello@example.com`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-white/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300">
                <MapPin className="w-4 h-4" />
                <span>Seoul, KR</span>
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard 
          title="Skills" 
          icon={<Code className="w-4 h-4" />}
          className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {resumeData.skills.map((skill, i) => (
              <div 
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-md hover:-translate-y-0.5 p-4"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </span>
                    <Code className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all",
                          skill.level === "Advanced" ? "w-full bg-gradient-to-r from-blue-500 to-indigo-500" : 
                          skill.level === "Intermediate" ? "w-2/3 bg-gradient-to-r from-blue-400 to-blue-500" :
                          "w-1/3 bg-gradient-to-r from-zinc-400 to-zinc-500"
                        )}
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all pointer-events-none" />
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard 
          title="Education" 
          icon={<GraduationCap className="w-4 h-4" />}
          className="md:col-span-1 md:row-span-1"
        >
          {resumeData.education.map((edu, i) => (
            <div key={i} className="space-y-1">
              <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                {edu.school}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {edu.degree}
              </p>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
                {edu.period}
              </p>
            </div>
          ))}
        </BentoCard>

        <BentoCard 
          title="Interests" 
          icon={<Heart className="w-4 h-4" />}
          className="md:col-span-1 md:row-span-1"
        >
          <div className="flex flex-wrap gap-2">
            {resumeData.hobbies.map((hobby, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
              >
                {hobby}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard 
          title="Experience" 
          icon={<Briefcase className="w-4 h-4" />}
          className="md:col-span-2 md:row-span-2"
        >
          <div className="space-y-6">
            {resumeData.experiences.map((exp, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-700">
                <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                    {exp.company}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start leading-relaxed">
                        <span className="mr-2 mt-2 h-1 w-1 min-w-[4px] rounded-full bg-zinc-400 dark:bg-zinc-600" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard 
          title="Projects" 
          icon={<Code className="w-4 h-4" />}
          className="md:col-span-2 md:row-span-2"
        >
          <div className="space-y-4">
            {resumeData.projects.map((project, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <Github className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <ExternalLink className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-4 md:row-span-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 border-transparent text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 h-full py-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-1">
                Ready to collaborate?
              </h3>
              <p className="text-sm md:text-base text-blue-100 dark:text-blue-50">
                Let's build something amazing together
              </p>
            </div>
            <button 
              onClick={() => handlePrint()}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-blue-600 dark:text-indigo-600 font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}
