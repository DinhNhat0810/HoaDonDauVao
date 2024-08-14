import { Modal } from "antd";
import React, { useState } from "react";

export default function CheckInvoiceModal({
  open,
  handleCancel,
  data,
}: {
  open: boolean;
  handleCancel: () => void;
  data?: any;
}) {
  return (
    <Modal width={600} open={open} onCancel={handleCancel} footer={null}>
      <div
        style={{
          fontFamily: "Times New Roman",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#2F5496",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            KẾT QUẢ KIỂM TRA THÔNG TIN HÓA ĐƠN
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Tại thời điểm ngày 10/10/2087
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            THÔNG TIN HÓA ĐƠN
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            fontWeight: "600",
          }}
        >
          <div
            style={{
              width: "40%",
            }}
          >
            <p>Mã số thuế người bán: </p>
            <p>Mã số thuế người bán: </p>
            <p>Số hóa đơn: </p>
            <p>Ký hiệu hóa đơn: </p>
          </div>
          <div
            style={{
              width: "40%",
              paddingLeft: "60px",
            }}
          >
            <p>Mẫu hóa đơn: </p>
            <p>Ngày lập: </p>
            <p>Ngày ký: </p>
            <p></p>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            THÔNG TIN CHỮ KÝ SỐ TRÊN HÓA ĐƠN
          </p>

          <div
            style={{
              padding: "0 16px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                marginTop: "8px",
                marginBottom: "4px",
              }}
            >
              Chữ ký số người bán:
            </p>

            <p>- Ký bởi: Công ty cổ phần công nghệ thẻ NACENCOMM</p>
            <p>- Nhà cung cấp: CN=CA2, O=NACENCOMM SCT, C=VN</p>
            <p>- Hiệu lực: từ 25/05/2022 đến 06/03/2025</p>
            <p>- Serial number: 5402BC5CACCE669C2015000200063CD0</p>
            <p
              style={{
                color: "green",
                marginTop: "12px",
              }}
            >
              Thông tin chữ ký số hợp lệ
            </p>
            <p
              style={{
                color: "green",
                fontWeight: "600",
              }}
            >
              Chứng thư số của NNT tại thời điểm ký hóa đơn hợp lệ.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            TÌNH TRẠNG CẤP MÃ VÀ LỊCH SỬ HÓA ĐƠN
          </p>
          <p
            style={{
              marginTop: "8px",
              padding: "0 16px",
            }}
          >
            - Hóa đơn được cấp mã ngày: 26/11/2222
          </p>
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            TÌNH TRẠNG HOẠT ĐỘNG CỦA MST NGƯỜI BÁN, NGƯỜI MUA
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            (Thông tin dùng để đối chiếu từ dữ liệu của cơ quan thuế)
          </p>

          <div
            style={{
              padding: "0 16px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                marginTop: "8px",
                marginBottom: "4px",
              }}
            >
              Người bán:
            </p>

            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  width: "200px",
                }}
              >
                - Mã số thuế: 021525454
              </p>
              <p
                style={{
                  flex: 1,
                }}
              >
                Trạng thái: Hoạt động
              </p>
            </div>
            <p>- Tên đơn vị: CN=CA2, O=NACENCOMM SCT, C=VN</p>
            <p>- Địa chỉ: từ 25/05/2022 đến 06/03/2025</p>
          </div>

          <div
            style={{
              padding: "0 16px",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                marginTop: "8px",
                marginBottom: "4px",
              }}
            >
              Người mua:
            </p>

            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  width: "200px",
                }}
              >
                - Mã số thuế: 021525454
              </p>
              <p
                style={{
                  flex: 1,
                }}
              >
                Trạng thái: Hoạt động
              </p>
            </div>
            <p>- Tên đơn vị: CN=CA2, O=NACENCOMM SCT, C=VN</p>
            <p>- Địa chỉ: từ 25/05/2022 đến 06/03/2025</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
