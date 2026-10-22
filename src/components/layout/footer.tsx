import Link from "next/link"
import { cn } from "cn"
import { Separator } from "@/components/ui/separator"
import { footer, nav } from "@/content/site"

// py-2 en móvil = área táctil de ~36px; en escritorio vuelve al aspecto compacto.
const LINK =
  "inline-flex items-center py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:py-0"

export function Footer() {
  const lastIndex = footer.columns.length - 1
  // Si el número de columnas es impar, la última ocupa el ancho completo en
  // móvil (evita la celda huérfana en la rejilla de 2 columnas).
  const orphanLast = footer.columns.length % 2 === 1

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 sm:gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-brand"
              />
              {nav.logo}
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column, index) => {
            const fullRow = orphanLast && index === lastIndex
            return (
              <div key={column.title} className={cn(fullRow && "max-sm:col-span-2")}>
                <h3 className="text-sm font-semibold text-foreground">
                  {column.title}
                </h3>
                <ul
                  className={cn(
                    "mt-1.5 flex flex-col sm:mt-4 sm:gap-2.5",
                    fullRow && "max-sm:flex-row max-sm:flex-wrap max-sm:gap-x-5"
                  )}
                >
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={LINK}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <Separator className="my-5 sm:my-10" />

        {/* En móvil: redes arriba y copyright debajo (el DOM mantiene el orden original) */}
        <div className="flex flex-col-reverse items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-xs text-muted-foreground">{footer.legalNote}</p>
          <nav aria-label="Redes sociales" className="flex items-center gap-5">
            {footer.social.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex items-center py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:py-0"
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
