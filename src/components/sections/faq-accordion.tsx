import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/content/site"

export function FaqAccordion() {
  return (
    <Accordion className="mt-6 sm:mt-10">
      {faq.items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger className="gap-4 py-4 text-base">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
