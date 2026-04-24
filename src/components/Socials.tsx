import { DATA } from "@/data/resume";
import { Icons } from "./icons"; // Import our new centralized utility

export default function Socials() {
  return (
    <div className="flex gap-6 items-center">
      {DATA.contact.socials.map((social) => {
        // Look up the component from our utility
        const Icon = Icons[social.icon as keyof typeof Icons];
        
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 hover:scale-120 transition-all duration-500"
            aria-label={social.name}
          >
            {/* Render the Icon component with standard sizing */}
            {Icon ? <Icon className="w-5 h-5" /> : social.name}
          </a>
        );
      })}
    </div>
  );
}