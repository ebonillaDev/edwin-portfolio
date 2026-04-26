"use client";

import { DATA } from "@/data/resume";

export default function TechMarquee() {
  return (
    <div className="w-full md:py-6 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      <div className="relative flex">
        <div className="flex w-max animate-scroll">
          {/* Reusable list to keep the code DRY */}
          {[1, 2].map((setIndex) => (
            <div key={`set-${setIndex}`} className="flex gap-16 items-center pr-16">
              {DATA.skills.map((skill, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center gap-4 group cursor-default">
                  <img
                    src={`/icons/tech/${skill.slug}.svg`}
                    alt=""
                    className={`
                      w-10 h-10 object-contain opacity-80 transition-all duration-500 transform group-hover:scale-120 group-hover:opacity-100
                      ${skill.slug === "githubcopilot" ? "dark:invert" : ""}
                      ${skill.slug === "mysql" ? "dark:brightness-200 dark:contrast-125" : ""}
                      ${skill.slug === "jenkins" ? "dark:saturate-150 scale-115 group-hover:scale-135" : ""}
                      ${skill.slug === "html" ? "dark:contrast-110 scale-115 group-hover:scale-135" : ""}
                    `}
                  />
                  <span className="text-slate-500 text-base font-bold uppercase tracking-widest group-hover:text-slate-900 transition-colors dark:text-slate-100 dark:group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Professional Edge Fades */}
        <div className="print:hidden pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent z-10" />
        <div className="print:hidden pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent z-10" />
      </div>
    </div>
  );
}