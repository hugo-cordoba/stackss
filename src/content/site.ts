export const siteConfig = {
  name: "Stackss",
  title: "Stackss — Webs que venden y automatizaciones que ahorran tiempo",
  description:
    "Diseñamos y desarrollamos webs que convierten y automatizamos tareas con Python e IA para startups, pymes y agencias.",
  url: "https://stackss.xyz",
  locale: "es_ES",
}

// Todos los botones de contacto ("Hablemos", "Escríbenos", etc.) abren el
// chat de WhatsApp directamente en vez de hacer scroll a una sección.
export const whatsappHref =
  "https://wa.me/34624414187?text=Hola%2C%20quiero%20hablar%20sobre%20mi%20proyecto"

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
  cta: { label: "Hablemos", href: whatsappHref },
}

export const hero = {
  badge: "Desarrollo web + automatización con IA",
  title: "Haz crecer tu negocio. Automatiza lo repetitivo.",
  subtitle:
    "Ayudamos a startups, pymes y agencias a lanzar sitios que convierten y a quitarse de encima el trabajo repetitivo con automatizaciones en Python y agentes de IA.",
  primaryCta: { label: "Hablemos de tu proyecto", href: whatsappHref },
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
    secondaryCta: { label: "Hablemos de tu proyecto", href: whatsappHref },
  },
}

export const finalCta = {
  eyebrow: "Contacto",
  title: "¿Hablamos de tu proyecto?",
  subtitle:
    "Cuéntanos qué necesitas y te decimos, sin rodeos, si podemos ayudarte y cómo.",
  primaryCta: { label: "Escríbenos", href: whatsappHref },
  highlights: ["Presupuesto cerrado", "Código 100 % tuyo"],
  mockup: {
    tag: "Nuevo proyecto",
    messages: [
      { from: "cliente", text: "Quiero una web que venda y automatizar mis pedidos." },
      { from: "stackss", text: "Cuéntanos más y te decimos si encaja y cómo lo plantearíamos." },
    ],
  },
}

export const legalPages = {
  privacidad: {
    title: "Política de Privacidad",
    updatedAt: "30 de octubre de 2026",
    sections: [
      {
        heading: "Responsable del tratamiento",
        body: [
          "Stackss (stackss.xyz) es responsable del tratamiento de los datos personales que nos facilitas a través de este sitio web o de nuestros canales de contacto, como WhatsApp.",
          "Para cualquier consulta sobre esta política o para ejercer tus derechos, puedes escribirnos directamente por WhatsApp desde los botones de contacto del sitio.",
        ],
      },
      {
        heading: "Qué datos recopilamos",
        body: [
          "Los datos que nos facilitas voluntariamente al contactarnos: nombre, número de teléfono, correo electrónico y el contenido de tu mensaje.",
          "Datos de navegación básicos necesarios para el funcionamiento del sitio, como la preferencia de tema claro u oscuro, almacenada localmente en tu navegador.",
        ],
      },
      {
        heading: "Finalidad del tratamiento",
        body: [
          "Responder a tus consultas, elaborar presupuestos y gestionar la relación comercial antes, durante y después de un proyecto.",
          "No utilizamos tus datos para fines distintos a los indicados ni los empleamos para publicidad sin tu consentimiento expreso.",
        ],
      },
      {
        heading: "Base legal",
        body: [
          "El consentimiento que nos das al escribirnos a través de nuestros canales de contacto, y la ejecución de un posible contrato de servicios si decides trabajar con nosotros.",
        ],
      },
      {
        heading: "Conservación de los datos",
        body: [
          "Conservamos tus datos mientras sean necesarios para atender tu consulta o mantener la relación contractual, y posteriormente durante los plazos exigidos por la legislación aplicable.",
        ],
      },
      {
        heading: "Destinatarios y cesión de datos",
        body: [
          "No cedemos tus datos a terceros, salvo obligación legal o cuando sea necesario para prestar el servicio solicitado (por ejemplo, el propio servicio de mensajería de WhatsApp al escribirnos por ese canal).",
        ],
      },
      {
        heading: "Tus derechos",
        body: [
          "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad sobre tus datos personales en cualquier momento, escribiéndonos a través de nuestros canales de contacto.",
        ],
      },
      {
        heading: "Seguridad",
        body: [
          "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.",
        ],
      },
      {
        heading: "Cambios en esta política",
        body: [
          "Podemos actualizar esta política para adaptarla a cambios legislativos o en nuestros servicios. Publicaremos cualquier cambio relevante en esta misma página.",
        ],
      },
    ],
  },
  terminos: {
    title: "Términos y Condiciones",
    updatedAt: "30 de octubre de 2026",
    sections: [
      {
        heading: "Objeto",
        body: [
          "Estos términos regulan el acceso y uso del sitio web stackss.xyz, propiedad de Stackss, dedicado a mostrar nuestros servicios de desarrollo web y automatización.",
        ],
      },
      {
        heading: "Condiciones de uso",
        body: [
          "El acceso a este sitio es gratuito y no requiere registro. Te comprometes a utilizarlo de forma lícita, sin realizar prácticas fraudulentas ni que puedan dañar su funcionamiento.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "Los textos, diseños y elementos visuales de este sitio web son propiedad de Stackss, salvo indicación contraria.",
          "El código fuente y la propiedad intelectual de cada proyecto desarrollado para un cliente se rigen por lo acordado en el contrato específico de ese proyecto, no por estos términos generales del sitio.",
        ],
      },
      {
        heading: "Servicios y presupuestos",
        body: [
          "La información sobre servicios, plazos y precios mostrada en el sitio tiene carácter orientativo. El alcance, plazo y precio definitivos de cada proyecto se acuerdan de forma individual tras la fase de descubrimiento.",
        ],
      },
      {
        heading: "Enlaces a terceros",
        body: [
          "Este sitio incluye enlaces a servicios de terceros, como WhatsApp, para facilitar el contacto. No somos responsables del contenido, disponibilidad o políticas de esos servicios externos.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        body: [
          "Stackss no garantiza la disponibilidad ininterrumpida del sitio y no se hace responsable de los daños derivados de un uso indebido del mismo.",
        ],
      },
      {
        heading: "Legislación aplicable",
        body: [
          "Estos términos se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales competentes conforme a derecho.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de Cookies",
    updatedAt: "30 de octubre de 2026",
    sections: [
      {
        heading: "Qué son las cookies",
        body: [
          "Las cookies son pequeños archivos que algunos sitios web guardan en tu navegador para recordar información sobre tu visita.",
        ],
      },
      {
        heading: "Qué usamos en este sitio",
        body: [
          "Actualmente stackss.xyz no utiliza cookies de publicidad ni de seguimiento de terceros.",
          "Usamos únicamente almacenamiento técnico necesario para el funcionamiento del sitio, como recordar tu preferencia de tema claro u oscuro en tu propio navegador.",
        ],
      },
      {
        heading: "Cómo gestionarlas",
        body: [
          "Puedes borrar o bloquear este tipo de almacenamiento en cualquier momento desde la configuración de tu navegador. Esto no afecta a la navegación básica del sitio.",
        ],
      },
      {
        heading: "Cambios en esta política",
        body: [
          "Si en el futuro incorporamos cookies analíticas o de terceros, actualizaremos esta página y solicitaremos tu consentimiento cuando sea necesario.",
        ],
      },
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
        { label: "Contacto", href: whatsappHref },
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
        { label: "Privacidad", href: "/privacidad" },
        { label: "Términos", href: "/terminos" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ],
  social: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/stackss-xyz" }],
  legalNote: `© ${new Date().getFullYear()} Stackss. Todos los derechos reservados.`,
}
