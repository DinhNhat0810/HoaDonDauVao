import { useEffect } from "react";
import ToolBar from "../../../components/ToolBar";
import ListBaoCao from "../component/ListBaoCao";
import TableBaoCao from "../component/Table";
import { convertXmlToJson } from "../../../libs/common";
import JSZip from "jszip";

import https from "../../../libs/https";

export default function KXBKMV() {
  // useEffect(() => {
  //   const handleGetDataChild = async () => {
  //     try {
  //       const response: any = await https({
  //         baseURL: `https://hoadondientu.gdt.gov.vn:30000/query/invoices/export-xml?nbmst=0103930279-999&khhdon=C24TGH&shdon=184&khmshdon=1`,
  //         method: "get",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer " +
  //             "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTAzOTMwMjc5LTk5OSIsInR5cGUiOjIsImV4cCI6MTcyODM4Nzg0NCwiaWF0IjoxNzI4MzAxNDQ0fQ.w-ZpHGPmfYu4Ao8Xi9d6ESHWabLB35HYuDsOOGSzGgY3sEiKqn0H3xKgitEsKQJHyUUPhOS_iCuktajzZFJmaw",
  //         },
  //         responseType: "arraybuffer",
  //       });

  //       const blob = new Blob([response], { type: "application/zip" });

  //       const zip = new JSZip();
  //       zip.loadAsync(blob).then((zipFiles: any) => {
  //         zipFiles
  //           .file("invoice.xml")
  //           .async("text")
  //           .then((content: any) => {
  //             const dataJson: any = convertXmlToJson(content);

  //             const newData =
  //               dataJson["HDon"]["DLHDon"]["NDHDon"]["DSHHDVu"]["HHDVu"];

  //             console.log(newData);
  //           });
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   handleGetDataChild();

  //   return () => {};
  // }, []);

  return <ListBaoCao title="Kết xuất bảng kê mua vào" loaiHD="1" />;
}
