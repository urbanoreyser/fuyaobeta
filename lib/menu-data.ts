export type Category = "arroces" | "tallarines" | "wok" | "sopas"

export type Dish = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: Category
  badge?: string
  rating: number
  popular?: boolean
}

export const CATEGORIES: { value: Category | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "arroces", label: "Arroces" },
  { value: "tallarines", label: "Tallarines" },
  { value: "wok", label: "Platos al Wok" },
  { value: "sopas", label: "Sopas" },
]

export const MENU: Dish[] = [
  // Arroces
  {
    id: "arroz-chaufa-especial",
    name: "Arroz Chaufa Especial",
    description:
      "Arroz frito al wok con pollo, huevo, cebolla china, kion y salsa de soya al estilo tradicional.",
    price: 18.0,
    image: "/dishes/arroz-chaufa.jpg",
    category: "arroces",
    badge: "Tradicional",
    rating: 4.9,
    popular: true,
  },
  {
    id: "arroz-chaufa-pollo",
    name: "Arroz Chaufa de Pollo",
    description:
      "Arroz salteado con pollo desmenuzado, huevo, cebollita china y un toque de aceite de ajonjolí.",
    price: 16.0,
    image: "/dishes/arroz-chaufa.jpg",
    category: "arroces",
    rating: 4.7,
  },
  {
    id: "aeropuerto",
    name: "Aeropuerto Especial",
    description:
      "Combinado de chaufa y tallarín al wok con pollo, cerdo, langostinos, huevo y verduras.",
    price: 24.0,
    image: "/dishes/aeropuerto.jpg",
    category: "arroces",
    badge: "Premium",
    rating: 4.8,
  },

  // Tallarines
  {
    id: "tallarin-saltado-pollo",
    name: "Tallarín Saltado con Pollo",
    description:
      "Tallarines salteados al wok con pollo, brócoli, pimiento, sillao y un toque de jengibre.",
    price: 16.5,
    image: "/dishes/tallarin-saltado-pollo.jpg",
    category: "tallarines",
    badge: "Clásico",
    rating: 4.9,
    popular: true,
  },
  {
    id: "combinado-tallarines-chaufa",
    name: "Combinado Tallarines con Chaufa",
    description:
      "Media porción de chaufa especial junto a tallarín saltado con pollo y verduras al wok.",
    price: 22.0,
    image: "/dishes/combinado-tallarines-chaufa.jpg",
    category: "tallarines",
    badge: "Recomendado",
    rating: 4.9,
    popular: true,
  },
  {
    id: "tallarin-especial-fuyao",
    name: "Tallarín Especial Fuyao",
    description:
      "Mezcla de pollo, carne, langostinos y verduras al wok con tallarines y salsa de la casa.",
    price: 22.0,
    image: "/dishes/tallarin-saltado-pollo.jpg",
    category: "tallarines",
    badge: "De la Casa",
    rating: 4.8,
  },

  // Platos al Wok
  {
    id: "kam-lu-wantan",
    name: "Kam Lu Wantán",
    description:
      "Wantanes crocantes bañados en salsa agridulce con langostinos, pollo, piña y verduras.",
    price: 24.0,
    image: "/dishes/kam-lu-wantan.jpg",
    category: "wok",
    badge: "Favorito",
    rating: 5.0,
    popular: true,
  },
  {
    id: "pollo-tipakay",
    name: "Pollo Tipakay",
    description:
      "Trozos de pollo apanado en salsa agridulce con piña, pimiento y cebolla, terminado al wok.",
    price: 19.0,
    image: "/dishes/pollo-tipakay.jpg",
    category: "wok",
    rating: 4.7,
  },
  {
    id: "chijaukay",
    name: "Pollo Chi Jau Kay",
    description:
      "Pollo crocante en salsa oscura de soya, kion y ajos con pimientos y cebolla china.",
    price: 19.5,
    image: "/dishes/pollo-chi-jau-kay.jpg",
    category: "wok",
    badge: "Picante",
    rating: 4.8,
  },

  // Sopas
  {
    id: "sopa-wantan",
    name: "Sopa Wantán",
    description:
      "Caldo claro con wantanes rellenos, lonjas de pollo, langostinos y verduras al estilo cantonés.",
    price: 18.0,
    image: "/dishes/sopa-wantan.jpg",
    category: "sopas",
    rating: 4.8,
  },
  {
    id: "sopa-pollo-choclo",
    name: "Sopa de Pollo con Choclo",
    description:
      "Sopa cremosa de pollo desmenuzado, choclo dulce y huevo batido en hilos, reconfortante.",
    price: 14.0,
    image: "/dishes/sopa-pollo-choclo.jpg",
    category: "sopas",
    rating: 4.6,
  },
  {
    id: "sopa-fuchifu",
    name: "Sopa Fuchifú Especial",
    description:
      "Caldo especial con langostinos, pollo, fideos de huevo y verduras frescas. La estrella de la casa.",
    price: 22.0,
    image: "/dishes/sopa-fuchifu.jpg",
    category: "sopas",
    badge: "Especial",
    rating: 4.9,
  },
]

export function formatPrice(value: number) {
  return `S/. ${value.toFixed(2)}`
}

export function getDishById(id: string) {
  return MENU.find((d) => d.id === id)
}
