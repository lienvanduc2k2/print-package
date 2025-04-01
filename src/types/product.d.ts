import { TCategoryInProduct } from './category'
import { TTable } from './table'

export type TProductInBill = {
  product_id: number
  name: string
  amount: number
  img: string
  price: number
}

export type TProduct = {
  img: string
  name: string
  tax: number
  status: number
  updated_at: string
  product_id: number
  code: string
  merchant_id: number | null
  price: number
  cost: number
  created_at: string
  categories: number[]
}

export type TOrderProduct = {
  order_id: TTable['order_id']
  products: (TProduct & { amount: number })[]
}

export type TProductPayload = {
  code: string
  name: string
  price: number
  img: string
  cost: number
  tax: number
  category_ids: number[]
  status: number
}

export type TProductDetail = {
  categories: TCategoryInProduct[]
  product: {
    category_ids: number[]
    code: string
    cost: number
    img: string
    name: string
    price: number
    status: number
    tax: number
  }
}
