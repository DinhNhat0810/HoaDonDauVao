import { memo, useContext, useEffect, useState } from "react";
import CustomInput from "../CustomInput";
import {
  EyeOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import ExcelIcon from "../Icon/excel";
import FilterIcon from "../Icon/filter";
import { Form, Popover } from "antd";
import ReloadIcon from "../Icon/reload";
import SyncInvoiceModal from "../CustomModal/SyncInvoiceModal";
import useDebounce from "../../hooks/useDebounce";
import RefreshIcon from "../Icon/refresh";
import dayjs from "dayjs";
import CustomBtn from "../CustomBtn";
import DownloadIcon from "../Icon/download";
import SelectTemplateModal from "../CustomModal/SelectTemplateModal";
import RenderFilter from "./RenderFilter";
import LoginModal from "../CustomModal/LoginModal";
import { AppContext } from "../../contexts/app.context";
import { isEmpty } from "lodash";
import { NotificationContext } from "../../contexts/notification.context";
import RangerPickerToolbar from "./RangerPickerToolbar";

type ToolBarProps = {
  className?: string;
  showSyncBtn?: boolean;
  showFilter?: boolean;
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
  showExportBtn?: boolean;
  showExportTemplateBtn?: boolean;
  showRangerPicker?: boolean;
  excelData?: any;
  type?: string;
  showSearch?: boolean;
  loading?: boolean;
  dataInvoices: any;
  placeholderSearchBox?: string;
  onChangeRange?: (value: any) => void;
  disableRange?: boolean;
};

const ToolBar = ({
  showSyncBtn = true,
  showFilter = true,
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
  showExportBtn = true,
  showExportTemplateBtn = false,
  showRangerPicker = false,
  excelData,
  type = "buyin",
  showSearch = true,
  loading,
  dataInvoices,
  placeholderSearchBox = "Nhập từ khóa để tìm",
  onChangeRange = () => {},
  disableRange = false,
}: ToolBarProps) => {
  const [openSyncInvoiceModal, setOpenSyncInvoiceModal] = useState(false);
  const debouncedValue = useDebounce(searchValue, 500);
  const [openFilter, setOpenFilter] = useState(false);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [active, setActive] = useState<any>({
    trangthaiMst: {
      value: "",
    },
    tthd: {
      value: "",
    },
    hthuc: {
      value: "",
    },
  });
  const { taikhoanthue } = useContext(AppContext);
  const SLHDCL = localStorage.getItem("SLHDCL");

  const handleOpen = () => {
    if (isEmpty(taikhoanthue?.token)) {
      setIsOpenModalLogin(true);
    } else {
      setOpenSyncInvoiceModal(true);
    }
  };

  const handleCancel = () => {
    setOpenSyncInvoiceModal(false);
  };

  const handleOpenTemplateModal = () => {
    setIsModalOpen(true);
  };

  const handleCancelTemplateModal = () => {
    setIsModalOpen(false);
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
        {showSearch && (
          <CustomInput
            placeholder={placeholderSearchBox}
            prefix={<SearchOutlined className="cursor-pointer" />}
            configBoderRadius={4}
            className="w-60 py-[6px]"
            onChange={handleChange}
            allowClear={true}
          />
        )}

        {openViewAction && !isEmpty(dataInvoices) && (
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

        {showRangerPicker && (
          <div className="flex">
            <RangerPickerToolbar
              onChangeRange={onChangeRange}
              disableRange={disableRange}
            />
          </div>
        )}
      </div>

      <div className="flex justify-between items-center gap-2">
        {showExportBtn && (
          <ExcelIcon
            className="cursor-pointer hover:bg-[#F6F7F9]"
            onClick={() => handleExportExcel()}
          />
        )}

        {showSyncBtn && (
          <div
            onClick={() => {
              if (loading || isEmpty(SLHDCL) || Number(SLHDCL) <= 0) return;
              handleOpen();
            }}
            className={`h-9 flex justify-between items-center border-[#D4D4D6] border p-[5px] px-4 gap-1 rounded-[4px]
              
              ${
                isEmpty(SLHDCL) || Number(SLHDCL) <= 0
                  ? "cursor-not-allowed bg-slate-200 "
                  : "cursor-pointer hover:bg-[#F6F7F9]"
              }
              
              `}
          >
            {loading ? (
              <>
                <LoadingOutlined />
                <span className="font-medium text-sm ml-1">Đang đồng bộ</span>
              </>
            ) : (
              <>
                <ReloadIcon />
                <span className="font-medium text-sm">Đồng bộ ngay</span>
              </>
            )}
          </div>
        )}

        {showFilter && (
          <>
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
                  setActive={(data) => setActive(data)}
                  active={active}
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
                setActive({
                  trangthaiMst: {
                    value: "",
                  },
                  tthd: {
                    value: "",
                  },
                  hthuc: {
                    value: "",
                  },
                });
              }}
              className="flex justify-between cursor-pointer items-center border-[#D4D4D6] border p-[5px] px-4 gap-1 rounded-[4px] 
        hover:bg-[#F6F7F9]
      "
            >
              <RefreshIcon className="" />
              <span className="font-medium text-sm">Xóa bộ lọc</span>
            </div>
          </>
        )}

        {showExportTemplateBtn && (
          <div className="">
            <CustomBtn title="Xuất dữ liệu" onClick={handleOpenTemplateModal} />
          </div>
        )}
      </div>

      {showExportTemplateBtn && (
        <SelectTemplateModal
          excelData={excelData}
          fileName={"fileName"}
          type={type}
          isModalOpen={isModalOpen}
          handleCancel={handleCancelTemplateModal}
        />
      )}

      {showSyncBtn && (
        <SyncInvoiceModal
          open={openSyncInvoiceModal}
          handleCancel={handleCancel}
          handleFinish={handleFinish}
          setQuery={setQuery}
          refetch={refetch}
        />
      )}

      {isOpenModalLogin && (
        <LoginModal
          open={isOpenModalLogin}
          handleCancel={() => setIsOpenModalLogin(false)}
        />
      )}
    </div>
  );
};

const MemoizedToolBar = memo(ToolBar);
export default MemoizedToolBar;
