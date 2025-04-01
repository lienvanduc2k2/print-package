import { Ref } from "react";
import { TInvoiceDetail } from "../../types/invoice";
import { TBusiness } from "../../types/account";
import {
  convertTimestampToDateDashString,
  hh_mm,
  parseInvoiceStatus,
  parseOrderStatus,
} from "../../utils/libs";
type Props = {
  invoiceDetailData?: TInvoiceDetail;
  businessData?: TBusiness;
  contentRef?: Ref<HTMLDivElement>;
};

const OrderDetail = ({
  invoiceDetailData,
  businessData,
  contentRef,
}: Props) => {
  const totalPrice = invoiceDetailData?.products_data.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "auto",

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "12px",
          padding: "16px",
          backgroundColor: "white",
        }}
      >
        <div
          ref={contentRef}
          id="print-section"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "16px",
            padding: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              gap: "8px",
            }}
          >
            <h5
              style={{
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "bold",
                lineHeight: "20px",
                color: "#262626",
              }}
            >
              {businessData?.name}
            </h5>
            <p
              style={{
                fontSize: "10px",
                lineHeight: "14px",
                color: "#4E4E4E",
                fontWeight: "600",
              }}
            >
              Đ/c: {businessData?.address}
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h4
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
                lineHeight: "24px",
                color: "#262626",
              }}
            >
              HOÁ ĐƠN BÁN HÀNG
            </h4>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "10px",
                    textAlign: "left",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Số hoá đơn:</span>
                  <span style={{ fontWeight: "500" }}>
                    {invoiceDetailData?.invoice_data?.invoice_id}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontSize: "10px",
                    textAlign: "right",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Ngày:</span>
                  <span style={{ fontWeight: "500" }}>
                    {convertTimestampToDateDashString(
                      Number(invoiceDetailData?.invoice_data?.updated_at)
                    )}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "10px",
                    textAlign: "left",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Bàn:</span>
                  <span style={{ fontWeight: "500" }}>
                    Bàn {invoiceDetailData?.invoice_data?.table_name}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontSize: "10px",
                    textAlign: "right",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Giờ:</span>

                  <span style={{ fontWeight: "500" }}>
                    {hh_mm(
                      new Date(invoiceDetailData?.invoice_data?.updated_at || 0)
                    )}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "10px",
                    textAlign: "left",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Trạng thái đơn:</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontSize: "10px",
                    textAlign: "right",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>
                    {parseOrderStatus(invoiceDetailData?.invoice_data?.status)}
                  </span>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "10px",
                    textAlign: "left",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>
                    Phương thức thanh toán:
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontSize: "10px",
                    textAlign: "right",
                    lineHeight: "14px",
                    color: "#262626",
                    flex: 1,
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>
                    {parseInvoiceStatus(
                      invoiceDetailData?.invoice_data.payment_method
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  borderTop: "1px solid #8C8C8C",
                }}
              ></div>

              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "10% 30% 10% 20% 30%",
                  fontSize: "10px",
                  lineHeight: "14px",
                  color: "#262626",
                  fontWeight: "500",
                }}
              >
                <span style={{ textAlign: "left" }}>TT</span>
                <span style={{ textAlign: "center" }}>Tên món</span>
                <span style={{ textAlign: "center" }}>SL</span>
                <span style={{ textAlign: "center" }}>Đơn giá</span>
                <span style={{ textAlign: "right" }}>Thành tiền</span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  borderTop: "1px solid #8C8C8C",
                }}
              ></div>
            </div>
            {invoiceDetailData?.products_data.map((item, index) => (
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "10% 30% 10% 20% 30%",
                  fontSize: "10px",
                  lineHeight: "14px",
                  color: "#262626",
                  fontWeight: "500",
                }}
                key={item.product_id}
              >
                <span style={{ textAlign: "left" }}>{index + 1}</span>
                <span style={{ textAlign: "center" }}>{item.name}</span>
                <span style={{ textAlign: "center" }}>{item.amount}</span>
                <span style={{ textAlign: "center" }}>{item.price}</span>
                <span style={{ textAlign: "right" }}>
                  {item.price * item.amount}
                </span>
              </div>
            ))}

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  lineHeight: "14px",
                  color: "#262626",
                }}
              >
                Tổng cộng:
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  color: "#262626",
                }}
              >
                {String(totalPrice)} VND
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                borderTop: "1px dashed #D9D9D9",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  color: "#262626",
                }}
              >
                Tổng:
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "28px",
                  color: "#262626",
                }}
              >
                {String(totalPrice)} VND
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "16px",
              color: "#262626",
              fontStyle: "italic",
            }}
          >
            {businessData?.name} xin chân thành cảm ơn!
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 p-4">
          <div
            style={{
              width: "100%",
              height: "1px",
              borderTop: "1px dashed #D9D9D9",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
