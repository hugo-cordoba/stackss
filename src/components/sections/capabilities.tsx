import type { ComponentType, ReactNode } from "react"
import { Check, MousePointerClick } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import {
  INK,
  MonoTag,
  PulseDot,
  dotGrid,
  fadeBottom,
  tint,
} from "@/components/sections/mono"
import {
  SnapCarousel,
  type CarouselItem,
} from "@/components/sections/snap-carousel"
import { getIcon } from "@/lib/icons"
import { capabilities } from "@/content/site"

const DASH = "border-dashed border-foreground/15"

/* -------------------------------------------------------------------------- */
/*  Piezas pequeñas                                                           */
/* -------------------------------------------------------------------------- */

// Altura 192px en móvil (antes 208px): las ilustraciones están pensadas para
// recortarse por abajo, así que la tarjeta gana densidad sin perder lectura.
function Stage({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-48 overflow-hidden border border-foreground/15 bg-muted/40 sm:h-52"
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

// min-w-4 en móvil: con 24px el diagrama de integraciones se desbordaba
// en pantallas de 360px y se recortaba.
function FanLines({ mode }: { mode: "in" | "out" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className="h-full w-full min-w-4 sm:min-w-6"
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
      <MonoTag className="absolute top-2.5 left-4 sm:left-6">Convierte</MonoTag>
      <div className="absolute inset-x-4 top-10 bottom-0 border border-b-0 border-foreground/15 bg-card sm:inset-x-6">
        <div className="flex items-center gap-1.5 border-b border-foreground/10 px-3 py-2">
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="ml-2 truncate border border-foreground/10 px-2 py-0.5 font-mono text-[0.6rem] text-muted-foreground">
            tuempresa.com
          </span>
        </div>
        <div className="flex flex-col gap-2 p-3 sm:p-4">
          <span className="h-3 w-4/5 bg-foreground/75" />
          <span className="h-3 w-3/5 bg-foreground/75" />
          <span className="mt-1 h-1.5 w-11/12 bg-foreground/15" />
          <span className="h-1.5 w-3/4 bg-foreground/15" />
          <div className="relative mt-2.5 w-fit sm:mt-3">
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
      <MonoTag className="absolute top-2.5 left-4 sm:left-6">/blog</MonoTag>
      <div
        className="absolute inset-x-4 top-12 flex flex-col gap-2 sm:inset-x-6"
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
      <MonoTag className="absolute top-2.5 left-4 sm:left-6">Tienda</MonoTag>
      <div className="absolute inset-x-4 top-12 bottom-0 flex gap-2.5 sm:inset-x-6 sm:gap-3">
        <div className="flex w-[46%] flex-col border border-b-0 border-foreground/15 bg-card p-2.5 sm:w-[48%]">
          <div className="relative h-16 overflow-hidden bg-brand/15 sm:h-20">
            <span className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand sm:size-9" />
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
      <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto] grid-rows-1 items-center px-4 py-6 sm:px-5">
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
      <div className="absolute inset-0 flex gap-4 p-4 sm:gap-6 sm:p-5 sm:px-8">
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

        {/* Traza del agente (solo desde sm: en móvil no cabe) */}
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
      <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto_1fr_auto] grid-rows-1 items-center px-3 py-6 sm:px-8">
        <NodeColumn items={["Shopify", "Stripe", "WhatsApp"]} dot="right" />
        <FanLines mode="in" />
        <FlowNode dot="both" active className="py-3 sm:px-3">
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
      <MonoTag className="absolute top-2.5 left-4 sm:left-6">
        <PulseDot />
        Todo en orden
      </MonoTag>
      <div
        className="absolute inset-x-4 top-12 flex flex-col gap-1.5 sm:inset-x-6"
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
  const total = capabilities.items.length
  const lastIndex = total - 1

  // En móvil cada servicio es una tarjeta (borde sólido + fondo card) dentro
  // de un carrusel. Desde sm se convierte en la celda del bento con líneas
  // discontinuas de siempre.
  const items: CarouselItem[] = capabilities.items.map((item, index) => {
    const Icon = getIcon(item.icon)
    const Visual = visuals[item.visual]
    return {
      key: item.title,
      className: cn(
        "max-sm:border max-sm:border-foreground/15 max-sm:bg-card",
        "sm:border-r sm:border-b sm:border-dashed sm:border-foreground/15",
        item.size === "lg" && "sm:col-span-2",
        // Evita una celda huérfana en tablet (2 columnas).
        index === lastIndex && "sm:max-lg:col-span-2"
      ),
      content: (
        <article className="flex h-full w-full flex-col gap-4 p-4 sm:gap-8 sm:p-8">
          <div>
            <div className="flex items-start justify-between">
              <span
                className="flex size-9 items-center justify-center border border-brand/60"
                style={{ background: tint(14), color: INK }}
              >
                <Icon className="size-4.5" aria-hidden="true" />
              </span>
              {/* Contador: solo móvil, igual que en Problem */}
              <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase sm:hidden">
                {String(index + 1).padStart(2, "0")}
                <span className="text-foreground/25">
                  {" "}
                  / {String(total).padStart(2, "0")}
                </span>
              </span>
            </div>
            <h3 className="mt-3 text-base font-semibold tracking-tight sm:mt-5 sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:leading-normal">
              {item.description}
            </p>
          </div>
          <div className="mt-auto">{Visual && <Visual />}</div>
        </article>
      ),
    }
  })

  return (
    <section id="capacidades" className="py-8 sm:py-16">
      <div className={cn("border-y", DASH)}>
        {/* Cabecera */}
        <div className={cn("border-b", DASH)}>
          <div
            className={cn(
              "mx-auto max-w-site px-4 py-6 sm:border-x sm:px-10 sm:py-12",
              DASH
            )}
          >
            <Reveal>
              <MonoTag>{capabilities.eyebrow}</MonoTag>
              <h2 className="mt-3 max-w-2xl text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty sm:mt-5 sm:text-5xl sm:leading-[1.05]">
                {capabilities.title}
              </h2>
              <p className="mt-3 max-w-xl text-[0.9375rem] leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
                {capabilities.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Móvil: carrusel de tarjetas. Escritorio: bento con celdas separadas
            por líneas discontinuas. */}
        <div className={cn("mx-auto max-w-site sm:border-x", DASH)}>
          {/* sm:-mr-px / sm:-mb-px + overflow-hidden recortan el último borde de cada celda */}
          <div className="max-sm:pt-5 max-sm:pb-3 sm:overflow-hidden">
            <SnapCarousel
              label="Servicios"
              listClassName="sm:-mr-px sm:-mb-px sm:grid sm:grid-cols-2 lg:grid-cols-3"
              itemClassName="max-sm:w-[88%]"
              items={items}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
