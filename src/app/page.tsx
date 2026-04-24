import { DATA } from "@/data/resume";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechMarquee from "@/components/TechMarquee";
import Sidebar from "@/components/Sidebar";
import Socials from "@/components/Socials";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500">
      <div className="max-w-4xl w-full space-y-20 mt-2 md:mt-2">
        
        <Hero />

        <Sidebar />

        <section className="space-y-16">
          <TechMarquee />
          <Experience />
          <Education />
        </section>

      </div>

      <footer className="w-full max-w-4xl pt-16 pb-12 border-t border-slate-100 flex flex-col items-center gap-8 mt-20">
        {/* Mobile-only Contact: xl matches Sidebar toggle */}
        <div className="flex flex-col items-center gap-4 xl:hidden">
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase dark:text-slate-100 transition-colors duration-500">
            Get in Touch
          </span>
          <Socials />
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-100 transition-colors duration-500 text-center tracking-widest uppercase">
          © {new Date().getFullYear()} {DATA.name}
        </p>
      </footer>
      <ThemeToggle />
    </main>
  );
}