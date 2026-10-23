import { Reveal } from "@/components/motion/reveal"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { faq } from "@/content/site"

export function Faq({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8 laptop:py-12">
      {/* eager: la cabecera está above the fold en /faq. Mismos tamaños de
          título y subtítulo que el resto de secciones en móvil. */}
      <Reveal eager>
        <div className="text-center">
          <Heading className="text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty min-[430px]:text-3xl sm:text-5xl sm:leading-[1.05]">
            {faq.title}
          </Heading>
          <p className="mt-3 text-[0.9375rem] leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
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
