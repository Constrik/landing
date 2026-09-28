import { PRODUCTS } from "@/lib/products";
import { PROD_TWEAKS } from "@/lib/tweaks";

export function Products() {
  return (
    <section id="productos" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">
            Catálogo
          </p>
          <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-4xl tracking-tight">
            Siete productos, una sola plataforma
          </h2>
          <p className="mt-4 text-[15px] text-slate-600 max-w-xl leading-relaxed">
            <strong className="font-semibold text-slate-900">
              Constrik complementa tu flujo de trabajo con Presto.
            </strong>{" "}
            Añade solo la herramienta que necesites —trabaja sobre tu mismo
            BC3— o contrata la plataforma completa. Los siete productos
            comparten BC3 y modelo, así que se conectan entre sí.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <a
                href={`/${p.slug}`}
                className="group block h-full bg-white border border-slate-200 rounded-xl p-6 transition hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 mb-3">
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
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#1A1A2E] group-hover:underline underline-offset-4"
                >
                  Saber más
                  <span>›</span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={PROD_TWEAKS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full bg-[#1A1A2E] border border-[#1A1A2E] rounded-xl p-6 transition hover:shadow-md hover:-translate-y-0.5"
            >
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#00CED1] mb-3">
                Plataforma completa
              </p>
              <h3 className="text-[17px] font-semibold text-white leading-snug">
                Los siete, sobre tu mismo BC3
              </h3>
              <p className="mt-2 text-[13.5px] text-slate-300 leading-relaxed">
                Del presupuesto recibido a la propuesta al cliente, en una sola
                herramienta.
              </p>
              <span
                aria-hidden
                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white group-hover:underline underline-offset-4"
              >
                Pedir una demo
                <span>›</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
