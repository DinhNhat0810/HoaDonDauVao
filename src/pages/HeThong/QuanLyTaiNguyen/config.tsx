export const columnsTableQLTN = () => {
  return [
    {
      title: "STT",
      dataIndex: "key",
      render: (value: any) => value + 1,
      fixed: "left",
      width: "60px",
    },

    {
      title: "Tên gói",
      dataIndex: "tengoi",
    },

    {
      title: "Số lượng hóa đơn",
      dataIndex: "sl",
    },

    {
      title: "Hóa đơn đã sử dụng",
      dataIndex: "daSD",
    },

    {
      title: "Hóa đơn còn lại",
      dataIndex: "conLai",
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
    },

    {
      title: "Tên gói",
      dataIndex: "tengoi",
    },

    {
      title: "Thông tin người mua",
      dataIndex: "sl",
    },

    {
      title: "Ngày mua",
      dataIndex: "daSD",
    },
  ];
};
