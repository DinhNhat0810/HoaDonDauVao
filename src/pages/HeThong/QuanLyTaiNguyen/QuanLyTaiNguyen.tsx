import { ConfigProvider, Table, Tabs } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { COLORS } from "../../../libs/constants";
import { TabsProps } from "antd/lib";
import CustomBtn from "../../../components/CustomBtn";
import TableQuanLyTaiNguyen from "./components/QLTN";
import TableLichSuGiaoDich from "./components/LSGD";
import {
  GetLichsudangkyGDV,
  GetThongtintainguyen,
} from "../../../services/hethong";
import { isEmpty } from "lodash";
import dayjs from "dayjs";
import { Thongtintainguyen } from "../../../services/dashboard";
import { AppContext } from "../../../contexts/app.context";

export default function QuanLyTaiNguyen() {
  const [tab, setTab] = useState("1");
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const { mst } = useContext(AppContext);

  const onChangeTabs = (key: string) => {
    setTab(key);
    // setDataInvoices([]);
  };

  const getHistory = async () => {
    const res = await GetLichsudangkyGDV();
    if (!isEmpty(res)) {
      const newRes = res.map((item: any, index: number) => {
        return {
          ...item,
          key: index,
          NgayPS: dayjs(item.NgayPS).format("DD/MM/YYYY"),
        };
      });
      setHistoryData(newRes);
    }
  };

  const getThongtintainguyen = async () => {
    if (mst) {
      const res = await Thongtintainguyen({
        madonvi: mst,
      });
      if (!isEmpty(res)) {
        const newRes = [res].map((item: any, index: number) => {
          return {
            ...item,
            key: index,
          };
        });
        setData(newRes);
      }
    }
  };

  useEffect(() => {
    getHistory();
    getThongtintainguyen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {tab === "1" && <TableQuanLyTaiNguyen data={data} />}
        {tab === "2" && <TableLichSuGiaoDich data={historyData} />}
      </div>
    </div>
  );
}
