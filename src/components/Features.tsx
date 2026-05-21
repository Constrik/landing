type Solution = { title: string; body: string };

const SOLUTIONS: Solution[] = [
  {
    title: "Visualización",
    body: "BC3, IFC y planos PDF abiertos en una sola herramienta. Sin saltar entre programas.",
  },
  {
    title: "Vinculación",
    body: "Conecta cada partida del BC3 con los elementos del modelo 3D y las páginas de los planos PDF.",
  },
  {
    title: "Auditoría",
    body: "Detecta errores en las partidas del BC3, colisiones entre IFCs y triangula la información entre fuentes.",
  },
  {
    title: "Asignación a oficios",
    body: "Reparte capítulos y subcapítulos del BC3 entre tus oficios, listo para pedir presupuestos.",
  },
  {
    title: "Costes directos",
    body: "Cotiza con tu histórico, con bases de datos públicas y con un agente IA que pide presupuesto a tus subcontratas.",
  },
  {
    title: "Planning de obra",
    body: "Master plan por zonas de la obra y Gantt automático a partir del presupuesto.",
  },
  {
    title: "Costes indirectos",
    body: "Define los recursos en base al tamaño y características de la obra y obtén el presupuesto en segundos.",
  },
  {
    title: "Base de precios",
    body: "Histórico de la empresa centralizado. Cada estimación con trazabilidad total a su origen.",
  },
  {
    title: "Base de conocimiento",
    body: "El know-how de cada obra se queda en la empresa: criterios, fichas y decisiones accesibles para todo el equipo.",
  },
];

export function Features() {
  return (
    <section id="soluciones" className="border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">
            Soluciones
          </p>
          <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-4xl tracking-tight">
            Soluciones integradas en Constrik.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
          {SOLUTIONS.map((s, i) => (
            <div key={s.title} className="bg-white p-6 lg:p-7">
              <p className="text-[11px] font-mono text-slate-400 mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[16.5px] font-semibold text-slate-900 mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-[13.5px] text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
