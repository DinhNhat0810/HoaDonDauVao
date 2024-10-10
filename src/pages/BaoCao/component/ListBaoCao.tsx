import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ToolBar from "../../../components/ToolBar";
import TableBaoCao from "./Table";
import { AppContext } from "../../../contexts/app.context";
import {
  GetBangkehoadon,
  GetBaocaoDSHDRuiro,
  KiemtraTrangthaiMST,
} from "../../../services/baocao";
import dayjs from "dayjs";
import { isEmpty, set } from "lodash";
import { NotificationContext } from "../../../contexts/notification.context";

export default function ListBaoCao({
  title,
  loaiHD,
  baocaoHDRR = false,
}: {
  title: string;
  loaiHD: string;
  baocaoHDRR?: boolean;
}) {
  const { mst } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState<any>([]);
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState<any[]>([]);
  const [dataTable, setDataTable] = useState<any[]>([]);
  const { handleOpenNotification } = useContext(NotificationContext);

  const handleChange = (e: any) => {
    setSearchValue(e);
  };

  const fetchData = async (value: any) => {
    if (!value[0] || !value[1]) {
      return [];
    }

    if (value[0] > value[1]) {
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Ngày bắt đầu không được lớn hơn ngày kết thúc",
      });
      return;
    }

    const oneMonthAfterTungay = dayjs(value[0])
      .add(1, "month")
      .subtract(1, "day")
      .endOf("day");
    if (dayjs(value[1]).isAfter(oneMonthAfterTungay)) {
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: "Khoảng thời gian tìm kiếm không được vượt quá 1 tháng",
      });

      return;
    }

    if (mst && !isEmpty(value)) {
      setLoading(true);
      let res: any = [];
      if (baocaoHDRR) {
        res = await GetBaocaoDSHDRuiro();
      } else {
        res = await GetBangkehoadon({
          loaiHD: loaiHD,
          tungay: dayjs(value[0]).format("YYYY-MM-DD"),
          denngay: dayjs(value[1]).format("YYYY-MM-DD"),
          madv: mst,
        });
      }

      if (!isEmpty(res) && res.length > 0) {
        const listMST = Array.from(
          new Set(res.map((item: any) => item.mstnban))
        );

        const trangThaiPromises = listMST.map(async (item: any) => {
          const resTrangThai = await KiemtraTrangthaiMST({ madv: item });
          return {
            mst: item,
            trangthai: resTrangThai,
          };
        });

        const resolvedTrangThai = await Promise.all(trangThaiPromises);

        const trangThaiMap = new Map(
          resolvedTrangThai.map((item: any) => [item.mst, item.trangthai])
        );

        const newRes = res.map((item: any, index: number) => {
          return {
            ...item,
            key: index,
            ttnmuamst: trangThaiMap.get(item.mstnban),
            nky: dayjs(item.nky).format("DD/MM/YYYY"),
            kqKiemTra: {
              kq: trangThaiMap.get(item.mstnban) || "",
              HDRuiro:
                item?.HDRuiro === "0"
                  ? "Không có rủi ro về thuế"
                  : "Có rủi ro về thuế",
            },
            ntao: dayjs(item.ntao).format("DD/MM/YYYY"),
            ncnhat: dayjs(item.ncnhat).format("DD/MM/YYYY"),
            dshanghoa: !isEmpty(item?.dshanghoa)
              ? JSON.parse(item?.dshanghoa)
              : [],
          };
        });

        const displayedItems = newRes.slice(
          (page.current - 1) * 10,
          page.current * 10
        );
        setFilterData(newRes);
        setDataTable(displayedItems);
        setInitialData(newRes);
        setPage((prev) => ({ ...prev, total: newRes.length }));
      } else {
        setInitialData([]);
        setDataTable([]);
        setPage((prev) => ({ ...prev, total: 0 }));
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (baocaoHDRR) {
      fetchData([dayjs().startOf("month").toDate(), dayjs().toDate()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baocaoHDRR]);

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= Math.ceil(page.total / 10)) {
        setPage((prev) => ({ ...prev, current: newPage }));
        const displayedItems = initialData.slice(
          (newPage - 1) * 10,
          newPage * 10
        );
        setDataTable(displayedItems);
      }
    },
    [page.total, initialData]
  );

  console.log("initialData", initialData);

  //   const fetchData = async (value: any) => {
  //     if (mst) {
  //       setLoading(true);
  //       const res = await GetBangkehoadon({
  //         loaiHD: loaiHD,
  //         tungay: dayjs(value[0]).format("YYYY-MM-DD"),
  //         denngay: dayjs(value[1]).format("YYYY-MM-DD"),
  //         madv: mst,
  //       });

  //       if (!isEmpty(res) && res.length > 0) {
  //         try {
  //           const results = await Promise.all(
  //             res.map(async (item: any) => {
  //               const resTrangThai = await KiemtraTrangthaiMST({
  //                 madv: item.nmmst,
  //               });
  //               return {
  //                 ...item,
  //                 ttnmuamst: resTrangThai || "",
  //               };
  //             })
  //           );
  //           console.log(results);
  //           setInitialData(
  //             results.map((item: any, index: number) => ({
  //               ...item,
  //               key: index,
  //               nky: dayjs(item.nky).format("DD/MM/YYYY"),
  //               kqKiemTra: {
  //                 kq: item.ttnmuamst,
  //                 HDRuiro:
  //                   item?.HDRuiRo === "0"
  //                     ? "Không có rủi ro về thuế"
  //                     : "Có rủi ro về thuế",
  //               },
  //             }))
  //           );
  //         } catch (error) {
  //           setInitialData([]);
  //         }
  //       } else {
  //         setInitialData([]);
  //       }

  //       setLoading(false);
  //     }
  //   };

  const handleSearch = useCallback(
    (value: string) => {
      const data = initialData.filter((item: any) => {
        return (
          item.khhdon
            ?.toString()
            ?.toLowerCase()
            ?.includes(value.toLowerCase().trim()) ||
          item?.tenncc?.toLowerCase()?.includes(value.toLowerCase().trim()) ||
          item?.mstnban?.toLowerCase()?.includes(value.toLowerCase().trim())
        );
      });

      const totalItems = data.length;
      const totalPages = Math.ceil(totalItems / page.pageSize);
      let currentPage = page.current;
      // Kiểm tra và cập nhật trang hiện tại nếu cần thiết
      if (currentPage > totalPages) {
        currentPage = 1; // Quay về trang 1 nếu trang hiện tại vượt quá số trang
      }
      // Cập nhật dữ liệu và trang hiện tại
      if (totalItems <= page.pageSize) {
        setDataTable(data);
        setPage({ ...page, current: 1, total: totalItems });
      } else {
        setDataTable(data.slice(0, 10));
        setPage({ ...page, current: 1, total: totalItems });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialData, searchValue, page]
  );

  const excelData = useMemo(() => {
    return initialData.filter((item: any) => {
      return (
        item.khhdon
          ?.toString()
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase().trim()) ||
        item?.tenncc
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase().trim()) ||
        item?.mstnban?.toLowerCase()?.includes(searchValue.toLowerCase().trim())
      );
    });
  }, [initialData, searchValue]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ToolBar
        excelData={excelData}
        type={loaiHD === "1" || baocaoHDRR ? "buyin" : "sold"}
        showRangerPicker={true}
        showExportTemplateBtn={true}
        showFilter={false}
        showSyncBtn={false}
        showSearch={true}
        showExportBtn={false}
        dataInvoices={dataTable}
        onChangeRange={fetchData}
        handleSearch={handleSearch}
        placeholderSearchBox="Tên NCC, mst, ký hiệu"
        handleChange={handleChange}
        searchValue={searchValue}
        disableRange={loading}
      />
      <TableBaoCao
        loading={loading}
        data={dataTable}
        handlePageChange={handlePageChange}
        total={page.total}
        currentPage={page.current}
      />
    </div>
  );
}
