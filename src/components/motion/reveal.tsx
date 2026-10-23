"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
  eager = false,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  /** Anima al montar (para contenido above the fold) en vez de al entrar en viewport. */
  eager?: boolean
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(eager
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "0px 0px -60px 0px" },
          })}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
