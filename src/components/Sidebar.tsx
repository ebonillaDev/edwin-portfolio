import { DATA } from "@/data/resume";
import { Icons } from "./icons";

export default function Sidebar() {
    return (
        <aside className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-8 z-50">
            {/* Availability Ping */}
            <div className="group relative flex items-center justify-center">
                <div className="absolute w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-75" />
                <div className="relative w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>

            <div className="w-[1px] h-12 bg-slate-200" />

            {/* Standardized Social Icons */}
            <div className="flex flex-col gap-6">
                {DATA.contact.socials.map((social) => {
                    const Icon = Icons[social.icon as keyof typeof Icons];
                    return (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            className="relative group/icon text-slate-400 dark:text-slate-100 transition-colors hover:text-blue-600 transition-all duration-300"
                        >
                            {/* Halo Effect */}
                            <div className="absolute -inset-2 bg-blue-50 rounded-full scale-0 group-hover/icon:scale-100 transition-transform duration-300 -z-10" />

                            <Icon className="w-5 h-5 transform group-hover/icon:scale-110 transition-transform" />

                            {/* Label that appears on hover */}
                            <span className="absolute left-10 opacity-0 group-hover/icon:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-1 rounded pointer-events-none shadow-xl">
                                {social.name}
                            </span>
                        </a>
                    );
                })}
            </div>

            <div className="w-[1px] h-12 bg-slate-200" />

            {/* Location */}
            <div className="flex flex-col items-center gap-3">
                <Icons.mapPin className="w-5 h-5 text-slate-400 dark:text-slate-100 transition-colors duration-500" />
                <span
                    className="text-[10px] font-bold text-slate-400 dark:text-slate-100 transition-colors duration-500 tracking-[0.3em] uppercase"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    {DATA.location}
                </span>
            </div>
        </aside>
    );
}