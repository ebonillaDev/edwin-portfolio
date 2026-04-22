import { DATA } from "@/data/resume";

export default function Experience() {
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold mb-6 text-slate-900">Experience</h2>
      <div className="space-y-10 border-l border-slate-100 ml-1 pl-6">
        {DATA.experience.map((job, index) => (
          <div key={index} className="flex flex-col relative">
            {/* Header: Company and Dates */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h3 className="font-bold text-slate-900 text-lg">
                {job.company}
              </h3>
              <span className="text-sm text-slate-500 tabular-nums">
                {job.period}
              </span>
            </div>
            
            {/* Role Title */}
            <div className="text-sm font-semibold text-blue-600 mt-1">
              {job.role}
            </div>
            
            {/* Bullet Points */}
            <ul className="mt-4 space-y-3">
              {job.points.map((point, i) => (
                <li key={i} className="text-sm text-slate-600 leading-relaxed flex gap-2">
                  <span className="text-slate-300 mt-1.5 h-1 w-1 rounded-full bg-slate-300 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}