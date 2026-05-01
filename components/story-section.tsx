export function StorySection() {
  return (
    <section
      id="historia"
      className="border-b border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-secondary">
            <img
              src="/fisherman.jpg"
              alt="Pescador artesanal sosteniendo la pesca del día"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-7 lg:pl-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Nuestra historia · Desde 2003
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            Tres generaciones aprendiendo a leer el mar.
          </h2>
          <div className="flex flex-col gap-4 font-light leading-relaxed text-muted-foreground text-pretty md:text-lg">
            <p>
              Marea nació en una pequeña caleta del norte, donde nuestro
              fundador don Esteban aprendió a distinguir un buen pescado por el
              brillo de sus ojos y la firmeza de su carne.
            </p>
            <p>
              Hoy somos un equipo de cocineros, pescadores y curadores
              obsesionados con un solo objetivo: que cada comensal entienda, en
              un solo bocado, por qué el mar es un lugar sagrado.
            </p>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Años
              </dt>
              <dd className="font-serif text-3xl font-light md:text-4xl">22</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Caletas aliadas
              </dt>
              <dd className="font-serif text-3xl font-light md:text-4xl">14</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Especies de temporada
              </dt>
              <dd className="font-serif text-3xl font-light md:text-4xl">36</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
