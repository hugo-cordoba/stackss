import { Reveal } from "@/components/motion/reveal"
import { INK, MonoTag, tint } from "@/components/sections/mono"
import { getIcon } from "@/lib/icons"
import { audience } from "@/content/site"

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <MonoTag>{audience.eyebrow}</MonoTag>
          <h2 className="mt-5 text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-5xl">
            {audience.title}
          </h2>
          <p className="mt-4 text-lg leading-snug text-foreground/85">
            {audience.subtitle}
          </p>
        </div>
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {audience.items.map((item, index) => {
          const Icon = getIcon(item.icon)
          return (
            <li key={item.title}>
              <Reveal delay={index * 0.06} className="h-full">
                <article className="group flex h-full flex-col gap-4 border border-foreground/10 bg-card p-5 transition-colors duration-300 hover:border-brand/60">
                  <div className="flex items-start justify-between">
                    <span
                      className="flex size-10 items-center justify-center border border-brand/60"
                      style={{ background: tint(14), color: INK }}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[0.625rem] tracking-wider text-muted-foreground uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
