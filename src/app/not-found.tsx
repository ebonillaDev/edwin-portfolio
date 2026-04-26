import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020617] px-6 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#0f172a_0%,#020617_100%)]" />
      
      <div className="relative flex flex-col items-center">

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mx-auto max-w-xs text-slate-400">
            The resource you're looking for has moved or no longer exists.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-3 font-medium text-white border border-slate-800 transition-all hover:border-sky-500/50"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-sky-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            
            <span className="relative z-10 flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" 
                className="transition-transform group-hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Portfolio
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}