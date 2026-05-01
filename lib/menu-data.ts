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
    description: "",
    price: 18.0,
    image:
      "/dishes/arroz-chaufa.jpg",
    category: "arroces",
    badge: "Tradicional",
    rating: 4.9,
    popular: true,
  },
  {
    id: "arroz-chaufa-pollo",
    name: "Arroz Chaufa de Pollo",
    description: "",
    price: 16.0,
    image:
      "/dishes/arroz-chaufa.jpg",
    category: "arroces",
    rating: 4.7,
  },
  {
    id: "arroz-chaufa-mariscos",
    name: "Arroz Chaufa de Mariscos",
    description: "",
    price: 24.0,
    image: "/dishes/arroz-chaufa-mariscos.jpg",
    category: "arroces",
    badge: "Premium",
    rating: 4.8,
  },

  // Tallarines
  {
    id: "tallarin-saltado-pollo",
    name: "Tallarín Saltado con Pollo",
    description: "",
    price: 16.5,
    image: "/dishes/tallarin-saltado-pollo.jpg",
    category: "tallarines",
    badge: "Clásico",
    rating: 4.9,
    popular: true,
  },
  {
    id: "tallarin-verduras",
    name: "Tallarín con Verduras",
    description: "",
    price: 14.5,
    image: "/dishes/tallarin-verduras.jpg",
    category: "tallarines",
    rating: 4.6,
  },
  {
    id: "tallarin-especial-fuyao",
    name: "Tallarín Especial Fuyao",
    description: "",
    price: 22.0,
    image: "/dishes/tallarin-especial.jpg",
    category: "tallarines",
    badge: "De la Casa",
    rating: 4.8,
  },

  // Platos al Wok
  {
    id: "kam-lu-wantan",
    name: "Kam Lu Wantán",
    description: "",
    price: 24.0,
    image:
      "/dishes/kam-lu-wantan.jpg",
    category: "wok",
    badge: "Favorito",
    rating: 5.0,
    popular: true,
  },
  {
    id: "pollo-tipakay",
    name: "Pollo Tipakay",
    description: "",
    price: 19.0,
    image: "/dishes/pollo-tipakay.jpg",
    category: "wok",
    rating: 4.7,
  },
  {
    id: "chijaukay",
    name: "Pollo Chijaukay",
    description: "",
    price: 19.5,
    image: "/dishes/chijaukay.jpg",
    category: "wok",
    badge: "Más Pedido",
    rating: 4.9,
    popular: true,
  },

  // Sopas
  {
    id: "sopa-wantan",
    name: "Sopa Wantán",
    description: "",
    price: 18.0,
    image: "/dishes/sopa-wantan.jpg",
    category: "sopas",
    rating: 4.8,
  },
  {
    id: "Pollo-con-champinones-y-chaufa",
    name: "Pollo con Champiñones y Chaufa",
    description: "",
    price: 14.0,
    image: "/dishes/Pollo-con-champinones-y-chaufa.png",
    category: "sopas",
    rating: 4.6,
  },
  {
    id: "sopa-fuyao-especial",
    name: "Sopa Fuyao Especial",
    description: "",
    price: 22.0,
    image: "/dishes/sopa-fuyao.jpg",
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
