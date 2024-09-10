import { ConfigProvider, Modal, Tabs, TabsProps } from "antd";
import { COLORS, HTHDO_Options, TTMST_Options } from "../../../libs/constants";
import ToolBar from "../../../components/ToolBar";
import TableHoaDon from "../components/Table";
import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { NotificationContext } from "../../../contexts/notification.context";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import https from "../../../libs/https";
import {
  convertCksNguoiBan,
  convertToVnd,
  convertXmlToJson,
  exportToExcel,
} from "../../../libs/common";
import { AppContext } from "../../../contexts/app.context";
import { isEmpty } from "lodash";
import ViewInvoiceModal from "../../../components/CustomModal/ViewInvoiceModal";
import { useMutation, useQuery } from "@tanstack/react-query";

type DownloadHoaDonType = {
  nbmst: string;
  khhdon: string;
  shdon: string;
  khmshdon: string;
};

dayjs.extend(isSameOrBefore);

export default function HoaDonDauVao() {
  const [dataInvoices, setDataInvoices] = useState<any[]>([]);
  const [initialData, setInitialData] = useState<any[]>([]);
  const { handleOpenNotification } = useContext(NotificationContext);
  const [fileName, setFileName] = useState("");
  const [tab, setTab] = useState("5");
  const { token } = useContext(AppContext);
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const [invoiceDetail, setInvoiceDetail] = useState<any>(null);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoadingCheckStatus, setIsLoadingCheckStatus] = useState(false);
  const [rangeDate, setRangeDate] = useState<any>([]);
  const [dataFilter, setDataFilter] = useState<any>({
    value: String(TTMST_Options[0].value),
    type: "tthai",
    date: null,
  });
  const [query, setQuery] = useState<any>(null);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["todos", query],
    queryFn: (e) => {
      return handleFinish(
        {
          date: [e.queryKey[1].values[0], e.queryKey[1].values[1]],
        },
        e.queryKey[1].callback
      );
    },
    staleTime: 5 * 1000,
    gcTime: 5 * 1000,
    retry: 0,
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
  const [openViewAction, setOpenViewAction] = useState(false);
  const [dataDetail, setDataDetail] = useState<any>(null);

  const handleChange = (e: any) => {
    setSearchValue(e);
  };

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= Math.ceil(page.total / 10)) {
        setPage((prev) => ({ ...prev, current: newPage }));
        const displayedItems = filterData.slice(
          (newPage - 1) * 10,
          newPage * 10
        );
        setDataInvoices(displayedItems);
      }
    },
    [page.total, filterData]
  );

  const items: TabsProps["items"] = [
    {
      key: "5",
      label: "Hóa đơn hợp lệ",
    },
    {
      key: "2",
      label: "Hóa đơn không hợp lệ",
    },
  ];

  const handleFinish = async (values: any, callback: () => void) => {
    const { date } = values;

    // const expries = localStorage.getItem("time");

    // if (expries && +expries - new Date().getTime() < 60 * 60 * 1000) {
    //   return;
    // }
    try {
      if (!date[0] || !date[1]) {
        return [];
      }

      if (date[0] > date[1]) {
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Ngày bắt đầu không được lớn hơn ngày kết thúc",
        });
        return [];
      }

      const oneMonthAfterTungay = dayjs(date[0])
        .add(1, "month")
        .subtract(1, "day")
        .endOf("day");
      if (dayjs(date[1]).isAfter(oneMonthAfterTungay)) {
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Khoảng thời gian tìm kiếm không được vượt quá 1 tháng",
        });

        return [];
      }

      callback();

      const response: any = await https({
        baseURL: `https://hoadondientu.gdt.gov.vn:30000/query/invoices/purchase?sort=tdlap:desc,khmshdon:asc,shdon:desc&size=50&search=tdlap=ge=${dayjs(
          date[0]
        ).format("DD/MM/YYYY")}T00:00:00;tdlap=le=${dayjs(date[1]).format(
          "DD/MM/YYYY"
        )}T23:59:59;ttxly==${tab}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      setFileName(
        `HoaDonDauVao_${dayjs(date[0]).format("DD/MM/YYYY")}-${dayjs(
          date[1]
        ).format("DD/MM/YYYY")}`
      );

      if (response.datas.length > 0 && response.datas) {
        const newRes = response.datas?.map((item: any, index: number) => ({
          key: index,
          thongTinNguoiBan: {
            mst: item?.nbmst,
            nbten: item?.nbten,
            nbdchi: item?.nbdchi,
          },
          thongTinHoaDon: {
            thdon: item?.thdon,
            khmshdon: item?.khmshdon,
            khhdon: item?.khhdon,
            shdon: item?.shdon,
            ntao: dayjs(item?.ntao).format("DD/MM/YYYY HH:mm:ss"),
          },

          nky: dayjs(item?.nky).format("DD/MM/YYYY HH:mm:ss"),
          ncma: dayjs(item?.ncma).format("DD/MM/YYYY HH:mm:ss"),
          thongTinNguoiMua: {
            nmmst: item?.nmmst,
            nmten: item?.nmten,
            khhdon: item?.khhdon,
            nmdchi: item?.nmdchi,
          },
          tongTruocThue: convertToVnd(item?.tgtcthue),
          thueSuat: {
            gttsuat: item?.thttltsuat[0]?.gttsuat,
            thtien: convertToVnd(item?.thttltsuat[0]?.thtien),
            tsuat: convertToVnd(item?.thttltsuat[0]?.tsuat),
            tthue: convertToVnd(item?.thttltsuat[0]?.tthue),
          },
          tongThue: convertToVnd(item?.tgtthue),
          tongThanhToan: convertToVnd(item?.tgtttbso),
          tgtttbso: item?.tgtttbso,
          bangChu: item?.tgtttbchu,
          cksNguoiBan: item?.nbcks,

          ncnhat: dayjs(item?.ncnhat).format("DD/MM/YYYY HH:mm:ss"),
          // tthai: item?.tthai,
          tthai: Math.floor(Math.random() * 6),
          thdon: item?.thdon,
          // khmshdon: item?.khmshdon,

          khmshdon: Math.floor(Math.random() * 10) + 1,

          khhdon: item?.khhdon,
          shdon: item?.shdon,
          ntao: dayjs(item?.ntao).format("DD/MM/YYYY HH:mm:ss"),

          thttltsuat: item?.thttltsuat,
          msttcgp: item?.msttcgp,
          mtdtchieu: item?.mtdtchieu,
          mhdon: item?.mhdon,
          thttlphi: item?.thttlphi,
          shdgoc: item?.shdgoc,
          tdlhdgoc: item?.tdlhdgoc,
          khmshdgoc: item?.khmshdgoc,
          khhdgoc: item?.khhdgoc,

          nhaCungCap: {
            msttcgp: item?.msttcgp,
            ngcnhat: item?.ngcnhat,
          },
          tdlap: dayjs(item?.tdlap).format("DD/MM/YYYY HH:mm:ss"),
          cksNguoiBanObj: convertCksNguoiBan(item?.nbcks),

          hthuc: Math.floor(Math.random() * 6) + 1,
          tthd: Math.floor(Math.random() * 2) + 1,
        }));

        const displayedItems = newRes.slice(
          (page.current - 1) * 10,
          page.current * 10
        );

        setInitialData(newRes);
        setDataInvoices(displayedItems);
        setFilterData(newRes);
        setPage((prev) => ({ ...prev, total: response.datas.length }));

        const payload = response.datas?.map((item: any) => ({
          nbmst: item?.nbmst,
          khmshdon: item?.khmshdon,
          khhdon: item?.khhdon,
          shdon: item?.shdon,
          hthdon: item?.hthdon,
          khhdgoc: item?.khhdgoc,
          khmshdgoc: item?.khmshdgoc,
          mhdon: item?.mhdon,
          mtdtchieu: item?.mtdtchieu,
          nbdchi: item?.nbdchi,
          nbten: item?.nbten,
          ncma: item?.ncma,
          ncnhat: item?.ncnhat,
          ngcnhat: item?.ngcnhat,
          nky: item?.nky,
          nmdchi: item?.nmdchi,
          nmmst: item?.nmmst,
          nmten: item?.nmten,
          shdgoc: item?.shdgoc,
          tchat: item?.tchat,
          tdlap: item?.tdlap,
          tgtcthue: item?.tgtcthue,
          tgtthue: item?.tgtthue,
          tgtttbchu: item?.tgtttbchu,
          tgtttbso: item?.tgtttbso,
          thdon: item?.thdon,
          thttlphi: item?.thttlphi,
          thttltsuat: item?.thttltsuat,
          ttcktmai: item?.ttcktmai,
          tthai: item?.tthai,
          ttxly: item?.ttxly,
          nbcks: item?.nbcks,
          tdlhdgoc: item?.tdlhdgoc,
          thtttoan: item?.thtttoan,
          msttcgp: item?.msttcgp,
          cqtcks: item?.cqtcks,
        }));
        console.log({
          LoaiHD: 1,
          dsHoadon: payload,
        });
      } else {
        setDataInvoices([]);
        setInitialData([]);
        setFilterData([]);
        setPage((prev) => ({ ...prev, total: 0 }));
      }
      localStorage.setItem(
        "time",
        JSON.stringify(new Date().getTime() + 60 * 60 * 1000)
      );
      setRangeDate(date);
      handleOpenNotification({
        type: "success",
        message: "Thành công",
        description: "Đồng bộ dữ liệu thành công",
      });

      return response.datas;
    } catch (error) {
      console.log(error);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra, vui lòng thử lại sau",
      });
      return [];
    }
  };

  const onChangeTabs = (key: string) => {
    setTab(key);
    setDataInvoices([]);
  };

  const handleSearch = useCallback(
    (value: string, filteredData: any[] = filterData) => {
      const data = value
        ? filteredData.filter((item) => {
            return (
              item.shdon
                ?.toString()
                ?.toLowerCase()
                ?.includes(value.toLowerCase()) ||
              item.khmshdon
                ?.toString()
                ?.toLowerCase()
                ?.includes(value.toLowerCase()) ||
              item.thongTinNguoiBan?.nbten
                ?.toLowerCase()
                ?.includes(value.toLowerCase()) ||
              item.thongTinNguoiBan?.mst
                ?.toLowerCase()
                ?.includes(value.toLowerCase())
            );
          })
        : filteredData;

      const displayedItems = data.slice(
        (page.current - 1) * 10,
        page.current * 10
      );

      setDataInvoices(displayedItems);
      setPage((prev) => ({ ...prev, total: data.length }));
    },
    [filterData, page]
  );

  const handleFilter = useCallback(
    ({
      value = "9999",
      type = "tthai",
      date,
    }: {
      value: string;
      type: any;
      date: any;
    }) => {
      if (!value || isEmpty(initialData)) return;

      let newData: any = initialData;
      if (date) {
        newData = initialData.filter((item) => {
          const tdlapDate = dayjs(item.tdlap, "DD/MM/YYYY HH:mm:ss");
          return (
            tdlapDate.isAfter(date[0].startOf("day")) &&
            tdlapDate.isSameOrBefore(date[1].endOf("day"))
          );
        });
      }

      const updatedFilter: any = {
        tthai: "",
        tthd: "",
        hthuc: "",
      };

      newData = newData.filter((item: any) => {
        if (value === "9999") return true;

        const typeToPropMap: any = {
          hthuc: "hthuc",
          tthai: "tthai",
          tthd: "tthd",
        };

        const propName: any = typeToPropMap[type];

        if (type === "tthai" && (value === "0" || value === "4")) {
          return (
            item[propName]?.toString() === value ||
            item[propName]?.toString() === "4"
          );
        }

        return item[propName]?.toString() === value;
      });

      updatedFilter[type] = value;

      setFilterData(newData);
      handleSearch(searchValue, newData);
    },
    [initialData, searchValue, handleSearch]
  );

  const handleResetFilter = () => {
    setFilterData(initialData);
    handleSearch(searchValue, initialData);
    setDataFilter({
      value: String(TTMST_Options[0].value),
      type: "tthai",
      date: null,
    });
  };

  const handleDownload = async (values: DownloadHoaDonType) => {
    try {
      const response: any = await https({
        baseURL: `https://hoadondientu.gdt.gov.vn:30000/query/invoices/export-xml?nbmst=${values.nbmst}&khhdon=${values.khhdon}&shdon=${values.shdon}&khmshdon=${values.khmshdon}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        responseType: "arraybuffer",
      });

      const blob = new Blob([response], { type: "application/zip" });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "HoaDon.zip");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewInvoice = async (data: any) => {
    try {
      setOpenInvoiceModal(true);
      setInvoiceDetail(data);
      handleOpenCheckInvoiceModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseInvoiceModal = () => {
    setOpenInvoiceModal(false);
  };

  const getTrangThaiMST = async (mst: string) => {
    try {
      const soapRequest = `
        <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
          <soap12:Body>
            <Laythongtin_NNT xmlns="http://tempuri.org/">
              <MST>${mst}</MST>
            </Laythongtin_NNT>
          </soap12:Body>
        </soap12:Envelope>`;

      const response: any = await https({
        baseURL: `https://gip.nacencomm.vn`,
        method: "post",
        headers: {
          "Content-Type": "application/soap+xml;charset=UTF-8",
        },
        data: soapRequest,
      });

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["Laythongtin_NNTResponse"][
          "Laythongtin_NNTResult"
        ];

      if (!isEmpty(DocumentElement)) {
        return TTMST_Options.find(
          (item: any) => item.value === DocumentElement.TRANG_THAI
        );
      }

      return null;
    } catch (error) {
      console.log(error);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra khi kiểm tra trạng thái MST",
      });
    }
  };

  const handleOpenCheckInvoiceModal = async () => {
    try {
      setIsLoadingCheckStatus(true);

      await Promise.all([
        getTrangThaiMST(invoiceDetail?.thongTinNguoiBan?.mst),
        getTrangThaiMST(invoiceDetail?.thongTinNguoiMua?.nmmst),
      ]).then((responses: any) => {
        setInvoiceDetail((prev: any) => {
          return {
            ...prev,
            thongTinNguoiBan: {
              ...prev.thongTinNguoiBan,
              trangThaiMST: responses[0],
            },
            thongTinNguoiMua: {
              ...prev.thongTinNguoiMua,
              trangThaiMST: responses[1],
            },
          };
        });
      });

      setIsLoadingCheckStatus(false);
    } catch (error) {
      console.log(error);
      setIsLoadingCheckStatus(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  // const filterQuery = ({
  //   value,
  //   filteredData,
  // }: {
  //   value: string;
  //   filteredData: any[];
  // }) => {
  //   const newData = filteredData.filter((item) => {
  //     return (
  //       item.shdon?.toString()?.toLowerCase()?.includes(value.toLowerCase()) ||
  //       item.khmshdon
  //         ?.toString()
  //         ?.toLowerCase()
  //         ?.includes(value.toLowerCase()) ||
  //       item.thongTinNguoiBan?.nbten
  //         ?.toLowerCase()
  //         ?.includes(value.toLowerCase()) ||
  //       item.thongTinNguoiBan?.mst?.toLowerCase()?.includes(value.toLowerCase())
  //     );
  //   });

  //   return newData;
  // };

  const handleExportExcel = useCallback(() => {
    const newData = filterData.filter((item) => {
      return (
        item.shdon
          ?.toString()
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase()) ||
        item.khmshdon
          ?.toString()
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase()) ||
        item.thongTinNguoiBan?.nbten
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase()) ||
        item.thongTinNguoiBan?.mst
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase())
      );
    });

    const excelData = newData?.map((item, index) => {
      return {
        STT: (index + 1).toString(),
        "Thông tin người bán": `${item?.thongTinNguoiBan?.nbten}\n${item?.thongTinNguoiBan?.mst}`,
        "Mẫu số / Ký hiệu / Số HĐ": `${item?.khmshdon} / ${item?.khhdon} / ${item?.shdon}`,
        "Ngày lập": item?.tdlap,
        "Ngày ký": item?.nky,
        "Tổng thanh toán": item?.tongThanhToan?.toString(),
        "Trạng thái HĐ": item?.tthd === 1 ? "Hợp lệ" : "Không hợp lệ",
        "Ngày cấp mã CQT": item?.ncnhat,
        "Hình thức HĐ": `${
          HTHDO_Options.find((ele) => ele.value === item?.hthuc)?.label
        }`,
        "Trạng thái MST người bán": TTMST_Options.find(
          (ele: any) => ele.value === item.tthai
        )?.label,
      };
    });

    exportToExcel(excelData, fileName);
  }, [filterData, searchValue, fileName]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">Danh sách hoa đơn đầu vào</h2>
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
      <ToolBar
        refetch={refetch}
        setQuery={(values, callback) => {
          setQuery({ values, callback });
        }}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        handleChange={handleChange}
        searchValue={searchValue}
        handleResetFilter={handleResetFilter}
        handleExportExcel={handleExportExcel}
        rangeDate={rangeDate}
        setDataFilter={(data: any) => setDataFilter(data)}
        dataFilter={dataFilter}
        openViewAction={openViewAction}
        handleDownload={() => {
          handleDownload({
            nbmst: dataDetail?.thongTinNguoiBan?.mst,
            khhdon: dataDetail?.thongTinHoaDon?.khhdon,
            shdon: dataDetail?.thongTinHoaDon?.shdon,
            khmshdon: dataDetail?.thongTinHoaDon?.khmshdon,
          });
        }}
        handleViewInvoice={() => {
          handleViewInvoice(dataDetail);
        }}
      />
      <TableHoaDon
        data={dataInvoices}
        loading={isLoading}
        handlePageChange={handlePageChange}
        currentPage={page.current}
        total={page.total}
        handleDownload={handleDownload}
        handleViewInvoice={handleViewInvoice}
        onRow={(record) => {
          return {
            onClick: () => {
              setOpenViewAction(true);
              setDataDetail(record);
            },
          };
        }}
      />

      {openInvoiceModal && (
        <ViewInvoiceModal
          open={openInvoiceModal}
          handleCancel={handleCloseInvoiceModal}
          data={invoiceDetail}
          handleDownload={handleDownload}
          isLoadingCheckStatus={isLoadingCheckStatus}
        />
      )}
    </div>
  );
}
