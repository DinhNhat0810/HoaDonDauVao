import React, { memo, useEffect, useState } from "react";
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
import ReloadIcon from "../Icon/reload";
import SyncInvoiceModal from "../CustomModal/SyncInvoiceModal";
import useDebounce from "../../hooks/useDebounce";
import ResetIcon from "../Icon/reset";
import RefreshIcon from "../Icon/refresh";

type ToolBarProps = {
  className?: string;
  showSyncBtn?: boolean;
  handleFinish: (values: any, callback: () => void) => void;
  handleSearch: (values: any) => void;
  handleFilter: (value: string, type: string) => void;
  searchValue: string;
  handleChange: (value: string) => void;
  handleResetFilter: () => void;
};

const fileterOptions = [
  {
    label: "Trạng thái MST người bán",
    children: TTMST_Options,
    type: "square",
    value: "tthai",
  },
  {
    label: "Trạng thái hóa đơn",
    children: TTHD,
    type: "circle",
    value: "tthd",
  },
  {
    label: "Hình thức hóa đơn",
    children: HTHDO_Options,
    type: "circle",
    value: "hthuc",
  },
];

const RenderFilter = ({
  handleFilter,
  setOpenFilter,
}: {
  handleFilter: (value: string, type: string) => void;
  setOpenFilter: () => void;
}) => {
  const [open, setOpen] = useState("");

  return (
    <div className="w-60 py-2">
      {fileterOptions.map((option, index) => (
        <div
          key={index}
          className="py-3 px-2 mb-3 cursor-pointer bg-[#F6F7F9] rounded-md"
        >
          <Popover
            open={open === option.value ? true : open === "" ? false : false}
            onOpenChange={(visible) => {
              if (!visible) {
                setOpen("");
              } else {
                setOpen(option.value);
              }
            }}
            placement="bottomRight"
            content={
              <div className="w-48">
                {option.children?.map((child, i) => (
                  <div
                    className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-50`}
                    key={i}
                    onClick={() => {
                      handleFilter(String(child.value), option.value);
                      setOpen("");
                      setOpenFilter();
                    }}
                  >
                    {child.color && (
                      <div
                        className={`w-[20px] h-[20px] ${
                          option.type === "square"
                            ? "rounded-[4px]"
                            : "rounded-full"
                        }
                    `}
                        style={{ backgroundColor: child.color }}
                      ></div>
                    )}
                    <span>{child.label}</span>
                  </div>
                ))}
              </div>
            }
            trigger="click"
          >
            <div className="font-medium flex justify-between items-center px-2">
              <span className="">{option.label}</span>
              <CaretDownOutlined />
            </div>
          </Popover>
        </div>
      ))}

      <div>
        <p className="font-bold">Tùy chọn</p>
        <div className="flex justify-between mt-2 gap-2">
          <CustomInput
            type="date"
            placeholder="Từ"
            className="py-2 w-full"
            configBoderRadius={4}
          />
          <CustomInput
            type="date"
            placeholder="Đến"
            className="py-2 w-full"
            configBoderRadius={4}
          />
        </div>
      </div>
    </div>
  );
};

const ToolBar = ({
  showSyncBtn = true,
  handleFinish,
  handleSearch,
  handleFilter,
  searchValue,
  handleChange,
  handleResetFilter,
}: ToolBarProps) => {
  const [openSyncInvoiceModal, setOpenSyncInvoiceModal] = useState(false);
  const debouncedValue = useDebounce(searchValue, 300);
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpen = () => {
    setOpenSyncInvoiceModal(true);
  };

  const handleCancel = () => {
    setOpenSyncInvoiceModal(false);
  };

  useEffect(() => {
    handleSearch(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="flex justify-between items-start mt-2">
      <div>
        <CustomInput
          placeholder="Nhập từ khóa để tìm"
          prefix={<SearchOutlined className="cursor-pointer" />}
          configBoderRadius={4}
          className="w-60 py-[6px]"
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between items-center gap-2">
        <ExcelIcon className="cursor-pointer hover:bg-[#F6F7F9]" />

        {showSyncBtn && (
          <div
            onClick={handleOpen}
            className="flex justify-between cursor-pointer items-center border-[#D4D4D6] border p-[5px] px-4 gap-1 rounded-[4px] 
        hover:bg-[#F6F7F9]
      "
          >
            <ReloadIcon />
            <span className="font-medium text-sm">Đồng bộ ngay</span>
          </div>
        )}

        <Popover
          open={openFilter}
          onOpenChange={(visible) => {
            setOpenFilter(visible);
          }}
          content={
            <RenderFilter
              setOpenFilter={() => setOpenFilter(!openFilter)}
              handleFilter={handleFilter}
            />
          }
          trigger="click"
          placement="bottomRight"
        >
          <div
            onClick={() => setOpenFilter(!openFilter)}
            className="flex justify-between cursor-pointer items-center border-[#D4D4D6] border p-[5px] px-4 gap-1 rounded-[4px] hover:bg-[#F6F7F9]"
          >
            <FilterIcon />
            <span className="font-medium text-sm">Bộ lọc</span>
          </div>
        </Popover>

        <div
          onClick={handleResetFilter}
          className="flex justify-between cursor-pointer items-center border-[#D4D4D6] border p-[5px] px-4 gap-1 rounded-[4px] 
        hover:bg-[#F6F7F9]
      "
        >
          <RefreshIcon className="" />
          <span className="font-medium text-sm">Xóa bộ lọc</span>
        </div>
      </div>

      <SyncInvoiceModal
        open={openSyncInvoiceModal}
        handleCancel={handleCancel}
        handleFinish={handleFinish}
      />
    </div>
  );
};

const MemoizedToolBar = memo(ToolBar);
export default MemoizedToolBar;
