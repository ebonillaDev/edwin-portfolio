import { DATA } from "@/data/resume";
import GlassContainer from "./GlassContainer";

export default function Education() {
  return (
    <section className="mt-12 mb-20">
      <h2 className="text-xl font-semibold text-slate-900 mb-8 dark:text-slate-100 transition-colors duration-500">
        Education
      </h2>
      <div className="flex gap-4 items-start group">
        {/* Desktop Logo */}
        <GlassContainer className="hidden md:flex w-14 h-14">
          <img
            src={`/icons/${DATA.education.logo}.png`}
            alt={`${DATA.education.school} logo`}
            className="w-full h-full object-contain brightness-110 contrast-125 dark:brightness-150 dark:saturate-150 scale-135"
          />
        </GlassContainer>

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
            <div className="flex items-center gap-3">
              {/* Mobile Logo */}
              <GlassContainer className="md:hidden w-10 h-10 p-1.5">
                <img
                  src={`/icons/${DATA.education.logo}.png`}
                  alt=""
                  className="w-full h-full object-contain brightness-110 contrast-125 dark:brightness-150 dark:saturate-150 scale-170"
                />
              </GlassContainer>

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