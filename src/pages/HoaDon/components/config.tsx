import {
  HTHDO_Options,
  IMAGES,
  TTHD,
  TTMST_Options,
} from "../../../libs/constants";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import ErrorIcon from "../../../components/Icon/error";
import SuccessIcon from "../../../components/Icon/success";

export const columnsTable = ({
  handleDownload,
  handleTogglePopover,
  openPopover = "",
  handleViewInvoice,
}: {
  handleDownload: (values: any) => void;
  handleTogglePopover: (stt: string) => void;
  openPopover: string;
  handleViewInvoice: (values: any, record: any) => void;
}) => {
  return [
    {
      title: "STT",
      dataIndex: "key",
      render: (value: any) => value + 1,
      fixed: "left",
      width: "60px",
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      render: (_: any, record: any) => {
        return (
          <Popover
            open={
              openPopover === record?.key
                ? true
                : openPopover === ""
                ? false
                : false
            }
            onOpenChange={(visible) => {
              if (!visible) {
                handleTogglePopover("");
              } else {
                handleTogglePopover(record?.key);
              }
            }}
            content={
              <div>
                <div
                  className="flex items-center cursor-pointer px-2 py-1 hover:bg-gray-200 rounded-md"
                  onClick={() => {
                    handleDownload({
                      nbmst: record?.thongTinNguoiBan?.mst,
                      khhdon: record?.thongTinHoaDon?.khhdon,
                      shdon: record?.thongTinHoaDon?.shdon,
                      khmshdon: record?.thongTinHoaDon?.khmshdon,
                    });
                    handleTogglePopover("");
                  }}
                >
                  <div className="w-6">
                    <DownloadOutlined />
                  </div>
                  <span className="text-sm flex-1">Tải xuống</span>
                </div>

                <div
                  className="flex items-center cursor-pointer px-2 py-1 hover:bg-gray-200 rounded-md"
                  onClick={() => {
                    handleViewInvoice(
                      {
                        nbmst: record?.thongTinNguoiBan?.mst,
                        khhdon: record?.thongTinHoaDon?.khhdon,
                        shdon: record?.thongTinHoaDon?.shdon,
                        khmshdon: record?.thongTinHoaDon?.khmshdon,
                      },
                      record
                    );
                  }}
                >
                  <div className="w-6">
                    <EyeOutlined />
                  </div>
                  <span className="text-sm flex-1">Xem chi tiết</span>
                </div>
              </div>
            }
            trigger="click"
            placement="bottomRight"
          >
            <img
              src={IMAGES.icon.dots}
              alt="dots"
              className="cursor-pointer w-9 h-9"
              onClick={() => {
                handleTogglePopover(record?.key);
              }}
            />
          </Popover>
        );
      },
      fixed: "left",
      width: "60px",
    },

    {
      title: "Mẫu số Ký hiệu / Số HĐ",
      dataIndex: "khmshdon",
      width: "120px",
      render: (value: any, record: any) => {
        return (
          <div>
            <span>{record?.khmshdon}</span>__<span>{record?.shdon}</span>
          </div>
        );
      },
    },

    {
      title: "Ngày lập",
      dataIndex: "tdlap",
      width: "10%",
    },

    {
      title: "Ngày ký",
      dataIndex: "nky",
      width: "10%",
    },
    {
      title: "Tổng tiền",
      dataIndex: "tongThanhToan",
      width: "100px",
    },
    {
      title: "Trạng thái HĐ",
      dataIndex: "tthd",
      render: (value: any) => {
        return (
          <div className="flex items-center justify-center h-full">
            {value === 2 && <ErrorIcon />}
            {value === 1 && <SuccessIcon />}
          </div>
        );
      },
      width: "80px",
    },

    {
      title: "Ngày cấp mã CQT",
      dataIndex: "ncnhat",
      width: "10%",
    },
    {
      title: "Hình thức HĐ",
      dataIndex: "hthuc",
      render: (value: any) => {
        return (
          <div className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor:
                  HTHDO_Options.find((item) => item.value === value)?.color ||
                  "transparent",
              }}
            ></div>
            <span>
              {HTHDO_Options.find((item) => item.value === value)?.label}
            </span>
          </div>
        );
      },
      width: "200px",
    },

    {
      title: "Trạng thái MST người bán",
      dataIndex: "tthai",
      render: (value: any) => {
        return (
          <div className="flex items-center">
            <div
              className="w-3 h-3 rounded-[2px] mr-2"
              style={{
                backgroundColor:
                  TTMST_Options.find((item) => item.value === value)?.color ||
                  "transparent",
              }}
            ></div>
            <span>
              {TTMST_Options.find((item) => item.value === value)?.label}
            </span>
          </div>
        );
      },
      width: "160px",
    },
  ];
};
