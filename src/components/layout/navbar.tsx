"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
import { NavbarDesktopNav } from "@/components/layout/navbar-desktop-nav"
import { ScrollLink, scrollToTop } from "@/components/scroll-link"
import { nav } from "@/content/site"

// Solo se descarga cuando se abre el menú móvil por primera vez.
const NavbarMobileMenu = dynamic(
  () => import("@/components/layout/navbar-mobile-menu").then((mod) => mod.NavbarMobileMenu),
  { ssr: false }
)

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Ancho máximo de la píldora, derivado del contenedor (--site-w, en globals.css).
// Arriba sobresale 4rem por lado; al hacer scroll se ajusta al contenedor
// (menos 2px de los bordes). Strings completos para que Tailwind los detecte.
const PILL_TOP = "max-w-[calc(var(--site-w)_+_8rem)]"
const PILL_SCROLLED = "max-w-[calc(var(--site-w)_-_2px)]"

export function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Solo controla el ancho/sombra compactos; la barra siempre permanece visible.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24)
    // Si haces scroll con el menú móvil abierto, se cierra.
    if (open) setOpen(false)
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
    <header className="sticky top-2 z-40 mt-2 h-12 px-4 sm:top-4 sm:mt-4 sm:h-14 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={cn(
          "relative mx-auto w-full transition-[max-width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          scrolled ? PILL_SCROLLED : PILL_TOP
        )}
      >
        <div
          data-scrolled={scrolled}
          className="liquid-glass flex h-12 items-center justify-between rounded-xl pr-1.5 pl-4 sm:h-14 sm:pr-2 sm:pl-5"
        >
          <Link
            href="/"
            onClick={(event) => {
              if (pathname !== "/") return
              event.preventDefault()
              scrollToTop()
            }}
            className="flex items-center gap-2 rounded-lg text-lg font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full bg-brand"
            />
            {nav.logo}
          </Link>

          <NavbarDesktopNav />

          {/* Acciones de escritorio */}
          <div className="hidden items-center gap-1.5 md:flex">
            <span className="[&>button]:rounded-lg">
              <ThemeToggle />
            </span>
            <ScrollLink
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
            </ScrollLink>
          </div>

          {/* Controles móviles */}
          <div className="flex items-center gap-1 md:hidden">
            <span className="[&>button]:rounded-lg">
              <ThemeToggle />
            </span>
            <Button
              variant="secondary"
              size="icon"
              className="size-10! rounded-lg"
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

        {/* Panel del menú móvil: se descarga y monta solo al abrirse. */}
        <AnimatePresence>
          {open && <NavbarMobileMenu onClose={closeMenu} />}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            className="fixed inset-0 -z-10 bg-black/20 md:hidden dark:bg-black/40"
          />
        )}
      </AnimatePresence>
    </header>
  )
}
