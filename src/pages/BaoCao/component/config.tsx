import { render } from "react-dom";
import { convertToVnd } from "../../../libs/common";
import { HTHDO_Options, IMAGES, TTMST_Options } from "../../../libs/constants";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { Popover } from "antd";

export const data = Array.from({ length: 10 }, (_, index) => {
  return {
    key: index,
    khmshdon: "Công ty cổ phần công nghệ Nacencomm",
    shdon: "HD001",
    hthuc: (index % 3) + 1, // Giá trị hthuc luân phiên từ 1 đến 3
    tongThanhToan: "100000000000",
    thueSuat: "10%",
    ncnhat: "01/01/2021",
    tdlap: "01/01/2021",
    tthai: "Đã kích hoạt",
    ttmst: (index % 3) + 1,
    thongTinHoaDon: {
      khmshdon: "khách hàng mua sỉ hóa đơn" + index + 1,
      khhdon: "ký hiệu hóa đơn" + index + 1,
      shdon: "số hóa đơn" + index + 1,
      ntao: "Ngày tạo" + index + 1,
    },
    thongTinNguoiBan: {
      nbten: "Tên người bán" + index + 1,
      mst: "MST" + index + 1,
    },
    tongTruocThue: "1000000",
    nky: "01/01/2021",
    ghiChu: "Ghi chú" + index + 1,
  };
});

export const columnsTable = ({
  handleOpenModal,
}: {
  handleOpenModal?: () => void;
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
      dataIndex: "khmshdon",
      width: "200px",
      render: (value: any) => {
        return (
          <p onClick={handleOpenModal} className="underline cursor-pointer">
            {value}
          </p>
        );
      },
    },
    {
      title: "MST",
      dataIndex: "shdon",
      width: "120px",
    },
    {
      title: "Ngày hóa đơn",
      dataIndex: "hthuc",
      width: "140px",
    },
    {
      title: "Ngày ký",
      dataIndex: "nky",
      width: "120px",
    },
    {
      title: "Mẫu số",
      dataIndex: "hthuc",
      width: "120px",
    },
    {
      title: "Ký hiệu",
      dataIndex: "hthuc",
      width: "120px",
    },
    {
      title: "Tổng tiền trước thuế",
      dataIndex: "tongThanhToan",
      render: (value: any) => {
        return <p>{convertToVnd(Number(value))}</p>;
      },
      width: "140px",
    },

    {
      title: "Tổng thanh toán",
      dataIndex: "tongThanhToan",
      render: (value: any) => {
        return <p>{convertToVnd(Number(value))}</p>;
      },
      width: "140px",
    },
    {
      title: "Trạng thái HĐ",
      dataIndex: "tongThanhToan",
      width: "120px",
    },

    {
      title: "Ngày đổi trạng thái trên CQT",
      dataIndex: "ncnhat",
      width: "140px",
    },

    {
      title: "Kết quả kiểm tra",
      dataIndex: "tdlap",
    },
  ];
};
