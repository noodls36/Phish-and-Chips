import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  tone?: "primary" | "secondary" | "ghost" | "danger";
};

export function Button({ children, tone = "primary", className = "", ...props }: ButtonProps) {
  const tones = {
    primary: "bg-signal text-white hover:bg-teal-700",
    secondary: "bg-agency text-white hover:bg-slate-800",
    ghost: "border border-slate-300 bg-white text-ink hover:bg-slate-50",
    danger: "bg-caution text-white hover:bg-amber-700",
  };

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
