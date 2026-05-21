/**
 * Catálogo de productos Constrik — fuente única de verdad para:
 *   · src/app/[slug]/page.tsx     páginas de producto (SSG)
 *   · src/app/sitemap.ts          URLs en el sitemap
 *   · src/components/Nav.tsx      menú "Productos"
 *   · src/components/Footer.tsx   columna de productos
 *
 * Mantener este archivo alineado con el catálogo A5 de CLAUDE.md (BuilderAgent).
 * Si añades un producto, basta con añadir una entrada aquí — el routing,
 * sitemap y nav se regeneran solos en el siguiente build.
 */

export type FAQ = {
  question: string;
  answer: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Product = {
  /** URL slug (/<slug>) */
  slug: string;
  /** Nombre comercial completo */
  name: string;
  /** Tag corto para badges/breadcrumbs */
  shortName: string;
  /** Categoría funcional, surface en JSON-LD y breadcrumbs */
  category: "Estudios" | "Obra" | "BIM" | "Conocimiento";
  /** Title de la pestaña + h1 de la página */
  headline: string;
  /** Subhead bajo el h1 + meta description (160 chars máx) */
  tagline: string;
  /** Descripción larga para meta description + JSON-LD */
  description: string;
  /** Audiencia objetivo, para schema.org/audience */
  audience: string;
  /** Lista de features clave (3-6) */
  features: Feature[];
  /** Cómo funciona (3-4 pasos) */
  howItWorks: Step[];
  /** Preguntas frecuentes con FAQ schema */
  faqs: FAQ[];
  /** Keywords para meta + indexación */
  keywords: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "licitacion",
    name: "Agente IA para Licitaciones",
    shortName: "Licitaciones",
    category: "Estudios",
    headline: "Presupuesta una licitación en horas, no en semanas",
    tagline:
      "Agente de IA que toma tu BC3, asigna oficios, estima precios con tu histórico y prepara la comparativa de subcontratas. Tu jefe de estudios pasa de copiar y pegar a decidir.",
    description:
      "Constrik automatiza el ciclo completo de costes directos en licitaciones: ingesta de BC3, asignación de oficios por IA, estimación de precios con histórico propio y BDDs públicas, y comparativa automática de ofertas de subcontratas.",
    audience: "Jefes de estudios, presupuestadores y dirección de estudios en constructoras",
    features: [
      {
        title: "Ingesta BC3 sin pérdida",
        description:
          "Parser BC3 propio que conserva mediciones detalladas, pliegos y descripciones largas. Tolerante a archivos mal formados.",
      },
      {
        title: "Asignación de oficios por IA",
        description:
          "Cada partida se mapea automáticamente al oficio que la ejecuta según el catálogo de tu constructora. Validas en una tabla, no manualmente partida a partida.",
      },
      {
        title: "Estimación con tu histórico",
        description:
          "El motor CIE compara cada partida con clusters semánticos de tus obras anteriores. Mediana ponderada con ajuste IPC y trazabilidad completa al origen.",
      },
      {
        title: "Comparativa de ofertas automatizada",
        description:
          "Petición a subcontratas, recepción y parsing del PDF de oferta, alineación al BC3 y comparativa visual con tu estimación previa.",
      },
      {
        title: "Argumentario por partida",
        description:
          "Cada precio sugerido lleva el razonamiento detrás: cluster que ganó, referencias usadas, ajustes aplicados y nivel de confianza explícito.",
      },
      {
        title: "Human-in-the-loop en cifras de dinero",
        description:
          "La IA propone, tu equipo valida. Nada se aplica al presupuesto sin que un humano lo confirme. Auditable de principio a fin.",
      },
    ],
    howItWorks: [
      {
        title: "Sube el BC3",
        description: "Constrik parsea el presupuesto, detecta errores de medición y prepara la jerarquía de capítulos y partidas.",
      },
      {
        title: "IA propone oficios y precios",
        description: "En paralelo se asigna oficio a cada partida y se estima precio contra tu histórico interno y BDDs públicas.",
      },
      {
        title: "Tu equipo revisa y aprueba",
        description: "Vista de árbol con semáforo por partida. Verde si hay precio firme, amarillo si es referencia externa, rojo si falta info.",
      },
      {
        title: "Pide ofertas y compara",
        description: "Constrik envía peticiones por email a las subcontratas del oficio, lee las ofertas que llegan y arma la comparativa.",
      },
    ],
    faqs: [
      {
        question: "¿Qué formato de presupuesto acepta?",
        answer:
          "BC3, el estándar FIEBDC español. Cualquier presupuesto exportado desde Presto u otros programas como BC3 es compatible. No leemos formatos cerrados nativos (.PZH, .PrestoObra).",
      },
      {
        question: "¿De dónde salen los precios?",
        answer:
          "Primero buscamos en tu histórico propio (obras ganadas y presupuestadas indexadas en el motor). Si no hay match, contrastamos con BDDs públicas españolas (Andalucía, Extremadura, etc.). Como último recurso, la IA propone un rango orientativo marcado como tal.",
      },
      {
        question: "¿Mi histórico se mezcla con el de otras constructoras?",
        answer:
          "No. Cada constructora tiene su propio espacio aislado. Tu BC3, tus ofertas adjudicadas y tu catálogo de oficios nunca son visibles para otra organización.",
      },
      {
        question: "¿Cuánto tarda el onboarding?",
        answer:
          "El primer presupuesto está listo en menos de un día. Con cada obra que ganas, el motor aprende y las siguientes estimaciones mejoran sin que tu equipo haga nada.",
      },
    ],
    keywords: [
      "presupuesto BC3 IA",
      "licitaciones constructoras",
      "estimación de costes directos",
      "comparativa subcontratas",
      "asignación de oficios automática",
    ],
  },
  {
    slug: "memoria",
    name: "Histórico Inteligente de Precios",
    shortName: "Histórico de Precios",
    category: "Conocimiento",
    headline: "Tu histórico de precios, vivo y buscable",
    tagline:
      "Una base de datos viva de tus presupuestos y contratos firmados, indexada por embeddings y conectada por similitud semántica. Pregúntale qué pagaste por algo y te lo cuenta.",
    description:
      "Constrik transforma tus BC3 históricos y contratos firmados en una base de conocimiento estructurada, con búsqueda semántica, grafo de partidas similares y trazabilidad completa al proyecto de origen.",
    audience: "Direcciones de estudios y de compras de constructoras",
    features: [
      {
        title: "Indexación automática al ganar obra",
        description:
          "Cada vez que una obra pasa a ganada, el BC3 se indexa solo. Sin trabajo manual, sin formularios.",
      },
      {
        title: "Búsqueda por significado",
        description:
          "Embeddings semánticos sobre cada partida: encuentra '«mortero M-5»' aunque la hayas guardado como '«mortero de agarre cemento 1:6»'.",
      },
      {
        title: "Grafo de partidas similares",
        description:
          "Visualiza el universo de tus precios como una red: nodos por familia, aristas por similitud. Detecta dispersión y outliers de un vistazo.",
      },
      {
        title: "Trazabilidad al proyecto original",
        description:
          "Cada precio histórico se puede abrir hasta su BC3 de origen, su capítulo, su contrato adjudicado y la fecha exacta.",
      },
      {
        title: "Ajuste IPC automático",
        description:
          "Cuando reutilizas un precio histórico, el motor aplica un factor de actualización temporal y lo deja registrado en el log de ajustes.",
      },
    ],
    howItWorks: [
      {
        title: "Sube tus BC3 históricos",
        description: "Por interfaz o conectándolos a tu Presto. También puedes empezar de cero y dejar que el histórico se llene a medida que ganas obras.",
      },
      {
        title: "Indexación con embeddings",
        description: "Cada partida se convierte en un vector de 1024 dimensiones que captura su significado, no solo sus palabras.",
      },
      {
        title: "Clusterización semántica",
        description: "Partidas equivalentes (con vocabularios distintos) se agrupan automáticamente y dan precio medio + dispersión + tendencia temporal.",
      },
      {
        title: "Consulta cuando lo necesites",
        description: "Búsqueda libre, navegación por grafo o llamada desde el módulo de Licitación al estimar un nuevo presupuesto.",
      },
    ],
    faqs: [
      {
        question: "¿Y si mi histórico está en Excel?",
        answer:
          "Constrik acepta Excel exportado de Presto o BC3 estándar. Lo importante es que cada partida tenga código, descripción, unidad y precio. Lo demás (medición, fechas, contrato) lo enriquece el sistema.",
      },
      {
        question: "¿Cuántas obras hacen falta para que sea útil?",
        answer:
          "Desde la primera. Pero la utilidad crece de forma no lineal: con 10 obras indexadas ya tienes match en partidas comunes; con 50 cubres el grueso del catálogo de capítulos.",
      },
      {
        question: "¿Puedo usar BBDDs públicas para complementar?",
        answer:
          "Sí. El motor se integra con BDDs oficiales (Andalucía, Extremadura, etc.) marcando esas referencias como externas. Nunca se mezclan con tu histórico propio.",
      },
    ],
    keywords: [
      "base de datos precios construcción",
      "histórico BC3",
      "búsqueda semántica precios",
      "grafo de precios obras",
      "BBDD constructora",
    ],
  },
  {
    slug: "interferencias",
    name: "Detector de Interferencias IFC",
    shortName: "Interferencias",
    category: "BIM",
    headline: "Detección de interferencias IFC sin falsos positivos",
    tagline:
      "Comparación geométrica real entre disciplinas IFC con mesh-clash FCL. De cada 100 colisiones que detecta, más de 95 son reales.",
    description:
      "Constrik combina ifcOpenShell + FCL mesh-clash para detectar interferencias geométricas reales entre disciplinas IFC. El uniform grid 3D filtra candidatos y la comprobación malla a malla descarta los falsos positivos típicos del clash AABB-only.",
    audience: "Jefes de obra, BIM managers y coordinadores de instalaciones",
    features: [
      {
        title: "Mesh-clash real, no bounding boxes",
        description:
          "Comparamos las mallas triangulares de cada elemento, no su caja envolvente. Una tubería paralela a un muro a 30 cm ya no aparece como colisión.",
      },
      {
        title: "Severidad por ratio de solape",
        description:
          "Cada clash se ordena por overlap_ratio = solape / min(volumen_a, volumen_b). Los críticos suben arriba, los rozamientos quedan abajo.",
      },
      {
        title: "Bucketing por cota Z",
        description:
          "Cuando estructura y MEP usan nombres de planta distintos («EST-P0» vs «MM+8000»), el clash detector los reconcilia por su cota real.",
      },
      {
        title: "Filtro de elementos lineales",
        description:
          "Tuberías y conductos largos con AABB enorme ya no generan clashes falsos contra muros paralelos. Filtrado automático por aspect ratio.",
      },
      {
        title: "Visor 3D integrado",
        description:
          "Cada clash se localiza en el modelo con un clic: cámara enfocada en el conflicto, elementos involucrados resaltados, resto del modelo atenuado.",
      },
    ],
    howItWorks: [
      {
        title: "Sube los IFC por disciplina",
        description: "Estructura, arquitectura y MEP en archivos separados o consolidado. Constrik los unifica en un modelo único.",
      },
      {
        title: "Broad phase con grid 3D",
        description: "Uniform 3D grid de celdas de 2 m reduce los O(N²) pares a O(N) candidatos antes de comparar geometrías.",
      },
      {
        title: "Narrow phase con FCL",
        description: "FCL hace mesh-to-mesh real sobre los candidatos. Confirmed vs candidate_aabb te dice cuáles son colisión geométrica probada.",
      },
      {
        title: "Revisa por severidad",
        description: "Lista priorizada de clashes con cota Z, volumen y ratio. Mostrar/ocultar en el visor con un clic.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántos falsos positivos da?",
        answer:
          "Sobre un dataset real de 547.000 pares candidatos producimos 14.000 clashes AABB, de los cuales 710 son confirmados por FCL. Es decir, menos del 5 % de falsos positivos contra el clash AABB-only tradicional.",
      },
      {
        question: "¿Qué archivos IFC funcionan?",
        answer:
          "IFC 2x3 e IFC4 (la mayoría de IFCs reales). Para modelos con elementos rotados respecto al norte, usamos coordenadas mundo para que el AABB siga siendo válido.",
      },
      {
        question: "¿Se ejecuta en mi máquina o en la nube?",
        answer:
          "En la nube. Subes el IFC, lanzas el job y polleas el estado. Un modelo de 16.500 elementos se procesa en ±5-7 minutos.",
      },
    ],
    keywords: [
      "detección interferencias IFC",
      "clash detection BIM",
      "FCL mesh clash",
      "coordinación BIM construcción",
      "colisiones IFC instalaciones estructura",
    ],
  },
  {
    slug: "planos",
    name: "Análisis Automático de Planos PDF",
    shortName: "Planos",
    category: "BIM",
    headline: "Lee, mide y clasifica tus planos sin abrir el AutoCAD",
    tagline:
      "Sube el PDF de planos. Constrik clasifica cada página, detecta la escala, te deja medir con el ratón y extrae los datos estructurados que necesitas para presupuestar.",
    description:
      "Constrik combina Claude Vision con un visor PDF interactivo para clasificar páginas de proyecto (planta, sección, cuadro de pilares…), proponer escala automática y permitir medición a escala real desde el navegador.",
    audience: "Jefes de obra, jefes de estudios y BIM managers que trabajan con planos PDF",
    features: [
      {
        title: "Clasificación automática de páginas",
        description:
          "Cada página del PDF se etiqueta: planta, sección, cuadro de pilares, cimentación, detalle constructivo, etc. 21 categorías reconocidas.",
      },
      {
        title: "Detección de escala por IA",
        description:
          "Haiku Vision lee el cajetín y propone la escala (1:50, 1:100…). Cuando no la encuentra, no inventa: pide confirmación humana.",
      },
      {
        title: "Calibración con verificación humana",
        description:
          "Picas dos puntos del plano, introduces la cota real y queda calibrado. Toda calibración exige validación humana, las sugerencias IA quedan en ámbar.",
      },
      {
        title: "Medición a escala real",
        description:
          "Una vez calibrado, mides distancias con el ratón sobre el PDF y obtienes el valor en metros directamente.",
      },
      {
        title: "Extracción de tablas estructurales",
        description:
          "Cuadros de pilares: Sonnet Vision lee filas {pilar, planta, sección, material} y las exporta estructuradas para cruzar con el BC3 y el IFC.",
      },
    ],
    howItWorks: [
      {
        title: "Sube el PDF completo",
        description: "No hace falta separar por disciplina ni recortar páginas. Constrik clasifica todo en una pasada.",
      },
      {
        title: "Detección de escala",
        description: "Para cada página relevante, la IA propone escala. Tú validas con una cota real conocida.",
      },
      {
        title: "Mide o extrae",
        description: "Lightbox interactivo con tres modos: mover, calibrar, medir. Toolbar siempre visible.",
      },
      {
        title: "Conecta con tu BC3",
        description: "Las medidas tomadas y las tablas extraídas se cruzan con el presupuesto en el módulo de Auditoría.",
      },
    ],
    faqs: [
      {
        question: "¿Y si el plano no tiene cajetín visible o la escala no aparece?",
        answer:
          "La IA prefiere decir «no lo sé» antes que inventar. En ese caso te muestra que no hay sugerencia y calibras manualmente picando dos puntos y dando la cota real.",
      },
      {
        question: "¿Funciona con planos escaneados o solo nativos?",
        answer:
          "Funciona con ambos. Para escaneos, la calidad de la calibración depende de que se vea bien una cota o referencia métrica conocida.",
      },
      {
        question: "¿Cuánto cuesta procesar un PDF?",
        answer:
          "La clasificación cuesta unos pocos céntimos por página (Haiku Vision). La extracción de tablas, solo sobre las páginas que la requieren. Para un proyecto medio (40-60 páginas), suele rondar 1 €.",
      },
    ],
    keywords: [
      "lector planos PDF IA",
      "calibración escala plano",
      "medición sobre plano",
      "extracción cuadro de pilares",
      "Claude Vision construcción",
    ],
  },
  {
    slug: "planificacion",
    name: "Planificador IA Lean y Gantt",
    shortName: "Planificación",
    category: "Obra",
    headline: "Planning y costes indirectos que se ajustan solos",
    tagline:
      "Planning por oficios con reglas de precedencia y estimador de costes indirectos por IA. El cronograma y el GG/BI no son hojas Excel paralelas — viven el uno del otro.",
    description:
      "Constrik combina un planificador por oficios con reglas de precedencia configurables y un estimador de costes indirectos basado en IA, todo conectado al BC3 de la obra para que cualquier cambio se refleje en ambos lados.",
    audience: "Jefes de obra, planificadores y direcciones de producción",
    features: [
      {
        title: "Planning por oficios, no por partidas",
        description:
          "El Gantt se construye al nivel de detalle que usa la obra: oficios y zonas, con reglas de precedencia configurables por constructora.",
      },
      {
        title: "Estimación IA de costes indirectos",
        description:
          "Sonnet 4 con tu base de conocimiento estima personal de obra, instalaciones, ensayos y legalizaciones según el tipo y tamaño del proyecto.",
      },
      {
        title: "Conexión bidireccional con el BC3",
        description:
          "Si cambia el alcance del presupuesto, el planning lo detecta. Si la obra se alarga, el GG/BI se recalcula.",
      },
      {
        title: "Inserción de semanas y desplazamientos",
        description:
          "Mueves un oficio una semana y todas las dependencias se reajustan automáticamente. Sin tener que tocar 30 celdas en Excel.",
      },
      {
        title: "Versionable y comparable",
        description:
          "Cada cambio queda registrado. Comparas planning ofertado vs planning real vs planning revisado.",
      },
    ],
    howItWorks: [
      {
        title: "Carga el presupuesto",
        description: "Constrik parte del BC3 ya asignado a oficios en el módulo de Licitación.",
      },
      {
        title: "Define zonas y reglas",
        description: "Por defecto, 29 reglas de precedencia entre oficios. Las ajustas a las especificidades de tu constructora.",
      },
      {
        title: "Genera el cronograma",
        description: "Plan propone una secuencia inicial respetando las reglas. Tú ajustas semanas y zonas con clics.",
      },
      {
        title: "Estima los indirectos",
        description: "La IA propone GG/BI desglosados con argumentario por línea. Tú ajustas y validas.",
      },
    ],
    faqs: [
      {
        question: "¿Lo cruzo con MS Project o Primavera?",
        answer:
          "Constrik exporta CSV y XML para que tu equipo lo abra en MS Project si lo necesita. La planificación se hace dentro de Constrik para que sea coherente con presupuesto y obra.",
      },
      {
        question: "¿Cómo estima los costes indirectos la IA?",
        answer:
          "Cruza características de la obra (tipología, m², duración, ubicación) con la base de conocimiento de tu constructora. El argumentario explica qué supuso para cada partida.",
      },
      {
        question: "¿Puedo arrancar sin tener histórico cargado?",
        answer:
          "Sí. Las reglas de precedencia vienen pre-cargadas con 29 dependencias entre oficios típicos de obra de edificación. Las afinas con el uso.",
      },
    ],
    keywords: [
      "planning de obra IA",
      "estimador costes indirectos",
      "Gantt por oficios",
      "GG BI construcción",
      "planificador obra constructora",
    ],
  },
  {
    slug: "oficios",
    name: "Asignador de Oficios con IA",
    shortName: "Oficios",
    category: "Estudios",
    headline: "Convierte un BC3 en oficios contratables en minutos",
    tagline:
      "Cada partida del presupuesto mapeada al oficio que la ejecuta, con catálogo propio por constructora y asignación automática por IA. Listo para pedir ofertas.",
    description:
      "Constrik clasifica automáticamente cada partida del BC3 al oficio responsable, usando un catálogo de oficios per-organización y Sonnet 4 sobre el conocimiento de tu constructora.",
    audience: "Jefes de estudios, departamento de compras y dirección de subcontratación",
    features: [
      {
        title: "Catálogo de oficios propio",
        description:
          "26 oficios pre-cargados de construcción española. Los renombras, agrupas o amplías según cómo trabaje tu constructora.",
      },
      {
        title: "Auto-asignación por IA",
        description:
          "Sonnet 4 lee descripción, código y unidad de cada partida y la mapea al oficio. Procesa lotes de 200 partidas en paralelo.",
      },
      {
        title: "Base de conocimiento por categoría",
        description:
          "Reglas específicas de tu constructora: «las ayudas a fontanería las hace albañilería», «el sellado de juntas lo hace pintura». Se inyecta en el prompt.",
      },
      {
        title: "Tabla de validación rápida",
        description:
          "Vista tabla con la asignación propuesta. Cambias en bloque las que estén mal con menú contextual. Sin abrir partida a partida.",
      },
      {
        title: "Resultados persistentes e incrementales",
        description:
          "Si la IA falla a mitad o cancelas, lo procesado queda guardado. Re-ejecutar empieza de cero limpio sin estados intermedios.",
      },
    ],
    howItWorks: [
      {
        title: "Sube el BC3",
        description: "Constrik parsea y prepara la jerarquía capítulo > subcapítulo > partida.",
      },
      {
        title: "Lanza auto-asignación",
        description: "Por defecto 3 lotes en paralelo, 200 partidas por lote. Un BC3 de 5.000 líneas tarda ±5 minutos.",
      },
      {
        title: "Revisa la propuesta",
        description: "Vista tabla con filtros por oficio, capítulo y partidas sin asignar. Reasignas con un clic.",
      },
      {
        title: "Pide ofertas a subcontratas",
        description: "Cada oficio queda listo para conectar con tu directorio y mandar petición de oferta.",
      },
    ],
    faqs: [
      {
        question: "¿Tengo que definir oficios desde cero?",
        answer:
          "No. Cada organización arranca con 26 oficios pre-cargados (albañilería, electricidad, fontanería, climatización, carpintería, etc.). Los renombras, agrupas o eliminas según trabajes.",
      },
      {
        question: "¿Cómo afina la IA al estilo de mi constructora?",
        answer:
          "La pestaña «Asignación de oficios» de la base de conocimiento te deja escribir las reglas propias en lenguaje natural. La IA las usa en cada asignación.",
      },
      {
        question: "¿Y si una partida no se ajusta a ningún oficio?",
        answer:
          "Queda como «sin asignar» y aparece destacada para que la revises. La IA prefiere no asignar antes que forzar un oficio equivocado.",
      },
    ],
    keywords: [
      "asignación oficios BC3",
      "clasificación partidas presupuesto",
      "catálogo oficios constructora",
      "IA presupuesto construcción",
      "auto-assign oficios",
    ],
  },
  {
    slug: "auditoria-bc3",
    name: "Auditoría de BC3 con IA",
    shortName: "Auditoría BC3",
    category: "Estudios",
    headline: "Detecta errores y huecos antes de firmar la oferta",
    tagline:
      "Auditoría por reglas y por IA sobre el BC3, y triangulación cruzada entre presupuesto, modelo IFC y planos PDF. Lo que falta o no encaja, salta a la vista.",
    description:
      "Constrik combina siete comprobaciones automáticas sobre el BC3, una auditoría IA por capítulos en ocho dimensiones (ejecutar, coordinar, proteger, legalizar, ensayar, montar, desmontar, entregar) y un reconciliador que detecta gaps entre el presupuesto, el modelo IFC y los planos PDF.",
    audience: "Jefes de estudios, jefes de obra y dirección de calidad",
    features: [
      {
        title: "7 comprobaciones automáticas del BC3",
        description:
          "Mediciones a cero, unidades mal informadas, descripciones vacías, capítulos huérfanos, líneas de medición ausentes. Reglas deterministas, coste 0.",
      },
      {
        title: "Auditoría IA por capítulos",
        description:
          "Sonnet 4 audita el BC3 capítulo a capítulo en 8 dimensiones. Detecta partidas faltantes que las reglas no pueden ver.",
      },
      {
        title: "Triangulación BC3 ↔ IFC ↔ Planos",
        description:
          "El reconciliador agrupa entidades por (tipo, material, sección) y detecta lo que está en una fuente y falta en otra.",
      },
      {
        title: "Hallazgos accionables, no avisos genéricos",
        description:
          "Cada finding lleva capítulo, severidad, atributos comparados y deeplink al plano o al elemento IFC concreto.",
      },
      {
        title: "Re-auditoría incremental",
        description:
          "Detecta cuándo el presupuesto ha cambiado tras la última auditoría y propone volver a ejecutar solo lo afectado.",
      },
    ],
    howItWorks: [
      {
        title: "Lanza las reglas",
        description: "Comprobaciones deterministas sobre el BC3. Coste 0. Resultado en segundos.",
      },
      {
        title: "Audita con IA por capítulos",
        description: "Sonnet 4 procesa cada capítulo en paralelo (max 3 llamadas simultáneas) buscando lo que falta en las 8 dimensiones.",
      },
      {
        title: "Triangula con IFC y planos",
        description: "Si has subido IFC y/o planos PDF, el reconciliador detecta divergencias y gaps cross-source.",
      },
      {
        title: "Revisa los hallazgos",
        description: "Lista priorizada por severidad con justificación, atributos comparados y enlace al elemento concreto.",
      },
    ],
    faqs: [
      {
        question: "¿Y si solo tengo BC3, sin IFC ni planos?",
        answer:
          "Constrik funciona igual con solo BC3: 7 reglas + auditoría IA por capítulos. La triangulación cross-source se activa solo cuando hay más de una fuente.",
      },
      {
        question: "¿Cuánto cuesta una auditoría IA completa?",
        answer:
          "Para un BC3 medio (10-15 capítulos) está por debajo de 1 € en coste de modelo. La parte de reglas es gratis siempre.",
      },
      {
        question: "¿Reconoce errores típicos del FIEBDC?",
        answer:
          "Sí. Las 7 reglas incluyen unit_mismatch, zero_quantity, missing_mandatory, duplicate, empty_chapter, no_description y no_measurement_lines, alineadas con los errores que más se repiten en BC3 reales.",
      },
    ],
    keywords: [
      "auditoría BC3 IA",
      "validación presupuesto construcción",
      "triangulación BIM presupuesto",
      "detector errores BC3",
      "reconciliación IFC presupuesto",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
