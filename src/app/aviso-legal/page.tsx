import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PROD_TWEAKS } from "@/lib/tweaks";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal de constrik.com: titular del sitio, condiciones de uso, propiedad intelectual y legislación aplicable.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold text-navy">Aviso legal</h1>
        <p className="mt-3 text-sm text-slate-500">
          Última actualización: junio de 2026
        </p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-navy">
              1. Titular del sitio web
            </h2>
            <p className="mt-2">
              En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de
              la Información y de Comercio Electrónico (LSSI-CE), se informa de
              que el titular de este sitio web es:
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <strong>Denominación social:</strong> Constrik Intelligence SL
                (en constitución)
              </li>
              <li>
                <strong>NIF:</strong> B88773114
              </li>
              <li>
                <strong>Domicilio:</strong> Passeig Garbí 132, 08860
                Castelldefels (Barcelona), España
              </li>
              <li>
                <strong>Correo electrónico:</strong>{" "}
                <a
                  href="mailto:info@constrik.com"
                  className="text-navy underline hover:no-underline"
                >
                  info@constrik.com
                </a>
              </li>
              <li>
                <strong>Datos registrales:</strong> sociedad en constitución.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              2. Objeto y condiciones de uso
            </h2>
            <p className="mt-2">
              Este sitio web tiene por objeto informar sobre los productos y
              servicios de Constrik. El acceso y la navegación atribuyen la
              condición de usuario e implican la aceptación de este aviso legal.
              El usuario se compromete a hacer un uso adecuado y lícito del
              sitio y de sus contenidos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              3. Propiedad intelectual e industrial
            </h2>
            <p className="mt-2">
              Todos los contenidos del sitio (textos, imágenes, marcas, logotipos,
              diseño y código) son titularidad de Constrik Intelligence SL o de
              terceros que han autorizado su uso, y están protegidos por la
              normativa de propiedad intelectual e industrial. Queda prohibida su
              reproducción, distribución o transformación sin autorización
              expresa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              4. Responsabilidad y enlaces
            </h2>
            <p className="mt-2">
              Constrik no se responsabiliza de los daños derivados del uso del
              sitio ni de la indisponibilidad temporal del mismo. El sitio puede
              contener enlaces a páginas de terceros sobre cuyos contenidos
              Constrik no ejerce control ni asume responsabilidad.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              5. Protección de datos
            </h2>
            <p className="mt-2">
              El tratamiento de los datos personales se rige por nuestra{" "}
              <a
                href="/privacidad"
                className="text-navy underline hover:no-underline"
              >
                Política de privacidad
              </a>{" "}
              y, en lo relativo a cookies, por la{" "}
              <a
                href="/cookies"
                className="text-navy underline hover:no-underline"
              >
                Política de cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              6. Legislación aplicable
            </h2>
            <p className="mt-2">
              Este aviso legal se rige por la legislación española. Para la
              resolución de cualquier controversia, las partes se someten a los
              juzgados y tribunales que correspondan conforme a derecho.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
