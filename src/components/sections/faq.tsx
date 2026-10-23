import { Reveal } from "@/components/motion/reveal"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { faq } from "@/content/site"

export function Faq({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8 laptop:py-12">
      <Reveal>
        <div className="text-left sm:text-center">
          <Heading className="text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-5xl">
            {faq.title}
          </Heading>
          <p className="mt-3 text-base leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
            {faq.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <FaqAccordion />
      </Reveal>
    </section>
  )
}
