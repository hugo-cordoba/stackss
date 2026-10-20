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
const OFFSETS = ["lg:mt-0", "lg:mt-8", "lg:mt-16", "lg:mt-24"]

export function Process() {
  const lastIndex = process.steps.length - 1

  return (
    <section id="proceso" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <MonoTag>{process.eyebrow}</MonoTag>
          <h2 className="mt-5 text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-5xl">
            {process.title}
          </h2>
          <p className="mt-4 text-lg leading-snug text-foreground/85">
            {process.subtitle}
          </p>
        </div>
      </Reveal>

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {process.steps.map((step, index) => {
          const Icon = getIcon(step.icon)
          const isLast = index === lastIndex
          return (
            <li key={step.number} className={cn("relative", OFFSETS[index])}>
              <Reveal delay={index * 0.08}>
                <article
                  className={cn(
                    "flex flex-col border bg-card",
                    isLast ? "border-brand/60" : "border-foreground/10"
                  )}
                >
                  {/* Escenario con rejilla de puntos */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "relative flex h-32 items-end justify-between p-4",
                      !isLast && "bg-muted/40"
                    )}
                    style={{
                      ...dotGrid,
                      ...(isLast ? { backgroundColor: tint(22) } : {}),
                    }}
                  >
                    <MonoTag
                      tone={isLast ? "brand" : "neutral"}
                      className="absolute top-3.5 left-4"
                    >
                      {isLast && <PulseDot />}
                      Paso {step.number}
                    </MonoTag>

                    <span
                      className="flex size-10 items-center justify-center border border-brand/60"
                      style={{ background: tint(14), color: INK }}
                    >
                      <Icon className="size-5" />
                    </span>

                    <span className="font-mono text-4xl leading-none font-semibold tracking-tight text-foreground/15">
                      {step.number}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>

              {/* Conector entre pasos (solo escritorio) */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 right-0 z-20 hidden size-7 translate-x-[calc(50%+0.5rem)] items-center justify-center border border-brand/60 lg:flex"
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
