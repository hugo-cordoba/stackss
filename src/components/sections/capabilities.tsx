import { Reveal } from "@/components/motion/reveal"
import { getIcon } from "@/lib/icons"
import { capabilities } from "@/content/site"
import { cn } from "cn"

export function Capabilities() {
  return (
    <section id="capacidades" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {capabilities.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{capabilities.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.items.map((item, index) => {
          const Icon = getIcon(item.icon)
          return (
            <Reveal
              key={item.title}
              delay={(index % 3) * 0.08}
              className={cn(item.size === "lg" && "lg:col-span-2")}
            >
              <div className="h-full rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/10 transition-shadow hover:shadow-md">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
