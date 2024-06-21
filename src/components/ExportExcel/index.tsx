import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Button, ConfigProvider } from "antd";
import { isEmpty } from "lodash";

const ExcelExport = ({
  data,
  fileName,
  title,
}: {
  data: any;
  fileName: string;
  title: string;
}) => {
  const exportToExcel = () => {
    if (isEmpty(data)) return;

    const worksheet: any = XLSX.utils.json_to_sheet(data);

    worksheet["!cols"] = [
      {
        wch: 6,
      },
      {
        wch: 40,
      },
      { wch: 40 },
      { wch: 14 },
      { wch: 14 },
      { wch: 45 },
      { wch: 15 },
      { wch: 12 },
      { wch: 10 },
      { wch: 14 },
      { wch: 14 },
    ];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}.xlsx`);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
        },
      }}
    >
      <Button
        style={{
          backgroundColor: "#1ba466",
        }}
        type="primary"
        onClick={exportToExcel}
      >
        {title}
      </Button>
    </ConfigProvider>
  );
};

export default ExcelExport;
