import React, { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`
        max-w-md
        mx-auto
        bg-gradient-to-br from-[#2a2a2e] to-[#1f1f22]
        rounded-3xl
        shadow-lg shadow-black/50
        border border-[#444448]
        hover:shadow-xl hover:shadow-black/70
        transition-shadow duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-7 space-y-4 text-[#f5f5f7] ${className}`}>
      {children}
    </div>
  );
}
