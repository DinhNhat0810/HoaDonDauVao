import { HTHDO_Options, TTMST_Options } from "../../../libs/constants";

export const columnsTable = () => {
  return [
    {
      title: "STT",
      dataIndex: "key",
      render: (value: any) => value + 1,
      width: "40px",
      align: "center",
    },

    {
      title: "Thông tin người bán",
      dataIndex: "thongTinNguoiBan",
      width: "200px",
      render: (value: any, record: any) => {
        return (
          <div>
            <p>{value?.nbten}</p>
            <p>{value?.mst}</p>
          </div>
        );
      },
    },

    {
      title: "Mẫu số / Ký hiệu / Số HĐ",
      dataIndex: "khmshdon",
      width: "120px",
      render: (value: any, record: any) => {
        return (
          <div>
            <span>{record?.khmshdon}</span> / <span>{record?.khhdon}</span> /{" "}
            <span>{record?.shdon}</span>
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
    // {
    //   title: "Trạng thái HĐ", //pending
    //   dataIndex: "tthd",
    //   render: (value: any) => {
    //     return (
    //       <div className="flex items-center justify-center h-full">
    //         {value === 2 && <ErrorIcon />}
    //         {value === 1 && <SuccessIcon />}
    //       </div>
    //     );
    //   },
    //   width: "80px",
    // },

    {
      title: "Ngày cấp mã CQT",
      dataIndex: "ncnhat",
      width: "10%",
    },
    {
      title: "Hình thức HĐ", //pending
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
            <span className="flex-1">
              {HTHDO_Options.find((item) => item.value === value)?.label}
            </span>
          </div>
        );
      },
      width: "120px",
    },

    {
      title: "Trạng thái MST người bán", //pending
      dataIndex: "trangthaiMst",
      render: (value: any) => {
        return (
          <div className="flex items-center">
            <div
              className="w-3 h-3 rounded-[2px] mr-2"
              style={{
                backgroundColor:
                  TTMST_Options.find((item: any) => item.value === value)
                    ?.color || "transparent",
              }}
            ></div>
            <div className="flex-1 ml-1">
              {/* <Tooltip
                title={
                  TTMST_Options.find((item: any) => item.value === value)?.desc
                }
              > */}
              <span className="line-clamp-2">
                {TTMST_Options.find((item: any) => item.value === value)?.desc}
              </span>
              {/* </Tooltip> */}
            </div>
          </div>
        );
      },
      width: "200px",
    },
  ];
};
