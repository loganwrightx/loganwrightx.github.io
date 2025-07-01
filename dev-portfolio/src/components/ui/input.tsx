import React, { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`bg-[#1e1e1e] border border-[#3a3a3c] rounded-md px-3 py-2 text-white placeholder:text-[#7a7a7a] focus:outline-none focus:ring-2 focus:ring-[#ffd60a] ${props.className ?? ""}`}
    />
  );
}
