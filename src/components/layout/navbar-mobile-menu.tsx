"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { ScrollLink } from "@/components/scroll-link"
import { ThemeSwitch } from "@/components/theme-toggle"
import { cn } from "cn"
import { nav } from "@/content/site"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function NavbarMobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="liquid-glass absolute inset-x-0 top-full mt-2 max-h-[calc(100dvh-6rem)] origin-top overflow-y-auto overscroll-contain rounded-xl p-3 [--glass:88%] md:hidden"
    >
      <nav aria-label="Móvil" className="flex flex-col gap-1">
        {nav.links.map((link, index) => (
          <MobileLink key={link.href} href={link.href} index={index} onClick={onClose}>
            {link.label}
          </MobileLink>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.05 + nav.links.length * 0.04,
            duration: 0.3,
            ease: EASE,
          }}
          className="mt-2 flex items-center justify-between gap-2 rounded-lg px-4 py-2"
        >
          <span className="text-base font-medium text-foreground">Tema</span>
          <ThemeSwitch />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.09 + nav.links.length * 0.04,
            duration: 0.3,
            ease: EASE,
          }}
        >
          <ScrollLink
            href={nav.cta.href}
            onClick={onClose}
            className={cn(buttonVariants({ size: "lg" }), "h-11 w-full rounded-lg text-base")}
          >
            {nav.cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </ScrollLink>
        </motion.div>
      </nav>
    </motion.div>
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
      <ScrollLink
        href={href}
        onClick={onClick}
        className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
      >
        {children}
      </ScrollLink>
    </motion.div>
  )
}
