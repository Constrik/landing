import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PROD_TWEAKS } from "@/lib/tweaks";

export const metadata: Metadata = {
  title: "Política del sistema de gestión",
  description:
    "Política del Sistema de Gestión de la Seguridad de la Información (SGSI) de Constrik Intelligence, conforme a ISO/IEC 27001:2022.",
  alternates: { canonical: "/politica-sistema-gestion" },
};

const OBJETIVOS: [string, string][] = [
  [
    "Accesos e identidades",
    "Reforzar la autenticación y limitar los accesos a la necesidad operativa.",
  ],
  [
    "Plataforma e infraestructura en la nube",
    "Mantener una configuración segura, trazable y disponible del servicio.",
  ],
  [
    "Desarrollo de software",
    "Detectar y corregir a tiempo las vulnerabilidades del código y sus dependencias.",
  ],
  [
    "Datos y copias de seguridad",
    "Asegurar que la información pueda recuperarse y que los datos reales de clientes solo salgan de producción dentro de la excepción controlada.",
  ],
  [
    "Personas",
    "Asegurar que todo el equipo esté formado en seguridad y protección de datos.",
  ],
  [
    "Proveedores y clientes",
    "Revisar periódicamente a los proveedores y responder con transparencia a las exigencias de seguridad de los clientes.",
  ],
];

export default function PoliticaSistemaGestionPage() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-semibold text-navy">
          Política del sistema de gestión
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Versión 1 · 16 de junio de 2026 · Aprobada por la Alta Dirección
        </p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-navy">Propósito</h2>
            <p className="mt-2">
              Constrik Intelligence S.L. desarrolla y ofrece una plataforma SaaS
              que ayuda a los departamentos de estudios, licitación y
              presupuestos de las empresas constructoras a gestionar su
              documentación, aplicar procesos de inteligencia artificial y
              generar estimaciones de costes. Los clientes confían a la
              plataforma documentación técnica y económica de sus ofertas, por
              lo que la protección de esa información forma parte del propio
              valor del servicio.
            </p>
            <p className="mt-2">
              Con esta política, la Alta Dirección fija la orientación
              estratégica del Sistema de Gestión de la Seguridad de la
              Información (SGSI) y la vincula a la actividad de la empresa:
              ofrecer a las constructoras una herramienta fiable, disponible y
              segura para preparar sus estudios y presupuestos. La organización
              se compromete a compaginar el crecimiento del negocio y la
              creación de valor para clientes, socios e inversores con la
              protección de la información y de los datos que trata. Promueve
              además una cultura de respeto a la legalidad y a los compromisos
              contractuales, que el SGSI traduce en objetivos medibles y en
              mejora continua.
            </p>
            <p className="mt-2">
              <strong>Misión:</strong> ayudar a los departamentos de estudios
              de las constructoras a presupuestar con criterio, reuniendo su
              conocimiento y el del sector en una plataforma con inteligencia
              artificial, y proteger la información que nos confían.
            </p>
            <p className="mt-2">
              <strong>Visión:</strong> ser la plataforma de referencia en España
              para preparar estudios y presupuestos de obra y, después, para
              controlar su ejecución, con la confianza de las grandes
              constructoras.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Campo de aplicación
            </h2>
            <p className="mt-2">
              La política se aplica a todo el SGSI de Constrik Intelligence
              S.L. y abarca el diseño, el desarrollo, la comercialización, el
              soporte y el mantenimiento de la plataforma SaaS para la gestión
              de presupuestos, estudios y procesos de obra en el sector de la
              construcción. Alcanza a todo el personal y a los colaboradores
              externos que intervienen en estas actividades, así como a la
              información de la organización y de sus clientes tratada en la
              plataforma y en las herramientas en la nube de los proveedores
              que la soportan. La organización no dispone de sedes físicas
              operativas y desarrolla su actividad en remoto, a través de su
              plataforma y de su dominio constrik.com.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Referencias normativas
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>ISO/IEC 27001:2022</li>
              <li>ISO/IEC 27000</li>
              <li>Reglamento (UE) 2016/679</li>
              <li>Ley Orgánica 3/2018</li>
              <li>Reglamento (UE) 2024/1689</li>
              <li>Ley 34/2002</li>
              <li>Ley 1/2019</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Términos y definiciones
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Política:</strong> intenciones y dirección de una
                organización, expresadas formalmente por su alta dirección.
              </li>
              <li>
                <strong>Alta dirección:</strong> persona o grupo de personas
                que dirige y controla una organización al más alto nivel.
              </li>
              <li>
                <strong>Sistema de gestión:</strong> conjunto de elementos de
                una organización interrelacionados o que interactúan para
                establecer políticas, objetivos y procesos para lograr estos
                objetivos.
              </li>
              <li>
                <strong>Objetivo:</strong> resultado a lograr.
              </li>
              <li>
                <strong>Parte interesada:</strong> persona u organización que
                puede afectar, verse afectada o percibirse como afectada por
                una decisión o actividad.
              </li>
              <li>
                <strong>Mejora continua:</strong> actividad recurrente para
                mejorar el desempeño.
              </li>
              <li>
                <strong>Información documentada:</strong> información que una
                organización tiene que controlar y mantener, y el medio que la
                contiene.
              </li>
              <li>
                <strong>Seguridad de la información:</strong> preservación de
                la confidencialidad, la integridad y la disponibilidad de la
                información.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Roles y responsabilidades
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>CEO y Administrador Único (Alta Dirección):</strong>{" "}
                aprueba esta política y los objetivos del SGSI, asigna los
                recursos necesarios para cumplirlos y exige su aplicación en
                toda la organización.
              </li>
              <li>
                <strong>Responsable del SGSI:</strong> mantiene la política
                actualizada, la difunde al personal y a las partes interesadas
                y coordina el seguimiento de los objetivos que de ella se
                derivan.
              </li>
              <li>
                <strong>CTO:</strong> traslada los compromisos de la política a
                la infraestructura y a la plataforma como responsable técnico
                de seguridad.
              </li>
              <li>
                <strong>Responsable de Estudios:</strong> aplica la política en
                su área y comunica cualquier incidente o debilidad de seguridad
                que detecte.
              </li>
              <li>
                <strong>Personal y colaboradores:</strong> conocen esta
                política, la respetan en su trabajo diario y participan en la
                formación del SGSI.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Compromiso y objetivos del sistema de gestión
            </h2>
            <p className="mt-2">
              La Alta Dirección asume el liderazgo del SGSI y reconoce que la
              seguridad de la información es una condición para ganarse la
              confianza de las grandes empresas constructoras. Por eso apoya
              esta política en el análisis del contexto y en la evaluación de
              riesgos y oportunidades, y la revisa cada vez que estos cambian.
            </p>

            <h3 className="mt-6 font-semibold text-navy">
              Compromisos de la organización
            </h3>
            <p className="mt-2">
              La organización asume los siguientes compromisos, que orientan
              todas las decisiones del SGSI:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                Proteger la confidencialidad, la integridad y la disponibilidad
                de la información de los clientes, manteniendo separados los
                datos de cada uno de ellos.
              </li>
              <li>
                Cumplir los requisitos legales, reglamentarios y contractuales
                aplicables a la seguridad de la información, en especial los de
                protección de datos personales, inteligencia artificial,
                servicios de la sociedad de la información y secretos
                empresariales.
              </li>
              <li>
                Adoptar un enfoque basado en el riesgo, de modo que las medidas
                de seguridad respondan a las amenazas reales del servicio y de
                su cadena de proveedores en la nube y de inteligencia
                artificial.
              </li>
              <li>
                Garantizar la continuidad del servicio, sobre todo en los
                momentos críticos de las licitaciones de los clientes.
              </li>
              <li>
                Fomentar la competencia y la toma de conciencia del personal y
                de los colaboradores mediante formación periódica en seguridad
                y privacidad.
              </li>
              <li>
                Mejorar de forma continua la eficacia del SGSI a partir de los
                indicadores, las auditorías, los incidentes y la revisión por
                la dirección.
              </li>
            </ul>

            <h3 className="mt-6 font-semibold text-navy">
              Marco para los objetivos de seguridad de la información
            </h3>
            <p className="mt-2">
              Esta política proporciona el marco para establecer los objetivos
              de seguridad de la información. La Alta Dirección los fija de
              forma coherente con los compromisos anteriores y con los riesgos
              identificados, y procura que sean medibles, se comuniquen al
              personal y se actualicen cuando proceda. En cada ámbito de la
              actividad, los objetivos de seguridad de la información siguen
              esta dirección:
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-navy">
                    <th className="py-2 pr-4 font-semibold">Ámbito</th>
                    <th className="py-2 font-semibold">
                      Dirección de los objetivos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {OBJETIVOS.map(([ambito, direccion]) => (
                    <tr key={ambito} className="border-b border-slate-100">
                      <td className="py-2 pr-4 align-top font-medium">
                        {ambito}
                      </td>
                      <td className="py-2 align-top">{direccion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              El seguimiento de estos objetivos y de sus indicadores se
              describe en el PRO Procedimiento de mediciones y monitoreo, y la
              Alta Dirección valora su grado de cumplimiento en la revisión por
              la dirección según el PRO Gestión de revisión por la dirección.
              Los principios de seguridad que desarrollan estos compromisos se
              recogen en la POL Política de seguridad de la información.
            </p>

            <h3 className="mt-6 font-semibold text-navy">
              Difusión y disponibilidad de la política
            </h3>
            <p className="mt-2">
              La organización se compromete a que todas las personas que
              trabajan para ella conozcan esta política y comprendan cómo
              contribuyen a la eficacia del SGSI. Para ello, la pone a
              disposición del personal como información documentada en el
              repositorio compartido del SGSI, comunica sus cambios por los
              canales internos y la incluye en la formación sobre el sistema de
              gestión. También la pone a disposición de los clientes,
              proveedores, inversores y demás partes interesadas que la
              soliciten. Las modalidades de esta comunicación se describen en
              el PRO Procedimiento gestión de la comunicación.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Archivo y actualización
            </h2>
            <p className="mt-2">
              El Responsable del SGSI archiva esta política como información
              documentada del SGSI, según el PRO Procedimiento de gestión de
              información documentada, y conserva las versiones anteriores. La
              Alta Dirección revisa la política al menos una vez al año en la
              revisión por la dirección, y también cuando cambian el contexto,
              los riesgos o los requisitos aplicables. El Responsable del SGSI
              propone las actualizaciones y el CEO y Administrador Único las
              aprueba.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-navy">
              Documentos de referencia
            </h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>POL Política de seguridad de la información</li>
              <li>PRO Procedimiento de mediciones y monitoreo</li>
              <li>PRO Gestión de revisión por la dirección</li>
              <li>PRO Procedimiento gestión de la comunicación</li>
              <li>PRO Procedimiento de gestión de información documentada</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
