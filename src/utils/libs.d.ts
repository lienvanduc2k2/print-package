import { TPaymentMethod } from "../types/invoice";
export declare const convertTimestampToDateDashString: (timestamp: number) => string;
export declare const formatDashTime: (dateString: Date) => string;
export declare const hh_mm: (date: Date) => string;
export declare function parseInvoiceStatus(status?: TPaymentMethod): "Mã QR" | "Tiền mặt" | "Thẻ" | "Liên kết" | "";
export declare function parseOrderStatus(status?: number): "" | "Hoàn thành" | "Đang xử lý" | "Đang chọn món" | "Chưa gọi món";
