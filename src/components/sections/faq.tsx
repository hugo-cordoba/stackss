import dynamic from "next/dynamic"
import { Reveal } from "@/components/motion/reveal"
import { faq } from "@/content/site"

// La sección va al final de la página: se divide en su propio chunk en vez
// de ir en el bundle inicial, pero se sigue renderizando en el servidor
// (ssr: true) para que el contenido siga siendo indexable.
const FaqAccordion = dynamic(
  () => import("@/components/sections/faq-accordion").then((mod) => mod.FaqAccordion),
  { ssr: true }
)

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{faq.subtitle}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <FaqAccordion />
      </Reveal>
    </section>
  )
}
