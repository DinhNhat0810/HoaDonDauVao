import React, { memo, useEffect, useMemo, useState } from "react";
import CustomInput from "../CustomInput";
import {
  CaretDownOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import ExcelIcon from "../Icon/excel";
import FilterIcon from "../Icon/filter";
import { Form, Popover, Tooltip } from "antd";
import { HTHDO_Options, TTHD, TTMST_Options } from "../../libs/constants";
import ReloadIcon from "../Icon/reload";
import SyncInvoiceModal from "../CustomModal/SyncInvoiceModal";
import useDebounce from "../../hooks/useDebounce";
import RefreshIcon from "../Icon/refresh";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import CustomBtn from "../CustomBtn";
import DownloadIcon from "../Icon/download";

type ToolBarProps = {
  className?: string;
  showSyncBtn?: boolean;
  handleFinish?: (values: any, callback: () => void) => void;
  handleSearch?: (values: any) => void;
  handleFilter?: ({
    value,
    type,
    date,
  }: {
    value: string;
    type: string;
    date: any;
  }) => void;
  searchValue?: string;
  handleChange?: (value: string) => void;
  handleResetFilter?: () => void;
  handleExportExcel?: () => void;
  rangeDate?: any;
  setDataFilter?: (data: any) => void;
  dataFilter?: any;
  setQuery?: (query: any, callback: () => void) => void;
  refetch?: () => void;
  openViewAction?: boolean;
  handleDownload?: () => void;
  handleViewInvoice?: () => void;
};

const fileterOptions = [
  {
    label: "Trạng thái MST người bán",
    children: TTMST_Options,
    type: "square",
    value: "tthai",
    tooltip: true,
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
  rangeDate,
  setDataFilter,
  dataFilter,
  form,
}: {
  handleFilter: ({
    value,
    type,
    date,
  }: {
    value: string;
    type: string;
    date: any;
  }) => void;
  setOpenFilter: () => void;
  rangeDate?: any;
  setDataFilter: (data: any) => void;
  dataFilter: any;
  form: any;
}) => {
  const [open, setOpen] = useState("");
  const [active, setActive] = useState<any>({
    tthai: {
      value: "",
    },
    tthd: {
      value: "",
    },
    hthuc: {
      value: "",
    },
  });

  const disabledDate: RangePickerProps["disabledDate"] = useMemo(() => {
    const [start, end] = rangeDate.map((date: any) => dayjs(date).valueOf());
    return (current) => {
      // Convert dayjs object to time for comparison
      const currentTime = current.valueOf();
      // Disable dates outside of the range
      return currentTime < start || currentTime > end;
    };
  }, [rangeDate]);

  useEffect(() => {
    if (!dataFilter.date) {
      form.setFieldsValue({
        selectDate: [
          rangeDate[0] && dayjs(rangeDate[0].format("YYYY/MM/DD")),
          rangeDate[1] && dayjs(rangeDate[1].format("YYYY/MM/DD")),
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setOpenFilter]);

  const handleSubmit = () => {
    const newDate = form.getFieldValue("selectDate");

    handleFilter({
      value: dataFilter.value,
      type: dataFilter.type,
      date: newDate,
    });
    setActive({
      tthai: {
        value: "",
      },
      tthd: {
        value: "",
      },
      hthuc: {
        value: "",
      },
    });
    setDataFilter((prev: any) => ({
      ...prev,
      date: newDate,
    }));
    setOpenFilter();

    form.setFieldsValue({
      selectDate: newDate,
    });
  };

  return (
    <div className="w-60 py-2">
      {fileterOptions.map((option, index) => (
        <div
          key={index}
          className={`py-3 px-2 mb-3 cursor-pointer bg-[#F6F7F9] rounded-md`}
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
              <div className="w-60">
                {option.children?.map(
                  (child: any, i: number) =>
                    !child.hidden && (
                      <div
                        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-50 
                            ${
                              active[option.value].value === child.value &&
                              "bg-slate-200"
                            }
                          `}
                        key={i}
                        onClick={() => {
                          setDataFilter({
                            value: String(child.value),
                            type: option.value,
                          });
                          setOpen("");
                          setActive((prev: any) => {
                            const updatedKey = option.value;
                            const newValue = child.value;

                            const updatedState = Object.keys(prev).reduce(
                              (acc, key) => {
                                acc[key] = {
                                  value: key === updatedKey ? newValue : "",
                                };
                                return acc;
                              },
                              {} as any
                            );

                            return updatedState;
                          });
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
                        <div className="flex-1 ml-1">
                          {option.tooltip ? (
                            <Tooltip title={child.desc}>
                              <span className="line-clamp-2">{child.desc}</span>
                            </Tooltip>
                          ) : (
                            <span>{child.label}</span>
                          )}
                        </div>
                      </div>
                    )
                )}
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
          <Form form={form}>
            <CustomInput
              placeholder="Chọn ngày"
              className="w-full"
              type="rangePicker"
              name="selectDate"
              configBoderRadius={4}
              disabledDate={disabledDate}
              format={"YYYY/MM/DD"}
            />
          </Form>
        </div>
      </div>

      <div className="flex justify-center">
        <CustomBtn title="Áp dụng" onClick={() => handleSubmit()} />
      </div>
    </div>
  );
};

const ToolBar = ({
  showSyncBtn = true,
  handleFinish = () => {},
  handleSearch = () => {},
  handleFilter = () => {},
  searchValue = "",
  handleChange = () => {},
  handleResetFilter = () => {},
  handleExportExcel = () => {},
  setDataFilter = () => {},
  dataFilter = {},
  rangeDate,
  setQuery = () => {},
  refetch = () => {},
  openViewAction,
  handleDownload = () => {},
  handleViewInvoice = () => {},
}: ToolBarProps) => {
  const [openSyncInvoiceModal, setOpenSyncInvoiceModal] = useState(false);
  const debouncedValue = useDebounce(searchValue, 300);
  const [openFilter, setOpenFilter] = useState(false);
  const [form] = Form.useForm();

  const handleOpen = () => {
    setOpenSyncInvoiceModal(true);
  };

  const handleCancel = () => {
    setOpenSyncInvoiceModal(false);
  };

  useEffect(() => {
    if (handleSearch) {
      handleSearch(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="flex justify-between items-start mt-2">
      <div className="flex gap-2">
        <CustomInput
          placeholder="Nhập từ khóa để tìm"
          prefix={<SearchOutlined className="cursor-pointer" />}
          configBoderRadius={4}
          className="w-60 py-[6px]"
          onChange={handleChange}
        />

        {openViewAction && (
          <>
            <DownloadIcon className="cursor-pointer" onClick={handleDownload} />
            <div
              className="w-[39px] h-[37px] flex items-center justify-center border border-[#d4d4d6] rounded-md cursor-pointer"
              onClick={handleViewInvoice}
            >
              <EyeOutlined className="text-xl" />
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between items-center gap-2">
        <ExcelIcon
          className="cursor-pointer hover:bg-[#F6F7F9]"
          onClick={() => handleExportExcel()}
        />

        {showSyncBtn && (
          <div
            onClick={handleOpen}
            className="flex justify-between cursor-pointer items-center border-[#D4D4D6] border p-[5px] px-4 gap-1 rounded-[4px] hover:bg-[#F6F7F9]"
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
              rangeDate={rangeDate}
              setOpenFilter={() => setOpenFilter(!openFilter)}
              handleFilter={handleFilter}
              setDataFilter={setDataFilter}
              dataFilter={dataFilter}
              form={form}
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
          onClick={() => {
            handleResetFilter();
            form.setFieldsValue({
              selectDate: [
                rangeDate[0] && dayjs(rangeDate[0].format("YYYY/MM/DD")),
                rangeDate[1] && dayjs(rangeDate[1].format("YYYY/MM/DD")),
              ],
            });
          }}
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
        setQuery={setQuery}
        refetch={refetch}
      />
    </div>
  );
};

const MemoizedToolBar = memo(ToolBar);
export default MemoizedToolBar;
