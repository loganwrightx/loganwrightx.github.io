import React, { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`bg-[#ffd60a] text-black font-semibold rounded-md px-4 py-2 hover:bg-[#e6b800] transition ${props.className ?? ""}`}
    />
  );
}
