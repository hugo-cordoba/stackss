import { Reveal } from "@/components/motion/reveal"
import { getIcon } from "@/lib/icons"
import { quality } from "@/content/site"

export function Quality() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {quality.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{quality.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quality.items.map((item, index) => {
            const Icon = getIcon(item.icon)
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
