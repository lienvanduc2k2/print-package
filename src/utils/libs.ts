import { TPaymentMethod } from "../types/invoice";

export const convertTimestampToDateDashString = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return formatDashTime(date);
};
export const formatDashTime = (dateString: Date) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const hh_mm = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

export function parseInvoiceStatus(status?: TPaymentMethod) {
  switch (status) {
    case 0:
      return "Mã QR";
    case 1:
      return "Tiền mặt";
    case 2:
      return "Thẻ";
    case 3:
      return "Liên kết";
    default:
      return "";
  }
}

export function parseOrderStatus(status?: number) {
  switch (status) {
    case 0:
      return "Hoàn thành";
    case 1:
      return "Đang xử lý";
    case 2:
      return "Đang chọn món";
    case 3:
      return "Chưa gọi món";
    default:
      return "";
  }
}
