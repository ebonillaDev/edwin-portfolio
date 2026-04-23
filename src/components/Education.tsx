// src/components/Education.tsx
import { DATA } from "@/data/resume";

export default function Education() {
  return (
    <section className="mt-12 mb-20">
      <h2 className="text-xl font-semibold text-slate-900 mb-8">Education</h2>
      <div className="flex gap-4 items-start group"> {/* Added 'group' for the hover effect */}
        {/* Desktop Logo */}
        <div className="hidden md:block mt-1 flex-shrink-0">
          <img
            src={`/icons/${DATA.education.logo}.png`}
            alt={`${DATA.education.school} logo`}
            className="w-16 h-10 object-contain opacity-80 transition-all duration-500 ease-in-out transform group-hover:scale-120 group-hover:opacity-100"
          />
        </div>

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
            <div className="flex items-center gap-3">
              {/* Mobile Logo */}
              <img
                src={`/icons/${DATA.education.logo}.png`}
                alt=""
                className="w-8 h-8 md:hidden opacity-80"
              />
              <h3 className="text-lg font-bold text-slate-900">
                {DATA.education.school}
              </h3>
            </div>
            <p className="text-sm text-slate-500">{DATA.education.location}</p>
          </div>
          <p className="text-sm font-medium text-blue-600">
            {DATA.education.degree}
          </p>
        </div>
      </div>
    </section>
  );
}