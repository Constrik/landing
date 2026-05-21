import type { ReactNode } from "react";

type CtaButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
};

const BASE =
  "inline-flex items-center justify-center font-medium rounded-lg transition-colors whitespace-nowrap";

const SIZE_CLS: Record<NonNullable<CtaButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const VARIANT_CLS: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-800",
  accent: "bg-blue-600 text-white hover:bg-blue-700",
  ghost: "text-slate-700 hover:text-slate-900",
  outline: "border border-slate-300 text-slate-800 hover:border-slate-400 bg-white",
};

export function CtaButton({
  children,
  href,
  variant = "primary",
  size = "md",
  target,
  rel,
}: CtaButtonProps) {
  const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;
  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      className={`${BASE} ${SIZE_CLS[size]} ${VARIANT_CLS[variant]}`}
    >
      {children}
    </a>
  );
}
