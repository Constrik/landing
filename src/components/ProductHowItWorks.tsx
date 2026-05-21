import type { Step } from "@/lib/products";

export function ProductHowItWorks({ steps }: { steps: Step[] }) {
  return (
    <section id="como-funciona" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.15em] text-slate-500 mb-3">
            Cómo funciona
          </p>
          <h2 className="font-logo text-[#1A1A2E] text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight">
            De los archivos a la decisión, en pasos claros
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3">
              <span className="font-mono text-[12px] text-slate-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15.5px] font-semibold text-[#1A1A2E] leading-snug">
                {s.title}
              </h3>
              <p className="text-[13.5px] text-slate-600 leading-relaxed">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
