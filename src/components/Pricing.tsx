import { CtaButton } from "./CtaButton";
import type { Tweaks } from "@/lib/tweaks";

const PRICE_EUR_OBRA = 250;

const FEATURES = [
  "Estudios ilimitados",
  "Auditoría BC3/IFC/Planos automática",
  "Cost Intelligence Engine completo",
  "Asignación de oficios e histórico de precios",
];

export function Pricing({ t }: { t: Tweaks }) {
  if (!t.showPricing) return null;
  return (
    <section id="precio" className="border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">
              Precio
            </p>
            <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-4xl tracking-tight leading-tight">
              Un precio.
              <br />
              Por obra activa.
            </h2>
            <p className="mt-5 text-[15px] text-slate-600 leading-relaxed max-w-md">
              Empiezas con una sola obra. Si te aporta valor, amplías al resto.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl lg:text-6xl font-bold text-[#1A1A2E] font-logo tracking-tight">
                {PRICE_EUR_OBRA}&nbsp;€
              </span>
              <span className="text-slate-500 text-base">/ obra / mes</span>
            </div>
            <p className="text-sm text-slate-500 mb-7">
              IVA no incluido. Facturación mensual.
            </p>
            <ul className="space-y-3 text-[14.5px] text-slate-700">
              {FEATURES.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <svg
                    className="mt-0.5 w-4 h-4 text-emerald-500 shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m3 8 3.5 3.5L13 5" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs text-slate-500">
                Empieza con 1 obra. Si te aporta valor, amplía a todas.
              </span>
              <CtaButton variant="primary" size="md" href={t.bookingUrl} target="_blank">
                Activar primera obra
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
