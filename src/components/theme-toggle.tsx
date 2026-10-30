"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-10! md:size-8!"
      aria-label="Cambiar tema"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden size-4.5 dark:inline" aria-hidden="true" />
      <Moon className="inline size-4.5 dark:hidden" aria-hidden="true" />
    </Button>
  )
}

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Switch
      aria-label="Cambiar tema"
      checked={resolvedTheme === "dark"}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
    />
  )
}
