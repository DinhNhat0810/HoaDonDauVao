import { useCallback, useContext, useEffect, useState } from "react";
import ToolBar from "../../../components/ToolBar";
import {
  templateDanhMucKhachHang,
  templateDanhMucNCC,
} from "../../../libs/common/excel-template";
import TableDanhMuc from "./Table";
import { isEmpty } from "lodash";
import { GetDanhMuc } from "../../../services/danhmuc";
import dayjs from "dayjs";
import { AppContext } from "../../../contexts/app.context";

export default function ListDanhMuc({
  fileName,
  loaiHD = "1",
}: {
  fileName: string;
  loaiHD: string;
}) {
  const [initData, setInitData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const { mst } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    if (mst) {
      setLoading(true);
      const res = await GetDanhMuc({
        loaiHD: loaiHD,
        madv: mst,
      });

      if (!isEmpty(res) && res?.length > 0) {
        const newRes = res.map((item: any, index: number) => ({
          ...item,
          key: index,
          thongTinNCC: {
            mstnban: item?.mstnban,
            nbten: item?.nbten,
          },
          thongTinKhachHang: {
            mstnban: item?.nmmst,
            nmten: item?.nmten,
          },
          nbdchi: item?.nbdchi,
          nmdchi: item?.nmdchi,
          ngayKiemTra: dayjs().format("DD/MM/YYYY"),
          HDRuiRo:
            item?.HDRuiRo === "0"
              ? "Không có rủi ro về thuế"
              : "Có rủi ro về thuế",
        }));

        setInitData(newRes);
        setDataTable(newRes);
      } else {
        setInitData([]);
        setDataTable([]);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: any) => {
    setSearchValue(e);
  };

  const handleSearch = useCallback(
    (value: string) => {
      if (!isEmpty(value) && !isEmpty(initData)) {
        const dataSearch = initData.filter((item: any) => {
          return (
            item?.thongTinNCC?.nbten
              ?.toLowerCase()
              .includes(value.toLowerCase().trim()) ||
            item?.nbdchi?.toLowerCase().includes(value.toLowerCase().trim())
          );
        });

        setDataTable(dataSearch);
      } else {
        setDataTable(initData);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue]
  );

  const handleExportExcel = useCallback(() => {
    if (loading) {
      return;
    }

    const excelData = dataTable?.map((item: any, index: number) => {
      return {
        STT: (index + 1).toString(),
        [loaiHD === "1" ? "Tên nhà cung cấp" : "Tên khách hàng"]:
          loaiHD === "1"
            ? item?.thongTinNCC?.nbten
            : item?.thongTinKhachHang?.nmten,
        "Địa chỉ": loaiHD === "1" ? item?.nbdchi : item?.nmdchi,
        "SL hoá đơn đầu vào": item?.SLHDDauvao?.toString(),
        "SL hoá đơn đầu ra": item?.SLHDDaura?.toString(),
        "Ngày kiểm tra": item?.ngayKiemTra,
        "Kết quả kiểm tra": item?.HDRuiRo,
        "Tình trạng hoạt động": item?.Trangthai,
      };
    });

    if (loaiHD === "1") {
      templateDanhMucNCC({
        data: excelData,
        fileName,
      });
    } else {
      templateDanhMucKhachHang({
        data: excelData,
        fileName,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTable, fileName, loaiHD]);

  return (
    <div>
      <ToolBar
        showSyncBtn={false}
        showFilter={false}
        dataInvoices={dataTable}
        handleSearch={handleSearch}
        handleChange={handleChange}
        searchValue={searchValue}
        handleExportExcel={handleExportExcel}
      />
      <TableDanhMuc loading={loading} data={dataTable} loaiHD={loaiHD} />
    </div>
  );
}
