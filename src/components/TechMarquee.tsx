"use client";

import { DATA } from "@/data/resume";

export default function TechMarquee() {
    return (
        <div className="w-full py-6 overflow-hidden bg-white">
            <div className="relative flex overflow-hidden">
                {/* THE WRAPPER: 
          - We use 'w-max' so it expands to fit the content exactly.
          - We use 'flex' to put the two identical lists side-by-side.
        */}
                <div className="flex w-max animate-scroll">
                    {/* SET 1 */}
                    <div className="flex gap-16 items-center px-8">
                        {DATA.skills.map((skill, index) => (
                            <div key={`set1-${index}`} className="flex items-center gap-4 group cursor-default">
                                <img
                                    src={`/icons/tech/${skill.slug}.svg`}
                                    alt={`${skill.name} logo`}
                                    className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-120"
                                />
                                <span className="text-slate-500 text-base font-bold uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* SET 2 (Identical Copy) */}
                    <div className="flex gap-16 items-center px-8">
                        {DATA.skills.map((skill, index) => (
                            <div key={`set2-${index}`} className="flex items-center gap-4 group cursor-default">
                                <img
                                    src={`/icons/tech/${skill.slug}.svg`}
                                    alt={`${skill.name} logo`}
                                    className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-120"
                                />
                                <span className="text-slate-500 text-base font-bold uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Professional Edge Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            </div>
        </div>
    );
}