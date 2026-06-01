"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "constrik_consent";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

function applyConsent(granted: boolean) {
  const w = window as GtagWindow;
  w.gtag?.(
    "consent",
    "update",
    granted
      ? {
          ad_storage: "granted",
          analytics_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        }
      : {
          ad_storage: "denied",
          analytics_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        },
  );
}

/**
 * Banner de consentimiento de cookies (RGPD + Google Consent Mode v2).
 *
 * El estado por defecto es "denied" (lo fija el script de Consent Mode en el
 * layout, ANTES de cargar GTM). Hasta que el usuario acepta, GA4 no escribe
 * cookies. Al elegir, se actualiza el consentimiento y se recuerda la decisión.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(granted: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      /* ignore */
    }
    applyConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-6">
        <p className="text-[13px] leading-relaxed text-slate-600">
          Usamos cookies propias y de terceros (Google Analytics) para medir el
          uso del sitio y mejorarlo. Puedes aceptarlas o rechazarlas. Más
          información en nuestra{" "}
          <a href="/cookies" className="text-navy underline hover:no-underline">
            Política de cookies
          </a>
          .
        </p>
        <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
          <button
            type="button"
            onClick={() => decide(false)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-50"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="rounded-lg bg-navy px-4 py-2 text-[13px] font-medium text-white hover:opacity-90"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
