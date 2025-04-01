import { Ref } from "react";
import { TInvoiceDetail } from "../types/invoice";
import { TBusiness } from "../types/account";
type Props = {
    invoiceDetailData?: TInvoiceDetail;
    businessData?: TBusiness;
    contentRef?: Ref<HTMLDivElement>;
};
export declare const OrderDetail: ({ invoiceDetailData, businessData, contentRef, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
