import { DATA } from "@/data/resume";
import Socials from "./Socials";

export default function Hero() {
  return (
    <header className="space-y-6">
      {/* Name and Title */}
      <div className="space-y-2">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
          {DATA.name}
        </h1>
        <p className="text-xl text-blue-600 font-semibold tracking-wide">
          Software Engineer
        </p>
      </div>

      {/* Summary Narrative */}
      <div className="max-w-3xl">
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal whitespace-pre-line">
          {DATA.summary}
        </p>
      </div>

      {/* Actions: Resume & Socials */}
      <div className="flex flex-wrap items-center gap-6 pt-2">
        <a
          href={DATA.contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-blue-600 transition-all hover:scale-120 duration-500"
        >
          View Full Resume
        </a>

        {/* Simplified Socials: 
          On desktop (md+), they sit next to the resume.
          On mobile, we can let them wrap or stack.
        */}
        <div className="flex items-center">
          <Socials />
        </div>
      </div>
    </header>
  );
}