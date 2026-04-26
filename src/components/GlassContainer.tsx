"use client";

import { ReactNode } from "react";

interface GlassContainerProps {
  children: ReactNode;
  className?: string; // For custom sizes (w-20, w-14, etc.)
  href?: string;      // To make the logo clickable later if desired
}

export default function GlassContainer({ children, className = "", href }: GlassContainerProps) {
  const ContainerTag = href ? 'a' : 'div';
  
  return (
    <ContainerTag
      href={href}
      className={`
        flex items-center justify-center 
        bg-white/15 dark:bg-white/10 
        backdrop-blur-md 
        border border-white/30 dark:border-slate-700 
        rounded-lg p-2 shadow-sm 
        transition-all duration-500 
        group-hover:border-blue-400 group-hover:bg-white/30 
        overflow-hidden flex-shrink-0
        ${className}
      `}
    >
      {children}
    </ContainerTag>
  );
}