import { Modal, Tabs, TabsProps } from "antd";
import { useContext, useRef, useState } from "react";
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
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const modalBodyRef = useRef(null);

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
              // const popupWindow = window.open(
              //   "",
              //   "_blank",
              //   "width=1000,height=600"
              // );

              // if (popupWindow) {
              //   // Append the button HTML to the content
              //   popupWindow.document.open();
              //   popupWindow.document.write(content);
              //   popupWindow.document.close();
              // }

              setOpenInvoiceModal(true);

              setTimeout(() => {
                const modalBody = document.getElementById("aloha");
                if (modalBody) {
                  // Tạo một iframe và đặt nội dung HTML vào đó
                  const iframe = document.createElement("iframe");
                  iframe.style.width = "100%";
                  iframe.style.height = "800px";
                  iframe.style.border = "none";
                  iframe.srcdoc = content; // srcdoc chứa nội dung HTML
                  modalBody.innerHTML = ""; // Xóa nội dung cũ
                  modalBody.appendChild(iframe); // Thêm iframe vào modalBody
                } else {
                  console.error("Element with id 'aloha' not found");
                }
              }, 100);
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

  const handleCancel = () => {
    setOpenInvoiceModal(false);
  };

  return (
    <div className="hoadon">
      <Modal
        width={1200}
        open={openInvoiceModal}
        onCancel={() => setOpenInvoiceModal(false)}
      >
        <div id="aloha" ref={modalBodyRef}></div>
      </Modal>
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
