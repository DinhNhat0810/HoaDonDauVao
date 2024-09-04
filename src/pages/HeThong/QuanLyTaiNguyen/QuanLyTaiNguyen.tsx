import { ConfigProvider, Table, Tabs } from "antd";
import React, { useState } from "react";
import { COLORS } from "../../../libs/constants";
import { TabsProps } from "antd/lib";
import CustomBtn from "../../../components/CustomBtn";
import TableQuanLyTaiNguyen from "./components/QLTN";
import TableLichSuGiaoDich from "./components/LSGD";

export default function QuanLyTaiNguyen() {
  const [tab, setTab] = useState("1");

  const onChangeTabs = (key: string) => {
    setTab(key);
    // setDataInvoices([]);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Thông tin tài nguyên",
    },
    {
      key: "2",
      label: "Lịch sử giao dịch",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Tổng quan số lượng hóa đơn</h2>
      <div className="flex items-center justify-between">
        <div className="flex">
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemHoverColor: COLORS.primary,
                  itemActiveColor: COLORS.primary,
                  itemSelectedColor: COLORS.primary,
                  inkBarColor: COLORS.primary,
                },
              },
            }}
          >
            <Tabs defaultActiveKey="5" items={items} onChange={onChangeTabs} />
          </ConfigProvider>
        </div>
        <div>
          <CustomBtn title="Mua thêm" />
        </div>
      </div>

      <div>
        {tab === "1" && <TableQuanLyTaiNguyen />}
        {tab === "2" && <TableLichSuGiaoDich />}
      </div>
    </div>
  );
}
