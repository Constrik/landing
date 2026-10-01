"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { TURNSTILE_SITE_KEY, trialFetch } from "@/lib/trial";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
  }
}

type State =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; email: string }
  | { kind: "error"; message: string };

const MAX_MB = 15;

export function TrialForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [token, setToken] = useState<string>("");
  const [closed, setClosed] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // La tarjeta de «revisa tu correo» es más corta que el formulario: sin
    // esto queda por encima de la vista y parece que no ha pasado nada.
    if (state.kind === "sent") topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [state.kind]);

  useEffect(() => {
    // Un fichero soltado fuera de la caja no debe abrirse en otra pestaña.
    const block = (e: DragEvent) => {
      if (e.dataTransfer?.types.includes("Files")) e.preventDefault();
    };
    window.addEventListener("dragover", block);
    window.addEventListener("drop", block);
    return () => {
      window.removeEventListener("dragover", block);
      window.removeEventListener("drop", block);
    };
  }, []);

  useEffect(() => {
    trialFetch("/config")
      .then((r) => setClosed(r.ok && r.body.enabled === false))
      .catch(() => {});
  }, []);

  function renderTurnstile() {
    if (!TURNSTILE_SITE_KEY || !widgetRef.current || !window.turnstile || widgetId.current) return;
    widgetId.current = window.turnstile.render(widgetRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      language: "es",
      callback: (t: string) => setToken(t),
      "expired-callback": () => setToken(""),
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!file) {
      setState({ kind: "error", message: "Selecciona el fichero .bc3 del presupuesto." });
      return;
    }
    if (!file.name.toLowerCase().endsWith(".bc3")) {
      setState({ kind: "error", message: "El fichero tiene que ser un .bc3 (formato FIEBDC)." });
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setState({ kind: "error", message: `El BC3 supera ${MAX_MB} MB.` });
      return;
    }
    const body = new FormData();
    body.set("email", String(data.get("email") ?? ""));
    body.set("privacy", data.get("privacy") ? "true" : "false");
    if (token) body.set("turnstile_token", token);
    body.set("file", file);

    setState({ kind: "sending" });
    try {
      const r = await trialFetch("", { method: "POST", body });
      if (r.ok) {
        setState({ kind: "sent", email: String(r.body.email ?? data.get("email")) });
      } else {
        setState({
          kind: "error",
          message: r.body.detail ?? "No hemos podido recibir el fichero. Inténtalo de nuevo.",
        });
        if (widgetId.current) window.turnstile?.reset(widgetId.current);
        setToken("");
      }
    } catch {
      setState({ kind: "error", message: "No hay conexión con Constrik. Inténtalo en un momento." });
    }
  }

  if (state.kind === "sent") {
    return (
      <div ref={topRef} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
        <p className="text-[12px] font-mono uppercase tracking-wider text-emerald-700 mb-2">
          Recibido
        </p>
        <h2 className="font-logo font-bold text-[#1A1A2E] text-2xl tracking-tight">
          Revisa tu correo
        </h2>
        <p className="mt-3 text-[15px] text-slate-700 leading-relaxed">
          Hemos enviado un enlace a <strong>{state.email}</strong>. Púlsalo para
          confirmar tu email y empezamos a procesar el presupuesto. Te llegará el
          resultado a ese mismo correo, normalmente en unos minutos.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          ¿No lo ves? Mira en la carpeta de spam o promociones.
        </p>
      </div>
    );
  }

  const sending = state.kind === "sending";
  const needsCaptcha = Boolean(TURNSTILE_SITE_KEY);

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5"
    >
      {needsCaptcha && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={renderTurnstile}
        />
      )}
      {closed && (
        <p className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
          La prueba no está disponible ahora mismo. Puedes pedir una demo y te lo
          enseñamos con tu presupuesto.
        </p>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-800">
          Email de empresa
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="nombre@tuconstructora.es"
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400"
        />
        <p className="mt-1.5 text-xs text-slate-500">
          No se admiten correos personales (Gmail, Hotmail, Outlook…). Ahí te
          enviaremos el resultado.
        </p>
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-800">Presupuesto en BC3</span>
        <label
          htmlFor="file"
          onDragEnter={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragOver={(e) => {
            // Sin preventDefault el navegador abre el fichero en otra pestaña.
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
          }}
          onDragLeave={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            const dropped = e.dataTransfer.files?.[0];
            if (dropped) {
              setFile(dropped);
              if (state.kind === "error") setState({ kind: "idle" });
            }
          }}
          className={`mt-1.5 flex flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed px-4 py-7 text-center cursor-pointer transition-colors ${
            dragging
              ? "border-slate-900 bg-slate-100"
              : "border-slate-300 bg-slate-50 hover:border-slate-400"
          }`}
        >
          <span className="text-[15px] font-medium text-slate-800 break-all">
            {file ? file.name : dragging ? "Suelta el fichero aquí" : "Arrastra aquí el .bc3 o haz clic para elegirlo"}
          </span>
          <span className="text-xs text-slate-500">
            {file
              ? `${(file.size / 1024 / 1024).toFixed(1).replace(".", ",")} MB`
              : `Formato FIEBDC, hasta ${MAX_MB} MB`}
          </span>
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept=".bc3,.BC3"
          className="sr-only"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <div className="space-y-2.5">
        <label className="flex items-start gap-2.5 text-sm text-slate-700">
          <input name="privacy" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            He leído y acepto la{" "}
            <a href="/privacidad" target="_blank" className="underline hover:no-underline">
              política de privacidad
            </a>
            . Usaremos tu email para enviarte el resultado y borraremos el
            fichero a los 30 días.
          </span>
        </label>
      </div>

      {needsCaptcha && <div ref={widgetRef} />}

      {state.kind === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={sending || closed || (needsCaptcha && !token)}
        className="w-full inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-[15px] font-medium text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Subiendo…" : "Procesar mi BC3 gratis"}
      </button>
      <p className="text-xs text-slate-500 leading-relaxed">
        Al usar la prueba, Constrik podrá enviarte información sobre sus
        productos. Puedes darte de baja en cualquier momento desde cualquiera de
        nuestros correos.
      </p>
    </form>
  );
}
