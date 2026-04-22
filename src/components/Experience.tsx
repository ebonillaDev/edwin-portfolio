import { DATA } from "@/data/resume";

export default function Experience() {
  return (
    <section className="w-full max-w-2xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8 text-slate-900">Experience</h2>
      <div className="relative border-l-2 border-slate-200 pl-8">
        {DATA.experience.map((exp, idx) => (
          <div
            key={exp.company}
            className="relative pb-12 last:pb-0 flex flex-row items-start"
          >
            {/* Content column only - Marker column removed */}
            <div className="flex-1 flex flex-col gap-y-1">
              <span className="text-md text-slate-700 font-medium">{exp.role}</span>
              <span className="font-bold text-slate-900 text-lg">{exp.company}</span>
              <span className="text-xs text-slate-400 font-normal">{exp.period}</span>
              <ul className="mt-3 space-y-1 pl-0">
                {exp.points.map((point, pidx) => (
                  <li key={pidx} className="text-slate-700 text-sm pl-0">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}