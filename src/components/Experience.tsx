"use client";

import { DATA } from "@/data/resume";

export default function Experience() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-slate-900 mb-8 dark:text-slate-100 transition-colors duration-500">Experience</h2>
      <div className="space-y-12">
        {DATA.experience.map((job) => (
          <div key={job.company} className="flex gap-4 items-start group">
            {/* Desktop Logo */}
            {job.logo && (
              <div className="hidden md:block mt-1 flex-shrink-0">
                <img
                  src={`/icons/${job.logo}.svg`}
                  alt={`${job.company} logo`}
                  className="w-10 h-10 object-contain opacity-80 transition-all duration-500 ease-in-out transform group-hover:scale-120 group-hover:opacity-100"
                />
              </div>
            )}

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-3">
                  {/* Mobile Logo */}
                  {job.logo && (
                    <img
                      src={`/icons/${job.logo}.svg`}
                      alt=""
                      className="w-6 h-6 flex-shrink-0 md:hidden opacity-80"
                    />
                  )}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-500">
                    {job.company}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-100 transition-colors duration-500 tabular-nums">
                  {job.period}
                </p>
              </div>

              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {job.role}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[12px] font-medium rounded-md border border-slate-200/50
                    dark:bg-slate-800/50 dark:text-slate-100 dark:border dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="text-sm text-slate-600 dark:text-slate-100 transition-colors duration-500 space-y-2 list-disc list-outside pl-4">
                {job.points.map((point, index) => (
                  <li key={index} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}