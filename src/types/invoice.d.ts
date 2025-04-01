import { TProductInBill } from './product'

export type TPaymentMethod = 0 | 1 | 2 | 3
// {
//   QR: 0,
//   CASH: 1,
//   CARD: 2,
//   LINK: 3,
// }
export type InvoiceData = {
  customer_id: number
  invoice_id: number
  name: string
  order_code: string
  order_id: number
  payment_method: TPaymentMethod
  phone_number: boolean
  point: number
  receive_amount: number
  return_amount: number
  status: number
  table_id: number
  table_name: string
  total_price: number
  updated_at: number
}

export type TInvoiceDetail = {
  invoice_data: InvoiceData
  merchant_info: {
    id: number | null
    name: string
  }
  products_data: TProductInBill[]
}
