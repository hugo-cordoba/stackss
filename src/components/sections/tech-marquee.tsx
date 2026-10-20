import { Marquee } from "@/components/motion/marquee"
import { techMarquee } from "@/content/site"

export function TechMarquee() {
  return (
    <section className="border-y border-border/60 bg-muted/20 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Tecnologías con las que construimos
        </p>
        <Marquee items={techMarquee} className="mt-6" />
      </div>
    </section>
  )
}
