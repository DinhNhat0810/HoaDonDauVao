import { ConfigProvider, Tabs, TabsProps } from "antd";
import { COLORS, HTHDO_Options, TTMST_Options } from "../../../libs/constants";
import ToolBar from "../../../components/ToolBar";
import TableHoaDon from "./Table";
import { useCallback, useContext, useEffect, useState } from "react";
import { NotificationContext } from "../../../contexts/notification.context";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import https from "../../../libs/https";
import {
  convertCksNguoiBan,
  convertToVnd,
  convertXmlToJson,
} from "../../../libs/common";
import { AppContext } from "../../../contexts/app.context";
import { isEmpty, set } from "lodash";
import ViewInvoiceModal from "../../../components/CustomModal/ViewInvoiceModal";
import { useQuery } from "@tanstack/react-query";
import { templateDauVao } from "../../../libs/common/excel-template";
import JSZip from "jszip";
import {
  getInvoices,
  LayTGDongboDLcuoi,
  Luulogtruyxuatdl,
} from "../../../services/invoices";

type DownloadHoaDonType = {
  nbmst: string;
  khhdon: string;
  shdon: string;
  khmshdon: string;
};

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export default function ListInvoice1({
  title,
  typeInvoice,
  type,
}: {
  title: string;
  typeInvoice: string;
  type: string;
}) {
  const [dataInvoices, setDataInvoices] = useState<any[]>([]);
  const { handleOpenNotification } = useContext(NotificationContext);
  const { setTaikhoanthue } = useContext(AppContext);
  const [fileName, setFileName] = useState("");
  const [tab, setTab] = useState("5");
  const { taikhoanthue } = useContext(AppContext);
  const [page, setPage] = useState({
    current: 1,
    pageSize: 15,
    total: 0,
  });
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoadingCheckStatus, setIsLoadingCheckStatus] = useState(false);
  const [rangeDate, setRangeDate] = useState<any>([]);

  const [query, setQuery] = useState<any>(null);
  const { refetch } = useQuery({
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
  const [selectedRowKey, setSelectedRowKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<{
    prev: string | null;
    next: string | null;
    date: any;
  }>({
    prev: null,
    next: null,
    date: [],
  });
  const [stateStack, setStateStack] = useState<any>([]);
  const [dataFilter, setDataFilter] = useState<any>({
    value: String(TTMST_Options[0].value),
    type: "tthai",
    date: null,
  });
  const [invoiceDetail, setInvoiceDetail] = useState<any>(null);
  const [totalRecord, setTotalRecord] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);

  console.log(stateStack);

  useEffect(() => {
    const SLHDCL = localStorage.getItem("SLHDCL");

    if (isEmpty(SLHDCL) || Number(SLHDCL) <= 0) {
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Đã hết số hóa đơn đăng ký",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRowClick = (record: any) => {
    setSelectedRowKey(record.key);
  };

  const rowClassName = (record: any) => {
    return record.key === selectedRowKey ? "!bg-[#D4D4D6]" : "";
  };

  const handleChange = (e: any) => {
    setSearchValue(e);
  };

  function checkWithinOneHourFromSyncTime(syncTime: string) {
    const now = dayjs();
    const oneHourAfterSyncTime = dayjs(syncTime).add(1, "hour"); // Tính thời điểm 1 giờ sau syncTime

    // Kiểm tra nếu thời gian hiện tại nằm trong khoảng từ syncTime đến 1 giờ sau đó
    if (now.isAfter(dayjs(syncTime)) && now.isBefore(oneHourAfterSyncTime)) {
      return false; // Trả về false nếu thời gian hiện tại nằm trong khoảng 1 giờ sau syncTime
    }
    return true;
  }

  const items: TabsProps["items"] = [
    {
      key: "5",
      label: "Hóa đơn hợp lệ",
    },
    {
      key: "4",
      label: "Hóa đơn không hợp lệ",
    },
  ];

  const fetchData = async ({
    newState = {
      page: 1,
      nextStateValue: null,
    },
    typeBtn = null,
    date,
  }: {
    newState?: any;
    typeBtn?: null | "prev" | "next";
    date: any;
  }) => {
    try {
      setLoading(true);
      const checkExist = stateStack.find(
        (item: any) => item.page === newState.page
      );

      if (typeBtn === "next" && checkExist) {
        setPage((prev) => ({
          ...prev,
          current: prev.current + 1,
        }));
        setLoading(false);
        return;
      }

      setState((prev) => {
        return {
          ...prev,
          date,
        };
      });
      if (typeBtn === "prev") {
        const replaceStateStack = stateStack.findIndex(
          (item: any) => item.page === newState.page
        );

        setPage((prev) => ({
          ...prev,
          current: replaceStateStack + 1,
        }));
        setLoading(false);
        return;
      } else {
        const response = await getInvoices({
          type: type,
          date,
          ttxly: tab,
          taikhoanthue,
          state: newState.nextStateValue,
          typeInvoice: typeInvoice,
        });

        if (response?.status === 401) {
          setTaikhoanthue && setTaikhoanthue({});
          localStorage.removeItem("taikhoanthue");
          handleOpenNotification({
            type: "error",
            message: "Lỗi",
            description: response.message,
          });
          setLoading(false);
          return false;
        }

        const newResults = response?.datas;

        setTotalRecord(response?.total);

        setFileName(
          `HoaDonDauVao_${dayjs(date[0]).format("DD/MM/YYYY")}-${dayjs(
            date[1]
          ).format("DD/MM/YYYY")}`
        );

        if (newResults.length > 0 && newResults) {
          const newRes = newResults?.map((item: any, index: number) => ({
            key: stateStack.length * page.pageSize + index,
            thongTinNguoiBan: {
              mst: item?.nbmst,
              nbten: item?.nbten,
              nbdchi: item?.nbdchi,
            },
            id: item?.id,
            thongTinHoaDon: {
              thdon: item?.thdon,
              khmshdon: item?.khmshdon,
              khhdon: item?.khhdon,
              shdon: item?.shdon,
              ntao: dayjs(item?.tdlap).format("DD/MM/YYYY HH:mm:ss"),
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
            tthai: Math.floor(Math.random() * 8),
            thdon: item?.thdon,
            // khmshdon: item?.khmshdon,

            khmshdon: Math.floor(Math.random() * 10) + 1,

            khhdon: item?.khhdon,
            shdon: item?.shdon,
            ntao: dayjs(item?.tdlap).format("DD/MM/YYYY HH:mm:ss"),

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

            hthuc: Math.floor(Math.random() * 5) + 1,
            tthd: Math.floor(Math.random() * 2) + 1,
          }));

          setStateStack((prev: any) => {
            return [
              ...prev,
              {
                page: prev?.length + 1,
                data: newRes,
                nextStateValue: response?.state,
                currentStateValue: newState.nextStateValue,
                nextPage:
                  response?.state &&
                  (prev?.length + 1) * page.pageSize < response.total
                    ? prev?.length + 2
                    : null,
              },
            ];
          });

          setDataInvoices((prev: any) => [
            ...prev,
            {
              page: prev?.length + 1,
              data: newRes,
              nextStateValue: response?.state,
              currentStateValue: newState.nextStateValue,
              nextPage:
                response?.state &&
                (prev?.length + 1) * page.pageSize < response.total
                  ? prev?.length + 2
                  : null,
            },
          ]);
          setFilterData((prev: any) => [
            ...prev,
            {
              page: prev?.length + 1,
              data: newRes,
              nextStateValue: response?.state,
              currentStateValue: newState.nextStateValue,
              nextPage:
                response?.state &&
                (prev?.length + 1) * page.pageSize < response.total
                  ? prev?.length + 2
                  : null,
            },
          ]);
          setPage((prev) => ({
            ...prev,
            total: response.total,
            current: typeBtn === "next" ? prev.current + 1 : prev.current,
          }));
        } else {
          setDataInvoices([]);
          setFilterData([]);
          setPage((prev) => ({
            ...prev,
            total: response.total,
            current: typeBtn === "next" ? prev.current + 1 : prev.current,
          }));
        }
      }

      setRangeDate(date);

      setLoading(false);

      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra khi lấy dữ liệu",
      });
      return false;
    }
  };

  const handleFinish = async (values: any, callback: () => void) => {
    const { date } = values;

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

      // const syncTime = await LayTGDongboDLcuoi({
      //   madv: taikhoanthue?.mst,
      // });

      // if (syncTime) {
      //   const checkSyncTime = checkWithinOneHourFromSyncTime(syncTime);

      //   if (!checkSyncTime) {
      //     handleOpenNotification({
      //       type: "error",
      //       message: "Lỗi",
      //       description:
      //         "Dữ liệu đã được đồng bộ trong vòng 1 giờ, vui lòng thử lại sau",
      //     });
      //     return [];
      //   }
      // } else {
      //   handleOpenNotification({
      //     type: "error",
      //     message: "Lỗi",
      //     description: "Không thể lấy thời gian đồng bộ cuối cùng",
      //   });
      //   return [];
      // }

      const res = await fetchData({
        date,
        newState: {
          page: 1,
          value: null,
        },
      });

      if (res) {
        setLoading(false);
        handleOpenNotification({
          type: "success",
          message: "Thành công",
          description: "Đồng bộ dữ liệu thành công",
        });
      }

      return 10;
    } catch (error) {
      console.log(error);
      setLoading(false);

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
    setFilterData([]);
    setPage((prev) => ({ ...prev, total: 0 }));
    setRangeDate([]);
  };

  const handleChangePage = useCallback(
    (newState: string | null, type: "prev" | "next") => {
      fetchData({
        date: state.date,
        newState: newState,
        typeBtn: type,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state, page]
  );

  const handleSearch = useCallback(
    (
      value: string,
      filteredDataParam: any,
      isReset = false,
      isFilter = false
    ) => {
      const data = value
        ? filteredDataParam.filter((item: any) => {
            return (
              item?.shdon
                ?.toString()
                ?.toLowerCase()
                ?.includes(value.toLowerCase()?.trim()) ||
              item?.khmshdon
                ?.toString()
                ?.toLowerCase()
                ?.includes(value.toLowerCase()?.trim()) ||
              item?.thongTinNguoiBan?.nbten
                ?.toLowerCase()
                ?.includes(value.toLowerCase()?.trim()) ||
              item?.thongTinNguoiBan?.mst
                ?.toLowerCase()
                ?.includes(value.toLowerCase()?.trim())
            );
          })
        : filteredDataParam;

      const chunkSize: number = page.pageSize;
      const newRes: any[] = [];
      const totalChunks = Math.ceil(data.length / chunkSize);

      for (let i = 0; i < totalChunks; i++) {
        const chunk = data.slice(i * chunkSize, i * chunkSize + chunkSize);
        newRes.push({
          page: i + 1,
          data: chunk,
        });
      }

      setDataInvoices(newRes);

      if (isReset) {
        if (isEmpty(value)) {
          setPage((prev) => ({
            ...prev,
            total: totalRecord,
            current: 1,
          }));
        } else {
          setPage((prev) => ({
            ...prev,
            total: data.length,
            current: 1,
          }));
        }

        return;
      }

      if (isFilter) {
        if (isEmpty(value)) {
          setPage((prev) => ({
            ...prev,
            total: data.length,
            current: 1,
          }));
        } else {
          setPage((prev) => ({
            ...prev,
            total: data.length,
            current: 1,
          }));
        }

        return;
      }

      setPage((prev) => ({
        ...prev,
        total: isEmpty(value) && !isFiltered ? totalRecord : data.length,
        current: 1,
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterData, page, stateStack]
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
      if (!value || isEmpty(stateStack)) return;

      let newData: any = stateStack.flatMap((item: any) => item.data);
      if (date) {
        newData = newData.filter((item: any) => {
          const tdlapDate = dayjs(item.tdlap, "DD/MM/YYYY HH:mm:ss");
          return (
            tdlapDate.isSameOrAfter(date[0].startOf("day")) &&
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

      const chunkSize: number = page.pageSize;
      const newRes: any[] = [];
      const totalChunks = Math.ceil(newData.length / chunkSize);

      for (let i = 0; i < totalChunks; i++) {
        const chunk = newData.slice(i * chunkSize, i * chunkSize + chunkSize);
        newRes.push({
          page: i + 1,
          data: chunk,
        });
      }
      setIsFiltered(true);
      setFilterData(newRes);
      handleSearch(searchValue, newData, false, true);
    },
    [stateStack, searchValue, handleSearch, page.pageSize]
  );

  const handleResetFilter = () => {
    setFilterData(stateStack);
    setIsFiltered(false);
    handleSearch(
      searchValue,
      stateStack.flatMap((item: any) => item.data),
      true
    );
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
          Authorization: "Bearer " + taikhoanthue?.token,
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
      const response: any = await https({
        baseURL: `https://hoadondientu.gdt.gov.vn:30000/query/invoices/export-xml?nbmst=${data.thongTinNguoiBan?.mst}&khhdon=${data.khhdon}&shdon=${data.shdon}&khmshdon=1`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + taikhoanthue?.token,
        },
        responseType: "arraybuffer",
      });
      const blob = new Blob([response], { type: "application/zip" });
      const zip = new JSZip();
      zip.loadAsync(blob).then((zipFiles: any) => {
        zipFiles
          .file("invoice.html")
          .async("text")
          .then((content: string) => {
            const imageFiles = zipFiles.filter((relativePath: string) => {
              return (
                relativePath.toLowerCase().endsWith(".png") ||
                relativePath.toLowerCase().endsWith(".jpg") ||
                relativePath.toLowerCase().endsWith(".jpeg")
              );
            });
            const jsFiles = zipFiles.filter((relativePath: string) => {
              return relativePath.toLowerCase().endsWith(".js");
            });
            const imagePromises = imageFiles.map((imageFile: any) => {
              return imageFile.async("blob").then((blob: Blob) => {
                const blobUrl = URL.createObjectURL(blob);
                return { originalPath: imageFile.name, blobUrl };
              });
            });
            const jsPromises = jsFiles.map((jsFile: any) => {
              return jsFile.async("blob").then((blob: Blob) => {
                const blobUrl = URL.createObjectURL(blob);
                return { originalPath: jsFile.name, blobUrl };
              });
            });
            Promise.all([...imagePromises, ...jsPromises]).then((resources) => {
              resources.forEach(({ originalPath, blobUrl }) => {
                if (originalPath.toLowerCase().endsWith(".js")) {
                  content = content.replace(
                    "</body>",
                    `<script src="${blobUrl}"></script></body>`
                  );
                  content = content.replace(
                    `<script type="text/javascript" src="${originalPath}"></script>`,
                    ""
                  );
                } else {
                  content = content.replace(
                    new RegExp(originalPath, "g"),
                    blobUrl
                  );
                }
              });
              setOpenInvoiceModal(true);
              setTimeout(() => {
                const modalBody = document.getElementById("aloha");
                if (modalBody) {
                  const iframe = document.createElement("iframe");
                  iframe.style.width = "100%";
                  iframe.style.height = "1000px";
                  iframe.style.border = "none";
                  iframe.srcdoc = content;
                  modalBody.innerHTML = "";
                  modalBody.appendChild(iframe);
                  // setDataInvoice(data);
                } else {
                  console.error("Element with id 'aloha' not found");
                }
              }, 100);
            });
          });
      });

      setOpenInvoiceModal(true);
      setInvoiceDetail(data);
      handleOpenCheckInvoiceModal(data);
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

  const handleOpenCheckInvoiceModal = async (data: any) => {
    try {
      setIsLoadingCheckStatus(true);

      await Promise.all([
        getTrangThaiMST(data?.thongTinNguoiBan?.mst),
        getTrangThaiMST(data?.thongTinNguoiMua?.nmmst),
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
  };

  const handleExportExcel = useCallback(() => {
    const newData = filterData
      .flatMap((item: any) => item.data)
      .filter((item) => {
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
        "Tổng tiền": item?.tongThanhToan?.toString(),
        "Ngày cấp mã CQT": item?.ncnhat,
        "Hình thức HĐ": `${
          HTHDO_Options.find((ele) => ele.value === item?.hthuc)?.label
        }`,
        "Trạng thái MST người bán": TTMST_Options.find(
          (ele: any) => ele.value === item.tthai
        )?.label,
      };
    });

    templateDauVao({
      data: excelData,
      fileName,
    });
  }, [filterData, searchValue, fileName]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">{title}</h2>
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
        handleSearch={(value) =>
          handleSearch(
            value,
            filterData.flatMap((item: any) => item.data)
          )
        }
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
        loading={loading}
        dataInvoices={dataInvoices}
        placeholderSearchBox="MST, ký hiệu hđ, số hđ, tên người bán"
      />
      <TableHoaDon
        data={
          dataInvoices.length > 0
            ? dataInvoices.find((item: any) => item.page === page.current)?.data
            : []
        }
        loading={loading}
        handleChangePage={handleChangePage}
        currentPage={page.current}
        total={page.total}
        onRow={(record) => {
          return {
            onClick: () => {
              setOpenViewAction(true);
              setDataDetail(record);
              handleRowClick(record);
            },
          };
        }}
        rowClassName={rowClassName}
        state={state}
        stateStack={stateStack}
        initialData={stateStack.flatMap((item: any) => item.data)}
        currrentPage={page.current}
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
