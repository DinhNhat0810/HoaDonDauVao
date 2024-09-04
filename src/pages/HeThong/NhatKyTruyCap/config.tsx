export const columnsTable = () => {
  return [
    {
      title: "STT",
      dataIndex: "key",
      render: (value: any) => value + 1,
      fixed: "left",
      width: "60px",
    },

    {
      title: "Thiết bị",
      dataIndex: "tengoi",
    },

    {
      title: "Vị trí",
      dataIndex: "sl",
    },

    {
      title: "Ngày",
      dataIndex: "daSD",
    },

    {
      title: "Giờ",
      dataIndex: "conLai",
    },
  ];
};
