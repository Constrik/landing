type Persona = { tag: string; title: string; body: string };

const PERSONAS: Persona[] = [
  {
    tag: "Director General",
    title: "Mejora la rentabilidad de la empresa.",
    body: "Mejora la eficiencia del departamento de estudios, reduce errores que te cuestan dinero, vende más o selecciona las obras que te interesan.",
  },
  {
    tag: "Jefe de estudios",
    title: "Conocimiento centralizado.",
    body: "Todo tu equipo tiene acceso a todo el conocimiento de sus compañeros. Constrik te recuerda lo que pagaste la última vez, te enseña la dispersión y te avisa cuando una oferta es sospechosa.",
  },
];

export function Personas() {
  return (
    <section id="para-quien" className="bg-[#1A1A2E] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-mono uppercase tracking-wider text-slate-400 mb-3">
            Para quién
          </p>
          <h2 className="font-logo font-bold text-white text-3xl lg:text-4xl tracking-tight">
            Diseñado para constructoras residenciales españolas.
          </h2>
          <p className="mt-4 text-slate-300 text-[15px] leading-relaxed">
            Empresas que tienen un histórico propio que vale oro, pero que está
            repartido en carpetas y cabezas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {PERSONAS.map((it) => (
            <div
              key={it.tag}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-7 lg:p-8"
            >
              <div className="text-[11.5px] font-mono uppercase tracking-wider text-[#00CED1] mb-3">
                {it.tag}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white leading-snug mb-3">
                {it.title}
              </h3>
              <p className="text-[14.5px] text-slate-300 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
