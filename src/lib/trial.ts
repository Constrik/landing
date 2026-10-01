/**
 * Prueba gratuita desde la landing: el visitante sube un BC3 y recibe por
 * email el BC3 con descompuestos y el Excel de costes directos por oficio.
 * Habla con la API pública de Constrik (`/public/prueba`), sin cookies.
 */

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "https://api.constrik.com";

export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export const TRIAL_PATH = "/prueba";

export async function trialFetch(path: string, init?: RequestInit) {
  const res = await fetch(`${API_URL}/public/prueba${path}`, {
    ...init,
    // Sin credenciales: la cookie de sesión de app.constrik.com no tiene nada
    // que hacer aquí (y dispararía la comprobación CSRF de la API).
    credentials: "omit",
  });
  let body: { detail?: string; [k: string]: unknown } = {};
  try {
    body = await res.json();
  } catch {
    /* respuesta sin JSON */
  }
  return { ok: res.ok, status: res.status, body };
}
