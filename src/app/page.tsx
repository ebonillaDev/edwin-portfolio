import { DATA } from "@/data/resume";
import Experience from "@/components/Experience"; 
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-slate-900">
      <div className="max-w-2xl w-full space-y-12"> {/* Increased spacing */}
        <header className="space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tight text-black">{DATA.name}</h1>
          <p className="text-xl text-slate-600 font-medium">Software Engineer</p>
        </header>

        <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{DATA.name}</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          {DATA.summary}
        </p>
        
        {/* Mobile Socials: visible on mobile, hidden on tablet/desktop */}
        <div className="mt-6 md:hidden">
          <Socials />
        </div>
      </section>

        <section>
          <Experience />
          <Skills />
          <Education />
        </section>

      </div>
      {/* FOOTER SECTION */}
      <footer className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {DATA.name}
        </p>
        
        {/* Desktop Socials: hidden on mobile, visible on tablet/desktop */}
        <div className="hidden md:block">
          <Socials />
        </div>
      </footer>
    </main>
  );
}