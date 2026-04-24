// src/components/Education.tsx
import { DATA } from "@/data/resume";

export default function Education() {
  return (
    <section className="mt-12 mb-20">
      <h2 className="text-xl font-semibold text-slate-900 mb-8 dark:text-slate-100 transition-colors duration-500">
        Education
      </h2>
      <div className="flex gap-4 items-start group">
        {/* Desktop Logo Container */}
        <div className="hidden md:flex items-center justify-center w-20 h-14 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-slate-600 rounded-lg p-2 shadow-sm transition-all duration-500 group-hover:border-blue-400 group-hover:bg-white/30">
          <img
            src={`/icons/${DATA.education.logo}.png`}
            alt={`${DATA.education.school} logo`}
            className="w-full h-full object-contain brightness-110 contrast-125 dark:brightness-150 dark:saturate-150"
          />
        </div>

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
            <div className="flex items-center gap-3">
              {/* Mobile Logo Container */}
              <div className="md:hidden flex items-center justify-center w-14 h-10 bg-white/15 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-slate-700 rounded-md p-1.5 flex-shrink-0">
                <img
                  src={`/icons/${DATA.education.logo}.png`}
                  alt=""
                  className="w-full h-full object-contain brightness-110 contrast-125 dark:brightness-150"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-500">
                {DATA.education.school}
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500">
              {DATA.education.location}
            </p>
          </div>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors duration-500">
            {DATA.education.degree}
          </p>
        </div>
      </div>
    </section>
  );
}