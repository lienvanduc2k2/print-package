import { TProductInBill } from "./product";

export type TOrderInfor = {
  order_id: number;
  table_name: string;
  name: string;
  point: number;
  updated_at: number;
  status: 0 | 1 | 2; // 0: thanh toán, 1: Có món, 2: Chưa có món
  product_amount: number;
};

export type TOrderDetail = {
  order_info: TOrderInfor;
  products: TProductInBill[];
};

export type TTable = {
  table_id: number;
  table_name: string;
  max_slot: number;
  available_slot: number;
  customer_id: number | null;
  is_available: boolean;
  order_id: number | null;
  order_code: string | null;
  total_price: number | null;
  product_amount: number | null;
};

// const a =  {
//         "table_id": 1,
//         "table_name": "Ban 1",
//         "max_slot": 0,
//         "available_slot": 0,
//         "customer_id": 10,
//         "is_available": false,
//         "order_id": 91,
//         "order_code": "SO000091",
//         "total_price": 165000.0,
//         "product_amount": 5
//     },
