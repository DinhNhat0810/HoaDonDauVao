import { ConfigProvider, Tabs, TabsProps } from "antd";
import React from "react";
import { COLORS } from "../../../libs/constants";
import ToolBar from "../../../components/ToolBar";
import TableHoaDon from "../components/Table";

export default function HoaDonDauRa() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Danh sách hóa đơn",
    },
    {
      key: "2",
      label: "Danh sách hóa đơn đã xóa",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Danh sách hoa đơn đầu ra</h2>
      <div className="flex">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                /* here is your component tokens */
                itemHoverColor: COLORS.primary,
                itemActiveColor: COLORS.primary,
                itemSelectedColor: COLORS.primary,
                inkBarColor: COLORS.primary,
              },
            },
          }}
        >
          <Tabs defaultActiveKey="1" items={items} />
        </ConfigProvider>
      </div>
      <ToolBar />
      <TableHoaDon />
    </div>
  );
}
