import type { ComponentType, CSSProperties, ReactNode } from "react"
import { Check, MousePointerClick } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import { getIcon } from "@/lib/icons"
import { capabilities } from "@/content/site"

/* -------------------------------------------------------------------------- */
/*  Tokens compartidos con el hero                                            */
/* -------------------------------------------------------------------------- */

const DASH = "border-dashed border-foreground/15"
const INK = "color-mix(in oklch, var(--brand), var(--foreground) 55%)"
const tint = (pct: number) =>
  `color-mix(in oklch, var(--brand) ${pct}%, var(--card))`

// Rejilla de puntos de fondo para los "escenarios" de cada tarjeta.
const dotGrid: CSSProperties = {
  backgroundImage:
    "radial-gradient(color-mix(in oklch, var(--foreground) 14%, transparent) 1px, transparent 1px)",
  backgroundSize: "14px 14px",
}

// Desvanece el contenido hacia abajo (como la lista de acciones de la referencia).
const fadeBottom = (from = 60): CSSProperties => {
  const mask = `linear-gradient(to bottom, black ${from}%, transparent)`
  return { maskImage: mask, WebkitMaskImage: mask }
}

/* -------------------------------------------------------------------------- */
/*  Piezas pequeñas                                                           */
/* -------------------------------------------------------------------------- */

function MonoTag({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode
  className?: string
  tone?: "brand" | "neutral"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-1.5 font-mono text-[0.625rem] leading-none tracking-wider whitespace-nowrap text-foreground uppercase",
        tone === "brand" ? "border-brand/60" : "border-foreground/15 bg-card",
        className
      )}
      style={tone === "brand" ? { background: tint(14) } : undefined}
    >
      {children}
    </span>
  )
}

function PulseDot() {
  return (
    <span
      aria-hidden="true"
      className="size-1.5 animate-pulse rounded-full bg-brand motion-reduce:animate-none"
    />
  )
}

function Stage({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-52 overflow-hidden border border-foreground/15 bg-muted/40"
      style={dotGrid}
    >
      {children}
    </div>
  )
}

type StepState = "done" | "active" | "pending"

function StepRow({
  state,
  children,
}: {
  state: StepState
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "flex w-fit max-w-full items-center gap-2 border bg-card px-2.5 py-1 text-xs font-medium",
        state === "active" ? "border-brand/60" : "border-foreground/15",
        state === "pending" ? "text-muted-foreground" : "text-foreground"
      )}
    >
      <span className="flex size-4 shrink-0 items-center justify-center">
        {state === "done" && (
          <Check
            className="size-3.5"
            strokeWidth={3}
            style={{ color: INK }}
          />
        )}
        {state === "active" && (
          <span className="size-3.5 animate-spin rounded-full border-2 border-brand/25 border-t-brand motion-reduce:animate-none" />
        )}
        {state === "pending" && (
          <span className="size-2 rounded-full border border-foreground/30" />
        )}
      </span>
      <span className="truncate">{children}</span>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Diagramas de nodos (automatizaciones e integraciones)                     */
/* -------------------------------------------------------------------------- */

function FlowNode({
  children,
  dot,
  active,
  className,
}: {
  children: ReactNode
  dot?: "left" | "right" | "both"
  active?: boolean
  className?: string
}) {
  const showLeft = dot === "left" || dot === "both"
  const showRight = dot === "right" || dot === "both"
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center border px-2 py-1.5 font-mono text-[0.625rem] leading-none tracking-wider whitespace-nowrap text-foreground uppercase",
        active ? "border-brand/60" : "border-foreground/15 bg-card",
        className
      )}
      style={active ? { background: tint(22) } : undefined}
    >
      {children}
      {showLeft && (
        <span className="absolute top-1/2 -left-[3.5px] size-1.5 -translate-y-1/2 rounded-full bg-foreground" />
      )}
      {showRight && (
        <span className="absolute top-1/2 -right-[3.5px] size-1.5 -translate-y-1/2 rounded-full bg-foreground" />
      )}
    </span>
  )
}

// Las tres filas de la columna de nodos tienen su centro en 1/6, 3/6 y 5/6
// de la altura; las curvas terminan exactamente ahí.
const FAN_ROWS = [100 / 6, 50, (100 * 5) / 6]

function FanLines({ mode }: { mode: "in" | "out" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className="h-full w-full min-w-6"
    >
      {FAN_ROWS.map((y) => (
        <path
          key={y}
          d={
            mode === "out"
              ? `M0 50 C50 50 50 ${y} 100 ${y}`
              : `M0 ${y} C50 ${y} 50 50 100 50`
          }
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          className="animate-dash-flow stroke-foreground/40"
        />
      ))}
    </svg>
  )
}

function NodeColumn({
  items,
  dot,
  activeIndex,
}: {
  items: string[]
  dot: "left" | "right"
  activeIndex?: number
}) {
  return (
    <div className="grid grid-rows-3 items-center self-stretch">
      {items.map((label, index) => (
        <FlowNode key={label} dot={dot} active={index === activeIndex}>
          {label}
        </FlowNode>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Ilustraciones                                                             */
/* -------------------------------------------------------------------------- */

function LandingVisual() {
  return (
    <Stage>
      <MonoTag className="absolute top-2.5 left-6">Convierte</MonoTag>
      <div className="absolute inset-x-6 top-10 bottom-0 border border-b-0 border-foreground/15 bg-card">
        <div className="flex items-center gap-1.5 border-b border-foreground/10 px-3 py-2">
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="ml-2 truncate border border-foreground/10 px-2 py-0.5 font-mono text-[0.6rem] text-muted-foreground">
            tuempresa.com
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <span className="h-3 w-4/5 bg-foreground/75" />
          <span className="h-3 w-3/5 bg-foreground/75" />
          <span className="mt-1 h-1.5 w-11/12 bg-foreground/15" />
          <span className="h-1.5 w-3/4 bg-foreground/15" />
          <div className="relative mt-3 w-fit">
            <span className="flex h-8 items-center bg-brand px-4 font-mono text-[0.625rem] tracking-wider text-primary-foreground uppercase">
              Reservar ahora
            </span>
            <MousePointerClick className="absolute -right-3 -bottom-4 size-5 fill-card text-foreground" />
          </div>
        </div>
      </div>
    </Stage>
  )
}

function BlogVisual() {
  const rows = [
    { width: "w-3/4", active: true },
    { width: "w-2/3", active: false },
    { width: "w-4/5", active: false },
  ]
  return (
    <Stage>
      <MonoTag className="absolute top-2.5 left-6">/blog</MonoTag>
      <div
        className="absolute inset-x-6 top-12 flex flex-col gap-2"
        style={fadeBottom(60)}
      >
        {rows.map((row, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-3 border bg-card p-2",
              row.active ? "border-brand/60" : "border-foreground/15"
            )}
          >
            <span
              className={cn(
                "size-10 shrink-0",
                row.active ? "bg-brand" : "bg-foreground/10"
              )}
            />
            <span className="flex flex-1 flex-col gap-1.5">
              <span className={cn("h-2 bg-foreground/70", row.width)} />
              <span className="h-1.5 w-1/2 bg-foreground/15" />
            </span>
            {row.active && <MonoTag tone="neutral">SEO</MonoTag>}
          </div>
        ))}
      </div>
    </Stage>
  )
}

function EcommerceVisual() {
  return (
    <Stage>
      <MonoTag className="absolute top-2.5 left-6">Tienda</MonoTag>
      <div className="absolute inset-x-6 top-12 bottom-0 flex gap-3">
        <div className="flex w-[48%] flex-col border border-b-0 border-foreground/15 bg-card p-2.5">
          <div className="relative h-20 overflow-hidden bg-brand/15">
            <span className="absolute top-1/2 left-1/2 size-9 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand" />
          </div>
          <span className="mt-2.5 h-2 w-3/4 bg-foreground/70" />
          <span className="mt-1.5 h-1.5 w-1/2 bg-foreground/15" />
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-xs font-semibold">49 €</span>
            <span className="bg-foreground px-2 py-1 font-mono text-[0.55rem] tracking-wider text-background uppercase">
              Añadir
            </span>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <StepRow state="done">Pedido recibido</StepRow>
          <StepRow state="done">Pago cobrado</StepRow>
          <StepRow state="active">Envío en curso</StepRow>
        </div>
      </div>
    </Stage>
  )
}

function AutomationVisual() {
  return (
    <Stage>
      <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto] grid-rows-1 items-center px-5 py-6">
        <FlowNode dot="right">Nuevo pedido</FlowNode>
        <FanLines mode="out" />
        <NodeColumn items={["CRM", "Email", "Informe"]} dot="left" activeIndex={1} />
      </div>
    </Stage>
  )
}

const agentSteps: { label: string; state: StepState }[] = [
  { label: "Leer consulta", state: "done" },
  { label: "Buscar en tu información", state: "done" },
  { label: "Comprobar agenda", state: "active" },
  { label: "Responder al cliente", state: "pending" },
  { label: "Pasar a una persona", state: "pending" },
]

function AgentVisual() {
  return (
    <Stage>
      <div className="absolute inset-0 flex gap-6 p-5 sm:px-8">
        {/* Conversación */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5">
          <MonoTag tone="neutral" className="self-start">
            WhatsApp
          </MonoTag>
          <div className="max-w-[85%] self-start border border-foreground/15 bg-card px-3 py-2 text-xs">
            ¿Tenéis disponibilidad este jueves?
          </div>
          <div className="flex w-fit items-center gap-1 self-end bg-brand px-3 py-2.5">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="size-1.5 animate-bounce rounded-full bg-primary-foreground/70 motion-reduce:animate-none"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Traza del agente */}
        <div
          className="hidden w-[46%] shrink-0 flex-col justify-center gap-1.5 sm:flex"
          style={fadeBottom(65)}
        >
          {agentSteps.map((step) => (
            <StepRow key={step.label} state={step.state}>
              {step.label}
            </StepRow>
          ))}
        </div>
      </div>
    </Stage>
  )
}

function IntegrationsVisual() {
  return (
    <Stage>
      <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto_1fr_auto] grid-rows-1 items-center px-5 py-6 sm:px-8">
        <NodeColumn items={["Shopify", "Stripe", "WhatsApp"]} dot="right" />
        <FanLines mode="in" />
        <FlowNode dot="both" active className="px-3 py-3">
          Stackss
        </FlowNode>
        <FanLines mode="out" />
        <NodeColumn items={["CRM", "Email", "Sheets"]} dot="left" />
      </div>
    </Stage>
  )
}

function MaintenanceVisual() {
  return (
    <Stage>
      <MonoTag className="absolute top-2.5 left-6">
        <PulseDot />
        Todo en orden
      </MonoTag>
      <div
        className="absolute inset-x-6 top-12 flex flex-col gap-1.5"
        style={fadeBottom(75)}
      >
        <StepRow state="done">Dependencias al día</StepRow>
        <StepRow state="done">Copia de seguridad</StepRow>
        <StepRow state="active">Mejora en curso</StepRow>
        <StepRow state="pending">Revisión mensual</StepRow>
      </div>
    </Stage>
  )
}

const visuals: Record<string, ComponentType> = {
  landing: LandingVisual,
  blog: BlogVisual,
  ecommerce: EcommerceVisual,
  automation: AutomationVisual,
  agent: AgentVisual,
  integrations: IntegrationsVisual,
  maintenance: MaintenanceVisual,
}

/* -------------------------------------------------------------------------- */
/*  Sección                                                                   */
/* -------------------------------------------------------------------------- */

export function Capabilities() {
  const lastIndex = capabilities.items.length - 1

  return (
    <section id="capacidades" className="py-20">
      <div className={cn("border-y", DASH)}>
        {/* Cabecera */}
        <div className={cn("border-b", DASH)}>
          <div
            className={cn(
              "mx-auto max-w-6xl px-6 py-12 sm:border-x sm:px-10",
              DASH
            )}
          >
            <Reveal>
              <MonoTag>{capabilities.eyebrow}</MonoTag>
              <h2 className="mt-5 max-w-2xl text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-5xl">
                {capabilities.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-snug text-foreground/85">
                {capabilities.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Bento: celdas separadas por líneas discontinuas */}
        <div className={cn("mx-auto max-w-6xl sm:border-x", DASH)}>
          {/* -mr-px / -mb-px + overflow-hidden recortan el último borde de cada celda */}
          <div className="overflow-hidden">
            <ul className="-mr-px -mb-px grid sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.items.map((item, index) => {
                const Icon = getIcon(item.icon)
                const Visual = visuals[item.visual]
                return (
                  <li
                    key={item.title}
                    className={cn(
                      "border-r border-b",
                      DASH,
                      item.size === "lg" && "sm:col-span-2",
                      // Evita una celda huérfana en tablet (2 columnas).
                      index === lastIndex && "sm:max-lg:col-span-2"
                    )}
                  >
                    <Reveal delay={(index % 3) * 0.08} className="h-full">
                      <article className="flex h-full flex-col gap-8 p-6 sm:p-8">
                        <div>
                          <span
                            className="flex size-9 items-center justify-center border border-brand/60"
                            style={{ background: tint(14), color: INK }}
                          >
                            <Icon className="size-4.5" aria-hidden="true" />
                          </span>
                          <h3 className="mt-5 text-lg font-semibold tracking-tight">
                            {item.title}
                          </h3>
                          <p className="mt-2 max-w-md text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <div className="mt-auto">{Visual && <Visual />}</div>
                      </article>
                    </Reveal>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
