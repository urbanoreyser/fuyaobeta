import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Locales — Chifa Fuyao",
  description:
    "Visita nuestro local principal en Surco, Lima. Atendemos todos los días con servicio en mesa, recojo en tienda y delivery.",
}

const SCHEDULE = [
  { day: "Lunes a Jueves", hours: "11:30 am — 10:30 pm" },
  { day: "Viernes y Sábado", hours: "11:30 am — 11:30 pm" },
  { day: "Domingo", hours: "12:00 pm — 10:00 pm" },
]

const ADDRESS = "Yahuar Huaca 102, Independencia 15332"
const MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS,
)}&output=embed`

export default function LocalesPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Visítanos
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Nuestro local en Lima
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Te esperamos en nuestro local principal de Surco. Salón amplio, atención cordial
            y la mejor sazón al wok del distrito.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center rounded-full bg-brand-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground"
              >
                Local principal
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                Abierto ahora
              </span>
            </div>

            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Chifa Fuyao Surco
            </h2>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Dirección
                  </p>
                  <p className="mt-0.5 text-base font-medium text-foreground">{ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Teléfono
                  </p>
                  <a
                    href="tel:+51916638889"
                    className="mt-0.5 block text-base font-medium text-foreground hover:text-brand-red"
                  >
                    +51 916 638 889
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Correo
                  </p>
                  <a
                    href="mailto:hola@chifafuyao.pe"
                    className="mt-0.5 block text-base font-medium text-foreground hover:text-brand-red"
                  >
                    hola@chifafuyao.pe
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Clock className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Horario de atención
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {SCHEDULE.map((s) => (
                      <li
                        key={s.day}
                        className="flex justify-between gap-4 border-b border-dashed border-border/70 pb-1.5 text-foreground last:border-0"
                      >
                        <span className="font-medium">{s.day}</span>
                        <span className="text-muted-foreground">{s.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                <ExternalLink className="h-4 w-4" />
                Ver en Google Maps
              </a>
              <Link
                href="/pedido"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand-red hover:text-brand-red"
              >
                Pedir delivery
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <div className="relative aspect-[4/5] w-full sm:aspect-square lg:aspect-auto lg:h-full lg:min-h-[520px]">
              <iframe
                title="Mapa de Chifa Fuyao Surco"
                src={MAPS_EMBED}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
