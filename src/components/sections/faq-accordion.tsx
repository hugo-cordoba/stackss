import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/content/site"

// Lista minimalista con líneas separadoras, igual que antes (sin tarjetas ni
// bordes de color) y sin tocar el componente compartido ui/accordion, pero
// con más aire en móvil: hueco entre preguntas, más padding interno y el
// chevron alineado con la primera línea de la pregunta.
export function FaqAccordion() {
  return (
    <Accordion className="mt-6 max-sm:gap-2.5 sm:mt-10">
      {faq.items.map((item) => (
        <AccordionItem
          key={item.question}
          value={item.question}
          className="max-sm:not-last:border-b-0"
        >
          {/* El chevron (16px) se centra con la primera línea (24px) con mt-1. */}
          <AccordionTrigger className="gap-4 py-4 text-base max-sm:px-4 max-sm:active:bg-muted/60 max-sm:**:data-[slot=accordion-trigger-icon]:mt-1">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-sm:px-4 max-sm:pb-4">
            <p className="text-muted-foreground max-sm:leading-relaxed">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
