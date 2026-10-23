import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import { ScrollLink } from "@/components/scroll-link"
import { INK, MonoTag, tint } from "@/components/sections/mono"
import { getIcon } from "@/lib/icons"
import { aboutUs } from "@/content/site"

// Mismo botón que el de FinalCta: en móvil ocupa todo el ancho (etiqueta a la
// izquierda, flecha a la derecha) y da feedback al pulsar. Desde sm vuelve al
// botón compacto y centrado de siempre.
function AboutCtaButton({
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
        "group inline-flex h-12 w-full items-center justify-between gap-3 px-5 font-mono text-sm tracking-wide whitespace-nowrap uppercase transition-[color,background-color,border-color,transform] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px sm:h-11 sm:w-auto sm:justify-center",
        variant === "primary"
          ? "bg-foreground text-background hover:bg-foreground/85 active:bg-foreground/80"
          : "border border-foreground/15 bg-background text-foreground hover:bg-muted active:bg-muted"
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

export function AboutUs({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section className="mx-auto max-w-site px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
      {/* eager: la cabecera está above the fold, no esperamos al viewport.
          Móvil alineada a la izquierda (como Solution, Process y FAQ);
          desde sm, centrada. */}
      <Reveal eager>
        <div className="mx-auto max-w-2xl text-left sm:text-center">
          <MonoTag>{aboutUs.eyebrow}</MonoTag>
          <Heading className="mt-3 text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty min-[430px]:text-3xl sm:mt-5 sm:text-5xl sm:leading-[1.05]">
            {aboutUs.title}
          </Heading>
          <p className="mt-3 text-[0.9375rem] leading-snug text-foreground/85 sm:mt-4 sm:text-lg">
            {aboutUs.subtitle}
          </p>
        </div>
      </Reveal>

      {/* Móvil: lista compacta (icono a la izquierda, texto a la derecha).
          Desde sm: tarjetas verticales en rejilla 2 / 4 columnas. */}
      <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {aboutUs.principles.map((principle, index) => {
          const Icon = getIcon(principle.icon)
          return (
            // El <li> es el hijo directo del <ul>; Reveal va dentro (antes el
            // <div> de Reveal quedaba entre <ul> y <li>, que no es HTML válido).
            <li key={principle.title} className="flex">
              <Reveal delay={index * 0.06} className="flex w-full">
                <article className="flex w-full gap-3.5 border border-foreground/10 bg-card p-4 sm:flex-col sm:gap-3 sm:p-5">
                  <span
                    className="flex size-9 shrink-0 items-center justify-center border border-brand/60"
                    style={{ background: tint(14), color: INK }}
                  >
                    <Icon className="size-[1.125rem]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[0.9375rem] leading-snug font-semibold tracking-tight sm:text-base">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
                      {principle.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ul>

      {/* CTA: en móvil, alineado a la izquierda con botones a ancho completo
          (igual que FinalCta); desde sm, centrado. */}
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-start gap-4 border-t border-dashed border-foreground/15 pt-6 text-left sm:mt-16 sm:items-center sm:gap-5 sm:pt-12 sm:text-center">
          <p className="max-w-md text-base font-medium text-foreground sm:text-lg">
            {aboutUs.cta.title}
          </p>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
            <AboutCtaButton href={aboutUs.cta.primaryCta.href} variant="primary">
              {aboutUs.cta.primaryCta.label}
            </AboutCtaButton>
            <AboutCtaButton href={aboutUs.cta.secondaryCta.href} variant="outline">
              {aboutUs.cta.secondaryCta.label}
            </AboutCtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
