import { CtaButton } from "./CtaButton";
import type { Tweaks } from "@/lib/tweaks";

export function ClosingCta({ t }: { t: Tweaks }) {
  return (
    <section id="demo" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-28 text-center">
        <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-5xl tracking-tight leading-[1.05]">
          Ve Constrik con tu propio BC3.
        </h2>
        <p className="mt-5 text-[15.5px] text-slate-600 max-w-xl mx-auto leading-relaxed">
          Treinta minutos por videollamada. Subimos un presupuesto real de los
          tuyos y te enseñamos qué saca la IA. Sin slides.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
          <CtaButton variant="primary" size="lg" href={t.bookingUrl} target="_blank">
            Agendar una demo
          </CtaButton>
          <CtaButton
            variant="ghost"
            size="lg"
            href="mailto:info@constrik.com"
            target="_blank"
          >
            info@constrik.com
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
