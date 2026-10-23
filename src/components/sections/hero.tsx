import type { CSSProperties, ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "cn"
import { Reveal } from "@/components/motion/reveal"
import { ScrollLink } from "@/components/scroll-link"
import { hero, techMarquee } from "@/content/site"

/* -------------------------------------------------------------------------- */
/*  Layout: rejilla de líneas discontinuas                                    */
/* -------------------------------------------------------------------------- */

const DASH = "border-dashed border-foreground/15"

// Desvanece los extremos de la cinta de tecnologías (solo móvil).
const FADE_X =
  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)"
const fadeX: CSSProperties = { maskImage: FADE_X, WebkitMaskImage: FADE_X }

// Fila con borde inferior discontinuo que además se prolonga hasta el borde
// izquierdo de la pantalla (el section tiene overflow-hidden para recortarla).
function DashedRow({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative border-b",
        DASH,
        "before:pointer-events-none before:absolute before:right-full before:-bottom-px before:h-px before:w-screen before:border-t before:border-dashed before:border-foreground/15",
        className
      )}
    >
      {children}
    </div>
  )
}

function HeroButton({
  href,
  variant,
  children,
}: {
  href: string
  variant: "primary" | "outline"
  children: ReactNode
}) {
  return (
    <ScrollLink
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-3 px-5 font-mono text-sm tracking-wide whitespace-nowrap uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "h-12 bg-foreground text-background hover:bg-foreground/85 active:bg-foreground/80"
          : "h-11 border border-foreground/15 bg-background text-foreground hover:bg-muted active:bg-muted sm:h-12"
      )}
    >
      {children}
      <ChevronRight
        className="size-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </ScrollLink>
  )
}

// Una de las dos copias idénticas de la cinta. La segunda es solo visual
// (aria-hidden) y se oculta si el usuario prefiere menos movimiento.
function TechList({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={cn("flex shrink-0 items-center", hidden && "motion-reduce:hidden")}
    >
      {techMarquee.map((name) => (
        <li
          key={name}
          className={cn(
            "flex h-12 items-center border-r px-6 text-base font-semibold tracking-tight whitespace-nowrap text-foreground/80",
            DASH
          )}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className={cn("mx-auto max-w-site sm:border-x", DASH)}>
        <div className="grid lg:grid-cols-[1fr_1fr]">
          {/* Columna de texto: centrada en móvil/tablet, a la izquierda en escritorio */}
          <div
            className={cn(
              "flex flex-col text-center lg:border-r lg:text-left",
              DASH
            )}
          >
            {/* Fila vacía: solo escritorio (absorbe el espacio sobrante y marca la rejilla) */}
            <DashedRow className="hidden min-h-12 flex-1 lg:block lg:min-h-20 laptop:min-h-10" />

            <DashedRow className="px-4 pt-6 pb-4 sm:px-10 sm:pt-10 sm:pb-6 lg:px-8 lg:py-6 xl:px-10">
              <Reveal eager>
                <h1 className="text-[2.25rem] leading-[0.97] font-semibold tracking-[-0.045em] text-pretty max-sm:text-balance min-[430px]:text-[2.5rem] sm:text-6xl lg:text-[length:clamp(2.75rem,min(5.6vw,8.5vh),5rem)]">
                  {hero.title}
                </h1>
              </Reveal>
            </DashedRow>

            <DashedRow className="px-4 py-3.5 sm:px-10 sm:py-6 lg:px-8 xl:px-10">
              <Reveal eager delay={0.08}>
                <p className="mx-auto max-w-xl text-[0.9375rem] leading-snug text-foreground/85 sm:text-xl laptop:text-lg lg:mx-0">
                  {hero.subtitle}
                </p>
              </Reveal>
            </DashedRow>

            <DashedRow className="px-4 py-4 sm:px-10 sm:py-0 lg:px-8 xl:px-10">
              <Reveal eager delay={0.16}>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3 sm:justify-center lg:justify-start">
                  <HeroButton href={hero.primaryCta.href} variant="primary">
                    {hero.primaryCta.label}
                  </HeroButton>
                  <HeroButton href={hero.secondaryCta.href} variant="outline">
                    {hero.secondaryCta.label}
                  </HeroButton>
                </div>
              </Reveal>
            </DashedRow>
          </div>

          {/* Ilustración */}
          <div
            className={cn(
              "flex items-center justify-center border-t px-4 py-3 sm:p-6 lg:border-t-0 lg:p-6 xl:p-8",
              DASH
            )}
          >
            <Reveal eager delay={0.2} className="w-full max-w-[600px]">
              <StackIllustration />
            </Reveal>
          </div>
        </div>
      </div>

      {/* Tecnologías (a sangre) */}
      <div className={cn("border-y", DASH)}>
        <div className={cn("mx-auto max-w-site sm:border-x", DASH)}>
          <p
            className={cn(
              "border-b px-6 py-2.5 text-center font-mono text-[0.625rem] tracking-widest text-muted-foreground uppercase sm:py-3 sm:text-[0.7rem]",
              DASH
            )}
          >
            <span className="sm:hidden">Construimos con</span>
            <span className="hidden sm:inline">
              Algunas de las tecnologías con las que construimos
            </span>
          </p>

          {/* Móvil: una sola fila que se desplaza */}
          <div
            className="overflow-hidden [scrollbar-width:none] motion-reduce:overflow-x-auto md:hidden"
            style={fadeX}
          >
            <div className="flex w-max animate-marquee">
              <TechList />
              <TechList hidden />
            </div>
          </div>

          {/* Escritorio: rejilla. -mr-px / -mb-px + overflow-hidden recortan el último borde de cada celda */}
          <div className="hidden overflow-hidden md:block">
            <ul className="-mr-px -mb-px grid grid-cols-5">
              {techMarquee.map((name) => (
                <li
                  key={name}
                  className={cn(
                    "flex h-16 items-center justify-center border-r border-b px-3 text-center text-lg font-semibold tracking-tight text-foreground/80 xl:h-[88px]",
                    DASH
                  )}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Ilustración isométrica: la "pila" de Stackss                              */
/* -------------------------------------------------------------------------- */

const VB_W = 600
const VB_H = 460
const CX = 300 // centro horizontal de la pila
const W = 130 // semiancho de cada losa
const H = 65 // semialto de la cara superior (proporción isométrica 2:1)
const T = 16 // grosor de la losa

const INK = "color-mix(in oklch, var(--brand), var(--foreground) 55%)"
const shade = (pct: number) =>
  `color-mix(in oklch, var(--brand), black ${pct}%)`
const tint = (pct: number, base = "var(--card)") =>
  `color-mix(in oklch, var(--brand) ${pct}%, ${base})`

type Pt = [number, number]

const pts = (...p: Pt[]) => p.map(([x, y]) => `${x},${y}`).join(" ")
const rhombus = (cx: number, cy: number, w: number, h: number) =>
  pts([cx, cy - h], [cx + w, cy], [cx, cy + h], [cx - w, cy])

// Punto sobre la cara superior de una losa: u baja hacia la derecha, v sube hacia la derecha.
const face = (cy: number, u: number, v: number): Pt => [
  CX - W + W * u + W * v,
  cy + H * u - H * v,
]

function FaceLine({ cy, from, to }: { cy: number; from: Pt; to: Pt }) {
  const [x1, y1] = face(cy, ...from)
  const [x2, y2] = face(cy, ...to)
  return <line x1={x1} y1={y1} x2={x2} y2={y2} />
}

function FacePoly({
  cy,
  points,
  style,
}: {
  cy: number
  points: Pt[]
  style: CSSProperties
}) {
  return (
    <polygon
      points={pts(...points.map(([u, v]) => face(cy, u, v)))}
      style={style}
    />
  )
}

function Slab({
  cy,
  top,
  left,
  right,
  children,
}: {
  cy: number
  top: string
  left: string
  right: string
  children?: ReactNode
}) {
  return (
    <g strokeLinejoin="round" strokeWidth={1.25} style={{ stroke: INK }}>
      <polygon
        points={pts([CX - W, cy], [CX, cy + H], [CX, cy + H + T], [CX - W, cy + T])}
        style={{ fill: left }}
      />
      <polygon
        points={pts([CX, cy + H], [CX + W, cy], [CX + W, cy + T], [CX, cy + H + T])}
        style={{ fill: right }}
      />
      <polygon points={rhombus(CX, cy, W, H)} style={{ fill: top }} />
      {children}
    </g>
  )
}

function Cube({
  cx,
  cy,
  s,
  top,
  left,
  right,
}: {
  cx: number
  cy: number
  s: number
  top: string
  left: string
  right: string
}) {
  const h = s / 2
  return (
    <g strokeLinejoin="round" strokeWidth={1.25} style={{ stroke: INK }}>
      <polygon
        points={pts([cx - s, cy], [cx, cy + h], [cx, cy + h + s], [cx - s, cy + s])}
        style={{ fill: left }}
      />
      <polygon
        points={pts([cx, cy + h], [cx + s, cy], [cx + s, cy + s], [cx, cy + h + s])}
        style={{ fill: right }}
      />
      <polygon points={rhombus(cx, cy, s, h)} style={{ fill: top }} />
    </g>
  )
}

function Diamond({ x, y, s = 10 }: { x: number; y: number; s?: number }) {
  return (
    <g style={{ stroke: "none" }}>
      <polygon points={rhombus(x, y + 5, s, s / 2)} style={{ fill: shade(10) }} />
      <polygon points={rhombus(x, y, s, s / 2)} style={{ fill: tint(55) }} />
    </g>
  )
}

// Etiqueta HTML posicionada en coordenadas del viewBox. El tamaño de fuente
// escala con el ancho del contenedor para que no se desborde en móvil.
function Tag({
  x,
  y,
  anchor = "start",
  children,
}: {
  x: number
  y: number
  anchor?: "start" | "center" | "end"
  children: ReactNode
}) {
  const shift = anchor === "start" ? "0%" : anchor === "end" ? "-100%" : "-50%"
  return (
    <span
      className="absolute inline-flex items-center gap-[0.5em] border border-brand/60 px-[0.6em] py-[0.45em] font-mono leading-none tracking-wider whitespace-nowrap text-foreground uppercase [font-size:min(0.625rem,2.6cqw)]"
      style={{
        left: `${(x / VB_W) * 100}%`,
        top: `${(y / VB_H) * 100}%`,
        transform: `translate(${shift}, -50%)`,
        background: tint(14),
      }}
    >
      {children}
    </span>
  )
}

function StackIllustration() {
  const web = 150
  const flow = 238
  const agent = 326
  const nodeX = (u: number) => face(flow, u, 0.5)

  return (
    <div aria-hidden="true" className="@container relative aspect-[600/460] w-full">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="absolute inset-0 size-full"
        fill="none"
      >
        {/* Eje vertical que atraviesa la pila */}
        <line
          x1={CX}
          y1={46}
          x2={CX}
          y2={440}
          strokeWidth={1}
          strokeDasharray="3 4"
          style={{ stroke: INK }}
          strokeOpacity={0.6}
        />

        {/* Losa 3 · Agente de IA */}
        <Slab
          cy={agent}
          top="var(--card)"
          left={tint(10)}
          right={tint(22)}
        >
          <FacePoly
            cy={agent}
            points={[[0.14, 0.58], [0.5, 0.58], [0.5, 0.82], [0.14, 0.82]]}
            style={{ fill: "var(--card)" }}
          />
          <FacePoly
            cy={agent}
            points={[[0.46, 0.16], [0.86, 0.16], [0.86, 0.4], [0.46, 0.4]]}
            style={{ fill: "var(--brand)" }}
          />
        </Slab>

        {/* Losa 2 · Automatización */}
        <Slab cy={flow} top={tint(22)} left={tint(34)} right={tint(48)}>
          <g strokeWidth={1.5}>
            <line
              x1={nodeX(0.22)[0]}
              y1={nodeX(0.22)[1]}
              x2={nodeX(0.78)[0]}
              y2={nodeX(0.78)[1]}
            />
          </g>
          {[0.22, 0.5, 0.78].map((u) => {
            const [x, y] = nodeX(u)
            return (
              <polygon
                key={u}
                points={rhombus(x, y, 15, 7.5)}
                style={{ fill: u === 0.5 ? "var(--brand)" : "var(--card)" }}
              />
            )
          })}
        </Slab>

        {/* Losa 1 · Web */}
        <Slab cy={web} top="var(--brand)" left={shade(14)} right={shade(28)}>
          <g strokeLinecap="round" strokeWidth={2.5} strokeOpacity={0.6}>
            <FaceLine cy={web} from={[0.2, 0.74]} to={[0.8, 0.74]} />
            <FaceLine cy={web} from={[0.2, 0.58]} to={[0.64, 0.58]} />
            <FaceLine cy={web} from={[0.2, 0.44]} to={[0.72, 0.44]} />
          </g>
          <FacePoly
            cy={web}
            points={[[0.52, 0.12], [0.82, 0.12], [0.82, 0.3], [0.52, 0.3]]}
            style={{ fill: INK, fillOpacity: 0.35, stroke: "none" }}
          />
        </Slab>

        {/* Cubos flotantes */}
        <Cube cx={86} cy={132} s={20} top="var(--brand)" left={shade(14)} right={shade(28)} />
        <Cube cx={96} cy={346} s={34} top="var(--card)" left="var(--card)" right={tint(12)} />

        {/* Líneas guía discontinuas */}
        <g
          strokeWidth={1}
          strokeDasharray="3 3"
          strokeOpacity={0.7}
          style={{ stroke: INK }}
        >
          <line x1={CX + W} y1={web} x2={CX + W + 26} y2={web - 13} />
          <line x1={CX - W} y1={flow} x2={CX - W - 26} y2={flow - 13} />
          <line x1={CX + W} y1={agent} x2={CX + W + 26} y2={agent - 13} />
          <line x1={130} y1={346} x2={CX - W} y2={agent} />
        </g>
        <g style={{ fill: INK }}>
          <circle cx={CX + W} cy={web} r={2.5} />
          <circle cx={CX - W} cy={flow} r={2.5} />
          <circle cx={CX + W} cy={agent} r={2.5} />
        </g>

        {/* Rombos decorativos */}
        <Diamond x={60} y={70} />
        <Diamond x={515} y={86} />
        <Diamond x={556} y={236} />
        <Diamond x={36} y={290} />
        <Diamond x={420} y={424} />
      </svg>

      <Tag x={CX} y={36} anchor="center">
        Stackss
      </Tag>
      <Tag x={CX + W + 26} y={web - 13}>
        Web
      </Tag>
      <Tag x={CX - W - 26} y={flow - 13} anchor="end">
        Automatización
      </Tag>
      <Tag x={CX + W + 26} y={agent - 13}>
        Agente IA
      </Tag>
      <Tag x={96} y={418} anchor="center">
        Tus datos
      </Tag>
      <Tag x={462} y={384}>
        <span
          className="size-[0.6em] animate-pulse rounded-full bg-brand motion-reduce:animate-none"
          aria-hidden="true"
        />
        Activo
      </Tag>
    </div>
  )
}
