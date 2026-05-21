import { CtaButton } from "./CtaButton";
import type { Tweaks } from "@/lib/tweaks";

export function Hero({ t }: { t: Tweaks }) {
  return (
    <section className="relative overflow-hidden hero-grid">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-[11.5px] text-slate-500 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00CED1]" aria-hidden />
          IA para los departamentos de estudios
        </div>
        <h1 className="font-logo font-bold tracking-tight text-[#1A1A2E] text-[clamp(40px,7vw,84px)] leading-[1.02]">
          Presupuesta como si{" "}
          <span className="accent-underline">ya hubieras hecho la obra</span>.
        </h1>
        <p className="mt-7 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Constrik es una plataforma de Inteligencia Artificial para los
          departamentos de estudios de las constructoras. Reduce los plazos de
          estudios, centraliza el conocimiento, reduce errores en las
          licitaciones y prepara la obra para que sea más eficiente.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <CtaButton variant="primary" size="lg" href={t.bookingUrl} target="_blank">
            Pedir una demo
          </CtaButton>
          <CtaButton variant="outline" size="lg" href="#beneficios">
            Ver cómo funciona
          </CtaButton>
        </div>
        <p className="mt-5 text-xs text-slate-400">
          Sube tu BC3, IFC y PDF de planos y la IA comenzará a trabajar por ti.
        </p>
      </div>
    </section>
  );
}
