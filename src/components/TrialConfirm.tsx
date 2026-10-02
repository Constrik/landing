"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CtaButton } from "./CtaButton";
import { TRIAL_PATH, trialFetch } from "@/lib/trial";

type State =
  | { kind: "ready" }
  | { kind: "loading" }
  | { kind: "ok"; already: boolean }
  | { kind: "error"; message: string };

export function TrialConfirm({ bookingUrl }: { bookingUrl: string }) {
  const token = useSearchParams().get("t") ?? "";
  const [state, setState] = useState<State>({ kind: "ready" });

  // Se confirma al PULSAR, nunca al cargar: los filtros de correo (Safe Links
  // de Microsoft 365, entre otros) abren y ejecutan los enlaces antes que el
  // destinatario, y confirmarían por él — sin doble opt-in real y gastando el
  // proceso en un email que nadie ha leído.
  async function confirmar() {
    if (!token) {
      setState({ kind: "error", message: "Falta el código del enlace." });
      return;
    }
    setState({ kind: "loading" });
    try {
      const r = await trialFetch("/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (r.ok) {
        setState({ kind: "ok", already: r.body.status !== "queued" });
      } else {
        setState({
          kind: "error",
          message: r.body.detail ?? "No hemos podido confirmar el email.",
        });
      }
    } catch {
      setState({ kind: "error", message: "No hay conexión con Constrik. Inténtalo de nuevo." });
    }
  }

  if (state.kind === "ready" || state.kind === "loading") {
    return (
      <div>
        <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">
          Último paso
        </p>
        <h1 className="font-logo font-bold text-[#1A1A2E] text-3xl tracking-tight">
          Confirma y procesamos tu presupuesto
        </h1>
        <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
          Al confirmar empezamos a generar el BC3 con los descompuestos y el
          Excel de costes directos por oficio. Te llegarán al mismo correo.
        </p>
        <button
          type="button"
          onClick={confirmar}
          disabled={state.kind === "loading"}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-[15px] font-medium text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {state.kind === "loading" ? "Confirmando…" : "Confirmar y procesar"}
        </button>
      </div>
    );
  }
  if (state.kind === "error") {
    return (
      <div>
        <h1 className="font-logo font-bold text-[#1A1A2E] text-3xl tracking-tight">
          No hemos podido confirmarlo
        </h1>
        <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">{state.message}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={TRIAL_PATH} variant="primary">
            Volver a subir el BC3
          </CtaButton>
          <CtaButton href={bookingUrl} variant="outline" target="_blank">
            Pedir una demo
          </CtaButton>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p className="text-[12px] font-mono uppercase tracking-wider text-emerald-700 mb-3">
        Email confirmado
      </p>
      <h1 className="font-logo font-bold text-[#1A1A2E] text-3xl tracking-tight">
        {state.already ? "Ya estamos con ello" : "Estamos procesando tu presupuesto"}
      </h1>
      <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
        Te enviaremos por email el BC3 con los descompuestos y el Excel de costes
        directos por oficio. Suele tardar unos minutos; con presupuestos grandes,
        algo más. Puedes cerrar esta página.
      </p>
      <p className="mt-6 text-[15px] text-slate-600 leading-relaxed">
        Mientras tanto, ¿lo vemos juntos con tus precios?
      </p>
      <div className="mt-4">
        <CtaButton href={bookingUrl} variant="primary" target="_blank">
          Reservar una demo de 30 minutos
        </CtaButton>
      </div>
    </div>
  );
}
