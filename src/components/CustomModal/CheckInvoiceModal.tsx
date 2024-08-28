import { Modal } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { convertToVnd } from "../../libs/common";
dayjs.extend(customParseFormat);

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
            Tại thời điểm ngày {dayjs(new Date()).format("DD/MM/YYYY")}
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
              width: "50%",
            }}
          >
            <p>Mã số thuế người bán: {data?.thongTinNguoiBan.mst}</p>
            <p>Tổng tiền thanh toán: {convertToVnd(data?.tgtttbso)}</p>
            <p>Số hóa đơn: {data?.shdon}</p>
            <p>Ký hiệu hóa đơn: {data?.khhdon}</p>
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <p>Mẫu hóa đơn: {data?.thdon}</p>
            <p>Ngày lập: {data?.tdlap}</p>
            <p>Ngày ký: {data?.nky}</p>
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

            <p>- Ký bởi: {data?.cksNguoiBanObj?.CN}</p>
            <p>- Nhà cung cấp: {data?.cksNguoiBanObj?.Issuer}</p>
            <p>
              - Hiệu lực: từ{" "}
              {dayjs(data?.cksNguoiBanObj?.NotAfter).format("DD/MM/YYYY")} đến{" "}
              {dayjs(data?.cksNguoiBanObj?.NotBefore).format("DD/MM/YYYY")}
            </p>
            <p>- Serial number: {data?.cksNguoiBanObj?.SerialNumber}</p>
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
            - Hóa đơn được cấp mã ngày:{" "}
            {data?.ncma &&
              dayjs(data?.ncma, "DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY")}
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
                - Mã số thuế: {data?.thongTinNguoiBan.mst}
              </p>
              <p
                style={{
                  flex: 1,
                }}
              >
                Trạng thái:
                <span
                  style={{
                    color:
                      data?.thongTinNguoiMua?.trangThai === "MST đang hoạt động"
                        ? "green"
                        : "orange",
                    marginLeft: "8px",
                  }}
                >
                  {data?.thongTinNguoiBan?.trangThai}
                </span>
              </p>
            </div>
            <p>- Tên đơn vị: {data?.thongTinNguoiBan?.nbten}</p>
            <p>- Địa chỉ: {data?.thongTinNguoiBan?.nbdchi}</p>
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
                - Mã số thuế: {data?.thongTinNguoiMua?.nmmst}
              </p>
              <p
                style={{
                  flex: 1,
                }}
              >
                Trạng thái:
                <span
                  style={{
                    color:
                      data?.thongTinNguoiMua?.trangThai === "MST đang hoạt động"
                        ? "green"
                        : "orange",
                    marginLeft: "8px",
                  }}
                >
                  {data?.thongTinNguoiMua?.trangThai}
                </span>
              </p>
            </div>
            <p>- Tên đơn vị: {data?.thongTinNguoiMua?.nmten}</p>
            <p>- Địa chỉ: {data?.thongTinNguoiMua?.nmdchi}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
