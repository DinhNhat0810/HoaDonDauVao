import { convertToVnd } from "../../../libs/common";
import { TTHD, TTMST_Options } from "../../../libs/constants";

export const columnsTable = ({
  handleOpenModal,
}: {
  handleOpenModal: (data: any) => void;
}) => {
  return [
    {
      title: "STT",
      dataIndex: "key",
      render: (value: any) => value + 1,
      fixed: "left",
      width: "60px",
      align: "center",
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "tenncc",
      width: "200px",
      render: (value: any, record: any) => {
        return (
          <p
            onClick={() => handleOpenModal(record)}
            className="underline cursor-pointer"
          >
            {value}
          </p>
        );
      },
    },
    {
      title: "MST",
      dataIndex: "mstnban",
      width: "140px",
    },
    {
      title: "Ngày hóa đơn",
      dataIndex: "ntao",
      width: "140px",
    },
    {
      title: "Ngày ký",
      dataIndex: "nky",
      width: "120px",
    },
    {
      title: "Mẫu số",
      dataIndex: "khmshdon",
      width: "100px",
    },
    {
      title: "Ký hiệu",
      dataIndex: "khhdon",
      width: "100px",
    },
    {
      title: "Tổng tiền trước thuế",
      dataIndex: "tgtcthue",
      render: (value: any) => {
        return <p>{convertToVnd(Number(value))}</p>;
      },
      width: "140px",
    },

    {
      title: "Tổng thanh toán",
      dataIndex: "tgtttbso",
      render: (value: any) => {
        return <p>{convertToVnd(Number(value))}</p>;
      },
      width: "140px",
    },
    {
      title: "Trạng thái HĐ",
      dataIndex: "tthai",
      width: "140px",
      render: (value: any) => {
        return (
          <div>
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-[2px] mr-3"
                style={{
                  backgroundColor:
                    TTHD.find((item: any) => item.value === value)?.color ||
                    "transparent",
                }}
              ></div>
              <span className="flex-1">
                {TTHD.find((item: any) => item.value === value)?.label}
              </span>
            </div>
          </div>
        );
      },
    },

    {
      title: "Ngày đổi trạng thái trên CQT",
      dataIndex: "ncnhat",
      width: "140px",
    },

    {
      title: "Kết quả kiểm tra",
      dataIndex: "kqKiemTra",
      render: (value: any) => {
        return (
          <div>
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-[2px] mr-2"
                style={{
                  backgroundColor:
                    TTMST_Options.find((item: any) => item.desc === value?.kq)
                      ?.color || "transparent",
                }}
              ></div>
              <span>
                {
                  TTMST_Options.find((item: any) => item.desc === value?.kq)
                    ?.desc
                }
              </span>
            </div>

            <div className="ml-5">{value?.HDRuiro}</div>
          </div>
        );
      },
    },
  ];
};
