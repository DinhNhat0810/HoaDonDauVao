import { ConfigProvider, Modal, Tabs, TabsProps } from "antd";
import { COLORS, TRANG_THAI_HOA_DON } from "../../../libs/constants";
import ToolBar from "../../../components/ToolBar";
import TableHoaDon from "../components/Table";
import { useCallback, useContext, useRef, useState } from "react";
import { NotificationContext } from "../../../contexts/notification.context";
import dayjs from "dayjs";
import https from "../../../libs/https";
import {
  convertCksNguoiBan,
  convertToVnd,
  convertXmlToJson,
} from "../../../libs/common";
import { AppContext } from "../../../contexts/app.context";
import JSZip from "jszip";
import { isEmpty, set } from "lodash";
import CheckInvoiceModal from "../../../components/CustomModal/CheckInvoiceModal";
import useDebounce from "../../../hooks/useDebounce";

type DownloadHoaDonType = {
  nbmst: string;
  khhdon: string;
  shdon: string;
  khmshdon: string;
};

export default function HoaDonDauVao() {
  const [dataInvoices, setDataInvoices] = useState<any[]>([]);
  const [initialData, setInitialData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
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
  const modalBodyRef = useRef(null);
  const [invoiceDetail, setInvoiceDetail] = useState<any>(null);
  const [openCheckInvoiceModal, setOpenCheckInvoiceModal] = useState(false);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");

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

    setLoading(true);
    try {
      if (!date[0] || !date[1]) {
        return;
      }

      if (date[0] > date[1]) {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Ngày bắt đầu không được lớn hơn ngày kết thúc",
        });
        return;
      }

      const oneMonthAfterTungay = dayjs(date[0])
        .add(1, "month")
        .subtract(1, "day")
        .endOf("day");
      if (dayjs(date[1]).isAfter(oneMonthAfterTungay)) {
        setLoading(false);
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Khoảng thời gian tìm kiếm không được vượt quá 1 tháng",
        });

        return;
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
        `${dayjs(date[0]).format("DD/MM/YYYY")}-${dayjs(date[1]).format(
          "DD/MM/YYYY"
        )}`
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
          tthai: Math.floor(Math.random() * 5) + 1,
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

        console.log(newRes);

        const displayedItems = newRes.slice(
          (page.current - 1) * 10,
          page.current * 10
        );

        setInitialData(newRes);
        setDataInvoices(displayedItems);
        setFilterData(newRes);
        setPage((prev) => ({ ...prev, total: response.datas.length }));

        // const payload = response.datas?.map((item: any) => ({
        //   nbmst: item?.nbmst,
        //   khmshdon: item?.khmshdon,
        //   khhdon: item?.khhdon,
        //   shdon: item?.shdon,
        //   hthdon: item?.hthdon,
        //   khhdgoc: item?.khhdgoc,
        //   khmshdgoc: item?.khmshdgoc,
        //   mhdon: item?.mhdon,
        //   mtdtchieu: item?.mtdtchieu,
        //   nbdchi: item?.nbdchi,
        //   nbten: item?.nbten,
        //   ncma: item?.ncma,
        //   ncnhat: item?.ncnhat,
        //   ngcnhat: item?.ngcnhat,
        //   nky: item?.nky,
        //   nmdchi: item?.nmdchi,
        //   nmmst: item?.nmmst,
        //   nmten: item?.nmten,
        //   shdgoc: item?.shdgoc,
        //   tchat: item?.tchat,
        //   tdlap: item?.tdlap,
        //   tgtcthue: item?.tgtcthue,
        //   tgtthue: item?.tgtthue,
        //   tgtttbchu: item?.tgtttbchu,
        //   tgtttbso: item?.tgtttbso,
        //   thdon: item?.thdon,
        //   thttlphi: item?.thttlphi,
        //   thttltsuat: item?.thttltsuat,
        //   ttcktmai: item?.ttcktmai,
        //   tthai: item?.tthai,
        //   ttxly: item?.ttxly,
        //   nbcks: item?.nbcks,
        //   tdlhdgoc: item?.tdlhdgoc,
        //   thtttoan: item?.thtttoan,
        //   msttcgp: item?.msttcgp,
        //   cqtcks: item?.cqtcks,
        // }));
        // console.log(payload);
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
      setLoading(false);
      handleOpenNotification({
        type: "success",
        message: "Thành công",
        description: "Đồng bộ dữ liệu thành công",
      });
    } catch (error) {
      console.log(error);

      setLoading(false);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Có lỗi xảy ra, vui lòng thử lại sau",
      });
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
            console.log(
              item.thongTinNguoiBan?.mst
                ?.toLowerCase()
                ?.includes(value.toLowerCase())
            );

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
    (value: string, type: any) => {
      if (!value) return;

      const updatedFilter: any = {
        tthai: "",
        tthd: "",
        hthuc: "",
      };

      const newData = initialData.filter((item) => {
        if (value === "0") return true;

        const typeToPropMap: any = {
          hthuc: "hthuc",
          tthai: "tthai",
          tthd: "tthd",
        };

        const propName: any = typeToPropMap[type];
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
  };

  const handleDownload = async (values: DownloadHoaDonType) => {
    try {
      setLoading(true);
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

      setLoading(false);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "HoaDon.zip");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleViewInvoice = async (values: DownloadHoaDonType, data: any) => {
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

      // const blob = new Blob([response], { type: "application/zip" });

      // const zip = new JSZip();

      // zip.loadAsync(blob).then((zipFiles: any) => {
      //   zipFiles
      //     .file("invoice.html")
      //     .async("text")
      //     .then((content: string) => {
      //       const imageFiles = zipFiles.filter((relativePath: string) => {
      //         return (
      //           relativePath.toLowerCase().endsWith(".png") ||
      //           relativePath.toLowerCase().endsWith(".jpg") ||
      //           relativePath.toLowerCase().endsWith(".jpeg")
      //         );
      //       });

      //       const jsFiles = zipFiles.filter((relativePath: string) => {
      //         return relativePath.toLowerCase().endsWith(".js");
      //       });

      //       const imagePromises = imageFiles.map((imageFile: any) => {
      //         return imageFile.async("blob").then((blob: Blob) => {
      //           const blobUrl = URL.createObjectURL(blob);
      //           return { originalPath: imageFile.name, blobUrl };
      //         });
      //       });

      //       const jsPromises = jsFiles.map((jsFile: any) => {
      //         return jsFile.async("blob").then((blob: Blob) => {
      //           const blobUrl = URL.createObjectURL(blob);
      //           return { originalPath: jsFile.name, blobUrl };
      //         });
      //       });

      //       Promise.all([...imagePromises, ...jsPromises]).then((resources) => {
      //         resources.forEach(({ originalPath, blobUrl }) => {
      //           if (originalPath.toLowerCase().endsWith(".js")) {
      //             content = content.replace(
      //               "</body>",
      //               `<script src="${blobUrl}"></script></body>`
      //             );
      //             content = content.replace(
      //               `<script type="text/javascript" src="${originalPath}"></script>`,
      //               ""
      //             );
      //           } else {
      //             content = content.replace(
      //               new RegExp(originalPath, "g"),
      //               blobUrl
      //             );
      //           }
      //         });

      //         setOpenInvoiceModal(true);

      //         setTimeout(() => {
      //           const modalBody = document.getElementById("aloha");
      //           if (modalBody) {
      //             const iframe = document.createElement("iframe");
      //             iframe.style.width = "98%";
      //             iframe.style.height = "800px";
      //             iframe.style.border = "none";
      //             iframe.srcdoc = content;
      //             modalBody.innerHTML = "";
      //             modalBody.appendChild(iframe);
      //             setInvoiceDetail(data);
      //           } else {
      //             console.error("Element with id 'aloha' not found");
      //           }
      //         }, 100);
      //       });
      //     });
      // });
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
        return TRANG_THAI_HOA_DON[DocumentElement.TRANG_THAI];
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
      setLoading(true);

      await Promise.all([
        getTrangThaiMST(invoiceDetail.thongTinNguoiBan?.mst),
        getTrangThaiMST(invoiceDetail.thongTinNguoiMua?.nmmst),
      ]).then((responses: any) => {
        setInvoiceDetail((prev: any) => {
          return {
            ...prev,
            thongTinNguoiBan: {
              ...prev.thongTinNguoiBan,
              trangThai: responses[0],
            },
            thongTinNguoiMua: {
              ...prev.thongTinNguoiMua,
              trangThai: responses[1],
            },
          };
        });
      });

      setLoading(false);
      setOpenCheckInvoiceModal(true);
    } catch (error) {
      console.log(error);
    }
  };

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
        handleFinish={handleFinish}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        handleChange={handleChange}
        searchValue={searchValue}
        handleResetFilter={handleResetFilter}
      />
      <TableHoaDon
        data={dataInvoices}
        loading={loading}
        handlePageChange={handlePageChange}
        currentPage={page.current}
        total={page.total}
        handleDownload={handleDownload}
        handleViewInvoice={handleViewInvoice}
      />

      <Modal
        width={1200}
        open={openInvoiceModal}
        onCancel={handleCloseInvoiceModal}
        footer={null}
      >
        <div id="aloha" ref={modalBodyRef}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#ed9b2d",
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              marginTop: "16px",
              outline: "none",
            }}
            onClick={handleOpenCheckInvoiceModal}
          >
            Kiểm tra thông tin hóa đơn
          </button>
        </div>
      </Modal>

      <CheckInvoiceModal
        open={openCheckInvoiceModal}
        handleCancel={() => setOpenCheckInvoiceModal(false)}
        data={invoiceDetail}
      />
    </div>
  );
}
