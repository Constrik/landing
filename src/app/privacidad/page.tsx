import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PROD_TWEAKS } from "@/lib/tweaks";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de constrik.com: responsable, datos que tratamos, finalidades, base legal, conservación, destinatarios y derechos.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold text-navy">
          Política de privacidad
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Última actualización: junio de 2026
        </p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-navy">
              1. Responsable del tratamiento
            </h2>
            <ul className="mt-2 space-y-1">
              <li>
                <strong>Responsable:</strong> Constrik Intelligence SL (en
                constitución) — NIF B88773114
              </li>
              <li>
                <strong>Domicilio:</strong> Passeig Garbí 132, 08860
                Castelldefels (Barcelona), España
              </li>
              <li>
                <strong>Contacto:</strong>{" "}
                <a
                  href="mailto:info@constrik.com"
                  className="text-navy underline hover:no-underline"
                >
                  info@constrik.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              2. Datos que tratamos y finalidad
            </h2>
            <ul className="mt-3 space-y-3">
              <li>
                <strong>Datos de contacto.</strong> Si nos escribes o solicitas
                una demo, tratamos los datos que nos facilites (nombre, empresa,
                correo electrónico) para atender tu solicitud y, en su caso,
                gestionar la relación comercial.
              </li>
              <li>
                <strong>Datos de navegación (analítica).</strong> Con tu
                consentimiento, usamos Google Analytics para medir de forma
                agregada el uso del sitio y mejorarlo. Ver la{" "}
                <a
                  href="/cookies"
                  className="text-navy underline hover:no-underline"
                >
                  Política de cookies
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">3. Base legal</h2>
            <p className="mt-2">
              La atención de tu solicitud se basa en tu consentimiento y/o en la
              aplicación de medidas precontractuales. El envío de comunicaciones
              comerciales y la analítica web se basan en tu consentimiento. El
              mantenimiento de la seguridad del sitio se basa en nuestro interés
              legítimo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">4. Conservación</h2>
            <p className="mt-2">
              Conservamos tus datos mientras dure la relación o el interés
              mutuo y, posteriormente, durante los plazos legalmente exigibles.
              Los datos de analítica se conservan según los plazos del proveedor.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              5. Destinatarios y encargados
            </h2>
            <p className="mt-2">
              No cedemos tus datos a terceros salvo obligación legal. Para
              prestar el servicio nos apoyamos en proveedores tecnológicos
              (alojamiento del sitio y analítica), que actúan como encargados
              del tratamiento bajo contrato. Algunos pueden implicar
              transferencias internacionales de datos, en cuyo caso se realizan
              con las garantías adecuadas previstas en el RGPD (p. ej. cláusulas
              contractuales tipo).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">6. Tus derechos</h2>
            <p className="mt-2">
              Puedes ejercer tus derechos de acceso, rectificación, supresión,
              oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
              <a
                href="mailto:info@constrik.com"
                className="text-navy underline hover:no-underline"
              >
                info@constrik.com
              </a>
              . Si consideras que el tratamiento no se ajusta a la normativa,
              tienes derecho a presentar una reclamación ante la Agencia
              Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener"
                className="text-navy underline hover:no-underline"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">7. Cambios</h2>
            <p className="mt-2">
              Podemos actualizar esta política para adaptarla a cambios
              normativos o de nuestros servicios. Publicaremos cualquier cambio
              en esta misma página.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
