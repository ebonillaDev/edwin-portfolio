import { DATA } from "@/data/resume";

export default function Education() {
  return (
    <section className="w-full max-w-2xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-slate-900">Education</h2>
      <div className="border-l-2 border-slate-200 pl-8">
        <div className="flex flex-col gap-1">
          <span className="text-md text-slate-700 font-medium">
            {DATA.education.degree}
          </span>
          <span className="font-bold text-slate-900 text-lg">
            {DATA.education.school}
          </span>
          <span className="text-xs text-slate-400 font-normal">
            {DATA.education.location}
          </span>
        </div>
      </div>
    </section>
  );
}