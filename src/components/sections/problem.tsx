import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"
import { getIcon } from "@/lib/icons"
import { problem } from "@/content/site"

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{problem.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {problem.items.map((item, index) => {
          const Icon = getIcon(item.icon)
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="h-full border-none shadow-sm">
                <CardHeader>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="mt-3 text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
