import { Tabs, TabsProps } from "antd";
import { useContext } from "react";
import https from "../../libs/https";
import { AppContext } from "../../contexts/app.context";
import { NotificationContext } from "../../contexts/notification.context";

import JSZip from "jszip";

import HDMTT from "./components/HDMTT";
import HDDT from "./components/HDDT";
import { convertXmlToJson } from "../../libs/common";

type DownloadHoaDonType = {
  nbmst: string;
  khhdon: string;
  shdon: string;
  khmshdon: string;
};

const ListData = ({ fields, width }: { fields: any[]; width?: string }) => {
  return (
    <div
      style={{
        width: width || "100%",
      }}
    >
      {fields?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              marginBottom: "8px",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                width: item?.labelWidth || "40%",
                fontWeight: "600",
                marginRight: "8px",
              }}
            >
              {item?.label}:
            </p>
            <p
              style={{
                flex: 1,
              }}
            >
              {item?.value[item?.field]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const HoaDon = () => {
  const { token } = useContext(AppContext);
  const { handleOpenNotification } = useContext(NotificationContext);

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewInvoice = async (values: DownloadHoaDonType) => {
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
                } else {
                  content = content.replace(
                    new RegExp(originalPath, "g"),
                    blobUrl
                  );
                }
              });

              // Display the modified HTML content in the popup window
              const popupWindow = window.open(
                "",
                "_blank",
                "width=1000,height=600"
              );
              if (popupWindow) {
                popupWindow.document.open();
                popupWindow.document.write(content);
                popupWindow.document.close();
              }
            });
          });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Hóa đơn điện tử",
      children: (
        <HDDT
          ListData={ListData}
          handleDownload={handleDownload}
          handleViewInvoice={handleViewInvoice}
          token={token}
          handleOpenNotification={handleOpenNotification}
        />
      ),
    },
    {
      key: "2",
      label: "Hóa đơn máy tính tiền",
      children: (
        <HDMTT
          ListData={ListData}
          handleDownload={handleDownload}
          token={token}
          handleOpenNotification={handleOpenNotification}
        />
      ),
    },
  ];

  return (
    <div className="hoadon">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // padding: "16px",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          style={{
            flex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default HoaDon;
