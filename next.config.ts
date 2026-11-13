import type { NextConfig } from "next";

/**
 * Cabeceras de seguridad de constrik.com.
 *
 * Salen del escaneo OWASP ZAP del 13-nov-2026 (Complaion): la landing no
 * enviaba CSP, protección contra clickjacking ni X-Content-Type-Options.
 *
 * La CSP enumera lo que carga la página de verdad:
 *  - Google Tag Manager, que hoy publica Google Analytics 4 con las señales
 *    de Google Ads (por eso doubleclick, googleadservices y google.com).
 *  - Cloudflare Turnstile en /prueba (script + iframe del captcha).
 *  - La API pública de Constrik, a la que /prueba sube el BC3.
 * Todo lo demás (fuentes de next/font, vídeo, imágenes) se sirve desde aquí.
 *
 * `script-src` lleva 'unsafe-inline' a propósito: Next mete scripts inline
 * para hidratar las páginas estáticas, más el Consent Mode y GTM. Quitarlo
 * exige nonces por petición, que obligan a renderizar en servidor cada
 * página. Si se añade una etiqueta nueva en GTM que cargue otro dominio,
 * hay que añadirlo aquí o el navegador la bloqueará.
 */

const API_ORIGIN = (process.env.NEXT_PUBLIC_API_URL ?? "https://api.constrik.com")
  .replace(/\/$/, "");

const GOOGLE_TAGS = [
  "https://*.googletagmanager.com",
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://*.g.doubleclick.net",
  "https://*.google.com",
  "https://*.googleadservices.com",
  "https://pagead2.googlesyndication.com",
];
const TURNSTILE = "https://challenges.cloudflare.com";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${GOOGLE_TAGS.join(" ")} ${TURNSTILE}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${GOOGLE_TAGS.join(" ")}`,
  "font-src 'self'",
  "media-src 'self'",
  `connect-src 'self' ${API_ORIGIN} ${GOOGLE_TAGS.join(" ")} ${TURNSTILE}`,
  `frame-src https://*.googletagmanager.com https://*.doubleclick.net ${TURNSTILE}`,
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Navegadores antiguos que no entienden `frame-ancestors`.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), " +
      "magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Vercel sirve los estáticos con `Access-Control-Allow-Origin: *`. Nadie
  // fuera de constrik.com necesita leerlos por CORS.
  { key: "Access-Control-Allow-Origin", value: "https://constrik.com" },
];

const nextConfig: NextConfig = {
  turbopack: {},
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
