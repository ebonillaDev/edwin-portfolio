// src/components/Experience.tsx
import { DATA } from "@/data/resume";

export default function Experience() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-slate-900 mb-8">Experience</h2>
      <div className="space-y-12">
        {DATA.experience.map((job) => (
          <div key={job.company} className="flex gap-4 items-start">
            {/* Desktop Logo */}
            {job.logo && (
              <div
                className="w-10 h-10 flex-shrink-0 mt-1 text-slate-400 hidden md:block opacity-80 hover:opacity-100 transition-opacity duration-300"
                dangerouslySetInnerHTML={{ __html: job.logo }}
              />
            )}

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-3">
                  {/* Mobile Logo */}
                  {job.logo && (
                    <div
                      className="w-6 h-6 flex-shrink-0 text-slate-400 md:hidden opacity-80"
                      dangerouslySetInnerHTML={{ __html: job.logo }}
                    />
                  )}
                  <h3 className="text-lg font-bold text-slate-900">
                    {job.company}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 tabular-nums">
                  {job.period}
                </p>
              </div>

              <p className="text-sm font-semibold text-blue-600 mb-4">
                {job.role}
              </p>

              <ul className="text-sm text-slate-600 space-y-2 list-disc list-outside pl-4">
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