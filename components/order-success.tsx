"use client"

import Link from "next/link"
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react"
import { formatPrice } from "@/lib/menu-data"
import type { CartLine } from "@/components/cart-context"

type Props = {
  orderNumber: string
  customerName: string
  deliveryType: "delivery" | "pickup"
  payment: "yape" | "plin" | "cash"
  total: number
  lines: CartLine[]
  address?: string
  phone?: string
}

const PAYMENT_LABEL: Record<Props["payment"], string> = {
  yape: "Yape",
  plin: "Plin",
  cash: "Efectivo al recibir",
}

export function OrderSuccess({
  orderNumber,
  customerName,
  deliveryType,
  payment,
  total,
  lines,
  address,
  phone,
}: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="bg-brand-red px-6 py-10 text-center text-white sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] opacity-90">
            ¡Pedido confirmado!
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl text-balance">
            Gracias, {customerName.split(" ")[0]}
          </h1>
          <p className="mt-3 text-sm opacity-90 sm:text-base">
            Tu pedido fue recibido y ya está en cocina. Te llamaremos si necesitamos algún
            detalle adicional.
          </p>
        </div>

        <div className="px-6 py-8 sm:px-10">
          <div className="rounded-2xl border border-dashed border-brand-gold bg-brand-gold/10 p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-dark">
              Número de pedido
            </p>
            <p className="mt-1 font-mono text-3xl font-bold text-foreground sm:text-4xl">
              #{orderNumber}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tipo de entrega
              </p>
              <p className="mt-1 flex items-center gap-2 font-semibold text-foreground">
                {deliveryType === "delivery" ? (
                  <>
                    <MapPin className="h-4 w-4 text-brand-red" />
                    Delivery a domicilio
                  </>
                ) : (
                  <>
                    <Clock className="h-4 w-4 text-brand-red" />
                    Recojo en tienda
                  </>
                )}
              </p>
              {address && (
                <p className="mt-1 text-sm text-muted-foreground">{address}</p>
              )}
              {phone && (
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" />
                  {phone}
                </p>
              )}
            </div>

            <div className="rounded-xl border border-border p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Método de pago
              </p>
              <p className="mt-1 font-semibold text-foreground">
                {PAYMENT_LABEL[payment]}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {payment === "cash"
                  ? "Pagas al recibir tu pedido."
                  : "Pago confirmado vía billetera digital."}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-serif text-xl font-bold text-foreground">Detalle</h2>
            <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
              {lines.map((line) => (
                <li
                  key={line.id}
                  className="flex items-center justify-between gap-3 px-4 py-3 text-sm"
                >
                  <div>
                    <p className="font-medium text-foreground">{line.dish.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {line.quantity} × {formatPrice(line.dish.price)}
                    </p>
                  </div>
                  <p className="font-semibold text-foreground">
                    {formatPrice(line.dish.price * line.quantity)}
                  </p>
                </li>
              ))}
              <li className="flex items-center justify-between gap-3 bg-secondary/40 px-4 py-3">
                <span className="text-sm font-semibold text-foreground">Total pagado</span>
                <span className="font-serif text-2xl font-bold text-brand-gold-dark">
                  {formatPrice(total)}
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark sm:flex-none"
            >
              Volver al inicio
            </Link>
            <Link
              href="/carta"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand-red hover:text-brand-red sm:flex-none"
            >
              Hacer otro pedido
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
