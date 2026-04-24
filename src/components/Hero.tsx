import { DATA } from "@/data/resume";
import Socials from "./Socials";

export default function Hero() {
  return (
    <header className="space-y-2">
      {/* Name and Title */}
      <div className="space-y-2">
        {/* Changed from text-5xl to text-4xl for mobile; scales at md (768px) */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black">
          {DATA.name}
        </h1>
        <p className="text-lg md:text-xl text-blue-600 font-semibold tracking-wide">
          Software Engineer
        </p>
      </div>

      {/* Summary Narrative */}
      <div className="max-w-3xl">
        {/* Changed from text-lg to text-base for mobile; scales at md */}
        <p className="text-base md:text-xl text-slate-600 leading-relaxed font-normal whitespace-pre-line">
          {DATA.summary}
        </p>
      </div>

      {/* Actions: Resume & Socials */}
      <div className="flex flex-wrap items-center gap-6 pt-4">
        <a
          href={DATA.contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-blue-600 transition-all hover:scale-110 duration-500"
        >
          View Full Resume
        </a>

        <div className="flex items-center">
          <Socials />
        </div>
      </div>
    </header>
  );
}