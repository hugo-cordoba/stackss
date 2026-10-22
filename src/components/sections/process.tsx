import { ArrowDownRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import {
  INK,
  MonoTag,
  PulseDot,
  dotGrid,
  tint,
} from "@/components/sections/mono"
import { cn } from "cn"
import { getIcon } from "@/lib/icons"
import { process } from "@/content/site"

// Cada paso baja un escalón más en escritorio. Clases estáticas para que
// Tailwind las detecte.
const OFFSETS = ["xl:mt-0", "xl:mt-8", "xl:mt-16", "xl:mt-24"]

export function Process() {
  const lastIndex = process.steps.length - 1

  return (
    <section
      id="proceso"
      className="mx-auto max-w-site px-4 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <Reveal>
        <div className="max-w-2xl">
          <MonoTag>{process.eyebrow}</MonoTag>
          <h2 className="mt-3 text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty sm:mt-5 sm:text-5xl sm:leading-[1.05]">
            {process.title}
          </h2>
          <p className="mt-3 text-[0.9375rem] leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
            {process.subtitle}
          </p>
        </div>
      </Reveal>

      {/* Móvil: lista vertical (1 columna). Tablet: 2x2. Escritorio: 4 columnas escalonadas. */}
      <ol className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-14 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4 xl:items-start">
        {process.steps.map((step, index) => {
          const Icon = getIcon(step.icon)
          const isLast = index === lastIndex
          return (
            <li key={step.number} className={cn("relative", OFFSETS[index])}>
              <Reveal delay={index * 0.08} className="h-full">
                {/* Móvil: fila (columna de icono + texto). Desde sm: tarjeta vertical. */}
                <article
                  className={cn(
                    "relative flex h-full border bg-card sm:flex-col",
                    isLast ? "border-brand/60" : "border-foreground/10"
                  )}
                >
                  {/* Escenario con rejilla de puntos */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "relative flex w-16 shrink-0 flex-col items-center justify-between border-r p-3",
                      "sm:h-32 sm:w-auto sm:flex-row sm:items-end sm:border-r-0 sm:p-4",
                      isLast ? "border-brand/40" : "border-foreground/10 bg-muted/40"
                    )}
                    style={{
                      ...dotGrid,
                      ...(isLast ? { backgroundColor: tint(22) } : {}),
                    }}
                  >
                    {/* En móvil el número grande ya identifica el paso */}
                    <MonoTag
                      tone={isLast ? "brand" : "neutral"}
                      className="absolute top-3.5 left-4 max-sm:hidden"
                    >
                      {isLast && <PulseDot />}
                      Paso {step.number}
                    </MonoTag>

                    <span
                      className="flex size-8 items-center justify-center border border-brand/60 sm:size-10"
                      style={{ background: tint(14), color: INK }}
                    >
                      <Icon className="size-4 sm:size-5" />
                    </span>

                    <span className="font-mono text-2xl leading-none font-semibold tracking-tight text-foreground/15 sm:text-4xl">
                      {step.number}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 p-3.5 sm:p-5">
                    <h3 className="text-[0.9375rem] font-semibold tracking-tight sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm sm:leading-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Conector vertical entre tarjetas (solo móvil), alineado con el centro de la columna del icono */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute top-full left-8 h-2.5 border-l border-dashed border-brand/70 sm:hidden"
                    />
                  )}
                </article>
              </Reveal>

              {/* Conector entre pasos (solo escritorio) */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 right-0 z-20 hidden size-7 translate-x-[calc(50%+0.5rem)] items-center justify-center border border-brand/60 xl:flex"
                  style={{ background: tint(22), color: INK }}
                >
                  <ArrowDownRight className="size-4" />
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
