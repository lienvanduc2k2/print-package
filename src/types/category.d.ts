export type TCategory = {
  category_id: number
  category_name: string
  description: string
  status: boolean
  products: never[]
}

export type TCategoryInProduct = {
  id: number
  name: string
}
