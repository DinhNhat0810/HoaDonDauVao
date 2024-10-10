import { TTMST_Options } from "../../../libs/constants";

export const columnsTableNCC = [
  {
    title: "STT",
    dataIndex: "key",
    render: (value: any) => value + 1,
    fixed: "left",
    width: "30px",
    align: "center",
  },

  {
    title: "Tên nhà cung cấp",
    dataIndex: "thongTinNCC",
    width: "160px",
    render: (value: any) => {
      return (
        <div>
          <div>{value?.nbten}</div>
          {/* <div>{value?.mstnban}</div> */}
        </div>
      );
    },
  },
  {
    title: "Địa chỉ",
    dataIndex: "nbdchi",
    width: "160px",
  },

  {
    title: "SL hoá đơn đầu vào",
    dataIndex: "SLHDDauvao",
    width: "60px",
    align: "center",
  },

  {
    title: "SL hoá đơn đầu ra",
    dataIndex: "SLHDDaura",
    width: "60px",
    align: "center",
  },

  {
    title: "Ngày kiểm tra",
    dataIndex: "ngayKiemTra",
    width: "60px",
    align: "center",
  },

  {
    title: "Kết quả kiểm tra",
    dataIndex: "HDRuiRo",
    width: "60px",
  },

  {
    title: "Tình trạng hoạt động",
    dataIndex: "Trangthai",
    render: (value: any) => {
      return (
        <div className="flex items-center">
          <div
            className="w-3 h-3 rounded-[2px] mr-2"
            style={{
              backgroundColor:
                TTMST_Options.find((item: any) => item.desc === value)?.color ||
                "transparent",
            }}
          ></div>
          <span>
            {TTMST_Options.find((item: any) => item.desc === value)?.label}
          </span>
        </div>
      );
    },
    width: "120px",
  },
];

export const columnsTableKhachHang = [
  {
    title: "STT",
    dataIndex: "key",
    render: (value: any) => value + 1,
    fixed: "left",
    width: "30px",
    align: "center",
  },

  {
    title: "Tên khách hàng",
    dataIndex: "thongTinKhachHang",
    width: "160px",
    render: (value: any) => {
      return (
        <div>
          <div>{value?.nmten}</div>
          {/* <div>{value?.nmmst}</div> */}
        </div>
      );
    },
  },
  {
    title: "Địa chỉ",
    dataIndex: "nmdchi",
    width: "160px",
  },

  {
    title: "SL hoá đơn đầu vào",
    dataIndex: "SLHDDauvao",
    width: "60px",
    align: "center",
  },

  {
    title: "SL hoá đơn đầu ra",
    dataIndex: "SLHDDaura",
    width: "60px",
    align: "center",
  },

  {
    title: "Ngày kiểm tra",
    dataIndex: "ngayKiemTra",
    width: "60px",
    align: "center",
  },

  {
    title: "Kết quả kiểm tra",
    dataIndex: "HDRuiRo",
    width: "60px",
  },

  {
    title: "Tình trạng hoạt động",
    dataIndex: "Trangthai",
    render: (value: any) => {
      return (
        <div className="flex items-center">
          <div
            className="w-3 h-3 rounded-[2px] mr-2"
            style={{
              backgroundColor:
                TTMST_Options.find((item: any) => item.desc === value)?.color ||
                "transparent",
            }}
          ></div>
          <span>
            {TTMST_Options.find((item: any) => item.desc === value)?.desc}
          </span>
        </div>
      );
    },
    width: "120px",
  },
];
