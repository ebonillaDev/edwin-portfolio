import { DATA } from "@/data/resume";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-slate-900">
      <div className="max-w-2xl w-full space-y-12">

        {/* HERO / BIO SECTION */}
        <header className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight text-black">{DATA.name}</h1>
            <p className="text-xl text-slate-600 font-medium italic">Software Engineer</p>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-prose">
            {DATA.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            {/* The Resume Link - Styled for visibility */}
            <a
              href={DATA.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-blue-600 transition-all"
            >
              View Full Resume
            </a>

            {/* Desktop Socials: hidden on mobile */}
            <div className="hidden md:block">
              <Socials />
            </div>
          </div>

          {/* Mobile Socials: visible on mobile only */}
          <div className="md:hidden pt-2">
            <Socials />
          </div>
        </header>

        {/* CONTENT SECTIONS */}
        <section className="space-y-4">
          <Experience />
          <Skills />
          <Education />
        </section>

      </div>

      {/* FOOTER SECTION - Sticky on Desktop */}
      <footer className="w-full max-w-2xl mt-24 pt-8 pb-8 border-t border-slate-100 
                 flex flex-col md:flex-row justify-between items-center gap-4
                 md:sticky md:bottom-0 md:bg-white/80 md:backdrop-blur-md">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {DATA.name}
        </p>

        <div className="hidden md:block">
          <Socials />
        </div>
      </footer>
    </main>
  );
}