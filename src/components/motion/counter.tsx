"use client"

import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react"
import { useEffect, useRef } from "react"

export function Counter({
  value,
  suffix = "",
  duration = 1.6,
  className,
}: {
  value: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString("es-ES")
  )
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => controls.stop()
  }, [isInView, value, duration, motionValue])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
