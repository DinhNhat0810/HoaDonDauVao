import { ConfigProvider, Tabs, TabsProps } from "antd";
import React from "react";
import { COLORS } from "../../../libs/constants";
import ToolBar from "../../../components/ToolBar";
import TableDanhMuc from "../components/Table";

export default function HoaDonDauVao() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Danh mục nhà cung cấp</h2>

      <ToolBar showSyncBtn={false} />
      <TableDanhMuc />
    </div>
  );
}
