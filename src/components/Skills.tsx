import { DATA } from "@/data/resume";

export default function Skills() {
  return (
    <section className="w-full max-w-2xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {DATA.skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1.5 bg-slate-100 text-slate-800 text-sm font-medium rounded-md border border-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}