import { Reveal } from "@/components/motion/reveal"

type LegalContent = {
  title: string
  updatedAt: string
  sections: { heading: string; body: string[] }[]
}

export function LegalPage({
  content,
  as: Heading = "h2",
}: {
  content: LegalContent
  as?: "h1" | "h2"
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8 laptop:py-12">
      <Reveal eager>
        <div className="text-center">
          <Heading className="text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.035em] text-pretty min-[430px]:text-3xl sm:text-5xl sm:leading-[1.05]">
            {content.title}
          </Heading>
          <p className="mt-3 text-[0.8125rem] text-muted-foreground sm:text-sm">
            Última actualización: {content.updatedAt}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col gap-8 sm:mt-14">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                {section.heading}
              </h2>
              <div className="mt-2 flex flex-col gap-2.5">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[0.9375rem] leading-relaxed text-foreground/85 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
