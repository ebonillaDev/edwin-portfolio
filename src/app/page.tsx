import { DATA } from "@/data/resume";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Socials from "@/components/Socials";
import TechMarquee from "@/components/TechMarquee";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-slate-900">
      <div className="max-w-4xl w-full space-y-12">

        {/* HERO / BIO SECTION */}
        <header className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight text-black">{DATA.name}</h1>
            <p className="text-xl text-slate-600 font-medium bold">Software Engineer</p>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal whitespace-pre-line">
              {DATA.summary}
            </p>
          </div>

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
        <Sidebar />
        <section className="space-y-4">
          <TechMarquee />
          <Experience />
          {/* <Skills /> */}
          <Education />
        </section>

      </div>

      <footer className="w-full max-w-4xl pt-16 pb-12 border-t border-slate-100 flex flex-col items-center gap-8 mt-20">

        {/* Mobile-only Contact Section: Only appears when Sidebar is hidden */}
        <div className="flex flex-col items-center gap-4 xl:hidden">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
            Get in Touch
          </span>
          <Socials />
        </div>

        <p className="text-xs text-slate-400 text-center tracking-widest uppercase">
          © {new Date().getFullYear()} {DATA.name}
        </p>
      </footer>
    </main>
  );
}