"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

export default function ThemeToggle() {
  // Use resolvedTheme instead of theme for the icon logic
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xl hover:scale-110 transition-all z-50 border border-slate-200 dark:border-slate-700"
      aria-label="Toggle Theme"
    >
      {/* Check resolvedTheme so the icon matches what the user actually sees */}
      {resolvedTheme === "dark" ? (
        <Icons.sun className="w-5 h-5" />
      ) : (
        <Icons.moon className="w-5 h-5" />
      )}
    </button>
  );
}