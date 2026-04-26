"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xl z-50 border border-slate-200 dark:border-slate-700"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait" initial={false}>

          {/*Scale and Rotate*/}
          <motion.div
            key={resolvedTheme}
            initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {resolvedTheme === "dark" ? (
              <Icons.sun className="w-5 h-5" />
            ) : (
              <Icons.moon className="w-5 h-5" />
            )}
          </motion.div>

          {/*Spring*/}
          {/* <motion.div
            key={resolvedTheme}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {resolvedTheme === "dark" ? (
              <Icons.sun className="w-5 h-5" />
            ) : (
              <Icons.moon className="w-5 h-5" />
            )}
          </motion.div> */}
        </AnimatePresence>
      </div>
    </button>
  );
}