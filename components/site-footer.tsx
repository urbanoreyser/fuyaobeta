export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-serif text-3xl font-medium">Marea</span>
            <p className="mt-4 max-w-sm font-light leading-relaxed text-background/70">
              Mariscos del Pacífico, capturados con respeto y servidos con
              oficio. Una historia que renace cada mañana con la marea.
            </p>
          </div>

          <FooterColumn
            title="Visítanos"
            items={[
              "Av. del Faro 1820",
              "Caleta Marina",
              "+56 2 2987 6543",
              "hola@marea.cl",
            ]}
          />

          <FooterColumn
            title="Navegar"
            items={[
              { label: "Filosofía", href: "#filosofia" },
              { label: "Especialidades", href: "#especialidades" },
              { label: "Mercado", href: "#mercado" },
              { label: "Historia", href: "#historia" },
              { label: "Reservar", href: "#reservar" },
            ]}
          />

          <FooterColumn
            title="Síguenos"
            items={[
              { label: "Instagram", href: "#" },
              { label: "Facebook", href: "#" },
              { label: "Newsletter", href: "#" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-background/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/50">
            © {new Date().getFullYear()} Marea · Todos los derechos reservados
          </p>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.2em] text-background/50">
            <a href="#" className="hover:text-background">
              Privacidad
            </a>
            <a href="#" className="hover:text-background">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

type Item = string | { label: string; href: string }

function FooterColumn({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-4 md:col-span-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-background/50">
        {title}
      </span>
      <ul className="flex flex-col gap-2 font-light text-background/85">
        {items.map((item, i) => {
          const isLink = typeof item !== "string"
          return (
            <li key={i}>
              {isLink ? (
                <a
                  href={item.href}
                  className="transition-colors hover:text-background"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
