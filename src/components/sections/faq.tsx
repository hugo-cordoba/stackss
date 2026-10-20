import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import { faq } from "@/content/site"

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
        <Accordion className="mt-10">
          {faq.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
