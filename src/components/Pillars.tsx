import type { ReactNode } from "react";

type Pillar = {
  title: string;
  body: string;
  glyph: ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: "Estudios en horas, no en semanas.",
    body: "Subes el BC3, el IFC o el PDF de planos. Constrik extrae mediciones, asigna oficios, audita y estima precios contra tu propio histórico.",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2.5" />
      </svg>
    ),
  },
  {
    title: "Tu conocimiento centralizado.",
    body: "El conocimiento de cada obra se queda en la empresa, no en el cuaderno de quien presupuestó.",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="6" rx="8" ry="2.5" />
        <path d="M4 6v12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V6" />
        <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
      </svg>
    ),
  },
  {
    title: "Menos errores en licitación.",
    body: "Auditoría automática: unidades incorrectas, mediciones a cero, partidas duplicadas, capítulos vacíos. Detectado antes de presentar.",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 4.5h11l5 5v10a1.5 1.5 0 0 1-1.5 1.5H3.5z" />
        <path d="M14.5 4.5v5h5" />
        <path d="m8 14 2.5 2.5L16 11" />
      </svg>
    ),
  },
  {
    title: "Aporta valor a la obra.",
    body: "Asignación de capítulos a oficios, planificación semanal automática y agentes de IA obteniendo presupuestos.",
    glyph: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h18M21 7l-2 3M11 5v16M7 11v9h6M11 11h-5" />
      </svg>
    ),
  },
];

export function Pillars() {
  return (
    <section id="beneficios" className="border-y border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">
            Beneficios de usar Constrik
          </p>
          <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-4xl tracking-tight">
            Lo que cambia
            <br />
            desde el primer estudio.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-white p-7 lg:p-9">
              <div className="w-10 h-10 rounded-lg bg-[#1A1A2E] text-white flex items-center justify-center mb-5">
                <span className="w-5 h-5 inline-block" aria-hidden>
                  {p.glyph}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-[14.5px] text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
