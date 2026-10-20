import { Check } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { getIcon } from "@/lib/icons"
import { solution } from "@/content/site"
import { cn } from "cn"

export function Solution() {
  return (
    <section id="solucion" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {solution.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{solution.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20">
        {solution.blocks.map((block, index) => {
          const Icon = getIcon(block.icon)
          const reversed = index % 2 === 1
          return (
            <div
              key={block.title}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2",
                reversed && "lg:[&>*:first-child]:order-2"
              )}
            >
              <Reveal>
                <div>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-brand">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{block.description}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
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

function SolutionMockup({ type }: { type: string }) {
  if (type === "workflow") {
    return (
      <div className="rounded-2xl bg-card p-6 shadow-xl ring-1 ring-foreground/10">
        <div className="flex flex-col gap-3">
          {["Nuevo pedido", "Procesar datos", "Actualizar CRM", "Notificar al equipo"].map(
            (step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                  {index + 1}
                </span>
                <div className="h-9 flex-1 rounded-lg bg-muted px-3 py-2 text-sm font-medium">
                  {step}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    )
  }

  if (type === "chat") {
    return (
      <div className="rounded-2xl bg-card p-6 shadow-xl ring-1 ring-foreground/10">
        <div className="flex flex-col gap-2.5">
          <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-muted px-3 py-2 text-sm">
            ¿Cuánto tarda el envío a Barcelona?
          </div>
          <div className="ml-auto max-w-[80%] rounded-lg rounded-br-sm bg-brand px-3 py-2 text-sm text-primary-foreground">
            Entre 24 y 48 horas laborables. ¿Quieres que te avise cuando salga de almacén?
          </div>
          <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-muted px-3 py-2 text-sm">
            Sí, por favor
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-xl ring-1 ring-foreground/10">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/50 px-4 py-2.5">
        <span className="size-2 rounded-full bg-destructive/50" />
        <span className="size-2 rounded-full bg-chart-5/40" />
        <span className="size-2 rounded-full bg-brand/50" />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="h-4 w-2/3 rounded-md bg-foreground/70" />
        <div className="h-3 w-full rounded-full bg-muted" />
        <div className="h-3 w-5/6 rounded-full bg-muted" />
        <div className="mt-2 h-24 rounded-lg bg-brand/10" />
      </div>
    </div>
  )
}
