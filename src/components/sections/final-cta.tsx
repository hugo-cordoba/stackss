import type { ReactNode } from "react"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import { MonoTag, PulseDot, dotGrid } from "@/components/sections/mono"
import { ScrollLink } from "@/components/scroll-link"
import { finalCta } from "@/content/site"

const DASH = "border-dashed border-foreground/15"

// Mismo botón que el del hero. En móvil ocupa todo el ancho (etiqueta a la
// izquierda, flecha a la derecha) y da feedback al pulsar.
function CtaButton({
  href,
  variant,
  children,
}: {
  href: string
  variant: "primary" | "outline"
  children: ReactNode
}) {
  return (
    <ScrollLink
      href={href}
      className={cn(
        "group inline-flex h-12 w-full items-center justify-between gap-3 px-5 font-mono text-sm tracking-wide whitespace-nowrap uppercase transition-[colors,transform] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px sm:w-auto sm:justify-center",
        variant === "primary"
          ? "bg-foreground text-background hover:bg-foreground/85"
          : "border border-foreground/15 bg-background text-foreground hover:bg-muted"
      )}
    >
      {children}
      <ChevronRight
        className="size-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </ScrollLink>
  )
}

export function FinalCta() {
  return (
    <section id="contacto" className="py-8 sm:py-16 laptop:py-10">
      <div className={cn("border-y", DASH)}>
        <div className={cn("mx-auto max-w-site sm:border-x", DASH)}>
          <div className="grid lg:grid-cols-2">
            {/* Texto: primero también en móvil, para que el CTA se vea al aterrizar */}
            <div
              className={cn(
                "flex flex-col justify-center px-4 py-8 sm:px-10 sm:py-16 lg:border-r lg:px-8 xl:px-10",
                DASH
              )}
            >
              <Reveal>
                <MonoTag>
                  <PulseDot />
                  {finalCta.eyebrow}
                </MonoTag>
                <h2 className="mt-3 max-w-xl text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:mt-5 sm:text-5xl">
                  {finalCta.title}
                </h2>
                <p className="mt-3 max-w-md text-base leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
                  {finalCta.subtitle}
                </p>

                <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                  <CtaButton href={finalCta.primaryCta.href} variant="primary">
                    {finalCta.primaryCta.label}
                  </CtaButton>
                  <CtaButton href={finalCta.secondaryCta.href} variant="outline">
                    {finalCta.secondaryCta.label}
                  </CtaButton>
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2">
                  {finalCta.highlights.map((label) => (
                    <li key={label}>
                      <MonoTag tone="neutral">
                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                        {label}
                      </MonoTag>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Escenario decorativo: debajo del texto en móvil, a la derecha en escritorio */}
            <Reveal delay={0.1} className="h-full">
              <div
                aria-hidden="true"
                className={cn(
                  "relative flex h-full flex-col justify-center gap-2 border-t bg-muted/40 px-4 pt-11 pb-5 sm:gap-2.5 sm:px-10 sm:pt-16 sm:pb-14 lg:border-t-0",
                  DASH
                )}
                style={dotGrid}
              >
                <MonoTag className="absolute top-3 left-4 sm:top-3.5 sm:left-10">
                  <PulseDot />
                  {finalCta.mockup.tag}
                </MonoTag>

                {finalCta.mockup.messages.map((message) => (
                  <div
                    key={message.text}
                    className={cn(
                      "max-w-[85%] px-3 py-2 text-[0.8125rem] leading-snug sm:max-w-[80%] sm:text-sm",
                      message.from === "cliente"
                        ? "self-start border border-foreground/15 bg-card"
                        : "self-end bg-brand text-primary-foreground"
                    )}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
