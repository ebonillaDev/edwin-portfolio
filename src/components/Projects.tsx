"use client";

import { DATA } from "@/data/resume";
import GlassContainer from "./GlassContainer";
import { Icons } from "./icons";

export default function Projects() {
    return (
        <section className="mt-16">
            <h2 className="text-xl font-semibold text-slate-900 mb-8 dark:text-slate-100 transition-colors duration-500">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DATA.projects.map((project) => (
                    <div key={project.title} className="group">
                    <GlassContainer className="flex flex-col h-full p-0 overflow-hidden group">
                        {/* Project Image/Header Area */}
                        <div className="relative h-full w-full overflow-hidden border-b border-slate-200/50 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-900">
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className={`w-full h-60 object-cover transition-all duration-700 
                                    ${project.status === "In Progress" ? "blur-md scale-110 opacity-50" : "group-hover:scale-105"}`}
                            />
                            
                            {/* Centered In Progress Overlay */}
                            {project.status === "In Progress" ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 dark:bg-black/20 backdrop-blur-[2px]">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="px-3 py-1.5 bg-blue-600 text-white text-[12px] font-bold uppercase tracking-widest rounded-full shadow-xl shadow-blue-500/20">
                                            {project.status}
                                        </span>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-tighter">
                                            Dashboard Coming Soon
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Standard badge for completed projects (if needed)
                                project.status && (
                                    <div className="absolute top-3 right-3">
                                        <span className="px-2 py-1 bg-slate-900/80 text-white text-[10px] font-bold uppercase tracking-wider rounded-md backdrop-blur-sm">
                                            {project.status}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Project Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    {/* GitHub Link: Only show if link exists and isn't a placeholder */}
                                    {project.githubLink && project.githubLink !== "#" && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-blue-600 transition-colors"
                                        >
                                            <Icons.github className="w-5 h-5" />
                                        </a>
                                    )}

                                    {/* Website Link: Only show if link exists and isn't a placeholder */}
                                    {project.websiteLink && project.websiteLink !== "#" && (
                                        <a
                                            href={project.websiteLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-blue-600 transition-colors"
                                        >
                                            <Icons.externalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-base text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tech Tags - Matching Experience.tsx style */}
                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[12px] font-medium rounded-md border border-slate-200/50 dark:bg-slate-800/50 dark:text-slate-100 dark:border-slate-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </GlassContainer>
                    </div>
                ))}
            </div>
        </section>
    );
}