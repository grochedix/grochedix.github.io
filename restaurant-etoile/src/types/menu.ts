export type MenuDish = {
  name: string
  detail: string
}

export type MenuPage = {
  id: string
  title: string
  subtitle?: string
  dishes: MenuDish[]
}
