export const columnsTableQLTN = () => {
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
      title: "Số lượng hóa đơn",
      dataIndex: "SoluongDK",
    },

    {
      title: "Hóa đơn đã sử dụng",
      dataIndex: "SLHDonSD",
    },

    {
      title: "Hóa đơn còn lại",
      dataIndex: "SLConlai",
    },
  ];
};

export const columnsTableLSGD = () => {
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
      title: "Tên gói",
      dataIndex: "Goidv",
    },

    {
      title: "Thông tin người mua",
      dataIndex: "Nguoiyc",
    },

    {
      title: "Ngày mua",
      dataIndex: "NgayPS",
    },
  ];
};
