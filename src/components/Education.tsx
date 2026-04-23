// src/components/Education.tsx
import { DATA } from "@/data/resume";

export default function Education() {
  return (
    <section className="mt-12 mb-20">
      <h2 className="text-xl font-semibold text-slate-900 mb-8">Education</h2>
      <div className="flex gap-4 items-start">
        {/* Academic Icon */}
        <div
          className="w-10 h-10 flex-shrink-0 mt-1 hidden md:block opacity-80 hover:opacity-100 transition-opacity duration-300"
          dangerouslySetInnerHTML={{ __html: DATA.education.logo }}
        />

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
            <div className="flex items-center gap-3">
              {/* Mobile Icon */}
              <div
                className="w-8 h-8 flex-shrink-0 md:hidden opacity-80"
                dangerouslySetInnerHTML={{ __html: DATA.education.logo }}
              />
              <h3 className="text-lg font-bold text-slate-900">
                {DATA.education.school}
              </h3>
            </div>
            <p className="text-sm text-slate-500">{DATA.education.location}</p>
          </div>
          <p className="text-sm font-medium text-slate-700 italic">
            {DATA.education.degree}
          </p>
        </div>
      </div>
    </section>
  );
}