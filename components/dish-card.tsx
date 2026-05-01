"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { toast } from "sonner"
import { useCart } from "@/components/cart-context"
import { formatPrice, type Dish } from "@/lib/menu-data"
import { cn } from "@/lib/utils"

type Variant = "popular" | "menu"

export function DishCard({
  dish,
  variant = "menu",
}: {
  dish: Dish
  variant?: Variant
}) {
  const { add, increment, decrement, getQuantity } = useCart()
  const qty = getQuantity(dish.id)

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg",
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
        <Image
          src={dish.image || "/placeholder.svg"}
          alt={dish.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {dish.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-md bg-brand-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-sm">
            {dish.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div
          className="flex items-center gap-0.5 text-brand-gold"
          aria-label={`Calificación ${dish.rating} de 5`}
        >
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="h-3.5 w-3.5 fill-current" aria-hidden />
          ))}
        </div>

        <h3 className="font-serif text-lg font-bold leading-snug text-foreground sm:text-xl">
          {dish.name}
        </h3>

        {variant === "menu" && (
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {dish.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <p className="font-serif text-xl font-bold text-brand-gold-dark sm:text-2xl">
            {formatPrice(dish.price)}
          </p>

          {qty === 0 ? (
            <button
              onClick={() => {
                add(dish.id)
                toast.success(`${dish.name} añadido`)
              }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              <ShoppingCart className="h-4 w-4" />
              Agregar
            </button>
          ) : (
            <div className="inline-flex items-center gap-1 rounded-full border border-brand-red bg-white p-1">
              <button
                onClick={() => decrement(dish.id)}
                aria-label={`Disminuir cantidad de ${dish.name}`}
                className="flex h-8 w-8 items-center justify-center rounded-full text-brand-red transition-colors hover:bg-brand-red hover:text-white"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span
                className="min-w-6 px-1 text-center text-sm font-bold text-foreground"
                aria-live="polite"
              >
                {qty}
              </span>
              <button
                onClick={() => increment(dish.id)}
                aria-label={`Aumentar cantidad de ${dish.name}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white transition-colors hover:bg-brand-red-dark"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
