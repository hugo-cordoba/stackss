import { Reveal } from "@/components/motion/reveal"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { faq } from "@/content/site"

export function Faq({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center">
          <Heading className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {faq.title}
          </Heading>
          <p className="mt-4 text-lg text-muted-foreground">{faq.subtitle}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <FaqAccordion />
      </Reveal>
    </section>
  )
}
