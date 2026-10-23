export const siteConfig = {
  name: "Stackss",
  title: "Stackss — Webs que venden y automatizaciones que ahorran tiempo",
  description:
    "Diseñamos y desarrollamos webs que convierten y automatizamos tareas con Python e IA para startups, pymes y agencias.",
  url: "https://stackss.xyz",
  locale: "es_ES",
}

export const announcementBanner = {
  message: "Nuevo: agentes de IA.",
  linkLabel: "Ver más",
  href: "/#solucion",
}

export const nav = {
  logo: "Stackss",
  links: [
    { label: "Servicios", href: "/#capacidades" },
    { label: "Proceso", href: "/#proceso" },
    { label: "FAQ", href: "/faq" },
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
  ],
  cta: { label: "Hablemos", href: "/#contacto" },
}

export const hero = {
  badge: "Desarrollo web + automatización con IA",
  title: "Haz crecer tu negocio. Automatiza lo repetitivo.",
  subtitle:
    "Ayudamos a startups, pymes y agencias a lanzar sitios que convierten y a quitarse de encima el trabajo repetitivo con automatizaciones en Python y agentes de IA.",
  primaryCta: { label: "Hablemos de tu proyecto", href: "#contacto" },
  secondaryCta: { label: "Ver qué hacemos", href: "#capacidades" },
  mockup: {
    browserTitle: "tuempresa.com",
    agentCardTitle: "Agente de IA",
    agentCardStatus: "Activo",
    agentMessages: [
      { from: "cliente", text: "¿Tenéis disponibilidad este jueves?" },
      { from: "agente", text: "Sí, tengo hueco a las 10:00 y a las 16:30. ¿Cuál prefieres?" },
    ],
  },
}

export const techMarquee = [
  "Next.js",
  "TypeScript",
  "Python",
  "OpenAI",
  "n8n",
  "Stripe",
  "Shopify",
  "WordPress",
  "Tailwind CSS",
  "PostgreSQL",
]

export const problem = {
  eyebrow: "El problema",
  title: "Lo que frena a la mayoría de negocios online",
  subtitle:
    "No es falta de esfuerzo: es que la web y los procesos no están diseñados para vender ni para escalar.",
  items: [
    {
      icon: "MousePointerClick",
      title: "Webs que no convierten",
      description:
        "Visitas que llegan y se van sin dejar un contacto ni una venta porque el sitio no explica bien el valor ni facilita la acción.",
    },
    {
      icon: "ListChecks",
      title: "Tareas manuales repetitivas",
      description:
        "Horas a la semana copiando datos, respondiendo lo mismo o montando informes a mano que podrían resolverse solos.",
    },
    {
      icon: "Unplug",
      title: "Herramientas desconectadas",
      description:
        "La web, el CRM, el WhatsApp y las hojas de cálculo no se hablan entre sí, así que la información se pierde o se duplica.",
    },
  ],
}

export const solution = {
  eyebrow: "La solución",
  title: "Cómo lo resolvemos",
  subtitle: "Tres piezas que combinamos según lo que tu negocio necesite.",
  blocks: [
    {
      icon: "LayoutTemplate",
      eyebrow: "Webs que venden",
      title: "Un sitio pensado para convertir, no solo para existir",
      description:
        "Landing pages, webs con blog y tiendas online con una estructura clara, carga rápida y llamadas a la acción que llevan a algo: una reserva, una compra, un contacto.",
      bullets: [
        "Diseño a medida, sin plantillas genéricas",
        "Rendimiento y SEO desde el primer commit",
        "Analítica para saber qué funciona",
      ],
      mockup: "browser",
    },
    {
      icon: "Workflow",
      eyebrow: "Automatizaciones con Python",
      title: "Que el trabajo repetitivo lo haga el software",
      description:
        "Scripts y flujos en Python que conectan tus herramientas, procesan datos y disparan acciones sin que nadie tenga que hacerlo a mano cada vez.",
      bullets: [
        "Integraciones entre tus apps actuales",
        "Procesos programados o activados por eventos",
        "Informes y alertas automáticos",
      ],
      mockup: "workflow",
    },
    {
      icon: "Bot",
      eyebrow: "Agentes de IA",
      title: "Un asistente que responde, filtra y resuelve por ti",
      description:
        "Agentes que atienden consultas, cualifican leads o dan soporte de primer nivel en tu web o WhatsApp, entrenados con el contexto de tu negocio.",
      bullets: [
        "Disponible 24/7 sin turnos ni esperas",
        "Conectado a tus datos reales, no a respuestas genéricas",
        "Escala a un humano cuando hace falta",
      ],
      mockup: "chat",
    },
  ],
}

export const capabilities = {
  eyebrow: "Servicios",
  title: "Qué puedes construir con nosotros",
  subtitle: "Desde una landing sencilla hasta un ecosistema de automatizaciones e IA.",
  items: [
    {
      icon: "LayoutTemplate",
      visual: "landing",
      title: "Landing pages",
      description: "Páginas de aterrizaje enfocadas en una sola acción: convertir visitas en clientes.",
      size: "md",
    },
    {
      icon: "Newspaper",
      visual: "blog",
      title: "Webs con blog",
      description: "Sitios corporativos con sección de contenido para captar tráfico orgánico.",
      size: "md",
    },
    {
      icon: "ShoppingCart",
      visual: "ecommerce",
      title: "Ecommerce",
      description: "Tiendas online con catálogo, pagos y gestión de pedidos listas para vender.",
      size: "md",
    },
    {
      icon: "Workflow",
      visual: "automation",
      title: "Automatizaciones",
      description: "Flujos en Python que eliminan tareas manuales y conectan tus sistemas.",
      size: "md",
    },
    {
      icon: "Bot",
      visual: "agent",
      title: "Agentes de IA",
      description: "Asistentes entrenados con tu información para atender, filtrar y resolver.",
      size: "lg",
    },
    {
      icon: "Plug",
      visual: "integrations",
      title: "Integraciones",
      description: "Conectamos APIs, CRM, WhatsApp y pasarelas de pago entre sí.",
      size: "lg",
    },
    {
      icon: "Wrench",
      visual: "maintenance",
      title: "Mantenimiento",
      description: "Actualizaciones, mejoras y soporte continuo una vez tu web está en producción.",
      size: "md",
    },
  ],
}

export const process = {
  eyebrow: "Proceso",
  title: "Cómo trabajamos",
  subtitle: "Un proceso claro, de principio a fin, sin sorpresas por el camino.",
  steps: [
    {
      number: "01",
      icon: "Search",
      title: "Descubrimiento",
      description:
        "Hablamos de tu negocio, tus objetivos y qué procesos te quitan más tiempo. Definimos el alcance real del proyecto.",
    },
    {
      number: "02",
      icon: "PenTool",
      title: "Diseño",
      description:
        "Diseñamos la estructura y la interfaz pensando en conversión, antes de escribir una sola línea de código final.",
    },
    {
      number: "03",
      icon: "Code2",
      title: "Desarrollo",
      description:
        "Construimos el sitio o la automatización con código propio, revisiones frecuentes y entregas incrementales.",
    },
    {
      number: "04",
      icon: "Rocket",
      title: "Lanzamiento y soporte",
      description:
        "Publicamos, medimos los primeros resultados y seguimos cerca para ajustar y dar soporte tras el lanzamiento.",
    },
  ],
}

export const faq = {
  title: "Preguntas frecuentes",
  subtitle: "Lo que más nos preguntan antes de empezar un proyecto.",
  items: [
    {
      question: "¿Cuánto tiempo tarda un proyecto?",
      answer:
        "Una landing page suele estar lista en 2-3 semanas. Una web con blog o un ecommerce puede llevar entre 4 y 8 semanas según el alcance. Las automatizaciones varían mucho según la complejidad: te damos un plazo concreto tras el descubrimiento inicial.",
    },
    {
      question: "¿Cómo funcionan los precios?",
      answer:
        "Trabajamos con presupuesto cerrado por proyecto, no por horas sueltas, para que sepas desde el principio qué vas a pagar. El precio depende del alcance: número de páginas, integraciones y complejidad de la automatización.",
    },
    {
      question: "¿Qué pasa después del lanzamiento?",
      answer:
        "Ofrecemos planes de mantenimiento para actualizaciones, mejoras y soporte continuo. No es obligatorio, pero la mayoría de clientes lo prefieren para no tener que preocuparse de nada técnico.",
    },
    {
      question: "¿Con qué tecnologías trabajáis?",
      answer:
        "Para webs usamos Next.js y herramientas como WordPress o Shopify cuando tiene más sentido para el proyecto. Para automatizaciones e IA trabajamos principalmente en Python, con integraciones a n8n, APIs externas y modelos como los de OpenAI.",
    },
    {
      question: "¿Qué es exactamente un agente de IA?",
      answer:
        "Es un asistente entrenado con la información de tu negocio que puede responder preguntas, cualificar clientes o resolver tareas de soporte de forma autónoma, en tu web o en canales como WhatsApp. No es un chatbot con respuestas fijas: entiende el contexto y decide qué hacer.",
    },
    {
      question: "¿De quién es el código al terminar el proyecto?",
      answer:
        "Tuyo, al cien por cien. Te entregamos el repositorio completo y la documentación necesaria para que cualquier equipo técnico pueda continuar el proyecto si en algún momento decides no seguir con nosotros.",
    },
  ],
}

export const aboutUs = {
  eyebrow: "Sobre nosotros",
  title: "Un equipo pequeño que construye como si fuera su propio negocio",
  subtitle:
    "Trabajamos codo a codo contigo, sin intermediarios de por medio: las mismas personas que diseñan tu web o tu automatización son las que te responden cuando escribes.",
  principles: [
    {
      icon: "KeyRound",
      title: "El código es tuyo",
      description:
        "Te entregamos el repositorio completo y la documentación necesaria para que cualquier equipo pueda continuar el proyecto, con o sin nosotros.",
    },
    {
      icon: "LayoutTemplate",
      title: "Nada de plantillas genéricas",
      description:
        "Cada web y cada automatización se diseña para tu negocio concreto, no se adapta un molde que ya usan otros cien clientes.",
    },
    {
      icon: "Gauge",
      title: "Rendimiento desde el primer commit",
      description:
        "Medimos velocidad de carga, SEO técnico y resultados reales desde el primer día, no como un ajuste de última hora.",
    },
    {
      icon: "Briefcase",
      title: "Comunicación directa",
      description:
        "Hablas con quien construye tu proyecto, no con un gestor de cuentas que traduce tus mensajes a otro equipo.",
    },
  ],
  cta: {
    title: "¿Quieres saber cómo trabajamos paso a paso?",
    primaryCta: { label: "Ver nuestro proceso", href: "/#proceso" },
    secondaryCta: { label: "Hablemos de tu proyecto", href: "/#contacto" },
  },
}

export const finalCta = {
  eyebrow: "Contacto",
  title: "¿Hablamos de tu proyecto?",
  subtitle:
    "Cuéntanos qué necesitas y te decimos, sin rodeos, si podemos ayudarte y cómo.",
  // TODO: sustituir "#contacto" por un mailto:, un formulario o un enlace a calendario.
  primaryCta: { label: "Escríbenos", href: "#contacto" },
  secondaryCta: { label: "Ver proceso de trabajo", href: "/#proceso" },
  highlights: ["Presupuesto cerrado", "Código 100 % tuyo"],
  mockup: {
    tag: "Nuevo proyecto",
    messages: [
      { from: "cliente", text: "Quiero una web que venda y automatizar mis pedidos." },
      { from: "stackss", text: "Cuéntanos más y te decimos si encaja y cómo lo plantearíamos." },
    ],
  },
}

export const footer = {
  description:
    "Desarrollo web y automatización con IA para negocios que quieren vender más y trabajar mejor.",
  columns: [
    {
      title: "Principal",
      links: [
        { label: "Servicios", href: "/#capacidades" },
        { label: "Solución", href: "/#solucion" },
        { label: "Proceso", href: "/#proceso" },
        { label: "Contacto", href: "/#contacto" },
      ],
    },
    {
      title: "Útil",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Sobre nosotros", href: "/sobre-nosotros" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidad", href: "#" },
        { label: "Términos", href: "#" },
        { label: "Cookies", href: "#" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "X", href: "#" },
  ],
  legalNote: `© ${new Date().getFullYear()} Stackss. Todos los derechos reservados.`,
}
