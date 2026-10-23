import { Reveal } from "@/components/motion/reveal"
import {
  MonoTag,
  dangerTint,
  dotGrid,
  fadeBottom,
} from "@/components/sections/mono"
import {
  SnapCarousel,
  type CarouselItem,
} from "@/components/sections/snap-carousel"
import { getIcon } from "@/lib/icons"
import { problem } from "@/content/site"

export function Problem() {
  const items: CarouselItem[] = problem.items.map((item, index) => {
    const Icon = getIcon(item.icon)
    return {
      key: item.title,
      content: (
        <article className="group relative flex h-full w-full flex-col gap-6 overflow-hidden border border-foreground/10 bg-muted/40 p-4 transition-colors duration-300 hover:border-destructive/40 hover:bg-card sm:gap-12 sm:p-7">
          {/* Rejilla de puntos que se desvanece hacia abajo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-70 sm:h-32"
            style={{ ...dotGrid, ...fadeBottom(0) }}
          />

          <div className="relative flex items-start justify-between">
            <span
              className="flex size-9 items-center justify-center border border-destructive/50 text-destructive sm:size-10"
              style={{ background: dangerTint(10) }}
            >
              <Icon className="size-[1.125rem] sm:size-5" aria-hidden="true" />
            </span>
            <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
              {String(index + 1).padStart(2, "0")}
              <span className="text-foreground/25">
                {" "}
                / {String(problem.items.length).padStart(2, "0")}
              </span>
            </span>
          </div>

          <div className="relative mt-auto">
            <h3 className="text-base font-semibold tracking-tight sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:leading-normal">
              {item.description}
            </p>
          </div>
        </article>
      ),
    }
  })

  return (
    <section className="mx-auto max-w-site px-4 py-10 sm:px-6 sm:py-16 lg:px-8 laptop:py-12">
      <Reveal>
        <div className="grid items-end gap-3 sm:gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <MonoTag tone="danger">{problem.eyebrow}</MonoTag>
            <h2 className="mt-3 max-w-xl text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty sm:mt-5 sm:text-5xl sm:leading-[1.05]">
              {problem.title}
            </h2>
          </div>
          <p className="max-w-md text-[0.9375rem] leading-snug text-foreground/85 sm:text-lg lg:justify-self-end">
            {problem.subtitle}
          </p>
        </div>
      </Reveal>

      <SnapCarousel
        label="Problemas habituales"
        className="mt-5 sm:mt-12"
        // En móvil el carrusel sangra hasta los bordes de la pantalla (-mx-4
        // compensa el px-4 de la sección); desde sm vuelve a ser el grid de 3.
        listClassName="max-sm:-mx-4 sm:grid sm:grid-cols-3 sm:gap-4"
        itemClassName="max-sm:w-[84%]"
        items={items}
      />
    </section>
  )
}
