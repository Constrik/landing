import { CtaButton } from "./CtaButton";
import type { Tweaks } from "@/lib/tweaks";

const PRICE_EUR_REF = 250;

const FEATURES = [
  "Auditoría BC3/IFC/Planos",
  "Generación de descompuestos y asignación de oficios",
  "Estimación desde Base de Datos y comparativos automáticos de ofertas",
  "Planning por actividades",
  "Proyección de certificaciones",
  "Propuesta a cliente",
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
              Cuota fija anual, según tu volumen de estudios.
            </h2>
            <p className="mt-5 text-[15px] text-slate-600 leading-relaxed max-w-md">
              Estimamos contigo los estudios que harás en el año y fijamos una
              cuota con margen. Sabes lo que pagas desde el primer día.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
            <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-2">
              Referencia orientativa
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl lg:text-6xl font-bold text-[#1A1A2E] font-logo tracking-tight">
                ~{PRICE_EUR_REF}&nbsp;€
              </span>
              <span className="text-slate-500 text-base">/ estudio</span>
            </div>
            <p className="text-sm text-slate-500 mb-7">
              IVA no incluido. La cuota anual se cierra en la demo.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14.5px] text-slate-700">
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
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-end">
              <CtaButton variant="primary" size="md" href={t.bookingUrl} target="_blank">
                Pedir una demo
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
