import { Reveal } from "@/components/motion/reveal"
import { INK, MonoTag, PulseDot, tint } from "@/components/sections/mono"
import { getIcon } from "@/lib/icons"
import { audience } from "@/content/site"

export function Audience() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8">
        {/* Cabecera fija mientras se recorre la lista */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <MonoTag>{audience.eyebrow}</MonoTag>
          <h2 className="mt-5 max-w-md text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-5xl">
            {audience.title}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-snug text-foreground/85">
            {audience.subtitle}
          </p>
          <div className="mt-8">
            <MonoTag tone="neutral">
              <PulseDot />
              {audience.items.length} perfiles
            </MonoTag>
          </div>
        </Reveal>

        <ul className="flex flex-col gap-3">
          {audience.items.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <li key={item.title}>
                <Reveal delay={index * 0.06}>
                  <article className="group flex items-center gap-4 border border-foreground/10 bg-card p-4 transition-all duration-300 hover:border-brand/60 hover:shadow-sm sm:gap-5 sm:p-5">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center border border-brand/60"
                      style={{ background: tint(14), color: INK }}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <span className="self-start font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
