import { PRODUCTS } from "@/lib/products";

export function Products() {
  return (
    <section id="productos" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-[12px] uppercase tracking-[0.15em] text-slate-500 mb-3">
            Catálogo
          </p>
          <h2 className="font-logo text-[#1A1A2E] text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight">
            Siete productos, una sola plataforma
          </h2>
          <p className="mt-4 text-[15px] text-slate-600 max-w-xl leading-relaxed">
            Cada constructora elige los módulos que necesita. Se conectan entre
            sí porque parten del mismo BC3 y del mismo modelo.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <a
                href={`/${p.slug}`}
                className="block h-full bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-400 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400 mb-3">
                  {p.category}
                </p>
                <h3 className="text-[17px] font-semibold text-[#1A1A2E] leading-snug">
                  {p.name}
                </h3>
                <p className="mt-2 text-[13.5px] text-slate-600 leading-relaxed">
                  {p.tagline}
                </p>
                <span
                  aria-hidden
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] text-slate-500"
                >
                  Saber más
                  <span>›</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
