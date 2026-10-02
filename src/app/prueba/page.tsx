import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { TrialForm } from "@/components/TrialForm";
import { PROD_TWEAKS } from "@/lib/tweaks";

export const metadata: Metadata = {
  title: "Prueba gratis con tu BC3",
  description:
    "Sube el BC3 de un presupuesto y recibe gratis el BC3 con los descompuestos generados y el Excel de costes directos con una pestaña por oficio.",
  alternates: { canonical: "/prueba" },
};

const RESULTADOS = [
  {
    title: "BC3 con descompuestos",
    description:
      "Tu mismo fichero, con cada partida desglosada en sus componentes y rendimientos. Lo abres en Presto o en tu programa de siempre.",
  },
  {
    title: "Excel de costes directos por oficio",
    description:
      "Un resumen por capítulos y por oficios, y una pestaña por cada oficio con sus partidas, lista para pedir precios a las subcontratas.",
  },
];

export default function PruebaPage() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">
              Prueba gratis
            </p>
            <h1 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-5xl tracking-tight leading-tight">
              Sube un BC3 y recíbelo desglosado y ordenado por oficios.
            </h1>
            <p className="mt-5 text-[16px] text-slate-600 leading-relaxed max-w-xl">
              El mismo motor que usan los departamentos de estudios en Constrik,
              aplicado a tu presupuesto. Sin registro y sin instalar nada: te lo
              enviamos por email.
            </p>

            <ul className="mt-8 space-y-5">
              {RESULTADOS.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <svg
                    className="mt-1 w-5 h-5 text-emerald-500 shrink-0"
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
                  <div>
                    <p className="font-semibold text-slate-900">{r.title}</p>
                    <p className="mt-1 text-[14.5px] text-slate-600 leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-5 text-[14px] text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">Sin precios, a propósito.</strong>{" "}
                Los descompuestos llegan con sus componentes y rendimientos. En
                Constrik los precios salen del histórico de tu constructora —tus
                presupuestos y las ofertas de tus subcontratas—, no de una base
                genérica.
              </p>
              <p className="mt-3">
                Tu presupuesto es confidencial: solo se usa para generar el
                resultado y se borra a los 30 días.
              </p>
            </div>
          </div>

          <TrialForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
