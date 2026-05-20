// sections.jsx — all landing sections. Each section is a small React component
// that reads from the `t` (tweaks) object passed in props.

// -----------------------------------------------------------------------------
// Single source of truth — change once and it propagates everywhere on the
// landing. Pricing is the kind of value that drifts fast across copy if it
// lives in multiple places.
// -----------------------------------------------------------------------------
const PRICE_EUR_OBRA = 250;

// -----------------------------------------------------------------------------
// Shared atoms
// -----------------------------------------------------------------------------
function Logo({ tone = 'navy', size = 'md' }) {
  const sizeCls = { sm: 'text-base', md: 'text-xl', lg: 'text-2xl' }[size];
  const colorCls = tone === 'white' ? 'text-white' : 'text-[#1A1A2E]';
  return (
    <span className={`font-logo font-bold tracking-tight leading-none ${sizeCls} ${colorCls}`}>
      Constr<span className="text-[#00CED1]">ik</span>
    </span>
  );
}

function CtaButton({ children, variant = 'primary', size = 'md', href = '#contacto', onClick, target, rel }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors whitespace-nowrap';
  const sizeCls = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  }[size];
  const variantCls = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    accent:  'bg-blue-600 text-white hover:bg-blue-700',
    ghost:   'text-slate-700 hover:text-slate-900',
    outline: 'border border-slate-300 text-slate-800 hover:border-slate-400 bg-white',
  }[variant];
  // Open external links in a new tab so the user doesn't lose the landing.
  // Safe defaults: when target="_blank", add rel="noopener noreferrer" unless
  // caller overrides it.
  const safeRel = target === '_blank' ? (rel || 'noopener noreferrer') : rel;
  return (
    <a href={href} onClick={onClick} target={target} rel={safeRel}
       className={`${base} ${sizeCls} ${variantCls}`}>
      {children}
    </a>
  );
}

// -----------------------------------------------------------------------------
// Nav
// -----------------------------------------------------------------------------
function Nav({ t }) {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center">
        <a href="#" className="flex items-center"><Logo /></a>
        <nav className="hidden md:flex items-center gap-7 ml-12 text-[13.5px] text-slate-600 whitespace-nowrap">
          <a href="#producto"   className="hover:text-slate-900">Producto</a>
          <a href="#para-quien" className="hover:text-slate-900">Para quién</a>
          {t.showPricing && <a href="#precio" className="hover:text-slate-900">Precio</a>}
          <a href="mailto:info@constrik.com" className="hover:text-slate-900">Preguntas</a>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          {t.showLogin && <a href={t.loginUrl} className="hidden sm:inline-block text-[13.5px] text-slate-600 hover:text-slate-900 whitespace-nowrap">Iniciar sesión</a>}
          <CtaButton variant="primary" size="sm" href={t.bookingUrl} target="_blank">Pedir demo</CtaButton>
        </div>
      </div>
    </header>
  );
}

// -----------------------------------------------------------------------------
// Hero — 2 variants driven by t.heroVariant
// -----------------------------------------------------------------------------
function HeroEditorial({ t }) {
  return (
    <section className="relative overflow-hidden hero-grid">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-[11.5px] text-slate-500 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00CED1]"></span>
          IA para los departamentos de estudios
        </div>
        <h1 className="font-logo font-bold tracking-tight text-[#1A1A2E] text-[clamp(40px,7vw,84px)] leading-[1.02]">
          Presupuesta como si{' '}
          <span className="accent-underline">ya hubieras hecho la obra</span>.
        </h1>
        <p className="mt-7 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Constrik es una plataforma de Inteligencia Artificial para los
          departamentos de estudios de las constructoras. Reduce los plazos de
          estudios, centraliza el conocimiento, reduce errores en las
          licitaciones y prepara la obra para que sea más eficiente.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <CtaButton variant="primary" size="lg" href={t.bookingUrl} target="_blank">Pedir una demo</CtaButton>
          <CtaButton variant="outline" size="lg" href="#producto">Ver cómo funciona</CtaButton>
        </div>
        <p className="mt-5 text-xs text-slate-400">
          Sube tu BC3, IFC y PDF de planos y la IA comenzará a trabajar por ti.
        </p>
      </div>
    </section>
  );
}

function Hero({ t }) {
  return <HeroEditorial t={t} />;
}

// -----------------------------------------------------------------------------
// Pilares — 4 beneficios
// -----------------------------------------------------------------------------
const PILLARS = [
  {
    title: 'Estudios en horas, no en semanas.',
    body: 'Subes el BC3, el IFC o el PDF de planos. Constrik extrae mediciones, asigna oficios, audita y estima precios contra tu propio histórico.',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2.5"/>
      </svg>
    ),
  },
  {
    title: 'Tu conocimiento centralizado.',
    body: 'El conocimiento de cada obra se queda en la empresa, no en el cuaderno de quien presupuestó.',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="2.5"/><path d="M4 6v12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V6"/><path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5"/>
      </svg>
    ),
  },
  {
    title: 'Menos errores en licitación.',
    body: 'Auditoría automática: unidades incorrectas, mediciones a cero, partidas duplicadas, capítulos vacíos. Detectado antes de presentar.',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 4.5h11l5 5v10a1.5 1.5 0 0 1-1.5 1.5H3.5z"/><path d="M14.5 4.5v5h5"/><path d="m8 14 2.5 2.5L16 11"/>
      </svg>
    ),
  },
  {
    title: 'Aporta valor a la obra.',
    body: 'Asignación de capítulos a oficios, planificación semanal automática y agentes de IA obteniendo presupuestos.',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18M21 7l-2 3M11 5v16M7 11v9h6M11 11h-5"/>
      </svg>
    ),
  },
];

function Pillars({ t }) {
  return (
    <section id="producto" className="border-y border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">Lo que hace por ti</p>
          <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-4xl tracking-tight">
            Cuatro cosas, sin atajos.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-white p-7 lg:p-9">
              <div className="w-10 h-10 rounded-lg bg-[#1A1A2E] text-white flex items-center justify-center mb-5">
                <span className="w-5 h-5 inline-block">{p.glyph}</span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2 leading-snug">{p.title}</h3>
              <p className="text-[14.5px] text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Features — el Cost Intelligence Engine en detalle
// -----------------------------------------------------------------------------
function Features({ t }) {
  return (
    <section className="border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">
        <div className="lg:max-w-md">
          <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">Cost Intelligence Engine</p>
          <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-4xl tracking-tight leading-tight">
            Precios con<br/>trazabilidad total.
          </h2>
          <p className="mt-5 text-[15px] text-slate-600 leading-relaxed">
            Cada partida que Constrik estima viene con la lista de obras
            anteriores tuyas donde se hizo lo mismo, los precios reales que
            pagaste, y las bases de datos públicas que se cruzaron. Cero
            "porque sí", todo defendible ante el promotor.
          </p>
          <ul className="mt-7 space-y-3.5 text-[14.5px]">
            {[
              'Cruce automático IFC ↔ BC3',
              'Análisis de planos PDF con visión IA',
              'Grafo semántico navegable del histórico',
              'Matching contra BDD públicas + tu privada',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00CED1] shrink-0"></span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <TraceCard />
      </div>
    </section>
  );
}

// Abstract trace card — NOT a screenshot of the app. A typographic
// representation of what CIE produces: one partida + the trace of where
// the price came from.
function TraceCard() {
  const sources = [
    { tag: 'Tu obra', label: 'Reforma Alcalá 124', meta: 'mar 2025', price: '148,20 €/m³' },
    { tag: 'Tu obra', label: 'Aldaba Lote 2 (Boadilla)', meta: 'sep 2024', price: '152,80 €/m³' },
    { tag: 'Tu obra', label: 'Velazquez 18', meta: 'jun 2024', price: '149,40 €/m³' },
    { tag: 'BDD pública', label: 'CYPE 2025 · Madrid', meta: 'centro', price: '154,10 €/m³' },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-slate-100 rounded-3xl -z-10 blur-2xl opacity-50"></div>
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Estimated partida header */}
        <div className="p-6 lg:p-7 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-2 text-[11px] font-mono text-slate-400">
            <span>[01.03.025]</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>m³</span>
          </div>
          <p className="text-[14.5px] text-slate-700 leading-snug mb-5">
            Hormígon HA-25/B/20/IIa en cimentación, vertido con bomba.
          </p>
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Estimación Constrik</p>
              <p className="font-logo font-bold text-[#1A1A2E] text-4xl lg:text-5xl tracking-tight leading-none">150,12 <span className="text-2xl">€</span></p>
              <p className="text-xs text-slate-400 mt-1">por m³ · desviación ± 2,1 %</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">Confianza</p>
              <div className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-sm font-semibold text-emerald-700">Alta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sources — the trazabilidad */}
        <div className="px-6 lg:px-7 py-5 bg-slate-50">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-3">Basado en</p>
          <ul className="space-y-2.5">
            {sources.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-[13px]">
                <span className={`inline-flex items-center text-[10px] font-medium px-1.5 py-0.5 rounded ${s.tag === 'Tu obra' ? 'bg-[#1A1A2E] text-white' : 'bg-slate-200 text-slate-700'} shrink-0 w-[78px] justify-center`}>
                  {s.tag}
                </span>
                <span className="text-slate-700 flex-1 truncate">{s.label}</span>
                <span className="text-[11px] text-slate-400 font-mono whitespace-nowrap">{s.meta}</span>
                <span className="text-[12px] font-mono text-slate-700 whitespace-nowrap w-20 text-right">{s.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Personas — para quién
// -----------------------------------------------------------------------------
function Personas({ t }) {
  const items = [
    {
      tag: 'Director General',
      title: 'Mejora la rentabilidad de la empresa.',
      body: 'Mejora la eficiencia del departamento de estudios, reduce errores que te cuestan dinero, vende más o selecciona las obras que te interesan.',
    },
    {
      tag: 'Jefe de estudios',
      title: 'Conocimiento centralizado.',
      body: 'Todo tu equipo tiene acceso a todo el conocimiento de sus compañeros. Constrik te recuerda lo que pagaste la última vez, te enseña la dispersión y te avisa cuando una oferta es sospechosa.',
    },
  ];
  return (
    <section id="para-quien" className="bg-[#1A1A2E] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-[12px] font-mono uppercase tracking-wider text-slate-400 mb-3">Para quién</p>
          <h2 className="font-logo font-bold text-white text-3xl lg:text-4xl tracking-tight">
            Diseñado para constructoras residenciales españolas.
          </h2>
          <p className="mt-4 text-slate-300 text-[15px] leading-relaxed">
            Empresas que tienen histórico propio que vale oro, pero que
            está repartido en carpetas y cabezas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.tag} className="rounded-xl border border-white/10 bg-white/[0.03] p-7 lg:p-8">
              <div className="text-[11.5px] font-mono uppercase tracking-wider text-[#00CED1] mb-3">{it.tag}</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white leading-snug mb-3">{it.title}</h3>
              <p className="text-[14.5px] text-slate-300 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Pricing strip
// -----------------------------------------------------------------------------
function Pricing({ t }) {
  if (!t.showPricing) return null;
  return (
    <section id="precio" className="border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[12px] font-mono uppercase tracking-wider text-slate-500 mb-3">Precio</p>
            <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-4xl tracking-tight leading-tight">
              Un precio.<br/>Por obra activa.
            </h2>
            <p className="mt-5 text-[15px] text-slate-600 leading-relaxed max-w-md">
              Empiezas con una sola obra. Si te aporta valor, amplías al
              resto.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl lg:text-6xl font-bold text-[#1A1A2E] font-logo tracking-tight">{PRICE_EUR_OBRA}&nbsp;€</span>
              <span className="text-slate-500 text-base">/ obra / mes</span>
            </div>
            <p className="text-sm text-slate-500 mb-7">IVA no incluido. Facturación mensual.</p>
            <ul className="space-y-3 text-[14.5px] text-slate-700">
              {[
                'Estudios ilimitados',
                'Auditoría BC3/IFC/Planos automática',
                'Cost Intelligence Engine completo',
                'Asignación de oficios e histórico de precios',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <svg className="mt-0.5 w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 8 3.5 3.5L13 5"/>
                  </svg>
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs text-slate-500">Empieza con 1 obra. Si te aporta valor, amplía a todas.</span>
              <CtaButton variant="primary" size="md" href={t.bookingUrl} target="_blank">Activar primera obra</CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// CTA + Footer
// -----------------------------------------------------------------------------
function ClosingCta({ t }) {
  return (
    <section id="demo" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-28 text-center">
        <h2 className="font-logo font-bold text-[#1A1A2E] text-3xl lg:text-5xl tracking-tight leading-[1.05]">
          Ve Constrik con tu propio BC3.
        </h2>
        <p className="mt-5 text-[15.5px] text-slate-600 max-w-xl mx-auto leading-relaxed">
          Treinta minutos por videollamada. Subimos un presupuesto real
          de los tuyos y te enseñamos qué saca la IA. Sin slides.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3 flex-wrap">
          <CtaButton variant="primary" size="lg" href={t.bookingUrl} target="_blank">Agendar una demo</CtaButton>
          <CtaButton variant="ghost" size="lg" href="mailto:info@constrik.com">
            info@constrik.com
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <Logo size="md" />
          <span className="text-[12.5px] text-slate-500 md:ml-2">
            Plataforma de IA para los departamentos de estudios.
          </span>
          <div className="md:ml-auto flex items-center gap-7 text-[12.5px] text-slate-500 whitespace-nowrap">
            <a href="mailto:info@constrik.com" className="hover:text-slate-900">info@constrik.com</a>
            <a href="#" className="hover:text-slate-900">Aviso legal</a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-3 text-[11.5px] text-slate-400">
          <span>Constrik Intelligence SL · B88773114</span>
          <span className="hidden md:inline">·</span>
          <span>Barcelona, España</span>
          <span className="md:ml-auto">© 2026 Constrik Intelligence SL. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, Pillars, Features, Personas, Pricing, ClosingCta, Footer,
  Logo, CtaButton,
});
