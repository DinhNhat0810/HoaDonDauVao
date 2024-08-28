import React from "react";
import CustomInput from "../CustomInput";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import ExcelIcon from "../Icon/excel";
import DownloadIcon from "../Icon/download";
import FilterIcon from "../Icon/filter";
import { Popover } from "antd";
import {
  COLORS,
  HTHDO_Options,
  TTHD,
  TTMST_Options,
} from "../../libs/constants";
import CustomBtn from "../CustomBtn";

type ToolBarProps = {
  className?: string;
  handleOpenModal?: () => void;
};

export default function ToolBarBaoCao({ handleOpenModal }: ToolBarProps) {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex">
        <CustomInput
          placeholder="Nhập từ khóa để tìm"
          prefix={<SearchOutlined className="cursor-pointer" />}
          configBoderRadius={4}
          className="w-60 mr-2 py-[6px]"
        />
        <CustomInput
          placeholder={["Từ ngày", "Đến ngày"]}
          configBoderRadius={4}
          type="rangePicker"
          className="py-[6px] w-60"
        />
      </div>

      <div className="">
        <CustomBtn title="Xuất dữ liệu" onClick={handleOpenModal} />
      </div>
    </div>
  );
}
