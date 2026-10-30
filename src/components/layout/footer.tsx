import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { ScrollLink } from "@/components/scroll-link"
import { footer, nav } from "@/content/site"

const LINK =
  "inline-flex items-center py-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-site px-4 py-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-3 sm:col-span-3 md:col-span-1">
            <span className="flex items-center gap-2 text-base font-semibold tracking-tight sm:text-lg">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-brand"
              />
              {nav.logo}
            </span>
            <p className="mt-1.5 max-w-xs text-xs text-muted-foreground sm:mt-3 sm:text-sm">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold text-foreground sm:text-sm">
                {column.title}
              </h3>
              <ul className="mt-1.5 flex flex-col sm:mt-4 sm:gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <ScrollLink href={link.href} className={LINK}>
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-3 sm:my-10" />

        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.6875rem] text-muted-foreground sm:text-xs">
            {footer.legalNote}
          </p>
          <nav aria-label="Redes sociales" className="flex items-center gap-5">
            {footer.social.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex items-center py-0.5 text-[0.6875rem] font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-xs"
              >
                {social.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
