import type { ReactNode } from "react"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import { MonoTag, PulseDot, dotGrid } from "@/components/sections/mono"
import { finalCta } from "@/content/site"

const DASH = "border-dashed border-foreground/15"

// Mismo botón que el del hero.
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
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-3 px-5 font-mono text-sm tracking-wide whitespace-nowrap uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
    </Link>
  )
}

export function FinalCta() {
  return (
    <section id="contacto" className="py-20">
      <div className={cn("border-y", DASH)}>
        <div className={cn("mx-auto max-w-6xl sm:border-x", DASH)}>
          <div className="grid lg:grid-cols-2">
            {/* Texto */}
            <div
              className={cn(
                "flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:border-r",
                DASH
              )}
            >
              <Reveal>
                <MonoTag>
                  <PulseDot />
                  {finalCta.eyebrow}
                </MonoTag>
                <h2 className="mt-5 max-w-xl text-3xl leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-5xl">
                  {finalCta.title}
                </h2>
                <p className="mt-4 max-w-md text-lg leading-snug text-foreground/85">
                  {finalCta.subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href={finalCta.primaryCta.href} variant="primary">
                    {finalCta.primaryCta.label}
                  </CtaButton>
                  <CtaButton href={finalCta.secondaryCta.href} variant="outline">
                    {finalCta.secondaryCta.label}
                  </CtaButton>
                </div>

                <ul className="mt-8 flex flex-wrap gap-2">
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

            {/* Escenario decorativo */}
            <Reveal delay={0.1} className="h-full">
              <div
                aria-hidden="true"
                className={cn(
                  "relative flex h-full flex-col justify-center gap-2.5 border-t bg-muted/40 px-6 pt-16 pb-10 sm:px-10 sm:pb-14 lg:border-t-0",
                  DASH
                )}
                style={dotGrid}
              >
                <MonoTag className="absolute top-3.5 left-6 sm:left-10">
                  <PulseDot />
                  {finalCta.mockup.tag}
                </MonoTag>

                {finalCta.mockup.messages.map((message) => (
                  <div
                    key={message.text}
                    className={cn(
                      "max-w-[80%] px-3 py-2 text-sm",
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
