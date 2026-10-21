import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { footer, nav } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-x-6 gap-y-7 max-sm:grid-cols-2 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-sm:col-span-2">
            <span className="text-lg font-semibold tracking-tight">
              {nav.logo}
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6 sm:my-10" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-xs text-muted-foreground">{footer.legalNote}</p>
          <div className="flex items-center gap-5">
            {footer.social.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
