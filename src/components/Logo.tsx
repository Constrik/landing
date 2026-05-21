type LogoProps = {
  tone?: "navy" | "white";
  size?: "sm" | "md" | "lg";
};

const SIZE_CLS: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export function Logo({ tone = "navy", size = "md" }: LogoProps) {
  const colorCls = tone === "white" ? "text-white" : "text-[#1A1A2E]";
  return (
    <span
      className={`font-logo font-bold tracking-tight leading-none ${SIZE_CLS[size]} ${colorCls}`}
    >
      Constr<span className="text-[#00CED1]">ik</span>
    </span>
  );
}
