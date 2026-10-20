import { Reveal } from "@/components/motion/reveal"
import { getIcon } from "@/lib/icons"
import { process } from "@/content/site"

export function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {process.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{process.subtitle}</p>
        </div>
      </Reveal>

      <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-5 hidden h-px bg-border lg:block"
        />
        {process.steps.map((step, index) => {
          const Icon = getIcon(step.icon)
          return (
            <Reveal key={step.number} delay={index * 0.08}>
              <div className="relative flex flex-col gap-4">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-brand text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-brand">
                    {step.number}
                  </p>
                  <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
