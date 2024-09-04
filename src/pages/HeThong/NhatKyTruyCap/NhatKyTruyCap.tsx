import React from "react";
import RangeDatePicker from "../../TongQuan/HoaDon/TongHoaDon/RangeDatePicker";
import CustomInput from "../../../components/CustomInput";
import TableNhatKyTruyCap from "./TableNhatKyTruyCap";

export default function NhatKyTruyCap() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Nhật ký truy cập</h2>

      <div className="mt-4">
        <CustomInput type="rangePicker" placeholder={["Từ ngày", "Đến ngày"]} />
      </div>

      <div>
        <TableNhatKyTruyCap />
      </div>
    </div>
  );
}
