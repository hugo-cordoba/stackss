"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ScrollLink } from "@/components/scroll-link"
import { nav } from "@/content/site"

// Aísla el estado de hover: pasar el ratón por los enlaces solo re-renderiza
// este componente, no toda la navbar (logo, CTA, botón móvil, etc.).
export function NavbarDesktopNav() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <nav
      aria-label="Principal"
      className="hidden items-center gap-0.5 md:flex"
      onMouseLeave={() => setHovered(null)}
    >
      {nav.links.map((link) => (
        <ScrollLink
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
        </ScrollLink>
      ))}
    </nav>
  )
}
