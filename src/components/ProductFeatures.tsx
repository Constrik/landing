import type { Feature } from "@/lib/products";

export function ProductFeatures({ features }: { features: Feature[] }) {
  return (
    <section id="caracteristicas" className="bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.15em] text-slate-500 mb-3">
            Características
          </p>
          <h2 className="font-logo text-[#1A1A2E] text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight">
            Lo que hace por tu equipo
          </h2>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-2"
            >
              <h3 className="text-[15.5px] font-semibold text-[#1A1A2E] leading-snug">
                {f.title}
              </h3>
              <p className="text-[13.5px] text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
