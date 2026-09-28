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

export type Screenshot = {
  /** Ruta bajo /public */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** false si la captura NO es del estudio de ejemplo (no lleva la nota de datos ficticios) */
  example?: boolean;
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
  /** Capturas reales del producto (estudio de ejemplo, datos ficticios). La primera va en el hero. */
  screenshots: Screenshot[];
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
      "Constrik automatiza el ciclo completo de costes directos en licitaciones: lectura del BC3, asignación de oficios por IA, estimación de precios con histórico propio y BDDs públicas, y comparativa automática de ofertas de subcontratas.",
    audience: "Jefes de estudios, presupuestadores y dirección de estudios en constructoras",
    features: [
      {
        title: "Lectura del BC3 sin pérdida",
        description:
          "Lector de BC3 propio que conserva mediciones detalladas, pliegos y descripciones largas. Tolera archivos mal formados.",
      },
      {
        title: "Asignación de oficios por IA",
        description:
          "Cada partida se mapea automáticamente al oficio que la ejecuta según el catálogo de tu constructora. Validas en una tabla, no manualmente partida a partida.",
      },
      {
        title: "Estimación con tu histórico",
        description:
          "Constrik compara cada partida con partidas equivalentes de tus obras anteriores. Precio actualizado con el IPC y trazable hasta su origen.",
      },
      {
        title: "Comparativa de ofertas automatizada",
        description:
          "Petición a subcontratas, lectura automática de las ofertas que llegan (PDF o Excel), encaje con las partidas del BC3 y comparativa con tu estimación previa.",
      },
      {
        title: "Argumentario por partida",
        description:
          "Cada precio sugerido lleva el razonamiento detrás: referencias usadas, ajustes aplicados y nivel de confianza explícito.",
      },
      {
        title: "Las cifras las valida tu equipo",
        description:
          "La IA propone, tu equipo valida. Nada se aplica al presupuesto sin que un humano lo confirme. Auditable de principio a fin.",
      },
    ],
    howItWorks: [
      {
        title: "Sube el BC3",
        description: "En segundos, Constrik lee el presupuesto, detecta errores de medición y prepara la jerarquía de capítulos y partidas.",
      },
      {
        title: "IA propone oficios y precios",
        description: "En minutos, cada partida tiene su oficio y un precio estimado contra tu histórico y las bases de precios públicas.",
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
          "Primero buscamos en tu histórico propio (obras ganadas y presupuestadas). Si no hay coincidencia, contrastamos con BDDs públicas españolas (Andalucía, Extremadura, etc.). Como último recurso, la IA propone un rango orientativo marcado como tal.",
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
    screenshots: [
      {
        src: "/img/producto/licitacion-costes.jpg",
        alt: "Costes directos de un estudio agrupados por oficio, con el origen de cada precio",
        width: 1486,
        height: 696,
      },
      {
        src: "/img/producto/licitacion-ofertas.jpg",
        alt: "Petición de oferta a subcontratas generada desde el comparativo de un oficio",
        width: 1486,
        height: 696,
      },
    ],
  },
  {
    slug: "memoria",
    name: "Base de Datos Inteligente de Precios BC3",
    shortName: "Base de Datos de Precios",
    category: "Conocimiento",
    headline: "Tu histórico de precios, vivo y buscable",
    tagline:
      "Una base de datos viva de tus presupuestos y contratos firmados. Encuentra partidas equivalentes aunque estén descritas de otra forma: pregúntale qué pagaste por algo y te lo cuenta.",
    description:
      "Constrik transforma tus BC3 históricos y contratos firmados en una base de conocimiento estructurada, con búsqueda por significado, mapa de partidas similares y trazabilidad completa al proyecto de origen.",
    audience: "Direcciones de estudios y de compras de constructoras",
    features: [
      {
        title: "Se alimenta solo al ganar obra",
        description:
          "Cada vez que una obra pasa a ganada, su BC3 se incorpora al histórico. Sin trabajo manual, sin formularios.",
      },
      {
        title: "Búsqueda por significado",
        description:
          "Busca por lo que la partida es, no por cómo está escrita: encuentra '«mortero M-5»' aunque la hayas guardado como '«mortero de agarre cemento 1:6»'.",
      },
      {
        title: "Mapa de partidas similares",
        description:
          "Visualiza tus precios como una red de partidas emparentadas. Detecta de un vistazo la dispersión y los precios que se salen de lo normal.",
      },
      {
        title: "Trazabilidad al proyecto original",
        description:
          "Cada precio histórico se puede abrir hasta su BC3 de origen, su capítulo, su contrato adjudicado y la fecha exacta.",
      },
      {
        title: "Ajuste IPC automático",
        description:
          "Cuando reutilizas un precio histórico, Constrik lo actualiza a fecha de hoy y deja registrado el ajuste aplicado.",
      },
    ],
    howItWorks: [
      {
        title: "Sube tus BC3 históricos",
        description: "Por interfaz o conectándolos a tu Presto. También puedes empezar de cero y dejar que el histórico se llene a medida que ganas obras.",
      },
      {
        title: "Constrik entiende cada partida",
        description: "Cada partida se analiza por su significado, no solo por sus palabras.",
      },
      {
        title: "Agrupa las equivalentes",
        description: "Partidas equivalentes (con vocabularios distintos) se agrupan automáticamente y dan precio medio + dispersión + tendencia temporal.",
      },
      {
        title: "Consulta cuando lo necesites",
        description: "Búsqueda libre, navegación por el mapa de partidas o consulta directa desde Licitaciones al estimar un nuevo presupuesto.",
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
          "Desde la primera. Pero la utilidad crece de forma no lineal: con 10 obras cargadas ya encuentras referencias en las partidas comunes; con 50 cubres el grueso del catálogo de capítulos.",
      },
      {
        question: "¿Puedo usar BBDDs públicas para complementar?",
        answer:
          "Sí. Constrik se integra con bases de precios oficiales (Andalucía, Extremadura, etc.) marcando esas referencias como externas. Nunca se mezclan con tu histórico propio.",
      },
    ],
    keywords: [
      "base de datos precios construcción",
      "histórico BC3",
      "buscador de precios construcción",
      "histórico de precios obras",
      "BBDD constructora",
    ],
    screenshots: [
      {
        src: "/img/producto/precios-referencias.jpg",
        alt: "Rango de precio de una partida con las referencias de las que sale",
        width: 1486,
        height: 696,
      },
    ],
  },
  {
    slug: "interferencias",
    name: "Detector de Interferencias IFC",
    shortName: "Interferencias",
    category: "BIM",
    headline: "Detección de interferencias IFC sin falsos positivos",
    tagline:
      "Comparación geométrica real entre las disciplinas del modelo IFC. De cada 100 colisiones que detecta, más de 95 son reales.",
    description:
      "Constrik detecta interferencias geométricas reales entre las disciplinas del modelo IFC. Compara la forma exacta de cada elemento, no su caja envolvente, y descarta los falsos positivos habituales.",
    audience: "Jefes de obra, BIM managers y coordinadores de instalaciones",
    features: [
      {
        title: "Geometría real, no cajas envolventes",
        description:
          "Comparamos la forma exacta de cada elemento, no su caja envolvente. Una tubería paralela a un muro a 30 cm ya no aparece como colisión.",
      },
      {
        title: "Ordenadas por gravedad",
        description:
          "Cada interferencia se ordena según cuánto se solapan los elementos. Las críticas suben arriba, los roces quedan abajo.",
      },
      {
        title: "Plantas reconciliadas por cota",
        description:
          "Cuando estructura e instalaciones usan nombres de planta distintos («EST-P0» vs «MM+8000»), Constrik los empareja por su cota real.",
      },
      {
        title: "Filtro de elementos lineales",
        description:
          "Tuberías y conductos largos ya no generan colisiones falsas contra muros paralelos. Se filtran automáticamente.",
      },
      {
        title: "Visor 3D integrado",
        description:
          "Cada interferencia se localiza en el modelo con un clic: cámara enfocada en el conflicto, elementos involucrados resaltados, resto del modelo atenuado.",
      },
    ],
    howItWorks: [
      {
        title: "Sube los IFC por disciplina",
        description: "Estructura, arquitectura e instalaciones, en archivos separados o en uno solo. Constrik los unifica en un modelo único.",
      },
      {
        title: "Primer filtro por proximidad",
        description: "Constrik descarta primero los elementos que están lejos entre sí, para comparar solo los que pueden chocar.",
      },
      {
        title: "Comprobación geométrica exacta",
        description: "Sobre los candidatos se compara la forma real de cada elemento. Ves cuáles son colisión confirmada y cuáles solo cercanía.",
      },
      {
        title: "Revisa por severidad",
        description: "Lista priorizada de interferencias con su planta, cota y solape. Mostrar/ocultar en el visor con un clic.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántos falsos positivos da?",
        answer:
          "En un modelo real, la detección tradicional por cajas envolventes daba 14.000 colisiones. Con la comprobación geométrica exacta quedaron 710 confirmadas: el resto eran falsos positivos.",
      },
      {
        question: "¿Qué archivos IFC funcionan?",
        answer:
          "IFC 2x3 e IFC4 (la mayoría de IFCs reales). Para modelos con elementos rotados respecto al norte, la detección sigue siendo válida.",
      },
      {
        question: "¿Se ejecuta en mi máquina o en la nube?",
        answer:
          "En la nube. Subes el IFC, lanzas el análisis y sigues trabajando mientras termina.",
      },
    ],
    keywords: [
      "detección interferencias IFC",
      "clash detection BIM",
      "colisiones BIM",
      "coordinación BIM construcción",
      "colisiones IFC instalaciones estructura",
    ],
    screenshots: [
      {
        src: "/img/producto/interferencias-visor.jpg",
        alt: "Visor 3D enfocado en una interferencia entre estructura e instalaciones",
        width: 1486,
        height: 696,
      },
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
      "Constrik combina lectura de planos por IA con un visor PDF interactivo para clasificar páginas de proyecto (planta, sección, cuadro de pilares…), proponer escala automática y permitir medición a escala real desde el navegador.",
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
          "La IA lee el cajetín y propone la escala (1:50, 1:100…). Cuando no la encuentra, no inventa: pide confirmación humana.",
      },
      {
        title: "Calibración con verificación humana",
        description:
          "Marcas dos puntos del plano, introduces la cota real y queda calibrado. Toda calibración exige validación humana, las sugerencias IA quedan en ámbar.",
      },
      {
        title: "Medición a escala real",
        description:
          "Una vez calibrado, mides distancias con el ratón sobre el PDF y obtienes el valor en metros directamente.",
      },
      {
        title: "Extracción de tablas estructurales",
        description:
          "Cuadros de pilares: la IA lee cada fila (pilar, planta, sección, material) y la deja en una tabla lista para cruzar con el BC3 y el IFC.",
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
        description: "Visor interactivo con tres modos: mover, calibrar y medir.",
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
          "La IA prefiere decir «no lo sé» antes que inventar. En ese caso te muestra que no hay sugerencia y calibras manualmente marcando dos puntos y dando la cota real.",
      },
      {
        question: "¿Funciona con planos escaneados o solo nativos?",
        answer:
          "Funciona con ambos. Para escaneos, la calidad de la calibración depende de que se vea bien una cota o referencia métrica conocida.",
      },
    ],
    keywords: [
      "lector planos PDF IA",
      "calibración escala plano",
      "medición sobre plano",
      "extracción cuadro de pilares",
      "análisis de planos con IA",
    ],
    screenshots: [
      {
        src: "/img/producto/planos-clasificados.jpg",
        alt: "Páginas de los planos del proyecto clasificadas por tipo",
        width: 1502,
        height: 712,
      },
    ],
  },
  {
    slug: "planificacion",
    name: "Planificador IA Lean y Gantt",
    shortName: "Planificación",
    category: "Obra",
    headline: "Planning y costes indirectos que se ajustan solos",
    tagline:
      "Planning por oficios con reglas de precedencia y estimador de costes indirectos. El cronograma y el GG/BI no son hojas Excel paralelas — viven el uno del otro.",
    description:
      "Constrik combina un planificador por oficios con reglas de precedencia configurables y un estimador de costes indirectos, todo conectado al BC3 de la obra para que cualquier cambio se refleje en ambos lados.",
    audience: "Jefes de obra, planificadores y direcciones de producción",
    features: [
      {
        title: "Planning por oficios, no por partidas",
        description:
          "El Gantt se construye al nivel de detalle que usa la obra: oficios y zonas, con reglas de precedencia configurables por constructora.",
      },
      {
        title: "Estimación de costes indirectos",
        description:
          "Constrik estima personal de obra, instalaciones, ensayos y legalizaciones con las reglas y tarifas de tu constructora, según el tipo, tamaño y plazo del proyecto.",
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
        description: "Constrik propone en segundos una secuencia inicial respetando las reglas. Tú ajustas semanas y zonas con clics.",
      },
      {
        title: "Estima los indirectos",
        description: "Constrik propone los indirectos desglosados, con la regla aplicada en cada línea. Tú ajustas y validas.",
      },
    ],
    faqs: [
      {
        question: "¿Lo cruzo con MS Project o Primavera?",
        answer:
          "Constrik exporta CSV y XML para que tu equipo lo abra en MS Project si lo necesita. La planificación se hace dentro de Constrik para que sea coherente con presupuesto y obra.",
      },
      {
        question: "¿Cómo se estiman los costes indirectos?",
        answer:
          "Cruza características de la obra (tipología, m², duración, ubicación) con la base de conocimiento de tu constructora. Cada línea indica qué regla y qué tarifa se han aplicado.",
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
    screenshots: [
      {
        src: "/img/producto/planificacion-planning.jpg",
        alt: "Planning de obra por zonas y oficios, semana a semana",
        width: 1486,
        height: 696,
      },
      {
        src: "/img/producto/planificacion-indirectos.jpg",
        alt: "Costes indirectos de la obra desglosados por concepto, con la regla aplicada",
        width: 1486,
        height: 696,
      },
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
      "Constrik clasifica automáticamente cada partida del BC3 al oficio responsable, usando el catálogo de oficios y el conocimiento propio de tu constructora.",
    audience: "Jefes de estudios, departamento de compras y dirección de subcontratación",
    features: [
      {
        title: "Catálogo de oficios propio",
        description:
          "Catálogo de oficios de construcción española pre-cargado. Los renombras, agrupas o amplías según cómo trabaje tu constructora.",
      },
      {
        title: "Asignación automática por IA",
        description:
          "La IA lee descripción, código y unidad de cada partida y le asigna su oficio. Un presupuesto entero, en minutos.",
      },
      {
        title: "Base de conocimiento por categoría",
        description:
          "Reglas específicas de tu constructora: «las ayudas a fontanería las hace albañilería», «el sellado de juntas lo hace pintura». La IA las aplica en cada asignación.",
      },
      {
        title: "Tabla de validación rápida",
        description:
          "Vista tabla con la asignación propuesta. Cambias en bloque las que estén mal con menú contextual. Sin abrir partida a partida.",
      },
      {
        title: "No se pierde el trabajo hecho",
        description:
          "Si cancelas a mitad, lo procesado queda guardado. Y tus ajustes manuales no se tocan al volver a analizar.",
      },
    ],
    howItWorks: [
      {
        title: "Sube el BC3",
        description: "Constrik lo lee y prepara la jerarquía capítulo > subcapítulo > partida.",
      },
      {
        title: "Lanza la asignación automática",
        description: "Un BC3 de 5.000 líneas tarda unos 5 minutos.",
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
          "No. Cada constructora arranca con un catálogo pre-cargado (albañilería, electricidad, fontanería, climatización, carpintería, etc.). Los renombras, agrupas o eliminas según trabajes.",
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
      "asignación automática de oficios",
    ],
    screenshots: [
      {
        src: "/img/producto/oficios-asignacion.jpg",
        alt: "Partidas del presupuesto asignadas a oficios",
        width: 1486,
        height: 696,
      },
      {
        src: "/img/producto/oficios-descompuestos.jpg",
        alt: "Descompuestos de una partida, línea a línea",
        width: 1502,
        height: 646,
      },
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
      "Constrik combina siete comprobaciones automáticas sobre el BC3, una auditoría IA por capítulos en ocho dimensiones (ejecutar, coordinar, proteger, legalizar, ensayar, montar, desmontar, entregar) y un cruce que detecta lo que no cuadra entre el presupuesto, el modelo IFC y los planos PDF.",
    audience: "Jefes de estudios, jefes de obra y dirección de calidad",
    features: [
      {
        title: "7 comprobaciones automáticas del BC3",
        description:
          "Mediciones a cero, unidades mal informadas, descripciones vacías, capítulos huérfanos, líneas de medición ausentes. Resultado inmediato.",
      },
      {
        title: "Auditoría IA por capítulos",
        description:
          "La IA audita el BC3 capítulo a capítulo en 8 dimensiones. Detecta partidas faltantes que las reglas no pueden ver.",
      },
      {
        title: "Triangulación BC3 ↔ IFC ↔ Planos",
        description:
          "Constrik agrupa los elementos por tipo, material y sección, y detecta lo que está en una fuente y falta en otra.",
      },
      {
        title: "Hallazgos accionables, no avisos genéricos",
        description:
          "Cada hallazgo lleva capítulo, gravedad, datos comparados y enlace directo al plano o al elemento del modelo.",
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
        description: "Comprobaciones automáticas sobre el BC3. Resultado en segundos.",
      },
      {
        title: "Audita con IA por capítulos",
        description: "La IA revisa cada capítulo buscando lo que falta en las 8 dimensiones.",
      },
      {
        title: "Triangula con IFC y planos",
        description: "Si has subido IFC y/o planos PDF, Constrik detecta lo que no coincide entre ellas.",
      },
      {
        title: "Revisa los hallazgos",
        description: "Lista priorizada por gravedad con justificación, datos comparados y enlace al elemento concreto.",
      },
    ],
    faqs: [
      {
        question: "¿Y si solo tengo BC3, sin IFC ni planos?",
        answer:
          "Constrik funciona igual con solo BC3: 7 reglas + auditoría IA por capítulos. La triangulación se activa cuando hay más de una fuente.",
      },
      {
        question: "¿Cuánto tarda una auditoría completa?",
        answer:
          "Segundos. Tanto las comprobaciones automáticas como la auditoría por IA de un BC3 medio (10-15 capítulos).",
      },
      {
        question: "¿Reconoce errores típicos del FIEBDC?",
        answer:
          "Sí. Las 7 reglas cubren unidades incoherentes, mediciones a cero, campos obligatorios vacíos, partidas duplicadas, capítulos vacíos, partidas sin descripción y partidas sin líneas de medición: los errores que más se repiten en BC3 reales.",
      },
    ],
    keywords: [
      "auditoría BC3 IA",
      "validación presupuesto construcción",
      "triangulación BIM presupuesto",
      "detector errores BC3",
      "reconciliación IFC presupuesto",
    ],
    screenshots: [
      {
        src: "/img/producto/auditoria-hallazgos.jpg",
        alt: "Auditoría del presupuesto: incidencias priorizadas y mediciones que no cuadran",
        width: 1500,
        height: 704,
        example: false,
      },
      {
        src: "/img/producto/auditoria-presupuesto.jpg",
        alt: "Presupuesto BC3 leído por capítulos y partidas",
        width: 1486,
        height: 696,
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
