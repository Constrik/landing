import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PROD_TWEAKS } from "@/lib/tweaks";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Constrik: responsable, datos que tratamos en la web y en la plataforma, finalidades, base legal, conservación, destinatarios y derechos.",
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
          Última actualización: septiembre de 2026
        </p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-navy">
              1. Responsable del tratamiento
            </h2>
            <ul className="mt-2 space-y-1">
              <li>
                <strong>Responsable:</strong> Constrik Intelligence, S.L. —
                NIF B88773114
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
                <strong>Usuarios de la plataforma.</strong> Si usas la
                aplicación de Constrik como usuario de una empresa cliente,
                tratamos tus datos de cuenta (nombre, correo electrónico,
                empresa y rol) y el registro de tu actividad en ella para
                prestarte el servicio, mantener su seguridad y resolver
                incidencias. Los datos de los proyectos que la empresa sube a
                la plataforma los tratamos por cuenta de esa empresa, según el
                contrato de encargo del tratamiento que tenemos firmado con
                ella.
              </li>
              <li>
                <strong>Conversaciones con el asistente.</strong> Las preguntas
                que haces al asistente de la plataforma y sus respuestas se
                guardan asociadas a tu usuario para que puedas volver a ellas.
                Solo tú puedes verlas desde la aplicación y puedes borrarlas en
                cualquier momento. Además, las analizamos de forma agregada para
                mejorar el servicio (por ejemplo, para detectar preguntas que el
                asistente no sabe responder). Para generar cada respuesta, la
                pregunta y los datos del proyecto necesarios se envían a nuestro
                proveedor de modelos de inteligencia artificial, que actúa como
                encargado del tratamiento y no los utiliza para entrenar sus
                modelos.
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
              aplicación de medidas precontractuales. El tratamiento de los
              datos de los usuarios de la plataforma, incluidas las
              conversaciones con el asistente, se basa en la ejecución del
              contrato con la empresa cliente y, en el análisis agregado para
              mejorar el servicio, en nuestro interés legítimo. El envío de comunicaciones
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
              Las conversaciones con el asistente se conservan 12 meses desde la
              última actividad en cada una y después se borran automáticamente,
              salvo que las borres tú antes. Los datos de analítica se conservan
              según los plazos del proveedor.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              5. Destinatarios y encargados
            </h2>
            <p className="mt-2">
              No cedemos tus datos a terceros salvo obligación legal. Para
              prestar el servicio nos apoyamos en proveedores tecnológicos
              (alojamiento del sitio y de la plataforma, analítica y modelos de
              inteligencia artificial), que actúan como encargados
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
