import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PROD_TWEAKS } from "@/lib/tweaks";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre las cookies que utiliza constrik.com: cookies técnicas y analíticas (Google Analytics), su finalidad y cómo gestionar el consentimiento.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold text-navy">Política de cookies</h1>
        <p className="mt-3 text-sm text-slate-500">
          Última actualización: junio de 2026
        </p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-navy">¿Qué son las cookies?</h2>
            <p className="mt-2">
              Una cookie es un pequeño archivo que un sitio web guarda en tu
              dispositivo al visitarlo. Sirven para recordar información sobre tu
              visita y, en algunos casos, para analizar cómo se usa el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">¿Qué cookies utilizamos?</h2>
            <ul className="mt-3 space-y-3">
              <li>
                <strong>Técnicas / necesarias.</strong> Imprescindibles para que
                la web funcione y para recordar tu preferencia de consentimiento.
                No requieren consentimiento.
              </li>
              <li>
                <strong>Analíticas (Google Analytics 4, vía Google Tag
                Manager).</strong> Nos permiten medir de forma agregada el número
                de visitas, las páginas más vistas y el origen del tráfico, para
                mejorar el sitio. Estas cookies <strong>solo se activan si las
                aceptas</strong>. Proveedor: Google Ireland Ltd. / Google LLC
                (posible transferencia internacional con garantías adecuadas).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Base legal</h2>
            <p className="mt-2">
              Las cookies técnicas se basan en nuestro interés legítimo en
              prestar el servicio. Las cookies analíticas se basan en tu{" "}
              <strong>consentimiento</strong>, que solicitamos mediante el banner
              al entrar y que puedes retirar en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Cómo gestionar o retirar el consentimiento
            </h2>
            <p className="mt-2">
              Puedes aceptar o rechazar las cookies analíticas en el banner que
              aparece al visitar la web. Si quieres cambiar tu decisión más
              adelante, borra los datos del sitio en tu navegador
              (constrik.com) y volverá a aparecer el banner. También puedes
              bloquear o eliminar cookies desde la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Conservación</h2>
            <p className="mt-2">
              Las cookies analíticas de Google Analytics se conservan según los
              plazos definidos por Google. La preferencia de consentimiento se
              guarda localmente en tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">Cambios y contacto</h2>
            <p className="mt-2">
              Podemos actualizar esta política para reflejar cambios en las
              cookies que usamos. Para cualquier consulta, escríbenos a{" "}
              <a
                href="mailto:info@constrik.com"
                className="text-navy underline hover:no-underline"
              >
                info@constrik.com
              </a>
              .
            </p>
            <p className="mt-3 text-[13px] text-slate-500">
              Constrik Intelligence SL · B88773114 · Barcelona, España.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
