import { Counter } from "@/components/motion/counter"
import { Reveal } from "@/components/motion/reveal"
import { metrics } from "@/content/site"

export function Metrics() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {metrics.title}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">{metrics.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {metrics.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <div className="text-center">
                <div className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                {item.placeholder && (
                  <span className="mt-1 inline-block text-[0.65rem] font-semibold tracking-wide text-muted-foreground/70 uppercase">
                    Placeholder
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
