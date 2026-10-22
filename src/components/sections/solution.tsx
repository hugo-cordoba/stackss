import type { ReactNode } from "react"
import { Check, MousePointerClick } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import {
  INK,
  MonoTag,
  PulseDot,
  dotGrid,
  tint,
} from "@/components/sections/mono"
import { getIcon } from "@/lib/icons"
import { solution } from "@/content/site"

export function Solution() {
  return (
    <section id="solucion" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-start text-left sm:items-center sm:text-center">
          <MonoTag>{solution.eyebrow}</MonoTag>
          <h2 className="mt-3 text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty sm:mt-5 sm:text-5xl sm:leading-[1.05]">
            {solution.title}
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
            {solution.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="mt-7 flex flex-col gap-8 sm:mt-14 sm:gap-16 lg:gap-20">
        {solution.blocks.map((block, index) => {
          const Icon = getIcon(block.icon)
          const reversed = index % 2 === 1
          return (
            <div
              key={block.title}
              className={cn(
                "grid items-center gap-5 sm:gap-10 lg:grid-cols-2 lg:gap-16",
                // En móvil, una línea discontinua separa cada bloque del anterior.
                "max-sm:not-first:border-t max-sm:not-first:border-dashed max-sm:not-first:border-foreground/15 max-sm:not-first:pt-8",
                reversed && "lg:[&>*:first-child]:order-2"
              )}
            >
              <Reveal>
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-9 shrink-0 items-center justify-center border border-brand/60 sm:size-10"
                      style={{ background: tint(14), color: INK }}
                    >
                      <Icon className="size-[1.125rem] sm:size-5" aria-hidden="true" />
                    </span>
                    {/* min-w-0 + truncate: en pantallas de 320-360px el eyebrow más largo no desborda */}
                    <MonoTag tone="neutral" className="min-w-0">
                      <span className="shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{block.eyebrow}</span>
                    </MonoTag>
                  </div>

                  <h3 className="mt-4 text-xl leading-tight font-semibold tracking-tight text-pretty sm:mt-6 sm:text-3xl">
                    {block.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                    {block.description}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-snug">
                        <span
                          className="mt-px flex size-5 shrink-0 items-center justify-center border border-brand/60"
                          style={{ background: tint(14), color: INK }}
                        >
                          <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <SolutionMockup type={block.mockup} />
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Mockups                                                                   */
/* -------------------------------------------------------------------------- */

function Stage({
  label,
  live,
  children,
}: {
  label: string
  live?: boolean
  children: ReactNode
}) {
  return (
    <div
      aria-hidden="true"
      className="relative border border-foreground/10 bg-muted/40 px-3 pt-11 pb-3 sm:px-8 sm:pt-14 sm:pb-8"
      style={dotGrid}
    >
      <MonoTag className="absolute top-2.5 left-3 sm:top-3.5 sm:left-8">
        {live && <PulseDot />}
        {label}
      </MonoTag>
      {children}
    </div>
  )
}

type StepState = "done" | "active" | "pending"

function Step({ state, children }: { state: StepState; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border bg-card px-3 py-2 text-sm font-medium sm:py-2.5",
        state === "active" ? "border-brand/60" : "border-foreground/15",
        state === "pending" ? "text-muted-foreground" : "text-foreground"
      )}
    >
      <span className="flex size-4 shrink-0 items-center justify-center">
        {state === "done" && (
          <Check className="size-3.5" strokeWidth={3} style={{ color: INK }} />
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

function SolutionMockup({ type }: { type: string }) {
  if (type === "workflow") {
    const steps: { label: string; state: StepState }[] = [
      { label: "Nuevo pedido", state: "done" },
      { label: "Procesar datos", state: "done" },
      { label: "Actualizar CRM", state: "active" },
      { label: "Notificar al equipo", state: "pending" },
    ]
    return (
      <Stage label="Flujo activo" live>
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {steps.map((step) => (
            <Step key={step.label} state={step.state}>
              {step.label}
            </Step>
          ))}
        </div>
      </Stage>
    )
  }

  if (type === "chat") {
    return (
      <Stage label="Agente IA" live>
        <div className="flex flex-col gap-2 sm:gap-2.5">
          <div className="max-w-[85%] self-start border border-foreground/15 bg-card px-3 py-2 text-sm">
            ¿Cuánto tarda el envío a Barcelona?
          </div>
          <div className="max-w-[85%] self-end bg-brand px-3 py-2 text-sm text-primary-foreground">
            Entre 24 y 48 horas laborables. ¿Quieres que te avise cuando salga de almacén?
          </div>
          <div className="max-w-[85%] self-start border border-foreground/15 bg-card px-3 py-2 text-sm">
            Sí, por favor
          </div>
        </div>
      </Stage>
    )
  }

  return (
    <Stage label="Convierte">
      <div className="border border-foreground/15 bg-card">
        <div className="flex items-center gap-1.5 border-b border-foreground/10 px-3 py-2">
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="size-1.5 rounded-full bg-foreground/20" />
          <span className="ml-2 truncate border border-foreground/10 px-2 py-0.5 font-mono text-[0.6rem] text-muted-foreground">
            tuempresa.com
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4 sm:p-5">
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
