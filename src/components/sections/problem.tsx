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
        <article className="group relative flex h-full w-full flex-col gap-12 overflow-hidden border border-foreground/10 bg-muted/40 p-6 transition-colors duration-300 hover:border-destructive/40 hover:bg-card sm:p-7">
          {/* Rejilla de puntos que se desvanece hacia abajo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-70"
            style={{ ...dotGrid, ...fadeBottom(0) }}
          />

          <div className="relative flex items-start justify-between">
            <span
              className="flex size-10 items-center justify-center border border-destructive/50 text-destructive"
              style={{ background: dangerTint(10) }}
            >
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="relative mt-auto">
            <h3 className="text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        </article>
      ),
    }
  })

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <MonoTag tone="danger">{problem.eyebrow}</MonoTag>
            <h2 className="mt-5 max-w-xl text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-5xl">
              {problem.title}
            </h2>
          </div>
          <p className="max-w-md text-lg leading-snug text-foreground/85 lg:justify-self-end">
            {problem.subtitle}
          </p>
        </div>
      </Reveal>

      <SnapCarousel
        label="Problemas habituales"
        className="mt-10 sm:mt-12"
        // En móvil el carrusel sangra hasta los bordes de la pantalla (-mx-4
        // compensa el px-4 de la sección); desde sm vuelve a ser el grid de 3.
        listClassName="max-sm:-mx-4 sm:grid sm:grid-cols-3 sm:gap-4"
        itemClassName="max-sm:w-[82%]"
        items={items}
      />
    </section>
  )
}
