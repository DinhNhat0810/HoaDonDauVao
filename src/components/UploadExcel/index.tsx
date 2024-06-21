import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
// import readXlsxFile from "read-excel-file";
import * as XLSX from "xlsx";

const extractUniqueValues = (data: any[]): any[] => {
  // Khởi tạo một tập hợp để lưu các phần tử duy nhất
  const result: any[] = [];

  // Duyệt qua từng mảng con trong mảng chính
  data.forEach((subarray) => {
    if (subarray.length > 0) {
      // Bỏ qua các mảng rỗng
      result.push(subarray[0]); // Thêm phần tử đầu tiên vào mảng kết quả
    }
  });

  return result;
};

const props: UploadProps = {
  name: "file",
  accept: ".xls,.xlsx",
  maxCount: 1,
  multiple: false,
  beforeUpload: () => false,
  showUploadList: false,
};

// function getObjectFromData(data: any) {
//   const result: any = {};

//   // Lấy tiêu đề cột từ hàng đầu tiên
//   const headers: any = data[0];

//   // Khởi tạo các mảng rỗng cho mỗi tiêu đề cột
//   headers.forEach((header: any) => {
//     result[header] = [];
//   });

//   // Tạo object với các cặp key-value
//   for (let i = 1; i < data.length; i++) {
//     const row = data[i];
//     console.log(row, i);

//     headers.forEach((header: any, index: any) => {
//       console.log(header, row[index]);

//       result[header].push(row[index]);
//       console.log(result);
//     });
//   }

//   return result;
// }

const UploadExcel = ({
  onSetDataExcelUpload,
}: {
  onSetDataExcelUpload: (data: any) => void;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (info: any) => {
    if (info.file.status !== "uploading" && info.fileList.length > 0) {
      if (
        info.file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        messageApi.open({
          type: "error",
          content: "Chỉ chấp nhận file Excel",
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData: any[][] = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          defval: "",
        });

        if (jsonData[0][0] !== "MTDTChieu") {
          messageApi.open({
            type: "error",
            content: "File không đúng định dạng",
          });
          return;
        }

        const uniqueValues = extractUniqueValues(jsonData.slice(1));
        messageApi.open({
          type: "success",
          content: `Tải file ${info.file.name} thành công!`,
        });
        onSetDataExcelUpload(uniqueValues);
      };
      reader.readAsArrayBuffer(info.file);
    }
  };

  return (
    <>
      {contextHolder}
      <Upload {...props} onChange={handleChange}>
        <Button icon={<UploadOutlined />}>Tải file </Button>
      </Upload>
    </>
  );
};

export default UploadExcel;
