"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react"
import { ArrowRight, Menu, X } from "lucide-react"
import { cn } from "cn"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { nav } from "@/content/site"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Ancho máximo de la píldora. Al hacer scroll se ajusta al mismo ancho de
// contenido que usan las secciones (max-w-6xl = 1152px): nunca queda más
// estrecha que la cuadrícula real de la web.
const WIDTH_TOP = 1280
const WIDTH_SCROLLED = 1152

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  // Solo controla el ancho/sombra compactos; la barra siempre permanece visible.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24)
  })

  // Cerrar el menú móvil con Escape.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-4 z-40 mt-4 h-14 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          maxWidth: scrolled ? WIDTH_SCROLLED : WIDTH_TOP,
        }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative mx-auto w-full"
      >
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-xl pr-2 pl-5 ring-1 ring-foreground/10 backdrop-blur-xl transition-[background-color,box-shadow] duration-300",
            scrolled
              ? "bg-background/90 shadow-lg shadow-foreground/5"
              : "bg-background/60 shadow-sm"
          )}
        >
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg text-lg font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full bg-brand"
            />
            {nav.logo}
          </Link>

          {/* Navegación de escritorio */}
          <nav
            aria-label="Principal"
            className="hidden items-center gap-0.5 md:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                onFocus={() => setHovered(link.href)}
                onBlur={() => setHovered(null)}
                className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {hovered === link.href && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-lg bg-muted"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}

            <NavigationMenu onMouseEnter={() => setHovered(null)}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="rounded-lg bg-transparent px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                    {nav.company.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-64 gap-1">
                      {nav.company.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            render={<Link href={item.href} />}
                            className="flex-col items-start gap-0.5"
                          >
                            <span className="font-medium text-foreground">
                              {item.label}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Acciones de escritorio */}
          <div className="hidden items-center gap-1.5 md:flex">
            <span className="[&>button]:rounded-lg">
              <ThemeToggle />
            </span>
            <Link
              href={nav.cta.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-10 rounded-lg px-5"
              )}
            >
              {nav.cta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Controles móviles */}
          <div className="flex items-center gap-1 md:hidden">
            <span className="[&>button]:rounded-lg">
              <ThemeToggle />
            </span>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-lg"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {open ? (
                    <X className="size-5" aria-hidden="true" />
                  ) : (
                    <Menu className="size-5" aria-hidden="true" />
                  )}
                </motion.span>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Panel del menú móvil */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="absolute inset-x-0 top-full mt-2 origin-top rounded-xl bg-background/95 p-3 shadow-xl ring-1 ring-foreground/10 backdrop-blur-xl md:hidden"
            >
              <nav aria-label="Móvil" className="flex flex-col gap-1">
                {nav.links.map((link, index) => (
                  <MobileLink
                    key={link.href}
                    href={link.href}
                    index={index}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </MobileLink>
                ))}

                <p className="mt-2 px-4 text-xs font-medium text-muted-foreground">
                  {nav.company.label}
                </p>

                {nav.company.items.map((item, index) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    index={nav.links.length + index}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </MobileLink>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:
                      0.05 +
                      (nav.links.length + nav.company.items.length) * 0.04,
                    duration: 0.3,
                    ease: EASE,
                  }}
                  className="mt-2"
                >
                  <Link
                    href={nav.cta.href}
                    onClick={closeMenu}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-11 w-full rounded-lg text-base"
                    )}
                  >
                    {nav.cta.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

function MobileLink({
  href,
  index,
  onClick,
  children,
}: {
  href: string
  index: number
  onClick: () => void
  children: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 + index * 0.04, duration: 0.3, ease: EASE }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
      >
        {children}
      </Link>
    </motion.div>
  )
}
