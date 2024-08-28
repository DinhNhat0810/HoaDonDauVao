import React from "react";
import ThongTinTaiNguyen from "./ThongTinTaiNguyen";
import TongHoaDon from "./TongHoaDon";
import BottomChart from "./BottomChart";

export default function HoaDon() {
  return (
    <div className="flex gap-4">
      <div className="flex-[3] flex flex-col gap-4">
        <ThongTinTaiNguyen />
        <TongHoaDon />
        <BottomChart />
      </div>
      <div className="flex-[1]"></div>
    </div>
  );
}
