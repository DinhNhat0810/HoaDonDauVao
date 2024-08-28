import { TTMST_Options } from "../../../libs/constants";

export const data = Array.from({ length: 10 }, (_, index) => {
  return {
    key: index,
    khmshdon: "01GTKT0/001",
    shdon: "HD001",
    hthuc: (index % 3) + 1, // Giá trị hthuc luân phiên từ 1 đến 3
    tongThanhToan: "1000000",
    thueSuat: "10%",
    ncnhat: "01/01/2021",
    tdlap: "01/01/2021",
    tthai: "Đã kích hoạt",
    ttmst: (index % 3) + 1, // Giá trị ttmst luân phiên từ 1 đến 3
  };
});

export const columnsTable = [
  {
    title: "STT",
    dataIndex: "key",
    render: (value: any) => value + 1,
    fixed: "left",
    width: "30px",
  },

  {
    title: "Tên khách hàng",
    dataIndex: "khmshdon",
    width: "80px",
  },
  {
    title: "Địa chỉ",
    dataIndex: "shdon",
    width: "100px",
  },

  {
    title: "SL hoá đơn đầu vào",
    dataIndex: "tongThanhToan",
    width: "60px",
  },

  {
    title: "SL hoá đơn đầu ra",
    dataIndex: "tongThanhToan",
    width: "60px",
  },

  {
    title: "Ngày kiểm tra",
    dataIndex: "tongThanhToan",
    width: "80px",
  },

  {
    title: "Kết quả kiểm tra",
    dataIndex: "ncnhat",
    width: "10%",
  },

  {
    title: "Tình trạng hoạt động",
    dataIndex: "ttmst",
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
    width: "120px",
  },
];
