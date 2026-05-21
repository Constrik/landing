import { PRODUCTS } from "@/lib/products";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <Logo size="md" />
            <p className="mt-3 text-[12.5px] text-slate-500 leading-relaxed max-w-xs">
              Plataforma de IA para los departamentos de estudios de las
              constructoras.
            </p>
          </div>

          <div>
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-slate-400 mb-3">
              Productos · Estudios
            </p>
            <ul className="space-y-2 text-[13px] text-slate-600">
              {PRODUCTS.filter((p) => p.category === "Estudios").map((p) => (
                <li key={p.slug}>
                  <a href={`/${p.slug}`} className="hover:text-slate-900">
                    {p.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-slate-400 mb-3">
              BIM y obra
            </p>
            <ul className="space-y-2 text-[13px] text-slate-600">
              {PRODUCTS.filter(
                (p) => p.category === "BIM" || p.category === "Obra",
              ).map((p) => (
                <li key={p.slug}>
                  <a href={`/${p.slug}`} className="hover:text-slate-900">
                    {p.shortName}
                  </a>
                </li>
              ))}
              {PRODUCTS.filter((p) => p.category === "Conocimiento").map((p) => (
                <li key={p.slug}>
                  <a href={`/${p.slug}`} className="hover:text-slate-900">
                    {p.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-slate-400 mb-3">
              Contacto
            </p>
            <ul className="space-y-2 text-[13px] text-slate-600">
              <li>
                <a
                  href="mailto:info@constrik.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-slate-900"
                >
                  info@constrik.com
                </a>
              </li>
              <li>
                <a href="/#precio" className="hover:text-slate-900">
                  Precio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-2 text-[11.5px] text-slate-400">
          <span>Constrik Intelligence SL · B88773114</span>
          <span className="hidden md:inline">·</span>
          <span>Barcelona, España</span>
          <span className="md:ml-auto">
            © 2026 Constrik Intelligence SL. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
