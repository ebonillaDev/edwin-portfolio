import { DATA } from "@/data/resume";
import Experience from "@/components/Experience"; 
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-slate-900">
      <div className="max-w-2xl w-full space-y-12"> {/* Increased spacing */}
        <header className="space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tight text-black">{DATA.name}</h1>
          <p className="text-xl text-slate-600 font-medium">Software Engineer</p>
        </header>

        <section>
          <Experience />
          <Skills />
          <Education />
        </section>

      </div>
    </main>
  );
}